import { ITypescriptOptions } from '@/model/configs/i-typescript-options';
import { type Linter } from 'eslint';
import process from 'node:process';
import { default as typescriptPlugin } from 'typescript-eslint';

export function typescript({ projectService }: ITypescriptOptions = {}): Linter.Config[] {
  let projectServiceConf: ITypescriptOptions['projectService'] | boolean = true;

  if (typeof projectService === 'object') {
    const { defaultProject, allowDefaultProject } = projectService;
    projectServiceConf = {
      defaultProject: defaultProject ?? 'tsconfig.json',
      allowDefaultProject: allowDefaultProject ?? [],
    };
  }

  return [
    ...typescriptPlugin.config(
      {
        files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
        extends: [typescriptPlugin.configs.strictTypeChecked, typescriptPlugin.configs.stylisticTypeChecked],
        languageOptions: {
          parserOptions: {
            projectService: projectServiceConf,
            tsconfigRootDir: process.cwd(),
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
        },
        name: '@localazy/eslint-config/typescript/',
      },
      {
        files: ['**/*.d.ts'],
        rules: {
          'no-var': 'off',
          '@typescript-eslint/triple-slash-reference': 'off',
        },
        name: '@localazy/eslint-config/typescript-declaration/',
      },
    ),
  ] as Linter.Config[];
}
