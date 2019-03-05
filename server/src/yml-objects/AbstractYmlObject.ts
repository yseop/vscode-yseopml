import {
  Command,
  CompletionItem,
  CompletionItemKind,
  InsertTextFormat,
  Location,
  TextEdit,
} from "vscode-languageserver";

export type YmlType = string | string[];

export abstract class AbstractYmlObject implements CompletionItem {

  /* Start overriden properties (doc in CompletionItem). */
  public detail?: string;
  public documentation?: string;
  public sortText?: string;
  public filterText?: string;
  public insertText?: string;
  public insertTextFormat?: InsertTextFormat;
  public textEdit?: TextEdit;
  public additionalTextEdits?: TextEdit[];
  public commitCharacters?: string[];
  public command?: Command;
  public data?: any;
  /* End of overriden properties. */

  /**
   * The definition location information.
   */
  public definitionLocation?: Location;
  /**
   * The first position from which we can suggest this item.
   * First character of a function's body, for example.
   * Useful to avoid giving completion suggestions pertaining to symbols
   * that are out of the current scope.
   */
  public scopeStartOffset?: number;
  /**
   * The last position to which we can suggest this item.
   * Last character of a function's body, for example.
   * Useful to avoid giving completion suggestions pertaining to symbols
   * that are out of the current scope.
   */
  public scopeEndOffset?: number;

  constructor(
    public readonly label: string,
    public readonly kind: CompletionItemKind,
    public readonly uri: string,
  ) {}

  public getShortName() {
    return this.label;
  }
}
