module.exports = {
  roots: ["./src"],
  transform: {
    "^.+\\.ts$": "ts-jest", // Transform TypeScript files
  },
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"], // Match test files
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text-summary"],
  moduleNameMapper: {
    "^@/(.*)$": "./src/$1",
  },
  clearMocks: true,
  setupFilesAfterEnv: ["./src/setup-tests.ts"],
  testResultsProcessor: "jest-sonar-reporter", // Use SonarQube-compatible reporter
};
