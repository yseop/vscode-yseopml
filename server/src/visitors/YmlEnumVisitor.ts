import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { EnumElementContext, YenumContext } from '../grammar/YmlParser';
import { YmlEnum } from '../yml-objects/YmlEnum';
import { YmlEnumMember } from '../yml-objects/YmlEnumMember';
import { YmlBaseVisitor } from './YmlBaseVisitor';
import { getDocumentation, getType } from './YmlVisitorHelper';

export class YmlEnumVisitor extends YmlBaseVisitor {
    /**
     * The name of the enum being built by this visitor.
     */
    private enumName: string;
    /**
     * The YmlEnum object being built by this visitor.
     */
    private yenum: YmlEnum;

    constructor(
        completionProvider: YmlCompletionItemsProvider,
        uri: string,
        public definitions: YmlDefinitionProvider,
    ) {
        super(completionProvider, uri);
    }
    public visitYenum(node: YenumContext): void {
        this.enumName = node.ymlId().text;
        this.yenum = new YmlEnum(this.enumName, this.uri);
        this.yenum.data = `id_${this.enumName}`;
        const doc = getDocumentation(node.field());
        this.yenum.enrichWith(doc, this.enumName);
        this.completionProvider.addCompletionItem(this.yenum);
        this.yenum.setDefinitionLocation(node.start, node.stop, this.uri);
        // Add enum to the definitions, because it looks a lot like a class.
        this.definitions.addDefinition(this.yenum);
        // Keep this for _Go To Implementation_.
        this.definitions.addImplementation(this.yenum);
        /**
         * Look for the enum's members.
         */
        this.visitChildren(node);
    }

    public visitEnumElement(node: EnumElementContext): void {
        const enumMember = new YmlEnumMember(`${this.enumName}::${node.ymlId().text}`, this.uri);
        const doc = getDocumentation(node.field());
        const type = getType(node.field(), this.enumName);
        enumMember.enrichWith(doc, type, this.yenum);
        this.completionProvider.addCompletionItem(enumMember);
        enumMember.setDefinitionLocation(node.start, node.stop, this.uri);
        this.definitions.addDefinition(enumMember);
        this.yenum.enumValues.push(enumMember);
    }
}
