/**
 * Find in a text the last substring that could be a valid YML entity name's substring.
 * @param text Some text.
 * @returns the canditate entity's name or null if nothing could be found.
 */
export function getDocumentLastWord(text: string) {
    if (!text) {
      return null;
    }
    const matchArray = text.match(/\b([^:\.\s]+)\b$/g);
    if (matchArray.length === 0) {
      return null;
    }
    const token = matchArray[0];
    return token;
  }
