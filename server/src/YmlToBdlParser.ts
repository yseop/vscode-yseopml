// Generated from src/grammar/YmlToBdl.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { YmlToBdlListener } from './YmlToBdlListener';
import { YmlToBdlVisitor } from './YmlToBdlVisitor';


export class YmlToBdlParser extends Parser {
	public static readonly INTERFACE=1;
	public static readonly IMPLEMENTATION=2;
	public static readonly EXTENDS=3;
	public static readonly FUNCTION=4;
	public static readonly METHOD=5;
	public static readonly TEXT_METHOD=6;
	public static readonly FIELD=7;
	public static readonly CLASSPROPERTIES=8;
	public static readonly EXTERN=9;
	public static readonly COMPLETE=10;
	public static readonly SYNONYM=11;
	public static readonly OVERRIDE=12;
	public static readonly ARGS=13;
	public static readonly IF_EXPR=14;
	public static readonly THEN=15;
	public static readonly ELSE=16;
	public static readonly SEMICOLON=17;
	public static readonly COMMA=18;
	public static readonly COLON=19;
	public static readonly DOT=20;
	public static readonly MULTIVALUED_EXPRESSION=21;
	public static readonly FIELD_INTRO=22;
	public static readonly REPLACE_FIELD_VALUE_INTRO=23;
	public static readonly REMOVE_FIELD=24;
	public static readonly ADD_FIELD=25;
	public static readonly INLINE_DECL_INTRO=26;
	public static readonly EQUAL_COMP=27;
	public static readonly NOT_EQUALS=28;
	public static readonly LESS_OR_EQUAL=29;
	public static readonly GREATE_OR_EQUAL=30;
	public static readonly STRICT_LESS=31;
	public static readonly STRICT_GREAT=32;
	public static readonly COND_AND=33;
	public static readonly COND_OR=34;
	public static readonly EQUAL_AFFECT=35;
	public static readonly OPEN_PAR=36;
	public static readonly CLOSE_PAR=37;
	public static readonly OPEN_BRACKET=38;
	public static readonly CLOSE_BRACKET=39;
	public static readonly OPEN_BRACE=40;
	public static readonly CLOSE_BRACE=41;
	public static readonly SINGLE_QUOTE=42;
	public static readonly BACKSLASH=43;
	public static readonly QUESTION_MARK=44;
	public static readonly AT=45;
	public static readonly OPEN_GRANULE=46;
	public static readonly CLOSE_GRANULE=47;
	public static readonly OPERATOR=48;
	public static readonly DATE=49;
	public static readonly STRING=50;
	public static readonly DOCUMENTATION=51;
	public static readonly WS=52;
	public static readonly DOUBLE=53;
	public static readonly INTEGER=54;
	public static readonly ENUM=55;
	public static readonly ID=56;
	public static readonly LINE_COMMENT=57;
	public static readonly MULTILINE_COMMENT=58;
	public static readonly GRANULE=59;
	public static readonly PREPROCESSING=60;
	public static readonly RULE_expressionMarker = 0;
	public static readonly RULE_commentElement = 1;
	public static readonly RULE_preprocessingElement = 2;
	public static readonly RULE_comment = 3;
	public static readonly RULE_commentBlock = 4;
	public static readonly RULE_freeText = 5;
	public static readonly RULE_ymlId = 6;
	public static readonly RULE_kaoFile = 7;
	public static readonly RULE_yclassFile = 8;
	public static readonly RULE_ymlEntity = 9;
	public static readonly RULE_yenum = 10;
	public static readonly RULE_enumElement = 11;
	public static readonly RULE_classDeclaration = 12;
	public static readonly RULE_classImplementation = 13;
	public static readonly RULE_override = 14;
	public static readonly RULE_classDeclarationIntro = 15;
	public static readonly RULE_extendsBlock = 16;
	public static readonly RULE_parentClassName = 17;
	public static readonly RULE_memberType = 18;
	public static readonly RULE_synonym = 19;
	public static readonly RULE_memberDeclaration = 20;
	public static readonly RULE_path = 21;
	public static readonly RULE_ymlIdOrPath = 22;
	public static readonly RULE_field = 23;
	public static readonly RULE_classPropertiesBlock = 24;
	public static readonly RULE_documentation = 25;
	public static readonly RULE_valueOrCondition = 26;
	public static readonly RULE_hashMapKeyValue = 27;
	public static readonly RULE_hashMapValue = 28;
	public static readonly RULE_value = 29;
	public static readonly RULE_ifExprBlock = 30;
	public static readonly RULE_nonArithmeticValue = 31;
	public static readonly RULE_instanciationVariable = 32;
	public static readonly RULE_expression = 33;
	public static readonly RULE_functionCall = 34;
	public static readonly RULE_functionArgument = 35;
	public static readonly RULE_chainedCall = 36;
	public static readonly RULE_inlineDeclaration = 37;
	public static readonly RULE_inlineOperation = 38;
	public static readonly RULE_fieldValue = 39;
	public static readonly RULE_methodDeclaration = 40;
	public static readonly RULE_methodIntro = 41;
	public static readonly RULE_argumentList = 42;
	public static readonly RULE_mandatoryArgs = 43;
	public static readonly RULE_mandatoryArgDecl = 44;
	public static readonly RULE_optionalArgs = 45;
	public static readonly RULE_optionalArgDecl = 46;
	public static readonly RULE_argOptionList = 47;
	public static readonly RULE_argOptionBlock = 48;
	public static readonly RULE_order1Block = 49;
	public static readonly RULE_instanciationCondition = 50;
	public static readonly RULE_forEachInstanciation = 51;
	public static readonly RULE_order1FullCondition = 52;
	public static readonly RULE_closedOrder1FullCondition = 53;
	public static readonly RULE_combinedComparison = 54;
	public static readonly RULE_comparison = 55;
	public static readonly RULE_comparisonOperator = 56;
	public static readonly RULE_affectation = 57;
	public static readonly RULE_conditionBlock = 58;
	public static readonly RULE_order0Condition = 59;
	public static readonly RULE_action = 60;
	public static readonly RULE_actionBlock = 61;
	public static readonly RULE_compoundBlock = 62;
	public static readonly RULE_arithmeticExpression = 63;
	public static readonly RULE_existentialOperator = 64;
	public static readonly RULE_variableBlock = 65;
	public static readonly RULE_variableBlockWithEOF = 66;
	public static readonly RULE_variableBlockContent = 67;
	public static readonly RULE_variableBlockContentWithEOF = 68;
	public static readonly RULE_staticDeclarationsFile = 69;
	public static readonly RULE_staticDeclaration = 70;
	public static readonly RULE_externalFunctionsFile = 71;
	public static readonly RULE_externDeclaration = 72;
	public static readonly RULE_externalDialogZoneFile = 73;
	public static readonly RULE_externDialogZone = 74;
	public static readonly RULE_list = 75;
	public static readonly RULE_listWithBrace = 76;
	public static readonly RULE_granule = 77;
	public static readonly RULE_complete = 78;
	public static readonly ruleNames: string[] = [
		"expressionMarker", "commentElement", "preprocessingElement", "comment", 
		"commentBlock", "freeText", "ymlId", "kaoFile", "yclassFile", "ymlEntity", 
		"yenum", "enumElement", "classDeclaration", "classImplementation", "override", 
		"classDeclarationIntro", "extendsBlock", "parentClassName", "memberType", 
		"synonym", "memberDeclaration", "path", "ymlIdOrPath", "field", "classPropertiesBlock", 
		"documentation", "valueOrCondition", "hashMapKeyValue", "hashMapValue", 
		"value", "ifExprBlock", "nonArithmeticValue", "instanciationVariable", 
		"expression", "functionCall", "functionArgument", "chainedCall", "inlineDeclaration", 
		"inlineOperation", "fieldValue", "methodDeclaration", "methodIntro", "argumentList", 
		"mandatoryArgs", "mandatoryArgDecl", "optionalArgs", "optionalArgDecl", 
		"argOptionList", "argOptionBlock", "order1Block", "instanciationCondition", 
		"forEachInstanciation", "order1FullCondition", "closedOrder1FullCondition", 
		"combinedComparison", "comparison", "comparisonOperator", "affectation", 
		"conditionBlock", "order0Condition", "action", "actionBlock", "compoundBlock", 
		"arithmeticExpression", "existentialOperator", "variableBlock", "variableBlockWithEOF", 
		"variableBlockContent", "variableBlockContentWithEOF", "staticDeclarationsFile", 
		"staticDeclaration", "externalFunctionsFile", "externDeclaration", "externalDialogZoneFile", 
		"externDialogZone", "list", "listWithBrace", "granule", "complete"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'interface'", "'implementation'", "'extends'", "'function'", 
		"'method'", "'textMethod'", "'field'", "'classProperties'", "'extern'", 
		"'complete'", "'synonym'", "'override'", "'args'", "'ifExpr'", "'then'", 
		"'else'", "';'", "','", "':'", "'.'", "'>>'", "'-->'", "'==>'", "'---'", 
		"'+++'", "'->'", "'=='", "'!='", "'<='", "'>='", "'<'", "'>'", "'&&'", 
		"'||'", "'='", "'('", "')'", "'['", "']'", "'{'", "'}'", "'''", "'\\'", 
		"'?'", "'@'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'enum'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "INTERFACE", "IMPLEMENTATION", "EXTENDS", "FUNCTION", "METHOD", 
		"TEXT_METHOD", "FIELD", "CLASSPROPERTIES", "EXTERN", "COMPLETE", "SYNONYM", 
		"OVERRIDE", "ARGS", "IF_EXPR", "THEN", "ELSE", "SEMICOLON", "COMMA", "COLON", 
		"DOT", "MULTIVALUED_EXPRESSION", "FIELD_INTRO", "REPLACE_FIELD_VALUE_INTRO", 
		"REMOVE_FIELD", "ADD_FIELD", "INLINE_DECL_INTRO", "EQUAL_COMP", "NOT_EQUALS", 
		"LESS_OR_EQUAL", "GREATE_OR_EQUAL", "STRICT_LESS", "STRICT_GREAT", "COND_AND", 
		"COND_OR", "EQUAL_AFFECT", "OPEN_PAR", "CLOSE_PAR", "OPEN_BRACKET", "CLOSE_BRACKET", 
		"OPEN_BRACE", "CLOSE_BRACE", "SINGLE_QUOTE", "BACKSLASH", "QUESTION_MARK", 
		"AT", "OPEN_GRANULE", "CLOSE_GRANULE", "OPERATOR", "DATE", "STRING", "DOCUMENTATION", 
		"WS", "DOUBLE", "INTEGER", "ENUM", "ID", "LINE_COMMENT", "MULTILINE_COMMENT", 
		"GRANULE", "PREPROCESSING"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(YmlToBdlParser._LITERAL_NAMES, YmlToBdlParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return YmlToBdlParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "YmlToBdl.g4"; }

	@Override
	public get ruleNames(): string[] { return YmlToBdlParser.ruleNames; }

	@Override
	public get serializedATN(): string { return YmlToBdlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(YmlToBdlParser._ATN, this);
	}
	@RuleVersion(0)
	public expressionMarker(): ExpressionMarkerContext {
		let _localctx: ExpressionMarkerContext = new ExpressionMarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, YmlToBdlParser.RULE_expressionMarker);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			_la = this._input.LA(1);
			if ( !(_la===YmlToBdlParser.DOT || _la===YmlToBdlParser.MULTIVALUED_EXPRESSION) ) {
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
	@RuleVersion(0)
	public commentElement(): CommentElementContext {
		let _localctx: CommentElementContext = new CommentElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, YmlToBdlParser.RULE_commentElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===YmlToBdlParser.WS) {
				{
				this.state = 160;
				this.match(YmlToBdlParser.WS);
				}
			}

			this.state = 163;
			_la = this._input.LA(1);
			if ( !(_la===YmlToBdlParser.LINE_COMMENT || _la===YmlToBdlParser.MULTILINE_COMMENT) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
			case 1:
				{
				this.state = 164;
				this.match(YmlToBdlParser.WS);
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
	@RuleVersion(0)
	public preprocessingElement(): PreprocessingElementContext {
		let _localctx: PreprocessingElementContext = new PreprocessingElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, YmlToBdlParser.RULE_preprocessingElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===YmlToBdlParser.WS) {
				{
				this.state = 167;
				this.match(YmlToBdlParser.WS);
				}
			}

			this.state = 170;
			this.match(YmlToBdlParser.PREPROCESSING);
			this.state = 172;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,3,this._ctx) ) {
			case 1:
				{
				this.state = 171;
				this.match(YmlToBdlParser.WS);
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
	@RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, YmlToBdlParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.commentElement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public commentBlock(): CommentBlockContext {
		let _localctx: CommentBlockContext = new CommentBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, YmlToBdlParser.RULE_commentBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 178;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,4,this._ctx) ) {
					case 1:
						{
						this.state = 176;
						this.comment();
						}
						break;

					case 2:
						{
						this.state = 177;
						this.preprocessingElement();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 180; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public freeText(): FreeTextContext {
		let _localctx: FreeTextContext = new FreeTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, YmlToBdlParser.RULE_freeText);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183; 
			this._errHandler.sync(this);
			_alt = 1+1;
			do {
				switch (_alt) {
				case 1+1:
					{
					{
					this.state = 182;
					this.matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 185; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,6,this._ctx);
			} while ( _alt!==1 && _alt!==ATN.INVALID_ALT_NUMBER );
			this.state = 190;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,7,this._ctx);
			while ( _alt!==1 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1+1 ) {
					{
					{
					this.state = 187;
					_la = this._input.LA(1);
					if ( _la <= 0 || (_la===YmlToBdlParser.EOF) ) {
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
				}
				this.state = 192;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,7,this._ctx);
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
	@RuleVersion(0)
	public ymlId(): YmlIdContext {
		let _localctx: YmlIdContext = new YmlIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, YmlToBdlParser.RULE_ymlId);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(YmlToBdlParser.ID);
			this.state = 201;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,9,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 195;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
					case 1:
						{
						this.state = 194;
						this.match(YmlToBdlParser.COLON);
						}
						break;
					}
					this.state = 197;
					this.match(YmlToBdlParser.COLON);
					this.state = 198;
					this.match(YmlToBdlParser.ID);
					}
					} 
				}
				this.state = 203;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,9,this._ctx);
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
	@RuleVersion(0)
	public kaoFile(): KaoFileContext {
		let _localctx: KaoFileContext = new KaoFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, YmlToBdlParser.RULE_kaoFile);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,10,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 204;
					_localctx._entities = this.ymlEntity();
					}
					} 
				}
				this.state = 209;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,10,this._ctx);
			}
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.INTERFACE) | (1 << YmlToBdlParser.IMPLEMENTATION) | (1 << YmlToBdlParser.EXTENDS) | (1 << YmlToBdlParser.FUNCTION) | (1 << YmlToBdlParser.METHOD) | (1 << YmlToBdlParser.TEXT_METHOD) | (1 << YmlToBdlParser.FIELD) | (1 << YmlToBdlParser.CLASSPROPERTIES) | (1 << YmlToBdlParser.EXTERN) | (1 << YmlToBdlParser.COMPLETE) | (1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.OVERRIDE) | (1 << YmlToBdlParser.ARGS) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.THEN) | (1 << YmlToBdlParser.ELSE) | (1 << YmlToBdlParser.SEMICOLON) | (1 << YmlToBdlParser.COMMA) | (1 << YmlToBdlParser.COLON) | (1 << YmlToBdlParser.DOT) | (1 << YmlToBdlParser.MULTIVALUED_EXPRESSION) | (1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD) | (1 << YmlToBdlParser.INLINE_DECL_INTRO) | (1 << YmlToBdlParser.EQUAL_COMP) | (1 << YmlToBdlParser.NOT_EQUALS) | (1 << YmlToBdlParser.LESS_OR_EQUAL) | (1 << YmlToBdlParser.GREATE_OR_EQUAL) | (1 << YmlToBdlParser.STRICT_LESS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlToBdlParser.STRICT_GREAT - 32)) | (1 << (YmlToBdlParser.COND_AND - 32)) | (1 << (YmlToBdlParser.COND_OR - 32)) | (1 << (YmlToBdlParser.EQUAL_AFFECT - 32)) | (1 << (YmlToBdlParser.OPEN_PAR - 32)) | (1 << (YmlToBdlParser.CLOSE_PAR - 32)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 32)) | (1 << (YmlToBdlParser.CLOSE_BRACKET - 32)) | (1 << (YmlToBdlParser.OPEN_BRACE - 32)) | (1 << (YmlToBdlParser.CLOSE_BRACE - 32)) | (1 << (YmlToBdlParser.SINGLE_QUOTE - 32)) | (1 << (YmlToBdlParser.BACKSLASH - 32)) | (1 << (YmlToBdlParser.QUESTION_MARK - 32)) | (1 << (YmlToBdlParser.AT - 32)) | (1 << (YmlToBdlParser.OPEN_GRANULE - 32)) | (1 << (YmlToBdlParser.CLOSE_GRANULE - 32)) | (1 << (YmlToBdlParser.OPERATOR - 32)) | (1 << (YmlToBdlParser.DATE - 32)) | (1 << (YmlToBdlParser.STRING - 32)) | (1 << (YmlToBdlParser.DOCUMENTATION - 32)) | (1 << (YmlToBdlParser.WS - 32)) | (1 << (YmlToBdlParser.DOUBLE - 32)) | (1 << (YmlToBdlParser.INTEGER - 32)) | (1 << (YmlToBdlParser.ENUM - 32)) | (1 << (YmlToBdlParser.ID - 32)) | (1 << (YmlToBdlParser.LINE_COMMENT - 32)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 32)) | (1 << (YmlToBdlParser.GRANULE - 32)) | (1 << (YmlToBdlParser.PREPROCESSING - 32)))) !== 0)) {
				{
				this.state = 210;
				_localctx._finalFreeText = this.freeText();
				}
			}

			this.state = 213;
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
	@RuleVersion(0)
	public yclassFile(): YclassFileContext {
		let _localctx: YclassFileContext = new YclassFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, YmlToBdlParser.RULE_yclassFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this.classDeclaration();
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.INTERFACE) | (1 << YmlToBdlParser.IMPLEMENTATION) | (1 << YmlToBdlParser.EXTENDS) | (1 << YmlToBdlParser.FUNCTION) | (1 << YmlToBdlParser.METHOD) | (1 << YmlToBdlParser.TEXT_METHOD) | (1 << YmlToBdlParser.FIELD) | (1 << YmlToBdlParser.CLASSPROPERTIES) | (1 << YmlToBdlParser.EXTERN) | (1 << YmlToBdlParser.COMPLETE) | (1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.OVERRIDE) | (1 << YmlToBdlParser.ARGS) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.THEN) | (1 << YmlToBdlParser.ELSE) | (1 << YmlToBdlParser.SEMICOLON) | (1 << YmlToBdlParser.COMMA) | (1 << YmlToBdlParser.COLON) | (1 << YmlToBdlParser.DOT) | (1 << YmlToBdlParser.MULTIVALUED_EXPRESSION) | (1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD) | (1 << YmlToBdlParser.INLINE_DECL_INTRO) | (1 << YmlToBdlParser.EQUAL_COMP) | (1 << YmlToBdlParser.NOT_EQUALS) | (1 << YmlToBdlParser.LESS_OR_EQUAL) | (1 << YmlToBdlParser.GREATE_OR_EQUAL) | (1 << YmlToBdlParser.STRICT_LESS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlToBdlParser.STRICT_GREAT - 32)) | (1 << (YmlToBdlParser.COND_AND - 32)) | (1 << (YmlToBdlParser.COND_OR - 32)) | (1 << (YmlToBdlParser.EQUAL_AFFECT - 32)) | (1 << (YmlToBdlParser.OPEN_PAR - 32)) | (1 << (YmlToBdlParser.CLOSE_PAR - 32)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 32)) | (1 << (YmlToBdlParser.CLOSE_BRACKET - 32)) | (1 << (YmlToBdlParser.OPEN_BRACE - 32)) | (1 << (YmlToBdlParser.CLOSE_BRACE - 32)) | (1 << (YmlToBdlParser.SINGLE_QUOTE - 32)) | (1 << (YmlToBdlParser.BACKSLASH - 32)) | (1 << (YmlToBdlParser.QUESTION_MARK - 32)) | (1 << (YmlToBdlParser.AT - 32)) | (1 << (YmlToBdlParser.OPEN_GRANULE - 32)) | (1 << (YmlToBdlParser.CLOSE_GRANULE - 32)) | (1 << (YmlToBdlParser.OPERATOR - 32)) | (1 << (YmlToBdlParser.DATE - 32)) | (1 << (YmlToBdlParser.STRING - 32)) | (1 << (YmlToBdlParser.DOCUMENTATION - 32)) | (1 << (YmlToBdlParser.WS - 32)) | (1 << (YmlToBdlParser.DOUBLE - 32)) | (1 << (YmlToBdlParser.INTEGER - 32)) | (1 << (YmlToBdlParser.ENUM - 32)) | (1 << (YmlToBdlParser.ID - 32)) | (1 << (YmlToBdlParser.LINE_COMMENT - 32)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 32)) | (1 << (YmlToBdlParser.GRANULE - 32)) | (1 << (YmlToBdlParser.PREPROCESSING - 32)))) !== 0)) {
				{
				this.state = 216;
				_localctx._restFreeText = this.freeText();
				}
			}

			this.state = 220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,13,this._ctx) ) {
			case 1:
				{
				this.state = 219;
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
	@RuleVersion(0)
	public ymlEntity(): YmlEntityContext {
		let _localctx: YmlEntityContext = new YmlEntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, YmlToBdlParser.RULE_ymlEntity);
		try {
			this.state = 229;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,14,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 222;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 223;
				this.staticDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 224;
				this.complete();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 225;
				this.methodDeclaration();
				this.state = 226;
				this.match(YmlToBdlParser.SEMICOLON);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 228;
				this.yenum();
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
	@RuleVersion(0)
	public yenum(): YenumContext {
		let _localctx: YenumContext = new YenumContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, YmlToBdlParser.RULE_yenum);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.match(YmlToBdlParser.ENUM);
			this.state = 232;
			_localctx._yid = this.ymlId();
			this.state = 233;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 245; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 234;
				this.enumElement();
				this.state = 242;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,16,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 236;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
							{
							this.state = 235;
							_localctx._beforeCommaComment = this.commentBlock();
							}
						}

						this.state = 238;
						this.match(YmlToBdlParser.COMMA);
						this.state = 239;
						this.enumElement();
						}
						} 
					}
					this.state = 244;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,16,this._ctx);
				}
				}
				}
				this.state = 247; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===YmlToBdlParser.ID );
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				this.state = 249;
				_localctx._beforeCloseBraceComment = this.commentBlock();
				}
			}

			this.state = 252;
			this.match(YmlToBdlParser.CLOSE_BRACE);
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				{
				this.state = 253;
				_localctx._fields = this.field();
				}
				}
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 259;
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
	@RuleVersion(0)
	public enumElement(): EnumElementContext {
		let _localctx: EnumElementContext = new EnumElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, YmlToBdlParser.RULE_enumElement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			_localctx._yid = this.ymlId();
			this.state = 265;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,20,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 262;
					_localctx._fields = this.field();
					}
					} 
				}
				this.state = 267;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,20,this._ctx);
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
	@RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, YmlToBdlParser.RULE_classDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				this.state = 268;
				_localctx._beforeInterfaceComment = this.commentBlock();
				}
			}

			this.state = 271;
			this.classDeclarationIntro();
			this.state = 275;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,22,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 272;
					_localctx._classOption = this.field();
					}
					} 
				}
				this.state = 277;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,22,this._ctx);
			}
			this.state = 281;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,23,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 278;
					this.memberDeclaration();
					}
					} 
				}
				this.state = 283;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,23,this._ctx);
			}
			this.state = 287;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,24,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 284;
					this.methodDeclaration();
					}
					} 
				}
				this.state = 289;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,24,this._ctx);
			}
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,25,this._ctx) ) {
			case 1:
				{
				this.state = 290;
				_localctx._beforeClassPropertyComment = this.commentBlock();
				}
				break;
			}
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===YmlToBdlParser.CLASSPROPERTIES) {
				{
				this.state = 293;
				this.classPropertiesBlock();
				}
			}

			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				this.state = 296;
				_localctx._endInterfaceComment = this.commentBlock();
				}
			}

			this.state = 299;
			this.match(YmlToBdlParser.SEMICOLON);
			this.state = 303;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,28,this._ctx);
			while ( _alt!==1 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1+1 ) {
					{
					{
					this.state = 300;
					_localctx._intermediateFreeText = this.freeText();
					}
					} 
				}
				this.state = 305;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,28,this._ctx);
			}
			this.state = 306;
			this.classImplementation();
			this.state = 307;
			this.match(YmlToBdlParser.SEMICOLON);
			this.state = 309;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,29,this._ctx) ) {
			case 1:
				{
				this.state = 308;
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
	@RuleVersion(0)
	public classImplementation(): ClassImplementationContext {
		let _localctx: ClassImplementationContext = new ClassImplementationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, YmlToBdlParser.RULE_classImplementation);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				this.state = 311;
				_localctx._preImplementationComment = this.commentBlock();
				}
			}

			this.state = 314;
			this.match(YmlToBdlParser.IMPLEMENTATION);
			this.state = 315;
			_localctx._className = this.ymlId();
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===YmlToBdlParser.OVERRIDE) {
				{
				this.state = 316;
				_localctx._overrideBlock = this.override();
				}
			}

			this.state = 322;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,32,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 319;
					_localctx._attributes = this.field();
					}
					} 
				}
				this.state = 324;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,32,this._ctx);
			}
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				this.state = 325;
				_localctx._preEndSemiColonComment = this.commentBlock();
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
	@RuleVersion(0)
	public override(): OverrideContext {
		let _localctx: OverrideContext = new OverrideContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, YmlToBdlParser.RULE_override);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(YmlToBdlParser.OVERRIDE);
			this.state = 329;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 331;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,34,this._ctx) ) {
			case 1:
				{
				this.state = 330;
				this.freeText();
				}
				break;
			}
			this.state = 333;
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
	@RuleVersion(0)
	public classDeclarationIntro(): ClassDeclarationIntroContext {
		let _localctx: ClassDeclarationIntroContext = new ClassDeclarationIntroContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, YmlToBdlParser.RULE_classDeclarationIntro);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.match(YmlToBdlParser.INTERFACE);
			this.state = 336;
			_localctx._className = this.ymlId();
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===YmlToBdlParser.EXTENDS) {
				{
				this.state = 337;
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
	@RuleVersion(0)
	public extendsBlock(): ExtendsBlockContext {
		let _localctx: ExtendsBlockContext = new ExtendsBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, YmlToBdlParser.RULE_extendsBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(YmlToBdlParser.EXTENDS);
			this.state = 341;
			this.parentClassName();
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===YmlToBdlParser.COMMA) {
				{
				{
				this.state = 342;
				this.match(YmlToBdlParser.COMMA);
				this.state = 343;
				this.parentClassName();
				}
				}
				this.state = 348;
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
	@RuleVersion(0)
	public parentClassName(): ParentClassNameContext {
		let _localctx: ParentClassNameContext = new ParentClassNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, YmlToBdlParser.RULE_parentClassName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
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
	@RuleVersion(0)
	public memberType(): MemberTypeContext {
		let _localctx: MemberTypeContext = new MemberTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, YmlToBdlParser.RULE_memberType);
		try {
			this.state = 353;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlToBdlParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 351;
				this.ymlId();
				}
				break;
			case YmlToBdlParser.FIELD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 352;
				this.match(YmlToBdlParser.FIELD);
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
	@RuleVersion(0)
	public synonym(): SynonymContext {
		let _localctx: SynonymContext = new SynonymContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, YmlToBdlParser.RULE_synonym);
		let _la: number;
		try {
			this.state = 370;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,40,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 355;
				this.match(YmlToBdlParser.SYNONYM);
				this.state = 356;
				this.listWithBrace();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 357;
				this.match(YmlToBdlParser.SYNONYM);
				this.state = 358;
				this.match(YmlToBdlParser.OPEN_PAR);
				this.state = 367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.INLINE_DECL_INTRO))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlToBdlParser.OPEN_PAR - 36)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 36)) | (1 << (YmlToBdlParser.OPEN_BRACE - 36)) | (1 << (YmlToBdlParser.QUESTION_MARK - 36)) | (1 << (YmlToBdlParser.OPERATOR - 36)) | (1 << (YmlToBdlParser.DATE - 36)) | (1 << (YmlToBdlParser.STRING - 36)) | (1 << (YmlToBdlParser.WS - 36)) | (1 << (YmlToBdlParser.DOUBLE - 36)) | (1 << (YmlToBdlParser.ID - 36)) | (1 << (YmlToBdlParser.LINE_COMMENT - 36)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 36)) | (1 << (YmlToBdlParser.GRANULE - 36)) | (1 << (YmlToBdlParser.PREPROCESSING - 36)))) !== 0)) {
					{
					this.state = 359;
					_localctx._value = this.value();
					_localctx._synonymElements.push(_localctx._value);
					this.state = 364;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===YmlToBdlParser.COMMA) {
						{
						{
						this.state = 360;
						this.match(YmlToBdlParser.COMMA);
						this.state = 361;
						_localctx._value = this.value();
						_localctx._synonymElements.push(_localctx._value);
						}
						}
						this.state = 366;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 369;
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
	@RuleVersion(0)
	public memberDeclaration(): MemberDeclarationContext {
		let _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, YmlToBdlParser.RULE_memberDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				this.state = 372;
				this.commentBlock();
				}
			}

			this.state = 375;
			this.memberType();
			this.state = 376;
			_localctx._memberName = this.ymlId();
			this.state = 380;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,42,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 377;
					_localctx._memberOption = this.field();
					}
					} 
				}
				this.state = 382;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,42,this._ctx);
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
	@RuleVersion(0)
	public path(): PathContext {
		let _localctx: PathContext = new PathContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, YmlToBdlParser.RULE_path);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.ymlId();
			this.state = 386; 
			this._errHandler.sync(this);
			_alt = 1+1;
			do {
				switch (_alt) {
				case 1+1:
					{
					{
					this.state = 384;
					this.match(YmlToBdlParser.DOT);
					this.state = 385;
					this.ymlId();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 388; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,43,this._ctx);
			} while ( _alt!==1 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ymlIdOrPath(): YmlIdOrPathContext {
		let _localctx: YmlIdOrPathContext = new YmlIdOrPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, YmlToBdlParser.RULE_ymlIdOrPath);
		try {
			this.state = 392;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,44,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 390;
				this.ymlId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 391;
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
	@RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, YmlToBdlParser.RULE_field);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				this.state = 394;
				this.commentBlock();
				}
			}

			this.state = 397;
			_localctx._fieldArrow = this._input.LT(1);
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0)) ) {
				_localctx._fieldArrow = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 398;
			_localctx._optionName = this.ymlIdOrPath();
			this.state = 407;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,47,this._ctx) ) {
			case 1:
				{
				this.state = 399;
				_localctx._valueOrCondition = this.valueOrCondition();
				_localctx._optionValues.push(_localctx._valueOrCondition);
				this.state = 404;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,46,this._ctx);
				while ( _alt!==1 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1+1 ) {
						{
						{
						this.state = 400;
						this.match(YmlToBdlParser.COMMA);
						this.state = 401;
						_localctx._valueOrCondition = this.valueOrCondition();
						_localctx._optionValues.push(_localctx._valueOrCondition);
						}
						} 
					}
					this.state = 406;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,46,this._ctx);
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
	@RuleVersion(0)
	public classPropertiesBlock(): ClassPropertiesBlockContext {
		let _localctx: ClassPropertiesBlockContext = new ClassPropertiesBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, YmlToBdlParser.RULE_classPropertiesBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.match(YmlToBdlParser.CLASSPROPERTIES);
			this.state = 413;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,48,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 410;
					_localctx._classOption = this.field();
					}
					} 
				}
				this.state = 415;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,48,this._ctx);
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
	@RuleVersion(0)
	public documentation(): DocumentationContext {
		let _localctx: DocumentationContext = new DocumentationContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, YmlToBdlParser.RULE_documentation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
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
	@RuleVersion(0)
	public valueOrCondition(): ValueOrConditionContext {
		let _localctx: ValueOrConditionContext = new ValueOrConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, YmlToBdlParser.RULE_valueOrCondition);
		try {
			this.state = 422;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,49,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 418;
				this.combinedComparison(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 419;
				this.value();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 420;
				this.hashMapKeyValue();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 421;
				this.documentation();
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
	@RuleVersion(0)
	public hashMapKeyValue(): HashMapKeyValueContext {
		let _localctx: HashMapKeyValueContext = new HashMapKeyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, YmlToBdlParser.RULE_hashMapKeyValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.nonArithmeticValue();
			this.state = 425;
			this.match(YmlToBdlParser.COLON);
			this.state = 426;
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
	@RuleVersion(0)
	public hashMapValue(): HashMapValueContext {
		let _localctx: HashMapValueContext = new HashMapValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, YmlToBdlParser.RULE_hashMapValue);
		try {
			this.state = 430;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,50,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 428;
				this.value();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 429;
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
	@RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, YmlToBdlParser.RULE_value);
		try {
			this.state = 438;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,51,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 432;
				this.granule();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 433;
				this.inlineDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 434;
				this.nonArithmeticValue();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 435;
				this.arithmeticExpression(0);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 436;
				this.synonym();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 437;
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
	@RuleVersion(0)
	public ifExprBlock(): IfExprBlockContext {
		let _localctx: IfExprBlockContext = new IfExprBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, YmlToBdlParser.RULE_ifExprBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			this.match(YmlToBdlParser.IF_EXPR);
			this.state = 441;
			this.match(YmlToBdlParser.OPEN_PAR);
			this.state = 442;
			this.combinedComparison(0);
			this.state = 443;
			this.match(YmlToBdlParser.CLOSE_PAR);
			this.state = 444;
			this.match(YmlToBdlParser.THEN);
			this.state = 445;
			_localctx._thenValue = this.value();
			this.state = 446;
			this.match(YmlToBdlParser.ELSE);
			this.state = 447;
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
	@RuleVersion(0)
	public nonArithmeticValue(): NonArithmeticValueContext {
		let _localctx: NonArithmeticValueContext = new NonArithmeticValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, YmlToBdlParser.RULE_nonArithmeticValue);
		let _la: number;
		try {
			this.state = 453;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlToBdlParser.OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 449;
				this.list();
				}
				break;
			case YmlToBdlParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 450;
				this.listWithBrace();
				}
				break;
			case YmlToBdlParser.QUESTION_MARK:
			case YmlToBdlParser.ID:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 451;
				this.chainedCall();
				}
				break;
			case YmlToBdlParser.DATE:
			case YmlToBdlParser.STRING:
			case YmlToBdlParser.DOUBLE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 452;
				_la = this._input.LA(1);
				if ( !(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (YmlToBdlParser.DATE - 49)) | (1 << (YmlToBdlParser.STRING - 49)) | (1 << (YmlToBdlParser.DOUBLE - 49)))) !== 0)) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
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
	@RuleVersion(0)
	public instanciationVariable(): InstanciationVariableContext {
		let _localctx: InstanciationVariableContext = new InstanciationVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, YmlToBdlParser.RULE_instanciationVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.match(YmlToBdlParser.QUESTION_MARK);
			this.state = 456;
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
	@RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, YmlToBdlParser.RULE_expression);
		try {
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,53,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 458;
				this.ymlId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 459;
				this.functionCall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 460;
				this.instanciationVariable();
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
	@RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, YmlToBdlParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.ymlId();
			this.state = 464;
			this.match(YmlToBdlParser.OPEN_PAR);
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.INLINE_DECL_INTRO))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlToBdlParser.OPEN_PAR - 36)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 36)) | (1 << (YmlToBdlParser.OPEN_BRACE - 36)) | (1 << (YmlToBdlParser.QUESTION_MARK - 36)) | (1 << (YmlToBdlParser.OPERATOR - 36)) | (1 << (YmlToBdlParser.DATE - 36)) | (1 << (YmlToBdlParser.STRING - 36)) | (1 << (YmlToBdlParser.WS - 36)) | (1 << (YmlToBdlParser.DOUBLE - 36)) | (1 << (YmlToBdlParser.ID - 36)) | (1 << (YmlToBdlParser.LINE_COMMENT - 36)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 36)) | (1 << (YmlToBdlParser.GRANULE - 36)) | (1 << (YmlToBdlParser.PREPROCESSING - 36)))) !== 0)) {
				{
				this.state = 465;
				this.functionArgument();
				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===YmlToBdlParser.COMMA) {
					{
					{
					this.state = 466;
					this.match(YmlToBdlParser.COMMA);
					this.state = 467;
					this.functionArgument();
					}
					}
					this.state = 472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 475;
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
	@RuleVersion(0)
	public functionArgument(): FunctionArgumentContext {
		let _localctx: FunctionArgumentContext = new FunctionArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, YmlToBdlParser.RULE_functionArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,56,this._ctx) ) {
			case 1:
				{
				this.state = 477;
				_localctx._argKey = this.match(YmlToBdlParser.ID);
				this.state = 478;
				this.match(YmlToBdlParser.COLON);
				}
				break;
			}
			this.state = 481;
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
	@RuleVersion(0)
	public chainedCall(): ChainedCallContext {
		let _localctx: ChainedCallContext = new ChainedCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, YmlToBdlParser.RULE_chainedCall);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.expression();
			this.state = 489;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,57,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 484;
					_localctx._marker = this.expressionMarker();
					this.state = 485;
					this.expression();
					}
					} 
				}
				this.state = 491;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,57,this._ctx);
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
	@RuleVersion(0)
	public inlineDeclaration(): InlineDeclarationContext {
		let _localctx: InlineDeclarationContext = new InlineDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, YmlToBdlParser.RULE_inlineDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				this.state = 492;
				this.commentBlock();
				}
			}

			this.state = 495;
			this.match(YmlToBdlParser.INLINE_DECL_INTRO);
			this.state = 496;
			_localctx._className = this.ymlId();
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===YmlToBdlParser.ID) {
				{
				this.state = 497;
				_localctx._instanceName = this.ymlId();
				}
			}

			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.GRANULE - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				{
				this.state = 500;
				this.fieldValue();
				}
				}
				this.state = 505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 506;
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
	@RuleVersion(0)
	public inlineOperation(): InlineOperationContext {
		let _localctx: InlineOperationContext = new InlineOperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, YmlToBdlParser.RULE_inlineOperation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			_localctx._leftExpression = this.value();
			this.state = 509;
			_localctx._operator = this.ymlId();
			this.state = 510;
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
	@RuleVersion(0)
	public fieldValue(): FieldValueContext {
		let _localctx: FieldValueContext = new FieldValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, YmlToBdlParser.RULE_fieldValue);
		try {
			this.state = 514;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlToBdlParser.FIELD_INTRO:
			case YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO:
			case YmlToBdlParser.REMOVE_FIELD:
			case YmlToBdlParser.ADD_FIELD:
			case YmlToBdlParser.WS:
			case YmlToBdlParser.LINE_COMMENT:
			case YmlToBdlParser.MULTILINE_COMMENT:
			case YmlToBdlParser.PREPROCESSING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 512;
				this.field();
				}
				break;
			case YmlToBdlParser.GRANULE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 513;
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
	@RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, YmlToBdlParser.RULE_methodDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				this.state = 516;
				this.commentBlock();
				}
			}

			this.state = 519;
			this.methodIntro();
			this.state = 523;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,63,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 520;
					_localctx._memberOption = this.field();
					}
					} 
				}
				this.state = 525;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,63,this._ctx);
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
	@RuleVersion(0)
	public methodIntro(): MethodIntroContext {
		let _localctx: MethodIntroContext = new MethodIntroContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, YmlToBdlParser.RULE_methodIntro);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FUNCTION) | (1 << YmlToBdlParser.METHOD) | (1 << YmlToBdlParser.TEXT_METHOD))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 527;
			this.ymlId();
			this.state = 537;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlToBdlParser.ARGS:
				{
				this.state = 528;
				this.match(YmlToBdlParser.ARGS);
				this.state = 529;
				this.match(YmlToBdlParser.OPEN_BRACE);
				this.state = 530;
				this.variableBlockContent();
				this.state = 531;
				this.match(YmlToBdlParser.CLOSE_BRACE);
				}
				break;
			case YmlToBdlParser.OPEN_PAR:
				{
				this.state = 533;
				this.match(YmlToBdlParser.OPEN_PAR);
				this.state = 534;
				this.argumentList();
				this.state = 535;
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
	@RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, YmlToBdlParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===YmlToBdlParser.ID) {
				{
				this.state = 539;
				this.mandatoryArgs();
				}
			}

			this.state = 543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===YmlToBdlParser.COMMA || _la===YmlToBdlParser.OPEN_BRACE) {
				{
				this.state = 542;
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
	@RuleVersion(0)
	public mandatoryArgs(): MandatoryArgsContext {
		let _localctx: MandatoryArgsContext = new MandatoryArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, YmlToBdlParser.RULE_mandatoryArgs);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			this.mandatoryArgDecl();
			this.state = 550;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,67,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 546;
					this.match(YmlToBdlParser.COMMA);
					this.state = 547;
					this.mandatoryArgDecl();
					}
					} 
				}
				this.state = 552;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,67,this._ctx);
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
	@RuleVersion(0)
	public mandatoryArgDecl(): MandatoryArgDeclContext {
		let _localctx: MandatoryArgDeclContext = new MandatoryArgDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, YmlToBdlParser.RULE_mandatoryArgDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
			_localctx._argType = this.ymlId();
			this.state = 554;
			_localctx._argName = this.ymlId();
			this.state = 556;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,68,this._ctx) ) {
			case 1:
				{
				this.state = 555;
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
	@RuleVersion(0)
	public optionalArgs(): OptionalArgsContext {
		let _localctx: OptionalArgsContext = new OptionalArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, YmlToBdlParser.RULE_optionalArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===YmlToBdlParser.COMMA) {
				{
				this.state = 558;
				this.match(YmlToBdlParser.COMMA);
				}
			}

			this.state = 561;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 562;
			_localctx._optionalArgDecl = this.optionalArgDecl();
			_localctx._optionalArguments.push(_localctx._optionalArgDecl);
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===YmlToBdlParser.COMMA) {
				{
				{
				this.state = 563;
				this.match(YmlToBdlParser.COMMA);
				this.state = 564;
				_localctx._optionalArgDecl = this.optionalArgDecl();
				_localctx._optionalArguments.push(_localctx._optionalArgDecl);
				}
				}
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 570;
			this.match(YmlToBdlParser.CLOSE_BRACE);
			this.state = 572;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===YmlToBdlParser.ID) {
				{
				this.state = 571;
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
	@RuleVersion(0)
	public optionalArgDecl(): OptionalArgDeclContext {
		let _localctx: OptionalArgDeclContext = new OptionalArgDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, YmlToBdlParser.RULE_optionalArgDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlToBdlParser.OPEN_BRACKET:
				{
				this.state = 574;
				this.match(YmlToBdlParser.OPEN_BRACKET);
				this.state = 575;
				_localctx._optionalKeyName = this.ymlId();
				this.state = 576;
				this.match(YmlToBdlParser.CLOSE_BRACKET);
				}
				break;
			case YmlToBdlParser.ID:
				{
				this.state = 578;
				_localctx._mandatoryKeyName = this.ymlId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 581;
			this.match(YmlToBdlParser.COLON);
			this.state = 582;
			_localctx._argType = this.ymlId();
			this.state = 584;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===YmlToBdlParser.ID) {
				{
				this.state = 583;
				_localctx._argName = this.ymlId();
				}
			}

			this.state = 587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===YmlToBdlParser.OPEN_BRACE) {
				{
				this.state = 586;
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
	@RuleVersion(0)
	public argOptionList(): ArgOptionListContext {
		let _localctx: ArgOptionListContext = new ArgOptionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, YmlToBdlParser.RULE_argOptionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 589;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 590;
			_localctx._argOptionBlock = this.argOptionBlock();
			_localctx._arguments.push(_localctx._argOptionBlock);
			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===YmlToBdlParser.COMMA) {
				{
				{
				this.state = 591;
				this.match(YmlToBdlParser.COMMA);
				this.state = 592;
				_localctx._argOptionBlock = this.argOptionBlock();
				_localctx._arguments.push(_localctx._argOptionBlock);
				}
				}
				this.state = 597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 598;
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
	@RuleVersion(0)
	public argOptionBlock(): ArgOptionBlockContext {
		let _localctx: ArgOptionBlockContext = new ArgOptionBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, YmlToBdlParser.RULE_argOptionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 600;
			_localctx._argOption = this.ymlId();
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.INLINE_DECL_INTRO))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlToBdlParser.OPEN_PAR - 36)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 36)) | (1 << (YmlToBdlParser.OPEN_BRACE - 36)) | (1 << (YmlToBdlParser.QUESTION_MARK - 36)) | (1 << (YmlToBdlParser.OPERATOR - 36)) | (1 << (YmlToBdlParser.DATE - 36)) | (1 << (YmlToBdlParser.STRING - 36)) | (1 << (YmlToBdlParser.WS - 36)) | (1 << (YmlToBdlParser.DOUBLE - 36)) | (1 << (YmlToBdlParser.ID - 36)) | (1 << (YmlToBdlParser.LINE_COMMENT - 36)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 36)) | (1 << (YmlToBdlParser.GRANULE - 36)) | (1 << (YmlToBdlParser.PREPROCESSING - 36)))) !== 0)) {
				{
				this.state = 601;
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
	@RuleVersion(0)
	public order1Block(): Order1BlockContext {
		let _localctx: Order1BlockContext = new Order1BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, YmlToBdlParser.RULE_order1Block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			this.instanciationCondition();
			this.state = 606;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,77,this._ctx) ) {
			case 1:
				{
				this.state = 605;
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
	@RuleVersion(0)
	public instanciationCondition(): InstanciationConditionContext {
		let _localctx: InstanciationConditionContext = new InstanciationConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, YmlToBdlParser.RULE_instanciationCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 608;
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
	@RuleVersion(0)
	public forEachInstanciation(): ForEachInstanciationContext {
		let _localctx: ForEachInstanciationContext = new ForEachInstanciationContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, YmlToBdlParser.RULE_forEachInstanciation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			_localctx._variable = this.value();
			this.state = 611;
			this.match(YmlToBdlParser.COMMA);
			this.state = 612;
			_localctx._iteratedItem = this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public order1FullCondition(): Order1FullConditionContext {
		let _localctx: Order1FullConditionContext = new Order1FullConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, YmlToBdlParser.RULE_order1FullCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 615;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,78,this._ctx) ) {
			case 1:
				{
				this.state = 614;
				this.conditionBlock();
				}
				break;
			}
			this.state = 620;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.INLINE_DECL_INTRO))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlToBdlParser.OPEN_PAR - 36)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 36)) | (1 << (YmlToBdlParser.OPEN_BRACE - 36)) | (1 << (YmlToBdlParser.QUESTION_MARK - 36)) | (1 << (YmlToBdlParser.OPERATOR - 36)) | (1 << (YmlToBdlParser.DATE - 36)) | (1 << (YmlToBdlParser.STRING - 36)) | (1 << (YmlToBdlParser.WS - 36)) | (1 << (YmlToBdlParser.DOUBLE - 36)) | (1 << (YmlToBdlParser.ID - 36)) | (1 << (YmlToBdlParser.LINE_COMMENT - 36)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 36)) | (1 << (YmlToBdlParser.GRANULE - 36)) | (1 << (YmlToBdlParser.PREPROCESSING - 36)))) !== 0)) {
				{
				{
				this.state = 617;
				this.order1Block();
				}
				}
				this.state = 622;
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
	@RuleVersion(0)
	public closedOrder1FullCondition(): ClosedOrder1FullConditionContext {
		let _localctx: ClosedOrder1FullConditionContext = new ClosedOrder1FullConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, YmlToBdlParser.RULE_closedOrder1FullCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this.order1FullCondition();
			this.state = 624;
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

	public combinedComparison(): CombinedComparisonContext;
	public combinedComparison(_p: number): CombinedComparisonContext;
	@RuleVersion(0)
	public combinedComparison(_p?: number): CombinedComparisonContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: CombinedComparisonContext = new CombinedComparisonContext(this._ctx, _parentState);
		let _prevctx: CombinedComparisonContext = _localctx;
		let _startState: number = 108;
		this.enterRecursionRule(_localctx, 108, YmlToBdlParser.RULE_combinedComparison, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,80,this._ctx) ) {
			case 1:
				{
				this.state = 627;
				this.match(YmlToBdlParser.OPEN_PAR);
				this.state = 628;
				this.combinedComparison(0);
				this.state = 629;
				this.match(YmlToBdlParser.CLOSE_PAR);
				}
				break;

			case 2:
				{
				this.state = 631;
				this.comparison();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 642;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,82,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 640;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,81,this._ctx) ) {
					case 1:
						{
						_localctx = new CombinedComparisonContext(_parentctx, _parentState);
						_localctx._leftCondition = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, YmlToBdlParser.RULE_combinedComparison);
						this.state = 634;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 635;
						this.match(YmlToBdlParser.COND_AND);
						this.state = 636;
						_localctx._rightCondition = this.combinedComparison(4);
						}
						break;

					case 2:
						{
						_localctx = new CombinedComparisonContext(_parentctx, _parentState);
						_localctx._leftCondition = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, YmlToBdlParser.RULE_combinedComparison);
						this.state = 637;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 638;
						this.match(YmlToBdlParser.COND_OR);
						this.state = 639;
						_localctx._rightCondition = this.combinedComparison(3);
						}
						break;
					}
					} 
				}
				this.state = 644;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,82,this._ctx);
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
	@RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, YmlToBdlParser.RULE_comparison);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			_localctx._leftValue = this.value();
			this.state = 646;
			this.comparisonOperator();
			this.state = 647;
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
	@RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, YmlToBdlParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
			_la = this._input.LA(1);
			if ( !(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (YmlToBdlParser.EQUAL_COMP - 27)) | (1 << (YmlToBdlParser.NOT_EQUALS - 27)) | (1 << (YmlToBdlParser.LESS_OR_EQUAL - 27)) | (1 << (YmlToBdlParser.GREATE_OR_EQUAL - 27)) | (1 << (YmlToBdlParser.STRICT_LESS - 27)) | (1 << (YmlToBdlParser.STRICT_GREAT - 27)))) !== 0)) ) {
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
	@RuleVersion(0)
	public affectation(): AffectationContext {
		let _localctx: AffectationContext = new AffectationContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, YmlToBdlParser.RULE_affectation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
			_localctx._leftHand = this.value();
			this.state = 652;
			this.match(YmlToBdlParser.EQUAL_AFFECT);
			this.state = 653;
			_localctx._rightHand = this.value();
			this.state = 654;
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
	@RuleVersion(0)
	public conditionBlock(): ConditionBlockContext {
		let _localctx: ConditionBlockContext = new ConditionBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, YmlToBdlParser.RULE_conditionBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 656;
					this.order0Condition();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 659; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,83,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public order0Condition(): Order0ConditionContext {
		let _localctx: Order0ConditionContext = new Order0ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, YmlToBdlParser.RULE_order0Condition);
		try {
			this.state = 663;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,84,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 661;
				this.combinedComparison(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 662;
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
	@RuleVersion(0)
	public action(): ActionContext {
		let _localctx: ActionContext = new ActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, YmlToBdlParser.RULE_action);
		try {
			this.state = 669;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,85,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 665;
				this.chainedCall();
				this.state = 666;
				this.match(YmlToBdlParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 668;
				this.affectation();
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
	@RuleVersion(0)
	public actionBlock(): ActionBlockContext {
		let _localctx: ActionBlockContext = new ActionBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, YmlToBdlParser.RULE_actionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,86,this._ctx) ) {
			case 1:
				{
				this.state = 671;
				this.match(YmlToBdlParser.OPEN_BRACE);
				}
				break;
			}
			this.state = 675; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 674;
				this.action();
				}
				}
				this.state = 677; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.INLINE_DECL_INTRO))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlToBdlParser.OPEN_PAR - 36)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 36)) | (1 << (YmlToBdlParser.OPEN_BRACE - 36)) | (1 << (YmlToBdlParser.QUESTION_MARK - 36)) | (1 << (YmlToBdlParser.OPERATOR - 36)) | (1 << (YmlToBdlParser.DATE - 36)) | (1 << (YmlToBdlParser.STRING - 36)) | (1 << (YmlToBdlParser.WS - 36)) | (1 << (YmlToBdlParser.DOUBLE - 36)) | (1 << (YmlToBdlParser.ID - 36)) | (1 << (YmlToBdlParser.LINE_COMMENT - 36)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 36)) | (1 << (YmlToBdlParser.GRANULE - 36)) | (1 << (YmlToBdlParser.PREPROCESSING - 36)))) !== 0) );
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===YmlToBdlParser.CLOSE_BRACE) {
				{
				this.state = 679;
				this.match(YmlToBdlParser.CLOSE_BRACE);
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
	@RuleVersion(0)
	public compoundBlock(): CompoundBlockContext {
		let _localctx: CompoundBlockContext = new CompoundBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, YmlToBdlParser.RULE_compoundBlock);
		try {
			this.state = 684;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,89,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 682;
				this.conditionBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 683;
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

	public arithmeticExpression(): ArithmeticExpressionContext;
	public arithmeticExpression(_p: number): ArithmeticExpressionContext;
	@RuleVersion(0)
	public arithmeticExpression(_p?: number): ArithmeticExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ArithmeticExpressionContext = new ArithmeticExpressionContext(this._ctx, _parentState);
		let _prevctx: ArithmeticExpressionContext = _localctx;
		let _startState: number = 126;
		this.enterRecursionRule(_localctx, 126, YmlToBdlParser.RULE_arithmeticExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YmlToBdlParser.OPEN_PAR:
				{
				this.state = 687;
				this.match(YmlToBdlParser.OPEN_PAR);
				this.state = 688;
				_localctx._parenthizedExpression = this.arithmeticExpression(0);
				this.state = 689;
				this.match(YmlToBdlParser.CLOSE_PAR);
				}
				break;
			case YmlToBdlParser.OPERATOR:
				{
				this.state = 691;
				_localctx._prefixedOperator = this.match(YmlToBdlParser.OPERATOR);
				this.state = 692;
				this.arithmeticExpression(2);
				}
				break;
			case YmlToBdlParser.OPEN_BRACKET:
			case YmlToBdlParser.OPEN_BRACE:
			case YmlToBdlParser.QUESTION_MARK:
			case YmlToBdlParser.DATE:
			case YmlToBdlParser.STRING:
			case YmlToBdlParser.DOUBLE:
			case YmlToBdlParser.ID:
				{
				this.state = 693;
				this.nonArithmeticValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 701;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,91,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ArithmeticExpressionContext(_parentctx, _parentState);
					_localctx._leftExpression = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, YmlToBdlParser.RULE_arithmeticExpression);
					this.state = 696;
					if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
					this.state = 697;
					_localctx._infixedOperator = this.match(YmlToBdlParser.OPERATOR);
					this.state = 698;
					_localctx._rightExpression = this.arithmeticExpression(4);
					}
					} 
				}
				this.state = 703;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,91,this._ctx);
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
	@RuleVersion(0)
	public existentialOperator(): ExistentialOperatorContext {
		let _localctx: ExistentialOperatorContext = new ExistentialOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, YmlToBdlParser.RULE_existentialOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
			_localctx._operator = this.ymlId();
			this.state = 705;
			this.match(YmlToBdlParser.OPEN_PAR);
			this.state = 706;
			this.order1FullCondition();
			this.state = 707;
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
	@RuleVersion(0)
	public variableBlock(): VariableBlockContext {
		let _localctx: VariableBlockContext = new VariableBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, YmlToBdlParser.RULE_variableBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this.ymlId();
			this.state = 710;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 711;
			this.variableBlockContent();
			this.state = 712;
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
	@RuleVersion(0)
	public variableBlockWithEOF(): VariableBlockWithEOFContext {
		let _localctx: VariableBlockWithEOFContext = new VariableBlockWithEOFContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, YmlToBdlParser.RULE_variableBlockWithEOF);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			this.ymlId();
			this.state = 715;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 716;
			this.variableBlockContent();
			this.state = 717;
			this.match(YmlToBdlParser.CLOSE_BRACE);
			this.state = 718;
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
	@RuleVersion(0)
	public variableBlockContent(): VariableBlockContentContext {
		let _localctx: VariableBlockContentContext = new VariableBlockContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, YmlToBdlParser.RULE_variableBlockContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===YmlToBdlParser.FIELD || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.ID - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				{
				this.state = 720;
				this.memberDeclaration();
				}
				}
				this.state = 725;
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
	@RuleVersion(0)
	public variableBlockContentWithEOF(): VariableBlockContentWithEOFContext {
		let _localctx: VariableBlockContentWithEOFContext = new VariableBlockContentWithEOFContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, YmlToBdlParser.RULE_variableBlockContentWithEOF);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 729;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===YmlToBdlParser.FIELD || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.ID - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				{
				this.state = 726;
				this.memberDeclaration();
				}
				}
				this.state = 731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 732;
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
	@RuleVersion(0)
	public staticDeclarationsFile(): StaticDeclarationsFileContext {
		let _localctx: StaticDeclarationsFileContext = new StaticDeclarationsFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, YmlToBdlParser.RULE_staticDeclarationsFile);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 737;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,94,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 734;
					this.staticDeclaration();
					}
					} 
				}
				this.state = 739;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,94,this._ctx);
			}
			this.state = 743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.INTERFACE) | (1 << YmlToBdlParser.IMPLEMENTATION) | (1 << YmlToBdlParser.EXTENDS) | (1 << YmlToBdlParser.FUNCTION) | (1 << YmlToBdlParser.METHOD) | (1 << YmlToBdlParser.TEXT_METHOD) | (1 << YmlToBdlParser.FIELD) | (1 << YmlToBdlParser.CLASSPROPERTIES) | (1 << YmlToBdlParser.EXTERN) | (1 << YmlToBdlParser.COMPLETE) | (1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.OVERRIDE) | (1 << YmlToBdlParser.ARGS) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.THEN) | (1 << YmlToBdlParser.ELSE) | (1 << YmlToBdlParser.SEMICOLON) | (1 << YmlToBdlParser.COMMA) | (1 << YmlToBdlParser.COLON) | (1 << YmlToBdlParser.DOT) | (1 << YmlToBdlParser.MULTIVALUED_EXPRESSION) | (1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD) | (1 << YmlToBdlParser.INLINE_DECL_INTRO) | (1 << YmlToBdlParser.EQUAL_COMP) | (1 << YmlToBdlParser.NOT_EQUALS) | (1 << YmlToBdlParser.LESS_OR_EQUAL) | (1 << YmlToBdlParser.GREATE_OR_EQUAL) | (1 << YmlToBdlParser.STRICT_LESS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlToBdlParser.STRICT_GREAT - 32)) | (1 << (YmlToBdlParser.COND_AND - 32)) | (1 << (YmlToBdlParser.COND_OR - 32)) | (1 << (YmlToBdlParser.EQUAL_AFFECT - 32)) | (1 << (YmlToBdlParser.OPEN_PAR - 32)) | (1 << (YmlToBdlParser.CLOSE_PAR - 32)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 32)) | (1 << (YmlToBdlParser.CLOSE_BRACKET - 32)) | (1 << (YmlToBdlParser.OPEN_BRACE - 32)) | (1 << (YmlToBdlParser.CLOSE_BRACE - 32)) | (1 << (YmlToBdlParser.SINGLE_QUOTE - 32)) | (1 << (YmlToBdlParser.BACKSLASH - 32)) | (1 << (YmlToBdlParser.QUESTION_MARK - 32)) | (1 << (YmlToBdlParser.AT - 32)) | (1 << (YmlToBdlParser.OPEN_GRANULE - 32)) | (1 << (YmlToBdlParser.CLOSE_GRANULE - 32)) | (1 << (YmlToBdlParser.OPERATOR - 32)) | (1 << (YmlToBdlParser.DATE - 32)) | (1 << (YmlToBdlParser.STRING - 32)) | (1 << (YmlToBdlParser.DOCUMENTATION - 32)) | (1 << (YmlToBdlParser.WS - 32)) | (1 << (YmlToBdlParser.DOUBLE - 32)) | (1 << (YmlToBdlParser.INTEGER - 32)) | (1 << (YmlToBdlParser.ENUM - 32)) | (1 << (YmlToBdlParser.ID - 32)) | (1 << (YmlToBdlParser.LINE_COMMENT - 32)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 32)) | (1 << (YmlToBdlParser.GRANULE - 32)) | (1 << (YmlToBdlParser.PREPROCESSING - 32)))) !== 0)) {
				{
				{
				this.state = 740;
				this.freeText();
				}
				}
				this.state = 745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 746;
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
	@RuleVersion(0)
	public staticDeclaration(): StaticDeclarationContext {
		let _localctx: StaticDeclarationContext = new StaticDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, YmlToBdlParser.RULE_staticDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 749;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				this.state = 748;
				this.commentBlock();
				}
			}

			this.state = 751;
			_localctx._declarationType = this.ymlId();
			this.state = 752;
			_localctx._declarationName = this.ymlId();
			this.state = 755;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===YmlToBdlParser.EXTENDS) {
				{
				this.state = 753;
				this.match(YmlToBdlParser.EXTENDS);
				this.state = 754;
				_localctx._extended = this.ymlId();
				}
			}

			this.state = 760;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				{
				this.state = 757;
				_localctx._declarationOptions = this.field();
				}
				}
				this.state = 762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 763;
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
	@RuleVersion(0)
	public externalFunctionsFile(): ExternalFunctionsFileContext {
		let _localctx: ExternalFunctionsFileContext = new ExternalFunctionsFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, YmlToBdlParser.RULE_externalFunctionsFile);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 768;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,99,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 765;
					this.externDeclaration();
					}
					} 
				}
				this.state = 770;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,99,this._ctx);
			}
			this.state = 774;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.INTERFACE) | (1 << YmlToBdlParser.IMPLEMENTATION) | (1 << YmlToBdlParser.EXTENDS) | (1 << YmlToBdlParser.FUNCTION) | (1 << YmlToBdlParser.METHOD) | (1 << YmlToBdlParser.TEXT_METHOD) | (1 << YmlToBdlParser.FIELD) | (1 << YmlToBdlParser.CLASSPROPERTIES) | (1 << YmlToBdlParser.EXTERN) | (1 << YmlToBdlParser.COMPLETE) | (1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.OVERRIDE) | (1 << YmlToBdlParser.ARGS) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.THEN) | (1 << YmlToBdlParser.ELSE) | (1 << YmlToBdlParser.SEMICOLON) | (1 << YmlToBdlParser.COMMA) | (1 << YmlToBdlParser.COLON) | (1 << YmlToBdlParser.DOT) | (1 << YmlToBdlParser.MULTIVALUED_EXPRESSION) | (1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD) | (1 << YmlToBdlParser.INLINE_DECL_INTRO) | (1 << YmlToBdlParser.EQUAL_COMP) | (1 << YmlToBdlParser.NOT_EQUALS) | (1 << YmlToBdlParser.LESS_OR_EQUAL) | (1 << YmlToBdlParser.GREATE_OR_EQUAL) | (1 << YmlToBdlParser.STRICT_LESS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlToBdlParser.STRICT_GREAT - 32)) | (1 << (YmlToBdlParser.COND_AND - 32)) | (1 << (YmlToBdlParser.COND_OR - 32)) | (1 << (YmlToBdlParser.EQUAL_AFFECT - 32)) | (1 << (YmlToBdlParser.OPEN_PAR - 32)) | (1 << (YmlToBdlParser.CLOSE_PAR - 32)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 32)) | (1 << (YmlToBdlParser.CLOSE_BRACKET - 32)) | (1 << (YmlToBdlParser.OPEN_BRACE - 32)) | (1 << (YmlToBdlParser.CLOSE_BRACE - 32)) | (1 << (YmlToBdlParser.SINGLE_QUOTE - 32)) | (1 << (YmlToBdlParser.BACKSLASH - 32)) | (1 << (YmlToBdlParser.QUESTION_MARK - 32)) | (1 << (YmlToBdlParser.AT - 32)) | (1 << (YmlToBdlParser.OPEN_GRANULE - 32)) | (1 << (YmlToBdlParser.CLOSE_GRANULE - 32)) | (1 << (YmlToBdlParser.OPERATOR - 32)) | (1 << (YmlToBdlParser.DATE - 32)) | (1 << (YmlToBdlParser.STRING - 32)) | (1 << (YmlToBdlParser.DOCUMENTATION - 32)) | (1 << (YmlToBdlParser.WS - 32)) | (1 << (YmlToBdlParser.DOUBLE - 32)) | (1 << (YmlToBdlParser.INTEGER - 32)) | (1 << (YmlToBdlParser.ENUM - 32)) | (1 << (YmlToBdlParser.ID - 32)) | (1 << (YmlToBdlParser.LINE_COMMENT - 32)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 32)) | (1 << (YmlToBdlParser.GRANULE - 32)) | (1 << (YmlToBdlParser.PREPROCESSING - 32)))) !== 0)) {
				{
				{
				this.state = 771;
				this.freeText();
				}
				}
				this.state = 776;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 777;
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
	@RuleVersion(0)
	public externDeclaration(): ExternDeclarationContext {
		let _localctx: ExternDeclarationContext = new ExternDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, YmlToBdlParser.RULE_externDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				this.state = 779;
				this.commentBlock();
				}
			}

			this.state = 782;
			this.match(YmlToBdlParser.EXTERN);
			this.state = 783;
			this.methodDeclaration();
			this.state = 784;
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
	@RuleVersion(0)
	public externalDialogZoneFile(): ExternalDialogZoneFileContext {
		let _localctx: ExternalDialogZoneFileContext = new ExternalDialogZoneFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, YmlToBdlParser.RULE_externalDialogZoneFile);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,102,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 786;
					this.externDialogZone();
					}
					} 
				}
				this.state = 791;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,102,this._ctx);
			}
			this.state = 795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.INTERFACE) | (1 << YmlToBdlParser.IMPLEMENTATION) | (1 << YmlToBdlParser.EXTENDS) | (1 << YmlToBdlParser.FUNCTION) | (1 << YmlToBdlParser.METHOD) | (1 << YmlToBdlParser.TEXT_METHOD) | (1 << YmlToBdlParser.FIELD) | (1 << YmlToBdlParser.CLASSPROPERTIES) | (1 << YmlToBdlParser.EXTERN) | (1 << YmlToBdlParser.COMPLETE) | (1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.OVERRIDE) | (1 << YmlToBdlParser.ARGS) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.THEN) | (1 << YmlToBdlParser.ELSE) | (1 << YmlToBdlParser.SEMICOLON) | (1 << YmlToBdlParser.COMMA) | (1 << YmlToBdlParser.COLON) | (1 << YmlToBdlParser.DOT) | (1 << YmlToBdlParser.MULTIVALUED_EXPRESSION) | (1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD) | (1 << YmlToBdlParser.INLINE_DECL_INTRO) | (1 << YmlToBdlParser.EQUAL_COMP) | (1 << YmlToBdlParser.NOT_EQUALS) | (1 << YmlToBdlParser.LESS_OR_EQUAL) | (1 << YmlToBdlParser.GREATE_OR_EQUAL) | (1 << YmlToBdlParser.STRICT_LESS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlToBdlParser.STRICT_GREAT - 32)) | (1 << (YmlToBdlParser.COND_AND - 32)) | (1 << (YmlToBdlParser.COND_OR - 32)) | (1 << (YmlToBdlParser.EQUAL_AFFECT - 32)) | (1 << (YmlToBdlParser.OPEN_PAR - 32)) | (1 << (YmlToBdlParser.CLOSE_PAR - 32)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 32)) | (1 << (YmlToBdlParser.CLOSE_BRACKET - 32)) | (1 << (YmlToBdlParser.OPEN_BRACE - 32)) | (1 << (YmlToBdlParser.CLOSE_BRACE - 32)) | (1 << (YmlToBdlParser.SINGLE_QUOTE - 32)) | (1 << (YmlToBdlParser.BACKSLASH - 32)) | (1 << (YmlToBdlParser.QUESTION_MARK - 32)) | (1 << (YmlToBdlParser.AT - 32)) | (1 << (YmlToBdlParser.OPEN_GRANULE - 32)) | (1 << (YmlToBdlParser.CLOSE_GRANULE - 32)) | (1 << (YmlToBdlParser.OPERATOR - 32)) | (1 << (YmlToBdlParser.DATE - 32)) | (1 << (YmlToBdlParser.STRING - 32)) | (1 << (YmlToBdlParser.DOCUMENTATION - 32)) | (1 << (YmlToBdlParser.WS - 32)) | (1 << (YmlToBdlParser.DOUBLE - 32)) | (1 << (YmlToBdlParser.INTEGER - 32)) | (1 << (YmlToBdlParser.ENUM - 32)) | (1 << (YmlToBdlParser.ID - 32)) | (1 << (YmlToBdlParser.LINE_COMMENT - 32)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 32)) | (1 << (YmlToBdlParser.GRANULE - 32)) | (1 << (YmlToBdlParser.PREPROCESSING - 32)))) !== 0)) {
				{
				{
				this.state = 792;
				this.freeText();
				}
				}
				this.state = 797;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 798;
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
	@RuleVersion(0)
	public externDialogZone(): ExternDialogZoneContext {
		let _localctx: ExternDialogZoneContext = new ExternDialogZoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, YmlToBdlParser.RULE_externDialogZone);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				this.state = 800;
				this.commentBlock();
				}
			}

			this.state = 803;
			this.match(YmlToBdlParser.EXTERN);
			this.state = 804;
			this.memberDeclaration();
			this.state = 805;
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
	@RuleVersion(0)
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, YmlToBdlParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 807;
			this.match(YmlToBdlParser.OPEN_BRACKET);
			this.state = 809;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.INLINE_DECL_INTRO))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlToBdlParser.OPEN_PAR - 36)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 36)) | (1 << (YmlToBdlParser.OPEN_BRACE - 36)) | (1 << (YmlToBdlParser.QUESTION_MARK - 36)) | (1 << (YmlToBdlParser.OPERATOR - 36)) | (1 << (YmlToBdlParser.DATE - 36)) | (1 << (YmlToBdlParser.STRING - 36)) | (1 << (YmlToBdlParser.WS - 36)) | (1 << (YmlToBdlParser.DOUBLE - 36)) | (1 << (YmlToBdlParser.ID - 36)) | (1 << (YmlToBdlParser.LINE_COMMENT - 36)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 36)) | (1 << (YmlToBdlParser.GRANULE - 36)) | (1 << (YmlToBdlParser.PREPROCESSING - 36)))) !== 0)) {
				{
				this.state = 808;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
			}

			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===YmlToBdlParser.COMMA) {
				{
				{
				this.state = 811;
				this.match(YmlToBdlParser.COMMA);
				this.state = 812;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
				}
				this.state = 817;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 818;
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
	@RuleVersion(0)
	public listWithBrace(): ListWithBraceContext {
		let _localctx: ListWithBraceContext = new ListWithBraceContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, YmlToBdlParser.RULE_listWithBrace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 820;
			this.match(YmlToBdlParser.OPEN_BRACE);
			this.state = 822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.INLINE_DECL_INTRO))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlToBdlParser.OPEN_PAR - 36)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 36)) | (1 << (YmlToBdlParser.OPEN_BRACE - 36)) | (1 << (YmlToBdlParser.QUESTION_MARK - 36)) | (1 << (YmlToBdlParser.OPERATOR - 36)) | (1 << (YmlToBdlParser.DATE - 36)) | (1 << (YmlToBdlParser.STRING - 36)) | (1 << (YmlToBdlParser.WS - 36)) | (1 << (YmlToBdlParser.DOUBLE - 36)) | (1 << (YmlToBdlParser.ID - 36)) | (1 << (YmlToBdlParser.LINE_COMMENT - 36)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 36)) | (1 << (YmlToBdlParser.GRANULE - 36)) | (1 << (YmlToBdlParser.PREPROCESSING - 36)))) !== 0)) {
				{
				this.state = 821;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
			}

			this.state = 828;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===YmlToBdlParser.COMMA) {
				{
				{
				this.state = 824;
				this.match(YmlToBdlParser.COMMA);
				this.state = 825;
				_localctx._value = this.value();
				_localctx._elements.push(_localctx._value);
				}
				}
				this.state = 830;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 831;
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
	@RuleVersion(0)
	public granule(): GranuleContext {
		let _localctx: GranuleContext = new GranuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, YmlToBdlParser.RULE_granule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 833;
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
	@RuleVersion(0)
	public complete(): CompleteContext {
		let _localctx: CompleteContext = new CompleteContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, YmlToBdlParser.RULE_complete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 836;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				this.state = 835;
				this.commentBlock();
				}
			}

			this.state = 838;
			this.match(YmlToBdlParser.COMPLETE);
			this.state = 839;
			_localctx._completedElemId = this.ymlId();
			this.state = 843;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (YmlToBdlParser.WS - 52)) | (1 << (YmlToBdlParser.LINE_COMMENT - 52)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 52)) | (1 << (YmlToBdlParser.PREPROCESSING - 52)))) !== 0)) {
				{
				{
				this.state = 840;
				_localctx._memberOption = this.field();
				}
				}
				this.state = 845;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 846;
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
		case 54:
			return this.combinedComparison_sempred(_localctx as CombinedComparisonContext, predIndex);

		case 63:
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
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03>\u0353\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#"+
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+"+
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044"+
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x03\x02\x03\x02\x03\x03\x05\x03\xA4\n\x03\x03\x03\x03\x03"+
		"\x05\x03\xA8\n\x03\x03\x04\x05\x04\xAB\n\x04\x03\x04\x03\x04\x05\x04\xAF"+
		"\n\x04\x03\x05\x03\x05\x03\x06\x03\x06\x06\x06\xB5\n\x06\r\x06\x0E\x06"+
		"\xB6\x03\x07\x06\x07\xBA\n\x07\r\x07\x0E\x07\xBB\x03\x07\x07\x07\xBF\n"+
		"\x07\f\x07\x0E\x07\xC2\v\x07\x03\b\x03\b\x05\b\xC6\n\b\x03\b\x03\b\x07"+
		"\b\xCA\n\b\f\b\x0E\b\xCD\v\b\x03\t\x07\t\xD0\n\t\f\t\x0E\t\xD3\v\t\x03"+
		"\t\x05\t\xD6\n\t\x03\t\x03\t\x03\n\x03\n\x05\n\xDC\n\n\x03\n\x05\n\xDF"+
		"\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xE8\n\v\x03\f\x03"+
		"\f\x03\f\x03\f\x03\f\x05\f\xEF\n\f\x03\f\x03\f\x07\f\xF3\n\f\f\f\x0E\f"+
		"\xF6\v\f\x06\f\xF8\n\f\r\f\x0E\f\xF9\x03\f\x05\f\xFD\n\f\x03\f\x03\f\x07"+
		"\f\u0101\n\f\f\f\x0E\f\u0104\v\f\x03\f\x03\f\x03\r\x03\r\x07\r\u010A\n"+
		"\r\f\r\x0E\r\u010D\v\r\x03\x0E\x05\x0E\u0110\n\x0E\x03\x0E\x03\x0E\x07"+
		"\x0E\u0114\n\x0E\f\x0E\x0E\x0E\u0117\v\x0E\x03\x0E\x07\x0E\u011A\n\x0E"+
		"\f\x0E\x0E\x0E\u011D\v\x0E\x03\x0E\x07\x0E\u0120\n\x0E\f\x0E\x0E\x0E\u0123"+
		"\v\x0E\x03\x0E\x05\x0E\u0126\n\x0E\x03\x0E\x05\x0E\u0129\n\x0E\x03\x0E"+
		"\x05\x0E\u012C\n\x0E\x03\x0E\x03\x0E\x07\x0E\u0130\n\x0E\f\x0E\x0E\x0E"+
		"\u0133\v\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0138\n\x0E\x03\x0F\x05\x0F"+
		"\u013B\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0140\n\x0F\x03\x0F\x07\x0F"+
		"\u0143\n\x0F\f\x0F\x0E\x0F\u0146\v\x0F\x03\x0F\x05\x0F\u0149\n\x0F\x03"+
		"\x10\x03\x10\x03\x10\x05\x10\u014E\n\x10\x03\x10\x03\x10\x03\x11\x03\x11"+
		"\x03\x11\x05\x11\u0155\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u015B"+
		"\n\x12\f\x12\x0E\x12\u015E\v\x12\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14"+
		"\u0164\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07"+
		"\x15\u016D\n\x15\f\x15\x0E\x15\u0170\v\x15\x05\x15\u0172\n\x15\x03\x15"+
		"\x05\x15\u0175\n\x15\x03\x16\x05\x16\u0178\n\x16\x03\x16\x03\x16\x03\x16"+
		"\x07\x16\u017D\n\x16\f\x16\x0E\x16\u0180\v\x16\x03\x17\x03\x17\x03\x17"+
		"\x06\x17\u0185\n\x17\r\x17\x0E\x17\u0186\x03\x18\x03\x18\x05\x18\u018B"+
		"\n\x18\x03\x19\x05\x19\u018E\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03"+
		"\x19\x07\x19\u0195\n\x19\f\x19\x0E\x19\u0198\v\x19\x05\x19\u019A\n\x19"+
		"\x03\x1A\x03\x1A\x07\x1A\u019E\n\x1A\f\x1A\x0E\x1A\u01A1\v\x1A\x03\x1B"+
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01A9\n\x1C\x03\x1D\x03"+
		"\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x05\x1E\u01B1\n\x1E\x03\x1F\x03\x1F"+
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01B9\n\x1F\x03 \x03 \x03 \x03"+
		" \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x05!\u01C8\n!\x03\"\x03"+
		"\"\x03\"\x03#\x03#\x03#\x05#\u01D0\n#\x03$\x03$\x03$\x03$\x03$\x07$\u01D7"+
		"\n$\f$\x0E$\u01DA\v$\x05$\u01DC\n$\x03$\x03$\x03%\x03%\x05%\u01E2\n%\x03"+
		"%\x03%\x03&\x03&\x03&\x03&\x07&\u01EA\n&\f&\x0E&\u01ED\v&\x03\'\x05\'"+
		"\u01F0\n\'\x03\'\x03\'\x03\'\x05\'\u01F5\n\'\x03\'\x07\'\u01F8\n\'\f\'"+
		"\x0E\'\u01FB\v\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03)\x03)\x05)\u0205"+
		"\n)\x03*\x05*\u0208\n*\x03*\x03*\x07*\u020C\n*\f*\x0E*\u020F\v*\x03+\x03"+
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u021C\n+\x03,\x05"+
		",\u021F\n,\x03,\x05,\u0222\n,\x03-\x03-\x03-\x07-\u0227\n-\f-\x0E-\u022A"+
		"\v-\x03.\x03.\x03.\x05.\u022F\n.\x03/\x05/\u0232\n/\x03/\x03/\x03/\x03"+
		"/\x07/\u0238\n/\f/\x0E/\u023B\v/\x03/\x03/\x05/\u023F\n/\x030\x030\x03"+
		"0\x030\x030\x050\u0246\n0\x030\x030\x030\x050\u024B\n0\x030\x050\u024E"+
		"\n0\x031\x031\x031\x031\x071\u0254\n1\f1\x0E1\u0257\v1\x031\x031\x032"+
		"\x032\x052\u025D\n2\x033\x033\x053\u0261\n3\x034\x034\x035\x035\x035\x03"+
		"5\x036\x056\u026A\n6\x036\x076\u026D\n6\f6\x0E6\u0270\v6\x037\x037\x03"+
		"7\x038\x038\x038\x038\x038\x038\x058\u027B\n8\x038\x038\x038\x038\x03"+
		"8\x038\x078\u0283\n8\f8\x0E8\u0286\v8\x039\x039\x039\x039\x03:\x03:\x03"+
		";\x03;\x03;\x03;\x03;\x03<\x06<\u0294\n<\r<\x0E<\u0295\x03=\x03=\x05="+
		"\u029A\n=\x03>\x03>\x03>\x03>\x05>\u02A0\n>\x03?\x05?\u02A3\n?\x03?\x06"+
		"?\u02A6\n?\r?\x0E?\u02A7\x03?\x05?\u02AB\n?\x03@\x03@\x05@\u02AF\n@\x03"+
		"A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u02B9\nA\x03A\x03A\x03A\x07"+
		"A\u02BE\nA\fA\x0EA\u02C1\vA\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03"+
		"C\x03C\x03D\x03D\x03D\x03D\x03D\x03D\x03E\x07E\u02D4\nE\fE\x0EE\u02D7"+
		"\vE\x03F\x07F\u02DA\nF\fF\x0EF\u02DD\vF\x03F\x03F\x03G\x07G\u02E2\nG\f"+
		"G\x0EG\u02E5\vG\x03G\x07G\u02E8\nG\fG\x0EG\u02EB\vG\x03G\x03G\x03H\x05"+
		"H\u02F0\nH\x03H\x03H\x03H\x03H\x05H\u02F6\nH\x03H\x07H\u02F9\nH\fH\x0E"+
		"H\u02FC\vH\x03H\x03H\x03I\x07I\u0301\nI\fI\x0EI\u0304\vI\x03I\x07I\u0307"+
		"\nI\fI\x0EI\u030A\vI\x03I\x03I\x03J\x05J\u030F\nJ\x03J\x03J\x03J\x03J"+
		"\x03K\x07K\u0316\nK\fK\x0EK\u0319\vK\x03K\x07K\u031C\nK\fK\x0EK\u031F"+
		"\vK\x03K\x03K\x03L\x05L\u0324\nL\x03L\x03L\x03L\x03L\x03M\x03M\x05M\u032C"+
		"\nM\x03M\x03M\x07M\u0330\nM\fM\x0EM\u0333\vM\x03M\x03M\x03N\x03N\x05N"+
		"\u0339\nN\x03N\x03N\x07N\u033D\nN\fN\x0EN\u0340\vN\x03N\x03N\x03O\x03"+
		"O\x03P\x05P\u0347\nP\x03P\x03P\x03P\x07P\u034C\nP\fP\x0EP\u034F\vP\x03"+
		"P\x03P\x03P\x07\xBB\xC0\u0131\u0186\u0196\x02\x04n\x80Q\x02\x02\x04\x02"+
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18"+
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02"+
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02"+
		"L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02"+
		"h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82"+
		"\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94"+
		"\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\x02\t\x03\x02\x16\x17\x03"+
		"\x02;<\x02\x03\x03\x02\x18\x1B\x04\x023477\x03\x02\x06\b\x03\x02\x1D\""+
		"\u037F\x02\xA0\x03\x02\x02\x02\x04\xA3\x03\x02\x02\x02\x06\xAA\x03\x02"+
		"\x02\x02\b\xB0\x03\x02\x02\x02\n\xB4\x03\x02\x02\x02\f\xB9\x03\x02\x02"+
		"\x02\x0E\xC3\x03\x02\x02\x02\x10\xD1\x03\x02\x02\x02\x12\xD9\x03\x02\x02"+
		"\x02\x14\xE7\x03\x02\x02\x02\x16\xE9\x03\x02\x02\x02\x18\u0107\x03\x02"+
		"\x02\x02\x1A\u010F\x03\x02\x02\x02\x1C\u013A\x03\x02\x02\x02\x1E\u014A"+
		"\x03\x02\x02\x02 \u0151\x03\x02\x02\x02\"\u0156\x03\x02\x02\x02$\u015F"+
		"\x03\x02\x02\x02&\u0163\x03\x02\x02\x02(\u0174\x03\x02\x02\x02*\u0177"+
		"\x03\x02\x02\x02,\u0181\x03\x02\x02\x02.\u018A\x03\x02\x02\x020\u018D"+
		"\x03\x02\x02\x022\u019B\x03\x02\x02\x024\u01A2\x03\x02\x02\x026\u01A8"+
		"\x03\x02\x02\x028\u01AA\x03\x02\x02\x02:\u01B0\x03\x02\x02\x02<\u01B8"+
		"\x03\x02\x02\x02>\u01BA\x03\x02\x02\x02@\u01C7\x03\x02\x02\x02B\u01C9"+
		"\x03\x02\x02\x02D\u01CF\x03\x02\x02\x02F\u01D1\x03\x02\x02\x02H\u01E1"+
		"\x03\x02\x02\x02J\u01E5\x03\x02\x02\x02L\u01EF\x03\x02\x02\x02N\u01FE"+
		"\x03\x02\x02\x02P\u0204\x03\x02\x02\x02R\u0207\x03\x02\x02\x02T\u0210"+
		"\x03\x02\x02\x02V\u021E\x03\x02\x02\x02X\u0223\x03\x02\x02\x02Z\u022B"+
		"\x03\x02\x02\x02\\\u0231\x03\x02\x02\x02^\u0245\x03\x02\x02\x02`\u024F"+
		"\x03\x02\x02\x02b\u025A\x03\x02\x02\x02d\u025E\x03\x02\x02\x02f\u0262"+
		"\x03\x02\x02\x02h\u0264\x03\x02\x02\x02j\u0269\x03\x02\x02\x02l\u0271"+
		"\x03\x02\x02\x02n\u027A\x03\x02\x02\x02p\u0287\x03\x02\x02\x02r\u028B"+
		"\x03\x02\x02\x02t\u028D\x03\x02\x02\x02v\u0293\x03\x02\x02\x02x\u0299"+
		"\x03\x02\x02\x02z\u029F\x03\x02\x02\x02|\u02A2\x03\x02\x02\x02~\u02AE"+
		"\x03\x02\x02\x02\x80\u02B8\x03\x02\x02\x02\x82\u02C2\x03\x02\x02\x02\x84"+
		"\u02C7\x03\x02\x02\x02\x86\u02CC\x03\x02\x02\x02\x88\u02D5\x03\x02\x02"+
		"\x02\x8A\u02DB\x03\x02\x02\x02\x8C\u02E3\x03\x02\x02\x02\x8E\u02EF\x03"+
		"\x02\x02\x02\x90\u0302\x03\x02\x02\x02\x92\u030E\x03\x02\x02\x02\x94\u0317"+
		"\x03\x02\x02\x02\x96\u0323\x03\x02\x02\x02\x98\u0329\x03\x02\x02\x02\x9A"+
		"\u0336\x03\x02\x02\x02\x9C\u0343\x03\x02\x02\x02\x9E\u0346\x03\x02\x02"+
		"\x02\xA0\xA1\t\x02\x02\x02\xA1\x03\x03\x02\x02\x02\xA2\xA4\x076\x02\x02"+
		"\xA3\xA2\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02"+
		"\xA5\xA7\t\x03\x02\x02\xA6\xA8\x076\x02\x02\xA7\xA6\x03\x02\x02\x02\xA7"+
		"\xA8\x03\x02\x02\x02\xA8\x05\x03\x02\x02\x02\xA9\xAB\x076\x02\x02\xAA"+
		"\xA9\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC"+
		"\xAE\x07>\x02\x02\xAD\xAF\x076\x02\x02\xAE\xAD\x03\x02\x02\x02\xAE\xAF"+
		"\x03\x02\x02\x02\xAF\x07\x03\x02\x02\x02\xB0\xB1\x05\x04\x03\x02\xB1\t"+
		"\x03\x02\x02\x02\xB2\xB5\x05\b\x05\x02\xB3\xB5\x05\x06\x04\x02\xB4\xB2"+
		"\x03\x02\x02\x02\xB4\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB4"+
		"\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\v\x03\x02\x02\x02\xB8\xBA"+
		"\v\x02\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBC"+
		"\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC\xC0\x03\x02\x02\x02\xBD\xBF"+
		"\n\x04\x02\x02\xBE\xBD\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xC1"+
		"\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\r\x03\x02\x02\x02\xC2\xC0"+
		"\x03\x02\x02\x02\xC3\xCB\x07:\x02\x02\xC4\xC6\x07\x15\x02\x02\xC5\xC4"+
		"\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8"+
		"\x07\x15\x02\x02\xC8\xCA\x07:\x02\x02\xC9\xC5\x03\x02\x02\x02\xCA\xCD"+
		"\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\x0F"+
		"\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCE\xD0\x05\x14\v\x02\xCF\xCE"+
		"\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2"+
		"\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD6"+
		"\x05\f\x07\x02\xD5\xD4\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7"+
		"\x03\x02\x02\x02\xD7\xD8\x07\x02\x02\x03\xD8\x11\x03\x02\x02\x02\xD9\xDB"+
		"\x05\x1A\x0E\x02\xDA\xDC\x05\f\x07\x02\xDB\xDA\x03\x02\x02\x02\xDB\xDC"+
		"\x03\x02\x02\x02\xDC\xDE\x03\x02\x02\x02\xDD\xDF\x07\x02\x02\x03\xDE\xDD"+
		"\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\x13\x03\x02\x02\x02\xE0\xE8"+
		"\x05\x1A\x0E\x02\xE1\xE8\x05\x8EH\x02\xE2\xE8\x05\x9EP\x02\xE3\xE4\x05"+
		"R*\x02\xE4\xE5\x07\x13\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE8\x05\x16"+
		"\f\x02\xE7\xE0\x03\x02\x02\x02\xE7\xE1\x03\x02\x02\x02\xE7\xE2\x03\x02"+
		"\x02\x02\xE7\xE3\x03\x02\x02\x02\xE7\xE6\x03\x02\x02\x02\xE8\x15\x03\x02"+
		"\x02\x02\xE9\xEA\x079\x02\x02\xEA\xEB\x05\x0E\b\x02\xEB\xF7\x07*\x02\x02"+
		"\xEC\xF4\x05\x18\r\x02\xED\xEF\x05\n\x06\x02\xEE\xED\x03\x02\x02\x02\xEE"+
		"\xEF\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x07\x14\x02\x02\xF1"+
		"\xF3\x05\x18\r\x02\xF2\xEE\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4"+
		"\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6"+
		"\xF4\x03\x02\x02\x02\xF7\xEC\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9"+
		"\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02\xFB"+
		"\xFD\x05\n\x06\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD"+
		"\xFE\x03\x02\x02\x02\xFE\u0102\x07+\x02\x02\xFF\u0101\x050\x19\x02\u0100"+
		"\xFF\x03\x02\x02\x02\u0101\u0104\x03\x02\x02\x02\u0102\u0100\x03\x02\x02"+
		"\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0105\x03\x02\x02\x02\u0104\u0102"+
		"\x03\x02\x02\x02\u0105\u0106\x07\x13\x02\x02\u0106\x17\x03\x02\x02\x02"+
		"\u0107\u010B\x05\x0E\b\x02\u0108\u010A\x050\x19\x02\u0109\u0108\x03\x02"+
		"\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B"+
		"\u010C\x03\x02\x02\x02\u010C\x19\x03\x02\x02\x02\u010D\u010B\x03\x02\x02"+
		"\x02\u010E\u0110\x05\n\x06\x02\u010F\u010E\x03\x02\x02\x02\u010F\u0110"+
		"\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0115\x05 \x11\x02"+
		"\u0112\u0114\x050\x19\x02\u0113\u0112\x03\x02\x02\x02\u0114\u0117\x03"+
		"\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116"+
		"\u011B\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0118\u011A\x05*\x16"+
		"\x02\u0119\u0118\x03\x02\x02\x02\u011A\u011D\x03\x02\x02\x02\u011B\u0119"+
		"\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u0121\x03\x02\x02\x02"+
		"\u011D\u011B\x03\x02\x02\x02\u011E\u0120\x05R*\x02\u011F\u011E\x03\x02"+
		"\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121"+
		"\u0122\x03\x02\x02\x02\u0122\u0125\x03\x02\x02\x02\u0123\u0121\x03\x02"+
		"\x02\x02\u0124\u0126\x05\n\x06\x02\u0125\u0124\x03\x02\x02\x02\u0125\u0126"+
		"\x03\x02\x02\x02\u0126\u0128\x03\x02\x02\x02\u0127\u0129\x052\x1A\x02"+
		"\u0128\u0127\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012B\x03"+
		"\x02\x02\x02\u012A\u012C\x05\n\x06\x02\u012B\u012A\x03\x02\x02\x02\u012B"+
		"\u012C\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u0131\x07\x13"+
		"\x02\x02\u012E\u0130\x05\f\x07\x02\u012F\u012E\x03\x02\x02\x02\u0130\u0133"+
		"\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02"+
		"\u0132\u0134\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0134\u0135\x05"+
		"\x1C\x0F\x02\u0135\u0137\x07\x13\x02\x02\u0136\u0138\x07\x02\x02\x03\u0137"+
		"\u0136\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\x1B\x03\x02\x02"+
		"\x02\u0139\u013B\x05\n\x06\x02\u013A\u0139\x03\x02\x02\x02\u013A\u013B"+
		"\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013D\x07\x04\x02\x02"+
		"\u013D\u013F\x05\x0E\b\x02\u013E\u0140\x05\x1E\x10\x02\u013F\u013E\x03"+
		"\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0144\x03\x02\x02\x02\u0141"+
		"\u0143\x050\x19\x02\u0142\u0141\x03\x02\x02\x02\u0143\u0146\x03\x02\x02"+
		"\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0148"+
		"\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0147\u0149\x05\n\x06\x02"+
		"\u0148\u0147\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\x1D\x03"+
		"\x02\x02\x02\u014A\u014B\x07\x0E\x02\x02\u014B\u014D\x07*\x02\x02\u014C"+
		"\u014E\x05\f\x07\x02\u014D\u014C\x03\x02\x02\x02\u014D\u014E\x03\x02\x02"+
		"\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0150\x07+\x02\x02\u0150\x1F\x03"+
		"\x02\x02\x02\u0151\u0152\x07\x03\x02\x02\u0152\u0154\x05\x0E\b\x02\u0153"+
		"\u0155\x05\"\x12\x02\u0154\u0153\x03\x02\x02\x02\u0154\u0155\x03\x02\x02"+
		"\x02\u0155!\x03\x02\x02\x02\u0156\u0157\x07\x05\x02\x02\u0157\u015C\x05"+
		"$\x13\x02\u0158\u0159\x07\x14\x02\x02\u0159\u015B\x05$\x13\x02\u015A\u0158"+
		"\x03\x02\x02\x02\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02"+
		"\u015C\u015D\x03\x02\x02\x02\u015D#\x03\x02\x02\x02\u015E\u015C\x03\x02"+
		"\x02\x02\u015F\u0160\x05\x0E\b\x02\u0160%\x03\x02\x02\x02\u0161\u0164"+
		"\x05\x0E\b\x02\u0162\u0164\x07\t\x02\x02\u0163\u0161\x03\x02\x02\x02\u0163"+
		"\u0162\x03\x02\x02\x02\u0164\'\x03\x02\x02\x02\u0165\u0166\x07\r\x02\x02"+
		"\u0166\u0175\x05\x9AN\x02\u0167\u0168\x07\r\x02\x02\u0168\u0171\x07&\x02"+
		"\x02\u0169\u016E\x05<\x1F\x02\u016A\u016B\x07\x14\x02\x02\u016B\u016D"+
		"\x05<\x1F\x02\u016C\u016A\x03\x02\x02\x02\u016D\u0170\x03\x02\x02\x02"+
		"\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0172\x03"+
		"\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0169\x03\x02\x02\x02\u0171"+
		"\u0172\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0175\x07\'\x02"+
		"\x02\u0174\u0165\x03\x02\x02\x02\u0174\u0167\x03\x02\x02\x02\u0175)\x03"+
		"\x02\x02\x02\u0176\u0178\x05\n\x06\x02\u0177\u0176\x03\x02\x02\x02\u0177"+
		"\u0178\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017A\x05&\x14"+
		"\x02\u017A\u017E\x05\x0E\b\x02\u017B\u017D\x050\x19\x02\u017C\u017B\x03"+
		"\x02\x02\x02\u017D\u0180\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E"+
		"\u017F\x03\x02\x02\x02\u017F+\x03\x02\x02\x02\u0180\u017E\x03\x02\x02"+
		"\x02\u0181\u0184\x05\x0E\b\x02\u0182\u0183\x07\x16\x02\x02\u0183\u0185"+
		"\x05\x0E\b\x02\u0184\u0182\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02"+
		"\u0186\u0187\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0187-\x03\x02"+
		"\x02\x02\u0188\u018B\x05\x0E\b\x02\u0189\u018B\x05,\x17\x02\u018A\u0188"+
		"\x03\x02\x02\x02\u018A\u0189\x03\x02\x02\x02\u018B/\x03\x02\x02\x02\u018C"+
		"\u018E\x05\n\x06\x02\u018D\u018C\x03\x02\x02\x02\u018D\u018E\x03\x02\x02"+
		"\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0190\t\x05\x02\x02\u0190\u0199"+
		"\x05.\x18\x02\u0191\u0196\x056\x1C\x02\u0192\u0193\x07\x14\x02\x02\u0193"+
		"\u0195\x056\x1C\x02\u0194\u0192\x03\x02\x02\x02\u0195\u0198\x03\x02\x02"+
		"\x02\u0196\u0197\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0197\u019A"+
		"\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0199\u0191\x03\x02\x02\x02"+
		"\u0199\u019A\x03\x02\x02\x02\u019A1\x03\x02\x02\x02\u019B\u019F\x07\n"+
		"\x02\x02\u019C\u019E\x050\x19\x02\u019D\u019C\x03\x02\x02\x02\u019E\u01A1"+
		"\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02"+
		"\u01A03\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A2\u01A3\x075\x02"+
		"\x02\u01A35\x03\x02\x02\x02\u01A4\u01A9\x05n8\x02\u01A5\u01A9\x05<\x1F"+
		"\x02\u01A6\u01A9\x058\x1D\x02\u01A7\u01A9\x054\x1B\x02\u01A8\u01A4\x03"+
		"\x02\x02\x02\u01A8\u01A5\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8"+
		"\u01A7\x03\x02\x02\x02\u01A97\x03\x02\x02\x02\u01AA\u01AB\x05@!\x02\u01AB"+
		"\u01AC\x07\x15\x02\x02\u01AC\u01AD\x05:\x1E\x02\u01AD9\x03\x02\x02\x02"+
		"\u01AE\u01B1\x05<\x1F\x02\u01AF\u01B1\x05n8\x02\u01B0\u01AE\x03\x02\x02"+
		"\x02\u01B0\u01AF\x03\x02\x02\x02\u01B1;\x03\x02\x02\x02\u01B2\u01B9\x05"+
		"\x9CO\x02\u01B3\u01B9\x05L\'\x02\u01B4\u01B9\x05@!\x02\u01B5\u01B9\x05"+
		"\x80A\x02\u01B6\u01B9\x05(\x15\x02\u01B7\u01B9\x05> \x02\u01B8\u01B2\x03"+
		"\x02\x02\x02\u01B8\u01B3\x03\x02\x02\x02\u01B8\u01B4\x03\x02\x02\x02\u01B8"+
		"\u01B5\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B7\x03\x02"+
		"\x02\x02\u01B9=\x03\x02\x02\x02\u01BA\u01BB\x07\x10\x02\x02\u01BB\u01BC"+
		"\x07&\x02\x02\u01BC\u01BD\x05n8\x02\u01BD\u01BE\x07\'\x02\x02\u01BE\u01BF"+
		"\x07\x11\x02\x02\u01BF\u01C0\x05<\x1F\x02\u01C0\u01C1\x07\x12\x02\x02"+
		"\u01C1\u01C2\x05<\x1F\x02\u01C2?\x03\x02\x02\x02\u01C3\u01C8\x05\x98M"+
		"\x02\u01C4\u01C8\x05\x9AN\x02\u01C5\u01C8\x05J&\x02\u01C6\u01C8\t\x06"+
		"\x02\x02\u01C7\u01C3\x03\x02\x02\x02\u01C7\u01C4\x03\x02\x02\x02\u01C7"+
		"\u01C5\x03\x02\x02\x02\u01C7\u01C6\x03\x02\x02\x02\u01C8A\x03\x02\x02"+
		"\x02\u01C9\u01CA\x07.\x02\x02\u01CA\u01CB\x05\x0E\b\x02\u01CBC\x03\x02"+
		"\x02\x02\u01CC\u01D0\x05\x0E\b\x02\u01CD\u01D0\x05F$\x02\u01CE\u01D0\x05"+
		"B\"\x02\u01CF\u01CC\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF"+
		"\u01CE\x03\x02\x02\x02\u01D0E\x03\x02\x02\x02\u01D1\u01D2\x05\x0E\b\x02"+
		"\u01D2\u01DB\x07&\x02\x02\u01D3\u01D8\x05H%\x02\u01D4\u01D5\x07\x14\x02"+
		"\x02\u01D5\u01D7\x05H%\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01DA\x03"+
		"\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9"+
		"\u01DC\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01D3\x03\x02"+
		"\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD"+
		"\u01DE\x07\'\x02\x02\u01DEG\x03\x02\x02\x02\u01DF\u01E0\x07:\x02\x02\u01E0"+
		"\u01E2\x07\x15\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03\x02"+
		"\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E4\x05<\x1F\x02\u01E4I\x03"+
		"\x02\x02\x02\u01E5\u01EB\x05D#\x02\u01E6\u01E7\x05\x02\x02\x02\u01E7\u01E8"+
		"\x05D#\x02\u01E8\u01EA\x03\x02\x02\x02\u01E9\u01E6\x03\x02\x02\x02\u01EA"+
		"\u01ED\x03\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02\u01EB\u01EC\x03\x02"+
		"\x02\x02\u01ECK\x03\x02\x02\x02\u01ED\u01EB\x03\x02\x02\x02\u01EE\u01F0"+
		"\x05\n\x06\x02\u01EF\u01EE\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02"+
		"\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F2\x07\x1C\x02\x02\u01F2\u01F4\x05"+
		"\x0E\b\x02\u01F3\u01F5\x05";
	private static readonly _serializedATNSegment1: string =
		"\x0E\b\x02\u01F4\u01F3\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5"+
		"\u01F9\x03\x02\x02\x02\u01F6\u01F8\x05P)\x02\u01F7\u01F6\x03\x02\x02\x02"+
		"\u01F8\u01FB\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03"+
		"\x02\x02\x02\u01FA\u01FC\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FC"+
		"\u01FD\x07\x13\x02\x02\u01FDM\x03\x02\x02\x02\u01FE\u01FF\x05<\x1F\x02"+
		"\u01FF\u0200\x05\x0E\b\x02\u0200\u0201\x05<\x1F\x02\u0201O\x03\x02\x02"+
		"\x02\u0202\u0205\x050\x19\x02\u0203\u0205\x05\x9CO\x02\u0204\u0202\x03"+
		"\x02\x02\x02\u0204\u0203\x03\x02\x02\x02\u0205Q\x03\x02\x02\x02\u0206"+
		"\u0208\x05\n\x06\x02\u0207\u0206\x03\x02\x02\x02\u0207\u0208\x03\x02\x02"+
		"\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020D\x05T+\x02\u020A\u020C\x05"+
		"0\x19\x02\u020B\u020A\x03\x02\x02\x02\u020C\u020F\x03\x02\x02\x02\u020D"+
		"\u020B\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020ES\x03\x02\x02"+
		"\x02\u020F\u020D\x03\x02\x02\x02\u0210\u0211\t\x07\x02\x02\u0211\u021B"+
		"\x05\x0E\b\x02\u0212\u0213\x07\x0F\x02\x02\u0213\u0214\x07*\x02\x02\u0214"+
		"\u0215\x05\x88E\x02\u0215\u0216\x07+\x02\x02\u0216\u021C\x03\x02\x02\x02"+
		"\u0217\u0218\x07&\x02\x02\u0218\u0219\x05V,\x02\u0219\u021A\x07\'\x02"+
		"\x02\u021A\u021C\x03\x02\x02\x02\u021B\u0212\x03\x02\x02\x02\u021B\u0217"+
		"\x03\x02\x02\x02\u021CU\x03\x02\x02\x02\u021D\u021F\x05X-\x02\u021E\u021D"+
		"\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0221\x03\x02\x02\x02"+
		"\u0220\u0222\x05\\/\x02\u0221\u0220\x03\x02\x02\x02\u0221\u0222\x03\x02"+
		"\x02\x02\u0222W\x03\x02\x02\x02\u0223\u0228\x05Z.\x02\u0224\u0225\x07"+
		"\x14\x02\x02\u0225\u0227\x05Z.\x02\u0226\u0224\x03\x02\x02\x02\u0227\u022A"+
		"\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02"+
		"\u0229Y\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B\u022C\x05\x0E"+
		"\b\x02\u022C\u022E\x05\x0E\b\x02\u022D\u022F\x05`1\x02\u022E\u022D\x03"+
		"\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F[\x03\x02\x02\x02\u0230"+
		"\u0232\x07\x14\x02\x02\u0231\u0230\x03\x02\x02\x02\u0231\u0232\x03\x02"+
		"\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0234\x07*\x02\x02\u0234\u0239"+
		"\x05^0\x02\u0235\u0236\x07\x14\x02\x02\u0236\u0238\x05^0\x02\u0237\u0235"+
		"\x03\x02\x02\x02\u0238\u023B\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02"+
		"\u0239\u023A\x03\x02\x02\x02\u023A\u023C\x03\x02\x02\x02\u023B\u0239\x03"+
		"\x02\x02\x02\u023C\u023E\x07+\x02\x02\u023D\u023F\x05\x0E\b\x02\u023E"+
		"\u023D\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F]\x03\x02\x02"+
		"\x02\u0240\u0241\x07(\x02\x02\u0241\u0242\x05\x0E\b\x02\u0242\u0243\x07"+
		")\x02\x02\u0243\u0246\x03\x02\x02\x02\u0244\u0246\x05\x0E\b\x02\u0245"+
		"\u0240\x03\x02\x02\x02\u0245\u0244\x03\x02\x02\x02\u0246\u0247\x03\x02"+
		"\x02\x02\u0247\u0248\x07\x15\x02\x02\u0248\u024A\x05\x0E\b\x02\u0249\u024B"+
		"\x05\x0E\b\x02\u024A\u0249\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02"+
		"\u024B\u024D\x03\x02\x02\x02\u024C\u024E\x05`1\x02\u024D\u024C\x03\x02"+
		"\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E_\x03\x02\x02\x02\u024F\u0250"+
		"\x07*\x02\x02\u0250\u0255\x05b2\x02\u0251\u0252\x07\x14\x02\x02\u0252"+
		"\u0254\x05b2\x02\u0253\u0251\x03\x02\x02\x02\u0254\u0257\x03\x02\x02\x02"+
		"\u0255\u0253\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0258\x03"+
		"\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0258\u0259\x07+\x02\x02\u0259"+
		"a\x03\x02\x02\x02\u025A\u025C\x05\x0E\b\x02\u025B\u025D\x05<\x1F\x02\u025C"+
		"\u025B\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025Dc\x03\x02\x02"+
		"\x02\u025E\u0260\x05f4\x02\u025F\u0261\x05v<\x02\u0260\u025F\x03\x02\x02"+
		"\x02\u0260\u0261\x03\x02\x02\x02\u0261e\x03\x02\x02\x02\u0262\u0263\x05"+
		"N(\x02\u0263g\x03\x02\x02\x02\u0264\u0265\x05<\x1F\x02\u0265\u0266\x07"+
		"\x14\x02\x02\u0266\u0267\x05<\x1F\x02\u0267i\x03\x02\x02\x02\u0268\u026A"+
		"\x05v<\x02\u0269\u0268\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A"+
		"\u026E\x03\x02\x02\x02\u026B\u026D\x05d3\x02\u026C\u026B\x03\x02\x02\x02"+
		"\u026D\u0270\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F\x03"+
		"\x02\x02\x02\u026Fk\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0271"+
		"\u0272\x05j6\x02\u0272\u0273\x07\x02\x02\x03\u0273m\x03\x02\x02\x02\u0274"+
		"\u0275\b8\x01\x02\u0275\u0276\x07&\x02\x02\u0276\u0277\x05n8\x02\u0277"+
		"\u0278\x07\'\x02\x02\u0278\u027B\x03\x02\x02\x02\u0279\u027B\x05p9\x02"+
		"\u027A\u0274\x03\x02\x02\x02\u027A\u0279\x03\x02\x02\x02\u027B\u0284\x03"+
		"\x02\x02\x02\u027C\u027D\f\x05\x02\x02\u027D\u027E\x07#\x02\x02\u027E"+
		"\u0283\x05n8\x06\u027F\u0280\f\x04\x02\x02\u0280\u0281\x07$\x02\x02\u0281"+
		"\u0283\x05n8\x05\u0282\u027C\x03\x02\x02\x02\u0282\u027F\x03\x02\x02\x02"+
		"\u0283\u0286\x03\x02\x02\x02\u0284\u0282\x03\x02\x02\x02\u0284\u0285\x03"+
		"\x02\x02\x02\u0285o\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02\u0287"+
		"\u0288\x05<\x1F\x02\u0288\u0289\x05r:\x02\u0289\u028A\x05<\x1F\x02\u028A"+
		"q\x03\x02\x02\x02\u028B\u028C\t\b\x02\x02\u028Cs\x03\x02\x02\x02\u028D"+
		"\u028E\x05<\x1F\x02\u028E\u028F\x07%\x02\x02\u028F\u0290\x05<\x1F\x02"+
		"\u0290\u0291\x07\x13\x02\x02\u0291u\x03\x02\x02\x02\u0292\u0294\x05x="+
		"\x02\u0293\u0292\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0293"+
		"\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296w\x03\x02\x02\x02\u0297"+
		"\u029A\x05n8\x02\u0298\u029A\x05\x82B\x02\u0299\u0297\x03\x02\x02\x02"+
		"\u0299\u0298\x03\x02\x02\x02\u029Ay\x03\x02\x02\x02\u029B\u029C\x05J&"+
		"\x02\u029C\u029D\x07\x13\x02\x02\u029D\u02A0\x03\x02\x02\x02\u029E\u02A0"+
		"\x05t;\x02\u029F\u029B\x03\x02\x02\x02\u029F\u029E\x03\x02\x02\x02\u02A0"+
		"{\x03\x02\x02\x02\u02A1\u02A3\x07*\x02\x02\u02A2\u02A1\x03\x02\x02\x02"+
		"\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A5\x03\x02\x02\x02\u02A4\u02A6\x05"+
		"z>\x02\u02A5\u02A4\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A5"+
		"\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02AA\x03\x02\x02\x02"+
		"\u02A9\u02AB\x07+\x02\x02\u02AA\u02A9\x03\x02\x02\x02\u02AA\u02AB\x03"+
		"\x02\x02\x02\u02AB}\x03\x02\x02\x02\u02AC\u02AF\x05v<\x02\u02AD\u02AF"+
		"\x05|?\x02\u02AE\u02AC\x03\x02\x02\x02\u02AE\u02AD\x03\x02\x02\x02\u02AF"+
		"\x7F\x03\x02\x02\x02\u02B0\u02B1\bA\x01\x02\u02B1\u02B2\x07&\x02\x02\u02B2"+
		"\u02B3\x05\x80A\x02\u02B3\u02B4\x07\'\x02\x02\u02B4\u02B9\x03\x02\x02"+
		"\x02\u02B5\u02B6\x072\x02\x02\u02B6\u02B9\x05\x80A\x04\u02B7\u02B9\x05"+
		"@!\x02\u02B8\u02B0\x03\x02\x02\x02\u02B8\u02B5\x03\x02\x02\x02\u02B8\u02B7"+
		"\x03\x02\x02\x02\u02B9\u02BF\x03\x02\x02\x02\u02BA\u02BB\f\x05\x02\x02"+
		"\u02BB\u02BC\x072\x02\x02\u02BC\u02BE\x05\x80A\x06\u02BD\u02BA\x03\x02"+
		"\x02\x02\u02BE\u02C1\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02BF"+
		"\u02C0\x03\x02\x02\x02\u02C0\x81\x03\x02\x02\x02\u02C1\u02BF\x03\x02\x02"+
		"\x02\u02C2\u02C3\x05\x0E\b\x02\u02C3\u02C4\x07&\x02\x02\u02C4\u02C5\x05"+
		"j6\x02\u02C5\u02C6\x07\'\x02\x02\u02C6\x83\x03\x02\x02\x02\u02C7\u02C8"+
		"\x05\x0E\b\x02\u02C8\u02C9\x07*\x02\x02\u02C9\u02CA\x05\x88E\x02\u02CA"+
		"\u02CB\x07+\x02\x02\u02CB\x85\x03\x02\x02\x02\u02CC\u02CD\x05\x0E\b\x02"+
		"\u02CD\u02CE\x07*\x02\x02\u02CE\u02CF\x05\x88E\x02\u02CF\u02D0\x07+\x02"+
		"\x02\u02D0\u02D1\x07\x02\x02\x03\u02D1\x87\x03\x02\x02\x02\u02D2\u02D4"+
		"\x05*\x16\x02\u02D3\u02D2\x03\x02\x02\x02\u02D4\u02D7\x03\x02\x02\x02"+
		"\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6\x89\x03"+
		"\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D8\u02DA\x05*\x16\x02\u02D9"+
		"\u02D8\x03\x02\x02\x02\u02DA\u02DD\x03\x02\x02\x02\u02DB\u02D9\x03\x02"+
		"\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DE\x03\x02\x02\x02\u02DD"+
		"\u02DB\x03\x02\x02\x02\u02DE\u02DF\x07\x02\x02\x03\u02DF\x8B\x03\x02\x02"+
		"\x02\u02E0\u02E2\x05\x8EH\x02\u02E1\u02E0\x03\x02\x02\x02\u02E2\u02E5"+
		"\x03\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02"+
		"\u02E4\u02E9\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E6\u02E8\x05"+
		"\f\x07\x02\u02E7\u02E6\x03\x02\x02\x02\u02E8\u02EB\x03\x02\x02\x02\u02E9"+
		"\u02E7\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02EC\x03\x02"+
		"\x02\x02\u02EB\u02E9\x03\x02\x02\x02\u02EC\u02ED\x07\x02\x02\x03\u02ED"+
		"\x8D\x03\x02\x02\x02\u02EE\u02F0\x05\n\x06\x02\u02EF\u02EE\x03\x02\x02"+
		"\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2"+
		"\x05\x0E\b\x02\u02F2\u02F5\x05\x0E\b\x02\u02F3\u02F4\x07\x05\x02\x02\u02F4"+
		"\u02F6\x05\x0E\b\x02\u02F5\u02F3\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02"+
		"\x02\u02F6\u02FA\x03\x02\x02\x02\u02F7\u02F9\x050\x19\x02\u02F8\u02F7"+
		"\x03\x02\x02\x02\u02F9\u02FC\x03\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02"+
		"\u02FA\u02FB\x03\x02\x02\x02\u02FB\u02FD\x03\x02\x02\x02\u02FC\u02FA\x03"+
		"\x02\x02\x02\u02FD\u02FE\x07\x13\x02\x02\u02FE\x8F\x03\x02\x02\x02\u02FF"+
		"\u0301\x05\x92J\x02\u0300\u02FF\x03\x02\x02\x02\u0301\u0304\x03\x02\x02"+
		"\x02\u0302\u0300\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0308"+
		"\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02\u0305\u0307\x05\f\x07\x02"+
		"\u0306\u0305\x03\x02\x02\x02\u0307\u030A\x03\x02\x02\x02\u0308\u0306\x03"+
		"\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030B\x03\x02\x02\x02\u030A"+
		"\u0308\x03\x02\x02\x02\u030B\u030C\x07\x02\x02\x03\u030C\x91\x03\x02\x02"+
		"\x02\u030D\u030F\x05\n\x06\x02\u030E\u030D\x03\x02\x02\x02\u030E\u030F"+
		"\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02\u0310\u0311\x07\v\x02\x02"+
		"\u0311\u0312\x05R*\x02\u0312\u0313\x07\x13\x02\x02\u0313\x93\x03\x02\x02"+
		"\x02\u0314\u0316\x05\x96L\x02\u0315\u0314\x03\x02\x02\x02\u0316\u0319"+
		"\x03\x02\x02\x02\u0317\u0315\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02"+
		"\u0318\u031D\x03\x02\x02\x02\u0319\u0317\x03\x02\x02\x02\u031A\u031C\x05"+
		"\f\x07\x02\u031B\u031A\x03\x02\x02\x02\u031C\u031F\x03\x02\x02\x02\u031D"+
		"\u031B\x03\x02\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E\u0320\x03\x02"+
		"\x02\x02\u031F\u031D\x03\x02\x02\x02\u0320\u0321\x07\x02\x02\x03\u0321"+
		"\x95\x03\x02\x02\x02\u0322\u0324\x05\n\x06\x02\u0323\u0322\x03\x02\x02"+
		"\x02\u0323\u0324\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0326"+
		"\x07\v\x02\x02\u0326\u0327\x05*\x16\x02\u0327\u0328\x07\x13\x02\x02\u0328"+
		"\x97\x03\x02\x02\x02\u0329\u032B\x07(\x02\x02\u032A\u032C\x05<\x1F\x02"+
		"\u032B\u032A\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02\u032C\u0331\x03"+
		"\x02\x02\x02\u032D\u032E\x07\x14\x02\x02\u032E\u0330\x05<\x1F\x02\u032F"+
		"\u032D\x03\x02\x02\x02\u0330\u0333\x03\x02\x02\x02\u0331\u032F\x03\x02"+
		"\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332\u0334\x03\x02\x02\x02\u0333"+
		"\u0331\x03\x02\x02\x02\u0334\u0335\x07)\x02\x02\u0335\x99\x03\x02\x02"+
		"\x02\u0336\u0338\x07*\x02\x02\u0337\u0339\x05<\x1F\x02\u0338\u0337\x03"+
		"\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\u033E\x03\x02\x02\x02\u033A"+
		"\u033B\x07\x14\x02\x02\u033B\u033D\x05<\x1F\x02\u033C\u033A\x03\x02\x02"+
		"\x02\u033D\u0340\x03\x02\x02\x02\u033E\u033C\x03\x02\x02\x02\u033E\u033F"+
		"\x03\x02\x02\x02\u033F\u0341\x03\x02\x02\x02\u0340\u033E\x03\x02\x02\x02"+
		"\u0341\u0342\x07+\x02\x02\u0342\x9B\x03\x02\x02\x02\u0343\u0344\x07=\x02"+
		"\x02\u0344\x9D\x03\x02\x02\x02\u0345\u0347\x05\n\x06\x02\u0346\u0345\x03"+
		"\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348"+
		"\u0349\x07\f\x02\x02\u0349\u034D\x05\x0E\b\x02\u034A\u034C\x050\x19\x02"+
		"\u034B\u034A\x03\x02\x02\x02\u034C\u034F\x03\x02\x02\x02\u034D\u034B\x03"+
		"\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E\u0350\x03\x02\x02\x02\u034F"+
		"\u034D\x03\x02\x02\x02\u0350\u0351\x07\x13\x02\x02\u0351\x9F\x03\x02\x02"+
		"\x02q\xA3\xA7\xAA\xAE\xB4\xB6\xBB\xC0\xC5\xCB\xD1\xD5\xDB\xDE\xE7\xEE"+
		"\xF4\xF9\xFC\u0102\u010B\u010F\u0115\u011B\u0121\u0125\u0128\u012B\u0131"+
		"\u0137\u013A\u013F\u0144\u0148\u014D\u0154\u015C\u0163\u016E\u0171\u0174"+
		"\u0177\u017E\u0186\u018A\u018D\u0196\u0199\u019F\u01A8\u01B0\u01B8\u01C7"+
		"\u01CF\u01D8\u01DB\u01E1\u01EB\u01EF\u01F4\u01F9\u0204\u0207\u020D\u021B"+
		"\u021E\u0221\u0228\u022E\u0231\u0239\u023E\u0245\u024A\u024D\u0255\u025C"+
		"\u0260\u0269\u026E\u027A\u0282\u0284\u0295\u0299\u029F\u02A2\u02A7\u02AA"+
		"\u02AE\u02B8\u02BF\u02D5\u02DB\u02E3\u02E9\u02EF\u02F5\u02FA\u0302\u0308"+
		"\u030E\u0317\u031D\u0323\u032B\u0331\u0338\u033E\u0346\u034D";
	public static readonly _serializedATN: string = Utils.join(
		[
			YmlToBdlParser._serializedATNSegment0,
			YmlToBdlParser._serializedATNSegment1
		],
		""
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_expressionMarker; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterExpressionMarker) listener.enterExpressionMarker(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitExpressionMarker) listener.exitExpressionMarker(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitExpressionMarker) return visitor.visitExpressionMarker(this);
		else return visitor.visitChildren(this);
	}
}


export class CommentElementContext extends ParserRuleContext {
	public LINE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.LINE_COMMENT, 0); }
	public MULTILINE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.MULTILINE_COMMENT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlToBdlParser.WS);
		} else {
			return this.getToken(YmlToBdlParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_commentElement; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterCommentElement) listener.enterCommentElement(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitCommentElement) listener.exitCommentElement(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitCommentElement) return visitor.visitCommentElement(this);
		else return visitor.visitChildren(this);
	}
}


export class PreprocessingElementContext extends ParserRuleContext {
	public PREPROCESSING(): TerminalNode { return this.getToken(YmlToBdlParser.PREPROCESSING, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlToBdlParser.WS);
		} else {
			return this.getToken(YmlToBdlParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_preprocessingElement; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterPreprocessingElement) listener.enterPreprocessingElement(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitPreprocessingElement) listener.exitPreprocessingElement(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitPreprocessingElement) return visitor.visitPreprocessingElement(this);
		else return visitor.visitChildren(this);
	}
}


export class CommentContext extends ParserRuleContext {
	public commentElement(): CommentElementContext {
		return this.getRuleContext(0, CommentElementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_comment; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterComment) listener.enterComment(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitComment) listener.exitComment(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitComment) return visitor.visitComment(this);
		else return visitor.visitChildren(this);
	}
}


export class CommentBlockContext extends ParserRuleContext {
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	public preprocessingElement(): PreprocessingElementContext[];
	public preprocessingElement(i: number): PreprocessingElementContext;
	public preprocessingElement(i?: number): PreprocessingElementContext | PreprocessingElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PreprocessingElementContext);
		} else {
			return this.getRuleContext(i, PreprocessingElementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_commentBlock; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterCommentBlock) listener.enterCommentBlock(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitCommentBlock) listener.exitCommentBlock(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitCommentBlock) return visitor.visitCommentBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class FreeTextContext extends ParserRuleContext {
	public EOF(): TerminalNode[];
	public EOF(i: number): TerminalNode;
	public EOF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlToBdlParser.EOF);
		} else {
			return this.getToken(YmlToBdlParser.EOF, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_freeText; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterFreeText) listener.enterFreeText(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitFreeText) listener.exitFreeText(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitFreeText) return visitor.visitFreeText(this);
		else return visitor.visitChildren(this);
	}
}


export class YmlIdContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlToBdlParser.ID);
		} else {
			return this.getToken(YmlToBdlParser.ID, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YmlToBdlParser.COLON);
		} else {
			return this.getToken(YmlToBdlParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_ymlId; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterYmlId) listener.enterYmlId(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitYmlId) listener.exitYmlId(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitYmlId) return visitor.visitYmlId(this);
		else return visitor.visitChildren(this);
	}
}


export class KaoFileContext extends ParserRuleContext {
	public _entities: YmlEntityContext;
	public _finalFreeText: FreeTextContext;
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
	public freeText(): FreeTextContext | undefined {
		return this.tryGetRuleContext(0, FreeTextContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_kaoFile; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterKaoFile) listener.enterKaoFile(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitKaoFile) listener.exitKaoFile(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitKaoFile) return visitor.visitKaoFile(this);
		else return visitor.visitChildren(this);
	}
}


export class YclassFileContext extends ParserRuleContext {
	public _restFreeText: FreeTextContext;
	public classDeclaration(): ClassDeclarationContext {
		return this.getRuleContext(0, ClassDeclarationContext);
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.EOF, 0); }
	public freeText(): FreeTextContext | undefined {
		return this.tryGetRuleContext(0, FreeTextContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_yclassFile; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterYclassFile) listener.enterYclassFile(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitYclassFile) listener.exitYclassFile(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitYclassFile) return visitor.visitYclassFile(this);
		else return visitor.visitChildren(this);
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
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.SEMICOLON, 0); }
	public yenum(): YenumContext | undefined {
		return this.tryGetRuleContext(0, YenumContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_ymlEntity; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterYmlEntity) listener.enterYmlEntity(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitYmlEntity) listener.exitYmlEntity(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitYmlEntity) return visitor.visitYmlEntity(this);
		else return visitor.visitChildren(this);
	}
}


export class YenumContext extends ParserRuleContext {
	public _yid: YmlIdContext;
	public _beforeCommaComment: CommentBlockContext;
	public _beforeCloseBraceComment: CommentBlockContext;
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
	public commentBlock(): CommentBlockContext[];
	public commentBlock(i: number): CommentBlockContext;
	public commentBlock(i?: number): CommentBlockContext | CommentBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentBlockContext);
		} else {
			return this.getRuleContext(i, CommentBlockContext);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_yenum; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterYenum) listener.enterYenum(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitYenum) listener.exitYenum(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitYenum) return visitor.visitYenum(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_enumElement; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterEnumElement) listener.enterEnumElement(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitEnumElement) listener.exitEnumElement(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitEnumElement) return visitor.visitEnumElement(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public _beforeInterfaceComment: CommentBlockContext;
	public _classOption: FieldContext;
	public _beforeClassPropertyComment: CommentBlockContext;
	public _endInterfaceComment: CommentBlockContext;
	public _intermediateFreeText: FreeTextContext;
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
	public memberDeclaration(): MemberDeclarationContext[];
	public memberDeclaration(i: number): MemberDeclarationContext;
	public memberDeclaration(i?: number): MemberDeclarationContext | MemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberDeclarationContext);
		} else {
			return this.getRuleContext(i, MemberDeclarationContext);
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
	public commentBlock(): CommentBlockContext[];
	public commentBlock(i: number): CommentBlockContext;
	public commentBlock(i?: number): CommentBlockContext | CommentBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentBlockContext);
		} else {
			return this.getRuleContext(i, CommentBlockContext);
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
	public freeText(): FreeTextContext[];
	public freeText(i: number): FreeTextContext;
	public freeText(i?: number): FreeTextContext | FreeTextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FreeTextContext);
		} else {
			return this.getRuleContext(i, FreeTextContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_classDeclaration; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterClassDeclaration) listener.enterClassDeclaration(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitClassDeclaration) listener.exitClassDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) return visitor.visitClassDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassImplementationContext extends ParserRuleContext {
	public _preImplementationComment: CommentBlockContext;
	public _className: YmlIdContext;
	public _overrideBlock: OverrideContext;
	public _attributes: FieldContext;
	public _preEndSemiColonComment: CommentBlockContext;
	public IMPLEMENTATION(): TerminalNode { return this.getToken(YmlToBdlParser.IMPLEMENTATION, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public commentBlock(): CommentBlockContext[];
	public commentBlock(i: number): CommentBlockContext;
	public commentBlock(i?: number): CommentBlockContext | CommentBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentBlockContext);
		} else {
			return this.getRuleContext(i, CommentBlockContext);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_classImplementation; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterClassImplementation) listener.enterClassImplementation(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitClassImplementation) listener.exitClassImplementation(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitClassImplementation) return visitor.visitClassImplementation(this);
		else return visitor.visitChildren(this);
	}
}


export class OverrideContext extends ParserRuleContext {
	public OVERRIDE(): TerminalNode { return this.getToken(YmlToBdlParser.OVERRIDE, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
	public freeText(): FreeTextContext | undefined {
		return this.tryGetRuleContext(0, FreeTextContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_override; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterOverride) listener.enterOverride(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitOverride) listener.exitOverride(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitOverride) return visitor.visitOverride(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_classDeclarationIntro; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterClassDeclarationIntro) listener.enterClassDeclarationIntro(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitClassDeclarationIntro) listener.exitClassDeclarationIntro(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitClassDeclarationIntro) return visitor.visitClassDeclarationIntro(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_extendsBlock; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterExtendsBlock) listener.enterExtendsBlock(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitExtendsBlock) listener.exitExtendsBlock(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitExtendsBlock) return visitor.visitExtendsBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class ParentClassNameContext extends ParserRuleContext {
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_parentClassName; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterParentClassName) listener.enterParentClassName(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitParentClassName) listener.exitParentClassName(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitParentClassName) return visitor.visitParentClassName(this);
		else return visitor.visitChildren(this);
	}
}


export class MemberTypeContext extends ParserRuleContext {
	public ymlId(): YmlIdContext | undefined {
		return this.tryGetRuleContext(0, YmlIdContext);
	}
	public FIELD(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.FIELD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_memberType; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterMemberType) listener.enterMemberType(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitMemberType) listener.exitMemberType(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitMemberType) return visitor.visitMemberType(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_synonym; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterSynonym) listener.enterSynonym(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitSynonym) listener.exitSynonym(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitSynonym) return visitor.visitSynonym(this);
		else return visitor.visitChildren(this);
	}
}


export class MemberDeclarationContext extends ParserRuleContext {
	public _memberName: YmlIdContext;
	public _memberOption: FieldContext;
	public memberType(): MemberTypeContext {
		return this.getRuleContext(0, MemberTypeContext);
	}
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public commentBlock(): CommentBlockContext | undefined {
		return this.tryGetRuleContext(0, CommentBlockContext);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_memberDeclaration; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterMemberDeclaration) listener.enterMemberDeclaration(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitMemberDeclaration) listener.exitMemberDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitMemberDeclaration) return visitor.visitMemberDeclaration(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_path; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterPath) listener.enterPath(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitPath) listener.exitPath(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitPath) return visitor.visitPath(this);
		else return visitor.visitChildren(this);
	}
}


export class YmlIdOrPathContext extends ParserRuleContext {
	public ymlId(): YmlIdContext | undefined {
		return this.tryGetRuleContext(0, YmlIdContext);
	}
	public path(): PathContext | undefined {
		return this.tryGetRuleContext(0, PathContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_ymlIdOrPath; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterYmlIdOrPath) listener.enterYmlIdOrPath(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitYmlIdOrPath) listener.exitYmlIdOrPath(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitYmlIdOrPath) return visitor.visitYmlIdOrPath(this);
		else return visitor.visitChildren(this);
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
	public commentBlock(): CommentBlockContext | undefined {
		return this.tryGetRuleContext(0, CommentBlockContext);
	}
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_field; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterField) listener.enterField(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitField) listener.exitField(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitField) return visitor.visitField(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_classPropertiesBlock; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterClassPropertiesBlock) listener.enterClassPropertiesBlock(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitClassPropertiesBlock) listener.exitClassPropertiesBlock(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitClassPropertiesBlock) return visitor.visitClassPropertiesBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class DocumentationContext extends ParserRuleContext {
	public DOCUMENTATION(): TerminalNode { return this.getToken(YmlToBdlParser.DOCUMENTATION, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_documentation; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterDocumentation) listener.enterDocumentation(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitDocumentation) listener.exitDocumentation(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitDocumentation) return visitor.visitDocumentation(this);
		else return visitor.visitChildren(this);
	}
}


export class ValueOrConditionContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_valueOrCondition; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterValueOrCondition) listener.enterValueOrCondition(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitValueOrCondition) listener.exitValueOrCondition(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitValueOrCondition) return visitor.visitValueOrCondition(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_hashMapKeyValue; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterHashMapKeyValue) listener.enterHashMapKeyValue(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitHashMapKeyValue) listener.exitHashMapKeyValue(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitHashMapKeyValue) return visitor.visitHashMapKeyValue(this);
		else return visitor.visitChildren(this);
	}
}


export class HashMapValueContext extends ParserRuleContext {
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public combinedComparison(): CombinedComparisonContext | undefined {
		return this.tryGetRuleContext(0, CombinedComparisonContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_hashMapValue; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterHashMapValue) listener.enterHashMapValue(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitHashMapValue) listener.exitHashMapValue(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitHashMapValue) return visitor.visitHashMapValue(this);
		else return visitor.visitChildren(this);
	}
}


export class ValueContext extends ParserRuleContext {
	public granule(): GranuleContext | undefined {
		return this.tryGetRuleContext(0, GranuleContext);
	}
	public inlineDeclaration(): InlineDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InlineDeclarationContext);
	}
	public nonArithmeticValue(): NonArithmeticValueContext | undefined {
		return this.tryGetRuleContext(0, NonArithmeticValueContext);
	}
	public arithmeticExpression(): ArithmeticExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArithmeticExpressionContext);
	}
	public synonym(): SynonymContext | undefined {
		return this.tryGetRuleContext(0, SynonymContext);
	}
	public ifExprBlock(): IfExprBlockContext | undefined {
		return this.tryGetRuleContext(0, IfExprBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_value; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterValue) listener.enterValue(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitValue) listener.exitValue(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitValue) return visitor.visitValue(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_ifExprBlock; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterIfExprBlock) listener.enterIfExprBlock(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitIfExprBlock) listener.exitIfExprBlock(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitIfExprBlock) return visitor.visitIfExprBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class NonArithmeticValueContext extends ParserRuleContext {
	public list(): ListContext | undefined {
		return this.tryGetRuleContext(0, ListContext);
	}
	public listWithBrace(): ListWithBraceContext | undefined {
		return this.tryGetRuleContext(0, ListWithBraceContext);
	}
	public chainedCall(): ChainedCallContext | undefined {
		return this.tryGetRuleContext(0, ChainedCallContext);
	}
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.DOUBLE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.STRING, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.DATE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_nonArithmeticValue; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterNonArithmeticValue) listener.enterNonArithmeticValue(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitNonArithmeticValue) listener.exitNonArithmeticValue(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitNonArithmeticValue) return visitor.visitNonArithmeticValue(this);
		else return visitor.visitChildren(this);
	}
}


export class InstanciationVariableContext extends ParserRuleContext {
	public QUESTION_MARK(): TerminalNode { return this.getToken(YmlToBdlParser.QUESTION_MARK, 0); }
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_instanciationVariable; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstanciationVariable) listener.enterInstanciationVariable(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstanciationVariable) listener.exitInstanciationVariable(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitInstanciationVariable) return visitor.visitInstanciationVariable(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_expression; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterExpression) listener.enterExpression(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitExpression) listener.exitExpression(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_functionCall; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterFunctionCall) listener.enterFunctionCall(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitFunctionCall) listener.exitFunctionCall(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitFunctionCall) return visitor.visitFunctionCall(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionArgumentContext extends ParserRuleContext {
	public _argKey: Token;
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.COLON, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.ID, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_functionArgument; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterFunctionArgument) listener.enterFunctionArgument(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitFunctionArgument) listener.exitFunctionArgument(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitFunctionArgument) return visitor.visitFunctionArgument(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_chainedCall; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterChainedCall) listener.enterChainedCall(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitChainedCall) listener.exitChainedCall(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitChainedCall) return visitor.visitChainedCall(this);
		else return visitor.visitChildren(this);
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
	public commentBlock(): CommentBlockContext | undefined {
		return this.tryGetRuleContext(0, CommentBlockContext);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_inlineDeclaration; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInlineDeclaration) listener.enterInlineDeclaration(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInlineDeclaration) listener.exitInlineDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitInlineDeclaration) return visitor.visitInlineDeclaration(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_inlineOperation; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInlineOperation) listener.enterInlineOperation(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInlineOperation) listener.exitInlineOperation(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitInlineOperation) return visitor.visitInlineOperation(this);
		else return visitor.visitChildren(this);
	}
}


export class FieldValueContext extends ParserRuleContext {
	public field(): FieldContext | undefined {
		return this.tryGetRuleContext(0, FieldContext);
	}
	public granule(): GranuleContext | undefined {
		return this.tryGetRuleContext(0, GranuleContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_fieldValue; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterFieldValue) listener.enterFieldValue(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitFieldValue) listener.exitFieldValue(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitFieldValue) return visitor.visitFieldValue(this);
		else return visitor.visitChildren(this);
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public _memberOption: FieldContext;
	public methodIntro(): MethodIntroContext {
		return this.getRuleContext(0, MethodIntroContext);
	}
	public commentBlock(): CommentBlockContext | undefined {
		return this.tryGetRuleContext(0, CommentBlockContext);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_methodDeclaration; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterMethodDeclaration) listener.enterMethodDeclaration(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitMethodDeclaration) listener.exitMethodDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) return visitor.visitMethodDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class MethodIntroContext extends ParserRuleContext {
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public METHOD(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.METHOD, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.FUNCTION, 0); }
	public TEXT_METHOD(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.TEXT_METHOD, 0); }
	public ARGS(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.ARGS, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public variableBlockContent(): VariableBlockContentContext | undefined {
		return this.tryGetRuleContext(0, VariableBlockContentContext);
	}
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.CLOSE_BRACE, 0); }
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.OPEN_PAR, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_methodIntro; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterMethodIntro) listener.enterMethodIntro(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitMethodIntro) listener.exitMethodIntro(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitMethodIntro) return visitor.visitMethodIntro(this);
		else return visitor.visitChildren(this);
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public mandatoryArgs(): MandatoryArgsContext | undefined {
		return this.tryGetRuleContext(0, MandatoryArgsContext);
	}
	public optionalArgs(): OptionalArgsContext | undefined {
		return this.tryGetRuleContext(0, OptionalArgsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_argumentList; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterArgumentList) listener.enterArgumentList(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitArgumentList) listener.exitArgumentList(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitArgumentList) return visitor.visitArgumentList(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_mandatoryArgs; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterMandatoryArgs) listener.enterMandatoryArgs(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitMandatoryArgs) listener.exitMandatoryArgs(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitMandatoryArgs) return visitor.visitMandatoryArgs(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_mandatoryArgDecl; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterMandatoryArgDecl) listener.enterMandatoryArgDecl(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitMandatoryArgDecl) listener.exitMandatoryArgDecl(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitMandatoryArgDecl) return visitor.visitMandatoryArgDecl(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionalArgsContext extends ParserRuleContext {
	public _optionalArgDecl: OptionalArgDeclContext;
	public _optionalArguments: OptionalArgDeclContext[] = [];
	public _argSetName: YmlIdContext;
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
	public optionalArgDecl(): OptionalArgDeclContext[];
	public optionalArgDecl(i: number): OptionalArgDeclContext;
	public optionalArgDecl(i?: number): OptionalArgDeclContext | OptionalArgDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalArgDeclContext);
		} else {
			return this.getRuleContext(i, OptionalArgDeclContext);
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
	public ymlId(): YmlIdContext | undefined {
		return this.tryGetRuleContext(0, YmlIdContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_optionalArgs; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterOptionalArgs) listener.enterOptionalArgs(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitOptionalArgs) listener.exitOptionalArgs(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitOptionalArgs) return visitor.visitOptionalArgs(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_optionalArgDecl; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterOptionalArgDecl) listener.enterOptionalArgDecl(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitOptionalArgDecl) listener.exitOptionalArgDecl(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitOptionalArgDecl) return visitor.visitOptionalArgDecl(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_argOptionList; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterArgOptionList) listener.enterArgOptionList(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitArgOptionList) listener.exitArgOptionList(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitArgOptionList) return visitor.visitArgOptionList(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_argOptionBlock; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterArgOptionBlock) listener.enterArgOptionBlock(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitArgOptionBlock) listener.exitArgOptionBlock(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitArgOptionBlock) return visitor.visitArgOptionBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class Order1BlockContext extends ParserRuleContext {
	public instanciationCondition(): InstanciationConditionContext {
		return this.getRuleContext(0, InstanciationConditionContext);
	}
	public conditionBlock(): ConditionBlockContext | undefined {
		return this.tryGetRuleContext(0, ConditionBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_order1Block; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterOrder1Block) listener.enterOrder1Block(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitOrder1Block) listener.exitOrder1Block(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitOrder1Block) return visitor.visitOrder1Block(this);
		else return visitor.visitChildren(this);
	}
}


export class InstanciationConditionContext extends ParserRuleContext {
	public inlineOperation(): InlineOperationContext {
		return this.getRuleContext(0, InlineOperationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_instanciationCondition; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterInstanciationCondition) listener.enterInstanciationCondition(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitInstanciationCondition) listener.exitInstanciationCondition(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitInstanciationCondition) return visitor.visitInstanciationCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class ForEachInstanciationContext extends ParserRuleContext {
	public _variable: ValueContext;
	public _iteratedItem: ValueContext;
	public COMMA(): TerminalNode { return this.getToken(YmlToBdlParser.COMMA, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_forEachInstanciation; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterForEachInstanciation) listener.enterForEachInstanciation(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitForEachInstanciation) listener.exitForEachInstanciation(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitForEachInstanciation) return visitor.visitForEachInstanciation(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_order1FullCondition; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterOrder1FullCondition) listener.enterOrder1FullCondition(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitOrder1FullCondition) listener.exitOrder1FullCondition(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitOrder1FullCondition) return visitor.visitOrder1FullCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class ClosedOrder1FullConditionContext extends ParserRuleContext {
	public order1FullCondition(): Order1FullConditionContext {
		return this.getRuleContext(0, Order1FullConditionContext);
	}
	public EOF(): TerminalNode { return this.getToken(YmlToBdlParser.EOF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_closedOrder1FullCondition; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterClosedOrder1FullCondition) listener.enterClosedOrder1FullCondition(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitClosedOrder1FullCondition) listener.exitClosedOrder1FullCondition(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitClosedOrder1FullCondition) return visitor.visitClosedOrder1FullCondition(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_combinedComparison; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterCombinedComparison) listener.enterCombinedComparison(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitCombinedComparison) listener.exitCombinedComparison(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitCombinedComparison) return visitor.visitCombinedComparison(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_comparison; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterComparison) listener.enterComparison(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitComparison) listener.exitComparison(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitComparison) return visitor.visitComparison(this);
		else return visitor.visitChildren(this);
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public EQUAL_COMP(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.EQUAL_COMP, 0); }
	public NOT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.NOT_EQUALS, 0); }
	public LESS_OR_EQUAL(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.LESS_OR_EQUAL, 0); }
	public GREATE_OR_EQUAL(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.GREATE_OR_EQUAL, 0); }
	public STRICT_LESS(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.STRICT_LESS, 0); }
	public STRICT_GREAT(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.STRICT_GREAT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_comparisonOperator; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterComparisonOperator) listener.enterComparisonOperator(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitComparisonOperator) listener.exitComparisonOperator(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) return visitor.visitComparisonOperator(this);
		else return visitor.visitChildren(this);
	}
}


export class AffectationContext extends ParserRuleContext {
	public _leftHand: ValueContext;
	public _rightHand: ValueContext;
	public EQUAL_AFFECT(): TerminalNode { return this.getToken(YmlToBdlParser.EQUAL_AFFECT, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_affectation; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterAffectation) listener.enterAffectation(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitAffectation) listener.exitAffectation(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitAffectation) return visitor.visitAffectation(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_conditionBlock; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterConditionBlock) listener.enterConditionBlock(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitConditionBlock) listener.exitConditionBlock(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitConditionBlock) return visitor.visitConditionBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class Order0ConditionContext extends ParserRuleContext {
	public combinedComparison(): CombinedComparisonContext | undefined {
		return this.tryGetRuleContext(0, CombinedComparisonContext);
	}
	public existentialOperator(): ExistentialOperatorContext | undefined {
		return this.tryGetRuleContext(0, ExistentialOperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_order0Condition; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterOrder0Condition) listener.enterOrder0Condition(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitOrder0Condition) listener.exitOrder0Condition(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitOrder0Condition) return visitor.visitOrder0Condition(this);
		else return visitor.visitChildren(this);
	}
}


export class ActionContext extends ParserRuleContext {
	public chainedCall(): ChainedCallContext | undefined {
		return this.tryGetRuleContext(0, ChainedCallContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.SEMICOLON, 0); }
	public affectation(): AffectationContext | undefined {
		return this.tryGetRuleContext(0, AffectationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_action; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterAction) listener.enterAction(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitAction) listener.exitAction(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitAction) return visitor.visitAction(this);
		else return visitor.visitChildren(this);
	}
}


export class ActionBlockContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public action(): ActionContext[];
	public action(i: number): ActionContext;
	public action(i?: number): ActionContext | ActionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActionContext);
		} else {
			return this.getRuleContext(i, ActionContext);
		}
	}
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(YmlToBdlParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_actionBlock; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterActionBlock) listener.enterActionBlock(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitActionBlock) listener.exitActionBlock(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitActionBlock) return visitor.visitActionBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class CompoundBlockContext extends ParserRuleContext {
	public conditionBlock(): ConditionBlockContext | undefined {
		return this.tryGetRuleContext(0, ConditionBlockContext);
	}
	public actionBlock(): ActionBlockContext | undefined {
		return this.tryGetRuleContext(0, ActionBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_compoundBlock; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterCompoundBlock) listener.enterCompoundBlock(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitCompoundBlock) listener.exitCompoundBlock(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitCompoundBlock) return visitor.visitCompoundBlock(this);
		else return visitor.visitChildren(this);
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
	public nonArithmeticValue(): NonArithmeticValueContext | undefined {
		return this.tryGetRuleContext(0, NonArithmeticValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_arithmeticExpression; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterArithmeticExpression) listener.enterArithmeticExpression(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitArithmeticExpression) listener.exitArithmeticExpression(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitArithmeticExpression) return visitor.visitArithmeticExpression(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_existentialOperator; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterExistentialOperator) listener.enterExistentialOperator(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitExistentialOperator) listener.exitExistentialOperator(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitExistentialOperator) return visitor.visitExistentialOperator(this);
		else return visitor.visitChildren(this);
	}
}


export class VariableBlockContext extends ParserRuleContext {
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public variableBlockContent(): VariableBlockContentContext {
		return this.getRuleContext(0, VariableBlockContentContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_variableBlock; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterVariableBlock) listener.enterVariableBlock(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitVariableBlock) listener.exitVariableBlock(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitVariableBlock) return visitor.visitVariableBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class VariableBlockWithEOFContext extends ParserRuleContext {
	public ymlId(): YmlIdContext {
		return this.getRuleContext(0, YmlIdContext);
	}
	public OPEN_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
	public variableBlockContent(): VariableBlockContentContext {
		return this.getRuleContext(0, VariableBlockContentContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
	public EOF(): TerminalNode { return this.getToken(YmlToBdlParser.EOF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_variableBlockWithEOF; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterVariableBlockWithEOF) listener.enterVariableBlockWithEOF(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitVariableBlockWithEOF) listener.exitVariableBlockWithEOF(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitVariableBlockWithEOF) return visitor.visitVariableBlockWithEOF(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_variableBlockContent; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterVariableBlockContent) listener.enterVariableBlockContent(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitVariableBlockContent) listener.exitVariableBlockContent(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitVariableBlockContent) return visitor.visitVariableBlockContent(this);
		else return visitor.visitChildren(this);
	}
}


export class VariableBlockContentWithEOFContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(YmlToBdlParser.EOF, 0); }
	public memberDeclaration(): MemberDeclarationContext[];
	public memberDeclaration(i: number): MemberDeclarationContext;
	public memberDeclaration(i?: number): MemberDeclarationContext | MemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberDeclarationContext);
		} else {
			return this.getRuleContext(i, MemberDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_variableBlockContentWithEOF; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterVariableBlockContentWithEOF) listener.enterVariableBlockContentWithEOF(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitVariableBlockContentWithEOF) listener.exitVariableBlockContentWithEOF(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitVariableBlockContentWithEOF) return visitor.visitVariableBlockContentWithEOF(this);
		else return visitor.visitChildren(this);
	}
}


export class StaticDeclarationsFileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(YmlToBdlParser.EOF, 0); }
	public staticDeclaration(): StaticDeclarationContext[];
	public staticDeclaration(i: number): StaticDeclarationContext;
	public staticDeclaration(i?: number): StaticDeclarationContext | StaticDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StaticDeclarationContext);
		} else {
			return this.getRuleContext(i, StaticDeclarationContext);
		}
	}
	public freeText(): FreeTextContext[];
	public freeText(i: number): FreeTextContext;
	public freeText(i?: number): FreeTextContext | FreeTextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FreeTextContext);
		} else {
			return this.getRuleContext(i, FreeTextContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_staticDeclarationsFile; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterStaticDeclarationsFile) listener.enterStaticDeclarationsFile(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitStaticDeclarationsFile) listener.exitStaticDeclarationsFile(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitStaticDeclarationsFile) return visitor.visitStaticDeclarationsFile(this);
		else return visitor.visitChildren(this);
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
	public commentBlock(): CommentBlockContext | undefined {
		return this.tryGetRuleContext(0, CommentBlockContext);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_staticDeclaration; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterStaticDeclaration) listener.enterStaticDeclaration(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitStaticDeclaration) listener.exitStaticDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitStaticDeclaration) return visitor.visitStaticDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ExternalFunctionsFileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(YmlToBdlParser.EOF, 0); }
	public externDeclaration(): ExternDeclarationContext[];
	public externDeclaration(i: number): ExternDeclarationContext;
	public externDeclaration(i?: number): ExternDeclarationContext | ExternDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExternDeclarationContext);
		} else {
			return this.getRuleContext(i, ExternDeclarationContext);
		}
	}
	public freeText(): FreeTextContext[];
	public freeText(i: number): FreeTextContext;
	public freeText(i?: number): FreeTextContext | FreeTextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FreeTextContext);
		} else {
			return this.getRuleContext(i, FreeTextContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_externalFunctionsFile; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterExternalFunctionsFile) listener.enterExternalFunctionsFile(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitExternalFunctionsFile) listener.exitExternalFunctionsFile(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitExternalFunctionsFile) return visitor.visitExternalFunctionsFile(this);
		else return visitor.visitChildren(this);
	}
}


export class ExternDeclarationContext extends ParserRuleContext {
	public EXTERN(): TerminalNode { return this.getToken(YmlToBdlParser.EXTERN, 0); }
	public methodDeclaration(): MethodDeclarationContext {
		return this.getRuleContext(0, MethodDeclarationContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
	public commentBlock(): CommentBlockContext | undefined {
		return this.tryGetRuleContext(0, CommentBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_externDeclaration; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterExternDeclaration) listener.enterExternDeclaration(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitExternDeclaration) listener.exitExternDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitExternDeclaration) return visitor.visitExternDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ExternalDialogZoneFileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(YmlToBdlParser.EOF, 0); }
	public externDialogZone(): ExternDialogZoneContext[];
	public externDialogZone(i: number): ExternDialogZoneContext;
	public externDialogZone(i?: number): ExternDialogZoneContext | ExternDialogZoneContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExternDialogZoneContext);
		} else {
			return this.getRuleContext(i, ExternDialogZoneContext);
		}
	}
	public freeText(): FreeTextContext[];
	public freeText(i: number): FreeTextContext;
	public freeText(i?: number): FreeTextContext | FreeTextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FreeTextContext);
		} else {
			return this.getRuleContext(i, FreeTextContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_externalDialogZoneFile; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterExternalDialogZoneFile) listener.enterExternalDialogZoneFile(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitExternalDialogZoneFile) listener.exitExternalDialogZoneFile(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitExternalDialogZoneFile) return visitor.visitExternalDialogZoneFile(this);
		else return visitor.visitChildren(this);
	}
}


export class ExternDialogZoneContext extends ParserRuleContext {
	public EXTERN(): TerminalNode { return this.getToken(YmlToBdlParser.EXTERN, 0); }
	public memberDeclaration(): MemberDeclarationContext {
		return this.getRuleContext(0, MemberDeclarationContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
	public commentBlock(): CommentBlockContext | undefined {
		return this.tryGetRuleContext(0, CommentBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_externDialogZone; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterExternDialogZone) listener.enterExternDialogZone(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitExternDialogZone) listener.exitExternDialogZone(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitExternDialogZone) return visitor.visitExternDialogZone(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_list; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterList) listener.enterList(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitList) listener.exitList(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitList) return visitor.visitList(this);
		else return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_listWithBrace; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterListWithBrace) listener.enterListWithBrace(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitListWithBrace) listener.exitListWithBrace(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitListWithBrace) return visitor.visitListWithBrace(this);
		else return visitor.visitChildren(this);
	}
}


export class GranuleContext extends ParserRuleContext {
	public GRANULE(): TerminalNode { return this.getToken(YmlToBdlParser.GRANULE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_granule; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterGranule) listener.enterGranule(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitGranule) listener.exitGranule(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitGranule) return visitor.visitGranule(this);
		else return visitor.visitChildren(this);
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
	public commentBlock(): CommentBlockContext | undefined {
		return this.tryGetRuleContext(0, CommentBlockContext);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return YmlToBdlParser.RULE_complete; }
	@Override
	public enterRule(listener: YmlToBdlListener): void {
		if (listener.enterComplete) listener.enterComplete(this);
	}
	@Override
	public exitRule(listener: YmlToBdlListener): void {
		if (listener.exitComplete) listener.exitComplete(this);
	}
	@Override
	public accept<Result>(visitor: YmlToBdlVisitor<Result>): Result {
		if (visitor.visitComplete) return visitor.visitComplete(this);
		else return visitor.visitChildren(this);
	}
}


