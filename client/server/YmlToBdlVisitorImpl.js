"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YmlToBdlParser_1 = require("./YmlToBdlParser");
const ErrorNode_1 = require("antlr4ts/tree/ErrorNode");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const ClassVisitor_1 = require("./ClassVisitor");
class YmlToBdlVisitorImpl {
    constructor(diagnostics, completionItems) {
        this.diagnostics = diagnostics;
        this.completionItems = completionItems;
    }
    visit(node) {
        if (node instanceof ErrorNode_1.ErrorNode) {
            this.visitErrorNode(node);
        }
        else if (node instanceof TerminalNode_1.TerminalNode) {
            this.visitTerminal(node);
        }
        else if (node instanceof YmlToBdlParser_1.YclassFileContext) {
            let classVisitor = new ClassVisitor_1.ClassVisitor(this.diagnostics, this.completionItems);
            classVisitor.visit(node);
        }
        else if (node instanceof YmlToBdlParser_1.ClassDeclarationContext) {
            let classVisitor = new ClassVisitor_1.ClassVisitor(this.diagnostics, this.completionItems);
            classVisitor.visit(node);
        }
        else {
            this.visitChildren(node);
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
}
exports.YmlToBdlVisitorImpl = YmlToBdlVisitorImpl;
//# sourceMappingURL=YmlToBdlVisitorImpl.js.map