import type { LocalazyConfig } from '@/localazy-config';
import type { ILocalazyOptions } from '@/model/i-localazy-options';

export function useTypescriptImportResolver({
  ts,
}: {
  ts: NonNullable<NonNullable<ILocalazyOptions['settings']>['ts']>;
}): LocalazyConfig {
  return [
    {
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: ts.project,
            noWarnOnMultipleProjects: true,
          },
          node: true,
        },
      },
      name: '@localazy/eslint-config/typescript-import-resolver/',
    },
  ];
}
