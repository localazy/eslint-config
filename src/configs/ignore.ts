import { type Linter } from 'eslint';
import gitignorePlugin from 'eslint-config-flat-gitignore';

export function gitignore(): Linter.Config[] {
  return [
    {
      ...gitignorePlugin({
        files: ['.gitignore', '.eslintignore'],
        strict: false,
      }),
      name: '@localazy/eslint-config/gitignore/eslint-config-flat-gitignore',
    },
  ];
}
