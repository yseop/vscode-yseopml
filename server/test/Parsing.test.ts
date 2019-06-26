import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import * as assert from 'assert';

import { YmlLexer, YmlParser } from '../src/grammar';

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
