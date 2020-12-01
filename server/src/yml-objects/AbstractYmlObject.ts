import { Token } from 'antlr4ts';
import {
    Command,
    CompletionItem,
    CompletionItemKind,
    FoldingRange,
    InsertTextFormat,
    Location,
    MarkupContent,
    MarkupKind,
    TextEdit,
} from 'vscode-languageserver';

export type YmlType = string | string[];

export abstract class AbstractYmlObject implements CompletionItem {
    /* Start overriden properties (doc in CompletionItem). */
    public detail?: string;
    public documentation?: MarkupContent;
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
     * The object containing this object, if any.
     * - For an attribute, this is the class
     * - For a local variable, a function, etc.
     */
    public sourceElement: AbstractYmlObject;

    /**
     * A string representation of the enum name that is in `this.kind`.
     *
     * @see CompletionItemKind
     */
    public kindName = 'Object';

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

    /**
     * Places where we can add folding markers inside this object.
     */
    public foldingRanges: FoldingRange[];

    private hoverContent?: MarkupContent;

    constructor(public readonly label: string, public readonly kind: CompletionItemKind, public readonly uri: string) {
        this.foldingRanges = [];
    }

    public getShortName() {
        return this.label;
    }

    /**
     * Enrich this object by adding to it some information like its type, its use scope, documentation, etc.
     *
     * @param documentation The documentation associated to this object.
     * @param type The type of this object. It is the return type in case of a function or method.
     * @param sourceElementName The wrapper item. For an argument it is the function, for an attribute it is its class.
     * @param scopeStartOffset The first position from which we can suggest this item.
     * Interstice before the first character of a function's body, for example.
     * Useful to avoid giving completion suggestions pertaining to symbols
     * that are out of the current scope.
     * @param scopeEndOffset The last position to which we can suggest this item.
     * Interstice after the last character of a function's body, for example.
     * Useful to avoid giving completion suggestions pertaining to symbols
     * that are out of the current scope.
     */
    public enrichWith(
        documentation: string,
        type: string,
        sourceElement?: AbstractYmlObject,
        scopeStartOffset?: number,
        scopeEndOffset?: number,
    ): void {
        this.sourceElement = sourceElement;
        const sourceElementName = !!sourceElement ? sourceElement.label : 'static';
        this.data = `id_${sourceElementName}_${this.label}`;
        this.setUserInformations(this.buildDetailString(type), documentation);
        if (scopeEndOffset && scopeStartOffset) {
            this.scopeEndOffset = scopeEndOffset;
            this.scopeStartOffset = scopeStartOffset;
        }
    }

    protected buildDetailString(type: string): string {
        const separator = !!this.sourceElement ? '.' : ' ';
        const sourceElementName = !!this.sourceElement ? this.sourceElement.label : 'static';
        return `(${this.kindName}) [${sourceElementName}]${separator}${this.label} ⇒ ${type}`;
    }

    public getHoverContent(): MarkupContent {
        return this.hoverContent;
    }

    public hasDocumentation(): boolean {
        return !!this.documentation || !!this.detail;
    }

    /**
     * Set the documentation of this object as a `MarkupContent` its detail attribute
     * as well as its representation when hovering it.
     * The documentation should always exist and consists at least as the value of detail.
     *
     * @param details Some details about this object, as a Markdown string.
     * @param doc The documentation of this object, as a Markdown string.
     *
     * @see MarkupContent
     */
    public setUserInformations(details: string, doc: string): void {
        if (!details && !doc) {
            return;
        }

        // If possible, set documentation's value.
        if (!!doc) {
            this.documentation = {
                kind: MarkupKind.Markdown,
                value: doc,
            };
        }

        // There is no value for `details`. This means that we have a value for `doc`.
        // No need to set `this.detail`.
        // Hover content is this.documentation.
        if (!details) {
            this.hoverContent = this.documentation;
            return;
        }

        // At this point, we're not sure if we have documentation,
        // but we know that we have a value for `details`.
        this.detail = details;
        this.hoverContent = {
            kind: MarkupKind.Markdown,
            value: !!doc ? `${this.detail}\n\n---\n\n${doc}` : this.detail,
        };
    }

    public setDefinitionLocation(startToken: Token, endToken: Token, uri: string): void {
        this.definitionLocation = {
            range: {
                end: {
                    character: endToken.charPositionInLine,
                    line: endToken.line,
                },
                start: {
                    character: startToken.charPositionInLine,
                    line: startToken.line - 1,
                },
            },
            uri,
        };
    }

    /**
     * Build and returns a light version of this object.
     * A AbstractYmlObject's light version just have its label, its data attribute and its kind.
     *
     * @returns a light version of this object.
     */
    public asLightCompletionItem(): CompletionItem {
        const lightVersion = CompletionItem.create(this.label);
        lightVersion.data = this.data;
        lightVersion.kind = this.kind;
        return lightVersion;
    }
}
