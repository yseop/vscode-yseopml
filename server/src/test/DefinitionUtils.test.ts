import { EntityPartPosition, getTokenAtPosInDoc, getYmlEntityNamePart } from '../definitions';

describe('Extension Server Tests', () => {
    describe('DefinitionUtils', () => {
        describe('getYmlEntityNamePart − end of input', () => {
            it('should find no word from null input', (done) => {
                expect(getYmlEntityNamePart(null, EntityPartPosition.END)).toBeNull();
                done();
            });

            it('should find a word from a simple word', (done) => {
                const source = 'word';
                expect(getYmlEntityNamePart(source, EntityPartPosition.END)).toBe('word');
                done();
            });

            it('should ignore the dot', (done) => {
                const source = '.otherWord';
                expect(getYmlEntityNamePart(source, EntityPartPosition.END)).toBe('otherWord');
                done();
            });

            it('should ignore any punctuation sign except `_`', (done) => {
                const source = '/*/-*/$*$§!:/;?,_myWord';
                expect(getYmlEntityNamePart(source, EntityPartPosition.END)).toBe('_myWord');
                done();
            });

            it('should give nothing if word not at the end of the string', (done) => {
                const source = '/*/-*/$*$§!:/;?,_myWord:';
                expect(getYmlEntityNamePart(source, EntityPartPosition.END)).toBeNull();
                done();
            });

            it('should accept identifiers with numbers too', (done) => {
                const source = 'id3ntifierW1thNumb3r5';
                expect(getYmlEntityNamePart(source, EntityPartPosition.END)).toBe('id3ntifierW1thNumb3r5');
                done();
            });

            it('should start after the last colon character', (done) => {
                const source = '::id3ntif13rW1thNumb3r5';
                expect(getYmlEntityNamePart(source, EntityPartPosition.END)).toBe('id3ntif13rW1thNumb3r5');
                done();
            });

            it('should find only the last identifier', (done) => {
                const source = 'namespace::myObject.functionName(arg1, otherFunct10n';
                expect(getYmlEntityNamePart(source, EntityPartPosition.END)).toBe('otherFunct10n');
                done();
            });

            it('should accept Japanese charaters', (done) => {
                const source = '::VERB_JA_食べ物';
                expect(getYmlEntityNamePart(source, EntityPartPosition.END)).toBe('VERB_JA_食べ物');
                done();
            });
            it('should accept identifiers with namespaces', (done) => {
                const source = '(Lang:Verb::VERB_JA_食べ物';
                expect(getYmlEntityNamePart(source, EntityPartPosition.END)).toBe('Lang:Verb::VERB_JA_食べ物');
                done();
            });
        });

        describe('getYmlEntityNamePart − start of input', () => {
            it('should find no word from null input', (done) => {
                expect(getYmlEntityNamePart(null, EntityPartPosition.BEGINNING)).toBeNull();
                done();
            });

            it('should find a word from a simple word', (done) => {
                const source = 'word';
                expect(getYmlEntityNamePart(source, EntityPartPosition.BEGINNING)).toBe('word');
                done();
            });

            it('should ignore the dot', (done) => {
                const source = 'otherWord.';
                expect(getYmlEntityNamePart(source, EntityPartPosition.BEGINNING)).toBe('otherWord');
                done();
            });

            it('should ignore any punctuation sign except `_`', (done) => {
                const source = '_myWord/*/-*/$*$§!:/;?,';
                expect(getYmlEntityNamePart(source, EntityPartPosition.BEGINNING)).toBe('_myWord');
                done();
            });

            it('should give nothing if word not at the begining of the string', (done) => {
                const source = ':_myWord/*/-*/$*$§!:/;?,:';
                expect(getYmlEntityNamePart(source, EntityPartPosition.BEGINNING)).toBe(null);
                done();
            });

            it('should accept identifiers with numbers too', (done) => {
                const source = 'id3ntifierW1thNumb3r5';
                expect(getYmlEntityNamePart(source, EntityPartPosition.BEGINNING)).toBe('id3ntifierW1thNumb3r5');
                done();
            });

            it('should stop before the first colon character', (done) => {
                const source = 'id3ntif13rW1thNumb3r5::';
                expect(getYmlEntityNamePart(source, EntityPartPosition.BEGINNING)).toBe('id3ntif13rW1thNumb3r5');
                done();
            });

            it('should find only the first identifier', (done) => {
                const source = 'namespace::myObject.functionName(arg1, otherFunct10n';
                expect(getYmlEntityNamePart(source, EntityPartPosition.BEGINNING)).toBe('namespace::myObject');
                done();
            });

            it('should accept Japanese charaters', (done) => {
                const source = 'VERB_JA_食べ物::';
                expect(getYmlEntityNamePart(source, EntityPartPosition.BEGINNING)).toBe('VERB_JA_食べ物');
                done();
            });
            it('should accept identifiers with namespaces', (done) => {
                const source = 'Lang:Verb::VERB_JA_食べ物(';
                expect(
                    getYmlEntityNamePart(source, EntityPartPosition.BEGINNING)).toBe(
                    'Lang:Verb::VERB_JA_食べ物',
                );
                done();
            });
        });

        describe('getTokenAtPosInDoc', () => {
            it('should find no word from null input and null position', (done) => {
                const source: string = null;
                const offset: number = null;
                const token = getTokenAtPosInDoc(source, offset);
                expect(token).toBeNull();
                done();
            });

            it("should find no word if position doesn't exist", (done) => {
                const source: string = 'length(myList);';
                expect(getTokenAtPosInDoc(source, null)).toBeNull();
                expect(getTokenAtPosInDoc(source, -1)).toBeNull();
                expect(getTokenAtPosInDoc(source, 9000)).toBeNull();
                done();
            });

            it('should find token “length” from “length(myList);” if position in [0, 7[', (done) => {
                const source: string = 'length(myList);';
                const expectedToken = 'length';
                const start = 0;
                const end = 7;
                for (let position = start; position < end; position++) {
                    expect(getTokenAtPosInDoc(source, position)).toBe(expectedToken);
                }
                expect(getTokenAtPosInDoc(source, end)).not.toBe(expectedToken);
                done();
            });

            it('should find token “myList” from “length(myList);” if position in [7, 14[', (done) => {
                const source: string = 'length(myList);';
                const expectedToken = 'myList';
                const start = 7;
                const end = 14;
                for (let position = start; position < end; position++) {
                    expect(getTokenAtPosInDoc(source, position)).toBe(expectedToken);
                }
                expect(getTokenAtPosInDoc(source, end)).not.toBe(expectedToken);
                done();
            });

            it('should find nothing from “length(myList);” if position in [14,end]', (done) => {
                const source: string = 'length(myList);';
                const expectedToken = null;
                const start = 14;
                const end = source.length;
                for (let position = start; position < end; position++) {
                    expect(getTokenAtPosInDoc(source, position)).toBe(expectedToken);
                }
                done();
            });
        });
    });
});
