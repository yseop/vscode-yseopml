/** Describe the YML relevant settings part as defined in `package.json`. */
export interface IYseopmlSettings {
    yseopml: IYseopmlServerSettings;
}

/** Describe the _server_ relevant settings part as defined in `package.json`. */
export interface IYseopmlServerSettings {
    activateParsingProblemsReporting: boolean;
    parseAllProjectFilesAtStartup: boolean;
    pathToPredefinedObjectsXml: string;
    ymlParsingIssueSeverityLevel: string;
    kaoFiles: string[];
    documentFormat: IDocumentFormatSettings;
}

/**
 * Possible attributes that can be sent as document format settings as defined in `package.json`.
 */
export interface IDocumentFormatSettings {
    // 'yes' and 'no' acts like a new type. Impossible to use const.
    /** `yes` to enable the document format feature. `no` otherwise. */
    enableDocumentFormat: 'yes' | 'no';
    /** `true` to add semicolon when possible. `false` otherwise. */
    semicolonWhenPossible: boolean;
    /**
     * `true` to set a one space distance between some keywords and parenthesis. \
     * `false` to have this distance set to zero.
     */
    spaceBetweenKeywordAndParenthesis: boolean;
    // More options to come.
}

/**
 * Default values for the document format settings, as defined in `package.json`.
 */
export const DEFAULT_DOC_FORMAT_SETTINGS: IDocumentFormatSettings = {
    enableDocumentFormat: 'yes',
    semicolonWhenPossible: true,
    spaceBetweenKeywordAndParenthesis: false,
};

/**
 * Set in an instance of document format settings set the default values for every undefined options.
 *
 * @param documentFormat a document format settings set
 *
 * @return the provided instance with default values for every attribute that was undefined
 * or `DEFAULT_DOC_FORMAT_SETTINGS` if the instance was falsy.
 */
export function setDocumentFormatDefaultValues(documentFormat: IDocumentFormatSettings): IDocumentFormatSettings {
    if (!documentFormat) {
        return DEFAULT_DOC_FORMAT_SETTINGS;
    }
    documentFormat.enableDocumentFormat =
        documentFormat.enableDocumentFormat ?? DEFAULT_DOC_FORMAT_SETTINGS.enableDocumentFormat;
    documentFormat.semicolonWhenPossible =
        documentFormat.semicolonWhenPossible ?? DEFAULT_DOC_FORMAT_SETTINGS.semicolonWhenPossible;
    documentFormat.spaceBetweenKeywordAndParenthesis =
        documentFormat.spaceBetweenKeywordAndParenthesis ??
        DEFAULT_DOC_FORMAT_SETTINGS.spaceBetweenKeywordAndParenthesis;
    return documentFormat;
}
