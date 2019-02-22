import {
  CompletionItem,
  CompletionItemKind,
  Definition,
} from "vscode-languageserver";
import { YmlDefinitionProvider } from "../definitions/YmlDefinitionProvider";
import { StaticDeclarationContext } from "../grammar/YmlParser";
import { createLocation as createDefinitionLocation, createNewCompletionItem } from "./utils";
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
    const startToken = node.start;
    const endToken = node.stop;
    this.definitions.addDefinition(
      createDefinitionLocation(
        node._declarationName.text,
        startToken,
        endToken,
        this.uri,
      ),
    );
  }
}
