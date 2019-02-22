import { Location } from "vscode-languageserver";

/**
 * A mapping between an entity name and its Location.
 */
export interface IDefinitionLocation {
  /**
   * The name of the entity for which locations are reported.
   */
  entityName: string;
  /**
   * The location information.
   */
  location: Location;
}
