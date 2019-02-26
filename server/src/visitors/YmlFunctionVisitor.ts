import { CompletionItemKind } from "vscode-languageserver";
import { YmlCompletionItemsProvider } from "../completion/YmlCompletionItemsProvider";
import { FunctionContext } from "../grammar";
import { createNewCompletionItem } from "./VisitorsUtils";
import { YmlBaseVisitor } from "./YmlBaseVisitor";

export class YmlFunctionVisitor extends YmlBaseVisitor {
  constructor(completionProvider: YmlCompletionItemsProvider, uri: string) {
    super(completionProvider, uri);
  }
  public visitFunction(node: FunctionContext): void {
    createNewCompletionItem(
      this.uri,
      this.completionProvider,
      node.ymlId(),
      node.field(),
      CompletionItemKind.Function,
      null,
    );
  }
}
