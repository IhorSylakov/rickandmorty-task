module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}", 
    "!src/index.js",
    "!src/reportWebVitals.js",
    "!src/serviceWorker.js",
    "!src/GlobalStyles.js",
  ],
  modulePathIgnorePatterns: ["<rootDir>/src/index.js"],
};