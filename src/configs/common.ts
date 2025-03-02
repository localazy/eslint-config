import { type Linter } from 'eslint';

export function common(): Linter.Config[] {
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
