import { common } from '@/configs/common';
import { globals } from '@/configs/globals';
import { gitignore } from '@/configs/ignore';
import { javascript } from '@/configs/javascript';
import { prettier } from '@/configs/prettier';
import { typescript } from '@/configs/typescript';
import { typescriptDtsFiles } from '@/configs/typescript-dts-files';
import { typescriptForceJsExtension } from '@/configs/typescript-force-js-extension';
import { typescriptForcePathAliases } from '@/configs/typescript-force-path-aliases';
import { typescriptImportResolver } from '@/configs/typescript-import-resolver';
import type { LocalazyConfig } from '@/localazy-config';
import type { ILocalazyOptions } from '@/model/i-localazy-options';

/**
 * ESLint configuration for Localazy projects.
 *
 * @param {ILocalazyOptions} [options] - The options for configuring ESLint plugins.
 * @returns {LocalazyConfig} Assembled ESLint configuration based on the provided options.
 */
export function localazy({ userConfigs, settings, features }: ILocalazyOptions = {}): LocalazyConfig {
  // Define default values for features
  const availableFeatures = {
    gitignore: true,
    dts: true,
    forceJsExtensions: false,
    forcePathAliases: true,
    prettier: true,

    // Override default values with user-defined features
    ...features,
  };

  // TypeScript settings with defaults
  const tsWithDefaults: NonNullable<NonNullable<ILocalazyOptions['settings']>['ts']> = {
    project: settings?.ts?.project ?? 'tsconfig.json',
  };

  // Gitignore settings with defaults
  const gitignoreWithDefaults: NonNullable<NonNullable<ILocalazyOptions['settings']>['gitignore']> = {
    paths: settings?.gitignore?.paths ?? ['.gitignore'],
  };

  // Build the ESLint configuration array

  const eslintConfig = [];

  if (availableFeatures.gitignore) {
    eslintConfig.push(...gitignore({ gitignore: gitignoreWithDefaults }));
  }

  eslintConfig.push(...globals());
  eslintConfig.push(...common());
  eslintConfig.push(...javascript());
  eslintConfig.push(...typescript({ ts: tsWithDefaults }));

  if (availableFeatures.dts) {
    eslintConfig.push(...typescriptDtsFiles());
  }

  if (availableFeatures.forceJsExtensions) {
    eslintConfig.push(...typescriptForceJsExtension());
  }

  if (availableFeatures.forcePathAliases) {
    eslintConfig.push(...typescriptForcePathAliases());
  }

  eslintConfig.push(...typescriptImportResolver({ ts: tsWithDefaults }));

  if (userConfigs) {
    eslintConfig.push(...userConfigs);
  }

  if (availableFeatures.prettier) {
    eslintConfig.push(...prettier());
  }

  return eslintConfig;
}
