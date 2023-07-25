/* eslint-env node */
module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules:{
    "no-console": "warn", // Example: Warn about using console.log()
    "no-unused-vars": "error",
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "error",
    "quotes": "off",
    "@typescript-eslint/quotes": "error",
    "curly": "error",

  }
};