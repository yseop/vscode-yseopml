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
    | yenum
    | function
    | externDeclaration
;
/**
    Expression marker can be a dot `.` or `>>`.
    Double dot `..` is for static function call like in `Date..stringtoDate("2012-05-10")`.
 */
expressionMarker: DOT DOT | DOT | MULTIVALUED_EXPRESSION;

ymlId:
    YMLID
    | ARGS
    | LOCAL
    | RETURN
    | FUNCTION_AS_TYPE
    | TEXT_FUNCTION
    | IMPLEMENTATION
    | OPERATION_APPLY_COLLECTION_ON
    | CASE
;

yenum:
    ENUM yid=ymlId OPEN_BRACE (enumElement ( COMMA enumElement)*)+ CLOSE_BRACE fields=field* SEMICOLON
;
enumElement: yid=ymlId fields=field*;

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
memberType: ymlId (COND_OR ymlId)?;

path: ymlId (DOT ymlId)+?;
ymlIdOrPath: ymlId | path;

field: commonField | returnField | localField;

commonField:
    fieldArrow=
    (
        FIELD_INTRO
        | REPLACE_FIELD_VALUE_INTRO
        | REMOVE_FIELD
        | ADD_FIELD
    ) optionName=ymlIdOrPath
    (
        optionValues+=valueOrCondition (COMMA optionValues+=valueOrCondition)*?
    )?
;

local_variable_decl: type=memberType memberName=ymlId;

localField:
    fieldArrow= FIELD_INTRO optionName=LOCAL
    (
        optionValues+=local_variable_decl
        (
            COMMA optionValues+=local_variable_decl
        )*?
    )?
;

returnField:
    fieldArrow= FIELD_INTRO optionName=RETURN
    (
        optionValues+=valueOrCondition (COMMA optionValues+=valueOrCondition)*?
    )?
;

classPropertiesBlock: CLASSPROPERTIES classOption=field*;

documentation: DOCUMENTATION;
valueOrCondition:
    actionBlockOrInstruction
    | combinedComparison
    | value
    | hashMapKeyValue
    | documentation
    | type=ymlId name=ymlId
;

hashMap: OPEN_BRACE hashMapKeyValue (COMMA hashMapKeyValue)*? CLOSE_BRACE;
hashMapKeyValue: (nonArithmeticValue | DOUBLE | array | constList) COLON hashMapValue
;
hashMapValue: value | combinedComparison;

value:
    granule
    | inlineDeclaration
    | arithmeticExpression
    | nonArithmeticValue
    | synonym
    | ifExprBlock
    | array
    | constList
    | inValue
    | applyCollection
    | applyCollectionOn
    | as
    | hashMap
    | instruction_switchExpr_withValue
    | instruction_switchExprExclusive_asIf
;

as:
    AS OPEN_PAR instanciationVariable
    (
        COMMA (instruction_assignment | combinedComparison)
    )*? COMMA combinedComparison CLOSE_PAR
;

applyCollection:
    APPLY_COLLECTION OPEN_PAR value COMMA
    (
        WHERE_APPLY_COLLECTION combinedComparison
        | OPERATION_APPLY_COLLECTION ymlId
        | ARGUMENTS_APPLY_COLLECTION value
    )
    (
        COMMA
        (
            WHERE_APPLY_COLLECTION combinedComparison
            | OPERATION_APPLY_COLLECTION ymlId
            | ARGUMENTS_APPLY_COLLECTION value
        )
    )* CLOSE_PAR
;

applyCollectionOn:
    APPLY_COLLECTION_ON OPEN_PAR value COMMA
    (
        WHERE_APPLY_COLLECTION_ON combinedComparison
        | OPERATION_APPLY_COLLECTION_ON ymlId
        | SELECT_APPLY_COLLECTION_ON value
    )
    (
        COMMA
        (
            WHERE_APPLY_COLLECTION_ON combinedComparison
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

instruction_ifExprBlock: ifExprBlock SEMICOLON?;
ifExprBlock:
    IF_EXPR OPEN_PAR condition=combinedComparison CLOSE_PAR THEN thenValue=value ELSE elseValue=value
;

bool: TRUE | FALSE;
nonArithmeticValue: chainedCall | bool | STRING | DATE;

instanciationVariable: QUESTION_MARK ymlId;

possiblyIndexedExpression: expression index*;
expression:
    ymlId
    | functionCall
    | instanciationVariable
    | granule
    | constList
    | as
    | applyCollection
    | applyCollectionOn
    | array
    | hashMap
    | OPEN_PAR instruction_switchExpr_withValue CLOSE_PAR
    | OPEN_PAR instruction_switchExprExclusive_asIf CLOSE_PAR
    | OPEN_PAR ifExprBlock CLOSE_PAR
;

functionCall:
    ymlId OPEN_PAR (functionArgument (COMMA functionArgument)*)? CLOSE_PAR
;
index: OPEN_BRACKET functionArgument CLOSE_BRACKET;

functionArgument: (argKey=ID COLON)? valueOrCondition;

chainedCall:
    possiblyIndexedExpression
    (
        marker=expressionMarker possiblyIndexedExpression
    )*
;

inlineDeclaration:
    INLINE_DECL_INTRO className=ymlId (instanceName=ymlId)? (fieldValue)* SEMICOLON
;

inlineOperation:
    leftExpression=value operator=ymlId rightExpression=value
;

fieldValue: field | granule;

//Functions

function: (METHOD | FUNCTION | FUNCTION_AS_TYPE | TEXT_METHOD | TEXT_FUNCTION) ymlId
    (
        argsBlock
        | OPEN_PAR argumentList CLOSE_PAR
    ) localBlock? staticBlock? memberOption=field* SEMICOLON
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

//Comparisons
combinedComparison:
    OPEN_PAR combinedComparison CLOSE_PAR
    | leftCondition=combinedComparison COND_AND rightCondition=combinedComparison
    | leftCondition=combinedComparison COND_OR rightCondition=combinedComparison
    | comparison
;

comparison: leftValue=value comparisonOperator rightValue=value;

comparisonOperator:
    EQUAL_COMP
    | NOT_EQUALS
    | LESS_OR_EQUAL
    | GREATE_OR_EQUAL
    | STRICT_LESS
    | STRICT_GREAT
;

instruction_multivaluedAssignment:
    leftHand=value MULTIVALUED_ASSIGNMENT rightHand=value
;
instruction_assignment: leftHand=value EQUAL_ASSIGNMENT rightHand=value;

conditionBlock: order0Condition+;

order0Condition: combinedComparison | existentialOperator;

actionBlockOrInstruction: actionBlock | instruction;

instruction_switchExpr_withValue:
    SWITCH_EXPR OPEN_PAR value CLOSE_PAR OPEN_BRACE instructionCase_withValue* instructionDefault_withValue? CLOSE_BRACE
;
instruction_switchExprExclusive_asIf:
    SWITCH_EXPR_EXCLUSIVE OPEN_BRACE instructionCase_withValue* instructionDefault_withValue? CLOSE_BRACE
;

instruction_switchCase_withValue:
    SWITCH OPEN_PAR value CLOSE_PAR OPEN_BRACE instructionCase* instructionDefault? CLOSE_BRACE
;
instruction_switchCase_asIf:
    SWITCH OPEN_BRACE instructionCase* instructionDefault? CLOSE_BRACE
;

instructionDefault_withValue:
    DEFAULT COLON (value | OPEN_BRACE value CLOSE_BRACE)
;

instructionCase_withValue:
    CASE (OPEN_PAR valueOrCondition CLOSE_PAR | valueOrCondition) COLON
    (
        value
        | OPEN_BRACE value CLOSE_BRACE
    )
;

instructionCase:
    CASE (OPEN_PAR valueOrCondition CLOSE_PAR | valueOrCondition) COLON actionBlockOrInstruction
;
instructionDefault: DEFAULT COLON actionBlockOrInstruction;
instruction_break: BREAK SEMICOLON?;

instruction_ifElse: instruction_if (ELSE actionBlockOrInstruction)?;

instruction_if:
    IF OPEN_PAR order0Condition CLOSE_PAR actionBlockOrInstruction
;

inValue: (ymlId | instanciationVariable) IN (value | FUNCTION);

/*
 * Handles code like `forall(item in myCollection) {}` (loop over the elements of a collection)
 * or `forall(item in Type)` (loop over all elements having the type `Type`).
 * Because the token `Function` is also a type, we need to use it here.
 */
instruction_forall:
    FORALL OPEN_PAR inValue CLOSE_PAR actionBlockOrInstruction
;
instruction_while:
    WHILE OPEN_PAR order0Condition CLOSE_PAR actionBlockOrInstruction
;
instruction_return: RETURN value SEMICOLON?;
instruction_chainedCall: chainedCall;
instruction:
    instruction_chainedCall SEMICOLON?
    | instruction_multivaluedAssignment SEMICOLON?
    | instruction_assignment SEMICOLON?
    | instruction_for
    | instruction_forEach
    | instruction_forall
    | instruction_return
    | instruction_ifElse
    | instruction_try_catch SEMICOLON?
    | instruction_switchCase_asIf
    | instruction_break
    | instruction_switchCase_withValue
    | instruction_ifExprBlock
    | instruction_while
;

instruction_do: DO actionBlock;
instruction_try_catch:
    TRY OPEN_PAR instruction_do CATCH OPEN_PAR (ymlId (COMMA ymlId)*?) CLOSE_PAR actionBlock CLOSE_PAR
;

actionBlock: OPEN_BRACE instruction+ CLOSE_BRACE;

arithmeticExpression:
    OPEN_PAR parenthizedExpression=arithmeticExpression CLOSE_PAR
    | leftExpression=arithmeticExpression infixedOperator=OPERATOR rightExpression=arithmeticExpression
    | prefixedOperator=OPERATOR arithmeticExpression
    | chainedCall OPERATOR arithmeticExpression
    | chainedCall OPERATOR chainedCall
    | DOUBLE
;

existentialOperator: operator=ymlId OPEN_PAR order1FullCondition CLOSE_PAR;

variableBlockContent: memberDeclaration*;

staticDeclaration:
    declarationType=ymlId declarationName=ymlId (EXTENDS extended=ymlId)? value? declarationOptions=field* SEMICOLON
;

externDeclaration: EXTERN (methodDeclaration | memberDeclaration) SEMICOLON;

// DATA STRUCTURE
array:
    OPEN_BRACKET elements+=value? (COMMA elements+=value)* CLOSE_BRACKET
;
constList:
    OPEN_BRACE elements+=value? (COMMA elements+=value)* CLOSE_BRACE
;

granule:
    OPEN_GRANULE (~(OPEN_GRANULE | CLOSE_GRANULE)+ | granule)*? CLOSE_GRANULE EOF?
;

objectComplete:
    COMPLETE completedElemId=ymlId memberOption=field* SEMICOLON
;

classComplete:
    COMPLETE (ymlId | FUNCTION)
    (
        classAttributeDeclaration
        | methodCompleteDeclaration
        | memberDeclaration
    )* SEMICOLON
;
