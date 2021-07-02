import { Duplex } from 'stream';
import { Connection, createConnection, InitializeParams, InitializeRequest } from 'vscode-languageserver/node';
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
        clientConnection = createConnection(down, up);
        clientConnection.listen();
    });
    test('sending IntializeRequest to the server should give the expected result', (done) => {
        const init: InitializeParams = {
            rootUri: URI.file(process.cwd()).toString(),
            processId: 1,
            capabilities: {},
            workspaceFolders: null,
        };
        clientConnection.sendRequest(InitializeRequest.type, init).then((result) => {
            expect(result).toBeTruthy();
            done();
        });
    });
});
