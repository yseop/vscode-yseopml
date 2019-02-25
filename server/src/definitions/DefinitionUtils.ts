// Match any string containing `_`, a number or characters that have the Unicode property “Letter”.
// see https://stackoverflow.com/a/51166092/3577898
const YML_ENTITY_NAME_REGEXP = new RegExp(/((\p{Letter}|_|[0-9])+)/, "gu");

/**
 * Find in a text the last substring that could be a valid YML entity name's substring.
 * @param text Some text.
 * @returns the canditate entity's name or null if nothing could be found.
 */
export function getLastValidYmlEntityName(text: string) {
    if (!text) {
      return null;
    }
    const matchArray = text.match(YML_ENTITY_NAME_REGEXP);
    if (matchArray == null || matchArray.length === 0) {
      return null;
    }
    // Get the last matched input.
    const token = matchArray.pop();
    return token;
  }
