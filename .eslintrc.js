module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    sourceType: "module",
  },

  /**
   * ESLint rules
   *
   * All available rules: http://eslint.org/docs/rules/
   */
  rules: {
    "no-extra-semi": "error",
  },
};
