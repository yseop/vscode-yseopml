import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CompletionItemKind, MarkupContent } from 'vscode-languageserver';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { YmlLexer, YmlParser } from '../grammar';
import { YmlKaoFileVisitor } from '../visitors';

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
            const expectedCompletionItems = [
                {
                    attributes: [],
                    data: 'id_City',
                    extends: [],
                    kind: 7,
                    label: 'City',
                    methods: [],
                    uri: '',
                },
                {
                    data: 'id_City_name',
                    definitionLocation: {
                        range: {
                            end: {
                                character: 32,
                                line: 4,
                            },
                            start: {
                                character: 20,
                                line: 2,
                            },
                        },
                        uri: '',
                    },
                    detail: 'String',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Property,
                    label: 'name',
                    uri: '',
                },
                {
                    data: 'id_City_country',
                    definitionLocation: {
                        range: {
                            end: {
                                character: 32,
                                line: 7,
                            },
                            start: {
                                character: 20,
                                line: 5,
                            },
                        },
                        uri: '',
                    },
                    detail: 'String',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Property,
                    label: 'country',
                    uri: '',
                },
            ];
            expect(completionProvider.completions).toEqual(expectedCompletionItems);
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
            const expectedCompletionItems = [
                {
                    attributes: [],
                    data: 'id_City',
                    extends: [],
                    kind: 7,
                    label: 'City',
                    methods: [],
                    uri: '',
                },
                {
                    data: 'id_City_getName',
                    definitionLocation: {
                        range: {
                            end: {
                                character: 34,
                                line: 4,
                            },
                            start: {
                                character: 22,
                                line: 2,
                            },
                        },
                        uri: '',
                    },
                    detail: 'String',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Method,
                    label: 'getName',
                    uri: '',
                },
                {
                    data: 'id_City_writeCountry',
                    definitionLocation: {
                        range: {
                            end: {
                                character: 34,
                                line: 7,
                            },
                            start: {
                                character: 22,
                                line: 5,
                            },
                        },
                        uri: '',
                    },
                    detail: 'String',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Method,
                    label: 'writeCountry',
                    uri: '',
                },
                {
                    data: 'id_City_inhabitants',
                    definitionLocation: {
                        range: {
                            end: {
                                character: 40,
                                line: 11,
                            },
                            start: {
                                character: 22,
                                line: 8,
                            },
                        },
                        uri: '',
                    },
                    detail: 'Collection − Person',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Property,
                    label: 'inhabitants',
                    uri: '',
                },
            ];
            expect(completionProvider.completions).toEqual(expectedCompletionItems);
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
            const expectedCompletionItems = [
                {
                    data: 'id_static_functionWithoutArgs',
                    definitionLocation: {
                        range: {
                            end: {
                                character: 12,
                                line: 7,
                            },
                            start: {
                                character: 12,
                                line: 1,
                            },
                        },
                        uri: '',
                    },
                    detail: 'Text',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Function,
                    label: 'functionWithoutArgs',
                    uri: '',
                },
                {
                    data: 'id_static_simpleInstance',
                    definitionLocation: {
                        range: {
                            end: {
                                character: 31,
                                line: 9,
                            },
                            start: {
                                character: 12,
                                line: 8,
                            },
                        },
                        uri: '',
                    },
                    detail: 'Text',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Variable,
                    label: 'simpleInstance',
                    uri: '',
                },
                {
                    data: 'id_static_functionWithoutArgs2',
                    definitionLocation: {
                        range: {
                            end: {
                                character: 12,
                                line: 17,
                            },
                            start: {
                                character: 12,
                                line: 10,
                            },
                        },
                        uri: '',
                    },
                    detail: 'Text',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Function,
                    label: 'functionWithoutArgs2',
                    uri: '',
                },
                {
                    data: 'id_static_collection',
                    definitionLocation: {
                        range: {
                            end: {
                                character: 33,
                                line: 19,
                            },
                            start: {
                                character: 12,
                                line: 18,
                            },
                        },
                        uri: '',
                    },
                    detail: 'Collection',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Variable,
                    label: 'collection',
                    uri: '',
                },
                {
                    data: 'id_static_functionWithoutArgsWithPar',
                    definitionLocation: {
                        range: {
                            end: {
                                character: 12,
                                line: 24,
                            },
                            start: {
                                character: 12,
                                line: 20,
                            },
                        },
                        uri: '',
                    },
                    detail: 'Text',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Function,
                    label: 'functionWithoutArgsWithPar',
                    uri: '',
                },
                {
                    data: 'id_functionWithoutArgsWithPar_arg1',
                    detail: 'Object',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Variable,
                    label: 'arg1',
                    scopeEndOffset: 573,
                    scopeStartOffset: 438,
                    uri: '',
                },
                {
                    data: 'id_functionWithoutArgsWithPar_arg2',
                    detail: 'Text',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Variable,
                    label: 'arg2',
                    scopeEndOffset: 573,
                    scopeStartOffset: 438,
                    uri: '',
                },
                {
                    data: 'id_static_collectionWithLevel2',
                    definitionLocation: {
                        range: {
                            end: {
                                character: 12,
                                line: 28,
                            },
                            start: {
                                character: 12,
                                line: 25,
                            },
                        },
                        uri: '',
                    },
                    detail: 'Collection − Text',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Variable,
                    label: 'collectionWithLevel2',
                    uri: '',
                },
                {
                    data: 'id_static_functionWithArgsAsBlock',
                    definitionLocation: {
                        range: {
                            end: {
                                character: 12,
                                line: 37,
                            },
                            start: {
                                character: 12,
                                line: 29,
                            },
                        },
                        uri: '',
                    },
                    detail: 'Text',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Function,
                    label: 'functionWithArgsAsBlock',
                    uri: '',
                },
                {
                    data: 'id_functionWithArgsAsBlock_arg1',
                    detail: 'Object',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Variable,
                    label: 'arg1',
                    scopeEndOffset: 873,
                    scopeStartOffset: 682,
                    uri: '',
                },
                {
                    data: 'id_functionWithArgsAsBlock_arg2',
                    detail: 'Text',
                    documentation: NOT_DOCUMENTED,
                    kind: CompletionItemKind.Variable,
                    label: 'arg2',
                    scopeEndOffset: 873,
                    scopeStartOffset: 682,
                    uri: '',
                },
            ];
            expect(completionProvider.completions).toEqual(expectedCompletionItems);
            done();
        });
    });
});
