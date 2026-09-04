module.exports = {
preset: "jest-preset-angular",
setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
testPathIgnorePatterns: ["<rootDir>/node_modules/", ".\\.e2e\\.spec\\.ts$", ".\\.functional\\.spec\\.ts$"],
globalSetUp: "jest-preset-angular/global-setup",
}