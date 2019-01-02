"use strict";
// Generated from src/YmlToBdl.g4 by ANTLR 4.6-SNAPSHOT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const Decorators_1 = require("antlr4ts/Decorators");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Decorators_2 = require("antlr4ts/Decorators");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const RuleVersion_1 = require("antlr4ts/RuleVersion");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class YmlToBdlParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(YmlToBdlParser._ATN, this);
    }
    get vocabulary() {
        return YmlToBdlParser.VOCABULARY;
    }
    get grammarFileName() { return "YmlToBdl.g4"; }
    get ruleNames() { return YmlToBdlParser.ruleNames; }
    get serializedATN() { return YmlToBdlParser._serializedATN; }
    expressionMarker() {
        let _localctx = new ExpressionMarkerContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, YmlToBdlParser.RULE_expressionMarker);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 144;
                _la = this._input.LA(1);
                if (!(_la === YmlToBdlParser.DOT || _la === YmlToBdlParser.MULTIVALUED_EXPRESSION)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    preprocessingElement() {
        let _localctx = new PreprocessingElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, YmlToBdlParser.RULE_preprocessingElement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 147;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === YmlToBdlParser.WS) {
                    {
                        this.state = 146;
                        this.match(YmlToBdlParser.WS);
                    }
                }
                this.state = 149;
                this.match(YmlToBdlParser.PREPROCESSING);
                this.state = 151;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === YmlToBdlParser.WS) {
                    {
                        this.state = 150;
                        this.match(YmlToBdlParser.WS);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    freeText() {
        let _localctx = new FreeTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, YmlToBdlParser.RULE_freeText);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                this._errHandler.sync(this);
                _alt = 1 + 1;
                do {
                    switch (_alt) {
                        case 1 + 1:
                            {
                                {
                                    this.state = 153;
                                    this.matchWildcard();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 156;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                } while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 161;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1 + 1) {
                        {
                            {
                                this.state = 158;
                                _la = this._input.LA(1);
                                if (_la <= 0 || (_la === YmlToBdlParser.EOF)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                    }
                    this.state = 163;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    ymlId() {
        let _localctx = new YmlIdContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, YmlToBdlParser.RULE_ymlId);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 164;
                this.match(YmlToBdlParser.ID);
                this.state = 172;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 166;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 165;
                                            this.match(YmlToBdlParser.COLON);
                                        }
                                        break;
                                }
                                this.state = 168;
                                this.match(YmlToBdlParser.COLON);
                                this.state = 169;
                                this.match(YmlToBdlParser.ID);
                            }
                        }
                    }
                    this.state = 174;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    kaoFile() {
        let _localctx = new KaoFileContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, YmlToBdlParser.RULE_kaoFile);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 178;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 175;
                                _localctx._entities = this.ymlEntity();
                            }
                        }
                    }
                    this.state = 180;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                }
                this.state = 182;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.INTERFACE) | (1 << YmlToBdlParser.IMPLEMENTATION) | (1 << YmlToBdlParser.EXTENDS) | (1 << YmlToBdlParser.FUNCTION) | (1 << YmlToBdlParser.METHOD) | (1 << YmlToBdlParser.TEXT_METHOD) | (1 << YmlToBdlParser.FIELD) | (1 << YmlToBdlParser.CLASSPROPERTIES) | (1 << YmlToBdlParser.EXTERN) | (1 << YmlToBdlParser.COMPLETE) | (1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.OVERRIDE) | (1 << YmlToBdlParser.ARGS) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.THEN) | (1 << YmlToBdlParser.ELSE) | (1 << YmlToBdlParser.SEMICOLON) | (1 << YmlToBdlParser.COMMA) | (1 << YmlToBdlParser.COLON) | (1 << YmlToBdlParser.DOT) | (1 << YmlToBdlParser.MULTIVALUED_EXPRESSION) | (1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD) | (1 << YmlToBdlParser.INLINE_DECL_INTRO) | (1 << YmlToBdlParser.EQUAL_COMP) | (1 << YmlToBdlParser.NOT_EQUALS) | (1 << YmlToBdlParser.LESS_OR_EQUAL) | (1 << YmlToBdlParser.GREATE_OR_EQUAL) | (1 << YmlToBdlParser.STRICT_LESS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlToBdlParser.STRICT_GREAT - 32)) | (1 << (YmlToBdlParser.COND_AND - 32)) | (1 << (YmlToBdlParser.COND_OR - 32)) | (1 << (YmlToBdlParser.EQUAL_AFFECT - 32)) | (1 << (YmlToBdlParser.OPEN_PAR - 32)) | (1 << (YmlToBdlParser.CLOSE_PAR - 32)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 32)) | (1 << (YmlToBdlParser.CLOSE_BRACKET - 32)) | (1 << (YmlToBdlParser.OPEN_BRACE - 32)) | (1 << (YmlToBdlParser.CLOSE_BRACE - 32)) | (1 << (YmlToBdlParser.SINGLE_QUOTE - 32)) | (1 << (YmlToBdlParser.BACKSLASH - 32)) | (1 << (YmlToBdlParser.QUESTION_MARK - 32)) | (1 << (YmlToBdlParser.AT - 32)) | (1 << (YmlToBdlParser.OPEN_GRANULE - 32)) | (1 << (YmlToBdlParser.CLOSE_GRANULE - 32)) | (1 << (YmlToBdlParser.OPERATOR - 32)) | (1 << (YmlToBdlParser.DATE - 32)) | (1 << (YmlToBdlParser.STRING - 32)) | (1 << (YmlToBdlParser.DOCUMENTATION - 32)) | (1 << (YmlToBdlParser.WS - 32)) | (1 << (YmlToBdlParser.DOUBLE - 32)) | (1 << (YmlToBdlParser.INTEGER - 32)) | (1 << (YmlToBdlParser.ENUM - 32)) | (1 << (YmlToBdlParser.ID - 32)) | (1 << (YmlToBdlParser.LINE_COMMENT - 32)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 32)) | (1 << (YmlToBdlParser.GRANULE - 32)) | (1 << (YmlToBdlParser.PREPROCESSING - 32)))) !== 0)) {
                    {
                        this.state = 181;
                        _localctx._finalFreeText = this.freeText();
                    }
                }
                this.state = 184;
                this.match(YmlToBdlParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    ymlEntity() {
        let _localctx = new YmlEntityContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, YmlToBdlParser.RULE_ymlEntity);
        try {
            this.state = 193;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case YmlToBdlParser.INTERFACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 186;
                        this.classDeclaration();
                    }
                    break;
                case YmlToBdlParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 187;
                        this.staticDeclaration();
                    }
                    break;
                case YmlToBdlParser.COMPLETE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 188;
                        this.complete();
                    }
                    break;
                case YmlToBdlParser.FUNCTION:
                case YmlToBdlParser.METHOD:
                case YmlToBdlParser.TEXT_METHOD:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 189;
                        this.methodDeclaration();
                        this.state = 190;
                        this.match(YmlToBdlParser.SEMICOLON);
                    }
                    break;
                case YmlToBdlParser.ENUM:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 192;
                        this.yenum();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    yenum() {
        let _localctx = new YenumContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, YmlToBdlParser.RULE_yenum);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 195;
                this.match(YmlToBdlParser.ENUM);
                this.state = 196;
                _localctx._yid = this.ymlId();
                this.state = 197;
                this.match(YmlToBdlParser.OPEN_BRACE);
                this.state = 206;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 198;
                            this.enumElement();
                            this.state = 203;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === YmlToBdlParser.COMMA) {
                                {
                                    {
                                        this.state = 199;
                                        this.match(YmlToBdlParser.COMMA);
                                        this.state = 200;
                                        this.enumElement();
                                    }
                                }
                                this.state = 205;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 208;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === YmlToBdlParser.ID);
                this.state = 210;
                this.match(YmlToBdlParser.CLOSE_BRACE);
                this.state = 214;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0)) {
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
                this.state = 217;
                this.match(YmlToBdlParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    enumElement() {
        let _localctx = new EnumElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, YmlToBdlParser.RULE_enumElement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 219;
                _localctx._yid = this.ymlId();
                this.state = 223;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0)) {
                    {
                        {
                            this.state = 220;
                            _localctx._fields = this.field();
                        }
                    }
                    this.state = 225;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    classDeclaration() {
        let _localctx = new ClassDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, YmlToBdlParser.RULE_classDeclaration);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 226;
                this.classDeclarationIntro();
                this.state = 230;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0)) {
                    {
                        {
                            this.state = 227;
                            this.field();
                        }
                    }
                    this.state = 232;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 237;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FUNCTION) | (1 << YmlToBdlParser.METHOD) | (1 << YmlToBdlParser.TEXT_METHOD) | (1 << YmlToBdlParser.FIELD))) !== 0) || _la === YmlToBdlParser.ID) {
                    {
                        this.state = 235;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case YmlToBdlParser.FIELD:
                            case YmlToBdlParser.ID:
                                {
                                    this.state = 233;
                                    this.memberDeclaration();
                                }
                                break;
                            case YmlToBdlParser.FUNCTION:
                            case YmlToBdlParser.METHOD:
                            case YmlToBdlParser.TEXT_METHOD:
                                {
                                    this.state = 234;
                                    this.methodDeclaration();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 239;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 241;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === YmlToBdlParser.CLASSPROPERTIES) {
                    {
                        this.state = 240;
                        this.classPropertiesBlock();
                    }
                }
                this.state = 243;
                this.match(YmlToBdlParser.SEMICOLON);
                this.state = 247;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1 + 1) {
                        {
                            {
                                this.state = 244;
                                _localctx._intermediateFreeText = this.freeText();
                            }
                        }
                    }
                    this.state = 249;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                }
                this.state = 250;
                this.classImplementation();
                this.state = 251;
                this.match(YmlToBdlParser.SEMICOLON);
                this.state = 253;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                    case 1:
                        {
                            this.state = 252;
                            this.match(YmlToBdlParser.EOF);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    classImplementation() {
        let _localctx = new ClassImplementationContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, YmlToBdlParser.RULE_classImplementation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 255;
                this.match(YmlToBdlParser.IMPLEMENTATION);
                this.state = 256;
                _localctx._className = this.ymlId();
                this.state = 258;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === YmlToBdlParser.OVERRIDE) {
                    {
                        this.state = 257;
                        _localctx._overrideBlock = this.override();
                    }
                }
                this.state = 263;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0)) {
                    {
                        {
                            this.state = 260;
                            _localctx._attributes = this.field();
                        }
                    }
                    this.state = 265;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    override() {
        let _localctx = new OverrideContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, YmlToBdlParser.RULE_override);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 266;
                this.match(YmlToBdlParser.OVERRIDE);
                this.state = 267;
                this.match(YmlToBdlParser.OPEN_BRACE);
                this.state = 269;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                    case 1:
                        {
                            this.state = 268;
                            this.freeText();
                        }
                        break;
                }
                this.state = 271;
                this.match(YmlToBdlParser.CLOSE_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    classDeclarationIntro() {
        let _localctx = new ClassDeclarationIntroContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, YmlToBdlParser.RULE_classDeclarationIntro);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 273;
                this.match(YmlToBdlParser.INTERFACE);
                this.state = 274;
                _localctx._className = this.ymlId();
                this.state = 276;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === YmlToBdlParser.EXTENDS) {
                    {
                        this.state = 275;
                        this.extendsBlock();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    extendsBlock() {
        let _localctx = new ExtendsBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, YmlToBdlParser.RULE_extendsBlock);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 278;
                this.match(YmlToBdlParser.EXTENDS);
                this.state = 279;
                this.parentClassName();
                this.state = 284;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === YmlToBdlParser.COMMA) {
                    {
                        {
                            this.state = 280;
                            this.match(YmlToBdlParser.COMMA);
                            this.state = 281;
                            this.parentClassName();
                        }
                    }
                    this.state = 286;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    parentClassName() {
        let _localctx = new ParentClassNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, YmlToBdlParser.RULE_parentClassName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 287;
                this.ymlId();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    memberType() {
        let _localctx = new MemberTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, YmlToBdlParser.RULE_memberType);
        try {
            this.state = 291;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case YmlToBdlParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 289;
                        this.ymlId();
                    }
                    break;
                case YmlToBdlParser.FIELD:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 290;
                        this.match(YmlToBdlParser.FIELD);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    synonym() {
        let _localctx = new SynonymContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, YmlToBdlParser.RULE_synonym);
        let _la;
        try {
            this.state = 308;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 293;
                        this.match(YmlToBdlParser.SYNONYM);
                        this.state = 294;
                        this.listWithBrace();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 295;
                        this.match(YmlToBdlParser.SYNONYM);
                        this.state = 296;
                        this.match(YmlToBdlParser.OPEN_PAR);
                        this.state = 305;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.INLINE_DECL_INTRO))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlToBdlParser.OPEN_PAR - 36)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 36)) | (1 << (YmlToBdlParser.OPEN_BRACE - 36)) | (1 << (YmlToBdlParser.QUESTION_MARK - 36)) | (1 << (YmlToBdlParser.OPERATOR - 36)) | (1 << (YmlToBdlParser.DATE - 36)) | (1 << (YmlToBdlParser.STRING - 36)) | (1 << (YmlToBdlParser.DOUBLE - 36)) | (1 << (YmlToBdlParser.ID - 36)) | (1 << (YmlToBdlParser.GRANULE - 36)))) !== 0)) {
                            {
                                this.state = 297;
                                _localctx._value = this.value();
                                _localctx._synonymElements.push(_localctx._value);
                                this.state = 302;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === YmlToBdlParser.COMMA) {
                                    {
                                        {
                                            this.state = 298;
                                            this.match(YmlToBdlParser.COMMA);
                                            this.state = 299;
                                            _localctx._value = this.value();
                                            _localctx._synonymElements.push(_localctx._value);
                                        }
                                    }
                                    this.state = 304;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 307;
                        this.match(YmlToBdlParser.CLOSE_PAR);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    memberDeclaration() {
        let _localctx = new MemberDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, YmlToBdlParser.RULE_memberDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 310;
                this.memberType();
                this.state = 311;
                _localctx._memberName = this.ymlId();
                this.state = 315;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0)) {
                    {
                        {
                            this.state = 312;
                            _localctx._memberOption = this.field();
                        }
                    }
                    this.state = 317;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    path() {
        let _localctx = new PathContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, YmlToBdlParser.RULE_path);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 318;
                this.ymlId();
                this.state = 321;
                this._errHandler.sync(this);
                _alt = 1 + 1;
                do {
                    switch (_alt) {
                        case 1 + 1:
                            {
                                {
                                    this.state = 319;
                                    this.match(YmlToBdlParser.DOT);
                                    this.state = 320;
                                    this.ymlId();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 323;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                } while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    ymlIdOrPath() {
        let _localctx = new YmlIdOrPathContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, YmlToBdlParser.RULE_ymlIdOrPath);
        try {
            this.state = 327;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 325;
                        this.ymlId();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 326;
                        this.path();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    field() {
        let _localctx = new FieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, YmlToBdlParser.RULE_field);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 329;
                _localctx._fieldArrow = this._input.LT(1);
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0))) {
                    _localctx._fieldArrow = this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 330;
                _localctx._optionName = this.ymlIdOrPath();
                this.state = 339;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                    case 1:
                        {
                            this.state = 331;
                            _localctx._valueOrCondition = this.valueOrCondition();
                            _localctx._optionValues.push(_localctx._valueOrCondition);
                            this.state = 336;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 332;
                                            this.match(YmlToBdlParser.COMMA);
                                            this.state = 333;
                                            _localctx._valueOrCondition = this.valueOrCondition();
                                            _localctx._optionValues.push(_localctx._valueOrCondition);
                                        }
                                    }
                                }
                                this.state = 338;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                            }
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    classPropertiesBlock() {
        let _localctx = new ClassPropertiesBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, YmlToBdlParser.RULE_classPropertiesBlock);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 341;
                this.match(YmlToBdlParser.CLASSPROPERTIES);
                this.state = 345;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0)) {
                    {
                        {
                            this.state = 342;
                            _localctx._classOption = this.field();
                        }
                    }
                    this.state = 347;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    documentation() {
        let _localctx = new DocumentationContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, YmlToBdlParser.RULE_documentation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 348;
                this.match(YmlToBdlParser.DOCUMENTATION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    valueOrCondition() {
        let _localctx = new ValueOrConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, YmlToBdlParser.RULE_valueOrCondition);
        try {
            this.state = 354;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 350;
                        this.combinedComparison(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 351;
                        this.value();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 352;
                        this.hashMapKeyValue();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 353;
                        this.documentation();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    hashMapKeyValue() {
        let _localctx = new HashMapKeyValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, YmlToBdlParser.RULE_hashMapKeyValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 356;
                this.nonArithmeticValue();
                this.state = 357;
                this.match(YmlToBdlParser.COLON);
                this.state = 358;
                this.hashMapValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    hashMapValue() {
        let _localctx = new HashMapValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, YmlToBdlParser.RULE_hashMapValue);
        try {
            this.state = 362;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 360;
                        this.value();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 361;
                        this.combinedComparison(0);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    value() {
        let _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, YmlToBdlParser.RULE_value);
        try {
            this.state = 370;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 364;
                        this.granule();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 365;
                        this.inlineDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 366;
                        this.nonArithmeticValue();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 367;
                        this.arithmeticExpression(0);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 368;
                        this.synonym();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 369;
                        this.ifExprBlock();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    ifExprBlock() {
        let _localctx = new IfExprBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, YmlToBdlParser.RULE_ifExprBlock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 372;
                this.match(YmlToBdlParser.IF_EXPR);
                this.state = 373;
                this.match(YmlToBdlParser.OPEN_PAR);
                this.state = 374;
                this.combinedComparison(0);
                this.state = 375;
                this.match(YmlToBdlParser.CLOSE_PAR);
                this.state = 376;
                this.match(YmlToBdlParser.THEN);
                this.state = 377;
                _localctx._thenValue = this.value();
                this.state = 378;
                this.match(YmlToBdlParser.ELSE);
                this.state = 379;
                _localctx._elseValue = this.value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    nonArithmeticValue() {
        let _localctx = new NonArithmeticValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, YmlToBdlParser.RULE_nonArithmeticValue);
        let _la;
        try {
            this.state = 385;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case YmlToBdlParser.OPEN_BRACKET:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 381;
                        this.list();
                    }
                    break;
                case YmlToBdlParser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 382;
                        this.listWithBrace();
                    }
                    break;
                case YmlToBdlParser.QUESTION_MARK:
                case YmlToBdlParser.ID:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 383;
                        this.chainedCall();
                    }
                    break;
                case YmlToBdlParser.DATE:
                case YmlToBdlParser.STRING:
                case YmlToBdlParser.DOUBLE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 384;
                        _la = this._input.LA(1);
                        if (!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (YmlToBdlParser.DATE - 49)) | (1 << (YmlToBdlParser.STRING - 49)) | (1 << (YmlToBdlParser.DOUBLE - 49)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    instanciationVariable() {
        let _localctx = new InstanciationVariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, YmlToBdlParser.RULE_instanciationVariable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 387;
                this.match(YmlToBdlParser.QUESTION_MARK);
                this.state = 388;
                this.ymlId();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    expression() {
        let _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, YmlToBdlParser.RULE_expression);
        try {
            this.state = 393;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
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
                        this.functionCall();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 392;
                        this.instanciationVariable();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    functionCall() {
        let _localctx = new FunctionCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, YmlToBdlParser.RULE_functionCall);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 395;
                this.ymlId();
                this.state = 396;
                this.match(YmlToBdlParser.OPEN_PAR);
                this.state = 405;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.INLINE_DECL_INTRO))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlToBdlParser.OPEN_PAR - 36)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 36)) | (1 << (YmlToBdlParser.OPEN_BRACE - 36)) | (1 << (YmlToBdlParser.QUESTION_MARK - 36)) | (1 << (YmlToBdlParser.OPERATOR - 36)) | (1 << (YmlToBdlParser.DATE - 36)) | (1 << (YmlToBdlParser.STRING - 36)) | (1 << (YmlToBdlParser.DOUBLE - 36)) | (1 << (YmlToBdlParser.ID - 36)) | (1 << (YmlToBdlParser.GRANULE - 36)))) !== 0)) {
                    {
                        this.state = 397;
                        this.functionArgument();
                        this.state = 402;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === YmlToBdlParser.COMMA) {
                            {
                                {
                                    this.state = 398;
                                    this.match(YmlToBdlParser.COMMA);
                                    this.state = 399;
                                    this.functionArgument();
                                }
                            }
                            this.state = 404;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 407;
                this.match(YmlToBdlParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    functionArgument() {
        let _localctx = new FunctionArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, YmlToBdlParser.RULE_functionArgument);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 411;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
                    case 1:
                        {
                            this.state = 409;
                            _localctx._argKey = this.match(YmlToBdlParser.ID);
                            this.state = 410;
                            this.match(YmlToBdlParser.COLON);
                        }
                        break;
                }
                this.state = 413;
                this.value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    chainedCall() {
        let _localctx = new ChainedCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, YmlToBdlParser.RULE_chainedCall);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 415;
                this.expression();
                this.state = 421;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 416;
                                _localctx._marker = this.expressionMarker();
                                this.state = 417;
                                this.expression();
                            }
                        }
                    }
                    this.state = 423;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    inlineDeclaration() {
        let _localctx = new InlineDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, YmlToBdlParser.RULE_inlineDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 424;
                this.match(YmlToBdlParser.INLINE_DECL_INTRO);
                this.state = 425;
                _localctx._className = this.ymlId();
                this.state = 427;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === YmlToBdlParser.ID) {
                    {
                        this.state = 426;
                        _localctx._instanceName = this.ymlId();
                    }
                }
                this.state = 432;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0) || _la === YmlToBdlParser.GRANULE) {
                    {
                        {
                            this.state = 429;
                            this.fieldValue();
                        }
                    }
                    this.state = 434;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 435;
                this.match(YmlToBdlParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    inlineOperation() {
        let _localctx = new InlineOperationContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, YmlToBdlParser.RULE_inlineOperation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 437;
                _localctx._leftExpression = this.value();
                this.state = 438;
                _localctx._operator = this.ymlId();
                this.state = 439;
                _localctx._rightExpression = this.value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    fieldValue() {
        let _localctx = new FieldValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, YmlToBdlParser.RULE_fieldValue);
        try {
            this.state = 443;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case YmlToBdlParser.FIELD_INTRO:
                case YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO:
                case YmlToBdlParser.REMOVE_FIELD:
                case YmlToBdlParser.ADD_FIELD:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 441;
                        this.field();
                    }
                    break;
                case YmlToBdlParser.GRANULE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 442;
                        this.granule();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    methodDeclaration() {
        let _localctx = new MethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, YmlToBdlParser.RULE_methodDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 445;
                this.methodIntro();
                this.state = 449;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0)) {
                    {
                        {
                            this.state = 446;
                            _localctx._memberOption = this.field();
                        }
                    }
                    this.state = 451;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    methodIntro() {
        let _localctx = new MethodIntroContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, YmlToBdlParser.RULE_methodIntro);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 452;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FUNCTION) | (1 << YmlToBdlParser.METHOD) | (1 << YmlToBdlParser.TEXT_METHOD))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 453;
                this.ymlId();
                this.state = 463;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case YmlToBdlParser.ARGS:
                        {
                            this.state = 454;
                            this.match(YmlToBdlParser.ARGS);
                            this.state = 455;
                            this.match(YmlToBdlParser.OPEN_BRACE);
                            this.state = 456;
                            this.variableBlockContent();
                            this.state = 457;
                            this.match(YmlToBdlParser.CLOSE_BRACE);
                        }
                        break;
                    case YmlToBdlParser.OPEN_PAR:
                        {
                            this.state = 459;
                            this.match(YmlToBdlParser.OPEN_PAR);
                            this.state = 460;
                            this.argumentList();
                            this.state = 461;
                            this.match(YmlToBdlParser.CLOSE_PAR);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    argumentList() {
        let _localctx = new ArgumentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, YmlToBdlParser.RULE_argumentList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 466;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === YmlToBdlParser.ID) {
                    {
                        this.state = 465;
                        this.mandatoryArgs();
                    }
                }
                this.state = 469;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === YmlToBdlParser.COMMA || _la === YmlToBdlParser.OPEN_BRACE) {
                    {
                        this.state = 468;
                        this.optionalArgs();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    mandatoryArgs() {
        let _localctx = new MandatoryArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, YmlToBdlParser.RULE_mandatoryArgs);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 471;
                this.mandatoryArgDecl();
                this.state = 476;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 472;
                                this.match(YmlToBdlParser.COMMA);
                                this.state = 473;
                                this.mandatoryArgDecl();
                            }
                        }
                    }
                    this.state = 478;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    mandatoryArgDecl() {
        let _localctx = new MandatoryArgDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, YmlToBdlParser.RULE_mandatoryArgDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 479;
                _localctx._argType = this.ymlId();
                this.state = 480;
                _localctx._argName = this.ymlId();
                this.state = 482;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                    case 1:
                        {
                            this.state = 481;
                            this.argOptionList();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    optionalArgs() {
        let _localctx = new OptionalArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, YmlToBdlParser.RULE_optionalArgs);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 485;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === YmlToBdlParser.COMMA) {
                    {
                        this.state = 484;
                        this.match(YmlToBdlParser.COMMA);
                    }
                }
                this.state = 487;
                this.match(YmlToBdlParser.OPEN_BRACE);
                this.state = 488;
                _localctx._optionalArgDecl = this.optionalArgDecl();
                _localctx._optionalArguments.push(_localctx._optionalArgDecl);
                this.state = 493;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === YmlToBdlParser.COMMA) {
                    {
                        {
                            this.state = 489;
                            this.match(YmlToBdlParser.COMMA);
                            this.state = 490;
                            _localctx._optionalArgDecl = this.optionalArgDecl();
                            _localctx._optionalArguments.push(_localctx._optionalArgDecl);
                        }
                    }
                    this.state = 495;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 496;
                this.match(YmlToBdlParser.CLOSE_BRACE);
                this.state = 498;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === YmlToBdlParser.ID) {
                    {
                        this.state = 497;
                        _localctx._argSetName = this.ymlId();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    optionalArgDecl() {
        let _localctx = new OptionalArgDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, YmlToBdlParser.RULE_optionalArgDecl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 505;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case YmlToBdlParser.OPEN_BRACKET:
                        {
                            this.state = 500;
                            this.match(YmlToBdlParser.OPEN_BRACKET);
                            this.state = 501;
                            _localctx._optionalKeyName = this.ymlId();
                            this.state = 502;
                            this.match(YmlToBdlParser.CLOSE_BRACKET);
                        }
                        break;
                    case YmlToBdlParser.ID:
                        {
                            this.state = 504;
                            _localctx._mandatoryKeyName = this.ymlId();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 507;
                this.match(YmlToBdlParser.COLON);
                this.state = 508;
                _localctx._argType = this.ymlId();
                this.state = 510;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === YmlToBdlParser.ID) {
                    {
                        this.state = 509;
                        _localctx._argName = this.ymlId();
                    }
                }
                this.state = 513;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === YmlToBdlParser.OPEN_BRACE) {
                    {
                        this.state = 512;
                        this.argOptionList();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    argOptionList() {
        let _localctx = new ArgOptionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, YmlToBdlParser.RULE_argOptionList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 515;
                this.match(YmlToBdlParser.OPEN_BRACE);
                this.state = 516;
                _localctx._argOptionBlock = this.argOptionBlock();
                _localctx._arguments.push(_localctx._argOptionBlock);
                this.state = 521;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === YmlToBdlParser.COMMA) {
                    {
                        {
                            this.state = 517;
                            this.match(YmlToBdlParser.COMMA);
                            this.state = 518;
                            _localctx._argOptionBlock = this.argOptionBlock();
                            _localctx._arguments.push(_localctx._argOptionBlock);
                        }
                    }
                    this.state = 523;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 524;
                this.match(YmlToBdlParser.CLOSE_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    argOptionBlock() {
        let _localctx = new ArgOptionBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, YmlToBdlParser.RULE_argOptionBlock);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 526;
                _localctx._argOption = this.ymlId();
                this.state = 528;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.INLINE_DECL_INTRO))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlToBdlParser.OPEN_PAR - 36)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 36)) | (1 << (YmlToBdlParser.OPEN_BRACE - 36)) | (1 << (YmlToBdlParser.QUESTION_MARK - 36)) | (1 << (YmlToBdlParser.OPERATOR - 36)) | (1 << (YmlToBdlParser.DATE - 36)) | (1 << (YmlToBdlParser.STRING - 36)) | (1 << (YmlToBdlParser.DOUBLE - 36)) | (1 << (YmlToBdlParser.ID - 36)) | (1 << (YmlToBdlParser.GRANULE - 36)))) !== 0)) {
                    {
                        this.state = 527;
                        _localctx._optionValue = this.value();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    order1Block() {
        let _localctx = new Order1BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, YmlToBdlParser.RULE_order1Block);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 530;
                this.instanciationCondition();
                this.state = 532;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                    case 1:
                        {
                            this.state = 531;
                            this.conditionBlock();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    instanciationCondition() {
        let _localctx = new InstanciationConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, YmlToBdlParser.RULE_instanciationCondition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 534;
                this.inlineOperation();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    forEachInstanciation() {
        let _localctx = new ForEachInstanciationContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, YmlToBdlParser.RULE_forEachInstanciation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 536;
                _localctx._variable = this.value();
                this.state = 537;
                this.match(YmlToBdlParser.COMMA);
                this.state = 538;
                _localctx._iteratedItem = this.value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    order1FullCondition() {
        let _localctx = new Order1FullConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, YmlToBdlParser.RULE_order1FullCondition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 541;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
                    case 1:
                        {
                            this.state = 540;
                            this.conditionBlock();
                        }
                        break;
                }
                this.state = 546;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.INLINE_DECL_INTRO))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlToBdlParser.OPEN_PAR - 36)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 36)) | (1 << (YmlToBdlParser.OPEN_BRACE - 36)) | (1 << (YmlToBdlParser.QUESTION_MARK - 36)) | (1 << (YmlToBdlParser.OPERATOR - 36)) | (1 << (YmlToBdlParser.DATE - 36)) | (1 << (YmlToBdlParser.STRING - 36)) | (1 << (YmlToBdlParser.DOUBLE - 36)) | (1 << (YmlToBdlParser.ID - 36)) | (1 << (YmlToBdlParser.GRANULE - 36)))) !== 0)) {
                    {
                        {
                            this.state = 543;
                            this.order1Block();
                        }
                    }
                    this.state = 548;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    closedOrder1FullCondition() {
        let _localctx = new ClosedOrder1FullConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, YmlToBdlParser.RULE_closedOrder1FullCondition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 549;
                this.order1FullCondition();
                this.state = 550;
                this.match(YmlToBdlParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    combinedComparison(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new CombinedComparisonContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 100;
        this.enterRecursionRule(_localctx, 100, YmlToBdlParser.RULE_combinedComparison, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 558;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                    case 1:
                        {
                            this.state = 553;
                            this.match(YmlToBdlParser.OPEN_PAR);
                            this.state = 554;
                            this.combinedComparison(0);
                            this.state = 555;
                            this.match(YmlToBdlParser.CLOSE_PAR);
                        }
                        break;
                    case 2:
                        {
                            this.state = 557;
                            this.comparison();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 568;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 566;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new CombinedComparisonContext(_parentctx, _parentState);
                                        _localctx._leftCondition = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, YmlToBdlParser.RULE_combinedComparison);
                                        this.state = 560;
                                        if (!(this.precpred(this._ctx, 3)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        this.state = 561;
                                        this.match(YmlToBdlParser.COND_AND);
                                        this.state = 562;
                                        _localctx._rightCondition = this.combinedComparison(4);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new CombinedComparisonContext(_parentctx, _parentState);
                                        _localctx._leftCondition = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, YmlToBdlParser.RULE_combinedComparison);
                                        this.state = 563;
                                        if (!(this.precpred(this._ctx, 2)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        this.state = 564;
                                        this.match(YmlToBdlParser.COND_OR);
                                        this.state = 565;
                                        _localctx._rightCondition = this.combinedComparison(3);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 570;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    comparison() {
        let _localctx = new ComparisonContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, YmlToBdlParser.RULE_comparison);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 571;
                _localctx._leftValue = this.value();
                this.state = 572;
                this.comparisonOperator();
                this.state = 573;
                _localctx._rightValue = this.value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    comparisonOperator() {
        let _localctx = new ComparisonOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, YmlToBdlParser.RULE_comparisonOperator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 575;
                _la = this._input.LA(1);
                if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (YmlToBdlParser.EQUAL_COMP - 27)) | (1 << (YmlToBdlParser.NOT_EQUALS - 27)) | (1 << (YmlToBdlParser.LESS_OR_EQUAL - 27)) | (1 << (YmlToBdlParser.GREATE_OR_EQUAL - 27)) | (1 << (YmlToBdlParser.STRICT_LESS - 27)) | (1 << (YmlToBdlParser.STRICT_GREAT - 27)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    affectation() {
        let _localctx = new AffectationContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, YmlToBdlParser.RULE_affectation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 577;
                _localctx._leftHand = this.value();
                this.state = 578;
                this.match(YmlToBdlParser.EQUAL_AFFECT);
                this.state = 579;
                _localctx._rightHand = this.value();
                this.state = 580;
                this.match(YmlToBdlParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    conditionBlock() {
        let _localctx = new ConditionBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, YmlToBdlParser.RULE_conditionBlock);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 583;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 582;
                                    this.order0Condition();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 585;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    order0Condition() {
        let _localctx = new Order0ConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, YmlToBdlParser.RULE_order0Condition);
        try {
            this.state = 589;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 587;
                        this.combinedComparison(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 588;
                        this.existentialOperator();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    action() {
        let _localctx = new ActionContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, YmlToBdlParser.RULE_action);
        try {
            this.state = 595;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 591;
                        this.chainedCall();
                        this.state = 592;
                        this.match(YmlToBdlParser.SEMICOLON);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 594;
                        this.affectation();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    actionBlock() {
        let _localctx = new ActionBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, YmlToBdlParser.RULE_actionBlock);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 598;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
                    case 1:
                        {
                            this.state = 597;
                            this.match(YmlToBdlParser.OPEN_BRACE);
                        }
                        break;
                }
                this.state = 601;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 600;
                            this.action();
                        }
                    }
                    this.state = 603;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.INLINE_DECL_INTRO))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlToBdlParser.OPEN_PAR - 36)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 36)) | (1 << (YmlToBdlParser.OPEN_BRACE - 36)) | (1 << (YmlToBdlParser.QUESTION_MARK - 36)) | (1 << (YmlToBdlParser.OPERATOR - 36)) | (1 << (YmlToBdlParser.DATE - 36)) | (1 << (YmlToBdlParser.STRING - 36)) | (1 << (YmlToBdlParser.DOUBLE - 36)) | (1 << (YmlToBdlParser.ID - 36)) | (1 << (YmlToBdlParser.GRANULE - 36)))) !== 0));
                this.state = 606;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === YmlToBdlParser.CLOSE_BRACE) {
                    {
                        this.state = 605;
                        this.match(YmlToBdlParser.CLOSE_BRACE);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    compoundBlock() {
        let _localctx = new CompoundBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, YmlToBdlParser.RULE_compoundBlock);
        try {
            this.state = 610;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 608;
                        this.conditionBlock();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 609;
                        this.actionBlock();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    arithmeticExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ArithmeticExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 118;
        this.enterRecursionRule(_localctx, 118, YmlToBdlParser.RULE_arithmeticExpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 620;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case YmlToBdlParser.OPEN_PAR:
                        {
                            this.state = 613;
                            this.match(YmlToBdlParser.OPEN_PAR);
                            this.state = 614;
                            _localctx._parenthizedExpression = this.arithmeticExpression(0);
                            this.state = 615;
                            this.match(YmlToBdlParser.CLOSE_PAR);
                        }
                        break;
                    case YmlToBdlParser.OPERATOR:
                        {
                            this.state = 617;
                            _localctx._prefixedOperator = this.match(YmlToBdlParser.OPERATOR);
                            this.state = 618;
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
                            this.state = 619;
                            this.nonArithmeticValue();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 627;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ArithmeticExpressionContext(_parentctx, _parentState);
                                _localctx._leftExpression = _prevctx;
                                this.pushNewRecursionContext(_localctx, _startState, YmlToBdlParser.RULE_arithmeticExpression);
                                this.state = 622;
                                if (!(this.precpred(this._ctx, 3)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                this.state = 623;
                                _localctx._infixedOperator = this.match(YmlToBdlParser.OPERATOR);
                                this.state = 624;
                                _localctx._rightExpression = this.arithmeticExpression(4);
                            }
                        }
                    }
                    this.state = 629;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    existentialOperator() {
        let _localctx = new ExistentialOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, YmlToBdlParser.RULE_existentialOperator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 630;
                _localctx._operator = this.ymlId();
                this.state = 631;
                this.match(YmlToBdlParser.OPEN_PAR);
                this.state = 632;
                this.order1FullCondition();
                this.state = 633;
                this.match(YmlToBdlParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    variableBlock() {
        let _localctx = new VariableBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, YmlToBdlParser.RULE_variableBlock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 635;
                this.ymlId();
                this.state = 636;
                this.match(YmlToBdlParser.OPEN_BRACE);
                this.state = 637;
                this.variableBlockContent();
                this.state = 638;
                this.match(YmlToBdlParser.CLOSE_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    variableBlockWithEOF() {
        let _localctx = new VariableBlockWithEOFContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, YmlToBdlParser.RULE_variableBlockWithEOF);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 640;
                this.ymlId();
                this.state = 641;
                this.match(YmlToBdlParser.OPEN_BRACE);
                this.state = 642;
                this.variableBlockContent();
                this.state = 643;
                this.match(YmlToBdlParser.CLOSE_BRACE);
                this.state = 644;
                this.match(YmlToBdlParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    variableBlockContent() {
        let _localctx = new VariableBlockContentContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, YmlToBdlParser.RULE_variableBlockContent);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 649;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === YmlToBdlParser.FIELD || _la === YmlToBdlParser.ID) {
                    {
                        {
                            this.state = 646;
                            this.memberDeclaration();
                        }
                    }
                    this.state = 651;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    variableBlockContentWithEOF() {
        let _localctx = new VariableBlockContentWithEOFContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, YmlToBdlParser.RULE_variableBlockContentWithEOF);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 655;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === YmlToBdlParser.FIELD || _la === YmlToBdlParser.ID) {
                    {
                        {
                            this.state = 652;
                            this.memberDeclaration();
                        }
                    }
                    this.state = 657;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 658;
                this.match(YmlToBdlParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    staticDeclarationsFile() {
        let _localctx = new StaticDeclarationsFileContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, YmlToBdlParser.RULE_staticDeclarationsFile);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 663;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 660;
                                this.staticDeclaration();
                            }
                        }
                    }
                    this.state = 665;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                }
                this.state = 669;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.INTERFACE) | (1 << YmlToBdlParser.IMPLEMENTATION) | (1 << YmlToBdlParser.EXTENDS) | (1 << YmlToBdlParser.FUNCTION) | (1 << YmlToBdlParser.METHOD) | (1 << YmlToBdlParser.TEXT_METHOD) | (1 << YmlToBdlParser.FIELD) | (1 << YmlToBdlParser.CLASSPROPERTIES) | (1 << YmlToBdlParser.EXTERN) | (1 << YmlToBdlParser.COMPLETE) | (1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.OVERRIDE) | (1 << YmlToBdlParser.ARGS) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.THEN) | (1 << YmlToBdlParser.ELSE) | (1 << YmlToBdlParser.SEMICOLON) | (1 << YmlToBdlParser.COMMA) | (1 << YmlToBdlParser.COLON) | (1 << YmlToBdlParser.DOT) | (1 << YmlToBdlParser.MULTIVALUED_EXPRESSION) | (1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD) | (1 << YmlToBdlParser.INLINE_DECL_INTRO) | (1 << YmlToBdlParser.EQUAL_COMP) | (1 << YmlToBdlParser.NOT_EQUALS) | (1 << YmlToBdlParser.LESS_OR_EQUAL) | (1 << YmlToBdlParser.GREATE_OR_EQUAL) | (1 << YmlToBdlParser.STRICT_LESS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YmlToBdlParser.STRICT_GREAT - 32)) | (1 << (YmlToBdlParser.COND_AND - 32)) | (1 << (YmlToBdlParser.COND_OR - 32)) | (1 << (YmlToBdlParser.EQUAL_AFFECT - 32)) | (1 << (YmlToBdlParser.OPEN_PAR - 32)) | (1 << (YmlToBdlParser.CLOSE_PAR - 32)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 32)) | (1 << (YmlToBdlParser.CLOSE_BRACKET - 32)) | (1 << (YmlToBdlParser.OPEN_BRACE - 32)) | (1 << (YmlToBdlParser.CLOSE_BRACE - 32)) | (1 << (YmlToBdlParser.SINGLE_QUOTE - 32)) | (1 << (YmlToBdlParser.BACKSLASH - 32)) | (1 << (YmlToBdlParser.QUESTION_MARK - 32)) | (1 << (YmlToBdlParser.AT - 32)) | (1 << (YmlToBdlParser.OPEN_GRANULE - 32)) | (1 << (YmlToBdlParser.CLOSE_GRANULE - 32)) | (1 << (YmlToBdlParser.OPERATOR - 32)) | (1 << (YmlToBdlParser.DATE - 32)) | (1 << (YmlToBdlParser.STRING - 32)) | (1 << (YmlToBdlParser.DOCUMENTATION - 32)) | (1 << (YmlToBdlParser.WS - 32)) | (1 << (YmlToBdlParser.DOUBLE - 32)) | (1 << (YmlToBdlParser.INTEGER - 32)) | (1 << (YmlToBdlParser.ENUM - 32)) | (1 << (YmlToBdlParser.ID - 32)) | (1 << (YmlToBdlParser.LINE_COMMENT - 32)) | (1 << (YmlToBdlParser.MULTILINE_COMMENT - 32)) | (1 << (YmlToBdlParser.GRANULE - 32)) | (1 << (YmlToBdlParser.PREPROCESSING - 32)))) !== 0)) {
                    {
                        {
                            this.state = 666;
                            this.freeText();
                        }
                    }
                    this.state = 671;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 672;
                this.match(YmlToBdlParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    staticDeclaration() {
        let _localctx = new StaticDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, YmlToBdlParser.RULE_staticDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 674;
                _localctx._declarationType = this.ymlId();
                this.state = 675;
                _localctx._declarationName = this.ymlId();
                this.state = 678;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === YmlToBdlParser.EXTENDS) {
                    {
                        this.state = 676;
                        this.match(YmlToBdlParser.EXTENDS);
                        this.state = 677;
                        _localctx._extended = this.ymlId();
                    }
                }
                this.state = 683;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0)) {
                    {
                        {
                            this.state = 680;
                            _localctx._declarationOptions = this.field();
                        }
                    }
                    this.state = 685;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 686;
                this.match(YmlToBdlParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    externDeclaration() {
        let _localctx = new ExternDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, YmlToBdlParser.RULE_externDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 688;
                this.match(YmlToBdlParser.EXTERN);
                this.state = 691;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case YmlToBdlParser.FUNCTION:
                    case YmlToBdlParser.METHOD:
                    case YmlToBdlParser.TEXT_METHOD:
                        {
                            this.state = 689;
                            this.methodDeclaration();
                        }
                        break;
                    case YmlToBdlParser.FIELD:
                    case YmlToBdlParser.ID:
                        {
                            this.state = 690;
                            this.memberDeclaration();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 693;
                this.match(YmlToBdlParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    list() {
        let _localctx = new ListContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, YmlToBdlParser.RULE_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 695;
                this.match(YmlToBdlParser.OPEN_BRACKET);
                this.state = 697;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.INLINE_DECL_INTRO))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlToBdlParser.OPEN_PAR - 36)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 36)) | (1 << (YmlToBdlParser.OPEN_BRACE - 36)) | (1 << (YmlToBdlParser.QUESTION_MARK - 36)) | (1 << (YmlToBdlParser.OPERATOR - 36)) | (1 << (YmlToBdlParser.DATE - 36)) | (1 << (YmlToBdlParser.STRING - 36)) | (1 << (YmlToBdlParser.DOUBLE - 36)) | (1 << (YmlToBdlParser.ID - 36)) | (1 << (YmlToBdlParser.GRANULE - 36)))) !== 0)) {
                    {
                        this.state = 696;
                        _localctx._value = this.value();
                        _localctx._elements.push(_localctx._value);
                    }
                }
                this.state = 703;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === YmlToBdlParser.COMMA) {
                    {
                        {
                            this.state = 699;
                            this.match(YmlToBdlParser.COMMA);
                            this.state = 700;
                            _localctx._value = this.value();
                            _localctx._elements.push(_localctx._value);
                        }
                    }
                    this.state = 705;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 706;
                this.match(YmlToBdlParser.CLOSE_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    listWithBrace() {
        let _localctx = new ListWithBraceContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, YmlToBdlParser.RULE_listWithBrace);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 708;
                this.match(YmlToBdlParser.OPEN_BRACE);
                this.state = 710;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.SYNONYM) | (1 << YmlToBdlParser.IF_EXPR) | (1 << YmlToBdlParser.INLINE_DECL_INTRO))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (YmlToBdlParser.OPEN_PAR - 36)) | (1 << (YmlToBdlParser.OPEN_BRACKET - 36)) | (1 << (YmlToBdlParser.OPEN_BRACE - 36)) | (1 << (YmlToBdlParser.QUESTION_MARK - 36)) | (1 << (YmlToBdlParser.OPERATOR - 36)) | (1 << (YmlToBdlParser.DATE - 36)) | (1 << (YmlToBdlParser.STRING - 36)) | (1 << (YmlToBdlParser.DOUBLE - 36)) | (1 << (YmlToBdlParser.ID - 36)) | (1 << (YmlToBdlParser.GRANULE - 36)))) !== 0)) {
                    {
                        this.state = 709;
                        _localctx._value = this.value();
                        _localctx._elements.push(_localctx._value);
                    }
                }
                this.state = 716;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === YmlToBdlParser.COMMA) {
                    {
                        {
                            this.state = 712;
                            this.match(YmlToBdlParser.COMMA);
                            this.state = 713;
                            _localctx._value = this.value();
                            _localctx._elements.push(_localctx._value);
                        }
                    }
                    this.state = 718;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 719;
                this.match(YmlToBdlParser.CLOSE_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    granule() {
        let _localctx = new GranuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, YmlToBdlParser.RULE_granule);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 721;
                this.match(YmlToBdlParser.GRANULE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    complete() {
        let _localctx = new CompleteContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, YmlToBdlParser.RULE_complete);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 723;
                this.match(YmlToBdlParser.COMPLETE);
                this.state = 724;
                _localctx._completedElemId = this.ymlId();
                this.state = 728;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YmlToBdlParser.FIELD_INTRO) | (1 << YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO) | (1 << YmlToBdlParser.REMOVE_FIELD) | (1 << YmlToBdlParser.ADD_FIELD))) !== 0)) {
                    {
                        {
                            this.state = 725;
                            _localctx._memberOption = this.field();
                        }
                    }
                    this.state = 730;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 731;
                this.match(YmlToBdlParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 50:
                return this.combinedComparison_sempred(_localctx, predIndex);
            case 59:
                return this.arithmeticExpression_sempred(_localctx, predIndex);
        }
        return true;
    }
    combinedComparison_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 3);
            case 1:
                return this.precpred(this._ctx, 2);
        }
        return true;
    }
    arithmeticExpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 3);
        }
        return true;
    }
    static get _ATN() {
        if (!YmlToBdlParser.__ATN) {
            YmlToBdlParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(YmlToBdlParser._serializedATN));
        }
        return YmlToBdlParser.__ATN;
    }
}
YmlToBdlParser.INTERFACE = 1;
YmlToBdlParser.IMPLEMENTATION = 2;
YmlToBdlParser.EXTENDS = 3;
YmlToBdlParser.FUNCTION = 4;
YmlToBdlParser.METHOD = 5;
YmlToBdlParser.TEXT_METHOD = 6;
YmlToBdlParser.FIELD = 7;
YmlToBdlParser.CLASSPROPERTIES = 8;
YmlToBdlParser.EXTERN = 9;
YmlToBdlParser.COMPLETE = 10;
YmlToBdlParser.SYNONYM = 11;
YmlToBdlParser.OVERRIDE = 12;
YmlToBdlParser.ARGS = 13;
YmlToBdlParser.IF_EXPR = 14;
YmlToBdlParser.THEN = 15;
YmlToBdlParser.ELSE = 16;
YmlToBdlParser.SEMICOLON = 17;
YmlToBdlParser.COMMA = 18;
YmlToBdlParser.COLON = 19;
YmlToBdlParser.DOT = 20;
YmlToBdlParser.MULTIVALUED_EXPRESSION = 21;
YmlToBdlParser.FIELD_INTRO = 22;
YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO = 23;
YmlToBdlParser.REMOVE_FIELD = 24;
YmlToBdlParser.ADD_FIELD = 25;
YmlToBdlParser.INLINE_DECL_INTRO = 26;
YmlToBdlParser.EQUAL_COMP = 27;
YmlToBdlParser.NOT_EQUALS = 28;
YmlToBdlParser.LESS_OR_EQUAL = 29;
YmlToBdlParser.GREATE_OR_EQUAL = 30;
YmlToBdlParser.STRICT_LESS = 31;
YmlToBdlParser.STRICT_GREAT = 32;
YmlToBdlParser.COND_AND = 33;
YmlToBdlParser.COND_OR = 34;
YmlToBdlParser.EQUAL_AFFECT = 35;
YmlToBdlParser.OPEN_PAR = 36;
YmlToBdlParser.CLOSE_PAR = 37;
YmlToBdlParser.OPEN_BRACKET = 38;
YmlToBdlParser.CLOSE_BRACKET = 39;
YmlToBdlParser.OPEN_BRACE = 40;
YmlToBdlParser.CLOSE_BRACE = 41;
YmlToBdlParser.SINGLE_QUOTE = 42;
YmlToBdlParser.BACKSLASH = 43;
YmlToBdlParser.QUESTION_MARK = 44;
YmlToBdlParser.AT = 45;
YmlToBdlParser.OPEN_GRANULE = 46;
YmlToBdlParser.CLOSE_GRANULE = 47;
YmlToBdlParser.OPERATOR = 48;
YmlToBdlParser.DATE = 49;
YmlToBdlParser.STRING = 50;
YmlToBdlParser.DOCUMENTATION = 51;
YmlToBdlParser.WS = 52;
YmlToBdlParser.DOUBLE = 53;
YmlToBdlParser.INTEGER = 54;
YmlToBdlParser.ENUM = 55;
YmlToBdlParser.ID = 56;
YmlToBdlParser.LINE_COMMENT = 57;
YmlToBdlParser.MULTILINE_COMMENT = 58;
YmlToBdlParser.GRANULE = 59;
YmlToBdlParser.PREPROCESSING = 60;
YmlToBdlParser.RULE_expressionMarker = 0;
YmlToBdlParser.RULE_preprocessingElement = 1;
YmlToBdlParser.RULE_freeText = 2;
YmlToBdlParser.RULE_ymlId = 3;
YmlToBdlParser.RULE_kaoFile = 4;
YmlToBdlParser.RULE_ymlEntity = 5;
YmlToBdlParser.RULE_yenum = 6;
YmlToBdlParser.RULE_enumElement = 7;
YmlToBdlParser.RULE_classDeclaration = 8;
YmlToBdlParser.RULE_classImplementation = 9;
YmlToBdlParser.RULE_override = 10;
YmlToBdlParser.RULE_classDeclarationIntro = 11;
YmlToBdlParser.RULE_extendsBlock = 12;
YmlToBdlParser.RULE_parentClassName = 13;
YmlToBdlParser.RULE_memberType = 14;
YmlToBdlParser.RULE_synonym = 15;
YmlToBdlParser.RULE_memberDeclaration = 16;
YmlToBdlParser.RULE_path = 17;
YmlToBdlParser.RULE_ymlIdOrPath = 18;
YmlToBdlParser.RULE_field = 19;
YmlToBdlParser.RULE_classPropertiesBlock = 20;
YmlToBdlParser.RULE_documentation = 21;
YmlToBdlParser.RULE_valueOrCondition = 22;
YmlToBdlParser.RULE_hashMapKeyValue = 23;
YmlToBdlParser.RULE_hashMapValue = 24;
YmlToBdlParser.RULE_value = 25;
YmlToBdlParser.RULE_ifExprBlock = 26;
YmlToBdlParser.RULE_nonArithmeticValue = 27;
YmlToBdlParser.RULE_instanciationVariable = 28;
YmlToBdlParser.RULE_expression = 29;
YmlToBdlParser.RULE_functionCall = 30;
YmlToBdlParser.RULE_functionArgument = 31;
YmlToBdlParser.RULE_chainedCall = 32;
YmlToBdlParser.RULE_inlineDeclaration = 33;
YmlToBdlParser.RULE_inlineOperation = 34;
YmlToBdlParser.RULE_fieldValue = 35;
YmlToBdlParser.RULE_methodDeclaration = 36;
YmlToBdlParser.RULE_methodIntro = 37;
YmlToBdlParser.RULE_argumentList = 38;
YmlToBdlParser.RULE_mandatoryArgs = 39;
YmlToBdlParser.RULE_mandatoryArgDecl = 40;
YmlToBdlParser.RULE_optionalArgs = 41;
YmlToBdlParser.RULE_optionalArgDecl = 42;
YmlToBdlParser.RULE_argOptionList = 43;
YmlToBdlParser.RULE_argOptionBlock = 44;
YmlToBdlParser.RULE_order1Block = 45;
YmlToBdlParser.RULE_instanciationCondition = 46;
YmlToBdlParser.RULE_forEachInstanciation = 47;
YmlToBdlParser.RULE_order1FullCondition = 48;
YmlToBdlParser.RULE_closedOrder1FullCondition = 49;
YmlToBdlParser.RULE_combinedComparison = 50;
YmlToBdlParser.RULE_comparison = 51;
YmlToBdlParser.RULE_comparisonOperator = 52;
YmlToBdlParser.RULE_affectation = 53;
YmlToBdlParser.RULE_conditionBlock = 54;
YmlToBdlParser.RULE_order0Condition = 55;
YmlToBdlParser.RULE_action = 56;
YmlToBdlParser.RULE_actionBlock = 57;
YmlToBdlParser.RULE_compoundBlock = 58;
YmlToBdlParser.RULE_arithmeticExpression = 59;
YmlToBdlParser.RULE_existentialOperator = 60;
YmlToBdlParser.RULE_variableBlock = 61;
YmlToBdlParser.RULE_variableBlockWithEOF = 62;
YmlToBdlParser.RULE_variableBlockContent = 63;
YmlToBdlParser.RULE_variableBlockContentWithEOF = 64;
YmlToBdlParser.RULE_staticDeclarationsFile = 65;
YmlToBdlParser.RULE_staticDeclaration = 66;
YmlToBdlParser.RULE_externDeclaration = 67;
YmlToBdlParser.RULE_list = 68;
YmlToBdlParser.RULE_listWithBrace = 69;
YmlToBdlParser.RULE_granule = 70;
YmlToBdlParser.RULE_complete = 71;
YmlToBdlParser.ruleNames = [
    "expressionMarker", "preprocessingElement", "freeText", "ymlId", "kaoFile",
    "ymlEntity", "yenum", "enumElement", "classDeclaration", "classImplementation",
    "override", "classDeclarationIntro", "extendsBlock", "parentClassName",
    "memberType", "synonym", "memberDeclaration", "path", "ymlIdOrPath", "field",
    "classPropertiesBlock", "documentation", "valueOrCondition", "hashMapKeyValue",
    "hashMapValue", "value", "ifExprBlock", "nonArithmeticValue", "instanciationVariable",
    "expression", "functionCall", "functionArgument", "chainedCall", "inlineDeclaration",
    "inlineOperation", "fieldValue", "methodDeclaration", "methodIntro", "argumentList",
    "mandatoryArgs", "mandatoryArgDecl", "optionalArgs", "optionalArgDecl",
    "argOptionList", "argOptionBlock", "order1Block", "instanciationCondition",
    "forEachInstanciation", "order1FullCondition", "closedOrder1FullCondition",
    "combinedComparison", "comparison", "comparisonOperator", "affectation",
    "conditionBlock", "order0Condition", "action", "actionBlock", "compoundBlock",
    "arithmeticExpression", "existentialOperator", "variableBlock", "variableBlockWithEOF",
    "variableBlockContent", "variableBlockContentWithEOF", "staticDeclarationsFile",
    "staticDeclaration", "externDeclaration", "list", "listWithBrace", "granule",
    "complete"
];
YmlToBdlParser._LITERAL_NAMES = [
    undefined, "'interface'", "'implementation'", "'extends'", "'function'",
    "'method'", "'textMethod'", "'field'", "'classProperties'", "'extern'",
    "'complete'", "'synonym'", "'override'", "'args'", "'ifExpr'", "'then'",
    "'else'", "';'", "','", "':'", "'.'", "'>>'", "'-->'", "'==>'", "'---'",
    "'+++'", "'->'", "'=='", "'!='", "'<='", "'>='", "'<'", "'>'", "'&&'",
    "'||'", "'='", "'('", "')'", "'['", "']'", "'{'", "'}'", "'''", "'\\'",
    "'?'", "'@'", undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "'enum'"
];
YmlToBdlParser._SYMBOLIC_NAMES = [
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
YmlToBdlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(YmlToBdlParser._LITERAL_NAMES, YmlToBdlParser._SYMBOLIC_NAMES, []);
YmlToBdlParser._serializedATNSegments = 2;
YmlToBdlParser._serializedATNSegment0 = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03>\u02E0\x04\x02" +
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
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x03\x02\x03\x02\x03\x03\x05\x03\x96\n\x03" +
    "\x03\x03\x03\x03\x05\x03\x9A\n\x03\x03\x04\x06\x04\x9D\n\x04\r\x04\x0E" +
    "\x04\x9E\x03\x04\x07\x04\xA2\n\x04\f\x04\x0E\x04\xA5\v\x04\x03\x05\x03" +
    "\x05\x05\x05\xA9\n\x05\x03\x05\x03\x05\x07\x05\xAD\n\x05\f\x05\x0E\x05" +
    "\xB0\v\x05\x03\x06\x07\x06\xB3\n\x06\f\x06\x0E\x06\xB6\v\x06\x03\x06\x05" +
    "\x06\xB9\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
    "\x03\x07\x03\x07\x05\x07\xC4\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
    "\x07\b\xCC\n\b\f\b\x0E\b\xCF\v\b\x06\b\xD1\n\b\r\b\x0E\b\xD2\x03\b\x03" +
    "\b\x07\b\xD7\n\b\f\b\x0E\b\xDA\v\b\x03\b\x03\b\x03\t\x03\t\x07\t\xE0\n" +
    "\t\f\t\x0E\t\xE3\v\t\x03\n\x03\n\x07\n\xE7\n\n\f\n\x0E\n\xEA\v\n\x03\n" +
    "\x03\n\x07\n\xEE\n\n\f\n\x0E\n\xF1\v\n\x03\n\x05\n\xF4\n\n\x03\n\x03\n" +
    "\x07\n\xF8\n\n\f\n\x0E\n\xFB\v\n\x03\n\x03\n\x03\n\x05\n\u0100\n\n\x03" +
    "\v\x03\v\x03\v\x05\v\u0105\n\v\x03\v\x07\v\u0108\n\v\f\v\x0E\v\u010B\v" +
    "\v\x03\f\x03\f\x03\f\x05\f\u0110\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x05" +
    "\r\u0117\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u011D\n\x0E\f\x0E" +
    "\x0E\x0E\u0120\v\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\u0126\n\x10" +
    "\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u012F" +
    "\n\x11\f\x11\x0E\x11\u0132\v\x11\x05\x11\u0134\n\x11\x03\x11\x05\x11\u0137" +
    "\n\x11\x03\x12\x03\x12\x03\x12\x07\x12\u013C\n\x12\f\x12\x0E\x12\u013F" +
    "\v\x12\x03\x13\x03\x13\x03\x13\x06\x13\u0144\n\x13\r\x13\x0E\x13\u0145" +
    "\x03\x14\x03\x14\x05\x14\u014A\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
    "\x15\x07\x15\u0151\n\x15\f\x15\x0E\x15\u0154\v\x15\x05\x15\u0156\n\x15" +
    "\x03\x16\x03\x16\x07\x16\u015A\n\x16\f\x16\x0E\x16\u015D\v\x16\x03\x17" +
    "\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0165\n\x18\x03\x19\x03" +
    "\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u016D\n\x1A\x03\x1B\x03\x1B" +
    "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0175\n\x1B\x03\x1C\x03\x1C\x03" +
    "\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03" +
    "\x1D\x03\x1D\x05\x1D\u0184\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F" +
    "\x03\x1F\x05\x1F\u018C\n\x1F\x03 \x03 \x03 \x03 \x03 \x07 \u0193\n \f" +
    " \x0E \u0196\v \x05 \u0198\n \x03 \x03 \x03!\x03!\x05!\u019E\n!\x03!\x03" +
    "!\x03\"\x03\"\x03\"\x03\"\x07\"\u01A6\n\"\f\"\x0E\"\u01A9\v\"\x03#\x03" +
    "#\x03#\x05#\u01AE\n#\x03#\x07#\u01B1\n#\f#\x0E#\u01B4\v#\x03#\x03#\x03" +
    "$\x03$\x03$\x03$\x03%\x03%\x05%\u01BE\n%\x03&\x03&\x07&\u01C2\n&\f&\x0E" +
    "&\u01C5\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'" +
    "\x03\'\x05\'\u01D2\n\'\x03(\x05(\u01D5\n(\x03(\x05(\u01D8\n(\x03)\x03" +
    ")\x03)\x07)\u01DD\n)\f)\x0E)\u01E0\v)\x03*\x03*\x03*\x05*\u01E5\n*\x03" +
    "+\x05+\u01E8\n+\x03+\x03+\x03+\x03+\x07+\u01EE\n+\f+\x0E+\u01F1\v+\x03" +
    "+\x03+\x05+\u01F5\n+\x03,\x03,\x03,\x03,\x03,\x05,\u01FC\n,\x03,\x03," +
    "\x03,\x05,\u0201\n,\x03,\x05,\u0204\n,\x03-\x03-\x03-\x03-\x07-\u020A" +
    "\n-\f-\x0E-\u020D\v-\x03-\x03-\x03.\x03.\x05.\u0213\n.\x03/\x03/\x05/" +
    "\u0217\n/\x030\x030\x031\x031\x031\x031\x032\x052\u0220\n2\x032\x072\u0223" +
    "\n2\f2\x0E2\u0226\v2\x033\x033\x033\x034\x034\x034\x034\x034\x034\x05" +
    "4\u0231\n4\x034\x034\x034\x034\x034\x034\x074\u0239\n4\f4\x0E4\u023C\v" +
    "4\x035\x035\x035\x035\x036\x036\x037\x037\x037\x037\x037\x038\x068\u024A" +
    "\n8\r8\x0E8\u024B\x039\x039\x059\u0250\n9\x03:\x03:\x03:\x03:\x05:\u0256" +
    "\n:\x03;\x05;\u0259\n;\x03;\x06;\u025C\n;\r;\x0E;\u025D\x03;\x05;\u0261" +
    "\n;\x03<\x03<\x05<\u0265\n<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x05" +
    "=\u026F\n=\x03=\x03=\x03=\x07=\u0274\n=\f=\x0E=\u0277\v=\x03>\x03>\x03" +
    ">\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
    "A\x07A\u028A\nA\fA\x0EA\u028D\vA\x03B\x07B\u0290\nB\fB\x0EB\u0293\vB\x03" +
    "B\x03B\x03C\x07C\u0298\nC\fC\x0EC\u029B\vC\x03C\x07C\u029E\nC\fC\x0EC" +
    "\u02A1\vC\x03C\x03C\x03D\x03D\x03D\x03D\x05D\u02A9\nD\x03D\x07D\u02AC" +
    "\nD\fD\x0ED\u02AF\vD\x03D\x03D\x03E\x03E\x03E\x05E\u02B6\nE\x03E\x03E" +
    "\x03F\x03F\x05F\u02BC\nF\x03F\x03F\x07F\u02C0\nF\fF\x0EF\u02C3\vF\x03" +
    "F\x03F\x03G\x03G\x05G\u02C9\nG\x03G\x03G\x07G\u02CD\nG\fG\x0EG\u02D0\v" +
    "G\x03G\x03G\x03H\x03H\x03I\x03I\x03I\x07I\u02D9\nI\fI\x0EI\u02DC\vI\x03" +
    "I\x03I\x03I\x07\x9E\xA3\xF9\u0145\u0152\x02\x04fxJ\x02\x02\x04\x02\x06" +
    "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
    "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
    "2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
    "N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
    "j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
    "\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x02\b\x03\x02" +
    "\x16\x17\x02\x03\x03\x02\x18\x1B\x04\x023477\x03\x02\x06\b\x03\x02\x1D" +
    "\"\u02FB\x02\x92\x03\x02\x02\x02\x04\x95\x03\x02\x02\x02\x06\x9C\x03\x02" +
    "\x02\x02\b\xA6\x03\x02\x02\x02\n\xB4\x03\x02\x02\x02\f\xC3\x03\x02\x02" +
    "\x02\x0E\xC5\x03\x02\x02\x02\x10\xDD\x03\x02\x02\x02\x12\xE4\x03\x02\x02" +
    "\x02\x14\u0101\x03\x02\x02\x02\x16\u010C\x03\x02\x02\x02\x18\u0113\x03" +
    "\x02\x02\x02\x1A\u0118\x03\x02\x02\x02\x1C\u0121\x03\x02\x02\x02\x1E\u0125" +
    "\x03\x02\x02\x02 \u0136\x03\x02\x02\x02\"\u0138\x03\x02\x02\x02$\u0140" +
    "\x03\x02\x02\x02&\u0149\x03\x02\x02\x02(\u014B\x03\x02\x02\x02*\u0157" +
    "\x03\x02\x02\x02,\u015E\x03\x02\x02\x02.\u0164\x03\x02\x02\x020\u0166" +
    "\x03\x02\x02\x022\u016C\x03\x02\x02\x024\u0174\x03\x02\x02\x026\u0176" +
    "\x03\x02\x02\x028\u0183\x03\x02\x02\x02:\u0185\x03\x02\x02\x02<\u018B" +
    "\x03\x02\x02\x02>\u018D\x03\x02\x02\x02@\u019D\x03\x02\x02\x02B\u01A1" +
    "\x03\x02\x02\x02D\u01AA\x03\x02\x02\x02F\u01B7\x03\x02\x02\x02H\u01BD" +
    "\x03\x02\x02\x02J\u01BF\x03\x02\x02\x02L\u01C6\x03\x02\x02\x02N\u01D4" +
    "\x03\x02\x02\x02P\u01D9\x03\x02\x02\x02R\u01E1\x03\x02\x02\x02T\u01E7" +
    "\x03\x02\x02\x02V\u01FB\x03\x02\x02\x02X\u0205\x03\x02\x02\x02Z\u0210" +
    "\x03\x02\x02\x02\\\u0214\x03\x02\x02\x02^\u0218\x03\x02\x02\x02`\u021A" +
    "\x03\x02\x02\x02b\u021F\x03\x02\x02\x02d\u0227\x03\x02\x02\x02f\u0230" +
    "\x03\x02\x02\x02h\u023D\x03\x02\x02\x02j\u0241\x03\x02\x02\x02l\u0243" +
    "\x03\x02\x02\x02n\u0249\x03\x02\x02\x02p\u024F\x03\x02\x02\x02r\u0255" +
    "\x03\x02\x02\x02t\u0258\x03\x02\x02\x02v\u0264\x03\x02\x02\x02x\u026E" +
    "\x03\x02\x02\x02z\u0278\x03\x02\x02\x02|\u027D\x03\x02\x02\x02~\u0282" +
    "\x03\x02\x02\x02\x80\u028B\x03\x02\x02\x02\x82\u0291\x03\x02\x02\x02\x84" +
    "\u0299\x03\x02\x02\x02\x86\u02A4\x03\x02\x02\x02\x88\u02B2\x03\x02\x02" +
    "\x02\x8A\u02B9\x03\x02\x02\x02\x8C\u02C6\x03\x02\x02\x02\x8E\u02D3\x03" +
    "\x02\x02\x02\x90\u02D5\x03\x02\x02\x02\x92\x93\t\x02\x02\x02\x93\x03\x03" +
    "\x02\x02\x02\x94\x96\x076\x02\x02\x95\x94\x03\x02\x02\x02\x95\x96\x03" +
    "\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99\x07>\x02\x02\x98\x9A\x07" +
    "6\x02\x02\x99\x98\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x05\x03" +
    "\x02\x02\x02\x9B\x9D\v\x02\x02\x02\x9C\x9B\x03\x02\x02\x02\x9D\x9E\x03" +
    "\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA3\x03" +
    "\x02\x02\x02\xA0\xA2\n\x03\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\xA5\x03" +
    "\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA4\x07\x03" +
    "\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA6\xAE\x07:\x02\x02\xA7\xA9\x07" +
    "\x15\x02\x02\xA8\xA7\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA\x03" +
    "\x02\x02\x02\xAA\xAB\x07\x15\x02\x02\xAB\xAD\x07:\x02\x02\xAC\xA8\x03" +
    "\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03" +
    "\x02\x02\x02\xAF\t\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB3\x05" +
    "\f\x07\x02\xB2\xB1\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03" +
    "\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4\x03" +
    "\x02\x02\x02\xB7\xB9\x05\x06\x04\x02\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03" +
    "\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x07\x02\x02\x03\xBB\v\x03" +
    "\x02\x02\x02\xBC\xC4\x05\x12\n\x02\xBD\xC4\x05\x86D\x02\xBE\xC4\x05\x90" +
    "I\x02\xBF\xC0\x05J&\x02\xC0\xC1\x07\x13\x02\x02\xC1\xC4\x03\x02\x02\x02" +
    "\xC2\xC4\x05\x0E\b\x02\xC3\xBC\x03\x02\x02\x02\xC3\xBD\x03\x02\x02\x02" +
    "\xC3\xBE\x03\x02\x02\x02\xC3\xBF\x03\x02\x02\x02\xC3\xC2\x03\x02\x02\x02" +
    "\xC4\r\x03\x02\x02\x02\xC5\xC6\x079\x02\x02\xC6\xC7\x05\b\x05\x02\xC7" +
    "\xD0\x07*\x02\x02\xC8\xCD\x05\x10\t\x02\xC9\xCA\x07\x14\x02\x02\xCA\xCC" +
    "\x05\x10\t\x02\xCB\xC9\x03\x02\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB" +
    "\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD" +
    "\x03\x02\x02\x02\xD0\xC8\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD0" +
    "\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD8" +
    "\x07+\x02\x02\xD5\xD7\x05(\x15\x02\xD6\xD5\x03\x02\x02\x02\xD7\xDA\x03" +
    "\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x03" +
    "\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDC\x07\x13\x02\x02\xDC\x0F\x03" +
    "\x02\x02\x02\xDD\xE1\x05\b\x05\x02\xDE\xE0\x05(\x15\x02\xDF\xDE\x03\x02" +
    "\x02\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02" +
    "\x02\x02\xE2\x11\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4\xE8\x05\x18" +
    "\r\x02\xE5\xE7\x05(\x15\x02\xE6\xE5\x03\x02\x02\x02\xE7\xEA\x03\x02\x02" +
    "\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEF\x03\x02\x02" +
    "\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEE\x05\"\x12\x02\xEC\xEE\x05J&\x02\xED" +
    "\xEB\x03\x02\x02\x02\xED\xEC\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF" +
    "\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1" +
    "\xEF\x03\x02\x02\x02\xF2\xF4\x05*\x16\x02\xF3\xF2\x03\x02\x02\x02\xF3" +
    "\xF4\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF9\x07\x13\x02\x02\xF6" +
    "\xF8\x05\x06\x04\x02\xF7\xF6\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9" +
    "\xFA\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02\xFB" +
    "\xF9\x03\x02\x02\x02\xFC\xFD\x05\x14\v\x02\xFD\xFF\x07\x13\x02\x02\xFE" +
    "\u0100\x07\x02\x02\x03\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02" +
    "\u0100\x13\x03\x02\x02\x02\u0101\u0102\x07\x04\x02\x02\u0102\u0104\x05" +
    "\b\x05\x02\u0103\u0105\x05\x16\f\x02\u0104\u0103\x03\x02\x02\x02\u0104" +
    "\u0105\x03\x02\x02\x02\u0105\u0109\x03\x02\x02\x02\u0106\u0108\x05(\x15" +
    "\x02\u0107\u0106\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02\u0109\u0107" +
    "\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\x15\x03\x02\x02\x02" +
    "\u010B\u0109\x03\x02\x02\x02\u010C\u010D\x07\x0E\x02\x02\u010D\u010F\x07" +
    "*\x02\x02\u010E\u0110\x05\x06\x04\x02\u010F\u010E\x03\x02\x02\x02\u010F" +
    "\u0110\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0112\x07+\x02" +
    "\x02\u0112\x17\x03\x02\x02\x02\u0113\u0114\x07\x03\x02\x02\u0114\u0116" +
    "\x05\b\x05\x02\u0115\u0117\x05\x1A\x0E\x02\u0116\u0115\x03\x02\x02\x02" +
    "\u0116\u0117\x03\x02\x02\x02\u0117\x19\x03\x02\x02\x02\u0118\u0119\x07" +
    "\x05\x02\x02\u0119\u011E\x05\x1C\x0F\x02\u011A\u011B\x07\x14\x02\x02\u011B" +
    "\u011D\x05\x1C\x0F\x02\u011C\u011A\x03\x02\x02\x02\u011D\u0120\x03\x02" +
    "\x02\x02\u011E\u011C\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F" +
    "\x1B\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0121\u0122\x05\b\x05" +
    "\x02\u0122\x1D\x03\x02\x02\x02\u0123\u0126\x05\b\x05\x02\u0124\u0126\x07" +
    "\t\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0124\x03\x02\x02\x02\u0126" +
    "\x1F\x03\x02\x02\x02\u0127\u0128\x07\r\x02\x02\u0128\u0137\x05\x8CG\x02" +
    "\u0129\u012A\x07\r\x02\x02\u012A\u0133\x07&\x02\x02\u012B\u0130\x054\x1B" +
    "\x02\u012C\u012D\x07\x14\x02\x02\u012D\u012F\x054\x1B\x02\u012E\u012C" +
    "\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02" +
    "\u0130\u0131\x03\x02\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03" +
    "\x02\x02\x02\u0133\u012B\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134" +
    "\u0135\x03\x02\x02\x02\u0135\u0137\x07\'\x02\x02\u0136\u0127\x03\x02\x02" +
    "\x02\u0136\u0129\x03\x02\x02\x02\u0137!\x03\x02\x02\x02\u0138\u0139\x05" +
    "\x1E\x10\x02\u0139\u013D\x05\b\x05\x02\u013A\u013C\x05(\x15\x02\u013B" +
    "\u013A\x03\x02\x02\x02\u013C\u013F\x03\x02\x02\x02\u013D\u013B\x03\x02" +
    "\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E#\x03\x02\x02\x02\u013F\u013D" +
    "\x03\x02\x02\x02\u0140\u0143\x05\b\x05\x02\u0141\u0142\x07\x16\x02\x02" +
    "\u0142\u0144\x05\b\x05\x02\u0143\u0141\x03\x02\x02\x02\u0144\u0145\x03" +
    "\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146" +
    "%\x03\x02\x02\x02\u0147\u014A\x05\b\x05\x02\u0148\u014A\x05$\x13\x02\u0149" +
    "\u0147\x03\x02\x02\x02\u0149\u0148\x03\x02\x02\x02\u014A\'\x03\x02\x02" +
    "\x02\u014B\u014C\t\x04\x02\x02\u014C\u0155\x05&\x14\x02\u014D\u0152\x05" +
    ".\x18\x02\u014E\u014F\x07\x14\x02\x02\u014F\u0151\x05.\x18\x02\u0150\u014E" +
    "\x03\x02\x02\x02\u0151\u0154\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02" +
    "\u0152\u0150\x03\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03" +
    "\x02\x02\x02\u0155\u014D\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156" +
    ")\x03\x02\x02\x02\u0157\u015B\x07\n\x02\x02\u0158\u015A\x05(\x15\x02\u0159" +
    "\u0158\x03\x02\x02\x02\u015A\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02" +
    "\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C+\x03\x02\x02\x02\u015D\u015B" +
    "\x03\x02\x02\x02\u015E\u015F\x075\x02\x02\u015F-\x03\x02\x02\x02\u0160" +
    "\u0165\x05f4\x02\u0161\u0165\x054\x1B\x02\u0162\u0165\x050\x19\x02\u0163" +
    "\u0165\x05,\x17\x02\u0164\u0160\x03\x02\x02\x02\u0164\u0161\x03\x02\x02" +
    "\x02\u0164\u0162\x03\x02\x02\x02\u0164\u0163\x03\x02\x02\x02\u0165/\x03" +
    "\x02\x02\x02\u0166\u0167\x058\x1D\x02\u0167\u0168\x07\x15\x02\x02\u0168" +
    "\u0169\x052\x1A\x02\u01691\x03\x02\x02\x02\u016A\u016D\x054\x1B\x02\u016B" +
    "\u016D\x05f4\x02\u016C\u016A\x03\x02\x02\x02\u016C\u016B\x03\x02\x02\x02" +
    "\u016D3\x03\x02\x02\x02\u016E\u0175\x05\x8EH\x02\u016F\u0175\x05D#\x02" +
    "\u0170\u0175\x058\x1D\x02\u0171\u0175\x05x=\x02\u0172\u0175\x05 \x11\x02" +
    "\u0173\u0175\x056\x1C\x02\u0174\u016E\x03\x02\x02\x02\u0174\u016F\x03" +
    "\x02\x02\x02\u0174\u0170\x03\x02\x02\x02\u0174\u0171\x03\x02\x02\x02\u0174" +
    "\u0172\x03\x02\x02\x02\u0174\u0173\x03\x02\x02\x02\u01755\x03\x02\x02" +
    "\x02\u0176\u0177\x07\x10\x02\x02\u0177\u0178\x07&\x02\x02\u0178\u0179" +
    "\x05f4\x02\u0179\u017A\x07\'\x02\x02\u017A\u017B\x07\x11\x02\x02\u017B" +
    "\u017C\x054\x1B\x02\u017C\u017D\x07\x12\x02\x02\u017D\u017E\x054\x1B\x02" +
    "\u017E7\x03\x02\x02\x02\u017F\u0184\x05\x8AF\x02\u0180\u0184\x05\x8CG" +
    "\x02\u0181\u0184\x05B\"\x02\u0182\u0184\t\x05\x02\x02\u0183\u017F\x03" +
    "\x02\x02\x02\u0183\u0180\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0183" +
    "\u0182\x03\x02\x02\x02\u01849\x03\x02\x02\x02\u0185\u0186\x07.\x02\x02" +
    "\u0186\u0187\x05\b\x05\x02\u0187;\x03\x02\x02\x02\u0188\u018C\x05\b\x05" +
    "\x02\u0189\u018C\x05> \x02\u018A\u018C\x05:\x1E\x02\u018B\u0188\x03\x02" +
    "\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018A\x03\x02\x02\x02\u018C" +
    "=\x03\x02\x02\x02\u018D\u018E\x05\b\x05\x02\u018E\u0197\x07&\x02\x02\u018F" +
    "\u0194\x05@!\x02\u0190\u0191\x07\x14\x02\x02\u0191\u0193\x05@!\x02\u0192" +
    "\u0190\x03\x02\x02\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0192\x03\x02" +
    "\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196" +
    "\u0194\x03\x02\x02\x02\u0197\u018F\x03\x02\x02\x02\u0197\u0198\x03\x02" +
    "\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019A\x07\'\x02\x02\u019A?" +
    "\x03\x02\x02\x02\u019B\u019C\x07:\x02\x02\u019C\u019E\x07\x15\x02\x02" +
    "\u019D\u019B\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u019F\x03" +
    "\x02\x02\x02\u019F\u01A0\x054\x1B\x02\u01A0A\x03\x02\x02\x02\u01A1\u01A7" +
    "\x05<\x1F\x02\u01A2\u01A3\x05\x02\x02\x02\u01A3\u01A4\x05<\x1F\x02\u01A4" +
    "\u01A6\x03\x02\x02\x02\u01A5\u01A2\x03\x02\x02\x02\u01A6\u01A9\x03\x02" +
    "\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8" +
    "C\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01AB\x07\x1C\x02" +
    "\x02\u01AB\u01AD\x05\b\x05\x02\u01AC\u01AE\x05\b\x05\x02\u01AD\u01AC\x03" +
    "\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B2\x03\x02\x02\x02\u01AF" +
    "\u01B1\x05H%\x02\u01B0\u01AF\x03\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02" +
    "\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B5\x03" +
    "\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B5\u01B6\x07\x13\x02\x02\u01B6" +
    "E\x03\x02\x02\x02\u01B7\u01B8\x054\x1B\x02\u01B8\u01B9\x05\b\x05\x02\u01B9" +
    "\u01BA\x054\x1B\x02\u01BAG\x03\x02\x02\x02\u01BB\u01BE\x05(\x15\x02\u01BC" +
    "\u01BE\x05\x8EH\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BC\x03\x02\x02" +
    "\x02\u01BEI\x03\x02\x02\x02\u01BF\u01C3\x05L\'\x02\u01C0\u01C2\x05(\x15" +
    "\x02\u01C1\u01C0\x03\x02\x02\x02\u01C2\u01C5\x03\x02\x02\x02\u01C3\u01C1" +
    "\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4K\x03\x02\x02\x02\u01C5" +
    "\u01C3\x03\x02\x02\x02\u01C6\u01C7\t\x06\x02\x02\u01C7\u01D1\x05\b\x05" +
    "\x02\u01C8\u01C9\x07\x0F\x02\x02\u01C9\u01CA\x07*\x02\x02\u01CA\u01CB" +
    "\x05\x80A\x02\u01CB\u01CC\x07+\x02\x02\u01CC\u01D2\x03\x02\x02\x02\u01CD" +
    "\u01CE\x07&\x02\x02\u01CE\u01CF\x05N(\x02\u01CF\u01D0\x07\'\x02\x02\u01D0" +
    "\u01D2\x03\x02\x02\x02\u01D1\u01C8\x03\x02\x02\x02\u01D1\u01CD\x03\x02" +
    "\x02\x02\u01D2M\x03\x02\x02\x02\u01D3\u01D5\x05P)\x02\u01D4\u01D3\x03" +
    "\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D7\x03\x02\x02\x02\u01D6" +
    "\u01D8\x05T+\x02\u01D7\u01D6\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02" +
    "\u01D8O\x03\x02\x02\x02\u01D9\u01DE\x05R*\x02\u01DA\u01DB\x07\x14\x02" +
    "\x02\u01DB\u01DD\x05R*\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01E0\x03" +
    "\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF" +
    "Q\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E1\u01E2\x05\b\x05\x02" +
    "\u01E2\u01E4\x05\b\x05\x02\u01E3\u01E5\x05X-\x02\u01E4\u01E3\x03\x02\x02" +
    "\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5S\x03\x02\x02\x02\u01E6\u01E8\x07" +
    "\x14\x02\x02\u01E7\u01E6\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8" +
    "\u01E9\x03\x02\x02\x02\u01E9\u01EA\x07*\x02\x02\u01EA\u01EF\x05V,\x02" +
    "\u01EB\u01EC\x07\x14\x02\x02\u01EC\u01EE\x05V,\x02\u01ED\u01EB\x03\x02" +
    "\x02\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF" +
    "\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01EF\x03\x02" +
    "\x02\x02\u01F2\u01F4\x07+\x02\x02\u01F3\u01F5\x05\b\x05\x02\u01F4\u01F3" +
    "\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5U\x03\x02\x02\x02\u01F6" +
    "\u01F7\x07(\x02\x02\u01F7\u01F8\x05\b\x05\x02\u01F8\u01F9\x07)\x02\x02" +
    "\u01F9\u01FC\x03\x02\x02\x02\u01FA\u01FC\x05\b\x05\x02\u01FB\u01F6\x03" +
    "\x02\x02\x02\u01FB\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD" +
    "\u01FE\x07\x15\x02\x02\u01FE\u0200\x05\b\x05\x02\u01FF\u0201\x05\b\x05" +
    "\x02\u0200\u01FF\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0203" +
    "\x03\x02\x02\x02\u0202\u0204\x05X-\x02\u0203\u0202\x03\x02\x02\x02\u0203" +
    "\u0204\x03\x02\x02\x02\u0204W\x03\x02\x02\x02\u0205\u0206\x07*\x02\x02" +
    "\u0206\u020B\x05Z.\x02\u0207\u0208\x07\x14\x02\x02\u0208\u020A\x05Z.\x02" +
    "\u0209\u0207\x03\x02\x02\x02\u020A\u020D\x03\x02\x02\x02\u020B\u0209\x03" +
    "\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020E\x03\x02\x02\x02\u020D" +
    "\u020B\x03\x02\x02\x02\u020E\u020F\x07+\x02\x02\u020FY\x03\x02\x02\x02" +
    "\u0210\u0212\x05\b\x05\x02\u0211\u0213\x054\x1B\x02\u0212\u0211\x03\x02" +
    "\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213[\x03\x02\x02\x02\u0214\u0216" +
    "\x05^0\x02\u0215\u0217\x05n8\x02\u0216\u0215\x03\x02\x02\x02\u0216\u0217" +
    "\x03\x02\x02\x02\u0217]\x03\x02\x02\x02\u0218\u0219\x05F$";
YmlToBdlParser._serializedATNSegment1 = "\x02\u0219_\x03\x02\x02\x02\u021A\u021B\x054\x1B\x02\u021B\u021C\x07\x14" +
    "\x02\x02\u021C\u021D\x054\x1B\x02\u021Da\x03\x02\x02\x02\u021E\u0220\x05" +
    "n8\x02\u021F\u021E\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0224" +
    "\x03\x02\x02\x02\u0221\u0223\x05\\/\x02\u0222\u0221\x03\x02\x02\x02\u0223" +
    "\u0226\x03\x02\x02\x02\u0224\u0222\x03\x02\x02\x02\u0224\u0225\x03\x02" +
    "\x02\x02\u0225c\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0227\u0228" +
    "\x05b2\x02\u0228\u0229\x07\x02\x02\x03\u0229e\x03\x02\x02\x02\u022A\u022B" +
    "\b4\x01\x02\u022B\u022C\x07&\x02\x02\u022C\u022D\x05f4\x02\u022D\u022E" +
    "\x07\'\x02\x02\u022E\u0231\x03\x02\x02\x02\u022F\u0231\x05h5\x02\u0230" +
    "\u022A\x03\x02\x02\x02\u0230\u022F\x03\x02\x02\x02\u0231\u023A\x03\x02" +
    "\x02\x02\u0232\u0233\f\x05\x02\x02\u0233\u0234\x07#\x02\x02\u0234\u0239" +
    "\x05f4\x06\u0235\u0236\f\x04\x02\x02\u0236\u0237\x07$\x02\x02\u0237\u0239" +
    "\x05f4\x05\u0238\u0232\x03\x02\x02\x02\u0238\u0235\x03\x02\x02\x02\u0239" +
    "\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02" +
    "\x02\x02\u023Bg\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u023E" +
    "\x054\x1B\x02\u023E\u023F\x05j6\x02\u023F\u0240\x054\x1B\x02\u0240i\x03" +
    "\x02\x02\x02\u0241\u0242\t\x07\x02\x02\u0242k\x03\x02\x02\x02\u0243\u0244" +
    "\x054\x1B\x02\u0244\u0245\x07%\x02\x02\u0245\u0246\x054\x1B\x02\u0246" +
    "\u0247\x07\x13\x02\x02\u0247m\x03\x02\x02\x02\u0248\u024A\x05p9\x02\u0249" +
    "\u0248\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u0249\x03\x02" +
    "\x02\x02\u024B\u024C\x03\x02\x02\x02\u024Co\x03\x02\x02\x02\u024D\u0250" +
    "\x05f4\x02\u024E\u0250\x05z>\x02\u024F\u024D\x03\x02\x02\x02\u024F\u024E" +
    "\x03\x02\x02\x02\u0250q\x03\x02\x02\x02\u0251\u0252\x05B\"\x02\u0252\u0253" +
    "\x07\x13\x02\x02\u0253\u0256\x03\x02\x02\x02\u0254\u0256\x05l7\x02\u0255" +
    "\u0251\x03\x02\x02\x02\u0255\u0254\x03\x02\x02\x02\u0256s\x03\x02\x02" +
    "\x02\u0257\u0259\x07*\x02\x02\u0258\u0257\x03\x02\x02\x02\u0258\u0259" +
    "\x03\x02\x02\x02\u0259\u025B\x03\x02\x02\x02\u025A\u025C\x05r:\x02\u025B" +
    "\u025A\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025B\x03\x02" +
    "\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u0260\x03\x02\x02\x02\u025F" +
    "\u0261\x07+\x02\x02\u0260\u025F\x03\x02\x02\x02\u0260\u0261\x03\x02\x02" +
    "\x02\u0261u\x03\x02\x02\x02\u0262\u0265\x05n8\x02\u0263\u0265\x05t;\x02" +
    "\u0264\u0262\x03\x02\x02\x02\u0264\u0263\x03\x02\x02\x02\u0265w\x03\x02" +
    "\x02\x02\u0266\u0267\b=\x01\x02\u0267\u0268\x07&\x02\x02\u0268\u0269\x05" +
    "x=\x02\u0269\u026A\x07\'\x02\x02\u026A\u026F\x03\x02\x02\x02\u026B\u026C" +
    "\x072\x02\x02\u026C\u026F\x05x=\x04\u026D\u026F\x058\x1D\x02\u026E\u0266" +
    "\x03\x02\x02\x02\u026E\u026B\x03\x02\x02\x02\u026E\u026D\x03\x02\x02\x02" +
    "\u026F\u0275\x03\x02\x02\x02\u0270\u0271\f\x05\x02\x02\u0271\u0272\x07" +
    "2\x02\x02\u0272\u0274\x05x=\x06\u0273\u0270\x03\x02\x02\x02\u0274\u0277" +
    "\x03\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02" +
    "\u0276y\x03\x02\x02\x02\u0277\u0275\x03\x02\x02\x02\u0278\u0279\x05\b" +
    "\x05\x02\u0279\u027A\x07&\x02\x02\u027A\u027B\x05b2\x02\u027B\u027C\x07" +
    "\'\x02\x02\u027C{\x03\x02\x02\x02\u027D\u027E\x05\b\x05\x02\u027E\u027F" +
    "\x07*\x02\x02\u027F\u0280\x05\x80A\x02\u0280\u0281\x07+\x02\x02\u0281" +
    "}\x03\x02\x02\x02\u0282\u0283\x05\b\x05\x02\u0283\u0284\x07*\x02\x02\u0284" +
    "\u0285\x05\x80A\x02\u0285\u0286\x07+\x02\x02\u0286\u0287\x07\x02\x02\x03" +
    "\u0287\x7F\x03\x02\x02\x02\u0288\u028A\x05\"\x12\x02\u0289\u0288\x03\x02" +
    "\x02\x02\u028A\u028D\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028B" +
    "\u028C\x03\x02\x02\x02\u028C\x81\x03\x02\x02\x02\u028D\u028B\x03\x02\x02" +
    "\x02\u028E\u0290\x05\"\x12\x02\u028F\u028E\x03\x02\x02\x02\u0290\u0293" +
    "\x03\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02" +
    "\u0292\u0294\x03\x02\x02\x02\u0293\u0291\x03\x02\x02\x02\u0294\u0295\x07" +
    "\x02\x02\x03\u0295\x83\x03\x02\x02\x02\u0296\u0298\x05\x86D\x02\u0297" +
    "\u0296\x03\x02\x02\x02\u0298\u029B\x03\x02\x02\x02\u0299\u0297\x03\x02" +
    "\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029F\x03\x02\x02\x02\u029B" +
    "\u0299\x03\x02\x02\x02\u029C\u029E\x05\x06\x04\x02\u029D\u029C\x03\x02" +
    "\x02\x02\u029E\u02A1\x03\x02\x02\x02\u029F\u029D\x03\x02\x02\x02\u029F" +
    "\u02A0\x03\x02\x02\x02\u02A0\u02A2\x03\x02\x02\x02\u02A1\u029F\x03\x02" +
    "\x02\x02\u02A2\u02A3\x07\x02\x02\x03\u02A3\x85\x03\x02\x02\x02\u02A4\u02A5" +
    "\x05\b\x05\x02\u02A5\u02A8\x05\b\x05\x02\u02A6\u02A7\x07\x05\x02\x02\u02A7" +
    "\u02A9\x05\b\x05\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02" +
    "\x02\u02A9\u02AD\x03\x02\x02\x02\u02AA\u02AC\x05(\x15\x02\u02AB\u02AA" +
    "\x03\x02\x02\x02\u02AC\u02AF\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02" +
    "\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02B0\x03\x02\x02\x02\u02AF\u02AD\x03" +
    "\x02\x02\x02\u02B0\u02B1\x07\x13\x02\x02\u02B1\x87\x03\x02\x02\x02\u02B2" +
    "\u02B5\x07\v\x02\x02\u02B3\u02B6\x05J&\x02\u02B4\u02B6\x05\"\x12\x02\u02B5" +
    "\u02B3\x03\x02\x02\x02\u02B5\u02B4\x03\x02\x02\x02\u02B6\u02B7\x03\x02" +
    "\x02\x02\u02B7\u02B8\x07\x13\x02\x02\u02B8\x89\x03\x02\x02\x02\u02B9\u02BB" +
    "\x07(\x02\x02\u02BA\u02BC\x054\x1B\x02\u02BB\u02BA\x03\x02\x02\x02\u02BB" +
    "\u02BC\x03\x02\x02\x02\u02BC\u02C1\x03\x02\x02\x02\u02BD\u02BE\x07\x14" +
    "\x02\x02\u02BE\u02C0\x054\x1B\x02\u02BF\u02BD\x03\x02\x02\x02\u02C0\u02C3" +
    "\x03\x02\x02\x02\u02C1\u02BF\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02" +
    "\u02C2\u02C4\x03\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C4\u02C5\x07" +
    ")\x02\x02\u02C5\x8B\x03\x02\x02\x02\u02C6\u02C8\x07*\x02\x02\u02C7\u02C9" +
    "\x054\x1B\x02\u02C8\u02C7\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02" +
    "\u02C9\u02CE\x03\x02\x02\x02\u02CA\u02CB\x07\x14\x02\x02\u02CB\u02CD\x05" +
    "4\x1B\x02\u02CC\u02CA\x03\x02\x02\x02\u02CD\u02D0\x03\x02\x02\x02\u02CE" +
    "\u02CC\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D1\x03\x02" +
    "\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D1\u02D2\x07+\x02\x02\u02D2\x8D" +
    "\x03\x02\x02\x02\u02D3\u02D4\x07=\x02\x02\u02D4\x8F\x03\x02\x02\x02\u02D5" +
    "\u02D6\x07\f\x02\x02\u02D6\u02DA\x05\b\x05\x02\u02D7\u02D9\x05(\x15\x02" +
    "\u02D8\u02D7\x03\x02\x02\x02\u02D9\u02DC\x03\x02\x02\x02\u02DA\u02D8\x03" +
    "\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DD\x03\x02\x02\x02\u02DC" +
    "\u02DA\x03\x02\x02\x02\u02DD\u02DE\x07\x13\x02\x02\u02DE\x91\x03\x02\x02" +
    "\x02Y\x95\x99\x9E\xA3\xA8\xAE\xB4\xB8\xC3\xCD\xD2\xD8\xE1\xE8\xED\xEF" +
    "\xF3\xF9\xFF\u0104\u0109\u010F\u0116\u011E\u0125\u0130\u0133\u0136\u013D" +
    "\u0145\u0149\u0152\u0155\u015B\u0164\u016C\u0174\u0183\u018B\u0194\u0197" +
    "\u019D\u01A7\u01AD\u01B2\u01BD\u01C3\u01D1\u01D4\u01D7\u01DE\u01E4\u01E7" +
    "\u01EF\u01F4\u01FB\u0200\u0203\u020B\u0212\u0216\u021F\u0224\u0230\u0238" +
    "\u023A\u024B\u024F\u0255\u0258\u025D\u0260\u0264\u026E\u0275\u028B\u0291" +
    "\u0299\u029F\u02A8\u02AD\u02B5\u02BB\u02C1\u02C8\u02CE\u02DA";
YmlToBdlParser._serializedATN = Utils.join([
    YmlToBdlParser._serializedATNSegment0,
    YmlToBdlParser._serializedATNSegment1
], "");
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull
], YmlToBdlParser.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], YmlToBdlParser.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], YmlToBdlParser.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], YmlToBdlParser.prototype, "serializedATN", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "expressionMarker", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "preprocessingElement", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "freeText", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "ymlId", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "kaoFile", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "ymlEntity", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "yenum", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "enumElement", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "classDeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "classImplementation", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "override", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "classDeclarationIntro", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "extendsBlock", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "parentClassName", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "memberType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "synonym", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "memberDeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "path", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "ymlIdOrPath", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "field", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "classPropertiesBlock", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "documentation", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "valueOrCondition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "hashMapKeyValue", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "hashMapValue", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "value", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "ifExprBlock", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "nonArithmeticValue", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "instanciationVariable", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "expression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "functionCall", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "functionArgument", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "chainedCall", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "inlineDeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "inlineOperation", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "fieldValue", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "methodDeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "methodIntro", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "argumentList", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "mandatoryArgs", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "mandatoryArgDecl", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "optionalArgs", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "optionalArgDecl", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "argOptionList", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "argOptionBlock", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "order1Block", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "instanciationCondition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "forEachInstanciation", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "order1FullCondition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "closedOrder1FullCondition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "combinedComparison", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "comparison", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "comparisonOperator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "affectation", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "conditionBlock", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "order0Condition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "action", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "actionBlock", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "compoundBlock", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "arithmeticExpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "existentialOperator", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "variableBlock", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "variableBlockWithEOF", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "variableBlockContent", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "variableBlockContentWithEOF", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "staticDeclarationsFile", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "staticDeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "externDeclaration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "list", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "listWithBrace", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "granule", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], YmlToBdlParser.prototype, "complete", null);
exports.YmlToBdlParser = YmlToBdlParser;
class ExpressionMarkerContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DOT() { return this.tryGetToken(YmlToBdlParser.DOT, 0); }
    MULTIVALUED_EXPRESSION() { return this.tryGetToken(YmlToBdlParser.MULTIVALUED_EXPRESSION, 0); }
    get ruleIndex() { return YmlToBdlParser.RULE_expressionMarker; }
    enterRule(listener) {
        if (listener.enterExpressionMarker)
            listener.enterExpressionMarker(this);
    }
    exitRule(listener) {
        if (listener.exitExpressionMarker)
            listener.exitExpressionMarker(this);
    }
    accept(visitor) {
        if (visitor.visitExpressionMarker)
            return visitor.visitExpressionMarker(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExpressionMarkerContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExpressionMarkerContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExpressionMarkerContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExpressionMarkerContext.prototype, "accept", null);
exports.ExpressionMarkerContext = ExpressionMarkerContext;
class PreprocessingElementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PREPROCESSING() { return this.getToken(YmlToBdlParser.PREPROCESSING, 0); }
    WS(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.WS);
        }
        else {
            return this.getToken(YmlToBdlParser.WS, i);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_preprocessingElement; }
    enterRule(listener) {
        if (listener.enterPreprocessingElement)
            listener.enterPreprocessingElement(this);
    }
    exitRule(listener) {
        if (listener.exitPreprocessingElement)
            listener.exitPreprocessingElement(this);
    }
    accept(visitor) {
        if (visitor.visitPreprocessingElement)
            return visitor.visitPreprocessingElement(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PreprocessingElementContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PreprocessingElementContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PreprocessingElementContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PreprocessingElementContext.prototype, "accept", null);
exports.PreprocessingElementContext = PreprocessingElementContext;
class FreeTextContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.EOF);
        }
        else {
            return this.getToken(YmlToBdlParser.EOF, i);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_freeText; }
    enterRule(listener) {
        if (listener.enterFreeText)
            listener.enterFreeText(this);
    }
    exitRule(listener) {
        if (listener.exitFreeText)
            listener.exitFreeText(this);
    }
    accept(visitor) {
        if (visitor.visitFreeText)
            return visitor.visitFreeText(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FreeTextContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FreeTextContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FreeTextContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FreeTextContext.prototype, "accept", null);
exports.FreeTextContext = FreeTextContext;
class YmlIdContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ID(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.ID);
        }
        else {
            return this.getToken(YmlToBdlParser.ID, i);
        }
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.COLON);
        }
        else {
            return this.getToken(YmlToBdlParser.COLON, i);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_ymlId; }
    enterRule(listener) {
        if (listener.enterYmlId)
            listener.enterYmlId(this);
    }
    exitRule(listener) {
        if (listener.exitYmlId)
            listener.exitYmlId(this);
    }
    accept(visitor) {
        if (visitor.visitYmlId)
            return visitor.visitYmlId(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], YmlIdContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], YmlIdContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], YmlIdContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], YmlIdContext.prototype, "accept", null);
exports.YmlIdContext = YmlIdContext;
class KaoFileContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() { return this.getToken(YmlToBdlParser.EOF, 0); }
    ymlEntity(i) {
        if (i === undefined) {
            return this.getRuleContexts(YmlEntityContext);
        }
        else {
            return this.getRuleContext(i, YmlEntityContext);
        }
    }
    freeText() {
        return this.tryGetRuleContext(0, FreeTextContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_kaoFile; }
    enterRule(listener) {
        if (listener.enterKaoFile)
            listener.enterKaoFile(this);
    }
    exitRule(listener) {
        if (listener.exitKaoFile)
            listener.exitKaoFile(this);
    }
    accept(visitor) {
        if (visitor.visitKaoFile)
            return visitor.visitKaoFile(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], KaoFileContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], KaoFileContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], KaoFileContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], KaoFileContext.prototype, "accept", null);
exports.KaoFileContext = KaoFileContext;
class YmlEntityContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classDeclaration() {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    }
    staticDeclaration() {
        return this.tryGetRuleContext(0, StaticDeclarationContext);
    }
    complete() {
        return this.tryGetRuleContext(0, CompleteContext);
    }
    methodDeclaration() {
        return this.tryGetRuleContext(0, MethodDeclarationContext);
    }
    SEMICOLON() { return this.tryGetToken(YmlToBdlParser.SEMICOLON, 0); }
    yenum() {
        return this.tryGetRuleContext(0, YenumContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_ymlEntity; }
    enterRule(listener) {
        if (listener.enterYmlEntity)
            listener.enterYmlEntity(this);
    }
    exitRule(listener) {
        if (listener.exitYmlEntity)
            listener.exitYmlEntity(this);
    }
    accept(visitor) {
        if (visitor.visitYmlEntity)
            return visitor.visitYmlEntity(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], YmlEntityContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], YmlEntityContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], YmlEntityContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], YmlEntityContext.prototype, "accept", null);
exports.YmlEntityContext = YmlEntityContext;
class YenumContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ENUM() { return this.getToken(YmlToBdlParser.ENUM, 0); }
    OPEN_BRACE() { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
    CLOSE_BRACE() { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
    SEMICOLON() { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
    ymlId() {
        return this.getRuleContext(0, YmlIdContext);
    }
    enumElement(i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumElementContext);
        }
        else {
            return this.getRuleContext(i, EnumElementContext);
        }
    }
    field(i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.COMMA);
        }
        else {
            return this.getToken(YmlToBdlParser.COMMA, i);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_yenum; }
    enterRule(listener) {
        if (listener.enterYenum)
            listener.enterYenum(this);
    }
    exitRule(listener) {
        if (listener.exitYenum)
            listener.exitYenum(this);
    }
    accept(visitor) {
        if (visitor.visitYenum)
            return visitor.visitYenum(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], YenumContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], YenumContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], YenumContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], YenumContext.prototype, "accept", null);
exports.YenumContext = YenumContext;
class EnumElementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ymlId() {
        return this.getRuleContext(0, YmlIdContext);
    }
    field(i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_enumElement; }
    enterRule(listener) {
        if (listener.enterEnumElement)
            listener.enterEnumElement(this);
    }
    exitRule(listener) {
        if (listener.exitEnumElement)
            listener.exitEnumElement(this);
    }
    accept(visitor) {
        if (visitor.visitEnumElement)
            return visitor.visitEnumElement(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], EnumElementContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], EnumElementContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], EnumElementContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], EnumElementContext.prototype, "accept", null);
exports.EnumElementContext = EnumElementContext;
class ClassDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classDeclarationIntro() {
        return this.getRuleContext(0, ClassDeclarationIntroContext);
    }
    SEMICOLON(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.SEMICOLON);
        }
        else {
            return this.getToken(YmlToBdlParser.SEMICOLON, i);
        }
    }
    classImplementation() {
        return this.getRuleContext(0, ClassImplementationContext);
    }
    field(i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    }
    memberDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(MemberDeclarationContext);
        }
        else {
            return this.getRuleContext(i, MemberDeclarationContext);
        }
    }
    methodDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(MethodDeclarationContext);
        }
        else {
            return this.getRuleContext(i, MethodDeclarationContext);
        }
    }
    classPropertiesBlock() {
        return this.tryGetRuleContext(0, ClassPropertiesBlockContext);
    }
    EOF() { return this.tryGetToken(YmlToBdlParser.EOF, 0); }
    freeText(i) {
        if (i === undefined) {
            return this.getRuleContexts(FreeTextContext);
        }
        else {
            return this.getRuleContext(i, FreeTextContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_classDeclaration; }
    enterRule(listener) {
        if (listener.enterClassDeclaration)
            listener.enterClassDeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitClassDeclaration)
            listener.exitClassDeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitClassDeclaration)
            return visitor.visitClassDeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ClassDeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ClassDeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ClassDeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ClassDeclarationContext.prototype, "accept", null);
exports.ClassDeclarationContext = ClassDeclarationContext;
class ClassImplementationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IMPLEMENTATION() { return this.getToken(YmlToBdlParser.IMPLEMENTATION, 0); }
    ymlId() {
        return this.getRuleContext(0, YmlIdContext);
    }
    override() {
        return this.tryGetRuleContext(0, OverrideContext);
    }
    field(i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_classImplementation; }
    enterRule(listener) {
        if (listener.enterClassImplementation)
            listener.enterClassImplementation(this);
    }
    exitRule(listener) {
        if (listener.exitClassImplementation)
            listener.exitClassImplementation(this);
    }
    accept(visitor) {
        if (visitor.visitClassImplementation)
            return visitor.visitClassImplementation(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ClassImplementationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ClassImplementationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ClassImplementationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ClassImplementationContext.prototype, "accept", null);
exports.ClassImplementationContext = ClassImplementationContext;
class OverrideContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    OVERRIDE() { return this.getToken(YmlToBdlParser.OVERRIDE, 0); }
    OPEN_BRACE() { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
    CLOSE_BRACE() { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
    freeText() {
        return this.tryGetRuleContext(0, FreeTextContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_override; }
    enterRule(listener) {
        if (listener.enterOverride)
            listener.enterOverride(this);
    }
    exitRule(listener) {
        if (listener.exitOverride)
            listener.exitOverride(this);
    }
    accept(visitor) {
        if (visitor.visitOverride)
            return visitor.visitOverride(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OverrideContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OverrideContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OverrideContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OverrideContext.prototype, "accept", null);
exports.OverrideContext = OverrideContext;
class ClassDeclarationIntroContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INTERFACE() { return this.getToken(YmlToBdlParser.INTERFACE, 0); }
    ymlId() {
        return this.getRuleContext(0, YmlIdContext);
    }
    extendsBlock() {
        return this.tryGetRuleContext(0, ExtendsBlockContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_classDeclarationIntro; }
    enterRule(listener) {
        if (listener.enterClassDeclarationIntro)
            listener.enterClassDeclarationIntro(this);
    }
    exitRule(listener) {
        if (listener.exitClassDeclarationIntro)
            listener.exitClassDeclarationIntro(this);
    }
    accept(visitor) {
        if (visitor.visitClassDeclarationIntro)
            return visitor.visitClassDeclarationIntro(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ClassDeclarationIntroContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ClassDeclarationIntroContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ClassDeclarationIntroContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ClassDeclarationIntroContext.prototype, "accept", null);
exports.ClassDeclarationIntroContext = ClassDeclarationIntroContext;
class ExtendsBlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EXTENDS() { return this.getToken(YmlToBdlParser.EXTENDS, 0); }
    parentClassName(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParentClassNameContext);
        }
        else {
            return this.getRuleContext(i, ParentClassNameContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.COMMA);
        }
        else {
            return this.getToken(YmlToBdlParser.COMMA, i);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_extendsBlock; }
    enterRule(listener) {
        if (listener.enterExtendsBlock)
            listener.enterExtendsBlock(this);
    }
    exitRule(listener) {
        if (listener.exitExtendsBlock)
            listener.exitExtendsBlock(this);
    }
    accept(visitor) {
        if (visitor.visitExtendsBlock)
            return visitor.visitExtendsBlock(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExtendsBlockContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExtendsBlockContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExtendsBlockContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExtendsBlockContext.prototype, "accept", null);
exports.ExtendsBlockContext = ExtendsBlockContext;
class ParentClassNameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ymlId() {
        return this.getRuleContext(0, YmlIdContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_parentClassName; }
    enterRule(listener) {
        if (listener.enterParentClassName)
            listener.enterParentClassName(this);
    }
    exitRule(listener) {
        if (listener.exitParentClassName)
            listener.exitParentClassName(this);
    }
    accept(visitor) {
        if (visitor.visitParentClassName)
            return visitor.visitParentClassName(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ParentClassNameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ParentClassNameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ParentClassNameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ParentClassNameContext.prototype, "accept", null);
exports.ParentClassNameContext = ParentClassNameContext;
class MemberTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ymlId() {
        return this.tryGetRuleContext(0, YmlIdContext);
    }
    FIELD() { return this.tryGetToken(YmlToBdlParser.FIELD, 0); }
    get ruleIndex() { return YmlToBdlParser.RULE_memberType; }
    enterRule(listener) {
        if (listener.enterMemberType)
            listener.enterMemberType(this);
    }
    exitRule(listener) {
        if (listener.exitMemberType)
            listener.exitMemberType(this);
    }
    accept(visitor) {
        if (visitor.visitMemberType)
            return visitor.visitMemberType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MemberTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MemberTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MemberTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MemberTypeContext.prototype, "accept", null);
exports.MemberTypeContext = MemberTypeContext;
class SynonymContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._synonymElements = [];
    }
    SYNONYM() { return this.getToken(YmlToBdlParser.SYNONYM, 0); }
    listWithBrace() {
        return this.tryGetRuleContext(0, ListWithBraceContext);
    }
    OPEN_PAR() { return this.tryGetToken(YmlToBdlParser.OPEN_PAR, 0); }
    CLOSE_PAR() { return this.tryGetToken(YmlToBdlParser.CLOSE_PAR, 0); }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.COMMA);
        }
        else {
            return this.getToken(YmlToBdlParser.COMMA, i);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_synonym; }
    enterRule(listener) {
        if (listener.enterSynonym)
            listener.enterSynonym(this);
    }
    exitRule(listener) {
        if (listener.exitSynonym)
            listener.exitSynonym(this);
    }
    accept(visitor) {
        if (visitor.visitSynonym)
            return visitor.visitSynonym(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], SynonymContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], SynonymContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], SynonymContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], SynonymContext.prototype, "accept", null);
exports.SynonymContext = SynonymContext;
class MemberDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    memberType() {
        return this.getRuleContext(0, MemberTypeContext);
    }
    ymlId() {
        return this.getRuleContext(0, YmlIdContext);
    }
    field(i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_memberDeclaration; }
    enterRule(listener) {
        if (listener.enterMemberDeclaration)
            listener.enterMemberDeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitMemberDeclaration)
            listener.exitMemberDeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitMemberDeclaration)
            return visitor.visitMemberDeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MemberDeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MemberDeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MemberDeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MemberDeclarationContext.prototype, "accept", null);
exports.MemberDeclarationContext = MemberDeclarationContext;
class PathContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ymlId(i) {
        if (i === undefined) {
            return this.getRuleContexts(YmlIdContext);
        }
        else {
            return this.getRuleContext(i, YmlIdContext);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.DOT);
        }
        else {
            return this.getToken(YmlToBdlParser.DOT, i);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_path; }
    enterRule(listener) {
        if (listener.enterPath)
            listener.enterPath(this);
    }
    exitRule(listener) {
        if (listener.exitPath)
            listener.exitPath(this);
    }
    accept(visitor) {
        if (visitor.visitPath)
            return visitor.visitPath(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PathContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PathContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PathContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PathContext.prototype, "accept", null);
exports.PathContext = PathContext;
class YmlIdOrPathContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ymlId() {
        return this.tryGetRuleContext(0, YmlIdContext);
    }
    path() {
        return this.tryGetRuleContext(0, PathContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_ymlIdOrPath; }
    enterRule(listener) {
        if (listener.enterYmlIdOrPath)
            listener.enterYmlIdOrPath(this);
    }
    exitRule(listener) {
        if (listener.exitYmlIdOrPath)
            listener.exitYmlIdOrPath(this);
    }
    accept(visitor) {
        if (visitor.visitYmlIdOrPath)
            return visitor.visitYmlIdOrPath(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], YmlIdOrPathContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], YmlIdOrPathContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], YmlIdOrPathContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], YmlIdOrPathContext.prototype, "accept", null);
exports.YmlIdOrPathContext = YmlIdOrPathContext;
class FieldContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._optionValues = [];
    }
    ymlIdOrPath() {
        return this.getRuleContext(0, YmlIdOrPathContext);
    }
    FIELD_INTRO() { return this.tryGetToken(YmlToBdlParser.FIELD_INTRO, 0); }
    REPLACE_FIELD_VALUE_INTRO() { return this.tryGetToken(YmlToBdlParser.REPLACE_FIELD_VALUE_INTRO, 0); }
    REMOVE_FIELD() { return this.tryGetToken(YmlToBdlParser.REMOVE_FIELD, 0); }
    ADD_FIELD() { return this.tryGetToken(YmlToBdlParser.ADD_FIELD, 0); }
    valueOrCondition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueOrConditionContext);
        }
        else {
            return this.getRuleContext(i, ValueOrConditionContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.COMMA);
        }
        else {
            return this.getToken(YmlToBdlParser.COMMA, i);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_field; }
    enterRule(listener) {
        if (listener.enterField)
            listener.enterField(this);
    }
    exitRule(listener) {
        if (listener.exitField)
            listener.exitField(this);
    }
    accept(visitor) {
        if (visitor.visitField)
            return visitor.visitField(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FieldContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FieldContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FieldContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FieldContext.prototype, "accept", null);
exports.FieldContext = FieldContext;
class ClassPropertiesBlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CLASSPROPERTIES() { return this.getToken(YmlToBdlParser.CLASSPROPERTIES, 0); }
    field(i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_classPropertiesBlock; }
    enterRule(listener) {
        if (listener.enterClassPropertiesBlock)
            listener.enterClassPropertiesBlock(this);
    }
    exitRule(listener) {
        if (listener.exitClassPropertiesBlock)
            listener.exitClassPropertiesBlock(this);
    }
    accept(visitor) {
        if (visitor.visitClassPropertiesBlock)
            return visitor.visitClassPropertiesBlock(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ClassPropertiesBlockContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ClassPropertiesBlockContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ClassPropertiesBlockContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ClassPropertiesBlockContext.prototype, "accept", null);
exports.ClassPropertiesBlockContext = ClassPropertiesBlockContext;
class DocumentationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DOCUMENTATION() { return this.getToken(YmlToBdlParser.DOCUMENTATION, 0); }
    get ruleIndex() { return YmlToBdlParser.RULE_documentation; }
    enterRule(listener) {
        if (listener.enterDocumentation)
            listener.enterDocumentation(this);
    }
    exitRule(listener) {
        if (listener.exitDocumentation)
            listener.exitDocumentation(this);
    }
    accept(visitor) {
        if (visitor.visitDocumentation)
            return visitor.visitDocumentation(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DocumentationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DocumentationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DocumentationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DocumentationContext.prototype, "accept", null);
exports.DocumentationContext = DocumentationContext;
class ValueOrConditionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    combinedComparison() {
        return this.tryGetRuleContext(0, CombinedComparisonContext);
    }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    hashMapKeyValue() {
        return this.tryGetRuleContext(0, HashMapKeyValueContext);
    }
    documentation() {
        return this.tryGetRuleContext(0, DocumentationContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_valueOrCondition; }
    enterRule(listener) {
        if (listener.enterValueOrCondition)
            listener.enterValueOrCondition(this);
    }
    exitRule(listener) {
        if (listener.exitValueOrCondition)
            listener.exitValueOrCondition(this);
    }
    accept(visitor) {
        if (visitor.visitValueOrCondition)
            return visitor.visitValueOrCondition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ValueOrConditionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ValueOrConditionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ValueOrConditionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ValueOrConditionContext.prototype, "accept", null);
exports.ValueOrConditionContext = ValueOrConditionContext;
class HashMapKeyValueContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    nonArithmeticValue() {
        return this.getRuleContext(0, NonArithmeticValueContext);
    }
    COLON() { return this.getToken(YmlToBdlParser.COLON, 0); }
    hashMapValue() {
        return this.getRuleContext(0, HashMapValueContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_hashMapKeyValue; }
    enterRule(listener) {
        if (listener.enterHashMapKeyValue)
            listener.enterHashMapKeyValue(this);
    }
    exitRule(listener) {
        if (listener.exitHashMapKeyValue)
            listener.exitHashMapKeyValue(this);
    }
    accept(visitor) {
        if (visitor.visitHashMapKeyValue)
            return visitor.visitHashMapKeyValue(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], HashMapKeyValueContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], HashMapKeyValueContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], HashMapKeyValueContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], HashMapKeyValueContext.prototype, "accept", null);
exports.HashMapKeyValueContext = HashMapKeyValueContext;
class HashMapValueContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    combinedComparison() {
        return this.tryGetRuleContext(0, CombinedComparisonContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_hashMapValue; }
    enterRule(listener) {
        if (listener.enterHashMapValue)
            listener.enterHashMapValue(this);
    }
    exitRule(listener) {
        if (listener.exitHashMapValue)
            listener.exitHashMapValue(this);
    }
    accept(visitor) {
        if (visitor.visitHashMapValue)
            return visitor.visitHashMapValue(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], HashMapValueContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], HashMapValueContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], HashMapValueContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], HashMapValueContext.prototype, "accept", null);
exports.HashMapValueContext = HashMapValueContext;
class ValueContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    granule() {
        return this.tryGetRuleContext(0, GranuleContext);
    }
    inlineDeclaration() {
        return this.tryGetRuleContext(0, InlineDeclarationContext);
    }
    nonArithmeticValue() {
        return this.tryGetRuleContext(0, NonArithmeticValueContext);
    }
    arithmeticExpression() {
        return this.tryGetRuleContext(0, ArithmeticExpressionContext);
    }
    synonym() {
        return this.tryGetRuleContext(0, SynonymContext);
    }
    ifExprBlock() {
        return this.tryGetRuleContext(0, IfExprBlockContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_value; }
    enterRule(listener) {
        if (listener.enterValue)
            listener.enterValue(this);
    }
    exitRule(listener) {
        if (listener.exitValue)
            listener.exitValue(this);
    }
    accept(visitor) {
        if (visitor.visitValue)
            return visitor.visitValue(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ValueContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ValueContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ValueContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ValueContext.prototype, "accept", null);
exports.ValueContext = ValueContext;
class IfExprBlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IF_EXPR() { return this.getToken(YmlToBdlParser.IF_EXPR, 0); }
    OPEN_PAR() { return this.getToken(YmlToBdlParser.OPEN_PAR, 0); }
    combinedComparison() {
        return this.getRuleContext(0, CombinedComparisonContext);
    }
    CLOSE_PAR() { return this.getToken(YmlToBdlParser.CLOSE_PAR, 0); }
    THEN() { return this.getToken(YmlToBdlParser.THEN, 0); }
    ELSE() { return this.getToken(YmlToBdlParser.ELSE, 0); }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_ifExprBlock; }
    enterRule(listener) {
        if (listener.enterIfExprBlock)
            listener.enterIfExprBlock(this);
    }
    exitRule(listener) {
        if (listener.exitIfExprBlock)
            listener.exitIfExprBlock(this);
    }
    accept(visitor) {
        if (visitor.visitIfExprBlock)
            return visitor.visitIfExprBlock(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], IfExprBlockContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], IfExprBlockContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], IfExprBlockContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], IfExprBlockContext.prototype, "accept", null);
exports.IfExprBlockContext = IfExprBlockContext;
class NonArithmeticValueContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    list() {
        return this.tryGetRuleContext(0, ListContext);
    }
    listWithBrace() {
        return this.tryGetRuleContext(0, ListWithBraceContext);
    }
    chainedCall() {
        return this.tryGetRuleContext(0, ChainedCallContext);
    }
    DOUBLE() { return this.tryGetToken(YmlToBdlParser.DOUBLE, 0); }
    STRING() { return this.tryGetToken(YmlToBdlParser.STRING, 0); }
    DATE() { return this.tryGetToken(YmlToBdlParser.DATE, 0); }
    get ruleIndex() { return YmlToBdlParser.RULE_nonArithmeticValue; }
    enterRule(listener) {
        if (listener.enterNonArithmeticValue)
            listener.enterNonArithmeticValue(this);
    }
    exitRule(listener) {
        if (listener.exitNonArithmeticValue)
            listener.exitNonArithmeticValue(this);
    }
    accept(visitor) {
        if (visitor.visitNonArithmeticValue)
            return visitor.visitNonArithmeticValue(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NonArithmeticValueContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NonArithmeticValueContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NonArithmeticValueContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NonArithmeticValueContext.prototype, "accept", null);
exports.NonArithmeticValueContext = NonArithmeticValueContext;
class InstanciationVariableContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    QUESTION_MARK() { return this.getToken(YmlToBdlParser.QUESTION_MARK, 0); }
    ymlId() {
        return this.getRuleContext(0, YmlIdContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_instanciationVariable; }
    enterRule(listener) {
        if (listener.enterInstanciationVariable)
            listener.enterInstanciationVariable(this);
    }
    exitRule(listener) {
        if (listener.exitInstanciationVariable)
            listener.exitInstanciationVariable(this);
    }
    accept(visitor) {
        if (visitor.visitInstanciationVariable)
            return visitor.visitInstanciationVariable(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InstanciationVariableContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InstanciationVariableContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InstanciationVariableContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InstanciationVariableContext.prototype, "accept", null);
exports.InstanciationVariableContext = InstanciationVariableContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ymlId() {
        return this.tryGetRuleContext(0, YmlIdContext);
    }
    functionCall() {
        return this.tryGetRuleContext(0, FunctionCallContext);
    }
    instanciationVariable() {
        return this.tryGetRuleContext(0, InstanciationVariableContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_expression; }
    enterRule(listener) {
        if (listener.enterExpression)
            listener.enterExpression(this);
    }
    exitRule(listener) {
        if (listener.exitExpression)
            listener.exitExpression(this);
    }
    accept(visitor) {
        if (visitor.visitExpression)
            return visitor.visitExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "accept", null);
exports.ExpressionContext = ExpressionContext;
class FunctionCallContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ymlId() {
        return this.getRuleContext(0, YmlIdContext);
    }
    OPEN_PAR() { return this.getToken(YmlToBdlParser.OPEN_PAR, 0); }
    CLOSE_PAR() { return this.getToken(YmlToBdlParser.CLOSE_PAR, 0); }
    functionArgument(i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionArgumentContext);
        }
        else {
            return this.getRuleContext(i, FunctionArgumentContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.COMMA);
        }
        else {
            return this.getToken(YmlToBdlParser.COMMA, i);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_functionCall; }
    enterRule(listener) {
        if (listener.enterFunctionCall)
            listener.enterFunctionCall(this);
    }
    exitRule(listener) {
        if (listener.exitFunctionCall)
            listener.exitFunctionCall(this);
    }
    accept(visitor) {
        if (visitor.visitFunctionCall)
            return visitor.visitFunctionCall(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FunctionCallContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FunctionCallContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FunctionCallContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FunctionCallContext.prototype, "accept", null);
exports.FunctionCallContext = FunctionCallContext;
class FunctionArgumentContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    value() {
        return this.getRuleContext(0, ValueContext);
    }
    COLON() { return this.tryGetToken(YmlToBdlParser.COLON, 0); }
    ID() { return this.tryGetToken(YmlToBdlParser.ID, 0); }
    get ruleIndex() { return YmlToBdlParser.RULE_functionArgument; }
    enterRule(listener) {
        if (listener.enterFunctionArgument)
            listener.enterFunctionArgument(this);
    }
    exitRule(listener) {
        if (listener.exitFunctionArgument)
            listener.exitFunctionArgument(this);
    }
    accept(visitor) {
        if (visitor.visitFunctionArgument)
            return visitor.visitFunctionArgument(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FunctionArgumentContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FunctionArgumentContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FunctionArgumentContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FunctionArgumentContext.prototype, "accept", null);
exports.FunctionArgumentContext = FunctionArgumentContext;
class ChainedCallContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    expressionMarker(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionMarkerContext);
        }
        else {
            return this.getRuleContext(i, ExpressionMarkerContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_chainedCall; }
    enterRule(listener) {
        if (listener.enterChainedCall)
            listener.enterChainedCall(this);
    }
    exitRule(listener) {
        if (listener.exitChainedCall)
            listener.exitChainedCall(this);
    }
    accept(visitor) {
        if (visitor.visitChainedCall)
            return visitor.visitChainedCall(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ChainedCallContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ChainedCallContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ChainedCallContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ChainedCallContext.prototype, "accept", null);
exports.ChainedCallContext = ChainedCallContext;
class InlineDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INLINE_DECL_INTRO() { return this.getToken(YmlToBdlParser.INLINE_DECL_INTRO, 0); }
    SEMICOLON() { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
    ymlId(i) {
        if (i === undefined) {
            return this.getRuleContexts(YmlIdContext);
        }
        else {
            return this.getRuleContext(i, YmlIdContext);
        }
    }
    fieldValue(i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldValueContext);
        }
        else {
            return this.getRuleContext(i, FieldValueContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_inlineDeclaration; }
    enterRule(listener) {
        if (listener.enterInlineDeclaration)
            listener.enterInlineDeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitInlineDeclaration)
            listener.exitInlineDeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitInlineDeclaration)
            return visitor.visitInlineDeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InlineDeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InlineDeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InlineDeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InlineDeclarationContext.prototype, "accept", null);
exports.InlineDeclarationContext = InlineDeclarationContext;
class InlineOperationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    ymlId() {
        return this.getRuleContext(0, YmlIdContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_inlineOperation; }
    enterRule(listener) {
        if (listener.enterInlineOperation)
            listener.enterInlineOperation(this);
    }
    exitRule(listener) {
        if (listener.exitInlineOperation)
            listener.exitInlineOperation(this);
    }
    accept(visitor) {
        if (visitor.visitInlineOperation)
            return visitor.visitInlineOperation(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InlineOperationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InlineOperationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InlineOperationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InlineOperationContext.prototype, "accept", null);
exports.InlineOperationContext = InlineOperationContext;
class FieldValueContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    field() {
        return this.tryGetRuleContext(0, FieldContext);
    }
    granule() {
        return this.tryGetRuleContext(0, GranuleContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_fieldValue; }
    enterRule(listener) {
        if (listener.enterFieldValue)
            listener.enterFieldValue(this);
    }
    exitRule(listener) {
        if (listener.exitFieldValue)
            listener.exitFieldValue(this);
    }
    accept(visitor) {
        if (visitor.visitFieldValue)
            return visitor.visitFieldValue(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FieldValueContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FieldValueContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FieldValueContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FieldValueContext.prototype, "accept", null);
exports.FieldValueContext = FieldValueContext;
class MethodDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    methodIntro() {
        return this.getRuleContext(0, MethodIntroContext);
    }
    field(i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_methodDeclaration; }
    enterRule(listener) {
        if (listener.enterMethodDeclaration)
            listener.enterMethodDeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitMethodDeclaration)
            listener.exitMethodDeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitMethodDeclaration)
            return visitor.visitMethodDeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MethodDeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MethodDeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MethodDeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MethodDeclarationContext.prototype, "accept", null);
exports.MethodDeclarationContext = MethodDeclarationContext;
class MethodIntroContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ymlId() {
        return this.getRuleContext(0, YmlIdContext);
    }
    METHOD() { return this.tryGetToken(YmlToBdlParser.METHOD, 0); }
    FUNCTION() { return this.tryGetToken(YmlToBdlParser.FUNCTION, 0); }
    TEXT_METHOD() { return this.tryGetToken(YmlToBdlParser.TEXT_METHOD, 0); }
    ARGS() { return this.tryGetToken(YmlToBdlParser.ARGS, 0); }
    OPEN_BRACE() { return this.tryGetToken(YmlToBdlParser.OPEN_BRACE, 0); }
    variableBlockContent() {
        return this.tryGetRuleContext(0, VariableBlockContentContext);
    }
    CLOSE_BRACE() { return this.tryGetToken(YmlToBdlParser.CLOSE_BRACE, 0); }
    OPEN_PAR() { return this.tryGetToken(YmlToBdlParser.OPEN_PAR, 0); }
    argumentList() {
        return this.tryGetRuleContext(0, ArgumentListContext);
    }
    CLOSE_PAR() { return this.tryGetToken(YmlToBdlParser.CLOSE_PAR, 0); }
    get ruleIndex() { return YmlToBdlParser.RULE_methodIntro; }
    enterRule(listener) {
        if (listener.enterMethodIntro)
            listener.enterMethodIntro(this);
    }
    exitRule(listener) {
        if (listener.exitMethodIntro)
            listener.exitMethodIntro(this);
    }
    accept(visitor) {
        if (visitor.visitMethodIntro)
            return visitor.visitMethodIntro(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MethodIntroContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MethodIntroContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MethodIntroContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MethodIntroContext.prototype, "accept", null);
exports.MethodIntroContext = MethodIntroContext;
class ArgumentListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    mandatoryArgs() {
        return this.tryGetRuleContext(0, MandatoryArgsContext);
    }
    optionalArgs() {
        return this.tryGetRuleContext(0, OptionalArgsContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_argumentList; }
    enterRule(listener) {
        if (listener.enterArgumentList)
            listener.enterArgumentList(this);
    }
    exitRule(listener) {
        if (listener.exitArgumentList)
            listener.exitArgumentList(this);
    }
    accept(visitor) {
        if (visitor.visitArgumentList)
            return visitor.visitArgumentList(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ArgumentListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ArgumentListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ArgumentListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ArgumentListContext.prototype, "accept", null);
exports.ArgumentListContext = ArgumentListContext;
class MandatoryArgsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    mandatoryArgDecl(i) {
        if (i === undefined) {
            return this.getRuleContexts(MandatoryArgDeclContext);
        }
        else {
            return this.getRuleContext(i, MandatoryArgDeclContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.COMMA);
        }
        else {
            return this.getToken(YmlToBdlParser.COMMA, i);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_mandatoryArgs; }
    enterRule(listener) {
        if (listener.enterMandatoryArgs)
            listener.enterMandatoryArgs(this);
    }
    exitRule(listener) {
        if (listener.exitMandatoryArgs)
            listener.exitMandatoryArgs(this);
    }
    accept(visitor) {
        if (visitor.visitMandatoryArgs)
            return visitor.visitMandatoryArgs(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MandatoryArgsContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MandatoryArgsContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MandatoryArgsContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MandatoryArgsContext.prototype, "accept", null);
exports.MandatoryArgsContext = MandatoryArgsContext;
class MandatoryArgDeclContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ymlId(i) {
        if (i === undefined) {
            return this.getRuleContexts(YmlIdContext);
        }
        else {
            return this.getRuleContext(i, YmlIdContext);
        }
    }
    argOptionList() {
        return this.tryGetRuleContext(0, ArgOptionListContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_mandatoryArgDecl; }
    enterRule(listener) {
        if (listener.enterMandatoryArgDecl)
            listener.enterMandatoryArgDecl(this);
    }
    exitRule(listener) {
        if (listener.exitMandatoryArgDecl)
            listener.exitMandatoryArgDecl(this);
    }
    accept(visitor) {
        if (visitor.visitMandatoryArgDecl)
            return visitor.visitMandatoryArgDecl(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MandatoryArgDeclContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MandatoryArgDeclContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MandatoryArgDeclContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MandatoryArgDeclContext.prototype, "accept", null);
exports.MandatoryArgDeclContext = MandatoryArgDeclContext;
class OptionalArgsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._optionalArguments = [];
    }
    OPEN_BRACE() { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
    CLOSE_BRACE() { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
    optionalArgDecl(i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionalArgDeclContext);
        }
        else {
            return this.getRuleContext(i, OptionalArgDeclContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.COMMA);
        }
        else {
            return this.getToken(YmlToBdlParser.COMMA, i);
        }
    }
    ymlId() {
        return this.tryGetRuleContext(0, YmlIdContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_optionalArgs; }
    enterRule(listener) {
        if (listener.enterOptionalArgs)
            listener.enterOptionalArgs(this);
    }
    exitRule(listener) {
        if (listener.exitOptionalArgs)
            listener.exitOptionalArgs(this);
    }
    accept(visitor) {
        if (visitor.visitOptionalArgs)
            return visitor.visitOptionalArgs(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OptionalArgsContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OptionalArgsContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OptionalArgsContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OptionalArgsContext.prototype, "accept", null);
exports.OptionalArgsContext = OptionalArgsContext;
class OptionalArgDeclContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COLON() { return this.getToken(YmlToBdlParser.COLON, 0); }
    ymlId(i) {
        if (i === undefined) {
            return this.getRuleContexts(YmlIdContext);
        }
        else {
            return this.getRuleContext(i, YmlIdContext);
        }
    }
    OPEN_BRACKET() { return this.tryGetToken(YmlToBdlParser.OPEN_BRACKET, 0); }
    CLOSE_BRACKET() { return this.tryGetToken(YmlToBdlParser.CLOSE_BRACKET, 0); }
    argOptionList() {
        return this.tryGetRuleContext(0, ArgOptionListContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_optionalArgDecl; }
    enterRule(listener) {
        if (listener.enterOptionalArgDecl)
            listener.enterOptionalArgDecl(this);
    }
    exitRule(listener) {
        if (listener.exitOptionalArgDecl)
            listener.exitOptionalArgDecl(this);
    }
    accept(visitor) {
        if (visitor.visitOptionalArgDecl)
            return visitor.visitOptionalArgDecl(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OptionalArgDeclContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OptionalArgDeclContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OptionalArgDeclContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OptionalArgDeclContext.prototype, "accept", null);
exports.OptionalArgDeclContext = OptionalArgDeclContext;
class ArgOptionListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._arguments = [];
    }
    OPEN_BRACE() { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
    CLOSE_BRACE() { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
    argOptionBlock(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgOptionBlockContext);
        }
        else {
            return this.getRuleContext(i, ArgOptionBlockContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.COMMA);
        }
        else {
            return this.getToken(YmlToBdlParser.COMMA, i);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_argOptionList; }
    enterRule(listener) {
        if (listener.enterArgOptionList)
            listener.enterArgOptionList(this);
    }
    exitRule(listener) {
        if (listener.exitArgOptionList)
            listener.exitArgOptionList(this);
    }
    accept(visitor) {
        if (visitor.visitArgOptionList)
            return visitor.visitArgOptionList(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ArgOptionListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ArgOptionListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ArgOptionListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ArgOptionListContext.prototype, "accept", null);
exports.ArgOptionListContext = ArgOptionListContext;
class ArgOptionBlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ymlId() {
        return this.getRuleContext(0, YmlIdContext);
    }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_argOptionBlock; }
    enterRule(listener) {
        if (listener.enterArgOptionBlock)
            listener.enterArgOptionBlock(this);
    }
    exitRule(listener) {
        if (listener.exitArgOptionBlock)
            listener.exitArgOptionBlock(this);
    }
    accept(visitor) {
        if (visitor.visitArgOptionBlock)
            return visitor.visitArgOptionBlock(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ArgOptionBlockContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ArgOptionBlockContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ArgOptionBlockContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ArgOptionBlockContext.prototype, "accept", null);
exports.ArgOptionBlockContext = ArgOptionBlockContext;
class Order1BlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    instanciationCondition() {
        return this.getRuleContext(0, InstanciationConditionContext);
    }
    conditionBlock() {
        return this.tryGetRuleContext(0, ConditionBlockContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_order1Block; }
    enterRule(listener) {
        if (listener.enterOrder1Block)
            listener.enterOrder1Block(this);
    }
    exitRule(listener) {
        if (listener.exitOrder1Block)
            listener.exitOrder1Block(this);
    }
    accept(visitor) {
        if (visitor.visitOrder1Block)
            return visitor.visitOrder1Block(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Order1BlockContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Order1BlockContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Order1BlockContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Order1BlockContext.prototype, "accept", null);
exports.Order1BlockContext = Order1BlockContext;
class InstanciationConditionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    inlineOperation() {
        return this.getRuleContext(0, InlineOperationContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_instanciationCondition; }
    enterRule(listener) {
        if (listener.enterInstanciationCondition)
            listener.enterInstanciationCondition(this);
    }
    exitRule(listener) {
        if (listener.exitInstanciationCondition)
            listener.exitInstanciationCondition(this);
    }
    accept(visitor) {
        if (visitor.visitInstanciationCondition)
            return visitor.visitInstanciationCondition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InstanciationConditionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InstanciationConditionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InstanciationConditionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InstanciationConditionContext.prototype, "accept", null);
exports.InstanciationConditionContext = InstanciationConditionContext;
class ForEachInstanciationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COMMA() { return this.getToken(YmlToBdlParser.COMMA, 0); }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_forEachInstanciation; }
    enterRule(listener) {
        if (listener.enterForEachInstanciation)
            listener.enterForEachInstanciation(this);
    }
    exitRule(listener) {
        if (listener.exitForEachInstanciation)
            listener.exitForEachInstanciation(this);
    }
    accept(visitor) {
        if (visitor.visitForEachInstanciation)
            return visitor.visitForEachInstanciation(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ForEachInstanciationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ForEachInstanciationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ForEachInstanciationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ForEachInstanciationContext.prototype, "accept", null);
exports.ForEachInstanciationContext = ForEachInstanciationContext;
class Order1FullConditionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    conditionBlock() {
        return this.tryGetRuleContext(0, ConditionBlockContext);
    }
    order1Block(i) {
        if (i === undefined) {
            return this.getRuleContexts(Order1BlockContext);
        }
        else {
            return this.getRuleContext(i, Order1BlockContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_order1FullCondition; }
    enterRule(listener) {
        if (listener.enterOrder1FullCondition)
            listener.enterOrder1FullCondition(this);
    }
    exitRule(listener) {
        if (listener.exitOrder1FullCondition)
            listener.exitOrder1FullCondition(this);
    }
    accept(visitor) {
        if (visitor.visitOrder1FullCondition)
            return visitor.visitOrder1FullCondition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Order1FullConditionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Order1FullConditionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Order1FullConditionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Order1FullConditionContext.prototype, "accept", null);
exports.Order1FullConditionContext = Order1FullConditionContext;
class ClosedOrder1FullConditionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    order1FullCondition() {
        return this.getRuleContext(0, Order1FullConditionContext);
    }
    EOF() { return this.getToken(YmlToBdlParser.EOF, 0); }
    get ruleIndex() { return YmlToBdlParser.RULE_closedOrder1FullCondition; }
    enterRule(listener) {
        if (listener.enterClosedOrder1FullCondition)
            listener.enterClosedOrder1FullCondition(this);
    }
    exitRule(listener) {
        if (listener.exitClosedOrder1FullCondition)
            listener.exitClosedOrder1FullCondition(this);
    }
    accept(visitor) {
        if (visitor.visitClosedOrder1FullCondition)
            return visitor.visitClosedOrder1FullCondition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ClosedOrder1FullConditionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ClosedOrder1FullConditionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ClosedOrder1FullConditionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ClosedOrder1FullConditionContext.prototype, "accept", null);
exports.ClosedOrder1FullConditionContext = ClosedOrder1FullConditionContext;
class CombinedComparisonContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    OPEN_PAR() { return this.tryGetToken(YmlToBdlParser.OPEN_PAR, 0); }
    combinedComparison(i) {
        if (i === undefined) {
            return this.getRuleContexts(CombinedComparisonContext);
        }
        else {
            return this.getRuleContext(i, CombinedComparisonContext);
        }
    }
    CLOSE_PAR() { return this.tryGetToken(YmlToBdlParser.CLOSE_PAR, 0); }
    COND_AND() { return this.tryGetToken(YmlToBdlParser.COND_AND, 0); }
    COND_OR() { return this.tryGetToken(YmlToBdlParser.COND_OR, 0); }
    comparison() {
        return this.tryGetRuleContext(0, ComparisonContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_combinedComparison; }
    enterRule(listener) {
        if (listener.enterCombinedComparison)
            listener.enterCombinedComparison(this);
    }
    exitRule(listener) {
        if (listener.exitCombinedComparison)
            listener.exitCombinedComparison(this);
    }
    accept(visitor) {
        if (visitor.visitCombinedComparison)
            return visitor.visitCombinedComparison(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CombinedComparisonContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CombinedComparisonContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CombinedComparisonContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CombinedComparisonContext.prototype, "accept", null);
exports.CombinedComparisonContext = CombinedComparisonContext;
class ComparisonContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    comparisonOperator() {
        return this.getRuleContext(0, ComparisonOperatorContext);
    }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_comparison; }
    enterRule(listener) {
        if (listener.enterComparison)
            listener.enterComparison(this);
    }
    exitRule(listener) {
        if (listener.exitComparison)
            listener.exitComparison(this);
    }
    accept(visitor) {
        if (visitor.visitComparison)
            return visitor.visitComparison(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ComparisonContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ComparisonContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ComparisonContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ComparisonContext.prototype, "accept", null);
exports.ComparisonContext = ComparisonContext;
class ComparisonOperatorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EQUAL_COMP() { return this.tryGetToken(YmlToBdlParser.EQUAL_COMP, 0); }
    NOT_EQUALS() { return this.tryGetToken(YmlToBdlParser.NOT_EQUALS, 0); }
    LESS_OR_EQUAL() { return this.tryGetToken(YmlToBdlParser.LESS_OR_EQUAL, 0); }
    GREATE_OR_EQUAL() { return this.tryGetToken(YmlToBdlParser.GREATE_OR_EQUAL, 0); }
    STRICT_LESS() { return this.tryGetToken(YmlToBdlParser.STRICT_LESS, 0); }
    STRICT_GREAT() { return this.tryGetToken(YmlToBdlParser.STRICT_GREAT, 0); }
    get ruleIndex() { return YmlToBdlParser.RULE_comparisonOperator; }
    enterRule(listener) {
        if (listener.enterComparisonOperator)
            listener.enterComparisonOperator(this);
    }
    exitRule(listener) {
        if (listener.exitComparisonOperator)
            listener.exitComparisonOperator(this);
    }
    accept(visitor) {
        if (visitor.visitComparisonOperator)
            return visitor.visitComparisonOperator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ComparisonOperatorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ComparisonOperatorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ComparisonOperatorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ComparisonOperatorContext.prototype, "accept", null);
exports.ComparisonOperatorContext = ComparisonOperatorContext;
class AffectationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EQUAL_AFFECT() { return this.getToken(YmlToBdlParser.EQUAL_AFFECT, 0); }
    SEMICOLON() { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_affectation; }
    enterRule(listener) {
        if (listener.enterAffectation)
            listener.enterAffectation(this);
    }
    exitRule(listener) {
        if (listener.exitAffectation)
            listener.exitAffectation(this);
    }
    accept(visitor) {
        if (visitor.visitAffectation)
            return visitor.visitAffectation(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AffectationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AffectationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AffectationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AffectationContext.prototype, "accept", null);
exports.AffectationContext = AffectationContext;
class ConditionBlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    order0Condition(i) {
        if (i === undefined) {
            return this.getRuleContexts(Order0ConditionContext);
        }
        else {
            return this.getRuleContext(i, Order0ConditionContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_conditionBlock; }
    enterRule(listener) {
        if (listener.enterConditionBlock)
            listener.enterConditionBlock(this);
    }
    exitRule(listener) {
        if (listener.exitConditionBlock)
            listener.exitConditionBlock(this);
    }
    accept(visitor) {
        if (visitor.visitConditionBlock)
            return visitor.visitConditionBlock(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ConditionBlockContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ConditionBlockContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ConditionBlockContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ConditionBlockContext.prototype, "accept", null);
exports.ConditionBlockContext = ConditionBlockContext;
class Order0ConditionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    combinedComparison() {
        return this.tryGetRuleContext(0, CombinedComparisonContext);
    }
    existentialOperator() {
        return this.tryGetRuleContext(0, ExistentialOperatorContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_order0Condition; }
    enterRule(listener) {
        if (listener.enterOrder0Condition)
            listener.enterOrder0Condition(this);
    }
    exitRule(listener) {
        if (listener.exitOrder0Condition)
            listener.exitOrder0Condition(this);
    }
    accept(visitor) {
        if (visitor.visitOrder0Condition)
            return visitor.visitOrder0Condition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Order0ConditionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Order0ConditionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Order0ConditionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Order0ConditionContext.prototype, "accept", null);
exports.Order0ConditionContext = Order0ConditionContext;
class ActionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    chainedCall() {
        return this.tryGetRuleContext(0, ChainedCallContext);
    }
    SEMICOLON() { return this.tryGetToken(YmlToBdlParser.SEMICOLON, 0); }
    affectation() {
        return this.tryGetRuleContext(0, AffectationContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_action; }
    enterRule(listener) {
        if (listener.enterAction)
            listener.enterAction(this);
    }
    exitRule(listener) {
        if (listener.exitAction)
            listener.exitAction(this);
    }
    accept(visitor) {
        if (visitor.visitAction)
            return visitor.visitAction(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ActionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ActionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ActionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ActionContext.prototype, "accept", null);
exports.ActionContext = ActionContext;
class ActionBlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    OPEN_BRACE() { return this.tryGetToken(YmlToBdlParser.OPEN_BRACE, 0); }
    action(i) {
        if (i === undefined) {
            return this.getRuleContexts(ActionContext);
        }
        else {
            return this.getRuleContext(i, ActionContext);
        }
    }
    CLOSE_BRACE() { return this.tryGetToken(YmlToBdlParser.CLOSE_BRACE, 0); }
    get ruleIndex() { return YmlToBdlParser.RULE_actionBlock; }
    enterRule(listener) {
        if (listener.enterActionBlock)
            listener.enterActionBlock(this);
    }
    exitRule(listener) {
        if (listener.exitActionBlock)
            listener.exitActionBlock(this);
    }
    accept(visitor) {
        if (visitor.visitActionBlock)
            return visitor.visitActionBlock(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ActionBlockContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ActionBlockContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ActionBlockContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ActionBlockContext.prototype, "accept", null);
exports.ActionBlockContext = ActionBlockContext;
class CompoundBlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    conditionBlock() {
        return this.tryGetRuleContext(0, ConditionBlockContext);
    }
    actionBlock() {
        return this.tryGetRuleContext(0, ActionBlockContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_compoundBlock; }
    enterRule(listener) {
        if (listener.enterCompoundBlock)
            listener.enterCompoundBlock(this);
    }
    exitRule(listener) {
        if (listener.exitCompoundBlock)
            listener.exitCompoundBlock(this);
    }
    accept(visitor) {
        if (visitor.visitCompoundBlock)
            return visitor.visitCompoundBlock(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CompoundBlockContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CompoundBlockContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CompoundBlockContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CompoundBlockContext.prototype, "accept", null);
exports.CompoundBlockContext = CompoundBlockContext;
class ArithmeticExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    OPEN_PAR() { return this.tryGetToken(YmlToBdlParser.OPEN_PAR, 0); }
    CLOSE_PAR() { return this.tryGetToken(YmlToBdlParser.CLOSE_PAR, 0); }
    arithmeticExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArithmeticExpressionContext);
        }
        else {
            return this.getRuleContext(i, ArithmeticExpressionContext);
        }
    }
    OPERATOR() { return this.tryGetToken(YmlToBdlParser.OPERATOR, 0); }
    nonArithmeticValue() {
        return this.tryGetRuleContext(0, NonArithmeticValueContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_arithmeticExpression; }
    enterRule(listener) {
        if (listener.enterArithmeticExpression)
            listener.enterArithmeticExpression(this);
    }
    exitRule(listener) {
        if (listener.exitArithmeticExpression)
            listener.exitArithmeticExpression(this);
    }
    accept(visitor) {
        if (visitor.visitArithmeticExpression)
            return visitor.visitArithmeticExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ArithmeticExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ArithmeticExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ArithmeticExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ArithmeticExpressionContext.prototype, "accept", null);
exports.ArithmeticExpressionContext = ArithmeticExpressionContext;
class ExistentialOperatorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    OPEN_PAR() { return this.getToken(YmlToBdlParser.OPEN_PAR, 0); }
    order1FullCondition() {
        return this.getRuleContext(0, Order1FullConditionContext);
    }
    CLOSE_PAR() { return this.getToken(YmlToBdlParser.CLOSE_PAR, 0); }
    ymlId() {
        return this.getRuleContext(0, YmlIdContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_existentialOperator; }
    enterRule(listener) {
        if (listener.enterExistentialOperator)
            listener.enterExistentialOperator(this);
    }
    exitRule(listener) {
        if (listener.exitExistentialOperator)
            listener.exitExistentialOperator(this);
    }
    accept(visitor) {
        if (visitor.visitExistentialOperator)
            return visitor.visitExistentialOperator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExistentialOperatorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExistentialOperatorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExistentialOperatorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExistentialOperatorContext.prototype, "accept", null);
exports.ExistentialOperatorContext = ExistentialOperatorContext;
class VariableBlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ymlId() {
        return this.getRuleContext(0, YmlIdContext);
    }
    OPEN_BRACE() { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
    variableBlockContent() {
        return this.getRuleContext(0, VariableBlockContentContext);
    }
    CLOSE_BRACE() { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
    get ruleIndex() { return YmlToBdlParser.RULE_variableBlock; }
    enterRule(listener) {
        if (listener.enterVariableBlock)
            listener.enterVariableBlock(this);
    }
    exitRule(listener) {
        if (listener.exitVariableBlock)
            listener.exitVariableBlock(this);
    }
    accept(visitor) {
        if (visitor.visitVariableBlock)
            return visitor.visitVariableBlock(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], VariableBlockContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], VariableBlockContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], VariableBlockContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], VariableBlockContext.prototype, "accept", null);
exports.VariableBlockContext = VariableBlockContext;
class VariableBlockWithEOFContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ymlId() {
        return this.getRuleContext(0, YmlIdContext);
    }
    OPEN_BRACE() { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
    variableBlockContent() {
        return this.getRuleContext(0, VariableBlockContentContext);
    }
    CLOSE_BRACE() { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
    EOF() { return this.getToken(YmlToBdlParser.EOF, 0); }
    get ruleIndex() { return YmlToBdlParser.RULE_variableBlockWithEOF; }
    enterRule(listener) {
        if (listener.enterVariableBlockWithEOF)
            listener.enterVariableBlockWithEOF(this);
    }
    exitRule(listener) {
        if (listener.exitVariableBlockWithEOF)
            listener.exitVariableBlockWithEOF(this);
    }
    accept(visitor) {
        if (visitor.visitVariableBlockWithEOF)
            return visitor.visitVariableBlockWithEOF(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], VariableBlockWithEOFContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], VariableBlockWithEOFContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], VariableBlockWithEOFContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], VariableBlockWithEOFContext.prototype, "accept", null);
exports.VariableBlockWithEOFContext = VariableBlockWithEOFContext;
class VariableBlockContentContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    memberDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(MemberDeclarationContext);
        }
        else {
            return this.getRuleContext(i, MemberDeclarationContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_variableBlockContent; }
    enterRule(listener) {
        if (listener.enterVariableBlockContent)
            listener.enterVariableBlockContent(this);
    }
    exitRule(listener) {
        if (listener.exitVariableBlockContent)
            listener.exitVariableBlockContent(this);
    }
    accept(visitor) {
        if (visitor.visitVariableBlockContent)
            return visitor.visitVariableBlockContent(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], VariableBlockContentContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], VariableBlockContentContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], VariableBlockContentContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], VariableBlockContentContext.prototype, "accept", null);
exports.VariableBlockContentContext = VariableBlockContentContext;
class VariableBlockContentWithEOFContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() { return this.getToken(YmlToBdlParser.EOF, 0); }
    memberDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(MemberDeclarationContext);
        }
        else {
            return this.getRuleContext(i, MemberDeclarationContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_variableBlockContentWithEOF; }
    enterRule(listener) {
        if (listener.enterVariableBlockContentWithEOF)
            listener.enterVariableBlockContentWithEOF(this);
    }
    exitRule(listener) {
        if (listener.exitVariableBlockContentWithEOF)
            listener.exitVariableBlockContentWithEOF(this);
    }
    accept(visitor) {
        if (visitor.visitVariableBlockContentWithEOF)
            return visitor.visitVariableBlockContentWithEOF(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], VariableBlockContentWithEOFContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], VariableBlockContentWithEOFContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], VariableBlockContentWithEOFContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], VariableBlockContentWithEOFContext.prototype, "accept", null);
exports.VariableBlockContentWithEOFContext = VariableBlockContentWithEOFContext;
class StaticDeclarationsFileContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() { return this.getToken(YmlToBdlParser.EOF, 0); }
    staticDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(StaticDeclarationContext);
        }
        else {
            return this.getRuleContext(i, StaticDeclarationContext);
        }
    }
    freeText(i) {
        if (i === undefined) {
            return this.getRuleContexts(FreeTextContext);
        }
        else {
            return this.getRuleContext(i, FreeTextContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_staticDeclarationsFile; }
    enterRule(listener) {
        if (listener.enterStaticDeclarationsFile)
            listener.enterStaticDeclarationsFile(this);
    }
    exitRule(listener) {
        if (listener.exitStaticDeclarationsFile)
            listener.exitStaticDeclarationsFile(this);
    }
    accept(visitor) {
        if (visitor.visitStaticDeclarationsFile)
            return visitor.visitStaticDeclarationsFile(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], StaticDeclarationsFileContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], StaticDeclarationsFileContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], StaticDeclarationsFileContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], StaticDeclarationsFileContext.prototype, "accept", null);
exports.StaticDeclarationsFileContext = StaticDeclarationsFileContext;
class StaticDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SEMICOLON() { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
    ymlId(i) {
        if (i === undefined) {
            return this.getRuleContexts(YmlIdContext);
        }
        else {
            return this.getRuleContext(i, YmlIdContext);
        }
    }
    EXTENDS() { return this.tryGetToken(YmlToBdlParser.EXTENDS, 0); }
    field(i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_staticDeclaration; }
    enterRule(listener) {
        if (listener.enterStaticDeclaration)
            listener.enterStaticDeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitStaticDeclaration)
            listener.exitStaticDeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitStaticDeclaration)
            return visitor.visitStaticDeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], StaticDeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], StaticDeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], StaticDeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], StaticDeclarationContext.prototype, "accept", null);
exports.StaticDeclarationContext = StaticDeclarationContext;
class ExternDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EXTERN() { return this.getToken(YmlToBdlParser.EXTERN, 0); }
    SEMICOLON() { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
    methodDeclaration() {
        return this.tryGetRuleContext(0, MethodDeclarationContext);
    }
    memberDeclaration() {
        return this.tryGetRuleContext(0, MemberDeclarationContext);
    }
    get ruleIndex() { return YmlToBdlParser.RULE_externDeclaration; }
    enterRule(listener) {
        if (listener.enterExternDeclaration)
            listener.enterExternDeclaration(this);
    }
    exitRule(listener) {
        if (listener.exitExternDeclaration)
            listener.exitExternDeclaration(this);
    }
    accept(visitor) {
        if (visitor.visitExternDeclaration)
            return visitor.visitExternDeclaration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExternDeclarationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExternDeclarationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExternDeclarationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExternDeclarationContext.prototype, "accept", null);
exports.ExternDeclarationContext = ExternDeclarationContext;
class ListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._elements = [];
    }
    OPEN_BRACKET() { return this.getToken(YmlToBdlParser.OPEN_BRACKET, 0); }
    CLOSE_BRACKET() { return this.getToken(YmlToBdlParser.CLOSE_BRACKET, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.COMMA);
        }
        else {
            return this.getToken(YmlToBdlParser.COMMA, i);
        }
    }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_list; }
    enterRule(listener) {
        if (listener.enterList)
            listener.enterList(this);
    }
    exitRule(listener) {
        if (listener.exitList)
            listener.exitList(this);
    }
    accept(visitor) {
        if (visitor.visitList)
            return visitor.visitList(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ListContext.prototype, "accept", null);
exports.ListContext = ListContext;
class ListWithBraceContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._elements = [];
    }
    OPEN_BRACE() { return this.getToken(YmlToBdlParser.OPEN_BRACE, 0); }
    CLOSE_BRACE() { return this.getToken(YmlToBdlParser.CLOSE_BRACE, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(YmlToBdlParser.COMMA);
        }
        else {
            return this.getToken(YmlToBdlParser.COMMA, i);
        }
    }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_listWithBrace; }
    enterRule(listener) {
        if (listener.enterListWithBrace)
            listener.enterListWithBrace(this);
    }
    exitRule(listener) {
        if (listener.exitListWithBrace)
            listener.exitListWithBrace(this);
    }
    accept(visitor) {
        if (visitor.visitListWithBrace)
            return visitor.visitListWithBrace(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ListWithBraceContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ListWithBraceContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ListWithBraceContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ListWithBraceContext.prototype, "accept", null);
exports.ListWithBraceContext = ListWithBraceContext;
class GranuleContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    GRANULE() { return this.getToken(YmlToBdlParser.GRANULE, 0); }
    get ruleIndex() { return YmlToBdlParser.RULE_granule; }
    enterRule(listener) {
        if (listener.enterGranule)
            listener.enterGranule(this);
    }
    exitRule(listener) {
        if (listener.exitGranule)
            listener.exitGranule(this);
    }
    accept(visitor) {
        if (visitor.visitGranule)
            return visitor.visitGranule(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], GranuleContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], GranuleContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], GranuleContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], GranuleContext.prototype, "accept", null);
exports.GranuleContext = GranuleContext;
class CompleteContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COMPLETE() { return this.getToken(YmlToBdlParser.COMPLETE, 0); }
    SEMICOLON() { return this.getToken(YmlToBdlParser.SEMICOLON, 0); }
    ymlId() {
        return this.getRuleContext(0, YmlIdContext);
    }
    field(i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    }
    get ruleIndex() { return YmlToBdlParser.RULE_complete; }
    enterRule(listener) {
        if (listener.enterComplete)
            listener.enterComplete(this);
    }
    exitRule(listener) {
        if (listener.exitComplete)
            listener.exitComplete(this);
    }
    accept(visitor) {
        if (visitor.visitComplete)
            return visitor.visitComplete(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CompleteContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CompleteContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CompleteContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CompleteContext.prototype, "accept", null);
exports.CompleteContext = CompleteContext;
//# sourceMappingURL=YmlToBdlParser.js.map