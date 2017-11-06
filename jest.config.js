module.exports = {
  "globals": {
    "ts-jest": {
      "tsConfigFile": "tsconfig.json"
    }
  },
  "transform": {
    "^.+\\.(ts|tsx)$": "./node_modules/ts-jest/preprocessor.js"
  },
  "testMatch": [
    "**/tests/**/*.test.(ts|tsx|js)"
  ],
  "setupFiles": [
    "raf/polyfill",
    "./tests/setup/enzyme.ts"
  ],
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "clearMocks": true
};