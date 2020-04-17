import { CompletionItemKind } from 'vscode-languageserver';

import { AbstractYmlObject, YmlType } from './AbstractYmlObject';

export class YmlObjectInstance extends AbstractYmlObject {
    public identifier: string;
    public domains: YmlType;
    public domainsLevel2: YmlType;
    public readonly kind = CompletionItemKind.Variable;

    constructor(indentifier: string, uri: string, public readonly isLocal) {
        super(indentifier, CompletionItemKind.Variable, uri);
        this.kindName = isLocal ? 'variable' : 'instance';
    }

    public setDetail(type: string): void {
        this.detail = this.isLocal
            ? `(${this.kindName}) ${this.label} ⇒ ${type}`
            : `(${this.kindName}) [GLOBAL] ${this.label} ⇒ ${type}`;
    }
}
