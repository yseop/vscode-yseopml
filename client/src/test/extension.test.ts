//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//
import * as assert from 'assert';
import * as vscode from 'vscode';

const YML_EXTENSION_ID = 'Yseop.vscode-yseopml';
// The module 'assert' provides assertion methods from node
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as myExtension from '../extension';

// Defines a Mocha test suite to group tests of similar kind together
suite('Extension Tests', () => {
    test('YML extension exists.', () => {
        assert.strictEqual(
            true,
            vscode.extensions.all.some((extension) => {
                return extension.id === YML_EXTENSION_ID;
            }),
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

    test('not activated YML extension is not active.', () => {
        const ymlExtension = vscode.extensions.all.find((extension) => {
            return extension.id === YML_EXTENSION_ID;
        });
        assert.notStrictEqual(ymlExtension, null);
        assert.strictEqual(ymlExtension.isActive, false);
    });

    test('YML extension activation activates it.', (done) => {
        const ymlExtension = vscode.extensions.all.find((extension) => {
            return extension.id === YML_EXTENSION_ID;
        });
        assert.notStrictEqual(ymlExtension, null);
        assert.strictEqual(ymlExtension.isActive, false);
        ymlExtension
            .activate()
            .then(() => {
                assert.strictEqual(ymlExtension.isActive, true);
            })
            .then(done, done);
    });

    test('YML extension adds YML support.', (done) => {
        const ymlExtension = vscode.extensions.all.find((extension) => {
            return extension.id === YML_EXTENSION_ID;
        });
        assert.notStrictEqual(ymlExtension, null, "Extension doesn't exist.");
        vscode.languages
            .getLanguages()
            .then((languages) => {
                assert.notStrictEqual(languages, null);
                assert.notStrictEqual(languages.length, 0);
                assert.notStrictEqual(languages.indexOf('yml'), -1);
            })
            .then(done, done);
    });
});
