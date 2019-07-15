import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as assert from 'assert';
import { CompletionItemKind } from 'vscode-languageserver';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { YmlLexer, YmlParser } from '../grammar';
import { YmlKaoFileVisitor } from '../visitors';

describe('YmlCompletionItemsProvider', () => {
    it("should get be able to get a method's documentation from its short name", (done) => {
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
        const methodNameGetName = 'getName';

        const allItemsByLabel = completionProvider.getAllItemsByLabelMatching(methodNameGetName);
        const allItemsByShortName = completionProvider.getAllItemsByShortNameMatching(methodNameGetName);
        // just the keyword getName
        assert.strictEqual(allItemsByLabel.length, 1);
        // keyword and the method
        assert.strictEqual(allItemsByShortName.length, 2);

        const allDocumentedItemsByLabel = completionProvider.getAllItemsByLabelMatching(
            methodNameGetName,
            (elem) => !!elem.documentation,
        );
        const allDocumentedItemsByShortName = completionProvider.getAllItemsByShortNameMatching(
            methodNameGetName,
            (elem) => !!elem.documentation,
        );

        // keywords have no documentation, should get nothing
        assert.deepStrictEqual(allItemsByLabel.filter((elem) => !!elem.documentation).length, 0);
        // same as previous instruction
        assert.deepStrictEqual(allDocumentedItemsByLabel.length, 0);
        assert.deepStrictEqual(allItemsByLabel.filter((elem) => !!elem.documentation), allDocumentedItemsByLabel);

        // the method should be in the list; the method has the documentation.
        assert.deepStrictEqual(allItemsByShortName.filter((elem) => !!elem.documentation).length, 1);
        // same as previous instruction
        assert.deepStrictEqual(allDocumentedItemsByShortName.length, 1);
        assert.deepStrictEqual(allItemsByShortName.filter((elem) => !!elem.documentation), allDocumentedItemsByShortName);
        done();
    });
});
