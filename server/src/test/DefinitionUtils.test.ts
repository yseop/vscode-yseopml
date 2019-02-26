import * as assert from "assert";
import { getLastValidYmlEntityName } from "../definitions";

describe("Extension Server Tests", () => {
  describe("DefinitionUtils", () => {
    describe("getDocumentLastWord", () => {
      it("should find no word from null input", (done) => {
        assert.strictEqual(getLastValidYmlEntityName(null), null);
        done();
      });

      it("should find a word from a simple word", (done) => {
        const source = "word";
        assert.strictEqual(getLastValidYmlEntityName(source), "word");
        done();
      });

      it("should ignore the dot", (done) => {
        const source = ".otherWord";
        assert.strictEqual(getLastValidYmlEntityName(source), "otherWord");
        done();
      });
      it("should ignore any punctuation sign except `_`", (done) => {
        const source = "/*/-*/$*$§!:/;?,_myWord/.:!";
        assert.strictEqual(getLastValidYmlEntityName(source), "_myWord");
        done();
      });
      it("should accept identifiers with numbers too", (done) => {
        const source = "id3ntifierW1thNumb3r5";
        assert.strictEqual(getLastValidYmlEntityName(source), "id3ntifierW1thNumb3r5");
        done();
      });
      it("should start after the last colon character", (done) => {
        const source = "::id3ntif13rW1thNumb3r5";
        assert.strictEqual(getLastValidYmlEntityName(source), "id3ntif13rW1thNumb3r5");
        done();
      });
      it("should find only the last identifier", (done) => {
        const source = "namespace::myObject.functionName(arg1, otherFunct10n(";
        assert.strictEqual(getLastValidYmlEntityName(source), "otherFunct10n");
        done();
      });
      it("should accept Japanese charaters", (done) => {
        const source = "::VERB_JA_食べ物";
        assert.strictEqual(getLastValidYmlEntityName(source), "VERB_JA_食べ物");
        done();
      });
    });
  });
});
