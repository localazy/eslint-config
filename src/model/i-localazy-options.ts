import { ITypescriptOptions } from '@/model/configs/i-typescript-options';
import { Linter } from 'eslint';

export interface ILocalazyOptions {
  userConfigs?: Linter.Config[];
  projectService?: ITypescriptOptions['projectService'];
}
