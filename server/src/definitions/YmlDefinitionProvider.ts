import { Definition, Location } from "vscode-languageserver";
import { IDefinitionLocation } from "./IDefinitionLocation";

/**
 * Contains and provide entities definitions.
 */
export class YmlDefinitionProvider {

  public definitions: IDefinitionLocation[] = [];

  /**
   * Find all the available definition locations for the specified token.
   * @param token The token used as base to find the definitions.
   */
  public findDefinitions(token: string): Definition {
    if (!token) {
      return null;
    }
    const defs = this.definitions
      .filter((defLoc) => defLoc.entityName.indexOf(token) >= 0)
      .map((defLoc) => defLoc.location)
      .reduce((prev: Location[], elem) => {
        prev.push(elem);
        return prev;
      }, []);
    if (!defs || defs.length === 0) {
      return null;
    } else {
      return defs;
    }
  }

  /**
   * Add a definition to this provider.
   * @param def The new definition to add.
   */
  public addDefinition(def: IDefinitionLocation) {
    this.definitions.push(def);
  }

  /**
   * Remove all the definitions associated to a specific document uri from this provider.
   * @param uri The file's URI.
   */
  public removeDocumentDefinitions(uri: string) {
    this.definitions = this.definitions.filter(
      (defLoc) => defLoc.location.uri !== uri,
    );
  }
}
