[&laquo; Back to recipes](https://github.com/bent10/monorepo-starter#recipes)

# Release automation

As our repo gets bigger, handling the release process can be a pain point and time consuming. We're going to simplify the [GitHub releases](https://help.github.com/articles/about-releases) process using GitHub action, which will take care of the releases when we do `git push` on the monorepo.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Features](#features)
- [Example workflow](#example-workflow)
  - [Environment Variables](#environment-variables)
  - [Release configuration](#release-configuration)
  - [Setting up workflow file](#setting-up-workflow-file)
- [Running Tests](#running-tests)
- [Related](#related)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features

- Analyze commits with [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
- Generate changelog content with [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) then update `changelog.md` on each package
- Commit release assets to the monorepo repository
- Publish [GitHub releases](https://help.github.com/articles/about-releases) for each package
- Publish NPM packages for each package

## Example workflow

This workflow will kick in as soon as changes land on branches `main`, `next`, `next-major`, `beta`, `alpha`, and `*.x`. Then running the tasks above to build the monorepo and releases. Below are the steps you have to do:

### Environment Variables

To run this workflow, you will need to add the following [environment variables](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) to your GitHub repository:

`GH_TOKEN`

Copy and paste your [GitHub personal access token](https://github.com/settings/tokens) (with ‘repo’ scope) in the **value** field.

`NPM_TOKEN`

Copy and paste your [NPM token](https://docs.npmjs.com/about-access-tokens) in the **value** field.

### Release configuration

Create `.releaserc.json` in the root monorepo, then copy the following code:

```json
{
  "branches": [
    "+([0-9])?(.{+([0-9]),x}).x",
    "main",
    "next",
    "next-major",
    {
      "name": "beta",
      "prerelease": true
    },
    {
      "name": "alpha",
      "prerelease": true
    }
  ],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "changelog.md"
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": ["changelog.md"],
        "message": "chore(release): ${nextRelease.version} \n\n${nextRelease.notes}"
      }
    ],
    "@semantic-release/github",
    "@semantic-release/npm"
  ]
}
```

### Setting up workflow file

Create `release.yml` file in the `.github/workflows/` folder, then copy the code below:

```yaml
name: Release

on:
  push:
    branches:
      - main
      - next
      - next-major
      - beta
      - alpha
      - "*.x"

jobs:
  release:
    name: Releasing
    runs-on: ubuntu-latest

    steps:
      # https://github.com/actions/checkout
      - uses: actions/checkout@v2

      # https://github.com/actions/setup-node#v2
      - uses: actions/setup-node@v2

      - name: We need NPM 7.x to support --workflow
        run: sudo npm i -g npm@latest

      - run: npm install
      - run: npm run build

      - name: Installing release dependencies
        run: |
          npm i semantic-release
          npm i multi-semantic-release
          npm i @semantic-release/error
          npm i @semantic-release/commit-analyzer
          npm i @semantic-release/release-notes-generator
          npm i @semantic-release/changelog
          npm i @semantic-release/git
          npm i @semantic-release/github
          npm i @semantic-release/npm

      # https://github.com/dhoulb/multi-semantic-release
      - name: Semantic release
        # use `--ignore-packages` to ignore packages on bumping process
        # npx multi-semantic-release --ignore-packages=packages/a/**,packages/b/**
        run: npx multi-semantic-release
        env:
          GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Running Tests

To run tests release locally, use the following command:

```bash
npx multi-semantic-release --dry-run
```

<details><summary>We need to install some modules before running tests! 👇</summary><br>

```bash
npm i semantic-release multi-semantic-release @semantic-release/error @semantic-release/commit-analyzer @semantic-release/release-notes-generator @semantic-release/changelog @semantic-release/git @semantic-release/github @semantic-release/npm
```

</details>

## Related

For more detailed configuration, below are the best place to go:

- [semantic-release](https://github.com/semantic-release/semantic-release)
- [multi-semantic-release](https://github.com/dhoulb/multi-semantic-release)
- [@semantic-release/error](https://github.com/semantic-release/error)
- [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer)
- [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator)
- [@semantic-release/changelog](https://github.com/semantic-release/changelog)
- [@semantic-release/git](https://github.com/semantic-release/git)
- [@semantic-release/github](https://github.com/semantic-release/github)
- [@semantic-release/npm](https://github.com/semantic-release/npm)
