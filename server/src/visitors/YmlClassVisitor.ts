import { CompletionItem, CompletionItemKind } from "vscode-languageserver";
import {
  ClassAttributeDeclarationContext,
  ClassDeclarationIntroContext,
  MethodDeclarationContext,
} from "../YmlToBdlParser";
import { createNewCompletionItem } from "./utils";
import YmlToBdlBaseVisitor from "./YmlToBdlBaseVisitor";

export class YmlClassVisitor extends YmlToBdlBaseVisitor {
  private classId: string;

  constructor(completionItems: CompletionItem[]) {
    super(completionItems);
  }

  public visitMethodDeclaration(node: MethodDeclarationContext): any {
    createNewCompletionItem(
      this.completionItems,
      node.methodIntro().ymlId(),
      node.field(),
      CompletionItemKind.Method,
      this.classId,
    );
  }

  public visitClassAttributeDeclaration(
    node: ClassAttributeDeclarationContext,
  ) {
    createNewCompletionItem(
      this.completionItems,
      node.ymlId(),
      node.field(),
      CompletionItemKind.Property,
      this.classId,
    );
  }

  public visitClassDeclarationIntro(node: ClassDeclarationIntroContext) {
    this.classId = node.ymlId().text;
  }
}
