# README

## This is the README for the "vscode-yseopml" project

-------------------

This folder contains the VS code extension that runs a YML (Yseop Markup Language) language server

The extension observes all 'yml' documents (documents from all editors associated to YML language - kao files, yclass files, etc.)
and uses the server to provide validation and completion proposals.

The code for the extension is in the 'client' folder. It uses the 'vscode-languageclient' node module to launch the language server.

The language server is located in the 'server' folder.

## How to run locally

* `npm install` to initialize the extension and the server
* `npm run compile` to compile the extension and the server
* open this folder in VS Code. In the Debug viewlet, run 'Launch Client' from drop-down to launch the extension and attach to the extension.
* open `test.kao` which is in the `client/test` folder. You should see some validation errors.
* to debug the server use the 'Attach to Server' launch config.
* set breakpoints in the client or the server.

## How to generate antlr4 files

* if not already the case, install `ANTLR tool` as explained [here](http://www.antlr.org/download.html) and [here](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md)
* modify `YmlToBdl.g4` grammar file
* `npm run antlr4ts` to generate tokens, lexer and parser files