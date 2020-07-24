// tslint:disable-next-line: no-submodule-imports
import { ParserRuleContext } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Range, TextDocument, TextEdit } from 'vscode-languageserver';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import {
    ActionBlockContext,
    CombinedComparisonContext,
    ComparisonContext,
    Instruction_assignmentContext,
    Instruction_ifContext,
    InstructionContext,
    YmlParserVisitor,
} from '../grammar';
import { IDocumentFormatSettings } from '../settings/Settings';

export class YmlBaseVisitor extends AbstractParseTreeVisitor<void> implements YmlParserVisitor<void> {
    constructor(
        public completionProvider: YmlCompletionItemsProvider,
        public uri: string,
        public definitions?: YmlDefinitionProvider,
        public docFormatSettings?: IDocumentFormatSettings,
        public filePossibleEdits?: TextEdit[],
        public document?: TextDocument,
    ) {
        super();
    }

    public defaultResult() {
        // no default
    }

    public isDocumentFormatImpossible(): boolean {
        return !this.docFormatSettings?.enableDocumentFormat || !this.filePossibleEdits || !this.document;
    }

    public visitCombinedComparison(node: CombinedComparisonContext): void {
        if (this.isDocumentFormatImpossible()) {
            return;
        }
        if (!!node.COND_AND()) {
            const asSymbol = node.COND_AND().symbol;
            this.formatSpacesAroundNode(
                node._leftCondition,
                asSymbol.startIndex,
                asSymbol.stopIndex,
                node._rightCondition,
                node._leftCondition._stop.line === asSymbol.line,
                node._rightCondition._stop.line === asSymbol.line,
            );
        }
        if (!!node.COND_OR()) {
            const asSymbol = node.COND_OR().symbol;
            this.formatSpacesAroundNode(
                node._leftCondition,
                asSymbol.startIndex,
                asSymbol.stopIndex,
                node._rightCondition,
                node._leftCondition._stop.line === asSymbol.line,
                node._rightCondition._stop.line === asSymbol.line,
            );
        }
        this.visitChildren(node);
    }

    public visitComparison(node: ComparisonContext): void {
        if (this.isDocumentFormatImpossible()) {
            return;
        }
        const operator = node.comparisonOperator();
        const operatorStart = operator._start.startIndex;
        const operatorEnd = operator._stop.stopIndex;
        this.formatSpacesAroundNode(
            node._leftValue,
            operatorStart,
            operatorEnd,
            node._rightValue,
            node._leftValue._stop.line === operator.start.line,
            node._rightValue._stop.line === operator.stop.line,
        );
    }

    public visitInstruction_assignment(node: Instruction_assignmentContext) {
        if (this.isDocumentFormatImpossible()) {
            return;
        }
        const asSymbol = node.EQUAL_ASSIGNMENT().symbol;
        this.formatSpacesAroundNode(
            node._leftHand,
            asSymbol.startIndex,
            asSymbol.stopIndex,
            node._rightHand,
            node._leftHand._stop.line === asSymbol.line,
            node._rightHand._start.line === asSymbol.line,
        );
        this.visitChildren(node);
    }

    public formatSpacesAroundNode(
        left: ParserRuleContext,
        centralNodeStart: number,
        centralNodeEnd: number,
        right: ParserRuleContext,
        leftAndStartSameLine: boolean,
        endAndRightSameLine: boolean,
    ) {
        const leftEnd = left.stop;
        const rightStart = right.start;

        this.setOneSpaceInterval(leftEnd.stopIndex, centralNodeStart, leftAndStartSameLine);
        this.setOneSpaceInterval(centralNodeEnd, rightStart.startIndex, endAndRightSameLine);
    }

    public visitInstruction_if(node: Instruction_ifContext): void {
        if (this.isDocumentFormatImpossible()) {
            return;
        }
        if (!node.actionBlockOrInstruction().actionBlock()) {
            this.visitChildren(node);
            return;
        }

        const ifSymbolEnd = node.IF().symbol.stopIndex;
        const openParStart = node.OPEN_PAR().symbol.startIndex;
        let sameLine = node.IF().symbol.line === node.OPEN_PAR().symbol.line;
        if (this.docFormatSettings.spaceBetweenKeywordAndParenthesis) {
            this.setOneSpaceInterval(ifSymbolEnd, openParStart, sameLine);
        } else {
            this.removeSpaceInterval(ifSymbolEnd, openParStart);
        }

        const closeParEnd = node.CLOSE_PAR().symbol.stopIndex;
        const startIfBody = node.actionBlockOrInstruction()._start.startIndex;
        sameLine = node.CLOSE_PAR().symbol.line === node.actionBlockOrInstruction()._start.line;
        this.setOneSpaceInterval(closeParEnd, startIfBody, sameLine);
        this.visitChildren(node);
    }
    public removeSpaceInterval(leftElementEnd: number, rightElementStart: number) {
        if (rightElementStart - leftElementEnd === 1) {
            // There is already no space between the two elements.
            return;
        }
        // More than one space.
        this.filePossibleEdits.push(
            TextEdit.replace(
                Range.create(this.document.positionAt(leftElementEnd + 1), this.document.positionAt(rightElementStart)),
                '',
            ),
        );
    }

    public setOneSpaceInterval(leftElementEnd: number, rightElementStart: number, sameLine: boolean): void {
        if (!sameLine) {
            return;
        }
        if (rightElementStart - leftElementEnd === 2) {
            // There is already one space.
            return;
        }
        if (rightElementStart - leftElementEnd === 1) {
            // Add missing spaces.
            // Case where we have something like “a== b” or “a==b”,
            // the distance between the end of “a“ (leftEnd.stopIndex) and the first “=” (start.startIndex)
            // is 1 because there is no other space between them.
            this.filePossibleEdits.push(TextEdit.insert(this.document.positionAt(leftElementEnd + 1), ' '));
            return;
        }
        // More than one space.
        this.filePossibleEdits.push(
            TextEdit.replace(
                Range.create(this.document.positionAt(leftElementEnd + 1), this.document.positionAt(rightElementStart)),
                ' ',
            ),
        );
    }

    public visitInstruction(node: InstructionContext) {
        if (!this.filePossibleEdits || !this.document) {
            return;
        }
        // There is already a semicolon, or we are not in a block, or we don't want to add semicolons.
        // Adding a semicolon isn't necessary.
        if (
            !!node.SEMICOLON() ||
            !(node.parent instanceof ActionBlockContext) ||
            !this.docFormatSettings.semicolonWhenPossible
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

    private addSemiColon(node: ParserRuleContext): void {
        this.filePossibleEdits.push(TextEdit.insert(this.document.positionAt(node.stop.stopIndex + 1), ';'));
    }
}
