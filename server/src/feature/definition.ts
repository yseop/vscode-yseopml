import {
    Location,
    LocationLink,
    RequestHandler,
    TextDocument,
    TextDocumentPositionParams,
} from 'vscode-languageserver-protocol';

import { getTokenAtPosInDoc } from '../definitions';
import Session from '../session';

export default function(
    session: Session,
): RequestHandler<TextDocumentPositionParams, Location | Location[] | LocationLink[], void> {
    return (pos: TextDocumentPositionParams) => {
        const doc: TextDocument = session.documents.get(pos.textDocument.uri);
        const entityName = getTokenAtPosInDoc(doc.getText(), doc.offsetAt(pos.position));
        if (!entityName) {
            return null;
        }
        return session.definitionsProvider.findDefinitions(entityName);
    };
}
