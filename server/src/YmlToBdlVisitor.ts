// Generated from src/YmlToBdl.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { KaoFileContext } from "./YmlToBdlParser";
import { YmlEntityContext } from "./YmlToBdlParser";
import { ExpressionMarkerContext } from "./YmlToBdlParser";
import { YmlIdContext } from "./YmlToBdlParser";
import { YenumContext } from "./YmlToBdlParser";
import { EnumElementContext } from "./YmlToBdlParser";
import { ClassDeclarationContext } from "./YmlToBdlParser";
import { ClassImplementationContext } from "./YmlToBdlParser";
import { OverrideContext } from "./YmlToBdlParser";
import { OverrideInstructionContext } from "./YmlToBdlParser";
import { ClassDeclarationIntroContext } from "./YmlToBdlParser";
import { ExtendsBlockContext } from "./YmlToBdlParser";
import { ParentClassNameContext } from "./YmlToBdlParser";
import { SynonymContext } from "./YmlToBdlParser";
import { ClassAttributeDeclarationContext } from "./YmlToBdlParser";
import { MemberDeclarationContext } from "./YmlToBdlParser";
import { MemberTypeContext } from "./YmlToBdlParser";
import { PathContext } from "./YmlToBdlParser";
import { YmlIdOrPathContext } from "./YmlToBdlParser";
import { FieldContext } from "./YmlToBdlParser";
import { CommonFieldContext } from "./YmlToBdlParser";
import { Local_variable_declContext } from "./YmlToBdlParser";
import { LocalFieldContext } from "./YmlToBdlParser";
import { ReturnFieldContext } from "./YmlToBdlParser";
import { ClassPropertiesBlockContext } from "./YmlToBdlParser";
import { DocumentationContext } from "./YmlToBdlParser";
import { ValueOrConditionContext } from "./YmlToBdlParser";
import { HashMapKeyValueContext } from "./YmlToBdlParser";
import { HashMapValueContext } from "./YmlToBdlParser";
import { ValueContext } from "./YmlToBdlParser";
import { Instruction_forEachContext } from "./YmlToBdlParser";
import { Instruction_forContext } from "./YmlToBdlParser";
import { Instruction_ifExprBlockContext } from "./YmlToBdlParser";
import { IfExprBlockContext } from "./YmlToBdlParser";
import { BoolContext } from "./YmlToBdlParser";
import { NonArithmeticValueContext } from "./YmlToBdlParser";
import { InstanciationVariableContext } from "./YmlToBdlParser";
import { ExpressionContext } from "./YmlToBdlParser";
import { FunctionCallContext } from "./YmlToBdlParser";
import { IndexedCallContext } from "./YmlToBdlParser";
import { FunctionArgumentContext } from "./YmlToBdlParser";
import { ChainedCallContext } from "./YmlToBdlParser";
import { InlineDeclarationContext } from "./YmlToBdlParser";
import { InlineOperationContext } from "./YmlToBdlParser";
import { FieldValueContext } from "./YmlToBdlParser";
import { FunctionContext } from "./YmlToBdlParser";
import { ArgsBlockContext } from "./YmlToBdlParser";
import { LocalBlockContext } from "./YmlToBdlParser";
import { StaticBlockContext } from "./YmlToBdlParser";
import { MethodDeclarationContext } from "./YmlToBdlParser";
import { MethodIntroContext } from "./YmlToBdlParser";
import { ArgumentListContext } from "./YmlToBdlParser";
import { MandatoryArgsContext } from "./YmlToBdlParser";
import { MandatoryArgDeclContext } from "./YmlToBdlParser";
import { OptionalArgsContext } from "./YmlToBdlParser";
import { OptionalArgDeclContext } from "./YmlToBdlParser";
import { ArgOptionListContext } from "./YmlToBdlParser";
import { ArgOptionBlockContext } from "./YmlToBdlParser";
import { Order1BlockContext } from "./YmlToBdlParser";
import { InstanciationConditionContext } from "./YmlToBdlParser";
import { Order1FullConditionContext } from "./YmlToBdlParser";
import { CombinedComparisonContext } from "./YmlToBdlParser";
import { ComparisonContext } from "./YmlToBdlParser";
import { ComparisonOperatorContext } from "./YmlToBdlParser";
import { Instruction_multivaluedAssignmentContext } from "./YmlToBdlParser";
import { Instruction_assignmentContext } from "./YmlToBdlParser";
import { ConditionBlockContext } from "./YmlToBdlParser";
import { Order0ConditionContext } from "./YmlToBdlParser";
import { Instruction_switchCase_withValueContext } from "./YmlToBdlParser";
import { Instruction_switchCase_asIfContext } from "./YmlToBdlParser";
import { InstructionCaseContext } from "./YmlToBdlParser";
import { InstructionDefaultContext } from "./YmlToBdlParser";
import { Instruction_breakContext } from "./YmlToBdlParser";
import { Instruction_ifElseContext } from "./YmlToBdlParser";
import { Instruction_ifContext } from "./YmlToBdlParser";
import { Instruction_whileContext } from "./YmlToBdlParser";
import { Instruction_returnContext } from "./YmlToBdlParser";
import { Instruction_chainedCallContext } from "./YmlToBdlParser";
import { InstructionContext } from "./YmlToBdlParser";
import { ActionBlockContext } from "./YmlToBdlParser";
import { ArithmeticExpressionContext } from "./YmlToBdlParser";
import { ExistentialOperatorContext } from "./YmlToBdlParser";
import { VariableBlockContentContext } from "./YmlToBdlParser";
import { StaticDeclarationContext } from "./YmlToBdlParser";
import { ExternDeclarationContext } from "./YmlToBdlParser";
import { ArrayContext } from "./YmlToBdlParser";
import { ConstListContext } from "./YmlToBdlParser";
import { GranuleContext } from "./YmlToBdlParser";
import { CompleteContext } from "./YmlToBdlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `YmlToBdlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface YmlToBdlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `YmlToBdlParser.kaoFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKaoFile?: (ctx: KaoFileContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.ymlEntity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYmlEntity?: (ctx: YmlEntityContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.expressionMarker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionMarker?: (ctx: ExpressionMarkerContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.ymlId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYmlId?: (ctx: YmlIdContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.yenum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYenum?: (ctx: YenumContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.enumElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumElement?: (ctx: EnumElementContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.classImplementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassImplementation?: (ctx: ClassImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.override`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverride?: (ctx: OverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.overrideInstruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverrideInstruction?: (ctx: OverrideInstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.classDeclarationIntro`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclarationIntro?: (ctx: ClassDeclarationIntroContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.extendsBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendsBlock?: (ctx: ExtendsBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.parentClassName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentClassName?: (ctx: ParentClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.synonym`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSynonym?: (ctx: SynonymContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.classAttributeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassAttributeDeclaration?: (ctx: ClassAttributeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.memberType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberType?: (ctx: MemberTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPath?: (ctx: PathContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.ymlIdOrPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYmlIdOrPath?: (ctx: YmlIdOrPathContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.commonField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommonField?: (ctx: CommonFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.local_variable_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_variable_decl?: (ctx: Local_variable_declContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.localField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalField?: (ctx: LocalFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.returnField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnField?: (ctx: ReturnFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.classPropertiesBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassPropertiesBlock?: (ctx: ClassPropertiesBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.documentation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentation?: (ctx: DocumentationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.valueOrCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueOrCondition?: (ctx: ValueOrConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.hashMapKeyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHashMapKeyValue?: (ctx: HashMapKeyValueContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.hashMapValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHashMapValue?: (ctx: HashMapValueContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instruction_forEach`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_forEach?: (ctx: Instruction_forEachContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instruction_for`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_for?: (ctx: Instruction_forContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instruction_ifExprBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_ifExprBlock?: (ctx: Instruction_ifExprBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.ifExprBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExprBlock?: (ctx: IfExprBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.bool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool?: (ctx: BoolContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.nonArithmeticValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonArithmeticValue?: (ctx: NonArithmeticValueContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instanciationVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanciationVariable?: (ctx: InstanciationVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.indexedCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexedCall?: (ctx: IndexedCallContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.functionArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionArgument?: (ctx: FunctionArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.chainedCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChainedCall?: (ctx: ChainedCallContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.inlineDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineDeclaration?: (ctx: InlineDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.inlineOperation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineOperation?: (ctx: InlineOperationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.fieldValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldValue?: (ctx: FieldValueContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.argsBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgsBlock?: (ctx: ArgsBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.localBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalBlock?: (ctx: LocalBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.staticBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticBlock?: (ctx: StaticBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.methodIntro`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodIntro?: (ctx: MethodIntroContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.mandatoryArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMandatoryArgs?: (ctx: MandatoryArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.mandatoryArgDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMandatoryArgDecl?: (ctx: MandatoryArgDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.optionalArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalArgs?: (ctx: OptionalArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.optionalArgDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalArgDecl?: (ctx: OptionalArgDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.argOptionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgOptionList?: (ctx: ArgOptionListContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.argOptionBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgOptionBlock?: (ctx: ArgOptionBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.order1Block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrder1Block?: (ctx: Order1BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instanciationCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanciationCondition?: (ctx: InstanciationConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.order1FullCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrder1FullCondition?: (ctx: Order1FullConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.combinedComparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCombinedComparison?: (ctx: CombinedComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instruction_multivaluedAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_multivaluedAssignment?: (ctx: Instruction_multivaluedAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instruction_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_assignment?: (ctx: Instruction_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.conditionBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionBlock?: (ctx: ConditionBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.order0Condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrder0Condition?: (ctx: Order0ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instruction_switchCase_withValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_switchCase_withValue?: (ctx: Instruction_switchCase_withValueContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instruction_switchCase_asIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_switchCase_asIf?: (ctx: Instruction_switchCase_asIfContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instructionCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstructionCase?: (ctx: InstructionCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instructionDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstructionDefault?: (ctx: InstructionDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instruction_break`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_break?: (ctx: Instruction_breakContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instruction_ifElse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_ifElse?: (ctx: Instruction_ifElseContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instruction_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_if?: (ctx: Instruction_ifContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instruction_while`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_while?: (ctx: Instruction_whileContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instruction_return`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_return?: (ctx: Instruction_returnContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instruction_chainedCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_chainedCall?: (ctx: Instruction_chainedCallContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.actionBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionBlock?: (ctx: ActionBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.existentialOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistentialOperator?: (ctx: ExistentialOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.variableBlockContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableBlockContent?: (ctx: VariableBlockContentContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.staticDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticDeclaration?: (ctx: StaticDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.externDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternDeclaration?: (ctx: ExternDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.constList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstList?: (ctx: ConstListContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.granule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGranule?: (ctx: GranuleContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.complete`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplete?: (ctx: CompleteContext) => Result;
}

