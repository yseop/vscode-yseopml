import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { ClassAttributeDeclarationContext, ClassDeclarationIntroContext, MethodDeclarationContext } from '../grammar';
import { YmlAttribute, YmlClass, YmlMethod } from '../yml-objects';
import { AbstractYmlObject } from '../yml-objects/AbstractYmlObject';
import { YmlBaseVisitor } from './YmlBaseVisitor';
import { getDocumentation, getType } from './YmlVisitorHelper';

export class YmlClassVisitor extends YmlBaseVisitor {
    private ymlClass: AbstractYmlObject;

    constructor(
        completionProvider: YmlCompletionItemsProvider,
        uri: string,
        public definitions: YmlDefinitionProvider,
    ) {
        super(completionProvider, uri);
    }

    public visitMethodDeclaration(node: MethodDeclarationContext): any {
        /*
         * YML fact:
         * A class “MyClass” that declares a method “myMethod” will implement it by naming it “MyClass::myMethod”.
         * Otherwise, there will be compilation errors.
         */
        const method = new YmlMethod(`${node.methodIntro().ymlId().text}`, this.uri);
        const doc = getDocumentation(node.field());
        const type = getType(node.field());
        method.enrichWith(doc, type, this.ymlClass);
        this.completionProvider.addCompletionItem(method);
        method.setDefinitionLocation(node.start, node.stop, this.uri);
        this.definitions.addDefinition(method);
    }

    public visitClassAttributeDeclaration(node: ClassAttributeDeclarationContext) {
        const attribute = new YmlAttribute(node.ymlId().text, this.uri);
        const doc = getDocumentation(node.field());
        const type = getType(node.field());
        attribute.enrichWith(doc, type, this.ymlClass);
        this.completionProvider.addCompletionItem(attribute);
        attribute.setDefinitionLocation(node.start, node.stop, this.uri);
        this.definitions.addDefinition(attribute);
    }

    public visitClassDeclarationIntro(node: ClassDeclarationIntroContext) {
        const classId = node.ymlId().text;
        this.ymlClass = new YmlClass(classId, this.uri);
        this.ymlClass.data = `id_${this.ymlClass.label}`;
        this.completionProvider.addCompletionItem(this.ymlClass);
        this.ymlClass.setDefinitionLocation(node.start, node.stop, this.uri);
    }
}
