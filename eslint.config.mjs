import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config({
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
  ],
  ignores: ['src/graphql/resolvers-types.ts'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
  }
});
