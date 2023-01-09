module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
  },
  globals: {
    cy: true,
    Cypress: true,
  },
};
