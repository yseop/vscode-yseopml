import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { DocumentFormattingParams, TextDocument, TextDocuments, TextEdit } from 'vscode-languageserver';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { connection } from '../constants';
import { YmlDefinitionProvider } from '../definitions';
import { YmlLexer, YmlParser } from '../grammar';
import { IDocumentFormatSettings } from '../settings/Settings';
import { YmlKaoFileVisitor } from '../visitors';

/**
 * Create a request handler for the event `documentFormatting`.
 * The handler, when receiving a `DocumentFormattingParams` instance will find
 * will parse the current file and build and send the list of Text Edit
 * to apply client-side accordingly to the settings defined in `documentFormatSettings`.
 *
 *
 * @param documents a manager for simple text documents
 * @param documentFormatSettings the document format settings to apply
 */
export function documentFormattingRequestHandler(
    documents: TextDocuments,
    documentFormatSettings?: IDocumentFormatSettings,
) {
    return (_params: DocumentFormattingParams): TextEdit[] => {
        const document = documents.get(_params.textDocument.uri);
        return buildDocumentEditList(document, documentFormatSettings);
    };
}

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
        documentFormatSettings,
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
