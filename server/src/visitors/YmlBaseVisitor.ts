// tslint:disable-next-line: no-submodule-imports
import { ParserRuleContext, Token } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Diagnostic, Range, TextEdit } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import {
    ActionBlockContext,
    ArrayContext,
    ComparisonContext,
    ConditionalAndExpressionContext,
    ConditionalOrExpressionContext,
    ConstListContext,
    FunctionCallContext,
    IfExpressionContext,
    Instruction_assignmentContext,
    Instruction_ifElseContext,
    Instruction_multivaluedAssignmentContext,
    InstructionContext,
    MandatoryArgsContext,
    SimpleListContext,
    YmlParserVisitor,
} from '../grammar';
import { ElseExpressionContext, ElseIfExpressionContext } from '../grammar/YmlParser';
import { IDocumentFormatSettings } from '../settings/Settings';

export class YmlBaseVisitor extends AbstractParseTreeVisitor<void> implements YmlParserVisitor<void> {
    constructor(
        public completionProvider: YmlCompletionItemsProvider,
        public uri: string,
        public definitions?: YmlDefinitionProvider,
        public docFormatSettings?: IDocumentFormatSettings,
        public filePossibleEdits?: TextEdit[],
        public document?: TextDocument,
        public diagnostics?: Diagnostic[],
    ) {
        super();
    }

    public defaultResult() {
        // no default
    }

    public visitConditionalAndExpression(node: ConditionalAndExpressionContext): void {
        if (!!node.COND_AND()) {
            const asSymbol = node.COND_AND().symbol;
            this.setOneSpaceIntervalBetweenContextAndToken(node._leftCondition, asSymbol);
            this.setOneSpaceIntervalBetweenTokenAndContext(asSymbol, node._rightCondition);
        }
        this.visitChildren(node);
    }

    public visitConditionalOrExpression(node: ConditionalOrExpressionContext): void {
        if (!!node.COND_OR()) {
            const asSymbol = node.COND_OR().symbol;
            this.setOneSpaceIntervalBetweenContextAndToken(node._leftCondition, asSymbol);
            this.setOneSpaceIntervalBetweenTokenAndContext(asSymbol, node._rightCondition);
        }
        this.visitChildren(node);
    }

    public visitComparison(node: ComparisonContext): void {
        const operator = node.comparisonOperator();
        this.setOneSpaceIntervalBetweenTwoContexts(node._leftValue, operator);
        this.setOneSpaceIntervalBetweenTwoContexts(operator, node._rightValue);
        this.visitChildren(node);
    }

    public visitArray(node: ArrayContext): void {
        this.fixSpacesInCommaSeparatedElements(node.value(), node.COMMA(), node);
    }

    public visitSimpleList(node: SimpleListContext): void {
        this.fixSpacesInCommaSeparatedElements(node.value(), node.COMMA(), node);
    }

    public visitConstList(node: ConstListContext): void {
        this.fixSpacesInCommaSeparatedElements(node.value(), node.COMMA(), node);
    }

    public visitFunctionCall(node: FunctionCallContext): void {
        this.fixSpacesInCommaSeparatedElements(node.functionArgument(), node.COMMA(), node);
    }

    public visitMandatoryArgs(node: MandatoryArgsContext): void {
        this.fixSpacesInCommaSeparatedElements(node.mandatoryArgDecl(), node.COMMA(), node);
    }

    public fixSpacesInCommaSeparatedElements(
        values: ParserRuleContext[],
        commas: TerminalNode[],
        baseNode: ParserRuleContext,
    ): void {
        this.visitChildren(baseNode);
        if (this.isDocumentFormatImpossible()) {
            return;
        }
        for (let index = 0; index < commas.length; index++) {
            const leftContext = values[index];
            const comma = commas[index];
            const rightContext = values[index + 1];
            this.removeSpaceInterval(leftContext.stop.stopIndex, comma.symbol.startIndex);
            this.setOneSpaceIntervalBetweenTokenAndContext(comma.symbol, rightContext);
        }
    }

    public visitInstruction_assignment(node: Instruction_assignmentContext) {
        const equalSymbol = node.EQUAL_ASSIGNMENT().symbol;
        this.setOneSpaceIntervalBetweenContextAndToken(node._leftHand, equalSymbol);
        this.setOneSpaceIntervalBetweenTokenAndContext(equalSymbol, node._rightHand);
        this.visitChildren(node);
    }

    public visitInstruction_multivaluedAssignment(node: Instruction_multivaluedAssignmentContext) {
        const equalSymbol = node.MULTIVALUED_ASSIGNMENT().symbol;
        this.setOneSpaceIntervalBetweenContextAndToken(node._leftHand, equalSymbol);
        this.setOneSpaceIntervalBetweenTokenAndContext(equalSymbol, node._rightHand);
        this.visitChildren(node);
    }

    public visitInstruction(node: InstructionContext) {
        if (this.isDocumentFormatImpossible()) {
            this.visitChildren(node);
            return;
        }
        // There is already a semicolon, or we are not in a block, or we don't want to add semicolons.
        // Adding a semicolon isn't necessary.
        if (
            !!node.SEMICOLON() ||
            !(node.parent instanceof ActionBlockContext) ||
            !this.docFormatSettings ||
            this.docFormatSettings.semicolonWhenPossible === 'no'
        ) {
            this.visitChildren(node);
            return;
        }

        // Case of a node without children. May happen when there are syntax errors.
        if (node.childCount <= 0) {
            return;
        }
        // Get the last child of this node − the one that ends the instruction.
        // We do this instead of doing this inside a classic `visitXXX(XXXContext)`
        // because here is the only place where we have enough context to add semicolon.
        const lastChild = node.getChild(node.childCount - 1);

        if (lastChild === node.instruction_assignment()) {
            this.addSemiColon(node.instruction_assignment());
        } else if (lastChild === node.instruction_multivaluedAssignment()) {
            this.addSemiColon(node.instruction_multivaluedAssignment());
        } else if (lastChild === node.instruction_return()) {
            this.addSemiColon(node.instruction_return());
        } else if (lastChild === node.instruction_chainedCall()) {
            this.addSemiColon(node.instruction_chainedCall());
        } else if (lastChild === node.instruction_try_catch()) {
            this.addSemiColon(node.instruction_try_catch());
        } else if (lastChild === node.instruction_timeCounter()) {
            this.addSemiColon(node.instruction_timeCounter());
        } else {
            // do nothing → the instruction doesn't require a semicolon.
        }
        // Continue visiting nodes to apply other fixes.
        this.visitChildren(node);
    }

    public visitInstruction_ifElse(node: Instruction_ifElseContext): void {
        // One ifExpression + n×elseIfExpression + 0−1×elseExpression
        this.visitChildren(node);
        let previousNode: ParserRuleContext = node.ifExpression();
        for (const elseIfExpression of node.elseIfExpression()) {
            this.setOneSpaceIntervalBetweenTwoContexts(previousNode, elseIfExpression);
            previousNode = elseIfExpression;
        }
        if (!!node.elseExpression()) {
            this.setOneSpaceIntervalBetweenTwoContexts(previousNode, node.elseExpression());
        }
    }

    public visitElseIfExpression(node: ElseIfExpressionContext): void {
        this.visitChildren(node);
        if (this.isDocumentFormatImpossible()) {
            return;
        }
        this.setOneSpaceIntervalBetweenTokenAndContext(node.ELSE().symbol, node.ifExpression());
    }

    public visitElseExpression(node: ElseExpressionContext): void {
        this.visitChildren(node);
        if (this.isDocumentFormatImpossible()) {
            return;
        }
        this.setOneSpaceIntervalBetweenTokenAndContext(node.ELSE().symbol, node.actionBlockOrInstruction());
    }

    /**
     * Set a one space interval between two elements: a token and a parser rule context.
     * @param left the left element
     * @param right the right element
     */
    public setOneSpaceIntervalBetweenTokenAndContext(left: Token, right: ParserRuleContext): void {
        const leftEnd = left.stopIndex;
        const rightStart = right._start.startIndex;
        const sameLine = left.line === right._start.line;
        this.setOneSpaceInterval(leftEnd, rightStart, sameLine);
    }

    /**
     * Set a one space interval between two elements: a parser rule context and another parser rule context.
     * @param left the left element
     * @param right the right element
     */
    public setOneSpaceIntervalBetweenTwoContexts(left: ParserRuleContext, right: ParserRuleContext): void {
        const leftEnd = left._stop.stopIndex;
        const rightStart = right._start.startIndex;
        const sameLine = left._stop.line === right._start.line;
        this.setOneSpaceInterval(leftEnd, rightStart, sameLine);
    }

    /**
     * Set a one space interval between two elements: a parser rule context and a token.
     * @param left the left element
     * @param right the right element
     */
    public setOneSpaceIntervalBetweenContextAndToken(left: ParserRuleContext, right: Token): void {
        const ifEnd = left._stop.stopIndex;
        const startElse = right.startIndex;
        const sameLine = left._stop.line === right.line;
        this.setOneSpaceInterval(ifEnd, startElse, sameLine);
    }

    public visitIfExpression(node: IfExpressionContext): void {
        if (this.isDocumentFormatImpossible()) {
            this.visitChildren(node);
            return;
        }

        const ifSymbolEnd = node.IF().symbol.stopIndex;
        const openParStart = node.OPEN_PAR().symbol.startIndex;
        const sameLine = node.IF().symbol.line === node.OPEN_PAR().symbol.line;
        if (this.docFormatSettings.spaceBetweenKeywordAndParenthesis === 'yes') {
            this.setOneSpaceInterval(ifSymbolEnd, openParStart, sameLine);
        } else {
            this.removeSpaceInterval(ifSymbolEnd, openParStart);
        }

        if (node.actionBlockOrInstruction().actionBlock() === null) {
            this.visitChildren(node);
            return;
        }
        this.setOneSpaceIntervalBetweenTokenAndContext(node.CLOSE_PAR().symbol, node.actionBlockOrInstruction());
        this.visitChildren(node);
    }

    /**
     * Add text edits in order to have no space between `leftElementEnd` and `rightElementStart`.
     * Do nothing if there is already a zero space distance.
     */
    private removeSpaceInterval(leftElementEnd: number, rightElementStart: number) {
        if (this.isDocumentFormatImpossible()) {
            return;
        }
        if (rightElementStart - leftElementEnd === 1) {
            // There is already no space between the two elements.
            return;
        }
        // One or more spaces.
        this.filePossibleEdits.push(
            TextEdit.del(
                Range.create(this.document.positionAt(leftElementEnd + 1), this.document.positionAt(rightElementStart)),
            ),
        );
    }

    /**
     * Add text edits in order to have only one space between `leftElementEnd` and `rightElementStart`.
     * Do nothing if there is already a one space distance or if the two elements are not on the same line.
     */
    private setOneSpaceInterval(leftElementEnd: number, rightElementStart: number, sameLine: boolean): void {
        if (this.isDocumentFormatImpossible()) {
            return;
        }
        // Don't force one space interval when the left element and the right element are not on the same line.
        if (!sameLine) {
            return;
        }
        if (rightElementStart - leftElementEnd === 2) {
            // There is already one space.
            return;
        }
        if (rightElementStart - leftElementEnd === 1) {
            // Add missing space.
            // Case where we have something like “a== b” or “a==b”,
            // the distance between the end of “a“ (leftElementEnd) and the first “=” (rightElementStart)
            // is 1 because there is no other space between them.
            this.filePossibleEdits.push(TextEdit.insert(this.document.positionAt(leftElementEnd + 1), ' '));
            return;
        }
        // More than one space, we replace all the spaces with only one.
        this.filePossibleEdits.push(
            TextEdit.replace(
                Range.create(this.document.positionAt(leftElementEnd + 1), this.document.positionAt(rightElementStart)),
                ' ',
            ),
        );
    }

    /** Add an edit that adds a semicolon right after the provided node. */
    private addSemiColon(node: ParserRuleContext): void {
        if (this.isDocumentFormatImpossible()) {
            return;
        }
        this.filePossibleEdits.push(TextEdit.insert(this.document.positionAt(node.stop.stopIndex + 1), ';'));
    }

    /** Indicate if the document format is impossible and shouldn't be done. */
    private isDocumentFormatImpossible(): boolean {
        return !this.filePossibleEdits || !this.document;
    }
}
