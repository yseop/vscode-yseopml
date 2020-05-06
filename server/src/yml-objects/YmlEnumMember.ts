import { CompletionItemKind } from 'vscode-languageserver';

import { AbstractYmlObject, YmlType } from './AbstractYmlObject';

export class YmlEnumMember extends AbstractYmlObject {
    public identifier: string;
    public domains: YmlType;
    public readonly kind = CompletionItemKind.EnumMember;

    constructor(indentifier: string, uri: string) {
        super(indentifier, CompletionItemKind.EnumMember, uri);
        this.kindName = 'enum member';
    }

    protected buildDetailString(type: string): string {
        return `(${this.kindName}) ${this.getShortName()} ⇒ ${type}`;
    }

    public getShortName() {
        const functionNameSubParts = this.label.split('::');
        return functionNameSubParts[functionNameSubParts.length - 1];
    }
}
