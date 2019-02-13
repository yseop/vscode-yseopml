import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { CompletionItem, Diagnostic } from "vscode-languageserver";
import { ClassVisitor } from "./ClassVisitor";
import { ClassDeclarationContext } from "./YmlToBdlParser";
import { YmlToBdlVisitor } from "./YmlToBdlVisitor";

export class YmlToBdlVisitorImpl implements YmlToBdlVisitor<void> {
  constructor(
    public diagnostics: Diagnostic[],
    public completionItems: CompletionItem[],
  ) {}

  public visit(node: ParseTree): void {
    if (node instanceof ErrorNode) {
      this.visitErrorNode(node);
    } else if (node instanceof TerminalNode) {
      this.visitTerminal(node);
    } else if (node instanceof ClassDeclarationContext) {
      const classVisitor = new ClassVisitor(
        this.diagnostics,
        this.completionItems,
      );
      classVisitor.visit(node);
    } else {
      this.visitChildren(node);
    }
  }

  public visitChildren(node: ParseTree): void {
    for (let childIndex = 0; childIndex < node.childCount; childIndex++) {
      const currentChild = node.getChild(childIndex);
      this.visit(currentChild);
    }
  }

  public visitTerminal(node: ParseTree): void {}

  public visitErrorNode(node: ParseTree): void {}
}
