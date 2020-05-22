import { Position, Range } from 'vscode-languageserver';

import { YmlDefinitionProvider } from '../definitions';
import { YmlEnumMember } from '../yml-objects/YmlEnumMember';

const labelShortName = 'ENUM_MEMBER';
const label = `EnumName::${labelShortName}`;
const path = '/path/to/kaofile';
const nonExistingLabel = 'none';
const ENUM_MEMBER = new YmlEnumMember(label, path);
ENUM_MEMBER.definitionLocation = {
    uri: path,
    range: Range.create(Position.create(0, 0), Position.create(0, 0)),
};
const NO_LOCATION_ELEMENT = new YmlEnumMember(label, path);

describe('Extension Server Tests', () => {
    describe('YmlDefinitionProvider', () => {
        test('empty definition provider', () => {
            const definitionProvider = new YmlDefinitionProvider();
            expect(definitionProvider.findDefinitions(null)).toBeNull();
            expect(definitionProvider.findDefinitions(nonExistingLabel)).toBeNull();

            expect(definitionProvider.findImplementations(null)).toBeNull();
            expect(definitionProvider.findImplementations(nonExistingLabel)).toBeNull();
        });
        test('definition provider with one element in definition list', () => {
            const definitionProvider = new YmlDefinitionProvider();
            definitionProvider.addDefinition(ENUM_MEMBER);

            expect(definitionProvider.findImplementations(label)).toBeNull();
            expect(definitionProvider.findDefinitions(label)).toBeTruthy();
            expect(definitionProvider.findDefinitions(label)).toHaveLength(1);
            expect(definitionProvider.findDefinitions(labelShortName)).toBeTruthy();
            expect(definitionProvider.findDefinitions(labelShortName)).toHaveLength(1);
            expect(definitionProvider.findDefinitions(nonExistingLabel)).toBeNull();

            definitionProvider.removeDocumentDefinitions(path);
            expect(definitionProvider.findDefinitions(label)).toBeNull();
        });
        test('definition provider with one element in implementation list', () => {
            const definitionProvider = new YmlDefinitionProvider();
            definitionProvider.addImplementation(ENUM_MEMBER);

            expect(definitionProvider.findDefinitions(label)).toBeNull();
            expect(definitionProvider.findImplementations(label)).toBeTruthy();
            expect(definitionProvider.findImplementations(label)).toHaveLength(1);
            expect(definitionProvider.findImplementations(labelShortName)).toBeTruthy();
            expect(definitionProvider.findImplementations(labelShortName)).toHaveLength(1);
            expect(definitionProvider.findImplementations(nonExistingLabel)).toBeNull();

            definitionProvider.removeDocumentImplementations(path);
            expect(definitionProvider.findImplementations(label)).toBeNull();
        });

        test('adding null element or element without definition location', () => {
            const definitionProvider = new YmlDefinitionProvider();
            definitionProvider.addImplementation(null);
            expect(definitionProvider.findImplementations(null)).toBeNull();
            definitionProvider.addImplementation(NO_LOCATION_ELEMENT);
            expect(definitionProvider.findImplementations(NO_LOCATION_ELEMENT.label)).toBeNull();

            definitionProvider.addDefinition(null);
            expect(definitionProvider.findDefinitions(null)).toBeNull();
            definitionProvider.addDefinition(NO_LOCATION_ELEMENT);
            expect(definitionProvider.findDefinitions(NO_LOCATION_ELEMENT.label)).toBeNull();
        });
    });
});
