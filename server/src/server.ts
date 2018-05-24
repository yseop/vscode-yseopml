/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import {
	IPCMessageReader, IPCMessageWriter, createConnection, IConnection, TextDocuments, TextDocument,
	Diagnostic, DiagnosticSeverity, InitializeResult, TextDocumentPositionParams, CompletionItem,
	CompletionItemKind
} from 'vscode-languageserver';

import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import {
	YmlToBdlLexer
} from './YmlToBdlLexer';

import {
	YmlToBdlParser, KaoFileContext
} from './YmlToBdlParser';

import {
	YmlToBdlVisitorImpl
} from './YmlToBdlVisitorImpl';


let toggle_allowValidation : Boolean = true;

// Create a connection for the server. The connection uses Node's IPC as a transport
console.log("Yseop.vscode-yseopml − Creating connection with client/server.");

let connection: IConnection = createConnection(new IPCMessageReader(process), new IPCMessageWriter(process));
let completionItems: CompletionItem[] = [];
// Create a simple text document manager. The text document manager
// supports full document sync only
let documents: TextDocuments = new TextDocuments();
// Make the text document manager listen on the connection
// for open, change and close text document events

documents.listen(connection);

// After the server has started the client sends an initialize request. The server receives
// in the passed params the rootPath of the workspace plus the client capabilities.
connection.onInitialize((_params): InitializeResult => {
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
	}
});


// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent((change) => {
	validateTextDocument(change.document);
});

// The settings interface describe the server relevant settings part
interface Settings {
	yseopml: ServerSettings;
}

// These are the example settings we defined in the client's package.json
// file
interface ServerSettings {
	maxNumberOfProblems: number;
}

// hold the maxNumberOfProblems setting
let maxNumberOfProblems: number;
// The settings have changed. Is send on server activation
// as well.
connection.onDidChangeConfiguration((change) => {
	let settings = <Settings>change.settings;
	maxNumberOfProblems = settings.yseopml.maxNumberOfProblems || 100;
	// Revalidate any open text documents
	documents.all().forEach(validateTextDocument);
});

function validateTextDocument(textDocument: TextDocument): void {
	if(toggle_allowValidation) {
		console.log(`Yseop.vscode-yseopml − Validating ${textDocument.uri}`);
		
		let diagnostics: Diagnostic[] = [];
		
		let problems = 0;
		// Create the lexer and parser
		let inputStream = new ANTLRInputStream(textDocument.getText());
		let lexer = new YmlToBdlLexer(inputStream);
		let tokenStream = new CommonTokenStream(lexer);
		let parser = new YmlToBdlParser(tokenStream);
			
		// Parse the input, where `compilationUnit` is whatever entry point you defined
		let result = parser.kaoFile();

		evaluateKaoFile(result, diagnostics);
		// Send the computed diagnostics to VSCode.
		connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
	}
}

function evaluateKaoFile(ctx: KaoFileContext, diagnostics: Diagnostic[]): void {
	let visitor = new YmlToBdlVisitorImpl(diagnostics, completionItems);
	visitor.visit(ctx);

}


connection.onDidChangeWatchedFiles((_change) => {
	// Monitored files have change in VSCode
	console.log('Yseop.vscode-yseopml − We received a file change event');
});


// This handler provides the initial list of the completion items.
connection.onCompletion((_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
	return completionItems;
});

// This handler resolve additional information for the item selected in
// the completion list.
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
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
