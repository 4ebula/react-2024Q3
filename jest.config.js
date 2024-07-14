const config = {
  roots: ['src', 'tests'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx', '!<rootDir>/node_modules/'],
  coveragePathIgnorePatterns: ['node_modules', 'src/main.tsx', 'src/Router.tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react-jsx',
          esModuleInterop: true,
          allowImportingTsExtensions: true,
          types: ['node', 'jest', '@testing-library/jest-dom'],
        },
      },
    ],
  },
};

export default config;
