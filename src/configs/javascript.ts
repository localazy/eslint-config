import { default as js } from '@eslint/js';
import { type Linter } from 'eslint';
import { default as globals } from 'globals';

export function javascript(): Linter.Config[] {
  return [
    {
      ...js.configs.recommended,
      files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.node,
        },
      },
      name: '@localazy/eslint-config/javascript/@eslint/js/recommended',
    },
  ];
}
