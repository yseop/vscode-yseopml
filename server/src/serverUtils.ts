import * as path from 'path';

/**
 * If possible, builds an absolute path to `predefinedObjects.xml` from the provided arguments.
 * Returns the value of pathToPredefinedObjectsXml if this is not possible.
 * The existence of the file is not tested here.
 *
 * @param workspacePath the workspace path. Ignored if null.
 * @param pathToPredefinedObjectsXml the path to `predefinedObjects.xml`. Returned unchanged if absolute or null.
 * @returns a string representing a file's path.
 */
export function getPredefinedObjectsXmlPath(workspacePath: string, pathToPredefinedObjectsXml: string) {
    if (!pathToPredefinedObjectsXml || path.isAbsolute(pathToPredefinedObjectsXml) || !workspacePath) {
        /*
         * Return pathToPredefinedObjectsXml if:
         * − it is null or
         * − it is an absolute path or
         * − no workspace path is provided;
         */
        return pathToPredefinedObjectsXml;
    }
    return path.join(workspacePath, pathToPredefinedObjectsXml);
}
