import { Definition, Location } from 'vscode-languageserver';

import { AbstractYmlObject } from '../yml-objects';

/**
 * Creates a filtering function over an AbstractYmlObject that will check that its definition location's uri
 * is the same as the provided uri.
 * @param uri the uri used to filter
 */
function createLocationFilter(uri: string) {
    return (defLoc: AbstractYmlObject) => defLoc.definitionLocation.uri !== uri;
}

/**
 * Contains and provide entities definitions.
 */
export class YmlDefinitionProvider {
    private definitions: AbstractYmlObject[] = [];
    private implementations: AbstractYmlObject[] = [];

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
     * Add a definition to this provider. Elements without a set definition location will be ignored.
     * @param def The new definition to add.
     */
    public addDefinition(def: AbstractYmlObject): void {
        if (!def || !def.definitionLocation) {
            return;
        }
        this.definitions.push(def);
    }

    /**
     * Add an implementation to this provider. Elements without a set definition location will be ignored.
     * @param def The new implementation to add.
     */
    public addImplementation(def: AbstractYmlObject): void {
        if (!def || !def.definitionLocation) {
            return;
        }
        this.implementations.push(def);
    }

    /**
     * Returns the elements of the definitions list that meet the condition specified by `filter`.
     *
     * @param filter A filter function.
     *
     * @returns the elements of the definitions list that meets the filter's conditions.
     */
    public filterDefinitions(filter: (elem: AbstractYmlObject) => boolean): AbstractYmlObject[] {
        return this.definitions.filter(filter);
    }

    /**
     * Returns the elements of the implementations list that meet the condition specified by `filter`.
     *
     * @param filter A filter function.
     *
     * @returns the elements of the implementations list that meets the filter's conditions.
     */
    public filterImplementations(filter: (elem: AbstractYmlObject) => boolean): AbstractYmlObject[] {
        return this.implementations.filter(filter);
    }

    /**
     * Remove all the definitions associated to a specific document uri from this provider.
     * @param uri The file's URI.
     */
    public removeDocumentDefinitions(uri: string): void {
        this.definitions = this.definitions.filter(createLocationFilter(uri));
    }

    /**
     * Remove all the definitions associated to a specific document uri from this provider.
     * @param uri The file's URI.
     */
    public removeDocumentImplementations(uri: string): void {
        this.implementations = this.implementations.filter(createLocationFilter(uri));
    }
}
