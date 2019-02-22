import YmlBaseVisitor from "./YmlBaseVisitor";

import { CompletionItem } from "vscode-languageserver";
import { StaticDeclarationContext } from "../grammar/YmlParser";
import {
  ExternDeclarationContext,
  FunctionContext,
  YenumContext,
} from "../grammar/YmlParser";
import { ClassDeclarationContext, CompleteContext } from "../grammar/YmlParser";
import { IDefinitionLocation } from "../IDefinitionLocation";
import { YmlClassVisitor } from "./YmlClassVisitor";
import { YmlFunctionVisitor } from "./YmlFunctionVisitor";
import { YmlObjectInstanceVisitor } from "./YmlObjectInstanceVisitor";

export default class YmlKaoFileVisitor extends YmlBaseVisitor {
  constructor(
    completionItems: CompletionItem[],
    definitions: IDefinitionLocation[],
    uri: string,
  ) {
    super(completionItems, definitions, uri);
  }

  public visitStaticDeclaration(node: StaticDeclarationContext): void {
    const visitor = new YmlObjectInstanceVisitor(
      this.completionItems,
      this.definitions,
      this.uri,
    );
    visitor.visit(node);
  }

  public visitClassDeclaration(node: ClassDeclarationContext): void {
    const visitor = new YmlClassVisitor(
      this.completionItems,
      this.definitions,
      this.uri,
    );
    visitor.visit(node);
  }

  public visitCompletion(node: CompleteContext): void {
    // not implemented yet
  }

  public visitFunction(node: FunctionContext): void {
    const visitor = new YmlFunctionVisitor(
      this.completionItems,
      this.definitions,
      this.uri,
    );
    visitor.visit(node);
  }

  public visitYenum(node: YenumContext): void {
    // not implemented yet
  }

  public visitExternDeclaration(node: ExternDeclarationContext): void {
    // not implemented yet
  }
}
