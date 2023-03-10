/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

export default {
  preset: "ts-jest",
  roots: ["<rootDir>"],
  moduleNameMapper: {
    "@controllers/(.*)": "<rootDir>/src/controllers/$1",
    "@handlers/(.*)": "<rootDir>/src/handlers/$1",
    "@interfaces/(.*)": "<rootDir>/src/interfaces/$1",
    "@locales/(.*)": "<rootDir>/src/locales/$1",
    "@middleware/(.*)": "<rootDir>/src/middleware/$1",
    "@models/(.*)": "<rootDir>/src/models/$1",
    "@routes/(.*)": "<rootDir>/src/routes/$1",
    "@services/(.*)": "<rootDir>/src/services/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
  },
  testEnvironment: "node",
};
