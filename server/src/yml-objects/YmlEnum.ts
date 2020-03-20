import { CompletionItemKind } from 'vscode-languageserver';

import { AbstractYmlObject } from './AbstractYmlObject';
import { YmlAttribute } from './YmlAttribute';
import { YmlEnumMember } from './YmlEnumMember';

export class YmlEnum extends AbstractYmlObject {
    public attributes?: YmlAttribute[] = [];
    public enumValues?: YmlEnumMember[] = [];

    constructor(indentifier: string, uri: string) {
        super(indentifier, CompletionItemKind.Enum, uri);
    }
}
