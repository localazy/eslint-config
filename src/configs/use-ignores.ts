import type { LocalazyConfig } from '@/localazy-config';
import type { ILocalazyOptions } from '@/model/i-localazy-options';

export function useIgnores({ ignores }: { ignores: NonNullable<ILocalazyOptions['ignores']> }): LocalazyConfig {
  return [
    {
      ignores,
      name: '@localazy/eslint-config/ignores',
    },
  ];
}
