module.exports = {
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testMatch: [
    '**/__test__/**/*.test.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
