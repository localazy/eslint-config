import { files } from '@/configs/shared/files';
import type { LocalazyConfig } from '@/localazy-config';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';

export function typescriptForcePathAliases(): LocalazyConfig {
  return [
    {
      files: files.ts,
      plugins: {
        'no-relative-import-paths': noRelativeImportPaths,
      },
      rules: {
        'no-relative-import-paths/no-relative-import-paths': [
          'error',
          {
            rootDir: 'src',
            prefix: '@',
          },
        ],
      },
      name: '@localazy/eslint-config/typescript-force-path-aliases/',
    },
  ];
}
