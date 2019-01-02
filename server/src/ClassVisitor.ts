import {
  Diagnostic,
  CompletionItem,
  CompletionItemKind
} from "vscode-languageserver";
import { YmlToBdlVisitor } from "./YmlToBdlVisitor";
import {
  FieldContext,
  YmlIdOrPathContext,
  YmlIdContext,
  ClassDeclarationIntroContext,
  MemberDeclarationContext,
  MethodDeclarationContext
} from "./YmlToBdlParser";
import { ParseTree } from "antlr4ts/tree/ParseTree";

const BEGINNING_QUOTES_REGEX = /^("""|")\s*/;
const ENDING_QUOTES_REGEX = /\s*("""|")$/;

export class ClassVisitor implements YmlToBdlVisitor<void> {
  private classId: string;

  constructor(
    public diagnostics: Diagnostic[],
    public completionItems: CompletionItem[]
  ) {}

  visit(node: ParseTree) {
    if (node instanceof YmlIdContext) {
      this.visitYmlId(<YmlIdContext>node);
    } else if (node instanceof FieldContext) {
      this.visitField(node);
    } else if (node instanceof ClassDeclarationIntroContext) {
      this.visitClassDeclarationIntro(node);
    } else if (node instanceof MemberDeclarationContext) {
      this.visitMemberDeclaration(node);
    } else if (node instanceof MethodDeclarationContext) {
      this.visitMethodDeclaration(node);
    } else {
      this.visitChildren(node);
    }
  }
  visitMethodDeclaration(node: MethodDeclarationContext): any {
    this.createNewCompletionItem(
      node.methodIntro().ymlId(),
      node.field(),
      "Method",
      CompletionItemKind.Method
    );
  }

  visitMemberDeclaration(node: MemberDeclarationContext) {
    this.createNewCompletionItem(node.ymlId(), node.field(), "Attribute", CompletionItemKind.Property);
  }

  createNewCompletionItem(
    ymlIdContext: YmlIdContext,
    fields: FieldContext[],
    itemType: string,
    kind: CompletionItemKind
  ) {
    if (this.classId == null) {
      console.error("Parsing class member before knowing its name.");
      return;
    }
    let currentClassId = this.classId;
    const documentation = this.getDocumentation(fields);
    const returnType = this.getType(fields);
    const ymlId = ymlIdContext.text;
    const elementId = `id_${currentClassId}_${ymlId}`;
    const completionItem = this.completionItems.find(elem => elem.data === elementId);
    if (completionItem) {
      completionItem.documentation = documentation;
      completionItem.detail = returnType;
    } else {
      this.completionItems.push({
        label: ymlId,
        kind: kind,
        data: elementId,
        detail: returnType,
        documentation: documentation
      });
    }
  }

  getType(fieldOptions: FieldContext[]): string {
    let domains = "Object";
    let domainsLevel2 = "";
    try {
      for (const option of fieldOptions) {
        let optionName = option._optionName.text;
        if (optionName === "domains") {
          domains = option._optionValues[0].text;
        } else if (optionName === "domainsLevel2") {
          domainsLevel2 = ` − ${option._optionValues[0].text}`;
        }
      }
    } catch (err) {
      console.error(err);
    }
    return domains.concat(domainsLevel2);
  }

  getDocumentation(fieldOptions: FieldContext[]): string {
    try {
      for (const option of fieldOptions) {
        if (option._optionName.text === "documentation") {
          let documentation = option._optionValues[0].text;
          if (documentation !== null && documentation !== undefined) {
            documentation = documentation.replace(BEGINNING_QUOTES_REGEX, "");
            documentation = documentation.replace(ENDING_QUOTES_REGEX, "");
            return documentation;
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
    return "not documented";
  }

  visitClassDeclarationIntro(node: ClassDeclarationIntroContext) {
    this.classId = node.ymlId().text;
  }

  visitChildren(node: ParseTree): void {
    for (let childIndex = 0; childIndex < node.childCount; childIndex++) {
      const currentChild = node.getChild(childIndex);
      this.visit(currentChild);
    }
  }

  visitTerminal(node: ParseTree): void {}

  visitErrorNode(node: ParseTree): void {}

  visitYmlId(node: YmlIdContext): void {}

  visitYmlIdOrPath(node: YmlIdOrPathContext): void {
    this.visitChildren(node);
  }

  visitField(node: FieldContext): void {}
}
