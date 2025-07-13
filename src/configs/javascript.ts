import { files } from '@/configs/shared/files';
import type { LocalazyConfig } from '@/localazy-config';
import js from '@eslint/js';

export function javascript(): LocalazyConfig {
  return [
    {
      ...js.configs.recommended,
      files: files.sources,
      name: '@localazy/eslint-config/javascript/@eslint/js/recommended',
    },
  ];
}
