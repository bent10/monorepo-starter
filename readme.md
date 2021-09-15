<!-- Make sure you overwrite all the contents of this readme file with yours on your real project. Also, you can delete the `docs` and `examples` folders. -->

# <img src=".github/media/logo.svg" alt="Logo" width="520px">

<!-- [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bent10/monorepo-starter/Release?style=flat-square)](https://github.com/bent10/monorepo-starter/actions/workflows/release.yml) -->

[![GitHub](https://img.shields.io/github/license/bent10/monorepo-starter?style=flat-square)](license)

A monorepo starter template using native NPM workspace

- [Features](#features)
- [Usage](#usage)
  - [Installation `packages/*`](#installation-packages)
  - [Available commands](#available-commands)
- [Tech Stack](#tech-stack)
- [Recipes](#recipes)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Thank you](#thank-you)

## Features

- Fast
- No fattening! No Yarn, no Lerna, no NX, or others. **Just native NPM!**
- GitHub auto releases for each package _(after `git push`)_
- NPM auto publish for each package _(after `git push`)_
- Auto updates changelog for each package _(after `git push`)_
- Auto updates dependencies
- Develop packages with mixed languages in one repository
- Write your code using the latest syntax
- UMD, CommonJS, and ESM output format for JavaScript packages
- Auto generate `*.rtl.css` file for SCSS packages
- Live playground ready

## Usage

**Click the “Use this template” button.**

Alternatively, you can run:

```bash
git clone https://github.com/bent10/monorepo-starter.git
# Go to the project directory
cd monorepo-starter
# Install dependencies
npm i

# or
npx degit "bent10/monorepo-starter" my-project
# Go to the project directory
cd my-project
# Install dependencies
npm i
```

### Installation `packages/*`

We provide several [package templates](examples). Please install the [required dependencies](examples#requirements) based on the _template_ you are using.

### Available commands

```bash
$ npm run watch       Run watch task for all packages
$ npm run lint        Run lint for all packages
$ npm run build       Run build task for all packages
$ npm run test        Run test for all packages
$ npm run coverage    Run test coverage for all packages
$ npm run prettier    Run prettier for `dist` files (ignoring UMD and *.min.* files)
$ npm run clean       Run clean task for all packages
$ npm run reset       Run clean task for all packages
```

You can add `-w` or `--workspace` flag to target for one or more package(s):

```bash
npm run build -w pkg1 -w pkg2 ...
```

## Tech Stack

- NodeJS _(core)_
- ESLint _(core)_
- Jest _(core)_
- Prettier _(core)_
- Renovate _(core)_
- Babel _(optional)_
- Typescript _(optional)_
- SCSS _(optional)_
- Stylelint _(optional)_
- Rollup _(optional)_
- Webpack _(optional)_
- SSG – using Eleventy _(optional)_
- HTML validate _(optional)_
- AVA _(optional)_
- Semantic release _(optional)_

## Recipes

- [Automated dependency updates](docs/recipes/setup-renovate.md)
- [Releases automation](docs/recipes/release-automation.md)
- [Replace Jest with AVA](docs/recipes/tests-with-ava.md)
- [Integrating Eleventy](docs/recipes/integrating-eleventy.md)

## Roadmap

- Add React, Vue, Svelte example template
- Create [boox](https://github.com/bent10/boox) – A zero config CLI tool for building and maintaining Monorepo that implement this template

## Contributing

⚡️&nbsp; katchow! We 💛&nbsp; issues.

When committing, please conform to [the semantic-release commit standards](https://www.conventionalcommits.org/). Please install `commitizen` and the adapter globally, if you have not already.

```bash
npm i -g commitizen cz-conventional-changelog
```

Now you can use `git cz` or just `cz` instead of `git commit` when committing. You can also use `git-cz`, which is an alias for `cz`.

```bash
git add . && git cz
```

## Thank you

A project by [Stilearning](https://stilearning.com) &copy; 2021.
