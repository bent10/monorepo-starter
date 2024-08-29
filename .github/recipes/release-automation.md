[&laquo; Back to recipes](https://github.com/bent10/monorepo-starter#recipes)

# Release automation

Automate your GitHub release workflow to save time. This guide covers how to set up automatic releases using GitHub Actions and semantic versioning.

- [Features](#features)
- [Workflow](#workflow)
  - [Environment variables](#environment-variables)
  - [Release configuration](#release-configuration)
- [Dry run](#dry-run)
- [Related resources](#related-resources)

## Features

This automation process includes:

- Analyzing commits using [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
- Generating and updating `changelog.md`
- Committing release assets
- Publishing GitHub releases and NPM packages

## Workflow

The workflow triggers on pushes to specific branches (`main`, `next`, `next-major`, `beta`, `alpha`, and `*.x`). To set it up:

### Environment variables

Add these environment variables to your GitHub repository settings:

- `GH_TOKEN`: Your [GitHub personal access token](https://github.com/settings/tokens) with 'repo' scope
- `NPM_TOKEN`: Your [NPM token](https://docs.npmjs.com/about-access-tokens)

### Release configuration

Add the following to your `package.json`:

```json
{
  "multi-release": {
    "extends": "doogu/release.config.js"
  }
}
```

Create a `release.yml` in `.github/workflows/`:

```yml
name: Release
on:
  push:
    branches:
      - main
      - next
      - next-major
      - beta
      - alpha
      - '*.x'

permissions:
  contents: read # for checkout

jobs:
  release:
    name: Releasing
    runs-on: ubuntu-latest
    permissions:
      contents: write # to be able to publish a GitHub release
      issues: write # to be able to comment on released issues
      pull-requests: write # to be able to comment on released pull requests
      id-token: write # to enable use of OIDC for npm provenance
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Install dependencies
        run: npm clean-install

      - name: Verify the integrity of provenance attestations and registry signatures for installed dependencies
        run: npm audit signatures

      - name: Test and building
        run: |
          npm run lint
          npm run build
          npm test

      - name: Install release dependencies
        run: npm i -D @qiwi/multi-semantic-release @semantic-release/changelog @semantic-release/git

      - name: Run Semantic Release
        env:
          GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: npx multi-semantic-release
```

## Dry run

Test the release process locally:

```bash
npm i -D @qiwi/multi-semantic-release @semantic-release/changelog @semantic-release/git
npx multi-semantic-release --dry-run
```

## Related resources

- [@qiwi/multi-semantic-release](https://github.com/qiwi/multi-semantic-release)
- [semantic-release](https://github.com/semantic-release/semantic-release)
- [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer)
- [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator)
- [@semantic-release/changelog](https://github.com/semantic-release/changelog)
- [@semantic-release/git](https://github.com/semantic-release/git)
- [@semantic-release/github](https://github.com/semantic-release/github)
- [@semantic-release/npm](https://github.com/semantic-release/npm)
