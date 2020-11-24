import { FoldingRange, FoldingRangeParams } from 'vscode-languageserver';

import { YmlDefinitionProvider } from '../definitions';
import { AbstractYmlObject } from '../yml-objects';

export function foldingRangeRequestHandler(definitionsProvider: YmlDefinitionProvider) {
    return (_params: FoldingRangeParams) => {
        const currentFileFunctionsAndInstances = [];
        const shouldBeSelected = (elem: AbstractYmlObject) => {
            // Returns true if the provided element has the same uri as the opened file and is not already selected.
            return elem.uri === _params.textDocument.uri && !currentFileFunctionsAndInstances.includes(elem);
        };
        // Get the elements having a definition in this file.
        currentFileFunctionsAndInstances.push(...definitionsProvider.filterDefinitions(shouldBeSelected));
        // Also get the elements having an implementation in this file.
        currentFileFunctionsAndInstances.push(...definitionsProvider.filterImplementations(shouldBeSelected));
        if (!currentFileFunctionsAndInstances) {
            return null;
        }
        return currentFileFunctionsAndInstances.map((obj) => {
            const start = obj.definitionLocation.range.start.line;
            const end = obj.definitionLocation.range.end.line;
            return FoldingRange.create(start, end - 1);
        });
    };
}
