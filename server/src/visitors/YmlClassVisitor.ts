import { CompletionItemKind } from "vscode-languageserver";
import { YmlCompletionItemsProvider } from "../completion/YmlCompletionItemsProvider";
import { YmlDefinitionProvider } from "../definitions/YmlDefinitionProvider";
import {
  ClassAttributeDeclarationContext,
  ClassDeclarationIntroContext,
  MethodDeclarationContext,
} from "../grammar/YmlParser";
import { createLocation, createNewCompletionItem } from "./VisitorsUtils";
import YmlBaseVisitor from "./YmlBaseVisitor";

export class YmlClassVisitor extends YmlBaseVisitor {
  private classId: string;

  constructor(
    completionProvider: YmlCompletionItemsProvider,
    uri: string,
    public definitions: YmlDefinitionProvider,
  ) {
    super(completionProvider, uri);
  }

  public visitMethodDeclaration(node: MethodDeclarationContext): any {
    createNewCompletionItem(
      this.uri,
      this.completionProvider,
      node.methodIntro().ymlId(),
      node.field(),
      CompletionItemKind.Method,
      this.classId,
    );
    this.definitions.addDefinition(
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
      this.uri,
      this.completionProvider,
      node.ymlId(),
      node.field(),
      CompletionItemKind.Property,
      this.classId,
    );
    this.definitions.addDefinition(
      createLocation(node.ymlId().text, node.start, node.stop, this.uri),
    );
  }

  public visitClassDeclarationIntro(node: ClassDeclarationIntroContext) {
    this.classId = node.ymlId().text;
  }
}
