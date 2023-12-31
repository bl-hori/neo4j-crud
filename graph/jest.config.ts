/* eslint-disable */
export default {
  displayName: 'graph',
  preset: '../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../coverage/graph',
  setupFilesAfterEnv: ['jest-extended/all'],
  globalSetup: './jestGlobalSetup.ts',
};
