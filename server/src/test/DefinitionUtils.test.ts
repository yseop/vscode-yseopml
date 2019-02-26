import * as assert from "assert";
import {
  EntityPartPosition,
  getTokenAtPosInDoc,
  getYmlEntityNamePart,
} from "../definitions";

describe("Extension Server Tests", () => {
  describe("DefinitionUtils", () => {
    describe("getYmlEntityNamePart − end of input", () => {
      it("should find no word from null input", (done) => {
        assert.strictEqual(
          getYmlEntityNamePart(null, EntityPartPosition.END),
          null,
        );
        done();
      });

      it("should find a word from a simple word", (done) => {
        const source = "word";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.END),
          "word",
        );
        done();
      });

      it("should ignore the dot", (done) => {
        const source = ".otherWord";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.END),
          "otherWord",
        );
        done();
      });

      it("should ignore any punctuation sign except `_`", (done) => {
        const source = "/*/-*/$*$§!:/;?,_myWord";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.END),
          "_myWord",
        );
        done();
      });

      it("should give nothing if word not at the end of the string", (done) => {
        const source = "/*/-*/$*$§!:/;?,_myWord:";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.END),
          null,
        );
        done();
      });

      it("should accept identifiers with numbers too", (done) => {
        const source = "id3ntifierW1thNumb3r5";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.END),
          "id3ntifierW1thNumb3r5",
        );
        done();
      });

      it("should start after the last colon character", (done) => {
        const source = "::id3ntif13rW1thNumb3r5";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.END),
          "id3ntif13rW1thNumb3r5",
        );
        done();
      });

      it("should find only the last identifier", (done) => {
        const source = "namespace::myObject.functionName(arg1, otherFunct10n";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.END),
          "otherFunct10n",
        );
        done();
      });

      it("should accept Japanese charaters", (done) => {
        const source = "::VERB_JA_食べ物";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.END),
          "VERB_JA_食べ物",
        );
        done();
      });
    });

    describe("getYmlEntityNamePart − start of input", () => {
      it("should find no word from null input", (done) => {
        assert.strictEqual(
          getYmlEntityNamePart(null, EntityPartPosition.BEGINNING),
          null,
        );
        done();
      });

      it("should find a word from a simple word", (done) => {
        const source = "word";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.BEGINNING),
          "word",
        );
        done();
      });

      it("should ignore the dot", (done) => {
        const source = "otherWord.";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.BEGINNING),
          "otherWord",
        );
        done();
      });

      it("should ignore any punctuation sign except `_`", (done) => {
        const source = "_myWord/*/-*/$*$§!:/;?,";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.BEGINNING),
          "_myWord",
        );
        done();
      });

      it("should give nothing if word not at the begining of the string", (done) => {
        const source = ":_myWord/*/-*/$*$§!:/;?,:";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.BEGINNING),
          null,
        );
        done();
      });

      it("should accept identifiers with numbers too", (done) => {
        const source = "id3ntifierW1thNumb3r5";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.BEGINNING),
          "id3ntifierW1thNumb3r5",
        );
        done();
      });

      it("should stop before the first colon character", (done) => {
        const source = "id3ntif13rW1thNumb3r5::";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.BEGINNING),
          "id3ntif13rW1thNumb3r5",
        );
        done();
      });

      it("should find only the first identifier", (done) => {
        const source = "namespace::myObject.functionName(arg1, otherFunct10n";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.BEGINNING),
          "namespace",
        );
        done();
      });

      it("should accept Japanese charaters", (done) => {
        const source = "VERB_JA_食べ物::";
        assert.strictEqual(
          getYmlEntityNamePart(source, EntityPartPosition.BEGINNING),
          "VERB_JA_食べ物",
        );
        done();
      });
    });

    describe("getTokenAtPosInDoc", () => {
      it("should find no word from null input and null position", (done) => {
        const source: string = null;
        const offset: number = null;
        const token = getTokenAtPosInDoc(source, offset);
        assert.strictEqual(token, null);
        done();
      });

      it("should find no word if position doesn't exist", (done) => {
        const source: string = "length(myList);";
        assert.strictEqual(getTokenAtPosInDoc(source, null), null);
        assert.strictEqual(getTokenAtPosInDoc(source, -1), null);
        assert.strictEqual(getTokenAtPosInDoc(source, 9000), null);
        done();
      });

      it("should find token “length” from “length(myList);” if position between [0,7)", (done) => {
        const source: string = "length(myList);";
        const expectedToken = "length";
        const start = 0;
        const end = 7;
        for (let position = start; position < end; position++) {
          assert.strictEqual(
            getTokenAtPosInDoc(source, position),
            expectedToken,
          );
        }
        assert.notStrictEqual(getTokenAtPosInDoc(source, end), expectedToken);
        done();
      });

      it("should find token “myList” from “length(myList);” if position between [7,14)", (done) => {
        const source: string = "length(myList);";
        const expectedToken = "myList";
        const start = 7;
        const end = 14;
        for (let position = start; position < end; position++) {
          assert.strictEqual(
            getTokenAtPosInDoc(source, position),
            expectedToken,
          );
        }
        assert.notStrictEqual(getTokenAtPosInDoc(source, end), expectedToken);
        done();
      });

      it("should find nothing from “length(myList);” if position between [14,end]", (done) => {
        const source: string = "length(myList);";
        const expectedToken = null;
        const start = 14;
        const end = source.length;
        for (let position = start; position < end; position++) {
          assert.strictEqual(
            getTokenAtPosInDoc(source, position),
            expectedToken,
          );
        }
        done();
      });
    });
  });
});
