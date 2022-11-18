import { ILogger } from './ILogger';

export class ConsoleLogger implements ILogger {
    constructor(private readonly isLogEnabled: boolean = false) {}

    private toStrings(...arg: any[][]): string[] {
        return arg.map((a) => JSON.stringify(a, null, 2));
    }

    public error(...arg: any[]) {
        console.error(...this.toStrings(arg));
    }
    public warn(...arg: any[]) {
        console.warn(...this.toStrings(arg));
    }
    public info(...arg: any[]) {
        console.info(...this.toStrings(arg));
    }
    public log(...arg: any[]) {
        if (this.isLogEnabled) {
            console.log(...this.toStrings(arg));
        }
    }
}
