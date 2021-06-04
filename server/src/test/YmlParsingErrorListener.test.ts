import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';

import { YmlLexer, YmlParser } from '../grammar';
import { YmlParsingErrorListener } from '../visitors';

function getDiagnostics(text: string): Diagnostic[] {
    const diagnostics: Diagnostic[] = [];
    const inputStream = CharStreams.fromString(text, '/path/to/file');
    const lexer = new YmlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new YmlParser(tokenStream);
    parser.removeErrorListeners();
    // The `diagnostics` empty array is fill by the YmlParsingErrorListener
    // during the parsing when syntax errors are found.
    parser.addErrorListener(new YmlParsingErrorListener(diagnostics, DiagnosticSeverity.Information));

    parser.kaoFile();
    return diagnostics;
}

describe('Parsing Error Listener', () => {
    test('error listener correctly tracks parsing errors', (done) => {
        expect(getDiagnostics('complete Object')).not.toHaveLength(0);
        done();
    });
    test('no diagnostic found when no parsing error', (done) => {
        expect(getDiagnostics('complete Object;')).toHaveLength(0);
        done();
    });
});
