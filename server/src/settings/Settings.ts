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
    /** `yes` to add semicolon when possible. `no` otherwise. */
    semicolonWhenPossible: 'yes' | 'no';
    /**
     * `yes` to set a one space distance between some keywords and parenthesis. \
     * `no` to have this distance set to zero.
     */
    spaceBetweenKeywordAndParenthesis: 'yes' | 'no';
    // More options to come.
}

/**
 * Default values for the document format settings, as defined in `package.json`.
 */
export const DEFAULT_DOC_FORMAT_SETTINGS: IDocumentFormatSettings = {
    enableDocumentFormat: 'yes',
    semicolonWhenPossible: 'yes',
    spaceBetweenKeywordAndParenthesis: 'no',
};

/**
 * In an instance of document format settings, set every undefined option to its default value.
 *
 * @param documentFormat document format settings, possibly with unset properties.
 *
 * @return the provided instance with default values for every attribute that was undefined
 * or `DEFAULT_DOC_FORMAT_SETTINGS` if the instance was falsy.
 */
export function setDocumentFormatDefaultValues(documentFormat: IDocumentFormatSettings): IDocumentFormatSettings {
    if (!documentFormat) {
        return DEFAULT_DOC_FORMAT_SETTINGS;
    }
    for (const [key, value] of Object.entries(documentFormat)) {
        documentFormat[key] = value ?? DEFAULT_DOC_FORMAT_SETTINGS[key];
    }
    return documentFormat;
}
