[&laquo; Back to roadmap](https://github.com/bent10/monorepo-starter#roadmap)

# Replace Jest with AVA

This template has come with Jest integration as a testing tool. If you want to add AVA or replace Jest with AVA please follow these steps.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Replace Jest with AVA](#replace-jest-with-ava)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Removing Jest](#removing-jest)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

First step is to make sure you've got the required packages installed. Make sure you do it from the monorepo project root folder.

```bash
npm i -D ava ts-node
```

## Configuration

Merge this config into `your-pkg/package.json` file:

```json
{
  "scripts": {
    "test": "ava --verbose",
    "test:watch": "DEBUG=ava:watcher ava --watch --verbose",
    "coverage": "c8 -r lcov -r text ava"
  },
  "ava": {
    "ignoredByWatcher": ["coverage", "dist"],
    "nonSemVerExperiments": {
      "configurableModuleFormat": true
    },
    "nodeArguments": ["--loader=ts-node/esm"]
  }
}
```

Please go to [AVA docs](https://github.com/avajs/ava/blob/main/docs/06-configuration.md) for more details configuration.

## Removing Jest

💡 You don't need to do this step if you want to use both Jest and AVA.

But if you decide not to use Jest at all, you can remove this config in the `package.json` file in the root folder of your monorepo project:

```json
{
  "jest": {
    "testMatch": ["<rootDir>/packages/**/*(*.)@(test).[tj]s"],
    "clearMocks": true,
    "collectCoverage": true,
    "coverageDirectory": "coverage"
  }
}
```

Then uninstall all of Jest packages:

```bash
npm uninstall jest @types/jest babel-jest
```
