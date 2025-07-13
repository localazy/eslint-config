import { files } from '@/configs/shared/files';
import type { LocalazyConfig } from '@/localazy-config';
// @ts-expect-error package does not have types
import esmImport from 'eslint-plugin-esm-import';

export function typescriptForceJsExtension(): LocalazyConfig {
  return [
    {
      files: files.all,
      plugins: {
        'esm-import': esmImport,
      },
      rules: {
        'esm-import/extensions': 'error',
      },
      name: '@localazy/eslint-config/typescript-force-js-extension/',
    },
  ];
}
