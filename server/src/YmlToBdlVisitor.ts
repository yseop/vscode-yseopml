// Generated from src/YmlToBdl.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { ExpressionMarkerContext } from './YmlToBdlParser';
import { CommentElementContext } from './YmlToBdlParser';
import { PreprocessingElementContext } from './YmlToBdlParser';
import { CommentContext } from './YmlToBdlParser';
import { CommentBlockContext } from './YmlToBdlParser';
import { FreeTextContext } from './YmlToBdlParser';
import { YmlIdContext } from './YmlToBdlParser';
import { KaoFileContext } from './YmlToBdlParser';
import { YclassFileContext } from './YmlToBdlParser';
import { YmlEntityContext } from './YmlToBdlParser';
import { YenumContext } from './YmlToBdlParser';
import { EnumElementContext } from './YmlToBdlParser';
import { ClassDeclarationContext } from './YmlToBdlParser';
import { ClassImplementationContext } from './YmlToBdlParser';
import { OverrideContext } from './YmlToBdlParser';
import { ClassDeclarationIntroContext } from './YmlToBdlParser';
import { ExtendsBlockContext } from './YmlToBdlParser';
import { ParentClassNameContext } from './YmlToBdlParser';
import { MemberTypeContext } from './YmlToBdlParser';
import { SynonymContext } from './YmlToBdlParser';
import { MemberDeclarationContext } from './YmlToBdlParser';
import { PathContext } from './YmlToBdlParser';
import { YmlIdOrPathContext } from './YmlToBdlParser';
import { FieldContext } from './YmlToBdlParser';
import { ClassPropertiesBlockContext } from './YmlToBdlParser';
import { DocumentationContext } from './YmlToBdlParser';
import { ValueOrConditionContext } from './YmlToBdlParser';
import { HashMapKeyValueContext } from './YmlToBdlParser';
import { HashMapValueContext } from './YmlToBdlParser';
import { ValueContext } from './YmlToBdlParser';
import { IfExprBlockContext } from './YmlToBdlParser';
import { NonArithmeticValueContext } from './YmlToBdlParser';
import { InstanciationVariableContext } from './YmlToBdlParser';
import { ExpressionContext } from './YmlToBdlParser';
import { FunctionCallContext } from './YmlToBdlParser';
import { FunctionArgumentContext } from './YmlToBdlParser';
import { ChainedCallContext } from './YmlToBdlParser';
import { InlineDeclarationContext } from './YmlToBdlParser';
import { InlineOperationContext } from './YmlToBdlParser';
import { FieldValueContext } from './YmlToBdlParser';
import { MethodDeclarationContext } from './YmlToBdlParser';
import { MethodIntroContext } from './YmlToBdlParser';
import { ArgumentListContext } from './YmlToBdlParser';
import { MandatoryArgsContext } from './YmlToBdlParser';
import { MandatoryArgDeclContext } from './YmlToBdlParser';
import { OptionalArgsContext } from './YmlToBdlParser';
import { OptionalArgDeclContext } from './YmlToBdlParser';
import { ArgOptionListContext } from './YmlToBdlParser';
import { ArgOptionBlockContext } from './YmlToBdlParser';
import { Order1BlockContext } from './YmlToBdlParser';
import { InstanciationConditionContext } from './YmlToBdlParser';
import { ForEachInstanciationContext } from './YmlToBdlParser';
import { Order1FullConditionContext } from './YmlToBdlParser';
import { ClosedOrder1FullConditionContext } from './YmlToBdlParser';
import { CombinedComparisonContext } from './YmlToBdlParser';
import { ComparisonContext } from './YmlToBdlParser';
import { ComparisonOperatorContext } from './YmlToBdlParser';
import { AffectationContext } from './YmlToBdlParser';
import { ConditionBlockContext } from './YmlToBdlParser';
import { Order0ConditionContext } from './YmlToBdlParser';
import { ActionContext } from './YmlToBdlParser';
import { ActionBlockContext } from './YmlToBdlParser';
import { CompoundBlockContext } from './YmlToBdlParser';
import { ArithmeticExpressionContext } from './YmlToBdlParser';
import { ExistentialOperatorContext } from './YmlToBdlParser';
import { VariableBlockContext } from './YmlToBdlParser';
import { VariableBlockWithEOFContext } from './YmlToBdlParser';
import { VariableBlockContentContext } from './YmlToBdlParser';
import { VariableBlockContentWithEOFContext } from './YmlToBdlParser';
import { StaticDeclarationsFileContext } from './YmlToBdlParser';
import { StaticDeclarationContext } from './YmlToBdlParser';
import { ExternalFunctionsFileContext } from './YmlToBdlParser';
import { ExternDeclarationContext } from './YmlToBdlParser';
import { ExternalDialogZoneFileContext } from './YmlToBdlParser';
import { ExternDialogZoneContext } from './YmlToBdlParser';
import { ListContext } from './YmlToBdlParser';
import { ListWithBraceContext } from './YmlToBdlParser';
import { GranuleContext } from './YmlToBdlParser';
import { CompleteContext } from './YmlToBdlParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `YmlToBdlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface YmlToBdlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `YmlToBdlParser.expressionMarker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionMarker?: (ctx: ExpressionMarkerContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.commentElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentElement?: (ctx: CommentElementContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.preprocessingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessingElement?: (ctx: PreprocessingElementContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.commentBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentBlock?: (ctx: CommentBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.freeText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFreeText?: (ctx: FreeTextContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.ymlId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYmlId?: (ctx: YmlIdContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.kaoFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKaoFile?: (ctx: KaoFileContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.yclassFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYclassFile?: (ctx: YclassFileContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.ymlEntity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYmlEntity?: (ctx: YmlEntityContext) => Result;

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
	 * Visit a parse tree produced by `YmlToBdlParser.memberType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberType?: (ctx: MemberTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.synonym`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSynonym?: (ctx: SynonymContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;

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
	 * Visit a parse tree produced by `YmlToBdlParser.ifExprBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExprBlock?: (ctx: IfExprBlockContext) => Result;

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
	 * Visit a parse tree produced by `YmlToBdlParser.forEachInstanciation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForEachInstanciation?: (ctx: ForEachInstanciationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.order1FullCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrder1FullCondition?: (ctx: Order1FullConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.closedOrder1FullCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosedOrder1FullCondition?: (ctx: ClosedOrder1FullConditionContext) => Result;

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
	 * Visit a parse tree produced by `YmlToBdlParser.affectation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAffectation?: (ctx: AffectationContext) => Result;

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
	 * Visit a parse tree produced by `YmlToBdlParser.action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction?: (ctx: ActionContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.actionBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionBlock?: (ctx: ActionBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.compoundBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundBlock?: (ctx: CompoundBlockContext) => Result;

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
	 * Visit a parse tree produced by `YmlToBdlParser.variableBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableBlock?: (ctx: VariableBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.variableBlockWithEOF`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableBlockWithEOF?: (ctx: VariableBlockWithEOFContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.variableBlockContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableBlockContent?: (ctx: VariableBlockContentContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.variableBlockContentWithEOF`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableBlockContentWithEOF?: (ctx: VariableBlockContentWithEOFContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.staticDeclarationsFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticDeclarationsFile?: (ctx: StaticDeclarationsFileContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.staticDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticDeclaration?: (ctx: StaticDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.externalFunctionsFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalFunctionsFile?: (ctx: ExternalFunctionsFileContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.externDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternDeclaration?: (ctx: ExternDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.externalDialogZoneFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalDialogZoneFile?: (ctx: ExternalDialogZoneFileContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.externDialogZone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternDialogZone?: (ctx: ExternDialogZoneContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `YmlToBdlParser.listWithBrace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListWithBrace?: (ctx: ListWithBraceContext) => Result;

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

