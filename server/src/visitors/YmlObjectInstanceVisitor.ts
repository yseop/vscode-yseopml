import {
  CompletionItem,
  CompletionItemKind,
  Definition,
} from "vscode-languageserver";
import { IDefinitionLocation } from "../IDefinitionLocation";
import { StaticDeclarationContext } from "../YmlToBdlParser";
import { createLocation as createDefinitionLocation, createNewCompletionItem } from "./utils";
import YmlToBdlBaseVisitor from "./YmlToBdlBaseVisitor";

export class YmlObjectInstanceVisitor extends YmlToBdlBaseVisitor {
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
