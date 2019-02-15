import { CompletionItem, CompletionItemKind } from "vscode-languageserver";
import { FunctionContext } from "../YmlToBdlParser";
import { createNewCompletionItem } from "./utils";
import YmlToBdlBaseVisitor from "./YmlToBdlBaseVisitor";

export class YmlFunctionVisitor extends YmlToBdlBaseVisitor {
  constructor(public completionItems: CompletionItem[]) {
    super(completionItems);
  }

  public visitFunction(node: FunctionContext): void {
    createNewCompletionItem(
      this.completionItems,
      node.ymlId(),
      node.field(),
      CompletionItemKind.Function,
      null,
    );
  }
}
