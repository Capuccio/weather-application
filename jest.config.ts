import { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    "/^.+.(js|jsx|ts|tsx)$/": "babel-jest",
   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileTransformer.js'
  }
};

export default config;