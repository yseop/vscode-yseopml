import { CompletionItemKind } from "vscode-languageserver";
import { connection } from "../server";

import fs = require("fs");
import xml2js = require("xml2js");
import { YmlCompletionItemsProvider } from "../completion/YmlCompletionItemsProvider";

const parser = new xml2js.Parser();

export class EngineModel {
  constructor(public path: string, public completionProvider: YmlCompletionItemsProvider) {
    this.loadPredefinedObjects();
  }

  public loadPredefinedObjects(): void {
    if (fs.existsSync(this.path)) {
      this.parsePredefinedObjects(this.path, this.completionProvider);
    } else {
      connection.console.warn(`File “${this.path}” doesn't exist.`);
    }
  }

  public reload(path: string, completionProvider: YmlCompletionItemsProvider): void {
    this.completionProvider.removeDocumentCompletionItems(this.path);
    this.path = path;
    this.completionProvider = completionProvider;
    this.loadPredefinedObjects();
  }

  private parsePredefinedObjects(
    path: string,
    completionProvider: YmlCompletionItemsProvider,
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
                  addYclassCompletionItem(path, classyid, completionProvider);
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
  uri: string,
  classyid: string,
  completionProvider: YmlCompletionItemsProvider,
): void {
  const itemId = `id_${classyid}`;
  if (
    !completionProvider.getItem(itemId)
  ) {
    const completionItem = {
      data: itemId,
      detail: `Yseop Engine type: “${classyid}”.`,
      // ,documentation: "Its documentation can come from predefinedObjects.xml"
      kind: CompletionItemKind.Class,
      label: classyid,
    };
    completionProvider.addCompletionItem({uri, completion: completionItem});
  }
}
