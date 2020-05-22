import { CompletionItem } from 'vscode-languageserver';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';

export function completionResolveRequestHandler(completionProvider: YmlCompletionItemsProvider) {
    return (item: CompletionItem): CompletionItem => {
        return completionProvider.completions.find((elem) => elem.data === item.data);
    };
}
