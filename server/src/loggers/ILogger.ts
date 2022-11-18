/**
 * the logger type
 */
export interface ILogger {
    error(...arg: any[]): void;
    warn(...arg: any[]): void;
    info(...arg: any[]): void;
    log(...arg: any[]): void;
}
