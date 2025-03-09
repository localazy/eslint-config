import { default as js } from '@eslint/js';
import { type Linter } from 'eslint';

export function javascript(): Linter.Config[] {
  return [
    {
      ...js.configs.recommended,
      files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs', '**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
      name: '@localazy/eslint-config/javascript/@eslint/js/recommended',
    },
  ];
}
