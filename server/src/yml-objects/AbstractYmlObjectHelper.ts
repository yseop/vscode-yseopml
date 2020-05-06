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

/**
 * Translate `CompletionItemKind` values into `SymbolKind`. Both don't use the same symbols
 * and whenthey do the value is often if not always different.
 *
 * @param completionItemKind the completion item kind to translate
 *
 * @returns an equivalent SymbolKind for the provided CompletionItemKind or `Property` if there is no match.
 */
export function completionItemKindToSymbolKind(completionItemKind: CompletionItemKind) {
    switch (completionItemKind) {
        case CompletionItemKind.Class:
            return SymbolKind.Class;
        case CompletionItemKind.Constant:
            return SymbolKind.Constant;
        case CompletionItemKind.Enum:
            return SymbolKind.Enum;
        case CompletionItemKind.EnumMember:
            return SymbolKind.EnumMember;
        case CompletionItemKind.Field:
            return SymbolKind.Field;
        case CompletionItemKind.Function:
            return SymbolKind.Function;
        case CompletionItemKind.Method:
            return SymbolKind.Method;
        case CompletionItemKind.Property:
            return SymbolKind.Property;
        case CompletionItemKind.Variable:
            return SymbolKind.Variable;
        default:
            // Used as default by VSCode, even when we return null.
            return SymbolKind.Property;
    }
}
