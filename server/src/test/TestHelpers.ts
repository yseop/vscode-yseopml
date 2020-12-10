import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { TextDocument } from 'vscode-languageserver';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions/YmlDefinitionProvider';
import { YmlLexer, YmlParser } from '../grammar';
import { YmlFunctionVisitor } from '../visitors/YmlFunctionVisitor';

export const FAKE_FILE_PATH = '/file1.kao';
export const YML_LANGUAGE_ID = 'yml';

export function createFakeFunctionContainer(functionContent: string = ''): string {
    return `function myFunction(Object input)
--> domains Integer
--> action {
    ${functionContent}
};`;
}

/**
 * Create and return a TextDocument with `docContent` as content.
 *
 * @param docContent the document content
 *
 * @return a TextDocument
 */
export function createFakeDocument(docContent: string): TextDocument {
    return TextDocument.create(FAKE_FILE_PATH, YML_LANGUAGE_ID, 1, docContent);
}

export function parseAndVisitYmlFunction(
    functionText: string = '',
    completionProvider?: YmlCompletionItemsProvider,
    definitionProvider?: YmlDefinitionProvider,
): void {
    const inputStream = CharStreams.fromString(functionText);
    const lexer = new YmlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new YmlParser(tokenStream);

    completionProvider = completionProvider ?? new YmlCompletionItemsProvider();
    definitionProvider = definitionProvider ?? new YmlDefinitionProvider();
    const visitor = new YmlFunctionVisitor(completionProvider, FAKE_FILE_PATH, definitionProvider);
    visitor.visit(parser.kaoFile());
}
