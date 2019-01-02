"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_languageserver_1 = require("vscode-languageserver");
const YmlToBdlParser_1 = require("./YmlToBdlParser");
const BEGINNING_QUOTES_REGEX = /^("""|")\s*/;
const ENDING_QUOTES_REGEX = /\s*("""|")$/;
class ClassVisitor {
    constructor(diagnostics, completionItems) {
        this.diagnostics = diagnostics;
        this.completionItems = completionItems;
    }
    visit(node) {
        if (node instanceof YmlToBdlParser_1.YmlIdContext) {
            this.visitYmlId(node);
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
        else if (node instanceof YmlToBdlParser_1.MethodDeclarationContext) {
            this.visitMethodDeclaration(node);
        }
        else {
            this.visitChildren(node);
        }
    }
    visitMethodDeclaration(node) {
        this.createNewCompletionItem(node.methodIntro().ymlId(), node.field(), "Method", vscode_languageserver_1.CompletionItemKind.Method);
    }
    visitMemberDeclaration(node) {
        this.createNewCompletionItem(node.ymlId(), node.field(), "Attribute", vscode_languageserver_1.CompletionItemKind.Property);
    }
    createNewCompletionItem(ymlIdContext, fields, itemType, kind) {
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
        }
        else {
            this.completionItems.push({
                label: ymlId,
                kind: kind,
                data: elementId,
                detail: returnType,
                documentation: documentation
            });
        }
    }
    getType(fieldOptions) {
        let domains = "Object";
        let domainsLevel2 = "";
        try {
            for (const option of fieldOptions) {
                let optionName = option._optionName.text;
                if (optionName === "domains") {
                    domains = option._optionValues[0].text;
                }
                else if (optionName === "domainsLevel2") {
                    domainsLevel2 = ` − ${option._optionValues[0].text}`;
                }
            }
        }
        catch (err) {
            console.error(err);
        }
        return domains.concat(domainsLevel2);
    }
    getDocumentation(fieldOptions) {
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
        }
        catch (err) {
            console.error(err);
        }
        return "not documented";
    }
    visitClassDeclarationIntro(node) {
        this.classId = node.ymlId().text;
    }
    visitChildren(node) {
        for (let childIndex = 0; childIndex < node.childCount; childIndex++) {
            const currentChild = node.getChild(childIndex);
            this.visit(currentChild);
        }
    }
    visitTerminal(node) { }
    visitErrorNode(node) { }
    visitYmlId(node) { }
    visitYmlIdOrPath(node) {
        this.visitChildren(node);
    }
    visitField(node) { }
}
exports.ClassVisitor = ClassVisitor;
//# sourceMappingURL=ClassVisitor.js.map