module.exports = {
    moduleFileExtensions: ["js", "ts"],
    preset: "ts-jest",
    reporters: ["jest-junit"],
    testResultsProcessor: "jest-sonar-reporter",
    verbose: true,
};
