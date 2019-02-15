import YmlToBdlBaseVisitor from "./YmlToBdlBaseVisitor";

import { CompletionItem } from "vscode-languageserver";
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
  constructor(completionItems: CompletionItem[]) {
    super(completionItems);
  }

  public visitStaticDeclaration(node: StaticDeclarationContext): void {
    const visitor = new YmlObjectInstanceVisitor(this.completionItems);
    visitor.visit(node);
  }

  public visitClassDeclaration(node: ClassDeclarationContext): void {
    const visitor = new YmlClassVisitor(this.completionItems);
    visitor.visit(node);
  }

  public visitCompletion(node: CompleteContext): void {
    // not implemented yet
  }

  public visitFunction(node: FunctionContext): void {
    const visitor = new YmlFunctionVisitor(this.completionItems);
    visitor.visit(node);
  }

  public visitYenum(node: YenumContext): void {
    // not implemented yet
  }

  public visitExternDeclaration(node: ExternDeclarationContext): void {
    // not implemented yet
  }
}
