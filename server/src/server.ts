import { Connection, createConnection, IPCMessageReader, IPCMessageWriter } from 'vscode-languageserver/node';

import { ILogger } from './loggers/ILogger';
import { LspClientLogger } from './loggers/LspClientLogger';
import { createLspConnection, ILspClient, LspClientImpl } from './lspClient';

const connection: Connection = createConnection(new IPCMessageReader(process), new IPCMessageWriter(process));
const lspClient: ILspClient = new LspClientImpl(connection);
const logger: ILogger = new LspClientLogger(lspClient);

createLspConnection(connection, lspClient, logger).listen();
