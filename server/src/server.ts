/* --------------------------------------------------------------------------------------------
 * Copyright (c) Yseop. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { promises as fsPromises } from 'fs-extra';
import * as glob from 'glob-promise';
import * as path from 'path';
import * as url from 'url';
import { DocumentFormattingParams, TextEdit } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import {
    CompletionItem,
    CompletionParams,
    Diagnostic,
    DiagnosticSeverity,
    InitializeResult,
    ServerCapabilities,
    TextDocumentChangeEvent,
    TextDocumentPositionParams,
    TextDocuments,
} from 'vscode-languageserver/node';

import { YmlCompletionItemsProvider } from './completion/YmlCompletionItemsProvider';
import { connection } from './constants';
import { getTokenAtPosInDoc, YmlDefinitionProvider } from './definitions';
import { EngineModel } from './engineModel/EngineModel';
import {
    buildDocumentEditList,
    codeLensRequestHandler,
    completionResolveRequestHandler,
    documentSymbolRequestHandler,
    foldingRangesRequestHandler,
} from './features';
import { YmlLexer, YmlParser } from './grammar';
import { FILE_TYPE_F, FILE_TYPE_M, findKaoFileDependencies, getPredefinedObjectsXmlPath } from './serverUtils';
import {
    DEFAULT_DOC_FORMAT_SETTINGS,
    IYseopmlServerSettings,
    IYseopmlSettings,
    setDocumentFormatDefaultValues,
} from './settings/Settings';
import { YmlKaoFileVisitor, YmlParsingErrorListener } from './visitors';

let engineModel: EngineModel;

/**
 * Map between the string available as option and real `DiagnosticSeverity` enum values.
 */
const diagSeverityMap = new Map<string, DiagnosticSeverity>([
    ['error', DiagnosticSeverity.Error],
    ['warning', DiagnosticSeverity.Warning],
    ['information', DiagnosticSeverity.Information],
    ['hint', DiagnosticSeverity.Hint],
]);

connection.console.log('Yseop.vscode-yseopml − Creating connection with client/server.');

const definitionsProvider: YmlDefinitionProvider = new YmlDefinitionProvider();
const completionProvider: YmlCompletionItemsProvider = new YmlCompletionItemsProvider();

// Create a simple text document manager. The text document manager
// supports full document sync only
const documents = new TextDocuments(TextDocument);

let yseopmlSettings: IYseopmlServerSettings;

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

const serverCapabilities: ServerCapabilities = {
    // Tell the client that the server support code complete
    completionProvider: {
        resolveProvider: true,
        triggerCharacters: ['.', ':'],
    },
    codeLensProvider: {
        resolveProvider: false,
    },
    hoverProvider: true,
    definitionProvider: true,
    documentSymbolProvider: true,
    implementationProvider: true,
    documentFormattingProvider: true,
    foldingRangeProvider: true,
};

const intializeResult: InitializeResult = {
    capabilities: serverCapabilities,
};

// After the server has started the client sends an initialize request. The server receives
// in the passed params the rootPath of the workspace plus the client capabilities.
connection.onInitialize((_params): InitializeResult => {
    connection.console.log('Yseop.vscode-yseopml − Initializing server.');
    return intializeResult;
});

connection.onInitialized((_params) => {
    connection.workspace.getConfiguration('yseopml').then((_value) => {
        // Get the yseopml configuration and save it globally.
        yseopmlSettings = _value as IYseopmlServerSettings;
        yseopmlSettings.documentFormat = setDocumentFormatDefaultValues(yseopmlSettings.documentFormat);
        if (!yseopmlSettings.parseAllProjectFilesAtStartup) {
            connection.console.log('Not parsing every YML file of the project.');
            return;
        }
        parseWholeProject();
    });
});

/**
 * Parse every YML file of the project using kao files as starting points.
 *
 * @note This function is used only at the extension's initialization,
 * but can also be used when updating some settings in the future.
 */
function parseWholeProject(): void {
    connection.console.log('Parsing all the YML files of the project.');
    connection.workspace.getWorkspaceFolders().then((_value) => {
        const workspacePath = url.fileURLToPath(_value[0].uri);
        if (!yseopmlSettings.kaoFiles || yseopmlSettings.kaoFiles.length === 0) {
            parseFromFirstFoundKaoFile(workspacePath);
        } else {
            parseFromKaoFilesList(workspacePath);
        }
        parseAutoExportedFiles(workspacePath);
    });
}

/**
 * Parse the YML files in the workspace starting from the first kao file found.
 *
 * @param workspacePath the root folder path used as workspace
 */
function parseFromFirstFoundKaoFile(workspacePath: string): void {
    glob('**/project.kao', {
        cwd: workspacePath,
    })
        .then((_matches) => {
            for (const filePath of _matches) {
                if (openProjectFile(workspacePath, path.join(workspacePath, filePath))) {
                    // There should be only one `project.kao` file.
                    // If we found a good candidate, stop the loop.
                    return;
                }
            }
        })
        .catch((_error) => console.error(_error));
}

/**
 * Parse the YML files in the workspace starting from user-defined kao files.
 *
 * @param workspacePath the root folder path used as workspace
 */
function parseFromKaoFilesList(workspacePath: string): void {
    for (const filePath of yseopmlSettings.kaoFiles) {
        if (fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory()) {
            const fileUri = path.join(workspacePath, filePath);
            /*
             * What is handled as the workspacePath is the directory containing the kao file itself.
             * For example for library/project.kao, its workspace is WORKSPACE/library/ while for
             * test_project/project.kao, the workspace is WORKSPACE/test_project/.
             */
            openProjectFile(path.dirname(fileUri), fileUri);
        } else {
            connection.console.warn(
                // tslint:disable-next-line: ter-max-len
                `Ignoring file ${filePath} because it is a directory or it doesn't exist in ${workspacePath}.`,
            );
        }
    }
}

/**
 *  Parse all the files that are included automatically by Yseop CLI
 *  (the files with extensions `yclass` or `yobject` or `ycomplete`)
 *  ignoring files from `.generated-yml/`.
 *
 *  @param workspacePath The absolute path to the workspace.
 */
function parseAutoExportedFiles(workspacePath: string): void {
    // Parse all the files with extensions `yclass` or `yobject` or `ycomplete`, ignoring files from `.generated-yml/`.
    glob(`**/*.@(yclass|yobject|ycomplete)`, {
        cwd: workspacePath,
        ignore: '**/.generated-yml/**',
    })
        .then((_matches) => {
            _matches
                // Ignore directories.
                .filter((uri) => !fs.lstatSync(uri).isDirectory())
                .forEach((uri) => {
                    fsPromises
                        .readFile(uri)
                        .then((_doc) => {
                            parseFile(`file://${workspacePath}/${uri}`, _doc.toString());
                        })
                        .catch((_err) => {
                            if (!!_err) {
                                connection.console.error(`${_err}`);
                            } else {
                                connection.console.error(`An unexpected error occured when reading file ${uri}`);
                            }
                        });
                });
        })
        .catch((_error) => connection.console.error(_error));
}

/**
 * Try to open a file with URI `fileUri`.
 * Then, if the file is a `project.kao`-like file (i.e., a list of files used for the project),
 * read and parse its content and apply this function recursively for each line that is an existing file’s URI.
 *
 * @param workspacePath The absolute path to the workspace.
 * @param fileUri An existing file URI.
 *
 * @return `true` only if the provided URI was a `*.kao`-like file, i.e. it starts with `_FILE_TYPE_`.
 */
function openProjectFile(workspacePath: string, fileUri: string): boolean {
    let wasKaoFile = true;
    // Try to open the file. If it is opened, the server will parse it.
    fsPromises
        .readFile(fileUri)
        .then((file) => file.toString())
        .then((fileContent) => {
            parseFile(`file://${fileUri}`, fileContent);
            const isTypeF = fileContent.search(FILE_TYPE_F) !== -1;
            const isTypeM = !isTypeF && fileContent.search(FILE_TYPE_M) !== -1;
            if (!isTypeF && !isTypeM) {
                // We are not in a `project.kao`-like file. Do not go further.
                wasKaoFile = false;
                return;
            }
            findKaoFileDependencies(fileContent, isTypeM, workspacePath, fileUri)
                // Make sure the file exists and drop directories
                .filter((filePath) => fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory())
                .forEach((uri) => openProjectFile(workspacePath, uri));
        })
        .catch((_err) => {
            if (!!_err) {
                connection.console.error(`${_err}`);
                return;
            }
            connection.console.error(`Error while trying to process file ${fileUri} from workspace ${workspacePath}`);
        });
    // The document exists and was successfully opened and should be parsed already.
    return wasKaoFile;
}

connection.onHover((_params) => {
    const doc: TextDocument = documents.get(_params.textDocument.uri);
    const entityName = getTokenAtPosInDoc(doc.getText(), doc.offsetAt(_params.position));
    if (!entityName) {
        return null;
    }
    // Multiple elements can have the same shortName
    let entity = completionProvider.getFirstItemByShortNameMatching(entityName, (elem) => elem.hasDocumentation());
    if (!entity) {
        // Maybe the value of `entityName` is a full label.
        entity = completionProvider.getFirstItemByLabelMatching(entityName, (elem) => elem.hasDocumentation());
        if (!entity) {
            return null;
        }
    }
    return {
        contents: entity.getHoverContent(),
    };
});

const parseTextDocumentOnEvent = (event: TextDocumentChangeEvent<TextDocument>) => parseTextDocument(event.document);
documents.onDidChangeContent(parseTextDocumentOnEvent);
documents.onDidClose((event: TextDocumentChangeEvent<TextDocument>) =>
    // Clearing diagnostic for the closed file to avoid spamming the user.
    connection.sendDiagnostics({ uri: event.document.uri, diagnostics: [] }),
);

// By default, the severity is Information.
export let parsingIssueSeverityLevel: DiagnosticSeverity = DiagnosticSeverity.Information;

// The settings have changed. Is send on server activation as well.
connection.onDidChangeConfiguration((change) => {
    const settings = change.settings as IYseopmlSettings;
    yseopmlSettings = settings.yseopml;
    yseopmlSettings.documentFormat = setDocumentFormatDefaultValues(yseopmlSettings.documentFormat);
    // One of the severity levels possible, or `Information`.
    parsingIssueSeverityLevel =
        diagSeverityMap.get(settings.yseopml.ymlParsingIssueSeverityLevel.toLowerCase()) ||
        DiagnosticSeverity.Information;
    connection.workspace
        .getWorkspaceFolders()
        .then((_value) => {
            return url.fileURLToPath(_value[0].uri);
        })
        .then((workspacePath) => {
            const predefinedObjectsXmlPath = getPredefinedObjectsXmlPath(
                workspacePath,
                yseopmlSettings.pathToPredefinedObjectsXml,
            );

            if (engineModel == null) {
                engineModel = new EngineModel(predefinedObjectsXmlPath, completionProvider, definitionsProvider);
                engineModel.loadPredefinedObjects();
            } else {
                engineModel.reload(predefinedObjectsXmlPath, completionProvider);
            }
            // Revalidate any open text documents
            documents.all().forEach(parseTextDocument);
        });
});

/**
 * Parse a Text Document, as defined by the Language Server Protocol.
 *
 * @param textDocument The text document to parse.
 */
function parseTextDocument(textDocument: TextDocument): void {
    const textDocUri = textDocument.uri;
    const docContent = textDocument.getText();
    parseFile(textDocUri, docContent);
}

/**
 * Parse the content of a YML file and keep a list of potential parsing issues to send to the client.
 *
 * @param textDocUri The document URI.
 * @param docContent The document content.
 */
function parseFile(textDocUri: string, docContent: string) {
    connection.console.log(`Yseop.vscode-yseopml − Parsing ${textDocUri}`);
    const diagnostics: Diagnostic[] = [];
    // Create the lexer and parser
    const inputStream = CharStreams.fromString(docContent, textDocUri);
    const lexer = new YmlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new YmlParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(new YmlParsingErrorListener(diagnostics, parsingIssueSeverityLevel));

    // Parse the input.
    const result = parser.kaoFile();
    // Reset all the document's definitions.
    definitionsProvider.removeDocumentDefinitions(textDocUri);
    // Reset all the document's implementations informations.
    definitionsProvider.removeDocumentImplementations(textDocUri);
    // Reset all the document's completion items.
    completionProvider.removeDocumentCompletionItems(textDocUri);

    const visitor = new YmlKaoFileVisitor(completionProvider, textDocUri, definitionsProvider, null, null, null, diagnostics);
    // Visit the result of the parsing.
    // This fill the completionProvider and the definitionsProvider.
    visitor.visit(result);

    // Send the computed diagnostics to VSCode.
    if (yseopmlSettings.activateParsingProblemsReporting) {
        connection.sendDiagnostics({ uri: textDocUri, diagnostics });
    } else {
        connection.sendDiagnostics({ uri: textDocUri, diagnostics: [] });
    }
}

connection.onDocumentSymbol(documentSymbolRequestHandler(definitionsProvider));

connection.onDefinition((pos: TextDocumentPositionParams) => {
    const doc: TextDocument = documents.get(pos.textDocument.uri);
    const entityName = getTokenAtPosInDoc(doc.getText(), doc.offsetAt(pos.position));
    if (!entityName) {
        return null;
    }
    return definitionsProvider.findDefinitions(entityName);
});

connection.onImplementation((pos: TextDocumentPositionParams) => {
    const doc: TextDocument = documents.get(pos.textDocument.uri);
    const entityName = getTokenAtPosInDoc(doc.getText(), doc.offsetAt(pos.position));
    if (!entityName) {
        return null;
    }
    return definitionsProvider.findImplementations(entityName);
});

// This handler provides the initial list of the completion items.
connection.onCompletion((pos: CompletionParams): CompletionItem[] => {
    const doc: TextDocument = documents.get(pos.textDocument.uri);
    return completionProvider.getAvailableCompletionItems(pos.textDocument.uri, doc.offsetAt(pos.position));
});

connection.onDocumentFormatting(documentFormattingRequestHandler(documents));

// When the event onCompletion occurs, we send to the client a light version of the relevant AbstractYmlObject.
// When this event occurs, we retrieve the full element and send it back to the client.
connection.onCompletionResolve(completionResolveRequestHandler(completionProvider));

connection.onFoldingRanges(foldingRangesRequestHandler(definitionsProvider));

connection.onCodeLens(codeLensRequestHandler(definitionsProvider));

// Listen on the connection
connection.listen();

/**
 * Create a request handler for the event `documentFormatting`.
 * The handler, when receiving a `DocumentFormattingParams` instance will find
 * will parse the current file and build and send the list of Text Edit
 * to apply client-side accordingly to the settings defined in `documentFormatSettings`.
 *
 *
 * @param documents a manager for simple text documents
 * @param documentFormatSettings the document format settings to apply
 */
function documentFormattingRequestHandler(docs: TextDocuments<TextDocument>) {
    return (_params: DocumentFormattingParams): TextEdit[] => {
        const document = docs.get(_params.textDocument.uri);
        return buildDocumentEditList(document, yseopmlSettings?.documentFormat ?? DEFAULT_DOC_FORMAT_SETTINGS);
    };
}
