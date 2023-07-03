/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  importOrderSeparation: true,
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: "all",
  useTabs: true,
};
