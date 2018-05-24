grammar YmlToBdl;

//Lexer part 

//Keywords

INTERFACE : 'interface';
IMPLEMENTATION : 'implementation';
EXTENDS : 'extends';
FUNCTION : 'function';
METHOD : 'method';
TEXT_METHOD: 'textMethod';
FIELD : 'field';
CLASSPROPERTIES: 'classProperties';
EXTERN : 'extern';
COMPLETE : 'complete';
SYNONYM : 'synonym';
OVERRIDE: 'override';
ARGS: 'args';
IF_EXPR: 'ifExpr';
THEN: 'then';
ELSE: 'else';

//Symbols

SEMICOLON : ';';
COMMA : ',';
COLON : ':';
DOT : '.';
MULTIVALUED_EXPRESSION : '>>';
FIELD_INTRO : '-->';
REPLACE_FIELD_VALUE_INTRO : '==>';
REMOVE_FIELD: '---';
ADD_FIELD: '+++';
INLINE_DECL_INTRO : '->';

//Comparison operator
EQUAL_COMP : '==';
NOT_EQUALS : '!=';
LESS_OR_EQUAL : '<=';
GREATE_OR_EQUAL : '>=';
STRICT_LESS : '<';
STRICT_GREAT : '>';

//Condition combination
COND_AND : '&&';
COND_OR : '||';

//Affectation operator
EQUAL_AFFECT : '=';
OPEN_PAR : '(';
CLOSE_PAR : ')';
OPEN_BRACKET : '[';
CLOSE_BRACKET : ']';
OPEN_BRACE : '{';
CLOSE_BRACE : '}';
SINGLE_QUOTE : '\'';
BACKSLASH : '\\';
QUESTION_MARK : '?';
AT : '@';

OPEN_GRANULE : BACKSLASH OPEN_PAR;
CLOSE_GRANULE : BACKSLASH CLOSE_PAR;

fragment MINUS : '-';
fragment PLUS : '+';
fragment DIVIDE : '/';
fragment TIMES : '*';

OPERATOR : MINUS
         | PLUS
         | DIVIDE
         | TIMES;

fragment NUMBER : [0-9];
fragment LETTER :  [a-zA-Z_']
                | '\u4e00'..'\u9faf'
                | '\u3040'..'\u309f'
                | '\u30a0'..'\u30ff';
// | '\uff00'..'\uffef' | 'À'|'Á'|'Â'|'Ã'|'Ä'|'Å'|'Æ'|'Ç'|'È'|'É'|'Ê'|'Ë'|'Ì'|'Í'|'Î'|'Ï'|'Ð'|'Ñ'|'Ò'|'Ó'|'Ô'|'Õ'|'Ö'|'Ù'|'Ú'|'Û'|'Ü'|'Ý';

fragment ALPHANUM : LETTER
                  | [0-9];
fragment D_LETTER : 'd';

DATE :  SINGLE_QUOTE D_LETTER COLON NUMBER NUMBER NUMBER NUMBER MINUS NUMBER NUMBER MINUS NUMBER NUMBER SINGLE_QUOTE;



//Block and Identifiers


//Impossible d'échapper " via \" avec cette règle
//Et string multiligne acceptée

//Sont acceptés avec un \ terminateur en fin de ligne,
//donc la grammaire ne doit pas les accepter
fragment ESCAPED_QUOTE : '\\"';
STRING:   '"' ( ESCAPED_QUOTE | ~('\n'|'\r') )*? '"';
fragment TRIPLE_QUOTE: '"""';
DOCUMENTATION: TRIPLE_QUOTE (.*?) TRIPLE_QUOTE;

WS : [ \r\t\n]+ -> channel(HIDDEN);

//STRING : '"' [~"]* '"';


//Les : sont autorisés au milieu d'un nom
//0-9 a-z A-Z : _
//Ajouter les accents (voir fichier character.c dans les sources de l'engine


DOUBLE : MINUS? NUMBER+ (DOT NUMBER+)?;
INTEGER : NUMBER+;
ENUM : 'enum';


//Vérifier adéquation avec les terminaux définis par Olivier
ID : LETTER ALPHANUM* ;

//We store the whitespace in hidden channel to take back the ones around comments

fragment MULTILINE_COMMENT_START: '/*';
fragment MULTILINE_COMMENT_END: '*/';

LINE_COMMENT : '//' ~[\n\r]* ;
MULTILINE_COMMENT: MULTILINE_COMMENT_START .*? MULTILINE_COMMENT_END;
GRANULE: OPEN_GRANULE (.)*? CLOSE_GRANULE EOF?;
PREPROCESSING: '@' ~[\n\r]* ;

expressionMarker : DOT
                 | MULTIVALUED_EXPRESSION;
commentElement : WS? (LINE_COMMENT | MULTILINE_COMMENT) WS? ;

preprocessingElement : WS? PREPROCESSING WS?;

comment :  commentElement  ;

commentBlock: (comment | preprocessingElement)+;


freeText : .+? (~EOF)*? ;

//Parser rules

ymlId : ID (COLON? COLON ID)*;
//Les : ne sont pas interprétés par l'engine de manière particulière

kaoFile : entities=ymlEntity* finalFreeText=freeText? EOF;
yclassFile : classDeclaration restFreeText=freeText? EOF?;

ymlEntity: classDeclaration
            | staticDeclaration
            | complete
            | methodDeclaration SEMICOLON
            | yenum;

yenum: ENUM yid=ymlId OPEN_BRACE (enumElement (beforeCommaComment=commentBlock? COMMA enumElement)*)+ beforeCloseBraceComment=commentBlock? CLOSE_BRACE fields=field* SEMICOLON;
enumElement : yid=ymlId fields=field* ;

//Field and options
classDeclaration : beforeInterfaceComment=commentBlock? classDeclarationIntro classOption=field* memberDeclaration* methodDeclaration* beforeClassPropertyComment=commentBlock? classPropertiesBlock? endInterfaceComment=commentBlock? SEMICOLON intermediateFreeText=freeText*? classImplementation SEMICOLON EOF?;

classImplementation : preImplementationComment=commentBlock? IMPLEMENTATION className=ymlId overrideBlock=override? attributes=field* preEndSemiColonComment=commentBlock?;

override: OVERRIDE OPEN_BRACE freeText? CLOSE_BRACE;

//We can only keep one parent domain currently. Multiple inherintance links will be available in further versions
classDeclarationIntro : INTERFACE className=ymlId (extendsBlock)?;

extendsBlock : EXTENDS parentClassName  (COMMA parentClassName)*;

parentClassName : ymlId;

memberType : ymlId | FIELD;
synonym: SYNONYM listWithBrace
        | SYNONYM OPEN_PAR (synonymElements+=value (COMMA synonymElements+=value)* )? CLOSE_PAR;

//Question a Alain, est ce qu'on peut avoir autre chose qu'un 'field' comme memberType ?
memberDeclaration : commentBlock? memberType memberName=ymlId memberOption=field*;
path: ymlId (DOT ymlId)+?;
ymlIdOrPath: ymlId | path;

field : commentBlock? fieldArrow=(FIELD_INTRO | REPLACE_FIELD_VALUE_INTRO | REMOVE_FIELD | ADD_FIELD) optionName=ymlIdOrPath (optionValues+=valueOrCondition (COMMA optionValues+=valueOrCondition)*?)? ;

classPropertiesBlock : CLASSPROPERTIES classOption=field* ;

documentation: DOCUMENTATION;
valueOrCondition : combinedComparison | value | hashMapKeyValue | documentation;

hashMapKeyValue: nonArithmeticValue COLON hashMapValue;
hashMapValue: value | combinedComparison;

value :  granule
        | inlineDeclaration
        | nonArithmeticValue
        | arithmeticExpression
        | synonym
        | ifExprBlock;

ifExprBlock: IF_EXPR OPEN_PAR combinedComparison CLOSE_PAR THEN thenValue=value ELSE elseValue=value;

nonArithmeticValue : list
                    | listWithBrace
                    | chainedCall
                    | (DOUBLE | STRING | DATE);

instanciationVariable : QUESTION_MARK ymlId;

expression :  ymlId
            | functionCall
            | instanciationVariable ;

functionCall : ymlId OPEN_PAR (functionArgument (COMMA functionArgument)* )? CLOSE_PAR;

functionArgument : (argKey=ID COLON)? value;

chainedCall : expression (marker=expressionMarker expression)*;

inlineDeclaration : commentBlock? INLINE_DECL_INTRO className=ymlId (instanceName=ymlId)? (fieldValue)* SEMICOLON;

inlineOperation : leftExpression=value operator=ymlId rightExpression=value;

fieldValue : field
            | granule;

//Functions

methodDeclaration : commentBlock? methodIntro memberOption=field* ;

// accept structures like
/*
	method aggregateTree
		args {
			Symbol 				aggMode
			--> key 			_AGGREGATION_MODE
			--> implicitKey 	true
			--> defaultValue 	AGGREGATION_SUM
	}
	--> domains Void
*/
methodIntro : (METHOD|FUNCTION|TEXT_METHOD) ymlId ( ARGS OPEN_BRACE variableBlockContent CLOSE_BRACE  |  OPEN_PAR argumentList CLOSE_PAR );

argumentList : mandatoryArgs? optionalArgs?;

mandatoryArgs : mandatoryArgDecl (COMMA mandatoryArgDecl)*;

mandatoryArgDecl : argType=ymlId argName=ymlId argOptionList?;

optionalArgs : COMMA? OPEN_BRACE optionalArguments+=optionalArgDecl (COMMA optionalArguments+=optionalArgDecl)* CLOSE_BRACE argSetName=ymlId?;

optionalArgDecl : ( OPEN_BRACKET optionalKeyName=ymlId CLOSE_BRACKET | mandatoryKeyName=ymlId ) COLON argType=ymlId argName=ymlId? argOptionList?;

argOptionList : OPEN_BRACE  arguments+=argOptionBlock (COMMA arguments+=argOptionBlock)* CLOSE_BRACE;

argOptionBlock : argOption=ymlId optionValue=value?;

order1Block : instanciationCondition conditionBlock?;

instanciationCondition : inlineOperation;

forEachInstanciation : variable=value COMMA iteratedItem=value;

order1FullCondition : conditionBlock? order1Block* ;

closedOrder1FullCondition : order1FullCondition EOF;


//Comparisons
combinedComparison : OPEN_PAR combinedComparison CLOSE_PAR
                   | leftCondition=combinedComparison COND_AND rightCondition=combinedComparison
                   | leftCondition=combinedComparison COND_OR rightCondition=combinedComparison
                   | comparison;

comparison: leftValue=value comparisonOperator rightValue=value;

comparisonOperator : EQUAL_COMP
                    | NOT_EQUALS
                    | LESS_OR_EQUAL
                    | GREATE_OR_EQUAL
                    | STRICT_LESS
                    | STRICT_GREAT;

affectation : leftHand=value EQUAL_AFFECT rightHand=value SEMICOLON;

conditionBlock : order0Condition+;

order0Condition : combinedComparison
                | existentialOperator;

action : chainedCall SEMICOLON
        | affectation;

actionBlock : OPEN_BRACE? action+ CLOSE_BRACE?;

compoundBlock : conditionBlock
                | actionBlock;

arithmeticExpression : OPEN_PAR parenthizedExpression=arithmeticExpression CLOSE_PAR
                     | leftExpression=arithmeticExpression infixedOperator=OPERATOR rightExpression=arithmeticExpression
                     | prefixedOperator=OPERATOR arithmeticExpression
                     | nonArithmeticValue;


existentialOperator : operator=ymlId OPEN_PAR order1FullCondition CLOSE_PAR;

//Variable and argument blocks


variableBlock : ymlId OPEN_BRACE variableBlockContent CLOSE_BRACE;

variableBlockWithEOF : ymlId OPEN_BRACE variableBlockContent CLOSE_BRACE EOF;

variableBlockContent : memberDeclaration* ;


variableBlockContentWithEOF : memberDeclaration* EOF ;

//existentialOperator : operator=ymlId OPEN_PAR conditionBlock? order1Block* CLOSE_PAR;

// ************** STATIC DECLARATIONS
staticDeclarationsFile: staticDeclaration* freeText* EOF;
staticDeclaration : commentBlock? declarationType=ymlId declarationName=ymlId (EXTENDS extended=ymlId)? declarationOptions=field* SEMICOLON;


/*
YBS consulte les extern et dans dans un fichier spécifique "publicFunctions.yml" découpé en 2 parties :
            en amont les extern (avec leur textualisation, donc le champ –> dsl), en aval les corps des fonctions
*/

// ************** EXTERN FUNCTIONS
externalFunctionsFile: externDeclaration* freeText* EOF;
externDeclaration : commentBlock? EXTERN methodDeclaration SEMICOLON;

// ************** EXTERN DIALOG ZONES
externalDialogZoneFile: externDialogZone* freeText* EOF;
externDialogZone : commentBlock? EXTERN memberDeclaration SEMICOLON;

// DATA STRUCTURE
list: OPEN_BRACKET elements+=value? (COMMA elements+=value)* CLOSE_BRACKET;
listWithBrace: OPEN_BRACE elements+=value? (COMMA elements+=value)* CLOSE_BRACE;

granule : GRANULE;

complete: commentBlock? COMPLETE completedElemId=ymlId memberOption=field* SEMICOLON;