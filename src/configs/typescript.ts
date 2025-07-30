import { files } from '@/configs/shared/files';
import type { LocalazyConfig } from '@/localazy-config';
import type { ILocalazyOptions } from '@/model/i-localazy-options';
import { flatConfigs } from 'eslint-plugin-import';
import { default as typescriptPlugin } from 'typescript-eslint';

export function typescript({
  ts,
}: {
  ts: NonNullable<NonNullable<ILocalazyOptions['settings']>['ts']>;
}): LocalazyConfig {
  return [
    ...typescriptPlugin.config({
      files: files.all,
      extends: [
        flatConfigs.recommended,
        typescriptPlugin.configs.strictTypeChecked,
        typescriptPlugin.configs.stylisticTypeChecked,
      ],
      languageOptions: {
        parserOptions: {
          project: ts.project,
          ecmaVersion: 'latest',
          sourceType: 'module',
          warnOnUnsupportedTypeScriptVersion: false,
        },
      },
      rules: {
        // Keep this disabled
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',

        // Warn
        '@typescript-eslint/no-unused-vars': 'warn',

        // TODO: Remove these overrides
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',

        // Force type when importing types
        '@typescript-eslint/consistent-type-imports': 'error',

        /**
         * Force top level type imports.
         * Prevent tsc from keeping empty import statements.
         *
         * This example:
         * ```ts
         * import { type Foo } from 'foo';
         * ```
         *
         * `tsc` transforms into:
         * ```ts
         * import { } from 'foo';
         * ```
         */
        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

        // Force 'node:' protocol usage
        'import/enforce-node-protocol-usage': ['error', 'always'],
        '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignoreIfStatements: true }],

        'import/no-cycle': 'error',
      },
      name: '@localazy/eslint-config/typescript/',
    }),

    //  Disable rules just for CommonJS files
    {
      files: files.cjs,
      languageOptions: {
        sourceType: 'script',
      },
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-deprecated': 'off',
      },
      name: '@localazy/eslint-config/typescript/cjs/',
    },
  ];
}
