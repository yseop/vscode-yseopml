import { ANTLRErrorListener, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { Diagnostic, DiagnosticSeverity, Range } from 'vscode-languageserver';

export class YmlParsingErrorListener implements ANTLRErrorListener<Token> {
    constructor(public diagnostics: Diagnostic[]) {}

    public syntaxError(
        // tslint:disable-next-line: variable-name
        _recognizer: Recognizer<Token, any>,
        offendingSymbol: Token | undefined,
        line: number,
        charPositionInLine: number,
        msg: string,
        // tslint:disable-next-line: variable-name
        _e: RecognitionException | undefined,
    ) {
        if (!offendingSymbol) {
            return;
        }
        const currentEditorLine = line - 1;
        const endPosition = charPositionInLine + offendingSymbol.stopIndex - offendingSymbol.startIndex + 1;
        const diagnostic = Diagnostic.create(
            Range.create(currentEditorLine, charPositionInLine, currentEditorLine, endPosition),
            msg,
            DiagnosticSeverity.Warning,
        );
        this.diagnostics.push(diagnostic);
    }
}
