import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { TextDocument, TextEdit } from 'vscode-languageserver-textdocument';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { connection } from '../constants';
import { YmlDefinitionProvider } from '../definitions';
import { YmlLexer, YmlParser } from '../grammar';
import { DEFAULT_DOC_FORMAT_SETTINGS, IDocumentFormatSettings } from '../settings/Settings';
import { YmlKaoFileVisitor } from '../visitors';

export function buildDocumentEditList(document: TextDocument, documentFormatSettings: IDocumentFormatSettings) {
    if (documentFormatSettings?.enableDocumentFormat === 'no') {
        return [];
    }
    const inputStream = CharStreams.fromString(document.getText(), document.uri);
    const lexer = new YmlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new YmlParser(tokenStream);
    // No need to send syntax errors to the client.
    parser.removeErrorListeners();

    // Parse the input.
    const result = parser.kaoFile();
    const edits: TextEdit[] = [];
    const visitor = new YmlKaoFileVisitor(
        new YmlCompletionItemsProvider(),
        document.uri,
        new YmlDefinitionProvider(),
        documentFormatSettings ?? DEFAULT_DOC_FORMAT_SETTINGS,
        edits,
        document,
    );

    if (parser.numberOfSyntaxErrors > 0) {
        connection.console.info('No formatting will be done because the current file has syntax errors.');
        return [];
    }

    // Visit the result of the parsing.
    // This fill the edits array.
    visitor.visit(result);
    return edits;
}
