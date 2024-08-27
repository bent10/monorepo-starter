[&laquo; Back to recipes](https://github.com/bent10/monorepo-starter#recipes)

# Automated dependency updates

We use [Renovate](https://github.com/renovatebot/renovate) to automatically update dependencies in our project.

To set up Renovate:

1. Install the [Renovate GitHub App](https://github.com/apps/renovate) on your repository
2. Configure the settings in the [`.github/renovate.json`](../renovate.json) file

With Renovate, your project will automatically receive updates for the latest dependency versions, including bug fixes, security patches, and new features.
