import { CompletionItemKind } from 'vscode-languageserver';

import { AbstractYmlFunction } from './AbstractYmlFunction';

export class YmlMethod extends AbstractYmlFunction {
    constructor(indentifier: string, uri: string) {
        super(indentifier, CompletionItemKind.Method, uri);
        this.kindName = 'method';
    }
}
