import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { StaticDeclarationContext } from '../grammar';
import { InlineDeclarationContext } from '../grammar/YmlParser';
import { AbstractYmlObject, YmlObjectInstance } from '../yml-objects';
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

    private instance: AbstractYmlObject;

    public visitStaticDeclaration(node: StaticDeclarationContext): void {
        if (!node._declarationName) {
            return;
        }
        this.instance = new YmlObjectInstance(node._declarationName.text, this.uri, false);
        const doc = getDocumentation(node.field());
        const type = getType(node.field(), node._declarationType.text);
        this.instance.enrichWith(doc, type, null);
        this.completionProvider.addCompletionItem(this.instance);
        this.instance.setDefinitionLocation(node.start, node.stop, this.uri);
        this.definitions.addDefinition(this.instance);
        this.visitChildren(node);
    }

    public visitInlineDeclaration(node: InlineDeclarationContext): void {
        if (!node.staticDeclaration()) {
            // Context of inline declaration without name.
            this.instance.foldingRanges.push({
                startLine: node.start.line - 1,
                endLine: node.stop.line - 1,
            });
        }
        this.visitChildren(node);
    }
}
