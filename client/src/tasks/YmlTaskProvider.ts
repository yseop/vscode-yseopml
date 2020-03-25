/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { exec, ExecOptions } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { RunOptions, ShellExecution, Task, TaskGroup, TaskProvider, TaskScope, window, workspace } from 'vscode';

import { IYmlTaskDefinition } from './IYmlTaskDefinition';

export class YmlTaskProvider implements TaskProvider {
    public static YML_TYPE: string = 'yml';
    private ymlPromise?: Thenable<Task[]>;

    constructor(workspaceRoot: string) {
        const pattern = path.join(workspaceRoot, '*.kao');
        const fileWatcher = workspace.createFileSystemWatcher(pattern);
        fileWatcher.onDidChange(() => (this.ymlPromise = undefined));
        fileWatcher.onDidCreate(() => (this.ymlPromise = undefined));
        fileWatcher.onDidDelete(() => (this.ymlPromise = undefined));
    }

    public provideTasks(): Thenable<Task[]> | undefined {
        if (!this.ymlPromise) {
            this.ymlPromise = getYmlTasks();
        }
        return this.ymlPromise;
    }

    public resolveTask(_task: Task): Task | undefined {
        const task = _task.definition;
        if (task.type === 'yml') {
            const currentFile = window.activeTextEditor.document.uri.fsPath;
            const fileBaseName = path.basename(currentFile);
            // resolveTask requires that the same definition object be used.
            const ymlDefinition: IYmlTaskDefinition = _task.definition as any;
            switch (ymlDefinition.task) {
                case 'compilation': {
                    return new Task(
                        ymlDefinition,
                        TaskScope.Workspace,
                        `Compile ${fileBaseName}`,
                        'yml',
                        new ShellExecution(`~/yseop-engine/yseop-engine-${ymlDefinition.engineVersion}/zkaola`, [
                            `${currentFile}`,
                            '--target=trace',
                            '--target=trace',
                            '--target=strong-check',
                            '--language=fr,fr_FR,en',
                            '--compiled-kb-file-path=./bin/bug',
                        ]),
                    );
                }
                case 'execution': {
                    return new Task(
                        ymlDefinition,
                        TaskScope.Workspace,
                        `Compile ${fileBaseName}`,
                        'yml',
                        new ShellExecution(`~/yseop-engine/yseop-engine-${ymlDefinition.engineVersion}/zerunbc`, [
                            './bin/bug',
                        ]),
                    );
                }
            }
        }
        return null;
    }
}

async function getYmlTasks(): Promise<Task[]> {
    const workspaceRoot = workspace.workspaceFolders[0].uri.toString();
    const ymlFile = window.activeTextEditor.document.uri.fsPath;
    const kbName = path.basename(ymlFile);
    return [];
}
