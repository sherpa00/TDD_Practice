module.exports = {
  displayName: "e2e",
  testMatch: [
    "**/__tests__/**/e2e/**/*.[jt]s?(x)",
    "<rootDir>/lib/**/*.e2e.[jt]s?(x)",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/__tests__/e2e/_setup.js",
    "<rootDir>/__tests__/e2e/_teardown.js",
  ],
  globalSetup: "<rootDir>/__tests__/e2e/_setup.js",
  globalTeardown: "<rootDir>/__tests__/e2e/_teardown.js",
};
