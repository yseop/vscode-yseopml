import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { StaticDeclarationContext } from '../grammar';
import { YmlObjectInstance } from '../yml-objects';
import { YmlBaseVisitor } from './YmlBaseVisitor';
import { getDocumentation, getType } from './YmlVisitorHelper';

export class YmlObjectInstanceVisitor extends YmlBaseVisitor {
    constructor(
        completionProvider: YmlCompletionItemsProvider,
        uri: string,
        public definitions: YmlDefinitionProvider,
    ) {
        super(completionProvider, uri);
    }

    public visitStaticDeclaration(node: StaticDeclarationContext): void {
        if (!node._declarationName) {
            return;
        }
        const instance = new YmlObjectInstance(node._declarationName.text, this.uri, false);
        const doc = getDocumentation(node.field());
        const type = getType(node.field(), node._declarationType.text);
        instance.enrichWith(doc, type, null);
        this.completionProvider.addCompletionItem(instance);
        instance.setDefinitionLocation(node.start, node.stop, this.uri);
        this.definitions.addDefinition(instance);
    }
}
