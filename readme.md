<!-- Make sure you overwrite all the contents of this readme file with yours on your real project! -->

# <img src=".github/media/logo.svg" alt="Logo" width="520px">

<!-- [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bent10/monorepo-starter/Release?style=flat-square)](https://github.com/bent10/monorepo-starter/actions/workflows/release.yml) -->

A starter template for a monorepo using NPM workspaces.

## Features

- **Quick start:** Efficient starting point for Web and Node.js projects
- **Lightweight**: Only native NPM workspaces, for speed and simplicity
- **Multilingual support**: Supports multiple programming languages in a single repository
- **Modern syntax:** Supports the latest language features
- **Flexible output:** Output in any format
- **Automatic updates:** Keeps your dependencies up to date. See [recipes](#recipes) for more info
- **Automated releases:** Automatically handles GitHub releases, NPM publishing, and changelog updates. Check out [recipes](#recipes) for details
- **Live Playground**: Includes a live environment for testing code

## Installation

To start a new project with this template, use one of the following methods:

### Clone from GitHub

Click the "Use this template" button above or clone the repository. Then, install dependencies:

```bash
npm i
```

### Use `npx degit`

Clone the template and install dependencies:

```bash
npx degit "bent10/monorepo-starter" my-project
cd my-project
npm i
```

## Commands

- `npm run dev -w pkgName`: Starts the dev server for a specific package
- `npm run build`: Builds the project and checks types
- `npm test`: Runs tests with Vitest
- `npm run coverage`: Generates test coverage reports
- `npm run types`: Generates TypeScript declaration files
- `npm run lint`: Checks types and lints the project
- `npm run format`: Formats code using Prettier

Use these commands to manage your development workflow. Add `-w` or `--workspace` to target specific packages:

```bash
npm run build -w pkg1 -w pkg2 ...
```

## Packages

| Package                             | Description             | Version                                                 |
| :---------------------------------- | :---------------------- | :------------------------------------------------------ |
| [js-lib](packages/js-lib)           | JavaScript library      | [v0.0.0-development](packages/js-lib/changelog.md)      |
| [theme](packages/theme)             | Bootstrap-powered theme | [v0.0.0-development](packages/theme/changelog.md)       |
| [vite-plugin](packages/vite-plugin) | Vite plugin             | [v0.0.0-development](packages/vite-plugin/changelog.md) |

### Adding new packages

To add a new package:

1. Run the following command with your desired template:

   ```bash
   # For npm 6.x
   npm create vite@latest packages/new-package --template react

   # For npm 7+
   npm create vite@latest packages/new-package -- --template react
   ```

   Check [available templates](https://github.com/vitejs/vite/tree/main/packages/create-vite)

2. Open `packages/new-package/package.json` and remove dependencies already included in [`doogu`](https://github.com/bent10/doogu/blob/main/package.json#L44) (e.g., `vite`, `vitest`, `typescript`, `prettier`, `eslint`).

Your new package is now ready for development with Vite features.

## Recipes

- [Automated dependency updates](.github/recipes/setup-renovate.md) – Set up automated updates with Renovate
- [Release automation](.github/recipes/release-automation.md) – Automate your project's release process

## Related

- [module-starter](https://github.com/bent10/module-starter) – A minimalist template for modern web development
- [doogu](https://github.com/bent10/doogu) – A wrapper around modern JavaScript tools

## Contributing

We 💛&nbsp; issues.

When committing, please conform to [the semantic-release commit standards](https://www.conventionalcommits.org/). Please install `commitizen` and the adapter globally, if you have not already.

```bash
npm i -g commitizen cz-conventional-changelog
```

Now you can use `git cz` or just `cz` instead of `git commit` when committing. You can also use `git-cz`, which is an alias for `cz`.

```bash
git add . && git cz
```

## License

![GitHub](https://img.shields.io/github/license/bent10/module-starter)

A project by [Stilearning](https://stilearning.com) &copy; 2021-2024.
