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
}
