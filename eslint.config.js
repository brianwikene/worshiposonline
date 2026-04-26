import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import svelteParser from 'svelte-eslint-parser';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tseslint.parser
      }
    }
  },
  {
    // svelte/no-navigation-without-resolve fires on plain <a href> anchors — false positive
    rules: {
      'svelte/no-navigation-without-resolve': 'off'
    }
  },
  {
    ignores: [
      'build/',
      '.svelte-kit/',
      'dist/',
      '.vercel/'
    ]
  }
);
