"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_languageserver_1 = require("vscode-languageserver");
const YmlToBdlParser_1 = require("./YmlToBdlParser");
class ClassVisitor {
    constructor(diagnostics, completionItems) {
        this.diagnostics = diagnostics;
        this.completionItems = completionItems;
    }
    visit(node) {
        if (node instanceof YmlToBdlParser_1.YmlIdContext) {
            this.visitYmlId((node));
        }
        else if (node instanceof YmlToBdlParser_1.FieldContext) {
            this.visitField(node);
        }
        else if (node instanceof YmlToBdlParser_1.ClassDeclarationIntroContext) {
            this.visitClassDeclarationIntro(node);
        }
        else if (node instanceof YmlToBdlParser_1.MemberDeclarationContext) {
            this.visitMemberDeclaration(node);
        }
        else {
            this.visitChildren(node);
        }
    }
    visitMemberDeclaration(node) {
        if (this.classId == null) {
            console.error("Parsing class member before knowing its name.");
            return;
        }
        if (node.memberType().FIELD != null) {
            let yidContext = node.ymlId();
            let currentClassId = this.classId;
            if (yidContext != null) {
                if (!this.completionItems.find(function (elem, index, self) {
                    return elem.data === `id_${yidContext.text}_${currentClassId}`;
                })) {
                    this.completionItems.push({
                        label: `${yidContext.text}`,
                        kind: vscode_languageserver_1.CompletionItemKind.Property,
                        data: `id_${yidContext.text}_${currentClassId}`,
                        detail: `Attribute of class ${currentClassId}.`
                        //,documentation: "Its documentation can come from predefinedObjects.xml"
                    });
                }
            }
        }
    }
    visitClassDeclarationIntro(node) {
        this.classId = node.ymlId().text;
        if (!this.completionItems.find(function (elem, index, self) {
            return elem.data === `id_${node.ymlId().text}`;
        })) {
            this.completionItems.push({
                label: this.classId,
                kind: vscode_languageserver_1.CompletionItemKind.Class,
                data: `id_${node.ymlId().text}`,
                detail: `This is the id of ${this.classId}.`
                //,documentation: "Its documentation can come from predefinedObjects.xml"
            });
        }
    }
    visitChildren(node) {
        for (let childIndex = 0; childIndex < node.childCount; childIndex++) {
            const currentChild = node.getChild(childIndex);
            this.visit(currentChild);
        }
    }
    visitTerminal(node) {
    }
    visitErrorNode(node) {
    }
    visitYmlId(node) {
    }
    visitYmlIdOrPath(node) {
        this.visitChildren(node);
    }
    visitField(node) {
        /*
        this.diagnostics.push({
            severity: DiagnosticSeverity.Information,
                range: {
                    start: { line: node.start.line - 1, character: node.start.charPositionInLine },
                    end: { line: node.stop.line - 1, character: node.stop.charPositionInLine + (node.stop.stopIndex - node.stop.startIndex) + 1 }
                },
                message: `"${node.text}" is a field`,
                source: 'YML Language Server'
        });
        */
    }
}
exports.ClassVisitor = ClassVisitor;
//# sourceMappingURL=ClassVisitor.js.map