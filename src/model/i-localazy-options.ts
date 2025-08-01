import type { Linter } from 'eslint';

/**
 * # Localazy ESLint Options
 *
 * @example
 * ```ts
 * import { localazy } from '@localazy/eslint-config';
 *
 * export default localazy({
 *   userConfigs: [
 *     {
 *       rules: {
 *         'annoying-rule': 'off'
 *       },
 *     }
 *   ],
 *   ignores: [
 *     'tests/fixtures/**',
 *   ],
 *   features: {
 *     forceJsExtensions: true
 *   },
 *   settings: {
 *     ts: {
 *       project: 'tsconfig.project.json'
 *     }
 *   }
 * });
 * ```
 */
export interface ILocalazyOptions {
  /**
   * ## `userConfigs`
   *
   * User-defined ESLint configurations.
   * Allows you to extend or override the ESLint rules and settings.
   * These configurations will be merged with the default Localazy ESLint configuration.
   *
   * @example
   * ```ts
   * import { localazy } from '@localazy/eslint-config';
   *
   * export default localazy({
   *   userConfigs: [
   *     {
   *       rules: {
   *         'annoying-rule': 'off',
   *       }
   *     }
   *   ]
   * });
   * ```
   */
  userConfigs?: Linter.Config[];

  /**
   * ## `ignores`
   *
   * List of glob patterns for files to be ignored by ESLint.
   * These patterns will be added to the ignore list in addition to files from .gitignore.
   *
   * @example
   * ```ts
   * import { localazy } from '@localazy/eslint-config';
   *
   * export default localazy({
   *   ignores: [
   *     'build/**',
   *     'dist/**',
   *     'coverage/**',
   *     'node_modules/**'
   *   ]
   * });
   * ```
   */
  ignores?: string[];

  /**
   * ## `features`
   *
   * Feature flags to enable or disable specific ESLint plugins and behaviors.
   *
   * - `gitignore`: Exclude files listed in `.gitignore` from being linted. Default: `true`
   * - `dts`: Enable linting for TypeScript declaration (`.d.ts`) files. Default: `true`
   * - `prettier`: Enable the Prettier plugin. Default: `true`
   * - `forceJsExtensions`: Require `.js` file extensions in import statements and autofix them. Default: `false`
   * - `forcePathAliases`: Force the use of configured TypeScript path aliases instead of relative imports and autofix them. Default: `false`
   * - `vue2`: Enable the Vue 2 plugin. Default: `false`
   * - `vue3`: Enable the Vue 3 plugin. Default: `false`
   */
  features?: {
    /**
     * @default true
     */
    gitignore?: boolean;

    /**
     * @default true
     */
    dts?: boolean;

    /**
     * @default true
     */
    prettier?: boolean;

    /**
     * @default false
     */
    forceJsExtensions?: boolean;

    /**
     * @default false
     */
    forcePathAliases?: boolean;

    /**
     * @default false
     */
    vue2?: boolean;

    /**
     * @default false
     */
    vue3?: boolean;
  };

  /**
   * ## `settings`
   *
   * Configuration settings for ESLint plugins.
   *
   * - `ts.project`: Path to the TypeScript project configuration file for ESLint. The specified `tsconfig` file(s) must explicitly include all relevant `.ts` and `.js` files using the `include` field and set `rootDir` to the root of the project. Default: `tsconfig.json`
   * - `ts.tsconfigRootDir`: Project root directory. Default: `import.meta.dirname`
   * - `gitignore.paths`: Path to `.gitignore` file or files. Specifies which gitignore files should be used to exclude files from linting. Default: `['.gitignore']`
   */
  settings?: {
    /**
     * Settings for TypeScript plugin.
     */
    ts?: {
      /**
       * @default tsconfig.json
       */
      project?: string | string[] | null;

      /**
       * @default import.meta.dirname
       */
      tsconfigRootDir?: string;
    };

    /**
     * Settings for the gitignore plugin.
     */
    gitignore?: {
      /**
       * @default ['.gitignore']
       */
      paths?: string[];
    };
  };
}
