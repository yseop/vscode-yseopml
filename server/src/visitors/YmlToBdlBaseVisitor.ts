import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { CompletionItem } from 'vscode-languageserver';
import { YmlToBdlVisitor } from "../YmlToBdlVisitor";
import { IDefinitionLocation } from "../IDefinitionLocation";

export default class YmlToBdlBaseVisitor extends AbstractParseTreeVisitor<void>
  implements YmlToBdlVisitor<void> {
  constructor(
    public completionItems: CompletionItem[],
    public definitions: IDefinitionLocation[],
    public uri: string,
  ) {
    super();
  }

  public defaultResult() {}
}
