import type { LocalazyConfig } from '@/localazy-config';
import vue from 'eslint-plugin-vue';
import globals from 'globals';
import typescript from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

export function useVue3(): LocalazyConfig {
  return [
    ...typescript.configs.strict,
    ...vue.configs['flat/recommended'],
    {
      files: ['**/*.vue'],

      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: globals.browser,
        parser: vueParser,
        parserOptions: {
          parser: typescript.parser,
          extraFileExtensions: ['.vue'],
        },
      },

      rules: {
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
