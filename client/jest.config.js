module.exports = {
    moduleFileExtensions: ["js", "ts"],
    preset: "ts-jest",
    reporters: ["default", "jest-junit"],
    testResultsProcessor: "jest-sonar-reporter",
    verbose: true,
    runner: "jest-runner-mocha"
};
