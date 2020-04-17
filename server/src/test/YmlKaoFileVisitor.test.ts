import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CompletionItemKind, MarkupContent } from 'vscode-languageserver';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { YmlLexer, YmlParser } from '../grammar';
import { YmlKaoFileVisitor } from '../visitors';
import { AbstractYmlObject } from '../yml-objects';

const NOT_DOCUMENTED: MarkupContent = {
    kind: 'markdown',
    value: 'Not documented.',
};

describe('Extension Server Tests', () => {
    describe('YmlKaoFileVisitor', () => {
        it('should be OK to instantiate YmlKaoFileVisitor', (done) => {
            const inputStream = CharStreams.fromString('');
            const lexer = new YmlLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new YmlParser(tokenStream);

            const result = parser.kaoFile();
            const visitor = new YmlKaoFileVisitor(new YmlCompletionItemsProvider(), '', new YmlDefinitionProvider());
            visitor.visit(result);
            done();
        });

        it('should be able to parse a string', (done) => {
            const inputStream = CharStreams.fromString('"foo bar"');
            const lexer = new YmlLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const tokens = tokenStream.getTokens();
            expect(tokens.length).toBe(1);
            expect(tokens[0].startIndex).toBe(0);
            expect(tokens[0].stopIndex).toBe(8);
            expect(tokens[0].type).toBe(YmlLexer.STRING);
            done();
        });

        it('should be able to parse identifiers with Japanese characters or diacritics', (done) => {
            const inputStream = CharStreams.fromString('日本語::NE_PAS_ÊTRE');
            const lexer = new YmlLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const tokens = tokenStream.getTokens();
            expect(tokens.length).toBe(1);
            expect(tokens[0].startIndex).toBe(0);
            expect(tokens[0].stopIndex).toBe(15);
            expect(tokens[0].type).toBe(YmlLexer.YMLID);
            done();
        });

        it('should not be able to parse a number as an identifier', (done) => {
            const inputStream = CharStreams.fromString('1');
            const lexer = new YmlLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const tokens = tokenStream.getTokens();
            expect(tokens.length).toBe(1);
            expect(tokens[0].startIndex).toBe(0);
            expect(tokens[0].stopIndex).toBe(0);
            expect(tokens[0].type).not.toBe(YmlLexer.YMLID);
            done();
        });

        it('should be able to parse a number and a letter or undercore as an identifier', (done) => {
            const inputStream = CharStreams.fromString('1_');
            const lexer = new YmlLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const tokens = tokenStream.getTokens();
            expect(tokens.length).toBe(1);
            expect(tokens[0].startIndex).toBe(0);
            expect(tokens[0].stopIndex).toBe(1);
            expect(tokens[0].type).toBe(YmlLexer.YMLID);
            done();
        });

        it('should parse a well-written YML class and provide completion for fields', (done) => {
            const inputStream = CharStreams.fromString(`
                interface City
                    field name
                    --> domains String

                    field country
                    --> domains String

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
                `);
            const lexer = new YmlLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new YmlParser(tokenStream);

            const result = parser.kaoFile();
            const completionProvider = new YmlCompletionItemsProvider();
            const visitor = new YmlKaoFileVisitor(completionProvider, '', new YmlDefinitionProvider());
            visitor.visit(result);
            expect(parser.numberOfSyntaxErrors).toBe(0);
            expect(result).toBeDefined();
            expect(completionProvider.completions.length).toBe(3);

            assertHasNElementsRemaining(
                completionProvider.completions,
                1,
                (elem) => elem.kind === CompletionItemKind.Class,
            );
            assertHasNElementsRemaining(
                completionProvider.completions,
                2,
                (elem) => elem.kind === CompletionItemKind.Property,
            );
            done();
        });
        it('should parse a well-written YML class and provide completion for fields and methods', (done) => {
            const inputStream = CharStreams.fromString(`
                  interface City
                      method getName()
                      --> domains String

                      textMethod writeCountry()
                      --> domains String

                      field inhabitants
                      --> domains Collection
                      --> domainsLevel2 Person

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
                  `);
            const lexer = new YmlLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new YmlParser(tokenStream);

            const result = parser.kaoFile();
            const completionProvider = new YmlCompletionItemsProvider();
            const visitor = new YmlKaoFileVisitor(completionProvider, '', new YmlDefinitionProvider());
            visitor.visit(result);
            expect(parser.numberOfSyntaxErrors).toBe(0);
            expect(result).toBeDefined();
            expect(completionProvider.completions.length).toBe(4);

            assertHasNElementsRemaining(
                completionProvider.completions,
                1,
                (elem) => elem.kind === CompletionItemKind.Class,
            );
            assertHasNElementsRemaining(
                completionProvider.completions,
                1,
                (elem) => elem.kind === CompletionItemKind.Property,
            );
            assertHasNElementsRemaining(
                completionProvider.completions,
                2,
                (elem) => elem.kind === CompletionItemKind.Method,
            );
            done();
        });
        // tslint:disable-next-line: max-line-length
        it('should parse a well-written YML file containing instances and functions and provide completion for them', (done) => {
            const inputStream = CharStreams.fromString(`
            function functionWithoutArgs()
              --> domains Text
              --> action {
                return "it works";
              }
            ;

            Text simpleInstance;

            function functionWithoutArgs2
              args {}
              --> domains Text
              --> action {
                return "it works";
              }
            ;

            Collection collection;

            function functionWithoutArgsWithPar(Object arg1, Text arg2)
            --> domains Text
            --> return "it works"
            ;

            Collection collectionWithLevel2
            --> domainsLevel2 Text
            ;

            function functionWithArgsAsBlock
            args {
              Object arg1
              Text arg2
            }
            --> domains Text
            --> return "it works"
            ;
          `);
            const lexer = new YmlLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new YmlParser(tokenStream);

            const result = parser.kaoFile();
            const completionProvider = new YmlCompletionItemsProvider();
            const visitor = new YmlKaoFileVisitor(completionProvider, '', new YmlDefinitionProvider());
            visitor.visit(result);
            expect(parser.numberOfSyntaxErrors).toBe(0);
            expect(result).toBeDefined();
            expect(completionProvider.completions.length).toBe(11);

            // Three global instances, four local variables.
            assertHasNElementsRemaining(
                completionProvider.completions,
                7,
                (elem) => elem.kind === CompletionItemKind.Variable,
            );
            assertHasNElementsRemaining(
                completionProvider.completions,
                4,
                (elem) => elem.kind === CompletionItemKind.Function,
            );
            done();
        });
    });
});

function assertHasNElementsRemaining(
    completionItems: AbstractYmlObject[],
    value: number,
    filterFn: (obj: AbstractYmlObject) => boolean,
): void {
    expect(completionItems.filter(filterFn).length).toBe(value);
}
