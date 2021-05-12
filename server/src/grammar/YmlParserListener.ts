// Generated from grammar/YmlParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { DeclarationFileContext } from "./YmlParser";
import { KaoFileContext } from "./YmlParser";
import { YmlEntityContext } from "./YmlParser";
import { ExpressionMarkerContext } from "./YmlParser";
import { Instruction_renameContext } from "./YmlParser";
import { YmlIdContext } from "./YmlParser";
import { YenumContext } from "./YmlParser";
import { EnumElementContext } from "./YmlParser";
import { Enum_attributes_blockContext } from "./YmlParser";
import { ClassDeclarationContext } from "./YmlParser";
import { ClassImplementationContext } from "./YmlParser";
import { AttributeImplementationContext } from "./YmlParser";
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
import { ActionFieldContext } from "./YmlParser";
import { ActionFieldValuesContext } from "./YmlParser";
import { ImplementationFieldContext } from "./YmlParser";
import { InstructionNoSemiContext } from "./YmlParser";
import { CommonFieldContext } from "./YmlParser";
import { Local_variable_declContext } from "./YmlParser";
import { LocalFieldContext } from "./YmlParser";
import { ReturnFieldContext } from "./YmlParser";
import { ClassPropertiesBlockContext } from "./YmlParser";
import { MultilineStringContext } from "./YmlParser";
import { ObjectReturnAttributeValueContext } from "./YmlParser";
import { ObjectAttributeValueContext } from "./YmlParser";
import { ValueOrConditionContext } from "./YmlParser";
import { HashMapKeyValueListContext } from "./YmlParser";
import { HashMapContext } from "./YmlParser";
import { HashMapKeyValueContext } from "./YmlParser";
import { HashMapKeyContext } from "./YmlParser";
import { HashMapValueContext } from "./YmlParser";
import { ValueContext } from "./YmlParser";
import { AsContext } from "./YmlParser";
import { ApplyCollectionContext } from "./YmlParser";
import { ApplyCollectionOnContext } from "./YmlParser";
import { Instruction_forEachContext } from "./YmlParser";
import { Instruction_forContext } from "./YmlParser";
import { Instruction_ifExprBlockContext } from "./YmlParser";
import { IfExprBlockContext } from "./YmlParser";
import { BoolContext } from "./YmlParser";
import { NonArithmeticValueContext } from "./YmlParser";
import { InstanciationVariableContext } from "./YmlParser";
import { PossiblyIndexedExpressionContext } from "./YmlParser";
import { ExpressionContext } from "./YmlParser";
import { FunctionCallContext } from "./YmlParser";
import { IndexContext } from "./YmlParser";
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
import { MethodCompleteDeclarationContext } from "./YmlParser";
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
import { ParenthesisConditionalExpressionContext } from "./YmlParser";
import { ConditionalExpressionContext } from "./YmlParser";
import { ConditionalAndExpressionContext } from "./YmlParser";
import { ConditionalOrExpressionContext } from "./YmlParser";
import { ComparisonContext } from "./YmlParser";
import { ComparisonOperatorContext } from "./YmlParser";
import { Instruction_multivaluedAssignmentContext } from "./YmlParser";
import { Instruction_assignmentContext } from "./YmlParser";
import { Assignment_leftHandSideContext } from "./YmlParser";
import { ConditionBlockContext } from "./YmlParser";
import { Order0ConditionContext } from "./YmlParser";
import { ActionBlockOrInstructionContext } from "./YmlParser";
import { Instruction_switchExpr_withValueContext } from "./YmlParser";
import { Instruction_switchExpr_asIfContext } from "./YmlParser";
import { Instruction_switchCase_withValueContext } from "./YmlParser";
import { Instruction_switchCase_asIfContext } from "./YmlParser";
import { InstructionDefault_withValueContext } from "./YmlParser";
import { InstructionCase_withValueContext } from "./YmlParser";
import { InstructionCaseContext } from "./YmlParser";
import { InstructionDefaultContext } from "./YmlParser";
import { Instruction_breakContext } from "./YmlParser";
import { Instruction_ifElseContext } from "./YmlParser";
import { ElseExpressionContext } from "./YmlParser";
import { ElseIfExpressionContext } from "./YmlParser";
import { IfExpressionContext } from "./YmlParser";
import { Instruction_timeCounterContext } from "./YmlParser";
import { InValueContext } from "./YmlParser";
import { Instruction_forallContext } from "./YmlParser";
import { Instruction_whileContext } from "./YmlParser";
import { Instruction_returnContext } from "./YmlParser";
import { Instruction_chainedCallContext } from "./YmlParser";
import { InstructionContext } from "./YmlParser";
import { Instruction_doContext } from "./YmlParser";
import { Instruction_try_catchContext } from "./YmlParser";
import { ActionBlockContext } from "./YmlParser";
import { ArithmeticOperatorContext } from "./YmlParser";
import { UnaryExpressionContext } from "./YmlParser";
import { ArithmeticExpressionContext } from "./YmlParser";
import { ExistentialOperatorContext } from "./YmlParser";
import { VariableBlockContentContext } from "./YmlParser";
import { StaticDeclarationContext } from "./YmlParser";
import { ExternDeclarationContext } from "./YmlParser";
import { ArrayContext } from "./YmlParser";
import { SimpleListContext } from "./YmlParser";
import { ConstListContext } from "./YmlParser";
import { GranuleContext } from "./YmlParser";
import { ObjectCompleteContext } from "./YmlParser";
import { ClassCompleteContext } from "./YmlParser";
import { RulesetContext } from "./YmlParser";
import { RulesContext } from "./YmlParser";
import { YmlruleContext } from "./YmlParser";
import { EmptyBlockContext } from "./YmlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `YmlParser`.
 */
export interface YmlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `YmlParser.declarationFile`.
	 * @param ctx the parse tree
	 */
	enterDeclarationFile?: (ctx: DeclarationFileContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.declarationFile`.
	 * @param ctx the parse tree
	 */
	exitDeclarationFile?: (ctx: DeclarationFileContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.instruction_rename`.
	 * @param ctx the parse tree
	 */
	enterInstruction_rename?: (ctx: Instruction_renameContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_rename`.
	 * @param ctx the parse tree
	 */
	exitInstruction_rename?: (ctx: Instruction_renameContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.enum_attributes_block`.
	 * @param ctx the parse tree
	 */
	enterEnum_attributes_block?: (ctx: Enum_attributes_blockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.enum_attributes_block`.
	 * @param ctx the parse tree
	 */
	exitEnum_attributes_block?: (ctx: Enum_attributes_blockContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.attributeImplementation`.
	 * @param ctx the parse tree
	 */
	enterAttributeImplementation?: (ctx: AttributeImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.attributeImplementation`.
	 * @param ctx the parse tree
	 */
	exitAttributeImplementation?: (ctx: AttributeImplementationContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.actionField`.
	 * @param ctx the parse tree
	 */
	enterActionField?: (ctx: ActionFieldContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.actionField`.
	 * @param ctx the parse tree
	 */
	exitActionField?: (ctx: ActionFieldContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.actionFieldValues`.
	 * @param ctx the parse tree
	 */
	enterActionFieldValues?: (ctx: ActionFieldValuesContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.actionFieldValues`.
	 * @param ctx the parse tree
	 */
	exitActionFieldValues?: (ctx: ActionFieldValuesContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.implementationField`.
	 * @param ctx the parse tree
	 */
	enterImplementationField?: (ctx: ImplementationFieldContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.implementationField`.
	 * @param ctx the parse tree
	 */
	exitImplementationField?: (ctx: ImplementationFieldContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instructionNoSemi`.
	 * @param ctx the parse tree
	 */
	enterInstructionNoSemi?: (ctx: InstructionNoSemiContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instructionNoSemi`.
	 * @param ctx the parse tree
	 */
	exitInstructionNoSemi?: (ctx: InstructionNoSemiContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.multilineString`.
	 * @param ctx the parse tree
	 */
	enterMultilineString?: (ctx: MultilineStringContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.multilineString`.
	 * @param ctx the parse tree
	 */
	exitMultilineString?: (ctx: MultilineStringContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.objectReturnAttributeValue`.
	 * @param ctx the parse tree
	 */
	enterObjectReturnAttributeValue?: (ctx: ObjectReturnAttributeValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.objectReturnAttributeValue`.
	 * @param ctx the parse tree
	 */
	exitObjectReturnAttributeValue?: (ctx: ObjectReturnAttributeValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.objectAttributeValue`.
	 * @param ctx the parse tree
	 */
	enterObjectAttributeValue?: (ctx: ObjectAttributeValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.objectAttributeValue`.
	 * @param ctx the parse tree
	 */
	exitObjectAttributeValue?: (ctx: ObjectAttributeValueContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.hashMapKeyValueList`.
	 * @param ctx the parse tree
	 */
	enterHashMapKeyValueList?: (ctx: HashMapKeyValueListContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.hashMapKeyValueList`.
	 * @param ctx the parse tree
	 */
	exitHashMapKeyValueList?: (ctx: HashMapKeyValueListContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.hashMap`.
	 * @param ctx the parse tree
	 */
	enterHashMap?: (ctx: HashMapContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.hashMap`.
	 * @param ctx the parse tree
	 */
	exitHashMap?: (ctx: HashMapContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.hashMapKey`.
	 * @param ctx the parse tree
	 */
	enterHashMapKey?: (ctx: HashMapKeyContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.hashMapKey`.
	 * @param ctx the parse tree
	 */
	exitHashMapKey?: (ctx: HashMapKeyContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.as`.
	 * @param ctx the parse tree
	 */
	enterAs?: (ctx: AsContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.as`.
	 * @param ctx the parse tree
	 */
	exitAs?: (ctx: AsContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.applyCollection`.
	 * @param ctx the parse tree
	 */
	enterApplyCollection?: (ctx: ApplyCollectionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.applyCollection`.
	 * @param ctx the parse tree
	 */
	exitApplyCollection?: (ctx: ApplyCollectionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.applyCollectionOn`.
	 * @param ctx the parse tree
	 */
	enterApplyCollectionOn?: (ctx: ApplyCollectionOnContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.applyCollectionOn`.
	 * @param ctx the parse tree
	 */
	exitApplyCollectionOn?: (ctx: ApplyCollectionOnContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.possiblyIndexedExpression`.
	 * @param ctx the parse tree
	 */
	enterPossiblyIndexedExpression?: (ctx: PossiblyIndexedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.possiblyIndexedExpression`.
	 * @param ctx the parse tree
	 */
	exitPossiblyIndexedExpression?: (ctx: PossiblyIndexedExpressionContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.index`.
	 * @param ctx the parse tree
	 */
	enterIndex?: (ctx: IndexContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.index`.
	 * @param ctx the parse tree
	 */
	exitIndex?: (ctx: IndexContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.methodCompleteDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodCompleteDeclaration?: (ctx: MethodCompleteDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.methodCompleteDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodCompleteDeclaration?: (ctx: MethodCompleteDeclarationContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.parenthesisConditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesisConditionalExpression?: (ctx: ParenthesisConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.parenthesisConditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesisConditionalExpression?: (ctx: ParenthesisConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.conditionalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.conditionalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.conditionalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.conditionalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.assignment_leftHandSide`.
	 * @param ctx the parse tree
	 */
	enterAssignment_leftHandSide?: (ctx: Assignment_leftHandSideContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.assignment_leftHandSide`.
	 * @param ctx the parse tree
	 */
	exitAssignment_leftHandSide?: (ctx: Assignment_leftHandSideContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.actionBlockOrInstruction`.
	 * @param ctx the parse tree
	 */
	enterActionBlockOrInstruction?: (ctx: ActionBlockOrInstructionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.actionBlockOrInstruction`.
	 * @param ctx the parse tree
	 */
	exitActionBlockOrInstruction?: (ctx: ActionBlockOrInstructionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_switchExpr_withValue`.
	 * @param ctx the parse tree
	 */
	enterInstruction_switchExpr_withValue?: (ctx: Instruction_switchExpr_withValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_switchExpr_withValue`.
	 * @param ctx the parse tree
	 */
	exitInstruction_switchExpr_withValue?: (ctx: Instruction_switchExpr_withValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_switchExpr_asIf`.
	 * @param ctx the parse tree
	 */
	enterInstruction_switchExpr_asIf?: (ctx: Instruction_switchExpr_asIfContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_switchExpr_asIf`.
	 * @param ctx the parse tree
	 */
	exitInstruction_switchExpr_asIf?: (ctx: Instruction_switchExpr_asIfContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.instructionDefault_withValue`.
	 * @param ctx the parse tree
	 */
	enterInstructionDefault_withValue?: (ctx: InstructionDefault_withValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instructionDefault_withValue`.
	 * @param ctx the parse tree
	 */
	exitInstructionDefault_withValue?: (ctx: InstructionDefault_withValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instructionCase_withValue`.
	 * @param ctx the parse tree
	 */
	enterInstructionCase_withValue?: (ctx: InstructionCase_withValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instructionCase_withValue`.
	 * @param ctx the parse tree
	 */
	exitInstructionCase_withValue?: (ctx: InstructionCase_withValueContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.elseExpression`.
	 * @param ctx the parse tree
	 */
	enterElseExpression?: (ctx: ElseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.elseExpression`.
	 * @param ctx the parse tree
	 */
	exitElseExpression?: (ctx: ElseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.elseIfExpression`.
	 * @param ctx the parse tree
	 */
	enterElseIfExpression?: (ctx: ElseIfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.elseIfExpression`.
	 * @param ctx the parse tree
	 */
	exitElseIfExpression?: (ctx: ElseIfExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.ifExpression`.
	 * @param ctx the parse tree
	 */
	enterIfExpression?: (ctx: IfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.ifExpression`.
	 * @param ctx the parse tree
	 */
	exitIfExpression?: (ctx: IfExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_timeCounter`.
	 * @param ctx the parse tree
	 */
	enterInstruction_timeCounter?: (ctx: Instruction_timeCounterContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_timeCounter`.
	 * @param ctx the parse tree
	 */
	exitInstruction_timeCounter?: (ctx: Instruction_timeCounterContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.inValue`.
	 * @param ctx the parse tree
	 */
	enterInValue?: (ctx: InValueContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.inValue`.
	 * @param ctx the parse tree
	 */
	exitInValue?: (ctx: InValueContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_forall`.
	 * @param ctx the parse tree
	 */
	enterInstruction_forall?: (ctx: Instruction_forallContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_forall`.
	 * @param ctx the parse tree
	 */
	exitInstruction_forall?: (ctx: Instruction_forallContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.instruction_do`.
	 * @param ctx the parse tree
	 */
	enterInstruction_do?: (ctx: Instruction_doContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_do`.
	 * @param ctx the parse tree
	 */
	exitInstruction_do?: (ctx: Instruction_doContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.instruction_try_catch`.
	 * @param ctx the parse tree
	 */
	enterInstruction_try_catch?: (ctx: Instruction_try_catchContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.instruction_try_catch`.
	 * @param ctx the parse tree
	 */
	exitInstruction_try_catch?: (ctx: Instruction_try_catchContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.arithmeticOperator`.
	 * @param ctx the parse tree
	 */
	enterArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.arithmeticOperator`.
	 * @param ctx the parse tree
	 */
	exitArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.simpleList`.
	 * @param ctx the parse tree
	 */
	enterSimpleList?: (ctx: SimpleListContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.simpleList`.
	 * @param ctx the parse tree
	 */
	exitSimpleList?: (ctx: SimpleListContext) => void;

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
	 * Enter a parse tree produced by `YmlParser.objectComplete`.
	 * @param ctx the parse tree
	 */
	enterObjectComplete?: (ctx: ObjectCompleteContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.objectComplete`.
	 * @param ctx the parse tree
	 */
	exitObjectComplete?: (ctx: ObjectCompleteContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.classComplete`.
	 * @param ctx the parse tree
	 */
	enterClassComplete?: (ctx: ClassCompleteContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.classComplete`.
	 * @param ctx the parse tree
	 */
	exitClassComplete?: (ctx: ClassCompleteContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.ruleset`.
	 * @param ctx the parse tree
	 */
	enterRuleset?: (ctx: RulesetContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.ruleset`.
	 * @param ctx the parse tree
	 */
	exitRuleset?: (ctx: RulesetContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.rules`.
	 * @param ctx the parse tree
	 */
	enterRules?: (ctx: RulesContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.rules`.
	 * @param ctx the parse tree
	 */
	exitRules?: (ctx: RulesContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.ymlrule`.
	 * @param ctx the parse tree
	 */
	enterYmlrule?: (ctx: YmlruleContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.ymlrule`.
	 * @param ctx the parse tree
	 */
	exitYmlrule?: (ctx: YmlruleContext) => void;

	/**
	 * Enter a parse tree produced by `YmlParser.emptyBlock`.
	 * @param ctx the parse tree
	 */
	enterEmptyBlock?: (ctx: EmptyBlockContext) => void;
	/**
	 * Exit a parse tree produced by `YmlParser.emptyBlock`.
	 * @param ctx the parse tree
	 */
	exitEmptyBlock?: (ctx: EmptyBlockContext) => void;
}

