<!-- Make sure you overwrite all the contents of this readme file with yours on your real project. Also, you can delete the `docs` and `examples` folders. -->

# <img src=".github/media/logo.svg" alt="Logo" width="520px">

<!-- [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bent10/monorepo-starter/Release?style=flat-square)](https://github.com/bent10/monorepo-starter/actions/workflows/release.yml) -->

[![GitHub](https://img.shields.io/github/license/bent10/monorepo-starter?style=flat-square)](license)

> Github NPM template for starting monorepo.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [<img src=".github/media/logo.svg" alt="Logo" width="520px">](#)
  - [Usage](#usage)
    - [Installation `packages/*`](#installation-packages)
  - [Recipes](#recipes)
  - [Roadmap](#roadmap)
  - [Contributing](#contributing)
  - [Thank you](#thank-you)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

## Recipes

- [Automated dependency updates](docs/recipes/setup-renovate.md)
- [Releases automation](docs/recipes/release-automation.md)
- [Replace Jest with AVA](docs/recipes/tests-with-ava.md)
- [Integrating Eleventy](docs/recipes/integrating-eleventy.md)

## Roadmap

- Create [boox](https://github.com/bent10/boox) – A zero config CLI tool for building and maintaining Monorepo that implement this `monorepo-starter` template

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

👉🏽&nbsp; Need help or advices? Please don't open an issue! Head to [Support form](#) instead.

❤️ &nbsp; this Project? Please consider to [suppor our maintenance and feature development](https://opencollective.com/your-opencolective-account/donate)

## Thank you

A project by [Stilearning](https://stilearning.com) &copy; 2021.
