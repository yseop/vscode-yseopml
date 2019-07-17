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
        it('should parse correctly an `as` instruction', (done) => {
            checkInputValidityForRule(
                (parser) => parser.as(),
                `as(?fact, ?att = jointure.attribute, ?fact.?att != null)`,
            );
            done();
        });
    });

    describe('assigment rule', () => {
        it('should parse correctly an assignment with the `as` instruction', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_assignment(),
                `a = as(?fact, ?att = jointure.attribute, ?fact.?att != null)`,
            );
            done();
        });
    });

    describe('applyCollection', () => {
        it('should parse correctly an `applyCollection` instruction with __where keyword', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(LibCube:Measure, __where currentElement.includeInJointureConditions == true)`,
            );
            done();
        });

        it('should parse correctly an `applyCollection` instruction with __operation keyword', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(toBeProcessedfactsSelections , __operation LibCube:JointureFactsSelection::jointure)`,
            );
            done();
        });
    });

    describe('chainedCall rule', () => {
        it('should parse correctly an `applyCollection` instruction with __where keyword used as a function caller', (done) => {
            checkInputValidityForRule(
                (parser) => parser.chainedCall(),
                `applyCollection(LibCube:Measure, __where currentElement.includeInJointureConditions == true).toList()`,
            );
            done();
        });

        it('should parse correctly a chained call with indexed accesses', (done) => {
            checkInputValidityForRule((parser) => parser.chainedCall(), `aObj[b][c].aAttr.get()[12]`);
            done();
        });

        it('should parse correctly a call with an optional argument using an attribute pointer', (done) => {
            checkInputValidityForRule(
                (parser) => parser.chainedCall(),
                `myCollection.sort(_DESCENDANT, _RELATIVE_ORDER_OF: Domain:ClassName:::classMember)`,
            );
            done();
        });
    });

    describe('function rule', () => {
        it('should parse correctly a function with only one action outside a block', (done) => {
            checkInputValidityForRule(
                (parser) => parser.function(),
                `
function LibCube:Fact::getMeasureValue()
--> action return getMeasure(MEASURE_VALUE);
;
`,
            );
            done();
        });

        it('should parse correctly a function with a Function object as argument', (done) => {
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

        it('should parse correctly a function introduced with type Function', (done) => {
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

        it('should parse a function declaration with simple type arguments', (done) => {
            checkInputValidityForRule(
                (parser) => parser.function(),
                `
function LibDocument:printRangeValues(LibKPI:KeyPerformanceIndicator KPI,
    LibCube:TwoFactsOneMeasureComparison reference)
    --> text \\( \\)
;`,
            );
            done();
        });

        it('should parse a function declaration with multi type arguments', (done) => {
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

    describe('argumentList rule', () => {
        it('should parse an argument list with optional args finishing with a comma', (done) => {
            checkInputValidityForRule((parser) => parser.argumentList(), `{[_KEY]: Symbol mode {__nullable},} args`);
            done();
        });
    });

    describe('classImplementation rule', () => {
        it('should parse correctly implementation with attributes and override', (done) => {
            checkInputValidityForRule(
                (parser) => parser.classImplementation(),
                `
implementation SentenceToGenerate

    forGroups
    --> defaultValue theClinicalStudy.groupsOfSubjects

    override {
        write function
    }
;`,
            );
            done();
        });
    });

    describe('classComplete rule', () => {
        it('should parse correctly a complete of a class adding methods to it', (done) => {
            checkInputValidityForRule(
                (parser) => parser.classComplete(),
                `
complete StudyConcept

    method manageUnitLabel(DataStructure localDataStructure, Text unitText {__nullable}) function
    --> domains Void

    method manageUnit(DataStructure localDataStructure) function
    --> domains Void

    method getStudyData(PatientGroupPartition group) function
    --> domains StudyData
;
`,
            );
            done();
        });
    });

    describe('ymlId rule', () => {
        it('should accept different kinds of ymlId', (done) => {
            checkInputValidityForRule((parser) => parser.ymlId(), `abc`);
            checkInputValidityForRule((parser) => parser.ymlId(), `a:bc`);
            checkInputValidityForRule((parser) => parser.ymlId(), `a:bc:d`);
            checkInputValidityForRule((parser) => parser.ymlId(), `a:bc::d`);
            checkInputValidityForRule((parser) => parser.ymlId(), `a:bc:::d`);
            done();
        });
    });

    describe('kaoFile rule', () => {
        it('should parse an import declaration file', (done) => {
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
`,
            );
            done();
        });
    });
});
