import { TaskDefinition } from 'vscode';

export interface IYmlTaskDefinition extends TaskDefinition {
    /**
     * The task name
     */
    task: string;

    /**
     * The project file to launch
     */
    file?: string;

    /**
     * Engine version to use
     */
    engineVersion: string;

    /**
     * Path to the directory containing every Engine versions
     */
    enginePath?: string;
}
