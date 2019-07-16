lexer grammar YmlLexer;

/*
 * Lexer rules
 */

//Keywords
APPLY_COLLECTION: 'applyCollection';
WHERE: '__where';
OPERATION: '__operation';
INTERFACE: 'interface';
IMPLEMENTATION: 'implementation';
EXTENDS: 'extends';
FUNCTION: 'function';
FUNCTION_AS_TYPE: 'Function';
METHOD: 'method';
TEXT_METHOD: 'textMethod';
TEXT_FUNCTION: 'TextFunction';
FIELD: 'field';
CLASSPROPERTIES: 'classProperties';
EXTERN: 'extern';
COMPLETE: 'complete';
SYNONYM: 'synonym';
OVERRIDE: 'override';
ARGS: 'args';
IF_EXPR: 'ifExpr';
IF: 'if';
THEN: 'then';
ELSE: 'else';
ENUM: 'enum';
DO: 'do';
TRY: 'try';
CATCH: 'catch';
FOREACH: 'foreach';
FORALL: 'forall';
IN: 'in';
AS: 'as';
RETURN: 'return';
LOCAL: 'local';
TRUE: 'true';
FALSE: 'false';
SWITCH: 'switch';
CASE: 'case';
DEFAULT: 'default';
BREAK: 'break';
STATIC: 'static';
WHILE: 'while';
FOR: 'for';

//Symbols
SEMICOLON: ';';
COMMA: ',';
COLON: ':';
DOT: '.';
MULTIVALUED_EXPRESSION: '>>';
FIELD_INTRO: '-->';
REPLACE_FIELD_VALUE_INTRO: '==>';
REMOVE_FIELD: '---';
ADD_FIELD: '+++';
INLINE_DECL_INTRO: '->';
OPEN_PAR: '(';
CLOSE_PAR: ')';
OPEN_BRACKET: '[';
CLOSE_BRACKET: ']';
OPEN_BRACE: '{';
CLOSE_BRACE: '}';
SINGLE_QUOTE: '\'';
BACKSLASH: '\\';
QUESTION_MARK: '?';
AT: '@';

//Comparison operator
EQUAL_COMP: '==';
NOT_EQUALS: '!=';
LESS_OR_EQUAL: '<=';
GREATE_OR_EQUAL: '>=';
STRICT_LESS: '<';
STRICT_GREAT: '>';

//Condition combination
COND_AND: '&&';
COND_OR: '||';

//Assignment operators
EQUAL_ASSIGNMENT: '=';
MULTIVALUED_ASSIGNMENT: ':=';

OPEN_GRANULE: BACKSLASH OPEN_PAR;
CLOSE_GRANULE: BACKSLASH CLOSE_PAR;

fragment MINUS: '-';
fragment PLUS: '+';
fragment DIVIDE: '/';
fragment TIMES: '*';

OPERATOR: MINUS | PLUS | DIVIDE | TIMES;

fragment NUMBER: [0-9];
fragment LETTER: [\p{Letter}_];

fragment ALPHANUM: LETTER | [0-9];
fragment D_LETTER: 'd';

DATE:
    SINGLE_QUOTE D_LETTER COLON NUMBER NUMBER NUMBER NUMBER MINUS NUMBER NUMBER MINUS NUMBER NUMBER SINGLE_QUOTE
;

fragment ESCAPED_QUOTE: '\\"';
STRING: '"' ( ESCAPED_QUOTE | ~('\n' | '\r'))*? '"';
fragment TRIPLE_QUOTE: '"""';
DOCUMENTATION: TRIPLE_QUOTE (.*?) TRIPLE_QUOTE;

//We store the whitespace in hidden channel to take back the ones around comments
WS: [ \r\t\n]+ -> channel(HIDDEN);

DOUBLE: MINUS? NUMBER+ (DOT NUMBER+)?;
INTEGER: NUMBER+;

/*
 * Colon is OK inside a YMLID
 * Simple colon has no specific meaning, however:
 * − double colons are used to define a class' method;
 * − triple colons are used as a pointer towards a class' method or attribute.
 */
YMLID: ID (COLON ID)* (COLON? COLON ID)?;
ID: ALPHANUM* LETTER ALPHANUM*;

fragment MULTILINE_COMMENT_START: '/*';
fragment MULTILINE_COMMENT_END: '*/';

PREPROCESSING: '@' ~[\n\r]* -> channel(HIDDEN);
LINE_COMMENT: '//' ~[\n\r]* -> channel(HIDDEN);
MULTILINE_COMMENT:
    MULTILINE_COMMENT_START .*? MULTILINE_COMMENT_END -> channel(HIDDEN)
;
