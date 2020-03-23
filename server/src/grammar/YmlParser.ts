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
	public static readonly SEMICOLON = 57;
	public static readonly COMMA = 58;
	public static readonly COLON = 59;
	public static readonly DOT = 60;
	public static readonly MULTIVALUED_EXPRESSION = 61;
	public static readonly FIELD_INTRO = 62;
	public static readonly REPLACE_FIELD_VALUE_INTRO = 63;
	public static readonly REMOVE_FIELD = 64;
	public static readonly ADD_FIELD = 65;
	public static readonly INLINE_DECL_INTRO = 66;
	public static readonly OPEN_PAR = 67;
	public static readonly CLOSE_PAR = 68;
	public static readonly OPEN_BRACKET = 69;
	public static readonly CLOSE_BRACKET = 70;
	public static readonly OPEN_BRACE = 71;
	public static readonly CLOSE_BRACE = 72;
	public static readonly SINGLE_QUOTE = 73;
	public static readonly BACKSLASH = 74;
	public static readonly QUESTION_MARK = 75;
	public static readonly AT = 76;
	public static readonly EQUAL_COMP = 77;
	public static readonly NOT_EQUALS = 78;
	public static readonly LESS_OR_EQUAL = 79;
	public static readonly GREATE_OR_EQUAL = 80;
	public static readonly STRICT_LESS = 81;
	public static readonly STRICT_GREAT = 82;
	public static readonly COND_AND = 83;
	public static readonly COND_OR = 84;
	public static readonly EQUAL_ASSIGNMENT = 85;
	public static readonly MULTIVALUED_ASSIGNMENT = 86;
	public static readonly OPEN_GRANULE = 87;
	public static readonly ADD = 88;
	public static readonly DIV = 89;
	public static readonly MUL = 90;
	public static readonly SUB = 91;
	public static readonly MOD = 92;
	public static readonly DATE = 93;
	public static readonly STRING = 94;
	public static readonly DOCUMENTATION = 95;
	public static readonly WS = 96;
	public static readonly NUMBER = 97;
	public static readonly DOUBLE = 98;
	public static readonly INTEGER = 99;
	public static readonly YMLID = 100;
	public static readonly ID = 101;
	public static readonly PREPROCESSING = 102;
	public static readonly LINE_COMMENT = 103;
	public static readonly MULTILINE_COMMENT = 104;
	public static readonly DECL_FILE_PREPROCESSING = 105;
	public static readonly DECL_FILE_LINE_COMMENT = 106;
	public static readonly DECL_FILE_MULTILINE_COMMENT = 107;
	public static readonly NAME = 108;
	public static readonly FILE_DECLARATION = 109;
	public static readonly DECL_FILE_WS = 110;
	public static readonly END_OF_FILE = 111;
	public static readonly CLOSE_GRANULE = 112;
	public static readonly SKIP_OTHER = 113;
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
	public static readonly RULE_documentation = 33;
	public static readonly RULE_objectReturnAttributeValue = 34;
	public static readonly RULE_objectAttributeValue = 35;
	public static readonly RULE_valueOrCondition = 36;
	public static readonly RULE_hashMap = 37;
	public static readonly RULE_hashMapKeyValue = 38;
	public static readonly RULE_hashMapKey = 39;
	public static readonly RULE_hashMapValue = 40;
	public static readonly RULE_value = 41;
	public static readonly RULE_as = 42;
	public static readonly RULE_applyCollection = 43;
	public static readonly RULE_applyCollectionOn = 44;
	public static readonly RULE_instruction_forEach = 45;
	public static readonly RULE_instruction_for = 46;
	public static readonly RULE_instruction_ifExprBlock = 47;
	public static readonly RULE_ifExprBlock = 48;
	public static readonly RULE_bool = 49;
	public static readonly RULE_nonArithmeticValue = 50;
	public static readonly RULE_instanciationVariable = 51;
	public static readonly RULE_possiblyIndexedExpression = 52;
	public static readonly RULE_expression = 53;
	public static readonly RULE_functionCall = 54;
	public static readonly RULE_index = 55;
	public static readonly RULE_functionArgument = 56;
	public static readonly RULE_chainedCall = 57;
	public static readonly RULE_inlineDeclaration = 58;
	public static readonly RULE_inlineOperation = 59;
	public static readonly RULE_fieldValue = 60;
	public static readonly RULE_function = 61;
	public static readonly RULE_argsBlock = 62;
	public static readonly RULE_localBlock = 63;
	public static readonly RULE_staticBlock = 64;
	public static readonly RULE_methodDeclaration = 65;
	public static readonly RULE_methodCompleteDeclaration = 66;
	public static readonly RULE_methodIntro = 67;
	public static readonly RULE_argumentList = 68;
	public static readonly RULE_mandatoryArgs = 69;
	public static readonly RULE_mandatoryArgDecl = 70;
	public static readonly RULE_optionalArgs = 71;
	public static readonly RULE_optionalArgDecl = 72;
	public static readonly RULE_argOptionList = 73;
	public static readonly RULE_argOptionBlock = 74;
	public static readonly RULE_order1Block = 75;
	public static readonly RULE_instanciationCondition = 76;
	public static readonly RULE_order1FullCondition = 77;
	public static readonly RULE_parenthesisCondition = 78;
	public static readonly RULE_combinedComparison = 79;
	public static readonly RULE_comparison = 80;
	public static readonly RULE_comparisonOperator = 81;
	public static readonly RULE_instruction_multivaluedAssignment = 82;
	public static readonly RULE_instruction_assignment = 83;
	public static readonly RULE_assignment_leftHandSide = 84;
	public static readonly RULE_conditionBlock = 85;
	public static readonly RULE_order0Condition = 86;
	public static readonly RULE_actionBlockOrInstruction = 87;
	public static readonly RULE_instruction_switchExpr_withValue = 88;
	public static readonly RULE_instruction_switchExpr_asIf = 89;
	public static readonly RULE_instruction_switchCase_withValue = 90;
	public static readonly RULE_instruction_switchCase_asIf = 91;
	public static readonly RULE_instructionDefault_withValue = 92;
	public static readonly RULE_instructionCase_withValue = 93;
	public static readonly RULE_instructionCase = 94;
	public static readonly RULE_instructionDefault = 95;
	public static readonly RULE_instruction_break = 96;
	public static readonly RULE_instruction_ifElse = 97;
	public static readonly RULE_instruction_if = 98;
	public static readonly RULE_inValue = 99;
	public static readonly RULE_instruction_forall = 100;
	public static readonly RULE_instruction_while = 101;
	public static readonly RULE_instruction_return = 102;
	public static readonly RULE_instruction_chainedCall = 103;
	public static readonly RULE_instruction = 104;
	public static readonly RULE_instruction_do = 105;
	public static readonly RULE_instruction_try_catch = 106;
	public static readonly RULE_actionBlock = 107;
	public static readonly RULE_arithmeticOperator = 108;
	public static readonly RULE_unaryExpression = 109;
	public static readonly RULE_arithmeticExpression = 110;
	public static readonly RULE_existentialOperator = 111;
	public static readonly RULE_variableBlockContent = 112;
	public static readonly RULE_staticDeclaration = 113;
	public static readonly RULE_externDeclaration = 114;
	public static readonly RULE_array = 115;
	public static readonly RULE_simpleList = 116;
	public static readonly RULE_constList = 117;
	public static readonly RULE_granule = 118;
	public static readonly RULE_objectComplete = 119;
	public static readonly RULE_classComplete = 120;
	public static readonly RULE_ruleset = 121;
	public static readonly RULE_rules = 122;
	public static readonly RULE_ymlrule = 123;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"declarationFile", "kaoFile", "ymlEntity", "expressionMarker", "instruction_rename", 
		"ymlId", "yenum", "enumElement", "enum_attributes_block", "classDeclaration", 
		"classImplementation", "attributeImplementation", "override", "overrideInstruction", 
		"classDeclarationIntro", "extendsBlock", "parentClassName", "synonym", 
		"classAttributeDeclaration", "memberDeclaration", "memberType", "path", 
		"ymlIdOrPath", "field", "actionField", "actionFieldValues", "implementationField", 
		"instructionNoSemi", "commonField", "local_variable_decl", "localField", 
		"returnField", "classPropertiesBlock", "documentation", "objectReturnAttributeValue", 
		"objectAttributeValue", "valueOrCondition", "hashMap", "hashMapKeyValue", 
		"hashMapKey", "hashMapValue", "value", "as", "applyCollection", "applyCollectionOn", 
		"instruction_forEach", "instruction_for", "instruction_ifExprBlock", "ifExprBlock", 
		"bool", "nonArithmeticValue", "instanciationVariable", "possiblyIndexedExpression", 
		"expression", "functionCall", "index", "functionArgument", "chainedCall", 
		"inlineDeclaration", "inlineOperation", "fieldValue", "function", "argsBlock", 
		"localBlock", "staticBlock", "methodDeclaration", "methodCompleteDeclaration", 
		"methodIntro", "argumentList", "mandatoryArgs", "mandatoryArgDecl", "optionalArgs", 
		"optionalArgDecl", "argOptionList", "argOptionBlock", "order1Block", "instanciationCondition", 
		"order1FullCondition", "parenthesisCondition", "combinedComparison", "comparison", 
		"comparisonOperator", "instruction_multivaluedAssignment", "instruction_assignment", 
		"assignment_leftHandSide", "conditionBlock", "order0Condition", "actionBlockOrInstruction", 
		"instruction_switchExpr_withValue", "instruction_switchExpr_asIf", "instruction_switchCase_withValue", 
		"instruction_switchCase_asIf", "instructionDefault_withValue", "instructionCase_withValue", 
		"instructionCase", "instructionDefault", "instruction_break", "instruction_ifElse", 
		"instruction_if", "inValue", "instruction_forall", "instruction_while", 
		"instruction_return", "instruction_chainedCall", "instruction", "instruction_do", 
		"instruction_try_catch", "actionBlock", "arithmeticOperator", "unaryExpression", 
		"arithmeticExpression", "existentialOperator", "variableBlockContent", 
		"staticDeclaration", "externDeclaration", "array", "simpleList", "constList", 
		"granule", "objectComplete", "classComplete", "ruleset", "rules", "ymlrule",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'applyCollection'", "'__where'", "'__operation'", 
		"'__arguments'", "'applyCollectionOn'", "'where'", "'operation'", "'select'", 
		"'interface'", "'implementation'", "'extends'", "'function'", "'Function'", 
		"'method'", "'textMethod'", "'TextFunction'", "'field'", "'classProperties'", 
		"'extern'", "'complete'", "'synonym'", "'override'", "'args'", "'ifExpr'", 
		"'if'", "'then'", "'else'", "'enum'", "'do'", "'try'", "'catch'", "'foreach'", 
		"'forall'", "'in'", "'as'", "'return'", "'local'", "'true'", "'false'", 
		"'switch'", undefined, "'case'", "'default'", "'action'", "'noDefault'", 
		"'break'", "'static'", "'while'", "'for'", "'rename'", "'to'", "'forClass'", 
		"'ruleset'", "'Rule'", "'attributes'", "';'", "','", "':'", "'.'", "'>>'", 
		"'-->'", "'==>'", "'---'", "'+++'", "'->'", "'('", "')'", "'['", "']'", 
		"'{'", "'}'", "'''", "'\\'", "'?'", "'@'", "'=='", "'!='", "'<='", "'>='", 
		"'<'", "'>'", "'&&'", "'||'", "'='", "':='", undefined, "'+'", "'/'", 
		"'*'", "'-'", "'mod'",
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
		"FOR_CLASS", "RULESET", "RULE_TYPE", "ATTRIBUTES", "SEMICOLON", "COMMA", 
		"COLON", "DOT", "MULTIVALUED_EXPRESSION", "FIELD_INTRO", "REPLACE_FIELD_VALUE_INTRO", 
		"REMOVE_FIELD", "ADD_FIELD", "INLINE_DECL_INTRO", "OPEN_PAR", "CLOSE_PAR", 
		"OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_BRACE", "CLOSE_BRACE", "SINGLE_QUOTE", 
		"BACKSLASH", "QUESTION_MARK", "AT", "EQUAL_COMP", "NOT_EQUALS", "LESS_OR_EQUAL", 
		"GREATE_OR_EQUAL", "STRICT_LESS", "STRICT_GREAT", "COND_AND", "COND_OR", 
		"EQUAL_ASSIGNMENT", "MULTIVALUED_ASSIGNMENT", "OPEN_GRANULE", "ADD", "DIV", 
		"MUL", "SUB", "MOD", "DATE", "STRING", "DOCUMENTATION", "WS", "NUMBER", 
		"DOUBLE", "INTEGER", "YMLID", "ID", "PREPROCESSING", "LINE_COMMENT", "MULTILINE_COMMENT", 
		"DECL_FILE_PREPROCESSING", "DECL_FILE_LINE_COMMENT", "DECL_FILE_MULTILINE_COMMENT", 
		"NAME", "FILE_DECLARATION", "DECL_FILE_WS", "END_OF_FILE", "CLOSE_GRANULE", 
		"SKIP_OTHER",
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
			this.state = 248;
			this.match(YmlParser.FILETYPE);
			this.state = 252;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 249;
					this.match(YmlParser.FILE_DECLARATION);
					}
					}
				}
				this.state = 254;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 255;
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
			this.state = 265;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.EOF:
			case YmlParser.OPERATION_APPLY_COLLECTION_ON:
			case YmlParser.INTERFACE:
			case YmlParser.IMPLEMENTATION:
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
			case YmlParser.RENAME:
			case YmlParser.TO:
			case YmlParser.FOR_CLASS:
			case YmlParser.RULESET:
			case YmlParser.RULE_TYPE:
			case YmlParser.ATTRIBUTES:
			case YmlParser.MOD:
			case YmlParser.YMLID:
				{
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.INTERFACE) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.METHOD) | (1 << YmlParser.TEXT_METHOD) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.EXTERN) | (1 << YmlParser.COMPLETE) | (1 << YmlParser.ARGS) | (1 << YmlParser.ENUM))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
					{
					{
					this.state = 258;
					_localctx._entities = this.ymlEntity();
					}
					}
					this.state = 263;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case YmlParser.FILETYPE:
				{
				this.state = 264;
				this.declarationFile();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 267;
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
			this.state = 278;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 269;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 270;
				this.staticDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 271;
				this.classComplete();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 272;
				this.objectComplete();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 273;
				this.ymlrule();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 274;
				this.yenum();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 275;
				this.function();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 276;
				this.externDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 277;
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
			this.state = 284;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 280;
				this.match(YmlParser.DOT);
				this.state = 281;
				this.match(YmlParser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 282;
				this.match(YmlParser.DOT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 283;
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
			this.state = 286;
			this.match(YmlParser.RENAME);
			this.state = 287;
			this.ymlId();
			this.state = 288;
			this.match(YmlParser.TO);
			this.state = 289;
			this.ymlId();
			this.state = 290;
			this.match(YmlParser.FOR_CLASS);
			this.state = 291;
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
			this.state = 293;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID)) {
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
			this.state = 295;
			this.match(YmlParser.ENUM);
			this.state = 296;
			_localctx._yid = this.ymlId();
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.ATTRIBUTES) {
				{
				this.state = 297;
				this.enum_attributes_block();
				}
			}

			this.state = 300;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 301;
				this.enumElement();
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === YmlParser.COMMA) {
					{
					{
					this.state = 302;
					this.match(YmlParser.COMMA);
					this.state = 303;
					this.enumElement();
					}
					}
					this.state = 308;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID);
			this.state = 313;
			this.match(YmlParser.CLOSE_BRACE);
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.FIELD_INTRO - 62)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 62)) | (1 << (YmlParser.REMOVE_FIELD - 62)) | (1 << (YmlParser.ADD_FIELD - 62)))) !== 0)) {
				{
				{
				this.state = 314;
				_localctx._fields = this.field();
				}
				}
				this.state = 319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 320;
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
			this.state = 322;
			_localctx._yid = this.ymlId();
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.FIELD_INTRO - 62)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 62)) | (1 << (YmlParser.REMOVE_FIELD - 62)) | (1 << (YmlParser.ADD_FIELD - 62)))) !== 0)) {
				{
				{
				this.state = 323;
				_localctx._fields = this.field();
				}
				}
				this.state = 328;
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
			this.state = 329;
			this.match(YmlParser.ATTRIBUTES);
			this.state = 330;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 331;
			this.variableBlockContent();
			this.state = 332;
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
			this.state = 334;
			this.classDeclarationIntro();
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.FIELD_INTRO - 62)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 62)) | (1 << (YmlParser.REMOVE_FIELD - 62)) | (1 << (YmlParser.ADD_FIELD - 62)))) !== 0)) {
				{
				{
				this.state = 335;
				this.field();
				}
				}
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.FUNCTION) | (1 << YmlParser.METHOD) | (1 << YmlParser.TEXT_METHOD) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.FIELD))) !== 0)) {
				{
				this.state = 343;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case YmlParser.FIELD:
					{
					this.state = 341;
					this.classAttributeDeclaration();
					}
					break;
				case YmlParser.FUNCTION:
				case YmlParser.METHOD:
				case YmlParser.TEXT_METHOD:
				case YmlParser.TEXT_FUNCTION:
					{
					this.state = 342;
					this.methodDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.CLASSPROPERTIES) {
				{
				this.state = 348;
				this.classPropertiesBlock();
				}
			}

			this.state = 351;
			this.match(YmlParser.SEMICOLON);
			this.state = 352;
			this.classImplementation();
			this.state = 353;
			this.match(YmlParser.SEMICOLON);
			this.state = 355;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 354;
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
			this.state = 357;
			this.match(YmlParser.IMPLEMENTATION);
			this.state = 358;
			_localctx._className = this.ymlId();
			this.state = 362;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 359;
					this.attributeImplementation();
					}
					}
				}
				this.state = 364;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 368;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 365;
					this.overrideInstruction();
					}
					}
				}
				this.state = 370;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.OVERRIDE) {
				{
				this.state = 371;
				_localctx._overrideBlock = this.override();
				}
			}

			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.FIELD_INTRO - 62)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 62)) | (1 << (YmlParser.REMOVE_FIELD - 62)) | (1 << (YmlParser.ADD_FIELD - 62)))) !== 0)) {
				{
				{
				this.state = 374;
				_localctx._attributes = this.field();
				}
				}
				this.state = 379;
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
			this.state = 380;
			_localctx._attrName = this.ymlId();
			this.state = 382;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 381;
					_localctx._attributes = this.field();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 384;
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
			this.state = 386;
			this.match(YmlParser.OVERRIDE);
			this.state = 387;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
				{
				{
				this.state = 388;
				this.overrideInstruction();
				}
				}
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 394;
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
			this.state = 396;
			this.ymlId();
			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.FUNCTION) {
				{
				this.state = 397;
				this.match(YmlParser.FUNCTION);
				}
			}

			this.state = 403;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 400;
					this.field();
					}
					}
				}
				this.state = 405;
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
			this.state = 406;
			this.match(YmlParser.INTERFACE);
			this.state = 407;
			_localctx._className = this.ymlId();
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.EXTENDS) {
				{
				this.state = 408;
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
			this.state = 411;
			this.match(YmlParser.EXTENDS);
			this.state = 412;
			this.parentClassName();
			this.state = 417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 413;
				this.match(YmlParser.COMMA);
				this.state = 414;
				this.parentClassName();
				}
				}
				this.state = 419;
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
			this.state = 420;
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
			this.state = 437;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 422;
				this.match(YmlParser.SYNONYM);
				this.state = 423;
				this.constList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 424;
				this.match(YmlParser.SYNONYM);
				this.state = 425;
				this.match(YmlParser.OPEN_PAR);
				this.state = 434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.INLINE_DECL_INTRO - 36)) | (1 << (YmlParser.OPEN_PAR - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (YmlParser.OPEN_BRACKET - 69)) | (1 << (YmlParser.OPEN_BRACE - 69)) | (1 << (YmlParser.QUESTION_MARK - 69)) | (1 << (YmlParser.OPEN_GRANULE - 69)) | (1 << (YmlParser.SUB - 69)) | (1 << (YmlParser.MOD - 69)) | (1 << (YmlParser.DATE - 69)) | (1 << (YmlParser.STRING - 69)) | (1 << (YmlParser.NUMBER - 69)) | (1 << (YmlParser.YMLID - 69)))) !== 0)) {
					{
					this.state = 426;
					_localctx._value = this.value();
					_localctx._synonymElements.push(_localctx._value);
					this.state = 431;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === YmlParser.COMMA) {
						{
						{
						this.state = 427;
						this.match(YmlParser.COMMA);
						this.state = 428;
						_localctx._value = this.value();
						_localctx._synonymElements.push(_localctx._value);
						}
						}
						this.state = 433;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 436;
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
			this.state = 439;
			this.match(YmlParser.FIELD);
			this.state = 440;
			_localctx._memberName = this.ymlId();
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.FIELD_INTRO - 62)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 62)) | (1 << (YmlParser.REMOVE_FIELD - 62)) | (1 << (YmlParser.ADD_FIELD - 62)))) !== 0)) {
				{
				{
				this.state = 441;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 446;
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
			this.state = 447;
			_localctx._type = this.memberType();
			this.state = 448;
			_localctx._memberName = this.ymlId();
			this.state = 452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.FIELD_INTRO - 62)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 62)) | (1 << (YmlParser.REMOVE_FIELD - 62)) | (1 << (YmlParser.ADD_FIELD - 62)))) !== 0)) {
				{
				{
				this.state = 449;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 454;
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
			this.state = 455;
			this.ymlId();
			this.state = 460;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 456;
					this.match(YmlParser.COND_OR);
					this.state = 457;
					this.ymlId();
					}
					}
				}
				this.state = 462;
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
			this.state = 463;
			this.ymlId();
			this.state = 466;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 464;
					this.match(YmlParser.DOT);
					this.state = 465;
					this.ymlId();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 468;
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
			this.state = 472;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 470;
				this.ymlId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 471;
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
			this.state = 479;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 474;
				this.actionField();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 475;
				this.commonField();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 476;
				this.returnField();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 477;
				this.localField();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 478;
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
			this.state = 481;
			this.match(YmlParser.FIELD_INTRO);
			this.state = 482;
			_localctx._optionName = this.match(YmlParser.ACTION);
			this.state = 483;
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
			this.state = 489;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 485;
				this.actionBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 486;
				this.chainedCall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 487;
				this.instruction_return();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 488;
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
			this.state = 491;
			this.match(YmlParser.FIELD_INTRO);
			this.state = 492;
			this.match(YmlParser.IMPLEMENTATION);
			this.state = 493;
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
			this.state = 498;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 495;
				this.ifExprBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 496;
				this.chainedCall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 497;
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
			this.state = 500;
			_localctx._fieldArrow = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.FIELD_INTRO - 62)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 62)) | (1 << (YmlParser.REMOVE_FIELD - 62)) | (1 << (YmlParser.ADD_FIELD - 62)))) !== 0))) {
				_localctx._fieldArrow = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 501;
			_localctx._optionName = this.ymlIdOrPath();
			this.state = 502;
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
			this.state = 504;
			_localctx._type = this.memberType();
			this.state = 505;
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
			this.state = 507;
			_localctx._fieldArrow = this.match(YmlParser.FIELD_INTRO);
			this.state = 508;
			_localctx._optionName = this.match(YmlParser.LOCAL);
			this.state = 517;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 509;
				_localctx._local_variable_decl = this.local_variable_decl();
				_localctx._optionValues.push(_localctx._local_variable_decl);
				this.state = 514;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 510;
						this.match(YmlParser.COMMA);
						this.state = 511;
						_localctx._local_variable_decl = this.local_variable_decl();
						_localctx._optionValues.push(_localctx._local_variable_decl);
						}
						}
					}
					this.state = 516;
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
			this.state = 519;
			_localctx._fieldArrow = this.match(YmlParser.FIELD_INTRO);
			this.state = 520;
			_localctx._optionName = this.match(YmlParser.RETURN);
			this.state = 521;
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
			this.state = 523;
			this.match(YmlParser.CLASSPROPERTIES);
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.FIELD_INTRO - 62)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 62)) | (1 << (YmlParser.REMOVE_FIELD - 62)) | (1 << (YmlParser.ADD_FIELD - 62)))) !== 0)) {
				{
				{
				this.state = 524;
				_localctx._classOption = this.field();
				}
				}
				this.state = 529;
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
	public documentation(): DocumentationContext {
		let _localctx: DocumentationContext = new DocumentationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, YmlParser.RULE_documentation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this.match(YmlParser.DOCUMENTATION);
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
			this.state = 541;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 532;
				this.ifExprBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 533;
				this.combinedComparison(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 534;
				this.value();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 535;
				this.hashMapKeyValue();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 536;
				this.documentation();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 537;
				_localctx._type = this.ymlId();
				this.state = 538;
				_localctx._name = this.ymlId();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 540;
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
			this.state = 554;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 543;
				this.actionBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 544;
				this.instruction_return();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 545;
				this.ifExprBlock();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 546;
				this.combinedComparison(0);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 547;
				this.value();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 548;
				this.hashMapKeyValue();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 549;
				this.documentation();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 550;
				_localctx._type = this.ymlId();
				this.state = 551;
				_localctx._name = this.ymlId();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 553;
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
	public valueOrCondition(): ValueOrConditionContext {
		let _localctx: ValueOrConditionContext = new ValueOrConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, YmlParser.RULE_valueOrCondition);
		try {
			this.state = 563;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 556;
				this.combinedComparison(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 557;
				this.value();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 558;
				this.hashMapKeyValue();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 559;
				this.documentation();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 560;
				_localctx._type = this.ymlId();
				this.state = 561;
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
	public hashMap(): HashMapContext {
		let _localctx: HashMapContext = new HashMapContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, YmlParser.RULE_hashMap);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 566;
			this.hashMapKeyValue();
			this.state = 571;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 567;
					this.match(YmlParser.COMMA);
					this.state = 568;
					this.hashMapKeyValue();
					}
					}
				}
				this.state = 573;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			}
			this.state = 574;
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
		this.enterRule(_localctx, 76, YmlParser.RULE_hashMapKeyValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 576;
			this.hashMapKey();
			this.state = 577;
			this.match(YmlParser.COLON);
			this.state = 578;
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
		this.enterRule(_localctx, 78, YmlParser.RULE_hashMapKey);
		try {
			this.state = 587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 580;
				this.bool();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 581;
				this.match(YmlParser.STRING);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 582;
				this.match(YmlParser.DATE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 583;
				this.chainedCall();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 584;
				this.match(YmlParser.NUMBER);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 585;
				this.array();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 586;
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
		this.enterRule(_localctx, 80, YmlParser.RULE_hashMapValue);
		try {
			this.state = 591;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 589;
				this.value();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this.combinedComparison(0);
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
		this.enterRule(_localctx, 82, YmlParser.RULE_value);
		try {
			this.state = 608;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 593;
				this.granule();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 594;
				this.inlineDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 595;
				this.arithmeticExpression(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 596;
				this.nonArithmeticValue();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 597;
				this.synonym();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 598;
				this.ifExprBlock();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 599;
				this.array();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 600;
				this.constList();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 601;
				this.inValue();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 602;
				this.applyCollection();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 603;
				this.applyCollectionOn();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 604;
				this.as();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 605;
				this.hashMap();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 606;
				this.instruction_switchExpr_withValue();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 607;
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
		this.enterRule(_localctx, 84, YmlParser.RULE_as);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this.match(YmlParser.AS);
			this.state = 611;
			this.match(YmlParser.OPEN_PAR);
			this.state = 612;
			this.instanciationVariable();
			this.state = 620;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 613;
					this.match(YmlParser.COMMA);
					this.state = 616;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
					case 1:
						{
						this.state = 614;
						this.instruction_assignment();
						}
						break;

					case 2:
						{
						this.state = 615;
						this.combinedComparison(0);
						}
						break;
					}
					}
					}
				}
				this.state = 622;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 623;
			this.match(YmlParser.COMMA);
			this.state = 624;
			this.combinedComparison(0);
			this.state = 625;
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
		this.enterRule(_localctx, 86, YmlParser.RULE_applyCollection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 627;
			this.match(YmlParser.APPLY_COLLECTION);
			this.state = 628;
			this.match(YmlParser.OPEN_PAR);
			this.state = 629;
			this.value();
			this.state = 630;
			this.match(YmlParser.COMMA);
			this.state = 637;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.WHERE_APPLY_COLLECTION:
				{
				this.state = 631;
				this.match(YmlParser.WHERE_APPLY_COLLECTION);
				this.state = 632;
				this.combinedComparison(0);
				}
				break;
			case YmlParser.OPERATION_APPLY_COLLECTION:
				{
				this.state = 633;
				this.match(YmlParser.OPERATION_APPLY_COLLECTION);
				this.state = 634;
				this.ymlId();
				}
				break;
			case YmlParser.ARGUMENTS_APPLY_COLLECTION:
				{
				this.state = 635;
				this.match(YmlParser.ARGUMENTS_APPLY_COLLECTION);
				this.state = 636;
				this.value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 639;
				this.match(YmlParser.COMMA);
				this.state = 646;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case YmlParser.WHERE_APPLY_COLLECTION:
					{
					this.state = 640;
					this.match(YmlParser.WHERE_APPLY_COLLECTION);
					this.state = 641;
					this.combinedComparison(0);
					}
					break;
				case YmlParser.OPERATION_APPLY_COLLECTION:
					{
					this.state = 642;
					this.match(YmlParser.OPERATION_APPLY_COLLECTION);
					this.state = 643;
					this.ymlId();
					}
					break;
				case YmlParser.ARGUMENTS_APPLY_COLLECTION:
					{
					this.state = 644;
					this.match(YmlParser.ARGUMENTS_APPLY_COLLECTION);
					this.state = 645;
					this.value();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 653;
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
		this.enterRule(_localctx, 88, YmlParser.RULE_applyCollectionOn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 655;
			this.match(YmlParser.APPLY_COLLECTION_ON);
			this.state = 656;
			this.match(YmlParser.OPEN_PAR);
			this.state = 657;
			this.value();
			this.state = 658;
			this.match(YmlParser.COMMA);
			this.state = 665;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.WHERE_APPLY_COLLECTION_ON:
				{
				this.state = 659;
				this.match(YmlParser.WHERE_APPLY_COLLECTION_ON);
				this.state = 660;
				this.combinedComparison(0);
				}
				break;
			case YmlParser.OPERATION_APPLY_COLLECTION_ON:
				{
				this.state = 661;
				this.match(YmlParser.OPERATION_APPLY_COLLECTION_ON);
				this.state = 662;
				this.ymlId();
				}
				break;
			case YmlParser.SELECT_APPLY_COLLECTION_ON:
				{
				this.state = 663;
				this.match(YmlParser.SELECT_APPLY_COLLECTION_ON);
				this.state = 664;
				this.value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 667;
				this.match(YmlParser.COMMA);
				this.state = 674;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case YmlParser.WHERE_APPLY_COLLECTION_ON:
					{
					this.state = 668;
					this.match(YmlParser.WHERE_APPLY_COLLECTION_ON);
					this.state = 669;
					this.combinedComparison(0);
					}
					break;
				case YmlParser.OPERATION_APPLY_COLLECTION_ON:
					{
					this.state = 670;
					this.match(YmlParser.OPERATION_APPLY_COLLECTION_ON);
					this.state = 671;
					this.ymlId();
					}
					break;
				case YmlParser.SELECT_APPLY_COLLECTION_ON:
					{
					this.state = 672;
					this.match(YmlParser.SELECT_APPLY_COLLECTION_ON);
					this.state = 673;
					this.value();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 680;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 681;
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
		this.enterRule(_localctx, 90, YmlParser.RULE_instruction_forEach);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683;
			this.match(YmlParser.FOREACH);
			this.state = 684;
			this.match(YmlParser.OPEN_PAR);
			{
			this.state = 686;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 685;
				_localctx._type = this.ymlId();
				}
				break;
			}
			this.state = 688;
			_localctx._name = this.ymlId();
			}
			this.state = 690;
			this.match(YmlParser.COMMA);
			this.state = 691;
			this.value();
			this.state = 692;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 693;
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
		this.enterRule(_localctx, 92, YmlParser.RULE_instruction_for);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			this.match(YmlParser.FOR);
			this.state = 696;
			this.match(YmlParser.OPEN_PAR);
			this.state = 697;
			_localctx._name = this.ymlId();
			this.state = 698;
			this.match(YmlParser.COMMA);
			this.state = 699;
			_localctx._step = this.value();
			this.state = 700;
			this.match(YmlParser.COMMA);
			this.state = 701;
			_localctx._collection = this.value();
			this.state = 702;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 703;
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
		this.enterRule(_localctx, 94, YmlParser.RULE_instruction_ifExprBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 705;
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
		this.enterRule(_localctx, 96, YmlParser.RULE_ifExprBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this.match(YmlParser.IF_EXPR);
			this.state = 708;
			this.match(YmlParser.OPEN_PAR);
			this.state = 709;
			_localctx._condition = this.combinedComparison(0);
			this.state = 710;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 711;
			this.match(YmlParser.THEN);
			this.state = 712;
			_localctx._thenValue = this.value();
			this.state = 713;
			this.match(YmlParser.ELSE);
			this.state = 714;
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
		this.enterRule(_localctx, 98, YmlParser.RULE_bool);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
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
		this.enterRule(_localctx, 100, YmlParser.RULE_nonArithmeticValue);
		try {
			this.state = 721;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.TRUE:
			case YmlParser.FALSE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 718;
				this.bool();
				}
				break;
			case YmlParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 719;
				this.match(YmlParser.STRING);
				}
				break;
			case YmlParser.DATE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 720;
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
		this.enterRule(_localctx, 102, YmlParser.RULE_instanciationVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
			this.match(YmlParser.QUESTION_MARK);
			this.state = 724;
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
	public possiblyIndexedExpression(): PossiblyIndexedExpressionContext {
		let _localctx: PossiblyIndexedExpressionContext = new PossiblyIndexedExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, YmlParser.RULE_possiblyIndexedExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
			this.expression();
			this.state = 730;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 727;
					this.index();
					}
					}
				}
				this.state = 732;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
		this.enterRule(_localctx, 106, YmlParser.RULE_expression);
		try {
			this.state = 756;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 733;
				this.ymlId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 734;
				this.functionCall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 735;
				this.instanciationVariable();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 736;
				this.granule();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 737;
				this.constList();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 738;
				this.as();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 739;
				this.applyCollection();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 740;
				this.applyCollectionOn();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 741;
				this.array();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 742;
				this.hashMap();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 743;
				this.parenthesisCondition();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 744;
				this.match(YmlParser.OPEN_PAR);
				this.state = 745;
				this.instruction_switchExpr_withValue();
				this.state = 746;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 748;
				this.match(YmlParser.OPEN_PAR);
				this.state = 749;
				this.instruction_switchExpr_asIf();
				this.state = 750;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 752;
				this.match(YmlParser.OPEN_PAR);
				this.state = 753;
				this.ifExprBlock();
				this.state = 754;
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
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, YmlParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 758;
			this.ymlId();
			this.state = 759;
			this.match(YmlParser.OPEN_PAR);
			this.state = 768;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.INLINE_DECL_INTRO - 36)) | (1 << (YmlParser.OPEN_PAR - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (YmlParser.OPEN_BRACKET - 69)) | (1 << (YmlParser.OPEN_BRACE - 69)) | (1 << (YmlParser.QUESTION_MARK - 69)) | (1 << (YmlParser.OPEN_GRANULE - 69)) | (1 << (YmlParser.SUB - 69)) | (1 << (YmlParser.MOD - 69)) | (1 << (YmlParser.DATE - 69)) | (1 << (YmlParser.STRING - 69)) | (1 << (YmlParser.DOCUMENTATION - 69)) | (1 << (YmlParser.NUMBER - 69)) | (1 << (YmlParser.YMLID - 69)))) !== 0) || _la === YmlParser.ID) {
				{
				this.state = 760;
				this.functionArgument();
				this.state = 765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === YmlParser.COMMA) {
					{
					{
					this.state = 761;
					this.match(YmlParser.COMMA);
					this.state = 762;
					this.functionArgument();
					}
					}
					this.state = 767;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 770;
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
		this.enterRule(_localctx, 110, YmlParser.RULE_index);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 772;
			this.match(YmlParser.OPEN_BRACKET);
			this.state = 773;
			this.functionArgument();
			this.state = 774;
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
		this.enterRule(_localctx, 112, YmlParser.RULE_functionArgument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.ID) {
				{
				this.state = 776;
				_localctx._argKey = this.match(YmlParser.ID);
				this.state = 777;
				this.match(YmlParser.COLON);
				}
			}

			this.state = 782;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 780;
				this.valueOrCondition();
				}
				break;

			case 2:
				{
				this.state = 781;
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
		this.enterRule(_localctx, 114, YmlParser.RULE_chainedCall);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 784;
			this.possiblyIndexedExpression();
			this.state = 790;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 785;
					_localctx._marker = this.expressionMarker();
					this.state = 786;
					this.possiblyIndexedExpression();
					}
					}
				}
				this.state = 792;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
		this.enterRule(_localctx, 116, YmlParser.RULE_inlineDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this.match(YmlParser.INLINE_DECL_INTRO);
			this.state = 794;
			_localctx._className = this.ymlId();
			this.state = 796;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
				{
				this.state = 795;
				_localctx._instanceName = this.ymlId();
				}
			}

			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.FIELD_INTRO - 62)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 62)) | (1 << (YmlParser.REMOVE_FIELD - 62)) | (1 << (YmlParser.ADD_FIELD - 62)) | (1 << (YmlParser.OPEN_GRANULE - 62)))) !== 0)) {
				{
				{
				this.state = 798;
				this.fieldValue();
				}
				}
				this.state = 803;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 804;
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
	public inlineOperation(): InlineOperationContext {
		let _localctx: InlineOperationContext = new InlineOperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, YmlParser.RULE_inlineOperation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 806;
			_localctx._leftExpression = this.value();
			this.state = 807;
			_localctx._operator = this.ymlId();
			this.state = 808;
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
		this.enterRule(_localctx, 120, YmlParser.RULE_fieldValue);
		try {
			this.state = 812;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.FIELD_INTRO:
			case YmlParser.REPLACE_FIELD_VALUE_INTRO:
			case YmlParser.REMOVE_FIELD:
			case YmlParser.ADD_FIELD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 810;
				this.field();
				}
				break;
			case YmlParser.OPEN_GRANULE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 811;
				this.granule();
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
		this.enterRule(_localctx, 122, YmlParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 814;
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
			this.state = 815;
			this.ymlId();
			this.state = 821;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.ARGS:
				{
				this.state = 816;
				this.argsBlock();
				}
				break;
			case YmlParser.OPEN_PAR:
				{
				this.state = 817;
				this.match(YmlParser.OPEN_PAR);
				this.state = 818;
				this.argumentList();
				this.state = 819;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.LOCAL) {
				{
				this.state = 823;
				this.localBlock();
				}
			}

			this.state = 827;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.STATIC) {
				{
				this.state = 826;
				this.staticBlock();
				}
			}

			this.state = 830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.RULESET) {
				{
				this.state = 829;
				this.ruleset();
				}
			}

			this.state = 835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.FIELD_INTRO - 62)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 62)) | (1 << (YmlParser.REMOVE_FIELD - 62)) | (1 << (YmlParser.ADD_FIELD - 62)))) !== 0)) {
				{
				{
				this.state = 832;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 837;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 838;
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
		this.enterRule(_localctx, 124, YmlParser.RULE_argsBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 840;
			this.match(YmlParser.ARGS);
			this.state = 841;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 842;
			this.variableBlockContent();
			this.state = 843;
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
		this.enterRule(_localctx, 126, YmlParser.RULE_localBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 845;
			this.match(YmlParser.LOCAL);
			this.state = 846;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 847;
			this.variableBlockContent();
			this.state = 848;
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
		this.enterRule(_localctx, 128, YmlParser.RULE_staticBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 850;
			this.match(YmlParser.STATIC);
			this.state = 851;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 855;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
				{
				{
				this.state = 852;
				this.staticDeclaration();
				}
				}
				this.state = 857;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 858;
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
		this.enterRule(_localctx, 130, YmlParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 860;
			this.methodIntro();
			this.state = 864;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.FIELD_INTRO - 62)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 62)) | (1 << (YmlParser.REMOVE_FIELD - 62)) | (1 << (YmlParser.ADD_FIELD - 62)))) !== 0)) {
				{
				{
				this.state = 861;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 866;
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
		this.enterRule(_localctx, 132, YmlParser.RULE_methodCompleteDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 867;
			this.methodIntro();
			this.state = 868;
			this.match(YmlParser.FUNCTION);
			this.state = 872;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.FIELD_INTRO - 62)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 62)) | (1 << (YmlParser.REMOVE_FIELD - 62)) | (1 << (YmlParser.ADD_FIELD - 62)))) !== 0)) {
				{
				{
				this.state = 869;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 874;
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
		this.enterRule(_localctx, 134, YmlParser.RULE_methodIntro);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 875;
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
			this.state = 876;
			this.ymlId();
			this.state = 882;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.ARGS:
				{
				this.state = 877;
				this.argsBlock();
				}
				break;
			case YmlParser.OPEN_PAR:
				{
				this.state = 878;
				this.match(YmlParser.OPEN_PAR);
				this.state = 879;
				this.argumentList();
				this.state = 880;
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
		this.enterRule(_localctx, 136, YmlParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 885;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
				{
				this.state = 884;
				this.mandatoryArgs();
				}
			}

			this.state = 888;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.COMMA || _la === YmlParser.OPEN_BRACE) {
				{
				this.state = 887;
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
		this.enterRule(_localctx, 138, YmlParser.RULE_mandatoryArgs);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 890;
			this.mandatoryArgDecl();
			this.state = 895;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 891;
					this.match(YmlParser.COMMA);
					this.state = 892;
					this.mandatoryArgDecl();
					}
					}
				}
				this.state = 897;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
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
		this.enterRule(_localctx, 140, YmlParser.RULE_mandatoryArgDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 898;
			_localctx._argType = this.memberType();
			this.state = 899;
			_localctx._argName = this.ymlId();
			this.state = 901;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 900;
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
		this.enterRule(_localctx, 142, YmlParser.RULE_optionalArgs);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 904;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.COMMA) {
				{
				this.state = 903;
				this.match(YmlParser.COMMA);
				}
			}

			this.state = 906;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 918;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (YmlParser.OPEN_BRACKET - 69)) | (1 << (YmlParser.MOD - 69)) | (1 << (YmlParser.YMLID - 69)))) !== 0)) {
				{
				this.state = 907;
				_localctx._optionalArgDecl = this.optionalArgDecl();
				_localctx._optionalArguments.push(_localctx._optionalArgDecl);
				this.state = 912;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 908;
						this.match(YmlParser.COMMA);
						this.state = 909;
						_localctx._optionalArgDecl = this.optionalArgDecl();
						_localctx._optionalArguments.push(_localctx._optionalArgDecl);
						}
						}
					}
					this.state = 914;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
				}
				this.state = 916;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === YmlParser.COMMA) {
					{
					this.state = 915;
					this.match(YmlParser.COMMA);
					}
				}

				}
			}

			this.state = 920;
			this.match(YmlParser.CLOSE_BRACE);
			this.state = 922;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
				{
				this.state = 921;
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
		this.enterRule(_localctx, 144, YmlParser.RULE_optionalArgDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 929;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.OPEN_BRACKET:
				{
				this.state = 924;
				this.match(YmlParser.OPEN_BRACKET);
				this.state = 925;
				_localctx._optionalKeyName = this.ymlId();
				this.state = 926;
				this.match(YmlParser.CLOSE_BRACKET);
				}
				break;
			case YmlParser.OPERATION_APPLY_COLLECTION_ON:
			case YmlParser.IMPLEMENTATION:
			case YmlParser.FUNCTION_AS_TYPE:
			case YmlParser.TEXT_FUNCTION:
			case YmlParser.ARGS:
			case YmlParser.AS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.CASE:
			case YmlParser.RENAME:
			case YmlParser.TO:
			case YmlParser.FOR_CLASS:
			case YmlParser.RULESET:
			case YmlParser.RULE_TYPE:
			case YmlParser.ATTRIBUTES:
			case YmlParser.MOD:
			case YmlParser.YMLID:
				{
				this.state = 928;
				_localctx._mandatoryKeyName = this.ymlId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 931;
			this.match(YmlParser.COLON);
			this.state = 932;
			_localctx._argType = this.ymlId();
			this.state = 934;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
				{
				this.state = 933;
				_localctx._argName = this.ymlId();
				}
			}

			this.state = 937;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.OPEN_BRACE) {
				{
				this.state = 936;
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
		this.enterRule(_localctx, 146, YmlParser.RULE_argOptionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 939;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 940;
			_localctx._argOptionBlock = this.argOptionBlock();
			_localctx._arguments.push(_localctx._argOptionBlock);
			this.state = 945;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 941;
				this.match(YmlParser.COMMA);
				this.state = 942;
				_localctx._argOptionBlock = this.argOptionBlock();
				_localctx._arguments.push(_localctx._argOptionBlock);
				}
				}
				this.state = 947;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 948;
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
		this.enterRule(_localctx, 148, YmlParser.RULE_argOptionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 950;
			_localctx._argOption = this.ymlId();
			this.state = 952;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.INLINE_DECL_INTRO - 36)) | (1 << (YmlParser.OPEN_PAR - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (YmlParser.OPEN_BRACKET - 69)) | (1 << (YmlParser.OPEN_BRACE - 69)) | (1 << (YmlParser.QUESTION_MARK - 69)) | (1 << (YmlParser.OPEN_GRANULE - 69)) | (1 << (YmlParser.SUB - 69)) | (1 << (YmlParser.MOD - 69)) | (1 << (YmlParser.DATE - 69)) | (1 << (YmlParser.STRING - 69)) | (1 << (YmlParser.NUMBER - 69)) | (1 << (YmlParser.YMLID - 69)))) !== 0)) {
				{
				this.state = 951;
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
		this.enterRule(_localctx, 150, YmlParser.RULE_order1Block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			this.instanciationCondition();
			this.state = 956;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 955;
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
		this.enterRule(_localctx, 152, YmlParser.RULE_instanciationCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 958;
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
		this.enterRule(_localctx, 154, YmlParser.RULE_order1FullCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 961;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 960;
				this.conditionBlock();
				}
				break;
			}
			this.state = 966;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.INLINE_DECL_INTRO - 36)) | (1 << (YmlParser.OPEN_PAR - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (YmlParser.OPEN_BRACKET - 69)) | (1 << (YmlParser.OPEN_BRACE - 69)) | (1 << (YmlParser.QUESTION_MARK - 69)) | (1 << (YmlParser.OPEN_GRANULE - 69)) | (1 << (YmlParser.SUB - 69)) | (1 << (YmlParser.MOD - 69)) | (1 << (YmlParser.DATE - 69)) | (1 << (YmlParser.STRING - 69)) | (1 << (YmlParser.NUMBER - 69)) | (1 << (YmlParser.YMLID - 69)))) !== 0)) {
				{
				{
				this.state = 963;
				this.order1Block();
				}
				}
				this.state = 968;
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
	public parenthesisCondition(): ParenthesisConditionContext {
		let _localctx: ParenthesisConditionContext = new ParenthesisConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, YmlParser.RULE_parenthesisCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 969;
			this.match(YmlParser.OPEN_PAR);
			this.state = 970;
			this.combinedComparison(0);
			this.state = 971;
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

	public combinedComparison(): CombinedComparisonContext;
	public combinedComparison(_p: number): CombinedComparisonContext;
	// @RuleVersion(0)
	public combinedComparison(_p?: number): CombinedComparisonContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: CombinedComparisonContext = new CombinedComparisonContext(this._ctx, _parentState);
		let _prevctx: CombinedComparisonContext = _localctx;
		let _startState: number = 158;
		this.enterRecursionRule(_localctx, 158, YmlParser.RULE_combinedComparison, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 976;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 974;
				this.parenthesisCondition();
				}
				break;

			case 2:
				{
				this.state = 975;
				this.comparison();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 986;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 984;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
					case 1:
						{
						_localctx = new CombinedComparisonContext(_parentctx, _parentState);
						_localctx._leftCondition = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, YmlParser.RULE_combinedComparison);
						this.state = 978;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 979;
						this.match(YmlParser.COND_AND);
						this.state = 980;
						_localctx._rightCondition = this.combinedComparison(4);
						}
						break;

					case 2:
						{
						_localctx = new CombinedComparisonContext(_parentctx, _parentState);
						_localctx._leftCondition = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, YmlParser.RULE_combinedComparison);
						this.state = 981;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 982;
						this.match(YmlParser.COND_OR);
						this.state = 983;
						_localctx._rightCondition = this.combinedComparison(3);
						}
						break;
					}
					}
				}
				this.state = 988;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
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
		this.enterRule(_localctx, 160, YmlParser.RULE_comparison);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 989;
			_localctx._leftValue = this.value();
			this.state = 990;
			this.comparisonOperator();
			this.state = 991;
			_localctx._rightValue = this.value();
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
		this.enterRule(_localctx, 162, YmlParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 993;
			_la = this._input.LA(1);
			if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (YmlParser.EQUAL_COMP - 77)) | (1 << (YmlParser.NOT_EQUALS - 77)) | (1 << (YmlParser.LESS_OR_EQUAL - 77)) | (1 << (YmlParser.GREATE_OR_EQUAL - 77)) | (1 << (YmlParser.STRICT_LESS - 77)) | (1 << (YmlParser.STRICT_GREAT - 77)))) !== 0))) {
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
		this.enterRule(_localctx, 164, YmlParser.RULE_instruction_multivaluedAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 995;
			_localctx._leftHand = this.assignment_leftHandSide();
			this.state = 996;
			this.match(YmlParser.MULTIVALUED_ASSIGNMENT);
			this.state = 997;
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
		this.enterRule(_localctx, 166, YmlParser.RULE_instruction_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 999;
			_localctx._leftHand = this.assignment_leftHandSide();
			this.state = 1000;
			this.match(YmlParser.EQUAL_ASSIGNMENT);
			this.state = 1001;
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
		this.enterRule(_localctx, 168, YmlParser.RULE_assignment_leftHandSide);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1003;
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
		this.enterRule(_localctx, 170, YmlParser.RULE_conditionBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1006;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1005;
					this.order0Condition();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1008;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
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
		this.enterRule(_localctx, 172, YmlParser.RULE_order0Condition);
		try {
			this.state = 1012;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1010;
				this.combinedComparison(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1011;
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
		this.enterRule(_localctx, 174, YmlParser.RULE_actionBlockOrInstruction);
		try {
			this.state = 1016;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1014;
				this.actionBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1015;
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
		this.enterRule(_localctx, 176, YmlParser.RULE_instruction_switchExpr_withValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1018;
			this.match(YmlParser.SWITCH_EXPR);
			this.state = 1019;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1020;
			this.value();
			this.state = 1021;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1022;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1026;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.CASE) {
				{
				{
				this.state = 1023;
				this.instructionCase_withValue();
				}
				}
				this.state = 1028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1030;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.DEFAULT) {
				{
				this.state = 1029;
				this.instructionDefault_withValue();
				}
			}

			this.state = 1032;
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
		this.enterRule(_localctx, 178, YmlParser.RULE_instruction_switchExpr_asIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1034;
			this.match(YmlParser.SWITCH_EXPR);
			this.state = 1035;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1039;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.CASE) {
				{
				{
				this.state = 1036;
				this.instructionCase_withValue();
				}
				}
				this.state = 1041;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1044;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.DEFAULT:
				{
				this.state = 1042;
				this.instructionDefault_withValue();
				}
				break;
			case YmlParser.NO_DEFAULT:
				{
				this.state = 1043;
				this.match(YmlParser.NO_DEFAULT);
				}
				break;
			case YmlParser.CLOSE_BRACE:
				break;
			default:
				break;
			}
			this.state = 1046;
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
		this.enterRule(_localctx, 180, YmlParser.RULE_instruction_switchCase_withValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1048;
			this.match(YmlParser.SWITCH);
			this.state = 1049;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1050;
			this.value();
			this.state = 1051;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1052;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1056;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.CASE) {
				{
				{
				this.state = 1053;
				this.instructionCase();
				}
				}
				this.state = 1058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1061;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.DEFAULT:
				{
				this.state = 1059;
				this.instructionDefault();
				}
				break;
			case YmlParser.NO_DEFAULT:
				{
				this.state = 1060;
				this.match(YmlParser.NO_DEFAULT);
				}
				break;
			case YmlParser.CLOSE_BRACE:
				break;
			default:
				break;
			}
			this.state = 1063;
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
		this.enterRule(_localctx, 182, YmlParser.RULE_instruction_switchCase_asIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1065;
			this.match(YmlParser.SWITCH);
			this.state = 1066;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1070;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.CASE) {
				{
				{
				this.state = 1067;
				this.instructionCase();
				}
				}
				this.state = 1072;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1074;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.DEFAULT) {
				{
				this.state = 1073;
				this.instructionDefault();
				}
			}

			this.state = 1076;
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
		this.enterRule(_localctx, 184, YmlParser.RULE_instructionDefault_withValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1078;
			this.match(YmlParser.DEFAULT);
			this.state = 1079;
			this.match(YmlParser.COLON);
			this.state = 1085;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 1080;
				this.value();
				}
				break;

			case 2:
				{
				this.state = 1081;
				this.match(YmlParser.OPEN_BRACE);
				this.state = 1082;
				this.value();
				this.state = 1083;
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
		this.enterRule(_localctx, 186, YmlParser.RULE_instructionCase_withValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1087;
			this.match(YmlParser.CASE);
			this.state = 1093;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 1088;
				this.match(YmlParser.OPEN_PAR);
				this.state = 1089;
				this.valueOrCondition();
				this.state = 1090;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;

			case 2:
				{
				this.state = 1092;
				this.valueOrCondition();
				}
				break;
			}
			this.state = 1095;
			this.match(YmlParser.COLON);
			this.state = 1101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				{
				this.state = 1096;
				this.value();
				}
				break;

			case 2:
				{
				this.state = 1097;
				this.match(YmlParser.OPEN_BRACE);
				this.state = 1098;
				this.value();
				this.state = 1099;
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
		this.enterRule(_localctx, 188, YmlParser.RULE_instructionCase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1103;
			this.match(YmlParser.CASE);
			this.state = 1109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				{
				this.state = 1104;
				this.match(YmlParser.OPEN_PAR);
				this.state = 1105;
				this.valueOrCondition();
				this.state = 1106;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;

			case 2:
				{
				this.state = 1108;
				this.valueOrCondition();
				}
				break;
			}
			this.state = 1111;
			this.match(YmlParser.COLON);
			this.state = 1112;
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
		this.enterRule(_localctx, 190, YmlParser.RULE_instructionDefault);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1114;
			this.match(YmlParser.DEFAULT);
			this.state = 1115;
			this.match(YmlParser.COLON);
			this.state = 1116;
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
		this.enterRule(_localctx, 192, YmlParser.RULE_instruction_break);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1118;
			this.match(YmlParser.BREAK);
			this.state = 1120;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				{
				this.state = 1119;
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
		this.enterRule(_localctx, 194, YmlParser.RULE_instruction_ifElse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1122;
			this.instruction_if();
			this.state = 1125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 1123;
				this.match(YmlParser.ELSE);
				this.state = 1124;
				this.actionBlockOrInstruction();
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
	public instruction_if(): Instruction_ifContext {
		let _localctx: Instruction_ifContext = new Instruction_ifContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, YmlParser.RULE_instruction_if);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1127;
			this.match(YmlParser.IF);
			this.state = 1128;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1129;
			this.order0Condition();
			this.state = 1130;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1131;
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
	public inValue(): InValueContext {
		let _localctx: InValueContext = new InValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, YmlParser.RULE_inValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1135;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.OPERATION_APPLY_COLLECTION_ON:
			case YmlParser.IMPLEMENTATION:
			case YmlParser.FUNCTION_AS_TYPE:
			case YmlParser.TEXT_FUNCTION:
			case YmlParser.ARGS:
			case YmlParser.AS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.CASE:
			case YmlParser.RENAME:
			case YmlParser.TO:
			case YmlParser.FOR_CLASS:
			case YmlParser.RULESET:
			case YmlParser.RULE_TYPE:
			case YmlParser.ATTRIBUTES:
			case YmlParser.MOD:
			case YmlParser.YMLID:
				{
				this.state = 1133;
				this.ymlId();
				}
				break;
			case YmlParser.QUESTION_MARK:
				{
				this.state = 1134;
				this.instanciationVariable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1137;
			this.match(YmlParser.IN);
			this.state = 1140;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.APPLY_COLLECTION:
			case YmlParser.APPLY_COLLECTION_ON:
			case YmlParser.OPERATION_APPLY_COLLECTION_ON:
			case YmlParser.IMPLEMENTATION:
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
			case YmlParser.RENAME:
			case YmlParser.TO:
			case YmlParser.FOR_CLASS:
			case YmlParser.RULESET:
			case YmlParser.RULE_TYPE:
			case YmlParser.ATTRIBUTES:
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
				this.state = 1138;
				this.value();
				}
				break;
			case YmlParser.FUNCTION:
				{
				this.state = 1139;
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
		this.enterRule(_localctx, 200, YmlParser.RULE_instruction_forall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1142;
			this.match(YmlParser.FORALL);
			this.state = 1143;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1144;
			this.inValue();
			this.state = 1151;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === YmlParser.COMMA) {
						{
						this.state = 1145;
						this.match(YmlParser.COMMA);
						}
					}

					this.state = 1148;
					this.inValue();
					}
					}
				}
				this.state = 1153;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			}
			this.state = 1160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.COMMA - 36)) | (1 << (YmlParser.INLINE_DECL_INTRO - 36)) | (1 << (YmlParser.OPEN_PAR - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (YmlParser.OPEN_BRACKET - 69)) | (1 << (YmlParser.OPEN_BRACE - 69)) | (1 << (YmlParser.QUESTION_MARK - 69)) | (1 << (YmlParser.OPEN_GRANULE - 69)) | (1 << (YmlParser.SUB - 69)) | (1 << (YmlParser.MOD - 69)) | (1 << (YmlParser.DATE - 69)) | (1 << (YmlParser.STRING - 69)) | (1 << (YmlParser.NUMBER - 69)) | (1 << (YmlParser.YMLID - 69)))) !== 0)) {
				{
				{
				this.state = 1155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === YmlParser.COMMA) {
					{
					this.state = 1154;
					this.match(YmlParser.COMMA);
					}
				}

				this.state = 1157;
				this.combinedComparison(0);
				}
				}
				this.state = 1162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1163;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1164;
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
		this.enterRule(_localctx, 202, YmlParser.RULE_instruction_while);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1166;
			this.match(YmlParser.WHILE);
			this.state = 1167;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1168;
			this.order0Condition();
			this.state = 1169;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1170;
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
		this.enterRule(_localctx, 204, YmlParser.RULE_instruction_return);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1172;
			this.match(YmlParser.RETURN);
			this.state = 1173;
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
		this.enterRule(_localctx, 206, YmlParser.RULE_instruction_chainedCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1175;
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
		this.enterRule(_localctx, 208, YmlParser.RULE_instruction);
		try {
			this.state = 1206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1177;
				this.instruction_chainedCall();
				this.state = 1179;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
				case 1:
					{
					this.state = 1178;
					this.match(YmlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1181;
				this.instruction_multivaluedAssignment();
				this.state = 1183;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
				case 1:
					{
					this.state = 1182;
					this.match(YmlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1185;
				this.instruction_assignment();
				this.state = 1187;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
				case 1:
					{
					this.state = 1186;
					this.match(YmlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1189;
				this.instruction_for();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1190;
				this.instruction_forEach();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1191;
				this.instruction_forall();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1192;
				this.instruction_return();
				this.state = 1194;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
				case 1:
					{
					this.state = 1193;
					this.match(YmlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1196;
				this.instruction_ifElse();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1197;
				this.instruction_try_catch();
				this.state = 1199;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1198;
					this.match(YmlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1201;
				this.instruction_switchCase_asIf();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1202;
				this.instruction_break();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1203;
				this.instruction_switchCase_withValue();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1204;
				this.instruction_ifExprBlock();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1205;
				this.instruction_while();
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
		this.enterRule(_localctx, 210, YmlParser.RULE_instruction_do);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1208;
			this.match(YmlParser.DO);
			this.state = 1209;
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
		this.enterRule(_localctx, 212, YmlParser.RULE_instruction_try_catch);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1211;
			this.match(YmlParser.TRY);
			this.state = 1212;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1213;
			this.instruction_do();
			this.state = 1214;
			this.match(YmlParser.CATCH);
			this.state = 1215;
			this.match(YmlParser.OPEN_PAR);
			{
			this.state = 1216;
			this.ymlId();
			this.state = 1221;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1217;
					this.match(YmlParser.COMMA);
					this.state = 1218;
					this.ymlId();
					}
					}
				}
				this.state = 1223;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			}
			}
			this.state = 1224;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1225;
			this.actionBlock();
			this.state = 1226;
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
		this.enterRule(_localctx, 214, YmlParser.RULE_actionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1228;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1229;
				this.instruction();
				}
				}
				this.state = 1232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.IF) | (1 << YmlParser.TRY))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (YmlParser.FOREACH - 33)) | (1 << (YmlParser.FORALL - 33)) | (1 << (YmlParser.AS - 33)) | (1 << (YmlParser.RETURN - 33)) | (1 << (YmlParser.LOCAL - 33)) | (1 << (YmlParser.SWITCH - 33)) | (1 << (YmlParser.CASE - 33)) | (1 << (YmlParser.BREAK - 33)) | (1 << (YmlParser.WHILE - 33)) | (1 << (YmlParser.FOR - 33)) | (1 << (YmlParser.RENAME - 33)) | (1 << (YmlParser.TO - 33)) | (1 << (YmlParser.FOR_CLASS - 33)) | (1 << (YmlParser.RULESET - 33)) | (1 << (YmlParser.RULE_TYPE - 33)) | (1 << (YmlParser.ATTRIBUTES - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (YmlParser.OPEN_PAR - 67)) | (1 << (YmlParser.OPEN_BRACKET - 67)) | (1 << (YmlParser.OPEN_BRACE - 67)) | (1 << (YmlParser.QUESTION_MARK - 67)) | (1 << (YmlParser.OPEN_GRANULE - 67)) | (1 << (YmlParser.MOD - 67)))) !== 0) || _la === YmlParser.YMLID);
			this.state = 1234;
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
		this.enterRule(_localctx, 216, YmlParser.RULE_arithmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1236;
			_la = this._input.LA(1);
			if (!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (YmlParser.ADD - 88)) | (1 << (YmlParser.DIV - 88)) | (1 << (YmlParser.MUL - 88)) | (1 << (YmlParser.SUB - 88)) | (1 << (YmlParser.MOD - 88)))) !== 0))) {
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
		this.enterRule(_localctx, 218, YmlParser.RULE_unaryExpression);
		try {
			this.state = 1242;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.SUB:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1238;
				this.match(YmlParser.SUB);
				this.state = 1239;
				this.unaryExpression();
				}
				break;
			case YmlParser.APPLY_COLLECTION:
			case YmlParser.APPLY_COLLECTION_ON:
			case YmlParser.OPERATION_APPLY_COLLECTION_ON:
			case YmlParser.IMPLEMENTATION:
			case YmlParser.FUNCTION_AS_TYPE:
			case YmlParser.TEXT_FUNCTION:
			case YmlParser.ARGS:
			case YmlParser.AS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.CASE:
			case YmlParser.RENAME:
			case YmlParser.TO:
			case YmlParser.FOR_CLASS:
			case YmlParser.RULESET:
			case YmlParser.RULE_TYPE:
			case YmlParser.ATTRIBUTES:
			case YmlParser.OPEN_PAR:
			case YmlParser.OPEN_BRACKET:
			case YmlParser.OPEN_BRACE:
			case YmlParser.QUESTION_MARK:
			case YmlParser.OPEN_GRANULE:
			case YmlParser.MOD:
			case YmlParser.YMLID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1240;
				this.chainedCall();
				}
				break;
			case YmlParser.NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1241;
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
		let _startState: number = 220;
		this.enterRecursionRule(_localctx, 220, YmlParser.RULE_arithmeticExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1250;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				{
				this.state = 1245;
				this.match(YmlParser.OPEN_PAR);
				this.state = 1246;
				_localctx._parenthizedExpression = this.arithmeticExpression(0);
				this.state = 1247;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;

			case 2:
				{
				this.state = 1249;
				this.unaryExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1258;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
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
					this.state = 1252;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 1253;
					this.arithmeticOperator();
					this.state = 1254;
					this.arithmeticExpression(3);
					}
					}
				}
				this.state = 1260;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
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
		this.enterRule(_localctx, 222, YmlParser.RULE_existentialOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1261;
			_localctx._operator = this.ymlId();
			this.state = 1262;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1263;
			this.order1FullCondition();
			this.state = 1264;
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
		this.enterRule(_localctx, 224, YmlParser.RULE_variableBlockContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
				{
				{
				this.state = 1266;
				this.memberDeclaration();
				}
				}
				this.state = 1271;
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
		this.enterRule(_localctx, 226, YmlParser.RULE_staticDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1272;
			_localctx._declarationType = this.ymlId();
			this.state = 1273;
			_localctx._declarationName = this.ymlId();
			this.state = 1276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.EXTENDS) {
				{
				this.state = 1274;
				this.match(YmlParser.EXTENDS);
				this.state = 1275;
				_localctx._extended = this.ymlId();
				}
			}

			this.state = 1279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.INLINE_DECL_INTRO - 36)) | (1 << (YmlParser.OPEN_PAR - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (YmlParser.OPEN_BRACKET - 69)) | (1 << (YmlParser.OPEN_BRACE - 69)) | (1 << (YmlParser.QUESTION_MARK - 69)) | (1 << (YmlParser.OPEN_GRANULE - 69)) | (1 << (YmlParser.SUB - 69)) | (1 << (YmlParser.MOD - 69)) | (1 << (YmlParser.DATE - 69)) | (1 << (YmlParser.STRING - 69)) | (1 << (YmlParser.NUMBER - 69)) | (1 << (YmlParser.YMLID - 69)))) !== 0)) {
				{
				this.state = 1278;
				this.value();
				}
			}

			this.state = 1284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.FIELD_INTRO - 62)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 62)) | (1 << (YmlParser.REMOVE_FIELD - 62)) | (1 << (YmlParser.ADD_FIELD - 62)))) !== 0)) {
				{
				{
				this.state = 1281;
				_localctx._declarationOptions = this.field();
				}
				}
				this.state = 1286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1287;
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
	public externDeclaration(): ExternDeclarationContext {
		let _localctx: ExternDeclarationContext = new ExternDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, YmlParser.RULE_externDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1289;
			this.match(YmlParser.EXTERN);
			this.state = 1292;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				{
				this.state = 1290;
				this.methodDeclaration();
				}
				break;

			case 2:
				{
				this.state = 1291;
				this.memberDeclaration();
				}
				break;
			}
			this.state = 1294;
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
		this.enterRule(_localctx, 230, YmlParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1296;
			this.match(YmlParser.OPEN_BRACKET);
			this.state = 1298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.INLINE_DECL_INTRO - 36)) | (1 << (YmlParser.OPEN_PAR - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (YmlParser.OPEN_BRACKET - 69)) | (1 << (YmlParser.OPEN_BRACE - 69)) | (1 << (YmlParser.QUESTION_MARK - 69)) | (1 << (YmlParser.OPEN_GRANULE - 69)) | (1 << (YmlParser.SUB - 69)) | (1 << (YmlParser.MOD - 69)) | (1 << (YmlParser.DATE - 69)) | (1 << (YmlParser.STRING - 69)) | (1 << (YmlParser.NUMBER - 69)) | (1 << (YmlParser.YMLID - 69)))) !== 0)) {
				{
				this.state = 1297;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
			}

			this.state = 1304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 1300;
				this.match(YmlParser.COMMA);
				this.state = 1301;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
				}
				this.state = 1306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1307;
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
		this.enterRule(_localctx, 232, YmlParser.RULE_simpleList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1309;
			_localctx._value = this.value();
			_localctx._elements.push(_localctx._value);
			this.state = 1312;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1310;
					this.match(YmlParser.COMMA);
					this.state = 1311;
					_localctx._value = this.value();
					_localctx._elements.push(_localctx._value);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1314;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
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
		this.enterRule(_localctx, 234, YmlParser.RULE_constList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1316;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.INLINE_DECL_INTRO - 36)) | (1 << (YmlParser.OPEN_PAR - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (YmlParser.OPEN_BRACKET - 69)) | (1 << (YmlParser.OPEN_BRACE - 69)) | (1 << (YmlParser.QUESTION_MARK - 69)) | (1 << (YmlParser.OPEN_GRANULE - 69)) | (1 << (YmlParser.SUB - 69)) | (1 << (YmlParser.MOD - 69)) | (1 << (YmlParser.DATE - 69)) | (1 << (YmlParser.STRING - 69)) | (1 << (YmlParser.NUMBER - 69)) | (1 << (YmlParser.YMLID - 69)))) !== 0)) {
				{
				this.state = 1317;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
			}

			this.state = 1324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 1320;
				this.match(YmlParser.COMMA);
				this.state = 1321;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
				}
				this.state = 1326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1327;
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
		this.enterRule(_localctx, 236, YmlParser.RULE_granule);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1329;
			this.match(YmlParser.OPEN_GRANULE);
			this.state = 1333;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1330;
					this.granule();
					}
					}
				}
				this.state = 1335;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
			}
			this.state = 1336;
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
		this.enterRule(_localctx, 238, YmlParser.RULE_objectComplete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1338;
			this.match(YmlParser.COMPLETE);
			this.state = 1339;
			_localctx._completedElemId = this.ymlId();
			this.state = 1343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.FIELD_INTRO - 62)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 62)) | (1 << (YmlParser.REMOVE_FIELD - 62)) | (1 << (YmlParser.ADD_FIELD - 62)))) !== 0)) {
				{
				{
				this.state = 1340;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 1345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1346;
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
		this.enterRule(_localctx, 240, YmlParser.RULE_classComplete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1348;
			this.match(YmlParser.COMPLETE);
			this.state = 1351;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.OPERATION_APPLY_COLLECTION_ON:
			case YmlParser.IMPLEMENTATION:
			case YmlParser.FUNCTION_AS_TYPE:
			case YmlParser.TEXT_FUNCTION:
			case YmlParser.ARGS:
			case YmlParser.AS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.CASE:
			case YmlParser.RENAME:
			case YmlParser.TO:
			case YmlParser.FOR_CLASS:
			case YmlParser.RULESET:
			case YmlParser.RULE_TYPE:
			case YmlParser.ATTRIBUTES:
			case YmlParser.MOD:
			case YmlParser.YMLID:
				{
				this.state = 1349;
				this.ymlId();
				}
				break;
			case YmlParser.FUNCTION:
				{
				this.state = 1350;
				this.match(YmlParser.FUNCTION);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.METHOD) | (1 << YmlParser.TEXT_METHOD) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.FIELD) | (1 << YmlParser.ARGS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)))) !== 0) || _la === YmlParser.MOD || _la === YmlParser.YMLID) {
				{
				this.state = 1356;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
				case 1:
					{
					this.state = 1353;
					this.classAttributeDeclaration();
					}
					break;

				case 2:
					{
					this.state = 1354;
					this.methodCompleteDeclaration();
					}
					break;

				case 3:
					{
					this.state = 1355;
					this.memberDeclaration();
					}
					break;
				}
				}
				this.state = 1360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1361;
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
	public ruleset(): RulesetContext {
		let _localctx: RulesetContext = new RulesetContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, YmlParser.RULE_ruleset);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1363;
			this.match(YmlParser.RULESET);
			this.state = 1364;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.RULE_TYPE) {
				{
				this.state = 1365;
				this.rules();
				}
			}

			this.state = 1368;
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
		this.enterRule(_localctx, 244, YmlParser.RULE_rules);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1370;
				this.ymlrule();
				}
				}
				this.state = 1373;
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
		this.enterRule(_localctx, 246, YmlParser.RULE_ymlrule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1375;
			this.match(YmlParser.RULE_TYPE);
			this.state = 1376;
			this.ymlId();
			this.state = 1377;
			this.match(YmlParser.IF);
			this.state = 1378;
			this.match(YmlParser.OPEN_PAR);
			this.state = 1382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1382;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
				case 1:
					{
					this.state = 1379;
					this.combinedComparison(0);
					}
					break;

				case 2:
					{
					this.state = 1380;
					this.inValue();
					}
					break;

				case 3:
					{
					this.state = 1381;
					this.instruction_assignment();
					}
					break;
				}
				}
				this.state = 1384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlParser.AS - 36)) | (1 << (YmlParser.RETURN - 36)) | (1 << (YmlParser.LOCAL - 36)) | (1 << (YmlParser.TRUE - 36)) | (1 << (YmlParser.FALSE - 36)) | (1 << (YmlParser.SWITCH_EXPR - 36)) | (1 << (YmlParser.CASE - 36)) | (1 << (YmlParser.RENAME - 36)) | (1 << (YmlParser.TO - 36)) | (1 << (YmlParser.FOR_CLASS - 36)) | (1 << (YmlParser.RULESET - 36)) | (1 << (YmlParser.RULE_TYPE - 36)) | (1 << (YmlParser.ATTRIBUTES - 36)) | (1 << (YmlParser.INLINE_DECL_INTRO - 36)) | (1 << (YmlParser.OPEN_PAR - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (YmlParser.OPEN_BRACKET - 69)) | (1 << (YmlParser.OPEN_BRACE - 69)) | (1 << (YmlParser.QUESTION_MARK - 69)) | (1 << (YmlParser.OPEN_GRANULE - 69)) | (1 << (YmlParser.SUB - 69)) | (1 << (YmlParser.MOD - 69)) | (1 << (YmlParser.DATE - 69)) | (1 << (YmlParser.STRING - 69)) | (1 << (YmlParser.NUMBER - 69)) | (1 << (YmlParser.YMLID - 69)))) !== 0));
			this.state = 1386;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 1387;
			this.match(YmlParser.THEN);
			this.state = 1389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1388;
				this.instruction();
				}
				}
				this.state = 1391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.APPLY_COLLECTION_ON) | (1 << YmlParser.OPERATION_APPLY_COLLECTION_ON) | (1 << YmlParser.IMPLEMENTATION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.IF) | (1 << YmlParser.TRY))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (YmlParser.FOREACH - 33)) | (1 << (YmlParser.FORALL - 33)) | (1 << (YmlParser.AS - 33)) | (1 << (YmlParser.RETURN - 33)) | (1 << (YmlParser.LOCAL - 33)) | (1 << (YmlParser.SWITCH - 33)) | (1 << (YmlParser.CASE - 33)) | (1 << (YmlParser.BREAK - 33)) | (1 << (YmlParser.WHILE - 33)) | (1 << (YmlParser.FOR - 33)) | (1 << (YmlParser.RENAME - 33)) | (1 << (YmlParser.TO - 33)) | (1 << (YmlParser.FOR_CLASS - 33)) | (1 << (YmlParser.RULESET - 33)) | (1 << (YmlParser.RULE_TYPE - 33)) | (1 << (YmlParser.ATTRIBUTES - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (YmlParser.OPEN_PAR - 67)) | (1 << (YmlParser.OPEN_BRACKET - 67)) | (1 << (YmlParser.OPEN_BRACE - 67)) | (1 << (YmlParser.QUESTION_MARK - 67)) | (1 << (YmlParser.OPEN_GRANULE - 67)) | (1 << (YmlParser.MOD - 67)))) !== 0) || _la === YmlParser.YMLID);
			this.state = 1396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.FIELD_INTRO - 62)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 62)) | (1 << (YmlParser.REMOVE_FIELD - 62)) | (1 << (YmlParser.ADD_FIELD - 62)))) !== 0)) {
				{
				{
				this.state = 1393;
				this.field();
				}
				}
				this.state = 1398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1399;
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
		case 79:
			return this.combinedComparison_sempred(_localctx as CombinedComparisonContext, predIndex);

		case 110:
			return this.arithmeticExpression_sempred(_localctx as ArithmeticExpressionContext, predIndex);
		}
		return true;
	}
	private combinedComparison_sempred(_localctx: CombinedComparisonContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03s\u057C\x04\x02" +
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
		"{\t{\x04|\t|\x04}\t}\x03\x02\x03\x02\x07\x02\xFD\n\x02\f\x02\x0E\x02\u0100" +
		"\v\x02\x03\x02\x05\x02\u0103\n\x02\x03\x03\x07\x03\u0106\n\x03\f\x03\x0E" +
		"\x03\u0109\v\x03\x03\x03\x05\x03\u010C\n\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\u0119" +
		"\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u011F\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x05\b\u012D\n\b\x03\b\x03\b\x03\b\x03\b\x07\b\u0133\n\b\f\b\x0E" +
		"\b\u0136\v\b\x06\b\u0138\n\b\r\b\x0E\b\u0139\x03\b\x03\b\x07\b\u013E\n" +
		"\b\f\b\x0E\b\u0141\v\b\x03\b\x03\b\x03\t\x03\t\x07\t\u0147\n\t\f\t\x0E" +
		"\t\u014A\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x07\v\u0153\n\v" +
		"\f\v\x0E\v\u0156\v\v\x03\v\x03\v\x07\v\u015A\n\v\f\v\x0E\v\u015D\v\v\x03" +
		"\v\x05\v\u0160\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0166\n\v\x03\f\x03\f" +
		"\x03\f\x07\f\u016B\n\f\f\f\x0E\f\u016E\v\f\x03\f\x07\f\u0171\n\f\f\f\x0E" +
		"\f\u0174\v\f\x03\f\x05\f\u0177\n\f\x03\f\x07\f\u017A\n\f\f\f\x0E\f\u017D" +
		"\v\f\x03\r\x03\r\x06\r\u0181\n\r\r\r\x0E\r\u0182\x03\x0E\x03\x0E\x03\x0E" +
		"\x07\x0E\u0188\n\x0E\f\x0E\x0E\x0E\u018B\v\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x05\x0F\u0191\n\x0F\x03\x0F\x07\x0F\u0194\n\x0F\f\x0F\x0E\x0F" +
		"\u0197\v\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u019C\n\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x07\x11\u01A2\n\x11\f\x11\x0E\x11\u01A5\v\x11\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13" +
		"\u01B0\n\x13\f\x13\x0E\x13\u01B3\v\x13\x05\x13\u01B5\n\x13\x03\x13\x05" +
		"\x13\u01B8\n\x13\x03\x14\x03\x14\x03\x14\x07\x14\u01BD\n\x14\f\x14\x0E" +
		"\x14\u01C0\v\x14\x03\x15\x03\x15\x03\x15\x07\x15\u01C5\n\x15\f\x15\x0E" +
		"\x15\u01C8\v\x15\x03\x16\x03\x16\x03\x16\x07\x16\u01CD\n\x16\f\x16\x0E" +
		"\x16\u01D0\v\x16\x03\x17\x03\x17\x03\x17\x06\x17\u01D5\n\x17\r\x17\x0E" +
		"\x17\u01D6\x03\x18\x03\x18\x05\x18\u01DB\n\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x05\x19\u01E2\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01EC\n\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01F5\n\x1D\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x07 \u0203" +
		"\n \f \x0E \u0206\v \x05 \u0208\n \x03!\x03!\x03!\x03!\x03\"\x03\"\x07" +
		"\"\u0210\n\"\f\"\x0E\"\u0213\v\"\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x05$\u0220\n$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x05%\u022D\n%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05" +
		"&\u0236\n&\x03\'\x03\'\x03\'\x03\'\x07\'\u023C\n\'\f\'\x0E\'\u023F\v\'" +
		"\x03\'\x03\'\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05" +
		")\u024E\n)\x03*\x03*\x05*\u0252\n*\x03+\x03+\x03+\x03+\x03+\x03+\x03+" +
		"\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0263\n+\x03,\x03,\x03," +
		"\x03,\x03,\x03,\x05,\u026B\n,\x07,\u026D\n,\f,\x0E,\u0270\v,\x03,\x03" +
		",\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0280" +
		"\n-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0289\n-\x07-\u028B\n-\f-" +
		"\x0E-\u028E\v-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03." +
		"\x03.\x05.\u029C\n.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u02A5\n.\x07" +
		".\u02A7\n.\f.\x0E.\u02AA\v.\x03.\x03.\x03/\x03/\x03/\x05/\u02B1\n/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x031\x031\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"3\x033\x034\x034\x034\x054\u02D4\n4\x035\x035\x035\x036\x036\x076\u02DB" +
		"\n6\f6\x0E6\u02DE\v6\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x05" +
		"7\u02F7\n7\x038\x038\x038\x038\x038\x078\u02FE\n8\f8\x0E8\u0301\v8\x05" +
		"8\u0303\n8\x038\x038\x039\x039\x039\x039\x03:\x03:\x05:\u030D\n:\x03:" +
		"\x03:\x05:\u0311\n:\x03;\x03;\x03;\x03;\x07;\u0317\n;\f;\x0E;\u031A\v" +
		";\x03<\x03<\x03<\x05<\u031F\n<\x03<\x07<\u0322\n<\f<\x0E<\u0325\v<\x03" +
		"<\x03<\x03=\x03=\x03=\x03=\x03>\x03>\x05>\u032F\n>\x03?\x03?\x03?\x03" +
		"?\x03?\x03?\x03?\x05?\u0338\n?\x03?\x05?\u033B\n?\x03?\x05?\u033E\n?\x03" +
		"?\x05?\u0341\n?\x03?\x07?\u0344\n?\f?\x0E?\u0347\v?\x03?\x03?\x03@\x03" +
		"@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x07B\u0358\n" +
		"B\fB\x0EB\u035B\vB\x03B\x03B\x03C\x03C\x07C\u0361\nC\fC\x0EC\u0364\vC" +
		"\x03D\x03D\x03D\x07D\u0369\nD\fD\x0ED\u036C\vD\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x05E\u0375\nE\x03F\x05F\u0378\nF\x03F\x05F\u037B\nF\x03G\x03" +
		"G\x03G\x07G\u0380\nG\fG\x0EG\u0383\vG\x03H\x03H\x03H\x05H\u0388\nH\x03" +
		"I\x05I\u038B\nI\x03I\x03I\x03I\x03I\x07I\u0391\nI\fI\x0EI\u0394\vI\x03" +
		"I\x05I\u0397\nI\x05I\u0399\nI\x03I\x03I\x05I\u039D\nI\x03J\x03J\x03J\x03" +
		"J\x03J\x05J\u03A4\nJ\x03J\x03J\x03J\x05J\u03A9\nJ\x03J\x05J\u03AC\nJ\x03" +
		"K\x03K\x03K\x03K\x07K\u03B2\nK\fK\x0EK\u03B5\vK\x03K\x03K\x03L\x03L\x05" +
		"L\u03BB\nL\x03M\x03M\x05M\u03BF\nM\x03N\x03N\x03O\x05O\u03C4\nO\x03O\x07" +
		"O\u03C7\nO\fO\x0EO\u03CA\vO\x03P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x05Q\u03D3" +
		"\nQ\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x07Q\u03DB\nQ\fQ\x0EQ\u03DE\vQ\x03R" +
		"\x03R\x03R\x03R\x03S\x03S\x03T\x03T\x03T\x03T\x03U\x03U\x03U\x03U\x03" +
		"V\x03V\x03W\x06W\u03F1\nW\rW\x0EW\u03F2\x03X\x03X\x05X\u03F7\nX\x03Y\x03" +
		"Y\x05Y\u03FB\nY\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x07Z\u0403\nZ\fZ\x0EZ\u0406" +
		"\vZ\x03Z\x05Z\u0409\nZ\x03Z\x03Z\x03[\x03[\x03[\x07[\u0410\n[\f[\x0E[" +
		"\u0413\v[\x03[\x03[\x05[\u0417\n[\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x03" +
		"\\\x03\\\x07\\\u0421\n\\\f\\\x0E\\\u0424\v\\\x03\\\x03\\\x05\\\u0428\n" +
		"\\\x03\\\x03\\\x03]\x03]\x03]\x07]\u042F\n]\f]\x0E]\u0432\v]\x03]\x05" +
		"]\u0435\n]\x03]\x03]\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u0440\n^" +
		"\x03_\x03_\x03_\x03_\x03_\x03_\x05_\u0448\n_\x03_\x03_\x03_\x03_\x03_" +
		"\x03_\x05_\u0450\n_\x03`\x03`\x03`\x03`\x03`\x03`\x05`\u0458\n`\x03`\x03" +
		"`\x03`\x03a\x03a\x03a\x03a\x03b\x03b\x05b\u0463\nb\x03c\x03c\x03c\x05" +
		"c\u0468\nc\x03d\x03d\x03d\x03d\x03d\x03d\x03e\x03e\x05e\u0472\ne\x03e" +
		"\x03e\x03e\x05e\u0477\ne\x03f\x03f\x03f\x03f\x05f\u047D\nf\x03f\x07f\u0480" +
		"\nf\ff\x0Ef\u0483\vf\x03f\x05f\u0486\nf\x03f\x07f\u0489\nf\ff\x0Ef\u048C" +
		"\vf\x03f\x03f\x03f\x03g\x03g\x03g\x03g\x03g\x03g\x03h\x03h\x03h\x03i\x03" +
		"i\x03j\x03j\x05j\u049E\nj\x03j\x03j\x05j\u04A2\nj\x03j\x03j\x05j\u04A6" +
		"\nj\x03j\x03j\x03j\x03j\x03j\x05j\u04AD\nj\x03j\x03j\x03j\x05j\u04B2\n" +
		"j\x03j\x03j\x03j\x03j\x03j\x05j\u04B9\nj\x03k\x03k\x03k\x03l\x03l\x03" +
		"l\x03l\x03l\x03l\x03l\x03l\x07l\u04C6\nl\fl\x0El\u04C9\vl\x03l\x03l\x03" +
		"l\x03l\x03m\x03m\x06m\u04D1\nm\rm\x0Em\u04D2\x03m\x03m\x03n\x03n\x03o" +
		"\x03o\x03o\x03o\x05o\u04DD\no\x03p\x03p\x03p\x03p\x03p\x03p\x05p\u04E5" +
		"\np\x03p\x03p\x03p\x03p\x07p\u04EB\np\fp\x0Ep\u04EE\vp\x03q\x03q\x03q" +
		"\x03q\x03q\x03r\x07r\u04F6\nr\fr\x0Er\u04F9\vr\x03s\x03s\x03s\x03s\x05" +
		"s\u04FF\ns\x03s\x05s\u0502\ns\x03s\x07s\u0505\ns\fs\x0Es\u0508\vs\x03" +
		"s\x03s\x03t\x03t\x03t\x05t\u050F\nt\x03t\x03t\x03u\x03u\x05u\u0515\nu" +
		"\x03u\x03u\x07u\u0519\nu\fu\x0Eu\u051C\vu\x03u\x03u\x03v\x03v\x03v\x06" +
		"v\u0523\nv\rv\x0Ev\u0524\x03w\x03w\x05w\u0529\nw\x03w\x03w\x07w\u052D" +
		"\nw\fw\x0Ew\u0530\vw\x03w\x03w\x03x\x03x\x07x\u0536\nx\fx\x0Ex\u0539\v" +
		"x\x03x\x03x\x03y\x03y\x03y\x07y\u0540\ny\fy\x0Ey\u0543\vy\x03y\x03y\x03" +
		"z\x03z\x03z\x05z\u054A\nz\x03z\x03z\x03z\x07z\u054F\nz\fz\x0Ez\u0552\v" +
		"z\x03z\x03z\x03{\x03{\x03{\x05{\u0559\n{\x03{\x03{\x03|\x06|\u055E\n|" +
		"\r|\x0E|\u055F\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x06}\u0569\n}\r}\x0E" +
		"}\u056A\x03}\x03}\x03}\x06}\u0570\n}\r}\x0E}\u0571\x03}\x07}\u0575\n}" +
		"\f}\x0E}\u0578\v}\x03}\x03}\x03}\f\xFE\u016C\u0172\u01CE\u01D6\u0204\u023D" +
		"\u026E\u04C7\u0537\x02\x04\xA0\xDE~\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
		"\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02" +
		"\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02" +
		"\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02" +
		"\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02" +
		"\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02" +
		"\xF4\x02\xF6\x02\xF8\x02\x02\t\f\x02\n\n\r\r\x10\x10\x13\x13\x1A\x1A&" +
		"(--5:^^ff\x03\x02@C\x03\x02)*\x03\x02\x0F\x13\x04\x02\x0F\x0F\x11\x13" +
		"\x03\x02OT\x03\x02Z^\x02\u05E7\x02\xFA\x03\x02\x02\x02\x04\u010B\x03\x02" +
		"\x02\x02\x06\u0118\x03\x02\x02\x02\b\u011E\x03\x02\x02\x02\n\u0120\x03" +
		"\x02\x02\x02\f\u0127\x03\x02\x02\x02\x0E\u0129\x03\x02\x02\x02\x10\u0144" +
		"\x03\x02\x02\x02\x12\u014B\x03\x02\x02\x02\x14\u0150\x03\x02\x02\x02\x16" +
		"\u0167\x03\x02\x02\x02\x18\u017E\x03\x02\x02\x02\x1A\u0184\x03\x02\x02" +
		"\x02\x1C\u018E\x03\x02\x02\x02\x1E\u0198\x03\x02\x02\x02 \u019D\x03\x02" +
		"\x02\x02\"\u01A6\x03\x02\x02\x02$\u01B7\x03\x02\x02\x02&\u01B9\x03\x02" +
		"\x02\x02(\u01C1\x03\x02\x02\x02*\u01C9\x03\x02\x02\x02,\u01D1\x03\x02" +
		"\x02\x02.\u01DA\x03\x02\x02\x020\u01E1\x03\x02\x02\x022\u01E3\x03\x02" +
		"\x02\x024\u01EB\x03\x02\x02\x026\u01ED\x03\x02\x02\x028\u01F4\x03\x02" +
		"\x02\x02:\u01F6\x03\x02\x02\x02<\u01FA\x03\x02\x02\x02>\u01FD\x03\x02" +
		"\x02\x02@\u0209\x03\x02\x02\x02B\u020D\x03\x02\x02\x02D\u0214\x03\x02" +
		"\x02\x02F\u021F\x03\x02\x02\x02H\u022C\x03\x02\x02\x02J\u0235\x03\x02" +
		"\x02\x02L\u0237\x03\x02\x02\x02N\u0242\x03\x02\x02\x02P\u024D\x03\x02" +
		"\x02\x02R\u0251\x03\x02\x02\x02T\u0262\x03\x02\x02\x02V\u0264\x03\x02" +
		"\x02\x02X\u0275\x03\x02\x02\x02Z\u0291\x03\x02\x02\x02\\\u02AD\x03\x02" +
		"\x02\x02^\u02B9\x03\x02\x02\x02`\u02C3\x03\x02\x02\x02b\u02C5\x03\x02" +
		"\x02\x02d\u02CE\x03\x02\x02\x02f\u02D3\x03\x02\x02\x02h\u02D5\x03\x02" +
		"\x02\x02j\u02D8\x03\x02\x02\x02l\u02F6\x03\x02\x02\x02n\u02F8\x03\x02" +
		"\x02\x02p\u0306\x03\x02\x02\x02r\u030C\x03\x02\x02\x02t\u0312\x03\x02" +
		"\x02\x02v\u031B\x03\x02\x02\x02x\u0328\x03\x02\x02\x02z\u032E\x03\x02" +
		"\x02\x02|\u0330\x03\x02\x02\x02~\u034A\x03\x02\x02\x02\x80\u034F\x03\x02" +
		"\x02\x02\x82\u0354\x03\x02\x02\x02\x84\u035E\x03\x02\x02\x02\x86\u0365" +
		"\x03\x02\x02\x02\x88\u036D\x03\x02\x02\x02\x8A\u0377\x03\x02\x02\x02\x8C" +
		"\u037C\x03\x02\x02\x02\x8E\u0384\x03\x02\x02\x02\x90\u038A\x03\x02\x02" +
		"\x02\x92\u03A3\x03\x02\x02\x02\x94\u03AD\x03\x02\x02\x02\x96\u03B8\x03" +
		"\x02\x02\x02\x98\u03BC\x03\x02\x02\x02\x9A\u03C0\x03\x02\x02\x02\x9C\u03C3" +
		"\x03\x02\x02\x02\x9E\u03CB\x03\x02\x02\x02\xA0\u03D2\x03\x02\x02\x02\xA2" +
		"\u03DF\x03\x02\x02\x02\xA4\u03E3\x03\x02\x02\x02\xA6\u03E5\x03\x02\x02" +
		"\x02\xA8\u03E9\x03\x02\x02\x02\xAA\u03ED\x03\x02\x02\x02\xAC\u03F0\x03" +
		"\x02\x02\x02\xAE\u03F6\x03\x02\x02\x02\xB0\u03FA\x03\x02\x02\x02\xB2\u03FC" +
		"\x03\x02\x02\x02\xB4\u040C\x03\x02\x02\x02\xB6\u041A\x03\x02\x02\x02\xB8" +
		"\u042B\x03\x02\x02\x02\xBA\u0438\x03\x02\x02\x02\xBC\u0441\x03\x02\x02" +
		"\x02\xBE\u0451\x03\x02\x02\x02\xC0\u045C\x03\x02\x02\x02\xC2\u0460\x03" +
		"\x02\x02\x02\xC4\u0464\x03\x02\x02\x02\xC6\u0469\x03\x02\x02\x02\xC8\u0471" +
		"\x03\x02\x02\x02\xCA\u0478\x03\x02\x02\x02\xCC\u0490\x03\x02\x02\x02\xCE" +
		"\u0496\x03\x02\x02\x02\xD0\u0499\x03\x02\x02\x02\xD2\u04B8\x03\x02\x02" +
		"\x02\xD4\u04BA\x03\x02\x02\x02\xD6\u04BD\x03\x02\x02\x02\xD8\u04CE\x03" +
		"\x02\x02\x02\xDA\u04D6\x03\x02\x02\x02\xDC\u04DC\x03\x02\x02\x02\xDE\u04E4" +
		"\x03\x02\x02\x02\xE0\u04EF\x03\x02\x02\x02\xE2\u04F7\x03\x02\x02\x02\xE4" +
		"\u04FA\x03\x02\x02\x02\xE6\u050B\x03\x02\x02\x02\xE8\u0512\x03\x02\x02" +
		"\x02\xEA\u051F\x03\x02\x02\x02\xEC\u0526\x03\x02\x02\x02\xEE\u0533\x03" +
		"\x02\x02\x02\xF0\u053C\x03\x02\x02\x02\xF2\u0546\x03\x02\x02\x02\xF4\u0555" +
		"\x03\x02\x02\x02\xF6\u055D\x03\x02\x02\x02\xF8\u0561\x03\x02\x02\x02\xFA" +
		"\xFE\x07\x03\x02\x02\xFB\xFD\x07o\x02\x02\xFC\xFB\x03\x02\x02\x02\xFD" +
		"\u0100\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02" +
		"\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0103\x07\x02" +
		"\x02\x03\u0102\u0101\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103" +
		"\x03\x03\x02\x02\x02\u0104\u0106\x05\x06\x04\x02\u0105\u0104\x03\x02\x02" +
		"\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108" +
		"\x03\x02\x02\x02\u0108\u010C\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02" +
		"\u010A\u010C\x05\x02\x02\x02\u010B\u0107\x03\x02\x02\x02\u010B\u010A\x03" +
		"\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010E\x07\x02\x02\x03\u010E" +
		"\x05\x03\x02\x02\x02\u010F\u0119\x05\x14\v\x02\u0110\u0119\x05\xE4s\x02" +
		"\u0111\u0119\x05\xF2z\x02\u0112\u0119\x05\xF0y\x02\u0113\u0119\x05\xF8" +
		"}\x02\u0114\u0119\x05\x0E\b\x02\u0115\u0119\x05|?\x02\u0116\u0119\x05" +
		"\xE6t\x02\u0117\u0119\x05\n\x06\x02\u0118\u010F\x03\x02\x02\x02\u0118" +
		"\u0110\x03\x02\x02\x02\u0118\u0111\x03\x02\x02\x02\u0118\u0112\x03\x02" +
		"\x02\x02\u0118\u0113\x03\x02\x02\x02\u0118\u0114\x03\x02\x02\x02\u0118" +
		"\u0115\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0118\u0117\x03\x02" +
		"\x02\x02\u0119\x07\x03\x02\x02\x02\u011A\u011B\x07>\x02\x02\u011B\u011F" +
		"\x07>\x02\x02\u011C\u011F\x07>\x02\x02\u011D\u011F\x07?\x02\x02\u011E" +
		"\u011A\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011E\u011D\x03\x02" +
		"\x02\x02\u011F\t\x03\x02\x02\x02\u0120\u0121\x075\x02\x02\u0121\u0122" +
		"\x05\f\x07\x02\u0122\u0123\x076\x02\x02\u0123\u0124\x05\f\x07\x02\u0124" +
		"\u0125\x077\x02\x02\u0125\u0126\x05\f\x07\x02\u0126\v\x03\x02\x02\x02" +
		"\u0127\u0128\t\x02\x02\x02\u0128\r\x03\x02\x02\x02\u0129\u012A\x07\x1F" +
		"\x02\x02\u012A\u012C\x05\f\x07\x02\u012B\u012D\x05\x12\n\x02\u012C\u012B" +
		"\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02" +
		"\u012E\u0137\x07I\x02\x02\u012F\u0134\x05\x10\t\x02\u0130\u0131\x07<\x02" +
		"\x02\u0131\u0133\x05\x10\t\x02\u0132\u0130\x03\x02\x02\x02\u0133\u0136" +
		"\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02" +
		"\u0135\u0138\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0137\u012F\x03" +
		"\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u0139" +
		"\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013F\x07J\x02" +
		"\x02\u013C\u013E\x050\x19\x02\u013D\u013C\x03\x02\x02\x02\u013E\u0141" +
		"\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02" +
		"\u0140\u0142\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0142\u0143\x07" +
		";\x02\x02\u0143\x0F\x03\x02\x02\x02\u0144\u0148\x05\f\x07\x02\u0145\u0147" +
		"\x050\x19\x02\u0146\u0145\x03\x02\x02\x02\u0147\u014A\x03\x02\x02\x02" +
		"\u0148\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\x11\x03" +
		"\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014B\u014C\x07:\x02\x02\u014C" +
		"\u014D\x07I\x02\x02\u014D\u014E\x05\xE2r\x02\u014E\u014F\x07J\x02\x02" +
		"\u014F\x13\x03\x02\x02\x02\u0150\u0154\x05\x1E\x10\x02\u0151\u0153\x05" +
		"0\x19\x02\u0152\u0151\x03\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154" +
		"\u0152\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u015B\x03\x02" +
		"\x02\x02\u0156\u0154\x03\x02\x02\x02\u0157\u015A\x05&\x14\x02\u0158\u015A" +
		"\x05\x84C\x02\u0159\u0157\x03\x02\x02\x02\u0159\u0158\x03\x02\x02\x02" +
		"\u015A\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03" +
		"\x02\x02\x02\u015C\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015E" +
		"\u0160\x05B\"\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02\x02" +
		"\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x07;\x02\x02\u0162\u0163" +
		"\x05\x16\f\x02\u0163\u0165\x07;\x02\x02\u0164\u0166\x07\x02\x02\x03\u0165" +
		"\u0164\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\x15\x03\x02\x02" +
		"\x02\u0167\u0168\x07\r\x02\x02\u0168\u016C\x05\f\x07\x02\u0169\u016B\x05" +
		"\x18\r\x02\u016A\u0169\x03\x02\x02\x02\u016B\u016E\x03\x02\x02\x02\u016C" +
		"\u016D\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016D\u0172\x03\x02" +
		"\x02\x02\u016E\u016C\x03\x02\x02\x02\u016F\u0171\x05\x1C\x0F\x02\u0170" +
		"\u016F\x03\x02\x02\x02\u0171\u0174\x03\x02\x02\x02\u0172\u0173\x03\x02" +
		"\x02\x02\u0172\u0170\x03\x02\x02\x02\u0173\u0176\x03\x02\x02\x02\u0174" +
		"\u0172\x03\x02\x02\x02\u0175\u0177\x05\x1A\x0E\x02\u0176\u0175\x03\x02" +
		"\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u017B\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u0178\u017A\x050\x19\x02\u0179\u0178\x03\x02\x02\x02\u017A\u017D" +
		"\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02" +
		"\u017C\x17\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017E\u0180\x05" +
		"\f\x07\x02\u017F\u0181\x050\x19\x02\u0180\u017F\x03\x02\x02\x02\u0181" +
		"\u0182\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02" +
		"\x02\x02\u0183\x19\x03\x02\x02\x02\u0184\u0185\x07\x19\x02\x02\u0185\u0189" +
		"\x07I\x02\x02\u0186\u0188\x05\x1C\x0F\x02\u0187\u0186\x03\x02\x02\x02" +
		"\u0188\u018B\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u0189\u018A\x03" +
		"\x02\x02\x02\u018A\u018C\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018C" +
		"\u018D\x07J\x02\x02\u018D\x1B\x03\x02\x02\x02\u018E\u0190\x05\f\x07\x02" +
		"\u018F\u0191\x07\x0F\x02\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191\x03" +
		"\x02\x02\x02\u0191\u0195\x03\x02\x02\x02\u0192\u0194\x050\x19\x02\u0193" +
		"\u0192\x03\x02\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195\u0193\x03\x02" +
		"\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\x1D\x03\x02\x02\x02\u0197\u0195" +
		"\x03\x02\x02\x02\u0198\u0199\x07\f\x02\x02\u0199\u019B\x05\f\x07\x02\u019A" +
		"\u019C\x05 \x11\x02\u019B\u019A\x03\x02\x02\x02\u019B\u019C\x03\x02\x02" +
		"\x02\u019C\x1F\x03\x02\x02\x02\u019D\u019E\x07\x0E\x02\x02\u019E\u01A3" +
		"\x05\"\x12\x02\u019F\u01A0\x07<\x02\x02\u01A0\u01A2\x05\"\x12\x02\u01A1" +
		"\u019F\x03\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3\u01A1\x03\x02" +
		"\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4!\x03\x02\x02\x02\u01A5\u01A3" +
		"\x03\x02\x02\x02\u01A6\u01A7\x05\f\x07\x02\u01A7#\x03\x02\x02\x02\u01A8" +
		"\u01A9\x07\x18\x02\x02\u01A9\u01B8\x05\xECw\x02\u01AA\u01AB\x07\x18\x02" +
		"\x02\u01AB\u01B4\x07E\x02\x02\u01AC\u01B1\x05T+\x02\u01AD\u01AE\x07<\x02" +
		"\x02\u01AE\u01B0\x05T+\x02\u01AF\u01AD\x03\x02\x02\x02\u01B0\u01B3\x03" +
		"\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2" +
		"\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B4\u01AC\x03\x02" +
		"\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6" +
		"\u01B8\x07F\x02\x02\u01B7\u01A8\x03\x02\x02\x02\u01B7\u01AA\x03\x02\x02" +
		"\x02\u01B8%\x03\x02\x02\x02\u01B9\u01BA\x07\x14\x02\x02\u01BA\u01BE\x05" +
		"\f\x07\x02\u01BB\u01BD\x050\x19\x02\u01BC\u01BB\x03\x02\x02\x02\u01BD" +
		"\u01C0\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02" +
		"\x02\x02\u01BF\'\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1\u01C2" +
		"\x05*\x16\x02\u01C2\u01C6\x05\f\x07\x02\u01C3\u01C5\x050\x19\x02\u01C4" +
		"\u01C3\x03\x02\x02\x02\u01C5\u01C8\x03\x02\x02\x02\u01C6\u01C4\x03\x02" +
		"\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7)\x03\x02\x02\x02\u01C8\u01C6" +
		"\x03\x02\x02\x02\u01C9\u01CE\x05\f\x07\x02\u01CA\u01CB\x07V\x02\x02\u01CB" +
		"\u01CD\x05\f\x07\x02\u01CC\u01CA\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02" +
		"\x02\u01CE\u01CF\x03\x02\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CF+\x03" +
		"\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D1\u01D4\x05\f\x07\x02\u01D2" +
		"\u01D3\x07>\x02\x02\u01D3\u01D5\x05\f\x07\x02\u01D4\u01D2\x03\x02\x02" +
		"\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D6\u01D4" +
		"\x03\x02\x02\x02\u01D7-\x03\x02\x02\x02\u01D8\u01DB\x05\f\x07\x02\u01D9" +
		"\u01DB\x05,\x17\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01D9\x03\x02\x02" +
		"\x02\u01DB/\x03\x02\x02\x02\u01DC\u01E2\x052\x1A\x02\u01DD\u01E2\x05:" +
		"\x1E\x02\u01DE\u01E2\x05@!\x02\u01DF\u01E2\x05> \x02\u01E0\u01E2\x056" +
		"\x1C\x02\u01E1\u01DC\x03\x02\x02\x02\u01E1\u01DD\x03\x02\x02\x02\u01E1" +
		"\u01DE\x03\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E0\x03\x02" +
		"\x02\x02\u01E21\x03\x02\x02\x02\u01E3\u01E4\x07@\x02\x02\u01E4\u01E5\x07" +
		"/\x02\x02\u01E5\u01E6\x054\x1B\x02\u01E63\x03\x02\x02\x02\u01E7\u01EC" +
		"\x05\xD8m\x02\u01E8\u01EC\x05t;\x02\u01E9\u01EC\x05\xCEh\x02\u01EA\u01EC" +
		"\x05b2\x02\u01EB\u01E7\x03\x02\x02\x02\u01EB\u01E8\x03\x02\x02\x02\u01EB" +
		"\u01E9\x03\x02\x02\x02\u01EB\u01EA\x03\x02\x02\x02\u01EC5\x03\x02\x02" +
		"\x02\u01ED\u01EE\x07@\x02\x02\u01EE\u01EF\x07\r\x02\x02\u01EF\u01F0\x05" +
		"\xD8m\x02\u01F07\x03\x02\x02\x02\u01F1\u01F5\x05b2\x02\u01F2\u01F5\x05" +
		"t;\x02\u01F3\u01F5\x05\xCEh\x02\u01F4\u01F1\x03\x02\x02\x02\u01F4\u01F2" +
		"\x03\x02\x02\x02\u01F4\u01F3\x03\x02\x02\x02\u01F59\x03\x02\x02\x02\u01F6" +
		"\u01F7\t\x03\x02\x02\u01F7\u01F8\x05.\x18\x02\u01F8\u01F9\x05H%\x02\u01F9" +
		";\x03\x02\x02\x02\u01FA\u01FB\x05*\x16\x02\u01FB\u01FC\x05\f\x07\x02\u01FC" +
		"=\x03\x02\x02\x02\u01FD\u01FE\x07@\x02\x02\u01FE\u0207\x07(\x02\x02\u01FF" +
		"\u0204\x05<\x1F\x02\u0200\u0201\x07<\x02\x02\u0201\u0203\x05<\x1F\x02" +
		"\u0202\u0200\x03\x02\x02\x02\u0203\u0206\x03\x02\x02\x02\u0204\u0205\x03" +
		"\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0205\u0208\x03\x02\x02\x02\u0206" +
		"\u0204\x03\x02\x02\x02\u0207\u01FF\x03\x02\x02\x02\u0207\u0208\x03\x02" +
		"\x02\x02\u0208?\x03\x02\x02\x02\u0209\u020A\x07@\x02\x02\u020A\u020B\x07" +
		"\'\x02\x02\u020B\u020C\x05F$\x02\u020CA\x03\x02\x02\x02\u020D\u0211\x07" +
		"\x15\x02\x02\u020E\u0210\x050\x19\x02\u020F\u020E\x03\x02\x02\x02\u0210" +
		"\u0213\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02\u0211\u0212\x03\x02" +
		"\x02\x02\u0212C\x03\x02\x02\x02\u0213\u0211\x03\x02\x02\x02\u0214\u0215" +
		"\x07a\x02\x02\u0215E\x03\x02\x02\x02\u0216\u0220\x05b2\x02\u0217\u0220" +
		"\x05\xA0Q\x02\u0218\u0220\x05T+\x02\u0219\u0220\x05N(\x02\u021A\u0220" +
		"\x05D#\x02\u021B\u021C\x05\f\x07\x02\u021C\u021D\x05\f\x07\x02\u021D\u0220" +
		"\x03\x02\x02\x02\u021E\u0220\x05\xEAv\x02\u021F\u0216\x03\x02\x02\x02" +
		"\u021F\u0217\x03\x02\x02\x02\u021F\u0218\x03\x02\x02\x02\u021F\u0219\x03" +
		"\x02\x02\x02\u021F\u021A\x03\x02\x02\x02\u021F\u021B\x03\x02\x02\x02\u021F" +
		"\u021E\x03\x02\x02\x02\u0220G\x03\x02\x02\x02\u0221\u022D\x05\xD8m\x02" +
		"\u0222\u022D\x05\xCEh\x02\u0223\u022D\x05b2\x02\u0224\u022D\x05\xA0Q\x02" +
		"\u0225\u022D\x05T+\x02\u0226\u022D\x05N(\x02\u0227\u022D\x05D#\x02\u0228" +
		"\u0229\x05\f\x07\x02\u0229\u022A\x05\f\x07\x02\u022A\u022D\x03\x02\x02" +
		"\x02\u022B\u022D\x05\xEAv\x02\u022C\u0221\x03\x02\x02\x02\u022C\u0222" +
		"\x03\x02\x02\x02\u022C\u0223\x03\x02\x02\x02\u022C\u0224\x03\x02\x02\x02" +
		"\u022C\u0225\x03\x02\x02\x02\u022C\u0226\x03\x02\x02\x02\u022C\u0227\x03" +
		"\x02\x02\x02\u022C\u0228\x03\x02\x02\x02\u022C\u022B\x03\x02\x02\x02\u022D" +
		"I\x03\x02\x02\x02\u022E\u0236\x05\xA0Q\x02\u022F\u0236\x05T+\x02\u0230" +
		"\u0236\x05N(\x02\u0231\u0236\x05D#\x02\u0232\u0233\x05\f\x07\x02\u0233" +
		"\u0234\x05\f\x07\x02\u0234\u0236\x03\x02\x02\x02\u0235\u022E\x03\x02\x02" +
		"\x02\u0235\u022F\x03\x02\x02\x02\u0235\u0230\x03\x02\x02\x02\u0235\u0231" +
		"\x03\x02\x02\x02\u0235\u0232\x03\x02\x02\x02\u0236K\x03\x02\x02\x02\u0237" +
		"\u0238\x07I\x02\x02\u0238\u023D\x05N(\x02\u0239\u023A\x07<\x02\x02\u023A" +
		"\u023C\x05N(\x02\u023B\u0239\x03\x02\x02\x02\u023C\u023F\x03\x02\x02\x02" +
		"\u023D\u023E\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023E\u0240\x03" +
		"\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u0240\u0241\x07J\x02\x02\u0241" +
		"M\x03\x02\x02\x02\u0242\u0243\x05P)\x02\u0243\u0244\x07=\x02\x02\u0244" +
		"\u0245\x05R*\x02\u0245O\x03\x02\x02\x02\u0246\u024E\x05d3\x02\u0247\u024E" +
		"\x07`\x02\x02\u0248\u024E\x07_\x02\x02\u0249\u024E\x05t;\x02\u024A\u024E" +
		"\x07c\x02\x02\u024B\u024E\x05\xE8u\x02\u024C\u024E\x05\xECw\x02\u024D" +
		"\u0246\x03\x02\x02\x02\u024D\u0247\x03\x02\x02\x02\u024D\u0248\x03\x02" +
		"\x02\x02\u024D\u0249\x03\x02\x02\x02\u024D\u024A\x03\x02\x02\x02\u024D" +
		"\u024B\x03\x02\x02\x02\u024D\u024C\x03\x02\x02\x02\u024EQ\x03\x02\x02" +
		"\x02\u024F\u0252\x05T+\x02\u0250\u0252\x05\xA0Q\x02\u0251\u024F\x03\x02" +
		"\x02\x02\u0251\u0250\x03\x02\x02\x02\u0252S\x03\x02\x02\x02\u0253\u0263" +
		"\x05\xEEx\x02\u0254\u0263\x05v<\x02\u0255\u0263\x05\xDEp\x02\u0256\u0263" +
		"\x05f4\x02\u0257\u0263\x05$\x13\x02\u0258\u0263\x05b2\x02\u0259\u0263" +
		"\x05\xE8u\x02\u025A\u0263\x05\xECw\x02\u025B\u0263\x05\xC8e\x02\u025C" +
		"\u0263\x05X-\x02\u025D\u0263\x05Z.\x02\u025E\u0263\x05V,\x02\u025F\u0263" +
		"\x05L\'\x02\u0260\u0263\x05\xB2Z\x02\u0261\u0263\x05\xB4[\x02\u0262\u0253" +
		"\x03\x02\x02\x02\u0262\u0254\x03\x02\x02\x02\u0262\u0255\x03\x02\x02\x02" +
		"\u0262\u0256\x03\x02\x02\x02\u0262\u0257\x03\x02\x02\x02\u0262\u0258\x03" +
		"\x02\x02\x02\u0262\u0259\x03\x02\x02\x02\u0262\u025A\x03\x02\x02\x02\u0262" +
		"\u025B\x03\x02\x02\x02\u0262\u025C\x03\x02\x02\x02\u0262\u025D\x03\x02" +
		"\x02\x02\u0262\u025E\x03\x02\x02\x02\u0262\u025F\x03\x02\x02\x02\u0262" +
		"\u0260\x03\x02\x02\x02\u0262\u0261\x03\x02\x02\x02\u0263U\x03\x02\x02" +
		"\x02\u0264\u0265\x07&\x02\x02\u0265\u0266\x07E\x02\x02\u0266\u026E\x05" +
		"h5\x02\u0267\u026A\x07<\x02\x02\u0268\u026B\x05\xA8U\x02\u0269\u026B\x05" +
		"\xA0Q\x02\u026A\u0268\x03\x02\x02\x02\u026A\u0269\x03\x02\x02\x02\u026B" +
		"\u026D\x03\x02\x02\x02\u026C\u0267\x03\x02\x02\x02\u026D\u0270\x03\x02" +
		"\x02\x02\u026E\u026F\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026F" +
		"\u0271\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0271\u0272\x07<\x02" +
		"\x02\u0272\u0273\x05\xA0Q\x02\u0273\u0274\x07F\x02\x02\u0274W\x03\x02" +
		"\x02\x02\u0275\u0276\x07\x04\x02\x02\u0276\u0277\x07E\x02\x02\u0277\u0278" +
		"\x05T+\x02\u0278\u027F\x07<\x02\x02\u0279\u027A\x07\x05\x02\x02\u027A" +
		"\u0280\x05\xA0Q\x02\u027B\u027C\x07\x06\x02\x02\u027C\u0280\x05\f\x07" +
		"\x02\u027D\u027E\x07\x07\x02\x02\u027E\u0280\x05T+\x02\u027F\u0279\x03" +
		"\x02\x02\x02\u027F\u027B\x03\x02\x02\x02\u027F\u027D\x03\x02\x02\x02\u0280" +
		"\u028C\x03\x02\x02\x02\u0281\u0288\x07<\x02\x02\u0282\u0283\x07\x05\x02" +
		"\x02\u0283\u0289\x05\xA0Q\x02\u0284\u0285\x07\x06\x02\x02\u0285\u0289" +
		"\x05\f\x07\x02\u0286\u0287\x07\x07\x02\x02\u0287\u0289\x05T+\x02\u0288" +
		"\u0282\x03\x02\x02\x02\u0288\u0284\x03\x02\x02\x02\u0288\u0286\x03\x02" +
		"\x02\x02\u0289\u028B\x03\x02\x02\x02\u028A\u0281\x03\x02\x02\x02\u028B" +
		"\u028E\x03\x02\x02\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02" +
		"\x02\x02\u028D\u028F\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F" +
		"\u0290\x07F\x02\x02\u0290Y\x03\x02\x02\x02\u0291\u0292\x07\b\x02\x02\u0292" +
		"\u0293\x07E\x02\x02\u0293\u0294\x05T+\x02\u0294\u029B\x07<\x02\x02\u0295" +
		"\u0296\x07\t\x02\x02\u0296\u029C\x05\xA0Q\x02\u0297\u0298\x07\n\x02\x02" +
		"\u0298\u029C\x05\f\x07\x02\u0299\u029A\x07\v\x02\x02\u029A\u029C\x05T" +
		"+\x02\u029B\u0295\x03\x02\x02\x02\u029B\u0297\x03\x02\x02\x02\u029B\u0299" +
		"\x03\x02\x02\x02\u029C\u02A8\x03\x02\x02\x02\u029D\u02A4\x07<\x02\x02" +
		"\u029E\u029F\x07\t\x02\x02\u029F\u02A5\x05\xA0Q\x02\u02A0\u02A1\x07\n" +
		"\x02\x02\u02A1\u02A5\x05\f\x07\x02\u02A2\u02A3\x07\v\x02\x02\u02A3\u02A5" +
		"\x05T+\x02\u02A4\u029E\x03\x02\x02\x02\u02A4\u02A0\x03\x02\x02\x02\u02A4" +
		"\u02A2\x03\x02\x02\x02\u02A5\u02A7\x03\x02\x02\x02\u02A6\u029D\x03\x02" +
		"\x02\x02\u02A7\u02AA\x03\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8" +
		"\u02A9\x03\x02\x02\x02\u02A9\u02AB\x03\x02\x02\x02\u02AA\u02A8\x03\x02" +
		"\x02\x02\u02AB\u02AC\x07F\x02\x02\u02AC[\x03\x02\x02\x02\u02AD\u02AE\x07" +
		"#\x02\x02\u02AE\u02B0\x07E\x02\x02\u02AF\u02B1\x05\f\x07\x02\u02B0\u02AF" +
		"\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02" +
		"\u02B2\u02B3\x05\f\x07\x02\u02B3\u02B4\x03\x02\x02\x02\u02B4\u02B5\x07" +
		"<\x02\x02\u02B5\u02B6\x05T+\x02\u02B6\u02B7\x07F\x02\x02\u02B7\u02B8\x05" +
		"\xB0Y\x02\u02B8]\x03\x02\x02\x02\u02B9\u02BA\x074\x02\x02\u02BA\u02BB" +
		"\x07E\x02\x02\u02BB\u02BC\x05\f\x07\x02\u02BC\u02BD\x07<\x02\x02\u02BD" +
		"\u02BE\x05T+\x02\u02BE\u02BF\x07<\x02\x02\u02BF\u02C0\x05T+\x02\u02C0" +
		"\u02C1\x07F\x02\x02\u02C1\u02C2\x05\xB0Y\x02\u02C2_\x03\x02\x02\x02\u02C3" +
		"\u02C4\x05b2\x02\u02C4a\x03\x02\x02\x02\u02C5\u02C6\x07\x1B\x02\x02\u02C6" +
		"\u02C7\x07E\x02\x02\u02C7\u02C8\x05\xA0Q\x02\u02C8\u02C9\x07F\x02\x02" +
		"\u02C9\u02CA\x07\x1D\x02\x02\u02CA\u02CB\x05T+\x02\u02CB\u02CC\x07\x1E" +
		"\x02\x02\u02CC\u02CD\x05T+\x02\u02CDc\x03\x02\x02\x02\u02CE\u02CF\t\x04" +
		"\x02\x02\u02CFe\x03\x02\x02\x02\u02D0\u02D4\x05d3\x02\u02D1\u02D4\x07" +
		"`\x02\x02\u02D2\u02D4\x07_\x02\x02\u02D3\u02D0\x03\x02\x02\x02\u02D3\u02D1" +
		"\x03\x02\x02\x02\u02D3\u02D2\x03\x02\x02\x02\u02D4g\x03\x02\x02\x02\u02D5" +
		"\u02D6\x07M\x02\x02\u02D6\u02D7\x05\f\x07\x02\u02D7i\x03\x02\x02\x02\u02D8" +
		"\u02DC\x05l7\x02\u02D9\u02DB\x05p9\x02\u02DA\u02D9\x03\x02\x02\x02\u02DB" +
		"\u02DE\x03\x02\x02\x02\u02DC\u02DA\x03\x02\x02\x02\u02DC\u02DD\x03\x02" +
		"\x02\x02\u02DDk\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DF\u02F7" +
		"\x05\f\x07\x02\u02E0\u02F7\x05n8\x02\u02E1\u02F7\x05h5\x02\u02E2\u02F7" +
		"\x05\xEEx\x02\u02E3\u02F7\x05\xECw\x02\u02E4\u02F7\x05V,\x02\u02E5\u02F7" +
		"\x05X-\x02\u02E6\u02F7\x05Z.\x02\u02E7\u02F7\x05\xE8u\x02\u02E8\u02F7" +
		"\x05L\'\x02\u02E9\u02F7\x05\x9EP\x02\u02EA\u02EB\x07E\x02\x02\u02EB\u02EC" +
		"\x05\xB2Z\x02\u02EC\u02ED\x07F\x02\x02\u02ED\u02F7\x03\x02\x02\x02\u02EE" +
		"\u02EF\x07E\x02\x02\u02EF\u02F0\x05\xB4[\x02\u02F0\u02F1\x07F\x02\x02" +
		"\u02F1\u02F7\x03\x02\x02\x02\u02F2\u02F3\x07E\x02\x02\u02F3\u02F4\x05" +
		"b2\x02\u02F4\u02F5\x07F\x02\x02\u02F5\u02F7\x03\x02\x02\x02\u02F6\u02DF" +
		"\x03\x02\x02\x02\u02F6\u02E0\x03\x02\x02\x02\u02F6\u02E1\x03\x02\x02\x02" +
		"\u02F6\u02E2\x03\x02\x02\x02\u02F6\u02E3\x03\x02\x02\x02\u02F6\u02E4\x03" +
		"\x02\x02\x02\u02F6\u02E5\x03\x02\x02\x02\u02F6\u02E6\x03\x02\x02\x02\u02F6" +
		"\u02E7\x03\x02\x02\x02\u02F6\u02E8\x03\x02\x02\x02\u02F6\u02E9\x03\x02" +
		"\x02\x02\u02F6\u02EA\x03\x02\x02\x02\u02F6\u02EE\x03\x02\x02\x02\u02F6" +
		"\u02F2\x03\x02\x02\x02\u02F7m\x03\x02\x02\x02\u02F8\u02F9\x05\f\x07\x02" +
		"\u02F9\u0302\x07E\x02\x02\u02FA\u02FF\x05r:\x02\u02FB\u02FC\x07<\x02\x02" +
		"\u02FC\u02FE\x05r:\x02\u02FD\u02FB\x03\x02\x02\x02\u02FE\u0301\x03\x02" +
		"\x02\x02\u02FF\u02FD\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300" +
		"\u0303\x03\x02\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0302\u02FA\x03\x02" +
		"\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304" +
		"\u0305\x07F\x02\x02\u0305o\x03\x02\x02\x02\u0306\u0307\x07G\x02\x02\u0307" +
		"\u0308\x05r:\x02\u0308\u0309\x07H\x02\x02\u0309q\x03\x02\x02\x02\u030A" +
		"\u030B\x07g\x02\x02\u030B\u030D\x07=\x02\x02\u030C\u030A\x03\x02\x02\x02" +
		"\u030C\u030D\x03\x02\x02\x02\u030D\u0310\x03\x02\x02\x02\u030E\u0311\x05" +
		"J&\x02\u030F\u0311\x05h5\x02\u0310\u030E\x03\x02\x02\x02\u0310\u030F\x03" +
		"\x02\x02\x02\u0311s\x03\x02\x02\x02\u0312\u0318\x05j6\x02\u0313\u0314" +
		"\x05\b\x05\x02\u0314\u0315\x05j6\x02\u0315\u0317\x03\x02\x02\x02\u0316" +
		"\u0313\x03\x02\x02\x02\u0317\u031A\x03\x02\x02\x02\u0318\u0316\x03\x02" +
		"\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319u\x03\x02\x02\x02\u031A\u0318" +
		"\x03\x02\x02\x02\u031B\u031C\x07D\x02\x02\u031C\u031E\x05\f\x07\x02\u031D" +
		"\u031F\x05\f\x07\x02\u031E\u031D\x03\x02\x02\x02\u031E\u031F\x03\x02\x02" +
		"\x02\u031F\u0323\x03\x02\x02\x02\u0320\u0322\x05z>\x02\u0321\u0320\x03" +
		"\x02\x02\x02\u0322\u0325\x03\x02\x02\x02\u0323\u0321\x03\x02\x02\x02\u0323" +
		"\u0324\x03\x02\x02\x02\u0324\u0326\x03\x02\x02\x02\u0325\u0323\x03\x02" +
		"\x02\x02\u0326\u0327\x07;\x02\x02\u0327w\x03\x02\x02\x02\u0328\u0329\x05" +
		"T+\x02\u0329\u032A\x05\f\x07\x02\u032A\u032B\x05T+\x02\u032By\x03\x02" +
		"\x02\x02\u032C\u032F\x050\x19\x02\u032D\u032F\x05\xEEx\x02\u032E\u032C" +
		"\x03\x02\x02\x02\u032E\u032D\x03\x02\x02\x02\u032F{\x03\x02\x02\x02\u0330" +
		"\u0331\t\x05\x02\x02\u0331\u0337\x05\f\x07\x02\u0332\u0338\x05~@\x02\u0333" +
		"\u0334\x07E\x02\x02\u0334\u0335\x05\x8AF\x02\u0335\u0336\x07F\x02\x02" +
		"\u0336\u0338\x03\x02\x02\x02\u0337\u0332\x03\x02\x02\x02\u0337\u0333\x03" +
		"\x02\x02\x02\u0338\u033A\x03\x02\x02\x02\u0339\u033B\x05\x80A\x02\u033A" +
		"\u0339\x03\x02\x02\x02\u033A\u033B\x03\x02\x02\x02\u033B\u033D\x03\x02" +
		"\x02\x02\u033C\u033E\x05\x82B\x02\u033D\u033C\x03\x02\x02\x02\u033D\u033E" +
		"\x03\x02\x02\x02\u033E\u0340\x03\x02\x02\x02\u033F\u0341\x05\xF4{\x02" +
		"\u0340\u033F\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341\u0345\x03" +
		"\x02\x02\x02\u0342\u0344\x050\x19\x02\u0343\u0342\x03\x02\x02\x02\u0344" +
		"\u0347\x03\x02\x02\x02\u0345\u0343\x03\x02\x02\x02\u0345\u0346\x03\x02" +
		"\x02\x02\u0346\u0348\x03\x02\x02\x02\u0347\u0345\x03\x02\x02\x02\u0348" +
		"\u0349\x07;\x02\x02\u0349}\x03\x02\x02\x02\u034A\u034B\x07\x1A\x02\x02" +
		"\u034B\u034C\x07I\x02\x02\u034C\u034D\x05\xE2r\x02\u034D\u034E\x07J\x02" +
		"\x02\u034E\x7F\x03\x02\x02\x02\u034F\u0350\x07(\x02\x02\u0350\u0351\x07" +
		"I\x02\x02\u0351\u0352\x05\xE2r\x02\u0352\u0353\x07J\x02\x02\u0353\x81" +
		"\x03\x02\x02\x02\u0354\u0355\x072\x02\x02\u0355\u0359\x07I\x02\x02\u0356" +
		"\u0358\x05\xE4s\x02\u0357\u0356\x03\x02\x02\x02\u0358\u035B\x03\x02\x02" +
		"\x02\u0359\u0357\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A\u035C" +
		"\x03\x02\x02\x02\u035B\u0359\x03\x02\x02\x02\u035C\u035D\x07J\x02\x02" +
		"\u035D\x83\x03\x02\x02\x02\u035E\u0362\x05\x88E\x02\u035F\u0361\x050\x19" +
		"\x02\u0360\u035F\x03\x02\x02\x02\u0361\u0364\x03\x02\x02\x02\u0362\u0360" +
		"\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\x85\x03\x02\x02\x02" +
		"\u0364\u0362\x03\x02\x02\x02\u0365\u0366\x05\x88E\x02\u0366\u036A\x07" +
		"\x0F\x02\x02\u0367\u0369\x050\x19\x02\u0368\u0367\x03\x02\x02\x02\u0369" +
		"\u036C\x03\x02\x02\x02\u036A\u0368\x03\x02\x02\x02\u036A\u036B\x03\x02" +
		"\x02\x02\u036B\x87\x03\x02\x02\x02\u036C\u036A\x03\x02\x02\x02\u036D\u036E" +
		"\t\x06\x02\x02\u036E\u0374\x05\f\x07\x02\u036F\u0375\x05~@\x02\u0370\u0371" +
		"\x07E\x02\x02\u0371\u0372\x05\x8AF\x02\u0372\u0373\x07F\x02\x02\u0373" +
		"\u0375\x03\x02\x02\x02\u0374\u036F\x03\x02\x02\x02\u0374\u0370\x03\x02" +
		"\x02\x02\u0375\x89\x03\x02\x02\x02\u0376\u0378\x05\x8CG\x02\u0377\u0376" +
		"\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378\u037A\x03\x02\x02\x02" +
		"\u0379\u037B\x05\x90I\x02\u037A\u0379\x03\x02\x02\x02\u037A\u037B\x03" +
		"\x02\x02\x02\u037B\x8B\x03\x02\x02\x02\u037C\u0381\x05\x8EH\x02\u037D" +
		"\u037E\x07<\x02\x02\u037E\u0380\x05\x8EH\x02\u037F\u037D\x03\x02\x02\x02" +
		"\u0380\u0383\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02\u0381\u0382\x03" +
		"\x02\x02\x02\u0382\x8D\x03\x02\x02\x02\u0383\u0381\x03\x02\x02\x02\u0384" +
		"\u0385\x05*\x16\x02\u0385\u0387\x05\f\x07\x02\u0386\u0388\x05\x94K\x02" +
		"\u0387\u0386\x03\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\x8F\x03" +
		"\x02\x02\x02\u0389\u038B\x07<\x02\x02\u038A\u0389\x03\x02\x02\x02\u038A" +
		"\u038B\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\u0398\x07I\x02" +
		"\x02\u038D\u0392\x05\x92J\x02\u038E\u038F\x07<\x02\x02\u038F\u0391\x05" +
		"\x92J\x02\u0390\u038E\x03\x02\x02\x02\u0391\u0394\x03\x02\x02\x02\u0392" +
		"\u0390\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393\u0396\x03\x02" +
		"\x02\x02\u0394\u0392\x03\x02\x02\x02\u0395\u0397\x07<\x02\x02\u0396\u0395" +
		"\x03\x02\x02\x02\u0396\u0397\x03\x02\x02\x02\u0397\u0399\x03\x02\x02\x02" +
		"\u0398\u038D\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u039A\x03" +
		"\x02\x02\x02\u039A\u039C\x07J\x02\x02\u039B\u039D\x05\f\x07\x02\u039C" +
		"\u039B\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\x91\x03\x02\x02" +
		"\x02\u039E\u039F\x07G\x02\x02\u039F\u03A0\x05\f\x07\x02\u03A0\u03A1\x07" +
		"H\x02\x02\u03A1\u03A4\x03\x02\x02\x02\u03A2\u03A4\x05\f\x07\x02\u03A3" +
		"\u039E\x03\x02\x02\x02\u03A3\u03A2\x03\x02\x02\x02\u03A4\u03A5\x03\x02" +
		"\x02\x02\u03A5\u03A6\x07=\x02\x02\u03A6\u03A8\x05\f\x07\x02\u03A7\u03A9" +
		"\x05\f\x07\x02\u03A8\u03A7\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02" +
		"\u03A9\u03AB\x03\x02\x02\x02\u03AA\u03AC\x05\x94K\x02\u03AB\u03AA\x03" +
		"\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\x93\x03\x02\x02\x02\u03AD" +
		"\u03AE\x07I\x02\x02\u03AE\u03B3\x05\x96L\x02\u03AF\u03B0\x07<\x02\x02" +
		"\u03B0\u03B2\x05\x96L\x02\u03B1\u03AF\x03\x02\x02\x02\u03B2\u03B5\x03" +
		"\x02\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4" +
		"\u03B6\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B6\u03B7\x07J\x02" +
		"\x02\u03B7\x95\x03\x02\x02\x02\u03B8\u03BA\x05\f\x07\x02\u03B9\u03BB\x05" +
		"T+\x02\u03BA\u03B9\x03\x02\x02\x02\u03BA\u03BB\x03\x02\x02\x02\u03BB\x97" +
		"\x03\x02\x02\x02\u03BC\u03BE\x05\x9AN\x02\u03BD\u03BF\x05\xACW\x02\u03BE" +
		"\u03BD\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02\x02\u03BF\x99\x03\x02\x02" +
		"\x02\u03C0\u03C1\x05x=\x02\u03C1\x9B\x03\x02\x02\x02\u03C2\u03C4\x05\xAC" +
		"W\x02\u03C3\u03C2\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\u03C8" +
		"\x03\x02\x02\x02\u03C5\u03C7\x05\x98M\x02\u03C6\u03C5\x03\x02\x02\x02" +
		"\u03C7\u03CA\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C8\u03C9\x03" +
		"\x02\x02\x02\u03C9\x9D\x03\x02\x02\x02\u03CA\u03C8\x03\x02\x02\x02\u03CB" +
		"\u03CC\x07E\x02\x02\u03CC\u03CD\x05\xA0Q\x02\u03CD\u03CE\x07F\x02\x02" +
		"\u03CE\x9F\x03\x02\x02\x02\u03CF\u03D0\bQ\x01\x02\u03D0\u03D3\x05\x9E" +
		"P\x02\u03D1\u03D3\x05\xA2R\x02\u03D2\u03CF\x03\x02\x02\x02\u03D2\u03D1" +
		"\x03\x02\x02\x02\u03D3\u03DC\x03\x02\x02\x02\u03D4\u03D5\f\x05\x02\x02" +
		"\u03D5\u03D6\x07U\x02\x02\u03D6\u03DB\x05\xA0Q\x06\u03D7\u03D8\f\x04\x02" +
		"\x02\u03D8\u03D9\x07V\x02\x02\u03D9\u03DB\x05\xA0Q\x05\u03DA\u03D4\x03" +
		"\x02\x02\x02\u03DA\u03D7\x03\x02\x02\x02\u03DB\u03DE\x03\x02\x02\x02\u03DC" +
		"\u03DA\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\xA1\x03\x02\x02" +
		"\x02\u03DE\u03DC\x03\x02\x02\x02\u03DF\u03E0\x05T+\x02\u03E0\u03E1\x05" +
		"\xA4S\x02\u03E1\u03E2\x05T+\x02\u03E2\xA3\x03\x02\x02\x02\u03E3\u03E4" +
		"\t\x07\x02\x02\u03E4\xA5\x03\x02\x02\x02\u03E5\u03E6\x05\xAAV\x02\u03E6" +
		"\u03E7\x07X\x02\x02\u03E7\u03E8\x05T+\x02\u03E8\xA7\x03\x02\x02\x02\u03E9" +
		"\u03EA\x05\xAAV\x02\u03EA\u03EB\x07W\x02\x02\u03EB\u03EC\x05T+\x02\u03EC" +
		"\xA9\x03\x02\x02\x02\u03ED\u03EE\x05t;\x02\u03EE\xAB\x03\x02\x02\x02\u03EF" +
		"\u03F1\x05\xAEX\x02\u03F0\u03EF\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02" +
		"\x02\u03F2\u03F0\x03\x02\x02\x02\u03F2\u03F3\x03\x02\x02\x02\u03F3\xAD" +
		"\x03\x02\x02\x02\u03F4\u03F7\x05\xA0Q\x02\u03F5\u03F7\x05\xE0q\x02\u03F6" +
		"\u03F4\x03\x02\x02\x02\u03F6\u03F5\x03\x02\x02\x02\u03F7\xAF\x03\x02\x02" +
		"\x02\u03F8\u03FB\x05\xD8m\x02\u03F9\u03FB\x05\xD2j\x02\u03FA\u03F8\x03" +
		"\x02\x02\x02\u03FA\u03F9\x03\x02\x02\x02\u03FB\xB1\x03\x02\x02\x02\u03FC" +
		"\u03FD\x07,\x02\x02\u03FD\u03FE\x07E\x02\x02\u03FE\u03FF\x05T+\x02\u03FF" +
		"\u0400\x07F\x02\x02\u0400\u0404\x07I\x02\x02\u0401\u0403\x05\xBC_\x02" +
		"\u0402\u0401\x03\x02\x02\x02\u0403\u0406\x03\x02\x02\x02\u0404\u0402\x03" +
		"\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405\u0408\x03\x02\x02\x02\u0406" +
		"\u0404\x03\x02\x02\x02\u0407\u0409\x05\xBA^\x02\u0408\u0407\x03\x02\x02" +
		"\x02\u0408\u0409\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A\u040B" +
		"\x07J\x02\x02\u040B\xB3\x03\x02\x02\x02\u040C\u040D\x07,\x02\x02\u040D" +
		"\u0411\x07I\x02\x02\u040E\u0410\x05\xBC_\x02\u040F\u040E\x03\x02\x02\x02" +
		"\u0410\u0413\x03\x02\x02\x02\u0411\u040F\x03\x02\x02\x02\u0411\u0412\x03" +
		"\x02\x02\x02\u0412\u0416\x03\x02\x02\x02\u0413\u0411\x03\x02\x02\x02\u0414" +
		"\u0417\x05\xBA^\x02\u0415\u0417\x070\x02\x02\u0416\u0414\x03\x02\x02\x02" +
		"\u0416\u0415\x03\x02\x02\x02\u0416\u0417\x03\x02\x02\x02\u0417\u0418\x03" +
		"\x02\x02\x02\u0418\u0419\x07J\x02\x02\u0419\xB5\x03\x02\x02\x02\u041A" +
		"\u041B\x07+\x02\x02\u041B\u041C\x07E\x02\x02\u041C\u041D\x05T+\x02\u041D" +
		"\u041E\x07F\x02\x02\u041E\u0422\x07I\x02\x02\u041F\u0421\x05\xBE`\x02" +
		"\u0420\u041F\x03\x02\x02\x02\u0421\u0424\x03\x02\x02\x02\u0422\u0420\x03" +
		"\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423\u0427\x03\x02\x02\x02\u0424" +
		"\u0422\x03\x02\x02\x02\u0425\u0428\x05\xC0a\x02\u0426\u0428\x070\x02\x02" +
		"\u0427\u0425\x03\x02\x02\x02\u0427\u0426\x03\x02\x02\x02\u0427\u0428\x03" +
		"\x02\x02\x02\u0428\u0429\x03\x02\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u0429\u042A\x07J\x02\x02\u042A\xB7\x03\x02\x02\x02\u042B\u042C\x07+\x02" +
		"\x02\u042C\u0430\x07I\x02\x02\u042D\u042F\x05\xBE`\x02\u042E\u042D\x03" +
		"\x02\x02\x02\u042F\u0432\x03\x02\x02\x02\u0430\u042E\x03\x02\x02\x02\u0430" +
		"\u0431\x03\x02\x02\x02\u0431\u0434\x03\x02\x02\x02\u0432\u0430\x03\x02" +
		"\x02\x02\u0433\u0435\x05\xC0a\x02\u0434\u0433\x03\x02\x02\x02\u0434\u0435" +
		"\x03\x02\x02\x02\u0435\u0436\x03\x02\x02\x02\u0436\u0437\x07J\x02\x02" +
		"\u0437\xB9\x03\x02\x02\x02\u0438\u0439\x07.\x02\x02\u0439\u043F\x07=\x02" +
		"\x02\u043A\u0440\x05T+\x02\u043B\u043C\x07I\x02\x02\u043C\u043D\x05T+" +
		"\x02\u043D\u043E\x07J\x02\x02\u043E\u0440\x03\x02\x02\x02\u043F\u043A" +
		"\x03\x02\x02\x02\u043F\u043B\x03\x02\x02\x02\u0440\xBB\x03\x02\x02\x02" +
		"\u0441\u0447\x07-\x02\x02\u0442\u0443\x07E\x02\x02\u0443\u0444\x05J&\x02" +
		"\u0444\u0445\x07F\x02\x02\u0445\u0448\x03\x02\x02\x02\u0446\u0448\x05" +
		"J&\x02\u0447\u0442\x03\x02\x02\x02\u0447\u0446\x03\x02\x02\x02\u0448\u0449" +
		"\x03\x02\x02\x02\u0449\u044F\x07=\x02\x02\u044A\u0450\x05T+\x02\u044B" +
		"\u044C\x07I\x02\x02\u044C\u044D\x05T+\x02\u044D\u044E\x07J\x02\x02\u044E" +
		"\u0450\x03\x02\x02\x02\u044F\u044A\x03\x02\x02\x02\u044F\u044B\x03\x02" +
		"\x02\x02\u0450\xBD\x03\x02\x02\x02\u0451\u0457\x07-\x02\x02\u0452\u0453" +
		"\x07E\x02\x02\u0453\u0454\x05J&\x02\u0454\u0455\x07F\x02\x02\u0455\u0458" +
		"\x03\x02\x02\x02\u0456\u0458\x05J&\x02\u0457\u0452\x03\x02\x02\x02\u0457" +
		"\u0456\x03\x02\x02\x02\u0458\u0459\x03\x02\x02\x02\u0459\u045A\x07=\x02" +
		"\x02\u045A\u045B\x05\xB0Y\x02\u045B\xBF\x03\x02\x02\x02\u045C\u045D\x07" +
		".\x02\x02\u045D\u045E\x07=\x02\x02\u045E\u045F\x05\xB0Y\x02\u045F\xC1" +
		"\x03\x02\x02\x02\u0460\u0462\x071\x02\x02\u0461\u0463\x07;\x02\x02\u0462" +
		"\u0461\x03\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463\xC3\x03\x02\x02" +
		"\x02\u0464\u0467\x05\xC6d\x02\u0465\u0466\x07\x1E\x02\x02\u0466\u0468" +
		"\x05\xB0Y\x02\u0467\u0465\x03\x02\x02\x02\u0467\u0468\x03\x02\x02\x02" +
		"\u0468\xC5\x03\x02\x02\x02\u0469\u046A\x07\x1C\x02\x02\u046A\u046B\x07" +
		"E\x02\x02\u046B\u046C\x05\xAEX\x02\u046C\u046D\x07F\x02\x02\u046D\u046E" +
		"\x05\xB0Y\x02\u046E\xC7\x03\x02\x02\x02\u046F\u0472\x05\f\x07\x02\u0470" +
		"\u0472\x05h5\x02\u0471\u046F\x03\x02\x02\x02\u0471\u0470\x03\x02\x02\x02" +
		"\u0472\u0473\x03\x02\x02\x02\u0473\u0476\x07%\x02\x02\u0474\u0477\x05" +
		"T+\x02\u0475\u0477\x07\x0F\x02\x02\u0476\u0474\x03\x02\x02\x02\u0476\u0475" +
		"\x03\x02\x02\x02\u0477\xC9\x03\x02\x02\x02\u0478\u0479\x07$\x02\x02\u0479" +
		"\u047A\x07E\x02\x02\u047A\u0481\x05\xC8e\x02\u047B\u047D\x07<\x02\x02" +
		"\u047C\u047B\x03\x02\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D\u047E\x03" +
		"\x02\x02\x02\u047E\u0480\x05\xC8e\x02\u047F\u047C\x03\x02\x02\x02\u0480" +
		"\u0483\x03\x02\x02\x02\u0481\u047F\x03\x02\x02\x02\u0481\u0482\x03\x02" +
		"\x02\x02\u0482\u048A\x03\x02\x02\x02\u0483\u0481\x03\x02\x02\x02\u0484" +
		"\u0486\x07<\x02\x02\u0485\u0484\x03\x02\x02\x02\u0485\u0486\x03\x02\x02" +
		"\x02\u0486\u0487\x03\x02\x02\x02\u0487\u0489\x05\xA0Q\x02\u0488\u0485" +
		"\x03\x02\x02\x02\u0489\u048C\x03\x02\x02\x02\u048A\u0488\x03\x02\x02\x02" +
		"\u048A\u048B\x03\x02\x02\x02\u048B\u048D\x03\x02\x02\x02\u048C\u048A\x03" +
		"\x02\x02\x02\u048D\u048E\x07F\x02\x02\u048E\u048F\x05\xB0Y\x02\u048F\xCB" +
		"\x03\x02\x02\x02\u0490\u0491\x073\x02\x02\u0491\u0492\x07E\x02\x02\u0492" +
		"\u0493\x05\xAEX\x02\u0493\u0494\x07F\x02\x02\u0494\u0495\x05\xB0Y\x02" +
		"\u0495\xCD\x03\x02\x02\x02\u0496\u0497\x07\'\x02\x02\u0497\u0498\x05T" +
		"+\x02\u0498\xCF\x03\x02\x02\x02\u0499\u049A\x05t;\x02\u049A\xD1\x03\x02" +
		"\x02\x02\u049B\u049D\x05\xD0i\x02\u049C\u049E\x07;\x02\x02\u049D\u049C" +
		"\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E\u04B9\x03\x02\x02\x02" +
		"\u049F\u04A1\x05\xA6T\x02\u04A0\u04A2\x07;\x02\x02\u04A1\u04A0\x03\x02" +
		"\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2\u04B9\x03\x02\x02\x02\u04A3" +
		"\u04A5\x05\xA8U\x02\u04A4\u04A6\x07;\x02\x02\u04A5\u04A4\x03\x02\x02\x02" +
		"\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04B9\x03\x02\x02\x02\u04A7\u04B9\x05" +
		"^0\x02\u04A8\u04B9\x05\\/\x02\u04A9\u04B9\x05\xCAf\x02\u04AA\u04AC\x05" +
		"\xCEh\x02\u04AB\u04AD\x07;\x02\x02\u04AC\u04AB\x03\x02\x02\x02\u04AC\u04AD" +
		"\x03\x02\x02\x02\u04AD\u04B9\x03\x02\x02\x02\u04AE\u04B9\x05\xC4c\x02" +
		"\u04AF\u04B1\x05\xD6l\x02\u04B0\u04B2\x07;\x02\x02\u04B1\u04B0\x03\x02" +
		"\x02\x02\u04B1\u04B2\x03\x02\x02\x02\u04B2\u04B9\x03\x02\x02\x02\u04B3" +
		"\u04B9\x05\xB8]\x02\u04B4\u04B9\x05\xC2b\x02\u04B5\u04B9\x05\xB6\\\x02" +
		"\u04B6\u04B9\x05`1\x02\u04B7\u04B9\x05\xCCg\x02\u04B8\u049B\x03\x02\x02" +
		"\x02\u04B8\u049F\x03\x02\x02\x02\u04B8\u04A3\x03\x02\x02\x02\u04B8\u04A7" +
		"\x03\x02\x02\x02\u04B8\u04A8\x03\x02\x02\x02\u04B8\u04A9\x03\x02\x02\x02" +
		"\u04B8\u04AA\x03\x02\x02\x02\u04B8\u04AE\x03\x02\x02\x02\u04B8\u04AF\x03" +
		"\x02\x02\x02\u04B8\u04B3\x03\x02\x02\x02\u04B8\u04B4\x03\x02\x02\x02\u04B8" +
		"\u04B5\x03\x02\x02\x02\u04B8\u04B6\x03\x02\x02\x02\u04B8\u04B7\x03\x02" +
		"\x02\x02\u04B9\xD3\x03\x02\x02\x02\u04BA\u04BB\x07 \x02\x02\u04BB\u04BC" +
		"\x05\xD8m\x02\u04BC\xD5\x03\x02\x02\x02\u04BD\u04BE\x07!\x02\x02\u04BE" +
		"\u04BF\x07E\x02\x02\u04BF\u04C0\x05\xD4k\x02\u04C0\u04C1\x07\"\x02\x02" +
		"\u04C1\u04C2\x07E\x02\x02\u04C2\u04C7\x05\f\x07\x02\u04C3\u04C4\x07<\x02" +
		"\x02\u04C4\u04C6\x05\f\x07\x02\u04C5\u04C3\x03\x02\x02\x02\u04C6\u04C9" +
		"\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C7\u04C5\x03\x02\x02\x02" +
		"\u04C8\u04CA\x03\x02\x02\x02\u04C9\u04C7\x03\x02\x02\x02\u04CA\u04CB\x07" +
		"F\x02\x02\u04CB\u04CC\x05\xD8m\x02\u04CC\u04CD\x07F\x02\x02\u04CD\xD7" +
		"\x03\x02\x02\x02\u04CE\u04D0\x07I\x02\x02\u04CF\u04D1\x05\xD2j\x02\u04D0" +
		"\u04CF\x03\x02\x02\x02\u04D1\u04D2\x03\x02\x02\x02\u04D2\u04D0\x03\x02" +
		"\x02\x02\u04D2\u04D3\x03\x02\x02\x02\u04D3\u04D4\x03\x02\x02\x02\u04D4" +
		"\u04D5\x07J\x02\x02\u04D5\xD9\x03\x02\x02\x02\u04D6\u04D7\t\b\x02\x02" +
		"\u04D7\xDB\x03\x02\x02\x02\u04D8\u04D9\x07]\x02\x02\u04D9\u04DD\x05\xDC" +
		"o\x02\u04DA\u04DD\x05t;\x02\u04DB\u04DD\x07c\x02\x02\u04DC\u04D8\x03\x02" +
		"\x02\x02\u04DC\u04DA\x03\x02\x02\x02\u04DC\u04DB\x03\x02\x02\x02\u04DD" +
		"\xDD\x03\x02\x02\x02\u04DE\u04DF\bp\x01\x02\u04DF\u04E0\x07E\x02\x02\u04E0" +
		"\u04E1\x05\xDEp\x02\u04E1\u04E2\x07F\x02\x02\u04E2\u04E5\x03\x02\x02\x02" +
		"\u04E3\u04E5\x05\xDCo\x02\u04E4\u04DE\x03\x02\x02\x02\u04E4\u04E3\x03" +
		"\x02\x02\x02\u04E5\u04EC\x03\x02\x02\x02\u04E6\u04E7\f\x04\x02\x02\u04E7" +
		"\u04E8\x05\xDAn\x02\u04E8\u04E9\x05\xDEp\x05\u04E9\u04EB\x03\x02\x02\x02" +
		"\u04EA\u04E6\x03\x02\x02\x02\u04EB\u04EE\x03\x02\x02\x02\u04EC\u04EA\x03" +
		"\x02\x02\x02\u04EC\u04ED\x03\x02\x02\x02\u04ED\xDF\x03\x02\x02\x02\u04EE" +
		"\u04EC\x03\x02\x02\x02\u04EF\u04F0\x05\f\x07\x02\u04F0\u04F1\x07E\x02" +
		"\x02\u04F1\u04F2\x05\x9CO\x02\u04F2\u04F3\x07F\x02\x02\u04F3\xE1\x03\x02" +
		"\x02\x02\u04F4\u04F6\x05(\x15\x02\u04F5\u04F4\x03\x02\x02\x02\u04F6\u04F9" +
		"\x03\x02\x02\x02\u04F7\u04F5\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02\x02" +
		"\u04F8\xE3\x03\x02\x02\x02\u04F9\u04F7\x03\x02\x02\x02\u04FA\u04FB\x05" +
		"\f\x07\x02\u04FB\u04FE\x05\f\x07\x02\u04FC\u04FD\x07\x0E\x02\x02\u04FD" +
		"\u04FF\x05\f\x07\x02\u04FE\u04FC\x03\x02\x02\x02\u04FE\u04FF\x03\x02\x02" +
		"\x02\u04FF\u0501\x03\x02\x02\x02\u0500\u0502\x05T+\x02\u0501\u0500\x03" +
		"\x02\x02\x02\u0501\u0502\x03\x02\x02\x02\u0502\u0506\x03\x02\x02\x02\u0503" +
		"\u0505\x050\x19\x02\u0504\u0503\x03\x02\x02\x02\u0505\u0508\x03\x02\x02" +
		"\x02\u0506\u0504\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02\u0507\u0509" +
		"\x03\x02\x02\x02\u0508\u0506\x03\x02\x02\x02\u0509\u050A\x07;\x02\x02" +
		"\u050A\xE5\x03\x02\x02\x02\u050B\u050E\x07\x16\x02\x02\u050C\u050F\x05" +
		"\x84C\x02\u050D\u050F\x05(\x15\x02\u050E\u050C\x03\x02\x02\x02\u050E\u050D" +
		"\x03\x02\x02\x02\u050F\u0510\x03\x02\x02\x02\u0510\u0511\x07;\x02\x02" +
		"\u0511\xE7\x03\x02\x02\x02\u0512\u0514\x07G\x02\x02\u0513\u0515\x05T+" +
		"\x02\u0514\u0513\x03\x02\x02\x02\u0514\u0515\x03\x02\x02\x02\u0515\u051A" +
		"\x03\x02\x02\x02\u0516\u0517\x07<\x02\x02\u0517\u0519\x05T+\x02\u0518" +
		"\u0516\x03\x02\x02\x02\u0519\u051C\x03\x02\x02\x02\u051A\u0518\x03\x02" +
		"\x02\x02\u051A\u051B\x03\x02\x02\x02\u051B\u051D\x03\x02\x02\x02\u051C" +
		"\u051A\x03\x02\x02\x02\u051D\u051E\x07H\x02\x02\u051E\xE9\x03\x02\x02" +
		"\x02\u051F\u0522\x05T+\x02\u0520\u0521\x07<\x02\x02\u0521\u0523\x05T+" +
		"\x02\u0522\u0520\x03\x02\x02\x02\u0523\u0524\x03\x02\x02\x02\u0524\u0522" +
		"\x03\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525\xEB\x03\x02\x02\x02" +
		"\u0526\u0528\x07I\x02\x02\u0527\u0529\x05T+\x02\u0528\u0527\x03\x02\x02" +
		"\x02\u0528\u0529\x03\x02\x02\x02\u0529\u052E\x03\x02\x02\x02\u052A\u052B" +
		"\x07<\x02\x02\u052B\u052D\x05T+\x02\u052C\u052A\x03\x02\x02\x02\u052D" +
		"\u0530\x03\x02\x02\x02\u052E\u052C\x03\x02\x02\x02\u052E\u052F\x03\x02" +
		"\x02\x02\u052F\u0531\x03\x02\x02\x02\u0530\u052E\x03\x02\x02\x02\u0531" +
		"\u0532\x07J\x02\x02\u0532\xED\x03\x02\x02\x02\u0533\u0537\x07Y\x02\x02" +
		"\u0534\u0536\x05\xEEx\x02\u0535\u0534\x03\x02\x02\x02\u0536\u0539\x03" +
		"\x02\x02\x02\u0537\u0538\x03\x02\x02\x02\u0537\u0535\x03\x02\x02\x02\u0538" +
		"\u053A\x03\x02\x02\x02\u0539\u0537\x03\x02\x02\x02\u053A\u053B\x07r\x02" +
		"\x02\u053B\xEF\x03\x02\x02\x02\u053C\u053D\x07\x17\x02\x02\u053D\u0541" +
		"\x05\f\x07\x02\u053E\u0540\x050\x19\x02\u053F\u053E\x03\x02\x02\x02\u0540" +
		"\u0543\x03\x02\x02\x02\u0541\u053F\x03\x02\x02\x02\u0541\u0542\x03\x02" +
		"\x02\x02\u0542\u0544\x03\x02\x02\x02\u0543\u0541\x03\x02\x02\x02\u0544" +
		"\u0545\x07;\x02\x02\u0545\xF1\x03\x02\x02\x02\u0546\u0549\x07\x17\x02" +
		"\x02\u0547\u054A\x05\f\x07\x02\u0548\u054A\x07\x0F\x02\x02\u0549\u0547" +
		"\x03\x02\x02\x02\u0549\u0548\x03\x02\x02\x02\u054A\u0550\x03\x02\x02\x02" +
		"\u054B\u054F\x05&\x14\x02\u054C\u054F\x05\x86D\x02\u054D\u054F\x05(\x15" +
		"\x02\u054E\u054B\x03\x02\x02\x02\u054E\u054C\x03\x02\x02\x02\u054E\u054D" +
		"\x03\x02\x02\x02\u054F\u0552\x03\x02\x02\x02\u0550\u054E\x03\x02\x02\x02" +
		"\u0550\u0551\x03\x02\x02\x02\u0551\u0553\x03\x02\x02\x02\u0552\u0550\x03" +
		"\x02\x02\x02\u0553\u0554\x07;\x02\x02\u0554\xF3\x03\x02\x02\x02\u0555" +
		"\u0556\x078\x02\x02\u0556\u0558\x07I\x02\x02\u0557\u0559\x05\xF6|\x02" +
		"\u0558\u0557\x03\x02\x02\x02\u0558\u0559\x03\x02\x02\x02\u0559\u055A\x03" +
		"\x02\x02\x02\u055A\u055B\x07J\x02\x02\u055B\xF5\x03\x02\x02\x02\u055C" +
		"\u055E\x05\xF8}\x02\u055D\u055C\x03\x02\x02\x02\u055E\u055F\x03\x02\x02" +
		"\x02\u055F\u055D\x03\x02\x02\x02\u055F\u0560\x03\x02\x02\x02\u0560\xF7" +
		"\x03\x02\x02\x02\u0561\u0562\x079\x02\x02\u0562\u0563\x05\f\x07\x02\u0563" +
		"\u0564\x07\x1C\x02\x02\u0564\u0568\x07E\x02\x02\u0565\u0569\x05\xA0Q\x02" +
		"\u0566\u0569\x05\xC8e\x02\u0567\u0569\x05\xA8U\x02\u0568\u0565\x03\x02" +
		"\x02\x02\u0568\u0566\x03\x02\x02\x02\u0568\u0567\x03\x02\x02\x02\u0569" +
		"\u056A\x03\x02\x02\x02\u056A\u0568\x03\x02\x02\x02\u056A\u056B\x03\x02" +
		"\x02\x02\u056B\u056C\x03\x02\x02\x02\u056C\u056D\x07F\x02\x02\u056D\u056F" +
		"\x07\x1D\x02\x02\u056E\u0570\x05\xD2j\x02\u056F\u056E\x03\x02\x02\x02" +
		"\u0570\u0571\x03\x02\x02\x02\u0571\u056F\x03\x02\x02\x02\u0571\u0572\x03" +
		"\x02\x02\x02\u0572\u0576\x03\x02\x02\x02\u0573\u0575\x050\x19\x02\u0574" +
		"\u0573\x03\x02\x02\x02\u0575\u0578\x03\x02\x02\x02\u0576\u0574\x03\x02" +
		"\x02\x02\u0576\u0577\x03\x02\x02\x02\u0577\u0579\x03\x02\x02\x02\u0578" +
		"\u0576\x03\x02\x02\x02\u0579\u057A\x07;\x02\x02\u057A\xF9\x03\x02\x02" +
		"\x02\x99\xFE\u0102\u0107\u010B\u0118\u011E\u012C\u0134\u0139\u013F\u0148" +
		"\u0154\u0159\u015B\u015F\u0165\u016C\u0172\u0176\u017B\u0182\u0189\u0190" +
		"\u0195\u019B\u01A3\u01B1\u01B4\u01B7\u01BE\u01C6\u01CE\u01D6\u01DA\u01E1" +
		"\u01EB\u01F4\u0204\u0207\u0211\u021F\u022C\u0235\u023D\u024D\u0251\u0262" +
		"\u026A\u026E\u027F\u0288\u028C\u029B\u02A4\u02A8\u02B0\u02D3\u02DC\u02F6" +
		"\u02FF\u0302\u030C\u0310\u0318\u031E\u0323\u032E\u0337\u033A\u033D\u0340" +
		"\u0345\u0359\u0362\u036A\u0374\u0377\u037A\u0381\u0387\u038A\u0392\u0396" +
		"\u0398\u039C\u03A3\u03A8\u03AB\u03B3\u03BA\u03BE\u03C3\u03C8\u03D2\u03DA" +
		"\u03DC\u03F2\u03F6\u03FA\u0404\u0408\u0411\u0416\u0422\u0427\u0430\u0434" +
		"\u043F\u0447\u044F\u0457\u0462\u0467\u0471\u0476\u047C\u0481\u0485\u048A" +
		"\u049D\u04A1\u04A5\u04AC\u04B1\u04B8\u04C7\u04D2\u04DC\u04E4\u04EC\u04F7" +
		"\u04FE\u0501\u0506\u050E\u0514\u051A\u0524\u0528\u052E\u0537\u0541\u0549" +
		"\u054E\u0550\u0558\u055F\u0568\u056A\u0571\u0576";
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


export class DocumentationContext extends ParserRuleContext {
	public DOCUMENTATION(): TerminalNode { return this.getToken(YmlParser.DOCUMENTATION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_documentation; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterDocumentation) {
			listener.enterDocumentation(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitDocumentation) {
			listener.exitDocumentation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitDocumentation) {
			return visitor.visitDocumentation(this);
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
	public combinedComparison(): CombinedComparisonContext | undefined {
		return this.tryGetRuleContext(0, CombinedComparisonContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public hashMapKeyValue(): HashMapKeyValueContext | undefined {
		return this.tryGetRuleContext(0, HashMapKeyValueContext);
	}
	public documentation(): DocumentationContext | undefined {
		return this.tryGetRuleContext(0, DocumentationContext);
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
	public actionBlock(): ActionBlockContext | undefined {
		return this.tryGetRuleContext(0, ActionBlockContext);
	}
	public instruction_return(): Instruction_returnContext | undefined {
		return this.tryGetRuleContext(0, Instruction_returnContext);
	}
	public ifExprBlock(): IfExprBlockContext | undefined {
		return this.tryGetRuleContext(0, IfExprBlockContext);
	}
	public combinedComparison(): CombinedComparisonContext | undefined {
		return this.tryGetRuleContext(0, CombinedComparisonContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public hashMapKeyValue(): HashMapKeyValueContext | undefined {
		return this.tryGetRuleContext(0, HashMapKeyValueContext);
	}
	public documentation(): DocumentationContext | undefined {
		return this.tryGetRuleContext(0, DocumentationContext);
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
	public combinedComparison(): CombinedComparisonContext | undefined {
		return this.tryGetRuleContext(0, CombinedComparisonContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public hashMapKeyValue(): HashMapKeyValueContext | undefined {
		return this.tryGetRuleContext(0, HashMapKeyValueContext);
	}
	public documentation(): DocumentationContext | undefined {
		return this.tryGetRuleContext(0, DocumentationContext);
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


export class HashMapContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACE, 0); }
	public hashMapKeyValue(): HashMapKeyValueContext[];
	public hashMapKeyValue(i: number): HashMapKeyValueContext;
	public hashMapKeyValue(i?: number): HashMapKeyValueContext | HashMapKeyValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HashMapKeyValueContext);
		} else {
			return this.getRuleContext(i, HashMapKeyValueContext);
		}
	}
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
	public combinedComparison(): CombinedComparisonContext | undefined {
		return this.tryGetRuleContext(0, CombinedComparisonContext);
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
	public combinedComparison(): CombinedComparisonContext[];
	public combinedComparison(i: number): CombinedComparisonContext;
	public combinedComparison(i?: number): CombinedComparisonContext | CombinedComparisonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CombinedComparisonContext);
		} else {
			return this.getRuleContext(i, CombinedComparisonContext);
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
	public combinedComparison(): CombinedComparisonContext[];
	public combinedComparison(i: number): CombinedComparisonContext;
	public combinedComparison(i?: number): CombinedComparisonContext | CombinedComparisonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CombinedComparisonContext);
		} else {
			return this.getRuleContext(i, CombinedComparisonContext);
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
	public combinedComparison(): CombinedComparisonContext[];
	public combinedComparison(i: number): CombinedComparisonContext;
	public combinedComparison(i?: number): CombinedComparisonContext | CombinedComparisonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CombinedComparisonContext);
		} else {
			return this.getRuleContext(i, CombinedComparisonContext);
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
	public _condition: CombinedComparisonContext;
	public _thenValue: ValueContext;
	public _elseValue: ValueContext;
	public IF_EXPR(): TerminalNode { return this.getToken(YmlParser.IF_EXPR, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public THEN(): TerminalNode { return this.getToken(YmlParser.THEN, 0); }
	public ELSE(): TerminalNode { return this.getToken(YmlParser.ELSE, 0); }
	public combinedComparison(): CombinedComparisonContext {
		return this.getRuleContext(0, CombinedComparisonContext);
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
	public QUESTION_MARK(): TerminalNode { return this.getToken(YmlParser.QUESTION_MARK, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
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
	public ymlId(): YmlIdContext | undefined {
		return this.tryGetRuleContext(0, YmlIdContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
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
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	public hashMap(): HashMapContext | undefined {
		return this.tryGetRuleContext(0, HashMapContext);
	}
	public parenthesisCondition(): ParenthesisConditionContext | undefined {
		return this.tryGetRuleContext(0, ParenthesisConditionContext);
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
	public _instanceName: YmlIdContext;
	public INLINE_DECL_INTRO(): TerminalNode { return this.getToken(YmlParser.INLINE_DECL_INTRO, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(YmlParser.SEMICOLON, 0); }
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
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


export class ParenthesisConditionContext extends ParserRuleContext {
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public combinedComparison(): CombinedComparisonContext {
		return this.getRuleContext(0, CombinedComparisonContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_parenthesisCondition; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterParenthesisCondition) {
			listener.enterParenthesisCondition(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitParenthesisCondition) {
			listener.exitParenthesisCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitParenthesisCondition) {
			return visitor.visitParenthesisCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CombinedComparisonContext extends ParserRuleContext {
	public _leftCondition: CombinedComparisonContext;
	public _rightCondition: CombinedComparisonContext;
	public parenthesisCondition(): ParenthesisConditionContext | undefined {
		return this.tryGetRuleContext(0, ParenthesisConditionContext);
	}
	public COND_AND(): TerminalNode | undefined { return this.tryGetToken(YmlParser.COND_AND, 0); }
	public combinedComparison(): CombinedComparisonContext[];
	public combinedComparison(i: number): CombinedComparisonContext;
	public combinedComparison(i?: number): CombinedComparisonContext | CombinedComparisonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CombinedComparisonContext);
		} else {
			return this.getRuleContext(i, CombinedComparisonContext);
		}
	}
	public COND_OR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.COND_OR, 0); }
	public comparison(): ComparisonContext | undefined {
		return this.tryGetRuleContext(0, ComparisonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_combinedComparison; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterCombinedComparison) {
			listener.enterCombinedComparison(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitCombinedComparison) {
			listener.exitCombinedComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitCombinedComparison) {
			return visitor.visitCombinedComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	public _leftValue: ValueContext;
	public _rightValue: ValueContext;
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
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
	public combinedComparison(): CombinedComparisonContext | undefined {
		return this.tryGetRuleContext(0, CombinedComparisonContext);
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
	public instruction_if(): Instruction_ifContext {
		return this.getRuleContext(0, Instruction_ifContext);
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.ELSE, 0); }
	public actionBlockOrInstruction(): ActionBlockOrInstructionContext | undefined {
		return this.tryGetRuleContext(0, ActionBlockOrInstructionContext);
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


export class Instruction_ifContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return YmlParser.RULE_instruction_if; }
	// @Override
	public enterRule(listener: YmlParserListener): void {
		if (listener.enterInstruction_if) {
			listener.enterInstruction_if(this);
		}
	}
	// @Override
	public exitRule(listener: YmlParserListener): void {
		if (listener.exitInstruction_if) {
			listener.exitInstruction_if(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlParserVisitor<Result>): Result {
		if (visitor.visitInstruction_if) {
			return visitor.visitInstruction_if(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InValueContext extends ParserRuleContext {
	public IN(): TerminalNode { return this.getToken(YmlParser.IN, 0); }
	public ymlId(): YmlIdContext | undefined {
		return this.tryGetRuleContext(0, YmlIdContext);
	}
	public instanciationVariable(): InstanciationVariableContext | undefined {
		return this.tryGetRuleContext(0, InstanciationVariableContext);
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
	public inValue(): InValueContext[];
	public inValue(i: number): InValueContext;
	public inValue(i?: number): InValueContext | InValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InValueContext);
		} else {
			return this.getRuleContext(i, InValueContext);
		}
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public actionBlockOrInstruction(): ActionBlockOrInstructionContext {
		return this.getRuleContext(0, ActionBlockOrInstructionContext);
	}
	public combinedComparison(): CombinedComparisonContext[];
	public combinedComparison(i: number): CombinedComparisonContext;
	public combinedComparison(i?: number): CombinedComparisonContext | CombinedComparisonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CombinedComparisonContext);
		} else {
			return this.getRuleContext(i, CombinedComparisonContext);
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
	public instruction_chainedCall(): Instruction_chainedCallContext | undefined {
		return this.tryGetRuleContext(0, Instruction_chainedCallContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(YmlParser.SEMICOLON, 0); }
	public instruction_multivaluedAssignment(): Instruction_multivaluedAssignmentContext | undefined {
		return this.tryGetRuleContext(0, Instruction_multivaluedAssignmentContext);
	}
	public instruction_assignment(): Instruction_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Instruction_assignmentContext);
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
	public instruction_return(): Instruction_returnContext | undefined {
		return this.tryGetRuleContext(0, Instruction_returnContext);
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
	public SEMICOLON(): TerminalNode { return this.getToken(YmlParser.SEMICOLON, 0); }
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
	public combinedComparison(): CombinedComparisonContext[];
	public combinedComparison(i: number): CombinedComparisonContext;
	public combinedComparison(i?: number): CombinedComparisonContext | CombinedComparisonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CombinedComparisonContext);
		} else {
			return this.getRuleContext(i, CombinedComparisonContext);
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


