import { CharStreams, CommonTokenStream } from 'antlr4ts';

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
        const methodNameGetName = 'getName';

        const allItemsByLabel = completionProvider.getAllItemsByLabelMatching(methodNameGetName);
        const allItemsByShortName = completionProvider.getAllItemsByShortNameMatching(methodNameGetName);
        // just the method getName
        expect(allItemsByLabel.length).toBe(1);
        // just the method getName
        expect(allItemsByShortName.length).toBe(1);

        const allDocumentedItemsByLabel = completionProvider.getAllItemsByLabelMatching(methodNameGetName, (elem) =>
            elem.hasDocumentation(),
        );
        const allDocumentedItemsByShortName = completionProvider.getAllItemsByShortNameMatching(
            methodNameGetName,
            (elem) => elem.hasDocumentation(),
        );

        // `getName` method should be found with documentation
        expect(allItemsByLabel.filter((elem) => !!elem.hasDocumentation()).length).toBe(1);
        // same as previous instruction
        expect(allDocumentedItemsByLabel.length).toBe(1);
        expect(allItemsByLabel.filter((elem) => !!elem.hasDocumentation())).toStrictEqual(allDocumentedItemsByLabel);

        // the method should be in the list; the method has the documentation.
        expect(allItemsByShortName.filter((elem) => !!elem.hasDocumentation()).length).toBe(1);
        // same as previous instruction
        expect(allDocumentedItemsByShortName.length).toBe(1);
        expect(allItemsByShortName.filter((elem) => !!elem.hasDocumentation())).toStrictEqual(
            allDocumentedItemsByShortName,
        );
        done();
    });
});
