[&laquo; Back to roadmap](https://github.com/bent10/monorepo-starter#roadmap)

<br>
<h1 align="center">
  <a href="https://github.com/bent10/boox">
    <img src="https://github.com/bent10/boox/blob/main/.github/logo.svg" alt="Logo" width="320px">
  </a>
  <br>
  <br>
</h1>
<br>

> Zero-config CLI tool for building and maintaining Monorepo

Setting up a new Monorepo using the latest technologies and workflows painlessly. The core technologies we use are Babel, ESLint, Jest, Prettier, and Renovate. But we do give you the option to automatically integrate Typescript, Progresive JavaScript library (Svlete, React, Vue), SCSS, Stylelint, Rollup, Webpack, SSG (using Eleventy), HTML validate, AVA, etc.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Features](#features)
- [Install](#install)
- [Usage](#usage)
  - [Create new project](#create-new-project)
  - [Add new package to the project](#add-new-package-to-the-project)
  - [Change configurations anytime](#change-configurations-anytime)
  - [Some useful commands](#some-useful-commands)
- [Templates](#templates)
  - [`basic`](#basic)
  - [`cli`](#cli)
  - [`stylesheet`](#stylesheet)
  - [Comingsoon](#comingsoon)
- [Technologies](#technologies)
- [Related](#related)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features

- No fattening! No Yarn, no Lerna or others. **Just native NPM!**
- Useful cli commands for automation
- GitHub auto releases for each package _(after `git push`)_
- NPM auto publish for each package _(after `git push`)_
- Auto updates changelog for each package _(after `git push`)_
- Auto updates dependencies
- Develop packages with mixed libraries in one repository
- Write your code using the latest syntax
- UMD, CommonJS, and ESM output format for JavaScript packages
- Auto generate `*.rtl.css` file for SCSS packages
- Live playground

## Install

Be sure to have [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/) installed before proceeding.

```shell
npm i -g boox
```

## Usage

```bash
$ boox --help
```

### Create new project

```bash
$ boox init

Examples
  # Create new monorepo project
  $ mkdir my-project && cd my-project
  $ boox init

  # Do interactive cli like `npm init` with `Inquirer.js`
  1. Integrate auto releases? (Y/n)
  2. Integrate 11ty? (y/N)
```

### Add new package to the project

```bash
$ boox package

Examples
  # Create new package
  $ boox package

  # Do interactive cli like `npm init` with `Inquirer.js`
  1. Package name?
  2. Is this package private? (y/N)
  3. Choose a package template: (select one)
      • basic
      • cli
      • stylesheet

  # Each template allows to have a different question on the next steps.
  4. Do you want to use Typescript? (Y/n)
  5. Where will your module be used? (select one)
      • node
      • browsers
      • both
  5. Use a progressive JavaScript library? (select one)
      • none
      • svelte (comingsoon)
      • react (comingsoon)
      • vue (comingsoon)


  4. Do you want to use SCSS? (Y/n)
  5. Choose a CSS framework you want to use? (select one)
      • none
      • bootstrap
      • tailwind (comingsoon)
      • bulma (comingsoon)
      • foundation (comingsoon)
      • uikit (comingsoon)
      • miligram (comingsoon)
      • materialize (comingsoon)
```

### Change configurations anytime

```bash
$ boox config

Examples
  $ boox config

  # Do interactive cli like `npm init` with `Inquirer.js`
  What integration(s) do you want me to do? (select multiple)
    • auto releases
    • setup 11ty

  # Should warn the user before continuing this process! because it will "overwrite the previous settings".
```

> **Roadmap**: if possible, do it like `setup 11ty` also on other JavaScript frameworks (e.g. `setup nextjs`, `setup nestjs`, `setup nuxtjs`, etc).

### Some useful commands

You can use `--pkg pkg1,pkg-*` or `--ignore-pkg pkg-*` option to run the task for filtered packages **(glob support)**.

```bash
$ boox build       Run build task for all packages
$ boox prettier    Run prettier for distribution files of all packages
$ boox watch       Run watch task for all packages
$ boox lint        Run lint for all packages
$ boox test        Run test for all packages
$ boox clean       Run clean task for all packages
$ boox reset       Run clean task for all packages
```

## Templates

### `basic`

A plain JavaScript/TypeScript package setup you can use for any kind of module.

Typed: `(babel|typescript)`

Bundler: `(rollup|webpack)`

### `cli`

A JavaScript/TypeScript package setup you can use for NPM cli tool.

Typed: `(babel|typescript)`

Bundler: `(rollup|webpack)`

### `stylesheet`

A stylesheet package setup you can use for building site styles or theme.

### Comingsoon

`uiless`, `svelte`, `react`, `vue`

## Technologies

- Babel _(core)_
- ESLint _(core)_
- Jest _(core)_
- Prettier _(core)_
- Renovate _(core)_
- Typescript _(optional)_
- React _(optional)_
- SCSS _(optional)_
- Stylelint _(optional)_
- Rollup _(optional)_
- Webpack _(optional)_
- SSG (using Eleventy) _(optional)_
- HTML validate _(optional)_
- AVA _(optional)_

## Related

- [monorepo-starter](https://github.com/bent10/monorepo-starter)
