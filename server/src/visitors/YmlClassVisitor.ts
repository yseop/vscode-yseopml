import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { ClassAttributeDeclarationContext, ClassDeclarationIntroContext, MethodDeclarationContext } from '../grammar';
import { YmlAttribute, YmlMethod } from '../yml-objects';
import { createLocation, enrichCompletionItem } from './VisitorsUtils';
import { YmlBaseVisitor } from './YmlBaseVisitor';

export class YmlClassVisitor extends YmlBaseVisitor {
    private classId: string;

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
        const method = new YmlMethod(`${this.classId}::${node.methodIntro().ymlId().text}`, this.uri);
        enrichCompletionItem(method, node.field(), this.classId);
        this.completionProvider.addCompletionItem(method);
        method.definitionLocation = createLocation(node.start, node.stop, this.uri);
        this.definitions.addDefinition(method);
    }

    public visitClassAttributeDeclaration(node: ClassAttributeDeclarationContext) {
        const attribute = new YmlAttribute(node.ymlId().text, this.uri);
        enrichCompletionItem(attribute, node.field(), this.classId);
        this.completionProvider.addCompletionItem(attribute);
        attribute.definitionLocation = createLocation(node.start, node.stop, this.uri);
        this.definitions.addDefinition(attribute);
    }

    public visitClassDeclarationIntro(node: ClassDeclarationIntroContext) {
        this.classId = node.ymlId().text;
    }
}
