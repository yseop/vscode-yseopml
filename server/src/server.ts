/* --------------------------------------------------------------------------------------------
 * Copyright (c) Yseop. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import {
    CompletionItem,
    CompletionItemKind,
    createConnection,
    Diagnostic,
    DiagnosticSeverity,
    IConnection,
    InitializeResult,
    IPCMessageReader,
    IPCMessageWriter,
    MarkupKind,
    SignatureHelp,
    TextDocument,
    TextDocumentChangeEvent,
    TextDocumentPositionParams,
    TextDocuments,
} from 'vscode-languageserver';

import { YmlCompletionItemsProvider } from './completion/YmlCompletionItemsProvider';
import { getTokenAtPosInDoc, YmlDefinitionProvider } from './definitions';
import { EngineModel } from './engineModel/EngineModel';
import { YmlLexer, YmlParser } from './grammar';
import { SignatureHelpProvider } from './signatureHelp/SignatureHelpProvider';
import { YmlKaoFileVisitor, YmlParsingErrorListener } from './visitors';

/**
 * Map between the string available as option and real `DiagnosticSeverity` enum values.
 */
const diagSeverityMap = new Map<string, DiagnosticSeverity>([
    ['error', DiagnosticSeverity.Error],
    ['warning', DiagnosticSeverity.Warning],
    ['information', DiagnosticSeverity.Information],
    ['hint', DiagnosticSeverity.Hint],
]);

// Create a connection for the server. The connection uses Node's IPC as a transport
export const connection: IConnection = createConnection(new IPCMessageReader(process), new IPCMessageWriter(process));

connection.console.log('Yseop.vscode-yseopml − Creating connection with client/server.');

const definitionsProvider: YmlDefinitionProvider = new YmlDefinitionProvider();
const completionProvider: YmlCompletionItemsProvider = new YmlCompletionItemsProvider();
const signatureHelpProvider: SignatureHelpProvider = new SignatureHelpProvider();

// Create a simple text document manager. The text document manager
// supports full document sync only
const documents: TextDocuments = new TextDocuments();

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// After the server has started the client sends an initialize request. The server receives
// in the passed params the rootPath of the workspace plus the client capabilities.
connection.onInitialize(
    // tslint:disable-next-line: variable-name
    (_params): InitializeResult => {
        connection.console.log('Yseop.vscode-yseopml − Initializing server.');
        return {
            capabilities: {
                // Tell the client that the server support code complete
                completionProvider: {
                    triggerCharacters: ['.', ':'],
                },
                hoverProvider: true,
                definitionProvider: true,
                // Tell the client that the server works in FULL text document sync mode
                textDocumentSync: documents.syncKind,
                signatureHelpProvider: {
                    triggerCharacters: ['('],
                },
            },
        };
    },
);

connection.onHover((_params) => {
    const doc: TextDocument = documents.get(_params.textDocument.uri);
    const entityName = getTokenAtPosInDoc(doc.getText(), doc.offsetAt(_params.position));
    if (!entityName) {
        return null;
    }
    // Multiple elements can have the same shortName
    let entity = completionProvider.getFirstItemByShortNameMatching(entityName, (elem) => !!elem.documentation);
    if (!entity) {
        // Maybe the value of `entityName` is a full label.
        entity = completionProvider.getFirstItemByLabelMatching(entityName, (elem) => !!elem.documentation);
        if (!entity) {
            return null;
        }
    }
    return {
        contents: entity.documentation,
    };
});

const validateTextDocumentOnEvent = (event: TextDocumentChangeEvent) => validateTextDocument(event.document);
documents.onDidChangeContent(validateTextDocumentOnEvent);
documents.onDidClose((event: TextDocumentChangeEvent) =>
    // Clearing diagnostic for the closed file to avoid spamming the user.
    connection.sendDiagnostics({ uri: event.document.uri, diagnostics: [] }),
);

// The settings interface describe the server relevant settings part
interface ISettings {
    yseopml: IServerSettings;
}

// These are the example settings we defined in the client's package.json file
interface IServerSettings {
    activateParsingProblemsReporting: boolean;
    pathToPredefinedObjectsXml: string;
    ymlParsingIssueSeverityLevel: string;
}

let engineModel: EngineModel;
let pathToPredefinedObjectsXml: string;
let activateParsingProblemsReporting: boolean;

// By default, the severity is Information.
export let parsingIssueSeverityLevel: DiagnosticSeverity = DiagnosticSeverity.Information;

// The settings have changed. Is send on server activation as well.
connection.onDidChangeConfiguration((change) => {
    const settings = change.settings as ISettings;
    activateParsingProblemsReporting = settings.yseopml.activateParsingProblemsReporting;
    pathToPredefinedObjectsXml = settings.yseopml.pathToPredefinedObjectsXml;
    // One of the severity levels possible, or `Information`.
    parsingIssueSeverityLevel =
        diagSeverityMap.get(settings.yseopml.ymlParsingIssueSeverityLevel.toLowerCase()) ||
        DiagnosticSeverity.Information;
    if (engineModel == null) {
        engineModel = new EngineModel(pathToPredefinedObjectsXml, completionProvider);
        engineModel.loadPredefinedObjects();
    } else {
        engineModel.reload(pathToPredefinedObjectsXml, completionProvider);
    }
    // Revalidate any open text documents
    documents.all().forEach(validateTextDocument);
});

function validateTextDocument(textDocument: TextDocument): void {
    connection.console.log(`Yseop.vscode-yseopml − Parsing ${textDocument.uri}`);
    const textDocUri = textDocument.uri;
    const diagnostics: Diagnostic[] = [];

    // Create the lexer and parser
    const inputStream = CharStreams.fromString(textDocument.getText());
    const lexer = new YmlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new YmlParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(new YmlParsingErrorListener(diagnostics));

    // Parse the input.
    const result = parser.kaoFile();
    // Reset all the document's definitions.
    definitionsProvider.removeDocumentDefinitions(textDocUri);
    // Reset all the document's completion items.
    completionProvider.removeDocumentCompletionItems(textDocUri);

    const visitor = new YmlKaoFileVisitor(completionProvider, textDocUri, definitionsProvider);
    // Visit the result of the parsing.
    // This fill the completionProvider and the definitionsProvider.
    visitor.visit(result);

    // Send the computed diagnostics to VSCode.
    if (activateParsingProblemsReporting) {
        connection.sendDiagnostics({ uri: textDocUri, diagnostics });
    } else {
        connection.sendDiagnostics({ uri: textDocUri, diagnostics: [] });
    }
}

connection.onDefinition((pos: TextDocumentPositionParams) => {
    const doc: TextDocument = documents.get(pos.textDocument.uri);
    const entityName = getTokenAtPosInDoc(doc.getText(), doc.offsetAt(pos.position));
    if (!entityName) {
        return null;
    }
    return definitionsProvider.findDefinitions(entityName);
});

// This handler provides the initial list of the completion items.
connection.onCompletion((pos: TextDocumentPositionParams): CompletionItem[] => {
    const doc: TextDocument = documents.get(pos.textDocument.uri);
    return completionProvider.getAvailableCompletionItems(pos.textDocument.uri, doc.offsetAt(pos.position));
});

// This handler provides the initial list of the completion items.
connection.onSignatureHelp(
    (_pos: TextDocumentPositionParams): SignatureHelp => {
        const doc: TextDocument = documents.get(_pos.textDocument.uri);
        const functionName = getTokenAtPosInDoc(doc.getText(), doc.offsetAt(_pos.position) - 1);
        const candidates = completionProvider.getAllItemsByLabelMatching(
            functionName,
            (_elem) => _elem.kind === CompletionItemKind.Method || _elem.kind === CompletionItemKind.Function,
        );
        const signatures = signatureHelpProvider.functionsToSignatureHelp(candidates);
        // const doc: TextDocument = documents.get(_pos.textDocument.uri);
        return {
            signatures,
            activeParameter: null,
            activeSignature: null,
        };
    },
);

// Listen on the connection
connection.listen();
