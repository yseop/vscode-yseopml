import { CompletionItemKind } from "vscode-languageserver";
import { YmlCompletionItemsProvider } from "../completion/YmlCompletionItemsProvider";
import { YmlDefinitionProvider } from "../definitions";
import {
  FunctionContext,
  MandatoryArgDeclContext,
  MemberDeclarationContext,
  VariableBlockContentContext,
} from "../grammar";
import { createLocation, createNewCompletionItem } from "./VisitorsUtils";
import { YmlBaseVisitor } from "./YmlBaseVisitor";

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

  constructor(
    completionProvider: YmlCompletionItemsProvider,
    uri: string,
    public definitions: YmlDefinitionProvider,
  ) {
    super(completionProvider, uri);
  }
  public visitFunction(node: FunctionContext): void {
    this.scopeStartOffset = 0;
    this.scopeEndOffset = 0;
    this.functionName = node.ymlId().text;
    if (!this.isMethodInstanciation(this.functionName)) {
      createNewCompletionItem(
        this.uri,
        this.completionProvider,
        node.ymlId().text,
        node.field(),
        CompletionItemKind.Function,
        null,
      );
      this.definitions.addDefinition(
        createLocation(node.ymlId().text, node.start, node.stop, this.uri),
      );
    } else {
        /*
        * The function is a method instance.
        * It has already been added as a completion item and a definition by YmlClassVisitor.
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
    createNewCompletionItem(
      this.uri,
      this.completionProvider,
      node._argName.text,
      [],
      CompletionItemKind.Variable,
      this.functionName,
      node._argType.text,
      this.scopeStartOffset,
      this.scopeEndOffset,
    );
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

  /**
   * Create and save a completion item for a local variable or a function argument
   * and keep track of its scope.
   * @param node A node representing a local variable or a function argument.
   */
  public visitMemberDeclarationContext(node: MemberDeclarationContext): void {
    createNewCompletionItem(
      this.uri,
      this.completionProvider,
      node.ymlId().text,
      node.field(),
      CompletionItemKind.Variable,
      this.functionName,
      node._type.text,
      this.scopeStartOffset,
      this.scopeEndOffset,
    );
  }

  /**
   * Check if the provided function name is the name of a class method instanciation.
   * If the function name is the name of a class method instanciation:
   * - it follows the format “className” + “::” + “methodName”
   * - it already exists as a completion item thanks to `YmlClassVisitor`
   * @param fullName The name of a function.
   * @returns `true` iff the provided functionName is a class method instanciation.
   */
  private isMethodInstanciation(fullName: string): boolean {
    let className: string;
    let methodName: string;
    const functionNameSubParts = fullName.split("::");
    if (functionNameSubParts.length > 1) {
      methodName = functionNameSubParts.pop();
      className = fullName.replace(RegExp(`::${methodName}$`, "u"), "");
    }
    return (
      className &&
      this.completionProvider.getItem(`id_${className}_${fullName}`)
    );
  }
}
