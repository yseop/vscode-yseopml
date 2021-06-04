import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { FoldingRange, FoldingRangeParams, TextDocumentIdentifier } from 'vscode-languageserver';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { foldingRangesRequestHandler } from '../features/FoldingRangesRequestHandler';
import { YmlLexer, YmlParser } from '../grammar';
import { YmlKaoFileVisitor } from '../visitors';

const DEFAULT_URI = '/path/to/declaration/file';
const DEFINITION_PROVIDER = new YmlDefinitionProvider();
const DEFAULT_REQUEST_PARAMS: FoldingRangeParams = {
    textDocument: TextDocumentIdentifier.create(DEFAULT_URI),
};

describe('FoldingRangesRequestHandler', () => {
    beforeAll(() => {
        const inputStream = CharStreams.fromString(`
interface City
field name // 2 → 3
--> domains String

method getName() // 5 → 6
--> domains String

method buildStuff // 8 → 18
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
--> action { // 39 → 42
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

function doThings(Integer a, Integer b) // 60 → 76
--> domains Boolean
--> action { // 62 → 75
    if(a == b) { // 63 → 66
        // do nothing
        patate();
    } else if(a > b) { // 66 → 71
        /*
         * A multiline comment
         */
        a = b;
    } else { // 71 → 74
        // A comment
        b = a;
    }
}
--> return true;

Country myCountry // 78 → 85
--> cities -> City paris // 79 → 81
            --> name "Paris"
            ;
--> cities -> City // 82 → 84
            --> name "Lyon"
            ;
;
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
        const handler = foldingRangesRequestHandler(DEFINITION_PROVIDER);
        const foldingRanges: FoldingRange[] = handler(DEFAULT_REQUEST_PARAMS);
        expect(foldingRanges).toBeTruthy();
        const expectedFoldingRanges = [
            FoldingRange.create(1, 1), // Class name
            FoldingRange.create(2, 3),
            FoldingRange.create(5, 6),
            FoldingRange.create(8, 18),
            FoldingRange.create(25, 42),
            FoldingRange.create(39, 42),
            FoldingRange.create(44, 46),
            FoldingRange.create(48, 48),
            FoldingRange.create(50, 53),
            FoldingRange.create(55, 58),
            FoldingRange.create(56, 56),
            FoldingRange.create(57, 57),
            FoldingRange.create(60, 76),
            FoldingRange.create(62, 75),
            FoldingRange.create(63, 66),
            FoldingRange.create(66, 71),
            FoldingRange.create(71, 74),
            FoldingRange.create(78, 85),
            FoldingRange.create(79, 81),
            FoldingRange.create(82, 84),
        ];
        expect(foldingRanges.length).toBe(expectedFoldingRanges.length);
        foldingRanges.sort((a, b) => a.startLine - b.startLine);
        for (let index = 0; index < foldingRanges.length; index++) {
            const result = foldingRanges[index];
            const expected = expectedFoldingRanges[index];
            expect(result).toStrictEqual(expected);
        }
        done();
    });
});
