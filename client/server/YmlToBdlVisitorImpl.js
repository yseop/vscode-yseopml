"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_languageserver_1 = require("vscode-languageserver");
const YmlToBdlParser_1 = require("./YmlToBdlParser");
class YmlToBdlVisitorImpl {
    constructor(diagnostics) {
        this.diagnostics = diagnostics;
    }
    visit(node) {
        console.log(node.text);
        this.visitChildren(node);
    }
    visitChildren(node) {
        for (let i = 0; i < node.childCount; i++) {
            if (node.getChild(i) instanceof YmlToBdlParser_1.FieldValueContext) {
                this.visitFieldValue((node.getChild(i)));
            }
            else if (node.getChild(i) instanceof YmlToBdlParser_1.FieldContext) {
                this.visitField((node.getChild(i)));
            }
            else {
                this.visit(node.getChild(i));
            }
        }
    }
    visitTerminal(node) {
    }
    visitErrorNode(node) {
    }
    visitFieldValue(node) {
    }
    visitField(node) {
        this.diagnostics.push({
            severity: vscode_languageserver_1.DiagnosticSeverity.Warning,
            range: {
                start: { line: node.start.line - 1, character: node.start.charPositionInLine },
                end: { line: node.stop.line - 1, character: node.stop.charPositionInLine + (node.stop.stopIndex - node.stop.startIndex) + 1 }
            },
            message: `"${node.text}" is a field`,
            source: 'ex'
        });
    }
}
exports.YmlToBdlVisitorImpl = YmlToBdlVisitorImpl;
//# sourceMappingURL=YmlToBdlVisitorImpl.js.map