import { files } from '@/configs/shared/files';
import type { LocalazyConfig } from '@/localazy-config';
import globalsDefinition from 'globals';

export function globals(): LocalazyConfig {
  return [
    {
      // 1. Assume js/ts files are type module.
      // 2. While `definition.browser` is correct for most cases, where we develop
      //    code that will eventually run in a browser environment, it is not correct
      //    for pure Node.js services.
      //
      // Both cases should be eventually configurable.
      files: files.esm,
      languageOptions: {
        globals: {
          ...globalsDefinition.nodeBuiltin,
          ...globalsDefinition.es2022,
          ...globalsDefinition.browser,
        },
      },
      name: '@localazy/eslint-config/globals/es-modules',
    },
    {
      files: files.cjs,
      languageOptions: {
        globals: {
          ...globalsDefinition.node,
          ...globalsDefinition.es2022,
        },
      },
      name: '@localazy/eslint-config/globals/common-js',
    },
  ];
}
