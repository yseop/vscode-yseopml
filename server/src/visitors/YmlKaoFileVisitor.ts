import { Diagnostic, TextEdit } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { ClassDeclarationContext, FunctionContext, StaticDeclarationContext, YenumContext } from '../grammar';
import { IDocumentFormatSettings } from '../settings/Settings';
import { YmlBaseVisitor } from './YmlBaseVisitor';
import { YmlClassVisitor } from './YmlClassVisitor';
import { YmlEnumVisitor } from './YmlEnumVisitor';
import { YmlFunctionVisitor } from './YmlFunctionVisitor';
import { YmlObjectInstanceVisitor } from './YmlObjectInstanceVisitor';

export class YmlKaoFileVisitor extends YmlBaseVisitor {
    constructor(
        completionProvider: YmlCompletionItemsProvider,
        uri: string,
        definitions: YmlDefinitionProvider,
        docFormatSettings?: IDocumentFormatSettings,
        filePossibleEdits?: TextEdit[],
        document?: TextDocument,
        diagnostics?: Diagnostic[],
    ) {
        super(completionProvider, uri, definitions, docFormatSettings, filePossibleEdits, document, diagnostics);
    }

    public visitStaticDeclaration(node: StaticDeclarationContext): void {
        const visitor = new YmlObjectInstanceVisitor(this.completionProvider, this.uri, this.definitions);
        visitor.visit(node);
    }

    public visitClassDeclaration(node: ClassDeclarationContext): void {
        const visitor = new YmlClassVisitor(this.completionProvider, this.uri, this.definitions);
        visitor.visit(node);
    }

    public visitCompletion(): void {
        // not implemented yet
    }

    public visitFunction(node: FunctionContext): void {
        const visitor = new YmlFunctionVisitor(
            this.completionProvider,
            this.uri,
            this.definitions,
            this.filePossibleEdits,
            this.document,
            this.docFormatSettings,
            this.diagnostics,
        );
        visitor.visit(node);
    }

    public visitYenum(node: YenumContext): void {
        const visitor = new YmlEnumVisitor(this.completionProvider, this.uri, this.definitions);
        visitor.visit(node);
    }

    public visitExternDeclaration(): void {
        // not implemented yet
    }
}
