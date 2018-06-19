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
suite("Extension Tests", function () {

    test("Test that YML extension exists.", function(){
        assert.equal(true, vscode.extensions.all.some(extension => {
            return extension.id === "Yseop.vscode-yseopml";
        }));
    });

    test("Test that not existing extension doesn't exists.", function(){
        assert.equal(false, vscode.extensions.all.some(extension => {
            return extension.id === "Yseop.notExistingExtension";
        }));
    });

    test("Test extension adds yml support.", function(){
        vscode.languages.getLanguages().then(function (languages) {
            assert.notEqual(null, languages);
            assert.notEqual(0, languages.length);
            assert.notEqual(-1, languages.indexOf("yml"));
        });
    });


});