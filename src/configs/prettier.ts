import { type Linter } from 'eslint';
import prettierPlugin from 'eslint-config-prettier';

export function prettier(): Linter.Config[] {
  return [
    {
      ...prettierPlugin,
      name: '@localazy/eslint-config/prettier/eslint-plugin-prettier/recommended',
    },
  ];
}
