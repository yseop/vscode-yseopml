import { CompletionItem, CompletionItemKind } from "vscode-languageserver";
import { YmlDefinitionProvider } from "../definitions/YmlDefinitionProvider";
import {
  ClassAttributeDeclarationContext,
  ClassDeclarationIntroContext,
  MethodDeclarationContext,
} from "../grammar/YmlParser";
import { createNewCompletionItem } from "./utils";
import YmlBaseVisitor from "./YmlBaseVisitor";

export class YmlClassVisitor extends YmlBaseVisitor {
  private classId: string;

  constructor(
    completionItems: CompletionItem[],
    uri: string,
    public definitions: YmlDefinitionProvider,
  ) {
    super(completionItems, uri);
  }

  public visitMethodDeclaration(node: MethodDeclarationContext): any {
    createNewCompletionItem(
      this.completionItems,
      node.methodIntro().ymlId(),
      node.field(),
      CompletionItemKind.Method,
      this.classId,
    );
    this.definitions.addDefinition(node.methodIntro().ymlId().text, node, this.uri);
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
    this.definitions.addDefinition(node.ymlId().text, node, this.uri);
  }

  public visitClassDeclarationIntro(node: ClassDeclarationIntroContext) {
    this.classId = node.ymlId().text;
  }
}
