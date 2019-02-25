import { CompletionItem, CompletionItemKind } from "vscode-languageserver";
import { YmlDefinitionProvider } from "../definitions/YmlDefinitionProvider";
import { StaticDeclarationContext } from "../grammar/YmlParser";
import { createLocation, createNewCompletionItem } from "./utils";
import YmlBaseVisitor from "./YmlBaseVisitor";

export class YmlObjectInstanceVisitor extends YmlBaseVisitor {
  constructor(
    completionItems: CompletionItem[],
    uri: string,
    public definitions: YmlDefinitionProvider,
  ) {
    super(completionItems, uri);
  }

  public visitStaticDeclaration(node: StaticDeclarationContext): void {
    createNewCompletionItem(
      this.completionItems,
      node._declarationName,
      node.field(),
      CompletionItemKind.Variable,
      null,
      node._declarationType.text,
    );
    this.definitions.addDefinition(
      createLocation(
        node._declarationName.text,
        node.start,
        node.stop,
        this.uri,
      ),
    );
  }
}
