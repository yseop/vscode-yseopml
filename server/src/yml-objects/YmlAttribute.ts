import { CompletionItemKind } from "vscode-languageserver";
import { AbstractYmlObject, YmlType } from "./AbstractYmlObject";
import { YmlSymbolList } from "./YmlSymbolList";

export class YmlAttribute extends AbstractYmlObject {
  public domains: YmlType;
  public domainsLevel2: YmlType;
  public symbolList: YmlSymbolList | YmlSymbolList[];

  constructor(indentifier: string, uri: string) {
    super(indentifier, CompletionItemKind.Property, uri);
  }
}
