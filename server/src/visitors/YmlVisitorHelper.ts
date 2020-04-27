import { FieldContext } from '../grammar';
import { connection } from '../server';

/** Used to trim YML documentation. */
const BEGINNING_QUOTES_REGEX = /^("""|")\s*/;
/** Used to trim YML documentation. */
const ENDING_QUOTES_REGEX = /\s*("""|")$/;

export function getDocumentation(fieldOptions: FieldContext[]): string {
    try {
        for (const element of fieldOptions.filter((elem) => !!elem.commonField)) {
            const option = element.commonField();
            if (
                !option ||
                !option._optionName ||
                option._optionName.text !== 'documentation' ||
                !option._optionValue ||
                !option._optionValue.text
            ) {
                // There is no option, or option name isn't “documentation” or there is no text value associated.
                continue;
            }
            let _documentation = option._optionValue.text;
            _documentation = _documentation.replace(BEGINNING_QUOTES_REGEX, '');
            _documentation = _documentation.replace(ENDING_QUOTES_REGEX, '');
            return _documentation;
        }
    } catch (err) {
        if (!!err) {
            connection.console.error(`${err}`);
        } else {
            connection.console.error(`An unexpected error occured when getting documentation value.`);
        }
    }
    return null;
}

export function getType(fieldOptions: FieldContext[], baseType?: string): string {
    let domains = baseType ? baseType : 'Object';
    let domainsLevel2 = '';
    try {
        for (const element of fieldOptions.filter((elem) => !!elem.commonField)) {
            const option = element.commonField();
            if (!option || !option._optionName || !option._optionValue) {
                continue;
            }
            const optionName = option._optionName.text;
            if (optionName === 'domains') {
                domains = option._optionValue.text;
            } else if (optionName === 'domainsLevel2') {
                domainsLevel2 = ` − ${option._optionValue.text}`;
            } else {
                // YML fields unrelated to domains.
            }
        }
    } catch (err) {
        if (!!err) {
            connection.console.error(`${err}`);
        } else {
            connection.console.error(`An unexpected error occured when getting domains.`);
        }
    }
    return domains.concat(domainsLevel2);
}
