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

/** Regex that matches paths containing the `.generated-yml` directory. */
export const GENERATED_YML_DIR_REGEX = /(^|\/)\.generated-yml\//;
/** Regex that matches the `_FILE_TYPE_ F` instruction. */
export const FILE_TYPE_F = /^_FILE_TYPE_\s+F\b/;
/** Regex that matches the `_FILE_TYPE_ M` instruction. */
export const FILE_TYPE_M = /^_FILE_TYPE_\s+M\b/;

export function findKaoFileDependencies(
    fileContent: string,
    isTypeM: boolean,
    workspacePath: string,
    fileUri: string,
): string[] {
    return (
        fileContent
            .split('\n')
            // line can be indented in the file.
            .map((line) => line.trim())
            .filter((line) => {
                return (
                    // Ignore empty lines
                    line.length > 0 &&
                    // Ignore lines that are just preprocessing or Yseop Engine instruction
                    !line.startsWith('@') &&
                    // Ignore the lines with the _FILE_TYPE_ instruction
                    !line.startsWith('_FILE_TYPE_') &&
                    // Ignore single-line comments
                    !line.startsWith('//') &&
                    // Ignore multi-lines comments starting with “/*”
                    !line.startsWith('/*') &&
                    // Ignore multi-lines comments starting with just “*“ (includes “*/”)
                    !line.startsWith('*') &&
                    // Drop files from any .generated-yml/ directory
                    line.search(GENERATED_YML_DIR_REGEX) === -1
                );
            })
            .map((line) => {
                // In a M type *.kao file, paths are relative to the current *.kao file.
                // In a F type *.kao file, paths are relative to the project's root.
                // Here we assume that the root is the workspace path.
                const from = isTypeM ? path.dirname(fileUri) : workspacePath;
                return path.join(from, line);
            })
    );
}
