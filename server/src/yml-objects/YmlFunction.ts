import { CompletionItemKind } from 'vscode-languageserver';

import { AbstractYmlFunction } from './AbstractYmlFunction';

export class YmlFunction extends AbstractYmlFunction {
    constructor(indentifier: string, uri: string) {
        super(indentifier, CompletionItemKind.Function, uri);
        this.kindName = 'function';
    }
}
