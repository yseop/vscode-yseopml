// The settings interface describe the server relevant settings part
export interface IYseopmlSettings {
    yseopml: IYseopmlServerSettings;
}

// These are the example settings we defined in the client's package.json file
export interface IYseopmlServerSettings {
    activateParsingProblemsReporting: boolean;
    parseAllProjectFilesAtStartup: boolean;
    pathToPredefinedObjectsXml: string;
    ymlParsingIssueSeverityLevel: string;
    kaoFiles: string[];
    documentFormat: IDocumentFormatSettings;
}

export interface IDocumentFormatSettings {
    enableDocumentFormat: boolean;
    semicolonWhenPossible: boolean;
    spaceBetweenKeywordAndParenthesis: boolean;
}

export const DEFAULT_DOC_FORMAT_SETTINGS: IDocumentFormatSettings = {
    enableDocumentFormat: true,
    semicolonWhenPossible: true,
    spaceBetweenKeywordAndParenthesis: false,
};

export function setDocumentFormatDefaultValues(documentFormat: IDocumentFormatSettings): IDocumentFormatSettings {
    if (!documentFormat) {
        return DEFAULT_DOC_FORMAT_SETTINGS;
    }
    // Set the default values when they are undefined.
    documentFormat.enableDocumentFormat = documentFormat.enableDocumentFormat ?? true;
    documentFormat.semicolonWhenPossible = documentFormat.semicolonWhenPossible ?? true;
    documentFormat.spaceBetweenKeywordAndParenthesis = documentFormat.spaceBetweenKeywordAndParenthesis ?? false;
    return documentFormat;
}
