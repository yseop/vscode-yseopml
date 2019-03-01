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
        if (elem.scopeEndOffset && elem.scopeStartOffset && elem.uri === uri) {
          // We have the scope's positions set and are in the correct file.
          if (offset < elem.scopeStartOffset || offset > elem.scopeEndOffset) {
            // Outside of the scope.
            return null;
          } else {
            return elem.completion;
          }
        } else {
          // No information about the scope. The element is available everywhere.
          return elem.completion;
        }
      })
      // Remove null elements.
      .filter((elem) => !!elem);
  }
}
