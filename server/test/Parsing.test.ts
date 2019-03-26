import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as assert from 'assert';

import { YmlLexer, YmlParser } from '../src/grammar';

describe('Parsing Tests', () => {
    describe('classImplementation rule', () => {
        it('should parse correctly implementation with attributes and override', (done) => {
            const inputStream = CharStreams.fromString(`
implementation SentenceToGenerate

    forGroups
    --> defaultValue theClinicalStudy.groupsOfSubjects

    override {
        write function
    }
;`);
            const lexer = new YmlLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new YmlParser(tokenStream);

            const result = parser.classImplementation();
            assert.strictEqual(parser.numberOfSyntaxErrors, 0);
            assert.notStrictEqual(result, null);
            done();
        });
    });
    describe('classComplete rule', () => {
        it('should parse correctly a complete of a class adding methods to it', (done) => {
            const inputStream = CharStreams.fromString(`
complete StudyConcept

    method manageUnitLabel(DataStructure localDataStructure, Text unitText {__nullable}) function
    --> domains Void

    method manageUnit(DataStructure localDataStructure) function
    --> domains Void

    method getStudyData(PatientGroupPartition group) function
    --> domains StudyData
;
`);
            const lexer = new YmlLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new YmlParser(tokenStream);

            const result = parser.classComplete();
            assert.strictEqual(parser.numberOfSyntaxErrors, 0);
            assert.notStrictEqual(result, null);
            done();
        });
    });
});
