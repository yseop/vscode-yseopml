import { CompletionItemKind, DocumentSymbol, DocumentSymbolParams, SymbolKind } from 'vscode-languageserver';

import { YmlDefinitionProvider } from '../definitions';
import { AbstractYmlObject } from '../yml-objects';

export function documentSymbolRequestHandler(definitionsProvider: YmlDefinitionProvider) {
    return (_params: DocumentSymbolParams) => {
        return buildDocumentSymbolsList(_params.textDocument.uri, definitionsProvider);
    };
}

/**
 * Build the list of all available YML symbols that are in a file.
 *
 * @param uri the file URI
 *
 * @returns the list of available YML symbols.
 */
export function buildDocumentSymbolsList(uri: string, definitionsProvider: YmlDefinitionProvider): DocumentSymbol[] {
    // Get the YML objects definitions (for which we have a location) that are in this file.
    const filter = (elem: AbstractYmlObject) => elem.uri === uri && !!elem.definitionLocation;
    let currentDocSymbols = definitionsProvider.definitions.filter(filter);
    // Also get the YML objects implementations (with a location too) that are in this file.
    currentDocSymbols = currentDocSymbols.concat(definitionsProvider.implementations.filter(filter));

    const parentToChildren = new Map<AbstractYmlObject, AbstractYmlObject[]>();
    for (const elem of currentDocSymbols) {
        if (!elem.sourceElement) {
            // Current element has no parent.
            if (!parentToChildren.has(elem)) {
                // This is the first time we encounter this element.
                // We register it as a parent anyway, in case it is the parent of an unknown child that'll come later.
                parentToChildren.set(elem, []);
            } else {
                // Current element is already known. No need to add it again.
            }
        } else {
            // Current element has a parent
            // tslint:disable-next-line: no-collapsible-if
            if (!parentToChildren.has(elem.sourceElement)) {
                // We don't have an entry for it yet.
                parentToChildren.set(elem.sourceElement, [elem]);
            } else {
                // Just push current element to sourceElement's children list.
                parentToChildren.get(elem.sourceElement).push(elem);
            }
        }
    }

    const result: DocumentSymbol[] = [];
    // Create the document symbols here.
    parentToChildren.forEach((_value, _key, _map) => {
        const docSymbol = completionItemToDocumentSymbol(_key);
        docSymbol.children = _value.map(completionItemToDocumentSymbol);
        result.push(docSymbol);
    });
    return result;
}

/**
 * Create a `DocumentSymbol` object from an `AbstractYmlObject`.
 *
 * @param elem the element used as a base
 *
 * @return a new DocumentSymbol
 */
function completionItemToDocumentSymbol(elem: AbstractYmlObject) {
    let _label = elem.label;
    if (_label.includes('::')) {
        _label = _label.substring(_label.lastIndexOf('::'));
    }
    return DocumentSymbol.create(
        _label,
        elem.detail,
        completionItemKindToSymbolKind(elem.kind),
        elem.definitionLocation.range,
        elem.definitionLocation.range,
    );
}

const COMPLETION_ITEM_KIND_TO_SYMBOL_KIND = new Map<CompletionItemKind, SymbolKind>([
    [CompletionItemKind.Class, SymbolKind.Class],
    [CompletionItemKind.Constant, SymbolKind.Constant],
    [CompletionItemKind.Enum, SymbolKind.Enum],
    [CompletionItemKind.EnumMember, SymbolKind.EnumMember],
    [CompletionItemKind.Field, SymbolKind.Field],
    [CompletionItemKind.Function, SymbolKind.Function],
    [CompletionItemKind.Method, SymbolKind.Method],
    [CompletionItemKind.Property, SymbolKind.Property],
    [CompletionItemKind.Variable, SymbolKind.Variable],
]);

/**
 * Translate `CompletionItemKind` values into `SymbolKind`. Both don't use the same symbols
 * and whenthey do the value is often if not always different.
 *
 * @param completionItemKind the completion item kind to translate
 *
 * @returns an equivalent SymbolKind for the provided CompletionItemKind or `Property` if there is no match.
 */
export function completionItemKindToSymbolKind(completionItemKind: CompletionItemKind): SymbolKind {
    if (COMPLETION_ITEM_KIND_TO_SYMBOL_KIND.has(completionItemKind)) {
        return COMPLETION_ITEM_KIND_TO_SYMBOL_KIND.get(completionItemKind);
    }
    return SymbolKind.Property;
}
