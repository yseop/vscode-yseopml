import { CodeLens, CodeLensParams } from 'vscode-languageserver';

import { YmlDefinitionProvider } from '../definitions';
import { YmlFunction } from '../yml-objects';

/**
 * Create a request handler for the event `foldingRanges`.
 * The handler, when receiving a `FoldingRangeParams` instance will find
 * in the provided YmlDefinitionProvider every YML Objects
 * or YML functions of the text document the request is about
 * and build a list of `FoldingRange` that will be used by client-side to fold/unfold the code.
 *
 * @param definitionsProvider an YmlDefinitionProvider instance to get known YML objects and functions from.
 *
 * @returns a request handler for the event `foldingRanges`.
 */
export function codeLensRequestHandler(definitionsProvider: YmlDefinitionProvider) {
    return (_params: CodeLensParams): CodeLens[] => {
        const currentFileFunctions = definitionsProvider.filterImplementations(
            (elem) => elem instanceof YmlFunction && elem.uri === _params.textDocument.uri,
        );
        const lenses = [];
        for (const func of currentFileFunctions) {
            if (!(func instanceof YmlFunction)) {
                continue;
            }
            const lens = CodeLens.create(func.definitionLocation.range);
            lens.command = {
                title: `Cognitive complexity is ${func.getCognitiveComplexity()}.`,
                command: null,
            };
            lenses.push(lens);
        }
        return lenses;
    };
}
