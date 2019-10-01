import { DiagnosticSeverity, DidChangeConfigurationParams, NotificationHandler } from 'vscode-languageserver-protocol';

import { EngineModel } from '../engineModel/EngineModel';
import Session from '../session';

/**
 * Map between the string available as option and real `DiagnosticSeverity` enum values.
 */
const diagSeverityMap = new Map<string, DiagnosticSeverity>([
    ['error', DiagnosticSeverity.Error],
    ['warning', DiagnosticSeverity.Warning],
    ['information', DiagnosticSeverity.Information],
    ['hint', DiagnosticSeverity.Hint],
]);

let engineModel: EngineModel;
let pathToPredefinedObjectsXml: string;
let activateParsingProblemsReporting: boolean;
// By default, the severity is Information.
export let parsingIssueSeverityLevel: DiagnosticSeverity = DiagnosticSeverity.Information;

export default function(session: Session): NotificationHandler<DidChangeConfigurationParams> {
    return (change) => {
        session.onDidChangeConfiguration(change);
        activateParsingProblemsReporting = change.settings.yseopml.activateParsingProblemsReporting;
        pathToPredefinedObjectsXml = change.settings.yseopml.pathToPredefinedObjectsXml;
        // One of the severity levels possible, or `Information`.
        parsingIssueSeverityLevel =
            diagSeverityMap.get(change.settings.yseopml.ymlParsingIssueSeverityLevel.toLowerCase()) ||
            DiagnosticSeverity.Information;
        if (engineModel == null) {
            engineModel = new EngineModel(pathToPredefinedObjectsXml, session.completionProvider);
            engineModel.loadPredefinedObjects();
        } else {
            engineModel.reload(pathToPredefinedObjectsXml, session.completionProvider);
        }
        session.validateAllDocuments();
    };
}
