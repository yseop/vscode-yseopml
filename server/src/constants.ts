import { Connection, createConnection, IPCMessageReader, IPCMessageWriter } from 'vscode-languageserver/node';

// Create a connection for the server. The connection uses Node's IPC as a transport
export const connection: Connection = createConnection(new IPCMessageReader(process), new IPCMessageWriter(process));
