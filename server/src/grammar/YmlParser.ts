// Generated from grammar/Yml.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { YmlListener } from "./YmlListener";
import { YmlVisitor } from "./YmlVisitor";


export class YmlParser extends Parser {
	public static readonly APPLY_COLLECTION = 1;
	public static readonly WHERE = 2;
	public static readonly INTERFACE = 3;
	public static readonly IMPLEMENTATION = 4;
	public static readonly EXTENDS = 5;
	public static readonly FUNCTION = 6;
	public static readonly METHOD = 7;
	public static readonly TEXT_METHOD = 8;
	public static readonly TEXT_FUNCTION = 9;
	public static readonly FIELD = 10;
	public static readonly CLASSPROPERTIES = 11;
	public static readonly EXTERN = 12;
	public static readonly COMPLETE = 13;
	public static readonly SYNONYM = 14;
	public static readonly OVERRIDE = 15;
	public static readonly ARGS = 16;
	public static readonly IF_EXPR = 17;
	public static readonly IF = 18;
	public static readonly THEN = 19;
	public static readonly ELSE = 20;
	public static readonly ENUM = 21;
	public static readonly DO = 22;
	public static readonly TRY = 23;
	public static readonly CATCH = 24;
	public static readonly FOREACH = 25;
	public static readonly FORALL = 26;
	public static readonly IN = 27;
	public static readonly RETURN = 28;
	public static readonly LOCAL = 29;
	public static readonly TRUE = 30;
	public static readonly FALSE = 31;
	public static readonly SWITCH = 32;
	public static readonly CASE = 33;
	public static readonly DEFAULT = 34;
	public static readonly BREAK = 35;
	public static readonly STATIC = 36;
	public static readonly WHILE = 37;
	public static readonly FOR = 38;
	public static readonly SEMICOLON = 39;
	public static readonly COMMA = 40;
	public static readonly COLON = 41;
	public static readonly DOT = 42;
	public static readonly MULTIVALUED_EXPRESSION = 43;
	public static readonly FIELD_INTRO = 44;
	public static readonly REPLACE_FIELD_VALUE_INTRO = 45;
	public static readonly REMOVE_FIELD = 46;
	public static readonly ADD_FIELD = 47;
	public static readonly INLINE_DECL_INTRO = 48;
	public static readonly OPEN_PAR = 49;
	public static readonly CLOSE_PAR = 50;
	public static readonly OPEN_BRACKET = 51;
	public static readonly CLOSE_BRACKET = 52;
	public static readonly OPEN_BRACE = 53;
	public static readonly CLOSE_BRACE = 54;
	public static readonly SINGLE_QUOTE = 55;
	public static readonly BACKSLASH = 56;
	public static readonly QUESTION_MARK = 57;
	public static readonly AT = 58;
	public static readonly EQUAL_COMP = 59;
	public static readonly NOT_EQUALS = 60;
	public static readonly LESS_OR_EQUAL = 61;
	public static readonly GREATE_OR_EQUAL = 62;
	public static readonly STRICT_LESS = 63;
	public static readonly STRICT_GREAT = 64;
	public static readonly COND_AND = 65;
	public static readonly COND_OR = 66;
	public static readonly EQUAL_ASSIGNMENT = 67;
	public static readonly MULTIVALUED_ASSIGNMENT = 68;
	public static readonly OPEN_GRANULE = 69;
	public static readonly CLOSE_GRANULE = 70;
	public static readonly OPERATOR = 71;
	public static readonly DATE = 72;
	public static readonly STRING = 73;
	public static readonly DOCUMENTATION = 74;
	public static readonly WS = 75;
	public static readonly DOUBLE = 76;
	public static readonly INTEGER = 77;
	public static readonly YMLID = 78;
	public static readonly ID = 79;
	public static readonly PREPROCESSING = 80;
	public static readonly LINE_COMMENT = 81;
	public static readonly MULTILINE_COMMENT = 82;
	public static readonly RULE_kaoFile = 0;
	public static readonly RULE_ymlEntity = 1;
	public static readonly RULE_expressionMarker = 2;
	public static readonly RULE_ymlId = 3;
	public static readonly RULE_yenum = 4;
	public static readonly RULE_enumElement = 5;
	public static readonly RULE_classDeclaration = 6;
	public static readonly RULE_classImplementation = 7;
	public static readonly RULE_attributeImplementation = 8;
	public static readonly RULE_override = 9;
	public static readonly RULE_overrideInstruction = 10;
	public static readonly RULE_classDeclarationIntro = 11;
	public static readonly RULE_extendsBlock = 12;
	public static readonly RULE_parentClassName = 13;
	public static readonly RULE_synonym = 14;
	public static readonly RULE_classAttributeDeclaration = 15;
	public static readonly RULE_memberDeclaration = 16;
	public static readonly RULE_memberType = 17;
	public static readonly RULE_path = 18;
	public static readonly RULE_ymlIdOrPath = 19;
	public static readonly RULE_field = 20;
	public static readonly RULE_commonField = 21;
	public static readonly RULE_local_variable_decl = 22;
	public static readonly RULE_localField = 23;
	public static readonly RULE_returnField = 24;
	public static readonly RULE_classPropertiesBlock = 25;
	public static readonly RULE_documentation = 26;
	public static readonly RULE_valueOrCondition = 27;
	public static readonly RULE_hashMapKeyValue = 28;
	public static readonly RULE_hashMapValue = 29;
	public static readonly RULE_value = 30;
	public static readonly RULE_applyCollection = 31;
	public static readonly RULE_instruction_forEach = 32;
	public static readonly RULE_instruction_for = 33;
	public static readonly RULE_instruction_ifExprBlock = 34;
	public static readonly RULE_ifExprBlock = 35;
	public static readonly RULE_bool = 36;
	public static readonly RULE_nonArithmeticValue = 37;
	public static readonly RULE_instanciationVariable = 38;
	public static readonly RULE_expression = 39;
	public static readonly RULE_functionCall = 40;
	public static readonly RULE_indexedCall = 41;
	public static readonly RULE_functionArgument = 42;
	public static readonly RULE_chainedCall = 43;
	public static readonly RULE_inlineDeclaration = 44;
	public static readonly RULE_inlineOperation = 45;
	public static readonly RULE_fieldValue = 46;
	public static readonly RULE_function = 47;
	public static readonly RULE_argsBlock = 48;
	public static readonly RULE_localBlock = 49;
	public static readonly RULE_staticBlock = 50;
	public static readonly RULE_methodDeclaration = 51;
	public static readonly RULE_methodCompleteDeclaration = 52;
	public static readonly RULE_methodIntro = 53;
	public static readonly RULE_argumentList = 54;
	public static readonly RULE_mandatoryArgs = 55;
	public static readonly RULE_mandatoryArgDecl = 56;
	public static readonly RULE_optionalArgs = 57;
	public static readonly RULE_optionalArgDecl = 58;
	public static readonly RULE_argOptionList = 59;
	public static readonly RULE_argOptionBlock = 60;
	public static readonly RULE_order1Block = 61;
	public static readonly RULE_instanciationCondition = 62;
	public static readonly RULE_order1FullCondition = 63;
	public static readonly RULE_combinedComparison = 64;
	public static readonly RULE_comparison = 65;
	public static readonly RULE_comparisonOperator = 66;
	public static readonly RULE_instruction_multivaluedAssignment = 67;
	public static readonly RULE_instruction_assignment = 68;
	public static readonly RULE_conditionBlock = 69;
	public static readonly RULE_order0Condition = 70;
	public static readonly RULE_instruction_switchCase_withValue = 71;
	public static readonly RULE_instruction_switchCase_asIf = 72;
	public static readonly RULE_instructionCase = 73;
	public static readonly RULE_instructionDefault = 74;
	public static readonly RULE_instruction_break = 75;
	public static readonly RULE_instruction_ifElse = 76;
	public static readonly RULE_instruction_if = 77;
	public static readonly RULE_instruction_forall = 78;
	public static readonly RULE_instruction_while = 79;
	public static readonly RULE_instruction_return = 80;
	public static readonly RULE_instruction_chainedCall = 81;
	public static readonly RULE_instruction = 82;
	public static readonly RULE_instruction_do = 83;
	public static readonly RULE_instruction_try_catch = 84;
	public static readonly RULE_actionBlock = 85;
	public static readonly RULE_arithmeticExpression = 86;
	public static readonly RULE_existentialOperator = 87;
	public static readonly RULE_variableBlockContent = 88;
	public static readonly RULE_staticDeclaration = 89;
	public static readonly RULE_externDeclaration = 90;
	public static readonly RULE_array = 91;
	public static readonly RULE_constList = 92;
	public static readonly RULE_granule = 93;
	public static readonly RULE_objectComplete = 94;
	public static readonly RULE_classComplete = 95;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"kaoFile", "ymlEntity", "expressionMarker", "ymlId", "yenum", "enumElement", 
		"classDeclaration", "classImplementation", "attributeImplementation", 
		"override", "overrideInstruction", "classDeclarationIntro", "extendsBlock", 
		"parentClassName", "synonym", "classAttributeDeclaration", "memberDeclaration", 
		"memberType", "path", "ymlIdOrPath", "field", "commonField", "local_variable_decl", 
		"localField", "returnField", "classPropertiesBlock", "documentation", 
		"valueOrCondition", "hashMapKeyValue", "hashMapValue", "value", "applyCollection", 
		"instruction_forEach", "instruction_for", "instruction_ifExprBlock", "ifExprBlock", 
		"bool", "nonArithmeticValue", "instanciationVariable", "expression", "functionCall", 
		"indexedCall", "functionArgument", "chainedCall", "inlineDeclaration", 
		"inlineOperation", "fieldValue", "function", "argsBlock", "localBlock", 
		"staticBlock", "methodDeclaration", "methodCompleteDeclaration", "methodIntro", 
		"argumentList", "mandatoryArgs", "mandatoryArgDecl", "optionalArgs", "optionalArgDecl", 
		"argOptionList", "argOptionBlock", "order1Block", "instanciationCondition", 
		"order1FullCondition", "combinedComparison", "comparison", "comparisonOperator", 
		"instruction_multivaluedAssignment", "instruction_assignment", "conditionBlock", 
		"order0Condition", "instruction_switchCase_withValue", "instruction_switchCase_asIf", 
		"instructionCase", "instructionDefault", "instruction_break", "instruction_ifElse", 
		"instruction_if", "instruction_forall", "instruction_while", "instruction_return", 
		"instruction_chainedCall", "instruction", "instruction_do", "instruction_try_catch", 
		"actionBlock", "arithmeticExpression", "existentialOperator", "variableBlockContent", 
		"staticDeclaration", "externDeclaration", "array", "constList", "granule", 
		"objectComplete", "classComplete",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'applyCollection'", "'__where'", "'interface'", "'implementation'", 
		"'extends'", undefined, "'method'", "'textMethod'", "'TextFunction'", 
		"'field'", "'classProperties'", "'extern'", "'complete'", "'synonym'", 
		"'override'", "'args'", "'ifExpr'", "'if'", "'then'", "'else'", "'enum'", 
		"'do'", "'try'", "'catch'", "'foreach'", "'forall'", "'in'", "'return'", 
		"'local'", "'true'", "'false'", "'switch'", "'case'", "'default'", "'break'", 
		"'static'", "'while'", "'for'", "';'", "','", "':'", "'.'", "'>>'", "'-->'", 
		"'==>'", "'---'", "'+++'", "'->'", "'('", "')'", "'['", "']'", "'{'", 
		"'}'", "'''", "'\\'", "'?'", "'@'", "'=='", "'!='", "'<='", "'>='", "'<'", 
		"'>'", "'&&'", "'||'", "'='", "':='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "APPLY_COLLECTION", "WHERE", "INTERFACE", "IMPLEMENTATION", 
		"EXTENDS", "FUNCTION", "METHOD", "TEXT_METHOD", "TEXT_FUNCTION", "FIELD", 
		"CLASSPROPERTIES", "EXTERN", "COMPLETE", "SYNONYM", "OVERRIDE", "ARGS", 
		"IF_EXPR", "IF", "THEN", "ELSE", "ENUM", "DO", "TRY", "CATCH", "FOREACH", 
		"FORALL", "IN", "RETURN", "LOCAL", "TRUE", "FALSE", "SWITCH", "CASE", 
		"DEFAULT", "BREAK", "STATIC", "WHILE", "FOR", "SEMICOLON", "COMMA", "COLON", 
		"DOT", "MULTIVALUED_EXPRESSION", "FIELD_INTRO", "REPLACE_FIELD_VALUE_INTRO", 
		"REMOVE_FIELD", "ADD_FIELD", "INLINE_DECL_INTRO", "OPEN_PAR", "CLOSE_PAR", 
		"OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_BRACE", "CLOSE_BRACE", "SINGLE_QUOTE", 
		"BACKSLASH", "QUESTION_MARK", "AT", "EQUAL_COMP", "NOT_EQUALS", "LESS_OR_EQUAL", 
		"GREATE_OR_EQUAL", "STRICT_LESS", "STRICT_GREAT", "COND_AND", "COND_OR", 
		"EQUAL_ASSIGNMENT", "MULTIVALUED_ASSIGNMENT", "OPEN_GRANULE", "CLOSE_GRANULE", 
		"OPERATOR", "DATE", "STRING", "DOCUMENTATION", "WS", "DOUBLE", "INTEGER", 
		"YMLID", "ID", "PREPROCESSING", "LINE_COMMENT", "MULTILINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(YmlParser._LITERAL_NAMES, YmlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return YmlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Yml.g4"; }

	// @Override
	public get ruleNames(): string[] { return YmlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return YmlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(YmlParser._ATN, this);
	}
	// @RuleVersion(0)
	public kaoFile(): KaoFileContext {
		let _localctx: KaoFileContext = new KaoFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, YmlParser.RULE_kaoFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.INTERFACE) | (1 << YmlParser.FUNCTION) | (1 << YmlParser.METHOD) | (1 << YmlParser.TEXT_METHOD) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.EXTERN) | (1 << YmlParser.COMPLETE) | (1 << YmlParser.ARGS) | (1 << YmlParser.ENUM) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL))) !== 0) || _la === YmlParser.YMLID) {
				{
				{
				this.state = 192;
				_localctx._entities = this.ymlEntity();
				}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 198;
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
		this.enterRule(_localctx, 2, YmlParser.RULE_ymlEntity);
		try {
			this.state = 207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 200;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 201;
				this.staticDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 202;
				this.classComplete();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 203;
				this.objectComplete();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 204;
				this.yenum();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 205;
				this.function();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 206;
				this.externDeclaration();
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
		this.enterRule(_localctx, 4, YmlParser.RULE_expressionMarker);
		try {
			this.state = 213;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 209;
				this.match(YmlParser.DOT);
				this.state = 210;
				this.match(YmlParser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 211;
				this.match(YmlParser.DOT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 212;
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
	public ymlId(): YmlIdContext {
		let _localctx: YmlIdContext = new YmlIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, YmlParser.RULE_ymlId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.ARGS) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL))) !== 0) || _la === YmlParser.YMLID)) {
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
		this.enterRule(_localctx, 8, YmlParser.RULE_yenum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.match(YmlParser.ENUM);
			this.state = 218;
			_localctx._yid = this.ymlId();
			this.state = 219;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 220;
				this.enumElement();
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === YmlParser.COMMA) {
					{
					{
					this.state = 221;
					this.match(YmlParser.COMMA);
					this.state = 222;
					this.enumElement();
					}
					}
					this.state = 227;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.ARGS) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL))) !== 0) || _la === YmlParser.YMLID);
			this.state = 232;
			this.match(YmlParser.CLOSE_BRACE);
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (YmlParser.FIELD_INTRO - 44)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 44)) | (1 << (YmlParser.REMOVE_FIELD - 44)) | (1 << (YmlParser.ADD_FIELD - 44)))) !== 0)) {
				{
				{
				this.state = 233;
				_localctx._fields = this.field();
				}
				}
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 239;
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
		this.enterRule(_localctx, 10, YmlParser.RULE_enumElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			_localctx._yid = this.ymlId();
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (YmlParser.FIELD_INTRO - 44)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 44)) | (1 << (YmlParser.REMOVE_FIELD - 44)) | (1 << (YmlParser.ADD_FIELD - 44)))) !== 0)) {
				{
				{
				this.state = 242;
				_localctx._fields = this.field();
				}
				}
				this.state = 247;
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
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, YmlParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.classDeclarationIntro();
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (YmlParser.FIELD_INTRO - 44)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 44)) | (1 << (YmlParser.REMOVE_FIELD - 44)) | (1 << (YmlParser.ADD_FIELD - 44)))) !== 0)) {
				{
				{
				this.state = 249;
				this.field();
				}
				}
				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.FUNCTION) | (1 << YmlParser.METHOD) | (1 << YmlParser.TEXT_METHOD) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.FIELD))) !== 0)) {
				{
				this.state = 257;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case YmlParser.FIELD:
					{
					this.state = 255;
					this.classAttributeDeclaration();
					}
					break;
				case YmlParser.FUNCTION:
				case YmlParser.METHOD:
				case YmlParser.TEXT_METHOD:
				case YmlParser.TEXT_FUNCTION:
					{
					this.state = 256;
					this.methodDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.CLASSPROPERTIES) {
				{
				this.state = 262;
				this.classPropertiesBlock();
				}
			}

			this.state = 265;
			this.match(YmlParser.SEMICOLON);
			this.state = 266;
			this.classImplementation();
			this.state = 267;
			this.match(YmlParser.SEMICOLON);
			this.state = 269;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 268;
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
		this.enterRule(_localctx, 14, YmlParser.RULE_classImplementation);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.match(YmlParser.IMPLEMENTATION);
			this.state = 272;
			_localctx._className = this.ymlId();
			this.state = 276;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 273;
					this.attributeImplementation();
					}
					}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			this.state = 282;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 279;
					this.overrideInstruction();
					}
					}
				}
				this.state = 284;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.OVERRIDE) {
				{
				this.state = 285;
				_localctx._overrideBlock = this.override();
				}
			}

			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (YmlParser.FIELD_INTRO - 44)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 44)) | (1 << (YmlParser.REMOVE_FIELD - 44)) | (1 << (YmlParser.ADD_FIELD - 44)))) !== 0)) {
				{
				{
				this.state = 288;
				_localctx._attributes = this.field();
				}
				}
				this.state = 293;
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
		this.enterRule(_localctx, 16, YmlParser.RULE_attributeImplementation);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			_localctx._attrName = this.ymlId();
			this.state = 296;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 295;
					_localctx._attributes = this.field();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 298;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
		this.enterRule(_localctx, 18, YmlParser.RULE_override);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this.match(YmlParser.OVERRIDE);
			this.state = 301;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.ARGS) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL))) !== 0) || _la === YmlParser.YMLID) {
				{
				{
				this.state = 302;
				this.overrideInstruction();
				}
				}
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 308;
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
		this.enterRule(_localctx, 20, YmlParser.RULE_overrideInstruction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.ymlId();
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.FUNCTION) {
				{
				this.state = 311;
				this.match(YmlParser.FUNCTION);
				}
			}

			this.state = 317;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 314;
					this.field();
					}
					}
				}
				this.state = 319;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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
		this.enterRule(_localctx, 22, YmlParser.RULE_classDeclarationIntro);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.match(YmlParser.INTERFACE);
			this.state = 321;
			_localctx._className = this.ymlId();
			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.EXTENDS) {
				{
				this.state = 322;
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
		this.enterRule(_localctx, 24, YmlParser.RULE_extendsBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.match(YmlParser.EXTENDS);
			this.state = 326;
			this.parentClassName();
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 327;
				this.match(YmlParser.COMMA);
				this.state = 328;
				this.parentClassName();
				}
				}
				this.state = 333;
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
		this.enterRule(_localctx, 26, YmlParser.RULE_parentClassName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
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
		this.enterRule(_localctx, 28, YmlParser.RULE_synonym);
		let _la: number;
		try {
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 336;
				this.match(YmlParser.SYNONYM);
				this.state = 337;
				this.constList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 338;
				this.match(YmlParser.SYNONYM);
				this.state = 339;
				this.match(YmlParser.OPEN_PAR);
				this.state = 348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL) | (1 << YmlParser.TRUE) | (1 << YmlParser.FALSE))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 48)) | (1 << (YmlParser.OPEN_PAR - 48)) | (1 << (YmlParser.OPEN_BRACKET - 48)) | (1 << (YmlParser.OPEN_BRACE - 48)) | (1 << (YmlParser.QUESTION_MARK - 48)) | (1 << (YmlParser.OPEN_GRANULE - 48)) | (1 << (YmlParser.OPERATOR - 48)) | (1 << (YmlParser.DATE - 48)) | (1 << (YmlParser.STRING - 48)) | (1 << (YmlParser.DOUBLE - 48)) | (1 << (YmlParser.YMLID - 48)))) !== 0)) {
					{
					this.state = 340;
					_localctx._value = this.value();
					_localctx._synonymElements.push(_localctx._value);
					this.state = 345;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === YmlParser.COMMA) {
						{
						{
						this.state = 341;
						this.match(YmlParser.COMMA);
						this.state = 342;
						_localctx._value = this.value();
						_localctx._synonymElements.push(_localctx._value);
						}
						}
						this.state = 347;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 350;
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
		this.enterRule(_localctx, 30, YmlParser.RULE_classAttributeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this.match(YmlParser.FIELD);
			this.state = 354;
			_localctx._memberName = this.ymlId();
			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (YmlParser.FIELD_INTRO - 44)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 44)) | (1 << (YmlParser.REMOVE_FIELD - 44)) | (1 << (YmlParser.ADD_FIELD - 44)))) !== 0)) {
				{
				{
				this.state = 355;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 360;
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
		this.enterRule(_localctx, 32, YmlParser.RULE_memberDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 361;
			_localctx._type = this.memberType();
			this.state = 362;
			_localctx._memberName = this.ymlId();
			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (YmlParser.FIELD_INTRO - 44)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 44)) | (1 << (YmlParser.REMOVE_FIELD - 44)) | (1 << (YmlParser.ADD_FIELD - 44)))) !== 0)) {
				{
				{
				this.state = 363;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 368;
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
		this.enterRule(_localctx, 34, YmlParser.RULE_memberType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.ymlId();
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.COND_OR) {
				{
				this.state = 370;
				this.match(YmlParser.COND_OR);
				this.state = 371;
				this.ymlId();
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
	public path(): PathContext {
		let _localctx: PathContext = new PathContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, YmlParser.RULE_path);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.ymlId();
			this.state = 377;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 375;
					this.match(YmlParser.DOT);
					this.state = 376;
					this.ymlId();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 379;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
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
		this.enterRule(_localctx, 38, YmlParser.RULE_ymlIdOrPath);
		try {
			this.state = 383;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 381;
				this.ymlId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 382;
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
		this.enterRule(_localctx, 40, YmlParser.RULE_field);
		try {
			this.state = 388;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 385;
				this.commonField();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 386;
				this.returnField();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 387;
				this.localField();
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
		this.enterRule(_localctx, 42, YmlParser.RULE_commonField);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			_localctx._fieldArrow = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (YmlParser.FIELD_INTRO - 44)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 44)) | (1 << (YmlParser.REMOVE_FIELD - 44)) | (1 << (YmlParser.ADD_FIELD - 44)))) !== 0))) {
				_localctx._fieldArrow = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 391;
			_localctx._optionName = this.ymlIdOrPath();
			this.state = 400;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 392;
				_localctx._valueOrCondition = this.valueOrCondition();
				_localctx._optionValues.push(_localctx._valueOrCondition);
				this.state = 397;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 393;
						this.match(YmlParser.COMMA);
						this.state = 394;
						_localctx._valueOrCondition = this.valueOrCondition();
						_localctx._optionValues.push(_localctx._valueOrCondition);
						}
						}
					}
					this.state = 399;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
	public local_variable_decl(): Local_variable_declContext {
		let _localctx: Local_variable_declContext = new Local_variable_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, YmlParser.RULE_local_variable_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			_localctx._type = this.memberType();
			this.state = 403;
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
		this.enterRule(_localctx, 46, YmlParser.RULE_localField);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			_localctx._fieldArrow = this.match(YmlParser.FIELD_INTRO);
			this.state = 406;
			_localctx._optionName = this.match(YmlParser.LOCAL);
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 407;
				_localctx._local_variable_decl = this.local_variable_decl();
				_localctx._optionValues.push(_localctx._local_variable_decl);
				this.state = 412;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 408;
						this.match(YmlParser.COMMA);
						this.state = 409;
						_localctx._local_variable_decl = this.local_variable_decl();
						_localctx._optionValues.push(_localctx._local_variable_decl);
						}
						}
					}
					this.state = 414;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
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
		this.enterRule(_localctx, 48, YmlParser.RULE_returnField);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			_localctx._fieldArrow = this.match(YmlParser.FIELD_INTRO);
			this.state = 418;
			_localctx._optionName = this.match(YmlParser.RETURN);
			this.state = 427;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 419;
				_localctx._valueOrCondition = this.valueOrCondition();
				_localctx._optionValues.push(_localctx._valueOrCondition);
				this.state = 424;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 420;
						this.match(YmlParser.COMMA);
						this.state = 421;
						_localctx._valueOrCondition = this.valueOrCondition();
						_localctx._optionValues.push(_localctx._valueOrCondition);
						}
						}
					}
					this.state = 426;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
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
	public classPropertiesBlock(): ClassPropertiesBlockContext {
		let _localctx: ClassPropertiesBlockContext = new ClassPropertiesBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, YmlParser.RULE_classPropertiesBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.match(YmlParser.CLASSPROPERTIES);
			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (YmlParser.FIELD_INTRO - 44)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 44)) | (1 << (YmlParser.REMOVE_FIELD - 44)) | (1 << (YmlParser.ADD_FIELD - 44)))) !== 0)) {
				{
				{
				this.state = 430;
				_localctx._classOption = this.field();
				}
				}
				this.state = 435;
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
		this.enterRule(_localctx, 52, YmlParser.RULE_documentation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
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
	public valueOrCondition(): ValueOrConditionContext {
		let _localctx: ValueOrConditionContext = new ValueOrConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, YmlParser.RULE_valueOrCondition);
		try {
			this.state = 446;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 438;
				this.actionBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 439;
				this.combinedComparison(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 440;
				this.value();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 441;
				this.hashMapKeyValue();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 442;
				this.documentation();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 443;
				_localctx._type = this.ymlId();
				this.state = 444;
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
	public hashMapKeyValue(): HashMapKeyValueContext {
		let _localctx: HashMapKeyValueContext = new HashMapKeyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, YmlParser.RULE_hashMapKeyValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			this.nonArithmeticValue();
			this.state = 449;
			this.match(YmlParser.COLON);
			this.state = 450;
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
	public hashMapValue(): HashMapValueContext {
		let _localctx: HashMapValueContext = new HashMapValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, YmlParser.RULE_hashMapValue);
		try {
			this.state = 454;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 452;
				this.value();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 453;
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
		this.enterRule(_localctx, 60, YmlParser.RULE_value);
		try {
			let _alt: number;
			this.state = 476;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 456;
				this.granule();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 457;
				this.inlineDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 458;
				this.arithmeticExpression(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 459;
				this.nonArithmeticValue();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 460;
				this.synonym();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 461;
				this.ifExprBlock();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 462;
				this.array();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 463;
				this.constList();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 464;
				this.applyCollection();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 465;
				this.match(YmlParser.OPEN_BRACE);
				this.state = 466;
				this.hashMapKeyValue();
				this.state = 471;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 467;
						this.match(YmlParser.COMMA);
						this.state = 468;
						this.hashMapKeyValue();
						}
						}
					}
					this.state = 473;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				}
				this.state = 474;
				this.match(YmlParser.CLOSE_BRACE);
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
	public applyCollection(): ApplyCollectionContext {
		let _localctx: ApplyCollectionContext = new ApplyCollectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, YmlParser.RULE_applyCollection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.match(YmlParser.APPLY_COLLECTION);
			this.state = 479;
			this.match(YmlParser.OPEN_PAR);
			this.state = 480;
			this.value();
			this.state = 481;
			this.match(YmlParser.COMMA);
			this.state = 482;
			this.match(YmlParser.WHERE);
			this.state = 483;
			this.combinedComparison(0);
			this.state = 484;
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
		this.enterRule(_localctx, 64, YmlParser.RULE_instruction_forEach);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.match(YmlParser.FOREACH);
			this.state = 487;
			this.match(YmlParser.OPEN_PAR);
			{
			this.state = 489;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 488;
				_localctx._type = this.ymlId();
				}
				break;
			}
			this.state = 491;
			_localctx._name = this.ymlId();
			}
			this.state = 493;
			this.match(YmlParser.COMMA);
			this.state = 494;
			this.value();
			this.state = 495;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 496;
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
	public instruction_for(): Instruction_forContext {
		let _localctx: Instruction_forContext = new Instruction_forContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, YmlParser.RULE_instruction_for);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			this.match(YmlParser.FOR);
			this.state = 499;
			this.match(YmlParser.OPEN_PAR);
			this.state = 500;
			_localctx._name = this.ymlId();
			this.state = 501;
			this.match(YmlParser.COMMA);
			this.state = 502;
			_localctx._step = this.value();
			this.state = 503;
			this.match(YmlParser.COMMA);
			this.state = 504;
			_localctx._collection = this.value();
			this.state = 505;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 506;
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
	public instruction_ifExprBlock(): Instruction_ifExprBlockContext {
		let _localctx: Instruction_ifExprBlockContext = new Instruction_ifExprBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, YmlParser.RULE_instruction_ifExprBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.ifExprBlock();
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.SEMICOLON) {
				{
				this.state = 509;
				this.match(YmlParser.SEMICOLON);
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
	public ifExprBlock(): IfExprBlockContext {
		let _localctx: IfExprBlockContext = new IfExprBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, YmlParser.RULE_ifExprBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this.match(YmlParser.IF_EXPR);
			this.state = 513;
			this.match(YmlParser.OPEN_PAR);
			this.state = 514;
			_localctx._condition = this.combinedComparison(0);
			this.state = 515;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 516;
			this.match(YmlParser.THEN);
			this.state = 517;
			_localctx._thenValue = this.value();
			this.state = 518;
			this.match(YmlParser.ELSE);
			this.state = 519;
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
		this.enterRule(_localctx, 72, YmlParser.RULE_bool);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
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
		this.enterRule(_localctx, 74, YmlParser.RULE_nonArithmeticValue);
		try {
			this.state = 527;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.ARGS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.OPEN_BRACE:
			case YmlParser.QUESTION_MARK:
			case YmlParser.OPEN_GRANULE:
			case YmlParser.YMLID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 523;
				this.chainedCall();
				}
				break;
			case YmlParser.TRUE:
			case YmlParser.FALSE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 524;
				this.bool();
				}
				break;
			case YmlParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 525;
				this.match(YmlParser.STRING);
				}
				break;
			case YmlParser.DATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 526;
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
		this.enterRule(_localctx, 76, YmlParser.RULE_instanciationVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.match(YmlParser.QUESTION_MARK);
			this.state = 530;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, YmlParser.RULE_expression);
		try {
			this.state = 538;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 532;
				this.ymlId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 533;
				this.functionCall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 534;
				this.indexedCall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 535;
				this.instanciationVariable();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 536;
				this.granule();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 537;
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
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, YmlParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.ymlId();
			this.state = 541;
			this.match(YmlParser.OPEN_PAR);
			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL) | (1 << YmlParser.TRUE) | (1 << YmlParser.FALSE))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 48)) | (1 << (YmlParser.OPEN_PAR - 48)) | (1 << (YmlParser.OPEN_BRACKET - 48)) | (1 << (YmlParser.OPEN_BRACE - 48)) | (1 << (YmlParser.QUESTION_MARK - 48)) | (1 << (YmlParser.OPEN_GRANULE - 48)) | (1 << (YmlParser.OPERATOR - 48)) | (1 << (YmlParser.DATE - 48)) | (1 << (YmlParser.STRING - 48)) | (1 << (YmlParser.DOCUMENTATION - 48)) | (1 << (YmlParser.DOUBLE - 48)) | (1 << (YmlParser.YMLID - 48)) | (1 << (YmlParser.ID - 48)))) !== 0)) {
				{
				this.state = 542;
				this.functionArgument();
				this.state = 547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === YmlParser.COMMA) {
					{
					{
					this.state = 543;
					this.match(YmlParser.COMMA);
					this.state = 544;
					this.functionArgument();
					}
					}
					this.state = 549;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 552;
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
	public indexedCall(): IndexedCallContext {
		let _localctx: IndexedCallContext = new IndexedCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, YmlParser.RULE_indexedCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this.ymlId();
			this.state = 555;
			this.match(YmlParser.OPEN_BRACKET);
			this.state = 556;
			this.functionArgument();
			this.state = 557;
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
		this.enterRule(_localctx, 84, YmlParser.RULE_functionArgument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.ID) {
				{
				this.state = 559;
				_localctx._argKey = this.match(YmlParser.ID);
				this.state = 560;
				this.match(YmlParser.COLON);
				}
			}

			this.state = 563;
			this.valueOrCondition();
			}
		}
		catch (re) {
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
		this.enterRule(_localctx, 86, YmlParser.RULE_chainedCall);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			this.expression();
			this.state = 571;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 566;
					_localctx._marker = this.expressionMarker();
					this.state = 567;
					this.expression();
					}
					}
				}
				this.state = 573;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
		this.enterRule(_localctx, 88, YmlParser.RULE_inlineDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this.match(YmlParser.INLINE_DECL_INTRO);
			this.state = 575;
			_localctx._className = this.ymlId();
			this.state = 577;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.ARGS) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL))) !== 0) || _la === YmlParser.YMLID) {
				{
				this.state = 576;
				_localctx._instanceName = this.ymlId();
				}
			}

			this.state = 582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (YmlParser.FIELD_INTRO - 44)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 44)) | (1 << (YmlParser.REMOVE_FIELD - 44)) | (1 << (YmlParser.ADD_FIELD - 44)) | (1 << (YmlParser.OPEN_GRANULE - 44)))) !== 0)) {
				{
				{
				this.state = 579;
				this.fieldValue();
				}
				}
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 585;
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
		this.enterRule(_localctx, 90, YmlParser.RULE_inlineOperation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			_localctx._leftExpression = this.value();
			this.state = 588;
			_localctx._operator = this.ymlId();
			this.state = 589;
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
		this.enterRule(_localctx, 92, YmlParser.RULE_fieldValue);
		try {
			this.state = 593;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.FIELD_INTRO:
			case YmlParser.REPLACE_FIELD_VALUE_INTRO:
			case YmlParser.REMOVE_FIELD:
			case YmlParser.ADD_FIELD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 591;
				this.field();
				}
				break;
			case YmlParser.OPEN_GRANULE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 592;
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
		this.enterRule(_localctx, 94, YmlParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
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
			this.state = 596;
			this.ymlId();
			this.state = 602;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.ARGS:
				{
				this.state = 597;
				this.argsBlock();
				}
				break;
			case YmlParser.OPEN_PAR:
				{
				this.state = 598;
				this.match(YmlParser.OPEN_PAR);
				this.state = 599;
				this.argumentList();
				this.state = 600;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.LOCAL) {
				{
				this.state = 604;
				this.localBlock();
				}
			}

			this.state = 608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.STATIC) {
				{
				this.state = 607;
				this.staticBlock();
				}
			}

			this.state = 613;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (YmlParser.FIELD_INTRO - 44)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 44)) | (1 << (YmlParser.REMOVE_FIELD - 44)) | (1 << (YmlParser.ADD_FIELD - 44)))) !== 0)) {
				{
				{
				this.state = 610;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 616;
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
		this.enterRule(_localctx, 96, YmlParser.RULE_argsBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 618;
			this.match(YmlParser.ARGS);
			this.state = 619;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 620;
			this.variableBlockContent();
			this.state = 621;
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
		this.enterRule(_localctx, 98, YmlParser.RULE_localBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this.match(YmlParser.LOCAL);
			this.state = 624;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 625;
			this.variableBlockContent();
			this.state = 626;
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
		this.enterRule(_localctx, 100, YmlParser.RULE_staticBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			this.match(YmlParser.STATIC);
			this.state = 629;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 633;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.ARGS) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL))) !== 0) || _la === YmlParser.YMLID) {
				{
				{
				this.state = 630;
				this.staticDeclaration();
				}
				}
				this.state = 635;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 636;
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
		this.enterRule(_localctx, 102, YmlParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 638;
			this.methodIntro();
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (YmlParser.FIELD_INTRO - 44)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 44)) | (1 << (YmlParser.REMOVE_FIELD - 44)) | (1 << (YmlParser.ADD_FIELD - 44)))) !== 0)) {
				{
				{
				this.state = 639;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 644;
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
		this.enterRule(_localctx, 104, YmlParser.RULE_methodCompleteDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			this.methodIntro();
			this.state = 646;
			this.match(YmlParser.FUNCTION);
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (YmlParser.FIELD_INTRO - 44)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 44)) | (1 << (YmlParser.REMOVE_FIELD - 44)) | (1 << (YmlParser.ADD_FIELD - 44)))) !== 0)) {
				{
				{
				this.state = 647;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 652;
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
		this.enterRule(_localctx, 106, YmlParser.RULE_methodIntro);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
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
			this.state = 654;
			this.ymlId();
			this.state = 660;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.ARGS:
				{
				this.state = 655;
				this.argsBlock();
				}
				break;
			case YmlParser.OPEN_PAR:
				{
				this.state = 656;
				this.match(YmlParser.OPEN_PAR);
				this.state = 657;
				this.argumentList();
				this.state = 658;
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
		this.enterRule(_localctx, 108, YmlParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 663;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.ARGS) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL))) !== 0) || _la === YmlParser.YMLID) {
				{
				this.state = 662;
				this.mandatoryArgs();
				}
			}

			this.state = 666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.COMMA || _la === YmlParser.OPEN_BRACE) {
				{
				this.state = 665;
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
		this.enterRule(_localctx, 110, YmlParser.RULE_mandatoryArgs);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			this.mandatoryArgDecl();
			this.state = 673;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 669;
					this.match(YmlParser.COMMA);
					this.state = 670;
					this.mandatoryArgDecl();
					}
					}
				}
				this.state = 675;
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
	public mandatoryArgDecl(): MandatoryArgDeclContext {
		let _localctx: MandatoryArgDeclContext = new MandatoryArgDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, YmlParser.RULE_mandatoryArgDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 676;
			_localctx._argType = this.ymlId();
			this.state = 677;
			_localctx._argName = this.ymlId();
			this.state = 679;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 678;
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
		this.enterRule(_localctx, 114, YmlParser.RULE_optionalArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 682;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.COMMA) {
				{
				this.state = 681;
				this.match(YmlParser.COMMA);
				}
			}

			this.state = 684;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 693;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.ARGS) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL))) !== 0) || _la === YmlParser.OPEN_BRACKET || _la === YmlParser.YMLID) {
				{
				this.state = 685;
				_localctx._optionalArgDecl = this.optionalArgDecl();
				_localctx._optionalArguments.push(_localctx._optionalArgDecl);
				this.state = 690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === YmlParser.COMMA) {
					{
					{
					this.state = 686;
					this.match(YmlParser.COMMA);
					this.state = 687;
					_localctx._optionalArgDecl = this.optionalArgDecl();
					_localctx._optionalArguments.push(_localctx._optionalArgDecl);
					}
					}
					this.state = 692;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 695;
			this.match(YmlParser.CLOSE_BRACE);
			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.ARGS) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL))) !== 0) || _la === YmlParser.YMLID) {
				{
				this.state = 696;
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
		this.enterRule(_localctx, 116, YmlParser.RULE_optionalArgDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.OPEN_BRACKET:
				{
				this.state = 699;
				this.match(YmlParser.OPEN_BRACKET);
				this.state = 700;
				_localctx._optionalKeyName = this.ymlId();
				this.state = 701;
				this.match(YmlParser.CLOSE_BRACKET);
				}
				break;
			case YmlParser.ARGS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.YMLID:
				{
				this.state = 703;
				_localctx._mandatoryKeyName = this.ymlId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 706;
			this.match(YmlParser.COLON);
			this.state = 707;
			_localctx._argType = this.ymlId();
			this.state = 709;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.ARGS) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL))) !== 0) || _la === YmlParser.YMLID) {
				{
				this.state = 708;
				_localctx._argName = this.ymlId();
				}
			}

			this.state = 712;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.OPEN_BRACE) {
				{
				this.state = 711;
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
		this.enterRule(_localctx, 118, YmlParser.RULE_argOptionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 715;
			_localctx._argOptionBlock = this.argOptionBlock();
			_localctx._arguments.push(_localctx._argOptionBlock);
			this.state = 720;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 716;
				this.match(YmlParser.COMMA);
				this.state = 717;
				_localctx._argOptionBlock = this.argOptionBlock();
				_localctx._arguments.push(_localctx._argOptionBlock);
				}
				}
				this.state = 722;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 723;
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
		this.enterRule(_localctx, 120, YmlParser.RULE_argOptionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			_localctx._argOption = this.ymlId();
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL) | (1 << YmlParser.TRUE) | (1 << YmlParser.FALSE))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 48)) | (1 << (YmlParser.OPEN_PAR - 48)) | (1 << (YmlParser.OPEN_BRACKET - 48)) | (1 << (YmlParser.OPEN_BRACE - 48)) | (1 << (YmlParser.QUESTION_MARK - 48)) | (1 << (YmlParser.OPEN_GRANULE - 48)) | (1 << (YmlParser.OPERATOR - 48)) | (1 << (YmlParser.DATE - 48)) | (1 << (YmlParser.STRING - 48)) | (1 << (YmlParser.DOUBLE - 48)) | (1 << (YmlParser.YMLID - 48)))) !== 0)) {
				{
				this.state = 726;
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
		this.enterRule(_localctx, 122, YmlParser.RULE_order1Block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 729;
			this.instanciationCondition();
			this.state = 731;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 730;
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
		this.enterRule(_localctx, 124, YmlParser.RULE_instanciationCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 733;
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
		this.enterRule(_localctx, 126, YmlParser.RULE_order1FullCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 736;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 735;
				this.conditionBlock();
				}
				break;
			}
			this.state = 741;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL) | (1 << YmlParser.TRUE) | (1 << YmlParser.FALSE))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 48)) | (1 << (YmlParser.OPEN_PAR - 48)) | (1 << (YmlParser.OPEN_BRACKET - 48)) | (1 << (YmlParser.OPEN_BRACE - 48)) | (1 << (YmlParser.QUESTION_MARK - 48)) | (1 << (YmlParser.OPEN_GRANULE - 48)) | (1 << (YmlParser.OPERATOR - 48)) | (1 << (YmlParser.DATE - 48)) | (1 << (YmlParser.STRING - 48)) | (1 << (YmlParser.DOUBLE - 48)) | (1 << (YmlParser.YMLID - 48)))) !== 0)) {
				{
				{
				this.state = 738;
				this.order1Block();
				}
				}
				this.state = 743;
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
		let _startState: number = 128;
		this.enterRecursionRule(_localctx, 128, YmlParser.RULE_combinedComparison, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 745;
				this.match(YmlParser.OPEN_PAR);
				this.state = 746;
				this.combinedComparison(0);
				this.state = 747;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;

			case 2:
				{
				this.state = 749;
				this.comparison();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 760;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 758;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
					case 1:
						{
						_localctx = new CombinedComparisonContext(_parentctx, _parentState);
						_localctx._leftCondition = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, YmlParser.RULE_combinedComparison);
						this.state = 752;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 753;
						this.match(YmlParser.COND_AND);
						this.state = 754;
						_localctx._rightCondition = this.combinedComparison(4);
						}
						break;

					case 2:
						{
						_localctx = new CombinedComparisonContext(_parentctx, _parentState);
						_localctx._leftCondition = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, YmlParser.RULE_combinedComparison);
						this.state = 755;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 756;
						this.match(YmlParser.COND_OR);
						this.state = 757;
						_localctx._rightCondition = this.combinedComparison(3);
						}
						break;
					}
					}
				}
				this.state = 762;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
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
		this.enterRule(_localctx, 130, YmlParser.RULE_comparison);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 763;
			_localctx._leftValue = this.value();
			this.state = 764;
			this.comparisonOperator();
			this.state = 765;
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
		this.enterRule(_localctx, 132, YmlParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			_la = this._input.LA(1);
			if (!(((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (YmlParser.EQUAL_COMP - 59)) | (1 << (YmlParser.NOT_EQUALS - 59)) | (1 << (YmlParser.LESS_OR_EQUAL - 59)) | (1 << (YmlParser.GREATE_OR_EQUAL - 59)) | (1 << (YmlParser.STRICT_LESS - 59)) | (1 << (YmlParser.STRICT_GREAT - 59)))) !== 0))) {
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
		this.enterRule(_localctx, 134, YmlParser.RULE_instruction_multivaluedAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 769;
			_localctx._leftHand = this.value();
			this.state = 770;
			this.match(YmlParser.MULTIVALUED_ASSIGNMENT);
			this.state = 771;
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
		this.enterRule(_localctx, 136, YmlParser.RULE_instruction_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 773;
			_localctx._leftHand = this.value();
			this.state = 774;
			this.match(YmlParser.EQUAL_ASSIGNMENT);
			this.state = 775;
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
	public conditionBlock(): ConditionBlockContext {
		let _localctx: ConditionBlockContext = new ConditionBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, YmlParser.RULE_conditionBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 777;
					this.order0Condition();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 780;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
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
		this.enterRule(_localctx, 140, YmlParser.RULE_order0Condition);
		try {
			this.state = 784;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 782;
				this.combinedComparison(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 783;
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
	public instruction_switchCase_withValue(): Instruction_switchCase_withValueContext {
		let _localctx: Instruction_switchCase_withValueContext = new Instruction_switchCase_withValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, YmlParser.RULE_instruction_switchCase_withValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 786;
			this.match(YmlParser.SWITCH);
			this.state = 787;
			this.match(YmlParser.OPEN_PAR);
			this.state = 788;
			this.value();
			this.state = 789;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 790;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 794;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.CASE) {
				{
				{
				this.state = 791;
				this.instructionCase();
				}
				}
				this.state = 796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.DEFAULT) {
				{
				this.state = 797;
				this.instructionDefault();
				}
			}

			this.state = 800;
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
		this.enterRule(_localctx, 144, YmlParser.RULE_instruction_switchCase_asIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 802;
			this.match(YmlParser.SWITCH);
			this.state = 803;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 807;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.CASE) {
				{
				{
				this.state = 804;
				this.instructionCase();
				}
				}
				this.state = 809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.DEFAULT) {
				{
				this.state = 810;
				this.instructionDefault();
				}
			}

			this.state = 813;
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
	public instructionCase(): InstructionCaseContext {
		let _localctx: InstructionCaseContext = new InstructionCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, YmlParser.RULE_instructionCase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			this.match(YmlParser.CASE);
			this.state = 816;
			this.match(YmlParser.OPEN_PAR);
			this.state = 817;
			this.valueOrCondition();
			this.state = 818;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 819;
			this.match(YmlParser.COLON);
			this.state = 822;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 820;
				this.instruction();
				}
				break;

			case 2:
				{
				this.state = 821;
				this.actionBlock();
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
	public instructionDefault(): InstructionDefaultContext {
		let _localctx: InstructionDefaultContext = new InstructionDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, YmlParser.RULE_instructionDefault);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 824;
			this.match(YmlParser.DEFAULT);
			this.state = 825;
			this.match(YmlParser.COLON);
			this.state = 828;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				{
				this.state = 826;
				this.instruction();
				}
				break;

			case 2:
				{
				this.state = 827;
				this.actionBlock();
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
	public instruction_break(): Instruction_breakContext {
		let _localctx: Instruction_breakContext = new Instruction_breakContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, YmlParser.RULE_instruction_break);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			this.match(YmlParser.BREAK);
			this.state = 832;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.SEMICOLON) {
				{
				this.state = 831;
				this.match(YmlParser.SEMICOLON);
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
	public instruction_ifElse(): Instruction_ifElseContext {
		let _localctx: Instruction_ifElseContext = new Instruction_ifElseContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, YmlParser.RULE_instruction_ifElse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 834;
			this.instruction_if();
			this.state = 840;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 835;
				this.match(YmlParser.ELSE);
				this.state = 838;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 836;
					this.actionBlock();
					}
					break;

				case 2:
					{
					this.state = 837;
					this.instruction();
					}
					break;
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
	public instruction_if(): Instruction_ifContext {
		let _localctx: Instruction_ifContext = new Instruction_ifContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, YmlParser.RULE_instruction_if);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 842;
			this.match(YmlParser.IF);
			this.state = 843;
			this.match(YmlParser.OPEN_PAR);
			this.state = 844;
			this.order0Condition();
			this.state = 845;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 848;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 846;
				this.actionBlock();
				}
				break;

			case 2:
				{
				this.state = 847;
				this.instruction();
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
	public instruction_forall(): Instruction_forallContext {
		let _localctx: Instruction_forallContext = new Instruction_forallContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, YmlParser.RULE_instruction_forall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 850;
			this.match(YmlParser.FORALL);
			this.state = 851;
			this.match(YmlParser.OPEN_PAR);
			this.state = 854;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.ARGS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.YMLID:
				{
				this.state = 852;
				this.ymlId();
				}
				break;
			case YmlParser.QUESTION_MARK:
				{
				this.state = 853;
				this.instanciationVariable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 856;
			this.match(YmlParser.IN);
			this.state = 859;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.APPLY_COLLECTION:
			case YmlParser.SYNONYM:
			case YmlParser.ARGS:
			case YmlParser.IF_EXPR:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.TRUE:
			case YmlParser.FALSE:
			case YmlParser.INLINE_DECL_INTRO:
			case YmlParser.OPEN_PAR:
			case YmlParser.OPEN_BRACKET:
			case YmlParser.OPEN_BRACE:
			case YmlParser.QUESTION_MARK:
			case YmlParser.OPEN_GRANULE:
			case YmlParser.OPERATOR:
			case YmlParser.DATE:
			case YmlParser.STRING:
			case YmlParser.DOUBLE:
			case YmlParser.YMLID:
				{
				this.state = 857;
				this.value();
				}
				break;
			case YmlParser.FUNCTION:
				{
				this.state = 858;
				this.match(YmlParser.FUNCTION);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 861;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 864;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 862;
				this.actionBlock();
				}
				break;

			case 2:
				{
				this.state = 863;
				this.instruction();
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
	public instruction_while(): Instruction_whileContext {
		let _localctx: Instruction_whileContext = new Instruction_whileContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, YmlParser.RULE_instruction_while);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 866;
			this.match(YmlParser.WHILE);
			this.state = 867;
			this.match(YmlParser.OPEN_PAR);
			this.state = 868;
			this.order0Condition();
			this.state = 869;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 870;
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
	public instruction_return(): Instruction_returnContext {
		let _localctx: Instruction_returnContext = new Instruction_returnContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, YmlParser.RULE_instruction_return);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 872;
			this.match(YmlParser.RETURN);
			this.state = 873;
			this.value();
			this.state = 875;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.SEMICOLON) {
				{
				this.state = 874;
				this.match(YmlParser.SEMICOLON);
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
	public instruction_chainedCall(): Instruction_chainedCallContext {
		let _localctx: Instruction_chainedCallContext = new Instruction_chainedCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, YmlParser.RULE_instruction_chainedCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 877;
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
		this.enterRule(_localctx, 164, YmlParser.RULE_instruction);
		let _la: number;
		try {
			this.state = 905;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 879;
				this.instruction_chainedCall();
				this.state = 881;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === YmlParser.SEMICOLON) {
					{
					this.state = 880;
					this.match(YmlParser.SEMICOLON);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 883;
				this.instruction_multivaluedAssignment();
				this.state = 885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === YmlParser.SEMICOLON) {
					{
					this.state = 884;
					this.match(YmlParser.SEMICOLON);
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 887;
				this.instruction_assignment();
				this.state = 889;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === YmlParser.SEMICOLON) {
					{
					this.state = 888;
					this.match(YmlParser.SEMICOLON);
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 891;
				this.instruction_for();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 892;
				this.instruction_forEach();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 893;
				this.instruction_forall();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 894;
				this.instruction_return();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 895;
				this.instruction_ifElse();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 896;
				this.instruction_try_catch();
				this.state = 898;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === YmlParser.SEMICOLON) {
					{
					this.state = 897;
					this.match(YmlParser.SEMICOLON);
					}
				}

				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 900;
				this.instruction_switchCase_asIf();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 901;
				this.instruction_break();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 902;
				this.instruction_switchCase_withValue();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 903;
				this.instruction_ifExprBlock();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 904;
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
		this.enterRule(_localctx, 166, YmlParser.RULE_instruction_do);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 907;
			this.match(YmlParser.DO);
			this.state = 908;
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
		this.enterRule(_localctx, 168, YmlParser.RULE_instruction_try_catch);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 910;
			this.match(YmlParser.TRY);
			this.state = 911;
			this.match(YmlParser.OPEN_PAR);
			this.state = 912;
			this.instruction_do();
			this.state = 913;
			this.match(YmlParser.CATCH);
			this.state = 914;
			this.match(YmlParser.OPEN_PAR);
			{
			this.state = 915;
			this.ymlId();
			this.state = 920;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 916;
					this.match(YmlParser.COMMA);
					this.state = 917;
					this.ymlId();
					}
					}
				}
				this.state = 922;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			}
			}
			this.state = 923;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 924;
			this.actionBlock();
			this.state = 925;
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
		this.enterRule(_localctx, 170, YmlParser.RULE_actionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 927;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 929;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 928;
				this.instruction();
				}
				}
				this.state = 931;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.IF) | (1 << YmlParser.TRY) | (1 << YmlParser.FOREACH) | (1 << YmlParser.FORALL) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL) | (1 << YmlParser.TRUE) | (1 << YmlParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlParser.SWITCH - 32)) | (1 << (YmlParser.BREAK - 32)) | (1 << (YmlParser.WHILE - 32)) | (1 << (YmlParser.FOR - 32)) | (1 << (YmlParser.INLINE_DECL_INTRO - 32)) | (1 << (YmlParser.OPEN_PAR - 32)) | (1 << (YmlParser.OPEN_BRACKET - 32)) | (1 << (YmlParser.OPEN_BRACE - 32)) | (1 << (YmlParser.QUESTION_MARK - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (YmlParser.OPEN_GRANULE - 69)) | (1 << (YmlParser.OPERATOR - 69)) | (1 << (YmlParser.DATE - 69)) | (1 << (YmlParser.STRING - 69)) | (1 << (YmlParser.DOUBLE - 69)) | (1 << (YmlParser.YMLID - 69)))) !== 0));
			this.state = 933;
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
		let _startState: number = 172;
		this.enterRecursionRule(_localctx, 172, YmlParser.RULE_arithmeticExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 951;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				{
				this.state = 936;
				this.match(YmlParser.OPEN_PAR);
				this.state = 937;
				_localctx._parenthizedExpression = this.arithmeticExpression(0);
				this.state = 938;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;

			case 2:
				{
				this.state = 940;
				_localctx._prefixedOperator = this.match(YmlParser.OPERATOR);
				this.state = 941;
				this.arithmeticExpression(4);
				}
				break;

			case 3:
				{
				this.state = 942;
				this.chainedCall();
				this.state = 943;
				this.match(YmlParser.OPERATOR);
				this.state = 944;
				this.arithmeticExpression(3);
				}
				break;

			case 4:
				{
				this.state = 946;
				this.chainedCall();
				this.state = 947;
				this.match(YmlParser.OPERATOR);
				this.state = 948;
				this.chainedCall();
				}
				break;

			case 5:
				{
				this.state = 950;
				this.match(YmlParser.DOUBLE);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 958;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ArithmeticExpressionContext(_parentctx, _parentState);
					_localctx._leftExpression = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, YmlParser.RULE_arithmeticExpression);
					this.state = 953;
					if (!(this.precpred(this._ctx, 5))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
					}
					this.state = 954;
					_localctx._infixedOperator = this.match(YmlParser.OPERATOR);
					this.state = 955;
					_localctx._rightExpression = this.arithmeticExpression(6);
					}
					}
				}
				this.state = 960;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
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
		this.enterRule(_localctx, 174, YmlParser.RULE_existentialOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 961;
			_localctx._operator = this.ymlId();
			this.state = 962;
			this.match(YmlParser.OPEN_PAR);
			this.state = 963;
			this.order1FullCondition();
			this.state = 964;
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
		this.enterRule(_localctx, 176, YmlParser.RULE_variableBlockContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 969;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.ARGS) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL))) !== 0) || _la === YmlParser.YMLID) {
				{
				{
				this.state = 966;
				this.memberDeclaration();
				}
				}
				this.state = 971;
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
		this.enterRule(_localctx, 178, YmlParser.RULE_staticDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 972;
			_localctx._declarationType = this.ymlId();
			this.state = 973;
			_localctx._declarationName = this.ymlId();
			this.state = 976;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.EXTENDS) {
				{
				this.state = 974;
				this.match(YmlParser.EXTENDS);
				this.state = 975;
				_localctx._extended = this.ymlId();
				}
			}

			this.state = 979;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL) | (1 << YmlParser.TRUE) | (1 << YmlParser.FALSE))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 48)) | (1 << (YmlParser.OPEN_PAR - 48)) | (1 << (YmlParser.OPEN_BRACKET - 48)) | (1 << (YmlParser.OPEN_BRACE - 48)) | (1 << (YmlParser.QUESTION_MARK - 48)) | (1 << (YmlParser.OPEN_GRANULE - 48)) | (1 << (YmlParser.OPERATOR - 48)) | (1 << (YmlParser.DATE - 48)) | (1 << (YmlParser.STRING - 48)) | (1 << (YmlParser.DOUBLE - 48)) | (1 << (YmlParser.YMLID - 48)))) !== 0)) {
				{
				this.state = 978;
				this.value();
				}
			}

			this.state = 984;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (YmlParser.FIELD_INTRO - 44)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 44)) | (1 << (YmlParser.REMOVE_FIELD - 44)) | (1 << (YmlParser.ADD_FIELD - 44)))) !== 0)) {
				{
				{
				this.state = 981;
				_localctx._declarationOptions = this.field();
				}
				}
				this.state = 986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 987;
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
		this.enterRule(_localctx, 180, YmlParser.RULE_externDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 989;
			this.match(YmlParser.EXTERN);
			this.state = 992;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.FUNCTION:
			case YmlParser.METHOD:
			case YmlParser.TEXT_METHOD:
			case YmlParser.TEXT_FUNCTION:
				{
				this.state = 990;
				this.methodDeclaration();
				}
				break;
			case YmlParser.ARGS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.YMLID:
				{
				this.state = 991;
				this.memberDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 994;
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
		this.enterRule(_localctx, 182, YmlParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 996;
			this.match(YmlParser.OPEN_BRACKET);
			this.state = 998;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL) | (1 << YmlParser.TRUE) | (1 << YmlParser.FALSE))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 48)) | (1 << (YmlParser.OPEN_PAR - 48)) | (1 << (YmlParser.OPEN_BRACKET - 48)) | (1 << (YmlParser.OPEN_BRACE - 48)) | (1 << (YmlParser.QUESTION_MARK - 48)) | (1 << (YmlParser.OPEN_GRANULE - 48)) | (1 << (YmlParser.OPERATOR - 48)) | (1 << (YmlParser.DATE - 48)) | (1 << (YmlParser.STRING - 48)) | (1 << (YmlParser.DOUBLE - 48)) | (1 << (YmlParser.YMLID - 48)))) !== 0)) {
				{
				this.state = 997;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
			}

			this.state = 1004;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 1000;
				this.match(YmlParser.COMMA);
				this.state = 1001;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
				}
				this.state = 1006;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1007;
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
	public constList(): ConstListContext {
		let _localctx: ConstListContext = new ConstListContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, YmlParser.RULE_constList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1009;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1011;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL) | (1 << YmlParser.TRUE) | (1 << YmlParser.FALSE))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (YmlParser.INLINE_DECL_INTRO - 48)) | (1 << (YmlParser.OPEN_PAR - 48)) | (1 << (YmlParser.OPEN_BRACKET - 48)) | (1 << (YmlParser.OPEN_BRACE - 48)) | (1 << (YmlParser.QUESTION_MARK - 48)) | (1 << (YmlParser.OPEN_GRANULE - 48)) | (1 << (YmlParser.OPERATOR - 48)) | (1 << (YmlParser.DATE - 48)) | (1 << (YmlParser.STRING - 48)) | (1 << (YmlParser.DOUBLE - 48)) | (1 << (YmlParser.YMLID - 48)))) !== 0)) {
				{
				this.state = 1010;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
			}

			this.state = 1017;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 1013;
				this.match(YmlParser.COMMA);
				this.state = 1014;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
				}
				this.state = 1019;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1020;
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
		this.enterRule(_localctx, 186, YmlParser.RULE_granule);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1022;
			this.match(YmlParser.OPEN_GRANULE);
			this.state = 1031;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					this.state = 1029;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case YmlParser.APPLY_COLLECTION:
					case YmlParser.WHERE:
					case YmlParser.INTERFACE:
					case YmlParser.IMPLEMENTATION:
					case YmlParser.EXTENDS:
					case YmlParser.FUNCTION:
					case YmlParser.METHOD:
					case YmlParser.TEXT_METHOD:
					case YmlParser.TEXT_FUNCTION:
					case YmlParser.FIELD:
					case YmlParser.CLASSPROPERTIES:
					case YmlParser.EXTERN:
					case YmlParser.COMPLETE:
					case YmlParser.SYNONYM:
					case YmlParser.OVERRIDE:
					case YmlParser.ARGS:
					case YmlParser.IF_EXPR:
					case YmlParser.IF:
					case YmlParser.THEN:
					case YmlParser.ELSE:
					case YmlParser.ENUM:
					case YmlParser.DO:
					case YmlParser.TRY:
					case YmlParser.CATCH:
					case YmlParser.FOREACH:
					case YmlParser.FORALL:
					case YmlParser.IN:
					case YmlParser.RETURN:
					case YmlParser.LOCAL:
					case YmlParser.TRUE:
					case YmlParser.FALSE:
					case YmlParser.SWITCH:
					case YmlParser.CASE:
					case YmlParser.DEFAULT:
					case YmlParser.BREAK:
					case YmlParser.STATIC:
					case YmlParser.WHILE:
					case YmlParser.FOR:
					case YmlParser.SEMICOLON:
					case YmlParser.COMMA:
					case YmlParser.COLON:
					case YmlParser.DOT:
					case YmlParser.MULTIVALUED_EXPRESSION:
					case YmlParser.FIELD_INTRO:
					case YmlParser.REPLACE_FIELD_VALUE_INTRO:
					case YmlParser.REMOVE_FIELD:
					case YmlParser.ADD_FIELD:
					case YmlParser.INLINE_DECL_INTRO:
					case YmlParser.OPEN_PAR:
					case YmlParser.CLOSE_PAR:
					case YmlParser.OPEN_BRACKET:
					case YmlParser.CLOSE_BRACKET:
					case YmlParser.OPEN_BRACE:
					case YmlParser.CLOSE_BRACE:
					case YmlParser.SINGLE_QUOTE:
					case YmlParser.BACKSLASH:
					case YmlParser.QUESTION_MARK:
					case YmlParser.AT:
					case YmlParser.EQUAL_COMP:
					case YmlParser.NOT_EQUALS:
					case YmlParser.LESS_OR_EQUAL:
					case YmlParser.GREATE_OR_EQUAL:
					case YmlParser.STRICT_LESS:
					case YmlParser.STRICT_GREAT:
					case YmlParser.COND_AND:
					case YmlParser.COND_OR:
					case YmlParser.EQUAL_ASSIGNMENT:
					case YmlParser.MULTIVALUED_ASSIGNMENT:
					case YmlParser.OPERATOR:
					case YmlParser.DATE:
					case YmlParser.STRING:
					case YmlParser.DOCUMENTATION:
					case YmlParser.WS:
					case YmlParser.DOUBLE:
					case YmlParser.INTEGER:
					case YmlParser.YMLID:
					case YmlParser.ID:
					case YmlParser.PREPROCESSING:
					case YmlParser.LINE_COMMENT:
					case YmlParser.MULTILINE_COMMENT:
						{
						this.state = 1024;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 1023;
								_la = this._input.LA(1);
								if (_la <= 0 || (_la === YmlParser.OPEN_GRANULE || _la === YmlParser.CLOSE_GRANULE)) {
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
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 1026;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;
					case YmlParser.OPEN_GRANULE:
						{
						this.state = 1028;
						this.granule();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 1033;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			}
			this.state = 1034;
			this.match(YmlParser.CLOSE_GRANULE);
			this.state = 1036;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1035;
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
	public objectComplete(): ObjectCompleteContext {
		let _localctx: ObjectCompleteContext = new ObjectCompleteContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, YmlParser.RULE_objectComplete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1038;
			this.match(YmlParser.COMPLETE);
			this.state = 1039;
			_localctx._completedElemId = this.ymlId();
			this.state = 1043;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (YmlParser.FIELD_INTRO - 44)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 44)) | (1 << (YmlParser.REMOVE_FIELD - 44)) | (1 << (YmlParser.ADD_FIELD - 44)))) !== 0)) {
				{
				{
				this.state = 1040;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 1045;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1046;
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
		this.enterRule(_localctx, 190, YmlParser.RULE_classComplete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1048;
			this.match(YmlParser.COMPLETE);
			this.state = 1051;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.ARGS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.YMLID:
				{
				this.state = 1049;
				this.ymlId();
				}
				break;
			case YmlParser.FUNCTION:
				{
				this.state = 1050;
				this.match(YmlParser.FUNCTION);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1058;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.FUNCTION) | (1 << YmlParser.METHOD) | (1 << YmlParser.TEXT_METHOD) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.FIELD) | (1 << YmlParser.ARGS) | (1 << YmlParser.RETURN) | (1 << YmlParser.LOCAL))) !== 0) || _la === YmlParser.YMLID) {
				{
				this.state = 1056;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case YmlParser.FIELD:
					{
					this.state = 1053;
					this.classAttributeDeclaration();
					}
					break;
				case YmlParser.FUNCTION:
				case YmlParser.METHOD:
				case YmlParser.TEXT_METHOD:
				case YmlParser.TEXT_FUNCTION:
					{
					this.state = 1054;
					this.methodCompleteDeclaration();
					}
					break;
				case YmlParser.ARGS:
				case YmlParser.RETURN:
				case YmlParser.LOCAL:
				case YmlParser.YMLID:
					{
					this.state = 1055;
					this.memberDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1060;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1061;
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
		case 64:
			return this.combinedComparison_sempred(_localctx as CombinedComparisonContext, predIndex);

		case 86:
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
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03T\u042A\x04\x02" +
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
		"`\x04a\ta\x03\x02\x07\x02\xC4\n\x02\f\x02\x0E\x02\xC7\v\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xD2" +
		"\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xD8\n\x04\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xE2\n\x06\f\x06" +
		"\x0E\x06\xE5\v\x06\x06\x06\xE7\n\x06\r\x06\x0E\x06\xE8\x03\x06\x03\x06" +
		"\x07\x06\xED\n\x06\f\x06\x0E\x06\xF0\v\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x07\x07\xF6\n\x07\f\x07\x0E\x07\xF9\v\x07\x03\b\x03\b\x07\b\xFD\n" +
		"\b\f\b\x0E\b\u0100\v\b\x03\b\x03\b\x07\b\u0104\n\b\f\b\x0E\b\u0107\v\b" +
		"\x03\b\x05\b\u010A\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0110\n\b\x03\t\x03" +
		"\t\x03\t\x07\t\u0115\n\t\f\t\x0E\t\u0118\v\t\x03\t\x07\t\u011B\n\t\f\t" +
		"\x0E\t\u011E\v\t\x03\t\x05\t\u0121\n\t\x03\t\x07\t\u0124\n\t\f\t\x0E\t" +
		"\u0127\v\t\x03\n\x03\n\x06\n\u012B\n\n\r\n\x0E\n\u012C\x03\v\x03\v\x03" +
		"\v\x07\v\u0132\n\v\f\v\x0E\v\u0135\v\v\x03\v\x03\v\x03\f\x03\f\x05\f\u013B" +
		"\n\f\x03\f\x07\f\u013E\n\f\f\f\x0E\f\u0141\v\f\x03\r\x03\r\x03\r\x05\r" +
		"\u0146\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u014C\n\x0E\f\x0E\x0E" +
		"\x0E\u014F\v\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x07\x10\u015A\n\x10\f\x10\x0E\x10\u015D\v\x10\x05\x10" +
		"\u015F\n\x10\x03\x10\x05\x10\u0162\n\x10\x03\x11\x03\x11\x03\x11\x07\x11" +
		"\u0167\n\x11\f\x11\x0E\x11\u016A\v\x11\x03\x12\x03\x12\x03\x12\x07\x12" +
		"\u016F\n\x12\f\x12\x0E\x12\u0172\v\x12\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\u0177\n\x13\x03\x14\x03\x14\x03\x14\x06\x14\u017C\n\x14\r\x14\x0E\x14" +
		"\u017D\x03\x15\x03\x15\x05\x15\u0182\n\x15\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\u0187\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u018E" +
		"\n\x17\f\x17\x0E\x17\u0191\v\x17\x05\x17\u0193\n\x17\x03\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u019D\n\x19\f\x19" +
		"\x0E\x19\u01A0\v\x19\x05\x19\u01A2\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x07\x1A\u01A9\n\x1A\f\x1A\x0E\x1A\u01AC\v\x1A\x05\x1A\u01AE\n" +
		"\x1A\x03\x1B\x03\x1B\x07\x1B\u01B2\n\x1B\f\x1B\x0E\x1B\u01B5\v\x1B\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x05\x1D\u01C1\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F" +
		"\x05\x1F\u01C9\n\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x07 \u01D8\n \f \x0E \u01DB\v \x03 \x03 \x05 \u01DF\n" +
		" \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x05\"\u01EC" +
		"\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x05$\u0201\n$\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x05\'\u0212" +
		"\n\'\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u021D\n)\x03*\x03" +
		"*\x03*\x03*\x03*\x07*\u0224\n*\f*\x0E*\u0227\v*\x05*\u0229\n*\x03*\x03" +
		"*\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x05,\u0234\n,\x03,\x03,\x03-\x03" +
		"-\x03-\x03-\x07-\u023C\n-\f-\x0E-\u023F\v-\x03.\x03.\x03.\x05.\u0244\n" +
		".\x03.\x07.\u0247\n.\f.\x0E.\u024A\v.\x03.\x03.\x03/\x03/\x03/\x03/\x03" +
		"0\x030\x050\u0254\n0\x031\x031\x031\x031\x031\x031\x031\x051\u025D\n1" +
		"\x031\x051\u0260\n1\x031\x051\u0263\n1\x031\x071\u0266\n1\f1\x0E1\u0269" +
		"\v1\x031\x031\x032\x032\x032\x032\x032\x033\x033\x033\x033\x033\x034\x03" +
		"4\x034\x074\u027A\n4\f4\x0E4\u027D\v4\x034\x034\x035\x035\x075\u0283\n" +
		"5\f5\x0E5\u0286\v5\x036\x036\x036\x076\u028B\n6\f6\x0E6\u028E\v6\x037" +
		"\x037\x037\x037\x037\x037\x037\x057\u0297\n7\x038\x058\u029A\n8\x038\x05" +
		"8\u029D\n8\x039\x039\x039\x079\u02A2\n9\f9\x0E9\u02A5\v9\x03:\x03:\x03" +
		":\x05:\u02AA\n:\x03;\x05;\u02AD\n;\x03;\x03;\x03;\x03;\x07;\u02B3\n;\f" +
		";\x0E;\u02B6\v;\x05;\u02B8\n;\x03;\x03;\x05;\u02BC\n;\x03<\x03<\x03<\x03" +
		"<\x03<\x05<\u02C3\n<\x03<\x03<\x03<\x05<\u02C8\n<\x03<\x05<\u02CB\n<\x03" +
		"=\x03=\x03=\x03=\x07=\u02D1\n=\f=\x0E=\u02D4\v=\x03=\x03=\x03>\x03>\x05" +
		">\u02DA\n>\x03?\x03?\x05?\u02DE\n?\x03@\x03@\x03A\x05A\u02E3\nA\x03A\x07" +
		"A\u02E6\nA\fA\x0EA\u02E9\vA\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u02F1\n" +
		"B\x03B\x03B\x03B\x03B\x03B\x03B\x07B\u02F9\nB\fB\x0EB\u02FC\vB\x03C\x03" +
		"C\x03C\x03C\x03D\x03D\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03G\x06" +
		"G\u030D\nG\rG\x0EG\u030E\x03H\x03H\x05H\u0313\nH\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x07I\u031B\nI\fI\x0EI\u031E\vI\x03I\x05I\u0321\nI\x03I\x03I\x03" +
		"J\x03J\x03J\x07J\u0328\nJ\fJ\x0EJ\u032B\vJ\x03J\x05J\u032E\nJ\x03J\x03" +
		"J\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u0339\nK\x03L\x03L\x03L\x03" +
		"L\x05L\u033F\nL\x03M\x03M\x05M\u0343\nM\x03N\x03N\x03N\x03N\x05N\u0349" +
		"\nN\x05N\u034B\nN\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u0353\nO\x03P\x03" +
		"P\x03P\x03P\x05P\u0359\nP\x03P\x03P\x03P\x05P\u035E\nP\x03P\x03P\x03P" +
		"\x05P\u0363\nP\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x05R\u036E" +
		"\nR\x03S\x03S\x03T\x03T\x05T\u0374\nT\x03T\x03T\x05T\u0378\nT\x03T\x03" +
		"T\x05T\u037C\nT\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u0385\nT\x03T" +
		"\x03T\x03T\x03T\x03T\x05T\u038C\nT\x03U\x03U\x03U\x03V\x03V\x03V\x03V" +
		"\x03V\x03V\x03V\x03V\x07V\u0399\nV\fV\x0EV\u039C\vV\x03V\x03V\x03V\x03" +
		"V\x03W\x03W\x06W\u03A4\nW\rW\x0EW\u03A5\x03W\x03W\x03X\x03X\x03X\x03X" +
		"\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05X\u03BA" +
		"\nX\x03X\x03X\x03X\x07X\u03BF\nX\fX\x0EX\u03C2\vX\x03Y\x03Y\x03Y\x03Y" +
		"\x03Y\x03Z\x07Z\u03CA\nZ\fZ\x0EZ\u03CD\vZ\x03[\x03[\x03[\x03[\x05[\u03D3" +
		"\n[\x03[\x05[\u03D6\n[\x03[\x07[\u03D9\n[\f[\x0E[\u03DC\v[\x03[\x03[\x03" +
		"\\\x03\\\x03\\\x05\\\u03E3\n\\\x03\\\x03\\\x03]\x03]\x05]\u03E9\n]\x03" +
		"]\x03]\x07]\u03ED\n]\f]\x0E]\u03F0\v]\x03]\x03]\x03^\x03^\x05^\u03F6\n" +
		"^\x03^\x03^\x07^\u03FA\n^\f^\x0E^\u03FD\v^\x03^\x03^\x03_\x03_\x06_\u0403" +
		"\n_\r_\x0E_\u0404\x03_\x07_\u0408\n_\f_\x0E_\u040B\v_\x03_\x03_\x05_\u040F" +
		"\n_\x03`\x03`\x03`\x07`\u0414\n`\f`\x0E`\u0417\v`\x03`\x03`\x03a\x03a" +
		"\x03a\x05a\u041E\na\x03a\x03a\x03a\x07a\u0423\na\fa\x0Ea\u0426\va\x03" +
		"a\x03a\x03a\v\u0116\u011C\u017D\u018F\u019E\u01AA\u01D9\u039A\u0409\x02" +
		"\x04\x82\xAEb\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
		"\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
		"\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\x02\b" +
		"\x05\x02\x12\x12\x1E\x1FPP\x03\x02.1\x03\x02 !\x03\x02\b\v\x03\x02=B\x03" +
		"\x02GH\x02\u046C\x02\xC5\x03\x02\x02\x02\x04\xD1\x03\x02\x02\x02\x06\xD7" +
		"\x03\x02\x02\x02\b\xD9\x03\x02\x02\x02\n\xDB\x03\x02\x02\x02\f\xF3\x03" +
		"\x02\x02\x02\x0E\xFA\x03\x02\x02\x02\x10\u0111\x03\x02\x02\x02\x12\u0128" +
		"\x03\x02\x02\x02\x14\u012E\x03\x02\x02\x02\x16\u0138\x03\x02\x02\x02\x18" +
		"\u0142\x03\x02\x02\x02\x1A\u0147\x03\x02\x02\x02\x1C\u0150\x03\x02\x02" +
		"\x02\x1E\u0161\x03\x02\x02\x02 \u0163\x03\x02\x02\x02\"\u016B\x03\x02" +
		"\x02\x02$\u0173\x03\x02\x02\x02&\u0178\x03\x02\x02\x02(\u0181\x03\x02" +
		"\x02\x02*\u0186\x03\x02\x02\x02,\u0188\x03\x02\x02\x02.\u0194\x03\x02" +
		"\x02\x020\u0197\x03\x02\x02\x022\u01A3\x03\x02\x02\x024\u01AF\x03\x02" +
		"\x02\x026\u01B6\x03\x02\x02\x028\u01C0\x03\x02\x02\x02:\u01C2\x03\x02" +
		"\x02\x02<\u01C8\x03\x02\x02\x02>\u01DE\x03\x02\x02\x02@\u01E0\x03\x02" +
		"\x02\x02B\u01E8\x03\x02\x02\x02D\u01F4\x03\x02\x02\x02F\u01FE\x03\x02" +
		"\x02\x02H\u0202\x03\x02\x02\x02J\u020B\x03\x02\x02\x02L\u0211\x03\x02" +
		"\x02\x02N\u0213\x03\x02\x02\x02P\u021C\x03\x02\x02\x02R\u021E\x03\x02" +
		"\x02\x02T\u022C\x03\x02\x02\x02V\u0233\x03\x02\x02\x02X\u0237\x03\x02" +
		"\x02\x02Z\u0240\x03\x02\x02\x02\\\u024D\x03\x02\x02\x02^\u0253\x03\x02" +
		"\x02\x02`\u0255\x03\x02\x02\x02b\u026C\x03\x02\x02\x02d\u0271\x03\x02" +
		"\x02\x02f\u0276\x03\x02\x02\x02h\u0280\x03\x02\x02\x02j\u0287\x03\x02" +
		"\x02\x02l\u028F\x03\x02\x02\x02n\u0299\x03\x02\x02\x02p\u029E\x03\x02" +
		"\x02\x02r\u02A6\x03\x02\x02\x02t\u02AC\x03\x02\x02\x02v\u02C2\x03\x02" +
		"\x02\x02x\u02CC\x03\x02\x02\x02z\u02D7\x03\x02\x02\x02|\u02DB\x03\x02" +
		"\x02\x02~\u02DF\x03\x02\x02\x02\x80\u02E2\x03\x02\x02\x02\x82\u02F0\x03" +
		"\x02\x02\x02\x84\u02FD\x03\x02\x02\x02\x86\u0301\x03\x02\x02\x02\x88\u0303" +
		"\x03\x02\x02\x02\x8A\u0307\x03\x02\x02\x02\x8C\u030C\x03\x02\x02\x02\x8E" +
		"\u0312\x03\x02\x02\x02\x90\u0314\x03\x02\x02\x02\x92\u0324\x03\x02\x02" +
		"\x02\x94\u0331\x03\x02\x02\x02\x96\u033A\x03\x02\x02\x02\x98\u0340\x03" +
		"\x02\x02\x02\x9A\u0344\x03\x02\x02\x02\x9C\u034C\x03\x02\x02\x02\x9E\u0354" +
		"\x03\x02\x02\x02\xA0\u0364\x03\x02\x02\x02\xA2\u036A\x03\x02\x02\x02\xA4" +
		"\u036F\x03\x02\x02\x02\xA6\u038B\x03\x02\x02\x02\xA8\u038D\x03\x02\x02" +
		"\x02\xAA\u0390\x03\x02\x02\x02\xAC\u03A1\x03\x02\x02\x02\xAE\u03B9\x03" +
		"\x02\x02\x02\xB0\u03C3\x03\x02\x02\x02\xB2\u03CB\x03\x02\x02\x02\xB4\u03CE" +
		"\x03\x02\x02\x02\xB6\u03DF\x03\x02\x02\x02\xB8\u03E6\x03\x02\x02\x02\xBA" +
		"\u03F3\x03\x02\x02\x02\xBC\u0400\x03\x02\x02\x02\xBE\u0410\x03\x02\x02" +
		"\x02\xC0\u041A\x03\x02\x02\x02\xC2\xC4\x05\x04\x03\x02\xC3\xC2\x03\x02" +
		"\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02" +
		"\x02\x02\xC6\xC8\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8\xC9\x07\x02" +
		"\x02\x03\xC9\x03\x03\x02\x02\x02\xCA\xD2\x05\x0E\b\x02\xCB\xD2\x05\xB4" +
		"[\x02\xCC\xD2\x05\xC0a\x02\xCD\xD2\x05\xBE`\x02\xCE\xD2\x05\n\x06\x02" +
		"\xCF\xD2\x05`1\x02\xD0\xD2\x05\xB6\\\x02\xD1\xCA\x03\x02\x02\x02\xD1\xCB" +
		"\x03\x02\x02\x02\xD1\xCC\x03\x02\x02\x02\xD1\xCD\x03\x02\x02\x02\xD1\xCE" +
		"\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD0\x03\x02\x02\x02\xD2\x05" +
		"\x03\x02\x02\x02\xD3\xD4\x07,\x02\x02\xD4\xD8\x07,\x02\x02\xD5\xD8\x07" +
		",\x02\x02\xD6\xD8\x07-\x02\x02\xD7\xD3\x03\x02\x02\x02\xD7\xD5\x03\x02" +
		"\x02\x02\xD7\xD6\x03\x02\x02\x02\xD8\x07\x03\x02\x02\x02\xD9\xDA\t\x02" +
		"\x02\x02\xDA\t\x03\x02\x02\x02\xDB\xDC\x07\x17\x02\x02\xDC\xDD\x05\b\x05" +
		"\x02\xDD\xE6\x077\x02\x02\xDE\xE3\x05\f\x07\x02\xDF\xE0\x07*\x02\x02\xE0" +
		"\xE2\x05\f\x07\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE5\x03\x02\x02\x02\xE3" +
		"\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5" +
		"\xE3\x03\x02\x02\x02\xE6\xDE\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8" +
		"\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA" +
		"\xEE\x078\x02\x02\xEB\xED\x05*\x16\x02\xEC\xEB\x03\x02\x02\x02\xED\xF0" +
		"\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1" +
		"\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xF2\x07)\x02\x02\xF2\v\x03" +
		"\x02\x02\x02\xF3\xF7\x05\b\x05\x02\xF4\xF6\x05*\x16\x02\xF5\xF4\x03\x02" +
		"\x02\x02\xF6\xF9\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02" +
		"\x02\x02\xF8\r\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFE\x05\x18" +
		"\r\x02\xFB\xFD\x05*\x16\x02\xFC\xFB\x03\x02\x02\x02\xFD\u0100\x03\x02" +
		"\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0105\x03" +
		"\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0104\x05 \x11\x02\u0102" +
		"\u0104\x05h5\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0102\x03\x02\x02\x02" +
		"\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106\x03" +
		"\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0108" +
		"\u010A\x054\x1B\x02\u0109\u0108\x03\x02\x02\x02\u0109\u010A\x03\x02\x02" +
		"\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010C\x07)\x02\x02\u010C\u010D" +
		"\x05\x10\t\x02\u010D\u010F\x07)\x02\x02\u010E\u0110\x07\x02\x02\x03\u010F" +
		"\u010E\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\x0F\x03\x02\x02" +
		"\x02\u0111\u0112\x07\x06\x02\x02\u0112\u0116\x05\b\x05\x02\u0113\u0115" +
		"\x05\x12\n\x02\u0114\u0113\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02" +
		"\u0116\u0117\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0117\u011C\x03" +
		"\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011B\x05\x16\f\x02\u011A" +
		"\u0119\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C\u011D\x03\x02" +
		"\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E" +
		"\u011C\x03\x02\x02\x02\u011F\u0121\x05\x14\v\x02\u0120\u011F\x03\x02\x02" +
		"\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0125\x03\x02\x02\x02\u0122\u0124" +
		"\x05*\x16\x02\u0123\u0122\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02" +
		"\u0125\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\x11\x03" +
		"\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0128\u012A\x05\b\x05\x02\u0129" +
		"\u012B\x05*\x16\x02\u012A\u0129\x03\x02\x02\x02\u012B\u012C\x03\x02\x02" +
		"\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\x13" +
		"\x03\x02\x02\x02\u012E\u012F\x07\x11\x02\x02\u012F\u0133\x077\x02\x02" +
		"\u0130\u0132\x05\x16\f\x02\u0131\u0130\x03\x02\x02\x02\u0132\u0135\x03" +
		"\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134" +
		"\u0136\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0136\u0137\x078\x02" +
		"\x02\u0137\x15\x03\x02\x02\x02\u0138\u013A\x05\b\x05\x02\u0139\u013B\x07" +
		"\b\x02\x02\u013A\u0139\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B" +
		"\u013F\x03\x02\x02\x02\u013C\u013E\x05*\x16\x02\u013D\u013C\x03\x02\x02" +
		"\x02\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140" +
		"\x03\x02\x02\x02\u0140\x17\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02" +
		"\u0142\u0143\x07\x05\x02\x02\u0143\u0145\x05\b\x05\x02\u0144\u0146\x05" +
		"\x1A\x0E\x02\u0145\u0144\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146" +
		"\x19\x03\x02\x02\x02\u0147\u0148\x07\x07\x02\x02\u0148\u014D\x05\x1C\x0F" +
		"\x02\u0149\u014A\x07*\x02\x02\u014A\u014C\x05\x1C\x0F\x02\u014B\u0149" +
		"\x03\x02\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02" +
		"\u014D\u014E\x03\x02\x02\x02\u014E\x1B\x03\x02\x02\x02\u014F\u014D\x03" +
		"\x02\x02\x02\u0150\u0151\x05\b\x05\x02\u0151\x1D\x03\x02\x02\x02\u0152" +
		"\u0153\x07\x10\x02\x02\u0153\u0162\x05\xBA^\x02\u0154\u0155\x07\x10\x02" +
		"\x02\u0155\u015E\x073\x02\x02\u0156\u015B\x05> \x02\u0157\u0158\x07*\x02" +
		"\x02\u0158\u015A\x05> \x02\u0159\u0157\x03\x02\x02\x02\u015A\u015D\x03" +
		"\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C" +
		"\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015E\u0156\x03\x02" +
		"\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160" +
		"\u0162\x074\x02\x02\u0161\u0152\x03\x02\x02\x02\u0161\u0154\x03\x02\x02" +
		"\x02\u0162\x1F\x03\x02\x02\x02\u0163\u0164\x07\f\x02\x02\u0164\u0168\x05" +
		"\b\x05\x02\u0165\u0167\x05*\x16\x02\u0166\u0165\x03\x02\x02\x02\u0167" +
		"\u016A\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02" +
		"\x02\x02\u0169!\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B\u016C" +
		"\x05$\x13\x02\u016C\u0170\x05\b\x05\x02\u016D\u016F\x05*\x16\x02\u016E" +
		"\u016D\x03\x02\x02\x02\u016F\u0172\x03\x02\x02\x02\u0170\u016E\x03\x02" +
		"\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171#\x03\x02\x02\x02\u0172\u0170" +
		"\x03\x02\x02\x02\u0173\u0176\x05\b\x05\x02\u0174\u0175\x07D\x02\x02\u0175" +
		"\u0177\x05\b\x05\x02\u0176\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02" +
		"\x02\u0177%\x03\x02\x02\x02\u0178\u017B\x05\b\x05\x02\u0179\u017A\x07" +
		",\x02\x02\u017A\u017C\x05\b\x05\x02\u017B\u0179\x03\x02\x02\x02\u017C" +
		"\u017D\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017D\u017B\x03\x02" +
		"\x02\x02\u017E\'\x03\x02\x02\x02\u017F\u0182\x05\b\x05\x02\u0180\u0182" +
		"\x05&\x14\x02\u0181\u017F\x03\x02\x02\x02\u0181\u0180\x03\x02\x02\x02" +
		"\u0182)\x03\x02\x02\x02\u0183\u0187\x05,\x17\x02\u0184\u0187\x052\x1A" +
		"\x02\u0185\u0187\x050\x19\x02\u0186\u0183\x03\x02\x02\x02\u0186\u0184" +
		"\x03\x02\x02\x02\u0186\u0185\x03\x02\x02\x02\u0187+\x03\x02\x02\x02\u0188" +
		"\u0189\t\x03\x02\x02\u0189\u0192\x05(\x15\x02\u018A\u018F\x058\x1D\x02" +
		"\u018B\u018C\x07*\x02\x02\u018C\u018E\x058\x1D\x02\u018D\u018B\x03\x02" +
		"\x02\x02\u018E\u0191\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u018F" +
		"\u018D\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02" +
		"\x02\x02\u0192\u018A\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193" +
		"-\x03\x02\x02\x02\u0194\u0195\x05$\x13\x02\u0195\u0196\x05\b\x05\x02\u0196" +
		"/\x03\x02\x02\x02\u0197\u0198\x07.\x02\x02\u0198\u01A1\x07\x1F\x02\x02" +
		"\u0199\u019E\x05.\x18\x02\u019A\u019B\x07*\x02\x02\u019B\u019D\x05.\x18" +
		"\x02\u019C\u019A\x03\x02\x02\x02\u019D\u01A0\x03\x02\x02\x02\u019E\u019F" +
		"\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019F\u01A2\x03\x02\x02\x02" +
		"\u01A0\u019E\x03\x02\x02\x02\u01A1\u0199\x03\x02\x02\x02\u01A1\u01A2\x03" +
		"\x02\x02\x02\u01A21\x03\x02\x02\x02\u01A3\u01A4\x07.\x02\x02\u01A4\u01AD" +
		"\x07\x1E\x02\x02\u01A5\u01AA\x058\x1D\x02\u01A6\u01A7\x07*\x02\x02\u01A7" +
		"\u01A9\x058\x1D\x02\u01A8\u01A6\x03\x02\x02\x02\u01A9\u01AC\x03\x02\x02" +
		"\x02\u01AA\u01AB\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB\u01AE" +
		"\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AD\u01A5\x03\x02\x02\x02" +
		"\u01AD\u01AE\x03\x02\x02\x02\u01AE3\x03\x02\x02\x02\u01AF\u01B3\x07\r" +
		"\x02\x02\u01B0\u01B2\x05*\x16\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2\u01B5" +
		"\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02" +
		"\u01B45\x03\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B6\u01B7\x07L\x02" +
		"\x02\u01B77\x03\x02\x02\x02\u01B8\u01C1\x05\xACW\x02\u01B9\u01C1\x05\x82" +
		"B\x02\u01BA\u01C1\x05> \x02\u01BB\u01C1\x05:\x1E\x02\u01BC\u01C1\x056" +
		"\x1C\x02\u01BD\u01BE\x05\b\x05\x02\u01BE\u01BF\x05\b\x05\x02\u01BF\u01C1" +
		"\x03\x02\x02\x02\u01C0\u01B8\x03\x02\x02\x02\u01C0\u01B9\x03\x02\x02\x02" +
		"\u01C0\u01BA\x03\x02\x02\x02\u01C0\u01BB\x03\x02\x02\x02\u01C0\u01BC\x03" +
		"\x02\x02\x02\u01C0\u01BD\x03\x02\x02\x02\u01C19\x03\x02\x02\x02\u01C2" +
		"\u01C3\x05L\'\x02\u01C3\u01C4\x07+\x02\x02\u01C4\u01C5\x05<\x1F\x02\u01C5" +
		";\x03\x02\x02\x02\u01C6\u01C9\x05> \x02\u01C7\u01C9\x05\x82B\x02\u01C8" +
		"\u01C6\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01C8\u01C7\x03\x02\x02\x02\u01C9=\x03\x02\x02\x02\u01CA\u01DF\x05\xBC" +
		"_\x02\u01CB\u01DF\x05Z.\x02\u01CC\u01DF\x05\xAEX\x02\u01CD\u01DF\x05L" +
		"\'\x02\u01CE\u01DF\x05\x1E\x10\x02\u01CF\u01DF\x05H%\x02\u01D0\u01DF\x05" +
		"\xB8]\x02\u01D1\u01DF\x05\xBA^\x02\u01D2\u01DF\x05@!\x02\u01D3\u01D4\x07" +
		"7\x02\x02\u01D4\u01D9\x05:\x1E\x02\u01D5\u01D6\x07*\x02\x02\u01D6\u01D8" +
		"\x05:\x1E\x02\u01D7\u01D5\x03\x02\x02\x02\u01D8\u01DB\x03\x02\x02\x02" +
		"\u01D9\u01DA\x03\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01DA\u01DC\x03" +
		"\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DC\u01DD\x078\x02\x02\u01DD" +
		"\u01DF\x03\x02\x02\x02\u01DE\u01CA\x03\x02\x02\x02\u01DE\u01CB\x03\x02" +
		"\x02\x02\u01DE\u01CC\x03\x02\x02\x02\u01DE\u01CD\x03\x02\x02\x02\u01DE" +
		"\u01CE\x03\x02\x02\x02\u01DE\u01CF\x03\x02\x02\x02\u01DE\u01D0\x03\x02" +
		"\x02\x02\u01DE\u01D1\x03\x02\x02\x02\u01DE\u01D2\x03\x02\x02\x02\u01DE" +
		"\u01D3\x03\x02\x02\x02\u01DF?\x03\x02\x02\x02\u01E0\u01E1\x07\x03\x02" +
		"\x02\u01E1\u01E2\x073\x02\x02\u01E2\u01E3\x05> \x02\u01E3\u01E4\x07*\x02" +
		"\x02\u01E4\u01E5\x07\x04\x02\x02\u01E5\u01E6\x05\x82B\x02\u01E6\u01E7" +
		"\x074\x02\x02\u01E7A\x03\x02\x02\x02\u01E8\u01E9\x07\x1B\x02\x02\u01E9" +
		"\u01EB\x073\x02\x02\u01EA\u01EC\x05\b\x05\x02\u01EB\u01EA\x03\x02\x02" +
		"\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EE" +
		"\x05\b\x05\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0\x07*\x02\x02\u01F0" +
		"\u01F1\x05> \x02\u01F1\u01F2\x074\x02\x02\u01F2\u01F3\x05\xACW\x02\u01F3" +
		"C\x03\x02\x02\x02\u01F4\u01F5\x07(\x02\x02\u01F5\u01F6\x073\x02\x02\u01F6" +
		"\u01F7\x05\b\x05\x02\u01F7\u01F8\x07*\x02\x02\u01F8\u01F9\x05> \x02\u01F9" +
		"\u01FA\x07*\x02\x02\u01FA\u01FB\x05> \x02\u01FB\u01FC\x074\x02\x02\u01FC" +
		"\u01FD\x05\xACW\x02\u01FDE\x03\x02\x02\x02\u01FE\u0200\x05H%\x02\u01FF" +
		"\u0201\x07)\x02\x02\u0200\u01FF\x03\x02\x02\x02\u0200\u0201\x03\x02\x02" +
		"\x02\u0201G\x03\x02\x02\x02\u0202\u0203\x07\x13\x02\x02\u0203\u0204\x07" +
		"3\x02\x02\u0204\u0205\x05\x82B\x02\u0205\u0206\x074\x02\x02\u0206\u0207" +
		"\x07\x15\x02\x02\u0207\u0208\x05> \x02\u0208\u0209\x07\x16\x02\x02\u0209" +
		"\u020A\x05> \x02\u020AI\x03\x02\x02\x02\u020B\u020C\t\x04\x02\x02\u020C" +
		"K\x03\x02\x02\x02\u020D\u0212\x05X-\x02\u020E\u0212\x05J&\x02\u020F\u0212" +
		"\x07K\x02\x02\u0210\u0212\x07J\x02\x02\u0211\u020D\x03\x02\x02\x02\u0211" +
		"\u020E\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02\u0211\u0210\x03\x02" +
		"\x02\x02\u0212M\x03\x02\x02\x02\u0213\u0214\x07;\x02\x02\u0214\u0215\x05" +
		"\b\x05\x02\u0215O\x03\x02\x02\x02\u0216\u021D\x05\b\x05\x02\u0217\u021D" +
		"\x05R*\x02\u0218\u021D\x05T+\x02\u0219\u021D\x05N(\x02\u021A\u021D\x05" +
		"\xBC_\x02\u021B\u021D\x05\xBA^\x02\u021C\u0216\x03\x02\x02\x02\u021C\u0217" +
		"\x03\x02\x02\x02\u021C\u0218\x03\x02\x02\x02\u021C\u0219\x03\x02\x02\x02" +
		"\u021C\u021A\x03\x02\x02\x02\u021C\u021B\x03\x02\x02\x02\u021DQ\x03\x02" +
		"\x02\x02\u021E\u021F\x05\b\x05\x02\u021F\u0228\x073\x02\x02\u0220\u0225" +
		"\x05V,\x02\u0221\u0222\x07*\x02\x02\u0222\u0224\x05V,\x02\u0223\u0221" +
		"\x03\x02\x02\x02\u0224\u0227\x03\x02\x02\x02\u0225\u0223\x03\x02\x02\x02" +
		"\u0225\u0226\x03\x02\x02\x02\u0226\u0229\x03\x02\x02\x02\u0227\u0225\x03" +
		"\x02\x02\x02\u0228\u0220\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229" +
		"\u022A\x03\x02\x02\x02\u022A\u022B\x074\x02\x02\u022BS\x03\x02\x02\x02" +
		"\u022C\u022D\x05\b\x05\x02\u022D\u022E\x075\x02\x02\u022E\u022F\x05V," +
		"\x02\u022F\u0230\x076\x02\x02\u0230U\x03\x02\x02\x02\u0231\u0232\x07Q" +
		"\x02\x02\u0232\u0234\x07+\x02\x02\u0233\u0231\x03\x02\x02\x02\u0233\u0234" +
		"\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0236\x058\x1D\x02" +
		"\u0236W\x03\x02\x02\x02\u0237\u023D\x05P)\x02\u0238\u0239\x05\x06\x04" +
		"\x02\u0239\u023A\x05P)\x02\u023A\u023C\x03\x02\x02\x02\u023B\u0238\x03" +
		"\x02\x02\x02\u023C\u023F\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D" +
		"\u023E\x03\x02\x02\x02\u023EY\x03\x02\x02\x02\u023F\u023D\x03\x02\x02" +
		"\x02\u0240\u0241\x072\x02\x02\u0241\u0243\x05\b\x05\x02\u0242\u0244\x05" +
		"\b\x05\x02\u0243\u0242\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244" +
		"\u0248\x03\x02\x02\x02\u0245\u0247\x05^0\x02\u0246\u0245\x03\x02\x02\x02" +
		"\u0247\u024A\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0248\u0249\x03" +
		"\x02\x02\x02\u0249\u024B\x03\x02\x02\x02\u024A\u0248\x03\x02\x02\x02\u024B" +
		"\u024C\x07)\x02\x02\u024C[\x03\x02\x02\x02\u024D\u024E\x05> \x02\u024E" +
		"\u024F\x05\b\x05\x02\u024F\u0250\x05> \x02\u0250]\x03\x02\x02\x02\u0251" +
		"\u0254\x05*\x16\x02\u0252\u0254\x05\xBC_\x02\u0253\u0251\x03\x02\x02\x02" +
		"\u0253\u0252\x03\x02\x02\x02\u0254_\x03\x02\x02\x02\u0255\u0256\t\x05" +
		"\x02\x02\u0256\u025C\x05\b\x05\x02\u0257\u025D\x05b2\x02\u0258\u0259\x07" +
		"3\x02\x02\u0259\u025A\x05n8\x02\u025A\u025B\x074\x02\x02\u025B\u025D\x03" +
		"\x02\x02\x02\u025C\u0257\x03\x02\x02\x02\u025C\u0258\x03\x02\x02\x02\u025D" +
		"\u025F\x03\x02\x02\x02\u025E\u0260\x05d3\x02\u025F\u025E\x03\x02\x02\x02" +
		"\u025F\u0260\x03\x02\x02\x02\u0260\u0262\x03\x02\x02\x02\u0261\u0263\x05" +
		"f4\x02\u0262\u0261\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0267" +
		"\x03\x02\x02\x02\u0264\u0266\x05*\x16\x02\u0265\u0264\x03\x02\x02\x02" +
		"\u0266\u0269\x03\x02\x02\x02\u0267\u0265\x03\x02\x02\x02\u0267\u0268\x03" +
		"\x02\x02\x02\u0268\u026A\x03\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u026A" +
		"\u026B\x07)\x02\x02\u026Ba\x03\x02\x02\x02\u026C\u026D\x07\x12\x02\x02" +
		"\u026D\u026E\x077\x02\x02\u026E\u026F\x05\xB2Z\x02\u026F\u0270\x078\x02" +
		"\x02\u0270c\x03\x02\x02\x02\u0271\u0272\x07\x1F\x02\x02\u0272\u0273\x07" +
		"7\x02\x02\u0273\u0274\x05\xB2Z\x02\u0274\u0275\x078\x02\x02\u0275e\x03" +
		"\x02\x02\x02\u0276\u0277\x07&\x02\x02\u0277\u027B\x077\x02\x02\u0278\u027A" +
		"\x05\xB4[\x02\u0279\u0278\x03\x02\x02\x02\u027A\u027D\x03\x02\x02\x02" +
		"\u027B\u0279\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C\u027E\x03" +
		"\x02\x02\x02\u027D\u027B\x03\x02\x02\x02\u027E\u027F\x078\x02\x02\u027F" +
		"g\x03\x02\x02\x02\u0280\u0284\x05l7\x02\u0281\u0283\x05*\x16\x02\u0282" +
		"\u0281\x03\x02\x02\x02\u0283\u0286\x03\x02\x02\x02\u0284\u0282\x03\x02" +
		"\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285i\x03\x02\x02\x02\u0286\u0284" +
		"\x03\x02\x02\x02\u0287\u0288\x05l7\x02\u0288\u028C\x07\b\x02\x02\u0289" +
		"\u028B\x05*\x16\x02\u028A\u0289\x03\x02\x02\x02\u028B\u028E\x03\x02\x02" +
		"\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028Dk\x03" +
		"\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F\u0290\t\x05\x02\x02\u0290" +
		"\u0296\x05\b\x05\x02\u0291\u0297\x05b2\x02\u0292\u0293\x073\x02\x02\u0293" +
		"\u0294\x05n8\x02\u0294\u0295\x074\x02\x02\u0295\u0297\x03\x02\x02\x02" +
		"\u0296\u0291\x03\x02\x02\x02\u0296\u0292\x03\x02\x02\x02\u0297m\x03\x02" +
		"\x02\x02\u0298\u029A\x05p9\x02\u0299\u0298\x03\x02\x02\x02\u0299\u029A" +
		"\x03\x02\x02\x02\u029A\u029C\x03\x02\x02\x02\u029B\u029D\x05t;\x02\u029C" +
		"\u029B\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029Do\x03\x02\x02" +
		"\x02\u029E\u02A3\x05r:\x02\u029F\u02A0\x07*\x02\x02\u02A0\u02A2\x05r:" +
		"\x02\u02A1\u029F\x03\x02\x02\x02\u02A2\u02A5\x03\x02\x02\x02\u02A3\u02A1" +
		"\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4q\x03\x02\x02\x02\u02A5" +
		"\u02A3\x03\x02\x02\x02\u02A6\u02A7\x05\b\x05\x02\u02A7\u02A9\x05\b\x05" +
		"\x02\u02A8\u02AA\x05x=\x02\u02A9\u02A8\x03\x02\x02\x02\u02A9\u02AA\x03" +
		"\x02\x02\x02\u02AAs\x03\x02\x02\x02\u02AB\u02AD\x07*\x02\x02\u02AC\u02AB" +
		"\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02" +
		"\u02AE\u02B7\x077\x02\x02\u02AF\u02B4\x05v<\x02\u02B0\u02B1\x07*\x02\x02" +
		"\u02B1\u02B3\x05v<\x02\u02B2\u02B0\x03\x02\x02\x02\u02B3\u02B6\x03\x02" +
		"\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5" +
		"\u02B8\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02AF\x03\x02" +
		"\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9" +
		"\u02BB\x078\x02\x02\u02BA\u02BC\x05\b\x05\x02\u02BB\u02BA\x03\x02\x02" +
		"\x02\u02BB\u02BC\x03\x02\x02\x02\u02BCu\x03\x02\x02\x02\u02BD\u02BE\x07" +
		"5\x02\x02\u02BE\u02BF\x05\b\x05\x02\u02BF\u02C0\x076\x02\x02\u02C0\u02C3" +
		"\x03\x02\x02\x02\u02C1\u02C3\x05\b\x05\x02\u02C2\u02BD\x03\x02\x02\x02" +
		"\u02C2\u02C1\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4\u02C5\x07" +
		"+\x02\x02\u02C5\u02C7\x05\b\x05\x02\u02C6\u02C8\x05\b\x05\x02\u02C7\u02C6" +
		"\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02CA\x03\x02\x02\x02" +
		"\u02C9\u02CB\x05x=\x02\u02CA\u02C9\x03\x02\x02\x02\u02CA\u02CB\x03\x02" +
		"\x02\x02\u02CBw\x03\x02\x02\x02\u02CC\u02CD\x077\x02\x02\u02CD\u02D2\x05" +
		"z>\x02\u02CE\u02CF\x07*\x02\x02\u02CF\u02D1\x05z>\x02\u02D0\u02CE\x03" +
		"\x02\x02\x02\u02D1\u02D4\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D2" +
		"\u02D3\x03\x02\x02\x02\u02D3\u02D5\x03\x02\x02\x02\u02D4\u02D2\x03\x02" +
		"\x02\x02\u02D5\u02D6\x078\x02\x02\u02D6y\x03\x02\x02\x02\u02D7\u02D9\x05" +
		"\b\x05\x02\u02D8\u02DA\x05> \x02\u02D9\u02D8\x03\x02\x02\x02\u02D9\u02DA" +
		"\x03\x02\x02\x02\u02DA{\x03\x02\x02\x02\u02DB\u02DD\x05~@\x02\u02DC\u02DE" +
		"\x05\x8CG\x02\u02DD\u02DC\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02" +
		"\u02DE}\x03\x02\x02\x02\u02DF\u02E0\x05\\/\x02\u02E0\x7F\x03\x02\x02\x02" +
		"\u02E1\u02E3\x05\x8CG\x02\u02E2\u02E1\x03\x02\x02\x02\u02E2\u02E3\x03" +
		"\x02\x02\x02\u02E3\u02E7\x03\x02\x02\x02\u02E4\u02E6\x05|?\x02\u02E5\u02E4" +
		"\x03\x02\x02\x02\u02E6\u02E9\x03\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02" +
		"\u02E7\u02E8\x03\x02\x02\x02\u02E8\x81\x03\x02\x02\x02\u02E9\u02E7\x03" +
		"\x02\x02\x02\u02EA\u02EB\bB\x01\x02\u02EB\u02EC\x073\x02\x02\u02EC\u02ED" +
		"\x05\x82B\x02\u02ED\u02EE\x074\x02\x02\u02EE\u02F1\x03\x02\x02\x02\u02EF" +
		"\u02F1\x05\x84C\x02\u02F0\u02EA\x03\x02\x02\x02\u02F0\u02EF\x03\x02\x02" +
		"\x02\u02F1\u02FA\x03\x02\x02\x02\u02F2\u02F3\f\x05\x02\x02\u02F3\u02F4" +
		"\x07C\x02\x02\u02F4\u02F9\x05\x82B\x06\u02F5\u02F6\f\x04\x02\x02\u02F6" +
		"\u02F7\x07D\x02\x02\u02F7\u02F9\x05\x82B\x05\u02F8\u02F2\x03\x02\x02\x02" +
		"\u02F8\u02F5\x03\x02\x02\x02\u02F9\u02FC\x03\x02\x02\x02\u02FA\u02F8\x03" +
		"\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\x83\x03\x02\x02\x02\u02FC" +
		"\u02FA\x03\x02\x02\x02\u02FD\u02FE\x05> \x02\u02FE\u02FF\x05\x86D\x02" +
		"\u02FF\u0300\x05> \x02\u0300\x85\x03\x02\x02\x02\u0301\u0302\t\x06\x02" +
		"\x02\u0302\x87\x03\x02\x02\x02\u0303\u0304\x05> \x02\u0304\u0305\x07F" +
		"\x02\x02\u0305\u0306\x05> \x02\u0306\x89\x03\x02\x02\x02\u0307\u0308\x05" +
		"> \x02\u0308\u0309\x07E\x02\x02\u0309\u030A\x05> \x02\u030A\x8B\x03\x02" +
		"\x02\x02\u030B\u030D\x05\x8EH\x02\u030C\u030B\x03\x02\x02\x02\u030D\u030E" +
		"\x03\x02\x02\x02\u030E\u030C\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02" +
		"\u030F\x8D\x03\x02\x02\x02\u0310\u0313\x05\x82B\x02\u0311\u0313\x05\xB0" +
		"Y\x02\u0312\u0310\x03\x02\x02\x02\u0312\u0311\x03\x02\x02\x02\u0313\x8F" +
		"\x03\x02\x02\x02\u0314\u0315\x07\"\x02\x02\u0315\u0316\x073\x02\x02\u0316" +
		"\u0317\x05> \x02\u0317\u0318\x074\x02\x02\u0318\u031C\x077\x02\x02\u0319" +
		"\u031B\x05\x94K\x02\u031A\u0319\x03\x02\x02\x02\u031B\u031E\x03\x02\x02" +
		"\x02\u031C\u031A\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D\u0320" +
		"\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031F\u0321\x05\x96L\x02" +
		"\u0320\u031F\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0322\x03" +
		"\x02\x02\x02\u0322\u0323\x078\x02\x02\u0323\x91\x03\x02\x02\x02\u0324" +
		"\u0325\x07\"\x02\x02\u0325\u0329\x077\x02\x02\u0326\u0328\x05\x94K\x02" +
		"\u0327\u0326\x03\x02\x02\x02\u0328\u032B\x03\x02\x02\x02\u0329\u0327\x03" +
		"\x02\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A\u032D\x03\x02\x02\x02\u032B" +
		"\u0329\x03\x02\x02\x02\u032C\u032E\x05\x96L\x02\u032D\u032C\x03\x02\x02" +
		"\x02\u032D\u032E\x03\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0330" +
		"\x078\x02\x02\u0330\x93\x03\x02\x02\x02\u0331\u0332\x07#\x02\x02\u0332" +
		"\u0333\x073\x02\x02\u0333\u0334\x058\x1D\x02\u0334\u0335\x074\x02\x02" +
		"\u0335\u0338\x07+\x02\x02\u0336\u0339\x05\xA6T\x02\u0337\u0339\x05\xAC" +
		"W\x02\u0338\u0336\x03\x02\x02\x02\u0338\u0337\x03\x02\x02\x02\u0339\x95" +
		"\x03\x02\x02\x02\u033A\u033B\x07$\x02\x02\u033B\u033E\x07+\x02\x02\u033C" +
		"\u033F\x05\xA6T\x02\u033D\u033F\x05\xACW\x02\u033E\u033C\x03\x02\x02\x02" +
		"\u033E\u033D\x03\x02\x02\x02\u033F\x97\x03\x02\x02\x02\u0340\u0342\x07" +
		"%\x02\x02\u0341\u0343\x07)\x02\x02\u0342\u0341\x03\x02\x02\x02\u0342\u0343" +
		"\x03\x02\x02\x02\u0343\x99\x03\x02\x02\x02\u0344\u034A\x05\x9CO\x02\u0345" +
		"\u0348\x07\x16\x02\x02\u0346\u0349\x05\xACW\x02\u0347\u0349\x05\xA6T\x02" +
		"\u0348\u0346\x03\x02\x02\x02\u0348\u0347\x03\x02\x02\x02\u0349\u034B\x03" +
		"\x02\x02\x02\u034A\u0345\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02\u034B" +
		"\x9B\x03\x02\x02\x02\u034C\u034D\x07\x14\x02\x02\u034D\u034E\x073\x02" +
		"\x02\u034E\u034F\x05\x8EH\x02\u034F\u0352\x074\x02\x02\u0350\u0353\x05" +
		"\xACW\x02\u0351\u0353\x05\xA6T\x02\u0352\u0350\x03\x02\x02\x02\u0352\u0351" +
		"\x03\x02\x02\x02\u0353\x9D\x03\x02\x02\x02\u0354\u0355\x07\x1C\x02\x02" +
		"\u0355\u0358\x073\x02\x02\u0356\u0359\x05\b\x05\x02\u0357\u0359\x05N(" +
		"\x02\u0358\u0356\x03\x02\x02\x02\u0358\u0357\x03\x02\x02\x02\u0359\u035A" +
		"\x03\x02\x02\x02\u035A\u035D\x07\x1D\x02\x02\u035B\u035E\x05> \x02\u035C" +
		"\u035E\x07\b\x02\x02\u035D\u035B\x03\x02\x02\x02\u035D\u035C\x03\x02\x02" +
		"\x02\u035E\u035F\x03\x02\x02\x02\u035F\u0362\x074\x02\x02\u0360\u0363" +
		"\x05\xACW\x02\u0361\u0363\x05\xA6T\x02\u0362\u0360\x03\x02\x02\x02\u0362" +
		"\u0361\x03\x02\x02\x02\u0363\x9F\x03\x02\x02\x02\u0364\u0365\x07\'\x02" +
		"\x02\u0365\u0366\x073\x02\x02\u0366\u0367\x05\x8EH\x02\u0367\u0368\x07" +
		"4\x02\x02\u0368\u0369\x05\xACW\x02\u0369\xA1\x03\x02\x02\x02\u036A\u036B" +
		"\x07\x1E\x02\x02\u036B\u036D\x05> \x02\u036C\u036E\x07)\x02\x02\u036D" +
		"\u036C\x03\x02\x02\x02\u036D\u036E\x03\x02\x02\x02\u036E\xA3\x03\x02\x02" +
		"\x02\u036F\u0370\x05X-\x02\u0370\xA5\x03\x02\x02\x02\u0371\u0373\x05\xA4" +
		"S\x02\u0372\u0374\x07)\x02\x02\u0373\u0372\x03\x02\x02\x02\u0373\u0374" +
		"\x03\x02\x02\x02\u0374\u038C\x03\x02\x02\x02\u0375\u0377\x05\x88E\x02" +
		"\u0376\u0378\x07)\x02\x02\u0377\u0376\x03\x02\x02\x02\u0377\u0378\x03" +
		"\x02\x02\x02\u0378\u038C\x03\x02\x02\x02\u0379\u037B\x05\x8AF\x02\u037A" +
		"\u037C\x07)\x02\x02\u037B\u037A\x03\x02\x02\x02\u037B\u037C\x03\x02\x02" +
		"\x02\u037C\u038C\x03\x02\x02\x02\u037D\u038C\x05D#\x02\u037E\u038C\x05" +
		"B\"\x02\u037F\u038C\x05\x9EP\x02\u0380\u038C\x05\xA2R\x02\u0381\u038C" +
		"\x05\x9AN\x02\u0382\u0384\x05\xAAV\x02\u0383\u0385\x07)\x02\x02\u0384" +
		"\u0383\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385\u038C\x03\x02" +
		"\x02\x02\u0386\u038C\x05\x92J\x02\u0387\u038C\x05\x98M\x02\u0388\u038C" +
		"\x05\x90I\x02\u0389\u038C\x05F$\x02\u038A\u038C\x05\xA0Q\x02\u038B\u0371" +
		"\x03\x02\x02\x02\u038B\u0375\x03\x02\x02\x02\u038B\u0379\x03\x02\x02\x02" +
		"\u038B\u037D\x03\x02\x02\x02\u038B\u037E\x03\x02\x02\x02\u038B\u037F\x03" +
		"\x02\x02\x02\u038B\u0380\x03\x02\x02\x02\u038B\u0381\x03\x02\x02\x02\u038B" +
		"\u0382\x03\x02\x02\x02\u038B\u0386\x03\x02\x02\x02\u038B\u0387\x03\x02" +
		"\x02\x02\u038B\u0388\x03\x02\x02\x02\u038B\u0389\x03\x02\x02\x02\u038B" +
		"\u038A\x03\x02\x02\x02\u038C\xA7\x03\x02\x02\x02\u038D\u038E\x07\x18\x02" +
		"\x02\u038E\u038F\x05\xACW\x02\u038F\xA9\x03\x02\x02\x02\u0390\u0391\x07" +
		"\x19\x02\x02\u0391\u0392\x073\x02\x02\u0392\u0393\x05\xA8U\x02\u0393\u0394" +
		"\x07\x1A\x02\x02\u0394\u0395\x073\x02\x02\u0395\u039A\x05\b\x05\x02\u0396" +
		"\u0397\x07*\x02\x02\u0397\u0399\x05\b\x05\x02\u0398\u0396\x03\x02\x02" +
		"\x02\u0399\u039C\x03\x02\x02\x02\u039A\u039B\x03\x02\x02\x02\u039A\u0398" +
		"\x03\x02\x02\x02\u039B\u039D\x03\x02\x02\x02\u039C\u039A\x03\x02\x02\x02" +
		"\u039D\u039E\x074\x02\x02\u039E\u039F\x05\xACW\x02\u039F\u03A0\x074\x02" +
		"\x02\u03A0\xAB\x03\x02\x02\x02\u03A1\u03A3\x077\x02\x02\u03A2\u03A4\x05" +
		"\xA6T\x02\u03A3\u03A2\x03\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5" +
		"\u03A3\x03\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6\u03A7\x03\x02" +
		"\x02\x02\u03A7\u03A8\x078\x02\x02\u03A8\xAD\x03\x02\x02\x02\u03A9\u03AA" +
		"\bX\x01\x02\u03AA\u03AB\x073\x02\x02\u03AB\u03AC\x05\xAEX\x02\u03AC\u03AD" +
		"\x074\x02\x02\u03AD\u03BA\x03\x02\x02\x02\u03AE\u03AF\x07I\x02\x02\u03AF" +
		"\u03BA\x05\xAEX\x06\u03B0\u03B1\x05X-\x02\u03B1\u03B2\x07I\x02\x02\u03B2" +
		"\u03B3\x05\xAEX\x05\u03B3\u03BA\x03\x02\x02\x02\u03B4\u03B5\x05X-\x02" +
		"\u03B5\u03B6\x07I\x02\x02\u03B6\u03B7\x05X-\x02\u03B7\u03BA\x03\x02\x02" +
		"\x02\u03B8\u03BA\x07N\x02\x02\u03B9\u03A9\x03\x02\x02\x02\u03B9\u03AE" +
		"\x03\x02\x02\x02\u03B9\u03B0\x03\x02\x02\x02\u03B9\u03B4\x03\x02\x02\x02" +
		"\u03B9\u03B8\x03\x02\x02\x02\u03BA\u03C0\x03\x02\x02\x02\u03BB\u03BC\f" +
		"\x07\x02\x02\u03BC\u03BD\x07I\x02\x02\u03BD\u03BF\x05\xAEX\b\u03BE\u03BB" +
		"\x03\x02\x02\x02\u03BF\u03C2\x03\x02\x02\x02\u03C0\u03BE\x03\x02\x02\x02" +
		"\u03C0\u03C1\x03\x02\x02\x02\u03C1\xAF\x03\x02\x02\x02\u03C2\u03C0\x03" +
		"\x02\x02\x02\u03C3\u03C4\x05\b\x05\x02\u03C4\u03C5\x073\x02\x02\u03C5" +
		"\u03C6\x05\x80A\x02\u03C6\u03C7\x074\x02\x02\u03C7\xB1\x03\x02\x02\x02" +
		"\u03C8\u03CA\x05\"\x12\x02\u03C9\u03C8\x03\x02\x02\x02\u03CA\u03CD\x03" +
		"\x02\x02\x02\u03CB\u03C9\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC" +
		"\xB3\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CE\u03CF\x05\b\x05" +
		"\x02\u03CF\u03D2\x05\b\x05\x02\u03D0\u03D1\x07\x07\x02\x02\u03D1\u03D3" +
		"\x05\b\x05\x02\u03D2\u03D0\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02" +
		"\u03D3\u03D5\x03\x02\x02\x02\u03D4\u03D6\x05> \x02\u03D5\u03D4\x03\x02" +
		"\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6\u03DA\x03\x02\x02\x02\u03D7" +
		"\u03D9\x05*\x16\x02\u03D8\u03D7\x03\x02\x02\x02\u03D9\u03DC\x03\x02\x02" +
		"\x02\u03DA\u03D8\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03DD" +
		"\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DD\u03DE\x07)\x02\x02" +
		"\u03DE\xB5\x03\x02\x02\x02\u03DF\u03E2\x07\x0E\x02\x02\u03E0\u03E3\x05" +
		"h5\x02\u03E1\u03E3\x05\"\x12\x02\u03E2\u03E0\x03\x02\x02\x02\u03E2\u03E1" +
		"\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E5\x07)\x02\x02" +
		"\u03E5\xB7\x03\x02\x02\x02\u03E6\u03E8\x075\x02\x02\u03E7\u03E9\x05> " +
		"\x02\u03E8\u03E7\x03\x02\x02\x02\u03E8\u03E9\x03\x02\x02\x02\u03E9\u03EE" +
		"\x03\x02\x02\x02\u03EA\u03EB\x07*\x02\x02\u03EB\u03ED\x05> \x02\u03EC" +
		"\u03EA\x03\x02\x02\x02\u03ED\u03F0\x03\x02\x02\x02\u03EE\u03EC\x03\x02" +
		"\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F1\x03\x02\x02\x02\u03F0" +
		"\u03EE\x03\x02\x02\x02\u03F1\u03F2\x076\x02\x02\u03F2\xB9\x03\x02\x02" +
		"\x02\u03F3\u03F5\x077\x02\x02\u03F4\u03F6\x05> \x02\u03F5\u03F4\x03\x02" +
		"\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03FB\x03\x02\x02\x02\u03F7" +
		"\u03F8\x07*\x02\x02\u03F8\u03FA\x05> \x02\u03F9\u03F7\x03\x02\x02\x02" +
		"\u03FA\u03FD\x03\x02\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FB\u03FC\x03" +
		"\x02\x02\x02\u03FC\u03FE\x03\x02\x02\x02\u03FD\u03FB\x03\x02\x02\x02\u03FE" +
		"\u03FF\x078\x02\x02\u03FF\xBB\x03\x02\x02\x02\u0400\u0409\x07G\x02\x02" +
		"\u0401\u0403\n\x07\x02\x02\u0402\u0401\x03\x02\x02\x02\u0403\u0404\x03" +
		"\x02\x02\x02\u0404\u0402\x03\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405" +
		"\u0408\x03\x02\x02\x02\u0406\u0408\x05\xBC_\x02\u0407\u0402\x03\x02\x02" +
		"\x02\u0407\u0406\x03\x02\x02\x02\u0408\u040B\x03\x02\x02\x02\u0409\u040A" +
		"\x03\x02\x02\x02\u0409\u0407\x03\x02\x02\x02\u040A\u040C\x03\x02\x02\x02" +
		"\u040B\u0409\x03\x02\x02\x02\u040C\u040E\x07H\x02\x02\u040D\u040F\x07" +
		"\x02\x02\x03\u040E\u040D\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02\u040F" +
		"\xBD\x03\x02\x02\x02\u0410\u0411\x07\x0F\x02\x02\u0411\u0415\x05\b\x05" +
		"\x02\u0412\u0414\x05*\x16\x02\u0413\u0412\x03\x02\x02\x02\u0414\u0417" +
		"\x03\x02\x02\x02\u0415\u0413\x03\x02\x02\x02\u0415\u0416\x03\x02\x02\x02" +
		"\u0416\u0418\x03\x02\x02\x02\u0417\u0415\x03\x02\x02\x02\u0418\u0419\x07" +
		")\x02\x02\u0419\xBF\x03\x02\x02\x02\u041A\u041D\x07\x0F\x02\x02\u041B" +
		"\u041E\x05\b\x05\x02\u041C\u041E\x07\b\x02\x02\u041D\u041B\x03\x02\x02" +
		"\x02\u041D\u041C\x03\x02\x02\x02\u041E\u0424\x03\x02\x02\x02\u041F\u0423" +
		"\x05 \x11\x02\u0420\u0423\x05j6\x02\u0421\u0423\x05\"\x12\x02\u0422\u041F" +
		"\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02\u0422\u0421\x03\x02\x02\x02" +
		"\u0423\u0426\x03\x02\x02\x02\u0424\u0422\x03\x02\x02\x02\u0424\u0425\x03" +
		"\x02\x02\x02\u0425\u0427\x03\x02\x02\x02\u0426\u0424\x03\x02\x02\x02\u0427" +
		"\u0428\x07)\x02\x02\u0428\xC1\x03\x02\x02\x02|\xC5\xD1\xD7\xE3\xE8\xEE" +
		"\xF7\xFE\u0103\u0105\u0109\u010F\u0116\u011C\u0120\u0125\u012C\u0133\u013A" +
		"\u013F\u0145\u014D\u015B\u015E\u0161\u0168\u0170\u0176\u017D\u0181\u0186" +
		"\u018F\u0192\u019E\u01A1\u01AA\u01AD\u01B3\u01C0\u01C8\u01D9\u01DE\u01EB" +
		"\u0200\u0211\u021C\u0225\u0228\u0233\u023D\u0243\u0248\u0253\u025C\u025F" +
		"\u0262\u0267\u027B\u0284\u028C\u0296\u0299\u029C\u02A3\u02A9\u02AC\u02B4" +
		"\u02B7\u02BB\u02C2\u02C7\u02CA\u02D2\u02D9\u02DD\u02E2\u02E7\u02F0\u02F8" +
		"\u02FA\u030E\u0312\u031C\u0320\u0329\u032D\u0338\u033E\u0342\u0348\u034A" +
		"\u0352\u0358\u035D\u0362\u036D\u0373\u0377\u037B\u0384\u038B\u039A\u03A5" +
		"\u03B9\u03C0\u03CB\u03D2\u03D5\u03DA\u03E2\u03E8\u03EE\u03F5\u03FB\u0404" +
		"\u0407\u0409\u040E\u0415\u041D\u0422\u0424";
	public static readonly _serializedATN: string = Utils.join(
		[
			YmlParser._serializedATNSegment0,
			YmlParser._serializedATNSegment1,
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

export class KaoFileContext extends ParserRuleContext {
	public _entities: YmlEntityContext;
	public EOF(): TerminalNode { return this.getToken(YmlParser.EOF, 0); }
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterKaoFile) {
			listener.enterKaoFile(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitKaoFile) {
			listener.exitKaoFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public yenum(): YenumContext | undefined {
		return this.tryGetRuleContext(0, YenumContext);
	}
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	public externDeclaration(): ExternDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ExternDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_ymlEntity; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterYmlEntity) {
			listener.enterYmlEntity(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitYmlEntity) {
			listener.exitYmlEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterExpressionMarker) {
			listener.enterExpressionMarker(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitExpressionMarker) {
			listener.exitExpressionMarker(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitExpressionMarker) {
			return visitor.visitExpressionMarker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YmlIdContext extends ParserRuleContext {
	public YMLID(): TerminalNode | undefined { return this.tryGetToken(YmlParser.YMLID, 0); }
	public ARGS(): TerminalNode | undefined { return this.tryGetToken(YmlParser.ARGS, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(YmlParser.LOCAL, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(YmlParser.RETURN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_ymlId; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterYmlId) {
			listener.enterYmlId(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitYmlId) {
			listener.exitYmlId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterYenum) {
			listener.enterYenum(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitYenum) {
			listener.exitYenum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterEnumElement) {
			listener.enterEnumElement(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitEnumElement) {
			listener.exitEnumElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitEnumElement) {
			return visitor.visitEnumElement(this);
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterClassImplementation) {
			listener.enterClassImplementation(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitClassImplementation) {
			listener.exitClassImplementation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterAttributeImplementation) {
			listener.enterAttributeImplementation(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitAttributeImplementation) {
			listener.exitAttributeImplementation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterOverride) {
			listener.enterOverride(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitOverride) {
			listener.exitOverride(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterOverrideInstruction) {
			listener.enterOverrideInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitOverrideInstruction) {
			listener.exitOverrideInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterClassDeclarationIntro) {
			listener.enterClassDeclarationIntro(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitClassDeclarationIntro) {
			listener.exitClassDeclarationIntro(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterExtendsBlock) {
			listener.enterExtendsBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitExtendsBlock) {
			listener.exitExtendsBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterParentClassName) {
			listener.enterParentClassName(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitParentClassName) {
			listener.exitParentClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterSynonym) {
			listener.enterSynonym(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitSynonym) {
			listener.exitSynonym(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterClassAttributeDeclaration) {
			listener.enterClassAttributeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitClassAttributeDeclaration) {
			listener.exitClassAttributeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterMemberDeclaration) {
			listener.enterMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitMemberDeclaration) {
			listener.exitMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public COND_OR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.COND_OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_memberType; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterMemberType) {
			listener.enterMemberType(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitMemberType) {
			listener.exitMemberType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterPath) {
			listener.enterPath(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitPath) {
			listener.exitPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterYmlIdOrPath) {
			listener.enterYmlIdOrPath(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitYmlIdOrPath) {
			listener.exitYmlIdOrPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitYmlIdOrPath) {
			return visitor.visitYmlIdOrPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public commonField(): CommonFieldContext | undefined {
		return this.tryGetRuleContext(0, CommonFieldContext);
	}
	public returnField(): ReturnFieldContext | undefined {
		return this.tryGetRuleContext(0, ReturnFieldContext);
	}
	public localField(): LocalFieldContext | undefined {
		return this.tryGetRuleContext(0, LocalFieldContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_field; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommonFieldContext extends ParserRuleContext {
	public _fieldArrow: Token;
	public _optionName: YmlIdOrPathContext;
	public _valueOrCondition: ValueOrConditionContext;
	public _optionValues: ValueOrConditionContext[] = [];
	public ymlIdOrPath(): YmlIdOrPathContext {
		return this.getRuleContext(0, YmlIdOrPathContext);
	}
	public FIELD_INTRO(): TerminalNode | undefined { return this.tryGetToken(YmlParser.FIELD_INTRO, 0); }
	public REPLACE_FIELD_VALUE_INTRO(): TerminalNode | undefined { return this.tryGetToken(YmlParser.REPLACE_FIELD_VALUE_INTRO, 0); }
	public REMOVE_FIELD(): TerminalNode | undefined { return this.tryGetToken(YmlParser.REMOVE_FIELD, 0); }
	public ADD_FIELD(): TerminalNode | undefined { return this.tryGetToken(YmlParser.ADD_FIELD, 0); }
	public valueOrCondition(): ValueOrConditionContext[];
	public valueOrCondition(i: number): ValueOrConditionContext;
	public valueOrCondition(i?: number): ValueOrConditionContext | ValueOrConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueOrConditionContext);
		} else {
			return this.getRuleContext(i, ValueOrConditionContext);
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
	public get ruleIndex(): number { return YmlParser.RULE_commonField; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterCommonField) {
			listener.enterCommonField(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitCommonField) {
			listener.exitCommonField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterLocal_variable_decl) {
			listener.enterLocal_variable_decl(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitLocal_variable_decl) {
			listener.exitLocal_variable_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterLocalField) {
			listener.enterLocalField(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitLocalField) {
			listener.exitLocalField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public _valueOrCondition: ValueOrConditionContext;
	public _optionValues: ValueOrConditionContext[] = [];
	public FIELD_INTRO(): TerminalNode { return this.getToken(YmlParser.FIELD_INTRO, 0); }
	public RETURN(): TerminalNode { return this.getToken(YmlParser.RETURN, 0); }
	public valueOrCondition(): ValueOrConditionContext[];
	public valueOrCondition(i: number): ValueOrConditionContext;
	public valueOrCondition(i?: number): ValueOrConditionContext | ValueOrConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueOrConditionContext);
		} else {
			return this.getRuleContext(i, ValueOrConditionContext);
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
	public get ruleIndex(): number { return YmlParser.RULE_returnField; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterReturnField) {
			listener.enterReturnField(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitReturnField) {
			listener.exitReturnField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterClassPropertiesBlock) {
			listener.enterClassPropertiesBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitClassPropertiesBlock) {
			listener.exitClassPropertiesBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterDocumentation) {
			listener.enterDocumentation(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitDocumentation) {
			listener.exitDocumentation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitDocumentation) {
			return visitor.visitDocumentation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueOrConditionContext extends ParserRuleContext {
	public _type: YmlIdContext;
	public _name: YmlIdContext;
	public actionBlock(): ActionBlockContext | undefined {
		return this.tryGetRuleContext(0, ActionBlockContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_valueOrCondition; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterValueOrCondition) {
			listener.enterValueOrCondition(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitValueOrCondition) {
			listener.exitValueOrCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitValueOrCondition) {
			return visitor.visitValueOrCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HashMapKeyValueContext extends ParserRuleContext {
	public nonArithmeticValue(): NonArithmeticValueContext {
		return this.getRuleContext(0, NonArithmeticValueContext);
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterHashMapKeyValue) {
			listener.enterHashMapKeyValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitHashMapKeyValue) {
			listener.exitHashMapKeyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitHashMapKeyValue) {
			return visitor.visitHashMapKeyValue(this);
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterHashMapValue) {
			listener.enterHashMapValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitHashMapValue) {
			listener.exitHashMapValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public applyCollection(): ApplyCollectionContext | undefined {
		return this.tryGetRuleContext(0, ApplyCollectionContext);
	}
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPEN_BRACE, 0); }
	public hashMapKeyValue(): HashMapKeyValueContext[];
	public hashMapKeyValue(i: number): HashMapKeyValueContext;
	public hashMapKeyValue(i?: number): HashMapKeyValueContext | HashMapKeyValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HashMapKeyValueContext);
		} else {
			return this.getRuleContext(i, HashMapKeyValueContext);
		}
	}
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.CLOSE_BRACE, 0); }
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
	public get ruleIndex(): number { return YmlParser.RULE_value; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApplyCollectionContext extends ParserRuleContext {
	public APPLY_COLLECTION(): TerminalNode { return this.getToken(YmlParser.APPLY_COLLECTION, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public COMMA(): TerminalNode { return this.getToken(YmlParser.COMMA, 0); }
	public WHERE(): TerminalNode { return this.getToken(YmlParser.WHERE, 0); }
	public combinedComparison(): CombinedComparisonContext {
		return this.getRuleContext(0, CombinedComparisonContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_applyCollection; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterApplyCollection) {
			listener.enterApplyCollection(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitApplyCollection) {
			listener.exitApplyCollection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitApplyCollection) {
			return visitor.visitApplyCollection(this);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_forEach; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_forEach) {
			listener.enterInstruction_forEach(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_forEach) {
			listener.exitInstruction_forEach(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public actionBlock(): ActionBlockContext {
		return this.getRuleContext(0, ActionBlockContext);
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_for) {
			listener.enterInstruction_for(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_for) {
			listener.exitInstruction_for(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(YmlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_ifExprBlock; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_ifExprBlock) {
			listener.enterInstruction_ifExprBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_ifExprBlock) {
			listener.exitInstruction_ifExprBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterIfExprBlock) {
			listener.enterIfExprBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitIfExprBlock) {
			listener.exitIfExprBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitBool) {
			return visitor.visitBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonArithmeticValueContext extends ParserRuleContext {
	public chainedCall(): ChainedCallContext | undefined {
		return this.tryGetRuleContext(0, ChainedCallContext);
	}
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterNonArithmeticValue) {
			listener.enterNonArithmeticValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitNonArithmeticValue) {
			listener.exitNonArithmeticValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstanciationVariable) {
			listener.enterInstanciationVariable(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstanciationVariable) {
			listener.exitInstanciationVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitInstanciationVariable) {
			return visitor.visitInstanciationVariable(this);
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
	public indexedCall(): IndexedCallContext | undefined {
		return this.tryGetRuleContext(0, IndexedCallContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_expression; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexedCallContext extends ParserRuleContext {
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public OPEN_BRACKET(): TerminalNode { return this.getToken(YmlParser.OPEN_BRACKET, 0); }
	public functionArgument(): FunctionArgumentContext {
		return this.getRuleContext(0, FunctionArgumentContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(YmlParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_indexedCall; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterIndexedCall) {
			listener.enterIndexedCall(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitIndexedCall) {
			listener.exitIndexedCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitIndexedCall) {
			return visitor.visitIndexedCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionArgumentContext extends ParserRuleContext {
	public _argKey: Token;
	public valueOrCondition(): ValueOrConditionContext {
		return this.getRuleContext(0, ValueOrConditionContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(YmlParser.COLON, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(YmlParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_functionArgument; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterFunctionArgument) {
			listener.enterFunctionArgument(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitFunctionArgument) {
			listener.exitFunctionArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitFunctionArgument) {
			return visitor.visitFunctionArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChainedCallContext extends ParserRuleContext {
	public _marker: ExpressionMarkerContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterChainedCall) {
			listener.enterChainedCall(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitChainedCall) {
			listener.exitChainedCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterInlineDeclaration) {
			listener.enterInlineDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInlineDeclaration) {
			listener.exitInlineDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterInlineOperation) {
			listener.enterInlineOperation(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInlineOperation) {
			listener.exitInlineOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterFieldValue) {
			listener.enterFieldValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitFieldValue) {
			listener.exitFieldValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterArgsBlock) {
			listener.enterArgsBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitArgsBlock) {
			listener.exitArgsBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterLocalBlock) {
			listener.enterLocalBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitLocalBlock) {
			listener.exitLocalBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterStaticBlock) {
			listener.enterStaticBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitStaticBlock) {
			listener.exitStaticBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterMethodCompleteDeclaration) {
			listener.enterMethodCompleteDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitMethodCompleteDeclaration) {
			listener.exitMethodCompleteDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterMethodIntro) {
			listener.enterMethodIntro(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitMethodIntro) {
			listener.exitMethodIntro(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterMandatoryArgs) {
			listener.enterMandatoryArgs(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitMandatoryArgs) {
			listener.exitMandatoryArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitMandatoryArgs) {
			return visitor.visitMandatoryArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MandatoryArgDeclContext extends ParserRuleContext {
	public _argType: YmlIdContext;
	public _argName: YmlIdContext;
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterMandatoryArgDecl) {
			listener.enterMandatoryArgDecl(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitMandatoryArgDecl) {
			listener.exitMandatoryArgDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterOptionalArgs) {
			listener.enterOptionalArgs(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitOptionalArgs) {
			listener.exitOptionalArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterOptionalArgDecl) {
			listener.enterOptionalArgDecl(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitOptionalArgDecl) {
			listener.exitOptionalArgDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterArgOptionList) {
			listener.enterArgOptionList(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitArgOptionList) {
			listener.exitArgOptionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterArgOptionBlock) {
			listener.enterArgOptionBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitArgOptionBlock) {
			listener.exitArgOptionBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterOrder1Block) {
			listener.enterOrder1Block(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitOrder1Block) {
			listener.exitOrder1Block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstanciationCondition) {
			listener.enterInstanciationCondition(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstanciationCondition) {
			listener.exitInstanciationCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterOrder1FullCondition) {
			listener.enterOrder1FullCondition(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitOrder1FullCondition) {
			listener.exitOrder1FullCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitOrder1FullCondition) {
			return visitor.visitOrder1FullCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CombinedComparisonContext extends ParserRuleContext {
	public _leftCondition: CombinedComparisonContext;
	public _rightCondition: CombinedComparisonContext;
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPEN_PAR, 0); }
	public combinedComparison(): CombinedComparisonContext[];
	public combinedComparison(i: number): CombinedComparisonContext;
	public combinedComparison(i?: number): CombinedComparisonContext | CombinedComparisonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CombinedComparisonContext);
		} else {
			return this.getRuleContext(i, CombinedComparisonContext);
		}
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.CLOSE_PAR, 0); }
	public COND_AND(): TerminalNode | undefined { return this.tryGetToken(YmlParser.COND_AND, 0); }
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterCombinedComparison) {
			listener.enterCombinedComparison(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitCombinedComparison) {
			listener.exitCombinedComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_multivaluedAssignmentContext extends ParserRuleContext {
	public _leftHand: ValueContext;
	public _rightHand: ValueContext;
	public MULTIVALUED_ASSIGNMENT(): TerminalNode { return this.getToken(YmlParser.MULTIVALUED_ASSIGNMENT, 0); }
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
	public get ruleIndex(): number { return YmlParser.RULE_instruction_multivaluedAssignment; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_multivaluedAssignment) {
			listener.enterInstruction_multivaluedAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_multivaluedAssignment) {
			listener.exitInstruction_multivaluedAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitInstruction_multivaluedAssignment) {
			return visitor.visitInstruction_multivaluedAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_assignmentContext extends ParserRuleContext {
	public _leftHand: ValueContext;
	public _rightHand: ValueContext;
	public EQUAL_ASSIGNMENT(): TerminalNode { return this.getToken(YmlParser.EQUAL_ASSIGNMENT, 0); }
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
	public get ruleIndex(): number { return YmlParser.RULE_instruction_assignment; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_assignment) {
			listener.enterInstruction_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_assignment) {
			listener.exitInstruction_assignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitInstruction_assignment) {
			return visitor.visitInstruction_assignment(this);
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterConditionBlock) {
			listener.enterConditionBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitConditionBlock) {
			listener.exitConditionBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterOrder0Condition) {
			listener.enterOrder0Condition(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitOrder0Condition) {
			listener.exitOrder0Condition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitOrder0Condition) {
			return visitor.visitOrder0Condition(this);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_switchCase_withValue; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_switchCase_withValue) {
			listener.enterInstruction_switchCase_withValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_switchCase_withValue) {
			listener.exitInstruction_switchCase_withValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_switchCase_asIf) {
			listener.enterInstruction_switchCase_asIf(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_switchCase_asIf) {
			listener.exitInstruction_switchCase_asIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitInstruction_switchCase_asIf) {
			return visitor.visitInstruction_switchCase_asIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionCaseContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(YmlParser.CASE, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public valueOrCondition(): ValueOrConditionContext {
		return this.getRuleContext(0, ValueOrConditionContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public COLON(): TerminalNode { return this.getToken(YmlParser.COLON, 0); }
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	public actionBlock(): ActionBlockContext | undefined {
		return this.tryGetRuleContext(0, ActionBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instructionCase; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstructionCase) {
			listener.enterInstructionCase(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstructionCase) {
			listener.exitInstructionCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	public actionBlock(): ActionBlockContext | undefined {
		return this.tryGetRuleContext(0, ActionBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instructionDefault; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstructionDefault) {
			listener.enterInstructionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstructionDefault) {
			listener.exitInstructionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_break) {
			listener.enterInstruction_break(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_break) {
			listener.exitInstruction_break(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlParser.RULE_instruction_ifElse; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_ifElse) {
			listener.enterInstruction_ifElse(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_ifElse) {
			listener.exitInstruction_ifElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlParser.RULE_instruction_if; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_if) {
			listener.enterInstruction_if(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_if) {
			listener.exitInstruction_if(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitInstruction_if) {
			return visitor.visitInstruction_if(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_forallContext extends ParserRuleContext {
	public FORALL(): TerminalNode { return this.getToken(YmlParser.FORALL, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlParser.OPEN_PAR, 0); }
	public IN(): TerminalNode { return this.getToken(YmlParser.IN, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
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
	public get ruleIndex(): number { return YmlParser.RULE_instruction_forall; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_forall) {
			listener.enterInstruction_forall(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_forall) {
			listener.exitInstruction_forall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public actionBlock(): ActionBlockContext {
		return this.getRuleContext(0, ActionBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_while; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_while) {
			listener.enterInstruction_while(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_while) {
			listener.exitInstruction_while(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(YmlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_instruction_return; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_return) {
			listener.enterInstruction_return(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_return) {
			listener.exitInstruction_return(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_chainedCall) {
			listener.enterInstruction_chainedCall(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_chainedCall) {
			listener.exitInstruction_chainedCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_do) {
			listener.enterInstruction_do(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_do) {
			listener.exitInstruction_do(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterInstruction_try_catch) {
			listener.enterInstruction_try_catch(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitInstruction_try_catch) {
			listener.exitInstruction_try_catch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterActionBlock) {
			listener.enterActionBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitActionBlock) {
			listener.exitActionBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitActionBlock) {
			return visitor.visitActionBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArithmeticExpressionContext extends ParserRuleContext {
	public _leftExpression: ArithmeticExpressionContext;
	public _parenthizedExpression: ArithmeticExpressionContext;
	public _prefixedOperator: Token;
	public _infixedOperator: Token;
	public _rightExpression: ArithmeticExpressionContext;
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
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPERATOR, 0); }
	public chainedCall(): ChainedCallContext[];
	public chainedCall(i: number): ChainedCallContext;
	public chainedCall(i?: number): ChainedCallContext | ChainedCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ChainedCallContext);
		} else {
			return this.getRuleContext(i, ChainedCallContext);
		}
	}
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_arithmeticExpression; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterArithmeticExpression) {
			listener.enterArithmeticExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitArithmeticExpression) {
			listener.exitArithmeticExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterExistentialOperator) {
			listener.enterExistentialOperator(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitExistentialOperator) {
			listener.exitExistentialOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterVariableBlockContent) {
			listener.enterVariableBlockContent(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitVariableBlockContent) {
			listener.exitVariableBlockContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterStaticDeclaration) {
			listener.enterStaticDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitStaticDeclaration) {
			listener.exitStaticDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterExternDeclaration) {
			listener.enterExternDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitExternDeclaration) {
			listener.exitExternDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitArray) {
			return visitor.visitArray(this);
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterConstList) {
			listener.enterConstList(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitConstList) {
			listener.exitConstList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitConstList) {
			return visitor.visitConstList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GranuleContext extends ParserRuleContext {
	public OPEN_GRANULE(): TerminalNode[];
	public OPEN_GRANULE(i: number): TerminalNode;
	public OPEN_GRANULE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.OPEN_GRANULE);
		} else {
			return this.getToken(YmlParser.OPEN_GRANULE, i);
		}
	}
	public CLOSE_GRANULE(): TerminalNode[];
	public CLOSE_GRANULE(i: number): TerminalNode;
	public CLOSE_GRANULE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlParser.CLOSE_GRANULE);
		} else {
			return this.getToken(YmlParser.CLOSE_GRANULE, i);
		}
	}
	public granule(): GranuleContext[];
	public granule(i: number): GranuleContext;
	public granule(i?: number): GranuleContext | GranuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GranuleContext);
		} else {
			return this.getRuleContext(i, GranuleContext);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(YmlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlParser.RULE_granule; }
	// @Override
	public enterRule(listener: YmlListener): void {
		if (listener.enterGranule) {
			listener.enterGranule(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitGranule) {
			listener.exitGranule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterObjectComplete) {
			listener.enterObjectComplete(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitObjectComplete) {
			listener.exitObjectComplete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterClassComplete) {
			listener.enterClassComplete(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitClassComplete) {
			listener.exitClassComplete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
		if (visitor.visitClassComplete) {
			return visitor.visitClassComplete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


