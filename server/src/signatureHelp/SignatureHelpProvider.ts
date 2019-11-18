import { MarkedString, MarkupKind, ParameterInformation, SignatureInformation } from 'vscode-languageserver';

import { AbstractYmlFunction, AbstractYmlObject, YmlArgs } from '../yml-objects';

/**
 * Contains and provide entities definitions.
 */
export class SignatureHelpProvider {
    public functions: AbstractYmlFunction[] = [];
    public functionsToSignatureHelp(_candidates: AbstractYmlObject[]): SignatureInformation[] {
        const signatures = [];
        if (!_candidates || _candidates.length === 0) {
            return signatures;
        }
        for (const candidate of _candidates) {
            if (!(candidate instanceof AbstractYmlFunction)) {
                continue;
            }
            for (const signatureInfo of this.argsToSignatures(candidate.label, candidate.args)) {
                signatures.push(signatureInfo);
            }
        }
        return signatures;
    }

    public argsToSignatures(functionName: string, _args: YmlArgs): SignatureInformation[] {
        if (!_args || _args.arityMax === 0 || _args.arityMin !== _args.arityMax) {
            return [];
        }
        const parameterInformations: ParameterInformation[] = [];
        for (const args of _args.arguments) {
            parameterInformations.push({
                label: args.label,
                documentation: {
                    kind: MarkupKind.Markdown,
                    value: `**${args.label}**`,
                },
            });
        }
        return [
            {
                label: `${functionName}()`,
                parameters: parameterInformations,
                documentation: {
                    kind: MarkupKind.Markdown,
                    value: `*${functionName}*()`,
                },
            },
            {
                label: `${functionName}_v2()`,
                parameters: parameterInformations,
            },
        ];
    }

    /**
     * Add a definition to this provider.
     * @param def The new definition to add.
     */
    public addFunction(def: AbstractYmlFunction): void {
        this.functions.push(def);
    }

    /**
     * Remove all the definitions associated to a specific document uri from this provider.
     * @param uri The file's URI.
     */
    public removeDocumentFunction(uri: string): void {
        this.functions = this.functions.filter((defLoc) => defLoc.definitionLocation.uri !== uri);
    }
}
