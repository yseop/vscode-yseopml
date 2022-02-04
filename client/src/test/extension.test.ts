import * as assert from 'assert';
import { expect } from 'chai';
import * as path from 'path';
import * as vscode from 'vscode';

const YML_EXTENSION_ID = 'Yseop.vscode-yseopml';
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as myExtension from '../extension';
// Defines a Jest test suite to group tests of similar kind together
suite('Extension Tests', () => {
    test('YML extension exists.', () => {
        assert.strictEqual(
            vscode.extensions.all.some((extension) => {
                return extension.id === YML_EXTENSION_ID;
            }),
            true,
        );
    });

    test("not existing extension doesn't exists.", () => {
        assert.strictEqual(
            vscode.extensions.all.some((extension) => {
                return extension.id === 'Yseop.notExistingExtension';
            }),
            false,
        );
    });
    test('YML extension adds YML support.', (done) => {
        const ymlExtension = vscode.extensions.all.find((extension) => {
            return extension.id === YML_EXTENSION_ID;
        });
        expect(ymlExtension).to.not.be.undefined;
        vscode.languages.getLanguages().then((languages) => {
            expect(languages).to.not.be.undefined;
            expect(languages).to.not.be.empty;
            expect(languages).to.contain('yml');
            done();
        });
    });

    test(`should format 'documentFormat.dcl'} as expected`, (done) => {
        checkFormatOnFile('documentFormat.dcl', done);
    });
    test(`should format 'otherDocumentFormat.dcl'} as expected`, (done) => {
        checkFormatOnFile('otherDocumentFormat.dcl', done);
    });
    test(`should format 'collectionsAndIfElse.dcl'} as expected`, (done) => {
        checkFormatOnFile('collectionsAndIfElse.dcl', done);
    });
});

function checkFormatOnFile(fileName: string, done) {
    const baseFolder = vscode.workspace.workspaceFolders[0];
    const baseForlderPath = baseFolder.uri.path;
    const sourceUri = vscode.Uri.parse(path.resolve(baseForlderPath, '_technical/toFormat', fileName));
    const targetUri = vscode.Uri.parse(path.resolve(baseForlderPath, '_technical/formatted', fileName));
    let sourceFile: vscode.TextDocument;
    vscode.workspace
        .openTextDocument(sourceUri)
        .then((document) => {
            sourceFile = document;
            return document.uri;
        })
        .then((docUri) => {
            return formatDocument(docUri);
        })
        .then((editList) => {
            expect(editList).to.not.be.null;
            const workEdits = new vscode.WorkspaceEdit();
            workEdits.set(sourceUri, editList); // give the edits
            return workEdits;
        })
        .then((workEdits) => {
            // apply the edits
            return vscode.workspace.applyEdit(workEdits);
        })
        .then((editsApplied) => {
            expect(editsApplied).to.be.true;
        })
        .then(() => {
            return vscode.workspace.openTextDocument(targetUri);
        })
        .then((formattedFile) => {
            expect(sourceFile.getText()).to.equal(formattedFile.getText());
            done();
        });
}

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
