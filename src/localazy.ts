import { useCommon } from '@/configs/use-common';
import { useGitIgnore } from '@/configs/use-git-ignore';
import { useGlobals } from '@/configs/use-globals';
import { useIgnores } from '@/configs/use-ignores';
import { useJavascript } from '@/configs/use-javascript';
import { usePrettier } from '@/configs/use-prettier';
import { useTypescript } from '@/configs/use-typescript';
import { useTypescriptDtsFiles } from '@/configs/use-typescript-dts-files';
import { useTypescriptForceJsExtension } from '@/configs/use-typescript-force-js-extension';
import { useTypescriptForcePathAliases } from '@/configs/use-typescript-force-path-aliases';
import { useTypescriptImportResolver } from '@/configs/use-typescript-import-resolver';
import { useVue2 } from '@/configs/use-vue2';
import { useVue3 } from '@/configs/use-vue3';
import type { LocalazyConfig } from '@/localazy-config';
import type { ILocalazyOptions } from '@/model/i-localazy-options';

/**
 * ESLint configuration for Localazy projects.
 *
 * @param {ILocalazyOptions} [options] - The options for configuring ESLint plugins.
 * @returns {LocalazyConfig} Assembled ESLint configuration based on the provided options.
 */
export function localazy({ userConfigs, settings, features, ignores }: ILocalazyOptions = {}): LocalazyConfig {
  // Define default values for features
  const availableFeatures: ILocalazyOptions['features'] = {
    gitignore: true,
    dts: true,
    prettier: true,
    forceJsExtensions: false,
    forcePathAliases: false,
    vue2: false,
    vue3: false,

    // Override default values with user-defined features
    ...features,
  };

  // TypeScript settings with defaults
  const tsWithDefaults: NonNullable<NonNullable<ILocalazyOptions['settings']>['ts']> = {
    project: settings?.ts?.project ?? 'tsconfig.json',
    tsconfigRootDir: settings?.ts?.tsconfigRootDir ?? process.cwd(),
  };

  // Gitignore settings with defaults
  const gitignoreWithDefaults: NonNullable<NonNullable<ILocalazyOptions['settings']>['gitignore']> = {
    paths: settings?.gitignore?.paths ?? ['.gitignore'],
  };

  const ignoresWithDefaults = ignores ?? [];

  // Build the ESLint configuration array

  const eslintConfig = [];

  eslintConfig.push(...useIgnores({ ignores: ignoresWithDefaults }));

  if (availableFeatures.gitignore) {
    eslintConfig.push(...useGitIgnore({ gitignore: gitignoreWithDefaults }));
  }

  eslintConfig.push(...useGlobals());
  eslintConfig.push(...useCommon());
  eslintConfig.push(...useJavascript());
  eslintConfig.push(...useTypescript({ ts: tsWithDefaults }));

  if (availableFeatures.dts) {
    eslintConfig.push(...useTypescriptDtsFiles());
  }

  if (availableFeatures.forceJsExtensions) {
    eslintConfig.push(...useTypescriptForceJsExtension());
  }

  if (availableFeatures.forcePathAliases) {
    eslintConfig.push(...useTypescriptForcePathAliases());
  }

  eslintConfig.push(...useTypescriptImportResolver({ ts: tsWithDefaults }));

  if (availableFeatures.vue2) {
    eslintConfig.push(...useVue2());
  }

  if (availableFeatures.vue3) {
    eslintConfig.push(...useVue3());
  }

  if (userConfigs) {
    eslintConfig.push(...userConfigs);
  }

  if (availableFeatures.prettier) {
    eslintConfig.push(...usePrettier());
  }

  return eslintConfig;
}
