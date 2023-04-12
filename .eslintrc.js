module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
  },
  "overrides": [
  ],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 8,
    "requireConfigFile": false,
    "sourceType": "module",
    "allowImportExportEverywhere": true,
  },
  "rules": {
    "max-len": ["error", {
    "code": 80,
    "comments": 80,
    }],
    "space-before-function-paren": ["error", "never"],
    "no-var": "error",
    "prefer-const": "error",
    "comma-dangle": ["error", "always-multiline"],
    "curly": ["error", "all"],
  },
};
