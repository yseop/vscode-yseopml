import { AbstractYmlObject, YmlType } from './AbstractYmlObject';
import { YmlArgs } from './YmlArgs';
import { YmlSymbolList } from './YmlSymbolList';

export abstract class AbstractYmlFunction extends AbstractYmlObject {
    public returnDomains: YmlType;
    public returnDomainsLevel2: YmlType;
    public returnSymbolList: YmlSymbolList;
    public args: YmlArgs;
}
