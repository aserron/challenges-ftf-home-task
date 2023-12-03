// Base ESLint configuration
const baseConfig = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // If using TypeScript
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  parser: '@typescript-eslint/parser', // If using TypeScript
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint', // If using TypeScript
  ],
  rules: {
    // Define your shared ESLint rules here
    'no-unused-vars': 'warn',
    'no-console': 'off',
    // Add more rules as needed
  },
};


// TypeScript specific configuration
const typescriptConfig = {
  ...baseConfig,
  parser: '@typescript-eslint/parser',
  extends: [
    ...baseConfig.extends,
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    // TypeScript specific rules
  },
};

// Configuration for development environments
const developmentConfig = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    'no-console': 'off',
    'no-debugger': 'off',
    // Other development-specific rules
  },
};

// Exporting configurations

/**
 * 
 * @type {{development: {parserOptions: {ecmaVersion: number, sourceType: string}, extends: string[], parser: string, plugins: [string], rules: {"no-unused-vars": string, "no-debugger": string, "no-console": string}, env: {node: boolean, browser: boolean, es2021: boolean}}, typescript: {parserOptions: {ecmaVersion: number, sourceType: string}, extends: string[], parser: string, plugins: string[], rules: {}, env: {node: boolean, browser: boolean, es2021: boolean}}, base: {parserOptions: {ecmaVersion: number, sourceType: string}, extends: string[], parser: string, plugins: string[], rules: {"no-unused-vars": string, "no-console": string}, env: {node: boolean, browser: boolean, es2021: boolean}}}}
 */
module.exports = 
    {
  base: baseConfig,
  typescript: typescriptConfig,
  development: developmentConfig,
  // You can add more configurations for different scenarios
};
