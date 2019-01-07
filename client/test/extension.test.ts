//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../extension';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", () => {

    test("Test that YML extension exists.", () => {
        assert.equal(true, vscode.extensions.all.some(extension => {
            return extension.id === "Yseop.vscode-yseopml";
        }));
    });

    test("Test that not existing extension doesn't exists.", () => {
        assert.equal(false, vscode.extensions.all.some(extension => {
            return extension.id === "Yseop.notExistingExtension";
        }));
    });

    test("Test that not activated YML extension is not active.", () => {
        var ymlExtension = vscode.extensions.all.find(extension => {
            return extension.id === "Yseop.vscode-yseopml";
        });
        assert.notEqual(null, ymlExtension);
        assert.equal(false, ymlExtension.isActive);
    });

    test("Test that YML extension activation activates it.", () => {
        var ymlExtension = vscode.extensions.all.find(extension => {
            return extension.id === "Yseop.vscode-yseopml";
        });
        assert.notEqual(null, ymlExtension);
        ymlExtension.activate().then(() => {
            assert.equal(true, ymlExtension.isActive);
        });
    });
    
    test("Test extension adds YML support.", (done) => {
        vscode.languages.getLanguages().then((languages) => {
            assert.notEqual(null, languages);
            assert.notEqual(0, languages.length);
            assert.notEqual(-1, languages.indexOf("yml"));
            done();
        });
    });

});