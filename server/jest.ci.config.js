module.exports = {
    collectCoverage: true,
    coverageDirectory: "../target/coverage",
    coveragePathIgnorePatterns: ["src/grammar/*"],
    moduleFileExtensions: ["js", "ts"],
    preset: "ts-jest",
    reporters: ["default", [
            "jest-junit", {"outputDirectory": "../target"}
        ]
    ],
    testMatch: ["**/*.test.ts"],
    testResultsProcessor: "jest-sonar-reporter",
    verbose: true,
};
