import {
  CompletionItem,
  CompletionItemKind,
} from "vscode-languageserver";
import { FunctionContext } from "../grammar/YmlParser";
import { IDefinitionLocation } from "../IDefinitionLocation";
import { createNewCompletionItem } from "./utils";
import YmlBaseVisitor from "./YmlBaseVisitor";

export class YmlFunctionVisitor extends YmlBaseVisitor {
  constructor(
    completionItems: CompletionItem[],
    definitions: IDefinitionLocation[],
    uri: string,
  ) {
    super(completionItems, definitions, uri);
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
