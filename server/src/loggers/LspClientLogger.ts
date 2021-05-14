import { MessageType } from 'vscode-languageserver';

import { ILspClient } from '../lspClient';
import { ILogger } from './ILogger';

export class LspClientLogger implements ILogger {
    constructor(protected client: ILspClient, protected level: MessageType = MessageType.Error) {}

    protected sendMessage(severity: MessageType, messageObjects: any[]): void {
        if (this.level < severity) {
            return;
        }
        const message = messageObjects
            .map((p) => {
                if (typeof p === 'object') {
                    return JSON.stringify(p, null, 2);
                }
                return p;
            })
            .join(' ');

        this.client.logMessage({
            type: severity,
            message,
        });
    }

    public error(...arg: any[]): void {
        this.sendMessage(MessageType.Error, arg);
    }

    public warn(...arg: any[]): void {
        this.sendMessage(MessageType.Warning, arg);
    }

    public info(...arg: any[]): void {
        this.sendMessage(MessageType.Info, arg);
    }

    public log(...arg: any[]): void {
        this.sendMessage(MessageType.Log, arg);
    }
}
