import { YmlCompletionItemsProvider } from '../completion/YmlCompletionItemsProvider';
import { YmlDefinitionProvider } from '../definitions';
import { EngineModel } from '../engineModel/EngineModel';

describe('Extension Server Tests', () => {
    describe('EngineModel', () => {
        const ENGINE_MODEL_FILE_CONTENT = `
<?xml version="1.0" encoding="UTF-8"?>
<!--
- Scanning classes: see the element <classes>
- Scanning instances: see the element <instances>
- Scanning tags: see the element <text-tags>
- Scanning functions (not methods): see the element <functions>
- Scanning deprecated or removed identifiers: see the element <old-identifier>
- Scanning removed attributes ou methods: see the elements <removed-attribute>, <removed-method>
- Scanning deprecated or removed command line options: see the element <old-command-line-options>
- Scanning other removed entities: see the element <other-removed-items> -->
<data-and-features>
    <classes>
        <package ident="yseop.lang">
            <class ident="ParentClass" instances=""/>
            <class ident="ExampleClass" instances="">
                <extends>ParentClass</extends>
                <attribute ident="attribute" internalAttribute="true">
                    <return>
                        <domains>yseop.lang.Boolean</domains>
                    </return>
                </attribute>
                <attribute ident="attribute2">
                    <doc><![CDATA[Documentation for \`attribute2\`.]]></doc>
                    <return>
                        <domains>Collection</domains>
                        <domainsLevel2>Text</domainsLevel2>
                    </return>
                </attribute>
                <method ident="getIntegerValue">
                    <args arity-min="0" arity-max="0"></args>
                    <return>
                        <domains>yseop.lang.Integer</domains>
                    </return>
                </method>
            </class>
        </package>
    </classes>
    <functions>
        <function ident="myFunction" technical="true">
            <args arity-min="0"></args>
            <return>
                <domains>yseop.lang.Object</domains>
            </return>
        </function>
    </functions>
    <text-tags>
        <tag ident="\\myTag">
            <args arity-min="1" arity-max="1">
                <arg>
                    <domains>yseop.lang.Object</domains>
                </arg>
            </args>
        </tag>
    </text-tags>
</data-and-features>

        `;

        it('should get completion objects from an EngineModel', (done) => {
            const completionProvider = new YmlCompletionItemsProvider();
            const model: EngineModel = new EngineModel(
                '/path/to/some/predefinedObject.xml',
                completionProvider,
                new YmlDefinitionProvider(),
            );
            model.parsePredefinedObjectsFileContent(null, ENGINE_MODEL_FILE_CONTENT);
            expect(completionProvider.completions.length).not.toBe(0);
            done();
        });
    });
});
