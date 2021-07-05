import { Duplex } from 'stream';
import { createProtocolConnection } from 'vscode-languageserver-protocol/lib/common/connection';
import {
    Connection,
    createConnection,
    DidChangeConfigurationNotification,
    DocumentSymbolRequest,
    InitializeParams,
    InitializeRequest,
} from 'vscode-languageserver/node';
import URI from 'vscode-uri';

import { ILogger } from '../loggers/ILogger';
import { LspClientLogger } from '../loggers/LspClientLogger';
import { createLspConnection, ILspClient, LspClientImpl } from '../lspClient';

let serverConnection: Connection;
let lspClient: ILspClient;
let logger: ILogger;
let up;
let down;
let clientConnection;

class TestStream extends Duplex {
    public _write(chunk: string, _encoding: string, done: () => void) {
        this.emit('data', chunk);
        done();
    }

    public _read(_size: number) {
        // empty on purpose.
    }
}

describe('lsp connection', () => {
    beforeAll(() => {
        up = new TestStream();
        down = new TestStream();
        serverConnection = createConnection(up, down);
        lspClient = new LspClientImpl(serverConnection);
        logger = new LspClientLogger(lspClient);
        serverConnection = createLspConnection(serverConnection, lspClient, logger);
        serverConnection.listen();
        clientConnection = createProtocolConnection(down, up);
        clientConnection.listen();
    });
    test('sending IntializeRequest to the server should give the expected result', (done) => {
        const init: InitializeParams = {
            rootUri: URI.file(process.cwd()).toString(),
            processId: 1,
            capabilities: {
                textDocument: {
                    synchronization: {
                        didSave: true,
                        dynamicRegistration: true,
                        willSave: true,
                        willSaveWaitUntil: true,
                    },
                    moniker: {},
                    codeLens: {
                        dynamicRegistration: true,
                    },
                    completion: {},
                    declaration: {},
                    definition: {},
                    foldingRange: {},
                    hover: {},
                    publishDiagnostics: {},
                    implementation: {},
                    formatting: {},
                },
                workspace: {
                    codeLens: {},
                    didChangeConfiguration: {
                        dynamicRegistration: true,
                    },
                    workspaceFolders: true,
                    configuration: true,
                },
                window: {
                    showDocument: {
                        support: true,
                    },
                    showMessage: {},
                    workDoneProgress: true,
                },
            },
            workspaceFolders: null,
        };
        clientConnection.sendRequest(InitializeRequest.type, init).then((result) => {
            expect(result).toBeTruthy();
            done();
        });
    });
    test('sending DidChangeConfigurationNotification to the server should not fail', (done) => {
        clientConnection.onRequest('workspace/workspaceFolders', (_param) => {
            return [
                {
                    uri: URI.file(process.cwd()).toString(),
                    name: 'name',
                },
            ];
        });
        clientConnection.sendNotification(DidChangeConfigurationNotification.type, {
            settings: {},
        });
        clientConnection.sendNotification(DidChangeConfigurationNotification.type, {
            settings: {
                yseopml: {
                    activateParsingProblemsReporting: true,
                    parseAllProjectFilesAtStartup: true,
                    pathToPredefinedObjectsXml: null,
                    ymlParsingIssueSeverityLevel: 'information',
                    kaoFiles: [],
                    documentFormat: {},
                },
            },
        });
        done();
    });
    test('sending DocumentSymbolRequest to the server should not fail', (done) => {
        clientConnection
            .sendRequest(DocumentSymbolRequest.type, {
                textDocument: {
                    uri: URI.file(process.cwd()).toString(),
                },
            })
            .then((result) => {
                expect(result).toStrictEqual([]);
                done();
            });
    });
});
