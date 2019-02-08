import { ParseTree } from "antlr4ts/tree/ParseTree";
import {
  CompletionItem,
  CompletionItemKind,
  Diagnostic,
} from "vscode-languageserver";
import { connection } from "./server";
import {
  ClassAttributeDeclarationContext,
  ClassDeclarationIntroContext,
  FieldContext,
  MethodDeclarationContext,
  YmlIdContext,
  YmlIdOrPathContext,
} from "./YmlToBdlParser";
import { YmlToBdlVisitor } from "./YmlToBdlVisitor";

const BEGINNING_QUOTES_REGEX = /^("""|")\s*/;
const ENDING_QUOTES_REGEX = /\s*("""|")$/;

export class ClassVisitor implements YmlToBdlVisitor<void> {
  private classId: string;

  constructor(
    public diagnostics: Diagnostic[],
    public completionItems: CompletionItem[],
  ) {}

  public visit(node: ParseTree) {
    if (node instanceof YmlIdContext) {
      this.visitYmlId(node);
    } else if (node instanceof FieldContext) {
      this.visitField(node);
    } else if (node instanceof ClassDeclarationIntroContext) {
      this.visitClassDeclarationIntro(node);
    } else if (node instanceof ClassAttributeDeclarationContext) {
      this.visitClassAttributeDeclaration(node);
    } else if (node instanceof MethodDeclarationContext) {
      this.visitMethodDeclaration(node);
    } else {
      this.visitChildren(node);
    }
  }
  public visitMethodDeclaration(node: MethodDeclarationContext): any {
    this.createNewCompletionItem(
      node.methodIntro().ymlId(),
      node.field(),
      "Method",
      CompletionItemKind.Method,
    );
  }

  public visitClassAttributeDeclaration(node: ClassAttributeDeclarationContext) {
    this.createNewCompletionItem(
      node.ymlId(),
      node.field(),
      "Attribute",
      CompletionItemKind.Property,
    );
  }

  public createNewCompletionItem(
    ymlIdContext: YmlIdContext,
    fields: FieldContext[],
    itemType: string,
    kind: CompletionItemKind,
  ) {
    if (this.classId == null) {
      connection.console.error("Parsing class member before knowing its name.");
      return;
    }
    const currentClassId = this.classId;
    const documentation = this.getDocumentation(fields);
    const returnType = this.getType(fields);
    const ymlId = ymlIdContext.text;
    const elementId = `id_${currentClassId}_${ymlId}`;
    const completionItem = this.completionItems.find(
      (elem) => elem.data === elementId,
    );
    if (completionItem) {
      completionItem.documentation = documentation;
      completionItem.detail = returnType;
    } else {
      this.completionItems.push({
        data: elementId,
        detail: returnType,
        documentation,
        kind,
        label: ymlId,
      });
    }
  }

  public getType(fieldOptions: FieldContext[]): string {
    let domains = "Object";
    let domainsLevel2 = "";
    try {
      for (const option of fieldOptions) {
        const optionName = option._optionName.text;
        if (optionName === "domains") {
          domains = option._optionValues[0].text;
        } else if (optionName === "domainsLevel2") {
          domainsLevel2 = ` − ${option._optionValues[0].text}`;
        }
      }
    } catch (err) {
      connection.console.error(err);
    }
    return domains.concat(domainsLevel2);
  }

  public getDocumentation(fieldOptions: FieldContext[]): string {
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
      connection.console.error(err);
    }
    return "not documented";
  }

  public visitClassDeclarationIntro(node: ClassDeclarationIntroContext) {
    this.classId = node.ymlId().text;
  }

  public visitChildren(node: ParseTree): void {
    for (let childIndex = 0; childIndex < node.childCount; childIndex++) {
      const currentChild = node.getChild(childIndex);
      this.visit(currentChild);
    }
  }

  public visitTerminal(node: ParseTree): void {
    // does nothing
  }

  public visitErrorNode(node: ParseTree): void {
    // does nothing
  }

  public visitYmlId(node: YmlIdContext): void {
    // does nothing
  }

  public visitYmlIdOrPath(node: YmlIdOrPathContext): void {
    this.visitChildren(node);
  }

  public visitField(node: FieldContext): void {
    // does nothing
  }
}
