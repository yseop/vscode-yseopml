import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { CompletionItem } from "vscode-languageserver";
import { YmlToBdlVisitor } from "../YmlToBdlVisitor";

export default class YmlToBdlBaseVisitor extends AbstractParseTreeVisitor<void>
  implements YmlToBdlVisitor<void> {
  constructor(public completionItems: CompletionItem[]) {
    super();
  }

  public defaultResult() {}
}
