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

    describe('as assigment rule', () => {
        it('should parse correctly an assignment with the `as` instruction', (done) => {
            checkInputValidityForRule(
                (parser) => parser.instruction_assignment(),
                `a = as(?fact, ?att = jointure.attribute, ?fact.?att != null)`,
            );
            done();
        });
    });

    describe('applyCollection + __where rule', () => {
        it('should parse correctly an `applyCollection` instruction with __where keyword', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(LibCube:Measure, __where currentElement.includeInJointureConditions == true)`,
            );
            done();
        });
    });

    describe('applyCollection + __where as a function caller', () => {
        it('should parse correctly an `applyCollection` instruction with __where keyword used as a function caller', (done) => {
            checkInputValidityForRule(
                (parser) => parser.chainedCall(),
                `applyCollection(LibCube:Measure, __where currentElement.includeInJointureConditions == true).toList()`,
            );
            done();
        });
    });

    describe('applyCollection + __operation rule', () => {
        it('should parse correctly an `applyCollection` instruction with __operation keyword', (done) => {
            checkInputValidityForRule(
                (parser) => parser.applyCollection(),
                `applyCollection(toBeProcessedfactsSelections , __operation LibCube:JointureFactsSelection::jointure)`,
            );
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
});
