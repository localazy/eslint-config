import { IGitignoreOptions } from '@/model/configs/i-gitignore-options';
import { type Linter } from 'eslint';
import gitignorePlugin from 'eslint-config-flat-gitignore';

export function gitignore({ ignoreDefinitions = [] }: IGitignoreOptions = {}): Linter.Config[] {
  const files = new Set(['.gitignore', '.eslintignore', ...ignoreDefinitions]);

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
