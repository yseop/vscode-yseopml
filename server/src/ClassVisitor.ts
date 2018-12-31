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

const BEGINING_QUOTES_REGEX = /^("""|")\s*/;
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
      "Method"
    );
  }

  visitMemberDeclaration(node: MemberDeclarationContext) {
    this.createNewCompletionItem(node.ymlId(), node.field(), "Attribute");
  }

  createNewCompletionItem(
    ymlIdContext: YmlIdContext,
    fields: FieldContext[],
    itemType: string
  ) {
    if (this.classId == null) {
      console.error("Parsing class member before knowing its name.");
      return;
    }
    let currentClassId = this.classId;
    const documentation = this.getDocumentation(fields);
    const completionItem = this.completionItems.find(elem => {
      return elem.data === `id_${ymlIdContext.text}_${currentClassId}`;
    });
    if (completionItem) {
      completionItem.documentation = `${documentation}`;
    } else {
      this.completionItems.push({
        label: `${ymlIdContext.text}`,
        kind: CompletionItemKind.Property,
        data: `id_${ymlIdContext.text}_${currentClassId}`,
        detail: `${itemType} of class ${currentClassId}.`,
        documentation: `${documentation}`
      });
    }
  }

  getDocumentation(fieldOptions: FieldContext[]): string {
    try {
      for (const option of fieldOptions) {
        if (option._optionName.text === "documentation") {
          let documentation = option._optionValues[0].text;
          if (documentation !== null && documentation !== undefined) {
            documentation = documentation.replace(BEGINING_QUOTES_REGEX, "");
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
    if (
      !this.completionItems.find(function(elem, index, self) {
        return elem.data === `id_${node.ymlId().text}`;
      })
    ) {
      this.completionItems.push({
        label: this.classId,
        kind: CompletionItemKind.Class,
        data: `id_${node.ymlId().text}`,
        detail: `This is the id of ${this.classId}.`
        //,documentation: "Its documentation can come from predefinedObjects.xml"
      });
    }
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
