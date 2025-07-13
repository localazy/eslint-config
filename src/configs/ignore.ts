import type { LocalazyConfig } from '@/localazy-config';
import type { ILocalazyOptions } from '@/model/i-localazy-options';
import gitignorePlugin from 'eslint-config-flat-gitignore';

export function gitignore({
  gitignore,
}: {
  gitignore: NonNullable<NonNullable<ILocalazyOptions['settings']>['gitignore']>;
}): LocalazyConfig {
  const files = new Set(gitignore.paths);

  return [
    {
      ...gitignorePlugin({
        files: [...files],
        strict: false,
      }),
      name: '@localazy/eslint-config/gitignore/eslint-config-flat-gitignore',
    },
  ];
}
