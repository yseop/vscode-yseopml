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
  }
