import { Location } from "vscode-languageserver";

export interface IDefinitionLocation {
    /**
     * The name of the entity for which locations are reported.
     */
    entityName: string;
    /**
     * An array of location information items.
     */
    definition: Location;
}
