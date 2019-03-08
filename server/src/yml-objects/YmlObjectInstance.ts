import { CompletionItemKind } from 'vscode-languageserver';

import { AbstractYmlObject, YmlType } from './AbstractYmlObject';

export class YmlObjectInstance extends AbstractYmlObject {
    public identifier: string;
    public domains: YmlType;
    public domainsLevel2: YmlType;
    public readonly kind = CompletionItemKind.Variable;

    constructor(indentifier: string, uri: string) {
        super(indentifier, CompletionItemKind.Variable, uri);
    }
}
