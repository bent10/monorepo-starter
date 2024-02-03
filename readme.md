<!-- Make sure you overwrite all the contents of this readme file with yours on your real project! -->

# <img src=".github/media/logo.svg" alt="Logo" width="520px">

<!-- [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bent10/monorepo-starter/Release?style=flat-square)](https://github.com/bent10/monorepo-starter/actions/workflows/release.yml) -->

**Monorepo Starter** is a feature-rich template for creating monorepo projects using native NPM workspaces. It offers a set of powerful features to streamline your development workflow.

## Features

- **Fast and Lightweight**: Utilizes native NPM workspaces for optimal performance without unnecessary bloat.
- **Automated Releases**: Automatically triggers GitHub releases and NPM publishing for each package after a `git push`.
- **Changelog Updates**: Automatically updates changelogs for each package after a `git push`.
- **Dependency Management**: Effortlessly manage and update dependencies within the monorepo.
- **Multilingual Support**: Develop packages with mixed languages within a single repository.
- **Modern Code**: Embrace the latest syntax and coding practices for increased productivity.
- **Output Formats**: Provides UMD, CommonJS, and ESM output formats for JavaScript packages.
- **Live Playground**: Get a live playground environment ready to experiment with your code.

## Install

To start a new project using Monorepo Starter, you can either **click the "Use this template"** button on GitHub or manually clone the repository. After cloning, navigate to the project directory and install the required dependencies using the following command:

```bash
npm i
```

Alternatively, you can use the `npx degit` command to clone the template into a new project directory and install the dependencies:

```bash
npx degit "bent10/monorepo-starter" my-project
cd my-project
npm i
```

> This package is pure [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) and requires Node.js `^12.22 || ^14.17 || >=16.10.0`

## Available Commands

Here are the available commands to manage and build the project:

- `npm start -w pkgName`: Starts the development server and watches for changes for a specific package.
- `npm run dev`: Builds the project using Vite and watches for changes with auto-reloading.
- `npm run build`: Builds the project using Vite for production.
- `npm test`: Runs tests with Vitest and displays a user interface.
- `npm run coverage`: Runs tests with Vitest and generates a coverage report.
- `npm run types`: Generates TypeScript declaration files and resolves TypeScript paths.
- `npm run lint`: Lints the project using ESLint and TypeScript, checking for syntax and code quality issues.
- `npm run format`: Formats the project files using Prettier.

Please note that you can add the `-w` or `--workspace` flag to target one or more specific package(s) when using the above commands:

```bash
npm test -w pkgName
npm run build -w pkg1 -w pkg2 ...
```

## Packages

This monorepo starter comes with the following packages:

| Package                             | Description                          | Version (click for changelog)                           |
| :---------------------------------- | :----------------------------------- | :------------------------------------------------------ |
| [js-lib](packages/js-lib)           | Template for shared utilities        | [v0.0.0-development](packages/js-lib/changelog.md)      |
| [theme](packages/theme)             | Template for Bootstrap-powered theme | [v0.0.0-development](packages/theme/changelog.md)       |
| [vite-plugin](packages/vite-plugin) | Template for Vite plugin             | [v0.0.0-development](packages/vite-plugin/changelog.md) |

### Adding New Packages

Expanding the capabilities of your monorepo is straightforward. To create a new package, follow these steps:

1. Use the `npm create vite@latest` command to generate a new package based on your preferred Vite template. For instance:

```bash
# For npm 6.x
npm create vite@latest packages/new-package --template react

# For npm 7+ (requires extra double-dash)
npm create vite@latest packages/new-package -- --template react
```

2. Choose the desired [project template](https://github.com/vitejs/vite/tree/main/packages/create-vite) from the available options (e.g., vanilla, react, vue, etc.).
3. Specify the name and location for your new package when prompted; it should be within the `packages` folder.
4. Your new Vite package will be created in the specified location. It will be organized under the designated workspace folder in your monorepo.
5. Continue developing your Vite package as needed, taking advantage of the full Vite development environment and features.

By following these steps, you can easily extend the capabilities of your monorepo and create new packages tailored to your project's requirements.

## Recipes

- [Automated dependency updates](.github/recipes/setup-renovate.md) – Explains how to set up automated dependency updates using Renovate.
- [Release automation](.github/recipes/release-automation.md) - Guides you on automating the release process of your project.

## Related

- [module-starter](https://github.com/bent10/module-starter) – A bare-bones template designed for modern web projects
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
