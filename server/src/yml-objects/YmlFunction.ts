import { CompletionItemKind } from 'vscode-languageserver-protocol';

import { AbstractYmlFunction } from './AbstractYmlFunction';

export class YmlFunction extends AbstractYmlFunction {
    constructor(indentifier: string, uri: string) {
        super(indentifier, CompletionItemKind.Function, uri);
    }
}
