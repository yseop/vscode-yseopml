// Generated from src/YmlToBdl.g4 by ANTLR 4.6-SNAPSHOT


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

import { YmlToBdlListener } from "./YmlToBdlListener";
import { YmlToBdlVisitor } from "./YmlToBdlVisitor";


export class YmlToBdlParser extends Parser {
	public static readonly INTERFACE = 1;
	public static readonly IMPLEMENTATION = 2;
	public static readonly EXTENDS = 3;
	public static readonly FUNCTION = 4;
	public static readonly METHOD = 5;
	public static readonly TEXT_METHOD = 6;
	public static readonly TEXT_FUNCTION = 7;
	public static readonly FIELD = 8;
	public static readonly CLASSPROPERTIES = 9;
	public static readonly EXTERN = 10;
	public static readonly COMPLETE = 11;
	public static readonly SYNONYM = 12;
	public static readonly OVERRIDE = 13;
	public static readonly ARGS = 14;
	public static readonly IF_EXPR = 15;
	public static readonly IF = 16;
	public static readonly THEN = 17;
	public static readonly ELSE = 18;
	public static readonly ENUM = 19;
	public static readonly FOREACH = 20;
	public static readonly RETURN = 21;
	public static readonly LOCAL = 22;
	public static readonly TRUE = 23;
	public static readonly FALSE = 24;
	public static readonly SWITCH = 25;
	public static readonly CASE = 26;
	public static readonly DEFAULT = 27;
	public static readonly BREAK = 28;
	public static readonly STATIC = 29;
	public static readonly SEMICOLON = 30;
	public static readonly COMMA = 31;
	public static readonly COLON = 32;
	public static readonly DOT = 33;
	public static readonly MULTIVALUED_EXPRESSION = 34;
	public static readonly FIELD_INTRO = 35;
	public static readonly REPLACE_FIELD_VALUE_INTRO = 36;
	public static readonly REMOVE_FIELD = 37;
	public static readonly ADD_FIELD = 38;
	public static readonly INLINE_DECL_INTRO = 39;
	public static readonly EQUAL_COMP = 40;
	public static readonly NOT_EQUALS = 41;
	public static readonly LESS_OR_EQUAL = 42;
	public static readonly GREATE_OR_EQUAL = 43;
	public static readonly STRICT_LESS = 44;
	public static readonly STRICT_GREAT = 45;
	public static readonly COND_AND = 46;
	public static readonly COND_OR = 47;
	public static readonly EQUAL_AFFECT = 48;
	public static readonly MULTIVALUED_AFFECT = 49;
	public static readonly OPEN_PAR = 50;
	public static readonly CLOSE_PAR = 51;
	public static readonly OPEN_BRACKET = 52;
	public static readonly CLOSE_BRACKET = 53;
	public static readonly OPEN_BRACE = 54;
	public static readonly CLOSE_BRACE = 55;
	public static readonly SINGLE_QUOTE = 56;
	public static readonly BACKSLASH = 57;
	public static readonly QUESTION_MARK = 58;
	public static readonly AT = 59;
	public static readonly OPEN_GRANULE = 60;
	public static readonly CLOSE_GRANULE = 61;
	public static readonly OPERATOR = 62;
	public static readonly DATE = 63;
	public static readonly STRING = 64;
	public static readonly DOCUMENTATION = 65;
	public static readonly WS = 66;
	public static readonly DOUBLE = 67;
	public static readonly INTEGER = 68;
	public static readonly YMLID = 69;
	public static readonly ID = 70;
	public static readonly PREPROCESSING = 71;
	public static readonly LINE_COMMENT = 72;
	public static readonly MULTILINE_COMMENT = 73;
	public static readonly GRANULE = 74;
	public static readonly RULE_expressionMarker = 0;
	public static readonly RULE_ymlId = 1;
	public static readonly RULE_kaoFile = 2;
	public static readonly RULE_ymlEntity = 3;
	public static readonly RULE_yenum = 4;
	public static readonly RULE_enumElement = 5;
	public static readonly RULE_classDeclaration = 6;
	public static readonly RULE_classImplementation = 7;
	public static readonly RULE_override = 8;
	public static readonly RULE_overrideInstruction = 9;
	public static readonly RULE_classDeclarationIntro = 10;
	public static readonly RULE_extendsBlock = 11;
	public static readonly RULE_parentClassName = 12;
	public static readonly RULE_synonym = 13;
	public static readonly RULE_classAttributeDeclaration = 14;
	public static readonly RULE_memberDeclaration = 15;
	public static readonly RULE_memberType = 16;
	public static readonly RULE_path = 17;
	public static readonly RULE_ymlIdOrPath = 18;
	public static readonly RULE_field = 19;
	public static readonly RULE_classPropertiesBlock = 20;
	public static readonly RULE_documentation = 21;
	public static readonly RULE_valueOrCondition = 22;
	public static readonly RULE_hashMapKeyValue = 23;
	public static readonly RULE_hashMapValue = 24;
	public static readonly RULE_value = 25;
	public static readonly RULE_instruction_forEach = 26;
	public static readonly RULE_instruction_ifExprBlock = 27;
	public static readonly RULE_ifExprBlock = 28;
	public static readonly RULE_bool = 29;
	public static readonly RULE_nonArithmeticValue = 30;
	public static readonly RULE_instanciationVariable = 31;
	public static readonly RULE_expression = 32;
	public static readonly RULE_functionCall = 33;
	public static readonly RULE_indexedCall = 34;
	public static readonly RULE_functionArgument = 35;
	public static readonly RULE_chainedCall = 36;
	public static readonly RULE_inlineDeclaration = 37;
	public static readonly RULE_inlineOperation = 38;
	public static readonly RULE_fieldValue = 39;
	public static readonly RULE_function = 40;
	public static readonly RULE_argsBlock = 41;
	public static readonly RULE_localBlock = 42;
	public static readonly RULE_staticBlock = 43;
	public static readonly RULE_methodDeclaration = 44;
	public static readonly RULE_methodIntro = 45;
	public static readonly RULE_argumentList = 46;
	public static readonly RULE_mandatoryArgs = 47;
	public static readonly RULE_mandatoryArgDecl = 48;
	public static readonly RULE_optionalArgs = 49;
	public static readonly RULE_optionalArgDecl = 50;
	public static readonly RULE_argOptionList = 51;
	public static readonly RULE_argOptionBlock = 52;
	public static readonly RULE_order1Block = 53;
	public static readonly RULE_instanciationCondition = 54;
	public static readonly RULE_order1FullCondition = 55;
	public static readonly RULE_combinedComparison = 56;
	public static readonly RULE_comparison = 57;
	public static readonly RULE_comparisonOperator = 58;
	public static readonly RULE_instruction_multivaluedAffectation = 59;
	public static readonly RULE_instruction_affectation = 60;
	public static readonly RULE_conditionBlock = 61;
	public static readonly RULE_order0Condition = 62;
	public static readonly RULE_instruction_switchCase_withValue = 63;
	public static readonly RULE_instruction_switchCase_asIf = 64;
	public static readonly RULE_instructionCase = 65;
	public static readonly RULE_instructionDefault = 66;
	public static readonly RULE_instruction_break = 67;
	public static readonly RULE_instruction_ifElse = 68;
	public static readonly RULE_instruction_if = 69;
	public static readonly RULE_instruction_return = 70;
	public static readonly RULE_instruction_chainedCall = 71;
	public static readonly RULE_instruction = 72;
	public static readonly RULE_actionBlock = 73;
	public static readonly RULE_arithmeticExpression = 74;
	public static readonly RULE_existentialOperator = 75;
	public static readonly RULE_variableBlockContent = 76;
	public static readonly RULE_staticDeclaration = 77;
	public static readonly RULE_externDeclaration = 78;
	public static readonly RULE_list = 79;
	public static readonly RULE_listWithBrace = 80;
	public static readonly RULE_granule = 81;
	public static readonly RULE_complete = 82;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expressionMarker", "ymlId", "kaoFile", "ymlEntity", "yenum", "enumElement", 
		"classDeclaration", "classImplementation", "override", "overrideInstruction", 
		"classDeclarationIntro", "extendsBlock", "parentClassName", "synonym", 
		"classAttributeDeclaration", "memberDeclaration", "memberType", "path", 
		"ymlIdOrPath", "field", "classPropertiesBlock", "documentation", "valueOrCondition", 
		"hashMapKeyValue", "hashMapValue", "value", "instruction_forEach", "instruction_ifExprBlock", 
		"ifExprBlock", "bool", "nonArithmeticValue", "instanciationVariable", 
		"expression", "functionCall", "indexedCall", "functionArgument", "chainedCall", 
		"inlineDeclaration", "inlineOperation", "fieldValue", "function", "argsBlock", 
		"localBlock", "staticBlock", "methodDeclaration", "methodIntro", "argumentList", 
		"mandatoryArgs", "mandatoryArgDecl", "optionalArgs", "optionalArgDecl", 
		"argOptionList", "argOptionBlock", "order1Block", "instanciationCondition", 
		"order1FullCondition", "combinedComparison", "comparison", "comparisonOperator", 
		"instruction_multivaluedAffectation", "instruction_affectation", "conditionBlock", 
		"order0Condition", "instruction_switchCase_withValue", "instruction_switchCase_asIf", 
		"instructionCase", "instructionDefault", "instruction_break", "instruction_ifElse", 
		"instruction_if", "instruction_return", "instruction_chainedCall", "instruction", 
		"actionBlock", "arithmeticExpression", "existentialOperator", "variableBlockContent", 
		"staticDeclaration", "externDeclaration", "list", "listWithBrace", "granule", 
		"complete",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'interface'", "'implementation'", "'extends'", undefined, 
		"'method'", "'textMethod'", "'TextFunction'", "'field'", "'classProperties'", 
		"'extern'", "'complete'", "'synonym'", "'override'", "'args'", "'ifExpr'", 
		"'if'", "'then'", "'else'", "'enum'", "'foreach'", "'return'", "'local'", 
		"'true'", "'false'", "'switch'", "'case'", "'default'", "'break'", "'static'", 
		"';'", "','", "':'", "'.'", "'>>'", "'-->'", "'==>'", "'---'", "'+++'", 
		"'->'", "'=='", "'!='", "'<='", "'>='", "'<'", "'>'", "'&&'", "'||'", 
		"'='", "':='", "'('", "')'", "'['", "']'", "'{'", "'}'", "'''", "'\\'", 
		"'?'", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INTERFACE", "IMPLEMENTATION", "EXTENDS", "FUNCTION", "METHOD", 
		"TEXT_METHOD", "TEXT_FUNCTION", "FIELD", "CLASSPROPERTIES", "EXTERN", 
		"COMPLETE", "SYNONYM", "OVERRIDE", "ARGS", "IF_EXPR", "IF", "THEN", "ELSE", 
		"ENUM", "FOREACH", "RETURN", "LOCAL", "TRUE", "FALSE", "SWITCH", "CASE", 
		"DEFAULT", "BREAK", "STATIC", "SEMICOLON", "COMMA", "COLON", "DOT", "MULTIVALUED_EXPRESSION", 
		"FIELD_INTRO", "REPLACE_FIELD_VALUE_INTRO", "REMOVE_FIELD", "ADD_FIELD", 
		"INLINE_DECL_INTRO", "EQUAL_COMP", "NOT_EQUALS", "LESS_OR_EQUAL", "GREATE_OR_EQUAL", 
		"STRICT_LESS", "STRICT_GREAT", "COND_AND", "COND_OR", "EQUAL_AFFECT", 
		"MULTIVALUED_AFFECT", "OPEN_PAR", "CLOSE_PAR", "OPEN_BRACKET", "CLOSE_BRACKET", 
		"OPEN_BRACE", "CLOSE_BRACE", "SINGLE_QUOTE", "BACKSLASH", "QUESTION_MARK", 
		"AT", "OPEN_GRANULE", "CLOSE_GRANULE", "OPERATOR", "DATE", "STRING", "DOCUMENTATION", 
		"WS", "DOUBLE", "INTEGER", "YMLID", "ID", "PREPROCESSING", "LINE_COMMENT", 
		"MULTILINE_COMMENT", "GRANULE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(YmlToBdlParser._LITERAL_NAMES, YmlToBdlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return YmlToBdlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "YmlToBdl.g4"; }

	// @Override
	public get ruleNames(): string[] { return YmlToBdlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return YmlToBdlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(YmlToBdlParser._ATN, this);
	}
	// @RuleVersion(0)
	public expressionMarker(): ExpressionMarkerContext {
		let _localctx: ExpressionMarkerContext = new ExpressionMarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, YmlToBdlParser.RULE_expressionMarker);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			_la = this._input.LA(1);
			if (!(_la === YmlToBdlParser.DOT || _la === YmlToBdlParser.MULTIVALUED_EXPRESSION)) {
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
	public ymlId(): YmlIdContext {
		let _localctx: YmlIdContext = new YmlIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, YmlToBdlParser.RULE_ymlId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.match(YmlToBdlParser.YMLID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 4, YmlToBdlParser.RULE_kaoFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.INTERFACE) | (1 << YmlToBdlParser.FUNCTION) | (1 << YmlToBdlParser.METHOD) | (1 << YmlToBdlParser.TEXT_METHOD) | (1 << YmlToBdlParser.TEXT_FUNCTION) | (1 << YmlToBdlParser.EXTERN) | (1 << YmlToBdlParser.COMPLETE) | (1 << YmlToBdlParser.ENUM))) !== 0) || _la === YmlToBdlParser.YMLID) {
				{
				{
				this.state = 170;
				_localctx._entities = this.ymlEntity();
				}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 176;
			this.match(YmlToBdlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 6, YmlToBdlParser.RULE_ymlEntity);
		try {
			this.state = 184;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlToBdlParser.INTERFACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 178;
				this.classDeclaration();
				}
				break;
			case YmlToBdlParser.YMLID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 179;
				this.staticDeclaration();
				}
				break;
			case YmlToBdlParser.COMPLETE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 180;
				this.complete();
				}
				break;
			case YmlToBdlParser.ENUM:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 181;
				this.yenum();
				}
				break;
			case YmlToBdlParser.FUNCTION:
			case YmlToBdlParser.METHOD:
			case YmlToBdlParser.TEXT_METHOD:
			case YmlToBdlParser.TEXT_FUNCTION:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 182;
				this.function();
				}
				break;
			case YmlToBdlParser.EXTERN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 183;
				this.externDeclaration();
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
	public yenum(): YenumContext {
		let _localctx: YenumContext = new YenumContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, YmlToBdlParser.RULE_yenum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(YmlToBdlParser.ENUM);
			this.state = 187;
			_localctx._yid = this.ymlId();
			this.state = 188;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 189;
				this.enumElement();
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === YmlToBdlParser.COMMA) {
					{
					{
					this.state = 190;
					this.match(YmlToBdlParser.COMMA);
					this.state = 191;
					this.enumElement();
					}
					}
					this.state = 196;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === YmlToBdlParser.YMLID);
			this.state = 201;
			this.match(YmlToBdlParser.CLOSE_BRACE);
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (YmlToBdlParser.FIELD_INTRO - 35)) | (1 << (YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO - 35)) | (1 << (YmlToBdlParser.REMOVE_FIELD - 35)) | (1 << (YmlToBdlParser.ADD_FIELD - 35)))) !== 0)) {
				{
				{
				this.state = 202;
				_localctx._fields = this.field();
				}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 208;
			this.match(YmlToBdlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 10, YmlToBdlParser.RULE_enumElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			_localctx._yid = this.ymlId();
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (YmlToBdlParser.FIELD_INTRO - 35)) | (1 << (YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO - 35)) | (1 << (YmlToBdlParser.REMOVE_FIELD - 35)) | (1 << (YmlToBdlParser.ADD_FIELD - 35)))) !== 0)) {
				{
				{
				this.state = 211;
				_localctx._fields = this.field();
				}
				}
				this.state = 216;
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
		this.enterRule(_localctx, 12, YmlToBdlParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.classDeclarationIntro();
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (YmlToBdlParser.FIELD_INTRO - 35)) | (1 << (YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO - 35)) | (1 << (YmlToBdlParser.REMOVE_FIELD - 35)) | (1 << (YmlToBdlParser.ADD_FIELD - 35)))) !== 0)) {
				{
				{
				this.state = 218;
				this.field();
				}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.METHOD) | (1 << YmlToBdlParser.TEXT_METHOD) | (1 << YmlToBdlParser.TEXT_FUNCTION) | (1 << YmlToBdlParser.FIELD))) !== 0)) {
				{
				this.state = 226;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case YmlToBdlParser.FIELD:
					{
					this.state = 224;
					this.classAttributeDeclaration();
					}
					break;
				case YmlToBdlParser.METHOD:
				case YmlToBdlParser.TEXT_METHOD:
				case YmlToBdlParser.TEXT_FUNCTION:
					{
					this.state = 225;
					this.methodDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.CLASSPROPERTIES) {
				{
				this.state = 231;
				this.classPropertiesBlock();
				}
			}

			this.state = 234;
			this.match(YmlToBdlParser.SEMICOLON);
			this.state = 235;
			this.classImplementation();
			this.state = 236;
			this.match(YmlToBdlParser.SEMICOLON);
			this.state = 238;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 237;
				this.match(YmlToBdlParser.EOF);
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
		this.enterRule(_localctx, 14, YmlToBdlParser.RULE_classImplementation);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(YmlToBdlParser.IMPLEMENTATION);
			this.state = 241;
			_localctx._className = this.ymlId();
			this.state = 245;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 242;
					this.overrideInstruction();
					}
					}
				}
				this.state = 247;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.OVERRIDE) {
				{
				this.state = 248;
				_localctx._overrideBlock = this.override();
				}
			}

			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (YmlToBdlParser.FIELD_INTRO - 35)) | (1 << (YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO - 35)) | (1 << (YmlToBdlParser.REMOVE_FIELD - 35)) | (1 << (YmlToBdlParser.ADD_FIELD - 35)))) !== 0)) {
				{
				{
				this.state = 251;
				_localctx._attributes = this.field();
				}
				}
				this.state = 256;
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
	public override(): OverrideContext {
		let _localctx: OverrideContext = new OverrideContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, YmlToBdlParser.RULE_override);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.match(YmlToBdlParser.OVERRIDE);
			this.state = 258;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlToBdlParser.YMLID) {
				{
				{
				this.state = 259;
				this.overrideInstruction();
				}
				}
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 265;
			this.match(YmlToBdlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 18, YmlToBdlParser.RULE_overrideInstruction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.ymlId();
			this.state = 268;
			this.match(YmlToBdlParser.FUNCTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 20, YmlToBdlParser.RULE_classDeclarationIntro);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.match(YmlToBdlParser.INTERFACE);
			this.state = 271;
			_localctx._className = this.ymlId();
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.EXTENDS) {
				{
				this.state = 272;
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
		this.enterRule(_localctx, 22, YmlToBdlParser.RULE_extendsBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.match(YmlToBdlParser.EXTENDS);
			this.state = 276;
			this.parentClassName();
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlToBdlParser.COMMA) {
				{
				{
				this.state = 277;
				this.match(YmlToBdlParser.COMMA);
				this.state = 278;
				this.parentClassName();
				}
				}
				this.state = 283;
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
		this.enterRule(_localctx, 24, YmlToBdlParser.RULE_parentClassName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
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
		this.enterRule(_localctx, 26, YmlToBdlParser.RULE_synonym);
		let _la: number;
		try {
			this.state = 301;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 286;
				this.match(YmlToBdlParser.SYNONYM);
				this.state = 287;
				this.listWithBrace();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 288;
				this.match(YmlToBdlParser.SYNONYM);
				this.state = 289;
				this.match(YmlToBdlParser.OPEN_PAR);
				this.state = 298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (YmlToBdlParser.SYNONYM - 12)) | (1 << (YmlToBdlParser.IF_EXPR - 12)) | (1 << (YmlToBdlParser.TRUE - 12)) | (1 << (YmlToBdlParser.FALSE - 12)) | (1 << (YmlToBdlParser.INLINE_DECL_INTRO - 12)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (YmlToBdlParser.OPEN_PAR - 50)) | (1 << (YmlToBdlParser.OPEN_BRACE - 50)) | (1 << (YmlToBdlParser.QUESTION_MARK - 50)) | (1 << (YmlToBdlParser.OPERATOR - 50)) | (1 << (YmlToBdlParser.DATE - 50)) | (1 << (YmlToBdlParser.STRING - 50)) | (1 << (YmlToBdlParser.DOUBLE - 50)) | (1 << (YmlToBdlParser.YMLID - 50)) | (1 << (YmlToBdlParser.GRANULE - 50)))) !== 0)) {
					{
					this.state = 290;
					_localctx._value = this.value();
					_localctx._synonymElements.push(_localctx._value);
					this.state = 295;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === YmlToBdlParser.COMMA) {
						{
						{
						this.state = 291;
						this.match(YmlToBdlParser.COMMA);
						this.state = 292;
						_localctx._value = this.value();
						_localctx._synonymElements.push(_localctx._value);
						}
						}
						this.state = 297;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 300;
				this.match(YmlToBdlParser.CLOSE_PAR);
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
		this.enterRule(_localctx, 28, YmlToBdlParser.RULE_classAttributeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this.match(YmlToBdlParser.FIELD);
			this.state = 304;
			_localctx._memberName = this.ymlId();
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (YmlToBdlParser.FIELD_INTRO - 35)) | (1 << (YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO - 35)) | (1 << (YmlToBdlParser.REMOVE_FIELD - 35)) | (1 << (YmlToBdlParser.ADD_FIELD - 35)))) !== 0)) {
				{
				{
				this.state = 305;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 310;
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
		this.enterRule(_localctx, 30, YmlToBdlParser.RULE_memberDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			_localctx._type = this.memberType();
			this.state = 312;
			_localctx._memberName = this.ymlId();
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (YmlToBdlParser.FIELD_INTRO - 35)) | (1 << (YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO - 35)) | (1 << (YmlToBdlParser.REMOVE_FIELD - 35)) | (1 << (YmlToBdlParser.ADD_FIELD - 35)))) !== 0)) {
				{
				{
				this.state = 313;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 318;
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
		this.enterRule(_localctx, 32, YmlToBdlParser.RULE_memberType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this.ymlId();
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.COND_OR) {
				{
				this.state = 320;
				this.match(YmlToBdlParser.COND_OR);
				this.state = 321;
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
		this.enterRule(_localctx, 34, YmlToBdlParser.RULE_path);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.ymlId();
			this.state = 327;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 325;
					this.match(YmlToBdlParser.DOT);
					this.state = 326;
					this.ymlId();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 329;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
		this.enterRule(_localctx, 36, YmlToBdlParser.RULE_ymlIdOrPath);
		try {
			this.state = 334;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 331;
				this.ymlId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 332;
				this.path();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 333;
				this.match(YmlToBdlParser.RETURN);
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
		this.enterRule(_localctx, 38, YmlToBdlParser.RULE_field);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			_localctx._fieldArrow = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (YmlToBdlParser.FIELD_INTRO - 35)) | (1 << (YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO - 35)) | (1 << (YmlToBdlParser.REMOVE_FIELD - 35)) | (1 << (YmlToBdlParser.ADD_FIELD - 35)))) !== 0))) {
				_localctx._fieldArrow = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 337;
			_localctx._optionName = this.ymlIdOrPath();
			this.state = 346;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 338;
				_localctx._valueOrCondition = this.valueOrCondition();
				_localctx._optionValues.push(_localctx._valueOrCondition);
				this.state = 343;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 339;
						this.match(YmlToBdlParser.COMMA);
						this.state = 340;
						_localctx._valueOrCondition = this.valueOrCondition();
						_localctx._optionValues.push(_localctx._valueOrCondition);
						}
						}
					}
					this.state = 345;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
		this.enterRule(_localctx, 40, YmlToBdlParser.RULE_classPropertiesBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(YmlToBdlParser.CLASSPROPERTIES);
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (YmlToBdlParser.FIELD_INTRO - 35)) | (1 << (YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO - 35)) | (1 << (YmlToBdlParser.REMOVE_FIELD - 35)) | (1 << (YmlToBdlParser.ADD_FIELD - 35)))) !== 0)) {
				{
				{
				this.state = 349;
				_localctx._classOption = this.field();
				}
				}
				this.state = 354;
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
		this.enterRule(_localctx, 42, YmlToBdlParser.RULE_documentation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(YmlToBdlParser.DOCUMENTATION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 44, YmlToBdlParser.RULE_valueOrCondition);
		try {
			this.state = 365;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 357;
				this.actionBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 358;
				this.combinedComparison(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 359;
				this.value();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 360;
				this.hashMapKeyValue();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 361;
				this.documentation();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 362;
				this.ymlId();
				this.state = 363;
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
	public hashMapKeyValue(): HashMapKeyValueContext {
		let _localctx: HashMapKeyValueContext = new HashMapKeyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, YmlToBdlParser.RULE_hashMapKeyValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this.nonArithmeticValue();
			this.state = 368;
			this.match(YmlToBdlParser.COLON);
			this.state = 369;
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
		this.enterRule(_localctx, 48, YmlToBdlParser.RULE_hashMapValue);
		try {
			this.state = 373;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 371;
				this.value();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 372;
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
		this.enterRule(_localctx, 50, YmlToBdlParser.RULE_value);
		try {
			this.state = 381;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 375;
				this.granule();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 376;
				this.inlineDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 377;
				this.arithmeticExpression(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 378;
				this.nonArithmeticValue();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 379;
				this.synonym();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 380;
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
	public instruction_forEach(): Instruction_forEachContext {
		let _localctx: Instruction_forEachContext = new Instruction_forEachContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, YmlToBdlParser.RULE_instruction_forEach);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.match(YmlToBdlParser.FOREACH);
			this.state = 384;
			this.match(YmlToBdlParser.OPEN_PAR);
			{
			this.state = 386;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 385;
				this.ymlId();
				}
				break;
			}
			this.state = 388;
			this.ymlId();
			}
			this.state = 390;
			this.match(YmlToBdlParser.COMMA);
			this.state = 391;
			this.value();
			this.state = 392;
			this.match(YmlToBdlParser.CLOSE_PAR);
			this.state = 393;
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
		this.enterRule(_localctx, 54, YmlToBdlParser.RULE_instruction_ifExprBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this.ifExprBlock();
			this.state = 396;
			this.match(YmlToBdlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 56, YmlToBdlParser.RULE_ifExprBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(YmlToBdlParser.IF_EXPR);
			this.state = 399;
			this.match(YmlToBdlParser.OPEN_PAR);
			this.state = 400;
			this.combinedComparison(0);
			this.state = 401;
			this.match(YmlToBdlParser.CLOSE_PAR);
			this.state = 402;
			this.match(YmlToBdlParser.THEN);
			this.state = 403;
			_localctx._thenValue = this.value();
			this.state = 404;
			this.match(YmlToBdlParser.ELSE);
			this.state = 405;
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
		this.enterRule(_localctx, 58, YmlToBdlParser.RULE_bool);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			_la = this._input.LA(1);
			if (!(_la === YmlToBdlParser.TRUE || _la === YmlToBdlParser.FALSE)) {
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
		this.enterRule(_localctx, 60, YmlToBdlParser.RULE_nonArithmeticValue);
		try {
			this.state = 413;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlToBdlParser.OPEN_BRACE:
			case YmlToBdlParser.QUESTION_MARK:
			case YmlToBdlParser.YMLID:
			case YmlToBdlParser.GRANULE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 409;
				this.chainedCall();
				}
				break;
			case YmlToBdlParser.TRUE:
			case YmlToBdlParser.FALSE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 410;
				this.bool();
				}
				break;
			case YmlToBdlParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 411;
				this.match(YmlToBdlParser.STRING);
				}
				break;
			case YmlToBdlParser.DATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 412;
				this.match(YmlToBdlParser.DATE);
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
		this.enterRule(_localctx, 62, YmlToBdlParser.RULE_instanciationVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.match(YmlToBdlParser.QUESTION_MARK);
			this.state = 416;
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
		this.enterRule(_localctx, 64, YmlToBdlParser.RULE_expression);
		try {
			this.state = 424;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 418;
				this.ymlId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 419;
				this.functionCall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 420;
				this.indexedCall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 421;
				this.instanciationVariable();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 422;
				this.granule();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 423;
				this.listWithBrace();
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
		this.enterRule(_localctx, 66, YmlToBdlParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this.ymlId();
			this.state = 427;
			this.match(YmlToBdlParser.OPEN_PAR);
			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (YmlToBdlParser.SYNONYM - 12)) | (1 << (YmlToBdlParser.IF_EXPR - 12)) | (1 << (YmlToBdlParser.TRUE - 12)) | (1 << (YmlToBdlParser.FALSE - 12)) | (1 << (YmlToBdlParser.INLINE_DECL_INTRO - 12)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (YmlToBdlParser.OPEN_PAR - 50)) | (1 << (YmlToBdlParser.OPEN_BRACE - 50)) | (1 << (YmlToBdlParser.QUESTION_MARK - 50)) | (1 << (YmlToBdlParser.OPERATOR - 50)) | (1 << (YmlToBdlParser.DATE - 50)) | (1 << (YmlToBdlParser.STRING - 50)) | (1 << (YmlToBdlParser.DOCUMENTATION - 50)) | (1 << (YmlToBdlParser.DOUBLE - 50)) | (1 << (YmlToBdlParser.YMLID - 50)) | (1 << (YmlToBdlParser.ID - 50)) | (1 << (YmlToBdlParser.GRANULE - 50)))) !== 0)) {
				{
				this.state = 428;
				this.functionArgument();
				this.state = 433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === YmlToBdlParser.COMMA) {
					{
					{
					this.state = 429;
					this.match(YmlToBdlParser.COMMA);
					this.state = 430;
					this.functionArgument();
					}
					}
					this.state = 435;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 438;
			this.match(YmlToBdlParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 68, YmlToBdlParser.RULE_indexedCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			this.ymlId();
			this.state = 441;
			this.match(YmlToBdlParser.OPEN_BRACKET);
			this.state = 442;
			this.functionArgument();
			this.state = 443;
			this.match(YmlToBdlParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 70, YmlToBdlParser.RULE_functionArgument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.ID) {
				{
				this.state = 445;
				_localctx._argKey = this.match(YmlToBdlParser.ID);
				this.state = 446;
				this.match(YmlToBdlParser.COLON);
				}
			}

			this.state = 449;
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
		this.enterRule(_localctx, 72, YmlToBdlParser.RULE_chainedCall);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.expression();
			this.state = 457;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 452;
					_localctx._marker = this.expressionMarker();
					this.state = 453;
					this.expression();
					}
					}
				}
				this.state = 459;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
		this.enterRule(_localctx, 74, YmlToBdlParser.RULE_inlineDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.match(YmlToBdlParser.INLINE_DECL_INTRO);
			this.state = 461;
			_localctx._className = this.ymlId();
			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.YMLID) {
				{
				this.state = 462;
				_localctx._instanceName = this.ymlId();
				}
			}

			this.state = 468;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (YmlToBdlParser.FIELD_INTRO - 35)) | (1 << (YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO - 35)) | (1 << (YmlToBdlParser.REMOVE_FIELD - 35)) | (1 << (YmlToBdlParser.ADD_FIELD - 35)))) !== 0) || _la === YmlToBdlParser.GRANULE) {
				{
				{
				this.state = 465;
				this.fieldValue();
				}
				}
				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 471;
			this.match(YmlToBdlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 76, YmlToBdlParser.RULE_inlineOperation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			_localctx._leftExpression = this.value();
			this.state = 474;
			_localctx._operator = this.ymlId();
			this.state = 475;
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
		this.enterRule(_localctx, 78, YmlToBdlParser.RULE_fieldValue);
		try {
			this.state = 479;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlToBdlParser.FIELD_INTRO:
			case YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO:
			case YmlToBdlParser.REMOVE_FIELD:
			case YmlToBdlParser.ADD_FIELD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 477;
				this.field();
				}
				break;
			case YmlToBdlParser.GRANULE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 478;
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
		this.enterRule(_localctx, 80, YmlToBdlParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FUNCTION) | (1 << YmlToBdlParser.METHOD) | (1 << YmlToBdlParser.TEXT_METHOD) | (1 << YmlToBdlParser.TEXT_FUNCTION))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 482;
			this.ymlId();
			this.state = 488;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlToBdlParser.ARGS:
				{
				this.state = 483;
				this.argsBlock();
				}
				break;
			case YmlToBdlParser.OPEN_PAR:
				{
				this.state = 484;
				this.match(YmlToBdlParser.OPEN_PAR);
				this.state = 485;
				this.argumentList();
				this.state = 486;
				this.match(YmlToBdlParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.LOCAL) {
				{
				this.state = 490;
				this.localBlock();
				}
			}

			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.STATIC) {
				{
				this.state = 493;
				this.staticBlock();
				}
			}

			this.state = 499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (YmlToBdlParser.FIELD_INTRO - 35)) | (1 << (YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO - 35)) | (1 << (YmlToBdlParser.REMOVE_FIELD - 35)) | (1 << (YmlToBdlParser.ADD_FIELD - 35)))) !== 0)) {
				{
				{
				this.state = 496;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 501;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 502;
			this.match(YmlToBdlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 82, YmlToBdlParser.RULE_argsBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this.match(YmlToBdlParser.ARGS);
			this.state = 505;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 506;
			this.variableBlockContent();
			this.state = 507;
			this.match(YmlToBdlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 84, YmlToBdlParser.RULE_localBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			this.match(YmlToBdlParser.LOCAL);
			this.state = 510;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 511;
			this.variableBlockContent();
			this.state = 512;
			this.match(YmlToBdlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 86, YmlToBdlParser.RULE_staticBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this.match(YmlToBdlParser.STATIC);
			this.state = 515;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlToBdlParser.YMLID) {
				{
				{
				this.state = 516;
				this.staticDeclaration();
				}
				}
				this.state = 521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 522;
			this.match(YmlToBdlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 88, YmlToBdlParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.methodIntro();
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (YmlToBdlParser.FIELD_INTRO - 35)) | (1 << (YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO - 35)) | (1 << (YmlToBdlParser.REMOVE_FIELD - 35)) | (1 << (YmlToBdlParser.ADD_FIELD - 35)))) !== 0)) {
				{
				{
				this.state = 525;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 530;
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
		this.enterRule(_localctx, 90, YmlToBdlParser.RULE_methodIntro);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.METHOD) | (1 << YmlToBdlParser.TEXT_METHOD) | (1 << YmlToBdlParser.TEXT_FUNCTION))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 532;
			this.ymlId();
			this.state = 538;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlToBdlParser.ARGS:
				{
				this.state = 533;
				this.argsBlock();
				}
				break;
			case YmlToBdlParser.OPEN_PAR:
				{
				this.state = 534;
				this.match(YmlToBdlParser.OPEN_PAR);
				this.state = 535;
				this.argumentList();
				this.state = 536;
				this.match(YmlToBdlParser.CLOSE_PAR);
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
		this.enterRule(_localctx, 92, YmlToBdlParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.YMLID) {
				{
				this.state = 540;
				this.mandatoryArgs();
				}
			}

			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.COMMA || _la === YmlToBdlParser.OPEN_BRACE) {
				{
				this.state = 543;
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
		this.enterRule(_localctx, 94, YmlToBdlParser.RULE_mandatoryArgs);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.mandatoryArgDecl();
			this.state = 551;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 547;
					this.match(YmlToBdlParser.COMMA);
					this.state = 548;
					this.mandatoryArgDecl();
					}
					}
				}
				this.state = 553;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
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
		this.enterRule(_localctx, 96, YmlToBdlParser.RULE_mandatoryArgDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			_localctx._argType = this.ymlId();
			this.state = 555;
			_localctx._argName = this.ymlId();
			this.state = 557;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 556;
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
		this.enterRule(_localctx, 98, YmlToBdlParser.RULE_optionalArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.COMMA) {
				{
				this.state = 559;
				this.match(YmlToBdlParser.COMMA);
				}
			}

			this.state = 562;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.OPEN_BRACKET || _la === YmlToBdlParser.YMLID) {
				{
				this.state = 563;
				_localctx._optionalArgDecl = this.optionalArgDecl();
				_localctx._optionalArguments.push(_localctx._optionalArgDecl);
				this.state = 568;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === YmlToBdlParser.COMMA) {
					{
					{
					this.state = 564;
					this.match(YmlToBdlParser.COMMA);
					this.state = 565;
					_localctx._optionalArgDecl = this.optionalArgDecl();
					_localctx._optionalArguments.push(_localctx._optionalArgDecl);
					}
					}
					this.state = 570;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 573;
			this.match(YmlToBdlParser.CLOSE_BRACE);
			this.state = 575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.YMLID) {
				{
				this.state = 574;
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
		this.enterRule(_localctx, 100, YmlToBdlParser.RULE_optionalArgDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 582;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlToBdlParser.OPEN_BRACKET:
				{
				this.state = 577;
				this.match(YmlToBdlParser.OPEN_BRACKET);
				this.state = 578;
				_localctx._optionalKeyName = this.ymlId();
				this.state = 579;
				this.match(YmlToBdlParser.CLOSE_BRACKET);
				}
				break;
			case YmlToBdlParser.YMLID:
				{
				this.state = 581;
				_localctx._mandatoryKeyName = this.ymlId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 584;
			this.match(YmlToBdlParser.COLON);
			this.state = 585;
			_localctx._argType = this.ymlId();
			this.state = 587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.YMLID) {
				{
				this.state = 586;
				_localctx._argName = this.ymlId();
				}
			}

			this.state = 590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.OPEN_BRACE) {
				{
				this.state = 589;
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
		this.enterRule(_localctx, 102, YmlToBdlParser.RULE_argOptionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 593;
			_localctx._argOptionBlock = this.argOptionBlock();
			_localctx._arguments.push(_localctx._argOptionBlock);
			this.state = 598;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlToBdlParser.COMMA) {
				{
				{
				this.state = 594;
				this.match(YmlToBdlParser.COMMA);
				this.state = 595;
				_localctx._argOptionBlock = this.argOptionBlock();
				_localctx._arguments.push(_localctx._argOptionBlock);
				}
				}
				this.state = 600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 601;
			this.match(YmlToBdlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 104, YmlToBdlParser.RULE_argOptionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			_localctx._argOption = this.ymlId();
			this.state = 605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (YmlToBdlParser.SYNONYM - 12)) | (1 << (YmlToBdlParser.IF_EXPR - 12)) | (1 << (YmlToBdlParser.TRUE - 12)) | (1 << (YmlToBdlParser.FALSE - 12)) | (1 << (YmlToBdlParser.INLINE_DECL_INTRO - 12)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (YmlToBdlParser.OPEN_PAR - 50)) | (1 << (YmlToBdlParser.OPEN_BRACE - 50)) | (1 << (YmlToBdlParser.QUESTION_MARK - 50)) | (1 << (YmlToBdlParser.OPERATOR - 50)) | (1 << (YmlToBdlParser.DATE - 50)) | (1 << (YmlToBdlParser.STRING - 50)) | (1 << (YmlToBdlParser.DOUBLE - 50)) | (1 << (YmlToBdlParser.YMLID - 50)) | (1 << (YmlToBdlParser.GRANULE - 50)))) !== 0)) {
				{
				this.state = 604;
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
		this.enterRule(_localctx, 106, YmlToBdlParser.RULE_order1Block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this.instanciationCondition();
			this.state = 609;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 608;
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
		this.enterRule(_localctx, 108, YmlToBdlParser.RULE_instanciationCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 611;
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
		this.enterRule(_localctx, 110, YmlToBdlParser.RULE_order1FullCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 613;
				this.conditionBlock();
				}
				break;
			}
			this.state = 619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (YmlToBdlParser.SYNONYM - 12)) | (1 << (YmlToBdlParser.IF_EXPR - 12)) | (1 << (YmlToBdlParser.TRUE - 12)) | (1 << (YmlToBdlParser.FALSE - 12)) | (1 << (YmlToBdlParser.INLINE_DECL_INTRO - 12)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (YmlToBdlParser.OPEN_PAR - 50)) | (1 << (YmlToBdlParser.OPEN_BRACE - 50)) | (1 << (YmlToBdlParser.QUESTION_MARK - 50)) | (1 << (YmlToBdlParser.OPERATOR - 50)) | (1 << (YmlToBdlParser.DATE - 50)) | (1 << (YmlToBdlParser.STRING - 50)) | (1 << (YmlToBdlParser.DOUBLE - 50)) | (1 << (YmlToBdlParser.YMLID - 50)) | (1 << (YmlToBdlParser.GRANULE - 50)))) !== 0)) {
				{
				{
				this.state = 616;
				this.order1Block();
				}
				}
				this.state = 621;
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
		let _startState: number = 112;
		this.enterRecursionRule(_localctx, 112, YmlToBdlParser.RULE_combinedComparison, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 623;
				this.match(YmlToBdlParser.OPEN_PAR);
				this.state = 624;
				this.combinedComparison(0);
				this.state = 625;
				this.match(YmlToBdlParser.CLOSE_PAR);
				}
				break;

			case 2:
				{
				this.state = 627;
				this.comparison();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 638;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 636;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
					case 1:
						{
						_localctx = new CombinedComparisonContext(_parentctx, _parentState);
						_localctx._leftCondition = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, YmlToBdlParser.RULE_combinedComparison);
						this.state = 630;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 631;
						this.match(YmlToBdlParser.COND_AND);
						this.state = 632;
						_localctx._rightCondition = this.combinedComparison(4);
						}
						break;

					case 2:
						{
						_localctx = new CombinedComparisonContext(_parentctx, _parentState);
						_localctx._leftCondition = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, YmlToBdlParser.RULE_combinedComparison);
						this.state = 633;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 634;
						this.match(YmlToBdlParser.COND_OR);
						this.state = 635;
						_localctx._rightCondition = this.combinedComparison(3);
						}
						break;
					}
					}
				}
				this.state = 640;
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, YmlToBdlParser.RULE_comparison);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			_localctx._leftValue = this.value();
			this.state = 642;
			this.comparisonOperator();
			this.state = 643;
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
		this.enterRule(_localctx, 116, YmlToBdlParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (YmlToBdlParser.EQUAL_COMP - 40)) | (1 << (YmlToBdlParser.NOT_EQUALS - 40)) | (1 << (YmlToBdlParser.LESS_OR_EQUAL - 40)) | (1 << (YmlToBdlParser.GREATE_OR_EQUAL - 40)) | (1 << (YmlToBdlParser.STRICT_LESS - 40)) | (1 << (YmlToBdlParser.STRICT_GREAT - 40)))) !== 0))) {
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
	public instruction_multivaluedAffectation(): Instruction_multivaluedAffectationContext {
		let _localctx: Instruction_multivaluedAffectationContext = new Instruction_multivaluedAffectationContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, YmlToBdlParser.RULE_instruction_multivaluedAffectation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 647;
			_localctx._leftHand = this.value();
			this.state = 648;
			this.match(YmlToBdlParser.MULTIVALUED_AFFECT);
			this.state = 649;
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
	public instruction_affectation(): Instruction_affectationContext {
		let _localctx: Instruction_affectationContext = new Instruction_affectationContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, YmlToBdlParser.RULE_instruction_affectation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
			_localctx._leftHand = this.value();
			this.state = 652;
			this.match(YmlToBdlParser.EQUAL_AFFECT);
			this.state = 653;
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
		this.enterRule(_localctx, 122, YmlToBdlParser.RULE_conditionBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 655;
					this.order0Condition();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 658;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
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
		this.enterRule(_localctx, 124, YmlToBdlParser.RULE_order0Condition);
		try {
			this.state = 662;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 660;
				this.combinedComparison(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 661;
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
		this.enterRule(_localctx, 126, YmlToBdlParser.RULE_instruction_switchCase_withValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 664;
			this.match(YmlToBdlParser.SWITCH);
			this.state = 665;
			this.match(YmlToBdlParser.OPEN_PAR);
			this.state = 666;
			this.value();
			this.state = 667;
			this.match(YmlToBdlParser.CLOSE_PAR);
			this.state = 668;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 672;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlToBdlParser.CASE) {
				{
				{
				this.state = 669;
				this.instructionCase();
				}
				}
				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 676;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.DEFAULT) {
				{
				this.state = 675;
				this.instructionDefault();
				}
			}

			this.state = 678;
			this.match(YmlToBdlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 128, YmlToBdlParser.RULE_instruction_switchCase_asIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 680;
			this.match(YmlToBdlParser.SWITCH);
			this.state = 681;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 685;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlToBdlParser.CASE) {
				{
				{
				this.state = 682;
				this.instructionCase();
				}
				}
				this.state = 687;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 689;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.DEFAULT) {
				{
				this.state = 688;
				this.instructionDefault();
				}
			}

			this.state = 691;
			this.match(YmlToBdlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 130, YmlToBdlParser.RULE_instructionCase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 693;
			this.match(YmlToBdlParser.CASE);
			this.state = 694;
			this.match(YmlToBdlParser.OPEN_PAR);
			this.state = 695;
			this.valueOrCondition();
			this.state = 696;
			this.match(YmlToBdlParser.CLOSE_PAR);
			this.state = 697;
			this.match(YmlToBdlParser.COLON);
			this.state = 700;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 698;
				this.instruction();
				}
				break;

			case 2:
				{
				this.state = 699;
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
		this.enterRule(_localctx, 132, YmlToBdlParser.RULE_instructionDefault);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
			this.match(YmlToBdlParser.DEFAULT);
			this.state = 703;
			this.match(YmlToBdlParser.COLON);
			this.state = 706;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 704;
				this.instruction();
				}
				break;

			case 2:
				{
				this.state = 705;
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
		this.enterRule(_localctx, 134, YmlToBdlParser.RULE_instruction_break);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.match(YmlToBdlParser.BREAK);
			this.state = 709;
			this.match(YmlToBdlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 136, YmlToBdlParser.RULE_instruction_ifElse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 711;
			this.instruction_if();
			this.state = 717;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 712;
				this.match(YmlToBdlParser.ELSE);
				this.state = 715;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 713;
					this.actionBlock();
					}
					break;

				case 2:
					{
					this.state = 714;
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
		this.enterRule(_localctx, 138, YmlToBdlParser.RULE_instruction_if);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 719;
			this.match(YmlToBdlParser.IF);
			this.state = 720;
			this.match(YmlToBdlParser.OPEN_PAR);
			this.state = 721;
			this.order0Condition();
			this.state = 722;
			this.match(YmlToBdlParser.CLOSE_PAR);
			this.state = 725;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 723;
				this.actionBlock();
				}
				break;

			case 2:
				{
				this.state = 724;
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
	public instruction_return(): Instruction_returnContext {
		let _localctx: Instruction_returnContext = new Instruction_returnContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, YmlToBdlParser.RULE_instruction_return);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 727;
			this.match(YmlToBdlParser.RETURN);
			this.state = 728;
			this.value();
			this.state = 729;
			this.match(YmlToBdlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 142, YmlToBdlParser.RULE_instruction_chainedCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
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
		this.enterRule(_localctx, 144, YmlToBdlParser.RULE_instruction);
		try {
			this.state = 749;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 733;
				this.instruction_chainedCall();
				this.state = 734;
				this.match(YmlToBdlParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 736;
				this.instruction_multivaluedAffectation();
				this.state = 737;
				this.match(YmlToBdlParser.SEMICOLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 739;
				this.instruction_affectation();
				this.state = 740;
				this.match(YmlToBdlParser.SEMICOLON);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 742;
				this.instruction_forEach();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 743;
				this.instruction_return();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 744;
				this.instruction_ifElse();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 745;
				this.instruction_switchCase_asIf();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 746;
				this.instruction_break();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 747;
				this.instruction_switchCase_withValue();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 748;
				this.instruction_ifExprBlock();
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
	public actionBlock(): ActionBlockContext {
		let _localctx: ActionBlockContext = new ActionBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, YmlToBdlParser.RULE_actionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 753;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 752;
				this.instruction();
				}
				}
				this.state = 755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (YmlToBdlParser.SYNONYM - 12)) | (1 << (YmlToBdlParser.IF_EXPR - 12)) | (1 << (YmlToBdlParser.IF - 12)) | (1 << (YmlToBdlParser.FOREACH - 12)) | (1 << (YmlToBdlParser.RETURN - 12)) | (1 << (YmlToBdlParser.TRUE - 12)) | (1 << (YmlToBdlParser.FALSE - 12)) | (1 << (YmlToBdlParser.SWITCH - 12)) | (1 << (YmlToBdlParser.BREAK - 12)) | (1 << (YmlToBdlParser.INLINE_DECL_INTRO - 12)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (YmlToBdlParser.OPEN_PAR - 50)) | (1 << (YmlToBdlParser.OPEN_BRACE - 50)) | (1 << (YmlToBdlParser.QUESTION_MARK - 50)) | (1 << (YmlToBdlParser.OPERATOR - 50)) | (1 << (YmlToBdlParser.DATE - 50)) | (1 << (YmlToBdlParser.STRING - 50)) | (1 << (YmlToBdlParser.DOUBLE - 50)) | (1 << (YmlToBdlParser.YMLID - 50)) | (1 << (YmlToBdlParser.GRANULE - 50)))) !== 0));
			this.state = 757;
			this.match(YmlToBdlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		let _startState: number = 148;
		this.enterRecursionRule(_localctx, 148, YmlToBdlParser.RULE_arithmeticExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 775;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 760;
				this.match(YmlToBdlParser.OPEN_PAR);
				this.state = 761;
				_localctx._parenthizedExpression = this.arithmeticExpression(0);
				this.state = 762;
				this.match(YmlToBdlParser.CLOSE_PAR);
				}
				break;

			case 2:
				{
				this.state = 764;
				_localctx._prefixedOperator = this.match(YmlToBdlParser.OPERATOR);
				this.state = 765;
				this.arithmeticExpression(4);
				}
				break;

			case 3:
				{
				this.state = 766;
				this.chainedCall();
				this.state = 767;
				this.match(YmlToBdlParser.OPERATOR);
				this.state = 768;
				this.arithmeticExpression(3);
				}
				break;

			case 4:
				{
				this.state = 770;
				this.chainedCall();
				this.state = 771;
				this.match(YmlToBdlParser.OPERATOR);
				this.state = 772;
				this.chainedCall();
				}
				break;

			case 5:
				{
				this.state = 774;
				this.match(YmlToBdlParser.DOUBLE);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 782;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
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
					this.pushNewRecursionContext(_localctx, _startState, YmlToBdlParser.RULE_arithmeticExpression);
					this.state = 777;
					if (!(this.precpred(this._ctx, 5))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
					}
					this.state = 778;
					_localctx._infixedOperator = this.match(YmlToBdlParser.OPERATOR);
					this.state = 779;
					_localctx._rightExpression = this.arithmeticExpression(6);
					}
					}
				}
				this.state = 784;
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public existentialOperator(): ExistentialOperatorContext {
		let _localctx: ExistentialOperatorContext = new ExistentialOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, YmlToBdlParser.RULE_existentialOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			_localctx._operator = this.ymlId();
			this.state = 786;
			this.match(YmlToBdlParser.OPEN_PAR);
			this.state = 787;
			this.order1FullCondition();
			this.state = 788;
			this.match(YmlToBdlParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 152, YmlToBdlParser.RULE_variableBlockContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlToBdlParser.YMLID) {
				{
				{
				this.state = 790;
				this.memberDeclaration();
				}
				}
				this.state = 795;
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
		this.enterRule(_localctx, 154, YmlToBdlParser.RULE_staticDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 796;
			_localctx._declarationType = this.ymlId();
			this.state = 797;
			_localctx._declarationName = this.ymlId();
			this.state = 800;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlToBdlParser.EXTENDS) {
				{
				this.state = 798;
				this.match(YmlToBdlParser.EXTENDS);
				this.state = 799;
				_localctx._extended = this.ymlId();
				}
			}

			this.state = 805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (YmlToBdlParser.FIELD_INTRO - 35)) | (1 << (YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO - 35)) | (1 << (YmlToBdlParser.REMOVE_FIELD - 35)) | (1 << (YmlToBdlParser.ADD_FIELD - 35)))) !== 0)) {
				{
				{
				this.state = 802;
				_localctx._declarationOptions = this.field();
				}
				}
				this.state = 807;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 808;
			this.match(YmlToBdlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 156, YmlToBdlParser.RULE_externDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			this.match(YmlToBdlParser.EXTERN);
			this.state = 813;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlToBdlParser.METHOD:
			case YmlToBdlParser.TEXT_METHOD:
			case YmlToBdlParser.TEXT_FUNCTION:
				{
				this.state = 811;
				this.methodDeclaration();
				}
				break;
			case YmlToBdlParser.YMLID:
				{
				this.state = 812;
				this.memberDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 815;
			this.match(YmlToBdlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, YmlToBdlParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 817;
			this.match(YmlToBdlParser.OPEN_BRACKET);
			this.state = 819;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (YmlToBdlParser.SYNONYM - 12)) | (1 << (YmlToBdlParser.IF_EXPR - 12)) | (1 << (YmlToBdlParser.TRUE - 12)) | (1 << (YmlToBdlParser.FALSE - 12)) | (1 << (YmlToBdlParser.INLINE_DECL_INTRO - 12)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (YmlToBdlParser.OPEN_PAR - 50)) | (1 << (YmlToBdlParser.OPEN_BRACE - 50)) | (1 << (YmlToBdlParser.QUESTION_MARK - 50)) | (1 << (YmlToBdlParser.OPERATOR - 50)) | (1 << (YmlToBdlParser.DATE - 50)) | (1 << (YmlToBdlParser.STRING - 50)) | (1 << (YmlToBdlParser.DOUBLE - 50)) | (1 << (YmlToBdlParser.YMLID - 50)) | (1 << (YmlToBdlParser.GRANULE - 50)))) !== 0)) {
				{
				this.state = 818;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
			}

			this.state = 825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlToBdlParser.COMMA) {
				{
				{
				this.state = 821;
				this.match(YmlToBdlParser.COMMA);
				this.state = 822;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
				}
				this.state = 827;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 828;
			this.match(YmlToBdlParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listWithBrace(): ListWithBraceContext {
		let _localctx: ListWithBraceContext = new ListWithBraceContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, YmlToBdlParser.RULE_listWithBrace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 832;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (YmlToBdlParser.SYNONYM - 12)) | (1 << (YmlToBdlParser.IF_EXPR - 12)) | (1 << (YmlToBdlParser.TRUE - 12)) | (1 << (YmlToBdlParser.FALSE - 12)) | (1 << (YmlToBdlParser.INLINE_DECL_INTRO - 12)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (YmlToBdlParser.OPEN_PAR - 50)) | (1 << (YmlToBdlParser.OPEN_BRACE - 50)) | (1 << (YmlToBdlParser.QUESTION_MARK - 50)) | (1 << (YmlToBdlParser.OPERATOR - 50)) | (1 << (YmlToBdlParser.DATE - 50)) | (1 << (YmlToBdlParser.STRING - 50)) | (1 << (YmlToBdlParser.DOUBLE - 50)) | (1 << (YmlToBdlParser.YMLID - 50)) | (1 << (YmlToBdlParser.GRANULE - 50)))) !== 0)) {
				{
				this.state = 831;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
			}

			this.state = 838;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlToBdlParser.COMMA) {
				{
				{
				this.state = 834;
				this.match(YmlToBdlParser.COMMA);
				this.state = 835;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
				}
				this.state = 840;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 841;
			this.match(YmlToBdlParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 162, YmlToBdlParser.RULE_granule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 843;
			this.match(YmlToBdlParser.GRANULE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public complete(): CompleteContext {
		let _localctx: CompleteContext = new CompleteContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, YmlToBdlParser.RULE_complete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 845;
			this.match(YmlToBdlParser.COMPLETE);
			this.state = 846;
			_localctx._completedElemId = this.ymlId();
			this.state = 850;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (YmlToBdlParser.FIELD_INTRO - 35)) | (1 << (YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO - 35)) | (1 << (YmlToBdlParser.REMOVE_FIELD - 35)) | (1 << (YmlToBdlParser.ADD_FIELD - 35)))) !== 0)) {
				{
				{
				this.state = 847;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 853;
			this.match(YmlToBdlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		case 56:
			return this.combinedComparison_sempred(_localctx as CombinedComparisonContext, predIndex);

		case 74:
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
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03L\u035A\x04\x02" +
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
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x07\x04\xAE\n\x04\f\x04\x0E\x04\xB1\v\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xBB\n\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xC3\n\x06\f\x06\x0E" +
		"\x06\xC6\v\x06\x06\x06\xC8\n\x06\r\x06\x0E\x06\xC9\x03\x06\x03\x06\x07" +
		"\x06\xCE\n\x06\f\x06\x0E\x06\xD1\v\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x07\x07\xD7\n\x07\f\x07\x0E\x07\xDA\v\x07\x03\b\x03\b\x07\b\xDE\n\b\f" +
		"\b\x0E\b\xE1\v\b\x03\b\x03\b\x07\b\xE5\n\b\f\b\x0E\b\xE8\v\b\x03\b\x05" +
		"\b\xEB\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\xF1\n\b\x03\t\x03\t\x03\t\x07" +
		"\t\xF6\n\t\f\t\x0E\t\xF9\v\t\x03\t\x05\t\xFC\n\t\x03\t\x07\t\xFF\n\t\f" +
		"\t\x0E\t\u0102\v\t\x03\n\x03\n\x03\n\x07\n\u0107\n\n\f\n\x0E\n\u010A\v" +
		"\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x05\f\u0114\n\f\x03" +
		"\r\x03\r\x03\r\x03\r\x07\r\u011A\n\r\f\r\x0E\r\u011D\v\r\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0128" +
		"\n\x0F\f\x0F\x0E\x0F\u012B\v\x0F\x05\x0F\u012D\n\x0F\x03\x0F\x05\x0F\u0130" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u0135\n\x10\f\x10\x0E\x10\u0138" +
		"\v\x10\x03\x11\x03\x11\x03\x11\x07\x11\u013D\n\x11\f\x11\x0E\x11\u0140" +
		"\v\x11\x03\x12\x03\x12\x03\x12\x05\x12\u0145\n\x12\x03\x13\x03\x13\x03" +
		"\x13\x06\x13\u014A\n\x13\r\x13\x0E\x13\u014B\x03\x14\x03\x14\x03\x14\x05" +
		"\x14\u0151\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0158" +
		"\n\x15\f\x15\x0E\x15\u015B\v\x15\x05\x15\u015D\n\x15\x03\x16\x03\x16\x07" +
		"\x16\u0161\n\x16\f\x16\x0E\x16\u0164\v\x16\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0170\n\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u0178\n\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0180\n\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x05\x1C\u0185\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03" +
		" \x03 \x03 \x05 \u01A0\n \x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"" +
		"\x03\"\x05\"\u01AB\n\"\x03#\x03#\x03#\x03#\x03#\x07#\u01B2\n#\f#\x0E#" +
		"\u01B5\v#\x05#\u01B7\n#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x05" +
		"%\u01C2\n%\x03%\x03%\x03&\x03&\x03&\x03&\x07&\u01CA\n&\f&\x0E&\u01CD\v" +
		"&\x03\'\x03\'\x03\'\x05\'\u01D2\n\'\x03\'\x07\'\u01D5\n\'\f\'\x0E\'\u01D8" +
		"\v\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03)\x03)\x05)\u01E2\n)\x03*\x03" +
		"*\x03*\x03*\x03*\x03*\x03*\x05*\u01EB\n*\x03*\x05*\u01EE\n*\x03*\x05*" +
		"\u01F1\n*\x03*\x07*\u01F4\n*\f*\x0E*\u01F7\v*\x03*\x03*\x03+\x03+\x03" +
		"+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x07-\u0208\n-\f-\x0E" +
		"-\u020B\v-\x03-\x03-\x03.\x03.\x07.\u0211\n.\f.\x0E.\u0214\v.\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x05/\u021D\n/\x030\x050\u0220\n0\x030\x050" +
		"\u0223\n0\x031\x031\x031\x071\u0228\n1\f1\x0E1\u022B\v1\x032\x032\x03" +
		"2\x052\u0230\n2\x033\x053\u0233\n3\x033\x033\x033\x033\x073\u0239\n3\f" +
		"3\x0E3\u023C\v3\x053\u023E\n3\x033\x033\x053\u0242\n3\x034\x034\x034\x03" +
		"4\x034\x054\u0249\n4\x034\x034\x034\x054\u024E\n4\x034\x054\u0251\n4\x03" +
		"5\x035\x035\x035\x075\u0257\n5\f5\x0E5\u025A\v5\x035\x035\x036\x036\x05" +
		"6\u0260\n6\x037\x037\x057\u0264\n7\x038\x038\x039\x059\u0269\n9\x039\x07" +
		"9\u026C\n9\f9\x0E9\u026F\v9\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u0277\n" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u027F\n:\f:\x0E:\u0282\v:\x03;\x03" +
		";\x03;\x03;\x03<\x03<\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03?\x06" +
		"?\u0293\n?\r?\x0E?\u0294\x03@\x03@\x05@\u0299\n@\x03A\x03A\x03A\x03A\x03" +
		"A\x03A\x07A\u02A1\nA\fA\x0EA\u02A4\vA\x03A\x05A\u02A7\nA\x03A\x03A\x03" +
		"B\x03B\x03B\x07B\u02AE\nB\fB\x0EB\u02B1\vB\x03B\x05B\u02B4\nB\x03B\x03" +
		"B\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x05C\u02BF\nC\x03D\x03D\x03D\x03" +
		"D\x05D\u02C5\nD\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x05F\u02CE\nF\x05F" +
		"\u02D0\nF\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u02D8\nG\x03H\x03H\x03H\x03" +
		"H\x03I\x03I\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x05J\u02F0\nJ\x03K\x03K\x06K\u02F4\nK\rK\x0EK\u02F5" +
		"\x03K\x03K\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x05L\u030A\nL\x03L\x03L\x03L\x07L\u030F\nL\fL\x0E" +
		"L\u0312\vL\x03M\x03M\x03M\x03M\x03M\x03N\x07N\u031A\nN\fN\x0EN\u031D\v" +
		"N\x03O\x03O\x03O\x03O\x05O\u0323\nO\x03O\x07O\u0326\nO\fO\x0EO\u0329\v" +
		"O\x03O\x03O\x03P\x03P\x03P\x05P\u0330\nP\x03P\x03P\x03Q\x03Q\x05Q\u0336" +
		"\nQ\x03Q\x03Q\x07Q\u033A\nQ\fQ\x0EQ\u033D\vQ\x03Q\x03Q\x03R\x03R\x05R" +
		"\u0343\nR\x03R\x03R\x07R\u0347\nR\fR\x0ER\u034A\vR\x03R\x03R\x03S\x03" +
		"S\x03T\x03T\x03T\x07T\u0353\nT\fT\x0ET\u0356\vT\x03T\x03T\x03T\x05\xF7" +
		"\u014B\u0159\x02\x04r\x96U\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\x02\b\x03\x02#$\x03\x02" +
		"%(\x03\x02\x19\x1A\x03\x02\x06\t\x03\x02\x07\t\x03\x02*/\u037F\x02\xA8" +
		"\x03\x02\x02\x02\x04\xAA\x03\x02\x02\x02\x06\xAF\x03\x02\x02\x02\b\xBA" +
		"\x03\x02\x02\x02\n\xBC\x03\x02\x02\x02\f\xD4\x03\x02\x02\x02\x0E\xDB\x03" +
		"\x02\x02\x02\x10\xF2\x03\x02\x02\x02\x12\u0103\x03\x02\x02\x02\x14\u010D" +
		"\x03\x02\x02\x02\x16\u0110\x03\x02\x02\x02\x18\u0115\x03\x02\x02\x02\x1A" +
		"\u011E\x03\x02\x02\x02\x1C\u012F\x03\x02\x02\x02\x1E\u0131\x03\x02\x02" +
		"\x02 \u0139\x03\x02\x02\x02\"\u0141\x03\x02\x02\x02$\u0146\x03\x02\x02" +
		"\x02&\u0150\x03\x02\x02\x02(\u0152\x03\x02\x02\x02*\u015E\x03\x02\x02" +
		"\x02,\u0165\x03\x02\x02\x02.\u016F\x03\x02\x02\x020\u0171\x03\x02\x02" +
		"\x022\u0177\x03\x02\x02\x024\u017F\x03\x02\x02\x026\u0181\x03\x02\x02" +
		"\x028\u018D\x03\x02\x02\x02:\u0190\x03\x02\x02\x02<\u0199\x03\x02\x02" +
		"\x02>\u019F\x03\x02\x02\x02@\u01A1\x03\x02\x02\x02B\u01AA\x03\x02\x02" +
		"\x02D\u01AC\x03\x02\x02\x02F\u01BA\x03\x02\x02\x02H\u01C1\x03\x02\x02" +
		"\x02J\u01C5\x03\x02\x02\x02L\u01CE\x03\x02\x02\x02N\u01DB\x03\x02\x02" +
		"\x02P\u01E1\x03\x02\x02\x02R\u01E3\x03\x02\x02\x02T\u01FA\x03\x02\x02" +
		"\x02V\u01FF\x03\x02\x02\x02X\u0204\x03\x02\x02\x02Z\u020E\x03\x02\x02" +
		"\x02\\\u0215\x03\x02\x02\x02^\u021F\x03\x02\x02\x02`\u0224\x03\x02\x02" +
		"\x02b\u022C\x03\x02\x02\x02d\u0232\x03\x02\x02\x02f\u0248\x03\x02\x02" +
		"\x02h\u0252\x03\x02\x02\x02j\u025D\x03\x02\x02\x02l\u0261\x03\x02\x02" +
		"\x02n\u0265\x03\x02\x02\x02p\u0268\x03\x02\x02\x02r\u0276\x03\x02\x02" +
		"\x02t\u0283\x03\x02\x02\x02v\u0287\x03\x02\x02\x02x\u0289\x03\x02\x02" +
		"\x02z\u028D\x03\x02\x02\x02|\u0292\x03\x02\x02\x02~\u0298\x03\x02\x02" +
		"\x02\x80\u029A\x03\x02\x02\x02\x82\u02AA\x03\x02\x02\x02\x84\u02B7\x03" +
		"\x02\x02\x02\x86\u02C0\x03\x02\x02\x02\x88\u02C6\x03\x02\x02\x02\x8A\u02C9" +
		"\x03\x02\x02\x02\x8C\u02D1\x03\x02\x02\x02\x8E\u02D9\x03\x02\x02\x02\x90" +
		"\u02DD\x03\x02\x02\x02\x92\u02EF\x03\x02\x02\x02\x94\u02F1\x03\x02\x02" +
		"\x02\x96\u0309\x03\x02\x02\x02\x98\u0313\x03\x02\x02\x02\x9A\u031B\x03" +
		"\x02\x02\x02\x9C\u031E\x03\x02\x02\x02\x9E\u032C\x03\x02\x02\x02\xA0\u0333" +
		"\x03\x02\x02\x02\xA2\u0340\x03\x02\x02\x02\xA4\u034D\x03\x02\x02\x02\xA6" +
		"\u034F\x03\x02\x02\x02\xA8\xA9\t\x02\x02\x02\xA9\x03\x03\x02\x02\x02\xAA" +
		"\xAB\x07G\x02\x02\xAB\x05\x03\x02\x02\x02\xAC\xAE\x05\b\x05\x02\xAD\xAC" +
		"\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0" +
		"\x03\x02\x02\x02\xB0\xB2\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB3" +
		"\x07\x02\x02\x03\xB3\x07\x03\x02\x02\x02\xB4\xBB\x05\x0E\b\x02\xB5\xBB" +
		"\x05\x9CO\x02\xB6\xBB\x05\xA6T\x02\xB7\xBB\x05\n\x06\x02\xB8\xBB\x05R" +
		"*\x02\xB9\xBB\x05\x9EP\x02\xBA\xB4\x03\x02\x02\x02\xBA\xB5\x03\x02\x02" +
		"\x02\xBA\xB6\x03\x02\x02\x02\xBA\xB7\x03\x02\x02\x02\xBA\xB8\x03\x02\x02" +
		"\x02\xBA\xB9\x03\x02\x02\x02\xBB\t\x03\x02\x02\x02\xBC\xBD\x07\x15\x02" +
		"\x02\xBD\xBE\x05\x04\x03\x02\xBE\xC7\x078\x02\x02\xBF\xC4\x05\f\x07\x02" +
		"\xC0\xC1\x07!\x02\x02\xC1\xC3\x05\f\x07\x02\xC2\xC0\x03\x02\x02\x02\xC3" +
		"\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5" +
		"\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7\xBF\x03\x02\x02\x02\xC8" +
		"\xC9\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA" +
		"\xCB\x03\x02\x02\x02\xCB\xCF\x079\x02\x02\xCC\xCE\x05(\x15\x02\xCD\xCC" +
		"\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0" +
		"\x03\x02\x02\x02\xD0\xD2\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD3" +
		"\x07 \x02\x02\xD3\v\x03\x02\x02\x02\xD4\xD8\x05\x04\x03\x02\xD5\xD7\x05" +
		"(\x15\x02\xD6\xD5\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03" +
		"\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\r\x03\x02\x02\x02\xDA\xD8\x03" +
		"\x02\x02\x02\xDB\xDF\x05\x16\f\x02\xDC\xDE\x05(\x15\x02\xDD\xDC\x03\x02" +
		"\x02\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02" +
		"\x02\x02\xE0\xE6\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE5\x05\x1E" +
		"\x10\x02\xE3\xE5\x05Z.\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE3\x03\x02\x02" +
		"\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02" +
		"\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEB\x05*\x16" +
		"\x02\xEA\xE9\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEC\x03\x02\x02" +
		"\x02\xEC\xED\x07 \x02\x02\xED\xEE\x05\x10\t\x02\xEE\xF0\x07 \x02\x02\xEF" +
		"\xF1\x07\x02\x02\x03\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1" +
		"\x0F\x03\x02\x02\x02\xF2\xF3\x07\x04\x02\x02\xF3\xF7\x05\x04\x03\x02\xF4" +
		"\xF6\x05\x14\v\x02\xF5\xF4\x03\x02\x02\x02\xF6\xF9\x03\x02\x02\x02\xF7" +
		"\xF8\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9" +
		"\xF7\x03\x02\x02\x02\xFA\xFC\x05\x12\n\x02\xFB\xFA\x03\x02\x02\x02\xFB" +
		"\xFC\x03\x02\x02\x02\xFC\u0100\x03\x02\x02\x02\xFD\xFF\x05(\x15\x02\xFE" +
		"\xFD\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02" +
		"\u0100\u0101\x03\x02\x02\x02\u0101\x11\x03\x02\x02\x02\u0102\u0100\x03" +
		"\x02\x02\x02\u0103\u0104\x07\x0F\x02\x02\u0104\u0108\x078\x02\x02\u0105" +
		"\u0107\x05\x14\v\x02\u0106\u0105\x03\x02\x02\x02\u0107\u010A\x03\x02\x02" +
		"\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010B" +
		"\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B\u010C\x079\x02\x02" +
		"\u010C\x13\x03\x02\x02\x02\u010D\u010E\x05\x04\x03\x02\u010E\u010F\x07" +
		"\x06\x02\x02\u010F\x15\x03\x02\x02\x02\u0110\u0111\x07\x03\x02\x02\u0111" +
		"\u0113\x05\x04\x03\x02\u0112\u0114\x05\x18\r\x02\u0113\u0112\x03\x02\x02" +
		"\x02\u0113\u0114\x03\x02\x02\x02\u0114\x17\x03\x02\x02\x02\u0115\u0116" +
		"\x07\x05\x02\x02\u0116\u011B\x05\x1A\x0E\x02\u0117\u0118\x07!\x02\x02" +
		"\u0118\u011A\x05\x1A\x0E\x02\u0119\u0117\x03\x02\x02\x02\u011A\u011D\x03" +
		"\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C" +
		"\x19\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011E\u011F\x05\x04\x03" +
		"\x02\u011F\x1B\x03\x02\x02\x02\u0120\u0121\x07\x0E\x02\x02\u0121\u0130" +
		"\x05\xA2R\x02\u0122\u0123\x07\x0E\x02\x02\u0123\u012C\x074\x02\x02\u0124" +
		"\u0129\x054\x1B\x02\u0125\u0126\x07!\x02\x02\u0126\u0128\x054\x1B\x02" +
		"\u0127\u0125\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129\u0127\x03" +
		"\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012D\x03\x02\x02\x02\u012B" +
		"\u0129\x03\x02\x02\x02\u012C\u0124\x03\x02\x02\x02\u012C\u012D\x03\x02" +
		"\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0130\x075\x02\x02\u012F\u0120" +
		"\x03\x02\x02\x02\u012F\u0122\x03\x02\x02\x02\u0130\x1D\x03\x02\x02\x02" +
		"\u0131\u0132\x07\n\x02\x02\u0132\u0136\x05\x04\x03\x02\u0133\u0135\x05" +
		"(\x15\x02\u0134\u0133\x03\x02\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136" +
		"\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\x1F\x03\x02\x02" +
		"\x02\u0138\u0136\x03\x02\x02\x02\u0139\u013A\x05\"\x12\x02\u013A\u013E" +
		"\x05\x04\x03\x02\u013B\u013D\x05(\x15\x02\u013C\u013B\x03\x02\x02\x02" +
		"\u013D\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E\u013F\x03" +
		"\x02\x02\x02\u013F!\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0141" +
		"\u0144\x05\x04\x03\x02\u0142\u0143\x071\x02\x02\u0143\u0145\x05\x04\x03" +
		"\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145#\x03" +
		"\x02\x02\x02\u0146\u0149\x05\x04\x03\x02\u0147\u0148\x07#\x02\x02\u0148" +
		"\u014A\x05\x04\x03\x02\u0149\u0147\x03\x02\x02\x02\u014A\u014B\x03\x02" +
		"\x02\x02\u014B\u014C\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C" +
		"%\x03\x02\x02\x02\u014D\u0151\x05\x04\x03\x02\u014E\u0151\x05$\x13\x02" +
		"\u014F\u0151\x07\x17\x02\x02\u0150\u014D\x03\x02\x02\x02\u0150\u014E\x03" +
		"\x02\x02\x02\u0150\u014F\x03\x02\x02\x02\u0151\'\x03\x02\x02\x02\u0152" +
		"\u0153\t\x03\x02\x02\u0153\u015C\x05&\x14\x02\u0154\u0159\x05.\x18\x02" +
		"\u0155\u0156\x07!\x02\x02\u0156\u0158\x05.\x18\x02\u0157\u0155\x03\x02" +
		"\x02\x02\u0158\u015B\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u0159" +
		"\u0157\x03\x02\x02\x02\u015A\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02" +
		"\x02\x02\u015C\u0154\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D" +
		")\x03\x02\x02\x02\u015E\u0162\x07\v\x02\x02\u015F\u0161\x05(\x15\x02\u0160" +
		"\u015F\x03\x02\x02\x02\u0161\u0164\x03\x02\x02\x02\u0162\u0160\x03\x02" +
		"\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163+\x03\x02\x02\x02\u0164\u0162" +
		"\x03\x02\x02\x02\u0165\u0166\x07C\x02\x02\u0166-\x03\x02\x02\x02\u0167" +
		"\u0170\x05\x94K\x02\u0168\u0170\x05r:\x02\u0169\u0170\x054\x1B\x02\u016A" +
		"\u0170\x050\x19\x02\u016B\u0170\x05,\x17\x02\u016C\u016D\x05\x04\x03\x02" +
		"\u016D\u016E\x05\x04\x03\x02\u016E\u0170\x03\x02\x02\x02\u016F\u0167\x03" +
		"\x02\x02\x02\u016F\u0168\x03\x02\x02\x02\u016F\u0169\x03\x02\x02\x02\u016F" +
		"\u016A\x03\x02\x02\x02\u016F\u016B\x03\x02\x02\x02\u016F\u016C\x03\x02" +
		"\x02\x02\u0170/\x03\x02\x02\x02\u0171\u0172\x05> \x02\u0172\u0173\x07" +
		"\"\x02\x02\u0173\u0174\x052\x1A\x02\u01741\x03\x02\x02\x02\u0175\u0178" +
		"\x054\x1B\x02\u0176\u0178\x05r:\x02\u0177\u0175\x03\x02\x02\x02\u0177" +
		"\u0176\x03\x02\x02\x02\u01783\x03\x02\x02\x02\u0179\u0180\x05\xA4S\x02" +
		"\u017A\u0180\x05L\'\x02\u017B\u0180\x05\x96L\x02\u017C\u0180\x05> \x02" +
		"\u017D\u0180\x05\x1C\x0F\x02\u017E\u0180\x05:\x1E\x02\u017F\u0179\x03" +
		"\x02\x02\x02\u017F\u017A\x03\x02\x02\x02\u017F\u017B\x03\x02\x02\x02\u017F" +
		"\u017C\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F\u017E\x03\x02" +
		"\x02\x02\u01805\x03\x02\x02\x02\u0181\u0182\x07\x16\x02\x02\u0182\u0184" +
		"\x074\x02\x02\u0183\u0185\x05\x04\x03\x02\u0184\u0183\x03\x02\x02\x02" +
		"\u0184\u0185\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x05" +
		"\x04\x03\x02\u0187\u0188\x03\x02\x02\x02\u0188\u0189\x07!\x02\x02\u0189" +
		"\u018A\x054\x1B\x02\u018A\u018B\x075\x02\x02\u018B\u018C\x05\x94K\x02" +
		"\u018C7\x03\x02\x02\x02\u018D\u018E\x05:\x1E\x02\u018E\u018F\x07 \x02" +
		"\x02\u018F9\x03\x02\x02\x02\u0190\u0191\x07\x11\x02\x02\u0191\u0192\x07" +
		"4\x02\x02\u0192\u0193\x05r:\x02\u0193\u0194\x075\x02\x02\u0194\u0195\x07" +
		"\x13\x02\x02\u0195\u0196\x054\x1B\x02\u0196\u0197\x07\x14\x02\x02\u0197" +
		"\u0198\x054\x1B\x02\u0198;\x03\x02\x02\x02\u0199\u019A\t\x04\x02\x02\u019A" +
		"=\x03\x02\x02\x02\u019B\u01A0\x05J&\x02\u019C\u01A0\x05<\x1F\x02\u019D" +
		"\u01A0\x07B\x02\x02\u019E\u01A0\x07A\x02\x02\u019F\u019B\x03\x02\x02\x02" +
		"\u019F\u019C\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F\u019E\x03" +
		"\x02\x02\x02\u01A0?\x03\x02\x02\x02\u01A1\u01A2\x07<\x02\x02\u01A2\u01A3" +
		"\x05\x04\x03\x02\u01A3A\x03\x02\x02\x02\u01A4\u01AB\x05\x04\x03\x02\u01A5" +
		"\u01AB\x05D#\x02\u01A6\u01AB\x05F$\x02\u01A7\u01AB\x05@!\x02\u01A8\u01AB" +
		"\x05\xA4S\x02\u01A9\u01AB\x05\xA2R\x02\u01AA\u01A4\x03\x02\x02\x02\u01AA" +
		"\u01A5\x03\x02\x02\x02\u01AA\u01A6\x03\x02\x02\x02\u01AA\u01A7\x03\x02" +
		"\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA\u01A9\x03\x02\x02\x02\u01AB" +
		"C\x03\x02\x02\x02\u01AC\u01AD\x05\x04\x03\x02\u01AD\u01B6\x074\x02\x02" +
		"\u01AE\u01B3\x05H%\x02\u01AF\u01B0\x07!\x02\x02\u01B0\u01B2\x05H%\x02" +
		"\u01B1\u01AF\x03\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03" +
		"\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B7\x03\x02\x02\x02\u01B5" +
		"\u01B3\x03\x02\x02\x02\u01B6\u01AE\x03\x02\x02\x02\u01B6\u01B7\x03\x02" +
		"\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B9\x075\x02\x02\u01B9E\x03" +
		"\x02\x02\x02\u01BA\u01BB\x05\x04\x03\x02\u01BB\u01BC\x076\x02\x02\u01BC" +
		"\u01BD\x05H%\x02\u01BD\u01BE\x077\x02\x02\u01BEG\x03\x02\x02\x02\u01BF" +
		"\u01C0\x07H\x02\x02\u01C0\u01C2\x07\"\x02\x02\u01C1\u01BF\x03\x02\x02" +
		"\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4" +
		"\x05.\x18\x02\u01C4I\x03\x02\x02\x02\u01C5\u01CB\x05B\"\x02\u01C6\u01C7" +
		"\x05\x02\x02\x02\u01C7\u01C8\x05B\"\x02\u01C8\u01CA\x03\x02\x02\x02\u01C9" +
		"\u01C6\x03\x02\x02\x02\u01CA\u01CD\x03\x02\x02\x02\u01CB\u01C9\x03\x02" +
		"\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CCK\x03\x02\x02\x02\u01CD\u01CB" +
		"\x03\x02\x02\x02\u01CE\u01CF\x07)\x02\x02\u01CF\u01D1\x05\x04\x03\x02" +
		"\u01D0\u01D2\x05\x04\x03\x02\u01D1\u01D0\x03\x02\x02\x02\u01D1\u01D2\x03" +
		"\x02\x02\x02\u01D2\u01D6\x03\x02\x02\x02\u01D3\u01D5\x05P)\x02\u01D4\u01D3" +
		"\x03\x02\x02\x02\u01D5\u01D8\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02" +
		"\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D9\x03\x02\x02\x02\u01D8\u01D6\x03" +
		"\x02\x02\x02\u01D9\u01DA\x07 \x02\x02\u01DAM\x03\x02\x02\x02\u01DB\u01DC" +
		"\x054\x1B\x02\u01DC\u01DD\x05\x04\x03\x02\u01DD\u01DE\x054\x1B\x02\u01DE" +
		"O\x03\x02\x02\x02\u01DF\u01E2\x05(\x15\x02\u01E0\u01E2\x05\xA4S\x02\u01E1" +
		"\u01DF\x03\x02\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E2Q\x03\x02\x02" +
		"\x02\u01E3\u01E4\t\x05\x02\x02\u01E4\u01EA\x05\x04\x03\x02\u01E5\u01EB" +
		"\x05T+\x02\u01E6\u01E7\x074\x02\x02\u01E7\u01E8\x05^0\x02\u01E8\u01E9" +
		"\x075\x02\x02\u01E9\u01EB\x03\x02\x02\x02\u01EA\u01E5\x03\x02\x02\x02" +
		"\u01EA\u01E6\x03\x02\x02\x02\u01EB\u01ED\x03\x02\x02\x02\u01EC\u01EE\x05" +
		"V,\x02\u01ED\u01EC\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01F0" +
		"\x03\x02\x02\x02\u01EF\u01F1\x05X-\x02\u01F0\u01EF\x03\x02\x02\x02\u01F0" +
		"\u01F1\x03\x02\x02\x02\u01F1\u01F5\x03\x02\x02\x02\u01F2\u01F4\x05(\x15" +
		"\x02\u01F3\u01F2\x03\x02\x02\x02\u01F4\u01F7\x03\x02\x02\x02\u01F5\u01F3" +
		"\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F8\x03\x02\x02\x02" +
		"\u01F7\u01F5\x03\x02\x02\x02\u01F8\u01F9\x07 \x02\x02\u01F9S\x03\x02\x02" +
		"\x02\u01FA\u01FB\x07\x10\x02\x02\u01FB\u01FC\x078\x02\x02\u01FC\u01FD" +
		"\x05\x9AN\x02\u01FD\u01FE\x079\x02\x02\u01FEU\x03\x02\x02\x02\u01FF\u0200" +
		"\x07\x18\x02\x02\u0200";
	private static readonly _serializedATNSegment1: string =
		"\u0201\x078\x02\x02\u0201\u0202\x05\x9AN\x02\u0202\u0203\x079\x02\x02" +
		"\u0203W\x03\x02\x02\x02\u0204\u0205\x07\x1F\x02\x02\u0205\u0209\x078\x02" +
		"\x02\u0206\u0208\x05\x9CO\x02\u0207\u0206\x03\x02\x02\x02\u0208\u020B" +
		"\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02" +
		"\u020A\u020C\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020C\u020D\x07" +
		"9\x02\x02\u020DY\x03\x02\x02\x02\u020E\u0212\x05\\/\x02\u020F\u0211\x05" +
		"(\x15\x02\u0210\u020F\x03\x02\x02\x02\u0211\u0214\x03\x02\x02\x02\u0212" +
		"\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213[\x03\x02\x02" +
		"\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0216\t\x06\x02\x02\u0216\u021C" +
		"\x05\x04\x03\x02\u0217\u021D\x05T+\x02\u0218\u0219\x074\x02\x02\u0219" +
		"\u021A\x05^0\x02\u021A\u021B\x075\x02\x02\u021B\u021D\x03\x02\x02\x02" +
		"\u021C\u0217\x03\x02\x02\x02\u021C\u0218\x03\x02\x02\x02\u021D]\x03\x02" +
		"\x02\x02\u021E\u0220\x05`1\x02\u021F\u021E\x03\x02\x02\x02\u021F\u0220" +
		"\x03\x02\x02\x02\u0220\u0222\x03\x02\x02\x02\u0221\u0223\x05d3\x02\u0222" +
		"\u0221\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223_\x03\x02\x02" +
		"\x02\u0224\u0229\x05b2\x02\u0225\u0226\x07!\x02\x02\u0226\u0228\x05b2" +
		"\x02\u0227\u0225\x03\x02\x02\x02\u0228\u022B\x03\x02\x02\x02\u0229\u0227" +
		"\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022Aa\x03\x02\x02\x02\u022B" +
		"\u0229\x03\x02\x02\x02\u022C\u022D\x05\x04\x03\x02\u022D\u022F\x05\x04" +
		"\x03\x02\u022E\u0230\x05h5\x02\u022F\u022E\x03\x02\x02\x02\u022F\u0230" +
		"\x03\x02\x02\x02\u0230c\x03\x02\x02\x02\u0231\u0233\x07!\x02\x02\u0232" +
		"\u0231\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0234\x03\x02" +
		"\x02\x02\u0234\u023D\x078\x02\x02\u0235\u023A\x05f4\x02\u0236\u0237\x07" +
		"!\x02\x02\u0237\u0239\x05f4\x02\u0238\u0236\x03\x02\x02\x02\u0239\u023C" +
		"\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02" +
		"\u023B\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u0235\x03" +
		"\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F" +
		"\u0241\x079\x02\x02\u0240\u0242\x05\x04\x03\x02\u0241\u0240\x03\x02\x02" +
		"\x02\u0241\u0242\x03\x02\x02\x02\u0242e\x03\x02\x02\x02\u0243\u0244\x07" +
		"6\x02\x02\u0244\u0245\x05\x04\x03\x02\u0245\u0246\x077\x02\x02\u0246\u0249" +
		"\x03\x02\x02\x02\u0247\u0249\x05\x04\x03\x02\u0248\u0243\x03\x02\x02\x02" +
		"\u0248\u0247\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024B\x07" +
		"\"\x02\x02\u024B\u024D\x05\x04\x03\x02\u024C\u024E\x05\x04\x03\x02\u024D" +
		"\u024C\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E\u0250\x03\x02" +
		"\x02\x02\u024F\u0251\x05h5\x02\u0250\u024F\x03\x02\x02\x02\u0250\u0251" +
		"\x03\x02\x02\x02\u0251g\x03\x02\x02\x02\u0252\u0253\x078\x02\x02\u0253" +
		"\u0258\x05j6\x02\u0254\u0255\x07!\x02\x02\u0255\u0257\x05j6\x02\u0256" +
		"\u0254\x03\x02\x02\x02\u0257\u025A\x03\x02\x02\x02\u0258\u0256\x03\x02" +
		"\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u025B\x03\x02\x02\x02\u025A" +
		"\u0258\x03\x02\x02\x02\u025B\u025C\x079\x02\x02\u025Ci\x03\x02\x02\x02" +
		"\u025D\u025F\x05\x04\x03\x02\u025E\u0260\x054\x1B\x02\u025F\u025E\x03" +
		"\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260k\x03\x02\x02\x02\u0261" +
		"\u0263\x05n8\x02\u0262\u0264\x05|?\x02\u0263\u0262\x03\x02\x02\x02\u0263" +
		"\u0264\x03\x02\x02\x02\u0264m\x03\x02\x02\x02\u0265\u0266\x05N(\x02\u0266" +
		"o\x03\x02\x02\x02\u0267\u0269\x05|?\x02\u0268\u0267\x03\x02\x02\x02\u0268" +
		"\u0269\x03\x02\x02\x02\u0269\u026D\x03\x02\x02\x02\u026A\u026C\x05l7\x02" +
		"\u026B\u026A\x03\x02\x02\x02\u026C\u026F\x03\x02\x02\x02\u026D\u026B\x03" +
		"\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026Eq\x03\x02\x02\x02\u026F" +
		"\u026D\x03\x02\x02\x02\u0270\u0271\b:\x01\x02\u0271\u0272\x074\x02\x02" +
		"\u0272\u0273\x05r:\x02\u0273\u0274\x075\x02\x02\u0274\u0277\x03\x02\x02" +
		"\x02\u0275\u0277\x05t;\x02\u0276\u0270\x03\x02\x02\x02\u0276\u0275\x03" +
		"\x02\x02\x02\u0277\u0280\x03\x02\x02\x02\u0278\u0279\f\x05\x02\x02\u0279" +
		"\u027A\x070\x02\x02\u027A\u027F\x05r:\x06\u027B\u027C\f\x04\x02\x02\u027C" +
		"\u027D\x071\x02\x02\u027D\u027F\x05r:\x05\u027E\u0278\x03\x02\x02\x02" +
		"\u027E\u027B\x03\x02\x02\x02\u027F\u0282\x03\x02\x02\x02\u0280\u027E\x03" +
		"\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281s\x03\x02\x02\x02\u0282" +
		"\u0280\x03\x02\x02\x02\u0283\u0284\x054\x1B\x02\u0284\u0285\x05v<\x02" +
		"\u0285\u0286\x054\x1B\x02\u0286u\x03\x02\x02\x02\u0287\u0288\t\x07\x02" +
		"\x02\u0288w\x03\x02\x02\x02\u0289\u028A\x054\x1B\x02\u028A\u028B\x073" +
		"\x02\x02\u028B\u028C\x054\x1B\x02\u028Cy\x03\x02\x02\x02\u028D\u028E\x05" +
		"4\x1B\x02\u028E\u028F\x072\x02\x02\u028F\u0290\x054\x1B\x02\u0290{\x03" +
		"\x02\x02\x02\u0291\u0293\x05~@\x02\u0292\u0291\x03\x02\x02\x02\u0293\u0294" +
		"\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02" +
		"\u0295}\x03\x02\x02\x02\u0296\u0299\x05r:\x02\u0297\u0299\x05\x98M\x02" +
		"\u0298\u0296\x03\x02\x02\x02\u0298\u0297\x03\x02\x02\x02\u0299\x7F\x03" +
		"\x02\x02\x02\u029A\u029B\x07\x1B\x02\x02\u029B\u029C\x074\x02\x02\u029C" +
		"\u029D\x054\x1B\x02\u029D\u029E\x075\x02\x02\u029E\u02A2\x078\x02\x02" +
		"\u029F\u02A1\x05\x84C\x02\u02A0\u029F\x03\x02\x02\x02\u02A1\u02A4\x03" +
		"\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3" +
		"\u02A6\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A5\u02A7\x05\x86" +
		"D\x02\u02A6\u02A5\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A8" +
		"\x03\x02\x02\x02\u02A8\u02A9\x079\x02\x02\u02A9\x81\x03\x02\x02\x02\u02AA" +
		"\u02AB\x07\x1B\x02\x02\u02AB\u02AF\x078\x02\x02\u02AC\u02AE\x05\x84C\x02" +
		"\u02AD\u02AC\x03\x02\x02\x02\u02AE\u02B1\x03\x02\x02\x02\u02AF\u02AD\x03" +
		"\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B3\x03\x02\x02\x02\u02B1" +
		"\u02AF\x03\x02\x02\x02\u02B2\u02B4\x05\x86D\x02\u02B3\u02B2\x03\x02\x02" +
		"\x02\u02B3\u02B4\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B6" +
		"\x079\x02\x02\u02B6\x83\x03\x02\x02\x02\u02B7\u02B8\x07\x1C\x02\x02\u02B8" +
		"\u02B9\x074\x02\x02\u02B9\u02BA\x05.\x18\x02\u02BA\u02BB\x075\x02\x02" +
		"\u02BB\u02BE\x07\"\x02\x02\u02BC\u02BF\x05\x92J\x02\u02BD\u02BF\x05\x94" +
		"K\x02\u02BE\u02BC\x03\x02\x02\x02\u02BE\u02BD\x03\x02\x02\x02\u02BF\x85" +
		"\x03\x02\x02\x02\u02C0\u02C1\x07\x1D\x02\x02\u02C1\u02C4\x07\"\x02\x02" +
		"\u02C2\u02C5\x05\x92J\x02\u02C3\u02C5\x05\x94K\x02\u02C4\u02C2\x03\x02" +
		"\x02\x02\u02C4\u02C3\x03\x02\x02\x02\u02C5\x87\x03\x02\x02\x02\u02C6\u02C7" +
		"\x07\x1E\x02\x02\u02C7\u02C8\x07 \x02\x02\u02C8\x89\x03\x02\x02\x02\u02C9" +
		"\u02CF\x05\x8CG\x02\u02CA\u02CD\x07\x14\x02\x02\u02CB\u02CE\x05\x94K\x02" +
		"\u02CC\u02CE\x05\x92J\x02\u02CD\u02CB\x03\x02\x02\x02\u02CD\u02CC\x03" +
		"\x02\x02\x02\u02CE\u02D0\x03\x02\x02\x02\u02CF\u02CA\x03\x02\x02\x02\u02CF" +
		"\u02D0\x03\x02\x02\x02\u02D0\x8B\x03\x02\x02\x02\u02D1\u02D2\x07\x12\x02" +
		"\x02\u02D2\u02D3\x074\x02\x02\u02D3\u02D4\x05~@\x02\u02D4\u02D7\x075\x02" +
		"\x02\u02D5\u02D8\x05\x94K\x02\u02D6\u02D8\x05\x92J\x02\u02D7\u02D5\x03" +
		"\x02\x02\x02\u02D7\u02D6\x03\x02\x02\x02\u02D8\x8D\x03\x02\x02\x02\u02D9" +
		"\u02DA\x07\x17\x02\x02\u02DA\u02DB\x054\x1B\x02\u02DB\u02DC\x07 \x02\x02" +
		"\u02DC\x8F\x03\x02\x02\x02\u02DD\u02DE\x05J&\x02\u02DE\x91\x03\x02\x02" +
		"\x02\u02DF\u02E0\x05\x90I\x02\u02E0\u02E1\x07 \x02\x02\u02E1\u02F0\x03" +
		"\x02\x02\x02\u02E2\u02E3\x05x=\x02\u02E3\u02E4\x07 \x02\x02\u02E4\u02F0" +
		"\x03\x02\x02\x02\u02E5\u02E6\x05z>\x02\u02E6\u02E7\x07 \x02\x02\u02E7" +
		"\u02F0\x03\x02\x02\x02\u02E8\u02F0\x056\x1C\x02\u02E9\u02F0\x05\x8EH\x02" +
		"\u02EA\u02F0\x05\x8AF\x02\u02EB\u02F0\x05\x82B\x02\u02EC\u02F0\x05\x88" +
		"E\x02\u02ED\u02F0\x05\x80A\x02\u02EE\u02F0\x058\x1D\x02\u02EF\u02DF\x03" +
		"\x02\x02\x02\u02EF\u02E2\x03\x02\x02\x02\u02EF\u02E5\x03\x02\x02\x02\u02EF" +
		"\u02E8\x03\x02\x02\x02\u02EF\u02E9\x03\x02\x02\x02\u02EF\u02EA\x03\x02" +
		"\x02\x02\u02EF\u02EB\x03\x02\x02\x02\u02EF\u02EC\x03\x02\x02\x02\u02EF" +
		"\u02ED\x03\x02\x02\x02\u02EF\u02EE\x03\x02\x02\x02\u02F0\x93\x03\x02\x02" +
		"\x02\u02F1\u02F3\x078\x02\x02\u02F2\u02F4\x05\x92J\x02\u02F3\u02F2\x03" +
		"\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F5" +
		"\u02F6\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02F8\x079\x02" +
		"\x02\u02F8\x95\x03\x02\x02\x02\u02F9\u02FA\bL\x01\x02\u02FA\u02FB\x07" +
		"4\x02\x02\u02FB\u02FC\x05\x96L\x02\u02FC\u02FD\x075\x02\x02\u02FD\u030A" +
		"\x03\x02\x02\x02\u02FE\u02FF\x07@\x02\x02\u02FF\u030A\x05\x96L\x06\u0300" +
		"\u0301\x05J&\x02\u0301\u0302\x07@\x02\x02\u0302\u0303\x05\x96L\x05\u0303" +
		"\u030A\x03\x02\x02\x02\u0304\u0305\x05J&\x02\u0305\u0306\x07@\x02\x02" +
		"\u0306\u0307\x05J&\x02\u0307\u030A\x03\x02\x02\x02\u0308\u030A\x07E\x02" +
		"\x02\u0309\u02F9\x03\x02\x02\x02\u0309\u02FE\x03\x02\x02\x02\u0309\u0300" +
		"\x03\x02\x02\x02\u0309\u0304\x03\x02\x02\x02\u0309\u0308\x03\x02\x02\x02" +
		"\u030A\u0310\x03\x02\x02\x02\u030B\u030C\f\x07\x02\x02\u030C\u030D\x07" +
		"@\x02\x02\u030D\u030F\x05\x96L\b\u030E\u030B\x03\x02\x02\x02\u030F\u0312" +
		"\x03\x02\x02\x02\u0310\u030E\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02" +
		"\u0311\x97\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02\u0313\u0314\x05" +
		"\x04\x03\x02\u0314\u0315\x074\x02\x02\u0315\u0316\x05p9\x02\u0316\u0317" +
		"\x075\x02\x02\u0317\x99\x03\x02\x02\x02\u0318\u031A\x05 \x11\x02\u0319" +
		"\u0318\x03\x02\x02\x02\u031A\u031D\x03\x02\x02\x02\u031B\u0319\x03\x02" +
		"\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C\x9B\x03\x02\x02\x02\u031D\u031B" +
		"\x03\x02\x02\x02\u031E\u031F\x05\x04\x03\x02\u031F\u0322\x05\x04\x03\x02" +
		"\u0320\u0321\x07\x05\x02\x02\u0321\u0323\x05\x04\x03\x02\u0322\u0320\x03" +
		"\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323\u0327\x03\x02\x02\x02\u0324" +
		"\u0326\x05(\x15\x02\u0325\u0324\x03\x02\x02\x02\u0326\u0329\x03\x02\x02" +
		"\x02\u0327\u0325\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328\u032A" +
		"\x03\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u032A\u032B\x07 \x02\x02" +
		"\u032B\x9D\x03\x02\x02\x02\u032C\u032F\x07\f\x02\x02\u032D\u0330\x05Z" +
		".\x02\u032E\u0330\x05 \x11\x02\u032F\u032D\x03\x02\x02\x02\u032F\u032E" +
		"\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331\u0332\x07 \x02\x02" +
		"\u0332\x9F\x03\x02\x02\x02\u0333\u0335\x076\x02\x02\u0334\u0336\x054\x1B" +
		"\x02\u0335\u0334\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336\u033B" +
		"\x03\x02\x02\x02\u0337\u0338\x07!\x02\x02\u0338\u033A\x054\x1B\x02\u0339" +
		"\u0337\x03\x02\x02\x02\u033A\u033D\x03\x02\x02\x02\u033B\u0339\x03\x02" +
		"\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C\u033E\x03\x02\x02\x02\u033D" +
		"\u033B\x03\x02\x02\x02\u033E\u033F\x077\x02\x02\u033F\xA1\x03\x02\x02" +
		"\x02\u0340\u0342\x078\x02\x02\u0341\u0343\x054\x1B\x02\u0342\u0341\x03" +
		"\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343\u0348\x03\x02\x02\x02\u0344" +
		"\u0345\x07!\x02\x02\u0345\u0347\x054\x1B\x02\u0346\u0344\x03\x02\x02\x02" +
		"\u0347\u034A\x03\x02\x02\x02\u0348\u0346\x03\x02\x02\x02\u0348\u0349\x03" +
		"\x02\x02\x02\u0349\u034B\x03\x02\x02\x02\u034A\u0348\x03\x02\x02\x02\u034B" +
		"\u034C\x079\x02\x02\u034C\xA3\x03\x02\x02\x02\u034D\u034E\x07L\x02\x02" +
		"\u034E\xA5\x03\x02\x02\x02\u034F\u0350\x07\r\x02\x02\u0350\u0354\x05\x04" +
		"\x03\x02\u0351\u0353\x05(\x15\x02\u0352\u0351\x03\x02\x02\x02\u0353\u0356" +
		"\x03\x02\x02\x02\u0354\u0352\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02" +
		"\u0355\u0357\x03\x02\x02\x02\u0356\u0354\x03\x02\x02\x02\u0357\u0358\x07" +
		" \x02\x02\u0358\xA7\x03\x02\x02\x02]\xAF\xBA\xC4\xC9\xCF\xD8\xDF\xE4\xE6" +
		"\xEA\xF0\xF7\xFB\u0100\u0108\u0113\u011B\u0129\u012C\u012F\u0136\u013E" +
		"\u0144\u014B\u0150\u0159\u015C\u0162\u016F\u0177\u017F\u0184\u019F\u01AA" +
		"\u01B3\u01B6\u01C1\u01CB\u01D1\u01D6\u01E1\u01EA\u01ED\u01F0\u01F5\u0209" +
		"\u0212\u021C\u021F\u0222\u0229\u022F\u0232\u023A\u023D\u0241\u0248\u024D" +
		"\u0250\u0258\u025F\u0263\u0268\u026D\u0276\u027E\u0280\u0294\u0298\u02A2" +
		"\u02A6\u02AF\u02B3\u02BE\u02C4\u02CD\u02CF\u02D7\u02EF\u02F5\u0309\u0310" +
		"\u031B\u0322\u0327\u032F\u0335\u033B\u0342\u0348\u0354";
	public static readonly _serializedATN: string = Utils.join(
		[
			YmlToBdlParser._serializedATNSegment0,
			YmlToBdlParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!YmlToBdlParser.__ATN) {
			YmlToBdlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(YmlToBdlParser._serializedATN));
		}

		return YmlToBdlParser.__ATN;
	}

}

export class ExpressionMarkerContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.DOT, 0); }
	public MULTIVALUED_EXPRESSION(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.MULTIVALUED_EXPRESSION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_expressionMarker; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterExpressionMarker) {
			listener.enterExpressionMarker(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitExpressionMarker) {
			listener.exitExpressionMarker(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitExpressionMarker) {
			return visitor.visitExpressionMarker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YmlIdContext extends ParserRuleContext {
	public YMLID(): TerminalNode { return this.getToken(YmlToBdlParser.YMLID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_ymlId; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterYmlId) {
			listener.enterYmlId(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitYmlId) {
			listener.exitYmlId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitYmlId) {
			return visitor.visitYmlId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KaoFileContext extends ParserRuleContext {
	public _entities: YmlEntityContext;
	public EOF(): TerminalNode { return this.getToken(YmlToBdlParser.EOF, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_kaoFile; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterKaoFile) {
			listener.enterKaoFile(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitKaoFile) {
			listener.exitKaoFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public complete(): CompleteContext | undefined {
		return this.tryGetRuleContext(0, CompleteContext);
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_ymlEntity; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterYmlEntity) {
			listener.enterYmlEntity(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitYmlEntity) {
			listener.exitYmlEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitYmlEntity) {
			return visitor.visitYmlEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YenumContext extends ParserRuleContext {
	public _yid: YmlIdContext;
	public _fields: FieldContext;
	public ENUM(): TerminalNode { return this.getToken(YmlToBdlParser.ENUM, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
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
			return this.getTokens(YmlToBdlParser.COMMA);
		} else {
			return this.getToken(YmlToBdlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_yenum; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterYenum) {
			listener.enterYenum(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitYenum) {
			listener.exitYenum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_enumElement; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterEnumElement) {
			listener.enterEnumElement(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitEnumElement) {
			listener.exitEnumElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
			return this.getTokens(YmlToBdlParser.SEMICOLON);
		} else {
			return this.getToken(YmlToBdlParser.SEMICOLON, i);
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
	public EOF(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public IMPLEMENTATION(): TerminalNode { return this.getToken(YmlToBdlParser.IMPLEMENTATION, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_classImplementation; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterClassImplementation) {
			listener.enterClassImplementation(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitClassImplementation) {
			listener.exitClassImplementation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitClassImplementation) {
			return visitor.visitClassImplementation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideContext extends ParserRuleContext {
	public OVERRIDE(): TerminalNode { return this.getToken(YmlToBdlParser.OVERRIDE, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_override; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterOverride) {
			listener.enterOverride(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitOverride) {
			listener.exitOverride(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public FUNCTION(): TerminalNode { return this.getToken(YmlToBdlParser.FUNCTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_overrideInstruction; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterOverrideInstruction) {
			listener.enterOverrideInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitOverrideInstruction) {
			listener.exitOverrideInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitOverrideInstruction) {
			return visitor.visitOverrideInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationIntroContext extends ParserRuleContext {
	public _className: YmlIdContext;
	public INTERFACE(): TerminalNode { return this.getToken(YmlToBdlParser.INTERFACE, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_classDeclarationIntro; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterClassDeclarationIntro) {
			listener.enterClassDeclarationIntro(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitClassDeclarationIntro) {
			listener.exitClassDeclarationIntro(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitClassDeclarationIntro) {
			return visitor.visitClassDeclarationIntro(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtendsBlockContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(YmlToBdlParser.EXTENDS, 0); }
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
			return this.getTokens(YmlToBdlParser.COMMA);
		} else {
			return this.getToken(YmlToBdlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_extendsBlock; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterExtendsBlock) {
			listener.enterExtendsBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitExtendsBlock) {
			listener.exitExtendsBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_parentClassName; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterParentClassName) {
			listener.enterParentClassName(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitParentClassName) {
			listener.exitParentClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public SYNONYM(): TerminalNode { return this.getToken(YmlToBdlParser.SYNONYM, 0); }
	public listWithBrace(): ListWithBraceContext | undefined {
		return this.tryGetRuleContext(0, ListWithBraceContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.CLOSE_PAR, 0); }
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
			return this.getTokens(YmlToBdlParser.COMMA);
		} else {
			return this.getToken(YmlToBdlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_synonym; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterSynonym) {
			listener.enterSynonym(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitSynonym) {
			listener.exitSynonym(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public FIELD(): TerminalNode { return this.getToken(YmlToBdlParser.FIELD, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_classAttributeDeclaration; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterClassAttributeDeclaration) {
			listener.enterClassAttributeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitClassAttributeDeclaration) {
			listener.exitClassAttributeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_memberDeclaration; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterMemberDeclaration) {
			listener.enterMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitMemberDeclaration) {
			listener.exitMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public COND_OR(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.COND_OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_memberType; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterMemberType) {
			listener.enterMemberType(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitMemberType) {
			listener.exitMemberType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
			return this.getTokens(YmlToBdlParser.DOT);
		} else {
			return this.getToken(YmlToBdlParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_path; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterPath) {
			listener.enterPath(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitPath) {
			listener.exitPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.RETURN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_ymlIdOrPath; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterYmlIdOrPath) {
			listener.enterYmlIdOrPath(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitYmlIdOrPath) {
			listener.exitYmlIdOrPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitYmlIdOrPath) {
			return visitor.visitYmlIdOrPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public _fieldArrow: Token;
	public _optionName: YmlIdOrPathContext;
	public _valueOrCondition: ValueOrConditionContext;
	public _optionValues: ValueOrConditionContext[] = [];
	public ymlIdOrPath(): YmlIdOrPathContext {
		return this.getRuleContext(0, YmlIdOrPathContext);
	}
	public FIELD_INTRO(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.FIELD_INTRO, 0); }
	public REPLACE_FIELD_VALUE_INTRO(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO, 0); }
	public REMOVE_FIELD(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.REMOVE_FIELD, 0); }
	public ADD_FIELD(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.ADD_FIELD, 0); }
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
			return this.getTokens(YmlToBdlParser.COMMA);
		} else {
			return this.getToken(YmlToBdlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_field; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassPropertiesBlockContext extends ParserRuleContext {
	public _classOption: FieldContext;
	public CLASSPROPERTIES(): TerminalNode { return this.getToken(YmlToBdlParser.CLASSPROPERTIES, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_classPropertiesBlock; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterClassPropertiesBlock) {
			listener.enterClassPropertiesBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitClassPropertiesBlock) {
			listener.exitClassPropertiesBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitClassPropertiesBlock) {
			return visitor.visitClassPropertiesBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DocumentationContext extends ParserRuleContext {
	public DOCUMENTATION(): TerminalNode { return this.getToken(YmlToBdlParser.DOCUMENTATION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_documentation; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterDocumentation) {
			listener.enterDocumentation(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitDocumentation) {
			listener.exitDocumentation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitDocumentation) {
			return visitor.visitDocumentation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueOrConditionContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_valueOrCondition; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterValueOrCondition) {
			listener.enterValueOrCondition(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitValueOrCondition) {
			listener.exitValueOrCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public COLON(): TerminalNode { return this.getToken(YmlToBdlParser.COLON, 0); }
	public hashMapValue(): HashMapValueContext {
		return this.getRuleContext(0, HashMapValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_hashMapKeyValue; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterHashMapKeyValue) {
			listener.enterHashMapKeyValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitHashMapKeyValue) {
			listener.exitHashMapKeyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_hashMapValue; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterHashMapValue) {
			listener.enterHashMapValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitHashMapValue) {
			listener.exitHashMapValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_value; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_forEachContext extends ParserRuleContext {
	public FOREACH(): TerminalNode { return this.getToken(YmlToBdlParser.FOREACH, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_PAR, 0); }
	public COMMA(): TerminalNode { return this.getToken(YmlToBdlParser.COMMA, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_PAR, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instruction_forEach; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstruction_forEach) {
			listener.enterInstruction_forEach(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstruction_forEach) {
			listener.exitInstruction_forEach(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitInstruction_forEach) {
			return visitor.visitInstruction_forEach(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_ifExprBlockContext extends ParserRuleContext {
	public ifExprBlock(): IfExprBlockContext {
		return this.getRuleContext(0, IfExprBlockContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instruction_ifExprBlock; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstruction_ifExprBlock) {
			listener.enterInstruction_ifExprBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstruction_ifExprBlock) {
			listener.exitInstruction_ifExprBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitInstruction_ifExprBlock) {
			return visitor.visitInstruction_ifExprBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfExprBlockContext extends ParserRuleContext {
	public _thenValue: ValueContext;
	public _elseValue: ValueContext;
	public IF_EXPR(): TerminalNode { return this.getToken(YmlToBdlParser.IF_EXPR, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_PAR, 0); }
	public combinedComparison(): CombinedComparisonContext {
		return this.getRuleContext(0, CombinedComparisonContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_PAR, 0); }
	public THEN(): TerminalNode { return this.getToken(YmlToBdlParser.THEN, 0); }
	public ELSE(): TerminalNode { return this.getToken(YmlToBdlParser.ELSE, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_ifExprBlock; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterIfExprBlock) {
			listener.enterIfExprBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitIfExprBlock) {
			listener.exitIfExprBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitIfExprBlock) {
			return visitor.visitIfExprBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_bool; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public STRING(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.STRING, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.DATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_nonArithmeticValue; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterNonArithmeticValue) {
			listener.enterNonArithmeticValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitNonArithmeticValue) {
			listener.exitNonArithmeticValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitNonArithmeticValue) {
			return visitor.visitNonArithmeticValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanciationVariableContext extends ParserRuleContext {
	public QUESTION_MARK(): TerminalNode { return this.getToken(YmlToBdlParser.QUESTION_MARK, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instanciationVariable; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstanciationVariable) {
			listener.enterInstanciationVariable(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstanciationVariable) {
			listener.exitInstanciationVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public listWithBrace(): ListWithBraceContext | undefined {
		return this.tryGetRuleContext(0, ListWithBraceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_expression; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_PAR, 0); }
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
			return this.getTokens(YmlToBdlParser.COMMA);
		} else {
			return this.getToken(YmlToBdlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public OPEN_BRACKET(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACKET, 0); }
	public functionArgument(): FunctionArgumentContext {
		return this.getRuleContext(0, FunctionArgumentContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_indexedCall; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterIndexedCall) {
			listener.enterIndexedCall(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitIndexedCall) {
			listener.exitIndexedCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public COLON(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.COLON, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_functionArgument; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterFunctionArgument) {
			listener.enterFunctionArgument(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitFunctionArgument) {
			listener.exitFunctionArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_chainedCall; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterChainedCall) {
			listener.enterChainedCall(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitChainedCall) {
			listener.exitChainedCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public INLINE_DECL_INTRO(): TerminalNode { return this.getToken(YmlToBdlParser.INLINE_DECL_INTRO, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_inlineDeclaration; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInlineDeclaration) {
			listener.enterInlineDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInlineDeclaration) {
			listener.exitInlineDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_inlineOperation; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInlineOperation) {
			listener.enterInlineOperation(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInlineOperation) {
			listener.exitInlineOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_fieldValue; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterFieldValue) {
			listener.enterFieldValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitFieldValue) {
			listener.exitFieldValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public SEMICOLON(): TerminalNode { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
	public METHOD(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.METHOD, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.FUNCTION, 0); }
	public TEXT_METHOD(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.TEXT_METHOD, 0); }
	public TEXT_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.TEXT_FUNCTION, 0); }
	public argsBlock(): ArgsBlockContext | undefined {
		return this.tryGetRuleContext(0, ArgsBlockContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.OPEN_PAR, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.CLOSE_PAR, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_function; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsBlockContext extends ParserRuleContext {
	public ARGS(): TerminalNode { return this.getToken(YmlToBdlParser.ARGS, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public variableBlockContent(): VariableBlockContentContext {
		return this.getRuleContext(0, VariableBlockContentContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_argsBlock; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterArgsBlock) {
			listener.enterArgsBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitArgsBlock) {
			listener.exitArgsBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitArgsBlock) {
			return visitor.visitArgsBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalBlockContext extends ParserRuleContext {
	public LOCAL(): TerminalNode { return this.getToken(YmlToBdlParser.LOCAL, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public variableBlockContent(): VariableBlockContentContext {
		return this.getRuleContext(0, VariableBlockContentContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_localBlock; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterLocalBlock) {
			listener.enterLocalBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitLocalBlock) {
			listener.exitLocalBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitLocalBlock) {
			return visitor.visitLocalBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticBlockContext extends ParserRuleContext {
	public STATIC(): TerminalNode { return this.getToken(YmlToBdlParser.STATIC, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_staticBlock; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterStaticBlock) {
			listener.enterStaticBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitStaticBlock) {
			listener.exitStaticBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodIntroContext extends ParserRuleContext {
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public METHOD(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.METHOD, 0); }
	public TEXT_METHOD(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.TEXT_METHOD, 0); }
	public TEXT_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.TEXT_FUNCTION, 0); }
	public argsBlock(): ArgsBlockContext | undefined {
		return this.tryGetRuleContext(0, ArgsBlockContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.OPEN_PAR, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_methodIntro; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterMethodIntro) {
			listener.enterMethodIntro(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitMethodIntro) {
			listener.exitMethodIntro(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
			return this.getTokens(YmlToBdlParser.COMMA);
		} else {
			return this.getToken(YmlToBdlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_mandatoryArgs; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterMandatoryArgs) {
			listener.enterMandatoryArgs(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitMandatoryArgs) {
			listener.exitMandatoryArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_mandatoryArgDecl; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterMandatoryArgDecl) {
			listener.enterMandatoryArgDecl(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitMandatoryArgDecl) {
			listener.exitMandatoryArgDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlToBdlParser.COMMA);
		} else {
			return this.getToken(YmlToBdlParser.COMMA, i);
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_optionalArgs; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterOptionalArgs) {
			listener.enterOptionalArgs(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitOptionalArgs) {
			listener.exitOptionalArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public COLON(): TerminalNode { return this.getToken(YmlToBdlParser.COLON, 0); }
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
	}
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.CLOSE_BRACKET, 0); }
	public argOptionList(): ArgOptionListContext | undefined {
		return this.tryGetRuleContext(0, ArgOptionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_optionalArgDecl; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterOptionalArgDecl) {
			listener.enterOptionalArgDecl(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitOptionalArgDecl) {
			listener.exitOptionalArgDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
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
			return this.getTokens(YmlToBdlParser.COMMA);
		} else {
			return this.getToken(YmlToBdlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_argOptionList; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterArgOptionList) {
			listener.enterArgOptionList(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitArgOptionList) {
			listener.exitArgOptionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_argOptionBlock; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterArgOptionBlock) {
			listener.enterArgOptionBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitArgOptionBlock) {
			listener.exitArgOptionBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_order1Block; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterOrder1Block) {
			listener.enterOrder1Block(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitOrder1Block) {
			listener.exitOrder1Block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instanciationCondition; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstanciationCondition) {
			listener.enterInstanciationCondition(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstanciationCondition) {
			listener.exitInstanciationCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_order1FullCondition; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterOrder1FullCondition) {
			listener.enterOrder1FullCondition(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitOrder1FullCondition) {
			listener.exitOrder1FullCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.OPEN_PAR, 0); }
	public combinedComparison(): CombinedComparisonContext[];
	public combinedComparison(i: number): CombinedComparisonContext;
	public combinedComparison(i?: number): CombinedComparisonContext | CombinedComparisonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CombinedComparisonContext);
		} else {
			return this.getRuleContext(i, CombinedComparisonContext);
		}
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.CLOSE_PAR, 0); }
	public COND_AND(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.COND_AND, 0); }
	public COND_OR(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.COND_OR, 0); }
	public comparison(): ComparisonContext | undefined {
		return this.tryGetRuleContext(0, ComparisonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_combinedComparison; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterCombinedComparison) {
			listener.enterCombinedComparison(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitCombinedComparison) {
			listener.exitCombinedComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_comparison; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public EQUAL_COMP(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.EQUAL_COMP, 0); }
	public NOT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.NOT_EQUALS, 0); }
	public LESS_OR_EQUAL(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.LESS_OR_EQUAL, 0); }
	public GREATE_OR_EQUAL(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.GREATE_OR_EQUAL, 0); }
	public STRICT_LESS(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.STRICT_LESS, 0); }
	public STRICT_GREAT(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.STRICT_GREAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_multivaluedAffectationContext extends ParserRuleContext {
	public _leftHand: ValueContext;
	public _rightHand: ValueContext;
	public MULTIVALUED_AFFECT(): TerminalNode { return this.getToken(YmlToBdlParser.MULTIVALUED_AFFECT, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instruction_multivaluedAffectation; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstruction_multivaluedAffectation) {
			listener.enterInstruction_multivaluedAffectation(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstruction_multivaluedAffectation) {
			listener.exitInstruction_multivaluedAffectation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitInstruction_multivaluedAffectation) {
			return visitor.visitInstruction_multivaluedAffectation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_affectationContext extends ParserRuleContext {
	public _leftHand: ValueContext;
	public _rightHand: ValueContext;
	public EQUAL_AFFECT(): TerminalNode { return this.getToken(YmlToBdlParser.EQUAL_AFFECT, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instruction_affectation; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstruction_affectation) {
			listener.enterInstruction_affectation(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstruction_affectation) {
			listener.exitInstruction_affectation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitInstruction_affectation) {
			return visitor.visitInstruction_affectation(this);
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_conditionBlock; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterConditionBlock) {
			listener.enterConditionBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitConditionBlock) {
			listener.exitConditionBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_order0Condition; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterOrder0Condition) {
			listener.enterOrder0Condition(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitOrder0Condition) {
			listener.exitOrder0Condition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitOrder0Condition) {
			return visitor.visitOrder0Condition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_switchCase_withValueContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(YmlToBdlParser.SWITCH, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_PAR, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_PAR, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instruction_switchCase_withValue; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstruction_switchCase_withValue) {
			listener.enterInstruction_switchCase_withValue(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstruction_switchCase_withValue) {
			listener.exitInstruction_switchCase_withValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitInstruction_switchCase_withValue) {
			return visitor.visitInstruction_switchCase_withValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_switchCase_asIfContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(YmlToBdlParser.SWITCH, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instruction_switchCase_asIf; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstruction_switchCase_asIf) {
			listener.enterInstruction_switchCase_asIf(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstruction_switchCase_asIf) {
			listener.exitInstruction_switchCase_asIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitInstruction_switchCase_asIf) {
			return visitor.visitInstruction_switchCase_asIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionCaseContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(YmlToBdlParser.CASE, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_PAR, 0); }
	public valueOrCondition(): ValueOrConditionContext {
		return this.getRuleContext(0, ValueOrConditionContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_PAR, 0); }
	public COLON(): TerminalNode { return this.getToken(YmlToBdlParser.COLON, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instructionCase; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstructionCase) {
			listener.enterInstructionCase(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstructionCase) {
			listener.exitInstructionCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitInstructionCase) {
			return visitor.visitInstructionCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionDefaultContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(YmlToBdlParser.DEFAULT, 0); }
	public COLON(): TerminalNode { return this.getToken(YmlToBdlParser.COLON, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instructionDefault; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstructionDefault) {
			listener.enterInstructionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstructionDefault) {
			listener.exitInstructionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitInstructionDefault) {
			return visitor.visitInstructionDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_breakContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(YmlToBdlParser.BREAK, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instruction_break; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstruction_break) {
			listener.enterInstruction_break(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstruction_break) {
			listener.exitInstruction_break(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.ELSE, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instruction_ifElse; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstruction_ifElse) {
			listener.enterInstruction_ifElse(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstruction_ifElse) {
			listener.exitInstruction_ifElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitInstruction_ifElse) {
			return visitor.visitInstruction_ifElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_ifContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(YmlToBdlParser.IF, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_PAR, 0); }
	public order0Condition(): Order0ConditionContext {
		return this.getRuleContext(0, Order0ConditionContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_PAR, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instruction_if; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstruction_if) {
			listener.enterInstruction_if(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstruction_if) {
			listener.exitInstruction_if(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitInstruction_if) {
			return visitor.visitInstruction_if(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_returnContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(YmlToBdlParser.RETURN, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instruction_return; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstruction_return) {
			listener.enterInstruction_return(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstruction_return) {
			listener.exitInstruction_return(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instruction_chainedCall; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstruction_chainedCall) {
			listener.enterInstruction_chainedCall(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstruction_chainedCall) {
			listener.exitInstruction_chainedCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.SEMICOLON, 0); }
	public instruction_multivaluedAffectation(): Instruction_multivaluedAffectationContext | undefined {
		return this.tryGetRuleContext(0, Instruction_multivaluedAffectationContext);
	}
	public instruction_affectation(): Instruction_affectationContext | undefined {
		return this.tryGetRuleContext(0, Instruction_affectationContext);
	}
	public instruction_forEach(): Instruction_forEachContext | undefined {
		return this.tryGetRuleContext(0, Instruction_forEachContext);
	}
	public instruction_return(): Instruction_returnContext | undefined {
		return this.tryGetRuleContext(0, Instruction_returnContext);
	}
	public instruction_ifElse(): Instruction_ifElseContext | undefined {
		return this.tryGetRuleContext(0, Instruction_ifElseContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_instruction; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitInstruction) {
			return visitor.visitInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionBlockContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_actionBlock; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterActionBlock) {
			listener.enterActionBlock(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitActionBlock) {
			listener.exitActionBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.CLOSE_PAR, 0); }
	public arithmeticExpression(): ArithmeticExpressionContext[];
	public arithmeticExpression(i: number): ArithmeticExpressionContext;
	public arithmeticExpression(i?: number): ArithmeticExpressionContext | ArithmeticExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArithmeticExpressionContext);
		} else {
			return this.getRuleContext(i, ArithmeticExpressionContext);
		}
	}
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.OPERATOR, 0); }
	public chainedCall(): ChainedCallContext[];
	public chainedCall(i: number): ChainedCallContext;
	public chainedCall(i?: number): ChainedCallContext | ChainedCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ChainedCallContext);
		} else {
			return this.getRuleContext(i, ChainedCallContext);
		}
	}
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_arithmeticExpression; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterArithmeticExpression) {
			listener.enterArithmeticExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitArithmeticExpression) {
			listener.exitArithmeticExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitArithmeticExpression) {
			return visitor.visitArithmeticExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExistentialOperatorContext extends ParserRuleContext {
	public _operator: YmlIdContext;
	public OPEN_PAR(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_PAR, 0); }
	public order1FullCondition(): Order1FullConditionContext {
		return this.getRuleContext(0, Order1FullConditionContext);
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_PAR, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_existentialOperator; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterExistentialOperator) {
			listener.enterExistentialOperator(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitExistentialOperator) {
			listener.exitExistentialOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_variableBlockContent; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterVariableBlockContent) {
			listener.enterVariableBlockContent(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitVariableBlockContent) {
			listener.exitVariableBlockContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
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
	public SEMICOLON(): TerminalNode { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
	public ymlId(): YmlIdContext[];
	public ymlId(i: number): YmlIdContext;
	public ymlId(i?: number): YmlIdContext | YmlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YmlIdContext);
		} else {
			return this.getRuleContext(i, YmlIdContext);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.EXTENDS, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_staticDeclaration; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterStaticDeclaration) {
			listener.enterStaticDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitStaticDeclaration) {
			listener.exitStaticDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitStaticDeclaration) {
			return visitor.visitStaticDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternDeclarationContext extends ParserRuleContext {
	public EXTERN(): TerminalNode { return this.getToken(YmlToBdlParser.EXTERN, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_externDeclaration; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterExternDeclaration) {
			listener.enterExternDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitExternDeclaration) {
			listener.exitExternDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitExternDeclaration) {
			return visitor.visitExternDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public _value: ValueContext;
	public _elements: ValueContext[] = [];
	public OPEN_BRACKET(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlToBdlParser.COMMA);
		} else {
			return this.getToken(YmlToBdlParser.COMMA, i);
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_list; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListWithBraceContext extends ParserRuleContext {
	public _value: ValueContext;
	public _elements: ValueContext[] = [];
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlToBdlParser.COMMA);
		} else {
			return this.getToken(YmlToBdlParser.COMMA, i);
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_listWithBrace; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterListWithBrace) {
			listener.enterListWithBrace(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitListWithBrace) {
			listener.exitListWithBrace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitListWithBrace) {
			return visitor.visitListWithBrace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GranuleContext extends ParserRuleContext {
	public GRANULE(): TerminalNode { return this.getToken(YmlToBdlParser.GRANULE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YmlToBdlParser.RULE_granule; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterGranule) {
			listener.enterGranule(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitGranule) {
			listener.exitGranule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitGranule) {
			return visitor.visitGranule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompleteContext extends ParserRuleContext {
	public _completedElemId: YmlIdContext;
	public _memberOption: FieldContext;
	public COMPLETE(): TerminalNode { return this.getToken(YmlToBdlParser.COMPLETE, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
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
	public get ruleIndex(): number { return YmlToBdlParser.RULE_complete; }
	// @Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterComplete) {
			listener.enterComplete(this);
		}
	}
	// @Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitComplete) {
			listener.exitComplete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitComplete) {
			return visitor.visitComplete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


