[&laquo; Back to recipes](https://github.com/bent10/monorepo-starter#recipes)

# Integrating eleventy

Sometimes we want to see or test our packages in the browser, or just to create documentation and such. It can be done quickly using [eleventy](https://github.com/11ty/eleventy).

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Optimizations](#optimizations)
- [Related](#related)

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
      input: "view",
      output: "public"
    }
  }
}
```

> You can tweak the configuration according to your needs. For more details, please read [Eleventy documentation](https://www.11ty.dev/docs/getting-started/).

Add the following script into `package.json` file:

```json
{
  "scripts": {
    "serve": "eleventy --serve",
    "build:html": "eleventy"
  }
}
```

## Usage

Create `view` folder in the monorepo project root folder and write a simple `view/index.html` or `view/index.md` file then run the following command:

```bash
npm run serve
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
    "postbuild:html": "html-validate \"public/{,!(node_modules|coverage)/**/}*.html\""
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
