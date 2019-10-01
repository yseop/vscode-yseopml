import {
    Hover,
    MarkupKind,
    RequestHandler,
    TextDocument,
    TextDocumentPositionParams,
} from 'vscode-languageserver-protocol';

import { getTokenAtPosInDoc } from '../definitions';
import Session from '../session';

export default function(session: Session): RequestHandler<TextDocumentPositionParams, Hover, void> {
    return (_params) => {
        const doc: TextDocument = session.documents.get(_params.textDocument.uri);
        const entityName = getTokenAtPosInDoc(doc.getText(), doc.offsetAt(_params.position));
        if (!entityName) {
            return null;
        }
        // Multiple elements can have the same shortName
        let entity = session.completionProvider.getFirstItemByShortNameMatching(
            entityName,
            (elem) => !!elem.documentation,
        );
        if (!entity) {
            // Maybe the value of `entityName` is a full label.
            entity = session.completionProvider.getFirstItemByLabelMatching(entityName, (elem) => !!elem.documentation);
            if (!entity) {
                return null;
            }
        }
        return {
            contents: {
                kind: MarkupKind.Markdown,
                value: entity.documentation,
            },
        };
    };
}
