import { common } from '@/configs/common';
import { gitignore } from '@/configs/ignore';
import { javascript } from '@/configs/javascript';
import { prettier } from '@/configs/prettier';
import { typescript } from '@/configs/typescript';
import { ILocalazyOptions } from '@/model/i-localazy-options';
import { Linter } from 'eslint';

function localazy({ userConfigs, projectService, ignoreDefinitions }: ILocalazyOptions = {}): Linter.Config[] {
  const eslintConfig = [
    ...gitignore({ ignoreDefinitions }),
    ...common(),
    ...javascript(),
    ...typescript({ projectService }),
  ];

  if (userConfigs) {
    eslintConfig.push(...userConfigs);
  }

  eslintConfig.push(...prettier());

  return eslintConfig;
}

export default localazy;
