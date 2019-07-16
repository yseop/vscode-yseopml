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
	public static readonly OPERATION = 3;
	public static readonly INTERFACE = 4;
	public static readonly IMPLEMENTATION = 5;
	public static readonly EXTENDS = 6;
	public static readonly FUNCTION = 7;
	public static readonly FUNCTION_AS_TYPE = 8;
	public static readonly METHOD = 9;
	public static readonly TEXT_METHOD = 10;
	public static readonly TEXT_FUNCTION = 11;
	public static readonly FIELD = 12;
	public static readonly CLASSPROPERTIES = 13;
	public static readonly EXTERN = 14;
	public static readonly COMPLETE = 15;
	public static readonly SYNONYM = 16;
	public static readonly OVERRIDE = 17;
	public static readonly ARGS = 18;
	public static readonly IF_EXPR = 19;
	public static readonly IF = 20;
	public static readonly THEN = 21;
	public static readonly ELSE = 22;
	public static readonly ENUM = 23;
	public static readonly DO = 24;
	public static readonly TRY = 25;
	public static readonly CATCH = 26;
	public static readonly FOREACH = 27;
	public static readonly FORALL = 28;
	public static readonly IN = 29;
	public static readonly AS = 30;
	public static readonly RETURN = 31;
	public static readonly LOCAL = 32;
	public static readonly TRUE = 33;
	public static readonly FALSE = 34;
	public static readonly SWITCH = 35;
	public static readonly CASE = 36;
	public static readonly DEFAULT = 37;
	public static readonly BREAK = 38;
	public static readonly STATIC = 39;
	public static readonly WHILE = 40;
	public static readonly FOR = 41;
	public static readonly SEMICOLON = 42;
	public static readonly COMMA = 43;
	public static readonly COLON = 44;
	public static readonly DOT = 45;
	public static readonly MULTIVALUED_EXPRESSION = 46;
	public static readonly FIELD_INTRO = 47;
	public static readonly REPLACE_FIELD_VALUE_INTRO = 48;
	public static readonly REMOVE_FIELD = 49;
	public static readonly ADD_FIELD = 50;
	public static readonly INLINE_DECL_INTRO = 51;
	public static readonly OPEN_PAR = 52;
	public static readonly CLOSE_PAR = 53;
	public static readonly OPEN_BRACKET = 54;
	public static readonly CLOSE_BRACKET = 55;
	public static readonly OPEN_BRACE = 56;
	public static readonly CLOSE_BRACE = 57;
	public static readonly SINGLE_QUOTE = 58;
	public static readonly BACKSLASH = 59;
	public static readonly QUESTION_MARK = 60;
	public static readonly AT = 61;
	public static readonly EQUAL_COMP = 62;
	public static readonly NOT_EQUALS = 63;
	public static readonly LESS_OR_EQUAL = 64;
	public static readonly GREATE_OR_EQUAL = 65;
	public static readonly STRICT_LESS = 66;
	public static readonly STRICT_GREAT = 67;
	public static readonly COND_AND = 68;
	public static readonly COND_OR = 69;
	public static readonly EQUAL_ASSIGNMENT = 70;
	public static readonly MULTIVALUED_ASSIGNMENT = 71;
	public static readonly OPEN_GRANULE = 72;
	public static readonly CLOSE_GRANULE = 73;
	public static readonly OPERATOR = 74;
	public static readonly DATE = 75;
	public static readonly STRING = 76;
	public static readonly DOCUMENTATION = 77;
	public static readonly WS = 78;
	public static readonly DOUBLE = 79;
	public static readonly INTEGER = 80;
	public static readonly YMLID = 81;
	public static readonly ID = 82;
	public static readonly PREPROCESSING = 83;
	public static readonly LINE_COMMENT = 84;
	public static readonly MULTILINE_COMMENT = 85;
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
	public static readonly RULE_as = 31;
	public static readonly RULE_applyCollection = 32;
	public static readonly RULE_instruction_forEach = 33;
	public static readonly RULE_instruction_for = 34;
	public static readonly RULE_instruction_ifExprBlock = 35;
	public static readonly RULE_ifExprBlock = 36;
	public static readonly RULE_bool = 37;
	public static readonly RULE_nonArithmeticValue = 38;
	public static readonly RULE_instanciationVariable = 39;
	public static readonly RULE_expression = 40;
	public static readonly RULE_functionCall = 41;
	public static readonly RULE_indexedCall = 42;
	public static readonly RULE_functionArgument = 43;
	public static readonly RULE_chainedCall = 44;
	public static readonly RULE_inlineDeclaration = 45;
	public static readonly RULE_inlineOperation = 46;
	public static readonly RULE_fieldValue = 47;
	public static readonly RULE_function = 48;
	public static readonly RULE_argsBlock = 49;
	public static readonly RULE_localBlock = 50;
	public static readonly RULE_staticBlock = 51;
	public static readonly RULE_methodDeclaration = 52;
	public static readonly RULE_methodCompleteDeclaration = 53;
	public static readonly RULE_methodIntro = 54;
	public static readonly RULE_argumentList = 55;
	public static readonly RULE_mandatoryArgs = 56;
	public static readonly RULE_mandatoryArgDecl = 57;
	public static readonly RULE_optionalArgs = 58;
	public static readonly RULE_optionalArgDecl = 59;
	public static readonly RULE_argOptionList = 60;
	public static readonly RULE_argOptionBlock = 61;
	public static readonly RULE_order1Block = 62;
	public static readonly RULE_instanciationCondition = 63;
	public static readonly RULE_order1FullCondition = 64;
	public static readonly RULE_combinedComparison = 65;
	public static readonly RULE_comparison = 66;
	public static readonly RULE_comparisonOperator = 67;
	public static readonly RULE_instruction_multivaluedAssignment = 68;
	public static readonly RULE_instruction_assignment = 69;
	public static readonly RULE_conditionBlock = 70;
	public static readonly RULE_order0Condition = 71;
	public static readonly RULE_instruction_switchCase_withValue = 72;
	public static readonly RULE_instruction_switchCase_asIf = 73;
	public static readonly RULE_instructionCase = 74;
	public static readonly RULE_instructionDefault = 75;
	public static readonly RULE_instruction_break = 76;
	public static readonly RULE_instruction_ifElse = 77;
	public static readonly RULE_instruction_if = 78;
	public static readonly RULE_instruction_forall = 79;
	public static readonly RULE_instruction_while = 80;
	public static readonly RULE_instruction_return = 81;
	public static readonly RULE_instruction_chainedCall = 82;
	public static readonly RULE_instruction = 83;
	public static readonly RULE_instruction_do = 84;
	public static readonly RULE_instruction_try_catch = 85;
	public static readonly RULE_actionBlock = 86;
	public static readonly RULE_arithmeticExpression = 87;
	public static readonly RULE_existentialOperator = 88;
	public static readonly RULE_variableBlockContent = 89;
	public static readonly RULE_staticDeclaration = 90;
	public static readonly RULE_externDeclaration = 91;
	public static readonly RULE_array = 92;
	public static readonly RULE_constList = 93;
	public static readonly RULE_granule = 94;
	public static readonly RULE_objectComplete = 95;
	public static readonly RULE_classComplete = 96;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"kaoFile", "ymlEntity", "expressionMarker", "ymlId", "yenum", "enumElement", 
		"classDeclaration", "classImplementation", "attributeImplementation", 
		"override", "overrideInstruction", "classDeclarationIntro", "extendsBlock", 
		"parentClassName", "synonym", "classAttributeDeclaration", "memberDeclaration", 
		"memberType", "path", "ymlIdOrPath", "field", "commonField", "local_variable_decl", 
		"localField", "returnField", "classPropertiesBlock", "documentation", 
		"valueOrCondition", "hashMapKeyValue", "hashMapValue", "value", "as", 
		"applyCollection", "instruction_forEach", "instruction_for", "instruction_ifExprBlock", 
		"ifExprBlock", "bool", "nonArithmeticValue", "instanciationVariable", 
		"expression", "functionCall", "indexedCall", "functionArgument", "chainedCall", 
		"inlineDeclaration", "inlineOperation", "fieldValue", "function", "argsBlock", 
		"localBlock", "staticBlock", "methodDeclaration", "methodCompleteDeclaration", 
		"methodIntro", "argumentList", "mandatoryArgs", "mandatoryArgDecl", "optionalArgs", 
		"optionalArgDecl", "argOptionList", "argOptionBlock", "order1Block", "instanciationCondition", 
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
		undefined, "'applyCollection'", "'__where'", "'__operation'", "'interface'", 
		"'implementation'", "'extends'", "'function'", "'Function'", "'method'", 
		"'textMethod'", "'TextFunction'", "'field'", "'classProperties'", "'extern'", 
		"'complete'", "'synonym'", "'override'", "'args'", "'ifExpr'", "'if'", 
		"'then'", "'else'", "'enum'", "'do'", "'try'", "'catch'", "'foreach'", 
		"'forall'", "'in'", "'as'", "'return'", "'local'", "'true'", "'false'", 
		"'switch'", "'case'", "'default'", "'break'", "'static'", "'while'", "'for'", 
		"';'", "','", "':'", "'.'", "'>>'", "'-->'", "'==>'", "'---'", "'+++'", 
		"'->'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'''", "'\\'", "'?'", 
		"'@'", "'=='", "'!='", "'<='", "'>='", "'<'", "'>'", "'&&'", "'||'", "'='", 
		"':='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "APPLY_COLLECTION", "WHERE", "OPERATION", "INTERFACE", "IMPLEMENTATION", 
		"EXTENDS", "FUNCTION", "FUNCTION_AS_TYPE", "METHOD", "TEXT_METHOD", "TEXT_FUNCTION", 
		"FIELD", "CLASSPROPERTIES", "EXTERN", "COMPLETE", "SYNONYM", "OVERRIDE", 
		"ARGS", "IF_EXPR", "IF", "THEN", "ELSE", "ENUM", "DO", "TRY", "CATCH", 
		"FOREACH", "FORALL", "IN", "AS", "RETURN", "LOCAL", "TRUE", "FALSE", "SWITCH", 
		"CASE", "DEFAULT", "BREAK", "STATIC", "WHILE", "FOR", "SEMICOLON", "COMMA", 
		"COLON", "DOT", "MULTIVALUED_EXPRESSION", "FIELD_INTRO", "REPLACE_FIELD_VALUE_INTRO", 
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
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (YmlParser.INTERFACE - 4)) | (1 << (YmlParser.FUNCTION - 4)) | (1 << (YmlParser.FUNCTION_AS_TYPE - 4)) | (1 << (YmlParser.METHOD - 4)) | (1 << (YmlParser.TEXT_METHOD - 4)) | (1 << (YmlParser.TEXT_FUNCTION - 4)) | (1 << (YmlParser.EXTERN - 4)) | (1 << (YmlParser.COMPLETE - 4)) | (1 << (YmlParser.ARGS - 4)) | (1 << (YmlParser.ENUM - 4)) | (1 << (YmlParser.RETURN - 4)) | (1 << (YmlParser.LOCAL - 4)))) !== 0) || _la === YmlParser.YMLID) {
				{
				{
				this.state = 194;
				_localctx._entities = this.ymlEntity();
				}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 200;
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
			this.state = 209;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 202;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 203;
				this.staticDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 204;
				this.classComplete();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 205;
				this.objectComplete();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 206;
				this.yenum();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 207;
				this.function();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 208;
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
			this.state = 215;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 211;
				this.match(YmlParser.DOT);
				this.state = 212;
				this.match(YmlParser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 213;
				this.match(YmlParser.DOT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 214;
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
			this.state = 217;
			_la = this._input.LA(1);
			if (!(((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (YmlParser.FUNCTION_AS_TYPE - 8)) | (1 << (YmlParser.TEXT_FUNCTION - 8)) | (1 << (YmlParser.ARGS - 8)) | (1 << (YmlParser.RETURN - 8)) | (1 << (YmlParser.LOCAL - 8)))) !== 0) || _la === YmlParser.YMLID)) {
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
			this.state = 219;
			this.match(YmlParser.ENUM);
			this.state = 220;
			_localctx._yid = this.ymlId();
			this.state = 221;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 222;
				this.enumElement();
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === YmlParser.COMMA) {
					{
					{
					this.state = 223;
					this.match(YmlParser.COMMA);
					this.state = 224;
					this.enumElement();
					}
					}
					this.state = 229;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (YmlParser.FUNCTION_AS_TYPE - 8)) | (1 << (YmlParser.TEXT_FUNCTION - 8)) | (1 << (YmlParser.ARGS - 8)) | (1 << (YmlParser.RETURN - 8)) | (1 << (YmlParser.LOCAL - 8)))) !== 0) || _la === YmlParser.YMLID);
			this.state = 234;
			this.match(YmlParser.CLOSE_BRACE);
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (YmlParser.FIELD_INTRO - 47)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 47)) | (1 << (YmlParser.REMOVE_FIELD - 47)) | (1 << (YmlParser.ADD_FIELD - 47)))) !== 0)) {
				{
				{
				this.state = 235;
				_localctx._fields = this.field();
				}
				}
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 241;
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
			this.state = 243;
			_localctx._yid = this.ymlId();
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (YmlParser.FIELD_INTRO - 47)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 47)) | (1 << (YmlParser.REMOVE_FIELD - 47)) | (1 << (YmlParser.ADD_FIELD - 47)))) !== 0)) {
				{
				{
				this.state = 244;
				_localctx._fields = this.field();
				}
				}
				this.state = 249;
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
			this.state = 250;
			this.classDeclarationIntro();
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (YmlParser.FIELD_INTRO - 47)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 47)) | (1 << (YmlParser.REMOVE_FIELD - 47)) | (1 << (YmlParser.ADD_FIELD - 47)))) !== 0)) {
				{
				{
				this.state = 251;
				this.field();
				}
				}
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.FUNCTION) | (1 << YmlParser.METHOD) | (1 << YmlParser.TEXT_METHOD) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.FIELD))) !== 0)) {
				{
				this.state = 259;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case YmlParser.FIELD:
					{
					this.state = 257;
					this.classAttributeDeclaration();
					}
					break;
				case YmlParser.FUNCTION:
				case YmlParser.METHOD:
				case YmlParser.TEXT_METHOD:
				case YmlParser.TEXT_FUNCTION:
					{
					this.state = 258;
					this.methodDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.CLASSPROPERTIES) {
				{
				this.state = 264;
				this.classPropertiesBlock();
				}
			}

			this.state = 267;
			this.match(YmlParser.SEMICOLON);
			this.state = 268;
			this.classImplementation();
			this.state = 269;
			this.match(YmlParser.SEMICOLON);
			this.state = 271;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 270;
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
			this.state = 273;
			this.match(YmlParser.IMPLEMENTATION);
			this.state = 274;
			_localctx._className = this.ymlId();
			this.state = 278;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 275;
					this.attributeImplementation();
					}
					}
				}
				this.state = 280;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			this.state = 284;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 281;
					this.overrideInstruction();
					}
					}
				}
				this.state = 286;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.OVERRIDE) {
				{
				this.state = 287;
				_localctx._overrideBlock = this.override();
				}
			}

			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (YmlParser.FIELD_INTRO - 47)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 47)) | (1 << (YmlParser.REMOVE_FIELD - 47)) | (1 << (YmlParser.ADD_FIELD - 47)))) !== 0)) {
				{
				{
				this.state = 290;
				_localctx._attributes = this.field();
				}
				}
				this.state = 295;
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
			this.state = 296;
			_localctx._attrName = this.ymlId();
			this.state = 298;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 297;
					_localctx._attributes = this.field();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 300;
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
			this.state = 302;
			this.match(YmlParser.OVERRIDE);
			this.state = 303;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (YmlParser.FUNCTION_AS_TYPE - 8)) | (1 << (YmlParser.TEXT_FUNCTION - 8)) | (1 << (YmlParser.ARGS - 8)) | (1 << (YmlParser.RETURN - 8)) | (1 << (YmlParser.LOCAL - 8)))) !== 0) || _la === YmlParser.YMLID) {
				{
				{
				this.state = 304;
				this.overrideInstruction();
				}
				}
				this.state = 309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 310;
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
			this.state = 312;
			this.ymlId();
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.FUNCTION) {
				{
				this.state = 313;
				this.match(YmlParser.FUNCTION);
				}
			}

			this.state = 319;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 316;
					this.field();
					}
					}
				}
				this.state = 321;
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
			this.state = 322;
			this.match(YmlParser.INTERFACE);
			this.state = 323;
			_localctx._className = this.ymlId();
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.EXTENDS) {
				{
				this.state = 324;
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
			this.state = 327;
			this.match(YmlParser.EXTENDS);
			this.state = 328;
			this.parentClassName();
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 329;
				this.match(YmlParser.COMMA);
				this.state = 330;
				this.parentClassName();
				}
				}
				this.state = 335;
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
			this.state = 336;
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
			this.state = 353;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 338;
				this.match(YmlParser.SYNONYM);
				this.state = 339;
				this.constList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 340;
				this.match(YmlParser.SYNONYM);
				this.state = 341;
				this.match(YmlParser.OPEN_PAR);
				this.state = 350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.AS) | (1 << YmlParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlParser.LOCAL - 32)) | (1 << (YmlParser.TRUE - 32)) | (1 << (YmlParser.FALSE - 32)) | (1 << (YmlParser.INLINE_DECL_INTRO - 32)) | (1 << (YmlParser.OPEN_PAR - 32)) | (1 << (YmlParser.OPEN_BRACKET - 32)) | (1 << (YmlParser.OPEN_BRACE - 32)) | (1 << (YmlParser.QUESTION_MARK - 32)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.OPERATOR - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.DOUBLE - 72)) | (1 << (YmlParser.YMLID - 72)))) !== 0)) {
					{
					this.state = 342;
					_localctx._value = this.value();
					_localctx._synonymElements.push(_localctx._value);
					this.state = 347;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === YmlParser.COMMA) {
						{
						{
						this.state = 343;
						this.match(YmlParser.COMMA);
						this.state = 344;
						_localctx._value = this.value();
						_localctx._synonymElements.push(_localctx._value);
						}
						}
						this.state = 349;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 352;
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
			this.state = 355;
			this.match(YmlParser.FIELD);
			this.state = 356;
			_localctx._memberName = this.ymlId();
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (YmlParser.FIELD_INTRO - 47)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 47)) | (1 << (YmlParser.REMOVE_FIELD - 47)) | (1 << (YmlParser.ADD_FIELD - 47)))) !== 0)) {
				{
				{
				this.state = 357;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 362;
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
			this.state = 363;
			_localctx._type = this.memberType();
			this.state = 364;
			_localctx._memberName = this.ymlId();
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (YmlParser.FIELD_INTRO - 47)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 47)) | (1 << (YmlParser.REMOVE_FIELD - 47)) | (1 << (YmlParser.ADD_FIELD - 47)))) !== 0)) {
				{
				{
				this.state = 365;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 370;
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
			this.state = 371;
			this.ymlId();
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.COND_OR) {
				{
				this.state = 372;
				this.match(YmlParser.COND_OR);
				this.state = 373;
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
			this.state = 376;
			this.ymlId();
			this.state = 379;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 377;
					this.match(YmlParser.DOT);
					this.state = 378;
					this.ymlId();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 381;
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
			this.state = 385;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 383;
				this.ymlId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 384;
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
			this.state = 390;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 387;
				this.commonField();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 388;
				this.returnField();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 389;
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
			this.state = 392;
			_localctx._fieldArrow = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (YmlParser.FIELD_INTRO - 47)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 47)) | (1 << (YmlParser.REMOVE_FIELD - 47)) | (1 << (YmlParser.ADD_FIELD - 47)))) !== 0))) {
				_localctx._fieldArrow = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 393;
			_localctx._optionName = this.ymlIdOrPath();
			this.state = 402;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 394;
				_localctx._valueOrCondition = this.valueOrCondition();
				_localctx._optionValues.push(_localctx._valueOrCondition);
				this.state = 399;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 395;
						this.match(YmlParser.COMMA);
						this.state = 396;
						_localctx._valueOrCondition = this.valueOrCondition();
						_localctx._optionValues.push(_localctx._valueOrCondition);
						}
						}
					}
					this.state = 401;
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
			this.state = 404;
			_localctx._type = this.memberType();
			this.state = 405;
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
			this.state = 407;
			_localctx._fieldArrow = this.match(YmlParser.FIELD_INTRO);
			this.state = 408;
			_localctx._optionName = this.match(YmlParser.LOCAL);
			this.state = 417;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 409;
				_localctx._local_variable_decl = this.local_variable_decl();
				_localctx._optionValues.push(_localctx._local_variable_decl);
				this.state = 414;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 410;
						this.match(YmlParser.COMMA);
						this.state = 411;
						_localctx._local_variable_decl = this.local_variable_decl();
						_localctx._optionValues.push(_localctx._local_variable_decl);
						}
						}
					}
					this.state = 416;
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
			this.state = 419;
			_localctx._fieldArrow = this.match(YmlParser.FIELD_INTRO);
			this.state = 420;
			_localctx._optionName = this.match(YmlParser.RETURN);
			this.state = 429;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 421;
				_localctx._valueOrCondition = this.valueOrCondition();
				_localctx._optionValues.push(_localctx._valueOrCondition);
				this.state = 426;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 422;
						this.match(YmlParser.COMMA);
						this.state = 423;
						_localctx._valueOrCondition = this.valueOrCondition();
						_localctx._optionValues.push(_localctx._valueOrCondition);
						}
						}
					}
					this.state = 428;
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
			this.state = 431;
			this.match(YmlParser.CLASSPROPERTIES);
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (YmlParser.FIELD_INTRO - 47)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 47)) | (1 << (YmlParser.REMOVE_FIELD - 47)) | (1 << (YmlParser.ADD_FIELD - 47)))) !== 0)) {
				{
				{
				this.state = 432;
				_localctx._classOption = this.field();
				}
				}
				this.state = 437;
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
			this.state = 438;
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
			this.state = 449;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 440;
				this.actionBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 441;
				this.instruction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 442;
				this.combinedComparison(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 443;
				this.value();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 444;
				this.hashMapKeyValue();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 445;
				this.documentation();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 446;
				_localctx._type = this.ymlId();
				this.state = 447;
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
			this.state = 451;
			this.nonArithmeticValue();
			this.state = 452;
			this.match(YmlParser.COLON);
			this.state = 453;
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
			this.state = 457;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 455;
				this.value();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 456;
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
			this.state = 480;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 459;
				this.granule();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 460;
				this.inlineDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 461;
				this.arithmeticExpression(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 462;
				this.nonArithmeticValue();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 463;
				this.synonym();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 464;
				this.ifExprBlock();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 465;
				this.array();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 466;
				this.constList();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 467;
				this.applyCollection();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 468;
				this.as();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 469;
				this.match(YmlParser.OPEN_BRACE);
				this.state = 470;
				this.hashMapKeyValue();
				this.state = 475;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 471;
						this.match(YmlParser.COMMA);
						this.state = 472;
						this.hashMapKeyValue();
						}
						}
					}
					this.state = 477;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				}
				this.state = 478;
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
	public as(): AsContext {
		let _localctx: AsContext = new AsContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, YmlParser.RULE_as);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this.match(YmlParser.AS);
			this.state = 483;
			this.match(YmlParser.OPEN_PAR);
			this.state = 484;
			this.instanciationVariable();
			this.state = 492;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 485;
					this.match(YmlParser.COMMA);
					this.state = 488;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
					case 1:
						{
						this.state = 486;
						this.instruction_assignment();
						}
						break;

					case 2:
						{
						this.state = 487;
						this.combinedComparison(0);
						}
						break;
					}
					}
					}
				}
				this.state = 494;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			}
			this.state = 495;
			this.match(YmlParser.COMMA);
			this.state = 496;
			this.combinedComparison(0);
			this.state = 497;
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
		this.enterRule(_localctx, 64, YmlParser.RULE_applyCollection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 499;
			this.match(YmlParser.APPLY_COLLECTION);
			this.state = 500;
			this.match(YmlParser.OPEN_PAR);
			this.state = 501;
			this.value();
			this.state = 502;
			this.match(YmlParser.COMMA);
			this.state = 507;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.WHERE:
				{
				this.state = 503;
				this.match(YmlParser.WHERE);
				this.state = 504;
				this.combinedComparison(0);
				}
				break;
			case YmlParser.OPERATION:
				{
				this.state = 505;
				this.match(YmlParser.OPERATION);
				this.state = 506;
				this.ymlId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 509;
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
		this.enterRule(_localctx, 66, YmlParser.RULE_instruction_forEach);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.match(YmlParser.FOREACH);
			this.state = 512;
			this.match(YmlParser.OPEN_PAR);
			{
			this.state = 514;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 513;
				_localctx._type = this.ymlId();
				}
				break;
			}
			this.state = 516;
			_localctx._name = this.ymlId();
			}
			this.state = 518;
			this.match(YmlParser.COMMA);
			this.state = 519;
			this.value();
			this.state = 520;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 521;
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
		this.enterRule(_localctx, 68, YmlParser.RULE_instruction_for);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.match(YmlParser.FOR);
			this.state = 524;
			this.match(YmlParser.OPEN_PAR);
			this.state = 525;
			_localctx._name = this.ymlId();
			this.state = 526;
			this.match(YmlParser.COMMA);
			this.state = 527;
			_localctx._step = this.value();
			this.state = 528;
			this.match(YmlParser.COMMA);
			this.state = 529;
			_localctx._collection = this.value();
			this.state = 530;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 531;
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
		this.enterRule(_localctx, 70, YmlParser.RULE_instruction_ifExprBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			this.ifExprBlock();
			this.state = 535;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 534;
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
	public ifExprBlock(): IfExprBlockContext {
		let _localctx: IfExprBlockContext = new IfExprBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, YmlParser.RULE_ifExprBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this.match(YmlParser.IF_EXPR);
			this.state = 538;
			this.match(YmlParser.OPEN_PAR);
			this.state = 539;
			_localctx._condition = this.combinedComparison(0);
			this.state = 540;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 541;
			this.match(YmlParser.THEN);
			this.state = 542;
			_localctx._thenValue = this.value();
			this.state = 543;
			this.match(YmlParser.ELSE);
			this.state = 544;
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
		this.enterRule(_localctx, 74, YmlParser.RULE_bool);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
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
		this.enterRule(_localctx, 76, YmlParser.RULE_nonArithmeticValue);
		try {
			this.state = 552;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.APPLY_COLLECTION:
			case YmlParser.FUNCTION_AS_TYPE:
			case YmlParser.TEXT_FUNCTION:
			case YmlParser.ARGS:
			case YmlParser.AS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.OPEN_BRACE:
			case YmlParser.QUESTION_MARK:
			case YmlParser.OPEN_GRANULE:
			case YmlParser.YMLID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 548;
				this.chainedCall();
				}
				break;
			case YmlParser.TRUE:
			case YmlParser.FALSE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 549;
				this.bool();
				}
				break;
			case YmlParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 550;
				this.match(YmlParser.STRING);
				}
				break;
			case YmlParser.DATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 551;
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
		this.enterRule(_localctx, 78, YmlParser.RULE_instanciationVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this.match(YmlParser.QUESTION_MARK);
			this.state = 555;
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
		this.enterRule(_localctx, 80, YmlParser.RULE_expression);
		try {
			this.state = 565;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 557;
				this.ymlId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 558;
				this.functionCall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 559;
				this.indexedCall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 560;
				this.instanciationVariable();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 561;
				this.granule();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 562;
				this.constList();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 563;
				this.as();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 564;
				this.applyCollection();
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
		this.enterRule(_localctx, 82, YmlParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 567;
			this.ymlId();
			this.state = 568;
			this.match(YmlParser.OPEN_PAR);
			this.state = 577;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.IF) | (1 << YmlParser.TRY) | (1 << YmlParser.FOREACH) | (1 << YmlParser.FORALL) | (1 << YmlParser.AS) | (1 << YmlParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlParser.LOCAL - 32)) | (1 << (YmlParser.TRUE - 32)) | (1 << (YmlParser.FALSE - 32)) | (1 << (YmlParser.SWITCH - 32)) | (1 << (YmlParser.BREAK - 32)) | (1 << (YmlParser.WHILE - 32)) | (1 << (YmlParser.FOR - 32)) | (1 << (YmlParser.INLINE_DECL_INTRO - 32)) | (1 << (YmlParser.OPEN_PAR - 32)) | (1 << (YmlParser.OPEN_BRACKET - 32)) | (1 << (YmlParser.OPEN_BRACE - 32)) | (1 << (YmlParser.QUESTION_MARK - 32)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.OPERATOR - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.DOCUMENTATION - 72)) | (1 << (YmlParser.DOUBLE - 72)) | (1 << (YmlParser.YMLID - 72)) | (1 << (YmlParser.ID - 72)))) !== 0)) {
				{
				this.state = 569;
				this.functionArgument();
				this.state = 574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === YmlParser.COMMA) {
					{
					{
					this.state = 570;
					this.match(YmlParser.COMMA);
					this.state = 571;
					this.functionArgument();
					}
					}
					this.state = 576;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 579;
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
		this.enterRule(_localctx, 84, YmlParser.RULE_indexedCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 581;
			this.ymlId();
			this.state = 582;
			this.match(YmlParser.OPEN_BRACKET);
			this.state = 583;
			this.functionArgument();
			this.state = 584;
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
		this.enterRule(_localctx, 86, YmlParser.RULE_functionArgument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.ID) {
				{
				this.state = 586;
				_localctx._argKey = this.match(YmlParser.ID);
				this.state = 587;
				this.match(YmlParser.COLON);
				}
			}

			this.state = 590;
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
		this.enterRule(_localctx, 88, YmlParser.RULE_chainedCall);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.expression();
			this.state = 598;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 593;
					_localctx._marker = this.expressionMarker();
					this.state = 594;
					this.expression();
					}
					}
				}
				this.state = 600;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
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
		this.enterRule(_localctx, 90, YmlParser.RULE_inlineDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.match(YmlParser.INLINE_DECL_INTRO);
			this.state = 602;
			_localctx._className = this.ymlId();
			this.state = 604;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (YmlParser.FUNCTION_AS_TYPE - 8)) | (1 << (YmlParser.TEXT_FUNCTION - 8)) | (1 << (YmlParser.ARGS - 8)) | (1 << (YmlParser.RETURN - 8)) | (1 << (YmlParser.LOCAL - 8)))) !== 0) || _la === YmlParser.YMLID) {
				{
				this.state = 603;
				_localctx._instanceName = this.ymlId();
				}
			}

			this.state = 609;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (YmlParser.FIELD_INTRO - 47)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 47)) | (1 << (YmlParser.REMOVE_FIELD - 47)) | (1 << (YmlParser.ADD_FIELD - 47)) | (1 << (YmlParser.OPEN_GRANULE - 47)))) !== 0)) {
				{
				{
				this.state = 606;
				this.fieldValue();
				}
				}
				this.state = 611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 612;
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
		this.enterRule(_localctx, 92, YmlParser.RULE_inlineOperation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			_localctx._leftExpression = this.value();
			this.state = 615;
			_localctx._operator = this.ymlId();
			this.state = 616;
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
		this.enterRule(_localctx, 94, YmlParser.RULE_fieldValue);
		try {
			this.state = 620;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.FIELD_INTRO:
			case YmlParser.REPLACE_FIELD_VALUE_INTRO:
			case YmlParser.REMOVE_FIELD:
			case YmlParser.ADD_FIELD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 618;
				this.field();
				}
				break;
			case YmlParser.OPEN_GRANULE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 619;
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
		this.enterRule(_localctx, 96, YmlParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
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
			this.state = 623;
			this.ymlId();
			this.state = 629;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.ARGS:
				{
				this.state = 624;
				this.argsBlock();
				}
				break;
			case YmlParser.OPEN_PAR:
				{
				this.state = 625;
				this.match(YmlParser.OPEN_PAR);
				this.state = 626;
				this.argumentList();
				this.state = 627;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.LOCAL) {
				{
				this.state = 631;
				this.localBlock();
				}
			}

			this.state = 635;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.STATIC) {
				{
				this.state = 634;
				this.staticBlock();
				}
			}

			this.state = 640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (YmlParser.FIELD_INTRO - 47)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 47)) | (1 << (YmlParser.REMOVE_FIELD - 47)) | (1 << (YmlParser.ADD_FIELD - 47)))) !== 0)) {
				{
				{
				this.state = 637;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 642;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 643;
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
		this.enterRule(_localctx, 98, YmlParser.RULE_argsBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			this.match(YmlParser.ARGS);
			this.state = 646;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 647;
			this.variableBlockContent();
			this.state = 648;
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
		this.enterRule(_localctx, 100, YmlParser.RULE_localBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 650;
			this.match(YmlParser.LOCAL);
			this.state = 651;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 652;
			this.variableBlockContent();
			this.state = 653;
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
		this.enterRule(_localctx, 102, YmlParser.RULE_staticBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 655;
			this.match(YmlParser.STATIC);
			this.state = 656;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 660;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (YmlParser.FUNCTION_AS_TYPE - 8)) | (1 << (YmlParser.TEXT_FUNCTION - 8)) | (1 << (YmlParser.ARGS - 8)) | (1 << (YmlParser.RETURN - 8)) | (1 << (YmlParser.LOCAL - 8)))) !== 0) || _la === YmlParser.YMLID) {
				{
				{
				this.state = 657;
				this.staticDeclaration();
				}
				}
				this.state = 662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 663;
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
		this.enterRule(_localctx, 104, YmlParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 665;
			this.methodIntro();
			this.state = 669;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (YmlParser.FIELD_INTRO - 47)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 47)) | (1 << (YmlParser.REMOVE_FIELD - 47)) | (1 << (YmlParser.ADD_FIELD - 47)))) !== 0)) {
				{
				{
				this.state = 666;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 671;
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
		this.enterRule(_localctx, 106, YmlParser.RULE_methodCompleteDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this.methodIntro();
			this.state = 673;
			this.match(YmlParser.FUNCTION);
			this.state = 677;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (YmlParser.FIELD_INTRO - 47)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 47)) | (1 << (YmlParser.REMOVE_FIELD - 47)) | (1 << (YmlParser.ADD_FIELD - 47)))) !== 0)) {
				{
				{
				this.state = 674;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 679;
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
		this.enterRule(_localctx, 108, YmlParser.RULE_methodIntro);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 680;
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
			this.state = 681;
			this.ymlId();
			this.state = 687;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.ARGS:
				{
				this.state = 682;
				this.argsBlock();
				}
				break;
			case YmlParser.OPEN_PAR:
				{
				this.state = 683;
				this.match(YmlParser.OPEN_PAR);
				this.state = 684;
				this.argumentList();
				this.state = 685;
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
		this.enterRule(_localctx, 110, YmlParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (YmlParser.FUNCTION_AS_TYPE - 8)) | (1 << (YmlParser.TEXT_FUNCTION - 8)) | (1 << (YmlParser.ARGS - 8)) | (1 << (YmlParser.RETURN - 8)) | (1 << (YmlParser.LOCAL - 8)))) !== 0) || _la === YmlParser.YMLID) {
				{
				this.state = 689;
				this.mandatoryArgs();
				}
			}

			this.state = 693;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.COMMA || _la === YmlParser.OPEN_BRACE) {
				{
				this.state = 692;
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
		this.enterRule(_localctx, 112, YmlParser.RULE_mandatoryArgs);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			this.mandatoryArgDecl();
			this.state = 700;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 696;
					this.match(YmlParser.COMMA);
					this.state = 697;
					this.mandatoryArgDecl();
					}
					}
				}
				this.state = 702;
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
	public mandatoryArgDecl(): MandatoryArgDeclContext {
		let _localctx: MandatoryArgDeclContext = new MandatoryArgDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, YmlParser.RULE_mandatoryArgDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 703;
			_localctx._argType = this.memberType();
			this.state = 704;
			_localctx._argName = this.ymlId();
			this.state = 706;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 705;
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
		this.enterRule(_localctx, 116, YmlParser.RULE_optionalArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.COMMA) {
				{
				this.state = 708;
				this.match(YmlParser.COMMA);
				}
			}

			this.state = 711;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 720;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (YmlParser.FUNCTION_AS_TYPE - 8)) | (1 << (YmlParser.TEXT_FUNCTION - 8)) | (1 << (YmlParser.ARGS - 8)) | (1 << (YmlParser.RETURN - 8)) | (1 << (YmlParser.LOCAL - 8)))) !== 0) || _la === YmlParser.OPEN_BRACKET || _la === YmlParser.YMLID) {
				{
				this.state = 712;
				_localctx._optionalArgDecl = this.optionalArgDecl();
				_localctx._optionalArguments.push(_localctx._optionalArgDecl);
				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === YmlParser.COMMA) {
					{
					{
					this.state = 713;
					this.match(YmlParser.COMMA);
					this.state = 714;
					_localctx._optionalArgDecl = this.optionalArgDecl();
					_localctx._optionalArguments.push(_localctx._optionalArgDecl);
					}
					}
					this.state = 719;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 722;
			this.match(YmlParser.CLOSE_BRACE);
			this.state = 724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (YmlParser.FUNCTION_AS_TYPE - 8)) | (1 << (YmlParser.TEXT_FUNCTION - 8)) | (1 << (YmlParser.ARGS - 8)) | (1 << (YmlParser.RETURN - 8)) | (1 << (YmlParser.LOCAL - 8)))) !== 0) || _la === YmlParser.YMLID) {
				{
				this.state = 723;
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
		this.enterRule(_localctx, 118, YmlParser.RULE_optionalArgDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.OPEN_BRACKET:
				{
				this.state = 726;
				this.match(YmlParser.OPEN_BRACKET);
				this.state = 727;
				_localctx._optionalKeyName = this.ymlId();
				this.state = 728;
				this.match(YmlParser.CLOSE_BRACKET);
				}
				break;
			case YmlParser.FUNCTION_AS_TYPE:
			case YmlParser.TEXT_FUNCTION:
			case YmlParser.ARGS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.YMLID:
				{
				this.state = 730;
				_localctx._mandatoryKeyName = this.ymlId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 733;
			this.match(YmlParser.COLON);
			this.state = 734;
			_localctx._argType = this.ymlId();
			this.state = 736;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (YmlParser.FUNCTION_AS_TYPE - 8)) | (1 << (YmlParser.TEXT_FUNCTION - 8)) | (1 << (YmlParser.ARGS - 8)) | (1 << (YmlParser.RETURN - 8)) | (1 << (YmlParser.LOCAL - 8)))) !== 0) || _la === YmlParser.YMLID) {
				{
				this.state = 735;
				_localctx._argName = this.ymlId();
				}
			}

			this.state = 739;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.OPEN_BRACE) {
				{
				this.state = 738;
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
		this.enterRule(_localctx, 120, YmlParser.RULE_argOptionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 742;
			_localctx._argOptionBlock = this.argOptionBlock();
			_localctx._arguments.push(_localctx._argOptionBlock);
			this.state = 747;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 743;
				this.match(YmlParser.COMMA);
				this.state = 744;
				_localctx._argOptionBlock = this.argOptionBlock();
				_localctx._arguments.push(_localctx._argOptionBlock);
				}
				}
				this.state = 749;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 750;
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
		this.enterRule(_localctx, 122, YmlParser.RULE_argOptionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 752;
			_localctx._argOption = this.ymlId();
			this.state = 754;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.AS) | (1 << YmlParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlParser.LOCAL - 32)) | (1 << (YmlParser.TRUE - 32)) | (1 << (YmlParser.FALSE - 32)) | (1 << (YmlParser.INLINE_DECL_INTRO - 32)) | (1 << (YmlParser.OPEN_PAR - 32)) | (1 << (YmlParser.OPEN_BRACKET - 32)) | (1 << (YmlParser.OPEN_BRACE - 32)) | (1 << (YmlParser.QUESTION_MARK - 32)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.OPERATOR - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.DOUBLE - 72)) | (1 << (YmlParser.YMLID - 72)))) !== 0)) {
				{
				this.state = 753;
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
		this.enterRule(_localctx, 124, YmlParser.RULE_order1Block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 756;
			this.instanciationCondition();
			this.state = 758;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 757;
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
		this.enterRule(_localctx, 126, YmlParser.RULE_instanciationCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 760;
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
		this.enterRule(_localctx, 128, YmlParser.RULE_order1FullCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 763;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				this.state = 762;
				this.conditionBlock();
				}
				break;
			}
			this.state = 768;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.AS) | (1 << YmlParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlParser.LOCAL - 32)) | (1 << (YmlParser.TRUE - 32)) | (1 << (YmlParser.FALSE - 32)) | (1 << (YmlParser.INLINE_DECL_INTRO - 32)) | (1 << (YmlParser.OPEN_PAR - 32)) | (1 << (YmlParser.OPEN_BRACKET - 32)) | (1 << (YmlParser.OPEN_BRACE - 32)) | (1 << (YmlParser.QUESTION_MARK - 32)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.OPERATOR - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.DOUBLE - 72)) | (1 << (YmlParser.YMLID - 72)))) !== 0)) {
				{
				{
				this.state = 765;
				this.order1Block();
				}
				}
				this.state = 770;
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
		let _startState: number = 130;
		this.enterRecursionRule(_localctx, 130, YmlParser.RULE_combinedComparison, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 772;
				this.match(YmlParser.OPEN_PAR);
				this.state = 773;
				this.combinedComparison(0);
				this.state = 774;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;

			case 2:
				{
				this.state = 776;
				this.comparison();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 787;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 785;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
					case 1:
						{
						_localctx = new CombinedComparisonContext(_parentctx, _parentState);
						_localctx._leftCondition = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, YmlParser.RULE_combinedComparison);
						this.state = 779;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 780;
						this.match(YmlParser.COND_AND);
						this.state = 781;
						_localctx._rightCondition = this.combinedComparison(4);
						}
						break;

					case 2:
						{
						_localctx = new CombinedComparisonContext(_parentctx, _parentState);
						_localctx._leftCondition = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, YmlParser.RULE_combinedComparison);
						this.state = 782;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 783;
						this.match(YmlParser.COND_OR);
						this.state = 784;
						_localctx._rightCondition = this.combinedComparison(3);
						}
						break;
					}
					}
				}
				this.state = 789;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
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
		this.enterRule(_localctx, 132, YmlParser.RULE_comparison);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			_localctx._leftValue = this.value();
			this.state = 791;
			this.comparisonOperator();
			this.state = 792;
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
		this.enterRule(_localctx, 134, YmlParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 794;
			_la = this._input.LA(1);
			if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (YmlParser.EQUAL_COMP - 62)) | (1 << (YmlParser.NOT_EQUALS - 62)) | (1 << (YmlParser.LESS_OR_EQUAL - 62)) | (1 << (YmlParser.GREATE_OR_EQUAL - 62)) | (1 << (YmlParser.STRICT_LESS - 62)) | (1 << (YmlParser.STRICT_GREAT - 62)))) !== 0))) {
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
		this.enterRule(_localctx, 136, YmlParser.RULE_instruction_multivaluedAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 796;
			_localctx._leftHand = this.value();
			this.state = 797;
			this.match(YmlParser.MULTIVALUED_ASSIGNMENT);
			this.state = 798;
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
		this.enterRule(_localctx, 138, YmlParser.RULE_instruction_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 800;
			_localctx._leftHand = this.value();
			this.state = 801;
			this.match(YmlParser.EQUAL_ASSIGNMENT);
			this.state = 802;
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
		this.enterRule(_localctx, 140, YmlParser.RULE_conditionBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 805;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 804;
					this.order0Condition();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 807;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
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
		this.enterRule(_localctx, 142, YmlParser.RULE_order0Condition);
		try {
			this.state = 811;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 809;
				this.combinedComparison(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 810;
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
		this.enterRule(_localctx, 144, YmlParser.RULE_instruction_switchCase_withValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 813;
			this.match(YmlParser.SWITCH);
			this.state = 814;
			this.match(YmlParser.OPEN_PAR);
			this.state = 815;
			this.value();
			this.state = 816;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 817;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 821;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.CASE) {
				{
				{
				this.state = 818;
				this.instructionCase();
				}
				}
				this.state = 823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.DEFAULT) {
				{
				this.state = 824;
				this.instructionDefault();
				}
			}

			this.state = 827;
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
		this.enterRule(_localctx, 146, YmlParser.RULE_instruction_switchCase_asIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 829;
			this.match(YmlParser.SWITCH);
			this.state = 830;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.CASE) {
				{
				{
				this.state = 831;
				this.instructionCase();
				}
				}
				this.state = 836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 838;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.DEFAULT) {
				{
				this.state = 837;
				this.instructionDefault();
				}
			}

			this.state = 840;
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
		this.enterRule(_localctx, 148, YmlParser.RULE_instructionCase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 842;
			this.match(YmlParser.CASE);
			this.state = 843;
			this.match(YmlParser.OPEN_PAR);
			this.state = 844;
			this.valueOrCondition();
			this.state = 845;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 846;
			this.match(YmlParser.COLON);
			this.state = 849;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 847;
				this.instruction();
				}
				break;

			case 2:
				{
				this.state = 848;
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
		this.enterRule(_localctx, 150, YmlParser.RULE_instructionDefault);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 851;
			this.match(YmlParser.DEFAULT);
			this.state = 852;
			this.match(YmlParser.COLON);
			this.state = 855;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 853;
				this.instruction();
				}
				break;

			case 2:
				{
				this.state = 854;
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
		this.enterRule(_localctx, 152, YmlParser.RULE_instruction_break);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 857;
			this.match(YmlParser.BREAK);
			this.state = 859;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 858;
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
		this.enterRule(_localctx, 154, YmlParser.RULE_instruction_ifElse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			this.instruction_if();
			this.state = 867;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 862;
				this.match(YmlParser.ELSE);
				this.state = 865;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
				case 1:
					{
					this.state = 863;
					this.actionBlock();
					}
					break;

				case 2:
					{
					this.state = 864;
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
		this.enterRule(_localctx, 156, YmlParser.RULE_instruction_if);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 869;
			this.match(YmlParser.IF);
			this.state = 870;
			this.match(YmlParser.OPEN_PAR);
			this.state = 871;
			this.order0Condition();
			this.state = 872;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 875;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 873;
				this.actionBlock();
				}
				break;

			case 2:
				{
				this.state = 874;
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
		this.enterRule(_localctx, 158, YmlParser.RULE_instruction_forall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 877;
			this.match(YmlParser.FORALL);
			this.state = 878;
			this.match(YmlParser.OPEN_PAR);
			this.state = 881;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.FUNCTION_AS_TYPE:
			case YmlParser.TEXT_FUNCTION:
			case YmlParser.ARGS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.YMLID:
				{
				this.state = 879;
				this.ymlId();
				}
				break;
			case YmlParser.QUESTION_MARK:
				{
				this.state = 880;
				this.instanciationVariable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 883;
			this.match(YmlParser.IN);
			this.state = 886;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.APPLY_COLLECTION:
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
				this.state = 884;
				this.value();
				}
				break;
			case YmlParser.FUNCTION:
				{
				this.state = 885;
				this.match(YmlParser.FUNCTION);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 888;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 891;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 889;
				this.actionBlock();
				}
				break;

			case 2:
				{
				this.state = 890;
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
		this.enterRule(_localctx, 160, YmlParser.RULE_instruction_while);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 893;
			this.match(YmlParser.WHILE);
			this.state = 894;
			this.match(YmlParser.OPEN_PAR);
			this.state = 895;
			this.order0Condition();
			this.state = 896;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 897;
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
		this.enterRule(_localctx, 162, YmlParser.RULE_instruction_return);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 899;
			this.match(YmlParser.RETURN);
			this.state = 900;
			this.value();
			this.state = 902;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 901;
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
	public instruction_chainedCall(): Instruction_chainedCallContext {
		let _localctx: Instruction_chainedCallContext = new Instruction_chainedCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, YmlParser.RULE_instruction_chainedCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 904;
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
		this.enterRule(_localctx, 166, YmlParser.RULE_instruction);
		try {
			this.state = 932;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 906;
				this.instruction_chainedCall();
				this.state = 908;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
				case 1:
					{
					this.state = 907;
					this.match(YmlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 910;
				this.instruction_multivaluedAssignment();
				this.state = 912;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 911;
					this.match(YmlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 914;
				this.instruction_assignment();
				this.state = 916;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 915;
					this.match(YmlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 918;
				this.instruction_for();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 919;
				this.instruction_forEach();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 920;
				this.instruction_forall();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 921;
				this.instruction_return();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 922;
				this.instruction_ifElse();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 923;
				this.instruction_try_catch();
				this.state = 925;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 924;
					this.match(YmlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 927;
				this.instruction_switchCase_asIf();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 928;
				this.instruction_break();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 929;
				this.instruction_switchCase_withValue();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 930;
				this.instruction_ifExprBlock();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 931;
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
		this.enterRule(_localctx, 168, YmlParser.RULE_instruction_do);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 934;
			this.match(YmlParser.DO);
			this.state = 935;
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
		this.enterRule(_localctx, 170, YmlParser.RULE_instruction_try_catch);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 937;
			this.match(YmlParser.TRY);
			this.state = 938;
			this.match(YmlParser.OPEN_PAR);
			this.state = 939;
			this.instruction_do();
			this.state = 940;
			this.match(YmlParser.CATCH);
			this.state = 941;
			this.match(YmlParser.OPEN_PAR);
			{
			this.state = 942;
			this.ymlId();
			this.state = 947;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 943;
					this.match(YmlParser.COMMA);
					this.state = 944;
					this.ymlId();
					}
					}
				}
				this.state = 949;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			}
			}
			this.state = 950;
			this.match(YmlParser.CLOSE_PAR);
			this.state = 951;
			this.actionBlock();
			this.state = 952;
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
		this.enterRule(_localctx, 172, YmlParser.RULE_actionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 955;
				this.instruction();
				}
				}
				this.state = 958;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.IF) | (1 << YmlParser.TRY) | (1 << YmlParser.FOREACH) | (1 << YmlParser.FORALL) | (1 << YmlParser.AS) | (1 << YmlParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlParser.LOCAL - 32)) | (1 << (YmlParser.TRUE - 32)) | (1 << (YmlParser.FALSE - 32)) | (1 << (YmlParser.SWITCH - 32)) | (1 << (YmlParser.BREAK - 32)) | (1 << (YmlParser.WHILE - 32)) | (1 << (YmlParser.FOR - 32)) | (1 << (YmlParser.INLINE_DECL_INTRO - 32)) | (1 << (YmlParser.OPEN_PAR - 32)) | (1 << (YmlParser.OPEN_BRACKET - 32)) | (1 << (YmlParser.OPEN_BRACE - 32)) | (1 << (YmlParser.QUESTION_MARK - 32)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.OPERATOR - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.DOUBLE - 72)) | (1 << (YmlParser.YMLID - 72)))) !== 0));
			this.state = 960;
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
		let _startState: number = 174;
		this.enterRecursionRule(_localctx, 174, YmlParser.RULE_arithmeticExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 978;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 963;
				this.match(YmlParser.OPEN_PAR);
				this.state = 964;
				_localctx._parenthizedExpression = this.arithmeticExpression(0);
				this.state = 965;
				this.match(YmlParser.CLOSE_PAR);
				}
				break;

			case 2:
				{
				this.state = 967;
				_localctx._prefixedOperator = this.match(YmlParser.OPERATOR);
				this.state = 968;
				this.arithmeticExpression(4);
				}
				break;

			case 3:
				{
				this.state = 969;
				this.chainedCall();
				this.state = 970;
				this.match(YmlParser.OPERATOR);
				this.state = 971;
				this.arithmeticExpression(3);
				}
				break;

			case 4:
				{
				this.state = 973;
				this.chainedCall();
				this.state = 974;
				this.match(YmlParser.OPERATOR);
				this.state = 975;
				this.chainedCall();
				}
				break;

			case 5:
				{
				this.state = 977;
				this.match(YmlParser.DOUBLE);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 985;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
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
					this.state = 980;
					if (!(this.precpred(this._ctx, 5))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
					}
					this.state = 981;
					_localctx._infixedOperator = this.match(YmlParser.OPERATOR);
					this.state = 982;
					_localctx._rightExpression = this.arithmeticExpression(6);
					}
					}
				}
				this.state = 987;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
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
		this.enterRule(_localctx, 176, YmlParser.RULE_existentialOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
			_localctx._operator = this.ymlId();
			this.state = 989;
			this.match(YmlParser.OPEN_PAR);
			this.state = 990;
			this.order1FullCondition();
			this.state = 991;
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
		this.enterRule(_localctx, 178, YmlParser.RULE_variableBlockContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 996;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (YmlParser.FUNCTION_AS_TYPE - 8)) | (1 << (YmlParser.TEXT_FUNCTION - 8)) | (1 << (YmlParser.ARGS - 8)) | (1 << (YmlParser.RETURN - 8)) | (1 << (YmlParser.LOCAL - 8)))) !== 0) || _la === YmlParser.YMLID) {
				{
				{
				this.state = 993;
				this.memberDeclaration();
				}
				}
				this.state = 998;
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
		this.enterRule(_localctx, 180, YmlParser.RULE_staticDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 999;
			_localctx._declarationType = this.ymlId();
			this.state = 1000;
			_localctx._declarationName = this.ymlId();
			this.state = 1003;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YmlParser.EXTENDS) {
				{
				this.state = 1001;
				this.match(YmlParser.EXTENDS);
				this.state = 1002;
				_localctx._extended = this.ymlId();
				}
			}

			this.state = 1006;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.AS) | (1 << YmlParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlParser.LOCAL - 32)) | (1 << (YmlParser.TRUE - 32)) | (1 << (YmlParser.FALSE - 32)) | (1 << (YmlParser.INLINE_DECL_INTRO - 32)) | (1 << (YmlParser.OPEN_PAR - 32)) | (1 << (YmlParser.OPEN_BRACKET - 32)) | (1 << (YmlParser.OPEN_BRACE - 32)) | (1 << (YmlParser.QUESTION_MARK - 32)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.OPERATOR - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.DOUBLE - 72)) | (1 << (YmlParser.YMLID - 72)))) !== 0)) {
				{
				this.state = 1005;
				this.value();
				}
			}

			this.state = 1011;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (YmlParser.FIELD_INTRO - 47)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 47)) | (1 << (YmlParser.REMOVE_FIELD - 47)) | (1 << (YmlParser.ADD_FIELD - 47)))) !== 0)) {
				{
				{
				this.state = 1008;
				_localctx._declarationOptions = this.field();
				}
				}
				this.state = 1013;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1014;
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
		this.enterRule(_localctx, 182, YmlParser.RULE_externDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1016;
			this.match(YmlParser.EXTERN);
			this.state = 1019;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 1017;
				this.methodDeclaration();
				}
				break;

			case 2:
				{
				this.state = 1018;
				this.memberDeclaration();
				}
				break;
			}
			this.state = 1021;
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
		this.enterRule(_localctx, 184, YmlParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1023;
			this.match(YmlParser.OPEN_BRACKET);
			this.state = 1025;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.AS) | (1 << YmlParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlParser.LOCAL - 32)) | (1 << (YmlParser.TRUE - 32)) | (1 << (YmlParser.FALSE - 32)) | (1 << (YmlParser.INLINE_DECL_INTRO - 32)) | (1 << (YmlParser.OPEN_PAR - 32)) | (1 << (YmlParser.OPEN_BRACKET - 32)) | (1 << (YmlParser.OPEN_BRACE - 32)) | (1 << (YmlParser.QUESTION_MARK - 32)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.OPERATOR - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.DOUBLE - 72)) | (1 << (YmlParser.YMLID - 72)))) !== 0)) {
				{
				this.state = 1024;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
			}

			this.state = 1031;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 1027;
				this.match(YmlParser.COMMA);
				this.state = 1028;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
				}
				this.state = 1033;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1034;
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
		this.enterRule(_localctx, 186, YmlParser.RULE_constList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1036;
			this.match(YmlParser.OPEN_BRACE);
			this.state = 1038;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlParser.APPLY_COLLECTION) | (1 << YmlParser.FUNCTION_AS_TYPE) | (1 << YmlParser.TEXT_FUNCTION) | (1 << YmlParser.SYNONYM) | (1 << YmlParser.ARGS) | (1 << YmlParser.IF_EXPR) | (1 << YmlParser.AS) | (1 << YmlParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlParser.LOCAL - 32)) | (1 << (YmlParser.TRUE - 32)) | (1 << (YmlParser.FALSE - 32)) | (1 << (YmlParser.INLINE_DECL_INTRO - 32)) | (1 << (YmlParser.OPEN_PAR - 32)) | (1 << (YmlParser.OPEN_BRACKET - 32)) | (1 << (YmlParser.OPEN_BRACE - 32)) | (1 << (YmlParser.QUESTION_MARK - 32)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (YmlParser.OPEN_GRANULE - 72)) | (1 << (YmlParser.OPERATOR - 72)) | (1 << (YmlParser.DATE - 72)) | (1 << (YmlParser.STRING - 72)) | (1 << (YmlParser.DOUBLE - 72)) | (1 << (YmlParser.YMLID - 72)))) !== 0)) {
				{
				this.state = 1037;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
			}

			this.state = 1044;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YmlParser.COMMA) {
				{
				{
				this.state = 1040;
				this.match(YmlParser.COMMA);
				this.state = 1041;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
				}
				this.state = 1046;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1047;
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
		this.enterRule(_localctx, 188, YmlParser.RULE_granule);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1049;
			this.match(YmlParser.OPEN_GRANULE);
			this.state = 1058;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					this.state = 1056;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case YmlParser.APPLY_COLLECTION:
					case YmlParser.WHERE:
					case YmlParser.OPERATION:
					case YmlParser.INTERFACE:
					case YmlParser.IMPLEMENTATION:
					case YmlParser.EXTENDS:
					case YmlParser.FUNCTION:
					case YmlParser.FUNCTION_AS_TYPE:
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
					case YmlParser.AS:
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
						this.state = 1051;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 1050;
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
							this.state = 1053;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;
					case YmlParser.OPEN_GRANULE:
						{
						this.state = 1055;
						this.granule();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 1060;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
			}
			this.state = 1061;
			this.match(YmlParser.CLOSE_GRANULE);
			this.state = 1063;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				{
				this.state = 1062;
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
		this.enterRule(_localctx, 190, YmlParser.RULE_objectComplete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1065;
			this.match(YmlParser.COMPLETE);
			this.state = 1066;
			_localctx._completedElemId = this.ymlId();
			this.state = 1070;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (YmlParser.FIELD_INTRO - 47)) | (1 << (YmlParser.REPLACE_FIELD_VALUE_INTRO - 47)) | (1 << (YmlParser.REMOVE_FIELD - 47)) | (1 << (YmlParser.ADD_FIELD - 47)))) !== 0)) {
				{
				{
				this.state = 1067;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 1072;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1073;
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
		this.enterRule(_localctx, 192, YmlParser.RULE_classComplete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1075;
			this.match(YmlParser.COMPLETE);
			this.state = 1078;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlParser.FUNCTION_AS_TYPE:
			case YmlParser.TEXT_FUNCTION:
			case YmlParser.ARGS:
			case YmlParser.RETURN:
			case YmlParser.LOCAL:
			case YmlParser.YMLID:
				{
				this.state = 1076;
				this.ymlId();
				}
				break;
			case YmlParser.FUNCTION:
				{
				this.state = 1077;
				this.match(YmlParser.FUNCTION);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1085;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (YmlParser.FUNCTION - 7)) | (1 << (YmlParser.FUNCTION_AS_TYPE - 7)) | (1 << (YmlParser.METHOD - 7)) | (1 << (YmlParser.TEXT_METHOD - 7)) | (1 << (YmlParser.TEXT_FUNCTION - 7)) | (1 << (YmlParser.FIELD - 7)) | (1 << (YmlParser.ARGS - 7)) | (1 << (YmlParser.RETURN - 7)) | (1 << (YmlParser.LOCAL - 7)))) !== 0) || _la === YmlParser.YMLID) {
				{
				this.state = 1083;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1080;
					this.classAttributeDeclaration();
					}
					break;

				case 2:
					{
					this.state = 1081;
					this.methodCompleteDeclaration();
					}
					break;

				case 3:
					{
					this.state = 1082;
					this.memberDeclaration();
					}
					break;
				}
				}
				this.state = 1087;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1088;
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
		case 65:
			return this.combinedComparison_sempred(_localctx as CombinedComparisonContext, predIndex);

		case 87:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03W\u0445\x04\x02" +
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
		"`\x04a\ta\x04b\tb\x03\x02\x07\x02\xC6\n\x02\f\x02\x0E\x02\xC9\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03\xD4\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xDA\n\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xE4\n" +
		"\x06\f\x06\x0E\x06\xE7\v\x06\x06\x06\xE9\n\x06\r\x06\x0E\x06\xEA\x03\x06" +
		"\x03\x06\x07\x06\xEF\n\x06\f\x06\x0E\x06\xF2\v\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x07\x07\xF8\n\x07\f\x07\x0E\x07\xFB\v\x07\x03\b\x03\b\x07" +
		"\b\xFF\n\b\f\b\x0E\b\u0102\v\b\x03\b\x03\b\x07\b\u0106\n\b\f\b\x0E\b\u0109" +
		"\v\b\x03\b\x05\b\u010C\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0112\n\b\x03" +
		"\t\x03\t\x03\t\x07\t\u0117\n\t\f\t\x0E\t\u011A\v\t\x03\t\x07\t\u011D\n" +
		"\t\f\t\x0E\t\u0120\v\t\x03\t\x05\t\u0123\n\t\x03\t\x07\t\u0126\n\t\f\t" +
		"\x0E\t\u0129\v\t\x03\n\x03\n\x06\n\u012D\n\n\r\n\x0E\n\u012E\x03\v\x03" +
		"\v\x03\v\x07\v\u0134\n\v\f\v\x0E\v\u0137\v\v\x03\v\x03\v\x03\f\x03\f\x05" +
		"\f\u013D\n\f\x03\f\x07\f\u0140\n\f\f\f\x0E\f\u0143\v\f\x03\r\x03\r\x03" +
		"\r\x05\r\u0148\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u014E\n\x0E" +
		"\f\x0E\x0E\x0E\u0151\v\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x07\x10\u015C\n\x10\f\x10\x0E\x10\u015F\v" +
		"\x10\x05\x10\u0161\n\x10\x03\x10\x05\x10\u0164\n\x10\x03\x11\x03\x11\x03" +
		"\x11\x07\x11\u0169\n\x11\f\x11\x0E\x11\u016C\v\x11\x03\x12\x03\x12\x03" +
		"\x12\x07\x12\u0171\n\x12\f\x12\x0E\x12\u0174\v\x12\x03\x13\x03\x13\x03" +
		"\x13\x05\x13\u0179\n\x13\x03\x14\x03\x14\x03\x14\x06\x14\u017E\n\x14\r" +
		"\x14\x0E\x14\u017F\x03\x15\x03\x15\x05\x15\u0184\n\x15\x03\x16\x03\x16" +
		"\x03\x16\x05\x16\u0189\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07" +
		"\x17\u0190\n\x17\f\x17\x0E\x17\u0193\v\x17\x05\x17\u0195\n\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u019F" +
		"\n\x19\f\x19\x0E\x19\u01A2\v\x19\x05\x19\u01A4\n\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x07\x1A\u01AB\n\x1A\f\x1A\x0E\x1A\u01AE\v\x1A\x05" +
		"\x1A\u01B0\n\x1A\x03\x1B\x03\x1B\x07\x1B\u01B4\n\x1B\f\x1B\x0E\x1B\u01B7" +
		"\v\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01C4\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x05\x1F\u01CC\n\x1F\x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x07 \u01DC\n \f \x0E \u01DF" +
		"\v \x03 \x03 \x05 \u01E3\n \x03!\x03!\x03!\x03!\x03!\x03!\x05!\u01EB\n" +
		"!\x07!\u01ED\n!\f!\x0E!\u01F0\v!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"" +
		"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u01FE\n\"\x03\"\x03\"\x03#\x03#\x03" +
		"#\x05#\u0205\n#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x05%\u021A\n%\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x03(\x05(\u022B" +
		"\n(\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u0238" +
		"\n*\x03+\x03+\x03+\x03+\x03+\x07+\u023F\n+\f+\x0E+\u0242\v+\x05+\u0244" +
		"\n+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x05-\u024F\n-\x03-\x03" +
		"-\x03.\x03.\x03.\x03.\x07.\u0257\n.\f.\x0E.\u025A\v.\x03/\x03/\x03/\x05" +
		"/\u025F\n/\x03/\x07/\u0262\n/\f/\x0E/\u0265\v/\x03/\x03/\x030\x030\x03" +
		"0\x030\x031\x031\x051\u026F\n1\x032\x032\x032\x032\x032\x032\x032\x05" +
		"2\u0278\n2\x032\x052\u027B\n2\x032\x052\u027E\n2\x032\x072\u0281\n2\f" +
		"2\x0E2\u0284\v2\x032\x032\x033\x033\x033\x033\x033\x034\x034\x034\x03" +
		"4\x034\x035\x035\x035\x075\u0295\n5\f5\x0E5\u0298\v5\x035\x035\x036\x03" +
		"6\x076\u029E\n6\f6\x0E6\u02A1\v6\x037\x037\x037\x077\u02A6\n7\f7\x0E7" +
		"\u02A9\v7\x038\x038\x038\x038\x038\x038\x038\x058\u02B2\n8\x039\x059\u02B5" +
		"\n9\x039\x059\u02B8\n9\x03:\x03:\x03:\x07:\u02BD\n:\f:\x0E:\u02C0\v:\x03" +
		";\x03;\x03;\x05;\u02C5\n;\x03<\x05<\u02C8\n<\x03<\x03<\x03<\x03<\x07<" +
		"\u02CE\n<\f<\x0E<\u02D1\v<\x05<\u02D3\n<\x03<\x03<\x05<\u02D7\n<\x03=" +
		"\x03=\x03=\x03=\x03=\x05=\u02DE\n=\x03=\x03=\x03=\x05=\u02E3\n=\x03=\x05" +
		"=\u02E6\n=\x03>\x03>\x03>\x03>\x07>\u02EC\n>\f>\x0E>\u02EF\v>\x03>\x03" +
		">\x03?\x03?\x05?\u02F5\n?\x03@\x03@\x05@\u02F9\n@\x03A\x03A\x03B\x05B" +
		"\u02FE\nB\x03B\x07B\u0301\nB\fB\x0EB\u0304\vB\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x05C\u030C\nC\x03C\x03C\x03C\x03C\x03C\x03C\x07C\u0314\nC\fC\x0E" +
		"C\u0317\vC\x03D\x03D\x03D\x03D\x03E\x03E\x03F\x03F\x03F\x03F\x03G\x03" +
		"G\x03G\x03G\x03H\x06H\u0328\nH\rH\x0EH\u0329\x03I\x03I\x05I\u032E\nI\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x07J\u0336\nJ\fJ\x0EJ\u0339\vJ\x03J\x05J\u033C" +
		"\nJ\x03J\x03J\x03K\x03K\x03K\x07K\u0343\nK\fK\x0EK\u0346\vK\x03K\x05K" +
		"\u0349\nK\x03K\x03K\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u0354\nL\x03" +
		"M\x03M\x03M\x03M\x05M\u035A\nM\x03N\x03N\x05N\u035E\nN\x03O\x03O\x03O" +
		"\x03O\x05O\u0364\nO\x05O\u0366\nO\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u036E" +
		"\nP\x03Q\x03Q\x03Q\x03Q\x05Q\u0374\nQ\x03Q\x03Q\x03Q\x05Q\u0379\nQ\x03" +
		"Q\x03Q\x03Q\x05Q\u037E\nQ\x03R\x03R\x03R\x03R\x03R\x03R\x03S\x03S\x03" +
		"S\x05S\u0389\nS\x03T\x03T\x03U\x03U\x05U\u038F\nU\x03U\x03U\x05U\u0393" +
		"\nU\x03U\x03U\x05U\u0397\nU\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x05U\u03A0" +
		"\nU\x03U\x03U\x03U\x03U\x03U\x05U\u03A7\nU\x03V\x03V\x03V\x03W\x03W\x03" +
		"W\x03W\x03W\x03W\x03W\x03W\x07W\u03B4\nW\fW\x0EW\u03B7\vW\x03W\x03W\x03" +
		"W\x03W\x03X\x03X\x06X\u03BF\nX\rX\x0EX\u03C0\x03X\x03X\x03Y\x03Y\x03Y" +
		"\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05" +
		"Y\u03D5\nY\x03Y\x03Y\x03Y\x07Y\u03DA\nY\fY\x0EY\u03DD\vY\x03Z\x03Z\x03" +
		"Z\x03Z\x03Z\x03[\x07[\u03E5\n[\f[\x0E[\u03E8\v[\x03\\\x03\\\x03\\\x03" +
		"\\\x05\\\u03EE\n\\\x03\\\x05\\\u03F1\n\\\x03\\\x07\\\u03F4\n\\\f\\\x0E" +
		"\\\u03F7\v\\\x03\\\x03\\\x03]\x03]\x03]\x05]\u03FE\n]\x03]\x03]\x03^\x03" +
		"^\x05^\u0404\n^\x03^\x03^\x07^\u0408\n^\f^\x0E^\u040B\v^\x03^\x03^\x03" +
		"_\x03_\x05_\u0411\n_\x03_\x03_\x07_\u0415\n_\f_\x0E_\u0418\v_\x03_\x03" +
		"_\x03`\x03`\x06`\u041E\n`\r`\x0E`\u041F\x03`\x07`\u0423\n`\f`\x0E`\u0426" +
		"\v`\x03`\x03`\x05`\u042A\n`\x03a\x03a\x03a\x07a\u042F\na\fa\x0Ea\u0432" +
		"\va\x03a\x03a\x03b\x03b\x03b\x05b\u0439\nb\x03b\x03b\x03b\x07b\u043E\n" +
		"b\fb\x0Eb\u0441\vb\x03b\x03b\x03b\f\u0118\u011E\u017F\u0191\u01A0\u01AC" +
		"\u01DD\u01EE\u03B5\u0424\x02\x04\x84\xB0c\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
		"\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
		"\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
		"\xBC\x02\xBE\x02\xC0\x02\xC2\x02\x02\t\x07\x02\n\n\r\r\x14\x14!\"SS\x03" +
		"\x0214\x03\x02#$\x03\x02\t\r\x04\x02\t\t\v\r\x03\x02@E\x03\x02JK\x02\u048D" +
		"\x02\xC7\x03\x02\x02\x02\x04\xD3\x03\x02\x02\x02\x06\xD9\x03\x02\x02\x02" +
		"\b\xDB\x03\x02\x02\x02\n\xDD\x03\x02\x02\x02\f\xF5\x03\x02\x02\x02\x0E" +
		"\xFC\x03\x02\x02\x02\x10\u0113\x03\x02\x02\x02\x12\u012A\x03\x02\x02\x02" +
		"\x14\u0130\x03\x02\x02\x02\x16\u013A\x03\x02\x02\x02\x18\u0144\x03\x02" +
		"\x02\x02\x1A\u0149\x03\x02\x02\x02\x1C\u0152\x03\x02\x02\x02\x1E\u0163" +
		"\x03\x02\x02\x02 \u0165\x03\x02\x02\x02\"\u016D\x03\x02\x02\x02$\u0175" +
		"\x03\x02\x02\x02&\u017A\x03\x02\x02\x02(\u0183\x03\x02\x02\x02*\u0188" +
		"\x03\x02\x02\x02,\u018A\x03\x02\x02\x02.\u0196\x03\x02\x02\x020\u0199" +
		"\x03\x02\x02\x022\u01A5\x03\x02\x02\x024\u01B1\x03\x02\x02\x026\u01B8" +
		"\x03\x02\x02\x028\u01C3\x03\x02\x02\x02:\u01C5\x03\x02\x02\x02<\u01CB" +
		"\x03\x02\x02\x02>\u01E2\x03\x02\x02\x02@\u01E4\x03\x02\x02\x02B\u01F5" +
		"\x03\x02\x02\x02D\u0201\x03\x02\x02\x02F\u020D\x03\x02\x02\x02H\u0217" +
		"\x03\x02\x02\x02J\u021B\x03\x02\x02\x02L\u0224\x03\x02\x02\x02N\u022A" +
		"\x03\x02\x02\x02P\u022C\x03\x02\x02\x02R\u0237\x03\x02\x02\x02T\u0239" +
		"\x03\x02\x02\x02V\u0247\x03\x02\x02\x02X\u024E\x03\x02\x02\x02Z\u0252" +
		"\x03\x02\x02\x02\\\u025B\x03\x02\x02\x02^\u0268\x03\x02\x02\x02`\u026E" +
		"\x03\x02\x02\x02b\u0270\x03\x02\x02\x02d\u0287\x03\x02\x02\x02f\u028C" +
		"\x03\x02\x02\x02h\u0291\x03\x02\x02\x02j\u029B\x03\x02\x02\x02l\u02A2" +
		"\x03\x02\x02\x02n\u02AA\x03\x02\x02\x02p\u02B4\x03\x02\x02\x02r\u02B9" +
		"\x03\x02\x02\x02t\u02C1\x03\x02\x02\x02v\u02C7\x03\x02\x02\x02x\u02DD" +
		"\x03\x02\x02\x02z\u02E7\x03\x02\x02\x02|\u02F2\x03\x02\x02\x02~\u02F6" +
		"\x03\x02\x02\x02\x80\u02FA\x03\x02\x02\x02\x82\u02FD\x03\x02\x02\x02\x84" +
		"\u030B\x03\x02\x02\x02\x86\u0318\x03\x02\x02\x02\x88\u031C\x03\x02\x02" +
		"\x02\x8A\u031E\x03\x02\x02\x02\x8C\u0322\x03\x02\x02\x02\x8E\u0327\x03" +
		"\x02\x02\x02\x90\u032D\x03\x02\x02\x02\x92\u032F\x03\x02\x02\x02\x94\u033F" +
		"\x03\x02\x02\x02\x96\u034C\x03\x02\x02\x02\x98\u0355\x03\x02\x02\x02\x9A" +
		"\u035B\x03\x02\x02\x02\x9C\u035F\x03\x02\x02\x02\x9E\u0367\x03\x02\x02" +
		"\x02\xA0\u036F\x03\x02\x02\x02\xA2\u037F\x03\x02\x02\x02\xA4\u0385\x03" +
		"\x02\x02\x02\xA6\u038A\x03\x02\x02\x02\xA8\u03A6\x03\x02\x02\x02\xAA\u03A8" +
		"\x03\x02\x02\x02\xAC\u03AB\x03\x02\x02\x02\xAE\u03BC\x03\x02\x02\x02\xB0" +
		"\u03D4\x03\x02\x02\x02\xB2\u03DE\x03\x02\x02\x02\xB4\u03E6\x03\x02\x02" +
		"\x02\xB6\u03E9\x03\x02\x02\x02\xB8\u03FA\x03\x02\x02\x02\xBA\u0401\x03" +
		"\x02\x02\x02\xBC\u040E\x03\x02\x02\x02\xBE\u041B\x03\x02\x02\x02\xC0\u042B" +
		"\x03\x02\x02\x02\xC2\u0435\x03\x02\x02\x02\xC4\xC6\x05\x04\x03\x02\xC5" +
		"\xC4\x03\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7" +
		"\xC8\x03\x02\x02\x02\xC8\xCA\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xCA" +
		"\xCB\x07\x02\x02\x03\xCB\x03\x03\x02\x02\x02\xCC\xD4\x05\x0E\b\x02\xCD" +
		"\xD4\x05\xB6\\\x02\xCE\xD4\x05\xC2b\x02\xCF\xD4\x05\xC0a\x02\xD0\xD4\x05" +
		"\n\x06\x02\xD1\xD4\x05b2\x02\xD2\xD4\x05\xB8]\x02\xD3\xCC\x03\x02\x02" +
		"\x02\xD3\xCD\x03\x02\x02\x02\xD3\xCE\x03\x02\x02\x02\xD3\xCF\x03\x02\x02" +
		"\x02\xD3\xD0\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD2\x03\x02\x02" +
		"\x02\xD4\x05\x03\x02\x02\x02\xD5\xD6\x07/\x02\x02\xD6\xDA\x07/\x02\x02" +
		"\xD7\xDA\x07/\x02\x02\xD8\xDA\x070\x02\x02\xD9\xD5\x03\x02\x02\x02\xD9" +
		"\xD7\x03\x02\x02\x02\xD9\xD8\x03\x02\x02\x02\xDA\x07\x03\x02\x02\x02\xDB" +
		"\xDC\t\x02\x02\x02\xDC\t\x03\x02\x02\x02\xDD\xDE\x07\x19\x02\x02\xDE\xDF" +
		"\x05\b\x05\x02\xDF\xE8\x07:\x02\x02\xE0\xE5\x05\f\x07\x02\xE1\xE2\x07" +
		"-\x02\x02\xE2\xE4\x05\f\x07\x02\xE3\xE1\x03\x02\x02\x02\xE4\xE7\x03\x02" +
		"\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE9\x03\x02" +
		"\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xE0\x03\x02\x02\x02\xE9\xEA\x03\x02" +
		"\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEC\x03\x02" +
		"\x02\x02\xEC\xF0\x07;\x02\x02\xED\xEF\x05*\x16\x02\xEE\xED\x03\x02\x02" +
		"\x02\xEF\xF2\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02" +
		"\x02\xF1\xF3\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF3\xF4\x07,\x02" +
		"\x02\xF4\v\x03\x02\x02\x02\xF5\xF9\x05\b\x05\x02\xF6\xF8\x05*\x16\x02" +
		"\xF7\xF6\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02" +
		"\xF9\xFA\x03\x02\x02\x02\xFA\r\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02" +
		"\xFC\u0100\x05\x18\r\x02\xFD\xFF\x05*\x16\x02\xFE\xFD\x03\x02\x02\x02" +
		"\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02" +
		"\x02\x02\u0101\u0107\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0103" +
		"\u0106\x05 \x11\x02\u0104\u0106\x05j6\x02\u0105\u0103\x03\x02\x02\x02" +
		"\u0105\u0104\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0105\x03" +
		"\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02\u0109" +
		"\u0107\x03\x02\x02\x02\u010A\u010C\x054\x1B\x02\u010B\u010A\x03\x02\x02" +
		"\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010E" +
		"\x07,\x02\x02\u010E\u010F\x05\x10\t\x02\u010F\u0111\x07,\x02\x02\u0110" +
		"\u0112\x07\x02\x02\x03\u0111\u0110\x03\x02\x02\x02\u0111\u0112\x03\x02" +
		"\x02\x02\u0112\x0F\x03\x02\x02\x02\u0113\u0114\x07\x07\x02\x02\u0114\u0118" +
		"\x05\b\x05\x02\u0115\u0117\x05\x12\n\x02\u0116\u0115\x03\x02\x02\x02\u0117" +
		"\u011A\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0118\u0116\x03\x02" +
		"\x02\x02\u0119\u011E\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011B" +
		"\u011D\x05\x16\f\x02\u011C\u011B\x03\x02\x02\x02\u011D\u0120\x03\x02\x02" +
		"\x02\u011E\u011F\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0122" +
		"\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0121\u0123\x05\x14\v\x02" +
		"\u0122\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0127\x03" +
		"\x02\x02\x02\u0124\u0126\x05*\x16\x02\u0125\u0124\x03\x02\x02\x02\u0126" +
		"\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02" +
		"\x02\x02\u0128\x11\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u012A\u012C" +
		"\x05\b\x05\x02\u012B\u012D\x05*\x16\x02\u012C\u012B\x03\x02\x02\x02\u012D" +
		"\u012E\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02" +
		"\x02\x02\u012F\x13\x03\x02\x02\x02\u0130\u0131\x07\x13\x02\x02\u0131\u0135" +
		"\x07:\x02\x02\u0132\u0134\x05\x16\f\x02\u0133\u0132\x03\x02\x02\x02\u0134" +
		"\u0137\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02" +
		"\x02\x02\u0136\u0138\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0138" +
		"\u0139\x07;\x02\x02\u0139\x15\x03\x02\x02\x02\u013A\u013C\x05\b\x05\x02" +
		"\u013B\u013D\x07\t\x02\x02\u013C\u013B\x03\x02\x02\x02\u013C\u013D\x03" +
		"\x02\x02\x02\u013D\u0141\x03\x02\x02\x02\u013E\u0140\x05*\x16\x02\u013F" +
		"\u013E\x03\x02\x02\x02\u0140\u0143\x03\x02\x02\x02\u0141\u013F\x03\x02" +
		"\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\x17\x03\x02\x02\x02\u0143\u0141" +
		"\x03\x02\x02\x02\u0144\u0145\x07\x06\x02\x02\u0145\u0147\x05\b\x05\x02" +
		"\u0146\u0148\x05\x1A\x0E\x02\u0147\u0146\x03\x02\x02\x02\u0147\u0148\x03" +
		"\x02\x02\x02\u0148\x19\x03\x02\x02\x02\u0149\u014A\x07\b\x02\x02\u014A" +
		"\u014F\x05\x1C\x0F\x02\u014B\u014C\x07-\x02\x02\u014C\u014E\x05\x1C\x0F" +
		"\x02\u014D\u014B\x03\x02\x02\x02\u014E\u0151\x03\x02\x02\x02\u014F\u014D" +
		"\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\x1B\x03\x02\x02\x02" +
		"\u0151\u014F\x03\x02\x02\x02\u0152\u0153\x05\b\x05\x02\u0153\x1D\x03\x02" +
		"\x02\x02\u0154\u0155\x07\x12\x02\x02\u0155\u0164\x05\xBC_\x02\u0156\u0157" +
		"\x07\x12\x02\x02\u0157\u0160\x076\x02\x02\u0158\u015D\x05> \x02\u0159" +
		"\u015A\x07-\x02\x02\u015A\u015C\x05> \x02\u015B\u0159\x03\x02\x02\x02" +
		"\u015C\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03" +
		"\x02\x02\x02\u015E\u0161\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160" +
		"\u0158\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x03\x02" +
		"\x02\x02\u0162\u0164\x077\x02\x02\u0163\u0154\x03\x02\x02\x02\u0163\u0156" +
		"\x03\x02\x02\x02\u0164\x1F\x03\x02\x02\x02\u0165\u0166\x07\x0E\x02\x02" +
		"\u0166\u016A\x05\b\x05\x02\u0167\u0169\x05*\x16\x02\u0168\u0167\x03\x02" +
		"\x02\x02\u0169\u016C\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016A" +
		"\u016B\x03\x02\x02\x02\u016B!\x03\x02\x02\x02\u016C\u016A\x03\x02\x02" +
		"\x02\u016D\u016E\x05$\x13\x02\u016E\u0172\x05\b\x05\x02\u016F\u0171\x05" +
		"*\x16\x02\u0170\u016F\x03\x02\x02\x02\u0171\u0174\x03\x02\x02\x02\u0172" +
		"\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173#\x03\x02\x02" +
		"\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0178\x05\b\x05\x02\u0176\u0177" +
		"\x07G\x02\x02\u0177\u0179\x05\b\x05\x02\u0178\u0176\x03\x02\x02\x02\u0178" +
		"\u0179\x03\x02\x02\x02\u0179%\x03\x02\x02\x02\u017A\u017D\x05\b\x05\x02" +
		"\u017B\u017C\x07/\x02\x02\u017C\u017E\x05\b\x05\x02\u017D\u017B\x03\x02" +
		"\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u017F" +
		"\u017D\x03\x02\x02\x02\u0180\'\x03\x02\x02\x02\u0181\u0184\x05\b\x05\x02" +
		"\u0182\u0184\x05&\x14\x02\u0183\u0181\x03\x02\x02\x02\u0183\u0182\x03" +
		"\x02\x02\x02\u0184)\x03\x02\x02\x02\u0185\u0189\x05,\x17\x02\u0186\u0189" +
		"\x052\x1A\x02\u0187\u0189\x050\x19\x02\u0188\u0185\x03\x02\x02\x02\u0188" +
		"\u0186\x03\x02\x02\x02\u0188\u0187\x03\x02\x02\x02\u0189+\x03\x02\x02" +
		"\x02\u018A\u018B\t\x03\x02\x02\u018B\u0194\x05(\x15\x02\u018C\u0191\x05" +
		"8\x1D\x02\u018D\u018E\x07-\x02\x02\u018E\u0190\x058\x1D\x02\u018F\u018D" +
		"\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02" +
		"\u0191\u018F\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193\u0191\x03" +
		"\x02\x02\x02\u0194\u018C\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195" +
		"-\x03\x02\x02\x02\u0196\u0197\x05$\x13\x02\u0197\u0198\x05\b\x05\x02\u0198" +
		"/\x03\x02\x02\x02\u0199\u019A\x071\x02\x02\u019A\u01A3\x07\"\x02\x02\u019B" +
		"\u01A0\x05.\x18\x02\u019C\u019D\x07-\x02\x02\u019D\u019F\x05.\x18\x02" +
		"\u019E\u019C\x03\x02\x02\x02\u019F\u01A2\x03\x02\x02\x02\u01A0\u01A1\x03" +
		"\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A1\u01A4\x03\x02\x02\x02\u01A2" +
		"\u01A0\x03\x02\x02\x02\u01A3\u019B\x03\x02\x02\x02\u01A3\u01A4\x03\x02" +
		"\x02\x02\u01A41\x03\x02\x02\x02\u01A5\u01A6\x071\x02\x02\u01A6\u01AF\x07" +
		"!\x02\x02\u01A7\u01AC\x058\x1D\x02\u01A8\u01A9\x07-\x02\x02\u01A9\u01AB" +
		"\x058\x1D\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02" +
		"\u01AC\u01AD\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AD\u01B0\x03" +
		"\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AF\u01A7\x03\x02\x02\x02\u01AF" +
		"\u01B0\x03\x02\x02\x02\u01B03\x03\x02\x02\x02\u01B1\u01B5\x07\x0F\x02" +
		"\x02\u01B2\u01B4\x05*\x16\x02\u01B3\u01B2\x03\x02\x02\x02\u01B4\u01B7" +
		"\x03\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02" +
		"\u01B65\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B8\u01B9\x07O\x02" +
		"\x02\u01B97\x03\x02\x02\x02\u01BA\u01C4\x05\xAEX\x02\u01BB\u01C4\x05\xA8" +
		"U\x02\u01BC\u01C4\x05\x84C\x02\u01BD\u01C4\x05> \x02\u01BE\u01C4\x05:" +
		"\x1E\x02\u01BF\u01C4\x056\x1C\x02\u01C0\u01C1\x05\b\x05\x02\u01C1\u01C2" +
		"\x05\b\x05\x02\u01C2\u01C4\x03\x02\x02\x02\u01C3";
	private static readonly _serializedATNSegment1: string =
		"\u01BA\x03\x02\x02\x02\u01C3\u01BB\x03\x02\x02\x02\u01C3\u01BC\x03\x02" +
		"\x02\x02\u01C3\u01BD\x03\x02\x02\x02\u01C3\u01BE\x03\x02\x02\x02\u01C3" +
		"\u01BF\x03\x02\x02\x02\u01C3\u01C0\x03\x02\x02\x02\u01C49\x03\x02\x02" +
		"\x02\u01C5\u01C6\x05N(\x02\u01C6\u01C7\x07.\x02\x02\u01C7\u01C8\x05<\x1F" +
		"\x02\u01C8;\x03\x02\x02\x02\u01C9\u01CC\x05> \x02\u01CA\u01CC\x05\x84" +
		"C\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CA\x03\x02\x02\x02\u01CC=\x03" +
		"\x02\x02\x02\u01CD\u01E3\x05\xBE`\x02\u01CE\u01E3\x05\\/\x02\u01CF\u01E3" +
		"\x05\xB0Y\x02\u01D0\u01E3\x05N(\x02\u01D1\u01E3\x05\x1E\x10\x02\u01D2" +
		"\u01E3\x05J&\x02\u01D3\u01E3\x05\xBA^\x02\u01D4\u01E3\x05\xBC_\x02\u01D5" +
		"\u01E3\x05B\"\x02\u01D6\u01E3\x05@!\x02\u01D7\u01D8\x07:\x02\x02\u01D8" +
		"\u01DD\x05:\x1E\x02\u01D9\u01DA\x07-\x02\x02\u01DA\u01DC\x05:\x1E\x02" +
		"\u01DB\u01D9\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DE\x03" +
		"\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DE\u01E0\x03\x02\x02\x02\u01DF" +
		"\u01DD\x03\x02\x02\x02\u01E0\u01E1\x07;\x02\x02\u01E1\u01E3\x03\x02\x02" +
		"\x02\u01E2\u01CD\x03\x02\x02\x02\u01E2\u01CE\x03\x02\x02\x02\u01E2\u01CF" +
		"\x03\x02\x02\x02\u01E2\u01D0\x03\x02\x02\x02\u01E2\u01D1\x03\x02\x02\x02" +
		"\u01E2\u01D2\x03\x02\x02\x02\u01E2\u01D3\x03\x02\x02\x02\u01E2\u01D4\x03" +
		"\x02\x02\x02\u01E2\u01D5\x03\x02\x02\x02\u01E2\u01D6\x03\x02\x02\x02\u01E2" +
		"\u01D7\x03\x02\x02\x02\u01E3?\x03\x02\x02\x02\u01E4\u01E5\x07 \x02\x02" +
		"\u01E5\u01E6\x076\x02\x02\u01E6\u01EE\x05P)\x02\u01E7\u01EA\x07-\x02\x02" +
		"\u01E8\u01EB\x05\x8CG\x02\u01E9\u01EB\x05\x84C\x02\u01EA\u01E8\x03\x02" +
		"\x02\x02\u01EA\u01E9\x03\x02\x02\x02\u01EB\u01ED\x03\x02\x02\x02\u01EC" +
		"\u01E7\x03\x02\x02\x02\u01ED\u01F0\x03\x02\x02\x02\u01EE\u01EF\x03\x02" +
		"\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01F1\x03\x02\x02\x02\u01F0" +
		"\u01EE\x03\x02\x02\x02\u01F1\u01F2\x07-\x02\x02\u01F2\u01F3\x05\x84C\x02" +
		"\u01F3\u01F4\x077\x02\x02\u01F4A\x03\x02\x02\x02\u01F5\u01F6\x07\x03\x02" +
		"\x02\u01F6\u01F7\x076\x02\x02\u01F7\u01F8\x05> \x02\u01F8\u01FD\x07-\x02" +
		"\x02\u01F9\u01FA\x07\x04\x02\x02\u01FA\u01FE\x05\x84C\x02\u01FB\u01FC" +
		"\x07\x05\x02\x02\u01FC\u01FE\x05\b\x05\x02\u01FD\u01F9\x03\x02\x02\x02" +
		"\u01FD\u01FB\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0200\x07" +
		"7\x02\x02\u0200C\x03\x02\x02\x02\u0201\u0202\x07\x1D\x02\x02\u0202\u0204" +
		"\x076\x02\x02\u0203\u0205\x05\b\x05\x02\u0204\u0203\x03\x02\x02\x02\u0204" +
		"\u0205\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0207\x05\b\x05" +
		"\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0209\x07-\x02\x02\u0209\u020A" +
		"\x05> \x02\u020A\u020B\x077\x02\x02\u020B\u020C\x05\xAEX\x02\u020CE\x03" +
		"\x02\x02\x02\u020D\u020E\x07+\x02\x02\u020E\u020F\x076\x02\x02\u020F\u0210" +
		"\x05\b\x05\x02\u0210\u0211\x07-\x02\x02\u0211\u0212\x05> \x02\u0212\u0213" +
		"\x07-\x02\x02\u0213\u0214\x05> \x02\u0214\u0215\x077\x02\x02\u0215\u0216" +
		"\x05\xAEX\x02\u0216G\x03\x02\x02\x02\u0217\u0219\x05J&\x02\u0218\u021A" +
		"\x07,\x02\x02\u0219\u0218\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02" +
		"\u021AI\x03\x02\x02\x02\u021B\u021C\x07\x15\x02\x02\u021C\u021D\x076\x02" +
		"\x02\u021D\u021E\x05\x84C\x02\u021E\u021F\x077\x02\x02\u021F\u0220\x07" +
		"\x17\x02\x02\u0220\u0221\x05> \x02\u0221\u0222\x07\x18\x02\x02\u0222\u0223" +
		"\x05> \x02\u0223K\x03\x02\x02\x02\u0224\u0225\t\x04\x02\x02\u0225M\x03" +
		"\x02\x02\x02\u0226\u022B\x05Z.\x02\u0227\u022B\x05L\'\x02\u0228\u022B" +
		"\x07N\x02\x02\u0229\u022B\x07M\x02\x02\u022A\u0226\x03\x02\x02\x02\u022A" +
		"\u0227\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A\u0229\x03\x02" +
		"\x02\x02\u022BO\x03\x02\x02\x02\u022C\u022D\x07>\x02\x02\u022D\u022E\x05" +
		"\b\x05\x02\u022EQ\x03\x02\x02\x02\u022F\u0238\x05\b\x05\x02\u0230\u0238" +
		"\x05T+\x02\u0231\u0238\x05V,\x02\u0232\u0238\x05P)\x02\u0233\u0238\x05" +
		"\xBE`\x02\u0234\u0238\x05\xBC_\x02\u0235\u0238\x05@!\x02\u0236\u0238\x05" +
		"B\"\x02\u0237\u022F\x03\x02\x02\x02\u0237\u0230\x03\x02\x02\x02\u0237" +
		"\u0231\x03\x02\x02\x02\u0237\u0232\x03\x02\x02\x02\u0237\u0233\x03\x02" +
		"\x02\x02\u0237\u0234\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0237" +
		"\u0236\x03\x02\x02\x02\u0238S\x03\x02\x02\x02\u0239\u023A\x05\b\x05\x02" +
		"\u023A\u0243\x076\x02\x02\u023B\u0240\x05X-\x02\u023C\u023D\x07-\x02\x02" +
		"\u023D\u023F\x05X-\x02\u023E\u023C\x03\x02\x02\x02\u023F\u0242\x03\x02" +
		"\x02\x02\u0240\u023E\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241" +
		"\u0244\x03\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0243\u023B\x03\x02" +
		"\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245" +
		"\u0246\x077\x02\x02\u0246U\x03\x02\x02\x02\u0247\u0248\x05\b\x05\x02\u0248" +
		"\u0249\x078\x02\x02\u0249\u024A\x05X-\x02\u024A\u024B\x079\x02\x02\u024B" +
		"W\x03\x02\x02\x02\u024C\u024D\x07T\x02\x02\u024D\u024F\x07.\x02\x02\u024E" +
		"\u024C\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0250\x03\x02" +
		"\x02\x02\u0250\u0251\x058\x1D\x02\u0251Y\x03\x02\x02\x02\u0252\u0258\x05" +
		"R*\x02\u0253\u0254\x05\x06\x04\x02\u0254\u0255\x05R*\x02\u0255\u0257\x03" +
		"\x02\x02\x02\u0256\u0253\x03\x02\x02\x02\u0257\u025A\x03\x02\x02\x02\u0258" +
		"\u0256\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259[\x03\x02\x02" +
		"\x02\u025A\u0258\x03\x02\x02\x02\u025B\u025C\x075\x02\x02\u025C\u025E" +
		"\x05\b\x05\x02\u025D\u025F\x05\b\x05\x02\u025E\u025D\x03\x02\x02\x02\u025E" +
		"\u025F\x03\x02\x02\x02\u025F\u0263\x03\x02\x02\x02\u0260\u0262\x05`1\x02" +
		"\u0261\u0260\x03\x02\x02\x02\u0262\u0265\x03\x02\x02\x02\u0263\u0261\x03" +
		"\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0266\x03\x02\x02\x02\u0265" +
		"\u0263\x03\x02\x02\x02\u0266\u0267\x07,\x02\x02\u0267]\x03\x02\x02\x02" +
		"\u0268\u0269\x05> \x02\u0269\u026A\x05\b\x05\x02\u026A\u026B\x05> \x02" +
		"\u026B_\x03\x02\x02\x02\u026C\u026F\x05*\x16\x02\u026D\u026F\x05\xBE`" +
		"\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026D\x03\x02\x02\x02\u026Fa\x03" +
		"\x02\x02\x02\u0270\u0271\t\x05\x02\x02\u0271\u0277\x05\b\x05\x02\u0272" +
		"\u0278\x05d3\x02\u0273\u0274\x076\x02\x02\u0274\u0275\x05p9\x02\u0275" +
		"\u0276\x077\x02\x02\u0276\u0278\x03\x02\x02\x02\u0277\u0272\x03\x02\x02" +
		"\x02\u0277\u0273\x03\x02\x02\x02\u0278\u027A\x03\x02\x02\x02\u0279\u027B" +
		"\x05f4\x02\u027A\u0279\x03\x02\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B" +
		"\u027D\x03\x02\x02\x02\u027C\u027E\x05h5\x02\u027D\u027C\x03\x02\x02\x02" +
		"\u027D\u027E\x03\x02\x02\x02\u027E\u0282\x03\x02\x02\x02\u027F\u0281\x05" +
		"*\x16\x02\u0280\u027F\x03\x02\x02\x02\u0281\u0284\x03\x02\x02\x02\u0282" +
		"\u0280\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283\u0285\x03\x02" +
		"\x02\x02\u0284\u0282\x03\x02\x02\x02\u0285\u0286\x07,\x02\x02\u0286c\x03" +
		"\x02\x02\x02\u0287\u0288\x07\x14\x02\x02\u0288\u0289\x07:\x02\x02\u0289" +
		"\u028A\x05\xB4[\x02\u028A\u028B\x07;\x02\x02\u028Be\x03\x02\x02\x02\u028C" +
		"\u028D\x07\"\x02\x02\u028D\u028E\x07:\x02\x02\u028E\u028F\x05\xB4[\x02" +
		"\u028F\u0290\x07;\x02\x02\u0290g\x03\x02\x02\x02\u0291\u0292\x07)\x02" +
		"\x02\u0292\u0296\x07:\x02\x02\u0293\u0295\x05\xB6\\\x02\u0294\u0293\x03" +
		"\x02\x02\x02\u0295\u0298\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0296" +
		"\u0297\x03\x02\x02\x02\u0297\u0299\x03\x02\x02\x02\u0298\u0296\x03\x02" +
		"\x02\x02\u0299\u029A\x07;\x02\x02\u029Ai\x03\x02\x02\x02\u029B\u029F\x05" +
		"n8\x02\u029C\u029E\x05*\x16\x02\u029D\u029C\x03\x02\x02\x02\u029E\u02A1" +
		"\x03\x02\x02\x02\u029F\u029D\x03\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02" +
		"\u02A0k\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A2\u02A3\x05n8" +
		"\x02\u02A3\u02A7\x07\t\x02\x02\u02A4\u02A6\x05*\x16\x02\u02A5\u02A4\x03" +
		"\x02\x02\x02\u02A6\u02A9\x03\x02\x02\x02\u02A7\u02A5\x03\x02\x02\x02\u02A7" +
		"\u02A8\x03\x02\x02\x02\u02A8m\x03\x02\x02\x02\u02A9\u02A7\x03\x02\x02" +
		"\x02\u02AA\u02AB\t\x06\x02\x02\u02AB\u02B1\x05\b\x05\x02\u02AC\u02B2\x05" +
		"d3\x02\u02AD\u02AE\x076\x02\x02\u02AE\u02AF\x05p9\x02\u02AF\u02B0\x07" +
		"7\x02\x02\u02B0\u02B2\x03\x02\x02\x02\u02B1\u02AC\x03\x02\x02\x02\u02B1" +
		"\u02AD\x03\x02\x02\x02\u02B2o\x03\x02\x02\x02\u02B3\u02B5\x05r:\x02\u02B4" +
		"\u02B3\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B7\x03\x02" +
		"\x02\x02\u02B6\u02B8\x05v<\x02\u02B7\u02B6\x03\x02\x02\x02\u02B7\u02B8" +
		"\x03\x02\x02\x02\u02B8q\x03\x02\x02\x02\u02B9\u02BE\x05t;\x02\u02BA\u02BB" +
		"\x07-\x02\x02\u02BB\u02BD\x05t;\x02\u02BC\u02BA\x03\x02\x02\x02\u02BD" +
		"\u02C0\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BE\u02BF\x03\x02" +
		"\x02\x02\u02BFs\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C1\u02C2" +
		"\x05$\x13\x02\u02C2\u02C4\x05\b\x05\x02\u02C3\u02C5\x05z>\x02\u02C4\u02C3" +
		"\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5u\x03\x02\x02\x02\u02C6" +
		"\u02C8\x07-\x02\x02\u02C7\u02C6\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02" +
		"\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02D2\x07:\x02\x02\u02CA\u02CF" +
		"\x05x=\x02\u02CB\u02CC\x07-\x02\x02\u02CC\u02CE\x05x=\x02\u02CD\u02CB" +
		"\x03\x02\x02\x02\u02CE\u02D1\x03\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02" +
		"\u02CF\u02D0\x03\x02\x02\x02\u02D0\u02D3\x03\x02\x02\x02\u02D1\u02CF\x03" +
		"\x02\x02\x02\u02D2\u02CA\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3" +
		"\u02D4\x03\x02\x02\x02\u02D4\u02D6\x07;\x02\x02\u02D5\u02D7\x05\b\x05" +
		"\x02\u02D6\u02D5\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7w\x03" +
		"\x02\x02\x02\u02D8\u02D9\x078\x02\x02\u02D9\u02DA\x05\b\x05\x02\u02DA" +
		"\u02DB\x079\x02\x02\u02DB\u02DE\x03\x02\x02\x02\u02DC\u02DE\x05\b\x05" +
		"\x02\u02DD\u02D8\x03\x02\x02\x02\u02DD\u02DC\x03\x02\x02\x02\u02DE\u02DF" +
		"\x03\x02\x02\x02\u02DF\u02E0\x07.\x02\x02\u02E0\u02E2\x05\b\x05\x02\u02E1" +
		"\u02E3\x05\b\x05\x02\u02E2\u02E1\x03\x02\x02\x02\u02E2\u02E3\x03\x02\x02" +
		"\x02\u02E3\u02E5\x03\x02\x02\x02\u02E4\u02E6\x05z>\x02\u02E5\u02E4\x03" +
		"\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6y\x03\x02\x02\x02\u02E7" +
		"\u02E8\x07:\x02\x02\u02E8\u02ED\x05|?\x02\u02E9\u02EA\x07-\x02\x02\u02EA" +
		"\u02EC\x05|?\x02\u02EB\u02E9\x03\x02\x02\x02\u02EC\u02EF\x03\x02\x02\x02" +
		"\u02ED\u02EB\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02\u02EE\u02F0\x03" +
		"\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02F0\u02F1\x07;\x02\x02\u02F1" +
		"{\x03\x02\x02\x02\u02F2\u02F4\x05\b\x05\x02\u02F3\u02F5\x05> \x02\u02F4" +
		"\u02F3\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5}\x03\x02\x02" +
		"\x02\u02F6\u02F8\x05\x80A\x02\u02F7\u02F9\x05\x8EH\x02\u02F8\u02F7\x03" +
		"\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\x7F\x03\x02\x02\x02\u02FA" +
		"\u02FB\x05^0\x02\u02FB\x81\x03\x02\x02\x02\u02FC\u02FE\x05\x8EH\x02\u02FD" +
		"\u02FC\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE\u0302\x03\x02" +
		"\x02\x02\u02FF\u0301\x05~@\x02\u0300\u02FF\x03\x02\x02\x02\u0301\u0304" +
		"\x03\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02" +
		"\u0303\x83\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02\u0305\u0306\bC" +
		"\x01\x02\u0306\u0307\x076\x02\x02\u0307\u0308\x05\x84C\x02\u0308\u0309" +
		"\x077\x02\x02\u0309\u030C\x03\x02\x02\x02\u030A\u030C\x05\x86D\x02\u030B" +
		"\u0305\x03\x02\x02\x02\u030B\u030A\x03\x02\x02\x02\u030C\u0315\x03\x02" +
		"\x02\x02\u030D\u030E\f\x05\x02\x02\u030E\u030F\x07F\x02\x02\u030F\u0314" +
		"\x05\x84C\x06\u0310\u0311\f\x04\x02\x02\u0311\u0312\x07G\x02\x02\u0312" +
		"\u0314\x05\x84C\x05\u0313\u030D\x03\x02\x02\x02\u0313\u0310\x03\x02\x02" +
		"\x02\u0314\u0317\x03\x02\x02\x02\u0315\u0313\x03\x02\x02\x02\u0315\u0316" +
		"\x03\x02\x02\x02\u0316\x85\x03\x02\x02\x02\u0317\u0315\x03\x02\x02\x02" +
		"\u0318\u0319\x05> \x02\u0319\u031A\x05\x88E\x02\u031A\u031B\x05> \x02" +
		"\u031B\x87\x03\x02\x02\x02\u031C\u031D\t\x07\x02\x02\u031D\x89\x03\x02" +
		"\x02\x02\u031E\u031F\x05> \x02\u031F\u0320\x07I\x02\x02\u0320\u0321\x05" +
		"> \x02\u0321\x8B\x03\x02\x02\x02\u0322\u0323\x05> \x02\u0323\u0324\x07" +
		"H\x02\x02\u0324\u0325\x05> \x02\u0325\x8D\x03\x02\x02\x02\u0326\u0328" +
		"\x05\x90I\x02\u0327\u0326\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02" +
		"\u0329\u0327\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A\x8F\x03" +
		"\x02\x02\x02\u032B\u032E\x05\x84C\x02\u032C\u032E\x05\xB2Z\x02\u032D\u032B" +
		"\x03\x02\x02\x02\u032D\u032C\x03\x02\x02\x02\u032E\x91\x03\x02\x02\x02" +
		"\u032F\u0330\x07%\x02\x02\u0330\u0331\x076\x02\x02\u0331\u0332\x05> \x02" +
		"\u0332\u0333\x077\x02\x02\u0333\u0337\x07:\x02\x02\u0334\u0336\x05\x96" +
		"L\x02\u0335\u0334\x03\x02\x02\x02\u0336\u0339\x03\x02\x02\x02\u0337\u0335" +
		"\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338\u033B\x03\x02\x02\x02" +
		"\u0339\u0337\x03\x02\x02\x02\u033A\u033C\x05\x98M\x02\u033B\u033A\x03" +
		"\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D" +
		"\u033E\x07;\x02\x02\u033E\x93\x03\x02\x02\x02\u033F\u0340\x07%\x02\x02" +
		"\u0340\u0344\x07:\x02\x02\u0341\u0343\x05\x96L\x02\u0342\u0341\x03\x02" +
		"\x02\x02\u0343\u0346\x03\x02\x02\x02\u0344\u0342\x03\x02\x02\x02\u0344" +
		"\u0345\x03\x02\x02\x02\u0345\u0348\x03\x02\x02\x02\u0346\u0344\x03\x02" +
		"\x02\x02\u0347\u0349\x05\x98M\x02\u0348\u0347\x03\x02\x02\x02\u0348\u0349" +
		"\x03\x02\x02\x02\u0349\u034A\x03\x02\x02\x02\u034A\u034B\x07;\x02\x02" +
		"\u034B\x95\x03\x02\x02\x02\u034C\u034D\x07&\x02\x02\u034D\u034E\x076\x02" +
		"\x02\u034E\u034F\x058\x1D\x02\u034F\u0350\x077\x02\x02\u0350\u0353\x07" +
		".\x02\x02\u0351\u0354\x05\xA8U\x02\u0352\u0354\x05\xAEX\x02\u0353\u0351" +
		"\x03\x02\x02\x02\u0353\u0352\x03\x02\x02\x02\u0354\x97\x03\x02\x02\x02" +
		"\u0355\u0356\x07\'\x02\x02\u0356\u0359\x07.\x02\x02\u0357\u035A\x05\xA8" +
		"U\x02\u0358\u035A\x05\xAEX\x02\u0359\u0357\x03\x02\x02\x02\u0359\u0358" +
		"\x03\x02\x02\x02\u035A\x99\x03\x02\x02\x02\u035B\u035D\x07(\x02\x02\u035C" +
		"\u035E\x07,\x02\x02\u035D\u035C\x03\x02\x02\x02\u035D\u035E\x03\x02\x02" +
		"\x02\u035E\x9B\x03\x02\x02\x02\u035F\u0365\x05\x9EP\x02\u0360\u0363\x07" +
		"\x18\x02\x02\u0361\u0364\x05\xAEX\x02\u0362\u0364\x05\xA8U\x02\u0363\u0361" +
		"\x03\x02\x02\x02\u0363\u0362\x03\x02\x02\x02\u0364\u0366\x03\x02\x02\x02" +
		"\u0365\u0360\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\x9D\x03" +
		"\x02\x02\x02\u0367\u0368\x07\x16\x02\x02\u0368\u0369\x076\x02\x02\u0369" +
		"\u036A\x05\x90I\x02\u036A\u036D\x077\x02\x02\u036B\u036E\x05\xAEX\x02" +
		"\u036C\u036E\x05\xA8U\x02\u036D\u036B\x03\x02\x02\x02\u036D\u036C\x03" +
		"\x02\x02\x02\u036E\x9F\x03\x02\x02\x02\u036F\u0370\x07\x1E\x02\x02\u0370" +
		"\u0373\x076\x02\x02\u0371\u0374\x05\b\x05\x02\u0372\u0374\x05P)\x02\u0373" +
		"\u0371\x03\x02\x02\x02\u0373\u0372\x03\x02\x02\x02\u0374\u0375\x03\x02" +
		"\x02\x02\u0375\u0378\x07\x1F\x02\x02\u0376\u0379\x05> \x02\u0377\u0379" +
		"\x07\t\x02\x02\u0378\u0376\x03\x02\x02\x02\u0378\u0377\x03\x02\x02\x02" +
		"\u0379\u037A\x03\x02\x02\x02\u037A\u037D\x077\x02\x02\u037B\u037E\x05" +
		"\xAEX\x02\u037C\u037E\x05\xA8U\x02\u037D\u037B\x03\x02\x02\x02\u037D\u037C" +
		"\x03\x02\x02\x02\u037E\xA1\x03\x02\x02\x02\u037F\u0380\x07*\x02\x02\u0380" +
		"\u0381\x076\x02\x02\u0381\u0382\x05\x90I\x02\u0382\u0383\x077\x02\x02" +
		"\u0383\u0384\x05\xAEX\x02\u0384\xA3\x03\x02\x02\x02\u0385\u0386\x07!\x02" +
		"\x02\u0386\u0388\x05> \x02\u0387\u0389\x07,\x02\x02\u0388\u0387\x03\x02" +
		"\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389\xA5\x03\x02\x02\x02\u038A\u038B" +
		"\x05Z.\x02\u038B\xA7\x03\x02\x02\x02\u038C\u038E\x05\xA6T\x02\u038D\u038F" +
		"\x07,\x02\x02\u038E\u038D\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02" +
		"\u038F\u03A7\x03\x02\x02\x02\u0390\u0392\x05\x8AF\x02\u0391\u0393\x07" +
		",\x02\x02\u0392\u0391\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393" +
		"\u03A7\x03\x02\x02\x02\u0394\u0396\x05\x8CG\x02\u0395\u0397\x07,\x02\x02" +
		"\u0396\u0395\x03\x02\x02\x02\u0396\u0397\x03\x02\x02\x02\u0397\u03A7\x03" +
		"\x02\x02\x02\u0398\u03A7\x05F$\x02\u0399\u03A7\x05D#\x02\u039A\u03A7\x05" +
		"\xA0Q\x02\u039B\u03A7\x05\xA4S\x02\u039C\u03A7\x05\x9CO\x02\u039D\u039F" +
		"\x05\xACW\x02\u039E\u03A0\x07,\x02\x02\u039F\u039E\x03\x02\x02\x02\u039F" +
		"\u03A0\x03\x02\x02\x02\u03A0\u03A7\x03\x02\x02\x02\u03A1\u03A7\x05\x94" +
		"K\x02\u03A2\u03A7\x05\x9AN\x02\u03A3\u03A7\x05\x92J\x02\u03A4\u03A7\x05" +
		"H%\x02\u03A5\u03A7\x05\xA2R\x02\u03A6\u038C\x03\x02\x02\x02\u03A6\u0390" +
		"\x03\x02\x02\x02\u03A6\u0394\x03\x02\x02\x02\u03A6\u0398\x03\x02\x02\x02" +
		"\u03A6\u0399\x03\x02\x02\x02\u03A6\u039A\x03\x02\x02\x02\u03A6\u039B\x03" +
		"\x02\x02\x02\u03A6\u039C\x03\x02\x02\x02\u03A6\u039D\x03\x02\x02\x02\u03A6" +
		"\u03A1\x03\x02\x02\x02\u03A6\u03A2\x03\x02\x02\x02\u03A6\u03A3\x03\x02" +
		"\x02\x02\u03A6\u03A4\x03\x02\x02\x02\u03A6\u03A5\x03\x02\x02\x02\u03A7" +
		"\xA9\x03\x02\x02\x02\u03A8\u03A9\x07\x1A\x02\x02\u03A9\u03AA\x05\xAEX" +
		"\x02\u03AA\xAB\x03\x02\x02\x02\u03AB\u03AC\x07\x1B\x02\x02\u03AC\u03AD" +
		"\x076\x02\x02\u03AD\u03AE\x05\xAAV\x02\u03AE\u03AF\x07\x1C\x02\x02\u03AF" +
		"\u03B0\x076\x02\x02\u03B0\u03B5\x05\b\x05\x02\u03B1\u03B2\x07-\x02\x02" +
		"\u03B2\u03B4\x05\b\x05\x02\u03B3\u03B1\x03\x02\x02\x02\u03B4\u03B7\x03" +
		"\x02\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B6" +
		"\u03B8\x03\x02\x02\x02\u03B7\u03B5\x03\x02\x02\x02\u03B8\u03B9\x077\x02" +
		"\x02\u03B9\u03BA\x05\xAEX\x02\u03BA\u03BB\x077\x02\x02\u03BB\xAD\x03\x02" +
		"\x02\x02\u03BC\u03BE\x07:\x02\x02\u03BD\u03BF\x05\xA8U\x02\u03BE\u03BD" +
		"\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0\u03BE\x03\x02\x02\x02" +
		"\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03C3\x07" +
		";\x02\x02\u03C3\xAF\x03\x02\x02\x02\u03C4\u03C5\bY\x01\x02\u03C5\u03C6" +
		"\x076\x02\x02\u03C6\u03C7\x05\xB0Y\x02\u03C7\u03C8\x077\x02\x02\u03C8" +
		"\u03D5\x03\x02\x02\x02\u03C9\u03CA\x07L\x02\x02\u03CA\u03D5\x05\xB0Y\x06" +
		"\u03CB\u03CC\x05Z.\x02\u03CC\u03CD\x07L\x02\x02\u03CD\u03CE\x05\xB0Y\x05" +
		"\u03CE\u03D5\x03\x02\x02\x02\u03CF\u03D0\x05Z.\x02\u03D0\u03D1\x07L\x02" +
		"\x02\u03D1\u03D2\x05Z.\x02\u03D2\u03D5\x03\x02\x02\x02\u03D3\u03D5\x07" +
		"Q\x02\x02\u03D4\u03C4\x03\x02\x02\x02\u03D4\u03C9\x03\x02\x02\x02\u03D4" +
		"\u03CB\x03\x02\x02\x02\u03D4\u03CF\x03\x02\x02\x02\u03D4\u03D3\x03\x02" +
		"\x02\x02\u03D5\u03DB\x03\x02\x02\x02\u03D6\u03D7\f\x07\x02\x02\u03D7\u03D8" +
		"\x07L\x02\x02\u03D8\u03DA\x05\xB0Y\b\u03D9\u03D6\x03\x02\x02\x02\u03DA" +
		"\u03DD\x03\x02\x02\x02\u03DB\u03D9\x03\x02\x02\x02\u03DB\u03DC\x03\x02" +
		"\x02\x02\u03DC\xB1\x03\x02\x02\x02\u03DD\u03DB\x03\x02\x02\x02\u03DE\u03DF" +
		"\x05\b\x05\x02\u03DF\u03E0\x076\x02\x02\u03E0\u03E1\x05\x82B\x02\u03E1" +
		"\u03E2\x077\x02\x02\u03E2\xB3\x03\x02\x02\x02\u03E3\u03E5\x05\"\x12\x02" +
		"\u03E4\u03E3\x03\x02\x02\x02\u03E5\u03E8\x03\x02\x02\x02\u03E6\u03E4\x03" +
		"\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\xB5\x03\x02\x02\x02\u03E8" +
		"\u03E6\x03\x02\x02\x02\u03E9\u03EA\x05\b\x05\x02\u03EA\u03ED\x05\b\x05" +
		"\x02\u03EB\u03EC\x07\b\x02\x02\u03EC\u03EE\x05\b\x05\x02\u03ED\u03EB\x03" +
		"\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03F0\x03\x02\x02\x02\u03EF" +
		"\u03F1\x05> \x02\u03F0\u03EF\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02" +
		"\u03F1\u03F5\x03\x02\x02\x02\u03F2\u03F4\x05*\x16\x02\u03F3\u03F2\x03" +
		"\x02\x02\x02\u03F4\u03F7\x03\x02\x02\x02\u03F5\u03F3\x03\x02\x02\x02\u03F5" +
		"\u03F6\x03\x02\x02\x02\u03F6\u03F8\x03\x02\x02\x02\u03F7\u03F5\x03\x02" +
		"\x02\x02\u03F8\u03F9\x07,\x02\x02\u03F9\xB7\x03\x02\x02\x02\u03FA\u03FD" +
		"\x07\x10\x02\x02\u03FB\u03FE\x05j6\x02\u03FC\u03FE\x05\"\x12\x02\u03FD" +
		"\u03FB\x03\x02\x02\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE\u03FF\x03\x02" +
		"\x02\x02\u03FF\u0400\x07,\x02\x02\u0400\xB9\x03\x02\x02\x02\u0401\u0403" +
		"\x078\x02\x02\u0402\u0404\x05> \x02\u0403\u0402\x03\x02\x02\x02\u0403" +
		"\u0404\x03\x02\x02\x02\u0404\u0409\x03\x02\x02\x02\u0405\u0406\x07-\x02" +
		"\x02\u0406\u0408\x05> \x02\u0407\u0405\x03\x02\x02\x02\u0408\u040B\x03" +
		"\x02\x02\x02\u0409\u0407\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A" +
		"\u040C\x03\x02\x02\x02\u040B\u0409\x03\x02\x02\x02\u040C\u040D\x079\x02" +
		"\x02\u040D\xBB\x03\x02\x02\x02\u040E\u0410\x07:\x02\x02\u040F\u0411\x05" +
		"> \x02\u0410\u040F\x03\x02\x02\x02\u0410\u0411\x03\x02\x02\x02\u0411\u0416" +
		"\x03\x02\x02\x02\u0412\u0413\x07-\x02\x02\u0413\u0415\x05> \x02\u0414" +
		"\u0412\x03\x02\x02\x02\u0415\u0418\x03\x02\x02\x02\u0416\u0414\x03\x02" +
		"\x02\x02\u0416\u0417\x03\x02\x02\x02\u0417\u0419\x03\x02\x02\x02\u0418" +
		"\u0416\x03\x02\x02\x02\u0419\u041A\x07;\x02\x02\u041A\xBD\x03\x02\x02" +
		"\x02\u041B\u0424\x07J\x02\x02\u041C\u041E\n\b\x02\x02\u041D\u041C\x03" +
		"\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\u041D\x03\x02\x02\x02\u041F" +
		"\u0420\x03\x02\x02\x02\u0420\u0423\x03\x02\x02\x02\u0421\u0423\x05\xBE" +
		"`\x02\u0422\u041D\x03\x02\x02\x02\u0422\u0421\x03\x02\x02\x02\u0423\u0426" +
		"\x03\x02\x02\x02\u0424\u0425\x03\x02\x02\x02\u0424\u0422\x03\x02\x02\x02" +
		"\u0425\u0427\x03\x02\x02\x02\u0426\u0424\x03\x02\x02\x02\u0427\u0429\x07" +
		"K\x02\x02\u0428\u042A\x07\x02\x02\x03\u0429\u0428\x03\x02\x02\x02\u0429" +
		"\u042A\x03\x02\x02\x02\u042A\xBF\x03\x02\x02\x02\u042B\u042C\x07\x11\x02" +
		"\x02\u042C\u0430\x05\b\x05\x02\u042D\u042F\x05*\x16\x02\u042E\u042D\x03" +
		"\x02\x02\x02\u042F\u0432\x03\x02\x02\x02\u0430\u042E\x03\x02\x02\x02\u0430" +
		"\u0431\x03\x02\x02\x02\u0431\u0433\x03\x02\x02\x02\u0432\u0430\x03\x02" +
		"\x02\x02\u0433\u0434\x07,\x02\x02\u0434\xC1\x03\x02\x02\x02\u0435\u0438" +
		"\x07\x11\x02\x02\u0436\u0439\x05\b\x05\x02\u0437\u0439\x07\t\x02\x02\u0438" +
		"\u0436\x03\x02\x02\x02\u0438\u0437\x03\x02\x02\x02\u0439\u043F\x03\x02" +
		"\x02\x02\u043A\u043E\x05 \x11\x02\u043B\u043E\x05l7\x02\u043C\u043E\x05" +
		"\"\x12\x02\u043D\u043A\x03\x02\x02\x02\u043D\u043B\x03\x02\x02\x02\u043D" +
		"\u043C\x03\x02\x02\x02\u043E\u0441\x03\x02\x02\x02\u043F\u043D\x03\x02" +
		"\x02\x02\u043F\u0440\x03\x02\x02\x02\u0440\u0442\x03\x02\x02\x02\u0441" +
		"\u043F\x03\x02\x02\x02\u0442\u0443\x07,\x02\x02\u0443\xC3\x03\x02\x02" +
		"\x02\x7F\xC7\xD3\xD9\xE5\xEA\xF0\xF9\u0100\u0105\u0107\u010B\u0111\u0118" +
		"\u011E\u0122\u0127\u012E\u0135\u013C\u0141\u0147\u014F\u015D\u0160\u0163" +
		"\u016A\u0172\u0178\u017F\u0183\u0188\u0191\u0194\u01A0\u01A3\u01AC\u01AF" +
		"\u01B5\u01C3\u01CB\u01DD\u01E2\u01EA\u01EE\u01FD\u0204\u0219\u022A\u0237" +
		"\u0240\u0243\u024E\u0258\u025E\u0263\u026E\u0277\u027A\u027D\u0282\u0296" +
		"\u029F\u02A7\u02B1\u02B4\u02B7\u02BE\u02C4\u02C7\u02CF\u02D2\u02D6\u02DD" +
		"\u02E2\u02E5\u02ED\u02F4\u02F8\u02FD\u0302\u030B\u0313\u0315\u0329\u032D" +
		"\u0337\u033B\u0344\u0348\u0353\u0359\u035D\u0363\u0365\u036D\u0373\u0378" +
		"\u037D\u0388\u038E\u0392\u0396\u039F\u03A6\u03B5\u03C0\u03D4\u03DB\u03E6" +
		"\u03ED\u03F0\u03F5\u03FD\u0403\u0409\u0410\u0416\u041F\u0422\u0424\u0429" +
		"\u0430\u0438\u043D\u043F";
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
	public FUNCTION_AS_TYPE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.FUNCTION_AS_TYPE, 0); }
	public TEXT_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(YmlParser.TEXT_FUNCTION, 0); }
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
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
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
	public as(): AsContext | undefined {
		return this.tryGetRuleContext(0, AsContext);
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
	public enterRule(listener: YmlListener): void {
		if (listener.enterAs) {
			listener.enterAs(this);
		}
	}
	// @Override
	public exitRule(listener: YmlListener): void {
		if (listener.exitAs) {
			listener.exitAs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YmlVisitor<Result>): Result {
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
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public COMMA(): TerminalNode { return this.getToken(YmlParser.COMMA, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(YmlParser.CLOSE_PAR, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(YmlParser.WHERE, 0); }
	public combinedComparison(): CombinedComparisonContext | undefined {
		return this.tryGetRuleContext(0, CombinedComparisonContext);
	}
	public OPERATION(): TerminalNode | undefined { return this.tryGetToken(YmlParser.OPERATION, 0); }
	public ymlId(): YmlIdContext | undefined {
		return this.tryGetRuleContext(0, YmlIdContext);
	}
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
	public as(): AsContext | undefined {
		return this.tryGetRuleContext(0, AsContext);
	}
	public applyCollection(): ApplyCollectionContext | undefined {
		return this.tryGetRuleContext(0, ApplyCollectionContext);
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


