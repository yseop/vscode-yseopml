import { AbstractYmlObject } from '../yml-objects';

export class YmlCompletionItemsProvider {
    public completions: AbstractYmlObject[] = [];

    public getItem(elementId: string): any {
        return this.completions.find((elem) => elem.data === elementId);
    }

    /**
     * Add a completion to this provider.
     * @param complLoc The new completion to add.
     */
    public addCompletionItem(complLoc: AbstractYmlObject): void {
        this.completions.push(complLoc);
    }

    /**
     * Remove all the completion items associated to a specific document uri from this provider.
     * @param uri The file's URI.
     */
    public removeDocumentCompletionItems(uri: string): void {
        this.completions = this.completions.filter((complLoc) => complLoc.uri !== uri);
    }

    public getAvailableCompletionItems(uri: string, offset: number) {
        return this.completions
            .map((elem) => {
                const scopeDefined = elem.scopeEndOffset && elem.scopeStartOffset;
                if (!scopeDefined) {
                    // No information about the scope. The element is available everywhere.
                    return elem;
                }
                // We are in the correct file and current offset is in between the scope's start and end.
                const inTheScope = elem.uri === uri && elem.scopeStartOffset <= offset && offset <= elem.scopeEndOffset;
                return inTheScope ? elem : null;
            })
            .filter((elem) => !!elem);
    }

    /**
     * Find the *first* completion item that has `entityName` as name.
     *
     * @param entityName The name of the entity searched for.
     * @returns The first completion item that has the same label as `entityName`, `null` otherwise.
     */
    public getItemByLabel(entityName: string): AbstractYmlObject {
        const sameNameElements = this.completions.filter((elem) => elem.label === entityName);
        if (!sameNameElements || sameNameElements.length === 0) {
            return null;
        }
        return sameNameElements.shift();
    }
}
