import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { DocumentSymbol, DocumentSymbolParams, TextDocumentIdentifier } from 'vscode-languageserver';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { documentSymbolRequestHandler } from '../features/DocumentSymbolRequestHandler';
import { YmlLexer, YmlParser } from '../grammar';
import { YmlKaoFileVisitor } from '../visitors';

const DEFAULT_URI = '/path/to/declaration/file';
const DEFINITION_PROVIDER = new YmlDefinitionProvider();
const DEFAULT_REQUEST_PARAMS: DocumentSymbolParams = {
    textDocument: TextDocumentIdentifier.create(DEFAULT_URI),
};

describe('DocumentSymbolRequestHandler', () => {
    beforeAll(() => {
        const inputStream = CharStreams.fromString(`
interface City
field name
--> domains String

method getName()
--> domains String

;

implementation City
;

function City::getName()
--> return this.name
;

Object CONSTANT;

function add(Integer a, Integer b)
--> domains Integer
--> return a + b
;

enum MyEnum {
    ENUM_MEMBER1,
    ENUM_MEMBER2
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
        const handler = documentSymbolRequestHandler(DEFINITION_PROVIDER);
        const definitions: DocumentSymbol[] = handler(DEFAULT_REQUEST_PARAMS);
        expect(definitions).toBeTruthy();
        // 1 enum, 1 class, 1 function, 1 method implementation, 1 object instance.
        expect(definitions).toHaveLength(5);
        // We find only the elements that have children. Only enum and class can have child elements.
        expect(definitions.filter((elem) => !!elem.children && elem.children.length > 0)).toHaveLength(2);
        done();
    });
});
