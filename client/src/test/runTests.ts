import { runTests } from '@vscode/test-electron';
import * as path from 'path';

async function main() {
    try {
        // The folder containing the Extension Manifest package.json
        // Passed to `--extensionDevelopmentPath`
        const extensionDevelopmentPath = path.resolve(__dirname, '../../../');

        // The path to the extension test script
        // Passed to --extensionTestsPath
        const extensionTestsPath = path.resolve(__dirname, './index');

        const resourcesDirPath = path.resolve(extensionDevelopmentPath, 'client/resources');
        const kbDirPath = path.resolve(resourcesDirPath, 'kb');
        const documentFormatFilePath = path.resolve(kbDirPath, '_technical/toFormat/documentFormat.dcl');

        // Download VS Code, unzip it and run the integration test
        await runTests({
            extensionDevelopmentPath,
            extensionTestsPath,
            launchArgs: [`${kbDirPath}/`, documentFormatFilePath, '--disable-extensions'],
        });
    } catch (err) {
        console.error('Failed to run tests');
        process.exit(1);
    }
}

main();
