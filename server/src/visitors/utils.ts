import { Token } from "antlr4ts";
import {
  CompletionItem,
  CompletionItemKind,
} from "vscode-languageserver";
import { IDefinitionLocation } from "../IDefinitionLocation";
import { connection } from "../server";
import { FieldContext, YmlIdContext } from "../YmlToBdlParser";

const BEGINNING_QUOTES_REGEX = /^("""|")\s*/;
const ENDING_QUOTES_REGEX = /\s*("""|")$/;

export function getDocumentation(fieldOptions: FieldContext[]): string {
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

export function createNewCompletionItem(
  completionItems: CompletionItem[],
  ymlIdContext: YmlIdContext,
  fields: FieldContext[],
  kind: CompletionItemKind,
  classId?: string,
  baseType?: string,
) {
  const currentClassId = classId ? classId : "static";
  const documentation = getDocumentation(fields);
  const returnType = getType(fields, baseType);
  const ymlId = ymlIdContext.text;
  const elementId = `id_${currentClassId}_${ymlId}`;
  const completionItem = completionItems.find(
    (elem) => elem.data === elementId,
  );
  if (completionItem) {
    completionItem.documentation = documentation;
    completionItem.detail = returnType;
  } else {
    completionItems.push({
      data: elementId,
      detail: returnType,
      documentation,
      kind,
      label: ymlId,
    });
  }
}

export function getType(
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
  entityName: string,
  startToken: Token,
  endToken: Token,
  uri: string,
): IDefinitionLocation {
  return {
    definition: {
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
    },
    entityName,
  };
}
