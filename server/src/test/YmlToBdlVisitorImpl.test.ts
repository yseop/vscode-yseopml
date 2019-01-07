import * as assert from "assert";
import { ANTLRInputStream, CommonTokenStream, CommonToken } from "antlr4ts";
import { YmlToBdlLexer } from "../YmlToBdlLexer";
import { YmlToBdlParser } from "../YmlToBdlParser";
import { YmlToBdlVisitorImpl } from "../YmlToBdlVisitorImpl";
import { CompletionItem } from "vscode-languageserver";

describe("Extension Server Tests", () => {
  describe("YmlToBdlVisitorImpl", () => {
    it("should be OK to instantiate YmlToBdlVisitorImpl", done => {
      const inputStream = new ANTLRInputStream("");
      const lexer = new YmlToBdlLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new YmlToBdlParser(tokenStream);

      const result = parser.kaoFile();
      const visitor = new YmlToBdlVisitorImpl([], []);
      visitor.visit(result);
      done();
    });

    it("should be able to parse a string", done => {
      const inputStream = new ANTLRInputStream('"foo bar"');
      const lexer = new YmlToBdlLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const tokens = tokenStream.getTokens();
      assert.equal(tokens.length, 1);
      assert.equal(tokens[0].startIndex, 0);
      assert.equal(tokens[0].stopIndex, 8);
      done();
    });

    it("should parse a well written YML class and provide completion for fields", done => {
      const inputStream = new ANTLRInputStream(`
            interface City
                field name
                --> domains	String 

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
      const lexer = new YmlToBdlLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new YmlToBdlParser(tokenStream);

      const result = parser.kaoFile();
      const completionItems: CompletionItem[] = [];
      const visitor = new YmlToBdlVisitorImpl([], completionItems);
      visitor.visit(result);
      const expectedCompletionItems = [
        {
          label: "name",
          kind: 10,
          data: "id_City_name",
          detail: "String",
          documentation: "not documented"
        },
        {
          label: "country",
          kind: 10,
          data: "id_City_country",
          detail: "String",
          documentation: "not documented"
        }
      ];
      assert.deepEqual(completionItems, expectedCompletionItems);
      done();
    });
    it("should parse a well written YML class and provide completion for fields and methods", done => {
      const inputStream = new ANTLRInputStream(`
              interface City
                  method name()
                  --> domains	String 
  
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
        const lexer = new YmlToBdlLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new YmlToBdlParser(tokenStream);
  
        const result = parser.kaoFile();
        const completionItems: CompletionItem[] = [];
        const visitor = new YmlToBdlVisitorImpl([], completionItems);
        visitor.visit(result);
        const expectedCompletionItems = [
          {
            label: "name",
            kind: 2,
            data: "id_City_name",
            detail: "String",
            documentation: "not documented"
          },
          {
            label: "country",
            kind: 2,
            data: "id_City_country",
            detail: "String",
            documentation: "not documented"
          },
          {
            data: 'id_City_inhabitants',
            detail: 'Collection − Person',
            documentation: 'not documented',
            kind: 10,
            label: 'inhabitants'
          }
        ];
        assert.deepEqual(completionItems, expectedCompletionItems);
        done();
      });
  });
});
