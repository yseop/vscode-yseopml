// Generated from grammar/Yml.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
import { Instruction_whileContext } from "./YmlParser";
import { Instruction_returnContext } from "./YmlParser";
import { Instruction_chainedCallContext } from "./YmlParser";
import { InstructionContext } from "./YmlParser";
import { ActionBlockContext } from "./YmlParser";
import { ArithmeticExpressionContext } from "./YmlParser";
import { ExistentialOperatorContext } from "./YmlParser";
import { VariableBlockContentContext } from "./YmlParser";
import { StaticDeclarationContext } from "./YmlParser";
import { ExternDeclarationContext } from "./YmlParser";
import { ArrayContext } from "./YmlParser";
import { ConstListContext } from "./YmlParser";
import { GranuleContext } from "./YmlParser";
import { CompleteContext } from "./YmlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `YmlParser`.
 */
export interface YmlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `YmlParser.kaoFile`.
	 * @param ctx the parse tree
	 */
	enterKaoFile?: (ctx: KaoFileContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.kaoFile`.
	 * @param ctx the parse tree
	 */
	exitKaoFile?: (ctx: KaoFileContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.ymlEntity`.
	 * @param ctx the parse tree
	 */
	enterYmlEntity?: (ctx: YmlEntityContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.ymlEntity`.
	 * @param ctx the parse tree
	 */
	exitYmlEntity?: (ctx: YmlEntityContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.expressionMarker`.
	 * @param ctx the parse tree
	 */
	enterExpressionMarker?: (ctx: ExpressionMarkerContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.expressionMarker`.
	 * @param ctx the parse tree
	 */
	exitExpressionMarker?: (ctx: ExpressionMarkerContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.ymlId`.
	 * @param ctx the parse tree
	 */
	enterYmlId?: (ctx: YmlIdContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.ymlId`.
	 * @param ctx the parse tree
	 */
	exitYmlId?: (ctx: YmlIdContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.yenum`.
	 * @param ctx the parse tree
	 */
	enterYenum?: (ctx: YenumContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.yenum`.
	 * @param ctx the parse tree
	 */
	exitYenum?: (ctx: YenumContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.enumElement`.
	 * @param ctx the parse tree
	 */
	enterEnumElement?: (ctx: EnumElementContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.enumElement`.
	 * @param ctx the parse tree
	 */
	exitEnumElement?: (ctx: EnumElementContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.classImplementation`.
	 * @param ctx the parse tree
	 */
	enterClassImplementation?: (ctx: ClassImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.classImplementation`.
	 * @param ctx the parse tree
	 */
	exitClassImplementation?: (ctx: ClassImplementationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.override`.
	 * @param ctx the parse tree
	 */
	enterOverride?: (ctx: OverrideContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.override`.
	 * @param ctx the parse tree
	 */
	exitOverride?: (ctx: OverrideContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.overrideInstruction`.
	 * @param ctx the parse tree
	 */
	enterOverrideInstruction?: (ctx: OverrideInstructionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.overrideInstruction`.
	 * @param ctx the parse tree
	 */
	exitOverrideInstruction?: (ctx: OverrideInstructionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.classDeclarationIntro`.
	 * @param ctx the parse tree
	 */
	enterClassDeclarationIntro?: (ctx: ClassDeclarationIntroContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.classDeclarationIntro`.
	 * @param ctx the parse tree
	 */
	exitClassDeclarationIntro?: (ctx: ClassDeclarationIntroContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.extendsBlock`.
	 * @param ctx the parse tree
	 */
	enterExtendsBlock?: (ctx: ExtendsBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.extendsBlock`.
	 * @param ctx the parse tree
	 */
	exitExtendsBlock?: (ctx: ExtendsBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.parentClassName`.
	 * @param ctx the parse tree
	 */
	enterParentClassName?: (ctx: ParentClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.parentClassName`.
	 * @param ctx the parse tree
	 */
	exitParentClassName?: (ctx: ParentClassNameContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.synonym`.
	 * @param ctx the parse tree
	 */
	enterSynonym?: (ctx: SynonymContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.synonym`.
	 * @param ctx the parse tree
	 */
	exitSynonym?: (ctx: SynonymContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.classAttributeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassAttributeDeclaration?: (ctx: ClassAttributeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.classAttributeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassAttributeDeclaration?: (ctx: ClassAttributeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.memberType`.
	 * @param ctx the parse tree
	 */
	enterMemberType?: (ctx: MemberTypeContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.memberType`.
	 * @param ctx the parse tree
	 */
	exitMemberType?: (ctx: MemberTypeContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.path`.
	 * @param ctx the parse tree
	 */
	enterPath?: (ctx: PathContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.path`.
	 * @param ctx the parse tree
	 */
	exitPath?: (ctx: PathContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.ymlIdOrPath`.
	 * @param ctx the parse tree
	 */
	enterYmlIdOrPath?: (ctx: YmlIdOrPathContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.ymlIdOrPath`.
	 * @param ctx the parse tree
	 */
	exitYmlIdOrPath?: (ctx: YmlIdOrPathContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.commonField`.
	 * @param ctx the parse tree
	 */
	enterCommonField?: (ctx: CommonFieldContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.commonField`.
	 * @param ctx the parse tree
	 */
	exitCommonField?: (ctx: CommonFieldContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.local_variable_decl`.
	 * @param ctx the parse tree
	 */
	enterLocal_variable_decl?: (ctx: Local_variable_declContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.local_variable_decl`.
	 * @param ctx the parse tree
	 */
	exitLocal_variable_decl?: (ctx: Local_variable_declContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.localField`.
	 * @param ctx the parse tree
	 */
	enterLocalField?: (ctx: LocalFieldContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.localField`.
	 * @param ctx the parse tree
	 */
	exitLocalField?: (ctx: LocalFieldContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.returnField`.
	 * @param ctx the parse tree
	 */
	enterReturnField?: (ctx: ReturnFieldContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.returnField`.
	 * @param ctx the parse tree
	 */
	exitReturnField?: (ctx: ReturnFieldContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.classPropertiesBlock`.
	 * @param ctx the parse tree
	 */
	enterClassPropertiesBlock?: (ctx: ClassPropertiesBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.classPropertiesBlock`.
	 * @param ctx the parse tree
	 */
	exitClassPropertiesBlock?: (ctx: ClassPropertiesBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.documentation`.
	 * @param ctx the parse tree
	 */
	enterDocumentation?: (ctx: DocumentationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.documentation`.
	 * @param ctx the parse tree
	 */
	exitDocumentation?: (ctx: DocumentationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.valueOrCondition`.
	 * @param ctx the parse tree
	 */
	enterValueOrCondition?: (ctx: ValueOrConditionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.valueOrCondition`.
	 * @param ctx the parse tree
	 */
	exitValueOrCondition?: (ctx: ValueOrConditionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.hashMapKeyValue`.
	 * @param ctx the parse tree
	 */
	enterHashMapKeyValue?: (ctx: HashMapKeyValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.hashMapKeyValue`.
	 * @param ctx the parse tree
	 */
	exitHashMapKeyValue?: (ctx: HashMapKeyValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.hashMapValue`.
	 * @param ctx the parse tree
	 */
	enterHashMapValue?: (ctx: HashMapValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.hashMapValue`.
	 * @param ctx the parse tree
	 */
	exitHashMapValue?: (ctx: HashMapValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_forEach`.
	 * @param ctx the parse tree
	 */
	enterInstruction_forEach?: (ctx: Instruction_forEachContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_forEach`.
	 * @param ctx the parse tree
	 */
	exitInstruction_forEach?: (ctx: Instruction_forEachContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_for`.
	 * @param ctx the parse tree
	 */
	enterInstruction_for?: (ctx: Instruction_forContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_for`.
	 * @param ctx the parse tree
	 */
	exitInstruction_for?: (ctx: Instruction_forContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_ifExprBlock`.
	 * @param ctx the parse tree
	 */
	enterInstruction_ifExprBlock?: (ctx: Instruction_ifExprBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_ifExprBlock`.
	 * @param ctx the parse tree
	 */
	exitInstruction_ifExprBlock?: (ctx: Instruction_ifExprBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.ifExprBlock`.
	 * @param ctx the parse tree
	 */
	enterIfExprBlock?: (ctx: IfExprBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.ifExprBlock`.
	 * @param ctx the parse tree
	 */
	exitIfExprBlock?: (ctx: IfExprBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.bool`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.bool`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.nonArithmeticValue`.
	 * @param ctx the parse tree
	 */
	enterNonArithmeticValue?: (ctx: NonArithmeticValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.nonArithmeticValue`.
	 * @param ctx the parse tree
	 */
	exitNonArithmeticValue?: (ctx: NonArithmeticValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instanciationVariable`.
	 * @param ctx the parse tree
	 */
	enterInstanciationVariable?: (ctx: InstanciationVariableContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instanciationVariable`.
	 * @param ctx the parse tree
	 */
	exitInstanciationVariable?: (ctx: InstanciationVariableContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.indexedCall`.
	 * @param ctx the parse tree
	 */
	enterIndexedCall?: (ctx: IndexedCallContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.indexedCall`.
	 * @param ctx the parse tree
	 */
	exitIndexedCall?: (ctx: IndexedCallContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.functionArgument`.
	 * @param ctx the parse tree
	 */
	enterFunctionArgument?: (ctx: FunctionArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.functionArgument`.
	 * @param ctx the parse tree
	 */
	exitFunctionArgument?: (ctx: FunctionArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.chainedCall`.
	 * @param ctx the parse tree
	 */
	enterChainedCall?: (ctx: ChainedCallContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.chainedCall`.
	 * @param ctx the parse tree
	 */
	exitChainedCall?: (ctx: ChainedCallContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.inlineDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInlineDeclaration?: (ctx: InlineDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.inlineDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInlineDeclaration?: (ctx: InlineDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.inlineOperation`.
	 * @param ctx the parse tree
	 */
	enterInlineOperation?: (ctx: InlineOperationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.inlineOperation`.
	 * @param ctx the parse tree
	 */
	exitInlineOperation?: (ctx: InlineOperationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.fieldValue`.
	 * @param ctx the parse tree
	 */
	enterFieldValue?: (ctx: FieldValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.fieldValue`.
	 * @param ctx the parse tree
	 */
	exitFieldValue?: (ctx: FieldValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.argsBlock`.
	 * @param ctx the parse tree
	 */
	enterArgsBlock?: (ctx: ArgsBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.argsBlock`.
	 * @param ctx the parse tree
	 */
	exitArgsBlock?: (ctx: ArgsBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.localBlock`.
	 * @param ctx the parse tree
	 */
	enterLocalBlock?: (ctx: LocalBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.localBlock`.
	 * @param ctx the parse tree
	 */
	exitLocalBlock?: (ctx: LocalBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.staticBlock`.
	 * @param ctx the parse tree
	 */
	enterStaticBlock?: (ctx: StaticBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.staticBlock`.
	 * @param ctx the parse tree
	 */
	exitStaticBlock?: (ctx: StaticBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.methodIntro`.
	 * @param ctx the parse tree
	 */
	enterMethodIntro?: (ctx: MethodIntroContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.methodIntro`.
	 * @param ctx the parse tree
	 */
	exitMethodIntro?: (ctx: MethodIntroContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.mandatoryArgs`.
	 * @param ctx the parse tree
	 */
	enterMandatoryArgs?: (ctx: MandatoryArgsContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.mandatoryArgs`.
	 * @param ctx the parse tree
	 */
	exitMandatoryArgs?: (ctx: MandatoryArgsContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.mandatoryArgDecl`.
	 * @param ctx the parse tree
	 */
	enterMandatoryArgDecl?: (ctx: MandatoryArgDeclContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.mandatoryArgDecl`.
	 * @param ctx the parse tree
	 */
	exitMandatoryArgDecl?: (ctx: MandatoryArgDeclContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.optionalArgs`.
	 * @param ctx the parse tree
	 */
	enterOptionalArgs?: (ctx: OptionalArgsContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.optionalArgs`.
	 * @param ctx the parse tree
	 */
	exitOptionalArgs?: (ctx: OptionalArgsContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.optionalArgDecl`.
	 * @param ctx the parse tree
	 */
	enterOptionalArgDecl?: (ctx: OptionalArgDeclContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.optionalArgDecl`.
	 * @param ctx the parse tree
	 */
	exitOptionalArgDecl?: (ctx: OptionalArgDeclContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.argOptionList`.
	 * @param ctx the parse tree
	 */
	enterArgOptionList?: (ctx: ArgOptionListContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.argOptionList`.
	 * @param ctx the parse tree
	 */
	exitArgOptionList?: (ctx: ArgOptionListContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.argOptionBlock`.
	 * @param ctx the parse tree
	 */
	enterArgOptionBlock?: (ctx: ArgOptionBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.argOptionBlock`.
	 * @param ctx the parse tree
	 */
	exitArgOptionBlock?: (ctx: ArgOptionBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.order1Block`.
	 * @param ctx the parse tree
	 */
	enterOrder1Block?: (ctx: Order1BlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.order1Block`.
	 * @param ctx the parse tree
	 */
	exitOrder1Block?: (ctx: Order1BlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instanciationCondition`.
	 * @param ctx the parse tree
	 */
	enterInstanciationCondition?: (ctx: InstanciationConditionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instanciationCondition`.
	 * @param ctx the parse tree
	 */
	exitInstanciationCondition?: (ctx: InstanciationConditionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.order1FullCondition`.
	 * @param ctx the parse tree
	 */
	enterOrder1FullCondition?: (ctx: Order1FullConditionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.order1FullCondition`.
	 * @param ctx the parse tree
	 */
	exitOrder1FullCondition?: (ctx: Order1FullConditionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.combinedComparison`.
	 * @param ctx the parse tree
	 */
	enterCombinedComparison?: (ctx: CombinedComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.combinedComparison`.
	 * @param ctx the parse tree
	 */
	exitCombinedComparison?: (ctx: CombinedComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_multivaluedAssignment`.
	 * @param ctx the parse tree
	 */
	enterInstruction_multivaluedAssignment?: (ctx: Instruction_multivaluedAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_multivaluedAssignment`.
	 * @param ctx the parse tree
	 */
	exitInstruction_multivaluedAssignment?: (ctx: Instruction_multivaluedAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_assignment`.
	 * @param ctx the parse tree
	 */
	enterInstruction_assignment?: (ctx: Instruction_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_assignment`.
	 * @param ctx the parse tree
	 */
	exitInstruction_assignment?: (ctx: Instruction_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.conditionBlock`.
	 * @param ctx the parse tree
	 */
	enterConditionBlock?: (ctx: ConditionBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.conditionBlock`.
	 * @param ctx the parse tree
	 */
	exitConditionBlock?: (ctx: ConditionBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.order0Condition`.
	 * @param ctx the parse tree
	 */
	enterOrder0Condition?: (ctx: Order0ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.order0Condition`.
	 * @param ctx the parse tree
	 */
	exitOrder0Condition?: (ctx: Order0ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_switchCase_withValue`.
	 * @param ctx the parse tree
	 */
	enterInstruction_switchCase_withValue?: (ctx: Instruction_switchCase_withValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_switchCase_withValue`.
	 * @param ctx the parse tree
	 */
	exitInstruction_switchCase_withValue?: (ctx: Instruction_switchCase_withValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_switchCase_asIf`.
	 * @param ctx the parse tree
	 */
	enterInstruction_switchCase_asIf?: (ctx: Instruction_switchCase_asIfContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_switchCase_asIf`.
	 * @param ctx the parse tree
	 */
	exitInstruction_switchCase_asIf?: (ctx: Instruction_switchCase_asIfContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instructionCase`.
	 * @param ctx the parse tree
	 */
	enterInstructionCase?: (ctx: InstructionCaseContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instructionCase`.
	 * @param ctx the parse tree
	 */
	exitInstructionCase?: (ctx: InstructionCaseContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instructionDefault`.
	 * @param ctx the parse tree
	 */
	enterInstructionDefault?: (ctx: InstructionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instructionDefault`.
	 * @param ctx the parse tree
	 */
	exitInstructionDefault?: (ctx: InstructionDefaultContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_break`.
	 * @param ctx the parse tree
	 */
	enterInstruction_break?: (ctx: Instruction_breakContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_break`.
	 * @param ctx the parse tree
	 */
	exitInstruction_break?: (ctx: Instruction_breakContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_ifElse`.
	 * @param ctx the parse tree
	 */
	enterInstruction_ifElse?: (ctx: Instruction_ifElseContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_ifElse`.
	 * @param ctx the parse tree
	 */
	exitInstruction_ifElse?: (ctx: Instruction_ifElseContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_if`.
	 * @param ctx the parse tree
	 */
	enterInstruction_if?: (ctx: Instruction_ifContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_if`.
	 * @param ctx the parse tree
	 */
	exitInstruction_if?: (ctx: Instruction_ifContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_while`.
	 * @param ctx the parse tree
	 */
	enterInstruction_while?: (ctx: Instruction_whileContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_while`.
	 * @param ctx the parse tree
	 */
	exitInstruction_while?: (ctx: Instruction_whileContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_return`.
	 * @param ctx the parse tree
	 */
	enterInstruction_return?: (ctx: Instruction_returnContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_return`.
	 * @param ctx the parse tree
	 */
	exitInstruction_return?: (ctx: Instruction_returnContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_chainedCall`.
	 * @param ctx the parse tree
	 */
	enterInstruction_chainedCall?: (ctx: Instruction_chainedCallContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_chainedCall`.
	 * @param ctx the parse tree
	 */
	exitInstruction_chainedCall?: (ctx: Instruction_chainedCallContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.actionBlock`.
	 * @param ctx the parse tree
	 */
	enterActionBlock?: (ctx: ActionBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.actionBlock`.
	 * @param ctx the parse tree
	 */
	exitActionBlock?: (ctx: ActionBlockContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticExpression?: (ctx: ArithmeticExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.existentialOperator`.
	 * @param ctx the parse tree
	 */
	enterExistentialOperator?: (ctx: ExistentialOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.existentialOperator`.
	 * @param ctx the parse tree
	 */
	exitExistentialOperator?: (ctx: ExistentialOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.variableBlockContent`.
	 * @param ctx the parse tree
	 */
	enterVariableBlockContent?: (ctx: VariableBlockContentContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.variableBlockContent`.
	 * @param ctx the parse tree
	 */
	exitVariableBlockContent?: (ctx: VariableBlockContentContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.staticDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStaticDeclaration?: (ctx: StaticDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.staticDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStaticDeclaration?: (ctx: StaticDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.externDeclaration`.
	 * @param ctx the parse tree
	 */
	enterExternDeclaration?: (ctx: ExternDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.externDeclaration`.
	 * @param ctx the parse tree
	 */
	exitExternDeclaration?: (ctx: ExternDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.constList`.
	 * @param ctx the parse tree
	 */
	enterConstList?: (ctx: ConstListContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.constList`.
	 * @param ctx the parse tree
	 */
	exitConstList?: (ctx: ConstListContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.granule`.
	 * @param ctx the parse tree
	 */
	enterGranule?: (ctx: GranuleContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.granule`.
	 * @param ctx the parse tree
	 */
	exitGranule?: (ctx: GranuleContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.complete`.
	 * @param ctx the parse tree
	 */
	enterComplete?: (ctx: CompleteContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.complete`.
	 * @param ctx the parse tree
	 */
	exitComplete?: (ctx: CompleteContext) => void;
}

