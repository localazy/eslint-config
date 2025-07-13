import type { Linter } from 'eslint';

/**
 * # Localazy ESLint Options
 *
 * - {@link ILocalazyOptions#userConfigs `userConfigs`}
 * - {@link ILocalazyOptions#features `features`}
 * - {@link ILocalazyOptions#settings `settings`}
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
   *
   * @see {@link ILocalazyOptions `ILocalazyOptions`}
   */
  userConfigs?: Linter.Config[];

  /**
   * ## `features`
   *
   * Feature flags to enable or disable specific ESLint plugins and behaviors.
   *
   * - {@link ILocalazyOptions#features.gitignore `gitignore`}
   * - {@link ILocalazyOptions#features.dts `dts`}
   * - {@link ILocalazyOptions#features.forceJsExtensions `forceJsExtensions`}
   * - {@link ILocalazyOptions#features.forcePathAliases `forcePathAliases`}
   * - {@link ILocalazyOptions#features.prettier `prettier`}
   *
   * @see {@link ILocalazyOptions `ILocalazyOptions`}
   */
  features?: {
    /**
     * ## `features.gitignore`
     *
     * Exclude files listed in `.gitignore` from being linted.
     *
     * @default true
     * @see {@link ILocalazyOptions#features `features`}
     */
    gitignore?: boolean;

    /**
     * ## `features.dts`
     *
     * Enable linting for TypeScript declaration (`.d.ts`) files.
     *
     * @default true
     * @see {@link ILocalazyOptions#features `features`}
     */
    dts?: boolean;

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
     * @see {@link ILocalazyOptions#features `features`}
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
     * @default true
     * @see {@link ILocalazyOptions#features `features`}
     */
    forcePathAliases?: boolean;

    /**
     * ## `features.prettier`
     *
     * Enable the Prettier plugin.
     *
     * @default true
     * @see {@link ILocalazyOptions#features `features`}
     */
    prettier?: boolean;
  };

  /**
   * ## `settings`
   *
   * Configuration settings for ESLint plugins.
   *
   * - {@link ILocalazyOptions#settings.ts `ts`}
   * - {@link ILocalazyOptions#settings.gitignore `gitignore`}
   *
   * @see {@link ILocalazyOptions `ILocalazyOptions`}
   */
  settings?: {
    /**
     * ## `settings.ts`
     *
     * Settings for TypeScript plugin.
     *
     * - {@link ILocalazyOptions#settings.ts.project `project`}
     *
     * @see {@link ILocalazyOptions#settings `settings`}
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
       * @see {@link ILocalazyOptions#settings.ts `settings.ts`}
       */
      project?: string | string[] | null;
    };

    /**
     * ## `settings.gitignore`
     *
     * Settings for the gitignore plugin.
     *
     * - {@link ILocalazyOptions#settings.gitignore.paths `paths`}
     *
     * @see {@link ILocalazyOptions#settings `settings`}
     */
    gitignore?: {
      /**
       * ## `settings.gitignore.paths`
       *
       * Path to `.gitignore` file or files.
       * Specifies which gitignore files should be used to exclude files from linting.
       *
       * @default ['.gitignore']
       * @see {@link ILocalazyOptions#settings.gitignore `settings.gitignore`}
       */
      paths?: string[];
    };
  };
}
