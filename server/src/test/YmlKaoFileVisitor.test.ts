import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import * as assert from "assert";
import { CompletionItemKind } from "vscode-languageserver";
import { YmlCompletionItemsProvider } from "../completion/YmlCompletionItemsProvider";
import { YmlDefinitionProvider } from "../definitions";
import { YmlLexer, YmlParser } from "../grammar";
import { YmlKaoFileVisitor } from "../visitors";

describe("Extension Server Tests", () => {
  describe("YmlKaoFileVisitor", () => {
    it("should be OK to instantiate YmlKaoFileVisitor", (done) => {
      const inputStream = new ANTLRInputStream("");
      const lexer = new YmlLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new YmlParser(tokenStream);

      const result = parser.kaoFile();
      const visitor = new YmlKaoFileVisitor(
        new YmlCompletionItemsProvider(),
        "",
        new YmlDefinitionProvider(),
      );
      visitor.visit(result);
      done();
    });

    it("should be able to parse a string", (done) => {
      const inputStream = new ANTLRInputStream('"foo bar"');
      const lexer = new YmlLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const tokens = tokenStream.getTokens();
      assert.equal(tokens.length, 1);
      assert.equal(tokens[0].startIndex, 0);
      assert.equal(tokens[0].stopIndex, 8);
      done();
    });

    it("should parse a well-written YML class and provide completion for fields", (done) => {
      const inputStream = new ANTLRInputStream(`
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
      const visitor = new YmlKaoFileVisitor(
        completionProvider,
        "",
        new YmlDefinitionProvider(),
      );
      visitor.visit(result);
      const expectedCompletionItems = [
        {
          data: "id_City_name",
          detail: "String",
          documentation: "not documented",
          kind: CompletionItemKind.Property,
          label: "name",
        },
        {
          data: "id_City_country",
          detail: "String",
          documentation: "not documented",
          kind: CompletionItemKind.Property,
          label: "country",
        },
      ];
      assert.deepEqual(
        completionProvider.completions.map((elem) => elem.completion),
        expectedCompletionItems,
      );
      done();
    });
    it("should parse a well-written YML class and provide completion for fields and methods", (done) => {
      const inputStream = new ANTLRInputStream(`
              interface City
                  method name()
                  --> domains String

                  textMethod country()
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
      const visitor = new YmlKaoFileVisitor(
        completionProvider,
        "",
        new YmlDefinitionProvider(),
      );
      visitor.visit(result);
      const expectedCompletionItems = [
        {
          data: "id_City_name",
          detail: "String",
          documentation: "not documented",
          kind: CompletionItemKind.Method,
          label: "name",
        },
        {
          data: "id_City_country",
          detail: "String",
          documentation: "not documented",
          kind: CompletionItemKind.Method,
          label: "country",
        },
        {
          data: "id_City_inhabitants",
          detail: "Collection − Person",
          documentation: "not documented",
          kind: CompletionItemKind.Property,
          label: "inhabitants",
        },
      ];
      assert.deepEqual(
        completionProvider.completions.map((elem) => elem.completion),
        expectedCompletionItems,
      );
      done();
    });
    // tslint:disable-next-line: max-line-length
    it("should parse a well-written YML file containing instances and functions and provide completion for them", (done) => {
      const inputStream = new ANTLRInputStream(`
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
      const visitor = new YmlKaoFileVisitor(
        completionProvider,
        "",
        new YmlDefinitionProvider(),
      );
      visitor.visit(result);
      const expectedCompletionItems = [
        {
          data: "id_static_functionWithoutArgs",
          detail: "Text",
          documentation: "not documented",
          kind: CompletionItemKind.Function,
          label: "functionWithoutArgs",
        },
        {
          data: "id_static_simpleInstance",
          detail: "Text",
          documentation: "not documented",
          kind: CompletionItemKind.Variable,
          label: "simpleInstance",
        },
        {
          data: "id_static_functionWithoutArgs2",
          detail: "Text",
          documentation: "not documented",
          kind: CompletionItemKind.Function,
          label: "functionWithoutArgs2",
        },
        {
          data: "id_static_collection",
          detail: "Collection",
          documentation: "not documented",
          kind: CompletionItemKind.Variable,
          label: "collection",
        },
        {
          data: "id_static_functionWithoutArgsWithPar",
          detail: "Text",
          documentation: "not documented",
          kind: CompletionItemKind.Function,
          label: "functionWithoutArgsWithPar",
        },
        {
          data: "id_static_collectionWithLevel2",
          detail: "Collection − Text",
          documentation: "not documented",
          kind: CompletionItemKind.Variable,
          label: "collectionWithLevel2",
        },
        {
          data: "id_static_functionWithArgsAsBlock",
          detail: "Text",
          documentation: "not documented",
          kind: CompletionItemKind.Function,
          label: "functionWithArgsAsBlock",
        },
      ];
      assert.deepEqual(
        completionProvider.completions.map((elem) => elem.completion),
        expectedCompletionItems,
      );
      done();
    });
  });
});
