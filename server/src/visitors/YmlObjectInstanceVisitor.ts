import { CompletionItem, CompletionItemKind } from "vscode-languageserver";
import { StaticDeclarationContext } from "../YmlToBdlParser";
import { createNewCompletionItem } from "./utils";
import YmlToBdlBaseVisitor from "./YmlToBdlBaseVisitor";

export class YmlObjectInstanceVisitor extends YmlToBdlBaseVisitor {
  constructor(public completionItems: CompletionItem[]) {
    super(completionItems);
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
  }
}
