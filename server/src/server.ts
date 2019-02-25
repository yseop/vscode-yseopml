/* --------------------------------------------------------------------------------------------
 * Copyright (c) Yseop. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
"use strict";

import {
  CompletionItem,
  createConnection,
  Diagnostic,
  IConnection,
  InitializeResult,
  IPCMessageReader,
  IPCMessageWriter,
  TextDocument,
  TextDocumentChangeEvent,
  TextDocumentPositionParams,
  TextDocuments,
} from "vscode-languageserver";

import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";

import { YmlParser } from "./grammar/YmlParser";

import { getDocumentLastWord } from "./definitions/DefinitionUtils";
import { YmlDefinitionProvider } from "./definitions/YmlDefinitionProvider";
import { EngineModel } from "./EngineModel";
import { YmlLexer } from "./grammar/YmlLexer";
import YmlKaoFileVisitor from "./visitors/YmlKaoFileVisitor";
import { VsCodeDiagnosticErrorListener } from "./VsCodeDiagnosticErrorListener";

// Create a connection for the server. The connection uses Node's IPC as a transport
export const connection: IConnection = createConnection(
  new IPCMessageReader(process),
  new IPCMessageWriter(process),
);

connection.console.log(
  "Yseop.vscode-yseopml − Creating connection with client/server.",
);

const definitionsProvider: YmlDefinitionProvider = new YmlDefinitionProvider();
const completionItems: CompletionItem[] = [];

// Create a simple text document manager. The text document manager
// supports full document sync only
const documents: TextDocuments = new TextDocuments();

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// After the server has started the client sends an initialize request. The server receives
// in the passed params the rootPath of the workspace plus the client capabilities.
connection.onInitialize(
  (params): InitializeResult => {
    connection.console.log("Yseop.vscode-yseopml − Initializing server.");
    return {
      capabilities: {
        // Tell the client that the server support code complete
        completionProvider: {
          resolveProvider: true,
        },
        definitionProvider: true,
        // Tell the client that the server works in FULL text document sync mode
        textDocumentSync: documents.syncKind,
      },
    };
  },
);

const validateTextDocumentOnEvent = (event: TextDocumentChangeEvent) =>
  validateTextDocument(event.document);
documents.onDidOpen(validateTextDocumentOnEvent);
documents.onDidSave(validateTextDocumentOnEvent);
documents.onDidClose((event: TextDocumentChangeEvent) =>
  // Clearing diagnostic for the closed file to avoid spamming the user.
  connection.sendDiagnostics({ uri: event.document.uri, diagnostics: [] }),
);

// The settings interface describe the server relevant settings part
interface ISettings {
  yseopml: IServerSettings;
}

// These are the example settings we defined in the client's package.json
// file
interface IServerSettings {
  maxNumberOfProblems: number;
  activateParsingProblemsReporting: boolean;
  pathToPredefinedObjectsXml: string;
}

let engineModel: EngineModel;
// hold the maxNumberOfProblems setting
let maxNumberOfProblems: number;
let pathToPredefinedObjectsXml: string;
let activateParsingProblemsReporting: boolean;
// The settings have changed. Is send on server activation
// as well.
connection.onDidChangeConfiguration((change) => {
  const settings = change.settings as ISettings;
  maxNumberOfProblems = settings.yseopml.maxNumberOfProblems || 100;
  activateParsingProblemsReporting =
    settings.yseopml.activateParsingProblemsReporting;
  pathToPredefinedObjectsXml = settings.yseopml.pathToPredefinedObjectsXml;
  if (engineModel == null) {
    engineModel = new EngineModel(pathToPredefinedObjectsXml, completionItems);
  } else {
    engineModel.reload(pathToPredefinedObjectsXml, completionItems);
  }
  // Revalidate any open text documents
  documents.all().forEach(validateTextDocument);
});

function validateTextDocument(textDocument: TextDocument): void {
  connection.console.log(
    `Yseop.vscode-yseopml − Validating ${textDocument.uri}`,
  );

  const diagnostics: Diagnostic[] = [];

  // Create the lexer and parser
  const inputStream = new ANTLRInputStream(textDocument.getText());
  const lexer = new YmlLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new YmlParser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener(new VsCodeDiagnosticErrorListener(diagnostics));

  // Parse the input, where `compilationUnit` is whatever entry point you defined
  const result = parser.kaoFile();
  definitionsProvider.removeDocumentDefinitions(textDocument.uri);

  const visitor = new YmlKaoFileVisitor(
    completionItems,
    textDocument.uri,
    definitionsProvider,
  );
  visitor.visit(result);

  // Send the computed diagnostics to VSCode.
  if (activateParsingProblemsReporting) {
    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
  } else {
    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics: [] });
  }
}

connection.onDefinition((pos: TextDocumentPositionParams) => {
  const doc: TextDocument = documents.get(pos.textDocument.uri);
  const documentContentToPos = doc.getText().substr(0, doc.offsetAt(pos.position));
  const lastWord = getDocumentLastWord(documentContentToPos);
  if (!lastWord) {
    return null;
  }
  return definitionsProvider.findDefinitions(lastWord);
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
  (pos: TextDocumentPositionParams): CompletionItem[] => completionItems,
);

// This handler resolve additional information for the item selected in
// the completion list.
connection.onCompletionResolve((item: CompletionItem): CompletionItem => item);

// Listen on the connection
connection.listen();
