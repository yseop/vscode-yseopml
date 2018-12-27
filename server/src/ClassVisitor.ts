import {
  IPCMessageReader,
  IPCMessageWriter,
  createConnection,
  IConnection,
  TextDocuments,
  TextDocument,
  Diagnostic,
  DiagnosticSeverity,
  InitializeResult,
  TextDocumentPositionParams,
  CompletionItem,
  CompletionItemKind
} from "vscode-languageserver";
import { YmlToBdlVisitorImpl } from "./YmlToBdlVisitorImpl";
import { YmlToBdlVisitor } from "./YmlToBdlVisitor";
import {
  YmlToBdlParser,
  KaoFileContext,
  FieldContext,
  FieldValueContext,
  YmlIdOrPathContext,
  YmlIdContext,
  ClassDeclarationIntroContext,
  MemberDeclarationContext,
  DocumentationContext
} from "./YmlToBdlParser";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { Override } from "antlr4ts/Decorators";

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
    } else {
      this.visitChildren(node);
    }
  }

  visitMemberDeclaration(node: MemberDeclarationContext) {
    if (this.classId == null) {
      console.error("Parsing class member before knowing its name.");
      return;
    }
    if (node.memberType().FIELD != null) {
      let yidContext: YmlIdContext = node.ymlId();
      let currentClassId = this.classId;
      if (yidContext != null) {
        const documentation = this.getDocumentation(node.field());
        const completionItem = this.completionItems.find(function(elem, index, self) {
          return elem.data === `id_${yidContext.text}_${currentClassId}`;
        });
        if (!completionItem) {
          this.completionItems.push({
            label: `${yidContext.text}`,
            kind: CompletionItemKind.Property,
            data: `id_${yidContext.text}_${currentClassId}`,
            detail: `Attribute of class ${currentClassId}.`,
            documentation: `${documentation}`
          });
        } else {
          completionItem.documentation = `${documentation}`;
        }
      }
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
