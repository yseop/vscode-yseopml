import {
  Diagnostic,
  CompletionItem,
} from "vscode-languageserver";
import { YmlToBdlVisitor } from "./YmlToBdlVisitor";
import {
  ClassDeclarationContext
} from "./YmlToBdlParser";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { ClassVisitor } from "./ClassVisitor";

export class YmlToBdlVisitorImpl implements YmlToBdlVisitor<void> {
  constructor(
    public diagnostics: Diagnostic[],
    public completionItems: CompletionItem[]
  ) {}

  visit(node: ParseTree): void {
    if (node instanceof ErrorNode) {
      this.visitErrorNode(node);
    } else if (node instanceof TerminalNode) {
      this.visitTerminal(node);
    } else if (node instanceof ClassDeclarationContext) {
      let classVisitor = new ClassVisitor(
        this.diagnostics,
        this.completionItems
      );
      classVisitor.visit(node);
    } else {
      this.visitChildren(node);
    }
  }

  visitChildren(node: ParseTree): void {
    for (let childIndex = 0; childIndex < node.childCount; childIndex++) {
      const currentChild = node.getChild(childIndex);
      this.visit(currentChild);
    }
  }

  visitTerminal(node: ParseTree): void {}

  visitErrorNode(node: ParseTree): void {}
}
