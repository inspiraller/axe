module.exports = {
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/jest/stub.js',
    '\\.(css|less|scss)$': '<rootDir>/jest/stub.js',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^__tests__/(.*)$': '<rootDir>/__tests__/$1',
    '^.*antd/dist/antd.css': '<rootDir>/jest/stub.js',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  testEnvironment:
    'jsdom' /* note: jest-environment-jsdom is installed so can provide comments where it is needed. */,
  testRegex: '(\\.(test|spec))\\.[tj]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'css'],
  globals: {
    window: {
      location: {},
    },
  },
  modulePathIgnorePatterns: ['node_modules'],
};
