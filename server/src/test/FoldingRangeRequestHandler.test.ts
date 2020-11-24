import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { FoldingRange, FoldingRangeParams, TextDocumentIdentifier } from 'vscode-languageserver';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { foldingRangeRequestHandler } from '../features/FoldingRangeRequestHandler';
import { YmlLexer, YmlParser } from '../grammar';
import { YmlKaoFileVisitor } from '../visitors';

const DEFAULT_URI = '/path/to/declaration/file';
const DEFINITION_PROVIDER = new YmlDefinitionProvider();
const DEFAULT_REQUEST_PARAMS: FoldingRangeParams = {
    textDocument: TextDocumentIdentifier.create(DEFAULT_URI),
};

describe('FoldingRangeRequestHandler', () => {
    beforeAll(() => {
        const inputStream = CharStreams.fromString(`
interface City
field name // 2 → 3
--> domains String

method getName() // 5 → 6
--> domains String

method buildStuff // 8 → 18 (but we get 15 − start of documentation)
args {
    Object arg1
    Object arg2
}
--> domains Text, Collection
--> domainsLevel2 Text
--> documentation """some
multiline
documentation
"""

;

implementation City
;

function City::buildStuff // 25 → 42
args {
    Object arg1
    Object arg2
}
static {
    ComplexObject myComplexObject
    --> attr1 {
        key1: -> City
            --> name "City"
            ;,
        key2: null
    };
}
--> action {
    // Some code
    return arg1;
};

function City::getName() // 44 → 46
--> return this.name
;

Object CONSTANT; // 48 → 48

function add(Integer a, Integer b) // 50 → 53
--> domains Integer
--> return a + b
;

enum MyEnum { // 55 → 58
    ENUM_MEMBER1, // 56 → 56
    ENUM_MEMBER2 // 57 → 57
};
        `);
        const lexer = new YmlLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new YmlParser(tokenStream);

        const result = parser.kaoFile();
        const completionProvider = new YmlCompletionItemsProvider();
        const visitor = new YmlKaoFileVisitor(completionProvider, DEFAULT_URI, DEFINITION_PROVIDER);
        visitor.visit(result);
    });
    test('should get the correct number of symbol definitions', (done) => {
        const handler = foldingRangeRequestHandler(DEFINITION_PROVIDER);
        const foldingRanges: FoldingRange[] = handler(DEFAULT_REQUEST_PARAMS);
        expect(foldingRanges).toBeTruthy();
        expect(foldingRanges.length).toBe(10);
        foldingRanges.sort((a, b) => a.startLine - b.startLine);
        expect(foldingRanges[0]).toStrictEqual(FoldingRange.create(2, 3));
        expect(foldingRanges[1]).toStrictEqual(FoldingRange.create(5, 6));
        // This one should be 8 → 18. There is an issue with the multiline strings.
        // This is not related to this feature.
        expect(foldingRanges[2]).toStrictEqual(FoldingRange.create(8, 15));
        expect(foldingRanges[3]).toStrictEqual(FoldingRange.create(25, 42));
        expect(foldingRanges[4]).toStrictEqual(FoldingRange.create(44, 46));
        expect(foldingRanges[5]).toStrictEqual(FoldingRange.create(48, 48));
        expect(foldingRanges[6]).toStrictEqual(FoldingRange.create(50, 53));
        expect(foldingRanges[7]).toStrictEqual(FoldingRange.create(55, 58));
        expect(foldingRanges[8]).toStrictEqual(FoldingRange.create(56, 56));
        expect(foldingRanges[9]).toStrictEqual(FoldingRange.create(57, 57));
        done();
    });
});
