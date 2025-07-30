import type { LocalazyConfig } from '@/localazy-config';
import type { ILocalazyOptions } from '@/model/i-localazy-options';
import vue from 'eslint-plugin-vue';
import typescript from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

export function vue2({ ts }: { ts: NonNullable<NonNullable<ILocalazyOptions['settings']>['ts']> }): LocalazyConfig {
  return [
    ...typescript.configs.strictTypeChecked,
    ...vue.configs['flat/vue2-recommended'],
    {
      files: ['**/*.vue'],

      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: vueParser,
        parserOptions: {
          parser: typescript.parser,
          project: ts.project,
          extraFileExtensions: ['.vue'],
          tsconfigRootDir: ts.tsconfigRootDir,
        },
      },

      rules: {
        // ...vueTypescript.rules,
        // ...vuePrettier.rules,
        '@typescript-eslint/await-thenable': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/no-v-html': 'off',
        'vue/v-on-event-hyphenation': 'off',
        'vue/component-name-in-template-casing': [
          'error',
          'PascalCase',
          {
            registeredComponentsOnly: true,
          },
        ],
        'vue/no-empty-component-block': 'error',
        'vue/padding-line-between-blocks': 'error',
        'vue/v-for-delimiter-style': 'error',
        'vue/padding-lines-in-component-definition': [
          'error',
          {
            betweenOptions: 'always',
            withinOption: {
              props: 'never',
              computed: 'never',
              methods: 'always',
            },
            groupSingleLineProperties: true,
          },
        ],
        'vue/match-component-file-name': [
          'error',
          {
            extensions: ['vue'],
            shouldMatchCase: false,
          },
        ],
      },
      name: '@localazy/eslint-config/vue',
    },
  ];
}
