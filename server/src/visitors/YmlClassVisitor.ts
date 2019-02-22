import { CompletionItem, CompletionItemKind } from "vscode-languageserver";
import {
  ClassAttributeDeclarationContext,
  ClassDeclarationIntroContext,
  MethodDeclarationContext,
} from "../grammar/YmlParser";
import { IDefinitionLocation } from "../IDefinitionLocation";
import { createLocation, createNewCompletionItem } from "./utils";
import YmlBaseVisitor from "./YmlBaseVisitor";

export class YmlClassVisitor extends YmlBaseVisitor {
  private classId: string;

  constructor(
    completionItems: CompletionItem[],
    definitions: IDefinitionLocation[],
    uri: string,
  ) {
    super(completionItems, definitions, uri);
  }

  public visitMethodDeclaration(node: MethodDeclarationContext): any {
    createNewCompletionItem(
      this.completionItems,
      node.methodIntro().ymlId(),
      node.field(),
      CompletionItemKind.Method,
      this.classId,
    );
    this.definitions.push(
      createLocation(
        node.methodIntro().ymlId().text,
        node.start,
        node.stop,
        this.uri,
      ),
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
    const startToken = node.start;
    const endToken = node.stop;
    this.definitions.push(
        createLocation(
          node.ymlId().text,
          startToken,
          endToken,
          this.uri,
        ),
    );
  }

  public visitClassDeclarationIntro(node: ClassDeclarationIntroContext) {
    this.classId = node.ymlId().text;
  }
}
