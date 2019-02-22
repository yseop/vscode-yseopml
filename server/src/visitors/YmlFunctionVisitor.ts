import {
  CompletionItem,
  CompletionItemKind,
} from "vscode-languageserver";
import { IDefinitionLocation } from "../IDefinitionLocation";
import { FunctionContext } from "../YmlToBdlParser";
import { createNewCompletionItem } from "./utils";
import YmlToBdlBaseVisitor from "./YmlToBdlBaseVisitor";

export class YmlFunctionVisitor extends YmlToBdlBaseVisitor {
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
