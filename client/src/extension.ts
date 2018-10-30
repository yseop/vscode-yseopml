/* --------------------------------------------------------------------------------------------
 * Copyright (c) Yseop. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import * as path from 'path';
import * as fs from 'fs'
import * as vscode from 'vscode';
import { workspace, ExtensionContext } from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient';
import { exec } from "child_process";
import { isNullOrUndefined } from 'util';


const yseopCliOutputChannel = vscode.window.createOutputChannel("Yseop CLI Output");

export function activate(context: ExtensionContext) {
	console.log("Yseop.vscode-yseopml − Activating extension.");
	
	// The server is implemented in node
	let serverModule = context.asAbsolutePath(path.join('server', 'server.js'));
	// The debug options for the server
	let debugOptions = { execArgv: ["--nolazy", "--inspect=6009"] };
	
	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	let serverOptions: ServerOptions = {
		run : { module: serverModule, transport: TransportKind.ipc },
		debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions }
	}
	
	// Options to control the language client
	let clientOptions: LanguageClientOptions = {
		// Register the server for yml documents
		documentSelector: [{scheme: 'file', language: 'yml'}],
		synchronize: {
			// Synchronize the setting section 'yseopml' to the server
			configurationSection: 'yseopml',
			// Notify the server about file changes to '.clientrc files contain in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	}

	let yseopCliPath : string = vscode.workspace.getConfiguration('yseopml').get('pathToYseopCli');

	const batchCmd = vscode.commands.registerCommand('yseopml.batch', () => {
		ExecYseopCliCommand(yseopCliPath, "batch");
	});
	
	const compileCmd = vscode.commands.registerCommand('yseopml.compile', () => {
		ExecYseopCliCommand(yseopCliPath, "compile");
	});
	
	const testCmd = vscode.commands.registerCommand('yseopml.test', () => {
		ExecYseopCliCommand(yseopCliPath, "test");
	});
	
	const cleanCmd = vscode.commands.registerCommand('yseopml.clean', () => {
		ExecYseopCliCommand(yseopCliPath, "clean");
	});
	
	const cleanallCmd = vscode.commands.registerCommand('yseopml.cleanall', () => {
		ExecYseopCliCommand(yseopCliPath, "clean", "--all");
	});
	
	const packageCmd = vscode.commands.registerCommand('yseopml.package', () => {
		ExecYseopCliCommand(yseopCliPath, "package");
	});
	
	const infoCmd = vscode.commands.registerCommand('yseopml.info', () => {
		ExecYseopCliCommand(yseopCliPath, "info");
	});

	// Create the language client and start the client.
	console.log("Yseop.vscode-yseopml − Starting Language Client");
	let disposable = new LanguageClient(
			'yseopml', 'Yseop Markup Language language server',
			serverOptions, clientOptions, true
	).start();

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
		infoCmd
	);
}

/**
 * Execute a command of Yseop CLI using the folder from which VSCode has been opened as the KB directory.
 * @param yseopCliPath The absolute path to Yseop CLI executable.
 * @param commandName The Yseop CLI subcommand to use, like ”batch” or ”test”.
 */
export async function ExecYseopCliCommand(yseopCliPath: string, ...words: string[]) {
	yseopCliOutputChannel.clear();

	const editor = vscode.window.activeTextEditor;
	
	if(isNullOrUndefined(editor)) {
		return;
	}
	if(isNullOrUndefined(yseopCliPath) || yseopCliPath.trim().length == 0) {
		vscode.window.showInformationMessage("Please fill the Yseop CLI path parameter before using this command.");
		return;
	}

	var binary_path = path.resolve(yseopCliPath);
	if(!fs.existsSync(binary_path)) {
		vscode.window.showInformationMessage(`The path to Yseop CLI in your settings doesn't seem to exist.\n“${binary_path}”`);
		return;
	}

	if(isNullOrUndefined(vscode.workspace) || isNullOrUndefined(vscode.workspace.workspaceFolders)) {
		vscode.window.showInformationMessage("This command must be used from within a workspace folder.");
		return;
	}
	
	const workspaceFolders = vscode.workspace.workspaceFolders;
	const kbDirectory = workspaceFolders[0].uri.fsPath;
	
	var commandLine = `"${yseopCliPath}"`;
	words.forEach((oneWord) => {
		commandLine += ` "${oneWord}"`;
	});
	commandLine += ` "${kbDirectory}"`;

	const command = exec(commandLine);

	command.stdout.on('data', (data) => {
		const message = data.toString();
		console.log(message);
		yseopCliOutputChannel.append(message);
	});

	command.stderr.on('data', (data) => {
		const message = data.toString();
		console.error(message);
		yseopCliOutputChannel.append(message);
		vscode.window.showErrorMessage(message);
	});

	command.on('exit', (code) => {
		var message = `Command “${commandLine}” executed successfully.`;
		if(code != 0) {
			message = `Command “${commandLine}” exited with code ${code}`;
		}
		console.log(message);
		vscode.window.showInformationMessage(message);
		yseopCliOutputChannel.show();
	});
}