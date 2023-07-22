[&laquo; Back to recipes](https://github.com/bent10/monorepo-starter#recipes)

# Release Automation

This guide will help you simplify the GitHub releases process and save time by automating the release workflow when pushing changes to the repository. Before we begin, make sure you are familiar with [GitHub releases](https://help.github.com/articles/about-releases) and have a basic understanding of Git and GitHub.

- [Features](#features)
- [Workflow](#workflow)
  - [Environment Variables](#environment-variables)
  - [Release Configuration](#release-configuration)
- [Dry Run](#dry-run)
- [Related Resources](#related-resources)

## Features

The release automation process provides the following features:

- Analyze commits with [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog).
- Generate changelog content using [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) and update the `changelog.md` file.
- Commit release assets to the repository.
- Publish [GitHub releases](https://help.github.com/articles/about-releases).
- Publish NPM packages.

## Workflow

The release automation workflow is triggered when changes are pushed to branches such as `main`, `next`, `next-major`, `beta`, `alpha`, and `*.x`. The workflow performs the necessary tasks to build and release the project. To utilize the workflow, follow these steps:

### Environment Variables

Before running the workflow, ensure that the following [environment variables](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) are added to your GitHub repository:

- `GH_TOKEN`: Copy and paste your [GitHub personal access token](https://github.com/settings/tokens) with the 'repo' scope into the **value** field.
- `NPM_TOKEN`: Copy and paste your [NPM token](https://docs.npmjs.com/about-access-tokens) into the **value** field.

### Release Configuration

After adding the required environment variables, include the following configuration in your `package.json` file:

```json
{
  "release": {
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
          "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }
      ],
      "@semantic-release/github",
      "@semantic-release/npm"
    ]
  }
}
```

Additionally, create a `release.yml` file in the `.github/workflows/` folder and copy the following code into it:

```yml
name: Release
on:
  repository_dispatch:
    # curl -v -H "Accept: application/vnd.github.everest-preview+json" -H "Authorization: token ${GH_TOKEN}"
    # https://api.github.com/repos/org/repo/dispatches -d '{ "event_type": "semantic-release" }'
    types: [multi-semantic-release]
  push:
    branches:
      - main
      - next
      - next-major
      - beta
      - alpha
      - '*.x'

jobs:
  release:
    name: Releasing
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18 # required by semantic-release
      # We need NPM >=7 to support --workflow
      - run: sudo npm i -g npm@latest
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npm test

      - name: Installing release dependencies
        run: |
          npm i -D multi-semantic-release @semantic-release/changelog @semantic-release/git
      - name: Semantic release
        env:
          GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: npx multi-semantic-release
```

## Dry Run

Test release locally using the following command:

```bash
# We need to install semantic release tools and dependencies first
npm i -D multi-semantic-release @semantic-release/changelog @semantic-release/git

# Then run the dry run
npx multi-semantic-release --dry-run
```

## Related Resources

For more detailed configuration and information, refer to the following resources:

- [semantic-release](https://github.com/semantic-release/semantic-release)
- [multi-semantic-release](https://github.com/dhoulb/multi-semantic-release)
- [@semantic-release/error](https://github.com/semantic-release/error)
- [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer)
- [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator)
- [@semantic-release/changelog](https://github.com/semantic-release/changelog)
- [@semantic-release/git](https://github.com/semantic-release/git)
- [@semantic-release/github](https://github.com/semantic-release/github)
- [@semantic-release/npm](https://github.com/semantic-release/npm)

We hope this documentation helps you streamline the release process using GitHub Actions and semantic versioning. If you have any further questions or need assistance, please don't hesitate to reach out.
