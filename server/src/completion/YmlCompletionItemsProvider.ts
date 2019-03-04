import { ICompletionItemLocation } from "./ICompletionItemLocation";
export class YmlCompletionItemsProvider {
  public completions: ICompletionItemLocation[] = [];

  public getItem(elementId: string): any {
    return this.completions
      .map((elem) => elem.completion)
      .find((elem) => elem.data === elementId);
  }

  /**
   * Add a completion to this provider.
   * @param complLoc The new completion to add.
   */
  public addCompletionItem(complLoc: ICompletionItemLocation): void {
    this.completions.push(complLoc);
  }

  /**
   * Remove all the completion items associated to a specific document uri from this provider.
   * @param uri The file's URI.
   */
  public removeDocumentCompletionItems(uri: string): void {
    this.completions = this.completions.filter(
      (complLoc) => complLoc.uri !== uri,
    );
  }

  public getAvailableCompletionItems(uri: string, offset: number) {
    return this.completions
      .map((elem) => {
        const scopeDefined = elem.scopeEndOffset && elem.scopeStartOffset;
        if (!scopeDefined) {
          // No information about the scope. The element is available everywhere.
          return elem.completion;
        }
        // We are in the correct file and current offset is in between the scope's start and end.
        const inTheScope = elem.uri === uri && elem.scopeStartOffset <= offset && offset <= elem.scopeEndOffset;
        return inTheScope ? elem.completion : null;
      })
      .filter((elem) => !!elem);
  }
}
