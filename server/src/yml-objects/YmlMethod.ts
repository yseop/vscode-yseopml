import { CompletionItemKind } from 'vscode-languageserver-protocol';

import { AbstractYmlFunction } from './AbstractYmlFunction';

export class YmlMethod extends AbstractYmlFunction {
    constructor(indentifier: string, uri: string) {
        super(indentifier, CompletionItemKind.Method, uri);
    }

    public getShortName() {
        const functionNameSubParts = this.label.split('::');
        return functionNameSubParts.pop();
    }
}
