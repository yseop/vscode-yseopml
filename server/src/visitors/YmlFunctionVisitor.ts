import { ParserRuleContext } from 'antlr4ts';
import { TextDocument, TextEdit } from 'vscode-languageserver';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import {
    ActionBlockContext,
    CombinedConditionContext,
    FunctionContext,
    IfExprBlockContext,
    Instruction_breakContext,
    Instruction_forallContext,
    Instruction_forContext,
    Instruction_forEachContext,
    Instruction_ifContext,
    Instruction_switchCase_asIfContext,
    Instruction_switchCase_withValueContext,
    Instruction_switchExpr_asIfContext,
    Instruction_switchExpr_withValueContext,
    Instruction_try_catchContext,
    MandatoryArgDeclContext,
    MemberDeclarationContext,
    VariableBlockContentContext,
} from '../grammar';
import { IDocumentFormatSettings } from '../settings/Settings';
import { AbstractYmlFunction, YmlArgument, YmlFunction, YmlObjectInstance } from '../yml-objects';
import { YmlBaseVisitor } from './YmlBaseVisitor';
import { getDocumentation, getType } from './YmlVisitorHelper';

export class YmlFunctionVisitor extends YmlBaseVisitor {
    /**
     * First character of the Function object.
     * Will be used as the start of the scope for its arguments and local variables.
     */
    private scopeStartOffset: number;
    /**
     * Last character of the Function object.
     * Will be used as the end of the scope for its arguments and local variables.
     */
    private scopeEndOffset: number;

    private functionName: string;

    private func: AbstractYmlFunction;

    /**
     * State used when computing the cognitive complexity.
     * The complexity should increase when the operator changes
     * from `&&` to `||` or from `||` to `&&`.
     */
    private previousOperatorIsAnd: boolean = undefined;

    constructor(
        completionProvider: YmlCompletionItemsProvider,
        uri: string,
        public definitions: YmlDefinitionProvider,
        public filePossibleEdits: TextEdit[] = [],
        public document: TextDocument = null,
        public docFormatSettings: IDocumentFormatSettings = null,
    ) {
        super(completionProvider, uri);
    }
    public visitFunction(node: FunctionContext): void {
        this.scopeStartOffset = 0;
        this.scopeEndOffset = 0;
        this.functionName = node.ymlId().text;

        // Always keep track of the location of the implementation.
        // When the Function is a method instanciation
        // the most important part is where this Function is implemented
        // not where the function is declared.
        this.func = new YmlFunction(this.functionName, this.uri);
        const doc = getDocumentation(node.field());
        const type = getType(node.field());
        this.func.enrichWith(doc, type, null);
        this.func.setDefinitionLocation(node.start, node.stop, this.uri);
        this.definitions.addImplementation(this.func);

        if (!this.isMethodInstanciation(this.functionName)) {
            // For a simple Function, also keep track of its definition's location.
            // For now, we'll considere that
            // definition location is the same as implementation location.
            // This is not true since definition can be done
            // with a the `extern` instruction.
            this.definitions.addDefinition(this.func);
            this.completionProvider.addCompletionItem(this.func);
        } else {
            /*
             * The function is a method instance.
             * It has already been added as a completion item.
             */
        }
        /*
         * We need to keep track of the function position in the document.
         * This allows us to retrieve its arguments and local variables.
         */
        this.scopeStartOffset = node.start.startIndex;
        this.scopeEndOffset = node.stop.stopIndex;
        /**
         * Look for the function's arguments and local variables.
         */
        this.visitChildren(node);
    }

    /**
     * Visit the mandatory arguments node of a function when the args are declared between parenthesis.
     * @param node A node representing a mandatory argument of a function.
     */
    public visitMandatoryArgDecl(node: MandatoryArgDeclContext): void {
        const arg = new YmlArgument(node._argName.text, this.uri);
        arg.enrichWith(null, node._argType.text, this.func, this.scopeStartOffset, this.scopeEndOffset);
        this.completionProvider.addCompletionItem(arg);
    }
    /**
     * Visit the member declarations that are in `local` and `args` blocks of functions.
     * @param node A node containing zero or more MemberDeclarationContexts.
     */
    public visitVariableBlockContent(node: VariableBlockContentContext) {
        for (const member of node.memberDeclaration()) {
            this.visitMemberDeclarationContext(member);
        }
    }

    public visitActionBlock(node: ActionBlockContext) {
        this.func.foldingRanges.push({
            startLine: node.OPEN_BRACE().symbol.line - 1,
            endLine: node.CLOSE_BRACE().symbol.line - 1,
        });
        this.visitChildren(node);
    }

    /**
     * Create and save a completion item for a local variable or a function argument
     * and keep track of its scope.
     * @param node A node representing a local variable or a function argument.
     */
    public visitMemberDeclarationContext(node: MemberDeclarationContext): void {
        const variable = new YmlObjectInstance(node.ymlId().text, this.uri, true);
        const doc = getDocumentation(node.field());
        const type = getType(node.field(), node._type.text);
        variable.enrichWith(doc, type, this.func, this.scopeStartOffset, this.scopeEndOffset);
        this.completionProvider.addCompletionItem(variable);
    }

    /**
     * Check if the provided function name is the name of a class method instanciation.
     * If the function name is the name of a class method instanciation if
     * it follows the format “className” + “::” + “methodName”
     * @param fullName The name of a function.
     * @returns `true` iff the provided functionName is a class method instanciation.
     */
    private isMethodInstanciation(fullName: string): boolean {
        // Check that there is a “::”, with at least one character before it.
        return fullName.includes('::', 1);
    }

    public visitInstruction_try_catch(node: Instruction_try_catchContext) {
        // `try_catch` instruction: complexity +1 + nesting level; increase nesting level for inner instructions
        this.goDeeperInComplexity(node);
    }

    public visitInstruction_if(node: Instruction_ifContext) {
        // `if` instruction: complexity +1 + nesting level; increase nesting level for inner instructions
        this.goDeeperInComplexity(node, () => super.visitInstruction_if(node));
    }

    public visitInstruction_forEach(node: Instruction_forEachContext) {
        // `foreach` loop: complexity +1 + nesting level; increase nesting level for inner instructions
        this.goDeeperInComplexity(node);
    }

    public visitInstruction_for(node: Instruction_forContext) {
        // `for` loop: complexity +1 + nesting level; increase nesting level for inner instructions
        this.goDeeperInComplexity(node);
    }

    public visitInstruction_forall(node: Instruction_forallContext) {
        // `forall` loop: complexity +1 + nesting level; increase nesting level for inner instructions
        this.goDeeperInComplexity(node);
    }

    public visitInstruction_switchCase_asIf(node: Instruction_switchCase_asIfContext) {
        // `switch {}`: complexity +1 + nesting level; increase nesting level for inner instructions
        this.goDeeperInComplexity(node);
    }

    public visitInstruction_switchCase_withValue(node: Instruction_switchCase_withValueContext) {
        // `switch(value) {}`: complexity +1 + nesting level; increase nesting level for inner instructions
        this.goDeeperInComplexity(node);
    }

    public visitInstruction_switchExpr_asIf(node: Instruction_switchExpr_asIfContext) {
        // `switchExpr {}`: complexity +1 + nesting level; increase nesting level for inner instructions
        this.goDeeperInComplexity(node);
    }

    public visitInstruction_switchExpr_withValue(node: Instruction_switchExpr_withValueContext) {
        // `switchExpr(value) {}`: complexity +1 + nesting level; increase nesting level for inner instructions
        this.goDeeperInComplexity(node);
    }

    public visitIfExprBlock(node: IfExprBlockContext) {
        // `ifExpr`: complexity +1 + nesting level; increase nesting level for inner instructions
        this.goDeeperInComplexity(node);
    }

    public visitInstruction_break(_node: Instruction_breakContext) {
        // `break` instruction: complexity ++
        this.func.increaseCognitiveComplexity(false);
    }

    public visitCombinedCondition(node: CombinedConditionContext): void {
        // sequence of binary logical operators: complexity ++
        if (!!node.COND_AND() || !!node.COND_OR()) {
            if (this.previousOperatorIsAnd === undefined || !(node._parent instanceof CombinedConditionContext)) {
                // This is the first conditional operator we encounter for the current condition.
                // Set previousOperatorIsAnd to true or false depending on the operator found.
                this.previousOperatorIsAnd = !!node.COND_AND();
            }
            if (!!node.COND_AND() && !this.previousOperatorIsAnd) {
                // We changed operator from `||` to `&&` → we increment complexity
                this.func.increaseCognitiveComplexity(false);
                // FIXME: we should inverse the value of previousOperatorIsAnd here.
                // But this is not possible yet because of how the grammar is built.
            } else if (!!node.COND_OR() && !!this.previousOperatorIsAnd) {
                // We changed operator from `&&` to `||` → we increment complexity
                this.func.increaseCognitiveComplexity(false);
                // FIXME: we should inverse the value of previousOperatorIsAnd here.
                // But this is not possible yet because of how the grammar is built.
            } else {
                // Nothing to do. Current operator is the same as the previous one.
            }
        }
        super.visitCombinedCondition(node);
    }

    /**
     * Increase the cognitive complexity of current AbstractYmlFunction
     * then increase the nesting level and call the provided function or
     * visit current node's children then decrease the nesting level.
     *
     * @param node currently visited node
     * @param someFunction a function to call after increasing the nesting level and before decreasing it
     */
    private goDeeperInComplexity(node: ParserRuleContext, someFunction?: () => void) {
        this.func.increaseCognitiveComplexity();
        this.func.increaseNestingLevel();
        if (!someFunction) {
            this.visitChildren(node);
        } else {
            someFunction();
        }
        this.func.decreaseNestingLevel();
    }
}
