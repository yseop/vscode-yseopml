import { Token } from 'antlr4ts';
import {
    Command,
    CompletionItem,
    CompletionItemKind,
    IConnection,
    InsertTextFormat,
    Location,
    TextEdit,
} from 'vscode-languageserver';

import { FieldContext } from '../grammar';

export type YmlType = string | string[];
const BEGINNING_QUOTES_REGEX = /^("""|")\s*/;
const ENDING_QUOTES_REGEX = /\s*("""|")$/;

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

    constructor(public readonly label: string, public readonly kind: CompletionItemKind, public readonly uri: string) {}

    public getShortName() {
        return this.label;
    }

    /**
     * Enrich this object by adding to it some information like its type, its use scope, documentation, etc.
     *
     * @param fields The attributes the item has to find from it more informations.
     * @param connection An object to log errors if any.
     *  Cannot be imported directly from `../server` because of cross references problems.
     * @param sourceElementName The wrapper item. For an argument it is the function, for an attribute it is its class.
     * @param baseType The type of the item, if it is not an information that can be found in `fields`
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
        fields: FieldContext[],
        connection: IConnection,
        sourceElementName?: string,
        baseType?: string,
        scopeStartOffset?: number,
        scopeEndOffset?: number,
    ): void {
        sourceElementName = sourceElementName ? sourceElementName : 'static';
        this.data = `id_${sourceElementName}_${this.label}`;
        this.documentation = getDocumentation(fields, connection);
        this.detail = getType(fields, connection, baseType);
        if (scopeEndOffset && scopeStartOffset) {
            this.scopeEndOffset = scopeEndOffset;
            this.scopeStartOffset = scopeStartOffset;
        }
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
}

function getDocumentation(fieldOptions: FieldContext[], connection: IConnection): string {
    try {
        for (const element of fieldOptions.filter((elem) => !!elem.commonField)) {
            const option = element.commonField();
            if (option != null && option._optionName.text === 'documentation') {
                let documentation = option._optionValues[0].text;
                if (documentation !== null && documentation !== undefined) {
                    documentation = documentation.replace(BEGINNING_QUOTES_REGEX, '');
                    documentation = documentation.replace(ENDING_QUOTES_REGEX, '');
                    return documentation;
                }
            } else {
                // YML fields unrelated to documentation.
            }
        }
    } catch (err) {
        connection.console.error(err);
    }
    return 'not documented';
}

function getType(fieldOptions: FieldContext[], connection: IConnection, baseType?: string): string {
    let domains = baseType ? baseType : 'Object';
    let domainsLevel2 = '';
    try {
        for (const element of fieldOptions.filter((elem) => !!elem.commonField)) {
            const option = element.commonField();
            if (!option) {
                continue;
            }
            const optionName = option._optionName.text;
            if (optionName === 'domains') {
                domains = option._optionValues[0].text;
            } else if (optionName === 'domainsLevel2') {
                domainsLevel2 = ` − ${option._optionValues[0].text}`;
            } else {
                // YML fields unrelated to domains.
            }
        }
    } catch (err) {
        connection.console.error(err);
    }
    return domains.concat(domainsLevel2);
}
