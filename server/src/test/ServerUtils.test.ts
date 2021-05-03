import { getPredefinedObjectsXmlPath } from '../serverUtils';

const PREDEF_XML_RELATIVE_PATH = 'lib/predefinedObjects.xml';
const PREDEF_XML_ABSOLUTE_PATH = '/home/user/workspace/lib/predefinedObjects.xml';
const WORKSPACE_PATH = '/home/user/workspace';

describe('Settings Tests', () => {
    test.each([
        [null, null, null],
        [WORKSPACE_PATH, null, null],
        [null, PREDEF_XML_RELATIVE_PATH, PREDEF_XML_RELATIVE_PATH],
        [WORKSPACE_PATH, PREDEF_XML_RELATIVE_PATH, PREDEF_XML_ABSOLUTE_PATH],
        [null, PREDEF_XML_ABSOLUTE_PATH, PREDEF_XML_ABSOLUTE_PATH],
        [WORKSPACE_PATH, PREDEF_XML_ABSOLUTE_PATH, PREDEF_XML_ABSOLUTE_PATH],
    ])(
        'predefinedObjectsXmlPath from %s and %s should be %s',
        (workspacePath: string, pathToPredefinedObjectsXml: string, expected: string) => {
            const file = getPredefinedObjectsXmlPath(workspacePath, pathToPredefinedObjectsXml);
            expect(file).toBe(expected);
        },
    );
});
