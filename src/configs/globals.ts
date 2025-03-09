import { type Linter } from 'eslint';
import { default as definition } from 'globals';

export function globals(): Linter.Config[] {
  return [
    {
      // 1. Assume js/ts files are type module.
      // 2. While `definition.browser` is correct for most cases, where we develop
      //    code that will eventually run in a browser environment, it is not correct
      //    for pure Node.js services.
      //
      // Both cases should be eventually configurable.
      files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.ts', '**/*.tsx', '**/*.mts'],
      languageOptions: {
        globals: {
          ...definition.nodeBuiltin,
          ...definition.es2022,
          ...definition.browser,
        },
      },
      name: '@localazy/eslint-config/globals/es-modules',
    },
    {
      files: ['**/*.cjs', '**/*.cts'],
      languageOptions: {
        globals: {
          ...definition.node,
          ...definition.es2022,
        },
      },
      name: '@localazy/eslint-config/globals/common-js',
    },
  ];
}
