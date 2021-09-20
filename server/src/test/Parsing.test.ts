import { CharStreams, CommonTokenStream, DiagnosticErrorListener, ParserRuleContext } from 'antlr4ts';
import { PredictionMode } from 'antlr4ts/atn/PredictionMode';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { YmlLexer, YmlParser } from '../grammar';
import { FunctionContext } from '../grammar/YmlParser';
import { YmlFunctionVisitor } from '../visitors/YmlFunctionVisitor';

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
): ParserRuleContext {
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
    return result;
}

// tslint:disable-next-line: no-big-function
describe('YML parser tests', () => {
    describe('intruction_rename', () => {
        const func = (parser) => parser.instruction_rename();
        test.each([
            // instruction rename
            `rename myAttr to myOtherAttr forClass MyClass`,
            // `intruction_rename` instruction using other existing keywords
            `rename rename to forClass forClass Function`,
        ])('the instruction rename (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('as', () => {
        const func = (parser) => parser.as();
        test.each([
            // instruction as
            `as(?fact, ?att = myObj.attribute, ?fact.?att != null)`,
        ])('the instruction as (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('instruction_forall', () => {
        const func = (parser) => parser.instruction_forall();
        test.each([
            // `forall` instruction with only one instanciation and some conditions
            `forall(?obj in coll
                ?obj.att == myObj.attribute
                ?obj.att.subAttr != null) {
                    // do things
            }`,
            // `forall` instruction with multiple instanciations and a condition
            `forall(?obj in coll
                ?obj2 in coll2
                ?obj == ?obj2) {
                    // do things
            }`,
            // `forall` instruction with instanciations only
            `forall(?obj in coll
                ?obj2 in coll2
                ?obj3 in coll3){
                    // do things
            }`,
            // `forall` instruction with only one instanciation and some conditions using comma
            `forall(?obj in coll,
                ?obj.att == myObj.attribute,
                ?obj.att.subAttr != null) {
                    // do things
            }`,
        ])('the instruction forall (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('applyCollection', () => {
        const func = (parser) => parser.applyCollection();
        test.each([
            // `applyCollection` instruction with __where keyword
            `applyCollection(Namespace:ClassName, __where currentElement.attribute == true)`,
            // `applyCollection` instruction with __operation keyword on class member
            `applyCollection(myCollection , __operation Namespace:ClassName::member)`,
            // `applyCollection` instruction with __operation keyword on function name
            `applyCollection(list0, __operation carre);`,
            // `applyCollection` instruction with __operation and __arguments keywords
            `applyCollection(list0, __operation fct1, __arguments [2]);`,
            // `applyCollection` instruction with __operation and __arguments keywords with multiple args
            `applyCollection(list0, __operation fct2, __arguments [2, 3]);`,
            // `applyCollection` instruction with __operation keyword on class attribute
            `applyCollection(list4, __operation Person::firstName);`,
            // `applyCollection` instruction with __operation on attribute name and __where keywords
            `applyCollection(list4, __operation Person::firstName, __where currentElement != "alain");`,
            // `applyCollection` instruction with __operation on Symbol and __where keywords
            `applyCollection(list4, __operation _NO_EVAL, __where currentElement != P2);`,
        ])('the instruction applyCollection (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('instruction_assignment', () => {
        const func = (parser) => parser.instruction_assignment();
        test.each([
            // assignment with the `as` instruction
            `a = as(?fact, ?att = obj.attribute, ?fact.?att != null)`,
            // assignment with the `switchExprExclusive` instruction
            `myVal = switchExprExclusive {
                case(label == "a") : 1
                case(label == "ab") : -1
                case(label == "abc") : -1
                default : 0
            }`,
            // assignment with the `switchExpr` instruction
            `finalVal = switchExpr( myValue ) {
                case myValue > 0 : 1
                case myValue < 1 : 0
                case myValue > 1 : -1
            };`,
        ])('the assignment (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('applyCollectionOn', () => {
        const func = (parser) => parser.applyCollectionOn();
        test.each([
            // `applyCollectionOn` instruction with select keyword
            `applyCollectionOn(_elt in list0, select carre(_elt));`,
            // `applyCollectionOn` instruction with select keyword on attribute value
            `applyCollectionOn(_elt in list4, select _elt.firstName);`,
            // `applyCollectionOn` instruction with select and where keywords
            `applyCollectionOn(_elt in list4, select _NO_EVAL, where _elt != P2);`,
            // `applyCollectionOn` instruction with where keyword
            `applyCollectionOn(_elt in list4, where _elt != P2);`,
            // `applyCollectionOn` with the type of the iteration variable indicated
            `applyCollectionOn(MyClass _elt in list4, where _elt != P2);`,
        ])('the instruction applyCollectionOn (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('chainedCall', () => {
        const func = (parser) => parser.chainedCall();
        test.each([
            // condition used as a function caller
            `((a == b && c == d) || myVal > e).check()`,
            // `applyCollection` instruction used as a function caller
            `applyCollection(Namespace:ClassName, __where currentElement.attr == true).toList()`,
            // `applyCollectionOn` instruction used as a function caller
            `applyCollectionOn(_elt in list4, where _elt != P2).toList()`,
            // chained call with indexed accesses
            `aObj[b][c].aAttr.get()[12]`,
            // chained call with hashMap
            `{KEY : myVal}.get(KEY)`,
            // chained call with an array
            `["a", "b"].get(_FIRST)`,
            // chained call with an ifExpr
            `(ifExpr(a ==b) then ["a", "b"] else ["c", "d"]).get(_FIRST)`,
            // chained call with an switchExpr
            `(switchExpr( myValue ) {
                case CASE_1 : [val1, val2]
                case CASE_2 : [val3, val4]
                case CASE_3 : [val5, val6]
                case CASE_4 : [val7, val8]
            }).get(_RANDOM)`,
            // chained call with an switchExpr
            `(switchExprExclusive {
                case myValue > 0 : [val1, val2]
                case myValue < 1 : [val3, val4]
                case myValue > 1 : [val5, val6]
            }).get(_RANDOM)`,
            // call with an optional argument using an attribute pointer
            `myCollection.sort(_DESCENDANT, _RELATIVE_ORDER_OF: Namespace:ClassName:::classMember)`,
        ])('the “chained call” (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('function', () => {
        const func = (parser) => parser.function();
        test.each([
            // function with only one action outside a block
            `function Namespace:ClassName::myMethod()
            --> action return getValue(SYMBOL);
            ;`,
            // function with a Function object as argument
            `function Test::applyMyFunction(Function testFunction)
            --> action {
                testFunction.apply();
            };`,
            // function introduced with type Function
            `Function Test:func
            args {
                Object arg1
                Object arg2
            }
            --> documentation "Does things with arg1 and arg2."
            --> domains Void
            --> preAssert arg1 != null && arg2 != null
            --> action {
                // does nothing
            };`,
            // function declaration with simple type arguments
            `function Namespace:funcName(Namespace:ClassNameA obj, Namespace:ClassNameB objB)
            --> text \\( \\)
            ;`,
            // function declaration with multi type arguments
            `function myFunction(TypeA aObj, TypeB || TypeC bOrC_obj)
            --> text \\( \\)
            ;`,
        ])('the function (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('instruction', () => {
        const func = (parser) => parser.instruction();
        test.each([
            // foreach with a single instruction not in a block
            `foreach(_obj, coll) myVar = _obj;`,
            // foreach with a single instruction
            `foreach(_obj, coll) { myVar = _obj; }`,
            // for with a single instruction not in a block
            `for(_idx, 1, coll) myVar = _idx;`,
            // for with a single instruction
            `for(_idx, 1, coll) { myVar = _idx; }`,
            // while with a single instruction not in a block
            `while(_myVar < 10) incr(_myVar);`,
            // while with a single instruction
            `while(_myVar < 10) { incr(_myVar); }`,
            // timeCounter expression
            `timeCounter(COUNTER_ID, {
                if(condition == true) {
                    logInfo("logging stuff");
                }
            });`,
        ])('the instruction (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('argumentList', () => {
        const func = (parser) => parser.argumentList();
        test.each([
            // argument list with optional args finishing with a comma
            `{[_KEY]: Symbol mode {__nullable},} args`,
        ])('the argument list signature (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('classImplementation', () => {
        const func = (parser) => parser.classImplementation();
        test.each([
            `implementation SentenceToGenerate

                myAttr
                --> defaultValue obj.attr

                override {
                    write function
                }
            ;`,
        ])('the classs implementation block (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('hashMap', () => {
        const func = (parser) => parser.hashMap();
        test.each([
            // hashMap with integers as keys
            `{1: VAL, 2: VAL_2}`,
            // hashMap with doubles as keys
            `{1.2: VAL, 2.3: VAL_2}`,
            // hashMap with string as keys
            `{"1": VAL, "2": VAL_2}`,
            // hashMap with arrays as keys
            `{[1,2]: VAL, [3,4]: VAL_2}`,
            // hashMap with constList as keys
            `{{_1,_2}: VAL, {_3,_4}: VAL_2}`,
            // hashMap with integer as value
            `{1: 2}`,
            // hashMap with double as value
            `{1: 2.3}`,
            // hashMap with string as value
            `{1: "str"}`,
            // hashMap with arrays as value
            `{1: [VAL, VAL_2]}`,
            // hashMap with constList as value
            `{1: {VAL, VAL_2}}`,
        ])('the inline HashMap (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('instruction_switchExpr_withValue', () => {
        const func = (parser) => parser.instruction_switchExpr_withValue();
        test.each([
            // switchExpr instruction with a "noDefault" case
            `switchExpr(val) {
                case "case1" : value2
                case "case2" : value2
                noDefault
            };`,
            // switchExpr instruction with a "noDefault" case; select an enum element
            `switchExpr(myVariable) {
                case "value1" : EnumClass::EnumVal1
                case "value2" : EnumClass::EnumVal2
                noDefault
            };`,
        ])('the switchExpr expression (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('instruction_switchCase_asIf', () => {
        const func = (parser) => parser.instruction_switchCase_asIf();
        test.each([
            // switchExclusive instruction with noDefault keyword; used as a if/else expression
            `switchExclusive {
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
        ])('the switch case instruction (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('instruction_switchCase_withValue', () => {
        const func = (parser) => parser.instruction_switchCase_withValue();
        test.each([
            // switch with cases without parentheses around the value
            `switch( val ) {
                case VALUE_1 : {
                    // do stuff
                }
                case VALUE_2 : {
                    // do something else
                }
            };`,
            // switch with parentheses around values
            `switch( val ) {
                case (VALUE_1) : {
                    // do stuff
                }
                case (VALUE_2) : {
                    // do something else
                }
            };`,
            // switch with parentheses around some values
            `switch( val ) {
                case (VALUE_1) : {
                    // do stuff
                }
                case VALUE_2 : {
                    // do something else
                }
            };`,
            // switch with a list as cases defined as only one case
            `switch( val ) {
                case (VALUE_1) : {
                    // do stuff
                }
                case VALUE_2, VALUE_3, VALUE_4 : {
                    // do something else
                }
            };`,
        ])('the switch case instruction (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('classComplete', () => {
        const func = (parser) => parser.classComplete();
        test.each([
            // complete of a class adding methods to it
            `complete MyClass

                method doSomething(Object obj, Text text {__nullable}) function
                --> domains Void

                method doStuff(Object obj) function
                --> domains Void

                method getValue(Object obj) function
                --> domains Object
            ;`,
            // complete of a class with the modification of one of its methods
            `complete MyClass
                @pragma noWarning REDEFINED_PREDEFINED_CLASS_MEMBER
                modify write
                function override my_write_function
            ;`,
            // complete of a class with the modification of the full signature of a function
            `complete MyClass

                @pragma noWarning REDEFINED_PREDEFINED_CLASS_MEMBER
                modify myMethod
                args {
                    NamedArgumentsTable args
                    --> additionalVarArgs true
                    --> nullable true
                } function override myMethod_modified
            ;`,
        ])('the class completion (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('ymlId', () => {
        const func = (parser) => parser.ymlId();
        test.each([
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
        ])('the yml identifier (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('kaoFile', () => {
        const func = (parser) => parser.kaoFile();
        test.each([
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
        ])('the kao file (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('staticDeclaration', () => {
        const func = (parser) => parser.staticDeclaration();
        test.each([
            // object with an "implementation" attribute
            `MyClass myObject
            --> implementation {
                as(?fact, ?att = myObj.attribute, ?fact.?att != null);
            };`,
            // HashMap with all entries defined in the "values" attribute
            `HashMap computedValues
            --> values  KEY_1 : value1,
                        KEY_2 : value2,
                        KEY_3 : value3,
                        KEY_4 : value4
            ;`,
            // ConstList as attribute's value
            `MyClass MY_OBJECT
            --> value -> ConstList {
                        VALUE_1, VALUE_2, VALUE_3
                    };
            ;`,
        ])('the static declaration (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('arithmeticExpression', () => {
        const func = (parser) => parser.arithmeticExpression();
        test.each([
            `a + b`,
            `a / b`,
            `a * b`,
            `a - b`,
            `a - -b`,
            `-a - -b`,
            `-a - b`,
            `a + 1`,
            `a / 1`,
            `a * 1`,
            `a - 1`,
            `a - -1`,
            `-a - -1`,
            `-a - 1`,
            `1 + b`,
            `1 / b`,
            `1 * b`,
            `1 - b`,
            `1 - -b`,
            `-1 - -b`,
            `-1 - b`,
            `date.year mod 4`,
            `(1 - analysisN1.varEndVal) / analysisD1.varEndVal`,
        ])('the arithmetic expression (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('ruleset', () => {
        const func = (parser) => parser.ruleset();
        test.each([
            // empty ruleset
            `ruleset {}`,
            // ruleset with some rules
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
            // ruleset with some rules and some attributes
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
        ])('the ruleset (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('local_variable_decl', () => {
        const func = (parser) => parser.local_variable_decl();
        test.each([
            // local_variable_declarations with multiple potential types
            `Type1 || Type2 || Collection myVariable`,
        ])('the local variable declaration (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('granule', () => {
        const func = (parser) => parser.granule();
        test.each([
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
            \\)`,
        ])('the granule (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('yenum', () => {
        const func = (parser) => parser.yenum();
        test.each([
            // enums with attributes
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
        ])('the enum (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('comparison', () => {
        const func = (parser) => parser.comparison();
        test.each([
            `a == b`,
            `a != b`,
            `a <= b`,
            `a >= b`,
            `a < b`,
            `a > b`,
            `exists(?a in myCollection, ?a != null)`,
            `noExists(?a in myCollection, ?a != null)`,
            `whatever(?a in myCollection) then ?a != null`,
        ])('the comparison (%#) should be parsed without error', (content) => {
            checkInputValidityForRule(func, content);
        });
    });

    describe('instruction_ifElse in a function', () => {
        const func = (parser) => parser.function();
        test.each([
            `if(a == b) { logInfo("done"); }`,
            `if(a == b) logInfo("done");`,
            `if(a == b) logInfo("done"); else logInfo("not done");`,
            `if(a == b) logInfo("done"); else { logInfo("not done"); }`,
            `if(a == b) {} else {}`,
            `if(a == b) { logInfo("done"); } else logInfo("not done");`,
            `if(a == b) { logInfo("done"); } else { logInfo("not done"); }`,
            `if(a == b) { logInfo("done"); } else if(a == c) { logInfo("not done"); }`,
            `if(a == b) {
                logInfo("done");
            } else if(a == c) {
                logInfo("not done");
                if(b == d) logInfo("done"); else { logInfo("not done"); }
            } else {
                logInfo("not done at all");
                if(c == w) logInfo("done"); else { logInfo("not done"); }
            }`,
            `if(a == b) { logInfo("done"); } else { logInfo("not done"); }`,
            `if(whatever(?a in myCollection) then ?a != null) { logInfo("done"); } else { logInfo("not done"); }`,
        ])('the if/else instruction (%#) should be parsed without error', (content) => {
            const ymlFunction = `function func()
            --> action {
                ${content}
            };`;

            const result: ParserRuleContext = checkInputValidityForRule(func, ymlFunction);
            if (!(result instanceof FunctionContext)) {
                return;
            }
            const functionContext: FunctionContext = result;
            const visitor = new YmlFunctionVisitor(new YmlCompletionItemsProvider(), '', new YmlDefinitionProvider());
            visitor.visit(functionContext);
        });
    });
});
