import { localazy } from '@/localazy';
import { ESLint } from 'eslint';
import { resolve } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';

describe('ESLint Configuration', () => {
  let jsEslint: ESLint;
  let tsEslint: ESLint;
  let vueEslint: ESLint;

  beforeAll(() => {
    jsEslint = new ESLint({
      overrideConfig: localazy() as NonNullable<ConstructorParameters<typeof ESLint>['0']>['overrideConfig'],
      overrideConfigFile: true,
    });

    tsEslint = new ESLint({
      overrideConfig: localazy() as NonNullable<ConstructorParameters<typeof ESLint>['0']>['overrideConfig'],
      overrideConfigFile: true,
    });

    vueEslint = new ESLint({
      overrideConfig: localazy({
        features: {
          vue2: true,
        },
      }) as NonNullable<ConstructorParameters<typeof ESLint>['0']>['overrideConfig'],
      overrideConfigFile: true,
    });
  });

  describe('JavaScript Configuration', () => {
    it('should not report errors for valid JavaScript', async () => {
      const filePath = resolve(import.meta.dirname, '../fixtures/javascript/valid/clean.js');
      const results = await jsEslint.lintFiles([filePath]);

      expect(results[0]).toBeDefined();

      if (results[0]) {
        expect(results[0].errorCount).toBe(0);
        expect(results[0].warningCount).toBe(0);
      }
    });

    it('should report errors for invalid JavaScript', async () => {
      const filePath = resolve(import.meta.dirname, '../fixtures/javascript/invalid/issues.js');
      const results = await jsEslint.lintFiles([filePath]);

      expect(results[0]).toBeDefined();

      if (results[0]) {
        expect(results[0].errorCount + results[0].warningCount).toBeGreaterThan(0);

        const messages = results[0].messages;
        expect(messages.some((m) => m.ruleId === '@typescript-eslint/no-unused-vars')).toBe(true);
        expect(messages.some((m) => m.ruleId === 'no-console')).toBe(true);
      }
    });
  });

  describe('TypeScript Configuration', () => {
    it('should not report errors for valid TypeScript', async () => {
      const filePath = resolve(import.meta.dirname, '../fixtures/typescript/valid/clean.ts');
      const results = await tsEslint.lintFiles([filePath]);

      expect(results[0]).toBeDefined();

      if (results[0]) {
        expect(results[0].errorCount).toBe(0);
        expect(results[0].warningCount).toBe(0);
      }
    });

    it('should report errors for invalid TypeScript', async () => {
      const filePath = resolve(import.meta.dirname, '../fixtures/typescript/invalid/issues.ts');
      const results = await tsEslint.lintFiles([filePath]);

      expect(results[0]).toBeDefined();

      if (results[0]) {
        expect(results[0].errorCount + results[0].warningCount).toBeGreaterThan(0);

        // Verify specific TypeScript errors are caught
        const messages = results[0].messages;
        expect(messages.some((m) => m.ruleId === 'import/no-unresolved')).toBe(true);
        expect(messages.some((m) => m.ruleId === '@typescript-eslint/no-non-null-assertion')).toBe(true);
        expect(messages.some((m) => m.ruleId === 'no-console')).toBe(true);
        expect(messages.some((m) => m.ruleId === '@typescript-eslint/no-deprecated')).toBe(true);
        expect(messages.some((m) => m.ruleId === '@typescript-eslint/no-unused-vars')).toBe(true);
      }
    });
  });

  describe('Vue Configuration', () => {
    it('should not report errors for valid Vue component', async () => {
      const filePath = resolve(import.meta.dirname, '../fixtures/vue/valid/TestButton.vue');
      const results = await vueEslint.lintFiles([filePath]);

      expect(results[0]).toBeDefined();

      if (results[0]) {
        expect(results[0].errorCount).toBe(0);
        expect(results[0].warningCount).toBe(0);
      }
    });

    it('should report errors for invalid Vue component', async () => {
      const filePath = resolve(import.meta.dirname, '../fixtures/vue/invalid/bad-component.vue');
      const results = await vueEslint.lintFiles([filePath]);

      expect(results[0]).toBeDefined();

      if (results[0]) {
        expect(results[0].errorCount + results[0].warningCount).toBeGreaterThan(0);

        // Verify specific Vue errors are caught
        const messages = results[0].messages;
        expect(messages.some((m) => m.ruleId === 'vue/require-v-for-key')).toBe(true);
        expect(messages.some((m) => m.ruleId === 'vue/no-multiple-template-root')).toBe(true);
        expect(messages.some((m) => m.ruleId === 'vue/component-definition-name-casing')).toBe(true);
      }
    });
  });
});
