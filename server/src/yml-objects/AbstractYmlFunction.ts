import { AbstractYmlObject, YmlType } from './AbstractYmlObject';
import { YmlArgs } from './YmlArgs';
import { YmlSymbolList } from './YmlSymbolList';

export abstract class AbstractYmlFunction extends AbstractYmlObject {
    /** The cognitive complexity of this function. */
    private cognitiveComplexity = 0;
    /** The current nesting level. */
    private nestingLevel = 0;

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

    public getShortName() {
        const functionNameSubParts = this.label.split('::');
        return functionNameSubParts[functionNameSubParts.length - 1];
    }

    /**
     * Get the cognitive complexity computed for this function during parsing.
     */
    public getCognitiveComplexity() {
        return this.cognitiveComplexity;
    }

    /**
     * Increase the cognitive complexity by one then add the nesting level if required.
     *
     * @param applyNestingLevel `false` if the nesting level shouldn't be applied too. `true` by default.
     */
    public increaseCognitiveComplexity(applyNestingLevel = true) {
        this.cognitiveComplexity += 1;
        if (applyNestingLevel) {
            this.cognitiveComplexity += this.nestingLevel;
        }
    }

    /**
     * Increase by one the current nesting level when computing the cognitive complexity.
     */
    public increaseNestingLevel() {
        this.nestingLevel++;
    }

    /**
     * Decrease by one the current nesting level when computing the cognitive complexity.
     */
    public decreaseNestingLevel() {
        this.nestingLevel--;
    }
}
