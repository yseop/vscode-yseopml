lexer grammar YmlLexer;

/*
 * Lexer rules
 */

// We are in a declaration file, use another tokenization mode.
FILETYPE: '_FILE_TYPE_' [ \t]+ ('M' | 'F') -> mode(DECLARATION_FILE);

//Keywords
APPLY_COLLECTION: 'applyCollection';
WHERE_APPLY_COLLECTION: '__where';
OPERATION_APPLY_COLLECTION: '__operation';
ARGUMENTS_APPLY_COLLECTION: '__arguments';
APPLY_COLLECTION_ON: 'applyCollectionOn';
WHERE_APPLY_COLLECTION_ON: 'where';
OPERATION_APPLY_COLLECTION_ON: 'operation';
SELECT_APPLY_COLLECTION_ON: 'select';
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
SWITCH: 'switch' | 'switchExclusive';
SWITCH_EXPR: 'switchExpr' | 'switchExprExclusive';
CASE: 'case';
DEFAULT: 'default';
ACTION: 'action';
NO_DEFAULT: 'noDefault';
BREAK: 'break';
STATIC: 'static';
WHILE: 'while';
FOR: 'for';
RENAME: 'rename';
TO: 'to';
FOR_CLASS: 'forClass';
RULESET: 'ruleset';
RULE_TYPE: 'Rule';
ATTRIBUTES: 'attributes';
TIME_COUNTER: 'timeCounter';

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

OPEN_GRANULE: BACKSLASH OPEN_PAR -> pushMode(TEXT_GRANULE_MODE);

ADD: '+';
DIV: '/';
MUL: '*';
SUB: '-';
MOD: 'mod';

fragment NON_ZERO_DIGIT: [1-9];
fragment DIGIT: '0' | NON_ZERO_DIGIT;
fragment MINUS_SIGN: '-';

fragment LETTER: [\p{Letter}_];

fragment ALPHANUM: LETTER | [0-9];
fragment D_LETTER: 'd';

DATE:
    SINGLE_QUOTE D_LETTER COLON DIGIT DIGIT DIGIT DIGIT MINUS_SIGN DIGIT DIGIT MINUS_SIGN DIGIT DIGIT SINGLE_QUOTE
;

TRIPLE_QUOTE: '"""' -> mode(MULTILINE_STRING);
fragment ESCAPED_QUOTE: '\\"';
STRING: '"' ( ESCAPED_QUOTE | ~('\n' | '\r'))*? '"';

//We store the whitespace in hidden channel to take back the ones around comments
WS: [ \r\t\n]+ -> channel(HIDDEN);

NUMBER: DOUBLE | INTEGER;
DOUBLE: DIGIT+ DOT DIGIT*;
INTEGER: NON_ZERO_DIGIT DIGIT+ | DIGIT+;

/*
 * Colon is OK inside a YMLID
 * Simple colon has no specific meaning, however:
 * − double colons are used to define a class' method;
 * − triple colons are used as a pointer towards a class' method or attribute.
 */
YMLID: ID (COLON ID)* (COLON? COLON? COLON ID)? SINGLE_QUOTE?;
ID: ALPHANUM* LETTER ALPHANUM*;

fragment MULTILINE_COMMENT_START: '/*';
fragment MULTILINE_COMMENT_END: '*/';

PREPROCESSING: '@' ~[\n\r]* -> channel(HIDDEN);
LINE_COMMENT: '//' ~[\n\r]* -> channel(HIDDEN);
MULTILINE_COMMENT:
    MULTILINE_COMMENT_START .*? MULTILINE_COMMENT_END -> channel(HIDDEN)
;

mode DECLARATION_FILE;

DECL_FILE_PREPROCESSING: PREPROCESSING -> channel(HIDDEN);
DECL_FILE_LINE_COMMENT: LINE_COMMENT -> channel(HIDDEN);
DECL_FILE_MULTILINE_COMMENT: MULTILINE_COMMENT -> channel(HIDDEN);

NAME: ('-' | '.' | ALPHANUM)+?;
// Could be more complicated, but should be enough for the time being.
FILE_DECLARATION: NAME+ ('/' NAME)*;
DECL_FILE_WS: WS -> channel(HIDDEN);

// the only way to leave this mode is to go to the end of the file.
END_OF_FILE: EOF -> mode(DEFAULT_MODE);

mode TEXT_GRANULE_MODE;

OPEN_TEXT_GRANULE:
    OPEN_GRANULE -> type(OPEN_GRANULE), pushMode(TEXT_GRANULE_MODE)
;
CLOSE_GRANULE: BACKSLASH CLOSE_PAR -> popMode;
SKIP_OTHER: . -> skip;

mode MULTILINE_STRING;

MULTILINE_STRING_END:
    TRIPLE_QUOTE -> type(TRIPLE_QUOTE), mode(DEFAULT_MODE)
;
ANY: .;
