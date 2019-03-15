/**
 * Match valid YML entity names substrings:
 * strings containing only underscores, numbers, and characters with the “Letter” Unicode property.
 * The whole name will be captured within a group.
 * see https://stackoverflow.com/a/51166092/3577898
 */
const YML_ENTITY_NAME_START_REGEXP = /^((\p{Letter}|[_0-9])+(::?(\p{Letter}|[_0-9])+)*)/u;
const YML_ENTITY_NAME_END_REGEXP = /((\p{Letter}|[_0-9])+(::?(\p{Letter}|[_0-9])+)*)$/u;

export enum EntityPartPosition {
    /**
     * Search from the beginning of the input.
     */
    BEGINNING,
    /**
     * Search from the end of the input.
     */
    END,
}
/**
 * Find a valid token from a source text at the current offset.
 * @param source Some text.
 * @param offset Position of the cursor.
 */
export function getTokenAtPosInDoc(source: string, offset: number): string | null {
    if (offset == null || offset < 0 || offset > source.length) {
        /* Invalid position. */
        return null;
    }
    const documentContentToPos = source.substr(0, offset);

    /*
     * Search for the first part of a valid YML entity name or a full entity name
     * from the end of the “documentContentToPos” string.
     */
    const firstPart = getYmlEntityNamePart(documentContentToPos, EntityPartPosition.END);

    /*
     * Search for the second part of a valid YML entity name or a full entity name
     * from the beginning of the “documentContentFromPos” string.
     */
    const documentContentFromPos = source.substr(offset);
    const secondPart = getYmlEntityNamePart(documentContentFromPos, EntityPartPosition.BEGINNING);
    if (secondPart != null && firstPart != null) {
        // input: "variable"; position: > 0
        // ⇒ first part and second part exists.
        return firstPart.concat(secondPart);
    }
    if (secondPart != null) {
        // input: "variable"; position: 0
        // ⇒ no first part, but second part is a token.
        return secondPart;
    }
    // No second part or nothing found.
    // input: "variable"; position: last
    // OR input: "variable);"; position between “)” and “;”
    return firstPart;
}

/**
 * Find in a text the substring that could be a valid YML entity name's substring depending on the position asked.
 * @param text Some text.
 * @param position EntityPartPosition where to find the part.
 * @returns the canditate entity's name or null if nothing could be found.
 */
export function getYmlEntityNamePart(text: string, position: EntityPartPosition) {
    if (!text) {
        return null;
    }
    const regexp =
        position === EntityPartPosition.BEGINNING ? YML_ENTITY_NAME_START_REGEXP : YML_ENTITY_NAME_END_REGEXP;
    const matchArray = text.match(regexp);
    if (matchArray == null || matchArray.length === 0) {
        return null;
    }
    // Get the matched input.
    return matchArray[0];
}
