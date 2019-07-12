import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as assert from 'assert';
import { CompletionItemKind } from 'vscode-languageserver';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { YmlLexer, YmlParser } from '../grammar';
import { YmlKaoFileVisitor } from '../visitors';

describe('YmlCompletionItemsProvider', () => {
    it("should be able to get a method's documentation from its short name", (done) => {
        const inputStream = CharStreams.fromString(`
            interface City
                method getName()
                --> domains String
                --> documentation """This is documentation"""

                classProperties
                --> dsl -> Textualization
                        --> root "City"
                        --> language LANG_fr
                        --> gender FEMININE
                        --> number SINGULAR
                        ;
                --> hasAccessorFunction true
                ;

            implementation City
            ;

            function City::getName()
            --> domains String
            --> action {
                return "any string";
            };
        `);
        const lexer = new YmlLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new YmlParser(tokenStream);

        const result = parser.kaoFile();
        const completionProvider = new YmlCompletionItemsProvider();
        const visitor = new YmlKaoFileVisitor(completionProvider, '', new YmlDefinitionProvider());
        visitor.visit(result);
        const allItemsBylabel = completionProvider.getAllItemsByLabel('getName');
        const allItemsByShortName = completionProvider.getAllItemsByShortName('getName');
        // just the “getName” keyword
        assert.strictEqual(allItemsBylabel.length, 1);
        // keyword and the method
        assert.strictEqual(allItemsByShortName.length, 2);
        // keywords have no documentation, should get nothing
        assert.deepStrictEqual(allItemsBylabel.filter((elem) => !!elem.documentation).length, 0);
        // the method should be in the list, as it has some documentation.
        assert.deepStrictEqual(allItemsByShortName.filter((elem) => !!elem.documentation).length, 1);
        done();
    });
});
