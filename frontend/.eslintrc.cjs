module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    quotes: ['error', 'backtick', 'double'],
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    // Enforce consistent spacing before or after binary operators
    'array-bracket-spacing': ['error', 'never'],
  },
};
