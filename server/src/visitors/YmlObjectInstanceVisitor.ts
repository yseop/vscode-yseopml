import { YmlCompletionItemsProvider } from "../completion/YmlCompletionItemsProvider";
import { YmlDefinitionProvider } from "../definitions";
import { StaticDeclarationContext } from "../grammar";
import { YmlObjectInstance } from "../yml-objects";
import { createLocation, enrichCompletionItem } from "./VisitorsUtils";
import { YmlBaseVisitor } from "./YmlBaseVisitor";

export class YmlObjectInstanceVisitor extends YmlBaseVisitor {
  constructor(
    completionProvider: YmlCompletionItemsProvider,
    uri: string,
    public definitions: YmlDefinitionProvider,
  ) {
    super(completionProvider, uri);
  }

  public visitStaticDeclaration(node: StaticDeclarationContext): void {
    const instance = new YmlObjectInstance(
      node._declarationName.text,
      this.uri,
    );
    enrichCompletionItem(
      instance,
      node.field(),
      null,
      node._declarationType.text,
    );
    this.completionProvider.addCompletionItem(instance);
    instance.definitionLocation = createLocation(node.start, node.stop, this.uri);
    this.definitions.addDefinition(instance);
  }
}
