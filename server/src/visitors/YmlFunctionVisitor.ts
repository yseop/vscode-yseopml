import { CompletionItemKind } from "vscode-languageserver";
import { YmlCompletionItemsProvider } from "../completion/YmlCompletionItemsProvider";
import { YmlDefinitionProvider } from "../definitions";
import { FunctionContext } from "../grammar";
import { createLocation, createNewCompletionItem } from "./VisitorsUtils";
import { YmlBaseVisitor } from "./YmlBaseVisitor";

export class YmlFunctionVisitor extends YmlBaseVisitor {
  constructor(
    completionProvider: YmlCompletionItemsProvider,
    uri: string,
    public definitions: YmlDefinitionProvider,
  ) {
    super(completionProvider, uri);
  }
  public visitFunction(node: FunctionContext): void {
    const functionName = node.ymlId().text;
    if (!this.isMethodInstanciation(functionName)) {
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
      className = fullName.replace(
        new RegExp(`::${methodName}$`, "u"),
        "",
      );
    }
    return (
      className &&
      this.completionProvider.getItem(`id_${className}_${fullName}`)
    );
  }
}
