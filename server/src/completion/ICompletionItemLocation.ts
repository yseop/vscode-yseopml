import { CompletionItem } from "vscode-languageserver";

/**
 * A mapping between an uri and a completion item.
 */
export interface ICompletionItemLocation {
    /**
     * The uri of the file from which completion items are reported.
     */
    uri: string;
    /**
     * The completion information.
     */
    completion: CompletionItem;
    /**
     * The first position from which we can suggest this item.
     * First character of a function's body, for example.
     * Useful to avoid giving completion suggestions pertaining to symbols
     * that are out of the current scope.
     */
    scopeStartOffset?: number;
    /**
     * The last position to which we can suggest this item.
     * Last character of a function's body, for example.
     * Useful to avoid giving completion suggestions pertaining to symbols
     * that are out of the current scope.
     */
    scopeEndOffset?: number;
  }
