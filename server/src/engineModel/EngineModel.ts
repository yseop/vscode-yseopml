import * as fs from 'fs';
import { XmlDocument, XmlElement } from 'xmldoc';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions/YmlDefinitionProvider';
import { connection } from '../server';
import { YmlAttribute, YmlClass, YmlFunction } from '../yml-objects';
import { AbstractYmlFunction } from '../yml-objects/AbstractYmlFunction';
import { YmlMethod } from '../yml-objects/YmlMethod';

/**
 * Parse `predefinedObjects.xml` and contain the classes and functions that can be found in it.
 *
 * While parsing, a completionProvider is fill with completion items.
 *
 * The completion items currently available are:
 * - Types;
 * - Methods;
 * - Functions;
 * - Class attributes;
 */
export class EngineModel {
    private classes: YmlClass[] = [];
    private functions: YmlFunction[] = [];

    constructor(
        public uri: string,
        public completionProvider: YmlCompletionItemsProvider,
        public definitionProvider: YmlDefinitionProvider,
    ) {}

    /**
     * Parse the file that is at `uri`.
     */
    public loadPredefinedObjects(): void {
        if (!fs.existsSync(this.uri)) {
            connection.console.warn(`File “${this.uri}” doesn't exist.`);
        } else if (!fs.lstatSync(this.uri).isFile()) {
            connection.console.warn(
                `It seems that ${this.uri} is not a normal file. Therefore, it cannot be imported.`,
            );
        } else {
            this.parsePredefinedObjects(this.uri);
        }
    }

    public reload(uri: string, completionProvider: YmlCompletionItemsProvider): void {
        this.classes = [];
        this.functions = [];
        this.completionProvider.removeDocumentCompletionItems(this.uri);
        this.uri = uri;
        this.completionProvider = completionProvider;
        this.loadPredefinedObjects();
    }
    private buildYmlFunction(func: XmlElement, sourceType?: string): AbstractYmlFunction {
        let ymlAbstractFunction: AbstractYmlFunction;
        const documentation: string = getDocValue(func);
        if (sourceType) {
            ymlAbstractFunction = new YmlMethod(func.attr.ident, this.uri);
            this.functions.push(ymlAbstractFunction);
            ymlAbstractFunction.setUserInformations(
                `(function) [${sourceType}].${ymlAbstractFunction.label}`,
                documentation,
            );
        } else {
            ymlAbstractFunction = new YmlFunction(func.attr.ident, this.uri);
            ymlAbstractFunction.setUserInformations(`(function) [static] ${ymlAbstractFunction.label}`, documentation);
        }
        ymlAbstractFunction.data = `id_${sourceType ?? 'static'}_${ymlAbstractFunction.label}`;
        ymlAbstractFunction.setDefinitionLocationFromLocation(this.buildLocationFromXmlElement(func));
        return ymlAbstractFunction;
    }

    /**
     * Import all the YML text tags.
     *
     * @param yclass The data structure resulting from the parsing of `predefinedObjects.xml`.
     */
    private buildYmlClass(yclass: XmlElement): void {
        const ymlClass: YmlClass = new YmlClass(yclass.attr.ident, this.uri);
        yclass.childrenNamed('extends')?.forEach((ext) => {
            ext.children.forEach((element) => {
                ymlClass.extends.push(element.toString());
            });
        });
        yclass.childrenNamed('attribute').forEach((att) => {
            const attribute = this.buildAttribute(att, ymlClass.label);
            attribute.setDefinitionLocationFromLocation(this.buildLocationFromXmlElement(att));
            ymlClass.attributes.push(attribute);
            this.completionProvider.addCompletionItem(attribute);
            this.definitionProvider.addDefinition(attribute);
        });
        yclass.childrenNamed('method').forEach((meth) => {
            const method = this.buildYmlFunction(meth, ymlClass.label);
            method.setDefinitionLocationFromLocation(this.buildLocationFromXmlElement(meth));
            ymlClass.methods.push(method);
            this.completionProvider.addCompletionItem(method);
            this.definitionProvider.addDefinition(method);
        });
        const documentation: string = getDocValue(yclass);
        ymlClass.setUserInformations(`(class) ${ymlClass.label}`, documentation);
        ymlClass.setDefinitionLocationFromLocation(this.buildLocationFromXmlElement(yclass));
        this.classes.push(ymlClass);
        this.enrichYmlClass(ymlClass);
        this.completionProvider.addCompletionItem(ymlClass);
        this.definitionProvider.addDefinition(ymlClass);
    }

    private buildAttribute(attributeXmlElement: XmlElement, sourceType: string): YmlAttribute {
        const attribute = new YmlAttribute(attributeXmlElement.attr.ident, this.uri);
        const documentation: string = getDocValue(attributeXmlElement);
        attribute.setUserInformations(`(property) [${sourceType}].${attribute.label}`, documentation);
        const returnTypes = attributeXmlElement.childNamed('return');
        const domains = returnTypes.childrenNamed('domains');
        if (!!domains) {
            attribute.domains = domains.map((_currentDomain) => _currentDomain.val);
        }
        const domainsLevel2 = returnTypes.childrenNamed('domainsLevel2');
        if (!!domainsLevel2) {
            attribute.domainsLevel2 = domainsLevel2.map((_currentDomain) => _currentDomain.val);
        }
        return attribute;
    }

    private parsePredefinedObjects(uri: string): void {
        connection.console.log(`Parsing definition file: ${uri}`);
        fs.readFile(uri, (err, data) => {
            this.parsePredefinedObjectsFileContent(err, data);
        });
    }

    public parsePredefinedObjectsFileContent(err, data: Buffer | string): void {
        if (!!err) {
            connection.console.error(`Something went wrong during YE model import:\n ${err}`);
        } else if (data === null || data.length === 0) {
            connection.console.error('Something went wrong during YE model import. Your file seems empty.');
        } else {
            try {
                const document: XmlDocument = new XmlDocument(data.toString());
                this.importClasses(document);
                this.importFunctions(document);
                this.importTags(document);
            } catch (importErr) {
                connection.console.error(`Something went wrong during YE model import:\n ${importErr}`);
            }
        }
        connection.console.log(
            `Done with classes size=${this.classes.length}\nfunctions size=${this.functions.length}`,
        );
    }

    /**
     * Import all the YML classes.
     *
     * ```XML
     * <data-and-features>
     *  [...]
     *  <classes>
     *      <package ident="yseop.lang">
     *          <class ident="id1">
     *              [...]
     *          </class>
     *          <class ident="id1">
     *              [...]
     *          </class>
     *      </package>
     *      <package ident="xxx">
     *          [...]
     *      </package>
     *  </classes>
     * </data-and-features>
     * ```
     *
     * @param dataAndFeatures The data structure resulting from the parsing of `predefinedObjects.xml`.
     */
    private importClasses(dataAndFeatures: XmlDocument): void {
        connection.console.log('Importing classes from Yseop Engine model.');
        // Get the single “classes” element.
        const classesByPackage: XmlElement[] = dataAndFeatures.childNamed('classes').childrenNamed('package');
        classesByPackage.forEach((ypackage) => {
            // empty package
            ypackage.childrenNamed('class').forEach((yclass) => {
                this.buildYmlClass(yclass);
            });
        });
    }

    /**
     * Import all the YML static functions.
     *
     * ```XML
     * <data-and-features>
     *  [...]
     *  <functions>
     *      <function ident="func1">
     *          <args [...]>
     *              [...]
     *          </args>
     *          <return [...]>
     *              [...]
     *          </return>
     *      </function>
     *      <function ident="func2">
     *          [...]
     *      </function>
     *  </functions>
     * </data-and-features>
     * ```
     *
     * @param dataAndFeatures The data structure resulting from the parsing of `predefinedObjects.xml`.
     */
    private importFunctions(dataAndFeatures: XmlElement): any {
        // Get the single “functions” element.
        const ymlFunctions = dataAndFeatures.childNamed('functions');
        ymlFunctions.childrenNamed('function').forEach((func) => {
            const yFunction = this.buildYmlFunction(func);
            this.completionProvider.addCompletionItem(yFunction);
            this.definitionProvider.addDefinition(yFunction);
        });
    }

    /**
     * Import all the YML text tags.
     *
     * ```XML
     * <data-and-features>
     *  [...]
     *  <text-tags>
     *      <tag ident="\tag1">
     *          <args [...]>
     *              [...]
     *          </args>
     *      </tag>
     *      <tag ident="\tag2">
     *          [...]
     *      </tag>
     *  </text-tags>
     * </data-and-features>
     * ```
     *
     * @param dataAndFeatures The data structure resulting from the parsing of `predefinedObjects.xml`.
     */
    private importTags(dataAndFeatures: XmlElement): void {
        // Get the single “text-tags” element.
        const textTags = dataAndFeatures.childNamed('text-tags');
        textTags.childrenNamed('tag').forEach((_tag) => {
            if (!_tag.attr.ident) {
                // invalid tag element without identifier
                return;
            }
            const textTag = this.buildYmlFunction(_tag);
            this.completionProvider.addCompletionItem(textTag);
            this.definitionProvider.addDefinition(textTag);
        });
    }

    /**
     * Enrich `yclass` by setting its `data` and `details` fields' value.
     *
     * @param yclass The YmlClass to enrich.
     */
    private enrichYmlClass(yclass: YmlClass): void {
        yclass.data = `id_${yclass.label}`;
        yclass.detail = `(class) ${yclass.label}`;
        if (yclass.extends.length > 0) {
            yclass.detail = yclass.detail.concat(` extends ${yclass.extends}`);
        }
    }

    private buildLocationFromXmlElement(xmlElement: XmlElement) {
        return {
            range: {
                end: {
                    character: xmlElement.column,
                    line: xmlElement.line,
                },
                start: {
                    character: xmlElement.column,
                    line: xmlElement.line,
                },
            },
            uri: this.uri,
        };
    }
}

/**
 * Returns the value of the cdata contained in the first child `doc` element within a given XML element, if any.
 *
 * We expect it to be given as the following representation.
 *
 * ```XML
 * <doc><![CDATA[documentation]]></doc>
 * ```
 *
 * Using this function on the XML representation above will return `"documentation"`.
 * Any other representation of the node will result in a `null` value.
 *
 * @param xmlElement a representation of an XML tag.
 *
 * @return the xmlElement's documentation or `null`.
 */
function getDocValue(xmlElement: XmlElement): string {
    const doc = xmlElement.childNamed('doc');
    const cdata = !!doc ? doc.firstChild : null;
    if (!cdata || cdata.type !== 'cdata') {
        return null;
    }
    return cdata.cdata;
}
