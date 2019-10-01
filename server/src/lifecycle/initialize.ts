import { InitializeError, InitializeParams, InitializeResult, RequestHandler } from 'vscode-languageserver-protocol';

import Session from '../session';

export default function(session: Session): RequestHandler<InitializeParams, InitializeResult<any>, InitializeError> {
    // tslint:disable-next-line: variable-name
    return (_params): InitializeResult => {
        session.connection.console.log('Yseop.vscode-yseopml − Initializing server.');
        session.initialize();
        return {
            capabilities: {
                // Tell the client that the server support code complete
                completionProvider: {
                    triggerCharacters: ['.', ':'],
                },
                hoverProvider: true,
                definitionProvider: true,
                // Tell the client that the server works in FULL text document sync mode
                textDocumentSync: session.documents.syncKind,
            },
        };
    };
}
