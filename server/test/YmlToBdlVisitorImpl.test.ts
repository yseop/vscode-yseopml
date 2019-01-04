import * as assert from 'assert';
import { ANTLRInputStream, CommonTokenStream, CommonToken } from 'antlr4ts';
import { YmlToBdlLexer } from '../src/YmlToBdlLexer';
import { YmlToBdlParser } from '../src/YmlToBdlParser';
import { YmlToBdlVisitorImpl } from '../src/YmlToBdlVisitorImpl';
import { CompletionItem } from 'vscode-languageserver';

describe("Extension Server Tests", () => {
    describe("YmlToBdlVisitorImpl", () => {
        it('should be OK to instantiate YmlToBdlVisitorImpl', (done) => {
            let inputStream = new ANTLRInputStream("");
            let lexer = new YmlToBdlLexer(inputStream);
            let tokenStream = new CommonTokenStream(lexer);
            let parser = new YmlToBdlParser(tokenStream);

            // Parse the input, where `compilationUnit` is whatever entry point you defined
            let result = parser.kaoFile();
            const completionItems: CompletionItem[] = [];
            let visitor = new YmlToBdlVisitorImpl([], []);
            visitor.visit(result);
            done();
        });

        it('should be able to parse a string', (done) => {
            let inputStream = new ANTLRInputStream("\"foo bar\"");
            let lexer = new YmlToBdlLexer(inputStream);
            let tokenStream = new CommonTokenStream(lexer);
            let tokens = tokenStream.getTokens();
            assert.equal(tokens.length, 1);
            assert.equal(tokens[0].startIndex, 0);
            assert.equal(tokens[0].stopIndex, 8);
            done();
        });
    });
});