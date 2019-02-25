import YmlBaseVisitor from "./YmlBaseVisitor";

import { CompletionItem } from "vscode-languageserver";
import { YmlDefinitionProvider } from "../definitions/YmlDefinitionProvider";
import { StaticDeclarationContext } from "../grammar/YmlParser";
import {
  ExternDeclarationContext,
  FunctionContext,
  YenumContext,
} from "../grammar/YmlParser";
import { ClassDeclarationContext, CompleteContext } from "../grammar/YmlParser";
import { YmlClassVisitor } from "./YmlClassVisitor";
import { YmlFunctionVisitor } from "./YmlFunctionVisitor";
import { YmlObjectInstanceVisitor } from "./YmlObjectInstanceVisitor";

export default class YmlKaoFileVisitor extends YmlBaseVisitor {
  constructor(
    completionItems: CompletionItem[],
    uri: string,
    public definitions: YmlDefinitionProvider,
  ) {
    super(completionItems, uri);
  }

  public visitStaticDeclaration(node: StaticDeclarationContext): void {
    const visitor = new YmlObjectInstanceVisitor(
      this.completionItems,
      this.uri,
      this.definitions,
    );
    visitor.visit(node);
  }

  public visitClassDeclaration(node: ClassDeclarationContext): void {
    const visitor = new YmlClassVisitor(
      this.completionItems,
      this.uri,
      this.definitions,
    );
    visitor.visit(node);
  }

  public visitCompletion(node: CompleteContext): void {
    // not implemented yet
  }

  public visitFunction(node: FunctionContext): void {
    const visitor = new YmlFunctionVisitor(this.completionItems, this.uri);
    visitor.visit(node);
  }

  public visitYenum(node: YenumContext): void {
    // not implemented yet
  }

  public visitExternDeclaration(node: ExternDeclarationContext): void {
    // not implemented yet
  }
}
