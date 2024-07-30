module.exports = {
  overrides: [
    {
      globals: {
        cy: true,
        Cypress: true,
      },
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
    },
  ],
}
