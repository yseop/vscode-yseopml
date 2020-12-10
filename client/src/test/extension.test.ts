import * as path from 'path';
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
    test.each(['documentFormat.dcl', 'otherDocumentFormat.dcl', 'collectionsAndIfElse.dcl'])(
        'should format %s as expected',
        (fileName) => {
            const baseFolder = vscode.workspace.workspaceFolders[0];
            const baseForlderPath = baseFolder.uri.path;
            const sourceUri = vscode.Uri.parse(path.resolve(baseForlderPath, '_technical/toFormat', fileName));
            const targetUri = vscode.Uri.parse(path.resolve(baseForlderPath, '_technical/formatted', fileName));
            let sourceFile: vscode.TextDocument;
            return vscode.workspace
                .openTextDocument(sourceUri)
                .then((document) => {
                    sourceFile = document;
                    return document.uri;
                })
                .then((docUri) => {
                    return formatDocument(docUri);
                })
                .then((editList) => {
                    expect(editList).toBeTruthy();
                    const workEdits = new vscode.WorkspaceEdit();
                    workEdits.set(sourceUri, editList); // give the edits
                    return workEdits;
                })
                .then((workEdits) => {
                    // apply the edits
                    return vscode.workspace.applyEdit(workEdits);
                })
                .then((editsApplied) => {
                    expect(editsApplied).toBeTruthy();
                })
                .then(() => {
                    return vscode.workspace.openTextDocument(targetUri);
                })
                .then((formattedFile) => {
                    expect(sourceFile.getText()).toBe(formattedFile.getText());
                });
        },
    );
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
