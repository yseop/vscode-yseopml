/** @type {import('jest-runner-vscode').RunnerOptions} */
import * as path from 'path';

const extensionDevelopmentPath = path.resolve(__dirname, '../../');
const resourcesDirPath = path.resolve(extensionDevelopmentPath, 'client/resources');
const kbDirPath = path.resolve(resourcesDirPath, 'kb');
const documentFormatFilePath = path.resolve(kbDirPath, '_technical/toFormat/documentFormat.dcl');

module.exports = {
    extensionDevelopmentPath: extensionDevelopmentPath,
    launchArgs: [`${kbDirPath}/`, documentFormatFilePath, '--new-window', '--disable-extensions'],
    openInFolder: true,
  }
