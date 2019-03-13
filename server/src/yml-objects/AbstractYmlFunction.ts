import { AbstractYmlObject, YmlType } from './AbstractYmlObject';
import { YmlArgs } from './YmlArgs';
import { YmlSymbolList } from './YmlSymbolList';

export abstract class AbstractYmlFunction extends AbstractYmlObject {
    /**
     * Domains / return types of the function.
     */
    public returnDomains: YmlType;
    /**
     * Specialization of the domains / return types.
     *
     * It is mostly used when the function returns a `Collection`-like element. \
     * In that case it corresponds to the domains of the elements inside the collection.
     */
    public returnDomainsLevel2: YmlType;
    /**
     * Another way to describe the domains or return types.
     * This is a complete enumeration of the possible values.
     */
    public returnSymbolList: YmlSymbolList;
    /**
     * Arguments of the function.
     */
    public args: YmlArgs;
}
