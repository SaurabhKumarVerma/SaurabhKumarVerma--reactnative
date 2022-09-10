const patterns = [
  '@react-native',
  'react-native',
  '@react-navigation',
  'react-navigation-tabs',
  'react-native-vector-icons/FontAwesome',
  'react-native-reanimated',
  '@gorhom/bottom-sheet'
];

module.exports = {
  verbose: true,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [ '<rootDir>/jest-setup.js' ],
  transformIgnorePatterns: [ `node_modules/(?!(${patterns.join('|')})/)` ],
  collectCoverage: true,
  collectCoverageFrom: [ '**/*.tsx' ],
  testPathIgnorePatterns: [ '/node_modules/' ],
  testMatch: [ '**/?(*.)+(spec|test).[jt]s?(x)' ],
  coveragePathIgnorePatterns: [ '/node_modules/' ],
  moduleNameMapper:{
    'test-utils': '<rootDir>/jest/test-utils.js',
    '@td-design/react-native': '<rootDir>/node_modules/@td-design/react-native/src/index.ts',
  },
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 30,
      functions: 30,
      lines: 50,
    },
  },
  transform: {
    '^.+\\.svg$': '<rootDir>/fileTransformer.js'
  },
};
