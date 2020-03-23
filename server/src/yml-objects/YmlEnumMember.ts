import { CompletionItemKind } from 'vscode-languageserver';

import { AbstractYmlObject, YmlType } from './AbstractYmlObject';

export class YmlEnumMember extends AbstractYmlObject {
    public identifier: string;
    public domains: YmlType;
    public readonly kind = CompletionItemKind.EnumMember;

    constructor(indentifier: string, uri: string) {
        super(indentifier, CompletionItemKind.EnumMember, uri);
    }

    public getShortName() {
        const functionNameSubParts = this.label.split('::');
        return functionNameSubParts[functionNameSubParts.length - 1];
    }
}
