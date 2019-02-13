import { CompletionItem, CompletionItemKind } from "vscode-languageserver";
import { connection } from "./server";

import fs = require("fs");
import xml2js = require("xml2js");

const parser = new xml2js.Parser();

export class EngineModel {
  constructor(public path: string, public completionItems: CompletionItem[]) {
    this.loadPredefinedObjects();
  }

  public loadPredefinedObjects(): void {
    if (fs.existsSync(this.path)) {
      this.parsePredefinedObjects(this.path, this.completionItems);
    } else {
      connection.console.warn(`File “${this.path}” doesn't exist.`);
    }
  }

  public reload(path: string, completionItems: CompletionItem[]): void {
    this.path = path;
    this.completionItems = completionItems;
    this.loadPredefinedObjects();
  }

  private parsePredefinedObjects(
    path: string,
    completionItems: CompletionItem[],
  ): void {
    connection.console.log(`Parsing definition file: ${path}`);

    fs.readFile(path, (err, data) => {
      parser.parseString(data, (parseErr, result) => {
        if (err != null) {
          connection.console.error(
            `Something went wrong during YE model import:\n ${parseErr}`,
          );
        } else if (result == null) {
          connection.console.error(
            "Something went wrong during YE model import. Your file seems empty.",
          );
        } else {
          try {
            connection.console.log(
              "Importing classes from Yseop Engine model.",
            );
            const classesByPackage =
              result["data-and-features"].classes[0].package;
            classesByPackage.forEach((ypackage) => {
              // empty package
              if (ypackage.class != null) {
                ypackage.class.forEach((yclass) => {
                  const classyid = yclass.$.ident;
                  addYclassCompletionItem(classyid, completionItems);
                });
              }
            });
          } catch (importErr) {
            connection.console.error(
              `Something went wrong during YE model import:\n ${importErr}`,
            );
          }
        }
        connection.console.log("Done");
      });
    });
  }
}

/**
 * Add a new class id to the completion list as a new completion item.
 * @param classyid The id of class to add as a completion item.
 * @param completionItems The completion items list.
 */
function addYclassCompletionItem(
  classyid: string,
  completionItems: CompletionItem[],
): void {
  if (
    !completionItems.find((elem, index, self) => {
      return elem.data === `id_${classyid}`;
    })
  ) {
    const completionItem = {
      data: `id_${classyid}`,
      detail: `Yseop Engine type: “${classyid}”.`,
      // ,documentation: "Its documentation can come from predefinedObjects.xml"
      kind: CompletionItemKind.Class,
      label: classyid,
    };
    completionItems.push(completionItem);
  }
}
