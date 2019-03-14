import { CompletionItemKind } from 'vscode-languageserver';

import { AbstractYmlObject } from './AbstractYmlObject';

export class TextTokenKeyword extends AbstractYmlObject {
    constructor(label: string) {
        super(label, CompletionItemKind.Text, '');
        this.data = `keyword_${label}`;
    }
}
