module.exports = {
    collectCoverage: true,
    coverageDirectory: "target/coverage",
    coveragePathIgnorePatterns: ["src/grammar/*"],
    moduleFileExtensions: ["js", "ts"],
    preset: "ts-jest",
    reporters: ["default", "jest-junit"],
    testMatch: ["**/*.test.ts"],
    // Ignore client test for now because I don't know yet a good way to launch them as jest tests
    // because of a dependency problem with vscode.
    testPathIgnorePatterns: ["client/src/test/"],
    testResultsProcessor: "jest-sonar-reporter",
    verbose: true,
};
