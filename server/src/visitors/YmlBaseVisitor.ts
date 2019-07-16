// tslint:disable-next-line: no-submodule-imports
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { YmlParserVisitor } from '../grammar';

export class YmlBaseVisitor extends AbstractParseTreeVisitor<void> implements YmlParserVisitor<void> {
    constructor(
        public completionProvider: YmlCompletionItemsProvider,
        public uri: string,
        public definitions?: YmlDefinitionProvider,
    ) {
        super();
    }

    public defaultResult() {
        // no default
    }
}
