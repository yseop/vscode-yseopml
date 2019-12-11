import * as fs from 'fs';
import { Parser } from 'xml2js';

import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { connection } from '../server';
import { YmlAttribute, YmlClass, YmlEnumValue, YmlFunction } from '../yml-objects';
import { AbstractYmlFunction } from '../yml-objects/AbstractYmlFunction';
import { YmlMethod } from '../yml-objects/YmlMethod';
import { YmlObjectInstance } from '../yml-objects/YmlObjectInstance';

const parser = new Parser();

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

    constructor(public uri: string, public completionProvider: YmlCompletionItemsProvider) {}

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
    private buildYmlFunction(func: any, sourceType?: string): AbstractYmlFunction {
        let ymlAbstractFunction: AbstractYmlFunction;
        if (sourceType) {
            ymlAbstractFunction = new YmlFunction(func.$.ident, this.uri);
            this.functions.push(ymlAbstractFunction);
            ymlAbstractFunction.detail = `[${sourceType}].${ymlAbstractFunction.label}`;
        } else {
            ymlAbstractFunction = new YmlMethod(func.$.ident, this.uri);
            ymlAbstractFunction.detail = `[STATIC] ${ymlAbstractFunction.label}`;
        }
        ymlAbstractFunction.data = `id_${sourceType ? sourceType : 'static'}_${ymlAbstractFunction.label}`;
        if (!!func.doc) {
            ymlAbstractFunction.setDocumentation(func.doc[0]);
        }
        return ymlAbstractFunction;
    }

    /**
     * Import all the YML classes.
     *
     * @param yclass The data structure resulting from the parsing of `predefinedObjects.xml`.
     */
    private buildYmlClass(yclass: any): void {
        const ymlClass: YmlClass = new YmlClass(yclass.$.ident, this.uri);
        if (yclass.extends) {
            yclass.extends.forEach((ext) => {
                ymlClass.extends.push(ext);
            });
        }
        if (yclass.attribute) {
            yclass.attribute.forEach((att) => {
                const attribute = this.buildAttribute(att, ymlClass.label);
                ymlClass.attributes.push(attribute);
                this.completionProvider.addCompletionItem(attribute);
            });
        }
        if (yclass.method) {
            yclass.method.forEach((meth) => {
                const method = this.buildYmlFunction(meth, ymlClass.label);
                ymlClass.methods.push(method);
                this.completionProvider.addCompletionItem(method);
            });
        }

        /* A class (or enum) with instances has the following format:
        <class ident="EnumClassName">
            <extends>yseop.lang.Enum</extends>
            <instances count="2">
                <item ident="EnumInstance_1"></item>
                <item ident="EnumInstance_1"></item>
            </instances>
        </class>
        */
        if (!!yclass.instances && !!yclass.instances[0].item) {
            // The current class has already existing instances.
            // Iterate over each instances items.
            yclass.instances[0].item.forEach((_instance) => {
                const instance =
                    ymlClass.extends.indexOf('yseop.lang.Enum') !== -1
                        ? this.buildEnumValue(_instance, ymlClass.label)
                        : this.buildClassInstance(_instance, ymlClass.label);
                this.completionProvider.addCompletionItem(instance);
            });
        }
        if (!!yclass.doc) {
            ymlClass.setDocumentation(yclass.doc[0]);
        }
        this.classes.push(ymlClass);
        this.enrichYmlClass(ymlClass);
        this.completionProvider.addCompletionItem(ymlClass);
    }

    private buildClassInstance(instanceXmlElement: any, sourceType: string): YmlObjectInstance {
        const identifier = instanceXmlElement.$.ident;
        const instance = new YmlObjectInstance(identifier, this.uri);
        instance.detail = sourceType;
        if (!!instanceXmlElement.doc) {
            instance.setDocumentation(instanceXmlElement.doc[0]);
        }
        instance.domains = sourceType;
        return instance;
    }

    private buildEnumValue(instanceXmlElement: any, sourceType: string): YmlEnumValue {
        const identifier = instanceXmlElement.$.ident;
        const instance = new YmlEnumValue(identifier, this.uri);
        instance.detail = `${sourceType}::${instanceXmlElement.$.ident}`;
        if (!!instanceXmlElement.doc) {
            instance.setDocumentation(instanceXmlElement.doc[0]);
        }
        instance.domains = sourceType;
        return instance;
    }

    private buildAttribute(attributeXmlElement: any, sourceType: string): YmlAttribute {
        const attribute = new YmlAttribute(attributeXmlElement.$.ident, this.uri);
        attribute.detail = `[${sourceType}].${attribute.label}`;
        if (!!attributeXmlElement.doc) {
            attribute.setDocumentation(attributeXmlElement.doc[0]);
        }
        attributeXmlElement.return.forEach((returnType) => {
            if (returnType.domains) {
                attribute.domains = returnType.domains;
            }
            if (returnType.domainsLevel2) {
                attribute.domainsLevel2 = returnType.domainsLevel2;
            }
        });
        return attribute;
    }

    private parsePredefinedObjects(uri: string): void {
        connection.console.log(`Parsing definition file: ${uri}`);
        fs.readFile(uri, (err, data) => {
            parser.parseString(data, (parseErr, predefinedObjects) => {
                if (err != null) {
                    connection.console.error(`Something went wrong during YE model import:\n ${parseErr}`);
                } else if (predefinedObjects == null) {
                    connection.console.error('Something went wrong during YE model import. Your file seems empty.');
                } else {
                    try {
                        const dataAndFeatures = predefinedObjects['data-and-features'];
                        this.importClasses(dataAndFeatures);
                        this.importFunctions(dataAndFeatures);
                        this.importTags(dataAndFeatures);
                    } catch (importErr) {
                        connection.console.error(`Something went wrong during YE model import:\n ${importErr}`);
                    }
                }
                connection.console.log(
                    `Done with classes size=${this.classes.length}\nfunctions size=${this.functions.length}`,
                );
            });
        });
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
    private importClasses(dataAndFeatures: any): void {
        connection.console.log('Importing classes from Yseop Engine model.');
        // Get the single “classes” element.
        const classesByPackage = dataAndFeatures.classes[0].package;
        classesByPackage.forEach((ypackage) => {
            if (ypackage.class == null) {
                return;
            }
            // empty package
            ypackage.class.forEach((yclass) => {
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
    private importFunctions(dataAndFeatures: any): any {
        // Get the single “functions” element.
        const ymlFunctions = dataAndFeatures.functions[0];
        ymlFunctions.function.forEach((func) => {
            const yFunction = this.buildYmlFunction(func);
            this.completionProvider.addCompletionItem(yFunction);
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
    private importTags(dataAndFeatures: any): void {
        // Get the single “text-tags” element.
        const textTags = dataAndFeatures['text-tags'][0];
        textTags.tag.forEach((_tag) => {
            if (!_tag.$.ident) {
                // invalid tag element without identifier
                return;
            }
            const textTag = this.buildYmlFunction(_tag);
            this.completionProvider.addCompletionItem(textTag);
        });
    }

    /**
     * Enrich `yclass` by setting its `data` and `details` fields' value.
     *
     * @param yclass The YmlClass to enrich.
     */
    private enrichYmlClass(yclass: YmlClass): void {
        yclass.data = `id_${yclass.label}`;
        yclass.detail =
            yclass.extends.length > 0 ? `Class: ${yclass.label} extends ${yclass.extends}` : `Class: ${yclass.label}`;
    }
}
