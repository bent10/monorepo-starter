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

## Packages

- [`@my-org/core`](packages/core) - A bare-bones template for shared utilities.
- [`@my-org/theme`](packages/theme) - A bare-bones template for Bootstrap-powered theme.

This monorepo starter fully supports all Vite templates, allowing you to harness the power of Vite for your frontend projects. To create a new Vite-based package, please follow these steps:

```bash
# npm 6.x
npm create vite@latest packages/foo --template vanilla

# npm 7+, extra double-dash is needed:
npm create vite@latest packages/foo -- --template vanilla
```

1. Choose the desired project template (e.g., vanilla, react, vue,
   etc.).
2. Specify the name and location for your new package when prompted, it
   should be in the `packages` folder.
3. Your new Vite package will be created in the specified location. You
   can find it under the designated workspace folder in your monorepo.
4. Continue developing your Vite package as needed, and take advantage
   of the full Vite development environment and features.

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

A project by [Stilearning](https://stilearning.com) &copy; 2021-2023.
