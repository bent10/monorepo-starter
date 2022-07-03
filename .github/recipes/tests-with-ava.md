[&laquo; Back to roadmap](https://github.com/bent10/monorepo-starter#roadmap)

# Replace Jest with AVA

This template has come with Jest integration as a test runner. If you want to replace Jest with [AVA](https://github.com/avajs/ava) please follow these steps.

- [Installation](#installation)
- [Configuration](#configuration)
- [Removing Jest](#removing-jest)

## Installation

First step is to make sure you've got the required packages installed. Go to your project root and run the following command:

```bash
npm i -D ava ts-node c8
```

## Configuration

Merge this config into `package.json` file:

```json
{
  "scripts": {
    "test": "ava --verbose",
    "coverage": "c8 -r lcov -r text npm test"
  },
  "ava": {
    "files": ["test/**/*.test.ts"],
    "extensions": {
      "ts": "module"
    },
    "nodeArguments": ["--loader=ts-node/esm", "--no-warnings"],
    "ignoredByWatcher": ["{coverage,dist}/**"]
  }
}
```

Please go to [AVA docs](https://github.com/avajs/ava/blob/main/docs/06-configuration.md) for more details configuration.

## Removing Jest

Now you should remove `jest` field in the `package.json` file:

```json
{
  "jest": {...}
}
```
