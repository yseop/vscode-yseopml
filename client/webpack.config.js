//@ts-check

"use strict";

const path = require("path");

/**
 * @type {import('webpack').Configuration}
 */
const config = {
    devtool: "source-map",
    // the entry point of this extension,
    // 📖 -> https://webpack.js.org/configuration/entry-context/
    entry: "./src/extension.ts",
    externals: {
        // the vscode-module is created on-the-fly and must be excluded.
        // Add other modules that cannot be webpack'ed, 📖 -> https://webpack.js.org/configuration/externals/
        vscode: "commonjs vscode",
        "vscode-languageclient": "vscode-languageclient",
        "vscode-languageserver-protocol": "vscode-languageserver-protocol",
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.(ts|js)$/,
            use: [{
                loader: "ts-loader",
                options: {
                    compilerOptions: {
                        "module": "es6", // override `tsconfig.json` so that TypeScript emits native JavaScript modules.
                    },
                },
            }],
        }],
    },
    output: {
        devtoolModuleFilenameTemplate: "../[resource-path]",
        filename: "extension.js",
        libraryTarget: "commonjs2",
        // the bundle is stored in the 'out' directory (check package.json),
        // 📖 -> https://webpack.js.org/configuration/output/
        path: path.resolve(__dirname, "out"),
    },
    resolve: {
        // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
        extensions: [".ts", ".js"],
    },
    // vscode extensions run in a Node.js-context 📖 -> https://webpack.js.org/configuration/node/
    target: "node",
};
module.exports = config;
