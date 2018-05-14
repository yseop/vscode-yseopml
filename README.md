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

## How to update Syntax Coloring

In order to update the syntax coloring, you must modify the file `yml.tmLanguage.json` accordingly to the [TextMate Manual](http://manual.macromates.com/en/language_grammars#language_grammars).

The format available in this manual is a little bit different than the one we are using (json). However it is easy to understand how to change it to fit our needs.

## Package the extension

Do the following in your terminal:

```[bash]
npm run package
```

You should now have a new file with `.vsix` file extension in the `client` directory. This is the packaged extension to provide for installation.

## Install the extension

- Open the vscode command console with `ctrl + shift + P`
- Search `Install Extension from VSIX`
- Select the extension and validate
- Reload vscode
- Open client/test/test.kao to validate the installation
