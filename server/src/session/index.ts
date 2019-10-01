import { createConnection, IConnection, TextDocuments } from 'vscode-languageserver';
import {
    DidChangeConfigurationParams,
    Disposable,
    IPCMessageReader,
    IPCMessageWriter,
    TextDocumentChangeEvent,
} from 'vscode-languageserver-protocol';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import * as validateTextDocument from '../feature';
import { ISettings } from '../interfaces';

export default class Session implements Disposable {
    constructor() {
        // Empty constructor
    }
    // Create a connection for the server. The connection uses Node's IPC as a transport
    public readonly settings: ISettings = {} as any;
    public readonly definitionsProvider: YmlDefinitionProvider = new YmlDefinitionProvider();
    public readonly completionProvider: YmlCompletionItemsProvider = new YmlCompletionItemsProvider();
    public readonly connection: IConnection = createConnection(
        new IPCMessageReader(process),
        new IPCMessageWriter(process),
    );
    // Create a simple text document manager. The text document manager
    // supports full document sync only
    public readonly documents: TextDocuments = new TextDocuments();

    public validateAllDocuments() {
        // Revalidate any open text documents
        this.documents.all().forEach(validateTextDocument.validateTextDocument(this));
    }

    public log(message: string): void {
        this.connection.console.log(message);
    }

    public warn(message: string): void {
        this.connection.console.warn(message);
    }

    public error(message: string): void {
        this.connection.console.error(message);
    }

    public dispose(): void {
        // Nothing to do.
    }

    public initialize(): void {
        this.documents.onDidChangeContent(validateTextDocument.validateTextDocument(this));
        this.documents.onDidClose((event: TextDocumentChangeEvent) =>
            // Clearing diagnostic for the closed file to avoid spamming the user.
            this.connection.sendDiagnostics({ uri: event.document.uri, diagnostics: [] }),
        );
    }
    public listen(): void {
        // Make the text document manager listen on the connection
        // for open, change and close text document events
        this.documents.listen(this.connection);
        // Listen on the connection
        this.connection.listen();
    }

    public async onDidChangeConfiguration({ settings }: DidChangeConfigurationParams): Promise<void> {
        (this.settings as any) = { ...this.settings, ...settings };
    }
}
