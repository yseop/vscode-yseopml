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
    Uri,
    window,
    workspace,
    WorkspaceConfiguration,
} from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient';

let yseopCliOutputChannel: OutputChannel;
let yseopCliStatusBarItem: StatusBarItem;
let yseopCliPath: string;

const yseopmlSectionName = 'yseopml';
const pathToYseopCliKey = 'pathToYseopCli';

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
        ExecYseopCliCommandWithKbDirectoryPath(yseopCliPath, 'batch');
    });

    const compileCmd = commands.registerCommand(`${yseopmlSectionName}.compile`, () => {
        ExecYseopCliCommandWithKbDirectoryPath(yseopCliPath, 'compile');
    });

    const testCmd = commands.registerCommand(`${yseopmlSectionName}.test`, () => {
        ExecYseopCliCommandWithKbDirectoryPath(yseopCliPath, 'test');
    });

    const cleanCmd = commands.registerCommand(`${yseopmlSectionName}.clean`, () => {
        ExecYseopCliCommandWithKbDirectoryPath(yseopCliPath, 'clean');
    });

    const cleanallCmd = commands.registerCommand(`${yseopmlSectionName}.cleanall`, () => {
        ExecYseopCliCommandWithKbDirectoryPath(yseopCliPath, 'clean', '--all');
    });

    const packageCmd = commands.registerCommand(`${yseopmlSectionName}.package`, () => {
        ExecYseopCliCommandWithKbDirectoryPath(yseopCliPath, 'package');
    });

    const infoCmd = commands.registerCommand(`${yseopmlSectionName}.config`, () => {
        ExecYseopCliCommandWithKbDirectoryPath(yseopCliPath, 'config');
    });

    const libsInstallCmd = commands.registerCommand(`${yseopmlSectionName}.libs`, () => {
        ExecYseopCliCommandWithKbDirectoryPath(yseopCliPath, 'libs', 'install', '-R');
    });

    const deployCmd = commands.registerCommand(`${yseopmlSectionName}.managerDeploy`, (ymaUri: Uri) => {
        window.showInputBox({ prompt: 'Leave this box empty to use the default environment.' }).then((env) => {
            if (!!env && env.length > 0) {
                window.showInformationMessage(`Deploying YMA ${ymaUri.fsPath} with environment “${env}”.`);
            } else {
                window.showInformationMessage(`Deploying YMA ${ymaUri.fsPath} with default environment.`);
            }
            ExecYseopCliCommand(yseopCliPath, 'manager', 'deploy', '-v', '-e', env, ymaUri.fsPath);
        });
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

    context.subscriptions.push(
        disposable,
        batchCmd,
        compileCmd,
        testCmd,
        cleanCmd,
        cleanallCmd,
        packageCmd,
        infoCmd,
        libsInstallCmd,
        deployCmd,
    );
}

/**
 * Read and save the value of some useful configuration attributes.
 *
 * @param yseopmlConfig The workspace's configuration
 */
function readConfig(yseopmlConfig: WorkspaceConfiguration): void {
    yseopCliPath = yseopmlConfig.get(pathToYseopCliKey);
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
async function ExecYseopCliCommandWithKbDirectoryPath(cliPath: string, ...words: string[]) {
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
    ExecYseopCliCommand(cliPath, ...words, workspaceFolders[0].uri.fsPath);
}

/**
 * Execute a command of Yseop CLI.
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

    let commandLine = `"${yseopCliPath}"`;
    words.forEach((oneWord) => {
        commandLine += ` "${oneWord}"`;
    });

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
            window.showInformationMessage(message);
        } else {
            message = `Command “${commandLine}” exited with error status ${code}.`;
            // yellowish color
            yseopCliStatusBarItem.color = '#edd312';
            yseopCliStatusBarItem.text = 'Yseop CLI status $(alert)';
            window.showErrorMessage(message);
        }
        yseopCliStatusBarItem.tooltip = message;
        yseopCliStatusBarItem.show();
        yseopCliOutputChannel.show();
    });
}
