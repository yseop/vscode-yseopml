import { CompletionItemKind } from "vscode-languageserver";
import { AbstractYmlObject, YmlType } from "./AbstractYmlObject";
import { YmlSymbolList } from "./YmlSymbolList";

export enum ImplicitKey {
  EXCLUSIVE,
  INCLUSIVE,
}

export class YmlArgument extends AbstractYmlObject {
  public domains?: YmlType;
  public domainsLevel2?: YmlType;
  public symbolList?: YmlSymbolList;
  public key?: string;
  public implicitKey?: boolean;
  public aloneKey?: ImplicitKey;

  constructor(indentifier: string, uri: string) {
    super(indentifier, CompletionItemKind.Variable, uri);
  }
}
