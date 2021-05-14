parser grammar YmlParser;

options
{
    tokenVocab=YmlLexer;
}

/*
 * Parser rules
 */
// Base rule when parsing a file. Basically, this describes all valid YML files.
// TODO: add a rule for the `project.kao`-like files.
declarationFile: FILETYPE FILE_DECLARATION*? EOF?;

kaoFile: (entities=ymlEntity* | declarationFile) EOF;

ymlEntity:
    classDeclaration
    | staticDeclaration
    | classComplete
    | objectComplete
    | ymlrule
    | yenum
    | function
    | externDeclaration
    | instruction_rename
;
/**
    Expression marker can be a dot `.` or `>>`.
    Double dot `..` is for static function call like in `Date..stringtoDate("2012-05-10")`.
 */
expressionMarker: DOT DOT | DOT | MULTIVALUED_EXPRESSION;
instruction_rename: RENAME ymlId TO ymlId FOR_CLASS ymlId;
ymlId: otherTokens | YMLID;

otherTokens:
    ARGS
    | LOCAL
    | RETURN
    | FUNCTION_AS_TYPE
    | TEXT_FUNCTION
    | IMPLEMENTATION
    | OPERATION_APPLY_COLLECTION_ON
    | CASE
    | RENAME
    | TO
    | FOR_CLASS
    | MOD
    | AS
    | RULESET
    | RULE_TYPE
    | ATTRIBUTES
    | EXTENDS
    | TIME_COUNTER
    | STATIC
    | CONDITION
    | EXISTS
    | NO_EXISTS
    | MODIFY
;

yenum:
    ENUM yid=ymlId enum_attributes_block? OPEN_BRACE
    (
        enumElement ( COMMA enumElement)*
    )+ CLOSE_BRACE fields=field* SEMICOLON
;
enumElement: yid=ymlId fields=field*;
enum_attributes_block: ATTRIBUTES OPEN_BRACE variableBlockContent CLOSE_BRACE;

classDeclaration:
    classDeclarationIntro field*
    (
        classAttributeDeclaration
        | methodDeclaration
    )* classPropertiesBlock? SEMICOLON classImplementation SEMICOLON EOF?
;

classImplementation:
    IMPLEMENTATION className=ymlId attributeImplementation*? overrideInstruction*? overrideBlock=override? attributes=
        field*
;

attributeImplementation: attrName=ymlId attributes=field+;

override: OVERRIDE OPEN_BRACE overrideInstruction* CLOSE_BRACE;

overrideInstruction: ymlId FUNCTION? field*;

classDeclarationIntro: INTERFACE className=ymlId (extendsBlock)?;
extendsBlock: EXTENDS parentClassName (COMMA parentClassName)*;
parentClassName: ymlId;

synonym:
    SYNONYM constList
    | SYNONYM OPEN_PAR
    (
        synonymElements+=value (COMMA synonymElements+=value)*
    )? CLOSE_PAR
;

classAttributeDeclaration: FIELD memberName=ymlId memberOption=field*;
memberDeclaration: type=memberType memberName=ymlId memberOption=field*;
memberType: ymlId (COND_OR ymlId)*?;

path: ymlId (DOT ymlId)+?;
ymlIdOrPath: ymlId | path;

field:
    actionField
    | returnField
    | localField
    | implementationField
    | commonField
;

actionField: FIELD_INTRO optionName=ACTION actionFieldValues;

actionFieldValues:
    actionBlock
    | chainedCall
    | instruction_return
    | ifExprBlock
;

implementationField: FIELD_INTRO IMPLEMENTATION actionBlock;

commonField:
    fieldArrow=
    (
        FIELD_INTRO
        | REPLACE_FIELD_VALUE_INTRO
        | REMOVE_FIELD
        | ADD_FIELD
    ) optionName=ymlIdOrPath optionValue=objectAttributeValue
;

local_variable_decl: type=memberType memberName=ymlId;

localField:
    fieldArrow=FIELD_INTRO optionName=LOCAL
    (
        optionValues+=local_variable_decl
        (
            COMMA optionValues+=local_variable_decl
        )*?
    )?
;

returnField:
    fieldArrow=FIELD_INTRO optionName=RETURN optionValue=objectReturnAttributeValue
;

classPropertiesBlock: CLASSPROPERTIES classOption=field*;

multilineString: TRIPLE_QUOTE stringContent=ANY* TRIPLE_QUOTE;

objectReturnAttributeValue:
    conditionalExpression
    | value
    | hashMapKeyValue
    | multilineString
    | type=ymlId name=ymlId
    | simpleList
;

objectAttributeValue:
    instruction_return
    | ifExprBlock
    | conditionalExpression
    | value
    | hashMapKeyValueList
    | hashMapKeyValue
    | multilineString
    | type=ymlId name=ymlId
    | simpleList
    | actionBlock
;

valueOrCondition:
    conditionalExpression
    | value
    | hashMapKeyValue
    | multilineString
    | type=ymlId name=ymlId
;

hashMapKeyValueList: hashMapKeyValue (COMMA hashMapKeyValue)+;

hashMap: OPEN_BRACE (hashMapKeyValue | hashMapKeyValueList) CLOSE_BRACE;
hashMapKeyValue: hashMapKey COLON hashMapValue;
hashMapKey: bool | STRING | DATE | chainedCall | NUMBER | array | constList;
hashMapValue: value | conditionalExpression;

value:
    inlineDeclaration
    | arithmeticExpression
    | nonArithmeticValue
    | synonym
    | ifExprBlock
    | inValue
    | instruction_switchExpr_withValue
    | instruction_switchExpr_asIf
    | emptyBlock
;

as:
    AS OPEN_PAR instanciationVariable
    (
        COMMA (instruction_assignment | conditionalExpression)
    )*? COMMA conditionalExpression CLOSE_PAR
;

applyCollection:
    APPLY_COLLECTION OPEN_PAR value COMMA
    (
        WHERE_APPLY_COLLECTION conditionalExpression
        | OPERATION_APPLY_COLLECTION ymlId
        | ARGUMENTS_APPLY_COLLECTION value
    )
    (
        COMMA
        (
            WHERE_APPLY_COLLECTION conditionalExpression
            | OPERATION_APPLY_COLLECTION ymlId
            | ARGUMENTS_APPLY_COLLECTION value
        )
    )* CLOSE_PAR
;

applyCollectionOn:
    APPLY_COLLECTION_ON OPEN_PAR value COMMA
    (
        WHERE_APPLY_COLLECTION_ON conditionalExpression
        | OPERATION_APPLY_COLLECTION_ON ymlId
        | SELECT_APPLY_COLLECTION_ON value
    )
    (
        COMMA
        (
            WHERE_APPLY_COLLECTION_ON conditionalExpression
            | OPERATION_APPLY_COLLECTION_ON ymlId
            | SELECT_APPLY_COLLECTION_ON value
        )
    )* CLOSE_PAR
;

instruction_forEach:
    FOREACH OPEN_PAR (type=ymlId? name=ymlId) COMMA value CLOSE_PAR actionBlockOrInstruction
;

instruction_for:
    FOR OPEN_PAR name=ymlId COMMA step=value COMMA collection=value CLOSE_PAR actionBlockOrInstruction
;

instruction_ifExprBlock: ifExprBlock;
ifExprBlock:
    IF_EXPR OPEN_PAR condition=conditionalExpression CLOSE_PAR THEN thenValue=value ELSE elseValue=value
;

bool: TRUE | FALSE;
nonArithmeticValue: bool | STRING | DATE;

instanciationVariable:
    QUESTION_MARK ymlId
    | ymlId OPEN_PAR instanciationVariable CLOSE_PAR
;

possiblyIndexedExpression: expression index*;
expression:
    instanciationVariable
    | granule
    | constList
    | as
    | applyCollection
    | applyCollectionOn
    | functionCall
    | array
    | hashMap
    | parenthesisConditionalExpression
    | OPEN_PAR instruction_switchExpr_withValue CLOSE_PAR
    | OPEN_PAR instruction_switchExpr_asIf CLOSE_PAR
    | OPEN_PAR ifExprBlock CLOSE_PAR
    | ymlId
;

functionCall:
    ymlId OPEN_PAR (functionArgument (COMMA functionArgument)*)? CLOSE_PAR
;
index: OPEN_BRACKET functionArgument CLOSE_BRACKET;

functionArgument: (argKey=ID COLON)? (valueOrCondition | instanciationVariable)
;

chainedCall:
    possiblyIndexedExpression
    (
        marker=expressionMarker possiblyIndexedExpression
    )*
;

inlineDeclaration:
    INLINE_DECL_INTRO
    (
        // Unnamed object. No need to create a specific rule for it because it can't be used anywhere else.
        className=ymlId (fieldValue)* SEMICOLON
        | staticDeclaration
    )
;

inlineOperation:
    leftExpression=value operator=ymlId rightExpression=value
;

fieldValue: field | granule | constList;

//Functions

function: (METHOD | FUNCTION | FUNCTION_AS_TYPE | TEXT_METHOD | TEXT_FUNCTION) ymlId
    (
        argsBlock
        | OPEN_PAR argumentList CLOSE_PAR
    ) localBlock? staticBlock? ruleset? memberOption=field* SEMICOLON
;
argsBlock: ARGS OPEN_BRACE variableBlockContent CLOSE_BRACE;
localBlock: LOCAL OPEN_BRACE variableBlockContent CLOSE_BRACE;
staticBlock: STATIC OPEN_BRACE staticDeclaration* CLOSE_BRACE;

methodDeclaration: methodIntro memberOption=field*;

methodCompleteDeclaration: methodIntro FUNCTION memberOption=field*;

/*
    // accepts structures like:
	method aggregateTree
		args {
			Symbol 				aggMode
			--> key 			_AGGREGATION_MODE
			--> implicitKey 	true
			--> defaultValue 	AGGREGATION_SUM
	}
	--> domains Void
*/
methodIntro: (FUNCTION | METHOD | TEXT_METHOD | TEXT_FUNCTION) ymlId
    (
        argsBlock
        | OPEN_PAR argumentList CLOSE_PAR
    )
;

argumentList: mandatoryArgs? optionalArgs?;

mandatoryArgs: mandatoryArgDecl (COMMA mandatoryArgDecl)*;

mandatoryArgDecl: argType=memberType argName=ymlId argOptionList?;

optionalArgs:
    COMMA? OPEN_BRACE
    (
        optionalArguments+=optionalArgDecl
        (
            COMMA optionalArguments+=optionalArgDecl
        )* COMMA?
    )? CLOSE_BRACE argSetName=ymlId?
;

optionalArgDecl:
    (
        OPEN_BRACKET optionalKeyName=ymlId CLOSE_BRACKET
        | mandatoryKeyName=ymlId
    ) COLON argType=ymlId argName=ymlId? argOptionList?
;

argOptionList:
    OPEN_BRACE arguments+=argOptionBlock (COMMA arguments+=argOptionBlock)* CLOSE_BRACE
;

argOptionBlock: argOption=ymlId optionValue=value?;

order1Block: instanciationCondition conditionBlock?;

instanciationCondition: inlineOperation;

order1FullCondition: conditionBlock? order1Block*;

parenthesisConditionalExpression: OPEN_PAR conditionalExpression CLOSE_PAR;

//Comparisons
conditionalExpression: conditionalOrExpression;

conditionalAndExpression:
    leftCondition=conditionalAndExpression COND_AND rightCondition=conditionalOrExpression
    | parenthesisConditionalExpression
    | comparison
;

conditionalOrExpression:
    leftCondition=conditionalOrExpression COND_OR rightCondition=conditionalAndExpression
    | conditionalAndExpression
;

comparison:
    leftValue=value comparisonOperator rightValue=value
    | whateverExpression
    | existsExpression
;

existsExpression: (EXISTS | NO_EXISTS) OPEN_PAR inValue COMMA conditionalExpression CLOSE_PAR
;

whateverExpression:
    WHATEVER OPEN_PAR inValue CLOSE_PAR THEN conditionalExpression
;

comparisonOperator:
    EQUAL_COMP
    | NOT_EQUALS
    | LESS_OR_EQUAL
    | GREATE_OR_EQUAL
    | STRICT_LESS
    | STRICT_GREAT
;

instruction_multivaluedAssignment:
    leftHand=assignment_leftHandSide MULTIVALUED_ASSIGNMENT rightHand=value
;
instruction_assignment:
    leftHand=assignment_leftHandSide EQUAL_ASSIGNMENT rightHand=value
;

assignment_leftHandSide: chainedCall;

conditionBlock: order0Condition+;

order0Condition: conditionalExpression | existentialOperator;

actionBlockOrInstruction: actionBlock | instruction;

instruction_switchExpr_withValue:
    SWITCH_EXPR OPEN_PAR value CLOSE_PAR OPEN_BRACE instructionCase_withValue*
    (
        instructionDefault_withValue
        | NO_DEFAULT
    )? CLOSE_BRACE
;
instruction_switchExpr_asIf:
    SWITCH_EXPR OPEN_BRACE instructionCase_withValue*
    (
        instructionDefault_withValue
        | NO_DEFAULT
    )? CLOSE_BRACE
;

instruction_switchCase_withValue:
    SWITCH OPEN_PAR value CLOSE_PAR OPEN_BRACE instructionCase*
    (
        instructionDefault
        | NO_DEFAULT
    )? CLOSE_BRACE
;
instruction_switchCase_asIf:
    SWITCH OPEN_BRACE instructionCase* (instructionDefault | NO_DEFAULT)? CLOSE_BRACE
;

instructionDefault_withValue:
    DEFAULT COLON (value | OPEN_BRACE value CLOSE_BRACE)
;

caseValue:
    conditionalExpression
    | OPEN_PAR
    (
        value
        | hashMapKeyValue
        | multilineString
        | type=ymlId name=ymlId
    ) CLOSE_PAR
    | simpleList
    | value
    | hashMapKeyValue
    | multilineString
    | type=ymlId name=ymlId
;

instructionCase_withValue:
    CASE caseValue COLON (value | OPEN_BRACE value CLOSE_BRACE)
;

instructionCase: CASE caseValue COLON actionBlockOrInstruction;
instructionDefault: DEFAULT COLON actionBlockOrInstruction;
instruction_break: BREAK SEMICOLON?;

instruction_ifElse: main=ifExpression elseExpr=elseExpression?;

elseExpression: ELSE actionBlockOrInstruction;

ifExpression: IF OPEN_PAR order0Condition CLOSE_PAR actionBlockOrInstruction;

instruction_timeCounter:
    TIME_COUNTER OPEN_PAR ymlId COMMA actionBlock CLOSE_PAR
;

inValue: (instanciationVariable | ymlId) IN (value | FUNCTION);

/*
 * Handles code like `forall(item in myCollection) {}` (loop over the elements of a collection)
 * or `forall(item in Type)` (loop over all elements having the type `Type`).
 * Because the token `Function` is also a type, we need to use it here.
 */
instruction_forall:
    FORALL OPEN_PAR (conditionalExpression | inValue)
    (
        COMMA? inValue
        | COMMA? conditionalExpression
    )* CLOSE_PAR actionBlockOrInstruction
;
instruction_while:
    WHILE OPEN_PAR order0Condition CLOSE_PAR actionBlockOrInstruction
;
instruction_return: RETURN value;
instruction_chainedCall: chainedCall;
instruction:
    instruction_multivaluedAssignment SEMICOLON
    | instruction_assignment SEMICOLON
    | instruction_return SEMICOLON
    | instruction_chainedCall SEMICOLON
    | instruction_for
    | instruction_forEach
    | instruction_forall
    | instruction_ifElse
    | instruction_try_catch SEMICOLON
    | instruction_switchCase_asIf
    | instruction_break
    | instruction_switchCase_withValue
    | instruction_ifExprBlock
    | instruction_while
    | instruction_timeCounter SEMICOLON
;

instruction_do: DO actionBlock;
instruction_try_catch:
    TRY OPEN_PAR instruction_do CATCH OPEN_PAR (ymlId (COMMA ymlId)*?) CLOSE_PAR actionBlock CLOSE_PAR
;

actionBlock: OPEN_BRACE instruction+ CLOSE_BRACE | OPEN_BRACE CLOSE_BRACE;

arithmeticOperator: ADD | SUB | MUL | DIV | MOD;

unaryExpression: SUB unaryExpression | chainedCall | NUMBER;

arithmeticExpression:
    OPEN_PAR parenthizedExpression=arithmeticExpression CLOSE_PAR
    | arithmeticExpression arithmeticOperator arithmeticExpression
    | unaryExpression
;

existentialOperator: operator=ymlId OPEN_PAR order1FullCondition CLOSE_PAR;

variableBlockContent: memberDeclaration*;

staticDeclaration:
    conditionInstance
    | declarationType=ymlId declarationName=ymlId (EXTENDS extended=ymlId)? value? declarationOptions=field* SEMICOLON
;

externDeclaration: EXTERN (methodDeclaration | memberDeclaration) SEMICOLON;

// DATA STRUCTURE
array:
    OPEN_BRACKET elements+=value? (COMMA elements+=value)* CLOSE_BRACKET
;

simpleList: elements+=value (COMMA elements+=value)+;

constList:
    OPEN_BRACE elements+=value (COMMA elements+=value)* CLOSE_BRACE
;

granule: OPEN_GRANULE (ANY_TEXT+ | granule)*? CLOSE_GRANULE;

objectComplete:
    COMPLETE completedElemId=ymlId memberOption=field* SEMICOLON
;

classComplete:
    COMPLETE (ymlId | FUNCTION)
    (
        modification
        | classAttributeDeclaration
        | methodCompleteDeclaration
        | memberDeclaration
    )* SEMICOLON
;

modification: MODIFY ymlId argsBlock FUNCTION OVERRIDE ymlId;

ruleset: RULESET OPEN_BRACE rules? CLOSE_BRACE;
rules: ymlrule+;
ymlrule:
    RULE_TYPE ymlId IF OPEN_PAR
    (
        conditionalExpression
        | inValue
        | instruction_assignment
    )+ CLOSE_PAR THEN instruction+ field* SEMICOLON
;

emptyBlock: OPEN_BRACE CLOSE_BRACE;

conditionInstance: CONDITION ymlId conditionalExpression SEMICOLON;
