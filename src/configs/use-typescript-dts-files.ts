import { files } from '@/configs/shared/files';
import type { LocalazyConfig } from '@/localazy-config';

export function useTypescriptDtsFiles(): LocalazyConfig {
  return [
    {
      files: files.dts,
      rules: {
        'no-var': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
      },
      name: '@localazy/eslint-config/typescript-dts-files/',
    },
  ];
}
