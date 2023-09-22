module.exports = {
  setupFilesAfterEnv: ['./rtl.setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts*',
    'src/**/*.js*',
    '!node_modules/',
    '!src/**/*.stories.ts',
    '!src/themes/**',
    '!src/icons/**',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1,
    },
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.ts',
  },
};
