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

  public getOnlyCompilationItems() {
      return this.completions.map((elem) => elem.completion);
  }
}
