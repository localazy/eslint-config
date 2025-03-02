import { type Linter } from 'eslint';
// @ts-expect-error Plugin is not typed
import prettierPlugin from 'eslint-config-prettier';

export function prettier(): Linter.Config[] {
  return [
    {
      ...prettierPlugin,
      name: '@localazy/eslint-config/prettier/eslint-plugin-prettier/recommended',
    },
  ];
}
