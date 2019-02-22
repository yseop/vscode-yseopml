import YmlToBdlBaseVisitor from "./YmlToBdlBaseVisitor";

import { CompletionItem } from "vscode-languageserver";
import { IDefinitionLocation } from "../IDefinitionLocation";
import { StaticDeclarationContext } from "../YmlToBdlParser";
import {
  ExternDeclarationContext,
  FunctionContext,
  YenumContext,
} from "../YmlToBdlParser";
import { ClassDeclarationContext, CompleteContext } from "../YmlToBdlParser";
import { YmlClassVisitor } from "./YmlClassVisitor";
import { YmlFunctionVisitor } from "./YmlFunctionVisitor";
import { YmlObjectInstanceVisitor } from "./YmlObjectInstanceVisitor";

export default class YmlKaoFileVisitor extends YmlToBdlBaseVisitor {
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
