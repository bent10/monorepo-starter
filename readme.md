<!-- Make sure you overwrite all the contents of this readme file with yours on your real project. Also, you can delete the `docs` and `examples` folders. -->

# <img src=".github/media/logo.svg" alt="Logo" width="520px">

<!-- [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bent10/monorepo-starter/Release?style=flat-square)](https://github.com/bent10/monorepo-starter/actions/workflows/release.yml) -->

[![GitHub](https://img.shields.io/github/license/bent10/monorepo-starter?style=flat-square)](license)

A monorepo starter template using native NPM workspace 🗂️

## Features

- Fast
- No fattening! **Just native NPM!**
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

### Available commands

```bash
npm start -w pkgName  # Run build and watch for changes for specific package
npm run lint          # Lint the project
npm run build         # Build the project
npm test              # Run tests
npm run coverage      # Run test coverage
```

You can add `-w` or `--workspace` flag to target for one or more package(s):

```bash
npm run build -w pkg1 -w pkg2 ...
```

## Recipes

- [Automated dependency updates](.github/recipes/setup-renovate.md)
- [Release automation](.github/recipes/release-automation.md)
- [Replace Jest with AVA](.github/recipes/tests-with-ava.md)
- [Integrating Eleventy](.github/recipes/integrating-eleventy.md)

## Related

- [module-starter](https://github.com/bent10/module-starter) – A bare-bones template for TypeScript module
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

## Thank you

A project by [Stilearning](https://stilearning.com) &copy; 2021-2022.
