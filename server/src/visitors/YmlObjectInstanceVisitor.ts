import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { StaticDeclarationContext } from '../grammar';
import { connection } from '../server';
import { YmlObjectInstance } from '../yml-objects';
import { YmlBaseVisitor } from './YmlBaseVisitor';

export class YmlObjectInstanceVisitor extends YmlBaseVisitor {
    constructor(
        completionProvider: YmlCompletionItemsProvider,
        uri: string,
        public definitions: YmlDefinitionProvider,
    ) {
        super(completionProvider, uri);
    }

    public visitStaticDeclaration(node: StaticDeclarationContext): void {
        const instance = new YmlObjectInstance(node._declarationName.text, this.uri);
        instance.enrichWith(node.field(), connection, null, node._declarationType.text);
        this.completionProvider.addCompletionItem(instance);
        instance.setDefinitionLocation(node.start, node.stop, this.uri);
        this.definitions.addDefinition(instance);
    }
}
