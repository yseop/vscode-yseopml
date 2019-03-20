import { Range } from 'vscode-languageserver';

import { AbstractYmlObject } from './AbstractYmlObject';

export class YmlSymbolList extends AbstractYmlObject {
    public documentation?: string;
    public declarationPosition?: Range;
    public identifier: string;
    public items: string[];
}
