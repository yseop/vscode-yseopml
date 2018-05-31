/* --------------------------------------------------------------------------------------------
 * Copyright (c) Yseop. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_languageserver_1 = require("vscode-languageserver");
const antlr4ts_1 = require("antlr4ts");
const YmlToBdlLexer_1 = require("./YmlToBdlLexer");
const YmlToBdlParser_1 = require("./YmlToBdlParser");
const YmlToBdlVisitorImpl_1 = require("./YmlToBdlVisitorImpl");
let toggle_allowValidation = true;
// Create a connection for the server. The connection uses Node's IPC as a transport
console.log("Yseop.vscode-yseopml − Creating connection with client/server.");
let connection = vscode_languageserver_1.createConnection(new vscode_languageserver_1.IPCMessageReader(process), new vscode_languageserver_1.IPCMessageWriter(process));
let completionItems = [];
// Create a simple text document manager. The text document manager
// supports full document sync only
let documents = new vscode_languageserver_1.TextDocuments();
// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);
// After the server has started the client sends an initialize request. The server receives
// in the passed params the rootPath of the workspace plus the client capabilities.
connection.onInitialize((_params) => {
    console.log("Yseop.vscode-yseopml − Initializing server.");
    return {
        capabilities: {
            // Tell the client that the server works in FULL text document sync mode
            textDocumentSync: documents.syncKind,
            // Tell the client that the server support code complete
            completionProvider: {
                resolveProvider: true
            }
        }
    };
});
// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent((change) => {
    validateTextDocument(change.document);
});
// hold the maxNumberOfProblems setting
let maxNumberOfProblems;
// The settings have changed. Is send on server activation
// as well.
connection.onDidChangeConfiguration((change) => {
    let settings = change.settings;
    maxNumberOfProblems = settings.yseopml.maxNumberOfProblems || 100;
    // Revalidate any open text documents
    documents.all().forEach(validateTextDocument);
});
function validateTextDocument(textDocument) {
    if (toggle_allowValidation) {
        console.log(`Yseop.vscode-yseopml − Validating ${textDocument.uri}`);
        let diagnostics = [];
        let problems = 0;
        // Create the lexer and parser
        let inputStream = new antlr4ts_1.ANTLRInputStream(textDocument.getText());
        let lexer = new YmlToBdlLexer_1.YmlToBdlLexer(inputStream);
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        let parser = new YmlToBdlParser_1.YmlToBdlParser(tokenStream);
        // Parse the input, where `compilationUnit` is whatever entry point you defined
        let result = parser.kaoFile();
        evaluateKaoFile(result, diagnostics);
        // Send the computed diagnostics to VSCode.
        connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
    }
}
function evaluateKaoFile(ctx, diagnostics) {
    let visitor = new YmlToBdlVisitorImpl_1.YmlToBdlVisitorImpl(diagnostics, completionItems);
    visitor.visit(ctx);
}
connection.onDidChangeWatchedFiles((_change) => {
    // Monitored files have change in VSCode
    console.log('Yseop.vscode-yseopml − We received a file change event');
});
// This handler provides the initial list of the completion items.
connection.onCompletion((_textDocumentPosition) => {
    return completionItems;
});
// This handler resolve additional information for the item selected in
// the completion list.
connection.onCompletionResolve((item) => {
    return item;
});
/*
connection.onDidOpenTextDocument((params) => {
    // A text document got opened in VSCode.
    // params.uri uniquely identifies the document. For documents store on disk this is a file URI.
    // params.text the initial full content of the document.
    connection.console.log(`${params.textDocument.uri} opened.`);
});
connection.onDidChangeTextDocument((params) => {
    // The content of a text document did change in VSCode.
    // params.uri uniquely identifies the document.
    // params.contentChanges describe the content changes to the document.
    connection.console.log(`${params.textDocument.uri} changed: ${JSON.stringify(params.contentChanges)}`);
});
connection.onDidCloseTextDocument((params) => {
    // A text document got closed in VSCode.
    // params.uri uniquely identifies the document.
    connection.console.log(`${params.textDocument.uri} closed.`);
});
*/
// Listen on the connection
connection.listen();
//# sourceMappingURL=server.js.map