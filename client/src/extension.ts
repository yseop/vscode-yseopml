/* --------------------------------------------------------------------------------------------
 * Copyright (c) Yseop. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';
import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import {
    commands,
    ExtensionContext,
    OutputChannel,
    StatusBarAlignment,
    StatusBarItem,
    TextDocument,
    Uri,
    window,
    workspace,
    WorkspaceConfiguration,
} from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient';

let yseopCliOutputChannel: OutputChannel;
let yseopCliStatusBarItem: StatusBarItem;
let yseopCliPath: string;
let parseAllProjectFilesAtStartup: boolean;

const yseopmlSectionName = 'yseopml';
const pathToYseopCliKey = 'pathToYseopCli';
const parseWholeProjectKey = 'parseAllProjectFilesAtStartup';

export function activate(context: ExtensionContext) {
    yseopCliOutputChannel = window.createOutputChannel('Yseop CLI Output');
    yseopCliStatusBarItem = window.createStatusBarItem(StatusBarAlignment.Right);

    // The server is implemented in node
    const serverModule = context.asAbsolutePath(path.join('server', 'out', 'server.js'));
    // The debug options for the server
    const debugOptions = { execArgv: ['--nolazy', '--inspect=6010'] };

    // If the extension is launched in debug mode then the debug server options are used
    // Otherwise the run options are used
    const serverOptions: ServerOptions = {
        debug: {
            module: serverModule,
            options: debugOptions,
            transport: TransportKind.ipc,
        },
        run: { module: serverModule, transport: TransportKind.ipc },
    };

    // Options to control the language client
    const clientOptions: LanguageClientOptions = {
        // Register the server for yml documents
        documentSelector: [{ scheme: 'file', language: 'yml' }],
        synchronize: {
            // Synchronize the setting section 'yseopml' to the server
            configurationSection: yseopmlSectionName,
            // Notify the server about file changes to '.clientrc files contain in the workspace
            fileEvents: workspace.createFileSystemWatcher('**/.clientrc'),
        },
    };

    const yseopmlConfig: WorkspaceConfiguration = workspace.getConfiguration(yseopmlSectionName);

    readConfig(yseopmlConfig);

    workspace.onDidChangeConfiguration(() => {
        readConfig(yseopmlConfig);
    });

    const batchCmd = commands.registerCommand(`${yseopmlSectionName}.batch`, () => {
        ExecYseopCliCommand(yseopCliPath, 'batch');
    });

    const compileCmd = commands.registerCommand(`${yseopmlSectionName}.compile`, () => {
        ExecYseopCliCommand(yseopCliPath, 'compile');
    });

    const testCmd = commands.registerCommand(`${yseopmlSectionName}.test`, () => {
        ExecYseopCliCommand(yseopCliPath, 'test');
    });

    const cleanCmd = commands.registerCommand(`${yseopmlSectionName}.clean`, () => {
        ExecYseopCliCommand(yseopCliPath, 'clean');
    });

    const cleanallCmd = commands.registerCommand(`${yseopmlSectionName}.cleanall`, () => {
        ExecYseopCliCommand(yseopCliPath, 'clean', '--all');
    });

    const packageCmd = commands.registerCommand(`${yseopmlSectionName}.package`, () => {
        ExecYseopCliCommand(yseopCliPath, 'package');
    });

    const infoCmd = commands.registerCommand(`${yseopmlSectionName}.info`, () => {
        ExecYseopCliCommand(yseopCliPath, 'info');
    });

    // Create the language client.
    const languageClient = new LanguageClient(
        'yseopml',
        'Yseop Markup Language language server',
        serverOptions,
        clientOptions,
        true,
    );
    // Start the language client.
    const disposable = languageClient.start();

    // Push the disposable to the context's subscriptions so that the
    // client can be deactivated on extension deactivation.
    // Also register the custom commands.

    context.subscriptions.push(disposable, batchCmd, compileCmd, testCmd, cleanCmd, cleanallCmd, packageCmd, infoCmd);

    if (!parseAllProjectFilesAtStartup) {
        // nothing more to do
        return;
    }

    // First check recursively all the files set in `project.kao`-like files, starting with `project.kao`.
    workspace.findFiles(`**/project.kao`).then((uris) => {
        uris.forEach((uri) => {
            openProjectFile(uri);
            // There should be only one `project.kao` file.
            return;
        });
    });

    /*
     * List of all the yseopml file extensions known by this extension as set in `client/package.json`
     * but never explictly set in project.kao-like files.
     */
    const yseopmlExtensions = ['yclass', 'yobject', 'ycomplete'];
    for (const extension of yseopmlExtensions) {
        parseFilesWithExtension(extension);
    }
}

/**
 * Try to open a file with URI `fileUri`.
 * Then, if the file is a `project.kao`-like file (i.e. is a list files used for the project),
 * read its content and apply this function recursivly for each line that are existing file's URI.
 *
 * @param fileUri An existing file URI.
 */
function openProjectFile(fileUri: Uri): void {
    // Try to open the file. If it is opened, the server will parse it.
    workspace.openTextDocument(fileUri).then(
        // The document exists and was successfully opened and should be parsed already.
        (doc) => {
            console.debug(`Parsing ${fileUri}.`);
            const lines = doc.getText().split('\n');
            if (lines.length === 0 || !lines[0].trim().startsWith('_FILE_TYPE_')) {
                // We are not in a `project.kao`-like file. Do not go further.
                return;
            }
            lines.forEach((line) => {
                // line can be indented in the file.
                line = line.trim();

                /*
                 * Ignore:
                 * - any empty line
                 * - lines that are just preprocessing or Yseop Engine instruction
                 * - every file from .generated-yml/ directory
                 */
                if (
                    line.length === 0 ||
                    line.indexOf('@') >= 0 ||
                    line.indexOf('_FILE_TYPE_') >= 0 ||
                    line.indexOf('.generated-yml') >= 0
                ) {
                    return;
                }
                const maybeFilePath = path.join(path.dirname(doc.uri.fsPath), line);
                if (!fs.existsSync(maybeFilePath)) {
                    // File doesn't exist. Go to the next line.
                    return;
                }
                // We are parsing file URIs.
                const maybeFilePathAsUri = Uri.parse(`file://${maybeFilePath}`);
                openProjectFile(maybeFilePathAsUri);
            });
        },
        (error) => {
            if (error) {
                console.error(error);
            } else {
                console.error(`Unexpected error when opening ${fileUri}.`);
            }
        },
    );
}

/**
 * Read and save the value of some useful configuration attributes.
 *
 * @param yseopmlConfig The workspace's configuration
 */
function readConfig(yseopmlConfig: WorkspaceConfiguration): void {
    yseopCliPath = yseopmlConfig.get(pathToYseopCliKey);
    parseAllProjectFilesAtStartup = yseopmlConfig.get(parseWholeProjectKey);
}

/**
 * Find all the files in the workspace that have the extension `extension`
 * and open them as `TextDocument` objects. This will result in a parsing request for
 * these files and have it known by the extension.
 * This function excludes the results from `.generated-yml/`.
 *
 * @param extension The extension of the files to look for
 */
function parseFilesWithExtension(extension: string): void {
    workspace.findFiles(`**/*.${extension}`, '**/.generated-yml/**').then((uris) => {
        if (!uris) {
            return;
        }
        uris.forEach((uri) => {
            console.debug(`Parsing ${uri}.`);
            workspace.openTextDocument(uri);
        });
    });
}

function updateSettings(response: string): void {
    // tslint:disable-next-line: no-duplicate-string
    if (response === 'Update Settings') {
        commands.executeCommand('workbench.action.openSettings');
    }
}

/**
 * Execute a command of Yseop CLI using the folder from which VSCode has been opened as the KB directory.
 * @param cliPath The absolute path to Yseop CLI executable.
 * @param words Words to append to the command. The first one will typically be an Yseop CLI subcommand.
 */
export async function ExecYseopCliCommand(cliPath: string, ...words: string[]) {
    yseopCliOutputChannel.clear();
    yseopCliStatusBarItem.hide();

    const editor = window.activeTextEditor;

    if (editor === null || editor === undefined) {
        return;
    }
    if (cliPath === null || cliPath === undefined || cliPath.trim().length === 0) {
        const thenable = window.showInformationMessage(
            'Please fill the Yseop CLI path parameter before using this command.',
            'Update Settings',
        );
        thenable.then(updateSettings);
        return;
    }

    const binaryPath = path.resolve(cliPath);
    if (!fs.existsSync(binaryPath)) {
        const thenable = window.showInformationMessage(
            `The path to Yseop CLI in your settings doesn't seem to exist.\n“${binaryPath}”`,
            'Update Settings',
        );
        thenable.then(updateSettings);
        return;
    }

    if (
        workspace === null ||
        workspace === undefined ||
        workspace.workspaceFolders === null ||
        workspace.workspaceFolders === undefined
    ) {
        window.showErrorMessage('This command must be used from within a workspace folder.');
        return;
    }

    const workspaceFolders = workspace.workspaceFolders;
    const kbDirectory = workspaceFolders[0].uri.fsPath;

    let commandLine = `"${yseopCliPath}"`;
    words.forEach((oneWord) => {
        commandLine += ` "${oneWord}"`;
    });
    commandLine += ` "${kbDirectory}"`;

    const command = exec(commandLine);

    command.stdout.on('data', (data) => {
        const message = data.toString();
        yseopCliOutputChannel.append(message);
    });

    command.stderr.on('data', (data) => {
        const message = data.toString();
        window.showErrorMessage(message);
        yseopCliOutputChannel.append(message);
    });

    command.on('exit', (code) => {
        let message;
        if (code === 0) {
            message = `Command “${commandLine}” executed successfully.`;
            // greenish color
            yseopCliStatusBarItem.color = '#73c456';
            yseopCliStatusBarItem.text = 'Yseop CLI status $(check)';
        } else {
            message = `Command “${commandLine}” exited with error status ${code}.`;
            // yellowish color
            yseopCliStatusBarItem.color = '#edd312';
            yseopCliStatusBarItem.text = 'Yseop CLI status $(alert)';
        }
        yseopCliStatusBarItem.tooltip = message;
        yseopCliStatusBarItem.show();
        yseopCliOutputChannel.show();
    });
}
