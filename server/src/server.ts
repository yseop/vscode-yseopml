/* --------------------------------------------------------------------------------------------
 * Copyright (c) Yseop. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';
import * as feature from './feature';
import * as lifecycle from './lifecycle';
import Session from './session';

export const session = new Session();

session.log('Yseop.vscode-yseopml − Creating connection with client/server.');

// After the server has started the client sends an initialize request. The server receives
// in the passed params the rootPath of the workspace plus the client capabilities.
session.connection.onExit(lifecycle.exit(session));
session.connection.onInitialize(lifecycle.initialize(session));
session.connection.onShutdown(lifecycle.shutdown(session));

session.connection.onHover(feature.hover(session));

// The settings have changed. Is send on server activation as well.
session.connection.onDidChangeConfiguration(feature.didChangeConfiguration(session));

session.connection.onDefinition(feature.definition(session));

// This handler provides the initial list of the completion items.
session.connection.onCompletion(feature.completion(session));
session.listen();
