import type { LocalazyConfig } from '@/localazy-config';
import prettierPlugin from 'eslint-config-prettier';

export function usePrettier(): LocalazyConfig {
  return [
    {
      ...prettierPlugin,
      name: '@localazy/eslint-config/prettier/eslint-plugin-prettier/recommended',
    },
  ];
}
