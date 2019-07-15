import * as glob from 'glob';
import * as Mocha from 'mocha';
import * as path from 'path';

export function run(): Promise<void> {
    // Create the mocha test
    const mocha = new Mocha({
        ui: 'tdd', // the TDD UI is being used in extension.test.ts (suite, test, etc.)
        useColors: true,
        fullStackTrace: true,
        reporter: 'xunit',
        reporterOptions: {
            // Path from the place the tests are run. In our case: /target/test-reports/client-tests.xml
            output: '../target/test-reports/client-tests.xml',
        },
    });

    const testsRoot = path.resolve(__dirname, '..');

    return new Promise((c, e) => {
        glob('**/**.test.js', { cwd: testsRoot }, (err, files) => {
            if (err) {
                return e(err);
            }

            // Add files to the test suite
            files.forEach((f) => mocha.addFile(path.resolve(testsRoot, f)));

            try {
                // Run the mocha test
                mocha.run((failures) => {
                    if (failures > 0) {
                        e(new Error(`${failures} tests failed.`));
                    } else {
                        c();
                    }
                });
            } catch (err) {
                e(err);
            }
        });
    });
}
