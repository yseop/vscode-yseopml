import { Connection, createConnection, IPCMessageReader, IPCMessageWriter } from 'vscode-languageserver/node';

import { YmlLanguageServer } from './LanguageServer';
import { LspClientLogger } from './loggers/LspClientLogger';
import { LspClientImpl } from './lspClient';

export function createLspConnection(): Connection {
    const connection = createConnection(new IPCMessageReader(process), new IPCMessageWriter(process));
    const lspClient = new LspClientImpl(connection);
    const logger = new LspClientLogger(lspClient);
    const server: YmlLanguageServer = new YmlLanguageServer(logger, lspClient, connection);

    connection.onInitialize(server.initialize.bind(server));
    connection.onInitialized(server.initialized.bind(server));
    connection.onDidChangeConfiguration(server.didChangeConfiguration.bind(server));

    connection.onCodeLens(server.codeLens.bind(server));
    connection.onCompletion(server.completion.bind(server));
    connection.onCompletionResolve(server.completionResolve.bind(server));
    connection.onDefinition(server.definition.bind(server));
    connection.onImplementation(server.implementation.bind(server));
    connection.onDocumentFormatting(server.documentFormatting.bind(server));
    connection.onDocumentSymbol(server.documentSymbol.bind(server));
    connection.onHover(server.hover.bind(server));
    connection.onFoldingRanges(server.foldingRanges.bind(server));

    // proposed `textDocument/calls` request
    // connection.onRequest(lspcalls.CallsRequest.type, server.calls.bind(server));

    return connection;
}

createLspConnection().listen();
