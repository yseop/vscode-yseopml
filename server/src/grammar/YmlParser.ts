// Generated from grammar/YmlParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { YmlParserListener } from "./YmlParserListener";
import { YmlParserVisitor } from "./YmlParserVisitor";


export class YmlParser extends Parser {
	public static readonly FILETYPE = 1;
	public static readonly APPLY_COLLECTION = 2;
	public static readonly WHERE_APPLY_COLLECTION = 3;
	public static readonly OPERATION_APPLY_COLLECTION = 4;
	public static readonly ARGUMENTS_APPLY_COLLECTION = 5;
	public static readonly APPLY_COLLECTION_ON = 6;
	public static readonly WHERE_APPLY_COLLECTION_ON = 7;
	public static readonly OPERATION_APPLY_COLLECTION_ON = 8;
	public static readonly SELECT_APPLY_COLLECTION_ON = 9;
	public static readonly INTERFACE = 10;
	public static readonly IMPLEMENTATION = 11;
	public static readonly EXTENDS = 12;
	public static readonly FUNCTION = 13;
	public static readonly FUNCTION_AS_TYPE = 14;
	public static readonly METHOD = 15;
	public static readonly TEXT_METHOD = 16;
	public static readonly TEXT_FUNCTION = 17;
	public static readonly FIELD = 18;
	public static readonly CLASSPROPERTIES = 19;
	public static readonly EXTERN = 20;
	public static readonly COMPLETE = 21;
	public static readonly SYNONYM = 22;
	public static readonly OVERRIDE = 23;
	public static readonly ARGS = 24;
	public static readonly IF_EXPR = 25;
	public static readonly IF = 26;
	public static readonly THEN = 27;
	public static readonly ELSE = 28;
	public static readonly ENUM = 29;
	public static readonly DO = 30;
	public static readonly TRY = 31;
	public static readonly CATCH = 32;
	public static readonly FOREACH = 33;
	public static readonly FORALL = 34;
	public static readonly IN = 35;
	public static readonly AS = 36;
	public static readonly RETURN = 37;
	public static readonly LOCAL = 38;
	public static readonly TRUE = 39;
	public static readonly FALSE = 40;
	public static readonly SWITCH = 41;
	public static readonly SWITCH_EXPR = 42;
	public static readonly CASE = 43;
	public static readonly DEFAULT = 44;
	public static readonly ACTION = 45;
	public static readonly NO_DEFAULT = 46;
	public static readonly BREAK = 47;
	public static readonly STATIC = 48;
	public static readonly WHILE = 49;
	public static readonly FOR = 50;
	public static readonly RENAME = 51;
	public static readonly TO = 52;
	public static readonly FOR_CLASS = 53;
	public static readonly RULESET = 54;
	public static readonly RULE_TYPE = 55;
	public static readonly ATTRIBUTES = 56;
	public static readonly TIME_COUNTER = 57;
<<<<<<< refs/remotes/origin/develop
	public static readonly SEMICOLON = 58;
	public static readonly COMMA = 59;
	public static readonly COLON = 60;
	public static readonly DOT = 61;
	public static readonly MULTIVALUED_EXPRESSION = 62;
	public static readonly FIELD_INTRO = 63;
	public static readonly REPLACE_FIELD_VALUE_INTRO = 64;
	public static readonly REMOVE_FIELD = 65;
	public static readonly ADD_FIELD = 66;
	public static readonly INLINE_DECL_INTRO = 67;
	public static readonly OPEN_PAR = 68;
	public static readonly CLOSE_PAR = 69;
	public static readonly OPEN_BRACKET = 70;
	public static readonly CLOSE_BRACKET = 71;
	public static readonly OPEN_BRACE = 72;
	public static readonly CLOSE_BRACE = 73;
	public static readonly SINGLE_QUOTE = 74;
	public static readonly BACKSLASH = 75;
	public static readonly QUESTION_MARK = 76;
	public static readonly AT = 77;
	public static readonly EQUAL_COMP = 78;
	public static readonly NOT_EQUALS = 79;
	public static readonly LESS_OR_EQUAL = 80;
	public static readonly GREATE_OR_EQUAL = 81;
	public static readonly STRICT_LESS = 82;
	public static readonly STRICT_GREAT = 83;
	public static readonly COND_AND = 84;
	public static readonly COND_OR = 85;
	public static readonly EQUAL_ASSIGNMENT = 86;
	public static readonly MULTIVALUED_ASSIGNMENT = 87;
	public static readonly OPEN_GRANULE = 88;
	public static readonly ADD = 89;
	public static readonly DIV = 90;
	public static readonly MUL = 91;
	public static readonly SUB = 92;
	public static readonly MOD = 93;
	public static readonly DATE = 94;
	public static readonly TRIPLE_QUOTE = 95;
	public static readonly STRING = 96;
	public static readonly WS = 97;
	public static readonly NUMBER = 98;
	public static readonly DOUBLE = 99;
	public static readonly INTEGER = 100;
	public static readonly YMLID = 101;
	public static readonly ID = 102;
	public static readonly PREPROCESSING = 103;
	public static readonly LINE_COMMENT = 104;
	public static readonly MULTILINE_COMMENT = 105;
	public static readonly DECL_FILE_PREPROCESSING = 106;
	public static readonly DECL_FILE_LINE_COMMENT = 107;
	public static readonly DECL_FILE_MULTILINE_COMMENT = 108;
	public static readonly NAME = 109;
	public static readonly FILE_DECLARATION = 110;
	public static readonly DECL_FILE_WS = 111;
	public static readonly END_OF_FILE = 112;
	public static readonly CLOSE_GRANULE = 113;
	public static readonly ANY_TEXT = 114;
	public static readonly ANY = 115;
=======
	public static readonly WHATEVER = 58;
	public static readonly CONDITION = 59;
	public static readonly NO_EXISTS = 60;
	public static readonly EXISTS = 61;
	public static readonly MODIFY = 62;
	public static readonly SEMICOLON = 63;
	public static readonly COMMA = 64;
	public static readonly COLON = 65;
	public static readonly DOT = 66;
	public static readonly MULTIVALUED_EXPRESSION = 67;
	public static readonly FIELD_INTRO = 68;
	public static readonly REPLACE_FIELD_VALUE_INTRO = 69;
	public static readonly REMOVE_FIELD = 70;
	public static readonly ADD_FIELD = 71;
	public static readonly INLINE_DECL_INTRO = 72;
	public static readonly OPEN_PAR = 73;
	public static readonly CLOSE_PAR = 74;
	public static readonly OPEN_BRACKET = 75;
	public static readonly CLOSE_BRACKET = 76;
	public static readonly OPEN_BRACE = 77;
	public static readonly CLOSE_BRACE = 78;
	public static readonly SINGLE_QUOTE = 79;
	public static readonly BACKSLASH = 80;
	public static readonly QUESTION_MARK = 81;
	public static readonly AT = 82;
	public static readonly EQUAL_COMP = 83;
	public static readonly NOT_EQUALS = 84;
	public static readonly LESS_OR_EQUAL = 85;
	public static readonly GREATE_OR_EQUAL = 86;
	public static readonly STRICT_LESS = 87;
	public static readonly STRICT_GREAT = 88;
	public static readonly COND_AND = 89;
	public static readonly COND_OR = 90;
	public static readonly EQUAL_ASSIGNMENT = 91;
	public static readonly MULTIVALUED_ASSIGNMENT = 92;
	public static readonly OPEN_GRANULE = 93;
	public static readonly ADD = 94;
	public static readonly DIV = 95;
	public static readonly MUL = 96;
	public static readonly SUB = 97;
	public static readonly MOD = 98;
	public static readonly DATE = 99;
	public static readonly TRIPLE_QUOTE = 100;
	public static readonly STRING = 101;
	public static readonly WS = 102;
	public static readonly NUMBER = 103;
	public static readonly DOUBLE = 104;
	public static readonly INTEGER = 105;
	public static readonly YMLID = 106;
	public static readonly ID = 107;
	public static readonly ID_OR_NUMBER = 108;
	public static readonly PREPROCESSING = 109;
	public static readonly LINE_COMMENT = 110;
	public static readonly MULTILINE_COMMENT = 111;
	public static readonly DECL_FILE_PREPROCESSING = 112;
	public static readonly DECL_FILE_LINE_COMMENT = 113;
	public static readonly DECL_FILE_MULTILINE_COMMENT = 114;
	public static readonly NAME = 115;
	public static readonly FILE_DECLARATION = 116;
	public static readonly DECL_FILE_WS = 117;
	public static readonly END_OF_FILE = 118;
	public static readonly CLOSE_GRANULE = 119;
	public static readonly SKIP_OTHER = 120;
	public static readonly ANY = 121;
>>>>>>> feat: whatever; conditions; exists; instanciation var
	public static readonly RULE_declarationFile = 0;
	public static readonly RULE_kaoFile = 1;
	public static readonly RULE_ymlEntity = 2;
	public static readonly RULE_expressionMarker = 3;
	public static readonly RULE_instruction_rename = 4;
	public static readonly RULE_ymlId = 5;
	public static readonly RULE_yenum = 6;
	public static readonly RULE_enumElement = 7;
	public static readonly RULE_enum_attributes_block = 8;
	public static readonly RULE_classDeclaration = 9;
	public static readonly RULE_classImplementation = 10;
	public static readonly RULE_attributeImplementation = 11;
	public static readonly RULE_override = 12;
	public static readonly RULE_overrideInstruction = 13;
	public static readonly RULE_classDeclarationIntro = 14;
	public static readonly RULE_extendsBlock = 15;
	public static readonly RULE_parentClassName = 16;
	public static readonly RULE_synonym = 17;
	public static readonly RULE_classAttributeDeclaration = 18;
	public static readonly RULE_memberDeclaration = 19;
	public static readonly RULE_memberType = 20;
	public static readonly RULE_path = 21;
	public static readonly RULE_ymlIdOrPath = 22;
	public static readonly RULE_field = 23;
	public static readonly RULE_actionField = 24;
	public static readonly RULE_actionFieldValues = 25;
	public static readonly RULE_implementationField = 26;
	public static readonly RULE_instructionNoSemi = 27;
	public static readonly RULE_commonField = 28;
	public static readonly RULE_local_variable_decl = 29;
	public static readonly RULE_localField = 30;
	public static readonly RULE_returnField = 31;
	public static readonly RULE_classPropertiesBlock = 32;
	public static readonly RULE_multilineString = 33;
	public static readonly RULE_objectReturnAttributeValue = 34;
	public static readonly RULE_objectAttributeValue = 35;
	public static readonly RULE_valueOrCondition = 36;
	public static readonly RULE_hashMapKeyValueList = 37;
	public static readonly RULE_hashMap = 38;
	public static readonly RULE_hashMapKeyValue = 39;
	public static readonly RULE_hashMapKey = 40;
	public static readonly RULE_hashMapValue = 41;
	public static readonly RULE_value = 42;
	public static readonly RULE_as = 43;
	public static readonly RULE_applyCollection = 44;
	public static readonly RULE_applyCollectionOn = 45;
	public static readonly RULE_instruction_forEach = 46;
	public static readonly RULE_instruction_for = 47;
	public static readonly RULE_instruction_ifExprBlock = 48;
	public static readonly RULE_ifExprBlock = 49;
	public static readonly RULE_bool = 50;
	public static readonly RULE_nonArithmeticValue = 51;
	public static readonly RULE_instanciationVariable = 52;
	public static readonly RULE_possiblyIndexedExpression = 53;
	public static readonly RULE_expression = 54;
	public static readonly RULE_functionCall = 55;
	public static readonly RULE_index = 56;
	public static readonly RULE_functionArgument = 57;
	public static readonly RULE_chainedCall = 58;
	public static readonly RULE_inlineDeclaration = 59;
	public static readonly RULE_inlineOperation = 60;
	public static readonly RULE_fieldValue = 61;
	public static readonly RULE_function = 62;
	public static readonly RULE_argsBlock = 63;
	public static readonly RULE_localBlock = 64;
	public static readonly RULE_staticBlock = 65;
	public static readonly RULE_methodDeclaration = 66;
	public static readonly RULE_methodCompleteDeclaration = 67;
	public static readonly RULE_methodIntro = 68;
	public static readonly RULE_argumentList = 69;
	public static readonly RULE_mandatoryArgs = 70;
	public static readonly RULE_mandatoryArgDecl = 71;
	public static readonly RULE_optionalArgs = 72;
	public static readonly RULE_optionalArgDecl = 73;
	public static readonly RULE_argOptionList = 74;
	public static readonly RULE_argOptionBlock = 75;
	public static readonly RULE_order1Block = 76;
	public static readonly RULE_instanciationCondition = 77;
	public static readonly RULE_order1FullCondition = 78;
	public static readonly RULE_parenthesisConditionalExpression = 79;
	public static readonly RULE_conditionalExpression = 80;
	public static readonly RULE_conditionalAndExpression = 81;
	public static readonly RULE_conditionalOrExpression = 82;
	public static readonly RULE_comparison = 83;
	public static readonly RULE_existsExpression = 84;
	public static readonly RULE_whateverExpression = 85;
	public static readonly RULE_comparisonOperator = 86;
	public static readonly RULE_instruction_multivaluedAssignment = 87;
	public static readonly RULE_instruction_assignment = 88;
	public static readonly RULE_assignment_leftHandSide = 89;
	public static readonly RULE_conditionBlock = 90;
	public static readonly RULE_order0Condition = 91;
	public static readonly RULE_actionBlockOrInstruction = 92;
	public static readonly RULE_instruction_switchExpr_withValue = 93;
	public static readonly RULE_instruction_switchExpr_asIf = 94;
	public static readonly RULE_instruction_switchCase_withValue = 95;
	public static readonly RULE_instruction_switchCase_asIf = 96;
	public static readonly RULE_instructionDefault_withValue = 97;
	public static readonly RULE_instructionCase_withValue = 98;
	public static readonly RULE_instructionCase = 99;
	public static readonly RULE_instructionDefault = 100;
	public static readonly RULE_instruction_break = 101;
	public static readonly RULE_instruction_ifElse = 102;
	public static readonly RULE_elseExpression = 103;
	public static readonly RULE_elseIfExpression = 104;
	public static readonly RULE_ifExpression = 105;
	public static readonly RULE_instruction_timeCounter = 106;
	public static readonly RULE_inValue = 107;
	public static readonly RULE_instruction_forall = 108;
	public static readonly RULE_instruction_while = 109;
	public static readonly RULE_instruction_return = 110;
	public static readonly RULE_instruction_chainedCall = 111;
	public static readonly RULE_instruction = 112;
	public static readonly RULE_instruction_do = 113;
	public static readonly RULE_instruction_try_catch = 114;
	public static readonly RULE_actionBlock = 115;
	public static readonly RULE_arithmeticOperator = 116;
	public static readonly RULE_unaryExpression = 117;
	public static readonly RULE_arithmeticExpression = 118;
	public static readonly RULE_existentialOperator = 119;
	public static readonly RULE_variableBlockContent = 120;
	public static readonly RULE_staticDeclaration = 121;
	public static readonly RULE_externDeclaration = 122;
	public static readonly RULE_array = 123;
	public static readonly RULE_simpleList = 124;
	public static readonly RULE_constList = 125;
	public static readonly RULE_granule = 126;
	public static readonly RULE_objectComplete = 127;
	public static readonly RULE_classComplete = 128;
	public static readonly RULE_modification = 129;
	public static readonly RULE_ruleset = 130;
	public static readonly RULE_rules = 131;
	public static readonly RULE_ymlrule = 132;
	public static readonly RULE_emptyBlock = 133;
	public static readonly RULE_conditionInstance = 134;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"declarationFile", "kaoFile", "ymlEntity", "expressionMarker", "instruction_rename", 
		"ymlId", "yenum", "enumElement", "enum_attributes_block", "classDeclaration", 
		"classImplementation", "attributeImplementation", "override", "overrideInstruction", 
		"classDeclarationIntro", "extendsBlock", "parentClassName", "synonym", 
		"classAttributeDeclaration", "memberDeclaration", "memberType", "path", 
		"ymlIdOrPath", "field", "actionField", "actionFieldValues", "implementationField", 
		"instructionNoSemi", "commonField", "local_variable_decl", "localField", 
		"returnField", "classPropertiesBlock", "multilineString", "objectReturnAttributeValue", 
		"objectAttributeValue", "valueOrCondition", "hashMapKeyValueList", "hashMap", 
		"hashMapKeyValue", "hashMapKey", "hashMapValue", "value", "as", "applyCollection", 
		"applyCollectionOn", "instruction_forEach", "instruction_for", "instruction_ifExprBlock", 
		"ifExprBlock", "bool", "nonArithmeticValue", "instanciationVariable", 
		"possiblyIndexedExpression", "expression", "functionCall", "index", "functionArgument", 
		"chainedCall", "inlineDeclaration", "inlineOperation", "fieldValue", "function", 
		"argsBlock", "localBlock", "staticBlock", "methodDeclaration", "methodCompleteDeclaration", 
		"methodIntro", "argumentList", "mandatoryArgs", "mandatoryArgDecl", "optionalArgs", 
		"optionalArgDecl", "argOptionList", "argOptionBlock", "order1Block", "instanciationCondition", 
		"order1FullCondition", "parenthesisConditionalExpression", "conditionalExpression", 
		"conditionalAndExpression", "conditionalOrExpression", "comparison", "existsExpression", 
		"whateverExpression", "comparisonOperator", "instruction_multivaluedAssignment", 
		"instruction_assignment", "assignment_leftHandSide", "conditionBlock", 
		"order0Condition", "actionBlockOrInstruction", "instruction_switchExpr_withValue", 
		"instruction_switchExpr_asIf", "instruction_switchCase_withValue", "instruction_switchCase_asIf", 
		"instructionDefault_withValue", "instructionCase_withValue", "instructionCase", 
		"instructionDefault", "instruction_break", "instruction_ifElse", "elseExpression", 
		"elseIfExpression", "ifExpression", "instruction_timeCounter", "inValue", 
		"instruction_forall", "instruction_while", "instruction_return", "instruction_chainedCall", 
		"instruction", "instruction_do", "instruction_try_catch", "actionBlock", 
		"arithmeticOperator", "unaryExpression", "arithmeticExpression", "existentialOperator", 
		"variableBlockContent", "staticDeclaration", "externDeclaration", "array", 
		"simpleList", "constList", "granule", "objectComplete", "classComplete", 
		"modification", "ruleset", "rules", "ymlrule", "emptyBlock", "conditionInstance",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'applyCollection'", "'__where'", "'__operation'", 
		"'__arguments'", "'applyCollectionOn'", "'where'", "'operation'", "'select'", 
		"'interface'", "'implementation'", "'extends'", "'function'", "'Function'", 
		"'method'", "'textMethod'", "'TextFunction'", "'field'", "'classProperties'", 
		"'extern'", "'complete'", "'synonym'", "'override'", "'args'", "'ifExpr'", 
		"'if'", "'then'", "'else'", "'enum'", "'do'", "'try'", "'catch'", "'foreach'", 
		"'forall'", "'in'", "'as'", "'return'", "'local'", "'true'", "'false'", 
		undefined, undefined, "'case'", "'default'", "'action'", "'noDefault'", 
		"'break'", "'static'", "'while'", "'for'", "'rename'", "'to'", "'forClass'", 
		"'ruleset'", "'Rule'", "'attributes'", "'timeCounter'", "'whatever'", 
		"'Condition'", "'noExists'", "'exists'", "'modify'", "';'", "','", "':'", 
		"'.'", "'>>'", "'-->'", "'==>'", "'---'", "'+++'", "'->'", "'('", "')'", 
		"'['", "']'", "'{'", "'}'", "'''", "'\\'", "'?'", "'@'", "'=='", "'!='", 
		"'<='", "'>='", "'<'", "'>'", "'&&'", "'||'", "'='", "':='", undefined, 
		"'+'", "'/'", "'*'", "'-'", "'mod'", undefined, "'\"\"\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FILETYPE", "APPLY_COLLECTION", "WHERE_APPLY_COLLECTION", "OPERATION_APPLY_COLLECTION", 
		"ARGUMENTS_APPLY_COLLECTION", "APPLY_COLLECTION_ON", "WHERE_APPLY_COLLECTION_ON", 
		"OPERATION_APPLY_COLLECTION_ON", "SELECT_APPLY_COLLECTION_ON", "INTERFACE", 
		"IMPLEMENTATION", "EXTENDS", "FUNCTION", "FUNCTION_AS_TYPE", "METHOD", 
		"TEXT_METHOD", "TEXT_FUNCTION", "FIELD", "CLASSPROPERTIES", "EXTERN", 
		"COMPLETE", "SYNONYM", "OVERRIDE", "ARGS", "IF_EXPR", "IF", "THEN", "ELSE", 
		"ENUM", "DO", "TRY", "CATCH", "FOREACH", "FORALL", "IN", "AS", "RETURN", 
		"LOCAL", "TRUE", "FALSE", "SWITCH", "SWITCH_EXPR", "CASE", "DEFAULT", 
		"ACTION", "NO_DEFAULT", "BREAK", "STATIC", "WHILE", "FOR", "RENAME", "TO", 
		"FOR_CLASS", "RULESET", "RULE_TYPE", "ATTRIBUTES", "TIME_COUNTER", "WHATEVER", 
		"CONDITION", "NO_EXISTS", "EXISTS", "MODIFY", "SEMICOLON", "COMMA", "COLON", 
		"DOT", "MULTIVALUED_EXPRESSION", "FIELD_INTRO", "REPLACE_FIELD_VALUE_INTRO", 
		"REMOVE_FIELD", "ADD_FIELD", "INLINE_DECL_INTRO", "OPEN_PAR", "CLOSE_PAR", 
		"OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_BRACE", "CLOSE_BRACE", "SINGLE_QUOTE", 
		"BACKSLASH", "QUESTION_MARK", "AT", "EQUAL_COMP", "NOT_EQUALS", "LESS_OR_EQUAL", 
		"GREATE_OR_EQUAL", "STRICT_LESS", "STRICT_GREAT", "COND_AND", "COND_OR", 
		"EQUAL_ASSIGNMENT", "MULTIVALUED_ASSIGNMENT", "OPEN_GRANULE", "ADD", "DIV", 
		"MUL", "SUB", "MOD", "DATE", "TRIPLE_QUOTE", "STRING", "WS", "NUMBER", 
<<<<<<< refs/remotes/origin/develop
		"DOUBLE", "INTEGER", "YMLID", "ID", "PREPROCESSING", "LINE_COMMENT", "MULTILINE_COMMENT", 
		"DECL_FILE_PREPROCESSING", "DECL_FILE_LINE_COMMENT", "DECL_FILE_MULTILINE_COMMENT", 
		"NAME", "FILE_DECLARATION", "DECL_FILE_WS", "END_OF_FILE", "CLOSE_GRANULE", 
		"ANY_TEXT", "ANY",
=======
		"DOUBLE", "INTEGER", "YMLID", "ID", "ID_OR_NUMBER", "PREPROCESSING", "LINE_COMMENT", 
		"MULTILINE_COMMENT", "DECL_FILE_PREPROCESSING", "DECL_FILE_LINE_COMMENT", 
		"DECL_FILE_MULTILINE_COMMENT", "NAME", "FILE_DECLARATION", "DECL_FILE_WS", 
		"END_OF_FILE", "CLOSE_GRANULE", "SKIP_OTHER", "ANY",
>>>>>>> feat: whatever; conditions; exists; instanciation var
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(YmlParser._LITERAL_NAMES, YmlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return YmlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "YmlParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return YmlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return YmlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(YmlParser._ATN, this);
	}
	// @RuleVersion(0)
	public declarationFile(): DeclarationFileContext {
		let _localctx: DeclarationFileContext = new DeclarationFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, YmlParser.RULE_declarationFile);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.match(YmlParser.FILETYPE);
			this.state = 274;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 271;
					this.match(YmlParser.FILE_DECLARATION);
					}
					}
				}
				this.state = 276;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 278;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 277;
				this.match(YmlParser.EOF);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public kaoFile(): KaoFileContext {
		let _localctx: KaoFileContext = new KaoFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, YmlParser.RULE_kaoFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.EOF:
			case YmlParser.OPERATION_APPLY_COLLECTION_ON:
			case YmlParser.INTERFACE:
			case YmlParser.IMPLEMENTATION:
			case YmlParser.EXTENDS:
			case YmlParser.FUNCTION:
			case YmlParser.FUNCTION_AS_TYPE:
			case YmlParser.METHOD:
			case YmlParser.TEXT_METHOD:
			case YmlParser.TEXT_FUNCTION:
			case YmlParser.EXTERN:
			case YmlParser.COMPLETE:
			case YmlParser.ARGS:
			case YmlParser.ENUM:
			case YmlParser.AS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.CASE:
			case YmlParser.STATIC:
			case YmlParser.RENAME:
			case YmlParser.TO:
			case YmlParser.FOR_CLASS:
			case YmlParser.RULESET:
			case YmlParser.RULE_TYPE:
			case YmlParser.ATTRIBUTES:
			case YmlParser.TIME_COUNTER:
			case YmlParser.CONDITION:
			case YmlParser.NO_EXISTS:
			case YmlParser.EXISTS:
			case YmlParser.MODIFY:
			case YmlParser.MOD:
			case YmlParser.YMLID:
				{
				this.state = 283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.INTERFACE) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.METHOD) | (1 << YmlParser.TEXT_METHOD) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.EXTERN) | (1 << YmlParser.COMPLETE) | (1 << YmlParser.ARGS) | (1 << YmlParser.ENUM))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
					{
					{
					this.state = 280;
					_localctx._entities = this.ymlEntity();
					}
					}
					this.state = 285;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case YmlParser.FILETYPE:
				{
				this.state = 286;
				this.declarationFile();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 289;
			this.match(YmlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ymlEntity(): YmlEntityContext {
		let _localctx: YmlEntityContext = new YmlEntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, YmlParser.RULE_ymlEntity);
		try {
			this.state = 300;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 291;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 292;
				this.staticDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 293;
				this.classComplete();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 294;
				this.objectComplete();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 295;
				this.ymlrule();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 296;
				this.yenum();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 297;
				this.function();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 298;
				this.externDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 299;
				this.instruction_rename();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionMarker(): ExpressionMarkerContext {
		let _localctx: ExpressionMarkerContext = new ExpressionMarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, YmlParser.RULE_expressionMarker);
		try {
			this.state = 306;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 302;
				this.match(YmlParser.DOT);
				this.state = 303;
				this.match(YmlParser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 304;
				this.match(YmlParser.DOT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 305;
				this.match(YmlParser.MULTIVALUED_EXPRESSION);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_rename(): Instruction_renameContext {
		let _localctx: Instruction_renameContext = new Instruction_renameContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, YmlParser.RULE_instruction_rename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.match(YmlParser.RENAME);
			this.state = 309;
			this.ymlId();
			this.state = 310;
			this.match(YmlParser.TO);
			this.state = 311;
			this.ymlId();
			this.state = 312;
			this.match(YmlParser.FOR_CLASS);
			this.state = 313;
			this.ymlId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ymlId(): YmlIdContext {
		let _localctx: YmlIdContext = new YmlIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, YmlParser.RULE_ymlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yenum(): YenumContext {
		let _localctx: YenumContext = new YenumContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, YmlParser.RULE_yenum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.match(YmlParser.ENUM);
			this.state = 318;
			_localctx._yid = this.ymlId();
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.ATTRIBUTES) {
				{
				this.state = 319;
				this.enum_attributes_block();
				}
			}

			this.state = 322;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 323;
				this.enumElement();
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === YmlParser.COMMA) {
					{
					{
					this.state = 324;
					this.match(YmlParser.COMMA);
					this.state = 325;
					this.enumElement();
					}
					}
					this.state = 330;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID);
			this.state = 335;
			this.match(YmlParser.CLOSE_BRACE);
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.FIELD_INTRO - 68)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 68)) | (1 << (YmlParser.REMOVE_FIELD - 68)) | (1 << (YmlParser.ADD_FIELD - 68)))) !== 0)) {
				{
				{
				this.state = 336;
				_localctx._fields = this.field();
				}
				}
				this.state = 341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 342;
			this.match(YmlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumElement(): EnumElementContext {
		let _localctx: EnumElementContext = new EnumElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, YmlParser.RULE_enumElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			_localctx._yid = this.ymlId();
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.FIELD_INTRO - 68)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 68)) | (1 << (YmlParser.REMOVE_FIELD - 68)) | (1 << (YmlParser.ADD_FIELD - 68)))) !== 0)) {
				{
				{
				this.state = 345;
				_localctx._fields = this.field();
				}
				}
				this.state = 350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enum_attributes_block(): Enum_attributes_blockContext {
		let _localctx: Enum_attributes_blockContext = new Enum_attributes_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, YmlParser.RULE_enum_attributes_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this.match(YmlParser.ATTRIBUTES);
			this.state = 352;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 353;
			this.variableBlockContent();
			this.state = 354;
			this.match(YmlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, YmlParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this.classDeclarationIntro();
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.FIELD_INTRO - 68)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 68)) | (1 << (YmlParser.REMOVE_FIELD - 68)) | (1 << (YmlParser.ADD_FIELD - 68)))) !== 0)) {
				{
				{
				this.state = 357;
				this.field();
				}
				}
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.FUNCTION) | (1 << YmlParser.METHOD) | (1 << YmlParser.TEXT_METHOD) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.FIELD))) !== 0)) {
				{
				this.state = 365;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case YmlParser.FIELD:
					{
					this.state = 363;
					this.classAttributeDeclaration();
					}
					break;
				case YmlParser.FUNCTION:
				case YmlParser.METHOD:
				case YmlParser.TEXT_METHOD:
				case YmlParser.TEXT_FUNCTION:
					{
					this.state = 364;
					this.methodDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.CLASSPROPERTIES) {
				{
				this.state = 370;
				this.classPropertiesBlock();
				}
			}

			this.state = 373;
			this.match(YmlParser.SEMICOLON);
			this.state = 374;
			this.classImplementation();
			this.state = 375;
			this.match(YmlParser.SEMICOLON);
			this.state = 377;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 376;
				this.match(YmlParser.EOF);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classImplementation(): ClassImplementationContext {
		let _localctx: ClassImplementationContext = new ClassImplementationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, YmlParser.RULE_classImplementation);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this.match(YmlParser.IMPLEMENTATION);
			this.state = 380;
			_localctx._className = this.ymlId();
			this.state = 384;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 381;
					this.attributeImplementation();
					}
					}
				}
				this.state = 386;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 390;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 387;
					this.overrideInstruction();
					}
					}
				}
				this.state = 392;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.OVERRIDE) {
				{
				this.state = 393;
				_localctx._overrideBlock = this.override();
				}
			}

			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.FIELD_INTRO - 68)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 68)) | (1 << (YmlParser.REMOVE_FIELD - 68)) | (1 << (YmlParser.ADD_FIELD - 68)))) !== 0)) {
				{
				{
				this.state = 396;
				_localctx._attributes = this.field();
				}
				}
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeImplementation(): AttributeImplementationContext {
		let _localctx: AttributeImplementationContext = new AttributeImplementationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, YmlParser.RULE_attributeImplementation);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			_localctx._attrName = this.ymlId();
			this.state = 404;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 403;
					_localctx._attributes = this.field();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 406;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public override(): OverrideContext {
		let _localctx: OverrideContext = new OverrideContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, YmlParser.RULE_override);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this.match(YmlParser.OVERRIDE);
			this.state = 409;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
				{
				{
				this.state = 410;
				this.overrideInstruction();
				}
				}
				this.state = 415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 416;
			this.match(YmlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overrideInstruction(): OverrideInstructionContext {
		let _localctx: OverrideInstructionContext = new OverrideInstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, YmlParser.RULE_overrideInstruction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.ymlId();
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.FUNCTION) {
				{
				this.state = 419;
				this.match(YmlParser.FUNCTION);
				}
			}

			this.state = 425;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 422;
					this.field();
					}
					}
				}
				this.state = 427;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclarationIntro(): ClassDeclarationIntroContext {
		let _localctx: ClassDeclarationIntroContext = new ClassDeclarationIntroContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, YmlParser.RULE_classDeclarationIntro);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.match(YmlParser.INTERFACE);
			this.state = 429;
			_localctx._className = this.ymlId();
			this.state = 431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.EXTENDS) {
				{
				this.state = 430;
				this.extendsBlock();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extendsBlock(): ExtendsBlockContext {
		let _localctx: ExtendsBlockContext = new ExtendsBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, YmlParser.RULE_extendsBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.match(YmlParser.EXTENDS);
			this.state = 434;
			this.parentClassName();
			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 435;
				this.match(YmlParser.COMMA);
				this.state = 436;
				this.parentClassName();
				}
				}
				this.state = 441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parentClassName(): ParentClassNameContext {
		let _localctx: ParentClassNameContext = new ParentClassNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, YmlParser.RULE_parentClassName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.ymlId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public synonym(): SynonymContext {
		let _localctx: SynonymContext = new SynonymContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, YmlParser.RULE_synonym);
		let _la: number;
		try {
			this.state = 459;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 444;
				this.match(YmlParser.SYNONYM);
				this.state = 445;
				this.constList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 446;
				this.match(YmlParser.SYNONYM);
				this.state = 447;
				this.match(YmlParser.OPEN_PAR);
				this.state = 456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 72)) | (1 << (YmlParser.OPEN_PAR - 72)) | (1 << (YmlParser.OPEN_BRACKET - 72)) | (1 << (YmlParser.OPEN_BRACE - 72)) | (1 << (YmlParser.QUESTION_MARK - 72)) | (1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.SUB - 72)) | (1 << (YmlParser.MOD - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.NUMBER - 72)))) !== 0) || _la === YmlParser.YMLID) {
					{
					this.state = 448;
					_localctx._value = this.value();
					_localctx._synonymElements.push(_localctx._value);
					this.state = 453;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === YmlParser.COMMA) {
						{
						{
						this.state = 449;
						this.match(YmlParser.COMMA);
						this.state = 450;
						_localctx._value = this.value();
						_localctx._synonymElements.push(_localctx._value);
						}
						}
						this.state = 455;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 458;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classAttributeDeclaration(): ClassAttributeDeclarationContext {
		let _localctx: ClassAttributeDeclarationContext = new ClassAttributeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, YmlParser.RULE_classAttributeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			this.match(YmlParser.FIELD);
			this.state = 462;
			_localctx._memberName = this.ymlId();
			this.state = 466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.FIELD_INTRO - 68)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 68)) | (1 << (YmlParser.REMOVE_FIELD - 68)) | (1 << (YmlParser.ADD_FIELD - 68)))) !== 0)) {
				{
				{
				this.state = 463;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberDeclaration(): MemberDeclarationContext {
		let _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, YmlParser.RULE_memberDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			_localctx._type = this.memberType();
			this.state = 470;
			_localctx._memberName = this.ymlId();
			this.state = 474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.FIELD_INTRO - 68)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 68)) | (1 << (YmlParser.REMOVE_FIELD - 68)) | (1 << (YmlParser.ADD_FIELD - 68)))) !== 0)) {
				{
				{
				this.state = 471;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberType(): MemberTypeContext {
		let _localctx: MemberTypeContext = new MemberTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, YmlParser.RULE_memberType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.ymlId();
			this.state = 482;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 478;
					this.match(YmlParser.COND_OR);
					this.state = 479;
					this.ymlId();
					}
					}
				}
				this.state = 484;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public path(): PathContext {
		let _localctx: PathContext = new PathContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, YmlParser.RULE_path);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this.ymlId();
			this.state = 488;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 486;
					this.match(YmlParser.DOT);
					this.state = 487;
					this.ymlId();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 490;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ymlIdOrPath(): YmlIdOrPathContext {
		let _localctx: YmlIdOrPathContext = new YmlIdOrPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, YmlParser.RULE_ymlIdOrPath);
		try {
			this.state = 494;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 492;
				this.ymlId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 493;
				this.path();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, YmlParser.RULE_field);
		try {
			this.state = 501;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 496;
				this.actionField();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 497;
				this.commonField();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 498;
				this.returnField();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 499;
				this.localField();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 500;
				this.implementationField();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public actionField(): ActionFieldContext {
		let _localctx: ActionFieldContext = new ActionFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, YmlParser.RULE_actionField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this.match(YmlParser.FIELD_INTRO);
			this.state = 504;
			_localctx._optionName = this.match(YmlParser.ACTION);
			this.state = 505;
			this.actionFieldValues();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public actionFieldValues(): ActionFieldValuesContext {
		let _localctx: ActionFieldValuesContext = new ActionFieldValuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, YmlParser.RULE_actionFieldValues);
		try {
			this.state = 511;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 507;
				this.actionBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 508;
				this.chainedCall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 509;
				this.instruction_return();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 510;
				this.ifExprBlock();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implementationField(): ImplementationFieldContext {
		let _localctx: ImplementationFieldContext = new ImplementationFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, YmlParser.RULE_implementationField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this.match(YmlParser.FIELD_INTRO);
			this.state = 514;
			this.match(YmlParser.IMPLEMENTATION);
			this.state = 515;
			this.actionBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instructionNoSemi(): InstructionNoSemiContext {
		let _localctx: InstructionNoSemiContext = new InstructionNoSemiContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, YmlParser.RULE_instructionNoSemi);
		try {
			this.state = 520;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 517;
				this.ifExprBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 518;
				this.chainedCall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 519;
				this.instruction_return();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commonField(): CommonFieldContext {
		let _localctx: CommonFieldContext = new CommonFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, YmlParser.RULE_commonField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			_localctx._fieldArrow = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.FIELD_INTRO - 68)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 68)) | (1 << (YmlParser.REMOVE_FIELD - 68)) | (1 << (YmlParser.ADD_FIELD - 68)))) !== 0))) {
				_localctx._fieldArrow = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 523;
			_localctx._optionName = this.ymlIdOrPath();
			this.state = 524;
			_localctx._optionValue = this.objectAttributeValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public local_variable_decl(): Local_variable_declContext {
		let _localctx: Local_variable_declContext = new Local_variable_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, YmlParser.RULE_local_variable_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			_localctx._type = this.memberType();
			this.state = 527;
			_localctx._memberName = this.ymlId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localField(): LocalFieldContext {
		let _localctx: LocalFieldContext = new LocalFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, YmlParser.RULE_localField);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			_localctx._fieldArrow = this.match(YmlParser.FIELD_INTRO);
			this.state = 530;
			_localctx._optionName = this.match(YmlParser.LOCAL);
			this.state = 539;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 531;
				_localctx._local_variable_decl = this.local_variable_decl();
				_localctx._optionValues.push(_localctx._local_variable_decl);
				this.state = 536;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 532;
						this.match(YmlParser.COMMA);
						this.state = 533;
						_localctx._local_variable_decl = this.local_variable_decl();
						_localctx._optionValues.push(_localctx._local_variable_decl);
						}
						}
					}
					this.state = 538;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnField(): ReturnFieldContext {
		let _localctx: ReturnFieldContext = new ReturnFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, YmlParser.RULE_returnField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			_localctx._fieldArrow = this.match(YmlParser.FIELD_INTRO);
			this.state = 542;
			_localctx._optionName = this.match(YmlParser.RETURN);
			this.state = 543;
			_localctx._optionValue = this.objectReturnAttributeValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classPropertiesBlock(): ClassPropertiesBlockContext {
		let _localctx: ClassPropertiesBlockContext = new ClassPropertiesBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, YmlParser.RULE_classPropertiesBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			this.match(YmlParser.CLASSPROPERTIES);
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.FIELD_INTRO - 68)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 68)) | (1 << (YmlParser.REMOVE_FIELD - 68)) | (1 << (YmlParser.ADD_FIELD - 68)))) !== 0)) {
				{
				{
				this.state = 546;
				_localctx._classOption = this.field();
				}
				}
				this.state = 551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multilineString(): MultilineStringContext {
		let _localctx: MultilineStringContext = new MultilineStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, YmlParser.RULE_multilineString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.match(YmlParser.TRIPLE_QUOTE);
			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.ANY) {
				{
				{
				this.state = 553;
				_localctx._stringContent = this.match(YmlParser.ANY);
				}
				}
				this.state = 558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 559;
			this.match(YmlParser.TRIPLE_QUOTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectReturnAttributeValue(): ObjectReturnAttributeValueContext {
		let _localctx: ObjectReturnAttributeValueContext = new ObjectReturnAttributeValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, YmlParser.RULE_objectReturnAttributeValue);
		try {
			this.state = 570;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 561;
				this.ifExprBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 562;
				this.conditionalExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 563;
				this.value();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 564;
				this.hashMapKeyValue();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 565;
				this.multilineString();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 566;
				_localctx._type = this.ymlId();
				this.state = 567;
				_localctx._name = this.ymlId();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 569;
				this.simpleList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectAttributeValue(): ObjectAttributeValueContext {
		let _localctx: ObjectAttributeValueContext = new ObjectAttributeValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, YmlParser.RULE_objectAttributeValue);
		try {
			this.state = 584;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 572;
				this.instruction_return();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 573;
				this.ifExprBlock();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 574;
				this.conditionalExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 575;
				this.value();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 576;
				this.hashMapKeyValueList();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 577;
				this.hashMapKeyValue();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 578;
				this.multilineString();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 579;
				_localctx._type = this.ymlId();
				this.state = 580;
				_localctx._name = this.ymlId();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 582;
				this.simpleList();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 583;
				this.actionBlock();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueOrCondition(): ValueOrConditionContext {
		let _localctx: ValueOrConditionContext = new ValueOrConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, YmlParser.RULE_valueOrCondition);
		try {
			this.state = 593;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 586;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 587;
				this.value();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 588;
				this.hashMapKeyValue();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 589;
				this.multilineString();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 590;
				_localctx._type = this.ymlId();
				this.state = 591;
				_localctx._name = this.ymlId();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hashMapKeyValueList(): HashMapKeyValueListContext {
		let _localctx: HashMapKeyValueListContext = new HashMapKeyValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, YmlParser.RULE_hashMapKeyValueList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this.hashMapKeyValue();
			this.state = 598;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 596;
					this.match(YmlParser.COMMA);
					this.state = 597;
					this.hashMapKeyValue();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 600;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hashMap(): HashMapContext {
		let _localctx: HashMapContext = new HashMapContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, YmlParser.RULE_hashMap);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 605;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 603;
				this.hashMapKeyValue();
				}
				break;

			case 2:
				{
				this.state = 604;
				this.hashMapKeyValueList();
				}
				break;
			}
			this.state = 607;
			this.match(YmlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hashMapKeyValue(): HashMapKeyValueContext {
		let _localctx: HashMapKeyValueContext = new HashMapKeyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, YmlParser.RULE_hashMapKeyValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 609;
			this.hashMapKey();
			this.state = 610;
			this.match(YmlParser.COLON);
			this.state = 611;
			this.hashMapValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hashMapKey(): HashMapKeyContext {
		let _localctx: HashMapKeyContext = new HashMapKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, YmlParser.RULE_hashMapKey);
		try {
			this.state = 620;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 613;
				this.bool();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 614;
				this.match(YmlParser.STRING);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 615;
				this.match(YmlParser.DATE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 616;
				this.chainedCall();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 617;
				this.match(YmlParser.NUMBER);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 618;
				this.array();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 619;
				this.constList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hashMapValue(): HashMapValueContext {
		let _localctx: HashMapValueContext = new HashMapValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, YmlParser.RULE_hashMapValue);
		try {
			this.state = 624;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 622;
				this.value();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 623;
				this.conditionalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, YmlParser.RULE_value);
		try {
			this.state = 641;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 626;
				this.granule();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 627;
				this.inlineDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 628;
				this.arithmeticExpression(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 629;
				this.nonArithmeticValue();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 630;
				this.synonym();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 631;
				this.ifExprBlock();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 632;
				this.array();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 633;
				this.constList();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 634;
				this.inValue();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 635;
				this.applyCollection();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 636;
				this.applyCollectionOn();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 637;
				this.as();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 638;
				this.hashMap();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 639;
				this.instruction_switchExpr_withValue();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 640;
				this.instruction_switchExpr_asIf();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public as(): AsContext {
		let _localctx: AsContext = new AsContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, YmlParser.RULE_as);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 643;
			this.match(YmlParser.AS);
			this.state = 644;
			this.match(YmlParser.OPEN_PAR);
			this.state = 645;
			this.instanciationVariable();
			this.state = 653;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 646;
					this.match(YmlParser.COMMA);
					this.state = 649;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
					case 1:
						{
						this.state = 647;
						this.instruction_assignment();
						}
						break;

					case 2:
						{
						this.state = 648;
						this.conditionalExpression();
						}
						break;
					}
					}
					}
				}
				this.state = 655;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			}
			this.state = 656;
			this.match(YmlParser.COMMA);
			this.state = 657;
			this.conditionalExpression();
			this.state = 658;
			this.match(YmlParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public applyCollection(): ApplyCollectionContext {
		let _localctx: ApplyCollectionContext = new ApplyCollectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, YmlParser.RULE_applyCollection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 660;
			this.match(YmlParser.APPLY_COLLECTION);
			this.state = 661;
			this.match(YmlParser.OPEN_PAR);
			this.state = 662;
			this.value();
			this.state = 663;
			this.match(YmlParser.COMMA);
			this.state = 670;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.WHERE_APPLY_COLLECTION:
				{
				this.state = 664;
				this.match(YmlParser.WHERE_APPLY_COLLECTION);
				this.state = 665;
				this.conditionalExpression();
				}
				break;
			case YmlParser.OPERATION_APPLY_COLLECTION:
				{
				this.state = 666;
				this.match(YmlParser.OPERATION_APPLY_COLLECTION);
				this.state = 667;
				this.ymlId();
				}
				break;
			case YmlParser.ARGUMENTS_APPLY_COLLECTION:
				{
				this.state = 668;
				this.match(YmlParser.ARGUMENTS_APPLY_COLLECTION);
				this.state = 669;
				this.value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 672;
				this.match(YmlParser.COMMA);
				this.state = 679;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case YmlParser.WHERE_APPLY_COLLECTION:
					{
					this.state = 673;
					this.match(YmlParser.WHERE_APPLY_COLLECTION);
					this.state = 674;
					this.conditionalExpression();
					}
					break;
				case YmlParser.OPERATION_APPLY_COLLECTION:
					{
					this.state = 675;
					this.match(YmlParser.OPERATION_APPLY_COLLECTION);
					this.state = 676;
					this.ymlId();
					}
					break;
				case YmlParser.ARGUMENTS_APPLY_COLLECTION:
					{
					this.state = 677;
					this.match(YmlParser.ARGUMENTS_APPLY_COLLECTION);
					this.state = 678;
					this.value();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 685;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 686;
			this.match(YmlParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public applyCollectionOn(): ApplyCollectionOnContext {
		let _localctx: ApplyCollectionOnContext = new ApplyCollectionOnContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, YmlParser.RULE_applyCollectionOn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 688;
			this.match(YmlParser.APPLY_COLLECTION_ON);
			this.state = 689;
			this.match(YmlParser.OPEN_PAR);
			this.state = 690;
			this.value();
			this.state = 691;
			this.match(YmlParser.COMMA);
			this.state = 698;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.WHERE_APPLY_COLLECTION_ON:
				{
				this.state = 692;
				this.match(YmlParser.WHERE_APPLY_COLLECTION_ON);
				this.state = 693;
				this.conditionalExpression();
				}
				break;
			case YmlParser.OPERATION_APPLY_COLLECTION_ON:
				{
				this.state = 694;
				this.match(YmlParser.OPERATION_APPLY_COLLECTION_ON);
				this.state = 695;
				this.ymlId();
				}
				break;
			case YmlParser.SELECT_APPLY_COLLECTION_ON:
				{
				this.state = 696;
				this.match(YmlParser.SELECT_APPLY_COLLECTION_ON);
				this.state = 697;
				this.value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 711;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 700;
				this.match(YmlParser.COMMA);
				this.state = 707;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case YmlParser.WHERE_APPLY_COLLECTION_ON:
					{
					this.state = 701;
					this.match(YmlParser.WHERE_APPLY_COLLECTION_ON);
					this.state = 702;
					this.conditionalExpression();
					}
					break;
				case YmlParser.OPERATION_APPLY_COLLECTION_ON:
					{
					this.state = 703;
					this.match(YmlParser.OPERATION_APPLY_COLLECTION_ON);
					this.state = 704;
					this.ymlId();
					}
					break;
				case YmlParser.SELECT_APPLY_COLLECTION_ON:
					{
					this.state = 705;
					this.match(YmlParser.SELECT_APPLY_COLLECTION_ON);
					this.state = 706;
					this.value();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 713;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 714;
			this.match(YmlParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_forEach(): Instruction_forEachContext {
		let _localctx: Instruction_forEachContext = new Instruction_forEachContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, YmlParser.RULE_instruction_forEach);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this.match(YmlParser.FOREACH);
			this.state = 717;
			this.match(YmlParser.OPEN_PAR);
			{
			this.state = 719;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 718;
				_localctx._type = this.ymlId();
				}
				break;
			}
			this.state = 721;
			_localctx._name = this.ymlId();
			}
			this.state = 723;
			this.match(YmlParser.COMMA);
			this.state = 724;
			this.value();
			this.state = 725;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 726;
			this.actionBlockOrInstruction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_for(): Instruction_forContext {
		let _localctx: Instruction_forContext = new Instruction_forContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, YmlParser.RULE_instruction_for);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this.match(YmlParser.FOR);
			this.state = 729;
			this.match(YmlParser.OPEN_PAR);
			this.state = 730;
			_localctx._name = this.ymlId();
			this.state = 731;
			this.match(YmlParser.COMMA);
			this.state = 732;
			_localctx._step = this.value();
			this.state = 733;
			this.match(YmlParser.COMMA);
			this.state = 734;
			_localctx._collection = this.value();
			this.state = 735;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 736;
			this.actionBlockOrInstruction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_ifExprBlock(): Instruction_ifExprBlockContext {
		let _localctx: Instruction_ifExprBlockContext = new Instruction_ifExprBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, YmlParser.RULE_instruction_ifExprBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 738;
			this.ifExprBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifExprBlock(): IfExprBlockContext {
		let _localctx: IfExprBlockContext = new IfExprBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, YmlParser.RULE_ifExprBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 740;
			this.match(YmlParser.IF_EXPR);
			this.state = 741;
			this.match(YmlParser.OPEN_PAR);
			this.state = 742;
			_localctx._condition = this.conditionalExpression();
			this.state = 743;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 744;
			this.match(YmlParser.THEN);
			this.state = 745;
			_localctx._thenValue = this.value();
			this.state = 746;
			this.match(YmlParser.ELSE);
			this.state = 747;
			_localctx._elseValue = this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool(): BoolContext {
		let _localctx: BoolContext = new BoolContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, YmlParser.RULE_bool);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 749;
			_la = this._input.LA(1);
			if (!(_la === YmlParser.TRUE || _la === YmlParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonArithmeticValue(): NonArithmeticValueContext {
		let _localctx: NonArithmeticValueContext = new NonArithmeticValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, YmlParser.RULE_nonArithmeticValue);
		try {
			this.state = 754;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.TRUE:
			case YmlParser.FALSE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 751;
				this.bool();
				}
				break;
			case YmlParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 752;
				this.match(YmlParser.STRING);
				}
				break;
			case YmlParser.DATE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 753;
				this.match(YmlParser.DATE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instanciationVariable(): InstanciationVariableContext {
		let _localctx: InstanciationVariableContext = new InstanciationVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, YmlParser.RULE_instanciationVariable);
		try {
			this.state = 763;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.QUESTION_MARK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 756;
				this.match(YmlParser.QUESTION_MARK);
				this.state = 757;
				this.ymlId();
				}
				break;
			case YmlParser.OPERATION_APPLY_COLLECTION_ON:
			case YmlParser.IMPLEMENTATION:
			case YmlParser.EXTENDS:
			case YmlParser.FUNCTION_AS_TYPE:
			case YmlParser.TEXT_FUNCTION:
			case YmlParser.ARGS:
			case YmlParser.AS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.CASE:
			case YmlParser.STATIC:
			case YmlParser.RENAME:
			case YmlParser.TO:
			case YmlParser.FOR_CLASS:
			case YmlParser.RULESET:
			case YmlParser.RULE_TYPE:
			case YmlParser.ATTRIBUTES:
			case YmlParser.TIME_COUNTER:
			case YmlParser.CONDITION:
			case YmlParser.NO_EXISTS:
			case YmlParser.EXISTS:
			case YmlParser.MODIFY:
			case YmlParser.MOD:
			case YmlParser.YMLID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 758;
				this.ymlId();
				this.state = 759;
				this.match(YmlParser.OPEN_PAR);
				this.state = 760;
				this.instanciationVariable();
				this.state = 761;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public possiblyIndexedExpression(): PossiblyIndexedExpressionContext {
		let _localctx: PossiblyIndexedExpressionContext = new PossiblyIndexedExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, YmlParser.RULE_possiblyIndexedExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 765;
			this.expression();
			this.state = 769;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 766;
					this.index();
					}
					}
				}
				this.state = 771;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, YmlParser.RULE_expression);
		try {
			this.state = 795;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 772;
				this.instanciationVariable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 773;
				this.granule();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 774;
				this.constList();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 775;
				this.as();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 776;
				this.applyCollection();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 777;
				this.applyCollectionOn();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 778;
				this.functionCall();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 779;
				this.array();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 780;
				this.hashMap();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 781;
				this.parenthesisConditionalExpression();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 782;
				this.match(YmlParser.OPEN_PAR);
				this.state = 783;
				this.instruction_switchExpr_withValue();
				this.state = 784;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 786;
				this.match(YmlParser.OPEN_PAR);
				this.state = 787;
				this.instruction_switchExpr_asIf();
				this.state = 788;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 790;
				this.match(YmlParser.OPEN_PAR);
				this.state = 791;
				this.ifExprBlock();
				this.state = 792;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 794;
				this.ymlId();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, YmlParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this.ymlId();
			this.state = 798;
			this.match(YmlParser.OPEN_PAR);
			this.state = 807;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.WHATEVER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 72)) | (1 << (YmlParser.OPEN_PAR - 72)) | (1 << (YmlParser.OPEN_BRACKET - 72)) | (1 << (YmlParser.OPEN_BRACE - 72)) | (1 << (YmlParser.QUESTION_MARK - 72)) | (1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.SUB - 72)) | (1 << (YmlParser.MOD - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.TRIPLE_QUOTE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.NUMBER - 72)))) !== 0) || _la === YmlParser.YMLID || _la === YmlParser.ID) {
				{
				this.state = 799;
				this.functionArgument();
				this.state = 804;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === YmlParser.COMMA) {
					{
					{
					this.state = 800;
					this.match(YmlParser.COMMA);
					this.state = 801;
					this.functionArgument();
					}
					}
					this.state = 806;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 809;
			this.match(YmlParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public index(): IndexContext {
		let _localctx: IndexContext = new IndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, YmlParser.RULE_index);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 811;
			this.match(YmlParser.OPEN_BRACKET);
			this.state = 812;
			this.functionArgument();
			this.state = 813;
			this.match(YmlParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionArgument(): FunctionArgumentContext {
		let _localctx: FunctionArgumentContext = new FunctionArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, YmlParser.RULE_functionArgument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.ID) {
				{
				this.state = 815;
				_localctx._argKey = this.match(YmlParser.ID);
				this.state = 816;
				this.match(YmlParser.COLON);
				}
			}

			this.state = 821;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 819;
				this.valueOrCondition();
				}
				break;

			case 2:
				{
				this.state = 820;
				this.instanciationVariable();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chainedCall(): ChainedCallContext {
		let _localctx: ChainedCallContext = new ChainedCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, YmlParser.RULE_chainedCall);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 823;
			this.possiblyIndexedExpression();
			this.state = 829;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 824;
					_localctx._marker = this.expressionMarker();
					this.state = 825;
					this.possiblyIndexedExpression();
					}
					}
				}
				this.state = 831;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inlineDeclaration(): InlineDeclarationContext {
		let _localctx: InlineDeclarationContext = new InlineDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, YmlParser.RULE_inlineDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 832;
			this.match(YmlParser.INLINE_DECL_INTRO);
			this.state = 843;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 833;
				this.staticDeclaration();
				}
				break;

			case 2:
				{
				this.state = 834;
				_localctx._className = this.ymlId();
				this.state = 838;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.FIELD_INTRO - 68)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 68)) | (1 << (YmlParser.REMOVE_FIELD - 68)) | (1 << (YmlParser.ADD_FIELD - 68)) | (1 << (YmlParser.OPEN_BRACE - 68)) | (1 << (YmlParser.OPEN_GRANULE - 68)))) !== 0)) {
					{
					{
					this.state = 835;
					this.fieldValue();
					}
					}
					this.state = 840;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 841;
				this.match(YmlParser.SEMICOLON);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inlineOperation(): InlineOperationContext {
		let _localctx: InlineOperationContext = new InlineOperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, YmlParser.RULE_inlineOperation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 845;
			_localctx._leftExpression = this.value();
			this.state = 846;
			_localctx._operator = this.ymlId();
			this.state = 847;
			_localctx._rightExpression = this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldValue(): FieldValueContext {
		let _localctx: FieldValueContext = new FieldValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, YmlParser.RULE_fieldValue);
		try {
			this.state = 852;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.FIELD_INTRO:
			case YmlParser.REPLACE_FIELD_VALUE_INTRO:
			case YmlParser.REMOVE_FIELD:
			case YmlParser.ADD_FIELD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 849;
				this.field();
				}
				break;
			case YmlParser.OPEN_GRANULE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 850;
				this.granule();
				}
				break;
			case YmlParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 851;
				this.constList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, YmlParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 854;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.FUNCTION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.METHOD) | (1 << YmlParser.TEXT_METHOD) | (1 << YmlParser.TEXT_FUNCTION))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 855;
			this.ymlId();
			this.state = 861;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.ARGS:
				{
				this.state = 856;
				this.argsBlock();
				}
				break;
			case YmlParser.OPEN_PAR:
				{
				this.state = 857;
				this.match(YmlParser.OPEN_PAR);
				this.state = 858;
				this.argumentList();
				this.state = 859;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 864;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.LOCAL) {
				{
				this.state = 863;
				this.localBlock();
				}
			}

			this.state = 867;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.STATIC) {
				{
				this.state = 866;
				this.staticBlock();
				}
			}

			this.state = 870;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.RULESET) {
				{
				this.state = 869;
				this.ruleset();
				}
			}

			this.state = 875;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.FIELD_INTRO - 68)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 68)) | (1 << (YmlParser.REMOVE_FIELD - 68)) | (1 << (YmlParser.ADD_FIELD - 68)))) !== 0)) {
				{
				{
				this.state = 872;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 877;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 878;
			this.match(YmlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argsBlock(): ArgsBlockContext {
		let _localctx: ArgsBlockContext = new ArgsBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, YmlParser.RULE_argsBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 880;
			this.match(YmlParser.ARGS);
			this.state = 881;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 882;
			this.variableBlockContent();
			this.state = 883;
			this.match(YmlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localBlock(): LocalBlockContext {
		let _localctx: LocalBlockContext = new LocalBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, YmlParser.RULE_localBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 885;
			this.match(YmlParser.LOCAL);
			this.state = 886;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 887;
			this.variableBlockContent();
			this.state = 888;
			this.match(YmlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticBlock(): StaticBlockContext {
		let _localctx: StaticBlockContext = new StaticBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, YmlParser.RULE_staticBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 890;
			this.match(YmlParser.STATIC);
			this.state = 891;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 895;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
				{
				{
				this.state = 892;
				this.staticDeclaration();
				}
				}
				this.state = 897;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 898;
			this.match(YmlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, YmlParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 900;
			this.methodIntro();
			this.state = 904;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.FIELD_INTRO - 68)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 68)) | (1 << (YmlParser.REMOVE_FIELD - 68)) | (1 << (YmlParser.ADD_FIELD - 68)))) !== 0)) {
				{
				{
				this.state = 901;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 906;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodCompleteDeclaration(): MethodCompleteDeclarationContext {
		let _localctx: MethodCompleteDeclarationContext = new MethodCompleteDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, YmlParser.RULE_methodCompleteDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 907;
			this.methodIntro();
			this.state = 908;
			this.match(YmlParser.FUNCTION);
			this.state = 912;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.FIELD_INTRO - 68)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 68)) | (1 << (YmlParser.REMOVE_FIELD - 68)) | (1 << (YmlParser.ADD_FIELD - 68)))) !== 0)) {
				{
				{
				this.state = 909;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 914;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodIntro(): MethodIntroContext {
		let _localctx: MethodIntroContext = new MethodIntroContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, YmlParser.RULE_methodIntro);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 915;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.FUNCTION) | (1 << YmlParser.METHOD) | (1 << YmlParser.TEXT_METHOD) | (1 << YmlParser.TEXT_FUNCTION))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 916;
			this.ymlId();
			this.state = 922;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.ARGS:
				{
				this.state = 917;
				this.argsBlock();
				}
				break;
			case YmlParser.OPEN_PAR:
				{
				this.state = 918;
				this.match(YmlParser.OPEN_PAR);
				this.state = 919;
				this.argumentList();
				this.state = 920;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, YmlParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
				{
				this.state = 924;
				this.mandatoryArgs();
				}
			}

			this.state = 928;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.COMMA || _la === YmlParser.OPEN_BRACE) {
				{
				this.state = 927;
				this.optionalArgs();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mandatoryArgs(): MandatoryArgsContext {
		let _localctx: MandatoryArgsContext = new MandatoryArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, YmlParser.RULE_mandatoryArgs);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 930;
			this.mandatoryArgDecl();
			this.state = 935;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 931;
					this.match(YmlParser.COMMA);
					this.state = 932;
					this.mandatoryArgDecl();
					}
					}
				}
				this.state = 937;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mandatoryArgDecl(): MandatoryArgDeclContext {
		let _localctx: MandatoryArgDeclContext = new MandatoryArgDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, YmlParser.RULE_mandatoryArgDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 938;
			_localctx._argType = this.memberType();
			this.state = 939;
			_localctx._argName = this.ymlId();
			this.state = 941;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 940;
				this.argOptionList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalArgs(): OptionalArgsContext {
		let _localctx: OptionalArgsContext = new OptionalArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, YmlParser.RULE_optionalArgs);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 944;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.COMMA) {
				{
				this.state = 943;
				this.match(YmlParser.COMMA);
				}
			}

			this.state = 946;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 958;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (YmlParser.OPEN_BRACKET - 75)) | (1 << (YmlParser.MOD - 75)) | (1 << (YmlParser.YMLID - 75)))) !== 0)) {
				{
				this.state = 947;
				_localctx._optionalArgDecl = this.optionalArgDecl();
				_localctx._optionalArguments.push(_localctx._optionalArgDecl);
				this.state = 952;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 948;
						this.match(YmlParser.COMMA);
						this.state = 949;
						_localctx._optionalArgDecl = this.optionalArgDecl();
						_localctx._optionalArguments.push(_localctx._optionalArgDecl);
						}
						}
					}
					this.state = 954;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
				}
				this.state = 956;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === YmlParser.COMMA) {
					{
					this.state = 955;
					this.match(YmlParser.COMMA);
					}
				}

				}
			}

			this.state = 960;
			this.match(YmlParser.CLOSE_BRACE);
			this.state = 962;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
				{
				this.state = 961;
				_localctx._argSetName = this.ymlId();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalArgDecl(): OptionalArgDeclContext {
		let _localctx: OptionalArgDeclContext = new OptionalArgDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, YmlParser.RULE_optionalArgDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 969;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.OPEN_BRACKET:
				{
				this.state = 964;
				this.match(YmlParser.OPEN_BRACKET);
				this.state = 965;
				_localctx._optionalKeyName = this.ymlId();
				this.state = 966;
				this.match(YmlParser.CLOSE_BRACKET);
				}
				break;
			case YmlParser.OPERATION_APPLY_COLLECTION_ON:
			case YmlParser.IMPLEMENTATION:
			case YmlParser.EXTENDS:
			case YmlParser.FUNCTION_AS_TYPE:
			case YmlParser.TEXT_FUNCTION:
			case YmlParser.ARGS:
			case YmlParser.AS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.CASE:
			case YmlParser.STATIC:
			case YmlParser.RENAME:
			case YmlParser.TO:
			case YmlParser.FOR_CLASS:
			case YmlParser.RULESET:
			case YmlParser.RULE_TYPE:
			case YmlParser.ATTRIBUTES:
			case YmlParser.TIME_COUNTER:
			case YmlParser.CONDITION:
			case YmlParser.NO_EXISTS:
			case YmlParser.EXISTS:
			case YmlParser.MODIFY:
			case YmlParser.MOD:
			case YmlParser.YMLID:
				{
				this.state = 968;
				_localctx._mandatoryKeyName = this.ymlId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 971;
			this.match(YmlParser.COLON);
			this.state = 972;
			_localctx._argType = this.ymlId();
			this.state = 974;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
				{
				this.state = 973;
				_localctx._argName = this.ymlId();
				}
			}

			this.state = 977;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.OPEN_BRACE) {
				{
				this.state = 976;
				this.argOptionList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argOptionList(): ArgOptionListContext {
		let _localctx: ArgOptionListContext = new ArgOptionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, YmlParser.RULE_argOptionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 979;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 980;
			_localctx._argOptionBlock = this.argOptionBlock();
			_localctx._arguments.push(_localctx._argOptionBlock);
			this.state = 985;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 981;
				this.match(YmlParser.COMMA);
				this.state = 982;
				_localctx._argOptionBlock = this.argOptionBlock();
				_localctx._arguments.push(_localctx._argOptionBlock);
				}
				}
				this.state = 987;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 988;
			this.match(YmlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argOptionBlock(): ArgOptionBlockContext {
		let _localctx: ArgOptionBlockContext = new ArgOptionBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, YmlParser.RULE_argOptionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 990;
			_localctx._argOption = this.ymlId();
			this.state = 992;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 72)) | (1 << (YmlParser.OPEN_PAR - 72)) | (1 << (YmlParser.OPEN_BRACKET - 72)) | (1 << (YmlParser.OPEN_BRACE - 72)) | (1 << (YmlParser.QUESTION_MARK - 72)) | (1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.SUB - 72)) | (1 << (YmlParser.MOD - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.NUMBER - 72)))) !== 0) || _la === YmlParser.YMLID) {
				{
				this.state = 991;
				_localctx._optionValue = this.value();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public order1Block(): Order1BlockContext {
		let _localctx: Order1BlockContext = new Order1BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, YmlParser.RULE_order1Block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 994;
			this.instanciationCondition();
			this.state = 996;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 995;
				this.conditionBlock();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instanciationCondition(): InstanciationConditionContext {
		let _localctx: InstanciationConditionContext = new InstanciationConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, YmlParser.RULE_instanciationCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 998;
			this.inlineOperation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public order1FullCondition(): Order1FullConditionContext {
		let _localctx: Order1FullConditionContext = new Order1FullConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, YmlParser.RULE_order1FullCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1001;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 1000;
				this.conditionBlock();
				}
				break;
			}
			this.state = 1006;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 72)) | (1 << (YmlParser.OPEN_PAR - 72)) | (1 << (YmlParser.OPEN_BRACKET - 72)) | (1 << (YmlParser.OPEN_BRACE - 72)) | (1 << (YmlParser.QUESTION_MARK - 72)) | (1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.SUB - 72)) | (1 << (YmlParser.MOD - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.NUMBER - 72)))) !== 0) || _la === YmlParser.YMLID) {
				{
				{
				this.state = 1003;
				this.order1Block();
				}
				}
				this.state = 1008;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parenthesisConditionalExpression(): ParenthesisConditionalExpressionContext {
		let _localctx: ParenthesisConditionalExpressionContext = new ParenthesisConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, YmlParser.RULE_parenthesisConditionalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1009;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1010;
			this.conditionalExpression();
			this.state = 1011;
			this.match(YmlParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, YmlParser.RULE_conditionalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1013;
			this.conditionalOrExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public conditionalAndExpression(): ConditionalAndExpressionContext;
	public conditionalAndExpression(_p: number): ConditionalAndExpressionContext;
	// @RuleVersion(0)
	public conditionalAndExpression(_p?: number): ConditionalAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionalAndExpressionContext = new ConditionalAndExpressionContext(this._ctx, _parentState);
		let _prevctx: ConditionalAndExpressionContext = _localctx;
		let _startState: number = 162;
		this.enterRecursionRule(_localctx, 162, YmlParser.RULE_conditionalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1018;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 1016;
				this.parenthesisConditionalExpression();
				}
				break;

			case 2:
				{
				this.state = 1017;
				this.comparison();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1025;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionalAndExpressionContext(_parentctx, _parentState);
					_localctx._leftCondition = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, YmlParser.RULE_conditionalAndExpression);
					this.state = 1020;
					if (!(this.precpred(this._ctx, 3))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
					}
					this.state = 1021;
					this.match(YmlParser.COND_AND);
					this.state = 1022;
					_localctx._rightCondition = this.conditionalOrExpression(0);
					}
					}
				}
				this.state = 1027;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public conditionalOrExpression(): ConditionalOrExpressionContext;
	public conditionalOrExpression(_p: number): ConditionalOrExpressionContext;
	// @RuleVersion(0)
	public conditionalOrExpression(_p?: number): ConditionalOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionalOrExpressionContext = new ConditionalOrExpressionContext(this._ctx, _parentState);
		let _prevctx: ConditionalOrExpressionContext = _localctx;
		let _startState: number = 164;
		this.enterRecursionRule(_localctx, 164, YmlParser.RULE_conditionalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1029;
			this.conditionalAndExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1036;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionalOrExpressionContext(_parentctx, _parentState);
					_localctx._leftCondition = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, YmlParser.RULE_conditionalOrExpression);
					this.state = 1031;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 1032;
					this.match(YmlParser.COND_OR);
					this.state = 1033;
					_localctx._rightCondition = this.conditionalAndExpression(0);
					}
					}
				}
				this.state = 1038;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, YmlParser.RULE_comparison);
		try {
			this.state = 1045;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1039;
				_localctx._leftValue = this.value();
				this.state = 1040;
				this.comparisonOperator();
				this.state = 1041;
				_localctx._rightValue = this.value();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1043;
				this.whateverExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1044;
				this.existsExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public existsExpression(): ExistsExpressionContext {
		let _localctx: ExistsExpressionContext = new ExistsExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, YmlParser.RULE_existsExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1047;
			_la = this._input.LA(1);
			if (!(_la === YmlParser.NO_EXISTS || _la === YmlParser.EXISTS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1048;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1049;
			this.inValue();
			this.state = 1050;
			this.match(YmlParser.COMMA);
			this.state = 1051;
			this.conditionalExpression();
			this.state = 1052;
			this.match(YmlParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whateverExpression(): WhateverExpressionContext {
		let _localctx: WhateverExpressionContext = new WhateverExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, YmlParser.RULE_whateverExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1054;
			this.match(YmlParser.WHATEVER);
			this.state = 1055;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1056;
			this.inValue();
			this.state = 1057;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1058;
			this.match(YmlParser.THEN);
			this.state = 1059;
			this.conditionalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, YmlParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1061;
			_la = this._input.LA(1);
			if (!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (YmlParser.EQUAL_COMP - 83)) | (1 << (YmlParser.NOT_EQUALS - 83)) | (1 << (YmlParser.LESS_OR_EQUAL - 83)) | (1 << (YmlParser.GREATE_OR_EQUAL - 83)) | (1 << (YmlParser.STRICT_LESS - 83)) | (1 << (YmlParser.STRICT_GREAT - 83)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_multivaluedAssignment(): Instruction_multivaluedAssignmentContext {
		let _localctx: Instruction_multivaluedAssignmentContext = new Instruction_multivaluedAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, YmlParser.RULE_instruction_multivaluedAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1063;
			_localctx._leftHand = this.assignment_leftHandSide();
			this.state = 1064;
			this.match(YmlParser.MULTIVALUED_ASSIGNMENT);
			this.state = 1065;
			_localctx._rightHand = this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_assignment(): Instruction_assignmentContext {
		let _localctx: Instruction_assignmentContext = new Instruction_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, YmlParser.RULE_instruction_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1067;
			_localctx._leftHand = this.assignment_leftHandSide();
			this.state = 1068;
			this.match(YmlParser.EQUAL_ASSIGNMENT);
			this.state = 1069;
			_localctx._rightHand = this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment_leftHandSide(): Assignment_leftHandSideContext {
		let _localctx: Assignment_leftHandSideContext = new Assignment_leftHandSideContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, YmlParser.RULE_assignment_leftHandSide);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1071;
			this.chainedCall();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionBlock(): ConditionBlockContext {
		let _localctx: ConditionBlockContext = new ConditionBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, YmlParser.RULE_conditionBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1074;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1073;
					this.order0Condition();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1076;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public order0Condition(): Order0ConditionContext {
		let _localctx: Order0ConditionContext = new Order0ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, YmlParser.RULE_order0Condition);
		try {
			this.state = 1080;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1078;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1079;
				this.existentialOperator();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public actionBlockOrInstruction(): ActionBlockOrInstructionContext {
		let _localctx: ActionBlockOrInstructionContext = new ActionBlockOrInstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, YmlParser.RULE_actionBlockOrInstruction);
		try {
			this.state = 1085;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1082;
				this.emptyBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1083;
				this.actionBlock();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1084;
				this.instruction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_switchExpr_withValue(): Instruction_switchExpr_withValueContext {
		let _localctx: Instruction_switchExpr_withValueContext = new Instruction_switchExpr_withValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, YmlParser.RULE_instruction_switchExpr_withValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1087;
			this.match(YmlParser.SWITCH_EXPR);
			this.state = 1088;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1089;
			this.value();
			this.state = 1090;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1091;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1095;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.CASE) {
				{
				{
				this.state = 1092;
				this.instructionCase_withValue();
				}
				}
				this.state = 1097;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1100;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.DEFAULT:
				{
				this.state = 1098;
				this.instructionDefault_withValue();
				}
				break;
			case YmlParser.NO_DEFAULT:
				{
				this.state = 1099;
				this.match(YmlParser.NO_DEFAULT);
				}
				break;
			case YmlParser.CLOSE_BRACE:
				break;
			default:
				break;
			}
			this.state = 1102;
			this.match(YmlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_switchExpr_asIf(): Instruction_switchExpr_asIfContext {
		let _localctx: Instruction_switchExpr_asIfContext = new Instruction_switchExpr_asIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, YmlParser.RULE_instruction_switchExpr_asIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1104;
			this.match(YmlParser.SWITCH_EXPR);
			this.state = 1105;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.CASE) {
				{
				{
				this.state = 1106;
				this.instructionCase_withValue();
				}
				}
				this.state = 1111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.DEFAULT:
				{
				this.state = 1112;
				this.instructionDefault_withValue();
				}
				break;
			case YmlParser.NO_DEFAULT:
				{
				this.state = 1113;
				this.match(YmlParser.NO_DEFAULT);
				}
				break;
			case YmlParser.CLOSE_BRACE:
				break;
			default:
				break;
			}
			this.state = 1116;
			this.match(YmlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_switchCase_withValue(): Instruction_switchCase_withValueContext {
		let _localctx: Instruction_switchCase_withValueContext = new Instruction_switchCase_withValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, YmlParser.RULE_instruction_switchCase_withValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1118;
			this.match(YmlParser.SWITCH);
			this.state = 1119;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1120;
			this.value();
			this.state = 1121;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1122;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.CASE) {
				{
				{
				this.state = 1123;
				this.instructionCase();
				}
				}
				this.state = 1128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1131;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.DEFAULT:
				{
				this.state = 1129;
				this.instructionDefault();
				}
				break;
			case YmlParser.NO_DEFAULT:
				{
				this.state = 1130;
				this.match(YmlParser.NO_DEFAULT);
				}
				break;
			case YmlParser.CLOSE_BRACE:
				break;
			default:
				break;
			}
			this.state = 1133;
			this.match(YmlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_switchCase_asIf(): Instruction_switchCase_asIfContext {
		let _localctx: Instruction_switchCase_asIfContext = new Instruction_switchCase_asIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, YmlParser.RULE_instruction_switchCase_asIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1135;
			this.match(YmlParser.SWITCH);
			this.state = 1136;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.CASE) {
				{
				{
				this.state = 1137;
				this.instructionCase();
				}
				}
				this.state = 1142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1145;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.DEFAULT:
				{
				this.state = 1143;
				this.instructionDefault();
				}
				break;
			case YmlParser.NO_DEFAULT:
				{
				this.state = 1144;
				this.match(YmlParser.NO_DEFAULT);
				}
				break;
			case YmlParser.CLOSE_BRACE:
				break;
			default:
				break;
			}
			this.state = 1147;
			this.match(YmlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instructionDefault_withValue(): InstructionDefault_withValueContext {
		let _localctx: InstructionDefault_withValueContext = new InstructionDefault_withValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, YmlParser.RULE_instructionDefault_withValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1149;
			this.match(YmlParser.DEFAULT);
			this.state = 1150;
			this.match(YmlParser.COLON);
			this.state = 1156;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				{
				this.state = 1151;
				this.value();
				}
				break;

			case 2:
				{
				this.state = 1152;
				this.match(YmlParser.OPEN_BRACE);
				this.state = 1153;
				this.value();
				this.state = 1154;
				this.match(YmlParser.CLOSE_BRACE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instructionCase_withValue(): InstructionCase_withValueContext {
		let _localctx: InstructionCase_withValueContext = new InstructionCase_withValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, YmlParser.RULE_instructionCase_withValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1158;
			this.match(YmlParser.CASE);
			this.state = 1164;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 1159;
				this.match(YmlParser.OPEN_PAR);
				this.state = 1160;
				this.valueOrCondition();
				this.state = 1161;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;

			case 2:
				{
				this.state = 1163;
				this.valueOrCondition();
				}
				break;
			}
			this.state = 1166;
			this.match(YmlParser.COLON);
			this.state = 1172;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				{
				this.state = 1167;
				this.value();
				}
				break;

			case 2:
				{
				this.state = 1168;
				this.match(YmlParser.OPEN_BRACE);
				this.state = 1169;
				this.value();
				this.state = 1170;
				this.match(YmlParser.CLOSE_BRACE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instructionCase(): InstructionCaseContext {
		let _localctx: InstructionCaseContext = new InstructionCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, YmlParser.RULE_instructionCase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1174;
			this.match(YmlParser.CASE);
			this.state = 1181;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 1175;
				this.simpleList();
				}
				break;

			case 2:
				{
				this.state = 1176;
				this.match(YmlParser.OPEN_PAR);
				this.state = 1177;
				this.valueOrCondition();
				this.state = 1178;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;

			case 3:
				{
				this.state = 1180;
				this.valueOrCondition();
				}
				break;
			}
			this.state = 1183;
			this.match(YmlParser.COLON);
			this.state = 1184;
			this.actionBlockOrInstruction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instructionDefault(): InstructionDefaultContext {
		let _localctx: InstructionDefaultContext = new InstructionDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, YmlParser.RULE_instructionDefault);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1186;
			this.match(YmlParser.DEFAULT);
			this.state = 1187;
			this.match(YmlParser.COLON);
			this.state = 1188;
			this.actionBlockOrInstruction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_break(): Instruction_breakContext {
		let _localctx: Instruction_breakContext = new Instruction_breakContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, YmlParser.RULE_instruction_break);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1190;
			this.match(YmlParser.BREAK);
			this.state = 1192;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				{
				this.state = 1191;
				this.match(YmlParser.SEMICOLON);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_ifElse(): Instruction_ifElseContext {
		let _localctx: Instruction_ifElseContext = new Instruction_ifElseContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, YmlParser.RULE_instruction_ifElse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1194;
			_localctx._main = this.ifExpression();
			this.state = 1198;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1195;
					_localctx._elseIfs = this.elseIfExpression();
					}
					}
				}
				this.state = 1200;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			}
			this.state = 1202;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1201;
				_localctx._elseExpr = this.elseExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseExpression(): ElseExpressionContext {
		let _localctx: ElseExpressionContext = new ElseExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, YmlParser.RULE_elseExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1204;
			this.match(YmlParser.ELSE);
			this.state = 1205;
			this.actionBlockOrInstruction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseIfExpression(): ElseIfExpressionContext {
		let _localctx: ElseIfExpressionContext = new ElseIfExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, YmlParser.RULE_elseIfExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1207;
			this.match(YmlParser.ELSE);
			this.state = 1208;
			this.ifExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifExpression(): IfExpressionContext {
		let _localctx: IfExpressionContext = new IfExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, YmlParser.RULE_ifExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1210;
			this.match(YmlParser.IF);
			this.state = 1211;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1212;
			this.order0Condition();
			this.state = 1213;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1214;
			this.actionBlockOrInstruction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_timeCounter(): Instruction_timeCounterContext {
		let _localctx: Instruction_timeCounterContext = new Instruction_timeCounterContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, YmlParser.RULE_instruction_timeCounter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1216;
			this.match(YmlParser.TIME_COUNTER);
			this.state = 1217;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1218;
			this.ymlId();
			this.state = 1219;
			this.match(YmlParser.COMMA);
			this.state = 1220;
			this.actionBlock();
			this.state = 1221;
			this.match(YmlParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inValue(): InValueContext {
		let _localctx: InValueContext = new InValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, YmlParser.RULE_inValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1225;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 1223;
				this.instanciationVariable();
				}
				break;

			case 2:
				{
				this.state = 1224;
				this.ymlId();
				}
				break;
			}
			this.state = 1227;
			this.match(YmlParser.IN);
			this.state = 1230;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.APPLY_COLLECTION:
			case YmlParser.APPLY_COLLECTION_ON:
			case YmlParser.OPERATION_APPLY_COLLECTION_ON:
			case YmlParser.IMPLEMENTATION:
			case YmlParser.EXTENDS:
			case YmlParser.FUNCTION_AS_TYPE:
			case YmlParser.TEXT_FUNCTION:
			case YmlParser.SYNONYM:
			case YmlParser.ARGS:
			case YmlParser.IF_EXPR:
			case YmlParser.AS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.TRUE:
			case YmlParser.FALSE:
			case YmlParser.SWITCH_EXPR:
			case YmlParser.CASE:
			case YmlParser.STATIC:
			case YmlParser.RENAME:
			case YmlParser.TO:
			case YmlParser.FOR_CLASS:
			case YmlParser.RULESET:
			case YmlParser.RULE_TYPE:
			case YmlParser.ATTRIBUTES:
			case YmlParser.TIME_COUNTER:
			case YmlParser.CONDITION:
			case YmlParser.NO_EXISTS:
			case YmlParser.EXISTS:
			case YmlParser.MODIFY:
			case YmlParser.INLINE_DECL_INTRO:
			case YmlParser.OPEN_PAR:
			case YmlParser.OPEN_BRACKET:
			case YmlParser.OPEN_BRACE:
			case YmlParser.QUESTION_MARK:
			case YmlParser.OPEN_GRANULE:
			case YmlParser.SUB:
			case YmlParser.MOD:
			case YmlParser.DATE:
			case YmlParser.STRING:
			case YmlParser.NUMBER:
			case YmlParser.YMLID:
				{
				this.state = 1228;
				this.value();
				}
				break;
			case YmlParser.FUNCTION:
				{
				this.state = 1229;
				this.match(YmlParser.FUNCTION);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_forall(): Instruction_forallContext {
		let _localctx: Instruction_forallContext = new Instruction_forallContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, YmlParser.RULE_instruction_forall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1232;
			this.match(YmlParser.FORALL);
			this.state = 1233;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				{
				this.state = 1234;
				this.conditionalExpression();
				}
				break;

			case 2:
				{
				this.state = 1235;
				this.inValue();
				}
				break;
			}
			this.state = 1248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.WHATEVER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)) | (1 << (YmlParser.COMMA - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 72)) | (1 << (YmlParser.OPEN_PAR - 72)) | (1 << (YmlParser.OPEN_BRACKET - 72)) | (1 << (YmlParser.OPEN_BRACE - 72)) | (1 << (YmlParser.QUESTION_MARK - 72)) | (1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.SUB - 72)) | (1 << (YmlParser.MOD - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.NUMBER - 72)))) !== 0) || _la === YmlParser.YMLID) {
				{
				this.state = 1246;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1239;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === YmlParser.COMMA) {
						{
						this.state = 1238;
						this.match(YmlParser.COMMA);
						}
					}

					this.state = 1241;
					this.inValue();
					}
					break;

				case 2:
					{
					this.state = 1243;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === YmlParser.COMMA) {
						{
						this.state = 1242;
						this.match(YmlParser.COMMA);
						}
					}

					this.state = 1245;
					this.conditionalExpression();
					}
					break;
				}
				}
				this.state = 1250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1251;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1252;
			this.actionBlockOrInstruction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_while(): Instruction_whileContext {
		let _localctx: Instruction_whileContext = new Instruction_whileContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, YmlParser.RULE_instruction_while);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1254;
			this.match(YmlParser.WHILE);
			this.state = 1255;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1256;
			this.order0Condition();
			this.state = 1257;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1258;
			this.actionBlockOrInstruction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_return(): Instruction_returnContext {
		let _localctx: Instruction_returnContext = new Instruction_returnContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, YmlParser.RULE_instruction_return);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1260;
			this.match(YmlParser.RETURN);
			this.state = 1261;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_chainedCall(): Instruction_chainedCallContext {
		let _localctx: Instruction_chainedCallContext = new Instruction_chainedCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, YmlParser.RULE_instruction_chainedCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1263;
			this.chainedCall();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, YmlParser.RULE_instruction);
		try {
			this.state = 1292;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1265;
				this.instruction_multivaluedAssignment();
				this.state = 1266;
				this.match(YmlParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1268;
				this.instruction_assignment();
				this.state = 1269;
				this.match(YmlParser.SEMICOLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1271;
				this.instruction_return();
				this.state = 1272;
				this.match(YmlParser.SEMICOLON);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1274;
				this.instruction_chainedCall();
				this.state = 1275;
				this.match(YmlParser.SEMICOLON);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1277;
				this.instruction_for();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1278;
				this.instruction_forEach();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1279;
				this.instruction_forall();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1280;
				this.instruction_ifElse();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1281;
				this.instruction_try_catch();
				this.state = 1282;
				this.match(YmlParser.SEMICOLON);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1284;
				this.instruction_switchCase_asIf();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1285;
				this.instruction_break();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1286;
				this.instruction_switchCase_withValue();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1287;
				this.instruction_ifExprBlock();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1288;
				this.instruction_while();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1289;
				this.instruction_timeCounter();
				this.state = 1290;
				this.match(YmlParser.SEMICOLON);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_do(): Instruction_doContext {
		let _localctx: Instruction_doContext = new Instruction_doContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, YmlParser.RULE_instruction_do);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1294;
			this.match(YmlParser.DO);
			this.state = 1295;
			this.actionBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_try_catch(): Instruction_try_catchContext {
		let _localctx: Instruction_try_catchContext = new Instruction_try_catchContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, YmlParser.RULE_instruction_try_catch);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1297;
			this.match(YmlParser.TRY);
			this.state = 1298;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1299;
			this.instruction_do();
			this.state = 1300;
			this.match(YmlParser.CATCH);
			this.state = 1301;
			this.match(YmlParser.OPEN_PAR);
			{
			this.state = 1302;
			this.ymlId();
			this.state = 1307;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1303;
					this.match(YmlParser.COMMA);
					this.state = 1304;
					this.ymlId();
					}
					}
				}
				this.state = 1309;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
			}
			}
			this.state = 1310;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1311;
			this.actionBlock();
			this.state = 1312;
			this.match(YmlParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public actionBlock(): ActionBlockContext {
		let _localctx: ActionBlockContext = new ActionBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, YmlParser.RULE_actionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1314;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1315;
				this.instruction();
				}
				}
				this.state = 1318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.IF) | (1 << YmlParser.TRY))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (YmlParser.FOREACH - 33)) | (1 << (YmlParser.FORALL - 33)) | (1 << (YmlParser.AS - 33)) | (1 << (YmlParser.RETURN - 33)) | (1 << (YmlParser.LOCAL - 33)) | (1 << (YmlParser.SWITCH - 33)) | (1 << (YmlParser.CASE - 33)) | (1 << (YmlParser.BREAK - 33)) | (1 << (YmlParser.STATIC - 33)) | (1 << (YmlParser.WHILE - 33)) | (1 << (YmlParser.FOR - 33)) | (1 << (YmlParser.RENAME - 33)) | (1 << (YmlParser.TO - 33)) | (1 << (YmlParser.FOR_CLASS - 33)) | (1 << (YmlParser.RULESET - 33)) | (1 << (YmlParser.RULE_TYPE - 33)) | (1 << (YmlParser.ATTRIBUTES - 33)) | (1 << (YmlParser.TIME_COUNTER - 33)) | (1 << (YmlParser.CONDITION - 33)) | (1 << (YmlParser.NO_EXISTS - 33)) | (1 << (YmlParser.EXISTS - 33)) | (1 << (YmlParser.MODIFY - 33)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (YmlParser.OPEN_PAR - 73)) | (1 << (YmlParser.OPEN_BRACKET - 73)) | (1 << (YmlParser.OPEN_BRACE - 73)) | (1 << (YmlParser.QUESTION_MARK - 73)) | (1 << (YmlParser.OPEN_GRANULE - 73)) | (1 << (YmlParser.MOD - 73)))) !== 0) || _la === YmlParser.YMLID);
			this.state = 1320;
			this.match(YmlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arithmeticOperator(): ArithmeticOperatorContext {
		let _localctx: ArithmeticOperatorContext = new ArithmeticOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, YmlParser.RULE_arithmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1322;
			_la = this._input.LA(1);
			if (!(((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (YmlParser.ADD - 94)) | (1 << (YmlParser.DIV - 94)) | (1 << (YmlParser.MUL - 94)) | (1 << (YmlParser.SUB - 94)) | (1 << (YmlParser.MOD - 94)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, YmlParser.RULE_unaryExpression);
		try {
			this.state = 1328;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.SUB:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1324;
				this.match(YmlParser.SUB);
				this.state = 1325;
				this.unaryExpression();
				}
				break;
			case YmlParser.APPLY_COLLECTION:
			case YmlParser.APPLY_COLLECTION_ON:
			case YmlParser.OPERATION_APPLY_COLLECTION_ON:
			case YmlParser.IMPLEMENTATION:
			case YmlParser.EXTENDS:
			case YmlParser.FUNCTION_AS_TYPE:
			case YmlParser.TEXT_FUNCTION:
			case YmlParser.ARGS:
			case YmlParser.AS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.CASE:
			case YmlParser.STATIC:
			case YmlParser.RENAME:
			case YmlParser.TO:
			case YmlParser.FOR_CLASS:
			case YmlParser.RULESET:
			case YmlParser.RULE_TYPE:
			case YmlParser.ATTRIBUTES:
			case YmlParser.TIME_COUNTER:
			case YmlParser.CONDITION:
			case YmlParser.NO_EXISTS:
			case YmlParser.EXISTS:
			case YmlParser.MODIFY:
			case YmlParser.OPEN_PAR:
			case YmlParser.OPEN_BRACKET:
			case YmlParser.OPEN_BRACE:
			case YmlParser.QUESTION_MARK:
			case YmlParser.OPEN_GRANULE:
			case YmlParser.MOD:
			case YmlParser.YMLID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1326;
				this.chainedCall();
				}
				break;
			case YmlParser.NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1327;
				this.match(YmlParser.NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public arithmeticExpression(): ArithmeticExpressionContext;
	public arithmeticExpression(_p: number): ArithmeticExpressionContext;
	// @RuleVersion(0)
	public arithmeticExpression(_p?: number): ArithmeticExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ArithmeticExpressionContext = new ArithmeticExpressionContext(this._ctx, _parentState);
		let _prevctx: ArithmeticExpressionContext = _localctx;
		let _startState: number = 236;
		this.enterRecursionRule(_localctx, 236, YmlParser.RULE_arithmeticExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1336;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1331;
				this.match(YmlParser.OPEN_PAR);
				this.state = 1332;
				_localctx._parenthizedExpression = this.arithmeticExpression(0);
				this.state = 1333;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;

			case 2:
				{
				this.state = 1335;
				this.unaryExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1344;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ArithmeticExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, YmlParser.RULE_arithmeticExpression);
					this.state = 1338;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 1339;
					this.arithmeticOperator();
					this.state = 1340;
					this.arithmeticExpression(3);
					}
					}
				}
				this.state = 1346;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public existentialOperator(): ExistentialOperatorContext {
		let _localctx: ExistentialOperatorContext = new ExistentialOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, YmlParser.RULE_existentialOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1347;
			_localctx._operator = this.ymlId();
			this.state = 1348;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1349;
			this.order1FullCondition();
			this.state = 1350;
			this.match(YmlParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableBlockContent(): VariableBlockContentContext {
		let _localctx: VariableBlockContentContext = new VariableBlockContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, YmlParser.RULE_variableBlockContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
				{
				{
				this.state = 1352;
				this.memberDeclaration();
				}
				}
				this.state = 1357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticDeclaration(): StaticDeclarationContext {
		let _localctx: StaticDeclarationContext = new StaticDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, YmlParser.RULE_staticDeclaration);
		let _la: number;
		try {
			this.state = 1376;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1358;
				this.conditionInstance();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1359;
				_localctx._declarationType = this.ymlId();
				this.state = 1360;
				_localctx._declarationName = this.ymlId();
				this.state = 1363;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
				case 1:
					{
					this.state = 1361;
					this.match(YmlParser.EXTENDS);
					this.state = 1362;
					_localctx._extended = this.ymlId();
					}
					break;
				}
				this.state = 1366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 72)) | (1 << (YmlParser.OPEN_PAR - 72)) | (1 << (YmlParser.OPEN_BRACKET - 72)) | (1 << (YmlParser.OPEN_BRACE - 72)) | (1 << (YmlParser.QUESTION_MARK - 72)) | (1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.SUB - 72)) | (1 << (YmlParser.MOD - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.NUMBER - 72)))) !== 0) || _la === YmlParser.YMLID) {
					{
					this.state = 1365;
					this.value();
					}
				}

				this.state = 1371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.FIELD_INTRO - 68)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 68)) | (1 << (YmlParser.REMOVE_FIELD - 68)) | (1 << (YmlParser.ADD_FIELD - 68)))) !== 0)) {
					{
					{
					this.state = 1368;
					_localctx._declarationOptions = this.field();
					}
					}
					this.state = 1373;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1374;
				this.match(YmlParser.SEMICOLON);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public externDeclaration(): ExternDeclarationContext {
		let _localctx: ExternDeclarationContext = new ExternDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, YmlParser.RULE_externDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1378;
			this.match(YmlParser.EXTERN);
			this.state = 1381;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				{
				this.state = 1379;
				this.methodDeclaration();
				}
				break;

			case 2:
				{
				this.state = 1380;
				this.memberDeclaration();
				}
				break;
			}
			this.state = 1383;
			this.match(YmlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, YmlParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1385;
			this.match(YmlParser.OPEN_BRACKET);
			this.state = 1387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 72)) | (1 << (YmlParser.OPEN_PAR - 72)) | (1 << (YmlParser.OPEN_BRACKET - 72)) | (1 << (YmlParser.OPEN_BRACE - 72)) | (1 << (YmlParser.QUESTION_MARK - 72)) | (1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.SUB - 72)) | (1 << (YmlParser.MOD - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.NUMBER - 72)))) !== 0) || _la === YmlParser.YMLID) {
				{
				this.state = 1386;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
			}

			this.state = 1393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 1389;
				this.match(YmlParser.COMMA);
				this.state = 1390;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
				}
				this.state = 1395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1396;
			this.match(YmlParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleList(): SimpleListContext {
		let _localctx: SimpleListContext = new SimpleListContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, YmlParser.RULE_simpleList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1398;
			_localctx._value = this.value();
			_localctx._elements.push(_localctx._value);
			this.state = 1401;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1399;
					this.match(YmlParser.COMMA);
					this.state = 1400;
					_localctx._value = this.value();
					_localctx._elements.push(_localctx._value);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1403;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constList(): ConstListContext {
		let _localctx: ConstListContext = new ConstListContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, YmlParser.RULE_constList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1405;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 72)) | (1 << (YmlParser.OPEN_PAR - 72)) | (1 << (YmlParser.OPEN_BRACKET - 72)) | (1 << (YmlParser.OPEN_BRACE - 72)) | (1 << (YmlParser.QUESTION_MARK - 72)) | (1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.SUB - 72)) | (1 << (YmlParser.MOD - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.NUMBER - 72)))) !== 0) || _la === YmlParser.YMLID) {
				{
				this.state = 1406;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
			}

			this.state = 1413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 1409;
				this.match(YmlParser.COMMA);
				this.state = 1410;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
				}
				this.state = 1415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1416;
			this.match(YmlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public granule(): GranuleContext {
		let _localctx: GranuleContext = new GranuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, YmlParser.RULE_granule);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1418;
			this.match(YmlParser.OPEN_GRANULE);
<<<<<<< develop
<<<<<<< develop
			this.state = 1396;
=======
			this.state = 1388;
=======
			this.state = 1422;
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
					this.state = 1388;
					this.match(YmlParser.ANY_TEXT);
=======
					this.state = 1385;
=======
					this.state = 1419;
>>>>>>> feat: whatever; conditions; exists; instanciation var
					this.granule();
>>>>>>> feat: force semicolon − WIP
					}
					}
				}
				this.state = 1424;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
			}
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
			this.state = 1397;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1394;
					this.granule();
					}
					}
				}
				this.state = 1399;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
			}
			this.state = 1403;
>>>>>>> feat: force semicolon − WIP
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					this.state = 1394;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case YmlParser.ANY_TEXT:
						{
						this.state = 1389;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 1388;
								this.match(YmlParser.ANY_TEXT);
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 1391;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;
					case YmlParser.OPEN_GRANULE:
						{
						this.state = 1393;
						this.granule();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 1398;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
			}
<<<<<<< develop
			this.state = 1399;
=======
			this.state = 1406;
=======
			this.state = 1391;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
			this.state = 1425;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this.match(YmlParser.CLOSE_GRANULE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectComplete(): ObjectCompleteContext {
		let _localctx: ObjectCompleteContext = new ObjectCompleteContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, YmlParser.RULE_objectComplete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
<<<<<<< develop
			this.state = 1401;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
			this.state = 1408;
>>>>>>> feat: force semicolon − WIP
			this.match(YmlParser.COMPLETE);
			this.state = 1402;
			_localctx._completedElemId = this.ymlId();
<<<<<<< develop
			this.state = 1406;
=======
			this.state = 1413;
=======
			this.state = 1393;
=======
			this.state = 1427;
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this.match(YmlParser.COMPLETE);
			this.state = 1428;
			_localctx._completedElemId = this.ymlId();
<<<<<<< refs/remotes/origin/develop
			this.state = 1398;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
			this.state = 1432;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.FIELD_INTRO - 68)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 68)) | (1 << (YmlParser.REMOVE_FIELD - 68)) | (1 << (YmlParser.ADD_FIELD - 68)))) !== 0)) {
				{
				{
<<<<<<< develop
				this.state = 1403;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
				this.state = 1410;
>>>>>>> feat: force semicolon − WIP
				_localctx._memberOption = this.field();
				}
				}
				this.state = 1408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
<<<<<<< develop
			this.state = 1409;
=======
			this.state = 1416;
=======
				this.state = 1395;
=======
				this.state = 1429;
>>>>>>> feat: whatever; conditions; exists; instanciation var
				_localctx._memberOption = this.field();
				}
				}
				this.state = 1434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
<<<<<<< refs/remotes/origin/develop
			this.state = 1401;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
			this.state = 1435;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this.match(YmlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classComplete(): ClassCompleteContext {
		let _localctx: ClassCompleteContext = new ClassCompleteContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, YmlParser.RULE_classComplete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
<<<<<<< develop
			this.state = 1411;
			this.match(YmlParser.COMPLETE);
			this.state = 1414;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
			this.state = 1418;
			this.match(YmlParser.COMPLETE);
			this.state = 1421;
=======
			this.state = 1403;
			this.match(YmlParser.COMPLETE);
			this.state = 1406;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
			this.state = 1437;
			this.match(YmlParser.COMPLETE);
			this.state = 1440;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.OPERATION_APPLY_COLLECTION_ON:
			case YmlParser.IMPLEMENTATION:
			case YmlParser.EXTENDS:
			case YmlParser.FUNCTION_AS_TYPE:
			case YmlParser.TEXT_FUNCTION:
			case YmlParser.ARGS:
			case YmlParser.AS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.CASE:
			case YmlParser.STATIC:
			case YmlParser.RENAME:
			case YmlParser.TO:
			case YmlParser.FOR_CLASS:
			case YmlParser.RULESET:
			case YmlParser.RULE_TYPE:
			case YmlParser.ATTRIBUTES:
			case YmlParser.TIME_COUNTER:
			case YmlParser.CONDITION:
			case YmlParser.NO_EXISTS:
			case YmlParser.EXISTS:
			case YmlParser.MODIFY:
			case YmlParser.MOD:
			case YmlParser.YMLID:
				{
<<<<<<< develop
				this.state = 1412;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
				this.state = 1419;
=======
				this.state = 1404;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
				this.state = 1438;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
				this.ymlId();
				}
				break;
			case YmlParser.FUNCTION:
				{
<<<<<<< develop
				this.state = 1413;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
				this.state = 1420;
=======
				this.state = 1405;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
				this.state = 1439;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
				this.match(YmlParser.FUNCTION);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
<<<<<<< develop
			this.state = 1421;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
			this.state = 1428;
=======
			this.state = 1413;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
			this.state = 1448;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.METHOD) | (1 << YmlParser.TEXT_METHOD) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.FIELD) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
				{
<<<<<<< develop
				this.state = 1419;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
				this.state = 1426;
>>>>>>> feat: force semicolon − WIP
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
				case 1:
					{
<<<<<<< develop
					this.state = 1416;
=======
					this.state = 1423;
=======
				this.state = 1411;
=======
				this.state = 1446;
>>>>>>> feat: whatever; conditions; exists; instanciation var
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
				case 1:
					{
<<<<<<< refs/remotes/origin/develop
					this.state = 1408;
>>>>>>> feat: force semicolon − WIP
>>>>>>> feat: force semicolon − WIP
					this.classAttributeDeclaration();
=======
					this.state = 1442;
					this.modification();
>>>>>>> feat: whatever; conditions; exists; instanciation var
					}
					break;

				case 2:
					{
<<<<<<< develop
					this.state = 1417;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
					this.state = 1424;
=======
					this.state = 1409;
>>>>>>> feat: force semicolon − WIP
>>>>>>> feat: force semicolon − WIP
					this.methodCompleteDeclaration();
=======
					this.state = 1443;
					this.classAttributeDeclaration();
>>>>>>> feat: whatever; conditions; exists; instanciation var
					}
					break;

				case 3:
					{
<<<<<<< develop
					this.state = 1418;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
					this.state = 1425;
=======
					this.state = 1410;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
					this.state = 1444;
					this.methodCompleteDeclaration();
					}
					break;

				case 4:
					{
					this.state = 1445;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
					this.memberDeclaration();
					}
					break;
				}
				}
<<<<<<< develop
				this.state = 1423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1424;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
				this.state = 1430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1431;
=======
				this.state = 1415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1416;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
				this.state = 1450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1451;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this.match(YmlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modification(): ModificationContext {
		let _localctx: ModificationContext = new ModificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, YmlParser.RULE_modification);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1453;
			this.match(YmlParser.MODIFY);
			this.state = 1454;
			this.ymlId();
			this.state = 1455;
			this.argsBlock();
			this.state = 1456;
			this.match(YmlParser.FUNCTION);
			this.state = 1457;
			this.match(YmlParser.OVERRIDE);
			this.state = 1458;
			this.ymlId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleset(): RulesetContext {
		let _localctx: RulesetContext = new RulesetContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, YmlParser.RULE_ruleset);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
<<<<<<< develop
			this.state = 1426;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
			this.state = 1433;
>>>>>>> feat: force semicolon − WIP
			this.match(YmlParser.RULESET);
			this.state = 1427;
			this.match(YmlParser.OPEN_BRACE);
<<<<<<< develop
			this.state = 1429;
=======
			this.state = 1436;
=======
			this.state = 1418;
=======
			this.state = 1460;
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this.match(YmlParser.RULESET);
			this.state = 1461;
			this.match(YmlParser.OPEN_BRACE);
<<<<<<< refs/remotes/origin/develop
			this.state = 1421;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
			this.state = 1463;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.RULE_TYPE) {
				{
<<<<<<< develop
				this.state = 1428;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
				this.state = 1435;
=======
				this.state = 1420;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
				this.state = 1462;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
				this.rules();
				}
			}

<<<<<<< develop
			this.state = 1431;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
			this.state = 1438;
=======
			this.state = 1423;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
			this.state = 1465;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this.match(YmlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rules(): RulesContext {
		let _localctx: RulesContext = new RulesContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, YmlParser.RULE_rules);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
<<<<<<< develop
			this.state = 1434;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
			this.state = 1441;
=======
			this.state = 1426;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
			this.state = 1468;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
<<<<<<< develop
				this.state = 1433;
				this.ymlrule();
				}
				}
				this.state = 1436;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
				this.state = 1440;
				this.ymlrule();
				}
				}
				this.state = 1443;
=======
				this.state = 1425;
				this.ymlrule();
				}
				}
				this.state = 1428;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
				this.state = 1467;
				this.ymlrule();
				}
				}
				this.state = 1470;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === YmlParser.RULE_TYPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ymlrule(): YmlruleContext {
		let _localctx: YmlruleContext = new YmlruleContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, YmlParser.RULE_ymlrule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
<<<<<<< develop
			this.state = 1438;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
			this.state = 1445;
>>>>>>> feat: force semicolon − WIP
			this.match(YmlParser.RULE_TYPE);
			this.state = 1439;
			this.ymlId();
			this.state = 1440;
			this.match(YmlParser.IF);
			this.state = 1441;
			this.match(YmlParser.OPEN_PAR);
<<<<<<< develop
			this.state = 1445;
=======
			this.state = 1452;
=======
			this.state = 1430;
=======
			this.state = 1472;
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this.match(YmlParser.RULE_TYPE);
			this.state = 1473;
			this.ymlId();
			this.state = 1474;
			this.match(YmlParser.IF);
			this.state = 1475;
			this.match(YmlParser.OPEN_PAR);
<<<<<<< refs/remotes/origin/develop
			this.state = 1437;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
			this.state = 1479;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
<<<<<<< develop
				this.state = 1445;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
				this.state = 1452;
>>>>>>> feat: force semicolon − WIP
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
				case 1:
					{
<<<<<<< develop
					this.state = 1442;
=======
					this.state = 1449;
=======
				this.state = 1437;
=======
				this.state = 1479;
>>>>>>> feat: whatever; conditions; exists; instanciation var
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
				case 1:
					{
<<<<<<< refs/remotes/origin/develop
					this.state = 1434;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
					this.state = 1476;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
					this.conditionalExpression();
					}
					break;

				case 2:
					{
<<<<<<< develop
					this.state = 1443;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
					this.state = 1450;
=======
					this.state = 1435;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
					this.state = 1477;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
					this.inValue();
					}
					break;

				case 3:
					{
<<<<<<< develop
					this.state = 1444;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
					this.state = 1451;
=======
					this.state = 1436;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
					this.state = 1478;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
					this.instruction_assignment();
					}
					break;
				}
				}
<<<<<<< develop
				this.state = 1447;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
				this.state = 1454;
>>>>>>> feat: force semicolon − WIP
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.INLINE_DECL_INTRO - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.OPEN_PAR - 68)) | (1 << (YmlParser.OPEN_BRACKET - 68)) | (1 << (YmlParser.OPEN_BRACE - 68)) | (1 << (YmlParser.QUESTION_MARK - 68)) | (1 << (YmlParser.OPEN_GRANULE - 68)) | (1 << (YmlParser.SUB - 68)) | (1 << (YmlParser.MOD - 68)) | (1 << (YmlParser.DATE - 68)) | (1 << (YmlParser.STRING - 68)) | (1 << (YmlParser.NUMBER - 68)))) !== 0) || _la === YmlParser.YMLID);
			this.state = 1449;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1450;
			this.match(YmlParser.THEN);
<<<<<<< develop
			this.state = 1452;
=======
			this.state = 1459;
=======
				this.state = 1439;
=======
				this.state = 1481;
>>>>>>> feat: whatever; conditions; exists; instanciation var
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.STATIC - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.TIME_COUNTER - 36)) | (1 << (YmlParser.WHATEVER - 36)) | (1 << (YmlParser.CONDITION - 36)) | (1 << (YmlParser.NO_EXISTS - 36)) | (1 << (YmlParser.EXISTS - 36)) | (1 << (YmlParser.MODIFY - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 72)) | (1 << (YmlParser.OPEN_PAR - 72)) | (1 << (YmlParser.OPEN_BRACKET - 72)) | (1 << (YmlParser.OPEN_BRACE - 72)) | (1 << (YmlParser.QUESTION_MARK - 72)) | (1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.SUB - 72)) | (1 << (YmlParser.MOD - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.NUMBER - 72)))) !== 0) || _la === YmlParser.YMLID);
			this.state = 1483;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1484;
			this.match(YmlParser.THEN);
<<<<<<< refs/remotes/origin/develop
			this.state = 1444;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
			this.state = 1486;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
<<<<<<< develop
				this.state = 1451;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
				this.state = 1458;
>>>>>>> feat: force semicolon − WIP
				this.instruction();
				}
				}
				this.state = 1454;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.IF) | (1 << YmlParser.TRY))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (YmlParser.FOREACH - 33)) | (1 << (YmlParser.FORALL - 33)) | (1 << (YmlParser.AS - 33)) | (1 << (YmlParser.RETURN - 33)) | (1 << (YmlParser.LOCAL - 33)) | (1 << (YmlParser.SWITCH - 33)) | (1 << (YmlParser.CASE - 33)) | (1 << (YmlParser.BREAK - 33)) | (1 << (YmlParser.STATIC - 33)) | (1 << (YmlParser.WHILE - 33)) | (1 << (YmlParser.FOR - 33)) | (1 << (YmlParser.RENAME - 33)) | (1 << (YmlParser.TO - 33)) | (1 << (YmlParser.FOR_CLASS - 33)) | (1 << (YmlParser.RULESET - 33)) | (1 << (YmlParser.RULE_TYPE - 33)) | (1 << (YmlParser.ATTRIBUTES - 33)) | (1 << (YmlParser.TIME_COUNTER - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.OPEN_PAR - 68)) | (1 << (YmlParser.OPEN_BRACKET - 68)) | (1 << (YmlParser.OPEN_BRACE - 68)) | (1 << (YmlParser.QUESTION_MARK - 68)) | (1 << (YmlParser.OPEN_GRANULE - 68)) | (1 << (YmlParser.MOD - 68)))) !== 0) || _la === YmlParser.YMLID);
<<<<<<< develop
			this.state = 1459;
=======
			this.state = 1466;
=======
				this.state = 1443;
=======
				this.state = 1485;
>>>>>>> feat: whatever; conditions; exists; instanciation var
				this.instruction();
				}
				}
				this.state = 1488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
<<<<<<< refs/remotes/origin/develop
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.IF) | (1 << YmlParser.TRY))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (YmlParser.FOREACH - 33)) | (1 << (YmlParser.FORALL - 33)) | (1 << (YmlParser.AS - 33)) | (1 << (YmlParser.RETURN - 33)) | (1 << (YmlParser.LOCAL - 33)) | (1 << (YmlParser.SWITCH - 33)) | (1 << (YmlParser.CASE - 33)) | (1 << (YmlParser.BREAK - 33)) | (1 << (YmlParser.STATIC - 33)) | (1 << (YmlParser.WHILE - 33)) | (1 << (YmlParser.FOR - 33)) | (1 << (YmlParser.RENAME - 33)) | (1 << (YmlParser.TO - 33)) | (1 << (YmlParser.FOR_CLASS - 33)) | (1 << (YmlParser.RULESET - 33)) | (1 << (YmlParser.RULE_TYPE - 33)) | (1 << (YmlParser.ATTRIBUTES - 33)) | (1 << (YmlParser.TIME_COUNTER - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.OPEN_PAR - 68)) | (1 << (YmlParser.OPEN_BRACKET - 68)) | (1 << (YmlParser.OPEN_BRACE - 68)) | (1 << (YmlParser.QUESTION_MARK - 68)) | (1 << (YmlParser.OPEN_GRANULE - 68)) | (1 << (YmlParser.MOD - 68)))) !== 0) || _la === YmlParser.YMLID);
			this.state = 1451;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.EXTENDS) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.IF) | (1 << YmlParser.TRY))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (YmlParser.FOREACH - 33)) | (1 << (YmlParser.FORALL - 33)) | (1 << (YmlParser.AS - 33)) | (1 << (YmlParser.RETURN - 33)) | (1 << (YmlParser.LOCAL - 33)) | (1 << (YmlParser.SWITCH - 33)) | (1 << (YmlParser.CASE - 33)) | (1 << (YmlParser.BREAK - 33)) | (1 << (YmlParser.STATIC - 33)) | (1 << (YmlParser.WHILE - 33)) | (1 << (YmlParser.FOR - 33)) | (1 << (YmlParser.RENAME - 33)) | (1 << (YmlParser.TO - 33)) | (1 << (YmlParser.FOR_CLASS - 33)) | (1 << (YmlParser.RULESET - 33)) | (1 << (YmlParser.RULE_TYPE - 33)) | (1 << (YmlParser.ATTRIBUTES - 33)) | (1 << (YmlParser.TIME_COUNTER - 33)) | (1 << (YmlParser.CONDITION - 33)) | (1 << (YmlParser.NO_EXISTS - 33)) | (1 << (YmlParser.EXISTS - 33)) | (1 << (YmlParser.MODIFY - 33)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (YmlParser.OPEN_PAR - 73)) | (1 << (YmlParser.OPEN_BRACKET - 73)) | (1 << (YmlParser.OPEN_BRACE - 73)) | (1 << (YmlParser.QUESTION_MARK - 73)) | (1 << (YmlParser.OPEN_GRANULE - 73)) | (1 << (YmlParser.MOD - 73)))) !== 0) || _la === YmlParser.YMLID);
			this.state = 1493;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (YmlParser.FIELD_INTRO - 68)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 68)) | (1 << (YmlParser.REMOVE_FIELD - 68)) | (1 << (YmlParser.ADD_FIELD - 68)))) !== 0)) {
				{
				{
<<<<<<< develop
				this.state = 1456;
=======
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
				this.state = 1463;
>>>>>>> feat: force semicolon − WIP
				this.field();
				}
				}
				this.state = 1461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
<<<<<<< develop
			this.state = 1462;
=======
			this.state = 1469;
=======
				this.state = 1448;
=======
				this.state = 1490;
>>>>>>> feat: whatever; conditions; exists; instanciation var
				this.field();
				}
				}
				this.state = 1495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
<<<<<<< refs/remotes/origin/develop
			this.state = 1454;
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
			this.state = 1496;
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
			this.match(YmlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyBlock(): EmptyBlockContext {
		let _localctx: EmptyBlockContext = new EmptyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, YmlParser.RULE_emptyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1498;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1499;
			this.match(YmlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionInstance(): ConditionInstanceContext {
		let _localctx: ConditionInstanceContext = new ConditionInstanceContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, YmlParser.RULE_conditionInstance);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1501;
			this.match(YmlParser.CONDITION);
			this.state = 1502;
			this.ymlId();
			this.state = 1503;
			this.conditionalExpression();
			this.state = 1504;
			this.match(YmlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 81:
			return this.conditionalAndExpression_sempred(_localctx as ConditionalAndExpressionContext, predIndex);

		case 82:
			return this.conditionalOrExpression_sempred(_localctx as ConditionalOrExpressionContext, predIndex);

		case 118:
			return this.arithmeticExpression_sempred(_localctx as ArithmeticExpressionContext, predIndex);
		}
		return true;
	}
	private conditionalAndExpression_sempred(_localctx: ConditionalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private conditionalOrExpression_sempred(_localctx: ConditionalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private arithmeticExpression_sempred(_localctx: ArithmeticExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
<<<<<<< develop
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03u\u05BB\x04\x02" +
=======
<<<<<<< refs/remotes/origin/develop
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03u\u05C2\x04\x02" +
=======
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03{\u05E5\x04\x02" +
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
<<<<<<< refs/remotes/origin/develop
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x03\x02\x03\x02\x07\x02\u010B" +
		"\n\x02\f\x02\x0E\x02\u010E\v\x02\x03\x02\x05\x02\u0111\n\x02\x03\x03\x07" +
		"\x03\u0114\n\x03\f\x03\x0E\x03\u0117\v\x03\x03\x03\x05\x03\u011A\n\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x04\u0127\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05\u012D\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\b\u013B\n\b\x03\b\x03\b\x03\b\x03" +
		"\b\x07\b\u0141\n\b\f\b\x0E\b\u0144\v\b\x06\b\u0146\n\b\r\b\x0E\b\u0147" +
		"\x03\b\x03\b\x07\b\u014C\n\b\f\b\x0E\b\u014F\v\b\x03\b\x03\b\x03\t\x03" +
		"\t\x07\t\u0155\n\t\f\t\x0E\t\u0158\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x07\v\u0161\n\v\f\v\x0E\v\u0164\v\v\x03\v\x03\v\x07\v\u0168\n" +
		"\v\f\v\x0E\v\u016B\v\v\x03\v\x05\v\u016E\n\v\x03\v\x03\v\x03\v\x03\v\x05" +
		"\v\u0174\n\v\x03\f\x03\f\x03\f\x07\f\u0179\n\f\f\f\x0E\f\u017C\v\f\x03" +
		"\f\x07\f\u017F\n\f\f\f\x0E\f\u0182\v\f\x03\f\x05\f\u0185\n\f\x03\f\x07" +
		"\f\u0188\n\f\f\f\x0E\f\u018B\v\f\x03\r\x03\r\x06\r\u018F\n\r\r\r\x0E\r" +
		"\u0190\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0196\n\x0E\f\x0E\x0E\x0E\u0199" +
		"\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\u019F\n\x0F\x03\x0F\x07" +
		"\x0F\u01A2\n\x0F\f\x0F\x0E\x0F\u01A5\v\x0F\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\u01AA\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u01B0\n\x11\f" +
		"\x11\x0E\x11\u01B3\v\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x07\x13\u01BE\n\x13\f\x13\x0E\x13\u01C1\v\x13" +
		"\x05\x13\u01C3\n\x13\x03\x13\x05\x13\u01C6\n\x13\x03\x14\x03\x14\x03\x14" +
		"\x07\x14\u01CB\n\x14\f\x14\x0E\x14\u01CE\v\x14\x03\x15\x03\x15\x03\x15" +
		"\x07\x15\u01D3\n\x15\f\x15\x0E\x15\u01D6\v\x15\x03\x16\x03\x16\x03\x16" +
		"\x07\x16\u01DB\n\x16\f\x16\x0E\x16\u01DE\v\x16\x03\x17\x03\x17\x03\x17" +
		"\x06\x17\u01E3\n\x17\r\x17\x0E\x17\u01E4\x03\x18\x03\x18\x05\x18\u01E9" +
		"\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01F0\n\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01FA" +
		"\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D" +
		"\u0203\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		" \x03 \x03 \x03 \x03 \x07 \u0211\n \f \x0E \u0214\v \x05 \u0216\n \x03" +
		"!\x03!\x03!\x03!\x03\"\x03\"\x07\"\u021E\n\"\f\"\x0E\"\u0221\v\"\x03#" +
		"\x03#\x07#\u0225\n#\f#\x0E#\u0228\v#\x03#\x03#\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x05$\u0235\n$\x03%\x03%\x03%\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x05%\u0242\n%\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x05&\u024B\n&\x03\'\x03\'\x03\'\x06\'\u0250\n\'\r\'\x0E\'\u0251\x03" +
		"(\x03(\x03(\x05(\u0257\n(\x03(\x03(\x03)\x03)\x03)\x03)\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x03*\x05*\u0266\n*\x03+\x03+\x05+\u026A\n+\x03,\x03," +
		"\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05" +
		",\u027B\n,\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0283\n-\x07-\u0285\n-\f" +
		"-\x0E-\u0288\v-\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x05.\u0298\n.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05" +
		".\u02A1\n.\x07.\u02A3\n.\f.\x0E.\u02A6\v.\x03.\x03.\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u02B4\n/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x05/\u02BD\n/\x07/\u02BF\n/\f/\x0E/\u02C2\v/\x03/\x03/\x03" +
		"0\x030\x030\x050\u02C9\n0\x030\x030\x030\x030\x030\x030\x030\x031\x03" +
		"1\x031\x031\x031\x031\x031\x031\x031\x031\x032\x032\x033\x033\x033\x03" +
		"3\x033\x033\x033\x033\x033\x034\x034\x035\x035\x035\x055\u02EC\n5\x03" +
		"6\x036\x036\x037\x037\x077\u02F3\n7\f7\x0E7\u02F6\v7\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
<<<<<<< refs/remotes/origin/develop
		"8\x038\x038\x058\u030D\n8\x039\x039\x039\x039\x039\x079\u0314\n9\f9\x0E" +
		"9\u0317\v9\x059\u0319\n9\x039\x039\x03:\x03:\x03:\x03:\x03;\x03;\x05;" +
		"\u0323\n;\x03;\x03;\x05;\u0327\n;\x03<\x03<\x03<\x03<\x07<\u032D\n<\f" +
		"<\x0E<\u0330\v<\x03=\x03=\x03=\x03=\x07=\u0336\n=\f=\x0E=\u0339\v=\x03" +
		"=\x03=\x05=\u033D\n=\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x05?\u0346\n?" +
		"\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u034F\n@\x03@\x05@\u0352\n@\x03" +
		"@\x05@\u0355\n@\x03@\x05@\u0358\n@\x03@\x07@\u035B\n@\f@\x0E@\u035E\v" +
		"@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03C\x03" +
		"C\x03C\x07C\u036F\nC\fC\x0EC\u0372\vC\x03C\x03C\x03D\x03D\x07D\u0378\n" +
		"D\fD\x0ED\u037B\vD\x03E\x03E\x03E\x07E\u0380\nE\fE\x0EE\u0383\vE\x03F" +
		"\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u038C\nF\x03G\x05G\u038F\nG\x03G\x05" +
		"G\u0392\nG\x03H\x03H\x03H\x07H\u0397\nH\fH\x0EH\u039A\vH\x03I\x03I\x03" +
		"I\x05I\u039F\nI\x03J\x05J\u03A2\nJ\x03J\x03J\x03J\x03J\x07J\u03A8\nJ\f" +
		"J\x0EJ\u03AB\vJ\x03J\x05J\u03AE\nJ\x05J\u03B0\nJ\x03J\x03J\x05J\u03B4" +
		"\nJ\x03K\x03K\x03K\x03K\x03K\x05K\u03BB\nK\x03K\x03K\x03K\x05K\u03C0\n" +
		"K\x03K\x05K\u03C3\nK\x03L\x03L\x03L\x03L\x07L\u03C9\nL\fL\x0EL\u03CC\v" +
		"L\x03L\x03L\x03M\x03M\x05M\u03D2\nM\x03N\x03N\x05N\u03D6\nN\x03O\x03O" +
		"\x03P\x05P\u03DB\nP\x03P\x07P\u03DE\nP\fP\x0EP\u03E1\vP\x03Q\x03Q\x03" +
		"Q\x03Q\x03R\x03R\x03S\x03S\x03S\x05S\u03EC\nS\x03S\x03S\x03S\x07S\u03F1" +
		"\nS\fS\x0ES\u03F4\vS\x03T\x03T\x03T\x03T\x03T\x03T\x07T\u03FC\nT\fT\x0E" +
		"T\u03FF\vT\x03U\x03U\x03U\x03U\x03V\x03V\x03W\x03W\x03W\x03W\x03X\x03" +
		"X\x03X\x03X\x03Y\x03Y\x03Z\x06Z\u0412\nZ\rZ\x0EZ\u0413\x03[\x03[\x05[" +
		"\u0418\n[\x03\\\x03\\\x05\\\u041C\n\\\x03]\x03]\x03]\x03]\x03]\x03]\x07" +
		"]\u0424\n]\f]\x0E]\u0427\v]\x03]\x03]\x05]\u042B\n]\x03]\x03]\x03^\x03" +
		"^\x03^\x07^\u0432\n^\f^\x0E^\u0435\v^\x03^\x03^\x05^\u0439\n^\x03^\x03" +
		"^\x03_\x03_\x03_\x03_\x03_\x03_\x07_\u0443\n_\f_\x0E_\u0446\v_\x03_\x03" +
		"_\x05_\u044A\n_\x03_\x03_\x03`\x03`\x03`\x07`\u0451\n`\f`\x0E`\u0454\v" +
		"`\x03`\x03`\x05`\u0458\n`\x03`\x03`\x03a\x03a\x03a\x03a\x03a\x03a\x03" +
		"a\x05a\u0463\na\x03b\x03b\x03b\x03b\x03b\x03b\x05b\u046B\nb\x03b\x03b" +
		"\x03b\x03b\x03b\x03b\x05b\u0473\nb\x03c\x03c\x03c\x03c\x03c\x03c\x03c" +
		"\x05c\u047C\nc\x03c\x03c\x03c\x03d\x03d\x03d\x03d\x03e\x03e\x05e\u0487" +
		"\ne\x03f\x03f\x07f\u048B\nf\ff\x0Ef\u048E\vf\x03f\x05f\u0491\nf\x03g\x03" +
		"g\x03g\x03h\x03h\x03h\x03i\x03i\x03i\x03i\x03i\x03i\x03j\x03j\x03j\x03" +
		"j\x03j\x03j\x03j\x03k\x03k\x05k\u04A8\nk\x03k\x03k\x03k\x05k\u04AD\nk" +
		"\x03l\x03l\x03l\x03l\x05l\u04B3\nl\x03l\x07l\u04B6\nl\fl\x0El\u04B9\v" +
		"l\x03l\x05l\u04BC\nl\x03l\x07l\u04BF\nl\fl\x0El\u04C2\vl\x03l\x03l\x03" +
		"l\x03m\x03m\x03m\x03m\x03m\x03m\x03n\x03n\x03n\x03o\x03o\x03p\x03p\x05" +
		"p\u04D4\np\x03p\x03p\x05p\u04D8\np\x03p\x03p\x05p\u04DC\np\x03p\x03p\x05" +
		"p\u04E0\np\x03p\x03p\x03p\x03p\x03p\x03p\x05p\u04E8\np\x03p\x03p\x03p" +
		"\x03p\x03p\x03p\x03p\x05p\u04F1\np\x05p\u04F3\np\x03q\x03q\x03q\x03r\x03" +
		"r\x03r\x03r\x03r\x03r\x03r\x03r\x07r\u0500\nr\fr\x0Er\u0503\vr\x03r\x03" +
		"r\x03r\x03r\x03s\x03s\x06s\u050B\ns\rs\x0Es\u050C\x03s\x03s\x03t\x03t" +
		"\x03u\x03u\x03u\x03u\x05u\u0517\nu\x03v\x03v\x03v\x03v\x03v\x03v\x05v" +
		"\u051F\nv\x03v\x03v\x03v\x03v\x07v\u0525\nv\fv\x0Ev\u0528\vv\x03w\x03" +
		"w\x03w\x03w\x03w\x03x\x07x\u0530\nx\fx\x0Ex\u0533\vx\x03y\x03y\x03y\x03" +
		"y\x05y\u0539\ny\x03y\x05y\u053C\ny\x03y\x07y\u053F\ny\fy\x0Ey\u0542\v" +
		"y\x03y\x03y\x03z\x03z\x03z\x05z\u0549\nz\x03z\x03z\x03{\x03{\x05{\u054F" +
		"\n{\x03{\x03{\x07{\u0553\n{\f{\x0E{\u0556\v{\x03{\x03{\x03|\x03|\x03|" +
		"\x06|\u055D\n|\r|\x0E|\u055E\x03}\x03}\x05}\u0563\n}\x03}\x03}\x07}\u0567" +
		"\n}\f}\x0E}\u056A\v}\x03}\x03}\x03~\x03~\x06~\u0570\n~\r~\x0E~\u0571\x03" +
		"~\x07~\u0575\n~\f~\x0E~\u0578\v~\x03~\x03~\x03\x7F\x03\x7F\x03\x7F\x07" +
		"\x7F\u057F\n\x7F\f\x7F\x0E\x7F\u0582\v\x7F\x03\x7F\x03\x7F\x03\x80\x03" +
		"\x80\x03\x80\x05\x80\u0589\n\x80\x03\x80\x03\x80\x03\x80\x07\x80\u058E" +
		"\n\x80\f\x80\x0E\x80\u0591\v\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81" +
		"\x05\x81\u0598\n\x81\x03\x81\x03\x81\x03\x82\x06\x82\u059D\n\x82\r\x82" +
		"\x0E\x82\u059E\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83" +
		"\x06\x83\u05A8\n\x83\r\x83\x0E\x83\u05A9\x03\x83\x03\x83\x03\x83\x06\x83" +
		"\u05AF\n\x83\r\x83\x0E\x83\u05B0\x03\x83\x07\x83\u05B4\n\x83\f\x83\x0E" +
		"\x83\u05B7\v\x83\x03\x83\x03\x83\x03\x83\v\u010A\u0178\u017E\u01DA\u01E2" +
		"\u0210\u0284\u0501\u0576\x02\x05\xA4\xA6\xEA\x84\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
		"P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02" +
		"l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84" +
		"\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96" +
		"\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8" +
		"\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA" +
		"\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC" +
		"\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE" +
		"\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0" +
		"\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02" +
		"\u0102\x02\u0104\x02\x02\t\r\x02\n\n\r\x0E\x10\x10\x13\x13\x1A\x1A&(-" +
		"-225;__gg\x03\x02AD\x03\x02)*\x03\x02\x0F\x13\x04\x02\x0F\x0F\x11\x13" +
		"\x03\x02PU\x03\x02[_\x02\u062B\x02\u0106\x03\x02\x02\x02\x04\u0117\x03" +
		"\x02\x02\x02\x06\u0124\x03\x02\x02\x02\b\u012A\x03\x02\x02\x02\n\u012C" +
		"\x03\x02\x02\x02\f\u0133\x03\x02\x02\x02\x0E\u0135\x03\x02\x02\x02\x10" +
		"\u0150\x03\x02\x02\x02\x12\u0157\x03\x02\x02\x02\x14\u015C\x03\x02\x02" +
		"\x02\x16\u0173\x03\x02\x02\x02\x18\u018A\x03\x02\x02\x02\x1A\u0190\x03" +
		"\x02\x02\x02\x1C\u019A\x03\x02\x02\x02\x1E\u01A4\x03\x02\x02\x02 \u01A9" +
		"\x03\x02\x02\x02\"\u01B2\x03\x02\x02\x02$\u01C3\x03\x02\x02\x02&\u01C5" +
		"\x03\x02\x02\x02(\u01CD\x03\x02\x02\x02*\u01D5\x03\x02\x02\x02,\u01DD" +
		"\x03\x02\x02\x02.\u01E6\x03\x02\x02\x020\u01ED\x03\x02\x02\x022\u01EF" +
		"\x03\x02\x02\x024\u01F7\x03\x02\x02\x026\u01F9\x03\x02\x02\x028\u0200" +
		"\x03\x02\x02\x02:\u0202\x03\x02\x02\x02<\u0206\x03\x02\x02\x02>\u0209" +
		"\x03\x02\x02\x02@\u0215\x03\x02\x02\x02B\u0219\x03\x02\x02\x02D\u0220" +
		"\x03\x02\x02\x02F\u0232\x03\x02\x02\x02H\u023F\x03\x02\x02\x02J\u0248" +
		"\x03\x02\x02\x02L\u024A\x03\x02\x02\x02N\u0251\x03\x02\x02\x02P\u0258" +
		"\x03\x02\x02\x02R\u0263\x03\x02\x02\x02T\u0267\x03\x02\x02\x02V\u0278" +
		"\x03\x02\x02\x02X\u027A\x03\x02\x02\x02Z\u028B\x03\x02\x02\x02\\\u02A7" +
		"\x03\x02\x02\x02^\u02C3\x03\x02\x02\x02`\u02CF\x03\x02\x02\x02b\u02D9" +
		"\x03\x02\x02\x02d\u02DB\x03\x02\x02\x02f\u02E4\x03\x02\x02\x02h\u02E9" +
		"\x03\x02\x02\x02j\u02EB\x03\x02\x02\x02l\u02EE\x03\x02\x02\x02n\u030C" +
		"\x03\x02\x02\x02p\u030E\x03\x02\x02\x02r\u031C\x03\x02\x02\x02t\u0322" +
		"\x03\x02\x02\x02v\u0328\x03\x02\x02\x02x\u0331\x03\x02\x02\x02z\u033E" +
		"\x03\x02\x02\x02|\u0345\x03\x02\x02\x02~\u0347\x03\x02\x02\x02\x80\u0361" +
		"\x03\x02\x02\x02\x82\u0366\x03\x02\x02\x02\x84\u036B\x03\x02\x02\x02\x86" +
		"\u0375\x03\x02\x02\x02\x88\u037C\x03\x02\x02\x02\x8A\u0384\x03\x02\x02" +
		"\x02\x8C\u038E\x03\x02\x02\x02\x8E\u0393\x03\x02\x02\x02\x90\u039B\x03" +
		"\x02\x02\x02\x92\u03A1\x03\x02\x02\x02\x94\u03BA\x03\x02\x02\x02\x96\u03C4" +
		"\x03\x02\x02\x02\x98\u03CF\x03\x02\x02\x02\x9A\u03D3\x03\x02\x02\x02\x9C" +
		"\u03D7\x03\x02\x02\x02\x9E\u03DA\x03\x02\x02\x02\xA0\u03E2\x03\x02\x02" +
		"\x02\xA2\u03E6\x03\x02\x02\x02\xA4\u03EB\x03\x02\x02\x02\xA6\u03F5\x03" +
		"\x02\x02\x02\xA8\u0400\x03\x02\x02\x02\xAA\u0404\x03\x02\x02\x02\xAC\u0406" +
		"\x03\x02\x02\x02\xAE\u040A\x03\x02\x02\x02\xB0\u040E\x03\x02\x02\x02\xB2" +
		"\u0411\x03\x02\x02\x02\xB4\u0417\x03\x02\x02\x02\xB6\u041B\x03\x02\x02" +
		"\x02\xB8\u041D\x03\x02\x02\x02\xBA\u042E\x03\x02\x02\x02\xBC\u043C\x03" +
		"\x02\x02\x02\xBE\u044D\x03\x02\x02\x02\xC0\u045B\x03\x02\x02\x02\xC2\u0464" +
		"\x03\x02\x02\x02\xC4\u0474\x03\x02\x02\x02\xC6\u0480\x03\x02\x02\x02\xC8" +
		"\u0484\x03\x02\x02\x02\xCA\u0488\x03\x02\x02\x02\xCC\u0492\x03\x02\x02" +
		"\x02\xCE\u0495\x03\x02\x02\x02\xD0\u0498\x03\x02\x02\x02\xD2\u049E\x03" +
		"\x02\x02\x02\xD4\u04A7\x03\x02\x02\x02\xD6\u04AE\x03\x02\x02\x02\xD8\u04C6" +
		"\x03\x02\x02\x02\xDA\u04CC\x03\x02\x02\x02\xDC\u04CF\x03\x02\x02\x02\xDE" +
		"\u04F2\x03\x02\x02\x02\xE0\u04F4\x03\x02\x02\x02\xE2\u04F7\x03\x02\x02" +
		"\x02\xE4\u0508\x03\x02\x02\x02\xE6\u0510\x03\x02\x02\x02\xE8\u0516\x03" +
		"\x02\x02\x02\xEA\u051E\x03\x02\x02\x02\xEC\u0529\x03\x02\x02\x02\xEE\u0531" +
		"\x03\x02\x02\x02\xF0\u0534\x03\x02\x02\x02\xF2\u0545\x03\x02\x02\x02\xF4" +
		"\u054C\x03\x02\x02\x02\xF6\u0559\x03\x02\x02\x02\xF8\u0560\x03\x02\x02" +
		"\x02\xFA\u056D\x03\x02\x02\x02\xFC\u057B\x03\x02\x02\x02\xFE\u0585\x03" +
		"\x02\x02\x02\u0100\u0594\x03\x02\x02\x02\u0102\u059C\x03\x02\x02\x02\u0104" +
		"\u05A0\x03\x02\x02\x02\u0106\u010A\x07\x03\x02\x02\u0107\u0109\x07p\x02" +
		"\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u010B" +
		"\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B\u010E\x03\x02\x02\x02" +
		"\u010C\u010A\x03\x02\x02\x02\u010D\u010F\x07\x02\x02\x03\u010E\u010D\x03" +
		"\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\x03\x03\x02\x02\x02\u0110" +
		"\u0112\x05\x06\x04\x02\u0111\u0110\x03\x02\x02\x02\u0112\u0115\x03\x02" +
		"\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114" +
		"\u0118\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0116\u0118\x05\x02" +
		"\x02\x02\u0117\u0113\x03\x02\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118" +
		"\u0119\x03\x02\x02\x02\u0119\u011A\x07\x02\x02\x03\u011A\x05\x03\x02\x02" +
		"\x02\u011B\u0125\x05\x14\v\x02\u011C\u0125\x05\xF0y\x02\u011D\u0125\x05" +
		"\xFE\x80\x02\u011E\u0125\x05\xFC\x7F\x02\u011F\u0125\x05\u0104\x83\x02" +
		"\u0120\u0125\x05\x0E\b\x02\u0121\u0125\x05~@\x02\u0122\u0125\x05\xF2z" +
		"\x02\u0123\u0125\x05\n\x06\x02\u0124\u011B\x03\x02\x02\x02\u0124\u011C" +
		"\x03\x02\x02\x02\u0124\u011D\x03\x02\x02\x02\u0124\u011E\x03\x02\x02\x02" +
		"\u0124\u011F\x03\x02\x02\x02\u0124\u0120\x03\x02\x02\x02\u0124\u0121\x03" +
		"\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0123\x03\x02\x02\x02\u0125" +
		"\x07\x03\x02\x02\x02\u0126\u0127\x07?\x02\x02\u0127\u012B\x07?\x02\x02" +
		"\u0128\u012B\x07?\x02\x02\u0129\u012B\x07@\x02\x02\u012A\u0126\x03\x02" +
		"\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u0129\x03\x02\x02\x02\u012B" +
		"\t\x03\x02\x02\x02\u012C\u012D\x075\x02\x02\u012D\u012E\x05\f\x07\x02" +
		"\u012E\u012F\x076\x02\x02\u012F\u0130\x05\f\x07\x02\u0130\u0131\x077\x02" +
		"\x02\u0131\u0132\x05\f\x07\x02\u0132\v\x03\x02\x02\x02\u0133\u0134\t\x02" +
		"\x02\x02\u0134\r\x03\x02\x02\x02\u0135\u0136\x07\x1F\x02\x02\u0136\u0138" +
		"\x05\f\x07\x02\u0137\u0139\x05\x12\n\x02\u0138\u0137\x03\x02\x02\x02\u0138" +
		"\u0139\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u0143\x07J\x02" +
		"\x02\u013B\u0140\x05\x10\t\x02\u013C\u013D\x07=\x02\x02\u013D\u013F\x05" +
		"\x10\t\x02\u013E\u013C\x03\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140" +
		"\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0144\x03\x02" +
		"\x02\x02\u0142\u0140\x03\x02\x02\x02\u0143\u013B\x03\x02\x02\x02\u0144" +
		"\u0145\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0145\u0146\x03\x02" +
		"\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u014B\x07K\x02\x02\u0148\u014A" +
		"\x050\x19\x02\u0149\u0148\x03\x02\x02\x02\u014A\u014D\x03\x02\x02\x02" +
		"\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014E\x03" +
		"\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014E\u014F\x07<\x02\x02\u014F" +
		"\x0F\x03\x02\x02\x02\u0150\u0154\x05\f\x07\x02\u0151\u0153\x050\x19\x02" +
		"\u0152\u0151\x03\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03" +
		"\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\x11\x03\x02\x02\x02\u0156" +
		"\u0154\x03\x02\x02\x02\u0157\u0158\x07:\x02\x02\u0158\u0159\x07J\x02\x02" +
		"\u0159\u015A\x05\xEEx\x02\u015A\u015B\x07K\x02\x02\u015B\x13\x03\x02\x02" +
		"\x02\u015C\u0160\x05\x1E\x10\x02\u015D\u015F\x050\x19\x02\u015E\u015D" +
		"\x03\x02\x02\x02\u015F\u0162\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02" +
		"\u0160\u0161\x03\x02\x02\x02\u0161\u0167\x03\x02\x02\x02\u0162\u0160\x03" +
		"\x02\x02\x02\u0163\u0166\x05&\x14\x02\u0164\u0166\x05\x86D\x02\u0165\u0163" +
		"\x03\x02\x02\x02\u0165\u0164\x03\x02\x02\x02\u0166\u0169\x03\x02\x02\x02" +
		"\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168\u016B\x03" +
		"\x02\x02\x02\u0169\u0167\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u016A\u016C\x05B\"\x02\u016B\u016A\x03\x02\x02\x02\u016B\u016C" +
		"\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x07<\x02\x02" +
		"\u016E\u016F\x05\x16\f\x02\u016F\u0171\x07<\x02\x02\u0170\u0172\x07\x02" +
		"\x02\x03\u0171\u0170\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172" +
		"\x15\x03\x02\x02\x02\u0173\u0174\x07\r\x02\x02\u0174\u0178\x05\f\x07\x02" +
		"\u0175\u0177\x05\x18\r\x02\u0176\u0175\x03\x02\x02\x02\u0177\u017A\x03" +
		"\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0179" +
		"\u017E\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017B\u017D\x05\x1C" +
		"\x0F\x02\u017C\u017B\x03\x02\x02\x02\u017D\u0180\x03\x02\x02\x02\u017E" +
		"\u017F\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0182\x03\x02" +
		"\x02\x02\u0180\u017E\x03\x02\x02\x02\u0181\u0183\x05\x1A\x0E\x02\u0182" +
		"\u0181\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0187\x03\x02" +
		"\x02\x02\u0184\u0186\x050\x19\x02\u0185\u0184\x03\x02\x02\x02\u0186\u0189" +
		"\x03\x02\x02\x02\u0187\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02" +
		"\u0188\x17\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u018A\u018C\x05" +
		"\f\x07\x02\u018B\u018D\x050\x19\x02\u018C\u018B\x03\x02\x02\x02\u018D" +
		"\u018E\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018E\u018F\x03\x02" +
		"\x02\x02\u018F\x19\x03\x02\x02\x02\u0190\u0191\x07\x19\x02\x02\u0191\u0195" +
		"\x07J\x02\x02\u0192\u0194\x05\x1C\x0F\x02\u0193\u0192\x03\x02\x02\x02" +
		"\u0194\u0197\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0196\x03" +
		"\x02\x02\x02\u0196\u0198\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0198" +
		"\u0199\x07K\x02\x02\u0199\x1B\x03\x02\x02\x02\u019A\u019C\x05\f\x07\x02" +
		"\u019B\u019D\x07\x0F\x02\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03" +
		"\x02\x02\x02\u019D\u01A1\x03\x02\x02\x02\u019E\u01A0\x050\x19\x02\u019F" +
		"\u019E\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u019F\x03\x02" +
		"\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\x1D\x03\x02\x02\x02\u01A3\u01A1" +
		"\x03\x02\x02\x02\u01A4\u01A5\x07\f\x02\x02\u01A5\u01A7\x05\f\x07\x02\u01A6" +
		"\u01A8\x05 \x11\x02\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02" +
		"\x02\u01A8\x1F\x03\x02\x02\x02\u01A9\u01AA\x07\x0E\x02\x02\u01AA\u01AF" +
		"\x05\"\x12\x02\u01AB\u01AC\x07=\x02\x02\u01AC\u01AE\x05\"\x12\x02\u01AD" +
		"\u01AB\x03\x02\x02\x02\u01AE\u01B1\x03\x02\x02\x02\u01AF\u01AD\x03\x02" +
		"\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0!\x03\x02\x02\x02\u01B1\u01AF" +
		"\x03\x02\x02\x02\u01B2\u01B3\x05\f\x07\x02\u01B3#\x03\x02\x02\x02\u01B4" +
		"\u01B5\x07\x18\x02\x02\u01B5\u01C4\x05\xF8}\x02\u01B6\u01B7\x07\x18\x02" +
		"\x02\u01B7\u01C0\x07F\x02\x02\u01B8\u01BD\x05V,\x02\u01B9\u01BA\x07=\x02" +
		"\x02\u01BA\u01BC\x05V,\x02\u01BB\u01B9\x03\x02\x02\x02\u01BC\u01BF\x03" +
		"\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE" +
		"\u01C1\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01C0\u01B8\x03\x02" +
		"\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
		"\u01C4\x07G\x02\x02\u01C3\u01B4\x03\x02\x02\x02\u01C3\u01B6\x03\x02\x02" +
		"\x02\u01C4%\x03\x02\x02\x02\u01C5\u01C6\x07\x14\x02\x02\u01C6\u01CA\x05" +
		"\f\x07\x02\u01C7\u01C9\x050\x19\x02\u01C8\u01C7\x03\x02\x02\x02\u01C9" +
		"\u01CC\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA\u01CB\x03\x02" +
		"\x02\x02\u01CB\'\x03\x02\x02\x02\u01CC\u01CA\x03\x02\x02\x02\u01CD\u01CE" +
		"\x05*\x16\x02\u01CE\u01D2\x05\f\x07\x02\u01CF\u01D1\x050\x19\x02\u01D0" +
		"\u01CF\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02\x02\u01D2\u01D0\x03\x02" +
		"\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3)\x03\x02\x02\x02\u01D4\u01D2" +
		"\x03\x02\x02\x02\u01D5\u01DA\x05\f\x07\x02\u01D6\u01D7\x07W\x02\x02\u01D7" +
		"\u01D9\x05\f\x07\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02" +
		"\x02\u01DA\u01DB\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB+\x03" +
		"\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01E0\x05\f\x07\x02\u01DE" +
		"\u01DF\x07?\x02\x02\u01DF\u01E1\x05\f\x07\x02\u01E0\u01DE\x03\x02\x02" +
		"\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E2\u01E0" +
		"\x03\x02\x02\x02\u01E3-\x03\x02\x02\x02\u01E4\u01E7\x05\f\x07\x02\u01E5" +
		"\u01E7\x05,\x17\x02\u01E6\u01E4\x03\x02\x02\x02\u01E6\u01E5\x03\x02\x02" +
		"\x02\u01E7/\x03\x02\x02\x02\u01E8\u01EE\x052\x1A\x02\u01E9\u01EE\x05:" +
		"\x1E\x02\u01EA\u01EE\x05@!\x02\u01EB\u01EE\x05> \x02\u01EC\u01EE\x056" +
		"\x1C\x02\u01ED\u01E8\x03\x02\x02\x02\u01ED\u01E9\x03\x02\x02\x02\u01ED" +
		"\u01EA\x03\x02\x02\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED\u01EC\x03\x02" +
		"\x02\x02\u01EE1\x03\x02\x02\x02\u01EF\u01F0\x07A\x02\x02\u01F0\u01F1\x07" +
		"/\x02\x02\u01F1\u01F2\x054\x1B\x02\u01F23\x03\x02\x02\x02\u01F3\u01F8" +
		"\x05\xE4s\x02\u01F4\u01F8\x05v<\x02\u01F5\u01F8\x05\xDAn\x02\u01F6\u01F8" +
		"\x05d3\x02\u01F7\u01F3\x03\x02\x02\x02\u01F7\u01F4\x03\x02\x02\x02\u01F7" +
		"\u01F5\x03\x02\x02\x02\u01F7\u01F6\x03\x02\x02\x02\u01F85\x03\x02\x02" +
		"\x02\u01F9\u01FA\x07A\x02\x02\u01FA\u01FB\x07\r\x02\x02\u01FB\u01FC\x05" +
		"\xE4s\x02\u01FC7\x03\x02\x02\x02\u01FD\u0201\x05d3\x02\u01FE\u0201\x05" +
		"v<\x02\u01FF\u0201\x05\xDAn\x02\u0200\u01FD\x03\x02\x02\x02\u0200\u01FE" +
		"\x03\x02\x02\x02\u0200\u01FF\x03\x02\x02\x02\u02019\x03\x02\x02\x02\u0202" +
		"\u0203\t\x03\x02\x02\u0203\u0204\x05.\x18\x02\u0204\u0205\x05H%\x02\u0205" +
		";\x03\x02\x02\x02\u0206\u0207\x05*\x16\x02\u0207\u0208\x05\f\x07\x02\u0208" +
		"=\x03\x02\x02\x02\u0209\u020A\x07A\x02\x02\u020A\u0213\x07(\x02\x02\u020B" +
		"\u0210\x05<\x1F\x02\u020C\u020D\x07=\x02\x02\u020D\u020F\x05<\x1F\x02" +
		"\u020E\u020C\x03\x02\x02\x02\u020F\u0212\x03\x02\x02\x02\u0210\u0211\x03" +
		"\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0211\u0214\x03\x02\x02\x02\u0212" +
		"\u0210\x03\x02\x02\x02\u0213\u020B\x03\x02\x02\x02\u0213\u0214\x03\x02" +
		"\x02\x02\u0214?\x03\x02\x02\x02\u0215\u0216\x07A\x02\x02\u0216\u0217\x07" +
		"\'\x02\x02\u0217\u0218\x05F$\x02\u0218A\x03\x02\x02\x02\u0219\u021D\x07" +
		"\x15\x02\x02\u021A\u021C\x050\x19\x02\u021B\u021A\x03\x02\x02\x02\u021C" +
		"\u021F\x03\x02\x02\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02" +
		"\x02\x02\u021EC\x03\x02\x02\x02\u021F\u021D\x03\x02\x02\x02\u0220\u0224" +
		"\x07a\x02\x02\u0221\u0223\x07u\x02\x02\u0222\u0221\x03\x02\x02\x02\u0223" +
		"\u0226\x03\x02\x02\x02\u0224\u0222\x03\x02\x02\x02\u0224\u0225\x03\x02" +
		"\x02\x02\u0225\u0227\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0227" +
		"\u0228\x07a\x02\x02\u0228E\x03\x02\x02\x02\u0229\u0233\x05d3\x02\u022A" +
		"\u0233\x05\xA2R\x02\u022B\u0233\x05V,\x02\u022C\u0233\x05P)\x02\u022D" +
		"\u0233\x05D#\x02\u022E\u022F\x05\f\x07\x02\u022F\u0230\x05\f\x07\x02\u0230" +
		"\u0233\x03\x02\x02\x02\u0231\u0233\x05\xF6|\x02\u0232\u0229\x03\x02\x02" +
		"\x02\u0232\u022A\x03\x02\x02\x02\u0232\u022B\x03\x02\x02\x02\u0232\u022C" +
		"\x03\x02\x02\x02\u0232\u022D\x03\x02\x02\x02\u0232\u022E\x03\x02\x02\x02" +
		"\u0232\u0231\x03\x02\x02\x02\u0233G\x03\x02\x02\x02\u0234\u0240\x05\xDA" +
		"n\x02\u0235\u0240\x05d3\x02\u0236\u0240\x05\xA2R\x02\u0237\u0240\x05V" +
		",\x02\u0238\u0240\x05L\'\x02\u0239\u0240\x05P)\x02\u023A\u0240\x05D#\x02" +
		"\u023B\u023C\x05\f\x07\x02\u023C\u023D\x05\f\x07\x02\u023D\u0240\x03\x02" +
		"\x02\x02\u023E\u0240\x05\xF6|\x02\u023F\u0234\x03\x02\x02\x02\u023F\u0235" +
		"\x03\x02\x02\x02\u023F\u0236\x03\x02\x02\x02\u023F\u0237\x03\x02\x02\x02" +
		"\u023F\u0238\x03\x02\x02\x02\u023F\u0239\x03\x02\x02\x02\u023F\u023A\x03" +
		"\x02\x02\x02\u023F\u023B\x03\x02\x02\x02\u023F\u023E\x03\x02\x02\x02\u0240" +
		"I\x03\x02\x02\x02\u0241\u0249\x05\xA2R\x02\u0242\u0249\x05V,\x02\u0243" +
		"\u0249\x05P)\x02\u0244\u0249\x05D#\x02\u0245\u0246\x05\f\x07\x02\u0246" +
		"\u0247\x05\f\x07\x02\u0247\u0249\x03\x02\x02\x02\u0248\u0241\x03\x02\x02" +
		"\x02\u0248\u0242\x03\x02\x02\x02\u0248\u0243\x03\x02\x02\x02\u0248\u0244" +
		"\x03\x02\x02\x02\u0248\u0245\x03\x02\x02\x02\u0249K\x03\x02\x02\x02\u024A" +
		"\u024D\x05P)\x02\u024B\u024C\x07=\x02\x02\u024C\u024E\x05P)\x02\u024D" +
		"\u024B\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u024D\x03\x02" +
		"\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250M\x03\x02\x02\x02\u0251\u0254" +
		"\x07J\x02\x02\u0252\u0255\x05P)\x02\u0253\u0255\x05L\'\x02\u0254\u0252" +
		"\x03\x02\x02\x02\u0254\u0253\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02" +
		"\u0256\u0257\x07K\x02\x02\u0257O\x03\x02\x02\x02\u0258\u0259\x05R*\x02" +
		"\u0259\u025A\x07>\x02\x02\u025A\u025B\x05T+\x02\u025BQ\x03\x02\x02\x02" +
		"\u025C\u0264\x05f4\x02\u025D\u0264\x07b\x02\x02\u025E\u0264\x07`\x02\x02" +
		"\u025F\u0264\x05v<\x02\u0260\u0264\x07d\x02\x02\u0261\u0264\x05\xF4{\x02" +
		"\u0262\u0264\x05\xF8}\x02\u0263\u025C\x03\x02\x02\x02\u0263\u025D\x03" +
		"\x02\x02\x02\u0263\u025E\x03\x02\x02\x02\u0263\u025F\x03\x02\x02\x02\u0263" +
		"\u0260\x03\x02\x02\x02\u0263\u0261\x03\x02\x02\x02\u0263\u0262\x03\x02" +
		"\x02\x02\u0264S\x03\x02\x02\x02\u0265\u0268\x05V,\x02\u0266\u0268\x05" +
		"\xA2R\x02\u0267\u0265\x03\x02\x02\x02\u0267\u0266\x03\x02\x02\x02\u0268" +
		"U\x03\x02\x02\x02\u0269\u0279\x05\xFA~\x02\u026A\u0279\x05x=\x02\u026B" +
		"\u0279\x05\xEAv\x02\u026C\u0279\x05h5\x02\u026D\u0279\x05$\x13\x02\u026E" +
		"\u0279\x05d3\x02\u026F\u0279\x05\xF4{\x02\u0270\u0279\x05\xF8}\x02\u0271" +
		"\u0279\x05\xD4k\x02\u0272\u0279\x05Z.\x02\u0273\u0279\x05\\/\x02\u0274" +
		"\u0279\x05X-\x02\u0275\u0279\x05N(\x02\u0276\u0279\x05\xB8]\x02\u0277" +
		"\u0279\x05\xBA^\x02\u0278\u0269\x03\x02\x02\x02\u0278\u026A\x03\x02\x02" +
		"\x02\u0278\u026B\x03\x02\x02\x02\u0278\u026C\x03\x02\x02\x02\u0278\u026D" +
		"\x03\x02\x02\x02\u0278\u026E\x03\x02\x02\x02\u0278\u026F\x03\x02\x02\x02" +
		"\u0278\u0270\x03\x02\x02\x02\u0278\u0271\x03\x02\x02\x02\u0278\u0272\x03" +
		"\x02\x02\x02\u0278\u0273\x03\x02\x02\x02\u0278\u0274\x03\x02\x02\x02\u0278" +
		"\u0275\x03\x02\x02\x02\u0278\u0276\x03\x02\x02\x02\u0278\u0277\x03\x02" +
		"\x02\x02\u0279W\x03\x02\x02\x02\u027A\u027B\x07&\x02\x02\u027B\u027C\x07" +
		"F\x02\x02\u027C\u0284\x05j6\x02\u027D\u0280\x07=\x02\x02\u027E\u0281\x05" +
		"\xAEX\x02\u027F\u0281\x05\xA2R\x02\u0280\u027E\x03\x02\x02\x02\u0280\u027F" +
		"\x03\x02\x02\x02\u0281\u0283\x03\x02\x02\x02\u0282\u027D\x03\x02\x02\x02" +
		"\u0283\u0286\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0284\u0282\x03" +
		"\x02\x02\x02\u0285\u0287\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02\u0287" +
		"\u0288\x07=\x02\x02\u0288\u0289\x05\xA2R\x02\u0289\u028A\x07G\x02\x02" +
		"\u028AY\x03\x02\x02\x02\u028B\u028C\x07\x04\x02\x02\u028C\u028D\x07F\x02" +
		"\x02\u028D\u028E\x05V,\x02\u028E\u0295\x07=\x02\x02\u028F\u0290\x07\x05" +
		"\x02\x02\u0290\u0296\x05\xA2R\x02\u0291\u0292\x07\x06\x02\x02\u0292\u0296" +
		"\x05\f\x07\x02\u0293\u0294\x07\x07\x02\x02\u0294\u0296\x05V,\x02\u0295" +
		"\u028F\x03\x02\x02\x02\u0295\u0291\x03\x02\x02\x02\u0295\u0293\x03\x02" +
		"\x02\x02\u0296\u02A2\x03\x02\x02\x02\u0297\u029E\x07=\x02\x02\u0298\u0299" +
		"\x07\x05\x02\x02\u0299\u029F\x05\xA2R\x02\u029A\u029B\x07\x06\x02\x02" +
		"\u029B\u029F\x05\f\x07\x02\u029C\u029D\x07\x07\x02\x02\u029D\u029F\x05" +
		"V,\x02\u029E\u0298\x03\x02\x02\x02\u029E\u029A\x03\x02\x02\x02\u029E\u029C" +
		"\x03\x02\x02\x02\u029F\u02A1\x03\x02\x02\x02\u02A0\u0297\x03\x02\x02\x02" +
		"\u02A1\u02A4\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A2\u02A3\x03" +
		"\x02\x02\x02\u02A3\u02A5\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A5" +
		"\u02A6\x07G\x02\x02\u02A6[\x03\x02\x02\x02\u02A7\u02A8\x07\b\x02\x02\u02A8" +
		"\u02A9\x07F\x02\x02\u02A9\u02AA\x05V,\x02\u02AA\u02B1\x07=\x02\x02\u02AB" +
		"\u02AC\x07\t\x02\x02\u02AC\u02B2\x05\xA2R\x02\u02AD\u02AE\x07\n\x02\x02" +
		"\u02AE\u02B2\x05\f\x07\x02\u02AF\u02B0\x07\v\x02\x02\u02B0\u02B2\x05V" +
		",\x02\u02B1\u02AB\x03\x02\x02\x02\u02B1\u02AD\x03\x02\x02\x02\u02B1\u02AF" +
		"\x03\x02\x02\x02\u02B2\u02BE\x03\x02\x02\x02\u02B3\u02BA\x07=\x02\x02" +
		"\u02B4\u02B5\x07\t\x02\x02\u02B5\u02BB\x05\xA2R\x02\u02B6\u02B7\x07\n" +
		"\x02\x02\u02B7\u02BB\x05\f\x07\x02\u02B8\u02B9\x07\v\x02\x02\u02B9\u02BB" +
		"\x05V,\x02\u02BA\u02B4\x03\x02\x02\x02\u02BA\u02B6\x03\x02\x02\x02\u02BA" +
		"\u02B8\x03\x02\x02\x02\u02BB\u02BD\x03\x02\x02\x02\u02BC\u02B3\x03\x02" +
		"\x02\x02\u02BD\u02C0\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BE" +
		"\u02BF\x03\x02\x02\x02\u02BF\u02C1\x03\x02\x02\x02\u02C0\u02BE\x03\x02" +
		"\x02\x02\u02C1\u02C2\x07G\x02\x02\u02C2]\x03\x02\x02\x02\u02C3\u02C4\x07" +
		"#\x02\x02\u02C4\u02C6\x07F\x02\x02\u02C5\u02C7\x05\f\x07\x02\u02C6\u02C5" +
		"\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02" +
		"\u02C8\u02C9\x05\f\x07\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA\u02CB\x07" +
		"=\x02\x02\u02CB\u02CC\x05V,\x02\u02CC\u02CD\x07G\x02\x02\u02CD\u02CE\x05" +
		"\xB6\\\x02\u02CE_\x03\x02\x02\x02\u02CF\u02D0\x074\x02\x02\u02D0\u02D1" +
		"\x07F\x02\x02\u02D1\u02D2\x05\f\x07\x02\u02D2\u02D3\x07=\x02\x02\u02D3" +
		"\u02D4\x05V,\x02\u02D4\u02D5\x07=\x02\x02\u02D5\u02D6\x05V,\x02\u02D6" +
		"\u02D7\x07G\x02\x02\u02D7\u02D8\x05\xB6\\\x02\u02D8a\x03\x02\x02\x02\u02D9" +
		"\u02DA\x05d3\x02\u02DAc\x03\x02\x02\x02\u02DB\u02DC\x07\x1B\x02\x02\u02DC" +
		"\u02DD\x07F\x02\x02\u02DD\u02DE\x05\xA2R\x02\u02DE\u02DF\x07G\x02\x02" +
		"\u02DF\u02E0\x07\x1D\x02\x02\u02E0\u02E1\x05V,\x02\u02E1\u02E2\x07\x1E" +
		"\x02\x02\u02E2\u02E3\x05V,\x02\u02E3e\x03\x02\x02\x02\u02E4\u02E5\t\x04" +
		"\x02\x02\u02E5g\x03\x02\x02\x02\u02E6\u02EA\x05f4\x02\u02E7\u02EA\x07" +
		"b\x02\x02\u02E8\u02EA\x07`\x02\x02\u02E9\u02E6\x03\x02\x02\x02\u02E9\u02E7" +
		"\x03\x02\x02\x02\u02E9\u02E8\x03\x02\x02\x02\u02EAi\x03\x02\x02\x02\u02EB" +
		"\u02EC\x07N\x02\x02\u02EC\u02ED\x05\f\x07\x02\u02EDk\x03\x02\x02\x02\u02EE" +
		"\u02F2\x05n8\x02\u02EF\u02F1\x05r:\x02\u02F0\u02EF\x03\x02\x02\x02\u02F1" +
		"\u02F4\x03\x02\x02\x02\u02F2\u02F0\x03\x02\x02\x02\u02F2\u02F3\x03\x02" +
		"\x02\x02\u02F3m\x03\x02\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F5\u030D" +
		"\x05j6\x02\u02F6\u030D\x05\xFA~\x02\u02F7\u030D\x05\xF8}\x02\u02F8\u030D" +
		"\x05X-\x02\u02F9\u030D\x05Z.\x02\u02FA\u030D\x05\\/\x02\u02FB\u030D\x05" +
		"p9\x02\u02FC\u030D\x05\xF4{\x02\u02FD\u030D\x05N(\x02\u02FE\u030D\x05" +
		"\xA0Q\x02\u02FF\u0300\x07F\x02\x02\u0300\u0301\x05\xB8]\x02\u0301\u0302" +
		"\x07G\x02\x02\u0302\u030D\x03\x02\x02\x02\u0303\u0304\x07F\x02\x02\u0304" +
		"\u0305\x05\xBA^\x02\u0305\u0306\x07G\x02\x02\u0306\u030D\x03\x02\x02\x02" +
		"\u0307\u0308\x07F\x02\x02\u0308\u0309\x05d3\x02\u0309\u030A\x07G\x02\x02" +
		"\u030A\u030D\x03\x02\x02\x02\u030B\u030D\x05\f\x07\x02\u030C\u02F5\x03" +
		"\x02\x02\x02\u030C\u02F6\x03\x02\x02\x02\u030C\u02F7\x03\x02\x02\x02\u030C" +
		"\u02F8\x03\x02\x02\x02\u030C\u02F9\x03\x02\x02\x02\u030C\u02FA\x03\x02" +
		"\x02\x02\u030C\u02FB\x03\x02\x02\x02\u030C\u02FC\x03\x02\x02\x02\u030C" +
		"\u02FD\x03\x02\x02\x02\u030C\u02FE\x03\x02\x02\x02\u030C\u02FF\x03\x02" +
		"\x02\x02\u030C\u0303\x03\x02\x02\x02\u030C\u0307\x03\x02\x02\x02\u030C" +
		"\u030B\x03\x02\x02\x02\u030Do\x03\x02\x02\x02\u030E\u030F\x05\f\x07\x02" +
		"\u030F\u0318\x07F\x02\x02\u0310\u0315\x05t;\x02\u0311\u0312\x07=\x02\x02" +
		"\u0312\u0314\x05t;\x02\u0313\u0311\x03\x02\x02\x02\u0314\u0317\x03\x02" +
		"\x02\x02\u0315\u0313\x03\x02\x02\x02\u0315\u0316\x03\x02\x02\x02\u0316" +
		"\u0319\x03\x02\x02\x02\u0317\u0315\x03\x02\x02\x02\u0318\u0310\x03\x02" +
		"\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A" +
		"\u031B\x07G\x02\x02\u031Bq\x03\x02\x02\x02\u031C\u031D\x07H\x02\x02\u031D" +
		"\u031E\x05t;\x02\u031E\u031F\x07I\x02\x02\u031Fs\x03\x02\x02\x02\u0320" +
		"\u0321\x07h\x02\x02\u0321\u0323\x07>\x02\x02\u0322\u0320\x03\x02\x02\x02" +
		"\u0322\u0323\x03\x02\x02\x02\u0323\u0326\x03\x02\x02\x02\u0324\u0327\x05" +
		"J&\x02\u0325\u0327\x05j6\x02\u0326\u0324\x03\x02\x02\x02\u0326\u0325\x03" +
		"\x02\x02\x02\u0327u\x03\x02\x02\x02\u0328\u032E\x05l7\x02\u0329\u032A" +
		"\x05\b\x05\x02\u032A\u032B\x05l7\x02\u032B\u032D\x03\x02\x02\x02\u032C" +
		"\u0329\x03\x02\x02\x02\u032D\u0330\x03\x02\x02\x02\u032E\u032C\x03\x02" +
		"\x02\x02\u032E\u032F\x03\x02\x02\x02\u032Fw\x03\x02\x02\x02\u0330\u032E" +
		"\x03\x02\x02\x02\u0331\u033C\x07E\x02\x02\u0332\u033D\x05\xF0y\x02\u0333" +
		"\u0337\x05\f\x07\x02\u0334\u0336\x05|?\x02\u0335\u0334\x03\x02\x02\x02" +
		"\u0336\u0339\x03\x02\x02\x02\u0337\u0335\x03\x02\x02\x02\u0337\u0338\x03" +
		"\x02\x02\x02\u0338\u033A\x03\x02\x02\x02\u0339\u0337\x03\x02\x02\x02\u033A" +
		"\u033B\x07<\x02\x02\u033B\u033D\x03\x02\x02\x02\u033C\u0332\x03\x02\x02" +
		"\x02\u033C\u0333\x03\x02\x02\x02\u033Dy\x03\x02\x02\x02\u033E\u033F\x05" +
		"V,\x02\u033F\u0340\x05\f\x07\x02\u0340\u0341\x05V,\x02\u0341{\x03\x02" +
		"\x02\x02\u0342\u0346\x050\x19\x02\u0343\u0346\x05\xFA~\x02\u0344\u0346" +
		"\x05\xF8}\x02\u0345\u0342\x03\x02\x02\x02\u0345\u0343\x03\x02\x02\x02" +
		"\u0345\u0344\x03\x02\x02\x02\u0346}\x03\x02\x02\x02\u0347\u0348\t\x05" +
		"\x02\x02\u0348\u034E\x05\f\x07\x02\u0349\u034F\x05\x80A\x02\u034A\u034B" +
		"\x07F\x02\x02\u034B\u034C\x05\x8CG\x02\u034C\u034D\x07G\x02\x02\u034D" +
		"\u034F\x03\x02\x02\x02\u034E\u0349\x03\x02\x02\x02\u034E\u034A\x03\x02" +
		"\x02\x02\u034F\u0351\x03\x02\x02\x02\u0350\u0352\x05\x82B\x02\u0351\u0350" +
		"\x03\x02\x02\x02\u0351\u0352\x03\x02\x02\x02\u0352\u0354\x03\x02\x02\x02" +
		"\u0353\u0355\x05\x84C\x02\u0354\u0353\x03\x02\x02\x02\u0354\u0355\x03" +
		"\x02\x02\x02\u0355\u0357\x03\x02\x02\x02\u0356\u0358\x05\u0100\x81\x02" +
		"\u0357\u0356\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\u035C\x03" +
		"\x02\x02\x02\u0359\u035B\x050\x19\x02\u035A\u0359\x03\x02\x02\x02\u035B" +
		"\u035E\x03\x02\x02\x02\u035C\u035A\x03\x02\x02\x02\u035C\u035D\x03\x02" +
		"\x02\x02\u035D\u035F\x03\x02\x02\x02\u035E\u035C\x03\x02\x02\x02\u035F" +
		"\u0360\x07<\x02\x02\u0360\x7F\x03\x02\x02\x02\u0361\u0362\x07\x1A\x02" +
		"\x02\u0362\u0363\x07J\x02\x02\u0363\u0364\x05\xEEx\x02\u0364\u0365\x07" +
		"K\x02\x02\u0365\x81\x03\x02\x02\x02\u0366\u0367\x07(\x02\x02\u0367\u0368" +
		"\x07J\x02\x02\u0368\u0369\x05\xEEx\x02\u0369\u036A\x07K\x02\x02\u036A" +
		"\x83\x03\x02\x02\x02\u036B\u036C\x072\x02\x02\u036C\u0370\x07J\x02\x02" +
		"\u036D\u036F\x05\xF0y\x02\u036E\u036D\x03\x02\x02\x02\u036F\u0372\x03" +
		"\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371" +
		"\u0373\x03\x02\x02\x02\u0372\u0370\x03\x02\x02\x02\u0373\u0374\x07K\x02" +
		"\x02\u0374\x85\x03\x02\x02\x02\u0375\u0379\x05\x8AF\x02\u0376\u0378\x05" +
		"0\x19\x02\u0377\u0376\x03\x02\x02\x02\u0378\u037B\x03\x02\x02\x02\u0379" +
		"\u0377\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\x87\x03\x02\x02" +
		"\x02\u037B\u0379\x03\x02\x02\x02\u037C\u037D\x05\x8AF\x02\u037D\u0381" +
		"\x07\x0F\x02\x02\u037E\u0380\x050\x19\x02\u037F\u037E\x03\x02\x02\x02" +
		"\u0380\u0383\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02\u0381\u0382\x03" +
		"\x02\x02\x02\u0382\x89\x03\x02\x02\x02\u0383\u0381\x03\x02\x02\x02\u0384" +
		"\u0385\t\x06\x02\x02\u0385\u038B\x05\f\x07\x02\u0386\u038C\x05\x80A\x02" +
		"\u0387\u0388\x07F\x02\x02\u0388\u0389\x05\x8CG\x02\u0389\u038A\x07G\x02" +
		"\x02\u038A\u038C\x03\x02\x02\x02\u038B\u0386\x03\x02\x02\x02\u038B\u0387" +
		"\x03\x02\x02\x02\u038C\x8B\x03\x02\x02\x02\u038D\u038F\x05\x8EH\x02\u038E" +
		"\u038D\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F\u0391\x03\x02" +
		"\x02\x02\u0390\u0392\x05\x92J\x02\u0391\u0390\x03\x02\x02\x02\u0391\u0392" +
		"\x03\x02\x02\x02\u0392\x8D\x03\x02\x02\x02\u0393\u0398\x05\x90I\x02\u0394" +
		"\u0395\x07=\x02\x02\u0395\u0397\x05\x90I\x02\u0396\u0394\x03\x02\x02\x02" +
		"\u0397\u039A\x03\x02\x02\x02\u0398\u0396\x03\x02\x02\x02\u0398\u0399\x03" +
		"\x02\x02\x02\u0399\x8F\x03\x02\x02\x02\u039A\u0398\x03\x02\x02\x02\u039B" +
		"\u039C\x05*\x16\x02\u039C\u039E\x05\f\x07\x02\u039D\u039F\x05\x96L\x02" +
		"\u039E\u039D\x03\x02\x02\x02\u039E\u039F\x03\x02\x02\x02\u039F\x91\x03" +
		"\x02\x02\x02\u03A0\u03A2\x07=\x02\x02\u03A1\u03A0\x03\x02\x02\x02\u03A1" +
		"\u03A2\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3\u03AF\x07J\x02" +
		"\x02\u03A4\u03A9\x05\x94K\x02\u03A5\u03A6\x07=\x02\x02\u03A6\u03A8\x05" +
		"\x94K\x02\u03A7\u03A5\x03\x02\x02\x02\u03A8\u03AB\x03\x02\x02\x02\u03A9" +
		"\u03A7\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AD\x03\x02" +
		"\x02\x02\u03AB\u03A9\x03\x02\x02\x02\u03AC\u03AE\x07=\x02\x02\u03AD\u03AC" +
		"\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03B0\x03\x02\x02\x02" +
		"\u03AF\u03A4\x03\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0\u03B1\x03" +
		"\x02\x02\x02\u03B1\u03B3\x07K\x02\x02\u03B2\u03B4\x05\f\x07\x02\u03B3" +
		"\u03B2\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\x93\x03\x02\x02" +
		"\x02\u03B5\u03B6\x07H\x02\x02\u03B6\u03B7\x05\f\x07\x02\u03B7\u03B8\x07" +
		"I\x02\x02\u03B8\u03BB\x03\x02\x02\x02\u03B9\u03BB\x05\f\x07\x02\u03BA" +
		"\u03B5\x03\x02\x02\x02\u03BA\u03B9\x03\x02\x02\x02\u03BB\u03BC\x03\x02" +
		"\x02\x02\u03BC\u03BD\x07>\x02\x02\u03BD\u03BF\x05\f\x07\x02\u03BE\u03C0" +
		"\x05\f\x07\x02\u03BF\u03BE\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02" +
		"\u03C0\u03C2\x03\x02\x02\x02\u03C1\u03C3\x05\x96L\x02\u03C2\u03C1\x03" +
		"\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\x95\x03\x02\x02\x02\u03C4" +
		"\u03C5\x07J\x02\x02\u03C5\u03CA\x05\x98M\x02\u03C6\u03C7\x07=\x02\x02" +
		"\u03C7\u03C9\x05\x98M\x02\u03C8\u03C6\x03\x02\x02\x02\u03C9\u03CC\x03" +
		"\x02\x02\x02\u03CA\u03C8\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB" +
		"\u03CD\x03\x02\x02\x02\u03CC\u03CA\x03\x02\x02\x02\u03CD\u03CE\x07K\x02" +
		"\x02\u03CE\x97\x03\x02\x02\x02\u03CF\u03D1\x05\f\x07\x02\u03D0\u03D2\x05" +
		"V,\x02\u03D1\u03D0\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2\x99" +
		"\x03\x02\x02\x02\u03D3\u03D5\x05\x9CO\x02\u03D4\u03D6\x05\xB2Z\x02\u03D5" +
		"\u03D4\x03\x02\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6\x9B\x03\x02\x02" +
		"\x02\u03D7\u03D8\x05z>\x02\u03D8\x9D\x03\x02\x02\x02\u03D9\u03DB\x05\xB2" +
		"Z\x02\u03DA\u03D9\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03DF" +
		"\x03\x02\x02\x02\u03DC\u03DE\x05\x9AN\x02\u03DD\u03DC\x03\x02\x02\x02" +
		"\u03DE\u03E1\x03\x02\x02\x02\u03DF\u03DD\x03\x02\x02\x02\u03DF\u03E0\x03" +
		"\x02\x02\x02\u03E0\x9F\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02\u03E2" +
		"\u03E3\x07F\x02\x02\u03E3\u03E4\x05\xA2R\x02\u03E4\u03E5\x07G\x02\x02" +
		"\u03E5\xA1\x03\x02\x02\x02\u03E6\u03E7\x05\xA6T\x02\u03E7\xA3\x03\x02" +
		"\x02\x02\u03E8\u03E9\bS\x01\x02\u03E9\u03EC\x05\xA0Q\x02\u03EA\u03EC\x05" +
		"\xA8U\x02\u03EB\u03E8\x03\x02\x02\x02\u03EB\u03EA\x03\x02\x02\x02\u03EC" +
		"\u03F2\x03\x02\x02\x02\u03ED\u03EE\f\x05\x02\x02\u03EE\u03EF\x07V\x02" +
		"\x02\u03EF\u03F1\x05\xA6T\x02\u03F0\u03ED\x03\x02\x02\x02\u03F1\u03F4" +
		"\x03\x02\x02\x02\u03F2\u03F0\x03\x02\x02\x02\u03F2\u03F3\x03\x02\x02\x02" +
		"\u03F3\xA5\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F5\u03F6\bT" +
		"\x01\x02\u03F6\u03F7\x05\xA4S\x02\u03F7\u03FD\x03\x02\x02\x02\u03F8\u03F9" +
		"\f\x04\x02\x02\u03F9\u03FA\x07W\x02\x02\u03FA\u03FC\x05\xA4S\x02\u03FB" +
		"\u03F8\x03\x02\x02\x02\u03FC\u03FF\x03\x02\x02\x02\u03FD\u03FB\x03\x02" +
		"\x02\x02\u03FD\u03FE\x03\x02\x02\x02\u03FE\xA7\x03\x02\x02\x02\u03FF\u03FD" +
		"\x03\x02\x02\x02\u0400\u0401\x05V,\x02\u0401\u0402\x05\xAAV\x02\u0402" +
		"\u0403\x05V,\x02\u0403\xA9\x03\x02\x02\x02\u0404\u0405\t\x07\x02\x02\u0405" +
		"\xAB\x03\x02\x02\x02\u0406\u0407\x05\xB0Y\x02\u0407\u0408\x07Y\x02\x02" +
		"\u0408\u0409\x05V,\x02\u0409\xAD\x03\x02\x02\x02\u040A\u040B\x05\xB0Y" +
		"\x02\u040B\u040C\x07X\x02\x02\u040C\u040D\x05V,\x02\u040D\xAF\x03\x02" +
		"\x02\x02\u040E\u040F\x05v<\x02\u040F\xB1\x03\x02\x02\x02\u0410\u0412\x05" +
		"\xB4[\x02\u0411\u0410\x03\x02\x02\x02\u0412\u0413\x03\x02\x02\x02\u0413" +
		"\u0411\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414\xB3\x03\x02\x02" +
		"\x02\u0415\u0418\x05\xA2R\x02\u0416\u0418\x05\xECw\x02\u0417\u0415\x03" +
		"\x02\x02\x02\u0417\u0416\x03\x02\x02\x02\u0418\xB5\x03\x02\x02\x02\u0419" +
		"\u041C\x05\xE4s\x02\u041A\u041C\x05\xDEp\x02\u041B\u0419\x03\x02\x02\x02";
	private static readonly _serializedATNSegment2: string =
<<<<<<< develop
		"\u041B\u041A\x03\x02\x02\x02\u041C\xB7\x03\x02\x02\x02\u041D\u041E\x07" +
		",\x02\x02\u041E\u041F\x07F\x02\x02\u041F\u0420\x05V,\x02\u0420\u0421\x07" +
		"G\x02\x02\u0421\u0425\x07J\x02\x02\u0422\u0424\x05\xC2b\x02\u0423\u0422" +
		"\x03\x02\x02\x02\u0424\u0427\x03\x02\x02\x02\u0425\u0423\x03\x02\x02\x02" +
		"\u0425\u0426\x03\x02\x02\x02\u0426\u042A\x03\x02\x02\x02\u0427\u0425\x03" +
		"\x02\x02\x02\u0428\u042B\x05\xC0a\x02\u0429\u042B\x070\x02\x02\u042A\u0428" +
		"\x03\x02\x02\x02\u042A\u0429\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02" +
		"\u042B\u042C\x03\x02\x02\x02\u042C\u042D\x07K\x02\x02\u042D\xB9\x03\x02" +
		"\x02\x02\u042E\u042F\x07,\x02\x02\u042F\u0433\x07J\x02\x02\u0430\u0432" +
		"\x05\xC2b\x02\u0431\u0430\x03\x02\x02\x02\u0432\u0435\x03\x02\x02\x02" +
		"\u0433\u0431\x03\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434\u0438\x03" +
		"\x02\x02\x02\u0435\u0433\x03\x02\x02\x02\u0436\u0439\x05\xC0a\x02\u0437" +
		"\u0439\x070\x02\x02\u0438\u0436\x03\x02\x02\x02\u0438\u0437\x03\x02\x02" +
		"\x02\u0438\u0439\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\u043B" +
		"\x07K\x02\x02\u043B\xBB\x03\x02\x02\x02\u043C\u043D\x07+\x02\x02\u043D" +
		"\u043E\x07F\x02\x02\u043E\u043F\x05V,\x02\u043F\u0440\x07G\x02\x02\u0440" +
		"\u0444\x07J\x02\x02\u0441\u0443\x05\xC4c\x02\u0442\u0441\x03\x02\x02\x02" +
		"\u0443\u0446\x03\x02\x02\x02\u0444\u0442\x03\x02\x02\x02\u0444\u0445\x03" +
		"\x02\x02\x02\u0445\u0449\x03\x02\x02\x02\u0446\u0444\x03\x02\x02\x02\u0447" +
		"\u044A\x05\xC6d\x02\u0448\u044A\x070\x02\x02\u0449\u0447\x03\x02\x02\x02" +
		"\u0449\u0448\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A\u044B\x03" +
		"\x02\x02\x02\u044B\u044C\x07K\x02\x02\u044C\xBD\x03\x02\x02\x02\u044D" +
		"\u044E\x07+\x02\x02\u044E\u0452\x07J\x02\x02\u044F\u0451\x05\xC4c\x02" +
		"\u0450\u044F\x03\x02\x02\x02\u0451\u0454\x03\x02\x02\x02\u0452\u0450\x03" +
		"\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0457\x03\x02\x02\x02\u0454" +
		"\u0452\x03\x02\x02\x02\u0455\u0458\x05\xC6d\x02\u0456\u0458\x070\x02\x02" +
		"\u0457\u0455\x03\x02\x02\x02\u0457\u0456\x03\x02\x02\x02\u0457\u0458\x03" +
		"\x02\x02\x02\u0458\u0459\x03\x02\x02\x02\u0459\u045A\x07K\x02\x02\u045A" +
		"\xBF\x03\x02\x02\x02\u045B\u045C\x07.\x02\x02\u045C\u0462\x07>\x02\x02" +
		"\u045D\u0463\x05V,\x02\u045E\u045F\x07J\x02\x02\u045F\u0460\x05V,\x02" +
		"\u0460\u0461\x07K\x02\x02\u0461\u0463\x03\x02\x02\x02\u0462\u045D\x03" +
		"\x02\x02\x02\u0462\u045E\x03\x02\x02\x02\u0463\xC1\x03\x02\x02\x02\u0464" +
		"\u046A\x07-\x02\x02\u0465\u0466\x07F\x02\x02\u0466\u0467\x05J&\x02\u0467" +
		"\u0468\x07G\x02\x02\u0468\u046B\x03\x02\x02\x02\u0469\u046B\x05J&\x02" +
		"\u046A\u0465\x03\x02\x02\x02\u046A\u0469\x03\x02\x02\x02\u046B\u046C\x03" +
		"\x02\x02\x02\u046C\u0472\x07>\x02\x02\u046D\u0473\x05V,\x02\u046E\u046F" +
		"\x07J\x02\x02\u046F\u0470\x05V,\x02\u0470\u0471\x07K\x02\x02\u0471\u0473" +
		"\x03\x02\x02\x02\u0472\u046D\x03\x02\x02\x02\u0472\u046E\x03\x02\x02\x02" +
		"\u0473\xC3\x03\x02\x02\x02\u0474\u047B\x07-\x02\x02\u0475\u047C\x05\xF6" +
		"|\x02\u0476\u0477\x07F\x02\x02\u0477\u0478\x05J&\x02\u0478\u0479\x07G" +
		"\x02\x02\u0479\u047C\x03\x02\x02\x02\u047A\u047C\x05J&\x02\u047B\u0475" +
		"\x03\x02\x02\x02\u047B\u0476\x03\x02\x02\x02\u047B\u047A\x03\x02\x02\x02" +
		"\u047C\u047D\x03\x02\x02\x02\u047D\u047E\x07>\x02\x02\u047E\u047F\x05" +
		"\xB6\\\x02\u047F\xC5\x03\x02\x02\x02\u0480\u0481\x07.\x02\x02\u0481\u0482" +
		"\x07>\x02\x02\u0482\u0483\x05\xB6\\\x02\u0483\xC7\x03\x02\x02\x02\u0484" +
		"\u0486\x071\x02\x02\u0485\u0487\x07<\x02\x02\u0486\u0485\x03\x02\x02\x02" +
		"\u0486\u0487\x03\x02\x02\x02\u0487\xC9\x03\x02\x02\x02\u0488\u048C\x05" +
		"\xD0i\x02\u0489\u048B\x05\xCEh\x02\u048A\u0489\x03\x02\x02\x02\u048B\u048E" +
		"\x03\x02\x02\x02\u048C\u048A\x03\x02\x02\x02\u048C\u048D\x03\x02\x02\x02" +
		"\u048D\u0490\x03\x02\x02\x02\u048E\u048C\x03\x02\x02\x02\u048F\u0491\x05" +
		"\xCCg\x02\u0490\u048F\x03\x02\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491" +
		"\xCB\x03\x02\x02\x02\u0492\u0493\x07\x1E\x02\x02\u0493\u0494\x05\xB6\\" +
		"\x02\u0494\xCD\x03\x02\x02\x02\u0495\u0496\x07\x1E\x02\x02\u0496\u0497" +
		"\x05\xD0i\x02\u0497\xCF\x03\x02\x02\x02\u0498\u0499\x07\x1C\x02\x02\u0499" +
		"\u049A\x07F\x02\x02\u049A\u049B\x05\xB4[\x02\u049B\u049C\x07G\x02\x02" +
		"\u049C\u049D\x05\xB6\\\x02\u049D\xD1\x03\x02\x02\x02\u049E\u049F\x07;" +
		"\x02\x02\u049F\u04A0\x07F\x02\x02\u04A0\u04A1\x05\f\x07\x02\u04A1\u04A2" +
		"\x07=\x02\x02\u04A2\u04A3\x05\xE4s\x02\u04A3\u04A4\x07G\x02\x02\u04A4" +
		"\xD3\x03\x02\x02\x02\u04A5\u04A8\x05\f\x07\x02\u04A6\u04A8\x05j6\x02\u04A7" +
		"\u04A5\x03\x02\x02\x02\u04A7\u04A6\x03\x02\x02\x02\u04A8\u04A9\x03\x02" +
		"\x02\x02\u04A9\u04AC\x07%\x02\x02\u04AA\u04AD\x05V,\x02\u04AB\u04AD\x07" +
		"\x0F\x02\x02\u04AC\u04AA\x03\x02\x02\x02\u04AC\u04AB\x03\x02\x02\x02\u04AD" +
		"\xD5\x03\x02\x02\x02\u04AE\u04AF\x07$\x02\x02\u04AF\u04B0\x07F\x02\x02" +
		"\u04B0\u04B7\x05\xD4k\x02\u04B1\u04B3\x07=\x02\x02\u04B2\u04B1\x03\x02" +
		"\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4" +
		"\u04B6\x05\xD4k\x02\u04B5\u04B2\x03\x02\x02\x02\u04B6\u04B9\x03\x02\x02" +
		"\x02\u04B7\u04B5\x03\x02\x02\x02\u04B7\u04B8\x03\x02\x02\x02\u04B8\u04C0" +
		"\x03\x02\x02\x02\u04B9\u04B7\x03\x02\x02\x02\u04BA\u04BC\x07=\x02\x02" +
		"\u04BB\u04BA\x03\x02\x02\x02\u04BB\u04BC\x03\x02\x02\x02\u04BC\u04BD\x03" +
		"\x02\x02\x02\u04BD\u04BF\x05\xA2R\x02\u04BE\u04BB\x03\x02\x02\x02\u04BF" +
		"\u04C2\x03\x02\x02\x02\u04C0\u04BE\x03\x02\x02\x02\u04C0\u04C1\x03\x02" +
		"\x02\x02\u04C1\u04C3\x03\x02\x02\x02\u04C2\u04C0\x03\x02\x02\x02\u04C3" +
		"\u04C4\x07G\x02\x02\u04C4\u04C5\x05\xB6\\\x02\u04C5\xD7\x03\x02\x02\x02" +
		"\u04C6\u04C7\x073\x02\x02\u04C7\u04C8\x07F\x02\x02\u04C8\u04C9\x05\xB4" +
		"[\x02\u04C9\u04CA\x07G\x02\x02\u04CA\u04CB\x05\xB6\\\x02\u04CB\xD9\x03" +
		"\x02\x02\x02\u04CC\u04CD\x07\'\x02\x02\u04CD\u04CE\x05V,\x02\u04CE\xDB" +
		"\x03\x02\x02\x02\u04CF\u04D0\x05v<\x02\u04D0\xDD\x03\x02\x02\x02\u04D1" +
		"\u04D3\x05\xACW\x02\u04D2\u04D4\x07<\x02\x02\u04D3\u04D2\x03\x02\x02\x02" +
		"\u04D3\u04D4\x03\x02\x02\x02\u04D4\u04F3\x03\x02\x02\x02\u04D5\u04D7\x05" +
		"\xAEX\x02\u04D6\u04D8\x07<\x02\x02\u04D7\u04D6\x03\x02\x02\x02\u04D7\u04D8" +
		"\x03\x02\x02\x02\u04D8\u04F3\x03\x02\x02\x02\u04D9\u04DB\x05\xDAn\x02" +
		"\u04DA\u04DC\x07<\x02\x02\u04DB\u04DA\x03\x02\x02\x02\u04DB\u04DC\x03" +
		"\x02\x02\x02\u04DC\u04F3\x03\x02\x02\x02\u04DD\u04DF\x05\xDCo\x02\u04DE" +
		"\u04E0\x07<\x02\x02\u04DF\u04DE\x03\x02\x02\x02\u04DF\u04E0\x03\x02\x02" +
		"\x02\u04E0\u04F3\x03\x02\x02\x02\u04E1\u04F3\x05`1\x02\u04E2\u04F3\x05" +
		"^0\x02\u04E3\u04F3\x05\xD6l\x02\u04E4\u04F3\x05\xCAf\x02\u04E5\u04E7\x05" +
		"\xE2r\x02\u04E6\u04E8\x07<\x02\x02\u04E7\u04E6\x03\x02\x02\x02\u04E7\u04E8" +
		"\x03\x02\x02\x02\u04E8\u04F3\x03\x02\x02\x02\u04E9\u04F3\x05\xBE`\x02" +
		"\u04EA\u04F3\x05\xC8e\x02\u04EB\u04F3\x05\xBC_\x02\u04EC\u04F3\x05b2\x02" +
		"\u04ED\u04F3\x05\xD8m\x02\u04EE\u04F0\x05\xD2j\x02\u04EF\u04F1\x07<\x02" +
		"\x02\u04F0\u04EF\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02\u04F1\u04F3" +
		"\x03\x02\x02\x02\u04F2\u04D1\x03\x02\x02\x02\u04F2\u04D5\x03\x02\x02\x02" +
		"\u04F2\u04D9\x03\x02\x02\x02\u04F2\u04DD\x03\x02\x02\x02\u04F2\u04E1\x03" +
		"\x02\x02\x02\u04F2\u04E2\x03\x02\x02\x02\u04F2\u04E3\x03\x02\x02\x02\u04F2" +
		"\u04E4\x03\x02\x02\x02\u04F2\u04E5\x03\x02\x02\x02\u04F2\u04E9\x03\x02" +
		"\x02\x02\u04F2\u04EA\x03\x02\x02\x02\u04F2\u04EB\x03\x02\x02\x02\u04F2" +
		"\u04EC\x03\x02\x02\x02\u04F2\u04ED\x03\x02\x02\x02\u04F2\u04EE\x03\x02" +
		"\x02\x02\u04F3\xDF\x03\x02\x02\x02\u04F4\u04F5\x07 \x02\x02\u04F5\u04F6" +
		"\x05\xE4s\x02\u04F6\xE1\x03\x02\x02\x02\u04F7\u04F8\x07!\x02\x02\u04F8" +
		"\u04F9\x07F\x02\x02\u04F9\u04FA\x05\xE0q\x02\u04FA\u04FB\x07\"\x02\x02" +
		"\u04FB\u04FC\x07F\x02\x02\u04FC\u0501\x05\f\x07\x02\u04FD\u04FE\x07=\x02" +
		"\x02\u04FE\u0500\x05\f\x07\x02\u04FF\u04FD\x03\x02\x02\x02\u0500\u0503" +
		"\x03\x02\x02\x02\u0501\u0502\x03\x02\x02\x02\u0501\u04FF\x03\x02\x02\x02" +
		"\u0502\u0504\x03\x02\x02\x02\u0503\u0501\x03\x02\x02\x02\u0504\u0505\x07" +
		"G\x02\x02\u0505\u0506\x05\xE4s\x02\u0506\u0507\x07G\x02\x02\u0507\xE3" +
		"\x03\x02\x02\x02\u0508\u050A\x07J\x02\x02\u0509\u050B\x05\xDEp\x02\u050A" +
		"\u0509\x03\x02\x02\x02\u050B\u050C\x03\x02\x02\x02\u050C\u050A\x03\x02" +
		"\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\u050E\x03\x02\x02\x02\u050E" +
		"\u050F\x07K\x02\x02\u050F\xE5\x03\x02\x02\x02\u0510\u0511\t\b\x02\x02" +
		"\u0511\xE7\x03\x02\x02\x02\u0512\u0513\x07^\x02\x02\u0513\u0517\x05\xE8" +
		"u\x02\u0514\u0517\x05v<\x02\u0515\u0517\x07d\x02\x02\u0516\u0512\x03\x02" +
		"\x02\x02\u0516\u0514\x03\x02\x02\x02\u0516\u0515\x03\x02\x02\x02\u0517" +
		"\xE9\x03\x02\x02\x02\u0518\u0519\bv\x01\x02\u0519\u051A\x07F\x02\x02\u051A" +
		"\u051B\x05\xEAv\x02\u051B\u051C\x07G\x02\x02\u051C\u051F\x03\x02\x02\x02" +
		"\u051D\u051F\x05\xE8u\x02\u051E\u0518\x03\x02\x02\x02\u051E\u051D\x03" +
		"\x02\x02\x02\u051F\u0526\x03\x02\x02\x02\u0520\u0521\f\x04\x02\x02\u0521" +
		"\u0522\x05\xE6t\x02\u0522\u0523\x05\xEAv\x05\u0523\u0525\x03\x02\x02\x02" +
		"\u0524\u0520\x03\x02\x02\x02\u0525\u0528\x03\x02\x02\x02\u0526\u0524\x03" +
		"\x02\x02\x02\u0526\u0527\x03\x02\x02\x02\u0527\xEB\x03\x02\x02\x02\u0528" +
		"\u0526\x03\x02\x02\x02\u0529\u052A\x05\f\x07\x02\u052A\u052B\x07F\x02" +
		"\x02\u052B\u052C\x05\x9EP\x02\u052C\u052D\x07G\x02\x02\u052D\xED\x03\x02" +
		"\x02\x02\u052E\u0530\x05(\x15\x02\u052F\u052E\x03\x02\x02\x02\u0530\u0533" +
		"\x03\x02\x02\x02\u0531\u052F\x03\x02\x02\x02\u0531\u0532\x03\x02\x02\x02" +
		"\u0532\xEF\x03\x02\x02\x02\u0533\u0531\x03\x02\x02\x02\u0534\u0535\x05" +
		"\f\x07\x02\u0535\u0538\x05\f\x07\x02\u0536\u0537\x07\x0E\x02\x02\u0537" +
		"\u0539\x05\f\x07\x02\u0538\u0536\x03\x02\x02\x02\u0538\u0539\x03\x02\x02" +
		"\x02\u0539\u053B\x03\x02\x02\x02\u053A\u053C\x05V,\x02\u053B\u053A\x03" +
		"\x02\x02\x02\u053B\u053C\x03\x02\x02\x02\u053C\u0540\x03\x02\x02\x02\u053D" +
		"\u053F\x050\x19\x02\u053E\u053D\x03\x02\x02\x02\u053F\u0542\x03\x02\x02" +
		"\x02\u0540\u053E\x03\x02\x02\x02\u0540\u0541\x03\x02\x02\x02\u0541\u0543" +
		"\x03\x02\x02\x02\u0542\u0540\x03\x02\x02\x02\u0543\u0544\x07<\x02\x02" +
		"\u0544\xF1\x03\x02\x02\x02\u0545\u0548\x07\x16\x02\x02\u0546\u0549\x05" +
		"\x86D\x02\u0547\u0549\x05(\x15\x02\u0548\u0546\x03\x02\x02\x02\u0548\u0547" +
		"\x03\x02\x02\x02\u0549\u054A\x03\x02\x02\x02\u054A\u054B\x07<\x02\x02" +
		"\u054B\xF3\x03\x02\x02\x02\u054C\u054E\x07H\x02\x02\u054D\u054F\x05V," +
		"\x02\u054E\u054D\x03\x02\x02\x02\u054E\u054F\x03\x02\x02\x02\u054F\u0554" +
		"\x03\x02\x02\x02\u0550\u0551\x07=\x02\x02\u0551\u0553\x05V,\x02\u0552" +
		"\u0550\x03\x02\x02\x02\u0553\u0556\x03\x02\x02\x02\u0554\u0552\x03\x02" +
		"\x02\x02\u0554\u0555\x03\x02\x02\x02\u0555\u0557\x03\x02\x02\x02\u0556" +
		"\u0554\x03\x02\x02\x02\u0557\u0558\x07I\x02\x02\u0558\xF5\x03\x02\x02" +
		"\x02\u0559\u055C\x05V,\x02\u055A\u055B\x07=\x02\x02\u055B\u055D\x05V," +
		"\x02\u055C\u055A\x03\x02\x02\x02\u055D\u055E\x03\x02\x02\x02\u055E\u055C" +
		"\x03\x02\x02\x02\u055E\u055F\x03\x02\x02\x02\u055F\xF7\x03\x02\x02\x02" +
		"\u0560\u0562\x07J\x02\x02\u0561\u0563\x05V,\x02\u0562\u0561\x03\x02\x02" +
		"\x02\u0562\u0563\x03\x02\x02\x02\u0563\u0568\x03\x02\x02\x02\u0564\u0565" +
		"\x07=\x02\x02\u0565\u0567\x05V,\x02\u0566\u0564\x03\x02\x02\x02\u0567" +
		"\u056A\x03\x02\x02\x02\u0568\u0566\x03\x02\x02\x02\u0568\u0569\x03\x02" +
		"\x02\x02\u0569\u056B\x03\x02\x02\x02\u056A\u0568\x03\x02\x02\x02\u056B" +
		"\u056C\x07K\x02\x02\u056C\xF9\x03\x02\x02\x02\u056D\u0576\x07Z\x02\x02" +
		"\u056E\u0570\x07t\x02\x02\u056F\u056E\x03\x02\x02\x02\u0570\u0571\x03" +
		"\x02\x02\x02\u0571\u056F\x03\x02\x02\x02\u0571\u0572\x03\x02\x02\x02\u0572" +
		"\u0575\x03\x02\x02\x02\u0573\u0575\x05\xFA~\x02\u0574\u056F\x03\x02\x02" +
		"\x02\u0574\u0573\x03\x02\x02\x02\u0575\u0578\x03\x02\x02\x02\u0576\u0577" +
		"\x03\x02\x02\x02\u0576\u0574\x03\x02\x02\x02\u0577\u0579\x03\x02\x02\x02" +
		"\u0578\u0576\x03\x02\x02\x02\u0579\u057A\x07s\x02\x02\u057A\xFB\x03\x02" +
		"\x02\x02\u057B\u057C\x07\x17\x02\x02\u057C\u0580\x05\f\x07\x02\u057D\u057F" +
		"\x050\x19\x02\u057E\u057D\x03\x02\x02\x02\u057F\u0582\x03\x02\x02\x02" +
		"\u0580\u057E\x03\x02\x02\x02\u0580\u0581\x03\x02\x02\x02\u0581\u0583\x03" +
		"\x02\x02\x02\u0582\u0580\x03\x02\x02\x02\u0583\u0584\x07<\x02\x02\u0584" +
		"\xFD\x03\x02\x02\x02\u0585\u0588\x07\x17\x02\x02\u0586\u0589\x05\f\x07" +
		"\x02\u0587\u0589\x07\x0F\x02\x02\u0588\u0586\x03\x02\x02\x02\u0588\u0587" +
		"\x03\x02\x02\x02\u0589\u058F\x03\x02\x02\x02\u058A\u058E\x05&\x14\x02" +
		"\u058B\u058E\x05\x88E\x02\u058C\u058E\x05(\x15\x02\u058D\u058A\x03\x02" +
		"\x02\x02\u058D\u058B\x03\x02\x02\x02\u058D\u058C\x03\x02\x02\x02\u058E" +
		"\u0591\x03\x02\x02\x02\u058F\u058D\x03\x02\x02\x02\u058F\u0590\x03\x02" +
		"\x02\x02\u0590\u0592\x03\x02\x02\x02\u0591\u058F\x03\x02\x02\x02\u0592" +
		"\u0593\x07<\x02\x02\u0593\xFF\x03\x02\x02\x02\u0594\u0595\x078\x02\x02" +
		"\u0595\u0597\x07J\x02\x02\u0596\u0598\x05\u0102\x82\x02\u0597\u0596\x03" +
		"\x02\x02\x02\u0597\u0598\x03\x02\x02\x02\u0598\u0599\x03\x02\x02\x02\u0599" +
		"\u059A\x07K\x02\x02\u059A\u0101\x03\x02\x02\x02\u059B\u059D\x05\u0104" +
		"\x83\x02\u059C\u059B\x03\x02\x02\x02\u059D\u059E\x03\x02\x02\x02\u059E" +
		"\u059C\x03\x02\x02\x02\u059E\u059F\x03\x02\x02\x02\u059F\u0103\x03\x02" +
		"\x02\x02\u05A0\u05A1\x079\x02\x02\u05A1\u05A2\x05\f\x07\x02\u05A2\u05A3" +
		"\x07\x1C\x02\x02\u05A3\u05A7\x07F\x02\x02\u05A4\u05A8\x05\xA2R\x02\u05A5" +
		"\u05A8\x05\xD4k\x02\u05A6\u05A8\x05\xAEX\x02\u05A7\u05A4\x03\x02\x02\x02" +
		"\u05A7\u05A5\x03\x02\x02\x02\u05A7\u05A6\x03\x02\x02\x02\u05A8\u05A9\x03" +
		"\x02\x02\x02\u05A9\u05A7\x03\x02\x02\x02\u05A9\u05AA\x03\x02\x02\x02\u05AA" +
		"\u05AB\x03\x02\x02\x02\u05AB\u05AC\x07G\x02\x02\u05AC\u05AE\x07\x1D\x02" +
		"\x02\u05AD\u05AF\x05\xDEp\x02\u05AE\u05AD\x03\x02\x02\x02\u05AF\u05B0" +
		"\x03\x02\x02\x02\u05B0\u05AE\x03\x02\x02\x02\u05B0\u05B1\x03\x02\x02\x02" +
		"\u05B1\u05B5\x03\x02\x02\x02\u05B2\u05B4\x050\x19\x02\u05B3\u05B2\x03" +
		"\x02\x02\x02\u05B4\u05B7\x03\x02\x02\x02\u05B5\u05B3\x03\x02\x02\x02\u05B5" +
		"\u05B6\x03\x02\x02\x02\u05B6\u05B8\x03\x02\x02\x02\u05B7\u05B5\x03\x02" +
		"\x02\x02\u05B8\u05B9\x07<\x02\x02\u05B9\u0105\x03\x02\x02\x02\x9F\u010A" +
		"\u010E\u0113\u0117\u0124\u012A\u0138\u0140\u0145\u014B\u0154\u0160\u0165" +
		"\u0167\u016B\u0171\u0178\u017E\u0182\u0187\u018E\u0195\u019C\u01A1\u01A7" +
		"\u01AF\u01BD\u01C0\u01C3\u01CA\u01D2\u01DA\u01E2\u01E6\u01ED\u01F7\u0200" +
		"\u0210\u0213\u021D\u0224\u0232\u023F\u0248\u024F\u0254\u0263\u0267\u0278" +
		"\u0280\u0284\u0295\u029E\u02A2\u02B1\u02BA\u02BE\u02C6\u02E9\u02F2\u030C" +
		"\u0315\u0318\u0322\u0326\u032E\u0337\u033C\u0345\u034E\u0351\u0354\u0357" +
		"\u035C\u0370\u0379\u0381\u038B\u038E\u0391\u0398\u039E\u03A1\u03A9\u03AD" +
		"\u03AF\u03B3\u03BA\u03BF\u03C2\u03CA\u03D1\u03D5\u03DA\u03DF\u03EB\u03F2" +
		"\u03FD\u0413\u0417\u041B\u0425\u042A\u0433\u0438\u0444\u0449\u0452\u0457" +
		"\u0462\u046A\u0472\u047B\u0486\u048C\u0490\u04A7\u04AC\u04B2\u04B7\u04BB" +
		"\u04C0\u04D3\u04D7\u04DB\u04DF\u04E7\u04F0\u04F2\u0501\u050C\u0516\u051E" +
		"\u0526\u0531\u0538\u053B\u0540\u0548\u054E\u0554\u055E\u0562\u0568\u0571" +
		"\u0574\u0576\u0580\u0588\u058D\u058F\u0597\u059E\u05A7\u05A9\u05B0\u05B5";
=======
		"\u0419\u041C\x05\xE4s\x02\u041A\u041C\x05\xDEp\x02\u041B\u0419\x03\x02" +
		"\x02\x02\u041B\u041A\x03\x02\x02\x02\u041C\xB7\x03\x02\x02\x02\u041D\u041E" +
		"\x07,\x02\x02\u041E\u041F\x07F\x02\x02\u041F\u0420\x05V,\x02\u0420\u0421" +
		"\x07G\x02\x02\u0421\u0425\x07J\x02\x02\u0422\u0424\x05\xC2b\x02\u0423" +
		"\u0422\x03\x02\x02\x02\u0424\u0427\x03\x02\x02\x02\u0425\u0423\x03\x02" +
		"\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\u042A\x03\x02\x02\x02\u0427" +
		"\u0425\x03\x02\x02\x02\u0428\u042B\x05\xC0a\x02\u0429\u042B\x070\x02\x02" +
		"\u042A\u0428\x03\x02\x02\x02\u042A\u0429\x03\x02\x02\x02\u042A\u042B\x03" +
		"\x02\x02\x02\u042B\u042C\x03\x02\x02\x02\u042C\u042D\x07K\x02\x02\u042D" +
		"\xB9\x03\x02\x02\x02\u042E\u042F\x07,\x02\x02\u042F\u0433\x07J\x02\x02" +
		"\u0430\u0432\x05\xC2b\x02\u0431\u0430\x03\x02\x02\x02\u0432\u0435\x03" +
		"\x02\x02\x02\u0433\u0431\x03\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434" +
		"\u0438\x03\x02\x02\x02\u0435\u0433\x03\x02\x02\x02\u0436\u0439\x05\xC0" +
		"a\x02\u0437\u0439\x070\x02\x02\u0438\u0436\x03\x02\x02\x02\u0438\u0437" +
		"\x03\x02\x02\x02\u0438\u0439\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02" +
		"\u043A\u043B\x07K\x02\x02\u043B\xBB\x03\x02\x02\x02\u043C\u043D\x07+\x02" +
		"\x02\u043D\u043E\x07F\x02\x02\u043E\u043F\x05V,\x02\u043F\u0440\x07G\x02" +
		"\x02\u0440\u0444\x07J\x02\x02\u0441\u0443\x05\xC4c\x02\u0442\u0441\x03" +
		"\x02\x02\x02\u0443\u0446\x03\x02\x02\x02\u0444\u0442\x03\x02\x02\x02\u0444" +
		"\u0445\x03\x02\x02\x02\u0445\u0449\x03\x02\x02\x02\u0446\u0444\x03\x02" +
		"\x02\x02\u0447\u044A\x05\xC6d\x02\u0448\u044A\x070\x02\x02\u0449\u0447" +
		"\x03\x02\x02\x02\u0449\u0448\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02" +
		"\u044A\u044B\x03\x02\x02\x02\u044B\u044C\x07K\x02\x02\u044C\xBD\x03\x02" +
		"\x02\x02\u044D\u044E\x07+\x02\x02\u044E\u0452\x07J\x02\x02\u044F\u0451" +
		"\x05\xC4c\x02\u0450\u044F\x03\x02\x02\x02\u0451\u0454\x03\x02\x02\x02" +
		"\u0452\u0450\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0457\x03" +
		"\x02\x02\x02\u0454\u0452\x03\x02\x02\x02\u0455\u0458\x05\xC6d\x02\u0456" +
		"\u0458\x070\x02\x02\u0457\u0455\x03\x02\x02\x02\u0457\u0456\x03\x02\x02" +
		"\x02\u0457\u0458\x03\x02\x02\x02\u0458\u0459\x03\x02\x02\x02\u0459\u045A" +
		"\x07K\x02\x02\u045A\xBF\x03\x02\x02\x02\u045B\u045C\x07.\x02\x02\u045C" +
		"\u0462\x07>\x02\x02\u045D\u0463\x05V,\x02\u045E\u045F\x07J\x02\x02\u045F" +
		"\u0460\x05V,\x02\u0460\u0461\x07K\x02\x02\u0461\u0463\x03\x02\x02\x02" +
		"\u0462\u045D\x03\x02\x02\x02\u0462\u045E\x03\x02\x02\x02\u0463\xC1\x03" +
		"\x02\x02\x02\u0464\u046A\x07-\x02\x02\u0465\u0466\x07F\x02\x02\u0466\u0467" +
		"\x05J&\x02\u0467\u0468\x07G\x02\x02\u0468\u046B\x03\x02\x02\x02\u0469" +
		"\u046B\x05J&\x02\u046A\u0465\x03\x02\x02\x02\u046A\u0469\x03\x02\x02\x02" +
		"\u046B\u046C\x03\x02\x02\x02\u046C\u0472\x07>\x02\x02\u046D\u0473\x05" +
		"V,\x02\u046E\u046F\x07J\x02\x02\u046F\u0470\x05V,\x02\u0470\u0471\x07" +
		"K\x02\x02\u0471\u0473\x03\x02\x02\x02\u0472\u046D\x03\x02\x02\x02\u0472" +
		"\u046E\x03\x02\x02\x02\u0473\xC3\x03\x02\x02\x02\u0474\u047B\x07-\x02" +
		"\x02\u0475\u047C\x05\xF6|\x02\u0476\u0477\x07F\x02\x02\u0477\u0478\x05" +
		"J&\x02\u0478\u0479\x07G\x02\x02\u0479\u047C\x03\x02\x02\x02\u047A\u047C" +
		"\x05J&\x02\u047B\u0475\x03\x02\x02\x02\u047B\u0476\x03\x02\x02\x02\u047B" +
		"\u047A\x03\x02\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D\u047E\x07>\x02" +
		"\x02\u047E\u047F\x05\xB6\\\x02\u047F\xC5\x03\x02\x02\x02\u0480\u0481\x07" +
		".\x02\x02\u0481\u0482\x07>\x02\x02\u0482\u0483\x05\xB6\\\x02\u0483\xC7" +
		"\x03\x02\x02\x02\u0484\u0486\x071\x02\x02\u0485\u0487\x07<\x02\x02\u0486" +
		"\u0485\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487\xC9\x03\x02\x02" +
		"\x02\u0488\u048C\x05\xD0i\x02\u0489\u048B\x05\xCEh\x02\u048A\u0489\x03" +
		"\x02\x02\x02\u048B\u048E\x03\x02\x02\x02\u048C\u048A\x03\x02\x02\x02\u048C" +
		"\u048D\x03\x02\x02\x02\u048D\u0490\x03\x02\x02\x02\u048E\u048C\x03\x02" +
		"\x02\x02\u048F\u0491\x05\xCCg\x02\u0490\u048F\x03\x02\x02\x02\u0490\u0491" +
		"\x03\x02\x02\x02\u0491\xCB\x03\x02\x02\x02\u0492\u0493\x07\x1E\x02\x02" +
		"\u0493\u0494\x05\xB6\\\x02\u0494\xCD\x03\x02\x02\x02\u0495\u0496\x07\x1E" +
		"\x02\x02\u0496\u0497\x05\xD0i\x02\u0497\xCF\x03\x02\x02\x02\u0498\u0499" +
		"\x07\x1C\x02\x02\u0499\u049A\x07F\x02\x02\u049A\u049B\x05\xB4[\x02\u049B" +
		"\u049C\x07G\x02\x02\u049C\u049D\x05\xB6\\\x02\u049D\xD1\x03\x02\x02\x02" +
		"\u049E\u049F\x07;\x02\x02\u049F\u04A0\x07F\x02\x02\u04A0\u04A1\x05\f\x07" +
		"\x02\u04A1\u04A2\x07=\x02\x02\u04A2\u04A3\x05\xE4s\x02\u04A3\u04A4\x07" +
		"G\x02\x02\u04A4\xD3\x03\x02\x02\x02\u04A5\u04A8\x05\f\x07\x02\u04A6\u04A8" +
		"\x05j6\x02\u04A7\u04A5\x03\x02\x02\x02\u04A7\u04A6\x03\x02\x02\x02\u04A8" +
		"\u04A9\x03\x02\x02\x02\u04A9\u04AC\x07%\x02\x02\u04AA\u04AD\x05V,\x02" +
		"\u04AB\u04AD\x07\x0F\x02\x02\u04AC\u04AA\x03\x02\x02\x02\u04AC\u04AB\x03" +
		"\x02\x02\x02\u04AD\xD5\x03\x02\x02\x02\u04AE\u04AF\x07$\x02\x02\u04AF" +
		"\u04B0\x07F\x02\x02\u04B0\u04B7\x05\xD4k\x02\u04B1\u04B3\x07=\x02\x02" +
		"\u04B2\u04B1\x03\x02\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3\u04B4\x03" +
		"\x02\x02\x02\u04B4\u04B6\x05\xD4k\x02\u04B5\u04B2\x03\x02\x02\x02\u04B6" +
		"\u04B9\x03\x02\x02\x02\u04B7\u04B5\x03\x02\x02\x02\u04B7\u04B8\x03\x02" +
		"\x02\x02\u04B8\u04C0\x03\x02\x02\x02\u04B9\u04B7\x03\x02\x02\x02\u04BA" +
		"\u04BC\x07=\x02\x02\u04BB\u04BA\x03\x02\x02\x02\u04BB\u04BC\x03\x02\x02" +
		"\x02\u04BC\u04BD\x03\x02\x02\x02\u04BD\u04BF\x05\xA2R\x02\u04BE\u04BB" +
		"\x03\x02\x02\x02\u04BF\u04C2\x03\x02\x02\x02\u04C0\u04BE\x03\x02\x02\x02" +
		"\u04C0\u04C1\x03\x02\x02\x02\u04C1\u04C3\x03\x02\x02\x02\u04C2\u04C0\x03" +
		"\x02\x02\x02\u04C3\u04C4\x07G\x02\x02\u04C4\u04C5\x05\xB6\\\x02\u04C5" +
		"\xD7\x03\x02\x02\x02\u04C6\u04C7\x073\x02\x02\u04C7\u04C8\x07F\x02\x02" +
		"\u04C8\u04C9\x05\xB4[\x02\u04C9\u04CA\x07G\x02\x02\u04CA\u04CB\x05\xB6" +
		"\\\x02\u04CB\xD9\x03\x02\x02\x02\u04CC\u04CD\x07\'\x02\x02\u04CD\u04CE" +
		"\x05V,\x02\u04CE\xDB\x03\x02\x02\x02\u04CF\u04D0\x05v<\x02\u04D0\xDD\x03" +
		"\x02\x02\x02\u04D1\u04D3\x05\xACW\x02\u04D2\u04D4\x07<\x02\x02\u04D3\u04D2" +
		"\x03\x02\x02\x02\u04D3\u04D4\x03\x02\x02\x02\u04D4\u04F3\x03\x02\x02\x02" +
		"\u04D5\u04D7\x05\xAEX\x02\u04D6\u04D8\x07<\x02\x02\u04D7\u04D6\x03\x02" +
		"\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8\u04F3\x03\x02\x02\x02\u04D9" +
		"\u04DB\x05\xDAn\x02\u04DA\u04DC\x07<\x02\x02\u04DB\u04DA\x03\x02\x02\x02" +
		"\u04DB\u04DC\x03\x02\x02\x02\u04DC\u04F3\x03\x02\x02\x02\u04DD\u04DF\x05" +
		"\xDCo\x02\u04DE\u04E0\x07<\x02\x02\u04DF\u04DE\x03\x02\x02\x02\u04DF\u04E0" +
		"\x03\x02\x02\x02\u04E0\u04F3\x03\x02\x02\x02\u04E1\u04F3\x05`1\x02\u04E2" +
		"\u04F3\x05^0\x02\u04E3\u04F3\x05\xD6l\x02\u04E4\u04F3\x05\xCAf\x02\u04E5" +
		"\u04E7\x05\xE2r\x02\u04E6\u04E8\x07<\x02\x02\u04E7\u04E6\x03\x02\x02\x02" +
		"\u04E7\u04E8\x03\x02\x02\x02\u04E8\u04F3\x03\x02\x02\x02\u04E9\u04F3\x05" +
		"\xBE`\x02\u04EA\u04F3\x05\xC8e\x02\u04EB\u04F3\x05\xBC_\x02\u04EC\u04F3" +
		"\x05b2\x02\u04ED\u04F3\x05\xD8m\x02\u04EE\u04F0\x05\xD2j\x02\u04EF\u04F1" +
		"\x07<\x02\x02\u04F0\u04EF\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02" +
		"\u04F1\u04F3\x03\x02\x02\x02\u04F2\u04D1\x03\x02\x02\x02\u04F2\u04D5\x03" +
		"\x02\x02\x02\u04F2\u04D9\x03\x02\x02\x02\u04F2\u04DD\x03\x02\x02\x02\u04F2" +
		"\u04E1\x03\x02\x02\x02\u04F2\u04E2\x03\x02\x02\x02\u04F2\u04E3\x03\x02" +
		"\x02\x02\u04F2\u04E4\x03\x02\x02\x02\u04F2\u04E5\x03\x02\x02\x02\u04F2" +
		"\u04E9\x03\x02\x02\x02\u04F2\u04EA\x03\x02\x02\x02\u04F2\u04EB\x03\x02" +
		"\x02\x02\u04F2\u04EC\x03\x02\x02\x02\u04F2\u04ED\x03\x02\x02\x02\u04F2" +
		"\u04EE\x03\x02\x02\x02\u04F3\xDF\x03\x02\x02\x02\u04F4\u04F5\x07 \x02" +
		"\x02\u04F5\u04F6\x05\xE4s\x02\u04F6\xE1\x03\x02\x02\x02\u04F7\u04F8\x07" +
		"!\x02\x02\u04F8\u04F9\x07F\x02\x02\u04F9\u04FA\x05\xE0q\x02\u04FA\u04FB" +
		"\x07\"\x02\x02\u04FB\u04FC\x07F\x02\x02\u04FC\u0501\x05\f\x07\x02\u04FD" +
		"\u04FE\x07=\x02\x02\u04FE\u0500\x05\f\x07\x02\u04FF\u04FD\x03\x02\x02" +
		"\x02\u0500\u0503\x03\x02\x02\x02\u0501\u0502\x03\x02\x02\x02\u0501\u04FF" +
		"\x03\x02\x02\x02\u0502\u0504\x03\x02\x02\x02\u0503\u0501\x03\x02\x02\x02" +
		"\u0504\u0505\x07G\x02\x02\u0505\u0506\x05\xE4s\x02\u0506\u0507\x07G\x02" +
		"\x02\u0507\xE3\x03\x02\x02\x02\u0508\u050A\x07J\x02\x02\u0509\u050B\x05" +
		"\xDEp\x02\u050A\u0509\x03\x02\x02\x02\u050B\u050C\x03\x02\x02\x02\u050C" +
		"\u050A\x03\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\u050E\x03\x02" +
		"\x02\x02\u050E\u050F\x07K\x02\x02\u050F\xE5\x03\x02\x02\x02\u0510\u0511" +
		"\t\b\x02\x02\u0511\xE7\x03\x02\x02\x02\u0512\u0513\x07^\x02\x02\u0513" +
		"\u0517\x05\xE8u\x02\u0514\u0517\x05v<\x02\u0515\u0517\x07d\x02\x02\u0516" +
		"\u0512\x03\x02\x02\x02\u0516\u0514\x03\x02\x02\x02\u0516\u0515\x03\x02" +
		"\x02\x02\u0517\xE9\x03\x02\x02\x02\u0518\u0519\bv\x01\x02\u0519\u051A" +
		"\x07F\x02\x02\u051A\u051B\x05\xEAv\x02\u051B\u051C\x07G\x02\x02\u051C" +
		"\u051F\x03\x02\x02\x02\u051D\u051F\x05\xE8u\x02\u051E\u0518\x03\x02\x02" +
		"\x02\u051E\u051D\x03\x02\x02\x02\u051F\u0526\x03\x02\x02\x02\u0520\u0521" +
		"\f\x04\x02\x02\u0521\u0522\x05\xE6t\x02\u0522\u0523\x05\xEAv\x05\u0523" +
		"\u0525\x03\x02\x02\x02\u0524\u0520\x03\x02\x02\x02\u0525\u0528\x03\x02" +
		"\x02\x02\u0526\u0524\x03\x02\x02\x02\u0526\u0527\x03\x02\x02\x02\u0527" +
		"\xEB\x03\x02\x02\x02\u0528\u0526\x03\x02\x02\x02\u0529\u052A\x05\f\x07" +
		"\x02\u052A\u052B\x07F\x02\x02\u052B\u052C\x05\x9EP\x02\u052C\u052D\x07" +
		"G\x02\x02\u052D\xED\x03\x02\x02\x02\u052E\u0530\x05(\x15\x02\u052F\u052E" +
		"\x03\x02\x02\x02\u0530\u0533\x03\x02\x02\x02\u0531\u052F\x03\x02\x02\x02" +
		"\u0531\u0532\x03\x02\x02\x02\u0532\xEF\x03\x02\x02\x02\u0533\u0531\x03" +
		"\x02\x02\x02\u0534\u0535\x05\f\x07\x02\u0535\u0538\x05\f\x07\x02\u0536" +
		"\u0537\x07\x0E\x02\x02\u0537\u0539\x05\f\x07\x02\u0538\u0536\x03\x02\x02" +
		"\x02\u0538\u0539\x03\x02\x02\x02\u0539\u053B\x03\x02\x02\x02\u053A\u053C" +
		"\x05V,\x02\u053B\u053A\x03\x02\x02\x02\u053B\u053C\x03\x02\x02\x02\u053C" +
		"\u0540\x03\x02\x02\x02\u053D\u053F\x050\x19\x02\u053E\u053D\x03\x02\x02" +
		"\x02\u053F\u0542\x03\x02\x02\x02\u0540\u053E\x03\x02\x02\x02\u0540\u0541" +
		"\x03\x02\x02\x02\u0541\u0543\x03\x02\x02\x02\u0542\u0540\x03\x02\x02\x02" +
		"\u0543\u0544\x07<\x02\x02\u0544\xF1\x03\x02\x02\x02\u0545\u0548\x07\x16" +
		"\x02\x02\u0546\u0549\x05\x86D\x02\u0547\u0549\x05(\x15\x02\u0548\u0546" +
		"\x03\x02\x02\x02\u0548\u0547\x03\x02\x02\x02\u0549\u054A\x03\x02\x02\x02" +
		"\u054A\u054B\x07<\x02\x02\u054B\xF3\x03\x02\x02\x02\u054C\u054E\x07H\x02" +
		"\x02\u054D\u054F\x05V,\x02\u054E\u054D\x03\x02\x02\x02\u054E\u054F\x03" +
		"\x02\x02\x02\u054F\u0554\x03\x02\x02\x02\u0550\u0551\x07=\x02\x02\u0551" +
		"\u0553\x05V,\x02\u0552\u0550\x03\x02\x02\x02\u0553\u0556\x03\x02\x02\x02" +
		"\u0554\u0552\x03\x02\x02\x02\u0554\u0555\x03\x02\x02\x02\u0555\u0557\x03" +
		"\x02\x02\x02\u0556\u0554\x03\x02\x02\x02\u0557\u0558\x07I\x02\x02\u0558" +
		"\xF5\x03\x02\x02\x02\u0559\u055C\x05V,\x02\u055A\u055B\x07=\x02\x02\u055B" +
		"\u055D\x05V,\x02\u055C\u055A\x03\x02\x02\x02\u055D\u055E\x03\x02\x02\x02" +
		"\u055E\u055C\x03\x02\x02\x02\u055E\u055F\x03\x02\x02\x02\u055F\xF7\x03" +
		"\x02\x02\x02\u0560\u0562\x07J\x02\x02\u0561\u0563\x05V,\x02\u0562\u0561" +
		"\x03\x02\x02\x02\u0562\u0563\x03\x02\x02\x02\u0563\u0568\x03\x02\x02\x02" +
		"\u0564\u0565\x07=\x02\x02\u0565\u0567\x05V,\x02\u0566\u0564\x03\x02\x02" +
		"\x02\u0567\u056A\x03\x02\x02\x02\u0568\u0566\x03\x02\x02\x02\u0568\u0569" +
		"\x03\x02\x02\x02\u0569\u056B\x03\x02\x02\x02\u056A\u0568\x03\x02\x02\x02" +
		"\u056B\u056C\x07K\x02\x02\u056C\xF9\x03\x02\x02\x02\u056D\u0571\x07Z\x02" +
		"\x02\u056E\u0570\x07t\x02\x02\u056F\u056E\x03\x02\x02\x02\u0570\u0573" +
		"\x03\x02\x02\x02\u0571\u0572\x03\x02\x02\x02\u0571\u056F\x03\x02\x02\x02" +
		"\u0572\u0577\x03\x02\x02\x02\u0573\u0571\x03\x02\x02\x02\u0574\u0576\x05" +
		"\xFA~\x02\u0575\u0574\x03\x02\x02\x02\u0576\u0579\x03\x02\x02\x02\u0577" +
		"\u0578\x03\x02\x02\x02\u0577\u0575\x03\x02\x02\x02\u0578\u057D\x03\x02" +
		"\x02\x02\u0579\u0577\x03\x02\x02\x02\u057A\u057C\x07t\x02\x02\u057B\u057A" +
		"\x03\x02\x02\x02\u057C\u057F\x03\x02\x02\x02\u057D\u057E\x03\x02\x02\x02" +
		"\u057D\u057B\x03\x02\x02\x02\u057E\u0580\x03\x02\x02\x02\u057F\u057D\x03" +
		"\x02\x02\x02\u0580\u0581\x07s\x02\x02\u0581\xFB\x03\x02\x02\x02\u0582" +
		"\u0583\x07\x17\x02\x02\u0583\u0587\x05\f\x07\x02\u0584\u0586\x050\x19" +
		"\x02\u0585\u0584\x03\x02\x02\x02\u0586\u0589\x03\x02\x02\x02\u0587\u0585" +
		"\x03\x02\x02\x02\u0587\u0588\x03\x02\x02\x02\u0588\u058A\x03\x02\x02\x02" +
		"\u0589\u0587\x03\x02\x02\x02\u058A\u058B\x07<\x02\x02\u058B\xFD\x03\x02" +
		"\x02\x02\u058C\u058F\x07\x17\x02\x02\u058D\u0590\x05\f\x07\x02\u058E\u0590" +
		"\x07\x0F\x02\x02\u058F\u058D\x03\x02\x02\x02\u058F\u058E\x03\x02\x02\x02" +
		"\u0590\u0596\x03\x02\x02\x02\u0591\u0595\x05&\x14\x02\u0592\u0595\x05" +
		"\x88E\x02\u0593\u0595\x05(\x15\x02\u0594\u0591\x03\x02\x02\x02\u0594\u0592" +
		"\x03\x02\x02\x02\u0594\u0593\x03\x02\x02\x02\u0595\u0598\x03\x02\x02\x02" +
		"\u0596\u0594\x03\x02\x02\x02\u0596\u0597\x03\x02\x02\x02\u0597\u0599\x03" +
		"\x02\x02\x02\u0598\u0596\x03\x02\x02\x02\u0599\u059A\x07<\x02\x02\u059A" +
		"\xFF\x03\x02\x02\x02\u059B\u059C\x078\x02\x02\u059C\u059E\x07J\x02\x02" +
		"\u059D\u059F\x05\u0102\x82\x02\u059E\u059D\x03\x02\x02\x02\u059E\u059F" +
		"\x03\x02\x02\x02\u059F\u05A0\x03\x02\x02\x02\u05A0\u05A1\x07K\x02\x02" +
		"\u05A1\u0101\x03\x02\x02\x02\u05A2\u05A4\x05\u0104\x83\x02\u05A3\u05A2" +
		"\x03\x02\x02\x02\u05A4\u05A5\x03\x02\x02\x02\u05A5\u05A3\x03\x02\x02\x02" +
		"\u05A5\u05A6\x03\x02\x02\x02\u05A6\u0103\x03\x02\x02\x02\u05A7\u05A8\x07" +
		"9\x02\x02\u05A8\u05A9\x05\f\x07\x02\u05A9\u05AA\x07\x1C\x02\x02\u05AA" +
		"\u05AE\x07F\x02\x02\u05AB\u05AF\x05\xA2R\x02\u05AC\u05AF\x05\xD4k\x02" +
		"\u05AD\u05AF\x05\xAEX\x02\u05AE\u05AB\x03\x02\x02\x02\u05AE\u05AC\x03" +
		"\x02\x02\x02\u05AE\u05AD\x03\x02\x02\x02\u05AF\u05B0\x03\x02\x02\x02\u05B0" +
		"\u05AE\x03\x02\x02\x02\u05B0\u05B1\x03\x02\x02\x02\u05B1\u05B2\x03\x02" +
		"\x02\x02\u05B2\u05B3\x07G\x02\x02\u05B3\u05B5\x07\x1D\x02\x02\u05B4\u05B6" +
		"\x05\xDEp\x02\u05B5\u05B4\x03\x02\x02\x02\u05B6\u05B7\x03\x02\x02\x02" +
		"\u05B7\u05B5\x03\x02\x02\x02\u05B7\u05B8\x03\x02\x02\x02\u05B8\u05BC\x03" +
		"\x02\x02\x02\u05B9\u05BB\x050\x19\x02\u05BA\u05B9\x03\x02\x02\x02\u05BB" +
		"\u05BE\x03\x02\x02\x02\u05BC\u05BA\x03\x02\x02\x02\u05BC\u05BD\x03\x02" +
		"\x02\x02\u05BD\u05BF\x03\x02\x02\x02\u05BE\u05BC\x03\x02\x02\x02\u05BF" +
		"\u05C0\x07<\x02\x02\u05C0\u0105\x03\x02\x02\x02\x9F\u010A\u010E\u0113" +
		"\u0117\u0124\u012A\u0138\u0140\u0145\u014B\u0154\u0160\u0165\u0167\u016B" +
		"\u0171\u0178\u017E\u0182\u0187\u018E\u0195\u019C\u01A1\u01A7\u01AF\u01BD" +
		"\u01C0\u01C3\u01CA\u01D2\u01DA\u01E2\u01E6\u01ED\u01F7\u0200\u0210\u0213" +
		"\u021D\u0224\u0232\u023F\u0248\u024F\u0254\u0263\u0267\u0278\u0280\u0284" +
		"\u0295\u029E\u02A2\u02B1\u02BA\u02BE\u02C6\u02E9\u02F2\u030C\u0315\u0318" +
		"\u0322\u0326\u032E\u0337\u033C\u0345\u034E\u0351\u0354\u0357\u035C\u0370" +
		"\u0379\u0381\u038B\u038E\u0391\u0398\u039E\u03A1\u03A9\u03AD\u03AF\u03B3" +
		"\u03BA\u03BF\u03C2\u03CA\u03D1\u03D5\u03DA\u03DF\u03EB\u03F2\u03FD\u0413" +
		"\u0417\u041B\u0425\u042A\u0433\u0438\u0444\u0449\u0452\u0457\u0462\u046A" +
		"\u0472\u047B\u0486\u048C\u0490\u04A7\u04AC\u04B2\u04B7\u04BB\u04C0\u04D3" +
		"\u04D7\u04DB\u04DF\u04E7\u04F0\u04F2\u0501\u050C\u0516\u051E\u0526\u0531" +
		"\u0538\u053B\u0540\u0548\u054E\u0554\u055E\u0562\u0568\u0571\u0577\u057D" +
		"\u0587\u058F\u0594\u0596\u059E\u05A5\u05AE\u05B0\u05B7\u05BC";
=======
		"8\x038\x038\x038\x038\x038\x058\u030F\n8\x039\x039\x039\x039\x039\x07" +
		"9\u0316\n9\f9\x0E9\u0319\v9\x059\u031B\n9\x039\x039\x03:\x03:\x03:\x03" +
		":\x03;\x03;\x05;\u0325\n;\x03;\x03;\x05;\u0329\n;\x03<\x03<\x03<\x03<" +
		"\x07<\u032F\n<\f<\x0E<\u0332\v<\x03=\x03=\x03=\x03=\x07=\u0338\n=\f=\x0E" +
		"=\u033B\v=\x03=\x03=\x05=\u033F\n=\x03>\x03>\x03>\x03>\x03?\x03?\x03?" +
		"\x05?\u0348\n?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u0351\n@\x03@\x05" +
		"@\u0354\n@\x03@\x05@\u0357\n@\x03@\x05@\u035A\n@\x03@\x07@\u035D\n@\f" +
		"@\x0E@\u0360\v@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03" +
		"B\x03B\x03C\x03C\x03C\x07C\u0371\nC\fC\x0EC\u0374\vC\x03C\x03C\x03D\x03" +
		"D\x07D\u037A\nD\fD\x0ED\u037D\vD\x03E\x03E\x03E\x07E\u0382\nE\fE\x0EE" +
		"\u0385\vE\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u038E\nF\x03G\x05G\u0391" +
		"\nG\x03G\x05G\u0394\nG\x03H\x03H\x03H\x07H\u0399\nH\fH\x0EH\u039C\vH\x03" +
		"I\x03I\x03I\x05I\u03A1\nI\x03J\x05J\u03A4\nJ\x03J\x03J\x03J\x03J\x07J" +
		"\u03AA\nJ\fJ\x0EJ\u03AD\vJ\x03J\x05J\u03B0\nJ\x05J\u03B2\nJ\x03J\x03J" +
		"\x05J\u03B6\nJ\x03K\x03K\x03K\x03K\x03K\x05K\u03BD\nK\x03K\x03K\x03K\x05" +
		"K\u03C2\nK\x03K\x05K\u03C5\nK\x03L\x03L\x03L\x03L\x07L\u03CB\nL\fL\x0E" +
		"L\u03CE\vL\x03L\x03L\x03M\x03M\x05M\u03D4\nM\x03N\x03N\x05N\u03D8\nN\x03" +
		"O\x03O\x03P\x05P\u03DD\nP\x03P\x07P\u03E0\nP\fP\x0EP\u03E3\vP\x03Q\x03" +
		"Q\x03Q\x03Q\x03R\x03R\x03S\x03S\x03S\x05S\u03EE\nS\x03S\x03S\x03S\x07" +
		"S\u03F3\nS\fS\x0ES\u03F6\vS\x03T\x03T\x03T\x03T\x03T\x03T\x07T\u03FE\n" +
		"T\fT\x0ET\u0401\vT\x03U\x03U\x03U\x03U\x03V\x03V\x03W\x03W\x03W\x03W\x03" +
		"X\x03X\x03X\x03X\x03Y\x03Y\x03Z\x06Z\u0414\nZ\rZ\x0EZ\u0415\x03[\x03[" +
		"\x05[\u041A\n[\x03\\\x03\\\x03\\\x05\\\u041F\n\\\x03]\x03]\x03]\x03]\x03" +
		"]\x03]\x07]\u0427\n]\f]\x0E]\u042A\v]\x03]\x03]\x05]\u042E\n]\x03]\x03" +
		"]\x03^\x03^\x03^\x07^\u0435\n^\f^\x0E^\u0438\v^\x03^\x03^\x05^\u043C\n" +
		"^\x03^\x03^\x03_\x03_\x03_\x03_\x03_\x03_\x07_\u0446\n_\f_\x0E_\u0449" +
		"\v_\x03_\x03_\x05_\u044D\n_\x03_\x03_\x03`\x03`\x03`\x07`\u0454\n`\f`" +
		"\x0E`\u0457\v`\x03`\x03`\x05`\u045B\n`\x03`\x03`\x03a\x03a\x03a\x03a\x03" +
		"a\x03a\x03a\x05a\u0466\na\x03b\x03b\x03b\x03b\x03b\x03b\x05b\u046E\nb" +
		"\x03b\x03b\x03b\x03b\x03b\x03b\x05b\u0476\nb\x03c\x03c\x03c\x03c\x03c" +
		"\x03c\x03c\x05c\u047F\nc\x03c\x03c\x03c\x03d\x03d\x03d\x03d\x03e\x03e" +
		"\x05e\u048A\ne\x03f\x03f\x07f\u048E\nf\ff\x0Ef\u0491\vf\x03f\x05f\u0494" +
		"\nf\x03g\x03g\x03g\x03h\x03h\x03h\x03i\x03i\x03i\x03i\x03i\x03i\x03j\x03" +
		"j\x03j\x03j\x03j\x03j\x03j\x03k\x03k\x05k\u04AB\nk\x03k\x03k\x03k\x05" +
		"k\u04B0\nk\x03l\x03l\x03l\x03l\x05l\u04B6\nl\x03l\x07l\u04B9\nl\fl\x0E" +
		"l\u04BC\vl\x03l\x05l\u04BF\nl\x03l\x07l\u04C2\nl\fl\x0El\u04C5\vl\x03" +
		"l\x03l\x03l\x03m\x03m\x03m\x03m\x03m\x03m\x03n\x03n\x03n\x03o\x03o\x03" +
		"p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03" +
		"p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x05p\u04F0" +
		"\np\x03q\x03q\x03q\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x07r\u04FD" +
		"\nr\fr\x0Er\u0500\vr\x03r\x03r\x03r\x03r\x03s\x03s\x06s\u0508\ns\rs\x0E" +
		"s\u0509\x03s\x03s\x03t\x03t\x03u\x03u\x03u\x03u\x05u\u0514\nu\x03v\x03" +
		"v\x03v\x03v\x03v\x03v\x05v\u051C\nv\x03v\x03v\x03v\x03v\x07v\u0522\nv" +
		"\fv\x0Ev\u0525\vv\x03w\x03w\x03w\x03w\x03w\x03x\x07x\u052D\nx\fx\x0Ex" +
		"\u0530\vx\x03y\x03y\x03y\x03y\x05y\u0536\ny\x03y\x05y\u0539\ny\x03y\x07" +
		"y\u053C\ny\fy\x0Ey\u053F\vy\x03y\x03y\x03z\x03z\x03z\x05z\u0546\nz\x03" +
		"z\x03z\x03{\x03{\x05{\u054C\n{\x03{\x03{\x07{\u0550\n{\f{\x0E{\u0553\v" +
		"{\x03{\x03{\x03|\x03|\x03|\x06|\u055A\n|\r|\x0E|\u055B\x03}\x03}\x05}" +
		"\u0560\n}\x03}\x03}\x07}\u0564\n}\f}\x0E}\u0567\v}\x03}\x03}\x03~\x03" +
		"~\x07~\u056D\n~\f~\x0E~\u0570\v~\x03~\x03~\x03\x7F\x03\x7F\x03\x7F\x07" +
		"\x7F\u0577\n\x7F\f\x7F\x0E\x7F\u057A\v\x7F\x03\x7F\x03\x7F\x03\x80\x03" +
		"\x80\x03\x80\x05\x80\u0581\n\x80\x03\x80\x03\x80\x03\x80\x07\x80\u0586" +
		"\n\x80\f\x80\x0E\x80\u0589\v\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81" +
		"\x05\x81\u0590\n\x81\x03\x81\x03\x81\x03\x82\x06\x82\u0595\n\x82\r\x82" +
		"\x0E\x82\u0596\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83" +
		"\x06\x83\u05A0\n\x83\r\x83\x0E\x83\u05A1\x03\x83\x03\x83\x03\x83\x06\x83" +
		"\u05A7\n\x83\r\x83\x0E\x83\u05A8\x03\x83\x07\x83\u05AC\n\x83\f\x83\x0E" +
		"\x83\u05AF\v\x83\x03\x83\x03\x83\x03\x84\x03\x84\x03\x84\x03\x84\v\u010C" +
		"\u017A\u0180\u01DC\u01E4\u0212\u0286\u04FE\u056E\x02\x05\xA4\xA6\xEA\x85" +
=======
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x03\x02\x03\x02\x07\x02\u0113\n\x02\f\x02" +
		"\x0E\x02\u0116\v\x02\x03\x02\x05\x02\u0119\n\x02\x03\x03\x07\x03\u011C" +
		"\n\x03\f\x03\x0E\x03\u011F\v\x03\x03\x03\x05\x03\u0122\n\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04\u012F\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0135" +
		"\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x05\b\u0143\n\b\x03\b\x03\b\x03\b\x03\b\x07" +
		"\b\u0149\n\b\f\b\x0E\b\u014C\v\b\x06\b\u014E\n\b\r\b\x0E\b\u014F\x03\b" +
		"\x03\b\x07\b\u0154\n\b\f\b\x0E\b\u0157\v\b\x03\b\x03\b\x03\t\x03\t\x07" +
		"\t\u015D\n\t\f\t\x0E\t\u0160\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03" +
		"\v\x07\v\u0169\n\v\f\v\x0E\v\u016C\v\v\x03\v\x03\v\x07\v\u0170\n\v\f\v" +
		"\x0E\v\u0173\v\v\x03\v\x05\v\u0176\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\u017C" +
		"\n\v\x03\f\x03\f\x03\f\x07\f\u0181\n\f\f\f\x0E\f\u0184\v\f\x03\f\x07\f" +
		"\u0187\n\f\f\f\x0E\f\u018A\v\f\x03\f\x05\f\u018D\n\f\x03\f\x07\f\u0190" +
		"\n\f\f\f\x0E\f\u0193\v\f\x03\r\x03\r\x06\r\u0197\n\r\r\r\x0E\r\u0198\x03" +
		"\x0E\x03\x0E\x03\x0E\x07\x0E\u019E\n\x0E\f\x0E\x0E\x0E\u01A1\v\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\u01A7\n\x0F\x03\x0F\x07\x0F\u01AA" +
		"\n\x0F\f\x0F\x0E\x0F\u01AD\v\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u01B2" +
		"\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u01B8\n\x11\f\x11\x0E\x11" +
		"\u01BB\v\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x07\x13\u01C6\n\x13\f\x13\x0E\x13\u01C9\v\x13\x05\x13\u01CB" +
		"\n\x13\x03\x13\x05\x13\u01CE\n\x13\x03\x14\x03\x14\x03\x14\x07\x14\u01D3" +
		"\n\x14\f\x14\x0E\x14\u01D6\v\x14\x03\x15\x03\x15\x03\x15\x07\x15\u01DB" +
		"\n\x15\f\x15\x0E\x15\u01DE\v\x15\x03\x16\x03\x16\x03\x16\x07\x16\u01E3" +
		"\n\x16\f\x16\x0E\x16\u01E6\v\x16\x03\x17\x03\x17\x03\x17\x06\x17\u01EB" +
		"\n\x17\r\x17\x0E\x17\u01EC\x03\x18\x03\x18\x05\x18\u01F1\n\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01F8\n\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0202\n\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u020B\n\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
		" \x03 \x07 \u0219\n \f \x0E \u021C\v \x05 \u021E\n \x03!\x03!\x03!\x03" +
		"!\x03\"\x03\"\x07\"\u0226\n\"\f\"\x0E\"\u0229\v\"\x03#\x03#\x07#\u022D" +
		"\n#\f#\x0E#\u0230\v#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x05$\u023D\n$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x05%\u024B\n%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0254" +
		"\n&\x03\'\x03\'\x03\'\x06\'\u0259\n\'\r\'\x0E\'\u025A\x03(\x03(\x03(\x05" +
		"(\u0260\n(\x03(\x03(\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03" +
		"*\x03*\x05*\u026F\n*\x03+\x03+\x05+\u0273\n+\x03,\x03,\x03,\x03,\x03," +
		"\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u0284\n,\x03-" +
		"\x03-\x03-\x03-\x03-\x03-\x05-\u028C\n-\x07-\u028E\n-\f-\x0E-\u0291\v" +
		"-\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x05.\u02A1\n.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u02AA\n.\x07." +
		"\u02AC\n.\f.\x0E.\u02AF\v.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x05/\u02BD\n/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05" +
		"/\u02C6\n/\x07/\u02C8\n/\f/\x0E/\u02CB\v/\x03/\x03/\x030\x030\x030\x05" +
		"0\u02D2\n0\x030\x030\x030\x030\x030\x030\x030\x031\x031\x031\x031\x03" +
		"1\x031\x031\x031\x031\x031\x032\x032\x033\x033\x033\x033\x033\x033\x03" +
		"3\x033\x033\x034\x034\x035\x035\x035\x055\u02F5\n5\x036\x036\x036\x03" +
		"6\x036\x036\x036\x056\u02FE\n6\x037\x037\x077\u0302\n7\f7\x0E7\u0305\v" +
		"7\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x058\u031E\n8\x039\x03" +
		"9\x039\x039\x039\x079\u0325\n9\f9\x0E9\u0328\v9\x059\u032A\n9\x039\x03" +
		"9\x03:\x03:\x03:\x03:\x03;\x03;\x05;\u0334\n;\x03;\x03;\x05;\u0338\n;" +
		"\x03<\x03<\x03<\x03<\x07<\u033E\n<\f<\x0E<\u0341\v<\x03=\x03=\x03=\x03" +
		"=\x07=\u0347\n=\f=\x0E=\u034A\v=\x03=\x03=\x05=\u034E\n=\x03>\x03>\x03" +
		">\x03>\x03?\x03?\x03?\x05?\u0357\n?\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x05@\u0360\n@\x03@\x05@\u0363\n@\x03@\x05@\u0366\n@\x03@\x05@\u0369" +
		"\n@\x03@\x07@\u036C\n@\f@\x0E@\u036F\v@\x03@\x03@\x03A\x03A\x03A\x03A" +
		"\x03A\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x07C\u0380\nC\fC\x0EC\u0383" +
		"\vC\x03C\x03C\x03D\x03D\x07D\u0389\nD\fD\x0ED\u038C\vD\x03E\x03E\x03E" +
		"\x07E\u0391\nE\fE\x0EE\u0394\vE\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05" +
		"F\u039D\nF\x03G\x05G\u03A0\nG\x03G\x05G\u03A3\nG\x03H\x03H\x03H\x07H\u03A8" +
		"\nH\fH\x0EH\u03AB\vH\x03I\x03I\x03I\x05I\u03B0\nI\x03J\x05J\u03B3\nJ\x03" +
		"J\x03J\x03J\x03J\x07J\u03B9\nJ\fJ\x0EJ\u03BC\vJ\x03J\x05J\u03BF\nJ\x05" +
		"J\u03C1\nJ\x03J\x03J\x05J\u03C5\nJ\x03K\x03K\x03K\x03K\x03K\x05K\u03CC" +
		"\nK\x03K\x03K\x03K\x05K\u03D1\nK\x03K\x05K\u03D4\nK\x03L\x03L\x03L\x03" +
		"L\x07L\u03DA\nL\fL\x0EL\u03DD\vL\x03L\x03L\x03M\x03M\x05M\u03E3\nM\x03" +
		"N\x03N\x05N\u03E7\nN\x03O\x03O\x03P\x05P\u03EC\nP\x03P\x07P\u03EF\nP\f" +
		"P\x0EP\u03F2\vP\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03S\x03S\x03S\x05S\u03FD" +
		"\nS\x03S\x03S\x03S\x07S\u0402\nS\fS\x0ES\u0405\vS\x03T\x03T\x03T\x03T" +
		"\x03T\x03T\x07T\u040D\nT\fT\x0ET\u0410\vT\x03U\x03U\x03U\x03U\x03U\x03" +
		"U\x05U\u0418\nU\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03W\x03W\x03W\x03" +
		"W\x03W\x03W\x03W\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03" +
		"[\x03[\x03\\\x06\\\u0435\n\\\r\\\x0E\\\u0436\x03]\x03]\x05]\u043B\n]\x03" +
		"^\x03^\x03^\x05^\u0440\n^\x03_\x03_\x03_\x03_\x03_\x03_\x07_\u0448\n_" +
		"\f_\x0E_\u044B\v_\x03_\x03_\x05_\u044F\n_\x03_\x03_\x03`\x03`\x03`\x07" +
		"`\u0456\n`\f`\x0E`\u0459\v`\x03`\x03`\x05`\u045D\n`\x03`\x03`\x03a\x03" +
		"a\x03a\x03a\x03a\x03a\x07a\u0467\na\fa\x0Ea\u046A\va\x03a\x03a\x05a\u046E" +
		"\na\x03a\x03a\x03b\x03b\x03b\x07b\u0475\nb\fb\x0Eb\u0478\vb\x03b\x03b" +
		"\x05b\u047C\nb\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x05c\u0487" +
		"\nc\x03d\x03d\x03d\x03d\x03d\x03d\x05d\u048F\nd\x03d\x03d\x03d\x03d\x03" +
		"d\x03d\x05d\u0497\nd\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u04A0\ne" +
		"\x03e\x03e\x03e\x03f\x03f\x03f\x03f\x03g\x03g\x05g\u04AB\ng\x03h\x03h" +
		"\x07h\u04AF\nh\fh\x0Eh\u04B2\vh\x03h\x05h\u04B5\nh\x03i\x03i\x03i\x03" +
		"j\x03j\x03j\x03k\x03k\x03k\x03k\x03k\x03k\x03l\x03l\x03l\x03l\x03l\x03" +
		"l\x03l\x03m\x03m\x05m\u04CC\nm\x03m\x03m\x03m\x05m\u04D1\nm\x03n\x03n" +
		"\x03n\x03n\x05n\u04D7\nn\x03n\x05n\u04DA\nn\x03n\x03n\x05n\u04DE\nn\x03" +
		"n\x07n\u04E1\nn\fn\x0En\u04E4\vn\x03n\x03n\x03n\x03o\x03o\x03o\x03o\x03" +
		"o\x03o\x03p\x03p\x03p\x03q\x03q\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03" +
		"r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03" +
		"r\x03r\x03r\x03r\x03r\x03r\x05r\u050F\nr\x03s\x03s\x03s\x03t\x03t\x03" +
		"t\x03t\x03t\x03t\x03t\x03t\x07t\u051C\nt\ft\x0Et\u051F\vt\x03t\x03t\x03" +
		"t\x03t\x03u\x03u\x06u\u0527\nu\ru\x0Eu\u0528\x03u\x03u\x03v\x03v\x03w" +
		"\x03w\x03w\x03w\x05w\u0533\nw\x03x\x03x\x03x\x03x\x03x\x03x\x05x\u053B" +
		"\nx\x03x\x03x\x03x\x03x\x07x\u0541\nx\fx\x0Ex\u0544\vx\x03y\x03y\x03y" +
		"\x03y\x03y\x03z\x07z\u054C\nz\fz\x0Ez\u054F\vz\x03{\x03{\x03{\x03{\x03" +
		"{\x05{\u0556\n{\x03{\x05{\u0559\n{\x03{\x07{\u055C\n{\f{\x0E{\u055F\v" +
		"{\x03{\x03{\x05{\u0563\n{\x03|\x03|\x03|\x05|\u0568\n|\x03|\x03|\x03}" +
		"\x03}\x05}\u056E\n}\x03}\x03}\x07}\u0572\n}\f}\x0E}\u0575\v}\x03}\x03" +
		"}\x03~\x03~\x03~\x06~\u057C\n~\r~\x0E~\u057D\x03\x7F\x03\x7F\x05\x7F\u0582" +
		"\n\x7F\x03\x7F\x03\x7F\x07\x7F\u0586\n\x7F\f\x7F\x0E\x7F\u0589\v\x7F\x03" +
		"\x7F\x03\x7F\x03\x80\x03\x80\x07\x80\u058F\n\x80\f\x80\x0E\x80\u0592\v" +
		"\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x07\x81\u0599\n\x81\f\x81" +
		"\x0E\x81\u059C\v\x81\x03\x81\x03\x81\x03\x82\x03\x82\x03\x82\x05\x82\u05A3" +
		"\n\x82\x03\x82\x03\x82\x03\x82\x03\x82\x07\x82\u05A9\n\x82\f\x82\x0E\x82" +
		"\u05AC\v\x82\x03\x82\x03\x82\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03" +
		"\x83\x03\x83\x03\x84\x03\x84\x03\x84\x05\x84\u05BA\n\x84\x03\x84\x03\x84" +
		"\x03\x85\x06\x85\u05BF\n\x85\r\x85\x0E\x85\u05C0\x03\x86\x03\x86\x03\x86" +
		"\x03\x86\x03\x86\x03\x86\x03\x86\x06\x86\u05CA\n\x86\r\x86\x0E\x86\u05CB" +
		"\x03\x86\x03\x86\x03\x86\x06\x86\u05D1\n\x86\r\x86\x0E\x86\u05D2\x03\x86" +
		"\x07\x86\u05D6\n\x86\f\x86\x0E\x86\u05D9\v\x86\x03\x86\x03\x86\x03\x87" +
		"\x03\x87\x03\x87\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\v\u0114" +
		"\u0182\u0188\u01E4\u01EC\u021A\u028F\u051D\u0590\x02\x05\xA4\xA6\xEE\x89" +
>>>>>>> feat: whatever; conditions; exists; instanciation var
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
		"\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02" +
		"\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02" +
		"\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02" +
		"\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02" +
		"\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02" +
		"\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02" +
		"\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A" +
		"\x02\u010C\x02\u010E\x02\x02\n\x0E\x02\n\n\r\x0E\x10\x10\x13\x13\x1A\x1A" +
		"&(--225;=@ddll\x03\x02FI\x03\x02)*\x03\x02\x0F\x13\x04\x02\x0F\x0F\x11" +
		"\x13\x03\x02>?\x03\x02UZ\x03\x02`d\x02\u0650\x02\u0110\x03\x02\x02\x02" +
		"\x04\u0121\x03\x02\x02\x02\x06\u012E\x03\x02\x02\x02\b\u0134\x03\x02\x02" +
		"\x02\n\u0136\x03\x02\x02\x02\f\u013D\x03\x02\x02\x02\x0E\u013F\x03\x02" +
		"\x02\x02\x10\u015A\x03\x02\x02\x02\x12\u0161\x03\x02\x02\x02\x14\u0166" +
		"\x03\x02\x02\x02\x16\u017D\x03\x02\x02\x02\x18\u0194\x03\x02\x02\x02\x1A" +
		"\u019A\x03\x02\x02\x02\x1C\u01A4\x03\x02\x02\x02\x1E\u01AE\x03\x02\x02" +
		"\x02 \u01B3\x03\x02\x02\x02\"\u01BC\x03\x02\x02\x02$\u01CD\x03\x02\x02" +
		"\x02&\u01CF\x03\x02\x02\x02(\u01D7\x03\x02\x02\x02*\u01DF\x03\x02\x02" +
		"\x02,\u01E7\x03\x02\x02\x02.\u01F0\x03\x02\x02\x020\u01F7\x03\x02\x02" +
		"\x022\u01F9\x03\x02\x02\x024\u0201\x03\x02\x02\x026\u0203\x03\x02\x02" +
		"\x028\u020A\x03\x02\x02\x02:\u020C\x03\x02\x02\x02<\u0210\x03\x02\x02" +
		"\x02>\u0213\x03\x02\x02\x02@\u021F\x03\x02\x02\x02B\u0223\x03\x02\x02" +
		"\x02D\u022A\x03\x02\x02\x02F\u023C\x03\x02\x02\x02H\u024A\x03\x02\x02" +
		"\x02J\u0253\x03\x02\x02\x02L\u0255\x03\x02\x02\x02N\u025C\x03\x02\x02" +
		"\x02P\u0263\x03\x02\x02\x02R\u026E\x03\x02\x02\x02T\u0272\x03\x02\x02" +
		"\x02V\u0283\x03\x02\x02\x02X\u0285\x03\x02\x02\x02Z\u0296\x03\x02\x02" +
		"\x02\\\u02B2\x03\x02\x02\x02^\u02CE\x03\x02\x02\x02`\u02DA\x03\x02\x02" +
		"\x02b\u02E4\x03\x02\x02\x02d\u02E6\x03\x02\x02\x02f\u02EF\x03\x02\x02" +
		"\x02h\u02F4\x03\x02\x02\x02j\u02FD\x03\x02\x02\x02l\u02FF\x03\x02\x02" +
		"\x02n\u031D\x03\x02\x02\x02p\u031F\x03\x02\x02\x02r\u032D\x03\x02\x02" +
		"\x02t\u0333\x03\x02\x02\x02v\u0339\x03\x02\x02\x02x\u0342\x03\x02\x02" +
		"\x02z\u034F\x03\x02\x02\x02|\u0356\x03\x02\x02\x02~\u0358\x03\x02\x02" +
		"\x02\x80\u0372\x03\x02\x02\x02\x82\u0377\x03\x02\x02\x02\x84\u037C\x03" +
		"\x02\x02\x02\x86\u0386\x03\x02\x02\x02\x88\u038D\x03\x02\x02\x02\x8A\u0395" +
		"\x03\x02\x02\x02\x8C\u039F\x03\x02\x02\x02\x8E\u03A4\x03\x02\x02\x02\x90" +
		"\u03AC\x03\x02\x02\x02\x92\u03B2\x03\x02\x02\x02\x94\u03CB\x03\x02\x02" +
		"\x02\x96\u03D5\x03\x02\x02\x02\x98\u03E0\x03\x02\x02\x02\x9A\u03E4\x03" +
		"\x02\x02\x02\x9C\u03E8\x03\x02\x02\x02\x9E\u03EB\x03\x02\x02\x02\xA0\u03F3" +
		"\x03\x02\x02\x02\xA2\u03F7\x03\x02\x02\x02\xA4\u03FC\x03\x02\x02\x02\xA6" +
		"\u0406\x03\x02\x02\x02\xA8\u0417\x03\x02\x02\x02\xAA\u0419\x03\x02\x02" +
		"\x02\xAC\u0420\x03\x02\x02\x02\xAE\u0427\x03\x02\x02\x02\xB0\u0429\x03" +
		"\x02\x02\x02\xB2\u042D\x03\x02\x02\x02\xB4\u0431\x03\x02\x02\x02\xB6\u0434" +
		"\x03\x02\x02\x02\xB8\u043A\x03\x02\x02\x02\xBA\u043F\x03\x02\x02\x02\xBC" +
		"\u0441\x03\x02\x02\x02\xBE\u0452\x03\x02\x02\x02\xC0\u0460\x03\x02\x02" +
		"\x02\xC2\u0471\x03\x02\x02\x02\xC4\u047F\x03\x02\x02\x02\xC6\u0488\x03" +
		"\x02\x02\x02\xC8\u0498\x03\x02\x02\x02\xCA\u04A4\x03\x02\x02\x02\xCC\u04A8" +
		"\x03\x02\x02\x02\xCE\u04AC\x03\x02\x02\x02\xD0\u04B6\x03\x02\x02\x02\xD2" +
		"\u04B9\x03\x02\x02\x02\xD4\u04BC\x03\x02\x02\x02\xD6\u04C2\x03\x02\x02" +
		"\x02\xD8\u04CB\x03\x02\x02\x02\xDA\u04D2\x03\x02\x02\x02\xDC\u04E8\x03" +
		"\x02\x02\x02\xDE\u04EE\x03\x02\x02\x02\xE0\u04F1\x03\x02\x02\x02\xE2\u050E" +
		"\x03\x02\x02\x02\xE4\u0510\x03\x02\x02\x02\xE6\u0513\x03\x02\x02\x02\xE8" +
		"\u0524\x03\x02\x02\x02\xEA\u052C\x03\x02\x02\x02\xEC\u0532\x03\x02\x02" +
		"\x02\xEE\u053A\x03\x02\x02\x02\xF0\u0545\x03\x02\x02\x02\xF2\u054D\x03" +
		"\x02\x02\x02\xF4\u0562\x03\x02\x02\x02\xF6\u0564\x03\x02\x02\x02\xF8\u056B" +
		"\x03\x02\x02\x02\xFA\u0578\x03\x02\x02\x02\xFC\u057F\x03\x02\x02\x02\xFE" +
		"\u058C\x03\x02\x02\x02\u0100\u0595\x03\x02\x02\x02\u0102\u059F\x03\x02" +
		"\x02\x02\u0104\u05AF\x03\x02\x02\x02\u0106\u05B6\x03\x02\x02\x02\u0108" +
		"\u05BE\x03\x02\x02\x02\u010A\u05C2\x03\x02\x02\x02\u010C\u05DC\x03\x02" +
		"\x02\x02\u010E\u05DF\x03\x02\x02\x02\u0110\u0114\x07\x03\x02\x02\u0111" +
		"\u0113\x07v\x02\x02\u0112\u0111\x03\x02\x02\x02\u0113\u0116\x03\x02\x02" +
		"\x02\u0114\u0115\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0115\u0118" +
		"\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0117\u0119\x07\x02\x02\x03" +
		"\u0118\u0117\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\x03\x03" +
		"\x02\x02\x02\u011A\u011C\x05\x06\x04\x02\u011B\u011A\x03\x02\x02\x02\u011C" +
		"\u011F\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02" +
		"\x02\x02\u011E\u0122\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120" +
		"\u0122\x05\x02\x02\x02\u0121\u011D\x03\x02\x02\x02\u0121\u0120\x03\x02" +
		"\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x07\x02\x02\x03\u0124" +
		"\x05\x03\x02\x02\x02\u0125\u012F\x05\x14\v\x02\u0126\u012F\x05\xF4{\x02" +
		"\u0127\u012F\x05\u0102\x82\x02\u0128\u012F\x05\u0100\x81\x02\u0129\u012F" +
		"\x05\u010A\x86\x02\u012A\u012F\x05\x0E\b\x02\u012B\u012F\x05~@\x02\u012C" +
		"\u012F\x05\xF6|\x02\u012D\u012F\x05\n\x06\x02\u012E\u0125\x03\x02\x02" +
		"\x02\u012E\u0126\x03\x02\x02\x02\u012E\u0127\x03\x02\x02\x02\u012E\u0128" +
		"\x03\x02\x02\x02\u012E\u0129\x03\x02\x02\x02\u012E\u012A\x03\x02\x02\x02" +
		"\u012E\u012B\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012D\x03" +
		"\x02\x02\x02\u012F\x07\x03\x02\x02\x02\u0130\u0131\x07D\x02\x02\u0131" +
		"\u0135\x07D\x02\x02\u0132\u0135\x07D\x02\x02\u0133\u0135\x07E\x02\x02" +
		"\u0134\u0130\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0133\x03" +
		"\x02\x02\x02\u0135\t\x03\x02\x02\x02\u0136\u0137\x075\x02\x02\u0137\u0138" +
		"\x05\f\x07\x02\u0138\u0139\x076\x02\x02\u0139\u013A\x05\f\x07\x02\u013A" +
		"\u013B\x077\x02\x02\u013B\u013C\x05\f\x07\x02\u013C\v\x03\x02\x02\x02" +
		"\u013D\u013E\t\x02\x02\x02\u013E\r\x03\x02\x02\x02\u013F\u0140\x07\x1F" +
		"\x02\x02\u0140\u0142\x05\f\x07\x02\u0141\u0143\x05\x12\n\x02\u0142\u0141" +
		"\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02" +
		"\u0144\u014D\x07O\x02\x02\u0145\u014A\x05\x10\t\x02\u0146\u0147\x07B\x02" +
		"\x02\u0147\u0149\x05\x10\t\x02\u0148\u0146\x03\x02\x02\x02\u0149\u014C" +
		"\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02" +
		"\u014B\u014E\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014D\u0145\x03" +
		"\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u014F" +
		"\u0150\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0155\x07P\x02" +
		"\x02\u0152\u0154\x050\x19\x02\u0153\u0152\x03\x02\x02\x02\u0154\u0157" +
		"\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02" +
		"\u0156\u0158\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0158\u0159\x07" +
		"A\x02\x02\u0159\x0F\x03\x02\x02\x02\u015A\u015E\x05\f\x07\x02\u015B\u015D" +
		"\x050\x19\x02\u015C\u015B\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02" +
		"\u015E\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\x11\x03" +
		"\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0161\u0162\x07:\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0162\u0163\x07O\x02\x02\u0163\u0164\x05\xF2z\x02\u0164\u0165\x07P\x02" +
		"\x02\u0165\x13\x03\x02\x02\x02\u0166\u016A\x05\x1E\x10\x02\u0167\u0169" +
		"\x050\x19\x02\u0168\u0167\x03\x02\x02\x02\u0169\u016C\x03\x02\x02\x02" +
		"\u016A\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u0171\x03" +
		"\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016D\u0170\x05&\x14\x02\u016E" +
		"\u0170\x05\x86D\x02\u016F\u016D\x03\x02\x02\x02\u016F\u016E\x03\x02\x02" +
		"\x02\u0170\u0173\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0171\u0172" +
		"\x03\x02\x02\x02\u0172\u0175\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02" +
		"\u0174\u0176\x05B\"\x02\u0175\u0174\x03\x02\x02\x02\u0175\u0176\x03\x02" +
		"\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x07A\x02\x02\u0178\u0179" +
		"\x05\x16\f\x02\u0179\u017B\x07A\x02\x02\u017A\u017C\x07\x02\x02\x03\u017B" +
		"\u017A\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\x15\x03\x02\x02" +
		"\x02\u017D\u017E\x07\r\x02\x02\u017E\u0182\x05\f\x07\x02\u017F\u0181\x05" +
		"\x18\r\x02\u0180\u017F\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182" +
		"\u0183\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0183\u0188\x03\x02" +
		"\x02\x02\u0184\u0182\x03\x02\x02\x02\u0185\u0187\x05\x1C\x0F\x02\u0186" +
		"\u0185\x03\x02\x02\x02\u0187\u018A\x03\x02\x02\x02\u0188\u0189\x03\x02" +
		"\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018C\x03\x02\x02\x02\u018A" +
		"\u0188\x03\x02\x02\x02\u018B\u018D\x05\x1A\x0E\x02\u018C\u018B\x03\x02" +
		"\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u0191\x03\x02\x02\x02\u018E" +
		"\u0190\x050\x19\x02\u018F\u018E\x03\x02\x02\x02\u0190\u0193\x03\x02\x02" +
		"\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\x17" +
		"\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0194\u0196\x05\f\x07\x02" +
		"\u0195\u0197\x050\x19\x02\u0196\u0195\x03\x02\x02\x02\u0197\u0198\x03" +
		"\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199" +
		"\x19\x03\x02\x02\x02\u019A\u019B\x07\x19\x02\x02\u019B\u019F\x07O\x02" +
		"\x02\u019C\u019E\x05\x1C\x0F\x02\u019D\u019C\x03\x02\x02\x02\u019E\u01A1" +
		"\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02" +
		"\u01A0\u01A2\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A2\u01A3\x07" +
		"P\x02\x02\u01A3\x1B\x03\x02\x02\x02\u01A4\u01A6\x05\f\x07\x02\u01A5\u01A7" +
		"\x07\x0F\x02\x02\u01A6\u01A5\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02" +
		"\u01A7\u01AB\x03\x02\x02\x02\u01A8\u01AA\x050\x19\x02\u01A9\u01A8\x03" +
		"\x02\x02\x02\u01AA\u01AD\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB" +
		"\u01AC\x03\x02\x02\x02\u01AC\x1D\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02" +
		"\x02\u01AE\u01AF\x07\f\x02\x02\u01AF\u01B1\x05\f\x07\x02\u01B0\u01B2\x05" +
		" \x11\x02\u01B1\u01B0\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2" +
		"\x1F\x03\x02\x02\x02\u01B3\u01B4\x07\x0E\x02\x02\u01B4\u01B9\x05\"\x12" +
		"\x02\u01B5\u01B6\x07B\x02\x02\u01B6\u01B8\x05\"\x12\x02\u01B7\u01B5\x03" +
		"\x02\x02\x02\u01B8\u01BB\x03\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01B9" +
		"\u01BA\x03\x02\x02\x02\u01BA!\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02" +
		"\x02\u01BC\u01BD\x05\f\x07\x02\u01BD#\x03\x02\x02\x02\u01BE\u01BF\x07" +
		"\x18\x02\x02\u01BF\u01CE\x05\xFC\x7F\x02\u01C0\u01C1\x07\x18\x02\x02\u01C1" +
		"\u01CA\x07K\x02\x02\u01C2\u01C7\x05V,\x02\u01C3\u01C4\x07B\x02\x02\u01C4" +
		"\u01C6\x05V,\x02\u01C5\u01C3\x03\x02\x02\x02\u01C6\u01C9\x03\x02\x02\x02" +
		"\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01CB\x03" +
		"\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01CA\u01C2\x03\x02\x02\x02\u01CA" +
		"\u01CB\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CE\x07L\x02" +
		"\x02\u01CD\u01BE\x03\x02\x02\x02\u01CD\u01C0\x03\x02\x02\x02\u01CE%\x03" +
		"\x02\x02\x02\u01CF\u01D0\x07\x14\x02\x02\u01D0\u01D4\x05\f\x07\x02\u01D1" +
		"\u01D3\x050\x19\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3\u01D6\x03\x02\x02" +
		"\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\'\x03" +
		"\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01D8\x05*\x16\x02\u01D8" +
		"\u01DC\x05\f\x07\x02\u01D9\u01DB\x050\x19\x02\u01DA\u01D9\x03\x02\x02" +
		"\x02\u01DB\u01DE\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DD" +
		"\x03\x02\x02\x02\u01DD)\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF" +
		"\u01E4\x05\f\x07\x02\u01E0\u01E1\x07\\\x02\x02\u01E1\u01E3\x05\f\x07\x02" +
		"\u01E2\u01E0\x03\x02\x02\x02\u01E3\u01E6\x03\x02\x02\x02\u01E4\u01E5\x03" +
		"\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E5+\x03\x02\x02\x02\u01E6" +
		"\u01E4\x03\x02\x02\x02\u01E7\u01EA\x05\f\x07\x02\u01E8\u01E9\x07D\x02" +
		"\x02\u01E9\u01EB\x05\f\x07\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB\u01EC" +
		"\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02" +
		"\u01ED-\x03\x02\x02\x02\u01EE\u01F1\x05\f\x07\x02\u01EF\u01F1\x05,\x17" +
		"\x02\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01EF\x03\x02\x02\x02\u01F1/\x03" +
		"\x02\x02\x02\u01F2\u01F8\x052\x1A\x02\u01F3\u01F8\x05:\x1E\x02\u01F4\u01F8" +
		"\x05@!\x02\u01F5\u01F8\x05> \x02\u01F6\u01F8\x056\x1C\x02\u01F7\u01F2" +
		"\x03\x02\x02\x02\u01F7\u01F3\x03\x02\x02\x02\u01F7\u01F4\x03\x02\x02\x02" +
		"\u01F7\u01F5\x03\x02\x02\x02\u01F7\u01F6\x03\x02\x02\x02\u01F81\x03\x02" +
		"\x02\x02\u01F9\u01FA\x07F\x02\x02\u01FA\u01FB\x07/\x02\x02\u01FB\u01FC" +
		"\x054\x1B\x02\u01FC3\x03\x02\x02\x02\u01FD\u0202\x05\xE8u\x02\u01FE\u0202" +
		"\x05v<\x02\u01FF\u0202\x05\xDEp\x02\u0200\u0202\x05d3\x02\u0201\u01FD" +
		"\x03\x02\x02\x02\u0201\u01FE\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02" +
		"\u0201\u0200\x03\x02\x02\x02\u02025\x03\x02\x02\x02\u0203\u0204\x07F\x02" +
		"\x02\u0204\u0205\x07\r\x02\x02\u0205\u0206\x05\xE8u\x02\u02067\x03\x02" +
		"\x02\x02\u0207\u020B\x05d3\x02\u0208\u020B\x05v<\x02\u0209\u020B\x05\xDE" +
		"p\x02\u020A\u0207\x03\x02\x02\x02\u020A\u0208\x03\x02\x02\x02\u020A\u0209" +
		"\x03\x02\x02\x02\u020B9\x03\x02\x02\x02\u020C\u020D\t\x03\x02\x02\u020D" +
		"\u020E\x05.\x18\x02\u020E\u020F\x05H%\x02\u020F;\x03\x02\x02\x02\u0210" +
		"\u0211\x05*\x16\x02\u0211\u0212\x05\f\x07\x02\u0212=\x03\x02\x02\x02\u0213" +
		"\u0214\x07F\x02\x02\u0214\u021D\x07(\x02\x02\u0215\u021A\x05<\x1F\x02" +
		"\u0216\u0217\x07B\x02\x02\u0217\u0219\x05<\x1F\x02\u0218\u0216\x03\x02" +
		"\x02\x02\u0219\u021C\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021A" +
		"\u0218\x03\x02\x02\x02\u021B\u021E\x03\x02\x02\x02\u021C\u021A\x03\x02" +
		"\x02\x02\u021D\u0215\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E" +
		"?\x03\x02\x02\x02\u021F\u0220\x07F\x02\x02\u0220\u0221\x07\'\x02\x02\u0221" +
		"\u0222\x05F$\x02\u0222A\x03\x02\x02\x02\u0223\u0227\x07\x15\x02\x02\u0224" +
		"\u0226\x050\x19\x02\u0225\u0224\x03\x02\x02\x02\u0226\u0229\x03\x02\x02" +
		"\x02\u0227\u0225\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228C\x03" +
		"\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u022A\u022E\x07f\x02\x02\u022B" +
		"\u022D\x07{\x02\x02\u022C\u022B\x03\x02\x02\x02\u022D\u0230\x03\x02\x02" +
		"\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0231" +
		"\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0231\u0232\x07f\x02\x02" +
		"\u0232E\x03\x02\x02\x02\u0233\u023D\x05d3\x02\u0234\u023D\x05\xA2R\x02" +
		"\u0235\u023D\x05V,\x02\u0236\u023D\x05P)\x02\u0237\u023D\x05D#\x02\u0238" +
		"\u0239\x05\f\x07\x02\u0239\u023A\x05\f\x07\x02\u023A\u023D\x03\x02\x02" +
		"\x02\u023B\u023D\x05\xFA~\x02\u023C\u0233\x03\x02\x02\x02\u023C\u0234" +
		"\x03\x02\x02\x02\u023C\u0235\x03\x02\x02\x02\u023C\u0236\x03\x02\x02\x02" +
		"\u023C\u0237\x03\x02\x02\x02\u023C\u0238\x03\x02\x02\x02\u023C\u023B\x03" +
		"\x02\x02\x02\u023DG\x03\x02\x02\x02\u023E\u024B\x05\xDEp\x02\u023F\u024B" +
		"\x05d3\x02\u0240\u024B\x05\xA2R\x02\u0241\u024B\x05V,\x02\u0242\u024B" +
		"\x05L\'\x02\u0243\u024B\x05P)\x02\u0244\u024B\x05D#\x02\u0245\u0246\x05" +
		"\f\x07\x02\u0246\u0247\x05\f\x07\x02\u0247\u024B\x03\x02\x02\x02\u0248" +
		"\u024B\x05\xFA~\x02\u0249\u024B\x05\xE8u\x02\u024A\u023E\x03\x02\x02\x02" +
		"\u024A\u023F\x03\x02\x02\x02\u024A\u0240\x03\x02\x02\x02\u024A\u0241\x03" +
		"\x02\x02\x02\u024A\u0242\x03\x02\x02\x02\u024A\u0243\x03\x02\x02\x02\u024A" +
		"\u0244\x03\x02\x02\x02\u024A\u0245\x03\x02\x02\x02\u024A\u0248\x03\x02" +
		"\x02\x02\u024A\u0249\x03\x02\x02\x02\u024BI\x03\x02\x02\x02\u024C\u0254" +
		"\x05\xA2R\x02\u024D\u0254\x05V,\x02\u024E\u0254\x05P)\x02\u024F\u0254" +
		"\x05D#\x02\u0250\u0251\x05\f\x07\x02\u0251\u0252\x05\f\x07\x02\u0252\u0254" +
		"\x03\x02\x02\x02\u0253\u024C\x03\x02\x02\x02\u0253\u024D\x03\x02\x02\x02" +
		"\u0253\u024E\x03\x02\x02\x02\u0253\u024F\x03\x02\x02\x02\u0253\u0250\x03" +
		"\x02\x02\x02\u0254K\x03\x02\x02\x02\u0255\u0258\x05P)\x02\u0256\u0257" +
		"\x07B\x02\x02\u0257\u0259\x05P)\x02\u0258\u0256\x03\x02\x02\x02\u0259" +
		"\u025A\x03\x02\x02\x02\u025A\u0258\x03\x02\x02\x02\u025A\u025B\x03\x02" +
		"\x02\x02\u025BM\x03\x02\x02\x02\u025C\u025F\x07O\x02\x02\u025D\u0260\x05" +
		"P)\x02\u025E\u0260\x05L\'\x02\u025F\u025D\x03\x02\x02\x02\u025F\u025E" +
		"\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0262\x07P\x02\x02" +
		"\u0262O\x03\x02\x02\x02\u0263\u0264\x05R*\x02\u0264\u0265\x07C\x02\x02" +
		"\u0265\u0266\x05T+\x02\u0266Q\x03\x02\x02\x02\u0267\u026F\x05f4\x02\u0268" +
		"\u026F\x07g\x02\x02\u0269\u026F\x07e\x02\x02\u026A\u026F\x05v<\x02\u026B" +
		"\u026F\x07i\x02\x02\u026C\u026F\x05\xF8}\x02\u026D\u026F\x05\xFC\x7F\x02" +
		"\u026E\u0267\x03\x02\x02\x02\u026E\u0268\x03\x02\x02\x02\u026E\u0269\x03" +
		"\x02\x02\x02\u026E\u026A\x03\x02\x02\x02\u026E\u026B\x03\x02\x02\x02\u026E" +
		"\u026C\x03\x02\x02\x02\u026E\u026D\x03\x02\x02\x02\u026FS\x03\x02\x02" +
		"\x02\u0270\u0273\x05V,\x02\u0271\u0273\x05\xA2R\x02\u0272\u0270\x03\x02" +
		"\x02\x02\u0272\u0271\x03\x02\x02\x02\u0273U\x03\x02\x02\x02\u0274\u0284" +
		"\x05\xFE\x80\x02\u0275\u0284\x05x=\x02\u0276\u0284\x05\xEEx\x02\u0277" +
		"\u0284\x05h5\x02\u0278\u0284\x05$\x13\x02\u0279\u0284\x05d3\x02\u027A" +
		"\u0284\x05\xF8}\x02\u027B\u0284\x05\xFC\x7F\x02\u027C\u0284\x05\xD8m\x02" +
		"\u027D\u0284\x05Z.\x02\u027E\u0284\x05\\/\x02\u027F\u0284\x05X-\x02\u0280" +
		"\u0284\x05N(\x02\u0281\u0284\x05\xBC_\x02\u0282\u0284\x05\xBE`\x02\u0283" +
		"\u0274\x03\x02\x02\x02\u0283\u0275\x03\x02\x02\x02\u0283\u0276\x03\x02" +
		"\x02\x02\u0283\u0277\x03\x02\x02\x02\u0283\u0278\x03\x02\x02\x02\u0283" +
		"\u0279\x03\x02\x02\x02\u0283\u027A\x03\x02\x02\x02\u0283\u027B\x03\x02" +
		"\x02\x02\u0283\u027C\x03\x02\x02\x02\u0283\u027D\x03\x02\x02\x02\u0283" +
		"\u027E\x03\x02\x02\x02\u0283\u027F\x03\x02\x02\x02\u0283\u0280\x03\x02" +
		"\x02\x02\u0283\u0281\x03\x02\x02\x02\u0283\u0282\x03\x02\x02\x02\u0284" +
		"W\x03\x02\x02\x02\u0285\u0286\x07&\x02\x02\u0286\u0287\x07K\x02\x02\u0287" +
		"\u028F\x05j6\x02\u0288\u028B\x07B\x02\x02\u0289\u028C\x05\xB2Z\x02\u028A" +
		"\u028C\x05\xA2R\x02\u028B\u0289\x03\x02\x02\x02\u028B\u028A\x03\x02\x02" +
		"\x02\u028C\u028E\x03\x02\x02\x02\u028D\u0288\x03\x02\x02\x02\u028E\u0291" +
		"\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02" +
		"\u0290\u0292\x03\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0292\u0293\x07" +
		"B\x02\x02\u0293\u0294\x05\xA2R\x02\u0294\u0295\x07L\x02\x02\u0295Y\x03" +
		"\x02\x02\x02\u0296\u0297\x07\x04\x02\x02\u0297\u0298\x07K\x02\x02\u0298" +
		"\u0299\x05V,\x02\u0299\u02A0\x07B\x02\x02\u029A\u029B\x07\x05\x02\x02" +
		"\u029B\u02A1\x05\xA2R\x02\u029C\u029D\x07\x06\x02\x02\u029D\u02A1\x05" +
		"\f\x07\x02\u029E\u029F\x07\x07\x02\x02\u029F\u02A1\x05V,\x02\u02A0\u029A" +
		"\x03\x02\x02\x02\u02A0\u029C\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02" +
		"\u02A1\u02AD\x03\x02\x02\x02\u02A2\u02A9\x07B\x02\x02\u02A3\u02A4\x07" +
		"\x05\x02\x02\u02A4\u02AA\x05\xA2R\x02\u02A5\u02A6\x07\x06\x02\x02\u02A6" +
		"\u02AA\x05\f\x07\x02\u02A7\u02A8\x07\x07\x02\x02\u02A8\u02AA\x05V,\x02" +
		"\u02A9\u02A3\x03\x02\x02\x02\u02A9\u02A5\x03\x02\x02\x02\u02A9\u02A7\x03" +
		"\x02\x02\x02\u02AA\u02AC\x03\x02\x02\x02\u02AB\u02A2\x03\x02\x02\x02\u02AC" +
		"\u02AF\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AD\u02AE\x03\x02" +
		"\x02\x02\u02AE\u02B0\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02B0" +
		"\u02B1\x07L\x02\x02\u02B1[\x03\x02\x02\x02\u02B2\u02B3\x07\b\x02\x02\u02B3" +
		"\u02B4\x07K\x02\x02\u02B4\u02B5\x05V,\x02\u02B5\u02BC\x07B\x02\x02\u02B6" +
		"\u02B7\x07\t\x02\x02\u02B7\u02BD\x05\xA2R\x02\u02B8\u02B9\x07\n\x02\x02" +
		"\u02B9\u02BD\x05\f\x07\x02\u02BA\u02BB\x07\v\x02\x02\u02BB\u02BD\x05V" +
		",\x02\u02BC\u02B6\x03\x02\x02\x02\u02BC\u02B8\x03\x02\x02\x02\u02BC\u02BA" +
		"\x03\x02\x02\x02\u02BD\u02C9\x03\x02\x02\x02\u02BE\u02C5\x07B\x02\x02" +
		"\u02BF\u02C0\x07\t\x02\x02\u02C0\u02C6\x05\xA2R\x02\u02C1\u02C2\x07\n" +
		"\x02\x02\u02C2\u02C6\x05\f\x07\x02\u02C3\u02C4\x07\v\x02\x02\u02C4\u02C6" +
		"\x05V,\x02\u02C5\u02BF\x03\x02\x02\x02\u02C5\u02C1\x03\x02\x02\x02\u02C5" +
		"\u02C3\x03\x02\x02\x02\u02C6\u02C8\x03\x02\x02\x02\u02C7\u02BE\x03\x02" +
		"\x02\x02\u02C8\u02CB\x03\x02\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02C9" +
		"\u02CA\x03\x02\x02\x02\u02CA\u02CC\x03\x02\x02\x02\u02CB\u02C9\x03\x02" +
		"\x02\x02\u02CC\u02CD\x07L\x02\x02\u02CD]\x03\x02\x02\x02\u02CE\u02CF\x07" +
		"#\x02\x02\u02CF\u02D1\x07K\x02\x02\u02D0\u02D2\x05\f\x07\x02\u02D1\u02D0" +
		"\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02" +
		"\u02D3\u02D4\x05\f\x07\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02D6\x07" +
		"B\x02\x02\u02D6\u02D7\x05V,\x02\u02D7\u02D8\x07L\x02\x02\u02D8\u02D9\x05" +
		"\xBA^\x02\u02D9_\x03\x02\x02\x02\u02DA\u02DB\x074\x02\x02\u02DB\u02DC" +
		"\x07K\x02\x02\u02DC\u02DD\x05\f\x07\x02\u02DD\u02DE\x07B\x02\x02\u02DE" +
		"\u02DF\x05V,\x02\u02DF\u02E0\x07B\x02\x02\u02E0\u02E1\x05V,\x02\u02E1" +
		"\u02E2\x07L\x02\x02\u02E2\u02E3\x05\xBA^\x02\u02E3a\x03\x02\x02\x02\u02E4" +
		"\u02E5\x05d3\x02\u02E5c\x03\x02\x02\x02\u02E6\u02E7\x07\x1B\x02\x02\u02E7" +
		"\u02E8\x07K\x02\x02\u02E8\u02E9\x05\xA2R\x02\u02E9\u02EA\x07L\x02\x02" +
		"\u02EA\u02EB\x07\x1D\x02\x02\u02EB\u02EC\x05V,\x02\u02EC\u02ED\x07\x1E" +
		"\x02\x02\u02ED\u02EE\x05V,\x02\u02EEe\x03\x02\x02\x02\u02EF\u02F0\t\x04" +
		"\x02\x02\u02F0g\x03\x02\x02\x02\u02F1\u02F5\x05f4\x02\u02F2\u02F5\x07" +
		"g\x02\x02\u02F3\u02F5\x07e\x02\x02\u02F4\u02F1\x03\x02\x02\x02\u02F4\u02F2" +
		"\x03\x02\x02\x02\u02F4\u02F3\x03\x02\x02\x02\u02F5i\x03\x02\x02\x02\u02F6" +
		"\u02F7\x07S\x02\x02\u02F7\u02FE\x05\f\x07\x02\u02F8\u02F9\x05\f\x07\x02" +
		"\u02F9\u02FA\x07K\x02\x02\u02FA\u02FB\x05j6\x02\u02FB\u02FC\x07L\x02\x02" +
		"\u02FC\u02FE\x03\x02\x02\x02\u02FD\u02F6\x03\x02\x02\x02\u02FD\u02F8\x03" +
		"\x02\x02\x02\u02FEk\x03\x02\x02\x02\u02FF\u0303\x05n8\x02\u0300\u0302" +
		"\x05r:\x02\u0301\u0300\x03\x02\x02\x02\u0302\u0305\x03\x02\x02\x02\u0303" +
		"\u0301\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304m\x03\x02\x02" +
		"\x02\u0305\u0303\x03\x02\x02\x02\u0306\u031E\x05j6\x02\u0307\u031E\x05" +
		"\xFE\x80\x02\u0308\u031E\x05\xFC\x7F\x02\u0309\u031E\x05X-\x02\u030A\u031E" +
		"\x05Z.\x02\u030B\u031E\x05\\/\x02\u030C\u031E\x05p9\x02\u030D\u031E\x05" +
		"\xF8}\x02\u030E\u031E\x05N(\x02\u030F\u031E\x05\xA0Q\x02\u0310\u0311\x07" +
		"K\x02\x02\u0311\u0312\x05\xBC_\x02\u0312\u0313\x07L\x02\x02\u0313\u031E" +
		"\x03\x02\x02\x02\u0314\u0315\x07K\x02\x02\u0315\u0316\x05\xBE`\x02\u0316" +
		"\u0317\x07L\x02\x02\u0317\u031E\x03\x02\x02\x02\u0318\u0319\x07K\x02\x02" +
		"\u0319\u031A\x05d3\x02\u031A\u031B\x07L\x02\x02\u031B\u031E\x03\x02\x02" +
		"\x02\u031C\u031E\x05\f\x07\x02\u031D\u0306\x03\x02\x02\x02\u031D\u0307" +
		"\x03\x02\x02\x02\u031D\u0308\x03\x02\x02\x02\u031D\u0309\x03\x02\x02\x02" +
		"\u031D\u030A\x03\x02\x02\x02\u031D\u030B\x03\x02\x02\x02\u031D\u030C\x03" +
		"\x02\x02\x02\u031D\u030D\x03\x02\x02\x02\u031D\u030E\x03\x02\x02\x02\u031D" +
		"\u030F\x03\x02\x02\x02\u031D\u0310\x03\x02\x02\x02\u031D\u0314\x03\x02" +
		"\x02\x02\u031D\u0318\x03\x02\x02\x02\u031D\u031C\x03\x02\x02\x02\u031E" +
		"o\x03\x02\x02\x02\u031F\u0320\x05\f\x07\x02\u0320\u0329\x07K\x02\x02\u0321" +
		"\u0326\x05t;\x02\u0322\u0323\x07B\x02\x02\u0323\u0325\x05t;\x02\u0324" +
		"\u0322\x03\x02\x02\x02\u0325\u0328\x03\x02\x02\x02\u0326\u0324\x03\x02" +
		"\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327\u032A\x03\x02\x02\x02\u0328" +
		"\u0326\x03\x02\x02\x02\u0329\u0321\x03\x02\x02\x02\u0329\u032A\x03\x02" +
		"\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B\u032C\x07L\x02\x02\u032Cq\x03" +
		"\x02\x02\x02\u032D\u032E\x07M\x02\x02\u032E\u032F\x05t;\x02\u032F\u0330" +
		"\x07N\x02\x02\u0330s\x03\x02\x02\x02\u0331\u0332\x07m\x02\x02\u0332\u0334" +
		"\x07C\x02\x02\u0333\u0331\x03\x02\x02\x02\u0333\u0334\x03\x02\x02\x02" +
		"\u0334\u0337\x03\x02\x02\x02\u0335\u0338\x05J&\x02\u0336\u0338\x05j6\x02" +
		"\u0337\u0335\x03\x02\x02\x02\u0337\u0336\x03\x02\x02\x02\u0338u\x03\x02" +
		"\x02\x02\u0339\u033F\x05l7\x02\u033A\u033B\x05\b\x05\x02\u033B\u033C\x05" +
		"l7\x02\u033C\u033E\x03\x02\x02\x02\u033D\u033A\x03\x02\x02\x02\u033E\u0341" +
		"\x03\x02\x02\x02\u033F\u033D\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02" +
		"\u0340w\x03\x02\x02\x02\u0341\u033F\x03\x02\x02\x02\u0342\u034D\x07J\x02" +
		"\x02\u0343\u034E\x05\xF4{\x02\u0344\u0348\x05\f\x07\x02\u0345\u0347\x05" +
		"|?\x02\u0346\u0345\x03\x02\x02\x02\u0347\u034A\x03\x02\x02\x02\u0348\u0346" +
		"\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349\u034B\x03\x02\x02\x02" +
		"\u034A\u0348\x03\x02\x02\x02\u034B\u034C\x07A\x02\x02\u034C\u034E\x03" +
		"\x02\x02\x02\u034D\u0343\x03\x02\x02\x02\u034D\u0344\x03\x02\x02\x02\u034E" +
		"y\x03\x02\x02\x02\u034F\u0350\x05V,\x02\u0350\u0351\x05\f\x07\x02\u0351" +
		"\u0352\x05V,\x02\u0352{\x03\x02\x02\x02\u0353\u0357\x050\x19\x02\u0354" +
		"\u0357\x05\xFE\x80\x02\u0355\u0357\x05\xFC\x7F\x02\u0356\u0353\x03\x02" +
		"\x02\x02\u0356\u0354\x03\x02\x02\x02\u0356\u0355\x03\x02\x02\x02\u0357" +
		"}\x03\x02\x02\x02\u0358\u0359\t\x05\x02\x02\u0359\u035F\x05\f\x07\x02" +
		"\u035A\u0360\x05\x80A\x02\u035B\u035C\x07K\x02\x02\u035C\u035D\x05\x8C" +
		"G\x02\u035D\u035E\x07L\x02\x02\u035E\u0360\x03\x02\x02\x02\u035F\u035A" +
		"\x03\x02\x02\x02\u035F\u035B\x03\x02\x02\x02\u0360\u0362\x03\x02\x02\x02" +
		"\u0361\u0363\x05\x82B\x02\u0362\u0361\x03\x02\x02\x02\u0362\u0363\x03" +
		"\x02\x02\x02\u0363\u0365\x03\x02\x02\x02\u0364\u0366\x05\x84C\x02\u0365" +
		"\u0364\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0368\x03\x02" +
		"\x02\x02\u0367\u0369\x05\u0106\x84\x02\u0368\u0367\x03\x02\x02\x02\u0368" +
		"\u0369\x03\x02\x02\x02\u0369\u036D\x03\x02\x02\x02\u036A\u036C\x050\x19" +
		"\x02\u036B\u036A\x03\x02\x02\x02\u036C\u036F\x03\x02\x02\x02\u036D\u036B" +
		"\x03\x02\x02\x02\u036D\u036E\x03\x02\x02\x02\u036E\u0370\x03\x02\x02\x02" +
		"\u036F\u036D\x03\x02\x02\x02\u0370\u0371\x07A\x02\x02\u0371\x7F\x03\x02" +
		"\x02\x02\u0372\u0373\x07\x1A\x02\x02\u0373\u0374\x07O\x02\x02\u0374\u0375" +
		"\x05\xF2z\x02\u0375\u0376\x07P\x02\x02\u0376\x81\x03\x02\x02\x02\u0377" +
		"\u0378\x07(\x02\x02\u0378\u0379\x07O\x02\x02\u0379\u037A\x05\xF2z\x02" +
		"\u037A\u037B\x07P\x02\x02\u037B\x83\x03\x02\x02\x02\u037C\u037D\x072\x02" +
		"\x02\u037D\u0381\x07O\x02\x02\u037E\u0380\x05\xF4{\x02\u037F\u037E\x03" +
		"\x02\x02\x02\u0380\u0383\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02\u0381" +
		"\u0382\x03\x02\x02\x02\u0382\u0384\x03\x02\x02\x02\u0383\u0381\x03\x02" +
		"\x02\x02\u0384\u0385\x07P\x02\x02\u0385\x85\x03\x02\x02\x02\u0386\u038A" +
		"\x05\x8AF\x02\u0387\u0389\x050\x19\x02\u0388\u0387\x03\x02\x02\x02\u0389" +
		"\u038C\x03\x02\x02\x02\u038A\u0388\x03\x02\x02\x02\u038A\u038B\x03\x02" +
		"\x02\x02\u038B\x87\x03\x02\x02\x02\u038C\u038A\x03\x02\x02\x02\u038D\u038E" +
		"\x05\x8AF\x02\u038E\u0392\x07\x0F\x02\x02\u038F\u0391\x050\x19\x02\u0390" +
		"\u038F\x03\x02\x02\x02\u0391\u0394\x03\x02\x02\x02\u0392\u0390\x03\x02" +
		"\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393\x89\x03\x02\x02\x02\u0394\u0392" +
		"\x03\x02\x02\x02\u0395\u0396\t\x06\x02\x02\u0396\u039C\x05\f\x07\x02\u0397" +
		"\u039D\x05\x80A\x02\u0398\u0399\x07K\x02\x02\u0399\u039A\x05\x8CG\x02" +
		"\u039A\u039B\x07L\x02\x02\u039B\u039D\x03\x02\x02\x02\u039C\u0397\x03" +
		"\x02\x02\x02\u039C\u0398\x03\x02\x02\x02\u039D\x8B\x03\x02\x02\x02\u039E" +
		"\u03A0\x05\x8EH\x02\u039F\u039E\x03\x02\x02\x02\u039F\u03A0\x03\x02\x02" +
		"\x02\u03A0\u03A2\x03\x02\x02\x02\u03A1\u03A3\x05\x92J\x02\u03A2\u03A1" +
		"\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3\x8D\x03\x02\x02\x02" +
		"\u03A4\u03A9\x05\x90I\x02\u03A5\u03A6\x07B\x02\x02\u03A6\u03A8\x05\x90" +
		"I\x02\u03A7\u03A5\x03\x02\x02\x02\u03A8\u03AB\x03\x02\x02\x02\u03A9\u03A7" +
		"\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\x8F\x03\x02\x02\x02" +
		"\u03AB\u03A9\x03\x02\x02\x02\u03AC\u03AD\x05*\x16\x02\u03AD\u03AF\x05" +
		"\f\x07\x02\u03AE\u03B0\x05\x96L\x02\u03AF\u03AE\x03\x02\x02\x02\u03AF" +
		"\u03B0\x03\x02\x02\x02\u03B0\x91\x03\x02\x02\x02\u03B1\u03B3\x07B\x02" +
		"\x02\u03B2\u03B1\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3\u03B4" +
		"\x03\x02\x02\x02\u03B4\u03C0\x07O\x02\x02\u03B5\u03BA\x05\x94K\x02\u03B6" +
		"\u03B7\x07B\x02\x02\u03B7\u03B9\x05\x94K\x02\u03B8\u03B6\x03\x02\x02\x02" +
		"\u03B9\u03BC\x03\x02\x02\x02\u03BA\u03B8\x03\x02\x02\x02\u03BA\u03BB\x03" +
		"\x02\x02\x02\u03BB\u03BE\x03\x02\x02\x02\u03BC\u03BA\x03\x02\x02\x02\u03BD" +
		"\u03BF\x07B\x02\x02\u03BE\u03BD\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02" +
		"\x02\u03BF\u03C1\x03\x02\x02\x02\u03C0\u03B5\x03\x02\x02\x02\u03C0\u03C1" +
		"\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03C4\x07P\x02\x02" +
		"\u03C3\u03C5\x05\f\x07\x02\u03C4\u03C3\x03\x02\x02\x02\u03C4\u03C5\x03" +
		"\x02\x02\x02\u03C5\x93\x03\x02\x02\x02\u03C6\u03C7\x07M\x02\x02\u03C7" +
		"\u03C8\x05\f\x07\x02\u03C8\u03C9\x07N\x02\x02\u03C9\u03CC\x03\x02\x02" +
		"\x02\u03CA\u03CC\x05\f\x07\x02\u03CB\u03C6\x03\x02\x02\x02\u03CB\u03CA" +
		"\x03\x02\x02\x02\u03CC\u03CD\x03\x02\x02\x02\u03CD\u03CE\x07C\x02\x02" +
		"\u03CE\u03D0\x05\f\x07\x02\u03CF\u03D1\x05\f\x07\x02\u03D0\u03CF\x03\x02" +
		"\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1\u03D3\x03\x02\x02\x02\u03D2" +
		"\u03D4\x05\x96L\x02\u03D3\u03D2\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02" +
		"\x02\u03D4\x95\x03\x02\x02\x02\u03D5\u03D6\x07O\x02\x02\u03D6\u03DB\x05" +
		"\x98M\x02\u03D7\u03D8\x07B\x02\x02\u03D8\u03DA\x05\x98M\x02\u03D9\u03D7" +
		"\x03\x02\x02\x02\u03DA\u03DD\x03\x02\x02\x02\u03DB\u03D9\x03\x02\x02\x02" +
		"\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DE\x03\x02\x02\x02\u03DD\u03DB\x03" +
		"\x02\x02\x02\u03DE\u03DF\x07P\x02\x02\u03DF\x97\x03\x02\x02\x02\u03E0" +
		"\u03E2\x05\f\x07\x02\u03E1\u03E3\x05V,\x02\u03E2\u03E1\x03\x02\x02\x02" +
		"\u03E2\u03E3\x03\x02\x02\x02\u03E3\x99\x03\x02\x02\x02\u03E4\u03E6\x05" +
		"\x9CO\x02\u03E5\u03E7\x05\xB6\\\x02\u03E6\u03E5\x03\x02\x02\x02\u03E6" +
		"\u03E7\x03\x02\x02\x02\u03E7\x9B\x03\x02\x02\x02\u03E8\u03E9\x05z>\x02" +
		"\u03E9\x9D\x03\x02\x02\x02\u03EA\u03EC\x05\xB6\\\x02\u03EB\u03EA\x03\x02" +
		"\x02\x02\u03EB\u03EC\x03\x02\x02\x02\u03EC\u03F0\x03\x02\x02\x02\u03ED" +
		"\u03EF\x05\x9AN\x02\u03EE\u03ED\x03\x02\x02\x02\u03EF\u03F2\x03\x02\x02" +
		"\x02\u03F0\u03EE\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\x9F" +
		"\x03\x02\x02\x02\u03F2\u03F0\x03\x02\x02\x02\u03F3\u03F4\x07K\x02\x02" +
		"\u03F4\u03F5\x05\xA2R\x02\u03F5\u03F6\x07L\x02\x02\u03F6\xA1\x03\x02\x02" +
		"\x02\u03F7\u03F8\x05\xA6T\x02\u03F8\xA3\x03\x02\x02\x02\u03F9\u03FA\b" +
		"S\x01\x02\u03FA\u03FD\x05\xA0Q\x02\u03FB\u03FD\x05\xA8U\x02\u03FC\u03F9" +
		"\x03\x02\x02\x02\u03FC\u03FB\x03\x02\x02\x02\u03FD\u0403\x03\x02\x02\x02" +
		"\u03FE\u03FF\f\x05\x02\x02\u03FF\u0400\x07[\x02\x02\u0400\u0402\x05\xA6" +
		"T\x02\u0401\u03FE\x03\x02\x02\x02\u0402\u0405\x03\x02\x02\x02\u0403\u0401" +
		"\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404\xA5\x03\x02\x02\x02" +
		"\u0405\u0403\x03\x02\x02\x02\u0406\u0407\bT\x01\x02\u0407\u0408\x05\xA4" +
		"S\x02\u0408\u040E\x03\x02\x02\x02\u0409\u040A\f\x04\x02\x02\u040A\u040B" +
		"\x07\\\x02\x02\u040B\u040D\x05\xA4S\x02\u040C\u0409\x03\x02\x02\x02\u040D" +
		"\u0410\x03\x02\x02\x02\u040E\u040C\x03\x02\x02\x02\u040E\u040F\x03\x02" +
		"\x02\x02\u040F\xA7\x03\x02\x02\x02\u0410\u040E\x03\x02\x02\x02\u0411\u0412";
	private static readonly _serializedATNSegment2: string =
<<<<<<< refs/remotes/origin/develop
		"\x02\x02\u041E\u041D\x03\x02\x02\x02\u041F\xB7\x03\x02\x02\x02\u0420\u0421" +
		"\x07,\x02\x02\u0421\u0422\x07F\x02\x02\u0422\u0423\x05V,\x02\u0423\u0424" +
		"\x07G\x02\x02\u0424\u0428\x07J\x02\x02\u0425\u0427\x05\xC2b\x02\u0426" +
		"\u0425\x03\x02\x02\x02\u0427\u042A\x03\x02\x02\x02\u0428\u0426\x03\x02" +
		"\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429\u042D\x03\x02\x02\x02\u042A" +
		"\u0428\x03\x02\x02\x02\u042B\u042E\x05\xC0a\x02\u042C\u042E\x070\x02\x02" +
		"\u042D\u042B\x03\x02\x02\x02\u042D\u042C\x03\x02\x02\x02\u042D\u042E\x03" +
		"\x02\x02\x02\u042E\u042F\x03\x02\x02\x02\u042F\u0430\x07K\x02\x02\u0430" +
		"\xB9\x03\x02\x02\x02\u0431\u0432\x07,\x02\x02\u0432\u0436\x07J\x02\x02" +
		"\u0433\u0435\x05\xC2b\x02\u0434\u0433\x03\x02\x02\x02\u0435\u0438\x03" +
		"\x02\x02\x02\u0436\u0434\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437" +
		"\u043B\x03\x02\x02\x02\u0438\u0436\x03\x02\x02\x02\u0439\u043C\x05\xC0" +
		"a\x02\u043A\u043C\x070\x02\x02\u043B\u0439\x03\x02\x02\x02\u043B\u043A" +
		"\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02" +
		"\u043D\u043E\x07K\x02\x02\u043E\xBB\x03\x02\x02\x02\u043F\u0440\x07+\x02" +
		"\x02\u0440\u0441\x07F\x02\x02\u0441\u0442\x05V,\x02\u0442\u0443\x07G\x02" +
		"\x02\u0443\u0447\x07J\x02\x02\u0444\u0446\x05\xC4c\x02\u0445\u0444\x03" +
		"\x02\x02\x02\u0446\u0449\x03\x02\x02\x02\u0447\u0445\x03\x02\x02\x02\u0447" +
		"\u0448\x03\x02\x02\x02\u0448\u044C\x03\x02\x02\x02\u0449\u0447\x03\x02" +
		"\x02\x02\u044A\u044D\x05\xC6d\x02\u044B\u044D\x070\x02\x02\u044C\u044A" +
		"\x03\x02\x02\x02\u044C\u044B\x03\x02\x02\x02\u044C\u044D\x03\x02\x02\x02" +
		"\u044D\u044E\x03\x02\x02\x02\u044E\u044F\x07K\x02\x02\u044F\xBD\x03\x02" +
		"\x02\x02\u0450\u0451\x07+\x02\x02\u0451\u0455\x07J\x02\x02\u0452\u0454" +
		"\x05\xC4c\x02\u0453\u0452\x03\x02\x02\x02\u0454\u0457\x03\x02\x02\x02" +
		"\u0455\u0453\x03\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456\u045A\x03" +
		"\x02\x02\x02\u0457\u0455\x03\x02\x02\x02\u0458\u045B\x05\xC6d\x02\u0459" +
		"\u045B\x070\x02\x02\u045A\u0458\x03\x02\x02\x02\u045A\u0459\x03\x02\x02" +
		"\x02\u045A\u045B\x03\x02\x02\x02\u045B\u045C\x03\x02\x02\x02\u045C\u045D" +
		"\x07K\x02\x02\u045D\xBF\x03\x02\x02\x02\u045E\u045F\x07.\x02\x02\u045F" +
		"\u0465\x07>\x02\x02\u0460\u0466\x05V,\x02\u0461\u0462\x07J\x02\x02\u0462" +
		"\u0463\x05V,\x02\u0463\u0464\x07K\x02\x02\u0464\u0466\x03\x02\x02\x02" +
		"\u0465\u0460\x03\x02\x02\x02\u0465\u0461\x03\x02\x02\x02\u0466\xC1\x03" +
		"\x02\x02\x02\u0467\u046D\x07-\x02\x02\u0468\u0469\x07F\x02\x02\u0469\u046A" +
		"\x05J&\x02\u046A\u046B\x07G\x02\x02\u046B\u046E\x03\x02\x02\x02\u046C" +
		"\u046E\x05J&\x02\u046D\u0468\x03\x02\x02\x02\u046D\u046C\x03\x02\x02\x02" +
		"\u046E\u046F\x03\x02\x02\x02\u046F\u0475\x07>\x02\x02\u0470\u0476\x05" +
		"V,\x02\u0471\u0472\x07J\x02\x02\u0472\u0473\x05V,\x02\u0473\u0474\x07" +
		"K\x02\x02\u0474\u0476\x03\x02\x02\x02\u0475\u0470\x03\x02\x02\x02\u0475" +
		"\u0471\x03\x02\x02\x02\u0476\xC3\x03\x02\x02\x02\u0477\u047E\x07-\x02" +
		"\x02\u0478\u047F\x05\xF6|\x02\u0479\u047A\x07F\x02\x02\u047A\u047B\x05" +
		"J&\x02\u047B\u047C\x07G\x02\x02\u047C\u047F\x03\x02\x02\x02\u047D\u047F" +
		"\x05J&\x02\u047E\u0478\x03\x02\x02\x02\u047E\u0479\x03\x02\x02\x02\u047E" +
		"\u047D\x03\x02\x02\x02\u047F\u0480\x03\x02\x02\x02\u0480\u0481\x07>\x02" +
		"\x02\u0481\u0482\x05\xB6\\\x02\u0482\xC5\x03\x02\x02\x02\u0483\u0484\x07" +
		".\x02\x02\u0484\u0485\x07>\x02\x02\u0485\u0486\x05\xB6\\\x02\u0486\xC7" +
		"\x03\x02\x02\x02\u0487\u0489\x071\x02\x02\u0488\u048A\x07<\x02\x02\u0489" +
		"\u0488\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A\xC9\x03\x02\x02" +
		"\x02\u048B\u048F\x05\xD0i\x02\u048C\u048E\x05\xCEh\x02\u048D\u048C\x03" +
		"\x02\x02\x02\u048E\u0491\x03\x02\x02\x02\u048F\u048D\x03\x02\x02\x02\u048F" +
		"\u0490\x03\x02\x02\x02\u0490\u0493\x03\x02\x02\x02\u0491\u048F\x03\x02" +
		"\x02\x02\u0492\u0494\x05\xCCg\x02\u0493\u0492\x03\x02\x02\x02\u0493\u0494" +
		"\x03\x02\x02\x02\u0494\xCB\x03\x02\x02\x02\u0495\u0496\x07\x1E\x02\x02" +
		"\u0496\u0497\x05\xB6\\\x02\u0497\xCD\x03\x02\x02\x02\u0498\u0499\x07\x1E" +
		"\x02\x02\u0499\u049A\x05\xD0i\x02\u049A\xCF\x03\x02\x02\x02\u049B\u049C" +
		"\x07\x1C\x02\x02\u049C\u049D\x07F\x02\x02\u049D\u049E\x05\xB4[\x02\u049E" +
		"\u049F\x07G\x02\x02\u049F\u04A0\x05\xB6\\\x02\u04A0\xD1\x03\x02\x02\x02" +
		"\u04A1\u04A2\x07;\x02\x02\u04A2\u04A3\x07F\x02\x02\u04A3\u04A4\x05\f\x07" +
		"\x02\u04A4\u04A5\x07=\x02\x02\u04A5\u04A6\x05\xE4s\x02\u04A6\u04A7\x07" +
		"G\x02\x02\u04A7\xD3\x03\x02\x02\x02\u04A8\u04AB\x05\f\x07\x02\u04A9\u04AB" +
		"\x05j6\x02\u04AA\u04A8\x03\x02\x02\x02\u04AA\u04A9\x03\x02\x02\x02\u04AB" +
		"\u04AC\x03\x02\x02\x02\u04AC\u04AF\x07%\x02\x02\u04AD\u04B0\x05V,\x02" +
		"\u04AE\u04B0\x07\x0F\x02\x02\u04AF\u04AD\x03\x02\x02\x02\u04AF\u04AE\x03" +
		"\x02\x02\x02\u04B0\xD5\x03\x02\x02\x02\u04B1\u04B2\x07$\x02\x02\u04B2" +
		"\u04B3\x07F\x02\x02\u04B3\u04BA\x05\xD4k\x02\u04B4\u04B6\x07=\x02\x02" +
		"\u04B5\u04B4\x03\x02\x02\x02\u04B5\u04B6\x03\x02\x02\x02\u04B6\u04B7\x03" +
		"\x02\x02\x02\u04B7\u04B9\x05\xD4k\x02\u04B8\u04B5\x03\x02\x02\x02\u04B9" +
		"\u04BC\x03\x02\x02\x02\u04BA\u04B8\x03\x02\x02\x02\u04BA\u04BB\x03\x02" +
		"\x02\x02\u04BB\u04C3\x03\x02\x02\x02\u04BC\u04BA\x03\x02\x02\x02\u04BD" +
		"\u04BF\x07=\x02\x02\u04BE\u04BD\x03\x02\x02\x02\u04BE\u04BF\x03\x02\x02" +
		"\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04C2\x05\xA2R\x02\u04C1\u04BE" +
		"\x03\x02\x02\x02\u04C2\u04C5\x03\x02\x02\x02\u04C3\u04C1\x03\x02\x02\x02" +
		"\u04C3\u04C4\x03\x02\x02\x02\u04C4\u04C6\x03\x02\x02\x02\u04C5\u04C3\x03" +
		"\x02\x02\x02\u04C6\u04C7\x07G\x02\x02\u04C7\u04C8\x05\xB6\\\x02\u04C8" +
		"\xD7\x03\x02\x02\x02\u04C9\u04CA\x073\x02\x02\u04CA\u04CB\x07F\x02\x02" +
		"\u04CB\u04CC\x05\xB4[\x02\u04CC\u04CD\x07G\x02\x02\u04CD\u04CE\x05\xB6" +
		"\\\x02\u04CE\xD9\x03\x02\x02\x02\u04CF\u04D0\x07\'\x02\x02\u04D0\u04D1" +
		"\x05V,\x02\u04D1\xDB\x03\x02\x02\x02\u04D2\u04D3\x05v<\x02\u04D3\xDD\x03" +
		"\x02\x02\x02\u04D4\u04D5\x05\xACW\x02\u04D5\u04D6\x07<\x02\x02\u04D6\u04F0" +
		"\x03\x02\x02\x02\u04D7\u04D8\x05\xAEX\x02\u04D8\u04D9\x07<\x02\x02\u04D9" +
		"\u04F0\x03\x02\x02\x02\u04DA\u04DB\x05\xDAn\x02\u04DB\u04DC\x07<\x02\x02" +
		"\u04DC\u04F0\x03\x02\x02\x02\u04DD\u04DE\x05\xDCo\x02\u04DE\u04DF\x07" +
		"<\x02\x02\u04DF\u04F0\x03\x02\x02\x02\u04E0\u04F0\x05`1\x02\u04E1\u04F0" +
		"\x05^0\x02\u04E2\u04F0\x05\xD6l\x02\u04E3\u04F0\x05\xCAf\x02\u04E4\u04E5" +
		"\x05\xE2r\x02\u04E5\u04E6\x07<\x02\x02\u04E6\u04F0\x03\x02\x02\x02\u04E7" +
		"\u04F0\x05\xBE`\x02\u04E8\u04F0\x05\xC8e\x02\u04E9\u04F0\x05\xBC_\x02" +
		"\u04EA\u04F0\x05b2\x02\u04EB\u04F0\x05\xD8m\x02\u04EC\u04ED\x05\xD2j\x02" +
		"\u04ED\u04EE\x07<\x02\x02\u04EE\u04F0\x03\x02\x02\x02\u04EF\u04D4\x03" +
		"\x02\x02\x02\u04EF\u04D7\x03\x02\x02\x02\u04EF\u04DA\x03\x02\x02\x02\u04EF" +
		"\u04DD\x03\x02\x02\x02\u04EF\u04E0\x03\x02\x02\x02\u04EF\u04E1\x03\x02" +
		"\x02\x02\u04EF\u04E2\x03\x02\x02\x02\u04EF\u04E3\x03\x02\x02\x02\u04EF" +
		"\u04E4\x03\x02\x02\x02\u04EF\u04E7\x03\x02\x02\x02\u04EF\u04E8\x03\x02" +
		"\x02\x02\u04EF\u04E9\x03\x02\x02\x02\u04EF\u04EA\x03\x02\x02\x02\u04EF" +
		"\u04EB\x03\x02\x02\x02\u04EF\u04EC\x03\x02\x02\x02\u04F0\xDF\x03\x02\x02" +
		"\x02\u04F1\u04F2\x07 \x02\x02\u04F2\u04F3\x05\xE4s\x02\u04F3\xE1\x03\x02" +
		"\x02\x02\u04F4\u04F5\x07!\x02\x02\u04F5\u04F6\x07F\x02\x02\u04F6\u04F7" +
		"\x05\xE0q\x02\u04F7\u04F8\x07\"\x02\x02\u04F8\u04F9\x07F\x02\x02\u04F9" +
		"\u04FE\x05\f\x07\x02\u04FA\u04FB\x07=\x02\x02\u04FB\u04FD\x05\f\x07\x02" +
		"\u04FC\u04FA\x03\x02\x02\x02\u04FD\u0500\x03\x02\x02\x02\u04FE\u04FF\x03" +
		"\x02\x02\x02\u04FE\u04FC\x03\x02\x02\x02\u04FF\u0501\x03\x02\x02\x02\u0500" +
		"\u04FE\x03\x02\x02\x02\u0501\u0502\x07G\x02\x02\u0502\u0503\x05\xE4s\x02" +
		"\u0503\u0504\x07G\x02\x02\u0504\xE3\x03\x02\x02\x02\u0505\u0507\x07J\x02" +
		"\x02\u0506\u0508\x05\xDEp\x02\u0507\u0506\x03\x02\x02\x02\u0508\u0509" +
		"\x03\x02\x02\x02\u0509\u0507\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02" +
		"\u050A\u050B\x03\x02\x02\x02\u050B\u050C\x07K\x02\x02\u050C\xE5\x03\x02" +
		"\x02\x02\u050D\u050E\t\b\x02\x02\u050E\xE7\x03\x02\x02\x02\u050F\u0510" +
		"\x07^\x02\x02\u0510\u0514\x05\xE8u\x02\u0511\u0514\x05v<\x02\u0512\u0514" +
		"\x07d\x02\x02\u0513\u050F\x03\x02\x02\x02\u0513\u0511\x03\x02\x02\x02" +
		"\u0513\u0512\x03\x02\x02\x02\u0514\xE9\x03\x02\x02\x02\u0515\u0516\bv" +
		"\x01\x02\u0516\u0517\x07F\x02\x02\u0517\u0518\x05\xEAv\x02\u0518\u0519" +
		"\x07G\x02\x02\u0519\u051C\x03\x02\x02\x02\u051A\u051C\x05\xE8u\x02\u051B" +
		"\u0515\x03\x02\x02\x02\u051B\u051A\x03\x02\x02\x02\u051C\u0523\x03\x02" +
		"\x02\x02\u051D\u051E\f\x04\x02\x02\u051E\u051F\x05\xE6t\x02\u051F\u0520" +
		"\x05\xEAv\x05\u0520\u0522\x03\x02\x02\x02\u0521\u051D\x03\x02\x02\x02" +
		"\u0522\u0525\x03\x02\x02\x02\u0523\u0521\x03\x02\x02\x02\u0523\u0524\x03" +
		"\x02\x02\x02\u0524\xEB\x03\x02\x02\x02\u0525\u0523\x03\x02\x02\x02\u0526" +
		"\u0527\x05\f\x07\x02\u0527\u0528\x07F\x02\x02\u0528\u0529\x05\x9EP\x02" +
		"\u0529\u052A\x07G\x02\x02\u052A\xED\x03\x02\x02\x02\u052B\u052D\x05(\x15" +
		"\x02\u052C\u052B\x03\x02\x02\x02\u052D\u0530\x03\x02\x02\x02\u052E\u052C" +
		"\x03\x02\x02\x02\u052E\u052F\x03\x02\x02\x02\u052F\xEF\x03\x02\x02\x02" +
		"\u0530\u052E\x03\x02\x02\x02\u0531\u0532\x05\f\x07\x02\u0532\u0535\x05" +
		"\f\x07\x02\u0533\u0534\x07\x0E\x02\x02\u0534\u0536\x05\f\x07\x02\u0535" +
		"\u0533\x03\x02\x02\x02\u0535\u0536\x03\x02\x02\x02\u0536\u0538\x03\x02" +
		"\x02\x02\u0537\u0539\x05V,\x02\u0538\u0537\x03\x02\x02\x02\u0538\u0539" +
		"\x03\x02\x02\x02\u0539\u053D\x03\x02\x02\x02\u053A\u053C\x050\x19\x02" +
		"\u053B\u053A\x03\x02\x02\x02\u053C\u053F\x03\x02\x02\x02\u053D\u053B\x03" +
		"\x02\x02\x02\u053D\u053E\x03\x02\x02\x02\u053E\u0540\x03\x02\x02\x02\u053F" +
		"\u053D\x03\x02\x02\x02\u0540\u0541\x07<\x02\x02\u0541\xF1\x03\x02\x02" +
		"\x02\u0542\u0545\x07\x16\x02\x02\u0543\u0546\x05\x86D\x02\u0544\u0546" +
		"\x05(\x15\x02\u0545\u0543\x03\x02\x02\x02\u0545\u0544\x03\x02\x02\x02" +
		"\u0546\u0547\x03\x02\x02\x02\u0547\u0548\x07<\x02\x02\u0548\xF3\x03\x02" +
		"\x02\x02\u0549\u054B\x07H\x02\x02\u054A\u054C\x05V,\x02\u054B\u054A\x03" +
		"\x02\x02\x02\u054B\u054C\x03\x02\x02\x02\u054C\u0551\x03\x02\x02\x02\u054D" +
		"\u054E\x07=\x02\x02\u054E\u0550\x05V,\x02\u054F\u054D\x03\x02\x02\x02" +
		"\u0550\u0553\x03\x02\x02\x02\u0551\u054F\x03\x02\x02\x02\u0551\u0552\x03" +
		"\x02\x02\x02\u0552\u0554\x03\x02\x02\x02\u0553\u0551\x03\x02\x02\x02\u0554" +
		"\u0555\x07I\x02\x02\u0555\xF5\x03\x02\x02\x02\u0556\u0559\x05V,\x02\u0557" +
		"\u0558\x07=\x02\x02\u0558\u055A\x05V,\x02\u0559\u0557\x03\x02\x02\x02" +
		"\u055A\u055B\x03\x02\x02\x02\u055B\u0559\x03\x02\x02\x02\u055B\u055C\x03" +
		"\x02\x02\x02\u055C\xF7\x03\x02\x02\x02\u055D\u055F\x07J\x02\x02\u055E" +
		"\u0560\x05V,\x02\u055F\u055E\x03\x02\x02\x02\u055F\u0560\x03\x02\x02\x02" +
		"\u0560\u0565\x03\x02\x02\x02\u0561\u0562\x07=\x02\x02\u0562\u0564\x05" +
		"V,\x02\u0563\u0561\x03\x02\x02\x02\u0564\u0567\x03\x02\x02\x02\u0565\u0563" +
		"\x03\x02\x02\x02\u0565\u0566\x03\x02\x02\x02\u0566\u0568\x03\x02\x02\x02" +
		"\u0567\u0565\x03\x02\x02\x02\u0568\u0569\x07K\x02\x02\u0569\xF9\x03\x02" +
		"\x02\x02\u056A\u056E\x07Z\x02\x02\u056B\u056D\x05\xFA~\x02\u056C\u056B" +
		"\x03\x02\x02\x02\u056D\u0570\x03\x02\x02\x02\u056E\u056F\x03\x02\x02\x02" +
		"\u056E\u056C\x03\x02\x02\x02\u056F\u0571\x03\x02\x02\x02\u0570\u056E\x03" +
		"\x02\x02\x02\u0571\u0572\x07s\x02\x02\u0572\xFB\x03\x02\x02\x02\u0573" +
		"\u0574\x07\x17\x02\x02\u0574\u0578\x05\f\x07\x02\u0575\u0577\x050\x19" +
		"\x02\u0576\u0575\x03\x02\x02\x02\u0577\u057A\x03\x02\x02\x02\u0578\u0576" +
		"\x03\x02\x02\x02\u0578\u0579\x03\x02\x02\x02\u0579\u057B\x03\x02\x02\x02" +
		"\u057A\u0578\x03\x02\x02\x02\u057B\u057C\x07<\x02\x02\u057C\xFD\x03\x02" +
		"\x02\x02\u057D\u0580\x07\x17\x02\x02\u057E\u0581\x05\f\x07\x02\u057F\u0581" +
		"\x07\x0F\x02\x02\u0580\u057E\x03\x02\x02\x02\u0580\u057F\x03\x02\x02\x02" +
		"\u0581\u0587\x03\x02\x02\x02\u0582\u0586\x05&\x14\x02\u0583\u0586\x05" +
		"\x88E\x02\u0584\u0586\x05(\x15\x02\u0585\u0582\x03\x02\x02\x02\u0585\u0583" +
		"\x03\x02\x02\x02\u0585\u0584\x03\x02\x02\x02\u0586\u0589\x03\x02\x02\x02" +
		"\u0587\u0585\x03\x02\x02\x02\u0587\u0588\x03\x02\x02\x02\u0588\u058A\x03" +
		"\x02\x02\x02\u0589\u0587\x03\x02\x02\x02\u058A\u058B\x07<\x02\x02\u058B" +
		"\xFF\x03\x02\x02\x02\u058C\u058D\x078\x02\x02\u058D\u058F\x07J\x02\x02" +
		"\u058E\u0590\x05\u0102\x82\x02\u058F\u058E\x03\x02\x02\x02\u058F\u0590" +
		"\x03\x02\x02\x02\u0590\u0591\x03\x02\x02\x02\u0591\u0592\x07K\x02\x02" +
		"\u0592\u0101\x03\x02\x02\x02\u0593\u0595\x05\u0104\x83\x02\u0594\u0593" +
		"\x03\x02\x02\x02\u0595\u0596\x03\x02\x02\x02\u0596\u0594\x03\x02\x02\x02" +
		"\u0596\u0597\x03\x02\x02\x02\u0597\u0103\x03\x02\x02\x02\u0598\u0599\x07" +
		"9\x02\x02\u0599\u059A\x05\f\x07\x02\u059A\u059B\x07\x1C\x02\x02\u059B" +
		"\u059F\x07F\x02\x02\u059C\u05A0\x05\xA2R\x02\u059D\u05A0\x05\xD4k\x02" +
		"\u059E\u05A0\x05\xAEX\x02\u059F\u059C\x03\x02\x02\x02\u059F\u059D\x03" +
		"\x02\x02\x02\u059F\u059E\x03\x02\x02\x02\u05A0\u05A1\x03\x02\x02\x02\u05A1" +
		"\u059F\x03\x02\x02\x02\u05A1\u05A2\x03\x02\x02\x02\u05A2\u05A3\x03\x02" +
		"\x02\x02\u05A3\u05A4\x07G\x02\x02\u05A4\u05A6\x07\x1D\x02\x02\u05A5\u05A7" +
		"\x05\xDEp\x02\u05A6\u05A5\x03\x02\x02\x02\u05A7\u05A8\x03\x02\x02\x02" +
		"\u05A8\u05A6\x03\x02\x02\x02\u05A8\u05A9\x03\x02\x02\x02\u05A9\u05AD\x03" +
		"\x02\x02\x02\u05AA\u05AC\x050\x19\x02\u05AB\u05AA\x03\x02\x02\x02\u05AC" +
		"\u05AF\x03\x02\x02\x02\u05AD\u05AB\x03\x02\x02\x02\u05AD\u05AE\x03\x02" +
		"\x02\x02\u05AE\u05B0\x03\x02\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05B0" +
		"\u05B1\x07<\x02\x02\u05B1\u0105\x03\x02\x02\x02\u05B2\u05B3\x07J\x02\x02" +
		"\u05B3\u05B4\x07K\x02\x02\u05B4\u0107\x03\x02\x02\x02\x97\u010C\u0110" +
		"\u0115\u0119\u0126\u012C\u013A\u0142\u0147\u014D\u0156\u0162\u0167\u0169" +
		"\u016D\u0173\u017A\u0180\u0184\u0189\u0190\u0197\u019E\u01A3\u01A9\u01B1" +
		"\u01BF\u01C2\u01C5\u01CC\u01D4\u01DC\u01E4\u01E8\u01EF\u01F9\u0202\u0212" +
		"\u0215\u021F\u0226\u0234\u0241\u024A\u0251\u0256\u0265\u0269\u027A\u0282" +
		"\u0286\u0297\u02A0\u02A4\u02B3\u02BC\u02C0\u02C8\u02EB\u02F4\u030E\u0317" +
		"\u031A\u0324\u0328\u0330\u0339\u033E\u0347\u0350\u0353\u0356\u0359\u035E" +
		"\u0372\u037B\u0383\u038D\u0390\u0393\u039A\u03A0\u03A3\u03AB\u03AF\u03B1" +
		"\u03B5\u03BC\u03C1\u03C4\u03CC\u03D3\u03D7\u03DC\u03E1\u03ED\u03F4\u03FF" +
		"\u0415\u0419\u041E\u0428\u042D\u0436\u043B\u0447\u044C\u0455\u045A\u0465" +
		"\u046D\u0475\u047E\u0489\u048F\u0493\u04AA\u04AF\u04B5\u04BA\u04BE\u04C3" +
		"\u04EF\u04FE\u0509\u0513\u051B\u0523\u052E\u0535\u0538\u053D\u0545\u054B" +
		"\u0551\u055B\u055F\u0565\u056E\u0578\u0580\u0585\u0587\u058F\u0596\u059F" +
		"\u05A1\u05A8\u05AD";
>>>>>>> feat: force semicolon − WIP
<<<<<<< develop
>>>>>>> feat: force semicolon − WIP
=======
=======
		"\x05V,\x02\u0412\u0413\x05\xAEX\x02\u0413\u0414\x05V,\x02\u0414\u0418" +
		"\x03\x02\x02\x02\u0415\u0418\x05\xACW\x02\u0416\u0418\x05\xAAV\x02\u0417" +
		"\u0411\x03\x02\x02\x02\u0417\u0415\x03\x02\x02\x02\u0417\u0416\x03\x02" +
		"\x02\x02\u0418\xA9\x03\x02\x02\x02\u0419\u041A\t\x07\x02\x02\u041A\u041B" +
		"\x07K\x02\x02\u041B\u041C\x05\xD8m\x02\u041C\u041D\x07B\x02\x02\u041D" +
		"\u041E\x05\xA2R\x02\u041E\u041F\x07L\x02\x02\u041F\xAB\x03\x02\x02\x02" +
		"\u0420\u0421\x07<\x02\x02\u0421\u0422\x07K\x02\x02\u0422\u0423\x05\xD8" +
		"m\x02\u0423\u0424\x07L\x02\x02\u0424\u0425\x07\x1D\x02\x02\u0425\u0426" +
		"\x05\xA2R\x02\u0426\xAD\x03\x02\x02\x02\u0427\u0428\t\b\x02\x02\u0428" +
		"\xAF\x03\x02\x02\x02\u0429\u042A\x05\xB4[\x02\u042A\u042B\x07^\x02\x02" +
		"\u042B\u042C\x05V,\x02\u042C\xB1\x03\x02\x02\x02\u042D\u042E\x05\xB4[" +
		"\x02\u042E\u042F\x07]\x02\x02\u042F\u0430\x05V,\x02\u0430\xB3\x03\x02" +
		"\x02\x02\u0431\u0432\x05v<\x02\u0432\xB5\x03\x02\x02\x02\u0433\u0435\x05" +
		"\xB8]\x02\u0434\u0433\x03\x02\x02\x02\u0435\u0436\x03\x02\x02\x02\u0436" +
		"\u0434\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437\xB7\x03\x02\x02" +
		"\x02\u0438\u043B\x05\xA2R\x02\u0439\u043B\x05\xF0y\x02\u043A\u0438\x03" +
		"\x02\x02\x02\u043A\u0439\x03\x02\x02\x02\u043B\xB9\x03\x02\x02\x02\u043C" +
		"\u0440\x05\u010C\x87\x02\u043D\u0440\x05\xE8u\x02\u043E\u0440\x05\xE2" +
		"r\x02\u043F\u043C\x03\x02\x02\x02\u043F\u043D\x03\x02\x02\x02\u043F\u043E" +
		"\x03\x02\x02\x02\u0440\xBB\x03\x02\x02\x02\u0441\u0442\x07,\x02\x02\u0442" +
		"\u0443\x07K\x02\x02\u0443\u0444\x05V,\x02\u0444\u0445\x07L\x02\x02\u0445" +
		"\u0449\x07O\x02\x02\u0446\u0448\x05\xC6d\x02\u0447\u0446\x03\x02\x02\x02" +
		"\u0448\u044B\x03\x02\x02\x02\u0449\u0447\x03\x02\x02\x02\u0449\u044A\x03" +
		"\x02\x02\x02\u044A\u044E\x03\x02\x02\x02\u044B\u0449\x03\x02\x02\x02\u044C" +
		"\u044F\x05\xC4c\x02\u044D\u044F\x070\x02\x02\u044E\u044C\x03\x02\x02\x02" +
		"\u044E\u044D\x03\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F\u0450\x03" +
		"\x02\x02\x02\u0450\u0451\x07P\x02\x02\u0451\xBD\x03\x02\x02\x02\u0452" +
		"\u0453\x07,\x02\x02\u0453\u0457\x07O\x02\x02\u0454\u0456\x05\xC6d\x02" +
		"\u0455\u0454\x03\x02\x02\x02\u0456\u0459\x03\x02\x02\x02\u0457\u0455\x03" +
		"\x02\x02\x02\u0457\u0458\x03\x02\x02\x02\u0458\u045C\x03\x02\x02\x02\u0459" +
		"\u0457\x03\x02\x02\x02\u045A\u045D\x05\xC4c\x02\u045B\u045D\x070\x02\x02" +
		"\u045C\u045A\x03\x02\x02\x02\u045C\u045B\x03\x02\x02\x02\u045C\u045D\x03" +
		"\x02\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E\u045F\x07P\x02\x02\u045F" +
		"\xBF\x03\x02\x02\x02\u0460\u0461\x07+\x02\x02\u0461\u0462\x07K\x02\x02" +
		"\u0462\u0463\x05V,\x02\u0463\u0464\x07L\x02\x02\u0464\u0468\x07O\x02\x02" +
		"\u0465\u0467\x05\xC8e\x02\u0466\u0465\x03\x02\x02\x02\u0467\u046A\x03" +
		"\x02\x02\x02\u0468\u0466\x03\x02\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469" +
		"\u046D\x03\x02\x02\x02\u046A\u0468\x03\x02\x02\x02\u046B\u046E\x05\xCA" +
		"f\x02\u046C\u046E\x070\x02\x02\u046D\u046B\x03\x02\x02\x02\u046D\u046C" +
		"\x03\x02\x02\x02\u046D\u046E\x03\x02\x02\x02\u046E\u046F\x03\x02\x02\x02" +
		"\u046F\u0470\x07P\x02\x02\u0470\xC1\x03\x02\x02\x02\u0471\u0472\x07+\x02" +
		"\x02\u0472\u0476\x07O\x02\x02\u0473\u0475\x05\xC8e\x02\u0474\u0473\x03" +
		"\x02\x02\x02\u0475\u0478\x03\x02\x02\x02\u0476\u0474\x03\x02\x02\x02\u0476" +
		"\u0477\x03\x02\x02\x02\u0477\u047B\x03\x02\x02\x02\u0478\u0476\x03\x02" +
		"\x02\x02\u0479\u047C\x05\xCAf\x02\u047A\u047C\x070\x02\x02\u047B\u0479" +
		"\x03\x02\x02\x02\u047B\u047A\x03\x02\x02\x02\u047B\u047C\x03\x02\x02\x02" +
		"\u047C\u047D\x03\x02\x02\x02\u047D\u047E\x07P\x02\x02\u047E\xC3\x03\x02" +
		"\x02\x02\u047F\u0480\x07.\x02\x02\u0480\u0486\x07C\x02\x02\u0481\u0487" +
		"\x05V,\x02\u0482\u0483\x07O\x02\x02\u0483\u0484\x05V,\x02\u0484\u0485" +
		"\x07P\x02\x02\u0485\u0487\x03\x02\x02\x02\u0486\u0481\x03\x02\x02\x02" +
		"\u0486\u0482\x03\x02\x02\x02\u0487\xC5\x03\x02\x02\x02\u0488\u048E\x07" +
		"-\x02\x02\u0489\u048A\x07K\x02\x02\u048A\u048B\x05J&\x02\u048B\u048C\x07" +
		"L\x02\x02\u048C\u048F\x03\x02\x02\x02\u048D\u048F\x05J&\x02\u048E\u0489" +
		"\x03\x02\x02\x02\u048E\u048D\x03\x02\x02\x02\u048F\u0490\x03\x02\x02\x02" +
		"\u0490\u0496\x07C\x02\x02\u0491\u0497\x05V,\x02\u0492\u0493\x07O\x02\x02" +
		"\u0493\u0494\x05V,\x02\u0494\u0495\x07P\x02\x02\u0495\u0497\x03\x02\x02" +
		"\x02\u0496\u0491\x03\x02\x02\x02\u0496\u0492\x03\x02\x02\x02\u0497\xC7" +
		"\x03\x02\x02\x02\u0498\u049F\x07-\x02\x02\u0499\u04A0\x05\xFA~\x02\u049A" +
		"\u049B\x07K\x02\x02\u049B\u049C\x05J&\x02\u049C\u049D\x07L\x02\x02\u049D" +
		"\u04A0\x03\x02\x02\x02\u049E\u04A0\x05J&\x02\u049F\u0499\x03\x02\x02\x02" +
		"\u049F\u049A\x03\x02\x02\x02\u049F\u049E\x03\x02\x02\x02\u04A0\u04A1\x03" +
		"\x02\x02\x02\u04A1\u04A2\x07C\x02\x02\u04A2\u04A3\x05\xBA^\x02\u04A3\xC9" +
		"\x03\x02\x02\x02\u04A4\u04A5\x07.\x02\x02\u04A5\u04A6\x07C\x02\x02\u04A6" +
		"\u04A7\x05\xBA^\x02\u04A7\xCB\x03\x02\x02\x02\u04A8\u04AA\x071\x02\x02" +
		"\u04A9\u04AB\x07A\x02\x02\u04AA\u04A9\x03\x02\x02\x02\u04AA\u04AB\x03" +
		"\x02\x02\x02\u04AB\xCD\x03\x02\x02\x02\u04AC\u04B0\x05\xD4k\x02\u04AD" +
		"\u04AF\x05\xD2j\x02\u04AE\u04AD\x03\x02\x02\x02\u04AF\u04B2\x03\x02\x02" +
		"\x02\u04B0\u04AE\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04B4" +
		"\x03\x02\x02\x02\u04B2\u04B0\x03\x02\x02\x02\u04B3\u04B5\x05\xD0i\x02" +
		"\u04B4\u04B3\x03\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02\u04B5\xCF\x03" +
		"\x02\x02\x02\u04B6\u04B7\x07\x1E\x02\x02\u04B7\u04B8\x05\xBA^\x02\u04B8" +
		"\xD1\x03\x02\x02\x02\u04B9\u04BA\x07\x1E\x02\x02\u04BA\u04BB\x05\xD4k" +
		"\x02\u04BB\xD3\x03\x02\x02\x02\u04BC\u04BD\x07\x1C\x02\x02\u04BD\u04BE" +
		"\x07K\x02\x02\u04BE\u04BF\x05\xB8]\x02\u04BF\u04C0\x07L\x02\x02\u04C0" +
		"\u04C1\x05\xBA^\x02\u04C1\xD5\x03\x02\x02\x02\u04C2\u04C3\x07;\x02\x02" +
		"\u04C3\u04C4\x07K\x02\x02\u04C4\u04C5\x05\f\x07\x02\u04C5\u04C6\x07B\x02" +
		"\x02\u04C6\u04C7\x05\xE8u\x02\u04C7\u04C8\x07L\x02\x02\u04C8\xD7\x03\x02" +
		"\x02\x02\u04C9\u04CC\x05j6\x02\u04CA\u04CC\x05\f\x07\x02\u04CB\u04C9\x03" +
		"\x02\x02\x02\u04CB\u04CA\x03\x02\x02\x02\u04CC\u04CD\x03\x02\x02\x02\u04CD" +
		"\u04D0\x07%\x02\x02\u04CE\u04D1\x05V,\x02\u04CF\u04D1\x07\x0F\x02\x02" +
		"\u04D0\u04CE\x03\x02\x02\x02\u04D0\u04CF\x03\x02\x02\x02\u04D1\xD9\x03" +
		"\x02\x02\x02\u04D2\u04D3\x07$\x02\x02\u04D3\u04D6\x07K\x02\x02\u04D4\u04D7" +
		"\x05\xA2R\x02\u04D5\u04D7\x05\xD8m\x02\u04D6\u04D4\x03\x02\x02\x02\u04D6" +
		"\u04D5\x03\x02\x02\x02\u04D7\u04E2\x03\x02\x02\x02\u04D8\u04DA\x07B\x02" +
		"\x02\u04D9\u04D8\x03\x02\x02\x02\u04D9\u04DA\x03\x02\x02\x02\u04DA\u04DB" +
		"\x03\x02\x02\x02\u04DB\u04E1\x05\xD8m\x02\u04DC\u04DE\x07B\x02\x02\u04DD" +
		"\u04DC\x03\x02\x02\x02\u04DD\u04DE\x03\x02\x02\x02\u04DE\u04DF\x03\x02" +
		"\x02\x02\u04DF\u04E1\x05\xA2R\x02\u04E0\u04D9\x03\x02\x02\x02\u04E0\u04DD" +
		"\x03\x02\x02\x02\u04E1\u04E4\x03\x02\x02\x02\u04E2\u04E0\x03\x02\x02\x02" +
		"\u04E2\u04E3\x03\x02\x02\x02\u04E3\u04E5\x03\x02\x02\x02\u04E4\u04E2\x03" +
		"\x02\x02\x02\u04E5\u04E6\x07L\x02\x02\u04E6\u04E7\x05\xBA^\x02\u04E7\xDB" +
		"\x03\x02\x02\x02\u04E8\u04E9\x073\x02\x02\u04E9\u04EA\x07K\x02\x02\u04EA" +
		"\u04EB\x05\xB8]\x02\u04EB\u04EC\x07L\x02\x02\u04EC\u04ED\x05\xBA^\x02" +
		"\u04ED\xDD\x03\x02\x02\x02\u04EE\u04EF\x07\'\x02\x02\u04EF\u04F0\x05V" +
		",\x02\u04F0\xDF\x03\x02\x02\x02\u04F1\u04F2\x05v<\x02\u04F2\xE1\x03\x02" +
		"\x02\x02\u04F3\u04F4\x05\xB0Y\x02\u04F4\u04F5\x07A\x02\x02\u04F5\u050F" +
		"\x03\x02\x02\x02\u04F6\u04F7\x05\xB2Z\x02\u04F7\u04F8\x07A\x02\x02\u04F8" +
		"\u050F\x03\x02\x02\x02\u04F9\u04FA\x05\xDEp\x02\u04FA\u04FB\x07A\x02\x02" +
		"\u04FB\u050F\x03\x02\x02\x02\u04FC\u04FD\x05\xE0q\x02\u04FD\u04FE\x07" +
		"A\x02\x02\u04FE\u050F\x03\x02\x02\x02\u04FF\u050F\x05`1\x02\u0500\u050F" +
		"\x05^0\x02\u0501\u050F\x05\xDAn\x02\u0502\u050F\x05\xCEh\x02\u0503\u0504" +
		"\x05\xE6t\x02\u0504\u0505\x07A\x02\x02\u0505\u050F\x03\x02\x02\x02\u0506" +
		"\u050F\x05\xC2b\x02\u0507\u050F\x05\xCCg\x02\u0508\u050F\x05\xC0a\x02" +
		"\u0509\u050F\x05b2\x02\u050A\u050F\x05\xDCo\x02\u050B\u050C\x05\xD6l\x02" +
		"\u050C\u050D\x07A\x02\x02\u050D\u050F\x03\x02\x02\x02\u050E\u04F3\x03" +
		"\x02\x02\x02\u050E\u04F6\x03\x02\x02\x02\u050E\u04F9\x03\x02\x02\x02\u050E" +
		"\u04FC\x03\x02\x02\x02\u050E\u04FF\x03\x02\x02\x02\u050E\u0500\x03\x02" +
		"\x02\x02\u050E\u0501\x03\x02\x02\x02\u050E\u0502\x03\x02\x02\x02\u050E" +
		"\u0503\x03\x02\x02\x02\u050E\u0506\x03\x02\x02\x02\u050E\u0507\x03\x02" +
		"\x02\x02\u050E\u0508\x03\x02\x02\x02\u050E\u0509\x03\x02\x02\x02\u050E" +
		"\u050A\x03\x02\x02\x02\u050E\u050B\x03\x02\x02\x02\u050F\xE3\x03\x02\x02" +
		"\x02\u0510\u0511\x07 \x02\x02\u0511\u0512\x05\xE8u\x02\u0512\xE5\x03\x02" +
		"\x02\x02\u0513\u0514\x07!\x02\x02\u0514\u0515\x07K\x02\x02\u0515\u0516" +
		"\x05\xE4s\x02\u0516\u0517\x07\"\x02\x02\u0517\u0518\x07K\x02\x02\u0518" +
		"\u051D\x05\f\x07\x02\u0519\u051A\x07B\x02\x02\u051A\u051C\x05\f\x07\x02" +
		"\u051B\u0519\x03\x02\x02\x02\u051C\u051F\x03\x02\x02\x02\u051D\u051E\x03" +
		"\x02\x02\x02\u051D\u051B\x03\x02\x02\x02\u051E\u0520\x03\x02\x02\x02\u051F" +
		"\u051D\x03\x02\x02\x02\u0520\u0521\x07L\x02\x02\u0521\u0522\x05\xE8u\x02" +
		"\u0522\u0523\x07L\x02\x02\u0523\xE7\x03\x02\x02\x02\u0524\u0526\x07O\x02" +
		"\x02\u0525\u0527\x05\xE2r\x02\u0526\u0525\x03\x02\x02\x02\u0527\u0528" +
		"\x03\x02\x02\x02\u0528\u0526\x03\x02\x02\x02\u0528\u0529\x03\x02\x02\x02" +
		"\u0529\u052A\x03\x02\x02\x02\u052A\u052B\x07P\x02\x02\u052B\xE9\x03\x02" +
		"\x02\x02\u052C\u052D\t\t\x02\x02\u052D\xEB\x03\x02\x02\x02\u052E\u052F" +
		"\x07c\x02\x02\u052F\u0533\x05\xECw\x02\u0530\u0533\x05v<\x02\u0531\u0533" +
		"\x07i\x02\x02\u0532\u052E\x03\x02\x02\x02\u0532\u0530\x03\x02\x02\x02" +
		"\u0532\u0531\x03\x02\x02\x02\u0533\xED\x03\x02\x02\x02\u0534\u0535\bx" +
		"\x01\x02\u0535\u0536\x07K\x02\x02\u0536\u0537\x05\xEEx\x02\u0537\u0538" +
		"\x07L\x02\x02\u0538\u053B\x03\x02\x02\x02\u0539\u053B\x05\xECw\x02\u053A" +
		"\u0534\x03\x02\x02\x02\u053A\u0539\x03\x02\x02\x02\u053B\u0542\x03\x02" +
		"\x02\x02\u053C\u053D\f\x04\x02\x02\u053D\u053E\x05\xEAv\x02\u053E\u053F" +
		"\x05\xEEx\x05\u053F\u0541\x03\x02\x02\x02\u0540\u053C\x03\x02\x02\x02" +
		"\u0541\u0544\x03\x02\x02\x02\u0542\u0540\x03\x02\x02\x02\u0542\u0543\x03" +
		"\x02\x02\x02\u0543\xEF\x03\x02\x02\x02\u0544\u0542\x03\x02\x02\x02\u0545" +
		"\u0546\x05\f\x07\x02\u0546\u0547\x07K\x02\x02\u0547\u0548\x05\x9EP\x02" +
		"\u0548\u0549\x07L\x02\x02\u0549\xF1\x03\x02\x02\x02\u054A\u054C\x05(\x15" +
		"\x02\u054B\u054A\x03\x02\x02\x02\u054C\u054F\x03\x02\x02\x02\u054D\u054B" +
		"\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E\xF3\x03\x02\x02\x02" +
		"\u054F\u054D\x03\x02\x02\x02\u0550\u0563\x05\u010E\x88\x02\u0551\u0552" +
		"\x05\f\x07\x02\u0552\u0555\x05\f\x07\x02\u0553\u0554\x07\x0E\x02\x02\u0554" +
		"\u0556\x05\f\x07\x02\u0555\u0553\x03\x02\x02\x02\u0555\u0556\x03\x02\x02" +
		"\x02\u0556\u0558\x03\x02\x02\x02\u0557\u0559\x05V,\x02\u0558\u0557\x03" +
		"\x02\x02\x02\u0558\u0559\x03\x02\x02\x02\u0559\u055D\x03\x02\x02\x02\u055A" +
		"\u055C\x050\x19\x02\u055B\u055A\x03\x02\x02\x02\u055C\u055F\x03\x02\x02" +
		"\x02\u055D\u055B\x03\x02\x02\x02\u055D\u055E\x03\x02\x02\x02\u055E\u0560" +
		"\x03\x02\x02\x02\u055F\u055D\x03\x02\x02\x02\u0560\u0561\x07A\x02\x02" +
		"\u0561\u0563\x03\x02\x02\x02\u0562\u0550\x03\x02\x02\x02\u0562\u0551\x03" +
		"\x02\x02\x02\u0563\xF5\x03\x02\x02\x02\u0564\u0567\x07\x16\x02\x02\u0565" +
		"\u0568\x05\x86D\x02\u0566\u0568\x05(\x15\x02\u0567\u0565\x03\x02\x02\x02" +
		"\u0567\u0566\x03\x02\x02\x02\u0568\u0569\x03\x02\x02\x02\u0569\u056A\x07" +
		"A\x02\x02\u056A\xF7\x03\x02\x02\x02\u056B\u056D\x07M\x02\x02\u056C\u056E" +
		"\x05V,\x02\u056D\u056C\x03\x02\x02\x02\u056D\u056E\x03\x02\x02\x02\u056E" +
		"\u0573\x03\x02\x02\x02\u056F\u0570\x07B\x02\x02\u0570\u0572\x05V,\x02" +
		"\u0571\u056F\x03\x02\x02\x02\u0572\u0575\x03\x02\x02\x02\u0573\u0571\x03" +
		"\x02\x02\x02\u0573\u0574\x03\x02\x02\x02\u0574\u0576\x03\x02\x02\x02\u0575" +
		"\u0573\x03\x02\x02\x02\u0576\u0577\x07N\x02\x02\u0577\xF9\x03\x02\x02" +
		"\x02\u0578\u057B\x05V,\x02\u0579\u057A\x07B\x02\x02\u057A\u057C\x05V," +
		"\x02\u057B\u0579\x03\x02\x02\x02\u057C\u057D\x03\x02\x02\x02\u057D\u057B" +
		"\x03\x02\x02\x02\u057D\u057E\x03\x02\x02\x02\u057E\xFB\x03\x02\x02\x02" +
		"\u057F\u0581\x07O\x02\x02\u0580\u0582\x05V,\x02\u0581\u0580\x03\x02\x02" +
		"\x02\u0581\u0582\x03\x02\x02\x02\u0582\u0587\x03\x02\x02\x02\u0583\u0584" +
		"\x07B\x02\x02\u0584\u0586\x05V,\x02\u0585\u0583\x03\x02\x02\x02\u0586" +
		"\u0589\x03\x02\x02\x02\u0587\u0585\x03\x02\x02\x02\u0587\u0588\x03\x02" +
		"\x02\x02\u0588\u058A\x03\x02\x02\x02\u0589\u0587\x03\x02\x02\x02\u058A" +
		"\u058B\x07P\x02\x02\u058B\xFD\x03\x02\x02\x02\u058C\u0590\x07_\x02\x02" +
		"\u058D\u058F\x05\xFE\x80\x02\u058E\u058D\x03\x02\x02\x02\u058F\u0592\x03" +
		"\x02\x02\x02\u0590\u0591\x03\x02\x02\x02\u0590\u058E\x03\x02\x02\x02\u0591" +
		"\u0593\x03\x02\x02\x02\u0592\u0590\x03\x02\x02\x02\u0593\u0594\x07y\x02" +
		"\x02\u0594\xFF\x03\x02\x02\x02\u0595\u0596\x07\x17\x02\x02\u0596\u059A" +
		"\x05\f\x07\x02\u0597\u0599\x050\x19\x02\u0598\u0597\x03\x02\x02\x02\u0599" +
		"\u059C\x03\x02\x02\x02\u059A\u0598\x03\x02\x02\x02\u059A\u059B\x03\x02" +
		"\x02\x02\u059B\u059D\x03\x02\x02\x02\u059C\u059A\x03\x02\x02\x02\u059D" +
		"\u059E\x07A\x02\x02\u059E\u0101\x03\x02\x02\x02\u059F\u05A2\x07\x17\x02" +
		"\x02\u05A0\u05A3\x05\f\x07\x02\u05A1\u05A3\x07\x0F\x02\x02\u05A2\u05A0" +
		"\x03\x02\x02\x02\u05A2\u05A1\x03\x02\x02\x02\u05A3\u05AA\x03\x02\x02\x02" +
		"\u05A4\u05A9\x05\u0104\x83\x02\u05A5\u05A9\x05&\x14\x02\u05A6\u05A9\x05" +
		"\x88E\x02\u05A7\u05A9\x05(\x15\x02\u05A8\u05A4\x03\x02\x02\x02\u05A8\u05A5" +
		"\x03\x02\x02\x02\u05A8\u05A6\x03\x02\x02\x02\u05A8\u05A7\x03\x02\x02\x02" +
		"\u05A9\u05AC\x03\x02\x02\x02\u05AA\u05A8\x03\x02\x02\x02\u05AA\u05AB\x03" +
		"\x02\x02\x02\u05AB\u05AD\x03\x02\x02\x02\u05AC\u05AA\x03\x02\x02\x02\u05AD" +
		"\u05AE\x07A\x02\x02\u05AE\u0103\x03\x02\x02\x02\u05AF\u05B0\x07@\x02\x02" +
		"\u05B0\u05B1\x05\f\x07\x02\u05B1\u05B2\x05\x80A\x02\u05B2\u05B3\x07\x0F" +
		"\x02\x02\u05B3\u05B4\x07\x19\x02\x02\u05B4\u05B5\x05\f\x07\x02\u05B5\u0105" +
		"\x03\x02\x02\x02\u05B6\u05B7\x078\x02\x02\u05B7\u05B9\x07O\x02\x02\u05B8" +
		"\u05BA\x05\u0108\x85\x02\u05B9\u05B8\x03\x02\x02\x02\u05B9\u05BA\x03\x02" +
		"\x02\x02\u05BA\u05BB\x03\x02\x02\x02\u05BB\u05BC\x07P\x02\x02\u05BC\u0107" +
		"\x03\x02\x02\x02\u05BD\u05BF\x05\u010A\x86\x02\u05BE\u05BD\x03\x02\x02" +
		"\x02\u05BF\u05C0\x03\x02\x02\x02\u05C0\u05BE\x03\x02\x02\x02\u05C0\u05C1" +
		"\x03\x02\x02\x02\u05C1\u0109\x03\x02\x02\x02\u05C2\u05C3\x079\x02\x02" +
		"\u05C3\u05C4\x05\f\x07\x02\u05C4\u05C5\x07\x1C\x02\x02\u05C5\u05C9\x07" +
		"K\x02\x02\u05C6\u05CA\x05\xA2R\x02\u05C7\u05CA\x05\xD8m\x02\u05C8\u05CA" +
		"\x05\xB2Z\x02\u05C9\u05C6\x03\x02\x02\x02\u05C9\u05C7\x03\x02\x02\x02" +
		"\u05C9\u05C8\x03\x02\x02\x02\u05CA\u05CB\x03\x02\x02\x02\u05CB\u05C9\x03" +
		"\x02\x02\x02\u05CB\u05CC\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02\u05CD" +
		"\u05CE\x07L\x02\x02\u05CE\u05D0\x07\x1D\x02\x02\u05CF\u05D1\x05\xE2r\x02" +
		"\u05D0\u05CF\x03\x02\x02\x02\u05D1\u05D2\x03\x02\x02\x02\u05D2\u05D0\x03" +
		"\x02\x02\x02\u05D2\u05D3\x03\x02\x02\x02\u05D3\u05D7\x03\x02\x02\x02\u05D4" +
		"\u05D6\x050\x19\x02\u05D5\u05D4\x03\x02\x02\x02\u05D6\u05D9\x03\x02\x02" +
		"\x02\u05D7\u05D5\x03\x02\x02\x02\u05D7\u05D8\x03\x02\x02\x02\u05D8\u05DA" +
		"\x03\x02\x02\x02\u05D9\u05D7\x03\x02\x02\x02\u05DA\u05DB\x07A\x02\x02" +
		"\u05DB\u010B\x03\x02\x02\x02\u05DC\u05DD\x07O\x02\x02\u05DD\u05DE\x07" +
		"P\x02\x02\u05DE\u010D\x03\x02\x02\x02\u05DF\u05E0\x07=\x02\x02\u05E0\u05E1" +
		"\x05\f\x07\x02\u05E1\u05E2\x05\xA2R\x02\u05E2\u05E3\x07A\x02\x02\u05E3" +
		"\u010F\x03\x02\x02\x02\x9B\u0114\u0118\u011D\u0121\u012E\u0134\u0142\u014A" +
		"\u014F\u0155\u015E\u016A\u016F\u0171\u0175\u017B\u0182\u0188\u018C\u0191" +
		"\u0198\u019F\u01A6\u01AB\u01B1\u01B9\u01C7\u01CA\u01CD\u01D4\u01DC\u01E4" +
		"\u01EC\u01F0\u01F7\u0201\u020A\u021A\u021D\u0227\u022E\u023C\u024A\u0253" +
		"\u025A\u025F\u026E\u0272\u0283\u028B\u028F\u02A0\u02A9\u02AD\u02BC\u02C5" +
		"\u02C9\u02D1\u02F4\u02FD\u0303\u031D\u0326\u0329\u0333\u0337\u033F\u0348" +
		"\u034D\u0356\u035F\u0362\u0365\u0368\u036D\u0381\u038A\u0392\u039C\u039F" +
		"\u03A2\u03A9\u03AF\u03B2\u03BA\u03BE\u03C0\u03C4\u03CB\u03D0\u03D3\u03DB" +
		"\u03E2\u03E6\u03EB\u03F0\u03FC\u0403\u040E\u0417\u0436\u043A\u043F\u0449" +
		"\u044E\u0457\u045C\u0468\u046D\u0476\u047B\u0486\u048E\u0496\u049F\u04AA" +
		"\u04B0\u04B4\u04CB\u04D0\u04D6\u04D9\u04DD\u04E0\u04E2\u050E\u051D\u0528" +
		"\u0532\u053A\u0542\u054D\u0555\u0558\u055D\u0562\u0567\u056D\u0573\u057D" +
		"\u0581\u0587\u0590\u059A\u05A2\u05A8\u05AA\u05B9\u05C0\u05C9\u05CB\u05D2" +
		"\u05D7";
>>>>>>> feat: whatever; conditions; exists; instanciation var
>>>>>>> feat: whatever; conditions; exists; instanciation var
	public static readonly _serializedATN: string = Utils.join(
		[
			YmlParser._serializedATNSegment0,
			YmlParser._serializedATNSegment1,
			YmlParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!YmlParser.__ATN) {
			YmlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(YmlParser._serializedATN));
		}

		return YmlParser.__ATN;
	}

}

export class DeclarationFileContext extends ParserRuleContext {
	public FILETYPE(): TerminalNode { return this.getToken(YmlParser.FILETYPE, 0); }
	public FILE_DECLARATION(): TerminalNode[];
	public FILE_DECLARATION(i: number): TerminalNode;
	public FILE_DECLARATION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.FILE_DECLARATION);
		} else {
			return this.getToken(YmlParser.FILE_DECLARATION, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(YmlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_declarationFile; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterDeclarationFile) {
			listener.enterDeclarationFile(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitDeclarationFile) {
			listener.exitDeclarationFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitDeclarationFile) {
			return visitor.visitDeclarationFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KaoFileContext extends ParserRuleContext {
	public _entities: YmlEntityContext;
	public EOF(): TerminalNode { return this.getToken(YmlParser.EOF, 0); }
	public declarationFile(): DeclarationFileContext | undefined {
		return this.tryGetRuleContext(0, DeclarationFileContext);
	}
	public ymlEntity(): YmlEntityContext[];
	public ymlEntity(i: number): YmlEntityContext;
	public ymlEntity(i?: number): YmlEntityContext | YmlEntityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlEntityContext);
		} else {
			return this.getRuleContext(i, YmlEntityContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_kaoFile; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterKaoFile) {
			listener.enterKaoFile(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitKaoFile) {
			listener.exitKaoFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitKaoFile) {
			return visitor.visitKaoFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YmlEntityContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public staticDeclaration(): StaticDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticDeclarationContext);
	}
	public classComplete(): ClassCompleteContext | undefined {
		return this.tryGetRuleContext(0, ClassCompleteContext);
	}
	public objectComplete(): ObjectCompleteContext | undefined {
		return this.tryGetRuleContext(0, ObjectCompleteContext);
	}
	public ymlrule(): YmlruleContext | undefined {
		return this.tryGetRuleContext(0, YmlruleContext);
	}
	public yenum(): YenumContext | undefined {
		return this.tryGetRuleContext(0, YenumContext);
	}
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	public externDeclaration(): ExternDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ExternDeclarationContext);
	}
	public instruction_rename(): Instruction_renameContext | undefined {
		return this.tryGetRuleContext(0, Instruction_renameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_ymlEntity; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterYmlEntity) {
			listener.enterYmlEntity(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitYmlEntity) {
			listener.exitYmlEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitYmlEntity) {
			return visitor.visitYmlEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionMarkerContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.DOT);
		} else {
			return this.getToken(YmlParser.DOT, i);
		}
	}
	public MULTIVALUED_EXPRESSION(): TerminalNode | undefined { return this.tryGetToken(YmlParser.MULTIVALUED_EXPRESSION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_expressionMarker; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterExpressionMarker) {
			listener.enterExpressionMarker(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitExpressionMarker) {
			listener.exitExpressionMarker(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitExpressionMarker) {
			return visitor.visitExpressionMarker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_renameContext extends ParserRuleContext {
	public RENAME(): TerminalNode { return this.getToken(YmlParser.RENAME, 0); }
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(YmlParser.TO, 0); }
	public FOR_CLASS(): TerminalNode { return this.getToken(YmlParser.FOR_CLASS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_rename; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_rename) {
			listener.enterInstruction_rename(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_rename) {
			listener.exitInstruction_rename(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_rename) {
			return visitor.visitInstruction_rename(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YmlIdContext extends ParserRuleContext {
	public ARGS(): TerminalNode | undefined { return this.tryGetToken(YmlParser.ARGS, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(YmlParser.LOCAL, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(YmlParser.RETURN, 0); }
	public FUNCTION_AS_TYPE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.FUNCTION_AS_TYPE, 0); }
	public TEXT_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(YmlParser.TEXT_FUNCTION, 0); }
	public IMPLEMENTATION(): TerminalNode | undefined { return this.tryGetToken(YmlParser.IMPLEMENTATION, 0); }
	public OPERATION_APPLY_COLLECTION_ON(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPERATION_APPLY_COLLECTION_ON, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.CASE, 0); }
	public RENAME(): TerminalNode | undefined { return this.tryGetToken(YmlParser.RENAME, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(YmlParser.TO, 0); }
	public FOR_CLASS(): TerminalNode | undefined { return this.tryGetToken(YmlParser.FOR_CLASS, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(YmlParser.MOD, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(YmlParser.AS, 0); }
	public YMLID(): TerminalNode | undefined { return this.tryGetToken(YmlParser.YMLID, 0); }
	public RULESET(): TerminalNode | undefined { return this.tryGetToken(YmlParser.RULESET, 0); }
	public RULE_TYPE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.RULE_TYPE, 0); }
	public ATTRIBUTES(): TerminalNode | undefined { return this.tryGetToken(YmlParser.ATTRIBUTES, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(YmlParser.EXTENDS, 0); }
	public TIME_COUNTER(): TerminalNode | undefined { return this.tryGetToken(YmlParser.TIME_COUNTER, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(YmlParser.STATIC, 0); }
	public CONDITION(): TerminalNode | undefined { return this.tryGetToken(YmlParser.CONDITION, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(YmlParser.EXISTS, 0); }
	public NO_EXISTS(): TerminalNode | undefined { return this.tryGetToken(YmlParser.NO_EXISTS, 0); }
	public MODIFY(): TerminalNode | undefined { return this.tryGetToken(YmlParser.MODIFY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_ymlId; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterYmlId) {
			listener.enterYmlId(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitYmlId) {
			listener.exitYmlId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitYmlId) {
			return visitor.visitYmlId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YenumContext extends ParserRuleContext {
	public _yid: YmlIdContext;
	public _fields: FieldContext;
	public ENUM(): TerminalNode { return this.getToken(YmlParser.ENUM, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(YmlParser.SEMICOLON, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public enum_attributes_block(): Enum_attributes_blockContext | undefined {
		return this.tryGetRuleContext(0, Enum_attributes_blockContext);
	}
	public enumElement(): EnumElementContext[];
	public enumElement(i: number): EnumElementContext;
	public enumElement(i?: number): EnumElementContext | EnumElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumElementContext);
		} else {
			return this.getRuleContext(i, EnumElementContext);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_yenum; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterYenum) {
			listener.enterYenum(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitYenum) {
			listener.exitYenum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitYenum) {
			return visitor.visitYenum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumElementContext extends ParserRuleContext {
	public _yid: YmlIdContext;
	public _fields: FieldContext;
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_enumElement; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterEnumElement) {
			listener.enterEnumElement(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitEnumElement) {
			listener.exitEnumElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitEnumElement) {
			return visitor.visitEnumElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_attributes_blockContext extends ParserRuleContext {
	public ATTRIBUTES(): TerminalNode { return this.getToken(YmlParser.ATTRIBUTES, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public variableBlockContent(): VariableBlockContentContext {
		return this.getRuleContext(0, VariableBlockContentContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_enum_attributes_block; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterEnum_attributes_block) {
			listener.enterEnum_attributes_block(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitEnum_attributes_block) {
			listener.exitEnum_attributes_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitEnum_attributes_block) {
			return visitor.visitEnum_attributes_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public classDeclarationIntro(): ClassDeclarationIntroContext {
		return this.getRuleContext(0, ClassDeclarationIntroContext);
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.SEMICOLON);
		} else {
			return this.getToken(YmlParser.SEMICOLON, i);
		}
	}
	public classImplementation(): ClassImplementationContext {
		return this.getRuleContext(0, ClassImplementationContext);
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public classAttributeDeclaration(): ClassAttributeDeclarationContext[];
	public classAttributeDeclaration(i: number): ClassAttributeDeclarationContext;
	public classAttributeDeclaration(i?: number): ClassAttributeDeclarationContext | ClassAttributeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassAttributeDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassAttributeDeclarationContext);
		}
	}
	public methodDeclaration(): MethodDeclarationContext[];
	public methodDeclaration(i: number): MethodDeclarationContext;
	public methodDeclaration(i?: number): MethodDeclarationContext | MethodDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodDeclarationContext);
		} else {
			return this.getRuleContext(i, MethodDeclarationContext);
		}
	}
	public classPropertiesBlock(): ClassPropertiesBlockContext | undefined {
		return this.tryGetRuleContext(0, ClassPropertiesBlockContext);
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(YmlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassImplementationContext extends ParserRuleContext {
	public _className: YmlIdContext;
	public _overrideBlock: OverrideContext;
	public _attributes: FieldContext;
	public IMPLEMENTATION(): TerminalNode { return this.getToken(YmlParser.IMPLEMENTATION, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public attributeImplementation(): AttributeImplementationContext[];
	public attributeImplementation(i: number): AttributeImplementationContext;
	public attributeImplementation(i?: number): AttributeImplementationContext | AttributeImplementationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeImplementationContext);
		} else {
			return this.getRuleContext(i, AttributeImplementationContext);
		}
	}
	public overrideInstruction(): OverrideInstructionContext[];
	public overrideInstruction(i: number): OverrideInstructionContext;
	public overrideInstruction(i?: number): OverrideInstructionContext | OverrideInstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideInstructionContext);
		} else {
			return this.getRuleContext(i, OverrideInstructionContext);
		}
	}
	public override(): OverrideContext | undefined {
		return this.tryGetRuleContext(0, OverrideContext);
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_classImplementation; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterClassImplementation) {
			listener.enterClassImplementation(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitClassImplementation) {
			listener.exitClassImplementation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitClassImplementation) {
			return visitor.visitClassImplementation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeImplementationContext extends ParserRuleContext {
	public _attrName: YmlIdContext;
	public _attributes: FieldContext;
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_attributeImplementation; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterAttributeImplementation) {
			listener.enterAttributeImplementation(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitAttributeImplementation) {
			listener.exitAttributeImplementation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitAttributeImplementation) {
			return visitor.visitAttributeImplementation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideContext extends ParserRuleContext {
	public OVERRIDE(): TerminalNode { return this.getToken(YmlParser.OVERRIDE, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	public overrideInstruction(): OverrideInstructionContext[];
	public overrideInstruction(i: number): OverrideInstructionContext;
	public overrideInstruction(i?: number): OverrideInstructionContext | OverrideInstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideInstructionContext);
		} else {
			return this.getRuleContext(i, OverrideInstructionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_override; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterOverride) {
			listener.enterOverride(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitOverride) {
			listener.exitOverride(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitOverride) {
			return visitor.visitOverride(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideInstructionContext extends ParserRuleContext {
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(YmlParser.FUNCTION, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_overrideInstruction; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterOverrideInstruction) {
			listener.enterOverrideInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitOverrideInstruction) {
			listener.exitOverrideInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitOverrideInstruction) {
			return visitor.visitOverrideInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationIntroContext extends ParserRuleContext {
	public _className: YmlIdContext;
	public INTERFACE(): TerminalNode { return this.getToken(YmlParser.INTERFACE, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public extendsBlock(): ExtendsBlockContext | undefined {
		return this.tryGetRuleContext(0, ExtendsBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_classDeclarationIntro; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterClassDeclarationIntro) {
			listener.enterClassDeclarationIntro(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitClassDeclarationIntro) {
			listener.exitClassDeclarationIntro(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitClassDeclarationIntro) {
			return visitor.visitClassDeclarationIntro(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtendsBlockContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(YmlParser.EXTENDS, 0); }
	public parentClassName(): ParentClassNameContext[];
	public parentClassName(i: number): ParentClassNameContext;
	public parentClassName(i?: number): ParentClassNameContext | ParentClassNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParentClassNameContext);
		} else {
			return this.getRuleContext(i, ParentClassNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_extendsBlock; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterExtendsBlock) {
			listener.enterExtendsBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitExtendsBlock) {
			listener.exitExtendsBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitExtendsBlock) {
			return visitor.visitExtendsBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParentClassNameContext extends ParserRuleContext {
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_parentClassName; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterParentClassName) {
			listener.enterParentClassName(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitParentClassName) {
			listener.exitParentClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitParentClassName) {
			return visitor.visitParentClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SynonymContext extends ParserRuleContext {
	public _value: ValueContext;
	public _synonymElements: ValueContext[] = [];
	public SYNONYM(): TerminalNode { return this.getToken(YmlParser.SYNONYM, 0); }
	public constList(): ConstListContext | undefined {
		return this.tryGetRuleContext(0, ConstListContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.CLOSE_PAR, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_synonym; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterSynonym) {
			listener.enterSynonym(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitSynonym) {
			listener.exitSynonym(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitSynonym) {
			return visitor.visitSynonym(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassAttributeDeclarationContext extends ParserRuleContext {
	public _memberName: YmlIdContext;
	public _memberOption: FieldContext;
	public FIELD(): TerminalNode { return this.getToken(YmlParser.FIELD, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_classAttributeDeclaration; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterClassAttributeDeclaration) {
			listener.enterClassAttributeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitClassAttributeDeclaration) {
			listener.exitClassAttributeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitClassAttributeDeclaration) {
			return visitor.visitClassAttributeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberDeclarationContext extends ParserRuleContext {
	public _type: MemberTypeContext;
	public _memberName: YmlIdContext;
	public _memberOption: FieldContext;
	public memberType(): MemberTypeContext {
		return this.getRuleContext(0, MemberTypeContext);
	}
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_memberDeclaration; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterMemberDeclaration) {
			listener.enterMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitMemberDeclaration) {
			listener.exitMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitMemberDeclaration) {
			return visitor.visitMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberTypeContext extends ParserRuleContext {
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
	}
	public COND_OR(): TerminalNode[];
	public COND_OR(i: number): TerminalNode;
	public COND_OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COND_OR);
		} else {
			return this.getToken(YmlParser.COND_OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_memberType; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterMemberType) {
			listener.enterMemberType(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitMemberType) {
			listener.exitMemberType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitMemberType) {
			return visitor.visitMemberType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathContext extends ParserRuleContext {
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.DOT);
		} else {
			return this.getToken(YmlParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_path; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterPath) {
			listener.enterPath(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitPath) {
			listener.exitPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitPath) {
			return visitor.visitPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YmlIdOrPathContext extends ParserRuleContext {
	public ymlId(): YmlIdContext | undefined {
		return this.tryGetRuleContext(0, YmlIdContext);
	}
	public path(): PathContext | undefined {
		return this.tryGetRuleContext(0, PathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_ymlIdOrPath; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterYmlIdOrPath) {
			listener.enterYmlIdOrPath(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitYmlIdOrPath) {
			listener.exitYmlIdOrPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitYmlIdOrPath) {
			return visitor.visitYmlIdOrPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public actionField(): ActionFieldContext | undefined {
		return this.tryGetRuleContext(0, ActionFieldContext);
	}
	public commonField(): CommonFieldContext | undefined {
		return this.tryGetRuleContext(0, CommonFieldContext);
	}
	public returnField(): ReturnFieldContext | undefined {
		return this.tryGetRuleContext(0, ReturnFieldContext);
	}
	public localField(): LocalFieldContext | undefined {
		return this.tryGetRuleContext(0, LocalFieldContext);
	}
	public implementationField(): ImplementationFieldContext | undefined {
		return this.tryGetRuleContext(0, ImplementationFieldContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_field; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionFieldContext extends ParserRuleContext {
	public _optionName: Token;
	public FIELD_INTRO(): TerminalNode { return this.getToken(YmlParser.FIELD_INTRO, 0); }
	public actionFieldValues(): ActionFieldValuesContext {
		return this.getRuleContext(0, ActionFieldValuesContext);
	}
	public ACTION(): TerminalNode { return this.getToken(YmlParser.ACTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_actionField; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterActionField) {
			listener.enterActionField(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitActionField) {
			listener.exitActionField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitActionField) {
			return visitor.visitActionField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionFieldValuesContext extends ParserRuleContext {
	public actionBlock(): ActionBlockContext | undefined {
		return this.tryGetRuleContext(0, ActionBlockContext);
	}
	public chainedCall(): ChainedCallContext | undefined {
		return this.tryGetRuleContext(0, ChainedCallContext);
	}
	public instruction_return(): Instruction_returnContext | undefined {
		return this.tryGetRuleContext(0, Instruction_returnContext);
	}
	public ifExprBlock(): IfExprBlockContext | undefined {
		return this.tryGetRuleContext(0, IfExprBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_actionFieldValues; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterActionFieldValues) {
			listener.enterActionFieldValues(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitActionFieldValues) {
			listener.exitActionFieldValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitActionFieldValues) {
			return visitor.visitActionFieldValues(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementationFieldContext extends ParserRuleContext {
	public FIELD_INTRO(): TerminalNode { return this.getToken(YmlParser.FIELD_INTRO, 0); }
	public IMPLEMENTATION(): TerminalNode { return this.getToken(YmlParser.IMPLEMENTATION, 0); }
	public actionBlock(): ActionBlockContext {
		return this.getRuleContext(0, ActionBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_implementationField; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterImplementationField) {
			listener.enterImplementationField(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitImplementationField) {
			listener.exitImplementationField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitImplementationField) {
			return visitor.visitImplementationField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionNoSemiContext extends ParserRuleContext {
	public ifExprBlock(): IfExprBlockContext | undefined {
		return this.tryGetRuleContext(0, IfExprBlockContext);
	}
	public chainedCall(): ChainedCallContext | undefined {
		return this.tryGetRuleContext(0, ChainedCallContext);
	}
	public instruction_return(): Instruction_returnContext | undefined {
		return this.tryGetRuleContext(0, Instruction_returnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instructionNoSemi; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstructionNoSemi) {
			listener.enterInstructionNoSemi(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstructionNoSemi) {
			listener.exitInstructionNoSemi(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstructionNoSemi) {
			return visitor.visitInstructionNoSemi(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommonFieldContext extends ParserRuleContext {
	public _fieldArrow: Token;
	public _optionName: YmlIdOrPathContext;
	public _optionValue: ObjectAttributeValueContext;
	public ymlIdOrPath(): YmlIdOrPathContext {
		return this.getRuleContext(0, YmlIdOrPathContext);
	}
	public objectAttributeValue(): ObjectAttributeValueContext {
		return this.getRuleContext(0, ObjectAttributeValueContext);
	}
	public FIELD_INTRO(): TerminalNode | undefined { return this.tryGetToken(YmlParser.FIELD_INTRO, 0); }
	public REPLACE_FIELD_VALUE_INTRO(): TerminalNode | undefined { return this.tryGetToken(YmlParser.REPLACE_FIELD_VALUE_INTRO, 0); }
	public REMOVE_FIELD(): TerminalNode | undefined { return this.tryGetToken(YmlParser.REMOVE_FIELD, 0); }
	public ADD_FIELD(): TerminalNode | undefined { return this.tryGetToken(YmlParser.ADD_FIELD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_commonField; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterCommonField) {
			listener.enterCommonField(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitCommonField) {
			listener.exitCommonField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitCommonField) {
			return visitor.visitCommonField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Local_variable_declContext extends ParserRuleContext {
	public _type: MemberTypeContext;
	public _memberName: YmlIdContext;
	public memberType(): MemberTypeContext {
		return this.getRuleContext(0, MemberTypeContext);
	}
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_local_variable_decl; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterLocal_variable_decl) {
			listener.enterLocal_variable_decl(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitLocal_variable_decl) {
			listener.exitLocal_variable_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitLocal_variable_decl) {
			return visitor.visitLocal_variable_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalFieldContext extends ParserRuleContext {
	public _fieldArrow: Token;
	public _optionName: Token;
	public _local_variable_decl: Local_variable_declContext;
	public _optionValues: Local_variable_declContext[] = [];
	public FIELD_INTRO(): TerminalNode { return this.getToken(YmlParser.FIELD_INTRO, 0); }
	public LOCAL(): TerminalNode { return this.getToken(YmlParser.LOCAL, 0); }
	public local_variable_decl(): Local_variable_declContext[];
	public local_variable_decl(i: number): Local_variable_declContext;
	public local_variable_decl(i?: number): Local_variable_declContext | Local_variable_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Local_variable_declContext);
		} else {
			return this.getRuleContext(i, Local_variable_declContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_localField; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterLocalField) {
			listener.enterLocalField(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitLocalField) {
			listener.exitLocalField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitLocalField) {
			return visitor.visitLocalField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnFieldContext extends ParserRuleContext {
	public _fieldArrow: Token;
	public _optionName: Token;
	public _optionValue: ObjectReturnAttributeValueContext;
	public FIELD_INTRO(): TerminalNode { return this.getToken(YmlParser.FIELD_INTRO, 0); }
	public RETURN(): TerminalNode { return this.getToken(YmlParser.RETURN, 0); }
	public objectReturnAttributeValue(): ObjectReturnAttributeValueContext {
		return this.getRuleContext(0, ObjectReturnAttributeValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_returnField; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterReturnField) {
			listener.enterReturnField(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitReturnField) {
			listener.exitReturnField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitReturnField) {
			return visitor.visitReturnField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassPropertiesBlockContext extends ParserRuleContext {
	public _classOption: FieldContext;
	public CLASSPROPERTIES(): TerminalNode { return this.getToken(YmlParser.CLASSPROPERTIES, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_classPropertiesBlock; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterClassPropertiesBlock) {
			listener.enterClassPropertiesBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitClassPropertiesBlock) {
			listener.exitClassPropertiesBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitClassPropertiesBlock) {
			return visitor.visitClassPropertiesBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultilineStringContext extends ParserRuleContext {
	public _stringContent: Token;
	public TRIPLE_QUOTE(): TerminalNode[];
	public TRIPLE_QUOTE(i: number): TerminalNode;
	public TRIPLE_QUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.TRIPLE_QUOTE);
		} else {
			return this.getToken(YmlParser.TRIPLE_QUOTE, i);
		}
	}
	public ANY(): TerminalNode[];
	public ANY(i: number): TerminalNode;
	public ANY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.ANY);
		} else {
			return this.getToken(YmlParser.ANY, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_multilineString; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterMultilineString) {
			listener.enterMultilineString(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitMultilineString) {
			listener.exitMultilineString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitMultilineString) {
			return visitor.visitMultilineString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectReturnAttributeValueContext extends ParserRuleContext {
	public _type: YmlIdContext;
	public _name: YmlIdContext;
	public ifExprBlock(): IfExprBlockContext | undefined {
		return this.tryGetRuleContext(0, IfExprBlockContext);
	}
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public hashMapKeyValue(): HashMapKeyValueContext | undefined {
		return this.tryGetRuleContext(0, HashMapKeyValueContext);
	}
	public multilineString(): MultilineStringContext | undefined {
		return this.tryGetRuleContext(0, MultilineStringContext);
	}
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
	}
	public simpleList(): SimpleListContext | undefined {
		return this.tryGetRuleContext(0, SimpleListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_objectReturnAttributeValue; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterObjectReturnAttributeValue) {
			listener.enterObjectReturnAttributeValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitObjectReturnAttributeValue) {
			listener.exitObjectReturnAttributeValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitObjectReturnAttributeValue) {
			return visitor.visitObjectReturnAttributeValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectAttributeValueContext extends ParserRuleContext {
	public _type: YmlIdContext;
	public _name: YmlIdContext;
	public instruction_return(): Instruction_returnContext | undefined {
		return this.tryGetRuleContext(0, Instruction_returnContext);
	}
	public ifExprBlock(): IfExprBlockContext | undefined {
		return this.tryGetRuleContext(0, IfExprBlockContext);
	}
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public hashMapKeyValueList(): HashMapKeyValueListContext | undefined {
		return this.tryGetRuleContext(0, HashMapKeyValueListContext);
	}
	public hashMapKeyValue(): HashMapKeyValueContext | undefined {
		return this.tryGetRuleContext(0, HashMapKeyValueContext);
	}
	public multilineString(): MultilineStringContext | undefined {
		return this.tryGetRuleContext(0, MultilineStringContext);
	}
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
	}
	public simpleList(): SimpleListContext | undefined {
		return this.tryGetRuleContext(0, SimpleListContext);
	}
	public actionBlock(): ActionBlockContext | undefined {
		return this.tryGetRuleContext(0, ActionBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_objectAttributeValue; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterObjectAttributeValue) {
			listener.enterObjectAttributeValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitObjectAttributeValue) {
			listener.exitObjectAttributeValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitObjectAttributeValue) {
			return visitor.visitObjectAttributeValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueOrConditionContext extends ParserRuleContext {
	public _type: YmlIdContext;
	public _name: YmlIdContext;
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public hashMapKeyValue(): HashMapKeyValueContext | undefined {
		return this.tryGetRuleContext(0, HashMapKeyValueContext);
	}
	public multilineString(): MultilineStringContext | undefined {
		return this.tryGetRuleContext(0, MultilineStringContext);
	}
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_valueOrCondition; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterValueOrCondition) {
			listener.enterValueOrCondition(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitValueOrCondition) {
			listener.exitValueOrCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitValueOrCondition) {
			return visitor.visitValueOrCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HashMapKeyValueListContext extends ParserRuleContext {
	public hashMapKeyValue(): HashMapKeyValueContext[];
	public hashMapKeyValue(i: number): HashMapKeyValueContext;
	public hashMapKeyValue(i?: number): HashMapKeyValueContext | HashMapKeyValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HashMapKeyValueContext);
		} else {
			return this.getRuleContext(i, HashMapKeyValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_hashMapKeyValueList; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterHashMapKeyValueList) {
			listener.enterHashMapKeyValueList(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitHashMapKeyValueList) {
			listener.exitHashMapKeyValueList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitHashMapKeyValueList) {
			return visitor.visitHashMapKeyValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HashMapContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	public hashMapKeyValue(): HashMapKeyValueContext | undefined {
		return this.tryGetRuleContext(0, HashMapKeyValueContext);
	}
	public hashMapKeyValueList(): HashMapKeyValueListContext | undefined {
		return this.tryGetRuleContext(0, HashMapKeyValueListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_hashMap; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterHashMap) {
			listener.enterHashMap(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitHashMap) {
			listener.exitHashMap(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitHashMap) {
			return visitor.visitHashMap(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HashMapKeyValueContext extends ParserRuleContext {
	public hashMapKey(): HashMapKeyContext {
		return this.getRuleContext(0, HashMapKeyContext);
	}
	public COLON(): TerminalNode { return this.getToken(YmlParser.COLON, 0); }
	public hashMapValue(): HashMapValueContext {
		return this.getRuleContext(0, HashMapValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_hashMapKeyValue; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterHashMapKeyValue) {
			listener.enterHashMapKeyValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitHashMapKeyValue) {
			listener.exitHashMapKeyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitHashMapKeyValue) {
			return visitor.visitHashMapKeyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HashMapKeyContext extends ParserRuleContext {
	public bool(): BoolContext | undefined {
		return this.tryGetRuleContext(0, BoolContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(YmlParser.STRING, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.DATE, 0); }
	public chainedCall(): ChainedCallContext | undefined {
		return this.tryGetRuleContext(0, ChainedCallContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(YmlParser.NUMBER, 0); }
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	public constList(): ConstListContext | undefined {
		return this.tryGetRuleContext(0, ConstListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_hashMapKey; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterHashMapKey) {
			listener.enterHashMapKey(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitHashMapKey) {
			listener.exitHashMapKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitHashMapKey) {
			return visitor.visitHashMapKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HashMapValueContext extends ParserRuleContext {
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_hashMapValue; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterHashMapValue) {
			listener.enterHashMapValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitHashMapValue) {
			listener.exitHashMapValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitHashMapValue) {
			return visitor.visitHashMapValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public granule(): GranuleContext | undefined {
		return this.tryGetRuleContext(0, GranuleContext);
	}
	public inlineDeclaration(): InlineDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InlineDeclarationContext);
	}
	public arithmeticExpression(): ArithmeticExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArithmeticExpressionContext);
	}
	public nonArithmeticValue(): NonArithmeticValueContext | undefined {
		return this.tryGetRuleContext(0, NonArithmeticValueContext);
	}
	public synonym(): SynonymContext | undefined {
		return this.tryGetRuleContext(0, SynonymContext);
	}
	public ifExprBlock(): IfExprBlockContext | undefined {
		return this.tryGetRuleContext(0, IfExprBlockContext);
	}
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	public constList(): ConstListContext | undefined {
		return this.tryGetRuleContext(0, ConstListContext);
	}
	public inValue(): InValueContext | undefined {
		return this.tryGetRuleContext(0, InValueContext);
	}
	public applyCollection(): ApplyCollectionContext | undefined {
		return this.tryGetRuleContext(0, ApplyCollectionContext);
	}
	public applyCollectionOn(): ApplyCollectionOnContext | undefined {
		return this.tryGetRuleContext(0, ApplyCollectionOnContext);
	}
	public as(): AsContext | undefined {
		return this.tryGetRuleContext(0, AsContext);
	}
	public hashMap(): HashMapContext | undefined {
		return this.tryGetRuleContext(0, HashMapContext);
	}
	public instruction_switchExpr_withValue(): Instruction_switchExpr_withValueContext | undefined {
		return this.tryGetRuleContext(0, Instruction_switchExpr_withValueContext);
	}
	public instruction_switchExpr_asIf(): Instruction_switchExpr_asIfContext | undefined {
		return this.tryGetRuleContext(0, Instruction_switchExpr_asIfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_value; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsContext extends ParserRuleContext {
	public AS(): TerminalNode { return this.getToken(YmlParser.AS, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public instanciationVariable(): InstanciationVariableContext {
		return this.getRuleContext(0, InstanciationVariableContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	public conditionalExpression(): ConditionalExpressionContext[];
	public conditionalExpression(i: number): ConditionalExpressionContext;
	public conditionalExpression(i?: number): ConditionalExpressionContext | ConditionalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalExpressionContext);
		} else {
			return this.getRuleContext(i, ConditionalExpressionContext);
		}
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public instruction_assignment(): Instruction_assignmentContext[];
	public instruction_assignment(i: number): Instruction_assignmentContext;
	public instruction_assignment(i?: number): Instruction_assignmentContext | Instruction_assignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Instruction_assignmentContext);
		} else {
			return this.getRuleContext(i, Instruction_assignmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_as; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterAs) {
			listener.enterAs(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitAs) {
			listener.exitAs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitAs) {
			return visitor.visitAs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApplyCollectionContext extends ParserRuleContext {
	public APPLY_COLLECTION(): TerminalNode { return this.getToken(YmlParser.APPLY_COLLECTION, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public WHERE_APPLY_COLLECTION(): TerminalNode[];
	public WHERE_APPLY_COLLECTION(i: number): TerminalNode;
	public WHERE_APPLY_COLLECTION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.WHERE_APPLY_COLLECTION);
		} else {
			return this.getToken(YmlParser.WHERE_APPLY_COLLECTION, i);
		}
	}
	public conditionalExpression(): ConditionalExpressionContext[];
	public conditionalExpression(i: number): ConditionalExpressionContext;
	public conditionalExpression(i?: number): ConditionalExpressionContext | ConditionalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalExpressionContext);
		} else {
			return this.getRuleContext(i, ConditionalExpressionContext);
		}
	}
	public OPERATION_APPLY_COLLECTION(): TerminalNode[];
	public OPERATION_APPLY_COLLECTION(i: number): TerminalNode;
	public OPERATION_APPLY_COLLECTION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.OPERATION_APPLY_COLLECTION);
		} else {
			return this.getToken(YmlParser.OPERATION_APPLY_COLLECTION, i);
		}
	}
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
	}
	public ARGUMENTS_APPLY_COLLECTION(): TerminalNode[];
	public ARGUMENTS_APPLY_COLLECTION(i: number): TerminalNode;
	public ARGUMENTS_APPLY_COLLECTION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.ARGUMENTS_APPLY_COLLECTION);
		} else {
			return this.getToken(YmlParser.ARGUMENTS_APPLY_COLLECTION, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_applyCollection; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterApplyCollection) {
			listener.enterApplyCollection(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitApplyCollection) {
			listener.exitApplyCollection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitApplyCollection) {
			return visitor.visitApplyCollection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApplyCollectionOnContext extends ParserRuleContext {
	public APPLY_COLLECTION_ON(): TerminalNode { return this.getToken(YmlParser.APPLY_COLLECTION_ON, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public WHERE_APPLY_COLLECTION_ON(): TerminalNode[];
	public WHERE_APPLY_COLLECTION_ON(i: number): TerminalNode;
	public WHERE_APPLY_COLLECTION_ON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.WHERE_APPLY_COLLECTION_ON);
		} else {
			return this.getToken(YmlParser.WHERE_APPLY_COLLECTION_ON, i);
		}
	}
	public conditionalExpression(): ConditionalExpressionContext[];
	public conditionalExpression(i: number): ConditionalExpressionContext;
	public conditionalExpression(i?: number): ConditionalExpressionContext | ConditionalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalExpressionContext);
		} else {
			return this.getRuleContext(i, ConditionalExpressionContext);
		}
	}
	public OPERATION_APPLY_COLLECTION_ON(): TerminalNode[];
	public OPERATION_APPLY_COLLECTION_ON(i: number): TerminalNode;
	public OPERATION_APPLY_COLLECTION_ON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.OPERATION_APPLY_COLLECTION_ON);
		} else {
			return this.getToken(YmlParser.OPERATION_APPLY_COLLECTION_ON, i);
		}
	}
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
	}
	public SELECT_APPLY_COLLECTION_ON(): TerminalNode[];
	public SELECT_APPLY_COLLECTION_ON(i: number): TerminalNode;
	public SELECT_APPLY_COLLECTION_ON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.SELECT_APPLY_COLLECTION_ON);
		} else {
			return this.getToken(YmlParser.SELECT_APPLY_COLLECTION_ON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_applyCollectionOn; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterApplyCollectionOn) {
			listener.enterApplyCollectionOn(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitApplyCollectionOn) {
			listener.exitApplyCollectionOn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitApplyCollectionOn) {
			return visitor.visitApplyCollectionOn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_forEachContext extends ParserRuleContext {
	public _type: YmlIdContext;
	public _name: YmlIdContext;
	public FOREACH(): TerminalNode { return this.getToken(YmlParser.FOREACH, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public COMMA(): TerminalNode { return this.getToken(YmlParser.COMMA, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public actionBlockOrInstruction(): ActionBlockOrInstructionContext {
		return this.getRuleContext(0, ActionBlockOrInstructionContext);
	}
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_forEach; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_forEach) {
			listener.enterInstruction_forEach(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_forEach) {
			listener.exitInstruction_forEach(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_forEach) {
			return visitor.visitInstruction_forEach(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_forContext extends ParserRuleContext {
	public _name: YmlIdContext;
	public _step: ValueContext;
	public _collection: ValueContext;
	public FOR(): TerminalNode { return this.getToken(YmlParser.FOR, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public actionBlockOrInstruction(): ActionBlockOrInstructionContext {
		return this.getRuleContext(0, ActionBlockOrInstructionContext);
	}
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_for; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_for) {
			listener.enterInstruction_for(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_for) {
			listener.exitInstruction_for(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_for) {
			return visitor.visitInstruction_for(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_ifExprBlockContext extends ParserRuleContext {
	public ifExprBlock(): IfExprBlockContext {
		return this.getRuleContext(0, IfExprBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_ifExprBlock; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_ifExprBlock) {
			listener.enterInstruction_ifExprBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_ifExprBlock) {
			listener.exitInstruction_ifExprBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_ifExprBlock) {
			return visitor.visitInstruction_ifExprBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfExprBlockContext extends ParserRuleContext {
	public _condition: ConditionalExpressionContext;
	public _thenValue: ValueContext;
	public _elseValue: ValueContext;
	public IF_EXPR(): TerminalNode { return this.getToken(YmlParser.IF_EXPR, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public THEN(): TerminalNode { return this.getToken(YmlParser.THEN, 0); }
	public ELSE(): TerminalNode { return this.getToken(YmlParser.ELSE, 0); }
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_ifExprBlock; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterIfExprBlock) {
			listener.enterIfExprBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitIfExprBlock) {
			listener.exitIfExprBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitIfExprBlock) {
			return visitor.visitIfExprBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_bool; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitBool) {
			return visitor.visitBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonArithmeticValueContext extends ParserRuleContext {
	public bool(): BoolContext | undefined {
		return this.tryGetRuleContext(0, BoolContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(YmlParser.STRING, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.DATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_nonArithmeticValue; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterNonArithmeticValue) {
			listener.enterNonArithmeticValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitNonArithmeticValue) {
			listener.exitNonArithmeticValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitNonArithmeticValue) {
			return visitor.visitNonArithmeticValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanciationVariableContext extends ParserRuleContext {
	public QUESTION_MARK(): TerminalNode | undefined { return this.tryGetToken(YmlParser.QUESTION_MARK, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPEN_PAR, 0); }
	public instanciationVariable(): InstanciationVariableContext | undefined {
		return this.tryGetRuleContext(0, InstanciationVariableContext);
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instanciationVariable; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstanciationVariable) {
			listener.enterInstanciationVariable(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstanciationVariable) {
			listener.exitInstanciationVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstanciationVariable) {
			return visitor.visitInstanciationVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PossiblyIndexedExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public index(): IndexContext[];
	public index(i: number): IndexContext;
	public index(i?: number): IndexContext | IndexContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IndexContext);
		} else {
			return this.getRuleContext(i, IndexContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_possiblyIndexedExpression; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterPossiblyIndexedExpression) {
			listener.enterPossiblyIndexedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitPossiblyIndexedExpression) {
			listener.exitPossiblyIndexedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitPossiblyIndexedExpression) {
			return visitor.visitPossiblyIndexedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public instanciationVariable(): InstanciationVariableContext | undefined {
		return this.tryGetRuleContext(0, InstanciationVariableContext);
	}
	public granule(): GranuleContext | undefined {
		return this.tryGetRuleContext(0, GranuleContext);
	}
	public constList(): ConstListContext | undefined {
		return this.tryGetRuleContext(0, ConstListContext);
	}
	public as(): AsContext | undefined {
		return this.tryGetRuleContext(0, AsContext);
	}
	public applyCollection(): ApplyCollectionContext | undefined {
		return this.tryGetRuleContext(0, ApplyCollectionContext);
	}
	public applyCollectionOn(): ApplyCollectionOnContext | undefined {
		return this.tryGetRuleContext(0, ApplyCollectionOnContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	public hashMap(): HashMapContext | undefined {
		return this.tryGetRuleContext(0, HashMapContext);
	}
	public parenthesisConditionalExpression(): ParenthesisConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParenthesisConditionalExpressionContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPEN_PAR, 0); }
	public instruction_switchExpr_withValue(): Instruction_switchExpr_withValueContext | undefined {
		return this.tryGetRuleContext(0, Instruction_switchExpr_withValueContext);
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.CLOSE_PAR, 0); }
	public instruction_switchExpr_asIf(): Instruction_switchExpr_asIfContext | undefined {
		return this.tryGetRuleContext(0, Instruction_switchExpr_asIfContext);
	}
	public ifExprBlock(): IfExprBlockContext | undefined {
		return this.tryGetRuleContext(0, IfExprBlockContext);
	}
	public ymlId(): YmlIdContext | undefined {
		return this.tryGetRuleContext(0, YmlIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_expression; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public functionArgument(): FunctionArgumentContext[];
	public functionArgument(i: number): FunctionArgumentContext;
	public functionArgument(i?: number): FunctionArgumentContext | FunctionArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionArgumentContext);
		} else {
			return this.getRuleContext(i, FunctionArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACKET, 0); }
	public functionArgument(): FunctionArgumentContext {
		return this.getRuleContext(0, FunctionArgumentContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_index; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterIndex) {
			listener.enterIndex(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitIndex) {
			listener.exitIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitIndex) {
			return visitor.visitIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionArgumentContext extends ParserRuleContext {
	public _argKey: Token;
	public valueOrCondition(): ValueOrConditionContext | undefined {
		return this.tryGetRuleContext(0, ValueOrConditionContext);
	}
	public instanciationVariable(): InstanciationVariableContext | undefined {
		return this.tryGetRuleContext(0, InstanciationVariableContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(YmlParser.COLON, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(YmlParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_functionArgument; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterFunctionArgument) {
			listener.enterFunctionArgument(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitFunctionArgument) {
			listener.exitFunctionArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitFunctionArgument) {
			return visitor.visitFunctionArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChainedCallContext extends ParserRuleContext {
	public _marker: ExpressionMarkerContext;
	public possiblyIndexedExpression(): PossiblyIndexedExpressionContext[];
	public possiblyIndexedExpression(i: number): PossiblyIndexedExpressionContext;
	public possiblyIndexedExpression(i?: number): PossiblyIndexedExpressionContext | PossiblyIndexedExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PossiblyIndexedExpressionContext);
		} else {
			return this.getRuleContext(i, PossiblyIndexedExpressionContext);
		}
	}
	public expressionMarker(): ExpressionMarkerContext[];
	public expressionMarker(i: number): ExpressionMarkerContext;
	public expressionMarker(i?: number): ExpressionMarkerContext | ExpressionMarkerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionMarkerContext);
		} else {
			return this.getRuleContext(i, ExpressionMarkerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_chainedCall; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterChainedCall) {
			listener.enterChainedCall(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitChainedCall) {
			listener.exitChainedCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitChainedCall) {
			return visitor.visitChainedCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineDeclarationContext extends ParserRuleContext {
	public _className: YmlIdContext;
	public INLINE_DECL_INTRO(): TerminalNode { return this.getToken(YmlParser.INLINE_DECL_INTRO, 0); }
	public staticDeclaration(): StaticDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticDeclarationContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(YmlParser.SEMICOLON, 0); }
	public ymlId(): YmlIdContext | undefined {
		return this.tryGetRuleContext(0, YmlIdContext);
	}
	public fieldValue(): FieldValueContext[];
	public fieldValue(i: number): FieldValueContext;
	public fieldValue(i?: number): FieldValueContext | FieldValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldValueContext);
		} else {
			return this.getRuleContext(i, FieldValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_inlineDeclaration; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInlineDeclaration) {
			listener.enterInlineDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInlineDeclaration) {
			listener.exitInlineDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInlineDeclaration) {
			return visitor.visitInlineDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineOperationContext extends ParserRuleContext {
	public _leftExpression: ValueContext;
	public _operator: YmlIdContext;
	public _rightExpression: ValueContext;
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_inlineOperation; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInlineOperation) {
			listener.enterInlineOperation(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInlineOperation) {
			listener.exitInlineOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInlineOperation) {
			return visitor.visitInlineOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldValueContext extends ParserRuleContext {
	public field(): FieldContext | undefined {
		return this.tryGetRuleContext(0, FieldContext);
	}
	public granule(): GranuleContext | undefined {
		return this.tryGetRuleContext(0, GranuleContext);
	}
	public constList(): ConstListContext | undefined {
		return this.tryGetRuleContext(0, ConstListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_fieldValue; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterFieldValue) {
			listener.enterFieldValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitFieldValue) {
			listener.exitFieldValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitFieldValue) {
			return visitor.visitFieldValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public _memberOption: FieldContext;
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(YmlParser.SEMICOLON, 0); }
	public METHOD(): TerminalNode | undefined { return this.tryGetToken(YmlParser.METHOD, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(YmlParser.FUNCTION, 0); }
	public FUNCTION_AS_TYPE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.FUNCTION_AS_TYPE, 0); }
	public TEXT_METHOD(): TerminalNode | undefined { return this.tryGetToken(YmlParser.TEXT_METHOD, 0); }
	public TEXT_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(YmlParser.TEXT_FUNCTION, 0); }
	public argsBlock(): ArgsBlockContext | undefined {
		return this.tryGetRuleContext(0, ArgsBlockContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPEN_PAR, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.CLOSE_PAR, 0); }
	public localBlock(): LocalBlockContext | undefined {
		return this.tryGetRuleContext(0, LocalBlockContext);
	}
	public staticBlock(): StaticBlockContext | undefined {
		return this.tryGetRuleContext(0, StaticBlockContext);
	}
	public ruleset(): RulesetContext | undefined {
		return this.tryGetRuleContext(0, RulesetContext);
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_function; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsBlockContext extends ParserRuleContext {
	public ARGS(): TerminalNode { return this.getToken(YmlParser.ARGS, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public variableBlockContent(): VariableBlockContentContext {
		return this.getRuleContext(0, VariableBlockContentContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_argsBlock; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterArgsBlock) {
			listener.enterArgsBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitArgsBlock) {
			listener.exitArgsBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitArgsBlock) {
			return visitor.visitArgsBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalBlockContext extends ParserRuleContext {
	public LOCAL(): TerminalNode { return this.getToken(YmlParser.LOCAL, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public variableBlockContent(): VariableBlockContentContext {
		return this.getRuleContext(0, VariableBlockContentContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_localBlock; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterLocalBlock) {
			listener.enterLocalBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitLocalBlock) {
			listener.exitLocalBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitLocalBlock) {
			return visitor.visitLocalBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticBlockContext extends ParserRuleContext {
	public STATIC(): TerminalNode { return this.getToken(YmlParser.STATIC, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	public staticDeclaration(): StaticDeclarationContext[];
	public staticDeclaration(i: number): StaticDeclarationContext;
	public staticDeclaration(i?: number): StaticDeclarationContext | StaticDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StaticDeclarationContext);
		} else {
			return this.getRuleContext(i, StaticDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_staticBlock; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterStaticBlock) {
			listener.enterStaticBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitStaticBlock) {
			listener.exitStaticBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitStaticBlock) {
			return visitor.visitStaticBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public _memberOption: FieldContext;
	public methodIntro(): MethodIntroContext {
		return this.getRuleContext(0, MethodIntroContext);
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodCompleteDeclarationContext extends ParserRuleContext {
	public _memberOption: FieldContext;
	public methodIntro(): MethodIntroContext {
		return this.getRuleContext(0, MethodIntroContext);
	}
	public FUNCTION(): TerminalNode { return this.getToken(YmlParser.FUNCTION, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_methodCompleteDeclaration; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterMethodCompleteDeclaration) {
			listener.enterMethodCompleteDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitMethodCompleteDeclaration) {
			listener.exitMethodCompleteDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitMethodCompleteDeclaration) {
			return visitor.visitMethodCompleteDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodIntroContext extends ParserRuleContext {
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(YmlParser.FUNCTION, 0); }
	public METHOD(): TerminalNode | undefined { return this.tryGetToken(YmlParser.METHOD, 0); }
	public TEXT_METHOD(): TerminalNode | undefined { return this.tryGetToken(YmlParser.TEXT_METHOD, 0); }
	public TEXT_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(YmlParser.TEXT_FUNCTION, 0); }
	public argsBlock(): ArgsBlockContext | undefined {
		return this.tryGetRuleContext(0, ArgsBlockContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPEN_PAR, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_methodIntro; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterMethodIntro) {
			listener.enterMethodIntro(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitMethodIntro) {
			listener.exitMethodIntro(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitMethodIntro) {
			return visitor.visitMethodIntro(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public mandatoryArgs(): MandatoryArgsContext | undefined {
		return this.tryGetRuleContext(0, MandatoryArgsContext);
	}
	public optionalArgs(): OptionalArgsContext | undefined {
		return this.tryGetRuleContext(0, OptionalArgsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MandatoryArgsContext extends ParserRuleContext {
	public mandatoryArgDecl(): MandatoryArgDeclContext[];
	public mandatoryArgDecl(i: number): MandatoryArgDeclContext;
	public mandatoryArgDecl(i?: number): MandatoryArgDeclContext | MandatoryArgDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MandatoryArgDeclContext);
		} else {
			return this.getRuleContext(i, MandatoryArgDeclContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_mandatoryArgs; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterMandatoryArgs) {
			listener.enterMandatoryArgs(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitMandatoryArgs) {
			listener.exitMandatoryArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitMandatoryArgs) {
			return visitor.visitMandatoryArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MandatoryArgDeclContext extends ParserRuleContext {
	public _argType: MemberTypeContext;
	public _argName: YmlIdContext;
	public memberType(): MemberTypeContext {
		return this.getRuleContext(0, MemberTypeContext);
	}
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public argOptionList(): ArgOptionListContext | undefined {
		return this.tryGetRuleContext(0, ArgOptionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_mandatoryArgDecl; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterMandatoryArgDecl) {
			listener.enterMandatoryArgDecl(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitMandatoryArgDecl) {
			listener.exitMandatoryArgDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitMandatoryArgDecl) {
			return visitor.visitMandatoryArgDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalArgsContext extends ParserRuleContext {
	public _optionalArgDecl: OptionalArgDeclContext;
	public _optionalArguments: OptionalArgDeclContext[] = [];
	public _argSetName: YmlIdContext;
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	public optionalArgDecl(): OptionalArgDeclContext[];
	public optionalArgDecl(i: number): OptionalArgDeclContext;
	public optionalArgDecl(i?: number): OptionalArgDeclContext | OptionalArgDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalArgDeclContext);
		} else {
			return this.getRuleContext(i, OptionalArgDeclContext);
		}
	}
	public ymlId(): YmlIdContext | undefined {
		return this.tryGetRuleContext(0, YmlIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_optionalArgs; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterOptionalArgs) {
			listener.enterOptionalArgs(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitOptionalArgs) {
			listener.exitOptionalArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitOptionalArgs) {
			return visitor.visitOptionalArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalArgDeclContext extends ParserRuleContext {
	public _optionalKeyName: YmlIdContext;
	public _mandatoryKeyName: YmlIdContext;
	public _argType: YmlIdContext;
	public _argName: YmlIdContext;
	public COLON(): TerminalNode { return this.getToken(YmlParser.COLON, 0); }
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
	}
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(YmlParser.CLOSE_BRACKET, 0); }
	public argOptionList(): ArgOptionListContext | undefined {
		return this.tryGetRuleContext(0, ArgOptionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_optionalArgDecl; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterOptionalArgDecl) {
			listener.enterOptionalArgDecl(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitOptionalArgDecl) {
			listener.exitOptionalArgDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitOptionalArgDecl) {
			return visitor.visitOptionalArgDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgOptionListContext extends ParserRuleContext {
	public _argOptionBlock: ArgOptionBlockContext;
	public _arguments: ArgOptionBlockContext[] = [];
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	public argOptionBlock(): ArgOptionBlockContext[];
	public argOptionBlock(i: number): ArgOptionBlockContext;
	public argOptionBlock(i?: number): ArgOptionBlockContext | ArgOptionBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgOptionBlockContext);
		} else {
			return this.getRuleContext(i, ArgOptionBlockContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_argOptionList; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterArgOptionList) {
			listener.enterArgOptionList(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitArgOptionList) {
			listener.exitArgOptionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitArgOptionList) {
			return visitor.visitArgOptionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgOptionBlockContext extends ParserRuleContext {
	public _argOption: YmlIdContext;
	public _optionValue: ValueContext;
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_argOptionBlock; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterArgOptionBlock) {
			listener.enterArgOptionBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitArgOptionBlock) {
			listener.exitArgOptionBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitArgOptionBlock) {
			return visitor.visitArgOptionBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Order1BlockContext extends ParserRuleContext {
	public instanciationCondition(): InstanciationConditionContext {
		return this.getRuleContext(0, InstanciationConditionContext);
	}
	public conditionBlock(): ConditionBlockContext | undefined {
		return this.tryGetRuleContext(0, ConditionBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_order1Block; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterOrder1Block) {
			listener.enterOrder1Block(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitOrder1Block) {
			listener.exitOrder1Block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitOrder1Block) {
			return visitor.visitOrder1Block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanciationConditionContext extends ParserRuleContext {
	public inlineOperation(): InlineOperationContext {
		return this.getRuleContext(0, InlineOperationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instanciationCondition; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstanciationCondition) {
			listener.enterInstanciationCondition(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstanciationCondition) {
			listener.exitInstanciationCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstanciationCondition) {
			return visitor.visitInstanciationCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Order1FullConditionContext extends ParserRuleContext {
	public conditionBlock(): ConditionBlockContext | undefined {
		return this.tryGetRuleContext(0, ConditionBlockContext);
	}
	public order1Block(): Order1BlockContext[];
	public order1Block(i: number): Order1BlockContext;
	public order1Block(i?: number): Order1BlockContext | Order1BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Order1BlockContext);
		} else {
			return this.getRuleContext(i, Order1BlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_order1FullCondition; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterOrder1FullCondition) {
			listener.enterOrder1FullCondition(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitOrder1FullCondition) {
			listener.exitOrder1FullCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitOrder1FullCondition) {
			return visitor.visitOrder1FullCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParenthesisConditionalExpressionContext extends ParserRuleContext {
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_parenthesisConditionalExpression; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterParenthesisConditionalExpression) {
			listener.enterParenthesisConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitParenthesisConditionalExpression) {
			listener.exitParenthesisConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitParenthesisConditionalExpression) {
			return visitor.visitParenthesisConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public conditionalOrExpression(): ConditionalOrExpressionContext {
		return this.getRuleContext(0, ConditionalOrExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalAndExpressionContext extends ParserRuleContext {
	public _leftCondition: ConditionalAndExpressionContext;
	public _rightCondition: ConditionalOrExpressionContext;
	public COND_AND(): TerminalNode | undefined { return this.tryGetToken(YmlParser.COND_AND, 0); }
	public conditionalAndExpression(): ConditionalAndExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalAndExpressionContext);
	}
	public conditionalOrExpression(): ConditionalOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalOrExpressionContext);
	}
	public parenthesisConditionalExpression(): ParenthesisConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParenthesisConditionalExpressionContext);
	}
	public comparison(): ComparisonContext | undefined {
		return this.tryGetRuleContext(0, ComparisonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_conditionalAndExpression; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterConditionalAndExpression) {
			listener.enterConditionalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitConditionalAndExpression) {
			listener.exitConditionalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitConditionalAndExpression) {
			return visitor.visitConditionalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalOrExpressionContext extends ParserRuleContext {
	public _leftCondition: ConditionalOrExpressionContext;
	public _rightCondition: ConditionalAndExpressionContext;
	public COND_OR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.COND_OR, 0); }
	public conditionalOrExpression(): ConditionalOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalOrExpressionContext);
	}
	public conditionalAndExpression(): ConditionalAndExpressionContext {
		return this.getRuleContext(0, ConditionalAndExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_conditionalOrExpression; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterConditionalOrExpression) {
			listener.enterConditionalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitConditionalOrExpression) {
			listener.exitConditionalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitConditionalOrExpression) {
			return visitor.visitConditionalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	public _leftValue: ValueContext;
	public _rightValue: ValueContext;
	public comparisonOperator(): ComparisonOperatorContext | undefined {
		return this.tryGetRuleContext(0, ComparisonOperatorContext);
	}
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public whateverExpression(): WhateverExpressionContext | undefined {
		return this.tryGetRuleContext(0, WhateverExpressionContext);
	}
	public existsExpression(): ExistsExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExistsExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_comparison; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExistsExpressionContext extends ParserRuleContext {
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public inValue(): InValueContext {
		return this.getRuleContext(0, InValueContext);
	}
	public COMMA(): TerminalNode { return this.getToken(YmlParser.COMMA, 0); }
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(YmlParser.EXISTS, 0); }
	public NO_EXISTS(): TerminalNode | undefined { return this.tryGetToken(YmlParser.NO_EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_existsExpression; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterExistsExpression) {
			listener.enterExistsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitExistsExpression) {
			listener.exitExistsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitExistsExpression) {
			return visitor.visitExistsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhateverExpressionContext extends ParserRuleContext {
	public WHATEVER(): TerminalNode { return this.getToken(YmlParser.WHATEVER, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public inValue(): InValueContext {
		return this.getRuleContext(0, InValueContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public THEN(): TerminalNode { return this.getToken(YmlParser.THEN, 0); }
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_whateverExpression; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterWhateverExpression) {
			listener.enterWhateverExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitWhateverExpression) {
			listener.exitWhateverExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitWhateverExpression) {
			return visitor.visitWhateverExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public EQUAL_COMP(): TerminalNode | undefined { return this.tryGetToken(YmlParser.EQUAL_COMP, 0); }
	public NOT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(YmlParser.NOT_EQUALS, 0); }
	public LESS_OR_EQUAL(): TerminalNode | undefined { return this.tryGetToken(YmlParser.LESS_OR_EQUAL, 0); }
	public GREATE_OR_EQUAL(): TerminalNode | undefined { return this.tryGetToken(YmlParser.GREATE_OR_EQUAL, 0); }
	public STRICT_LESS(): TerminalNode | undefined { return this.tryGetToken(YmlParser.STRICT_LESS, 0); }
	public STRICT_GREAT(): TerminalNode | undefined { return this.tryGetToken(YmlParser.STRICT_GREAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_multivaluedAssignmentContext extends ParserRuleContext {
	public _leftHand: Assignment_leftHandSideContext;
	public _rightHand: ValueContext;
	public MULTIVALUED_ASSIGNMENT(): TerminalNode { return this.getToken(YmlParser.MULTIVALUED_ASSIGNMENT, 0); }
	public assignment_leftHandSide(): Assignment_leftHandSideContext {
		return this.getRuleContext(0, Assignment_leftHandSideContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_multivaluedAssignment; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_multivaluedAssignment) {
			listener.enterInstruction_multivaluedAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_multivaluedAssignment) {
			listener.exitInstruction_multivaluedAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_multivaluedAssignment) {
			return visitor.visitInstruction_multivaluedAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_assignmentContext extends ParserRuleContext {
	public _leftHand: Assignment_leftHandSideContext;
	public _rightHand: ValueContext;
	public EQUAL_ASSIGNMENT(): TerminalNode { return this.getToken(YmlParser.EQUAL_ASSIGNMENT, 0); }
	public assignment_leftHandSide(): Assignment_leftHandSideContext {
		return this.getRuleContext(0, Assignment_leftHandSideContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_assignment; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_assignment) {
			listener.enterInstruction_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_assignment) {
			listener.exitInstruction_assignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_assignment) {
			return visitor.visitInstruction_assignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_leftHandSideContext extends ParserRuleContext {
	public chainedCall(): ChainedCallContext {
		return this.getRuleContext(0, ChainedCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_assignment_leftHandSide; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterAssignment_leftHandSide) {
			listener.enterAssignment_leftHandSide(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitAssignment_leftHandSide) {
			listener.exitAssignment_leftHandSide(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitAssignment_leftHandSide) {
			return visitor.visitAssignment_leftHandSide(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionBlockContext extends ParserRuleContext {
	public order0Condition(): Order0ConditionContext[];
	public order0Condition(i: number): Order0ConditionContext;
	public order0Condition(i?: number): Order0ConditionContext | Order0ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Order0ConditionContext);
		} else {
			return this.getRuleContext(i, Order0ConditionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_conditionBlock; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterConditionBlock) {
			listener.enterConditionBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitConditionBlock) {
			listener.exitConditionBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitConditionBlock) {
			return visitor.visitConditionBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Order0ConditionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public existentialOperator(): ExistentialOperatorContext | undefined {
		return this.tryGetRuleContext(0, ExistentialOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_order0Condition; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterOrder0Condition) {
			listener.enterOrder0Condition(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitOrder0Condition) {
			listener.exitOrder0Condition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitOrder0Condition) {
			return visitor.visitOrder0Condition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionBlockOrInstructionContext extends ParserRuleContext {
	public emptyBlock(): EmptyBlockContext | undefined {
		return this.tryGetRuleContext(0, EmptyBlockContext);
	}
	public actionBlock(): ActionBlockContext | undefined {
		return this.tryGetRuleContext(0, ActionBlockContext);
	}
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_actionBlockOrInstruction; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterActionBlockOrInstruction) {
			listener.enterActionBlockOrInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitActionBlockOrInstruction) {
			listener.exitActionBlockOrInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitActionBlockOrInstruction) {
			return visitor.visitActionBlockOrInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_switchExpr_withValueContext extends ParserRuleContext {
	public SWITCH_EXPR(): TerminalNode { return this.getToken(YmlParser.SWITCH_EXPR, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	public instructionCase_withValue(): InstructionCase_withValueContext[];
	public instructionCase_withValue(i: number): InstructionCase_withValueContext;
	public instructionCase_withValue(i?: number): InstructionCase_withValueContext | InstructionCase_withValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionCase_withValueContext);
		} else {
			return this.getRuleContext(i, InstructionCase_withValueContext);
		}
	}
	public instructionDefault_withValue(): InstructionDefault_withValueContext | undefined {
		return this.tryGetRuleContext(0, InstructionDefault_withValueContext);
	}
	public NO_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(YmlParser.NO_DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_switchExpr_withValue; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_switchExpr_withValue) {
			listener.enterInstruction_switchExpr_withValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_switchExpr_withValue) {
			listener.exitInstruction_switchExpr_withValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_switchExpr_withValue) {
			return visitor.visitInstruction_switchExpr_withValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_switchExpr_asIfContext extends ParserRuleContext {
	public SWITCH_EXPR(): TerminalNode { return this.getToken(YmlParser.SWITCH_EXPR, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	public instructionCase_withValue(): InstructionCase_withValueContext[];
	public instructionCase_withValue(i: number): InstructionCase_withValueContext;
	public instructionCase_withValue(i?: number): InstructionCase_withValueContext | InstructionCase_withValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionCase_withValueContext);
		} else {
			return this.getRuleContext(i, InstructionCase_withValueContext);
		}
	}
	public instructionDefault_withValue(): InstructionDefault_withValueContext | undefined {
		return this.tryGetRuleContext(0, InstructionDefault_withValueContext);
	}
	public NO_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(YmlParser.NO_DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_switchExpr_asIf; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_switchExpr_asIf) {
			listener.enterInstruction_switchExpr_asIf(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_switchExpr_asIf) {
			listener.exitInstruction_switchExpr_asIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_switchExpr_asIf) {
			return visitor.visitInstruction_switchExpr_asIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_switchCase_withValueContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(YmlParser.SWITCH, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	public instructionCase(): InstructionCaseContext[];
	public instructionCase(i: number): InstructionCaseContext;
	public instructionCase(i?: number): InstructionCaseContext | InstructionCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionCaseContext);
		} else {
			return this.getRuleContext(i, InstructionCaseContext);
		}
	}
	public instructionDefault(): InstructionDefaultContext | undefined {
		return this.tryGetRuleContext(0, InstructionDefaultContext);
	}
	public NO_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(YmlParser.NO_DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_switchCase_withValue; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_switchCase_withValue) {
			listener.enterInstruction_switchCase_withValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_switchCase_withValue) {
			listener.exitInstruction_switchCase_withValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_switchCase_withValue) {
			return visitor.visitInstruction_switchCase_withValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_switchCase_asIfContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(YmlParser.SWITCH, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	public instructionCase(): InstructionCaseContext[];
	public instructionCase(i: number): InstructionCaseContext;
	public instructionCase(i?: number): InstructionCaseContext | InstructionCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionCaseContext);
		} else {
			return this.getRuleContext(i, InstructionCaseContext);
		}
	}
	public instructionDefault(): InstructionDefaultContext | undefined {
		return this.tryGetRuleContext(0, InstructionDefaultContext);
	}
	public NO_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(YmlParser.NO_DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_switchCase_asIf; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_switchCase_asIf) {
			listener.enterInstruction_switchCase_asIf(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_switchCase_asIf) {
			listener.exitInstruction_switchCase_asIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_switchCase_asIf) {
			return visitor.visitInstruction_switchCase_asIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionDefault_withValueContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(YmlParser.DEFAULT, 0); }
	public COLON(): TerminalNode { return this.getToken(YmlParser.COLON, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instructionDefault_withValue; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstructionDefault_withValue) {
			listener.enterInstructionDefault_withValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstructionDefault_withValue) {
			listener.exitInstructionDefault_withValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstructionDefault_withValue) {
			return visitor.visitInstructionDefault_withValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionCase_withValueContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(YmlParser.CASE, 0); }
	public COLON(): TerminalNode { return this.getToken(YmlParser.COLON, 0); }
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPEN_PAR, 0); }
	public valueOrCondition(): ValueOrConditionContext | undefined {
		return this.tryGetRuleContext(0, ValueOrConditionContext);
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.CLOSE_PAR, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instructionCase_withValue; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstructionCase_withValue) {
			listener.enterInstructionCase_withValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstructionCase_withValue) {
			listener.exitInstructionCase_withValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstructionCase_withValue) {
			return visitor.visitInstructionCase_withValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionCaseContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(YmlParser.CASE, 0); }
	public COLON(): TerminalNode { return this.getToken(YmlParser.COLON, 0); }
	public actionBlockOrInstruction(): ActionBlockOrInstructionContext {
		return this.getRuleContext(0, ActionBlockOrInstructionContext);
	}
	public simpleList(): SimpleListContext | undefined {
		return this.tryGetRuleContext(0, SimpleListContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPEN_PAR, 0); }
	public valueOrCondition(): ValueOrConditionContext | undefined {
		return this.tryGetRuleContext(0, ValueOrConditionContext);
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instructionCase; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstructionCase) {
			listener.enterInstructionCase(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstructionCase) {
			listener.exitInstructionCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstructionCase) {
			return visitor.visitInstructionCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionDefaultContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(YmlParser.DEFAULT, 0); }
	public COLON(): TerminalNode { return this.getToken(YmlParser.COLON, 0); }
	public actionBlockOrInstruction(): ActionBlockOrInstructionContext {
		return this.getRuleContext(0, ActionBlockOrInstructionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instructionDefault; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstructionDefault) {
			listener.enterInstructionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstructionDefault) {
			listener.exitInstructionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstructionDefault) {
			return visitor.visitInstructionDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_breakContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(YmlParser.BREAK, 0); }
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(YmlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_break; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_break) {
			listener.enterInstruction_break(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_break) {
			listener.exitInstruction_break(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_break) {
			return visitor.visitInstruction_break(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_ifElseContext extends ParserRuleContext {
	public _main: IfExpressionContext;
	public _elseIfs: ElseIfExpressionContext;
	public _elseExpr: ElseExpressionContext;
	public ifExpression(): IfExpressionContext {
		return this.getRuleContext(0, IfExpressionContext);
	}
	public elseIfExpression(): ElseIfExpressionContext[];
	public elseIfExpression(i: number): ElseIfExpressionContext;
	public elseIfExpression(i?: number): ElseIfExpressionContext | ElseIfExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseIfExpressionContext);
		} else {
			return this.getRuleContext(i, ElseIfExpressionContext);
		}
	}
	public elseExpression(): ElseExpressionContext | undefined {
		return this.tryGetRuleContext(0, ElseExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_ifElse; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_ifElse) {
			listener.enterInstruction_ifElse(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_ifElse) {
			listener.exitInstruction_ifElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_ifElse) {
			return visitor.visitInstruction_ifElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseExpressionContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(YmlParser.ELSE, 0); }
	public actionBlockOrInstruction(): ActionBlockOrInstructionContext {
		return this.getRuleContext(0, ActionBlockOrInstructionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_elseExpression; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterElseExpression) {
			listener.enterElseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitElseExpression) {
			listener.exitElseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitElseExpression) {
			return visitor.visitElseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseIfExpressionContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(YmlParser.ELSE, 0); }
	public ifExpression(): IfExpressionContext {
		return this.getRuleContext(0, IfExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_elseIfExpression; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterElseIfExpression) {
			listener.enterElseIfExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitElseIfExpression) {
			listener.exitElseIfExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitElseIfExpression) {
			return visitor.visitElseIfExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfExpressionContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(YmlParser.IF, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public order0Condition(): Order0ConditionContext {
		return this.getRuleContext(0, Order0ConditionContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public actionBlockOrInstruction(): ActionBlockOrInstructionContext {
		return this.getRuleContext(0, ActionBlockOrInstructionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_ifExpression; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterIfExpression) {
			listener.enterIfExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitIfExpression) {
			listener.exitIfExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitIfExpression) {
			return visitor.visitIfExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_timeCounterContext extends ParserRuleContext {
	public TIME_COUNTER(): TerminalNode { return this.getToken(YmlParser.TIME_COUNTER, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public COMMA(): TerminalNode { return this.getToken(YmlParser.COMMA, 0); }
	public actionBlock(): ActionBlockContext {
		return this.getRuleContext(0, ActionBlockContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_timeCounter; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_timeCounter) {
			listener.enterInstruction_timeCounter(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_timeCounter) {
			listener.exitInstruction_timeCounter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_timeCounter) {
			return visitor.visitInstruction_timeCounter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InValueContext extends ParserRuleContext {
	public IN(): TerminalNode { return this.getToken(YmlParser.IN, 0); }
	public instanciationVariable(): InstanciationVariableContext | undefined {
		return this.tryGetRuleContext(0, InstanciationVariableContext);
	}
	public ymlId(): YmlIdContext | undefined {
		return this.tryGetRuleContext(0, YmlIdContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(YmlParser.FUNCTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_inValue; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInValue) {
			listener.enterInValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInValue) {
			listener.exitInValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInValue) {
			return visitor.visitInValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_forallContext extends ParserRuleContext {
	public FORALL(): TerminalNode { return this.getToken(YmlParser.FORALL, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public actionBlockOrInstruction(): ActionBlockOrInstructionContext {
		return this.getRuleContext(0, ActionBlockOrInstructionContext);
	}
	public conditionalExpression(): ConditionalExpressionContext[];
	public conditionalExpression(i: number): ConditionalExpressionContext;
	public conditionalExpression(i?: number): ConditionalExpressionContext | ConditionalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalExpressionContext);
		} else {
			return this.getRuleContext(i, ConditionalExpressionContext);
		}
	}
	public inValue(): InValueContext[];
	public inValue(i: number): InValueContext;
	public inValue(i?: number): InValueContext | InValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InValueContext);
		} else {
			return this.getRuleContext(i, InValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_forall; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_forall) {
			listener.enterInstruction_forall(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_forall) {
			listener.exitInstruction_forall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_forall) {
			return visitor.visitInstruction_forall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_whileContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(YmlParser.WHILE, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public order0Condition(): Order0ConditionContext {
		return this.getRuleContext(0, Order0ConditionContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public actionBlockOrInstruction(): ActionBlockOrInstructionContext {
		return this.getRuleContext(0, ActionBlockOrInstructionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_while; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_while) {
			listener.enterInstruction_while(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_while) {
			listener.exitInstruction_while(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_while) {
			return visitor.visitInstruction_while(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_returnContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(YmlParser.RETURN, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_return; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_return) {
			listener.enterInstruction_return(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_return) {
			listener.exitInstruction_return(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_return) {
			return visitor.visitInstruction_return(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_chainedCallContext extends ParserRuleContext {
	public chainedCall(): ChainedCallContext {
		return this.getRuleContext(0, ChainedCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_chainedCall; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_chainedCall) {
			listener.enterInstruction_chainedCall(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_chainedCall) {
			listener.exitInstruction_chainedCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_chainedCall) {
			return visitor.visitInstruction_chainedCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public instruction_multivaluedAssignment(): Instruction_multivaluedAssignmentContext | undefined {
		return this.tryGetRuleContext(0, Instruction_multivaluedAssignmentContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(YmlParser.SEMICOLON, 0); }
	public instruction_assignment(): Instruction_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Instruction_assignmentContext);
	}
	public instruction_return(): Instruction_returnContext | undefined {
		return this.tryGetRuleContext(0, Instruction_returnContext);
	}
	public instruction_chainedCall(): Instruction_chainedCallContext | undefined {
		return this.tryGetRuleContext(0, Instruction_chainedCallContext);
	}
	public instruction_for(): Instruction_forContext | undefined {
		return this.tryGetRuleContext(0, Instruction_forContext);
	}
	public instruction_forEach(): Instruction_forEachContext | undefined {
		return this.tryGetRuleContext(0, Instruction_forEachContext);
	}
	public instruction_forall(): Instruction_forallContext | undefined {
		return this.tryGetRuleContext(0, Instruction_forallContext);
	}
	public instruction_ifElse(): Instruction_ifElseContext | undefined {
		return this.tryGetRuleContext(0, Instruction_ifElseContext);
	}
	public instruction_try_catch(): Instruction_try_catchContext | undefined {
		return this.tryGetRuleContext(0, Instruction_try_catchContext);
	}
	public instruction_switchCase_asIf(): Instruction_switchCase_asIfContext | undefined {
		return this.tryGetRuleContext(0, Instruction_switchCase_asIfContext);
	}
	public instruction_break(): Instruction_breakContext | undefined {
		return this.tryGetRuleContext(0, Instruction_breakContext);
	}
	public instruction_switchCase_withValue(): Instruction_switchCase_withValueContext | undefined {
		return this.tryGetRuleContext(0, Instruction_switchCase_withValueContext);
	}
	public instruction_ifExprBlock(): Instruction_ifExprBlockContext | undefined {
		return this.tryGetRuleContext(0, Instruction_ifExprBlockContext);
	}
	public instruction_while(): Instruction_whileContext | undefined {
		return this.tryGetRuleContext(0, Instruction_whileContext);
	}
	public instruction_timeCounter(): Instruction_timeCounterContext | undefined {
		return this.tryGetRuleContext(0, Instruction_timeCounterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction) {
			return visitor.visitInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_doContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(YmlParser.DO, 0); }
	public actionBlock(): ActionBlockContext {
		return this.getRuleContext(0, ActionBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_do; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_do) {
			listener.enterInstruction_do(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_do) {
			listener.exitInstruction_do(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_do) {
			return visitor.visitInstruction_do(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_try_catchContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(YmlParser.TRY, 0); }
	public OPEN_PAR(): TerminalNode[];
	public OPEN_PAR(i: number): TerminalNode;
	public OPEN_PAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.OPEN_PAR);
		} else {
			return this.getToken(YmlParser.OPEN_PAR, i);
		}
	}
	public instruction_do(): Instruction_doContext {
		return this.getRuleContext(0, Instruction_doContext);
	}
	public CATCH(): TerminalNode { return this.getToken(YmlParser.CATCH, 0); }
	public CLOSE_PAR(): TerminalNode[];
	public CLOSE_PAR(i: number): TerminalNode;
	public CLOSE_PAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.CLOSE_PAR);
		} else {
			return this.getToken(YmlParser.CLOSE_PAR, i);
		}
	}
	public actionBlock(): ActionBlockContext {
		return this.getRuleContext(0, ActionBlockContext);
	}
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_try_catch; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_try_catch) {
			listener.enterInstruction_try_catch(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_try_catch) {
			listener.exitInstruction_try_catch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_try_catch) {
			return visitor.visitInstruction_try_catch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionBlockContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	public instruction(): InstructionContext[];
	public instruction(i: number): InstructionContext;
	public instruction(i?: number): InstructionContext | InstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionContext);
		} else {
			return this.getRuleContext(i, InstructionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_actionBlock; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterActionBlock) {
			listener.enterActionBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitActionBlock) {
			listener.exitActionBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitActionBlock) {
			return visitor.visitActionBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArithmeticOperatorContext extends ParserRuleContext {
	public ADD(): TerminalNode | undefined { return this.tryGetToken(YmlParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(YmlParser.SUB, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(YmlParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(YmlParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(YmlParser.MOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_arithmeticOperator; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterArithmeticOperator) {
			listener.enterArithmeticOperator(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitArithmeticOperator) {
			listener.exitArithmeticOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitArithmeticOperator) {
			return visitor.visitArithmeticOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public SUB(): TerminalNode | undefined { return this.tryGetToken(YmlParser.SUB, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public chainedCall(): ChainedCallContext | undefined {
		return this.tryGetRuleContext(0, ChainedCallContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(YmlParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArithmeticExpressionContext extends ParserRuleContext {
	public _parenthizedExpression: ArithmeticExpressionContext;
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.CLOSE_PAR, 0); }
	public arithmeticExpression(): ArithmeticExpressionContext[];
	public arithmeticExpression(i: number): ArithmeticExpressionContext;
	public arithmeticExpression(i?: number): ArithmeticExpressionContext | ArithmeticExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArithmeticExpressionContext);
		} else {
			return this.getRuleContext(i, ArithmeticExpressionContext);
		}
	}
	public arithmeticOperator(): ArithmeticOperatorContext | undefined {
		return this.tryGetRuleContext(0, ArithmeticOperatorContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_arithmeticExpression; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterArithmeticExpression) {
			listener.enterArithmeticExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitArithmeticExpression) {
			listener.exitArithmeticExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitArithmeticExpression) {
			return visitor.visitArithmeticExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExistentialOperatorContext extends ParserRuleContext {
	public _operator: YmlIdContext;
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public order1FullCondition(): Order1FullConditionContext {
		return this.getRuleContext(0, Order1FullConditionContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_existentialOperator; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterExistentialOperator) {
			listener.enterExistentialOperator(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitExistentialOperator) {
			listener.exitExistentialOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitExistentialOperator) {
			return visitor.visitExistentialOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableBlockContentContext extends ParserRuleContext {
	public memberDeclaration(): MemberDeclarationContext[];
	public memberDeclaration(i: number): MemberDeclarationContext;
	public memberDeclaration(i?: number): MemberDeclarationContext | MemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberDeclarationContext);
		} else {
			return this.getRuleContext(i, MemberDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_variableBlockContent; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterVariableBlockContent) {
			listener.enterVariableBlockContent(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitVariableBlockContent) {
			listener.exitVariableBlockContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitVariableBlockContent) {
			return visitor.visitVariableBlockContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticDeclarationContext extends ParserRuleContext {
	public _declarationType: YmlIdContext;
	public _declarationName: YmlIdContext;
	public _extended: YmlIdContext;
	public _declarationOptions: FieldContext;
	public conditionInstance(): ConditionInstanceContext | undefined {
		return this.tryGetRuleContext(0, ConditionInstanceContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(YmlParser.SEMICOLON, 0); }
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(YmlParser.EXTENDS, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_staticDeclaration; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterStaticDeclaration) {
			listener.enterStaticDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitStaticDeclaration) {
			listener.exitStaticDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitStaticDeclaration) {
			return visitor.visitStaticDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternDeclarationContext extends ParserRuleContext {
	public EXTERN(): TerminalNode { return this.getToken(YmlParser.EXTERN, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(YmlParser.SEMICOLON, 0); }
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_externDeclaration; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterExternDeclaration) {
			listener.enterExternDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitExternDeclaration) {
			listener.exitExternDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitExternDeclaration) {
			return visitor.visitExternDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	public _value: ValueContext;
	public _elements: ValueContext[] = [];
	public OPEN_BRACKET(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_array; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitArray) {
			return visitor.visitArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleListContext extends ParserRuleContext {
	public _value: ValueContext;
	public _elements: ValueContext[] = [];
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_simpleList; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterSimpleList) {
			listener.enterSimpleList(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitSimpleList) {
			listener.exitSimpleList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitSimpleList) {
			return visitor.visitSimpleList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstListContext extends ParserRuleContext {
	public _value: ValueContext;
	public _elements: ValueContext[] = [];
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.COMMA);
		} else {
			return this.getToken(YmlParser.COMMA, i);
		}
	}
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_constList; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterConstList) {
			listener.enterConstList(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitConstList) {
			listener.exitConstList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitConstList) {
			return visitor.visitConstList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GranuleContext extends ParserRuleContext {
	public OPEN_GRANULE(): TerminalNode { return this.getToken(YmlParser.OPEN_GRANULE, 0); }
	public CLOSE_GRANULE(): TerminalNode { return this.getToken(YmlParser.CLOSE_GRANULE, 0); }
	public granule(): GranuleContext[];
	public granule(i: number): GranuleContext;
	public granule(i?: number): GranuleContext | GranuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GranuleContext);
		} else {
			return this.getRuleContext(i, GranuleContext);
		}
	}
	public ANY_TEXT(): TerminalNode[];
	public ANY_TEXT(i: number): TerminalNode;
	public ANY_TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.ANY_TEXT);
		} else {
			return this.getToken(YmlParser.ANY_TEXT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_granule; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterGranule) {
			listener.enterGranule(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitGranule) {
			listener.exitGranule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitGranule) {
			return visitor.visitGranule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectCompleteContext extends ParserRuleContext {
	public _completedElemId: YmlIdContext;
	public _memberOption: FieldContext;
	public COMPLETE(): TerminalNode { return this.getToken(YmlParser.COMPLETE, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(YmlParser.SEMICOLON, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_objectComplete; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterObjectComplete) {
			listener.enterObjectComplete(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitObjectComplete) {
			listener.exitObjectComplete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitObjectComplete) {
			return visitor.visitObjectComplete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassCompleteContext extends ParserRuleContext {
	public COMPLETE(): TerminalNode { return this.getToken(YmlParser.COMPLETE, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(YmlParser.SEMICOLON, 0); }
	public ymlId(): YmlIdContext | undefined {
		return this.tryGetRuleContext(0, YmlIdContext);
	}
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(YmlParser.FUNCTION, 0); }
	public modification(): ModificationContext[];
	public modification(i: number): ModificationContext;
	public modification(i?: number): ModificationContext | ModificationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModificationContext);
		} else {
			return this.getRuleContext(i, ModificationContext);
		}
	}
	public classAttributeDeclaration(): ClassAttributeDeclarationContext[];
	public classAttributeDeclaration(i: number): ClassAttributeDeclarationContext;
	public classAttributeDeclaration(i?: number): ClassAttributeDeclarationContext | ClassAttributeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassAttributeDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassAttributeDeclarationContext);
		}
	}
	public methodCompleteDeclaration(): MethodCompleteDeclarationContext[];
	public methodCompleteDeclaration(i: number): MethodCompleteDeclarationContext;
	public methodCompleteDeclaration(i?: number): MethodCompleteDeclarationContext | MethodCompleteDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodCompleteDeclarationContext);
		} else {
			return this.getRuleContext(i, MethodCompleteDeclarationContext);
		}
	}
	public memberDeclaration(): MemberDeclarationContext[];
	public memberDeclaration(i: number): MemberDeclarationContext;
	public memberDeclaration(i?: number): MemberDeclarationContext | MemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberDeclarationContext);
		} else {
			return this.getRuleContext(i, MemberDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_classComplete; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterClassComplete) {
			listener.enterClassComplete(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitClassComplete) {
			listener.exitClassComplete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitClassComplete) {
			return visitor.visitClassComplete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModificationContext extends ParserRuleContext {
	public MODIFY(): TerminalNode { return this.getToken(YmlParser.MODIFY, 0); }
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
	}
	public argsBlock(): ArgsBlockContext {
		return this.getRuleContext(0, ArgsBlockContext);
	}
	public FUNCTION(): TerminalNode { return this.getToken(YmlParser.FUNCTION, 0); }
	public OVERRIDE(): TerminalNode { return this.getToken(YmlParser.OVERRIDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_modification; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterModification) {
			listener.enterModification(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitModification) {
			listener.exitModification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitModification) {
			return visitor.visitModification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RulesetContext extends ParserRuleContext {
	public RULESET(): TerminalNode { return this.getToken(YmlParser.RULESET, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	public rules(): RulesContext | undefined {
		return this.tryGetRuleContext(0, RulesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_ruleset; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterRuleset) {
			listener.enterRuleset(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitRuleset) {
			listener.exitRuleset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitRuleset) {
			return visitor.visitRuleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RulesContext extends ParserRuleContext {
	public ymlrule(): YmlruleContext[];
	public ymlrule(i: number): YmlruleContext;
	public ymlrule(i?: number): YmlruleContext | YmlruleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlruleContext);
		} else {
			return this.getRuleContext(i, YmlruleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_rules; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterRules) {
			listener.enterRules(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitRules) {
			listener.exitRules(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitRules) {
			return visitor.visitRules(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YmlruleContext extends ParserRuleContext {
	public RULE_TYPE(): TerminalNode { return this.getToken(YmlParser.RULE_TYPE, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public IF(): TerminalNode { return this.getToken(YmlParser.IF, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public THEN(): TerminalNode { return this.getToken(YmlParser.THEN, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(YmlParser.SEMICOLON, 0); }
	public conditionalExpression(): ConditionalExpressionContext[];
	public conditionalExpression(i: number): ConditionalExpressionContext;
	public conditionalExpression(i?: number): ConditionalExpressionContext | ConditionalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalExpressionContext);
		} else {
			return this.getRuleContext(i, ConditionalExpressionContext);
		}
	}
	public inValue(): InValueContext[];
	public inValue(i: number): InValueContext;
	public inValue(i?: number): InValueContext | InValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InValueContext);
		} else {
			return this.getRuleContext(i, InValueContext);
		}
	}
	public instruction_assignment(): Instruction_assignmentContext[];
	public instruction_assignment(i: number): Instruction_assignmentContext;
	public instruction_assignment(i?: number): Instruction_assignmentContext | Instruction_assignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Instruction_assignmentContext);
		} else {
			return this.getRuleContext(i, Instruction_assignmentContext);
		}
	}
	public instruction(): InstructionContext[];
	public instruction(i: number): InstructionContext;
	public instruction(i?: number): InstructionContext | InstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionContext);
		} else {
			return this.getRuleContext(i, InstructionContext);
		}
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_ymlrule; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterYmlrule) {
			listener.enterYmlrule(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitYmlrule) {
			listener.exitYmlrule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitYmlrule) {
			return visitor.visitYmlrule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyBlockContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_emptyBlock; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterEmptyBlock) {
			listener.enterEmptyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitEmptyBlock) {
			listener.exitEmptyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitEmptyBlock) {
			return visitor.visitEmptyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionInstanceContext extends ParserRuleContext {
	public CONDITION(): TerminalNode { return this.getToken(YmlParser.CONDITION, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(YmlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_conditionInstance; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterConditionInstance) {
			listener.enterConditionInstance(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitConditionInstance) {
			listener.exitConditionInstance(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitConditionInstance) {
			return visitor.visitConditionInstance(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


