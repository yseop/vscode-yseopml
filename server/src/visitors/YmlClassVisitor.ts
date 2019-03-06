import { CompletionItemKind } from "vscode-languageserver";
import { YmlCompletionItemsProvider } from "../completion/YmlCompletionItemsProvider";
import { YmlDefinitionProvider } from "../definitions";
import {
  ClassAttributeDeclarationContext,
  ClassDeclarationIntroContext,
  MethodDeclarationContext,
} from "../grammar";
import { createLocation, createNewCompletionItem } from "./VisitorsUtils";
import { YmlBaseVisitor } from "./YmlBaseVisitor";

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
      /*
       * YML fact:
       * A class “MyClass” that declares a method “myMethod” will implement it by naming it “MyClass::myMethod”.
       * Otherwise, there will be compilation errors.
       */
      `${this.classId}::${node.methodIntro().ymlId().text}`,
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
      node.ymlId().text,
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
