import { CharStreams, CommonTokenStream, DiagnosticErrorListener } from 'antlr4ts';
import { PredictionMode } from 'antlr4ts/atn/PredictionMode';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';

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
 * @param detectAmbiguity `true` if parsing ambiguities should be detected and counted as error. Default to `false`.
 */
function checkInputValidityForRule(
    ruleToTest: (parser: YmlParser) => ParserRuleContext,
    ymlCode: string,
    failOnAmbiguity = false,
): void {
    const inputStream = CharStreams.fromString(ymlCode);
    const lexer = new YmlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new YmlParser(tokenStream);
    if (failOnAmbiguity) {
        parser.addErrorListener(new DiagnosticErrorListener(true));
        parser.interpreter.setPredictionMode(PredictionMode.LL_EXACT_AMBIG_DETECTION);
    }

    const result = ruleToTest(parser);
    expect(parser.numberOfSyntaxErrors).toBe(0);
    expect(result).toBeDefined();
}

describe('Parsing Tests', () => {
    describe('intruction_rename rule', () => {
        test('should parse without errors an `intruction_rename` instruction', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_rename(),
                `rename myAttr to myOtherAttr forClass MyClass`,
            );
            done();
        });
        test('should parse without errors an `intruction_rename` instruction using other existing keywords', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_rename(),
                `rename rename to forClass forClass Function`,
            );
            done();
        });
    });

    describe('as rule', () => {
        test('should parse without errors an `as` instruction', (done) => {
            checkInputValidityForRule((parser) => parser.as(), `as(?fact, ?att = myObj.attribute, ?fact.?att != null)`);
            done();
        });
    });

    describe('forall rule', () => {
        test('should parse without errors a `forall` instruction with only one instanciation and some conditions', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_forall(),
                `
forall(?obj in coll
       ?obj.att == myObj.attribute
       ?obj.att.subAttr != null) {
           // do things
}
`,
            );
            done();
        });
        test('should parse without errors a `forall` instruction with multiple instanciations and a condition', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_forall(),
                `
forall(?obj in coll
        ?obj2 in coll2
        ?obj == ?obj2) {
           // do things
}
`,
            );
            done();
        });
        test('should parse without errors a `forall` instruction with instanciations only', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_forall(),
                `
forall(?obj in coll
        ?obj2 in coll2
        ?obj3 in coll3){
           // do things
}
`,
            );
            done();
        });
        test('should parse without errors a `forall` instruction with only one instanciation and some conditions using comma', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_forall(),
                `
forall(?obj in coll,
       ?obj.att == myObj.attribute,
       ?obj.att.subAttr != null) {
           // do things
}
`,
            );
            done();
        });
    });

    describe('assigment rule', () => {
        test('should parse without errors an assignment with the `as` instruction', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_assignment(),
                `a = as(?fact, ?att = obj.attribute, ?fact.?att != null)`,
            );
            done();
        });
        test('should parse without errors an assignment with the `switchExprExclusive` instruction', (done) => {
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
        test('should parse without errors an assignment with the `switchExpr` instruction', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_assignment(),
                `
finalVal = switchExpr( myValue ) {
    case myValue > 0 : 1
    case myValue < 1 : 0
    case myValue > 1 : -1
};
`,
            );
            done();
        });
    });

    describe('applyCollection', () => {
        test('should parse without errors an `applyCollection` instruction with __where keyword', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(Namespace:ClassName, __where currentElement.attribute == true)`,
            );
            done();
        });
        test('should parse without errors an `applyCollection` instruction with __operation keyword on class member', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(myCollection , __operation Namespace:ClassName::member)`,
            );
            done();
        });
        test('should parse without errors an `applyCollection` instruction with __operation keyword on function name', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(list0, __operation carre);`,
            );
            done();
        });

        test('should parse without errors an `applyCollection` instruction with __operation and __arguments keywords', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(list0, __operation fct1, __arguments [2]);`,
            );
            done();
        });
        test('should parse without errors an `applyCollection` instruction with __operation and __arguments keywords with multiple args', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(list0, __operation fct2, __arguments [2, 3]);`,
            );
            done();
        });
        test('should parse without errors an `applyCollection` instruction with __operation keyword on class attribute', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(list4, __operation Person::firstName);`,
            );
            done();
        });
        test('should parse without errors an `applyCollection` instruction with __operation on attribute name and __where keywords', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(list4, __operation Person::firstName, __where currentElement != "alain");`,
            );
            done();
        });
        test('should parse without errors an `applyCollection` instruction with __operation on Symbol and __where keywords', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(list4, __operation _NO_EVAL, __where currentElement != P2);`,
            );
            done();
        });
    });

    describe('applyCollectionOn', () => {
        test('should parse without errors an `applyCollectionOn` instruction with select keyword', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollectionOn(),
                `applyCollectionOn(_elt in list0, select carre(_elt));`,
            );
            done();
        });
        test('should parse without errors an `applyCollectionOn` instruction with select keyword on attribute value', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollectionOn(),
                `applyCollectionOn(_elt in list4, select _elt.firstName);`,
            );
            done();
        });
        test('should parse without errors an `applyCollectionOn` instruction with select and where keywords', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollectionOn(),
                `applyCollectionOn(_elt in list4, select _NO_EVAL, where _elt != P2);`,
            );
            done();
        });
        test('should parse without errors an `applyCollectionOn` instruction with where keyword', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollectionOn(),
                `applyCollectionOn(_elt in list4, where _elt != P2);`,
            );
            done();
        });
    });

    describe('chainedCall rule', () => {
        test('should parse without errors a condition used as a function caller', (done) => {
            checkInputValidityForRule((parser) => parser.chainedCall(), `((a == b && c == d) || myVal > e).check()`);
            done();
        });
        test('should parse without errors an `applyCollection` instruction used as a function caller', (done) => {
            checkInputValidityForRule(
                (parser) => parser.chainedCall(),
                `applyCollection(Namespace:ClassName, __where currentElement.attr == true).toList()`,
            );
            done();
        });

        test('should parse without errors an `applyCollectionOn` instruction used as a function caller', (done) => {
            checkInputValidityForRule(
                (parser) => parser.chainedCall(),
                `applyCollectionOn(_elt in list4, where _elt != P2).toList()`,
            );
            done();
        });

        test('should parse without errors a chained call with indexed accesses', (done) => {
            checkInputValidityForRule((parser) => parser.chainedCall(), `aObj[b][c].aAttr.get()[12]`);
            done();
        });

        test('should parse without errors a chained call with hashMap', (done) => {
            checkInputValidityForRule((parser) => parser.chainedCall(), `{KEY : myVal}.get(KEY)`);
            done();
        });
        test('should parse without errors a chained call with an array', (done) => {
            checkInputValidityForRule((parser) => parser.chainedCall(), `["a", "b"].get(_FIRST)`);
            done();
        });
        test('should parse without errors a chained call with an ifExpr', (done) => {
            checkInputValidityForRule(
                (parser) => parser.chainedCall(),
                `(ifExpr(a ==b) then ["a", "b"] else ["c", "d"]).get(_FIRST)`,
            );
            done();
        });
        test('should parse without errors a chained call with an switchExpr', (done) => {
            checkInputValidityForRule(
                (parser) => parser.chainedCall(),
                `
(switchExpr( myValue ) {
    case CASE_1 : [val1, val2]
    case CASE_2 : [val3, val4]
    case CASE_3 : [val5, val6]
    case CASE_4 : [val7, val8]
}).get(_RANDOM)`,
            );
            done();
        });

        test('should parse without errors a chained call with an switchExpr', (done) => {
            checkInputValidityForRule(
                (parser) => parser.chainedCall(),
                `
(switchExprExclusive {
    case myValue > 0 : [val1, val2]
    case myValue < 1 : [val3, val4]
    case myValue > 1 : [val5, val6]
}).get(_RANDOM)`,
            );
            done();
        });

        test('should parse without errors a call with an optional argument using an attribute pointer', (done) => {
            checkInputValidityForRule(
                (parser) => parser.chainedCall(),
                `myCollection.sort(_DESCENDANT, _RELATIVE_ORDER_OF: Namespace:ClassName:::classMember)`,
            );
            done();
        });
    });

    describe('function rule', () => {
        test('should parse without errors a function with only one action outside a block', (done) => {
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

        test('should parse without errors a function with a Function object as argument', (done) => {
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

        test('should parse without errors a function introduced with type Function', (done) => {
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

        test('should parse without errors a function declaration with simple type arguments', (done) => {
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

        test('should parse without errors a function declaration with multi type arguments', (done) => {
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
        test('should parse a foreach with a single instruction not in a block', (done) => {
            checkInputValidityForRule(
                (parser) => parser.argumentList(),
                `
    foreach(_obj, coll) myVar = _obj;
    `,
            );
            done();
        });

        test('should parse a foreach with a single instruction', (done) => {
            checkInputValidityForRule(
                (parser) => parser.argumentList(),
                `
foreach(_obj, coll) { myVar = _obj; }
`,
            );
            done();
        });

        test('should parse a for with a single instruction not in a block', (done) => {
            checkInputValidityForRule(
                (parser) => parser.argumentList(),
                `
for(_idx, 1, coll) myVar = _idx;
`,
            );
            done();
        });

        test('should parse a for with a single instruction', (done) => {
            checkInputValidityForRule(
                (parser) => parser.argumentList(),
                `
for(_idx, 1, coll) { myVar = _idx; }
`,
            );
            done();
        });

        test('should parse a while with a single instruction not in a block', (done) => {
            checkInputValidityForRule(
                (parser) => parser.argumentList(),
                `
    while(_myVar < 10) incr(_myVar);
    `,
            );
            done();
        });

        test('should parse a while with a single instruction', (done) => {
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
        test('should parse without errors an argument list with optional args finishing with a comma', (done) => {
            checkInputValidityForRule((parser) => parser.argumentList(), `{[_KEY]: Symbol mode {__nullable},} args`);
            done();
        });
    });

    describe('classImplementation rule', () => {
        test('should parse without errors implementation with attributes and override', (done) => {
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
        test('should parse without errors a hashMap with integers as keys', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{1: VAL, 2: VAL_2}`);
            done();
        });
        test('should parse without errors a hashMap with doubles as keys', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{1.2: VAL, 2.3: VAL_2}`);
            done();
        });
        test('should parse without errors a hashMap with string as keys', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{"1": VAL, "2": VAL_2}`);
            done();
        });
        test('should parse without errors a hashMap with arrays as keys', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{[1,2]: VAL, [3,4]: VAL_2}`);
            done();
        });
        test('should parse without errors a hashMap with constList as keys', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{{_1,_2}: VAL, {_3,_4}: VAL_2}`);
            done();
        });
        test('should parse without errors a hashMap with integer as value', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{1: 2}`);
            done();
        });
        test('should parse without errors a hashMap with double as value', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{1: 2.3}`);
            done();
        });
        test('should parse without errors a hashMap with string as value', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{1: "str"}`);
            done();
        });
        test('should parse without errors a hashMap with arrays as value', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{1: [VAL, VAL_2]}`);
            done();
        });
        test('should parse without errors a hashMap with constList as value', (done) => {
            checkInputValidityForRule((parser) => parser.hashMap(), `{1: {VAL, VAL_2}}`);
            done();
        });
    });

    describe('switch rule', () => {
        test('should parse without errors a switch with cases without parentheses around the value', (done) => {
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
    };
}
;`,
            );
            done();
        });
        test('should parse without errors a switchExpr instruction with a "noDefault" case', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_switchExpr_withValue(),
                `
switchExpr(val) {
    case "case1" : value2
    case "case2" : value2
    noDefault
}
;`,
            );
            done();
        });

        test('should parse without errors a switchExclusive instruction', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_switchCase_asIf(),
                `
switchExclusive {
    case(condition1) : {
        return value1;
    }
    case(condition2) : {
        return value2;
    }
    case(condition3) : {
        return value3;
    }
    noDefault
}`,
            );
            done();
        });

        test('should parse without errors a switch with parentheses around values', (done) => {
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

        test('should parse without errors a switch with parentheses around values', (done) => {
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

        test('should parse without errors a switch with parentheses around some values', (done) => {
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
}
;`,
            );
            done();
        });
        test('should parse without errors a switch with a list as cases defined as only one case', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_switchCase_withValue(),
                `
switch( val ) {
    case (VALUE_1) : {
        // do stuff
    }
    case VALUE_2, VALUE_3, VALUE_4 : {
        // do something else
    }
}
;`,
            );
            done();
        });
    });

    describe('classComplete rule', () => {
        test('should parse without errors a complete of a class adding methods to it', (done) => {
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
        test('should parse without errors different kinds of ymlId', (done) => {
            const keywords = [
                'args',
                'local',
                'return',
                'Function',
                'TextFunction',
                'implementation',
                'operation',
                'case',
                'rename',
                'to',
                'forClass',
                'mod',
                'as',
                'ruleset',
                'Rule',
                'attributes',
                'extends',
                'timeCounter',
                'abc',
                'a:bc',
                'a:bc:d',
                'a:bc::d',
                'a:bc:::d',
                "myAttribute'",
                'static',
            ];
            for (const keyword of keywords) {
                checkInputValidityForRule((parser) => parser.ymlId(), keyword);
            }
            done();
        });
    });

    describe('kaoFile rule', () => {
        test('should parse without errors an import declaration file', (done) => {
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
        test('should parse an object with an "implementation" attribute', (done) => {
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
    describe('arithmetic expression rule', () => {
        test('should parse an arithmetic expression without error', (done) => {
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `a + b`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `a / b`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `a * b`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `a - b`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `a - -b`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `-a - -b`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `-a - b`);

            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `a + 1`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `a / 1`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `a * 1`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `a - 1`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `a - -1`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `-a - -1`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `-a - 1`);

            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `1 + b`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `1 / b`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `1 * b`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `1 - b`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `1 - -b`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `-1 - -b`);
            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `-1 - b`);

            checkInputValidityForRule((parser) => parser.arithmeticExpression(), `date.year mod 4`);

            checkInputValidityForRule(
                (parser) => parser.arithmeticExpression(),
                `(1 - analysisN1.varEndVal) / analysisD1.varEndVal`,
            );

            done();
        });
    });
    describe('ruleset rule', () => {
        test('should parse an empty ruleset without error', (done) => {
            checkInputValidityForRule((parser) => parser.ruleset(), `ruleset {}`);
            done();
        });
        test('should parse a ruleset with some rules without error', (done) => {
            checkInputValidityForRule(
                (parser) => parser.ruleset(),
                `ruleset {
                    Rule personAliveHasOnlyOneOver18Child
                    if(?person in Person
                        ?person.isAlive() == true
                        ?person.hasChildren() == true
                        ?person.isMultiple() == false
                        // Specific case because this intention can only have one children which is on ACCORD_PIDU
                        ?child = ?person.children.get(_FIRST)
                        ?child.age >= 18)
                    then
                        logInfo("Person named ", ?person.name,
                            " has only one child. This child is over 18: ", ?child.name);
                    ;

                }`,
            );
            done();
        });
        test('should parse a ruleset with some rules and some attributes without error', (done) => {
            checkInputValidityForRule(
                (parser) => parser.ruleset(),
                `ruleset {
                    Rule personAliveHasOnlyOneOver18Child
                    if(?person in Person
                        ?person.isAlive() == true
                        ?person.hasChildren() == true
                        ?person.isMultiple() == false
                        ?child = ?person.children.get(_FIRST)
                        ?child.age >= 18)
                    then
                        logInfo("Person named ", ?person.name,
                            " has only one child. This child is over 18: ", ?child.name);
                    --> documentation "find a person that has only one child and which is over 18."
                    ;
                }`,
            );
            done();
        });
        test('should parse local_variable_declarations with multiple potential types without error', (done) => {
            checkInputValidityForRule(
                (parser) => parser.local_variable_decl(),
                `Type1 || Type2 || Collection myVariable`,
            );
            done();
        });
        test('should parse a switchExpr instruction using nodefault', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_switchExpr_withValue(),
                `switchExpr(myVariable) {
                    case "value1" : EnumClass::EnumVal1
                    case "value2" : EnumClass::EnumVal2
                    noDefault
                }`,
            );
            done();
        });
        test('should parse enums with attributes without error', (done) => {
            checkInputValidityForRule(
                (parser) => parser.yenum(),
                `enum MyEnum
                attributes {
                    Number myAttr
                    --> documentation """myAttr's documentation"""
                } {
                    ENUM_VALUE_1
                    --> myAttr 12,

                    ENUM_VALUE_2
                    --> myAttr 13
                }
                --> documentation """This is MyEnum's documentation""";`,
            );
            done();
        });
    });
    describe('specific constructions', () => {
        test('should parse a timeCounter expression without error', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_timeCounter(),
                `
timeCounter(COUNTER_ID, {
    if(condition == true) {
        logInfo("logging stuff");
    }
});`,
            );
            done();
        });
        test('should parse a HashMap with all entries defined in the "values" attribute without error', (done) => {
            checkInputValidityForRule(
                (parser) => parser.staticDeclaration(),
                `
HashMap computedValues
--> values  KEY_1 : value1,
            KEY_2 : value2,
            KEY_3 : value3,
            KEY_4 : value4
;`,
            );
            done();
        });
        test("should parse a ConstList as attribute's value without error", (done) => {
            checkInputValidityForRule(
                (parser) => parser.staticDeclaration(),
                `
MyClass MY_OBJECT
--> value -> ConstList {
            VALUE_1, VALUE_2, VALUE_3
        };
;`,
            );
            done();
        });
    });
    describe('rule for granules', () => {
        test('granules containing other granules should be parsed without error', (done) => {
            checkInputValidityForRule(
                (parser) => parser.granule(),
                `\\(
    \\foreach(
        var,
        collection,
        -> TextListAssembly
        --> mode _COMPOSE_WORDS
        --> stringAssembly
            -> TextListStringAssembly
            --> separator  {
                \\(, \\),_LAST, \\(et \\)
                }
            ;
        ;
    )
    // do stuff
    \\endForeach
\\)
`,
            );
            done();
        });
    });
});
