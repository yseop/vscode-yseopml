import { Duplex } from 'stream';
import { createProtocolConnection } from 'vscode-languageserver-protocol/lib/common/connection';
import {
    CodeLensRequest,
    CompletionRequest,
    CompletionResolveRequest,
    CompletionTriggerKind,
    Connection,
    createConnection,
    DidChangeConfigurationNotification,
    DocumentFormattingRequest,
    DocumentSymbolRequest,
    FoldingRangeRequest,
    InitializedNotification,
    InitializeParams,
    InitializeRequest,
    ProtocolConnection,
    WorkspaceFoldersRequest,
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
let clientConnection: ProtocolConnection;
let workspaceFolderPath: string;
let mainFile: string;

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
        workspaceFolderPath = URI.file(process.cwd()).toString();
        mainFile = `${workspaceFolderPath}/client/resources/kb/_technical/test.dcl`;
        // });
        // test('sending IntializeRequest to the server should give the expected result', (done) => {
        const init: InitializeParams = {
            rootUri: workspaceFolderPath,
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
        clientConnection.onRequest(WorkspaceFoldersRequest.type, (_param) => {
            return [
                {
                    uri: workspaceFolderPath,
                    name: 'name',
                },
            ];
        });
        clientConnection.onRequest('workspace/configuration', (_param) => {
            return {
                activateParsingProblemsReporting: true,
                parseAllProjectFilesAtStartup: true,
                pathToPredefinedObjectsXml: null,
                ymlParsingIssueSeverityLevel: 'information',
                kaoFiles: [],
                documentFormat: {},
            };
        });
        clientConnection.sendRequest(InitializeRequest.type, init).then((result) => {
            expect(result).toBeTruthy();
            clientConnection.sendNotification(InitializedNotification.type, {});
        });
    });
    test('sending DidChangeConfigurationNotification to the server should not fail', (done) => {
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
                    documentFormat: {
                        enableDocumentFormat: 'yes',
                        semicolonWhenPossible: 'yes',
                        spaceBetweenKeywordAndParenthesis: 'yes',
                    },
                },
            },
        });
        done();
    });
    test('sending DocumentSymbolRequest to the server should not fail', (done) => {
        clientConnection
            .sendRequest(DocumentSymbolRequest.type, {
                textDocument: {
                    uri: mainFile,
                },
            })
            .then((result) => {
                expect(result).toStrictEqual([]);
                done();
            });
    });
    test('sending CodeLensRequest to the server should not fail', (done) => {
        clientConnection
            .sendRequest(CodeLensRequest.type, {
                textDocument: {
                    uri: mainFile,
                },
            })
            .then((result) => {
                expect(result).toStrictEqual([]);
                done();
            });
    });
    test('sending DocumentFormattingRequest to the server should not fail', (done) => {
        clientConnection
            .sendRequest(DocumentFormattingRequest.method, {
                textDocument: {
                    uri: mainFile,
                },
            })
            .then((result) => {
                expect(result).toStrictEqual([]);
                done();
            });
    });
    test('sending FoldingRangeRequest to the server should not fail', (done) => {
        clientConnection
            .sendRequest(FoldingRangeRequest.method, {
                context: {
                    triggerKind: CompletionTriggerKind.Invoked,
                },
            })
            .then((result) => {
                expect(result).toStrictEqual([]);
                done();
            });
    });
    test('sending CompletionRequest to the server should not fail', (done) => {
        clientConnection
            .sendRequest(CompletionRequest.method, {
                textDocument: {
                    uri: mainFile,
                },
                options: {},
            })
            .then((result) => {
                expect(result).toStrictEqual([]);
                done();
            });
    });
    test('sending CompletionResolveRequest to the server should not fail', (done) => {
        clientConnection
            .sendRequest(CompletionResolveRequest.type, {
                label: 'test',
            })
            .then((result) => {
                expect(result).toStrictEqual({
                    label: 'test',
                });
                done();
            });
    });
});
