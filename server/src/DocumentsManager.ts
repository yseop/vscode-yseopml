import { Connection, TextDocumentChangeEvent, TextDocuments } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';

import { YmlLanguageServer } from './LanguageServer';
import { ILogger } from './loggers/ILogger';

export class DocumentsManager {
    private readonly documents: TextDocuments<TextDocument>;

    constructor(
        private readonly connection: Connection,
        private readonly server: YmlLanguageServer,
        private readonly logger: ILogger,
    ) {
        this.documents = new TextDocuments(TextDocument);
        this.documents.listen(connection);
        const parseTextDocumentOnEvent = (event: TextDocumentChangeEvent<TextDocument>) =>
            server.parseTextDocument(event.document);
        this.documents.onDidChangeContent(parseTextDocumentOnEvent);
        this.documents.onDidClose((event: TextDocumentChangeEvent<TextDocument>) =>
            // Clearing diagnostic for the closed file to avoid spamming the user.
            this.connection.sendDiagnostics({ uri: event.document.uri, diagnostics: [] }),
        );
    }

    public get(uri: string): TextDocument {
        return this.documents.get(uri);
    }

    public all(): TextDocument[] {
        return this.documents.all();
    }
}
