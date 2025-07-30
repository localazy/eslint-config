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
 *       }
 *     }
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
   * ## `features`
   *
   * Feature flags to enable or disable specific ESLint plugins and behaviors.
   */
  features?: {
    /**
     * ## `features.gitignore`
     *
     * Exclude files listed in `.gitignore` from being linted.
     *
     * @default true
     */
    gitignore?: boolean;

    /**
     * ## `features.dts`
     *
     * Enable linting for TypeScript declaration (`.d.ts`) files.
     *
     * @default true
     */
    dts?: boolean;

    /**
     * ## `features.prettier`
     *
     * Enable the Prettier plugin.
     *
     * @default true
     */
    prettier?: boolean;

    /**
     * ## `features.forceJsExtensions`
     *
     * Require `.js` file extensions in import statements and autofix them.
     *
     * @example
     * ```ts
     * import { Foo } from '@/foo'; // ❌
     * import { Foo } from '@/foo.js'; // ✅
     * ```
     *
     * @default false
     */
    forceJsExtensions?: boolean;

    /**
     * ## `features.forcePathAliases`
     *
     * Force the use of configured TypeScript path aliases instead of relative imports and autofix them.
     *
     * @example
     * ```ts
     * import { Foo } from './foo'; // ❌
     * import { Foo } from '@/foo'; // ✅
     * ```
     *
     * @default false
     */
    forcePathAliases?: boolean;

    /**
     * ## `features.vue`
     *
     * Enable the Vue plugin.
     *
     * @default false
     */
    vue?: boolean;
  };

  /**
   * ## `settings`
   *
   * Configuration settings for ESLint plugins.
   */
  settings?: {
    /**
     * ## `settings.ts`
     *
     * Settings for TypeScript plugin.
     */
    ts?: {
      /**
       * ## `settings.ts.project`
       *
       * Path to the TypeScript project configuration file for ESLint.
       *
       * The specified `tsconfig` file(s) must:
       * - Explicitly include all relevant `.ts` and `.js` files using the `include` field.
       * - Set `rootDir` to the root of the project to ensure all linted files are included in TypeScript project.
       *
       * @default tsconfig.json
       */
      project?: string | string[] | null;

      /**
       * ## `settings.ts.tsconfigRootDir`
       *
       * Project root directory
       *
       * @default process.cwd()
       */
      tsconfigRootDir?: string;
    };

    /**
     * ## `settings.gitignore`
     *
     * Settings for the gitignore plugin.
     */
    gitignore?: {
      /**
       * ## `settings.gitignore.paths`
       *
       * Path to `.gitignore` file or files.
       * Specifies which gitignore files should be used to exclude files from linting.
       *
       * @default ['.gitignore']
       */
      paths?: string[];
    };
  };
}
