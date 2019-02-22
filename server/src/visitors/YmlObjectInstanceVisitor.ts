import {
  CompletionItem,
  CompletionItemKind,
  Definition,
} from "vscode-languageserver";
import { StaticDeclarationContext } from "../grammar/YmlParser";
import { IDefinitionLocation } from "../IDefinitionLocation";
import { createLocation as createDefinitionLocation, createNewCompletionItem } from "./utils";
import YmlBaseVisitor from "./YmlBaseVisitor";

export class YmlObjectInstanceVisitor extends YmlBaseVisitor {
  constructor(
    completionItems: CompletionItem[],
    definitions: IDefinitionLocation[],
    uri: string,
  ) {
    super(completionItems, definitions, uri);
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
    this.definitions.push(
      createDefinitionLocation(
        node._declarationName.text,
        startToken,
        endToken,
        this.uri,
      ),
    );
  }
}
