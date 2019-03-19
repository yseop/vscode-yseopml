// Generated from grammar/Yml.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { KaoFileContext } from "./YmlParser";
import { YmlEntityContext } from "./YmlParser";
import { ExpressionMarkerContext } from "./YmlParser";
import { YmlIdContext } from "./YmlParser";
import { YenumContext } from "./YmlParser";
import { EnumElementContext } from "./YmlParser";
import { ClassDeclarationContext } from "./YmlParser";
import { ClassImplementationContext } from "./YmlParser";
import { OverrideContext } from "./YmlParser";
import { OverrideInstructionContext } from "./YmlParser";
import { ClassDeclarationIntroContext } from "./YmlParser";
import { ExtendsBlockContext } from "./YmlParser";
import { ParentClassNameContext } from "./YmlParser";
import { SynonymContext } from "./YmlParser";
import { ClassAttributeDeclarationContext } from "./YmlParser";
import { MemberDeclarationContext } from "./YmlParser";
import { MemberTypeContext } from "./YmlParser";
import { PathContext } from "./YmlParser";
import { YmlIdOrPathContext } from "./YmlParser";
import { FieldContext } from "./YmlParser";
import { CommonFieldContext } from "./YmlParser";
import { Local_variable_declContext } from "./YmlParser";
import { LocalFieldContext } from "./YmlParser";
import { ReturnFieldContext } from "./YmlParser";
import { ClassPropertiesBlockContext } from "./YmlParser";
import { DocumentationContext } from "./YmlParser";
import { ValueOrConditionContext } from "./YmlParser";
import { HashMapKeyValueContext } from "./YmlParser";
import { HashMapValueContext } from "./YmlParser";
import { ValueContext } from "./YmlParser";
import { Instruction_forEachContext } from "./YmlParser";
import { Instruction_forContext } from "./YmlParser";
import { Instruction_ifExprBlockContext } from "./YmlParser";
import { IfExprBlockContext } from "./YmlParser";
import { BoolContext } from "./YmlParser";
import { NonArithmeticValueContext } from "./YmlParser";
import { InstanciationVariableContext } from "./YmlParser";
import { ExpressionContext } from "./YmlParser";
import { FunctionCallContext } from "./YmlParser";
import { IndexedCallContext } from "./YmlParser";
import { FunctionArgumentContext } from "./YmlParser";
import { ChainedCallContext } from "./YmlParser";
import { InlineDeclarationContext } from "./YmlParser";
import { InlineOperationContext } from "./YmlParser";
import { FieldValueContext } from "./YmlParser";
import { FunctionContext } from "./YmlParser";
import { ArgsBlockContext } from "./YmlParser";
import { LocalBlockContext } from "./YmlParser";
import { StaticBlockContext } from "./YmlParser";
import { MethodDeclarationContext } from "./YmlParser";
import { MethodIntroContext } from "./YmlParser";
import { ArgumentListContext } from "./YmlParser";
import { MandatoryArgsContext } from "./YmlParser";
import { MandatoryArgDeclContext } from "./YmlParser";
import { OptionalArgsContext } from "./YmlParser";
import { OptionalArgDeclContext } from "./YmlParser";
import { ArgOptionListContext } from "./YmlParser";
import { ArgOptionBlockContext } from "./YmlParser";
import { Order1BlockContext } from "./YmlParser";
import { InstanciationConditionContext } from "./YmlParser";
import { Order1FullConditionContext } from "./YmlParser";
import { CombinedComparisonContext } from "./YmlParser";
import { ComparisonContext } from "./YmlParser";
import { ComparisonOperatorContext } from "./YmlParser";
import { Instruction_multivaluedAssignmentContext } from "./YmlParser";
import { Instruction_assignmentContext } from "./YmlParser";
import { ConditionBlockContext } from "./YmlParser";
import { Order0ConditionContext } from "./YmlParser";
import { Instruction_switchCase_withValueContext } from "./YmlParser";
import { Instruction_switchCase_asIfContext } from "./YmlParser";
import { InstructionCaseContext } from "./YmlParser";
import { InstructionDefaultContext } from "./YmlParser";
import { Instruction_breakContext } from "./YmlParser";
import { Instruction_ifElseContext } from "./YmlParser";
import { Instruction_ifContext } from "./YmlParser";
import { Instruction_forallContext } from "./YmlParser";
import { Instruction_whileContext } from "./YmlParser";
import { Instruction_returnContext } from "./YmlParser";
import { Instruction_chainedCallContext } from "./YmlParser";
import { InstructionContext } from "./YmlParser";
import { Instruction_doContext } from "./YmlParser";
import { Instruction_try_catchContext } from "./YmlParser";
import { ActionBlockContext } from "./YmlParser";
import { ArithmeticExpressionContext } from "./YmlParser";
import { ExistentialOperatorContext } from "./YmlParser";
import { VariableBlockContentContext } from "./YmlParser";
import { StaticDeclarationContext } from "./YmlParser";
import { ExternDeclarationContext } from "./YmlParser";
import { ArrayContext } from "./YmlParser";
import { ConstListContext } from "./YmlParser";
import { GranuleContext } from "./YmlParser";
import { ObjectCompleteContext } from "./YmlParser";
import { ClassCompleteContext } from "./YmlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `YmlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface YmlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `YmlParser.kaoFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKaoFile?: (ctx: KaoFileContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.ymlEntity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYmlEntity?: (ctx: YmlEntityContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.expressionMarker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionMarker?: (ctx: ExpressionMarkerContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.ymlId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYmlId?: (ctx: YmlIdContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.yenum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYenum?: (ctx: YenumContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.enumElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumElement?: (ctx: EnumElementContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.classImplementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassImplementation?: (ctx: ClassImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.override`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverride?: (ctx: OverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.overrideInstruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverrideInstruction?: (ctx: OverrideInstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.classDeclarationIntro`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclarationIntro?: (ctx: ClassDeclarationIntroContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.extendsBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendsBlock?: (ctx: ExtendsBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.parentClassName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentClassName?: (ctx: ParentClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.synonym`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSynonym?: (ctx: SynonymContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.classAttributeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassAttributeDeclaration?: (ctx: ClassAttributeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.memberType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberType?: (ctx: MemberTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPath?: (ctx: PathContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.ymlIdOrPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYmlIdOrPath?: (ctx: YmlIdOrPathContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.commonField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommonField?: (ctx: CommonFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.local_variable_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_variable_decl?: (ctx: Local_variable_declContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.localField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalField?: (ctx: LocalFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.returnField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnField?: (ctx: ReturnFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.classPropertiesBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassPropertiesBlock?: (ctx: ClassPropertiesBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.documentation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentation?: (ctx: DocumentationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.valueOrCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueOrCondition?: (ctx: ValueOrConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.hashMapKeyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHashMapKeyValue?: (ctx: HashMapKeyValueContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.hashMapValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHashMapValue?: (ctx: HashMapValueContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_forEach`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_forEach?: (ctx: Instruction_forEachContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_for`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_for?: (ctx: Instruction_forContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_ifExprBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_ifExprBlock?: (ctx: Instruction_ifExprBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.ifExprBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExprBlock?: (ctx: IfExprBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.bool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool?: (ctx: BoolContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.nonArithmeticValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonArithmeticValue?: (ctx: NonArithmeticValueContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instanciationVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanciationVariable?: (ctx: InstanciationVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.indexedCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexedCall?: (ctx: IndexedCallContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.functionArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionArgument?: (ctx: FunctionArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.chainedCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChainedCall?: (ctx: ChainedCallContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.inlineDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineDeclaration?: (ctx: InlineDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.inlineOperation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineOperation?: (ctx: InlineOperationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.fieldValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldValue?: (ctx: FieldValueContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.argsBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgsBlock?: (ctx: ArgsBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.localBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalBlock?: (ctx: LocalBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.staticBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticBlock?: (ctx: StaticBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.methodIntro`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodIntro?: (ctx: MethodIntroContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.mandatoryArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMandatoryArgs?: (ctx: MandatoryArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.mandatoryArgDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMandatoryArgDecl?: (ctx: MandatoryArgDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.optionalArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalArgs?: (ctx: OptionalArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.optionalArgDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalArgDecl?: (ctx: OptionalArgDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.argOptionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgOptionList?: (ctx: ArgOptionListContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.argOptionBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgOptionBlock?: (ctx: ArgOptionBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.order1Block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrder1Block?: (ctx: Order1BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instanciationCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanciationCondition?: (ctx: InstanciationConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.order1FullCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrder1FullCondition?: (ctx: Order1FullConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.combinedComparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCombinedComparison?: (ctx: CombinedComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_multivaluedAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_multivaluedAssignment?: (ctx: Instruction_multivaluedAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_assignment?: (ctx: Instruction_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.conditionBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionBlock?: (ctx: ConditionBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.order0Condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrder0Condition?: (ctx: Order0ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_switchCase_withValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_switchCase_withValue?: (ctx: Instruction_switchCase_withValueContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_switchCase_asIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_switchCase_asIf?: (ctx: Instruction_switchCase_asIfContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instructionCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstructionCase?: (ctx: InstructionCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instructionDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstructionDefault?: (ctx: InstructionDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_break`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_break?: (ctx: Instruction_breakContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_ifElse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_ifElse?: (ctx: Instruction_ifElseContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_if?: (ctx: Instruction_ifContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_forall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_forall?: (ctx: Instruction_forallContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_while`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_while?: (ctx: Instruction_whileContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_return`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_return?: (ctx: Instruction_returnContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_chainedCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_chainedCall?: (ctx: Instruction_chainedCallContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_do`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_do?: (ctx: Instruction_doContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.instruction_try_catch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_try_catch?: (ctx: Instruction_try_catchContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.actionBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionBlock?: (ctx: ActionBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.existentialOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistentialOperator?: (ctx: ExistentialOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.variableBlockContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableBlockContent?: (ctx: VariableBlockContentContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.staticDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticDeclaration?: (ctx: StaticDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.externDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternDeclaration?: (ctx: ExternDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.constList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstList?: (ctx: ConstListContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.granule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGranule?: (ctx: GranuleContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.objectComplete`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectComplete?: (ctx: ObjectCompleteContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlParser.classComplete`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassComplete?: (ctx: ClassCompleteContext) => Result;
}

