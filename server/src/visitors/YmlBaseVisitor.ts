import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { CompletionItem } from "vscode-languageserver";
import { YmlVisitor } from "../grammar/YmlVisitor";
import { IDefinitionLocation } from "../IDefinitionLocation";

export default class YmlBaseVisitor extends AbstractParseTreeVisitor<void>
  implements YmlVisitor<void> {
  constructor(
    public completionItems: CompletionItem[],
    public definitions: IDefinitionLocation[],
    public uri: string,
  ) {
    super();
  }

  public defaultResult() {
    // no default
  }
}
