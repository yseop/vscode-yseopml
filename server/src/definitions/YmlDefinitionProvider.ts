import { Definition, Location } from "vscode-languageserver";
import { IDefinitionLocation } from "./IDefinitionLocation";

/**
 * Contains and provide entities definitions.
 */
export class YmlDefinitionProvider {

  public definitions: IDefinitionLocation[] = [];

  /**
   * Find all the available definition locations for the specified entityName.
   * @param entityName The entityName used as base to find the definitions.
   * @returns a `Definition`, which can be `Location | Location[] | null`
   * according to `Definition`'s documentation.
   */
  public findDefinitions(entityName: string): Definition {
    if (!entityName) {
      return null;
    }
    const defs = this.definitions
      .filter((defLoc) => defLoc.entityName === entityName)
      .map((defLoc) => defLoc.location)
      // Fill an array with the remaining locations.
      .reduce((prev: Location[], elem) => {
        prev.push(elem);
        return prev;
      }, []);
    if (defs.length === 0) {
      return null;
    } else {
      return defs;
    }
  }

  /**
   * Add a definition to this provider.
   * @param def The new definition to add.
   */
  public addDefinition(def: IDefinitionLocation): void {
    this.definitions.push(def);
  }

  /**
   * Remove all the definitions associated to a specific document uri from this provider.
   * @param uri The file's URI.
   */
  public removeDocumentDefinitions(uri: string): void {
    this.definitions = this.definitions.filter(
      (defLoc) => defLoc.location.uri !== uri,
    );
  }
}
