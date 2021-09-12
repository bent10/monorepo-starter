[&laquo; Back to recipes](https://github.com/bent10/monorepo-starter#recipes)

# Integrating eleventy

Sometimes we want to see or test our packages in the browser, or just to create documentation and such. It can be done quickly using eleventy. Here is how it can be done on this monorepo.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Optimizations](#optimizations)
- [Related](#related)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Install eleventy:

```bash
npm i -D @11ty/eleventy
```

And maybe some of their plugins: 😉

```bash
npm i -D eleventy-plugin-toc eleventy-plugin-shiki-twoslash markdown-it markdown-it-anchor
```

## Configuration

Create `.eleventy.js` file in the monorepo project root folder then copy code below:

```js
module.exports = eleventyConfig => {
  return {
    dir: {
      output: "public",
      input: "view"
    }
  }
}
```

> You can tweak the configuration according to your needs. For more details, please read [Eleventy documentation](https://www.11ty.dev/docs/getting-started/).

Add the following script into `package.json` file:

```json
{
  "scripts": {
    "start": "npm-run-all --parallel html:watch serve",
    "serve": "browser-sync public packages --watch --no-notify",
    "html:watch": "nodemon --watch view --ext .html,.md,.liquid,.js,.json --exec \"npm run html:build\" --on-change-only",
    "html:build": "eleventy"
  }
}
```

## Usage

Create `src` folder in the monorepo project root folder and write a simple `src/index.html` or `src/index.md` file then run the following command:

```bash
npm start
```

## Optimizations

We can do HTML validation for the output files, please follow the steps below:

```bash
npm i -D html-validate
```

Create `.htmlvalidate.json` file in the monorepo project root folder and copy the following code:

```json
{
  "extends": ["html-validate:recommended"],
  "rules": {
    "void-style": ["error", { "style": "selfclosing" }]
  }
}
```

Add the following script into `package.json` file:

```json
{
  "scripts": {
    "posthtml:build": "html-validate \"public/{,!(node_modules|coverage)/**/}*.html\""
  }
}
```

## Related

- [@11ty/eleventy](https://github.com/11ty/eleventy)
- [eleventy-plugin-toc](https://github.com/jdsteinbach/eleventy-plugin-toc)
- [eleventy-plugin-shiki-twoslash](https://github.com/shikijs/twoslash/tree/main/packages/eleventy-plugin-shiki-twoslash)
- [html-validate](https://html-validate.org/usage/index.html)
- [markdown-it](https://github.com/markdown-it/markdown-it)
- [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor)
