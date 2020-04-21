import * as vscode from 'vscode';

const YML_EXTENSION_ID = 'Yseop.vscode-yseopml';
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as myExtension from '../extension';

// Defines a Jest test suite to group tests of similar kind together
describe('Extension Tests', () => {
    it('YML extension exists.', () => {
        expect(
            vscode.extensions.all.some((extension) => {
                return extension.id === YML_EXTENSION_ID;
            }),
        ).toBeTruthy();
    });

    it("not existing extension doesn't exists.", () => {
        expect(
            vscode.extensions.all.some((extension) => {
                return extension.id === 'Yseop.notExistingExtension';
            }),
        ).toBeFalsy();
    });

    it('not activated YML extension is not active.', () => {
        const ymlExtension = vscode.extensions.all.find((extension) => {
            return extension.id === YML_EXTENSION_ID;
        });
        expect(ymlExtension).toBeDefined();
        expect(ymlExtension.isActive).toBeFalsy();
    });

    it('YML extension activation activates it.', () => {
        const ymlExtension = vscode.extensions.all.find((extension) => {
            return extension.id === YML_EXTENSION_ID;
        });
        expect(ymlExtension).toBeDefined();
        expect(ymlExtension.isActive).toBeFalsy();
        return ymlExtension.activate().then(() => {
            expect(ymlExtension.isActive).toBeTruthy();
        });
    });

    it('YML extension adds YML support.', () => {
        const ymlExtension = vscode.extensions.all.find((extension) => {
            return extension.id === YML_EXTENSION_ID;
        });
        expect(ymlExtension).toBeDefined();
        return vscode.languages.getLanguages().then((languages) => {
            expect(languages).toBeDefined();
            expect(languages.length).not.toBe(0);
            expect(languages.indexOf('yml')).not.toBe(-1);
        });
    });
});
