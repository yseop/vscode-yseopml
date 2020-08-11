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
    it('should get text edits from document format feature', (done) => {
        const fileUri = vscode.workspace.textDocuments[0].uri;
        expect(fileUri.path.endsWith('documentFormat.dcl')).toBeTruthy();
        formatDocument(fileUri)
            .then((editList) => {
                expect(editList).toBeTruthy();
                expect(editList.length).toBe(8);
            })
            .then(done, done);
    });
});

/**
 * Sends to the server a request to format the document at `docUri`.
 *
 * @param docUri uri to the document to format.
 *
 * @returns an array of text edits.
 */
function formatDocument(docUri: vscode.Uri): Thenable<vscode.TextEdit[]> {
    return vscode.commands.executeCommand('vscode.executeFormatDocumentProvider', docUri, {});
}
