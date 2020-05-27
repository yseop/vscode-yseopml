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
        return completionProvider.completions.find((elem) => elem.data === item.data);
    };
}
