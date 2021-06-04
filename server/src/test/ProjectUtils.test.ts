import { findKaoFileDependencies } from '../serverUtils';

const WORKSPACE_FAKE_URI = '/workspace/';
const CURRENT_KAO_FILE_FAKE_URI = '/workspace/src/_technical/project.kao';

describe('ProjectUtils', () => {
    test.each([
        // Empty M file.
        [`_FILE_TYPE_ M`, true, []],
        // Empty F file.
        [`_FILE_TYPE_ F`, false, []],
        [
            `
_FILE_TYPE_ F

@defineValue MY_VALUE 42

     // Just a comment

    /**
  * Multiline comment
*/

lib/libA/beforeExternReferences.kao

.generated-yml/extern_references_objects.yml
.generated-yml/verb.lib.yml

lib/libA/interfaces.kao

.generated-yml/headers.yml
.generated-yml/extern_references_functions.yml


lib/libB/lib-json.kao
lib/libC/user-documentation.kao
lib/libD/yml-unit-framework.kao

lib/libA/implementations.kao

.generated-yml/generated_text_elements.yml`,
            false,
            [
                '/workspace/lib/libA/beforeExternReferences.kao',
                '/workspace/lib/libA/interfaces.kao',
                '/workspace/lib/libB/lib-json.kao',
                '/workspace/lib/libC/user-documentation.kao',
                '/workspace/lib/libD/yml-unit-framework.kao',
                '/workspace/lib/libA/implementations.kao',
            ],
        ],
        [
            `
            _FILE_TYPE_ M

            ../_domainObjects/instances.dcl
            publicFunctions.yml
            ../_domainObjects/accessors.dcl

            ../_domainObjects/entryPoints.dcl
            ../_domainObjects/functions.dcl

            debugger-misc.dcl
            debugger-rules.dcl
            debugger-texts.dcl
            profiling.dcl
            printXMLSchema.yml
            internalWorkflow.dcl`,
            true,
            [
                '/workspace/src/_domainObjects/instances.dcl',
                '/workspace/src/_technical/publicFunctions.yml',
                '/workspace/src/_domainObjects/accessors.dcl',
                '/workspace/src/_domainObjects/entryPoints.dcl',
                '/workspace/src/_domainObjects/functions.dcl',
                '/workspace/src/_technical/debugger-misc.dcl',
                '/workspace/src/_technical/debugger-rules.dcl',
                '/workspace/src/_technical/debugger-texts.dcl',
                '/workspace/src/_technical/profiling.dcl',
                '/workspace/src/_technical/printXMLSchema.yml',
                '/workspace/src/_technical/internalWorkflow.dcl',
            ],
        ],
    ])(
        'the kao file (%#) should give the expected dependencies',
        (fileContent: string, isTypeM: boolean, expectedDependencies: string[]) => {
            const dependencies = findKaoFileDependencies(
                fileContent,
                isTypeM,
                WORKSPACE_FAKE_URI,
                CURRENT_KAO_FILE_FAKE_URI,
            );
            expect(dependencies.length).toBe(expectedDependencies.length);
            expect(dependencies).toStrictEqual(expectedDependencies);
        },
    );
});
