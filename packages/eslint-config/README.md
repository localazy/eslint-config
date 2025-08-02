<div align="center">

[<img src="https://localazy.com/directus9/assets/9fc36b9c-81b7-4dbf-bd82-b64cd984090f" width="285" height="50" alt="Localazy" >](https://localazy.com)

### 📦 `@localazy/eslint-config`

_A standardized ESLint configuration for Localazy projects_

</div>

## 🚀 Quick Start

Install the package using your preferred package manager:

```shell
# Using npm
npm install eslint @localazy/eslint-config --save-dev

# Using yarn
yarn add eslint @localazy/eslint-config --dev

# Using pnpm
pnpm add eslint @localazy/eslint-config --save-dev
```

> **Note:** This package requires ESLint 9.0.0 or higher.

## 🔧 Usage

### Basic Usage

Create or update your `eslint.config.js` file:

```js
import { localazy } from '@localazy/eslint-config';

export default localazy();
```

### Advanced Usage

The `localazy()` function accepts an options object that allows you to customize the ESLint configuration:

```text
import { localazy } from '@localazy/eslint-config';

export default localazy({
  // Add your custom ESLint configurations
  userConfigs: [
    {
      rules: {
        // Override or disable specific rules
        'no-console': 'warn',
        'annoying-rule': 'off'
      }
    }
  ],

  // Specify files to ignore
  ignores: [
    'build/**',
    'dist/**',
    'coverage/**'
  ],
});
```

## ⚙️ Configuration Options

### `userConfigs`

User-defined ESLint configurations that will be merged with the default Localazy ESLint configuration.

```text
{
  userConfigs: [
    {
      rules: {
        'no-console': 'warn',
        'prefer-const': 'error'
      }
    }
  ]
}
```

### `ignores`

List of glob patterns for files to be ignored by ESLint. These patterns will be added to the ignore list in addition to
files from `.gitignore`.

```text
{
  ignores: [
    'build/**',
    'dist/**',
    'coverage/**',
    'node_modules/**'
  ]
}
```

### `features`

Feature flags to enable or disable specific ESLint plugins and behaviors:

| Feature             | Description                                                                                      | Default |
| ------------------- | ------------------------------------------------------------------------------------------------ | ------- |
| `gitignore`         | Exclude files listed in `.gitignore` from being linted                                           | `true`  |
| `dts`               | Enable linting for TypeScript declaration (`.d.ts`) files                                        | `true`  |
| `prettier`          | Enable the Prettier plugin                                                                       | `true`  |
| `forceJsExtensions` | Require `.js` file extensions in import statements and autofix them                              | `false` |
| `forcePathAliases`  | Force the use of configured TypeScript path aliases instead of relative imports and autofix them | `false` |
| `vue2`              | Enable Vue 2 support                                                                             | `false` |
| `vue3`              | Enable Vue 3 support                                                                             | `false` |

Example:

```text
{
  features: {
    vue2: true,
    forceJsExtensions: true,
  }
}
```

### `settings`

Configuration settings for ESLint plugins:

#### TypeScript Settings

```text
{
  settings: {
    ts: {
      // Path to the TypeScript project configuration file
      project: 'tsconfig.json',

      // Project root directory
      tsconfigRootDir: import.meta.dirname,
    }
  }
}
```

#### GitIgnore Settings

```text
{
  settings: {
    gitignore: {
      // Path to .gitignore file or files
      paths: ['.gitignore'] // default
    }
  }
}
```

## 🔌 Included Configurations

This ESLint configuration includes:

- **JavaScript**: Base JavaScript rules and best practices
- **TypeScript**: TypeScript-specific rules and type checking
- **Vue.js** (optional): Support for both Vue 2 and Vue 3 with specific rules and best practices for each version
- **Prettier** (enabled by default): Integration with Prettier for consistent code formatting
- **Import/Export**: Rules for import and export statements
- **Path Aliases**: Support for TypeScript path aliases

## 🛠️ Development

To contribute to this project:

```shell
# Install dependencies
pnpm install

# Build the package
pnpm build

# Check everything
pnpm check
```

## 📚 Documentation

For more details on ESLint configuration, visit the [ESLint documentation](https://eslint.org/docs/).

## 📜 License

This project is licensed under the MIT License.

See [LICENSE](../../LICENSE) for details.
