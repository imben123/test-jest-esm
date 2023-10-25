export default {
  maxWorkers: 1,
  roots: [
    "<rootDir>"
  ],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true
      }
    ]
  },
  transformIgnorePatterns: [],
  reporters: [
    "default"
  ],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  },
  extensionsToTreatAsEsm: [".ts"],
  modulePathIgnorePatterns: ["<rootDir>/assets", "<rootDir>/submodules"]
}
