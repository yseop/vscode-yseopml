import {
    CompletionItem,
    CompletionList,
    CompletionParams,
    RequestHandler,
    TextDocument,
    TextDocumentPositionParams,
} from 'vscode-languageserver-protocol';

import Session from '../session';

export default function(session: Session): RequestHandler<CompletionParams, CompletionItem[] | CompletionList, void> {
    return (pos: TextDocumentPositionParams): CompletionItem[] => {
        const doc: TextDocument = session.documents.get(pos.textDocument.uri);
        return session.completionProvider.getAvailableCompletionItems(pos.textDocument.uri, doc.offsetAt(pos.position));
    };
}
