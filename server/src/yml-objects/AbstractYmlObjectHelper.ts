import { CompletionItemKind, DocumentSymbol, SymbolKind } from 'vscode-languageserver';

import { AbstractYmlObject } from '.';

/**
 * Create a `DocumentSymbol` object from an `AbstractYmlObject`.
 *
 * @param elem the element used as a base
 *
 * @return a new DocumentSymbol
 */
export function completionItemToDocumentSymbol(elem: AbstractYmlObject) {
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
