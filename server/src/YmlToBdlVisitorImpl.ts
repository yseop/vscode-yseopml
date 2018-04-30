import {
	IPCMessageReader, IPCMessageWriter, createConnection, IConnection, TextDocuments, TextDocument,
	Diagnostic, DiagnosticSeverity, InitializeResult, TextDocumentPositionParams, CompletionItem,
	CompletionItemKind
} from 'vscode-languageserver';
import {
    YmlToBdlVisitor,
} from './YmlToBdlVisitor'
import {
	YmlToBdlParser, KaoFileContext, FieldContext, FieldValueContext
} from './YmlToBdlParser';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';

export class YmlToBdlVisitorImpl implements YmlToBdlVisitor<void> {
    constructor(public diagnostics : Diagnostic[]) { }


    visit(node : ParseTree) : void {
        console.log(node.text);
        this.visitChildren(node);
    }

    visitChildren(node : ParseTree) : void {
        for(let i=0; i < node.childCount; i++) {
            if(node.getChild(i) instanceof FieldValueContext) {
                this.visitFieldValue(<FieldValueContext>(node.getChild(i)));
            } else if(node.getChild(i) instanceof FieldContext) {
                this.visitField(<FieldContext>(node.getChild(i)));
            } else {
                this.visit(node.getChild(i));
            }
        } 
    }

    visitTerminal(node : ParseTree) : void {

    }

    visitErrorNode(node : ParseTree) : void {

    }
    visitFieldValue(node: FieldValueContext): void {

    }
    visitField(node: FieldContext) : void {
        // disable diagnostics for now
        /*
        this.diagnostics.push({
            severity: DiagnosticSeverity.Warning,
				range: {
					start: { line: node.start.line - 1, character: node.start.charPositionInLine },
					end: { line: node.stop.line - 1, character: node.stop.charPositionInLine + (node.stop.stopIndex - node.stop.startIndex) + 1 }
				},
				message: `"${node.text}" is a field`,
				source: 'ex'
        })
         */
    }
}