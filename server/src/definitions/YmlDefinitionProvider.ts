import { Definition, Location } from 'vscode-languageserver';

import { AbstractYmlObject } from '../yml-objects';

/**
 * Contains and provide entities definitions.
 */
export class YmlDefinitionProvider {
    public definitions: AbstractYmlObject[] = [];
    public implementations: AbstractYmlObject[] = [];

    /**
     * Find all the available implementation locations for the specified entityName.
     * @param entityName The entityName used as base to find its implementations.
     * @returns a `Definition`, which can be `Location | Location[] | null`
     * according to `Definition`'s documentation.
     */
    public findImplementations(entityName: string): Definition {
        if (!entityName) {
            return null;
        }
        const candidates = this.implementations.filter((defLoc) => {
            return defLoc.label === entityName || defLoc.getShortName() === entityName;
        });
        const locations = candidates.map((defLoc) => defLoc.definitionLocation);
        const defs = locations
            // Fill an array with the remaining locations.
            .reduce((prev: Location[], elem) => {
                prev.push(elem);
                return prev;
            }, []);
        if (defs.length === 0) {
            return null;
        }
        return defs;
    }

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
        const candidates = this.definitions.filter((defLoc) => {
            return defLoc.label === entityName || defLoc.getShortName() === entityName;
        });
        const locations = candidates.map((defLoc) => defLoc.definitionLocation);
        const defs = locations
            // Fill an array with the remaining locations.
            .reduce((prev: Location[], elem) => {
                prev.push(elem);
                return prev;
            }, []);
        if (defs.length === 0) {
            return null;
        }
        return defs;
    }

    /**
     * Add a definition to this provider.
     * @param def The new definition to add.
     */
    public addDefinition(def: AbstractYmlObject): void {
        this.definitions.push(def);
    }

    /**
     * Add an implementation to this provider.
     * @param def The new implementation to add.
     */
    public addImplementation(def: AbstractYmlObject): void {
        this.implementations.push(def);
    }

    /**
     * Remove all the definitions associated to a specific document uri from this provider.
     * @param uri The file's URI.
     */
    public removeDocumentDefinitions(uri: string): void {
        this.definitions = this.definitions.filter((defLoc) => defLoc.definitionLocation.uri !== uri);
    }

    /**
     * Remove all the definitions associated to a specific document uri from this provider.
     * @param uri The file's URI.
     */
    public removeDocumentImplementations(uri: string): void {
        this.implementations = this.implementations.filter((defLoc) => defLoc.definitionLocation.uri !== uri);
    }
}
