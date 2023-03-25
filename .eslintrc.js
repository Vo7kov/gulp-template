module.exports = {
  "env": {
      "browser": true,
      "commonjs": true,
      "es2021": true,
  },
  "overrides": [
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
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
