import { ILogger } from './ILogger';

/*
 * Copyright (C) 2017, 2018 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
export class PrefixingLogger implements ILogger {
    constructor(private readonly logger: ILogger, private readonly prefix: string) {}

    public error(...arg: any[]): void {
        this.logger.error(this.prefix, ...arg);
    }

    public warn(...arg: any[]): void {
        this.logger.warn(this.prefix, ...arg);
    }

    public info(...arg: any[]): void {
        this.logger.info(this.prefix, ...arg);
    }

    public log(...arg: any[]): void {
        this.logger.log(this.prefix, ...arg);
    }
}
