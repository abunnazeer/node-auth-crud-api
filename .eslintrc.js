module.exports = {
  env: {
    browser: false,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "avoid",
      },
    ],
  },
};
