import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { Diagnostic, TextDocumentChangeEvent } from 'vscode-languageserver-protocol';

import { YmlLexer, YmlParser } from '../grammar';
import Session from '../session';
import { YmlKaoFileVisitor, YmlParsingErrorListener } from '../visitors';

export default function(_session: Session): any {
    return (textDocumentChangeEvent: TextDocumentChangeEvent): void => {
        const textDocument = textDocumentChangeEvent.document;
        _session.log(`Yseop.vscode-yseopml − Parsing ${textDocument.uri}`);
        const textDocUri = textDocument.uri;
        const diagnostics: Diagnostic[] = [];

        // Create the lexer and parser
        const inputStream = CharStreams.fromString(textDocument.getText());
        const lexer = new YmlLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new YmlParser(tokenStream);
        parser.removeErrorListeners();
        parser.addErrorListener(new YmlParsingErrorListener(diagnostics));

        // Parse the input.
        const result = parser.kaoFile();
        // Reset all the document's definitions.
        _session.definitionsProvider.removeDocumentDefinitions(textDocUri);
        // Reset all the document's completion items.
        _session.completionProvider.removeDocumentCompletionItems(textDocUri);

        const visitor = new YmlKaoFileVisitor(_session.completionProvider, textDocUri, _session.definitionsProvider);
        // Visit the result of the parsing.
        // This fill the completionProvider and the definitionsProvider.
        visitor.visit(result);

        // Send the computed diagnostics to VSCode.
        if (_session.settings.yseopml.activateParsingProblemsReporting) {
            _session.connection.sendDiagnostics({ uri: textDocUri, diagnostics });
        } else {
            _session.connection.sendDiagnostics({ uri: textDocUri, diagnostics: [] });
        }
    };
}
