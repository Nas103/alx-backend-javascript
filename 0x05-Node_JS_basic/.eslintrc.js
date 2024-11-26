module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
    node: true, // Add node environment for better Node.js support
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended', // Use "recommended" instead of "all" for better compatibility
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
    // Add compatibility for Node.js 12
    'jest/no-deprecated-functions': 'off', // Suppress warnings about deprecated Jest APIs
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    },
  ],
};
