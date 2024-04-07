module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "cypress"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  rules: {
    // Custom rules here
  },
  settings: {
    react: { version: "detect" },
  },
  overrides: [
    {
      files: ["cypress/**/*.ts"],
      extends: ["plugin:cypress/recommended"],
      env: { "cypress/globals": true },
      rules: {},
    },
    {
      files: ["*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
