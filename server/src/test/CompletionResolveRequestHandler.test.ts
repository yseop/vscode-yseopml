import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CompletionItem, DocumentSymbol, DocumentSymbolParams, TextDocumentIdentifier } from 'vscode-languageserver';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { completionResolveRequestHandler } from '../features';
import { YmlLexer, YmlParser } from '../grammar';
import { YmlKaoFileVisitor } from '../visitors';
import { AbstractYmlObject } from '../yml-objects/AbstractYmlObject';

const DEFAULT_URI = '/path/to/file';
const COMPLETION_PROVIDER = new YmlCompletionItemsProvider();

describe('CompletionResolveRequestHandler', () => {
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
        const definitionProvider = new YmlDefinitionProvider();
        const visitor = new YmlKaoFileVisitor(COMPLETION_PROVIDER, DEFAULT_URI, definitionProvider);
        visitor.visit(result);
    });
    test('should get the correct number of symbol definitions', (done) => {
        const handler = completionResolveRequestHandler(COMPLETION_PROVIDER);
        const lightCompletionItems: CompletionItem[] = COMPLETION_PROVIDER.getAvailableCompletionItems(DEFAULT_URI, 0);
        const lightCompletionItemsLength = lightCompletionItems.length;
        // We get at least one element.
        expect(lightCompletionItemsLength).toBeGreaterThan(0);
        const fullCompletionItems: CompletionItem[] = lightCompletionItems.map((item) => handler(item));
        // The handler allows to get as many objects as there was initially.
        expect(fullCompletionItems).toHaveLength(lightCompletionItemsLength);
        done();
    });
});
