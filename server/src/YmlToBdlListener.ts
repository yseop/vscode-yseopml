// Generated from src/YmlToBdl.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `YmlToBdlParser`.
 */
export interface YmlToBdlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `YmlToBdlParser.kaoFile`.
	 * @param ctx the parse tree
	 */
	enterKaoFile?: (ctx: KaoFileContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.kaoFile`.
	 * @param ctx the parse tree
	 */
	exitKaoFile?: (ctx: KaoFileContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.ymlEntity`.
	 * @param ctx the parse tree
	 */
	enterYmlEntity?: (ctx: YmlEntityContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.ymlEntity`.
	 * @param ctx the parse tree
	 */
	exitYmlEntity?: (ctx: YmlEntityContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.expressionMarker`.
	 * @param ctx the parse tree
	 */
	enterExpressionMarker?: (ctx: ExpressionMarkerContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.expressionMarker`.
	 * @param ctx the parse tree
	 */
	exitExpressionMarker?: (ctx: ExpressionMarkerContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.ymlId`.
	 * @param ctx the parse tree
	 */
	enterYmlId?: (ctx: YmlIdContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.ymlId`.
	 * @param ctx the parse tree
	 */
	exitYmlId?: (ctx: YmlIdContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.yenum`.
	 * @param ctx the parse tree
	 */
	enterYenum?: (ctx: YenumContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.yenum`.
	 * @param ctx the parse tree
	 */
	exitYenum?: (ctx: YenumContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.enumElement`.
	 * @param ctx the parse tree
	 */
	enterEnumElement?: (ctx: EnumElementContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.enumElement`.
	 * @param ctx the parse tree
	 */
	exitEnumElement?: (ctx: EnumElementContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.classImplementation`.
	 * @param ctx the parse tree
	 */
	enterClassImplementation?: (ctx: ClassImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.classImplementation`.
	 * @param ctx the parse tree
	 */
	exitClassImplementation?: (ctx: ClassImplementationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.override`.
	 * @param ctx the parse tree
	 */
	enterOverride?: (ctx: OverrideContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.override`.
	 * @param ctx the parse tree
	 */
	exitOverride?: (ctx: OverrideContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.overrideInstruction`.
	 * @param ctx the parse tree
	 */
	enterOverrideInstruction?: (ctx: OverrideInstructionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.overrideInstruction`.
	 * @param ctx the parse tree
	 */
	exitOverrideInstruction?: (ctx: OverrideInstructionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.classDeclarationIntro`.
	 * @param ctx the parse tree
	 */
	enterClassDeclarationIntro?: (ctx: ClassDeclarationIntroContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.classDeclarationIntro`.
	 * @param ctx the parse tree
	 */
	exitClassDeclarationIntro?: (ctx: ClassDeclarationIntroContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.extendsBlock`.
	 * @param ctx the parse tree
	 */
	enterExtendsBlock?: (ctx: ExtendsBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.extendsBlock`.
	 * @param ctx the parse tree
	 */
	exitExtendsBlock?: (ctx: ExtendsBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.parentClassName`.
	 * @param ctx the parse tree
	 */
	enterParentClassName?: (ctx: ParentClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.parentClassName`.
	 * @param ctx the parse tree
	 */
	exitParentClassName?: (ctx: ParentClassNameContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.synonym`.
	 * @param ctx the parse tree
	 */
	enterSynonym?: (ctx: SynonymContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.synonym`.
	 * @param ctx the parse tree
	 */
	exitSynonym?: (ctx: SynonymContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.classAttributeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassAttributeDeclaration?: (ctx: ClassAttributeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.classAttributeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassAttributeDeclaration?: (ctx: ClassAttributeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.memberType`.
	 * @param ctx the parse tree
	 */
	enterMemberType?: (ctx: MemberTypeContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.memberType`.
	 * @param ctx the parse tree
	 */
	exitMemberType?: (ctx: MemberTypeContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.path`.
	 * @param ctx the parse tree
	 */
	enterPath?: (ctx: PathContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.path`.
	 * @param ctx the parse tree
	 */
	exitPath?: (ctx: PathContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.ymlIdOrPath`.
	 * @param ctx the parse tree
	 */
	enterYmlIdOrPath?: (ctx: YmlIdOrPathContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.ymlIdOrPath`.
	 * @param ctx the parse tree
	 */
	exitYmlIdOrPath?: (ctx: YmlIdOrPathContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.commonField`.
	 * @param ctx the parse tree
	 */
	enterCommonField?: (ctx: CommonFieldContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.commonField`.
	 * @param ctx the parse tree
	 */
	exitCommonField?: (ctx: CommonFieldContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.local_variable_decl`.
	 * @param ctx the parse tree
	 */
	enterLocal_variable_decl?: (ctx: Local_variable_declContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.local_variable_decl`.
	 * @param ctx the parse tree
	 */
	exitLocal_variable_decl?: (ctx: Local_variable_declContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.localField`.
	 * @param ctx the parse tree
	 */
	enterLocalField?: (ctx: LocalFieldContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.localField`.
	 * @param ctx the parse tree
	 */
	exitLocalField?: (ctx: LocalFieldContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.returnField`.
	 * @param ctx the parse tree
	 */
	enterReturnField?: (ctx: ReturnFieldContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.returnField`.
	 * @param ctx the parse tree
	 */
	exitReturnField?: (ctx: ReturnFieldContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.classPropertiesBlock`.
	 * @param ctx the parse tree
	 */
	enterClassPropertiesBlock?: (ctx: ClassPropertiesBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.classPropertiesBlock`.
	 * @param ctx the parse tree
	 */
	exitClassPropertiesBlock?: (ctx: ClassPropertiesBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.documentation`.
	 * @param ctx the parse tree
	 */
	enterDocumentation?: (ctx: DocumentationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.documentation`.
	 * @param ctx the parse tree
	 */
	exitDocumentation?: (ctx: DocumentationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.valueOrCondition`.
	 * @param ctx the parse tree
	 */
	enterValueOrCondition?: (ctx: ValueOrConditionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.valueOrCondition`.
	 * @param ctx the parse tree
	 */
	exitValueOrCondition?: (ctx: ValueOrConditionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.hashMapKeyValue`.
	 * @param ctx the parse tree
	 */
	enterHashMapKeyValue?: (ctx: HashMapKeyValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.hashMapKeyValue`.
	 * @param ctx the parse tree
	 */
	exitHashMapKeyValue?: (ctx: HashMapKeyValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.hashMapValue`.
	 * @param ctx the parse tree
	 */
	enterHashMapValue?: (ctx: HashMapValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.hashMapValue`.
	 * @param ctx the parse tree
	 */
	exitHashMapValue?: (ctx: HashMapValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instruction_forEach`.
	 * @param ctx the parse tree
	 */
	enterInstruction_forEach?: (ctx: Instruction_forEachContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instruction_forEach`.
	 * @param ctx the parse tree
	 */
	exitInstruction_forEach?: (ctx: Instruction_forEachContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instruction_for`.
	 * @param ctx the parse tree
	 */
	enterInstruction_for?: (ctx: Instruction_forContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instruction_for`.
	 * @param ctx the parse tree
	 */
	exitInstruction_for?: (ctx: Instruction_forContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instruction_ifExprBlock`.
	 * @param ctx the parse tree
	 */
	enterInstruction_ifExprBlock?: (ctx: Instruction_ifExprBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instruction_ifExprBlock`.
	 * @param ctx the parse tree
	 */
	exitInstruction_ifExprBlock?: (ctx: Instruction_ifExprBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.ifExprBlock`.
	 * @param ctx the parse tree
	 */
	enterIfExprBlock?: (ctx: IfExprBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.ifExprBlock`.
	 * @param ctx the parse tree
	 */
	exitIfExprBlock?: (ctx: IfExprBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.bool`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.bool`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.nonArithmeticValue`.
	 * @param ctx the parse tree
	 */
	enterNonArithmeticValue?: (ctx: NonArithmeticValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.nonArithmeticValue`.
	 * @param ctx the parse tree
	 */
	exitNonArithmeticValue?: (ctx: NonArithmeticValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instanciationVariable`.
	 * @param ctx the parse tree
	 */
	enterInstanciationVariable?: (ctx: InstanciationVariableContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instanciationVariable`.
	 * @param ctx the parse tree
	 */
	exitInstanciationVariable?: (ctx: InstanciationVariableContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.indexedCall`.
	 * @param ctx the parse tree
	 */
	enterIndexedCall?: (ctx: IndexedCallContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.indexedCall`.
	 * @param ctx the parse tree
	 */
	exitIndexedCall?: (ctx: IndexedCallContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.functionArgument`.
	 * @param ctx the parse tree
	 */
	enterFunctionArgument?: (ctx: FunctionArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.functionArgument`.
	 * @param ctx the parse tree
	 */
	exitFunctionArgument?: (ctx: FunctionArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.chainedCall`.
	 * @param ctx the parse tree
	 */
	enterChainedCall?: (ctx: ChainedCallContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.chainedCall`.
	 * @param ctx the parse tree
	 */
	exitChainedCall?: (ctx: ChainedCallContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.inlineDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInlineDeclaration?: (ctx: InlineDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.inlineDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInlineDeclaration?: (ctx: InlineDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.inlineOperation`.
	 * @param ctx the parse tree
	 */
	enterInlineOperation?: (ctx: InlineOperationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.inlineOperation`.
	 * @param ctx the parse tree
	 */
	exitInlineOperation?: (ctx: InlineOperationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.fieldValue`.
	 * @param ctx the parse tree
	 */
	enterFieldValue?: (ctx: FieldValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.fieldValue`.
	 * @param ctx the parse tree
	 */
	exitFieldValue?: (ctx: FieldValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.argsBlock`.
	 * @param ctx the parse tree
	 */
	enterArgsBlock?: (ctx: ArgsBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.argsBlock`.
	 * @param ctx the parse tree
	 */
	exitArgsBlock?: (ctx: ArgsBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.localBlock`.
	 * @param ctx the parse tree
	 */
	enterLocalBlock?: (ctx: LocalBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.localBlock`.
	 * @param ctx the parse tree
	 */
	exitLocalBlock?: (ctx: LocalBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.staticBlock`.
	 * @param ctx the parse tree
	 */
	enterStaticBlock?: (ctx: StaticBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.staticBlock`.
	 * @param ctx the parse tree
	 */
	exitStaticBlock?: (ctx: StaticBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.methodIntro`.
	 * @param ctx the parse tree
	 */
	enterMethodIntro?: (ctx: MethodIntroContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.methodIntro`.
	 * @param ctx the parse tree
	 */
	exitMethodIntro?: (ctx: MethodIntroContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.mandatoryArgs`.
	 * @param ctx the parse tree
	 */
	enterMandatoryArgs?: (ctx: MandatoryArgsContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.mandatoryArgs`.
	 * @param ctx the parse tree
	 */
	exitMandatoryArgs?: (ctx: MandatoryArgsContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.mandatoryArgDecl`.
	 * @param ctx the parse tree
	 */
	enterMandatoryArgDecl?: (ctx: MandatoryArgDeclContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.mandatoryArgDecl`.
	 * @param ctx the parse tree
	 */
	exitMandatoryArgDecl?: (ctx: MandatoryArgDeclContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.optionalArgs`.
	 * @param ctx the parse tree
	 */
	enterOptionalArgs?: (ctx: OptionalArgsContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.optionalArgs`.
	 * @param ctx the parse tree
	 */
	exitOptionalArgs?: (ctx: OptionalArgsContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.optionalArgDecl`.
	 * @param ctx the parse tree
	 */
	enterOptionalArgDecl?: (ctx: OptionalArgDeclContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.optionalArgDecl`.
	 * @param ctx the parse tree
	 */
	exitOptionalArgDecl?: (ctx: OptionalArgDeclContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.argOptionList`.
	 * @param ctx the parse tree
	 */
	enterArgOptionList?: (ctx: ArgOptionListContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.argOptionList`.
	 * @param ctx the parse tree
	 */
	exitArgOptionList?: (ctx: ArgOptionListContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.argOptionBlock`.
	 * @param ctx the parse tree
	 */
	enterArgOptionBlock?: (ctx: ArgOptionBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.argOptionBlock`.
	 * @param ctx the parse tree
	 */
	exitArgOptionBlock?: (ctx: ArgOptionBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.order1Block`.
	 * @param ctx the parse tree
	 */
	enterOrder1Block?: (ctx: Order1BlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.order1Block`.
	 * @param ctx the parse tree
	 */
	exitOrder1Block?: (ctx: Order1BlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instanciationCondition`.
	 * @param ctx the parse tree
	 */
	enterInstanciationCondition?: (ctx: InstanciationConditionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instanciationCondition`.
	 * @param ctx the parse tree
	 */
	exitInstanciationCondition?: (ctx: InstanciationConditionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.order1FullCondition`.
	 * @param ctx the parse tree
	 */
	enterOrder1FullCondition?: (ctx: Order1FullConditionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.order1FullCondition`.
	 * @param ctx the parse tree
	 */
	exitOrder1FullCondition?: (ctx: Order1FullConditionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.combinedComparison`.
	 * @param ctx the parse tree
	 */
	enterCombinedComparison?: (ctx: CombinedComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.combinedComparison`.
	 * @param ctx the parse tree
	 */
	exitCombinedComparison?: (ctx: CombinedComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instruction_multivaluedAssignment`.
	 * @param ctx the parse tree
	 */
	enterInstruction_multivaluedAssignment?: (ctx: Instruction_multivaluedAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instruction_multivaluedAssignment`.
	 * @param ctx the parse tree
	 */
	exitInstruction_multivaluedAssignment?: (ctx: Instruction_multivaluedAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instruction_assignment`.
	 * @param ctx the parse tree
	 */
	enterInstruction_assignment?: (ctx: Instruction_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instruction_assignment`.
	 * @param ctx the parse tree
	 */
	exitInstruction_assignment?: (ctx: Instruction_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.conditionBlock`.
	 * @param ctx the parse tree
	 */
	enterConditionBlock?: (ctx: ConditionBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.conditionBlock`.
	 * @param ctx the parse tree
	 */
	exitConditionBlock?: (ctx: ConditionBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.order0Condition`.
	 * @param ctx the parse tree
	 */
	enterOrder0Condition?: (ctx: Order0ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.order0Condition`.
	 * @param ctx the parse tree
	 */
	exitOrder0Condition?: (ctx: Order0ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instruction_switchCase_withValue`.
	 * @param ctx the parse tree
	 */
	enterInstruction_switchCase_withValue?: (ctx: Instruction_switchCase_withValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instruction_switchCase_withValue`.
	 * @param ctx the parse tree
	 */
	exitInstruction_switchCase_withValue?: (ctx: Instruction_switchCase_withValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instruction_switchCase_asIf`.
	 * @param ctx the parse tree
	 */
	enterInstruction_switchCase_asIf?: (ctx: Instruction_switchCase_asIfContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instruction_switchCase_asIf`.
	 * @param ctx the parse tree
	 */
	exitInstruction_switchCase_asIf?: (ctx: Instruction_switchCase_asIfContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instructionCase`.
	 * @param ctx the parse tree
	 */
	enterInstructionCase?: (ctx: InstructionCaseContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instructionCase`.
	 * @param ctx the parse tree
	 */
	exitInstructionCase?: (ctx: InstructionCaseContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instructionDefault`.
	 * @param ctx the parse tree
	 */
	enterInstructionDefault?: (ctx: InstructionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instructionDefault`.
	 * @param ctx the parse tree
	 */
	exitInstructionDefault?: (ctx: InstructionDefaultContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instruction_break`.
	 * @param ctx the parse tree
	 */
	enterInstruction_break?: (ctx: Instruction_breakContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instruction_break`.
	 * @param ctx the parse tree
	 */
	exitInstruction_break?: (ctx: Instruction_breakContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instruction_ifElse`.
	 * @param ctx the parse tree
	 */
	enterInstruction_ifElse?: (ctx: Instruction_ifElseContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instruction_ifElse`.
	 * @param ctx the parse tree
	 */
	exitInstruction_ifElse?: (ctx: Instruction_ifElseContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instruction_if`.
	 * @param ctx the parse tree
	 */
	enterInstruction_if?: (ctx: Instruction_ifContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instruction_if`.
	 * @param ctx the parse tree
	 */
	exitInstruction_if?: (ctx: Instruction_ifContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instruction_while`.
	 * @param ctx the parse tree
	 */
	enterInstruction_while?: (ctx: Instruction_whileContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instruction_while`.
	 * @param ctx the parse tree
	 */
	exitInstruction_while?: (ctx: Instruction_whileContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instruction_return`.
	 * @param ctx the parse tree
	 */
	enterInstruction_return?: (ctx: Instruction_returnContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instruction_return`.
	 * @param ctx the parse tree
	 */
	exitInstruction_return?: (ctx: Instruction_returnContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instruction_chainedCall`.
	 * @param ctx the parse tree
	 */
	enterInstruction_chainedCall?: (ctx: Instruction_chainedCallContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instruction_chainedCall`.
	 * @param ctx the parse tree
	 */
	exitInstruction_chainedCall?: (ctx: Instruction_chainedCallContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.actionBlock`.
	 * @param ctx the parse tree
	 */
	enterActionBlock?: (ctx: ActionBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.actionBlock`.
	 * @param ctx the parse tree
	 */
	exitActionBlock?: (ctx: ActionBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticExpression?: (ctx: ArithmeticExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.existentialOperator`.
	 * @param ctx the parse tree
	 */
	enterExistentialOperator?: (ctx: ExistentialOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.existentialOperator`.
	 * @param ctx the parse tree
	 */
	exitExistentialOperator?: (ctx: ExistentialOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.variableBlockContent`.
	 * @param ctx the parse tree
	 */
	enterVariableBlockContent?: (ctx: VariableBlockContentContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.variableBlockContent`.
	 * @param ctx the parse tree
	 */
	exitVariableBlockContent?: (ctx: VariableBlockContentContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.staticDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStaticDeclaration?: (ctx: StaticDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.staticDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStaticDeclaration?: (ctx: StaticDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.externDeclaration`.
	 * @param ctx the parse tree
	 */
	enterExternDeclaration?: (ctx: ExternDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.externDeclaration`.
	 * @param ctx the parse tree
	 */
	exitExternDeclaration?: (ctx: ExternDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.constList`.
	 * @param ctx the parse tree
	 */
	enterConstList?: (ctx: ConstListContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.constList`.
	 * @param ctx the parse tree
	 */
	exitConstList?: (ctx: ConstListContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.granule`.
	 * @param ctx the parse tree
	 */
	enterGranule?: (ctx: GranuleContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.granule`.
	 * @param ctx the parse tree
	 */
	exitGranule?: (ctx: GranuleContext) => void;

	/**
	 * Enter a parse tree produced by `YmlToBdlParser.complete`.
	 * @param ctx the parse tree
	 */
	enterComplete?: (ctx: CompleteContext) => void;
	/**
	 * Exit a parse tree produced by `YmlToBdlParser.complete`.
	 * @param ctx the parse tree
	 */
	exitComplete?: (ctx: CompleteContext) => void;
}

