import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import * as assert from 'assert';

import { YmlLexer, YmlParser } from '../grammar';

/**
 * Check that the provided YML code extract can be correctly parsed by the provided parser rule.
 *
 * This means that:
 * - The returned value of the rule must not be null;
 * - The number of syntax errors while parsing this input must be zero.
 *
 * @param ruleToTest The parser rule that should work for the provided YML code input.
 * @param ymlCode YML code extract that should be parsed correctly with the provided rule.
 */
function checkInputValidityForRule(ruleToTest: (parser: YmlParser) => ParserRuleContext, ymlCode: string): void {
    const inputStream = CharStreams.fromString(ymlCode);
    const lexer = new YmlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new YmlParser(tokenStream);

    const result = ruleToTest(parser);
    assert.strictEqual(parser.numberOfSyntaxErrors, 0);
    assert.notStrictEqual(result, null);
}

describe('Parsing Tests', () => {
    describe('as rule', () => {
        it('should parse without errors an `as` instruction', (done) => {
            checkInputValidityForRule((parser) => parser.as(), `as(?fact, ?att = myObj.attribute, ?fact.?att != null)`);
            done();
        });
    });

    describe('assigment rule', () => {
        it('should parse without errors an assignment with the `as` instruction', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_assignment(),
                `a = as(?fact, ?att = obj.attribute, ?fact.?att != null)`,
            );
            done();
        });
        it('should parse without errors an assignment with the `switchExprExclusive` instruction', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_assignment(),
                `
myVal = switchExprExclusive {
    case(label == "a") : 1
    case(label == "ab") : -1
    case(label == "abc") : -1
    default : 0
}
`,
            );
            done();
        });
        it('should parse without errors an assignment with the `switchExpr` instruction', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_assignment(),
                `
finalVal = switchExpr( myValue ) {
    case CASE_1 : val1
    case CASE_2 : val2
    case CASE_3 : val3
    case CASE_4 : val4
};
`,
            );
            done();
        });

    });

    describe('applyCollection', () => {
        it('should parse without errors an `applyCollection` instruction with __where keyword', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(Namespace:ClassName, __where currentElement.attribute == true)`,
            );
            done();
        });
        it('should parse without errors an `applyCollection` instruction with __operation keyword on class member', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(myCollection , __operation Namespace:ClassName::member)`,
            );
            done();
        });
        it('should parse without errors an `applyCollection` instruction with __operation keyword on function name', (done) => {
            checkInputValidityForRule((parser) => parser.applyCollection(), `applyCollection(list0, __operation carre);`);
            done();
        });

        it('should parse without errors an `applyCollection` instruction with __operation and __arguments keywords', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(list0, __operation fct1, __arguments [2]);`,
            );
            done();
        });
        it('should parse without errors an `applyCollection` instruction with __operation and __arguments keywords with multiple args', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(list0, __operation fct2, __arguments [2, 3]);`,
            );
            done();
        });
        it('should parse without errors an `applyCollection` instruction with __operation keyword on class attribute', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(list4, __operation Person::firstName);`,
            );
            done();
        });
        it('should parse without errors an `applyCollection` instruction with __operation on attribute name and __where keywords', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(list4, __operation Person::firstName, __where currentElement != "alain");`,
            );
            done();
        });
        it('should parse without errors an `applyCollection` instruction with __operation on Symbol and __where keywords', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(list4, __operation _NO_EVAL, __where currentElement != P2);`,
            );
            done();
        });
    });
    describe('applyCollectionOn', () => {
        it('should parse without errors an `applyCollectionOn` instruction with select keyword', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollectionOn(),
                `applyCollectionOn(_elt in list0, select carre(_elt));`,
            );
            done();
        });
        it('should parse without errors an `applyCollectionOn` instruction with select keyword on attribute value', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollectionOn(),
                `applyCollectionOn(_elt in list4, select _elt.firstName);`,
            );
            done();
        });
        it('should parse without errors an `applyCollectionOn` instruction with select and where keywords', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollectionOn(),
                `applyCollectionOn(_elt in list4, select _NO_EVAL, where _elt != P2);`,
            );
            done();
        });
        it('should parse without errors an `applyCollectionOn` instruction with where keyword', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollectionOn(),
                `applyCollectionOn(_elt in list4, where _elt != P2);`,
            );
            done();
        });
    });

    describe('chainedCall rule', () => {
        it('should parse without errors an `applyCollection` instruction used as a function caller', (done) => {
            checkInputValidityForRule(
                (parser) => parser.chainedCall(),
                `applyCollection(Namespace:ClassName, __where currentElement.attr == true).toList()`,
            );
            done();
        });

        it('should parse without errors an `applyCollectionOn` instruction used as a function caller', (done) => {
            checkInputValidityForRule(
                (parser) => parser.chainedCall(),
                `applyCollectionOn(_elt in list4, where _elt != P2).toList()`,
            );
            done();
        });

        it('should parse without errors a chained call with indexed accesses', (done) => {
            checkInputValidityForRule((parser) => parser.chainedCall(), `aObj[b][c].aAttr.get()[12]`);
            done();
        });

        it('should parse without errors a chained call with hashMap', (done) => {
            checkInputValidityForRule((parser) => parser.chainedCall(), `{KEY : myVal}.get(KEY)`);
            done();
        });
        it('should parse without errors a chained call with an array', (done) => {
            checkInputValidityForRule((parser) => parser.chainedCall(), `["a", "b"].get(_FIRST)`);
            done();
        });
        it('should parse without errors a chained call with an ifExpr', (done) => {
            checkInputValidityForRule((parser) => parser.chainedCall(),
            `(ifExpr(a ==b) then ["a", "b"] else ["c", "d"]).get(_FIRST)`);
            done();
        });
        it('should parse without errors a chained call with an switchExpr', (done) => {
            checkInputValidityForRule((parser) => parser.chainedCall(),
            `
(switchExpr( myValue ) {
    case CASE_1 : [val1, val2]
    case CASE_2 : [val3, val4]
    case CASE_3 : [val5, val6]
    case CASE_4 : [val7, val8]
}).get(_RANDOM)`);
            done();
        });

        it('should parse without errors a chained call with an switchExpr', (done) => {
            checkInputValidityForRule((parser) => parser.chainedCall(),
            `
(switchExprExclusive {
    case myValue == CASE_1 : [val1, val2]
    case myValue == CASE_2 : [val3, val4]
    case myValue == CASE_3 : [val5, val6]
    case myValue == CASE_4 : [val7, val8]
}).get(_RANDOM)`);
            done();
        });

        it('should parse without errors a call with an optional argument using an attribute pointer', (done) => {
            checkInputValidityForRule(
                (parser) => parser.chainedCall(),
                `myCollection.sort(_DESCENDANT, _RELATIVE_ORDER_OF: Namespace:ClassName:::classMember)`,
            );
            done();
        });
    });

    describe('function rule', () => {
        it('should parse without errors a function with only one action outside a block', (done) => {
            checkInputValidityForRule(
                (parser) => parser.function(),
                `
function Namespace:ClassName::myMethod()
--> action return getValue(SYMBOL);
;
`,
            );
            done();
        });

        it('should parse without errors a function with a Function object as argument', (done) => {
            checkInputValidityForRule(
                (parser) => parser.function(),
                `
function Test::applyMyFunction(Function testFunction)
--> action {
    testFunction.apply();
}
;
`,
            );
            done();
        });

        it('should parse without errors a function introduced with type Function', (done) => {
            checkInputValidityForRule(
                (parser) => parser.function(),
                `
Function Test:func
args {
    Object arg1
    Object arg2
}
--> documentation "Does things with arg1 and arg2."
--> domains Void
--> preAssert arg1 != null && arg2 != null
--> action {
    // does nothing
}
;
`,
            );
            done();
        });

        it('should parse without errors a function declaration with simple type arguments', (done) => {
            checkInputValidityForRule(
                (parser) => parser.function(),
                `
function Namespace:funcName(Namespace:ClassNameA obj,
    Namespace:ClassNameB objB)
    --> text \\( \\)
;`,
            );
            done();
        });

        it('should parse without errors a function declaration with multi type arguments', (done) => {
            checkInputValidityForRule(
                (parser) => parser.function(),
                `
function myFunction(TypeA aObj, TypeB || TypeC bOrC_obj)
    --> text \\( \\)
;`,
            );
            done();
        });
    });

    describe('instruction rule', () => {
        it('should parse a foreach with a single instruction not in a block', (done) => {
            checkInputValidityForRule(
                (parser) => parser.argumentList(),
                `
foreach(_obj, coll) myVar = _obj;
`,
            );
            done();
        });

        it('should parse a foreach with a single instruction', (done) => {
            checkInputValidityForRule(
                (parser) => parser.argumentList(),
                `
foreach(_obj, coll) { myVar = _obj; }
`,
            );
            done();
        });

        it('should parse a for with a single instruction not in a block', (done) => {
            checkInputValidityForRule(
                (parser) => parser.argumentList(),
                `
for(_idx, 1, coll) myVar = _idx;
`,
            );
            done();
        });

        it('should parse a for with a single instruction', (done) => {
            checkInputValidityForRule(
                (parser) => parser.argumentList(),
                `
for(_idx, 1, coll) { myVar = _idx; }
`,
            );
            done();
        });

        it('should parse a while with a single instruction not in a block', (done) => {
            checkInputValidityForRule(
                (parser) => parser.argumentList(),
                `
while(_myVar < 10) incr(_myVar);
`,
            );
            done();
        });

        it('should parse a while with a single instruction', (done) => {
            checkInputValidityForRule(
                (parser) => parser.argumentList(),
                `
while(_myVar < 10) { incr(_myVar); }
`,
            );
            done();
        });
    });

    describe('argumentList rule', () => {
        it('should parse without errors an argument list with optional args finishing with a comma', (done) => {
            checkInputValidityForRule((parser) => parser.argumentList(), `{[_KEY]: Symbol mode {__nullable},} args`);
            done();
        });
    });

    describe('classImplementation rule', () => {
        it('should parse without errors implementation with attributes and override', (done) => {
            checkInputValidityForRule(
                (parser) => parser.classImplementation(),
                `
implementation SentenceToGenerate

    myAttr
    --> defaultValue obj.attr

    override {
        write function
    }
;`,
            );
            done();
        });
    });

    describe('hashMap rule', () => {
        it('should parse without errors a hashMap with integers as keys', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{1: VAL, 2: VAL_2}`);
            done();
        });
        it('should parse without errors a hashMap with doubles as keys', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{1.2: VAL, 2.3: VAL_2}`);
            done();
        });
        it('should parse without errors a hashMap with string as keys', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{"1": VAL, "2": VAL_2}`);
            done();
        });
        it('should parse without errors a hashMap with arrays as keys', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{[1,2]: VAL, [3,4]: VAL_2}`);
            done();
        });
        it('should parse without errors a hashMap with constList as keys', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{{_1,_2}: VAL, {_3,_4}: VAL_2}`);
            done();
        });
        it('should parse without errors a hashMap with integer as value', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{1: 2}`);
            done();
        });
        it('should parse without errors a hashMap with double as value', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{1: 2.3}`);
            done();
        });
        it('should parse without errors a hashMap with string as value', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{1: "str"}`);
            done();
        });
        it('should parse without errors a hashMap with arrays as value', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{1: [VAL, VAL_2]}`);
            done();
        });
        it('should parse without errors a hashMap with constList as value', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{1: {VAL, VAL_2}}`);
            done();
        });
    });

    describe('switch rule', () => {
        it('should parse without errors a switch with cases without parentheses around the value', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_switchCase_withValue(),
                `
switch( val ) {
    case VALUE_1 : {
        // do stuff
    }
    case VALUE_2 : {
        // do something else
    }
}
;`,
            );
            done();
        });

        it('should parse without errors a switch with parentheses around values', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_switchCase_withValue(),
                `
switch( val ) {
    case (VALUE_1) : {
        // do stuff
    }
    case (VALUE_2) : {
        // do something else
    }
}
;`,
            );
            done();
        });

        it('should parse without errors a switch with parentheses around some values', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_switchCase_withValue(),
                `
switch( val ) {
    case (VALUE_1) : {
        // do stuff
    }
    case VALUE_2 : {
        // do something else
    }
}
;`,
            );
            done();
        });
    });

    describe('classComplete rule', () => {
        it('should parse without errors a complete of a class adding methods to it', (done) => {
            checkInputValidityForRule(
                (parser) => parser.classComplete(),
                `
complete MyClass

    method doSomething(Object obj, Text text {__nullable}) function
    --> domains Void

    method doStuff(Object obj) function
    --> domains Void

    method getValue(Object obj) function
    --> domains Object
;
`,
            );
            done();
        });
    });

    describe('ymlId rule', () => {
        it('should parse without errors different kinds of ymlId', (done) => {
            checkInputValidityForRule((parser) => parser.ymlId(), `abc`);
            checkInputValidityForRule((parser) => parser.ymlId(), `a:bc`);
            checkInputValidityForRule((parser) => parser.ymlId(), `a:bc:d`);
            checkInputValidityForRule((parser) => parser.ymlId(), `a:bc::d`);
            checkInputValidityForRule((parser) => parser.ymlId(), `a:bc:::d`);
            done();
        });
    });

    describe('kaoFile rule', () => {
        it('should parse without errors an import declaration file', (done) => {
            checkInputValidityForRule(
                (parser) => parser.kaoFile(),
                `_FILE_TYPE_ M
// a simple file
function.dcl
// dir/file
_domainObjects/functions
// dir/file.ext
_domainObjects/functions.dcl
// dir/file.ext1.ext2
_domainObjects/functions.dcl.old
/*
 Multiple relative path declaration
 to some files named “functions.dcl” with some empty lines here and there
 */
./_domainObjects/functions.dcl
../_domainObjects/functions.dcl

../../_domainObjects/functions.dcl


../../../src/_domainObjects/functions.dcl

@if(exists_file(".generated-yml/verb.lib.yml") == true)
    .generated-yml/verb.lib.yml
@endif

// Some cultural stuff
Music/mesarthim/_.-_-..._..._._-._-.-/flac/05_-_......flac
Music/drudkh/they_often_see_dreams_about_the_spring/flac/02_-_u_dakhiv_irzhavim_kolossyu....flac
Music/wedrujacy_wiatr/tam_gdzie_miesiac_oplakuje_swit/flac/02_-_tam_gdzie_miesiac_oplakuje_swit....flac

`,
            );
            done();
        });
    });

    describe('static declaration rule', () => {
        it('should parse an object with an "implementation" attribute', (done) => {
            checkInputValidityForRule(
                (parser) => parser.staticDeclaration(),
                `MyClass myObject
--> implementation {
    as(?fact, ?att = myObj.attribute, ?fact.?att != null);
};`,
            );
            done();
        });
    });
});
