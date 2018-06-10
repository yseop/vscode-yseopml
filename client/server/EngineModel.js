"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_languageserver_1 = require("vscode-languageserver");
var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
class EngineModel {
    constructor(path, completionItems) {
        this.path = path;
        this.completionItems = completionItems;
        this.loadPredefinedObjects();
    }
    loadPredefinedObjects() {
        // load predefined objects
        if (fs.existsSync(this.path)) {
            this.parsePredefinedObjects(this.path, this.completionItems);
        }
        else {
            console.warn(`File “${this.path}” doesn't exist.`);
        }
    }
    reload(path, completionItems) {
        this.path = path;
        this.completionItems = completionItems;
        this.loadPredefinedObjects();
    }
    parsePredefinedObjects(path, completionItems) {
        console.log(`Parsing definition file: ${path}`);
        fs.readFile(path, function (err, data) {
            parser.parseString(data, function (err, result) {
                if (err != null || result == null) {
                    console.error("Something went wrong during YE model import:\n" + err);
                }
                else {
                    try {
                        console.log("Importing classes from Yseop Engine model.");
                        var classesByPackage = result['data-and-features']["classes"][0]["package"];
                        classesByPackage.forEach(ypackage => {
                            // empty package
                            if (ypackage["class"] != null) {
                                ypackage["class"].forEach(yclass => {
                                    var classyid = yclass["$"]["ident"];
                                    addYclassCompletionItem(classyid, completionItems);
                                });
                            }
                        });
                    }
                    catch (error) {
                        console.error("Something went wrong during YE model import:\n" + error);
                    }
                }
                console.log('Done');
            });
        });
    }
}
exports.EngineModel = EngineModel;
function addYclassCompletionItem(classyid, completionItems) {
    if (!completionItems.find(function (elem, index, self) {
        return elem.data === `id_${classyid}`;
    })) {
        var completionItem = {
            label: classyid,
            kind: vscode_languageserver_1.CompletionItemKind.Class,
            data: `id_${classyid}`,
            detail: `Yseop Engine type: “${classyid}”.`
            //,documentation: "Its documentation can come from predefinedObjects.xml"
        };
        completionItems.push(completionItem);
    }
}
//# sourceMappingURL=EngineModel.js.map