import { AbstractYmlObject, TextTokenKeyword } from '../yml-objects';

export class YmlCompletionItemsProvider {
    public completions: AbstractYmlObject[] = [];

    public getItem(elementId: string): any {
        return this.completions.find((elem) => elem.data === elementId);
    }

    /**
     * Add a completion to this provider. Also keep track of each of its label subparts (separated with `:`).
     *
     * For example, adding a function named `Namespace:Type::FunctionName`
     * will add to the suggestions list the function as well as the tokens `Namespace` `Type` and `FunctionName`.
     *
     * @param complLoc The new completion to add.
     */
    public addCompletionItem(complLoc: AbstractYmlObject): void {
        this.completions.push(complLoc);
        const subElements = complLoc.label.split(/:+/);
        /*
         * No element: nothing to add.
         * Single element. This has already been added.
         */
        if (subElements.length <= 1) {
            return;
        }
        /* Keep all subparts of the object's label, even its short name. */
        for (const word of subElements) {
            /* Can be empty if colon at the end of the label. */
            if (word.length === 0) {
                continue;
            }
            const keyword = new TextTokenKeyword(word);
            if (this.getItem(keyword.data)) {
                /* Already available. */
                continue;
            }
            this.completions.push(keyword);
        }
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
     * @returns The first completion item that has `entityName` as its label, `null` otherwise.
     */
    public getItemByLabel(entityName: string): AbstractYmlObject {
        return this.completions.find((elem) => elem.label === entityName);
    }

    /**
     * Find *all* the completion items that have `entityName` as name.
     *
     * @param entityName The name of the entity searched for.
     * @returns An array of completion items that have `entityName` as their label, `[]` otherwise.
     */
    public getAllItemsByLabel(entityName: string): AbstractYmlObject[] {
        return this.completions.filter((elem) => elem.label === entityName);
    }

    /**
     * Find the *first* completion item that has `entityName` as short name.
     *
     * @param entityName The name of the entity searched for.
     * @returns The first completion item that has `entityName` as its short name, `null` otherwise.
     */
    public getItemByShortName(entityName: string): AbstractYmlObject {
        return this.completions.find((elem) => elem.getShortName() === entityName);
    }

    /**
     * Find *all* the completion items that have `entityName` as short name.
     *
     * @param entityName The name of the entity searched for.
     * @returns An array of completion items that have `entityName` as their short name, `[]` otherwise.
     */
    public getAllItemsByShortName(entityName: string): AbstractYmlObject[] {
        return this.completions.filter((elem) => elem.getShortName() === entityName);
    }
}
