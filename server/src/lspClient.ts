/*
 * Copyright (C) 2017, 2018 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
import {
    ApplyWorkspaceEditParams,
    ApplyWorkspaceEditRequest,
    ApplyWorkspaceEditResponse,
    Connection,
    LogMessageNotification,
    LogMessageParams,
    PublishDiagnosticsNotification,
    PublishDiagnosticsParams,
    ShowMessageNotification,
    ShowMessageParams,
    TelemetryEventNotification,
    WorkspaceFolder,
} from 'vscode-languageserver/node';

export interface ILspClient {
    publishDiagnostics(args: PublishDiagnosticsParams): void;
    showMessage(args: ShowMessageParams): void;
    logMessage(args: LogMessageParams): void;
    applyWorkspaceEdit(args: ApplyWorkspaceEditParams): Promise<ApplyWorkspaceEditResponse>;
    telemetry(args: any): void;
    getConfiguration(conf: string): Promise<any>;
    getWorkspaceFolders(): Promise<WorkspaceFolder[] | null>;
}

export class LspClientImpl implements ILspClient {
    constructor(protected connection: Connection) {}

    public async getWorkspaceFolders(): Promise<WorkspaceFolder[]> {
        return this.connection.workspace.getWorkspaceFolders();
    }

    public async getConfiguration(conf: string): Promise<any> {
        return this.connection.workspace.getConfiguration(conf);
    }

    public publishDiagnostics(args: PublishDiagnosticsParams): void {
        this.connection.sendNotification(PublishDiagnosticsNotification.type, args);
    }

    public showMessage(args: ShowMessageParams): void {
        this.connection.sendNotification(ShowMessageNotification.type, args);
    }

    public logMessage(args: LogMessageParams): void {
        this.connection.sendNotification(LogMessageNotification.type, args);
    }

    public telemetry(args: any): void {
        this.connection.sendNotification(TelemetryEventNotification.type, args);
    }

    public async applyWorkspaceEdit(args: ApplyWorkspaceEditParams): Promise<ApplyWorkspaceEditResponse> {
        return this.connection.sendRequest(ApplyWorkspaceEditRequest.type, args);
    }
}
