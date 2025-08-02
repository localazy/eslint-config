import type { LocalazyConfig } from '@/localazy-config';

export function useCommon(): LocalazyConfig {
  return [
    {
      rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
      },
      name: '@localazy/eslint-config/common',
    },
  ];
}
