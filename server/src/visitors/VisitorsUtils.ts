import { Token } from "antlr4ts";
import { Location } from "vscode-languageserver";
import { FieldContext } from "../grammar";
import { connection } from "../server";
import { AbstractYmlObject } from "../yml-objects";

/**
 * Enrich an item by adding to it some informations like its type, its use scope, documentation, etc.
 *
 * @param completionItem The item to enrich.
 * @param fields The attributes the item has to find from it more informations.
 * @param sourceElementName The wrapper item. For an argument it is the function, for an attribute it is its class.
 * @param baseType The type of the item, if it is not an information that can be found in `fields`
 * @param scopeStartOffset The first position from which we can suggest this item.
 * First character of a function's body, for example.
 * Useful to avoid giving completion suggestions pertaining to symbols
 * that are out of the current scope.
 * @param scopeEndOffset The last position to which we can suggest this item.
 * Last character of a function's body, for example.
 * Useful to avoid giving completion suggestions pertaining to symbols
 * that are out of the current scope.
 */
export function enrichCompletionItem(
  completionItem: AbstractYmlObject,
  fields: FieldContext[],
  sourceElementName?: string,
  baseType?: string,
  scopeStartOffset?: number,
  scopeEndOffset?: number,
): void {
  sourceElementName = sourceElementName ? sourceElementName : "static";
  completionItem.data = `id_${sourceElementName}_${completionItem.label}`;
  completionItem.documentation = getDocumentation(fields);
  completionItem.detail = getType(fields, baseType);
  if (scopeEndOffset && scopeStartOffset) {
    completionItem.scopeEndOffset = scopeEndOffset;
    completionItem.scopeStartOffset = scopeStartOffset;
  }
}

const BEGINNING_QUOTES_REGEX = /^("""|")\s*/;
const ENDING_QUOTES_REGEX = /\s*("""|")$/;

function getDocumentation(fieldOptions: FieldContext[]): string {
  try {
    for (const element of fieldOptions.filter((elem) => !!elem.commonField)) {
      const option = element.commonField();
      if (option != null && option._optionName.text === "documentation") {
        let documentation = option._optionValues[0].text;
        if (documentation !== null && documentation !== undefined) {
          documentation = documentation.replace(BEGINNING_QUOTES_REGEX, "");
          documentation = documentation.replace(ENDING_QUOTES_REGEX, "");
          return documentation;
        }
      } else {
        // YML fields unrelated to documentation.
      }
    }
  } catch (err) {
    connection.console.error(err.message);
  }
  return "not documented";
}

function getType(
  fieldOptions: FieldContext[],
  baseType?: string,
): string {
  let domains = baseType ? baseType : "Object";
  let domainsLevel2 = "";
  try {
    for (const element of fieldOptions.filter((elem) => !!elem.commonField)) {
      const option = element.commonField();
      if (!!option) {
        const optionName = option._optionName.text;
        if (optionName === "domains") {
          domains = option._optionValues[0].text;
        } else if (optionName === "domainsLevel2") {
          domainsLevel2 = ` − ${option._optionValues[0].text}`;
        } else {
          // YML fields unrelated to domains.
        }
      }
    }
  } catch (err) {
    connection.console.error(err.message);
  }
  return domains.concat(domainsLevel2);
}

export function createLocation(
  startToken: Token,
  endToken: Token,
  uri: string,
): Location {
  return {
    range: {
      end: {
        character: endToken.charPositionInLine,
        line: endToken.line,
      },
      start: {
        character: startToken.charPositionInLine,
        line: startToken.line - 1,
      },
    },
    uri,
  };
}
