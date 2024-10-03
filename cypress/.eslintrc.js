module.exports = {
  overrides: [
    {
      globals: {
        cy: true,
        Cypress: true,
      },
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@/typesscript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
};
