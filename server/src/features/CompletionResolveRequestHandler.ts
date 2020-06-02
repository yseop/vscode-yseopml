import { CompletionItem } from 'vscode-languageserver';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';

/**
 * Create a request handler for the event `completionResolve`.
 * The handler, when receiving a `CompletionItem` will find
 * in the provided YmlCompletionProvider an `AbstractYmlObject`
 * that has the same `data` attribute value.
 *
 * @param completionProvider an YmlCompletionItemsProvider instance
 *
 * @returns a request handler for the event `completionResolve`.
 */
export function completionResolveRequestHandler(completionProvider: YmlCompletionItemsProvider) {
    return (item: CompletionItem): CompletionItem => {
        const candidate = completionProvider.completions.find((elem) => elem.data === item.data);
        if (!candidate) {
            return item;
        }
        // Set detail and documentation to `item` from the full AbstractYmlObject.
        // We don't directly return the full object to avoid sending to the client too much unneeded information
        // and to avoid performance issues.
        item.detail = candidate.detail;
        item.documentation = candidate.documentation;
        return item;
    };
}
