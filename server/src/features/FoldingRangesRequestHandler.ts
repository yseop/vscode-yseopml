import { FoldingRange, FoldingRangeParams } from 'vscode-languageserver';

import { YmlDefinitionProvider } from '../definitions';
import { AbstractYmlObject } from '../yml-objects';

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
export function foldingRangesRequestHandler(definitionsProvider: YmlDefinitionProvider) {
    return (_params: FoldingRangeParams): FoldingRange[] => {
        const currentFileFunctionsAndInstances: AbstractYmlObject[] = [];
        const shouldBeSelected = (elem: AbstractYmlObject) => {
            // Returns true if the provided element has the same uri as the opened file and is not already selected.
            return elem.uri === _params.textDocument.uri && !currentFileFunctionsAndInstances.includes(elem);
        };
        // Get the elements having a definition in this file.
        currentFileFunctionsAndInstances.push(...definitionsProvider.filterDefinitions(shouldBeSelected));
        // Also get the elements having an implementation in this file.
        currentFileFunctionsAndInstances.push(...definitionsProvider.filterImplementations(shouldBeSelected));
        const foldingRanges: FoldingRange[] = [];
        for (const ymlObject of currentFileFunctionsAndInstances) {
            const start = ymlObject.definitionLocation.range.start.line;
            const end = ymlObject.definitionLocation.range.end.line;
            foldingRanges.push({
                startLine: start,
                endLine: end - 1,
            });
            foldingRanges.push(...ymlObject.foldingRanges);
        }
        return foldingRanges;
    };
}
