import { localazy } from '@localazy/eslint-config';

export default localazy({
  ignores: ['packages/eslint-config/tests/fixtures/'],
  settings: {
    gitignore: {
      paths: ['.gitignore'],
    },
    ts: {
      project: ['apps/**/tsconfig.json', 'packages/**/tsconfig.json', 'tsconfig.eslint.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
