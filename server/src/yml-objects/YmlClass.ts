import { CompletionItemKind } from "vscode-languageserver";
import { AbstractYmlFunction } from "./AbstractYmlFunction";
import { AbstractYmlObject } from "./AbstractYmlObject";
import { YmlAttribute } from "./YmlAttribute";

export class YmlClass extends AbstractYmlObject {
  public attributes?: YmlAttribute[] = [];
  public methods?: AbstractYmlFunction[] = [];
  public extends?: string[] = [];

  constructor(indentifier: string, uri: string) {
    super(indentifier, CompletionItemKind.Class, uri);
  }
}
