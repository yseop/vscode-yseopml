import * as assert from 'assert';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { YmlToBdlLexer } from '../src/YmlToBdlLexer';
import { YmlToBdlParser } from '../src/YmlToBdlParser';
import { YmlToBdlVisitorImpl } from '../src/YmlToBdlVisitorImpl';
import { CompletionItem } from 'vscode-languageserver';

describe("Extension Server Tests", () => {
    describe("YmlToBdlVisitorImpl", () => {
        it('should be OK to instanciate YmlToBdlVisitorImpl' , (done) => {
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
    });
});