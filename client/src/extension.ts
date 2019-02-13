/* --------------------------------------------------------------------------------------------
 * Copyright (c) Yseop. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
"use strict";

import { exec } from "child_process";
import * as fs from "fs";
import * as path from "path";
import { isNullOrUndefined } from "util";
import * as vscode from "vscode";
import { ExtensionContext, workspace } from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient";

let yseopCliOutputChannel: vscode.OutputChannel;
let yseopCliStatusBarItem: vscode.StatusBarItem;
let yseopCliPath: string;

export function activate(context: ExtensionContext) {
  yseopCliOutputChannel = vscode.window.createOutputChannel("Yseop CLI Output");
  yseopCliStatusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
  );

  // The server is implemented in node
  const serverModule = context.asAbsolutePath(path.join("server", "server.js"));
  // The debug options for the server
  const debugOptions = { execArgv: ["--nolazy", "--inspect=6009"] };

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
    documentSelector: [{ scheme: "file", language: "yml" }],
    synchronize: {
      // Synchronize the setting section 'yseopml' to the server
      configurationSection: "yseopml",
      // Notify the server about file changes to '.clientrc files contain in the workspace
      fileEvents: workspace.createFileSystemWatcher("**/.clientrc"),
    },
  };

  yseopCliPath = vscode.workspace
    .getConfiguration("yseopml")
    .get("pathToYseopCli");

  vscode.workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration("yseopml.pathToYseopCli")) {
      yseopCliPath = vscode.workspace
        .getConfiguration("yseopml")
        .get("pathToYseopCli");
    }
  });

  const batchCmd = vscode.commands.registerCommand("yseopml.batch", () => {
    ExecYseopCliCommand(yseopCliPath, "batch");
  });

  const compileCmd = vscode.commands.registerCommand("yseopml.compile", () => {
    ExecYseopCliCommand(yseopCliPath, "compile");
  });

  const testCmd = vscode.commands.registerCommand("yseopml.test", () => {
    ExecYseopCliCommand(yseopCliPath, "test");
  });

  const cleanCmd = vscode.commands.registerCommand("yseopml.clean", () => {
    ExecYseopCliCommand(yseopCliPath, "clean");
  });

  const cleanallCmd = vscode.commands.registerCommand(
    "yseopml.cleanall",
    () => {
      ExecYseopCliCommand(yseopCliPath, "clean", "--all");
    },
  );

  const packageCmd = vscode.commands.registerCommand("yseopml.package", () => {
    ExecYseopCliCommand(yseopCliPath, "package");
  });

  const infoCmd = vscode.commands.registerCommand("yseopml.info", () => {
    ExecYseopCliCommand(yseopCliPath, "info");
  });

  // Create the language client and start the client.
  const disposable = new LanguageClient(
    "yseopml",
    "Yseop Markup Language language server",
    serverOptions,
    clientOptions,
    true,
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
    infoCmd,
  );
}

function updateSettings(response: string): void {
  if (response === "Update Settings") {
    vscode.commands.executeCommand("workbench.action.openSettings");
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

  const editor = vscode.window.activeTextEditor;

  if (isNullOrUndefined(editor)) {
    return;
  }
  if (isNullOrUndefined(cliPath) || cliPath.trim().length === 0) {
    const thenable = vscode.window.showInformationMessage(
      "Please fill the Yseop CLI path parameter before using this command.",
      "Update Settings",
    );
    thenable.then(updateSettings);
    return;
  }

  const binaryPath = path.resolve(cliPath);
  if (!fs.existsSync(binaryPath)) {
    const thenable = vscode.window.showInformationMessage(
      `The path to Yseop CLI in your settings doesn't seem to exist.\n“${binaryPath}”`,
      "Update Settings",
    );
    thenable.then(updateSettings);
    return;
  }

  if (
    isNullOrUndefined(vscode.workspace) ||
    isNullOrUndefined(vscode.workspace.workspaceFolders)
  ) {
    vscode.window.showErrorMessage(
      "This command must be used from within a workspace folder.",
    );
    return;
  }

  const workspaceFolders = vscode.workspace.workspaceFolders;
  const kbDirectory = workspaceFolders[0].uri.fsPath;

  let commandLine = `"${yseopCliPath}"`;
  words.forEach((oneWord) => {
    commandLine += ` "${oneWord}"`;
  });
  commandLine += ` "${kbDirectory}"`;

  const command = exec(commandLine);

  command.stdout.on("data", (data) => {
    const message = data.toString();
    yseopCliOutputChannel.append(message);
  });

  command.stderr.on("data", (data) => {
    const message = data.toString();
    vscode.window.showErrorMessage(message);
    yseopCliOutputChannel.append(message);
  });

  command.on("exit", (code) => {
    let message;
    if (code === 0) {
      message = `Command “${commandLine}” executed successfully.`;
      // greenish color
      yseopCliStatusBarItem.color = "#73c456";
      yseopCliStatusBarItem.text = "Yseop CLI status $(check)";
    } else {
      message = `Command “${commandLine}” exited with error status ${code}.`;
      // yellowish color
      yseopCliStatusBarItem.color = "#edd312";
      yseopCliStatusBarItem.text = "Yseop CLI status $(alert)";
    }
    yseopCliStatusBarItem.tooltip = message;
    yseopCliStatusBarItem.show();
    yseopCliOutputChannel.show();
  });
}
