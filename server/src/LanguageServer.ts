import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { promises as fsPromises } from 'fs-extra';
import * as glob from 'glob-promise';
import * as path from 'path';
import * as url from 'url';
import {
    CodeLens,
    CodeLensParams,
    CompletionItem,
    CompletionParams,
    Connection,
    Definition,
    Diagnostic,
    DiagnosticSeverity,
    DocumentFormattingParams,
    DocumentSymbol,
    DocumentSymbolParams,
    FoldingRange,
    FoldingRangeParams,
    Hover,
    HoverParams,
    InitializedParams,
    InitializeParams,
    InitializeResult,
    TextDocumentPositionParams,
} from 'vscode-languageserver';
import { TextDocument, TextEdit } from 'vscode-languageserver-textdocument';

import { YmlCompletionItemsProvider } from './completion/YmlCompletionItemsProvider';
import { getTokenAtPosInDoc, YmlDefinitionProvider } from './definitions';
import { DocumentsManager } from './DocumentsManager';
import { EngineModel } from './engineModel/EngineModel';
import { buildDocumentEditList, buildDocumentSymbolsList } from './features';
import { YmlLexer, YmlParser } from './grammar';
import { ILogger } from './loggers/ILogger';
import { ILspClient } from './lspClient';
import { FILE_TYPE_F, FILE_TYPE_M, findKaoFileDependencies, getPredefinedObjectsXmlPath } from './serverUtils';
import { IYseopmlServerSettings, IYseopmlSettings, setDocumentFormatDefaultValues } from './settings/Settings';
import { YmlKaoFileVisitor, YmlParsingErrorListener } from './visitors';
import { AbstractYmlObject, YmlFunction } from './yml-objects';

/**
 * Map between the string available as option and real `DiagnosticSeverity` enum values.
 */
const diagSeverityMap = new Map<string, DiagnosticSeverity>([
    ['error', DiagnosticSeverity.Error],
    ['warning', DiagnosticSeverity.Warning],
    ['information', DiagnosticSeverity.Information],
    ['hint', DiagnosticSeverity.Hint],
]);

export class YmlLanguageServer {
    private yseopmlSettings: IYseopmlServerSettings;
    private readonly definitionsProvider: YmlDefinitionProvider = new YmlDefinitionProvider();
    private readonly completionProvider: YmlCompletionItemsProvider = new YmlCompletionItemsProvider();
    // By default, the severity is Information.
    private parsingIssueSeverityLevel: DiagnosticSeverity = DiagnosticSeverity.Information;
    private engineModel: EngineModel;
    private documents: DocumentsManager;

    constructor(
        private readonly logger: ILogger,
        private readonly lspClient: ILspClient,
        private readonly connection: Connection,
    ) {}

    public initialize(_params: InitializeParams): InitializeResult {
        this.logger.log('Yseop.vscode-yseopml − Initializing server.');
        this.documents = new DocumentsManager(this.connection, this, this.logger);
        return {
            capabilities: {
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
            },
        };
    }

    public initialized(_params: InitializedParams): void {
        this.lspClient.getConfiguration('yseopml').then((_value) => {
            // Get the yseopml configuration and save it globally.
            this.yseopmlSettings = _value as IYseopmlServerSettings;
            this.yseopmlSettings.documentFormat = setDocumentFormatDefaultValues(this.yseopmlSettings.documentFormat);
            // One of the severity levels possible, or `Information`.
            this.parsingIssueSeverityLevel =
                diagSeverityMap.get(this.yseopmlSettings.ymlParsingIssueSeverityLevel.toLowerCase()) ||
                DiagnosticSeverity.Information;
            if (!this.yseopmlSettings.parseAllProjectFilesAtStartup) {
                this.logger.log('Not parsing every YML file of the project.');
                return;
            }
            this.parseWholeProject();
        });
    }
    /**
     * Parse every YML file of the project using kao files as starting points.
     *
     * @note This function is used only at the extension's initialization,
     * but can also be used when updating some settings in the future.
     */
    private parseWholeProject(): void {
        this.logger.log('Parsing all the YML files of the project.');
        this.lspClient.getWorkspaceFolders().then((_value) => {
            const workspacePath = url.fileURLToPath(_value[0].uri);
            if (!this.yseopmlSettings.kaoFiles || this.yseopmlSettings.kaoFiles.length === 0) {
                this.parseFromFirstFoundKaoFile(workspacePath);
            } else {
                this.parseFromKaoFilesList(workspacePath);
            }
            this.parseAutoExportedFiles(workspacePath);
        });
    }

    /**
     * Parse the YML files in the workspace starting from the first kao file found.
     *
     * @param workspacePath the root folder path used as workspace
     */
    private parseFromFirstFoundKaoFile(workspacePath: string): void {
        glob('**/project.kao', {
            cwd: workspacePath,
        })
            .then((_matches) => {
                for (const filePath of _matches) {
                    if (this.openProjectFile(workspacePath, path.join(workspacePath, filePath))) {
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
    private parseFromKaoFilesList(workspacePath: string): void {
        for (const filePath of this.yseopmlSettings.kaoFiles) {
            if (fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory()) {
                const fileUri = path.join(workspacePath, filePath);
                /*
                 * What is handled as the workspacePath is the directory containing the kao file itself.
                 * For example for library/project.kao, its workspace is WORKSPACE/library/ while for
                 * test_project/project.kao, the workspace is WORKSPACE/test_project/.
                 */
                this.openProjectFile(path.dirname(fileUri), fileUri);
            } else {
                this.logger.warn(
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
    private parseAutoExportedFiles(workspacePath: string): void {
        // Parse all the files with extensions `yclass` or `yobject` or `ycomplete`,
        // ignoring files from `.generated-yml/`.
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
                                this.parseFile(`file://${workspacePath}/${uri}`, _doc.toString());
                            })
                            .catch((_err) => {
                                if (!!_err) {
                                    this.logger.error(`${_err}`);
                                } else {
                                    this.logger.error(`An unexpected error occured when reading file ${uri}`);
                                }
                            });
                    });
            })
            .catch((_error) => this.logger.error(_error));
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
    private openProjectFile(workspacePath: string, fileUri: string): boolean {
        let wasKaoFile = true;
        // Try to open the file. If it is opened, the server will parse it.
        fsPromises
            .readFile(fileUri)
            .then((file) => file.toString())
            .then((fileContent) => {
                this.parseFile(`file://${fileUri}`, fileContent);
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
                    .forEach((uri) => this.openProjectFile(workspacePath, uri));
            })
            .catch((_err) => {
                if (!!_err) {
                    this.logger.error(`${_err}`);
                    return;
                }
                this.logger.error(`Error while trying to process file ${fileUri} from workspace ${workspacePath}`);
            });
        // The document exists and was successfully opened and should be parsed already.
        return wasKaoFile;
    }

    /**
     * Parse a Text Document, as defined by the Language Server Protocol.
     *
     * @param textDocument The text document to parse.
     */
    public parseTextDocument(textDocument: TextDocument): void {
        const textDocUri = textDocument.uri;
        const docContent = textDocument.getText();
        this.parseFile(textDocUri, docContent);
    }

    /**
     * Parse the content of a YML file and keep a list of potential parsing issues to send to the client.
     *
     * @param textDocUri The document URI.
     * @param docContent The document content.
     */
    private parseFile(textDocUri: string, docContent: string, diagnostics: Diagnostic[] = []) {
        this.logger.log(`Yseop.vscode-yseopml − Parsing ${textDocUri}`);
        // Create the lexer and parser
        const inputStream = CharStreams.fromString(docContent, textDocUri);
        const lexer = new YmlLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new YmlParser(tokenStream);
        parser.removeErrorListeners();
        parser.addErrorListener(new YmlParsingErrorListener(diagnostics, this.parsingIssueSeverityLevel));

        // Parse the input.
        const result = parser.kaoFile();
        // Reset all the document's definitions.
        this.definitionsProvider.removeDocumentDefinitions(textDocUri);
        // Reset all the document's implementations informations.
        this.definitionsProvider.removeDocumentImplementations(textDocUri);
        // Reset all the document's completion items.
        this.completionProvider.removeDocumentCompletionItems(textDocUri);

        const visitor = new YmlKaoFileVisitor(this.completionProvider, textDocUri, this.definitionsProvider);
        // Visit the result of the parsing.
        // This fill the completionProvider and the definitionsProvider.
        visitor.visit(result);

        // Send the computed diagnostics to VSCode.
        if (this.yseopmlSettings.activateParsingProblemsReporting) {
            this.lspClient.publishDiagnostics({ uri: textDocUri, diagnostics });
        } else {
            this.lspClient.publishDiagnostics({ uri: textDocUri, diagnostics: [] });
        }
    }

    public async hover(_params: HoverParams): Promise<Hover> {
        const doc: TextDocument = this.documents.get(_params.textDocument.uri);
        const entityName = getTokenAtPosInDoc(doc.getText(), doc.offsetAt(_params.position));
        if (!entityName) {
            return null;
        }
        // Multiple elements can have the same shortName
        let entity = this.completionProvider.getFirstItemByShortNameMatching(entityName, (elem) =>
            elem.hasDocumentation(),
        );
        if (!entity) {
            // Maybe the value of `entityName` is a full label.
            entity = this.completionProvider.getFirstItemByLabelMatching(entityName, (elem) => elem.hasDocumentation());
            if (!entity) {
                return null;
            }
        }
        return {
            contents: entity.getHoverContent(),
        };
    }

    public async definition(pos: TextDocumentPositionParams): Promise<Definition> {
        const doc: TextDocument = this.documents.get(pos.textDocument.uri);
        const entityName = getTokenAtPosInDoc(doc.getText(), doc.offsetAt(pos.position));
        if (!entityName) {
            return null;
        }
        return this.definitionsProvider.findDefinitions(entityName);
    }

    public async implementation(pos: TextDocumentPositionParams): Promise<Definition> {
        const doc: TextDocument = this.documents.get(pos.textDocument.uri);
        const entityName = getTokenAtPosInDoc(doc.getText(), doc.offsetAt(pos.position));
        if (!entityName) {
            return null;
        }
        return this.definitionsProvider.findImplementations(entityName);
    }

    public async didChangeConfiguration(change) {
        const settings = change.settings as IYseopmlSettings;
        this.yseopmlSettings = settings.yseopml;
        this.yseopmlSettings.documentFormat = setDocumentFormatDefaultValues(this.yseopmlSettings.documentFormat);
        // One of the severity levels possible, or `Information`.
        this.parsingIssueSeverityLevel =
            diagSeverityMap.get(settings.yseopml.ymlParsingIssueSeverityLevel.toLowerCase()) ||
            DiagnosticSeverity.Information;
        this.lspClient
            .getWorkspaceFolders()
            .then((_value) => {
                return url.fileURLToPath(_value[0].uri);
            })
            .then((workspacePath) => {
                const predefinedObjectsXmlPath = getPredefinedObjectsXmlPath(
                    workspacePath,
                    this.yseopmlSettings.pathToPredefinedObjectsXml,
                );

                if (this.engineModel == null) {
                    this.engineModel = new EngineModel(
                        predefinedObjectsXmlPath,
                        this.completionProvider,
                        this.definitionsProvider,
                    );
                    this.engineModel.loadPredefinedObjects();
                } else {
                    this.engineModel.reload(predefinedObjectsXmlPath, this.completionProvider);
                }
                // Revalidate any open text documents
                this.documents.all().forEach(this.parseTextDocument);
            });
    }

    public async completion(pos: CompletionParams): Promise<CompletionItem[]> {
        const doc: TextDocument = this.documents.get(pos.textDocument.uri);
        return this.completionProvider.getAvailableCompletionItems(pos.textDocument.uri, doc.offsetAt(pos.position));
    }

    // When the event onCompletion occurs, we send to the client a light version of the relevant AbstractYmlObject.
    // When this event occurs, we retrieve the full element and send it back to the client.
    public async completionResolve(item: CompletionItem): Promise<CompletionItem> {
        const candidate = this.completionProvider.completions.find((elem) => elem.data === item.data);
        if (!candidate) {
            return item;
        }
        // Set the details and documentation of `item` according to those of the full AbstractYmlObject.
        // We don't directly return the full object to avoid sending to the client too much unneeded information
        // and to avoid performance issues.
        item.detail = candidate.detail;
        item.documentation = candidate.documentation;
        return item;
    }
    public async codeLens(_params: CodeLensParams): Promise<CodeLens[]> {
        return this.definitionsProvider
            .filterImplementations((elem) => elem instanceof YmlFunction && elem.uri === _params.textDocument.uri)
            .map((func: YmlFunction) => {
                const lens = CodeLens.create(func.definitionLocation.range);
                lens.command = {
                    // Add a heart symbol when the complexity is equal to or below 20.
                    title: `${
                        func.getCognitiveComplexity() <= 20 ? '$(heart) ' : ''
                    } Cognitive complexity is ${func.getCognitiveComplexity()}.`,
                    command: null,
                };
                return lens;
            });
    }

    public async foldingRanges(_params: FoldingRangeParams): Promise<FoldingRange[]> {
        const currentFileFunctionsAndInstances: AbstractYmlObject[] = [];
        const shouldBeSelected = (elem: AbstractYmlObject) => {
            // Returns true if the provided element has the same uri as the opened file and is not already selected.
            return elem.uri === _params.textDocument.uri && !currentFileFunctionsAndInstances.includes(elem);
        };
        // Get the elements having a definition in this file.
        currentFileFunctionsAndInstances.push(...this.definitionsProvider.filterDefinitions(shouldBeSelected));
        // Also get the elements having an implementation in this file.
        currentFileFunctionsAndInstances.push(...this.definitionsProvider.filterImplementations(shouldBeSelected));
        const foldingRanges: FoldingRange[] = [];
        for (const ymlObject of currentFileFunctionsAndInstances) {
            const start = ymlObject.definitionLocation.range.start.line;
            const end = ymlObject.definitionLocation.range.end.line;
            foldingRanges.push({
                startLine: start,
                endLine: end - 1,
            });
            foldingRanges.push(...ymlObject.foldingRanges);
        }
        return foldingRanges;
    }

    public async documentSymbol(_params: DocumentSymbolParams): Promise<DocumentSymbol[]> {
        return buildDocumentSymbolsList(_params.textDocument.uri, this.definitionsProvider);
    }

    public async documentFormatting(_params: DocumentFormattingParams): Promise<TextEdit[]> {
        const document = this.documents.get(_params.textDocument.uri);
        return buildDocumentEditList(document, this.yseopmlSettings?.documentFormat);
    }
}
