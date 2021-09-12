# Example templates

This folder contains all of our example templates. You just need to copy the templates you need to the `packages` folder and make a little bit tweaking. Checking our [Recipes](https://github.com/bent10/monorepo-starter#recipes) might help a bit.

> Feel free to remove this `examples` folder on your real project or simply add it to the `.gitignore` file.

## Requirements

First step is to make sure you've got the required dependencies installed. After copying any template, make sure you do `npm i` from the monorepo project root folder.

<details><summary>📁 &nbsp; basic</summary><br>

> A bare-bone template of how to create a “typing-monkey” library.

#### Required dependencies

```json
{
  "devDependencies": {
    "dts-gen": "^0.6.0",
    "mkdirp": "^1.0.4",
    "terser": "^5.7.2"
  }
}
```

</details>

<details><summary>📁 &nbsp; typescript</summary><br>

> A bare-bone template of how to create a library using TypeScript.

#### Required dependencies

```json
{
  "devDependencies": {
    "@babel/preset-env": "^7.15.4",
    "@babel/preset-typescript": "^7.15.0",
    "@tsconfig/recommended": "^1.0.1",
    "@types/jest": "^27.0.1",
    "@types/node": "^16.7.13",
    "@typescript-eslint/eslint-plugin": "^4.31.0",
    "@typescript-eslint/parser": "^4.31.0",
    "terser": "^5.7.2",
    "typescript": "^4.4.3"
  }
}
```

</details>

<details><summary>📁 &nbsp; babel</summary><br>

> A bare-bone template of how to create a library using Babel.

#### Required dependencies

```json
{
  "devDependencies": {
    "@babel/cli": "^7.15.4",
    "@babel/core": "^7.15.5",
    "@babel/eslint-parser": "^7.15.4",
    "@babel/preset-env": "^7.15.4",
    "babel-jest": "^27.1.0",
    "dts-gen": "^0.6.0",
    "mkdirp": "^1.0.4",
    "terser": "^5.7.2"
  }
}
```

</details>

<details><summary>📁 &nbsp; babel-ts</summary><br>

> A bare-bone template of how to create a library using TypeScript with Babel compiler.

#### Required dependencies

```json
{
  "devDependencies": {
    "@babel/cli": "^7.15.4",
    "@babel/core": "^7.15.5",
    "@babel/eslint-parser": "^7.15.4",
    "@babel/preset-env": "^7.15.4",
    "@babel/preset-typescript": "^7.15.0",
    "@tsconfig/recommended": "^1.0.1",
    "@types/jest": "^27.0.1",
    "@types/node": "^16.9.0",
    "@typescript-eslint/eslint-plugin": "^4.31.0",
    "@typescript-eslint/parser": "^4.31.0",
    "terser": "^5.7.2",
    "typescript": "^4.4.3"
  }
}
```

</details>

<details><summary>📁 &nbsp; react _(comingsoon)_</summary><br>

> A bare-bone template of how to create React components.

#### Required dependencies

```json
{
  "devDependencies": {}
}
```

</details>

<details><summary>📁 &nbsp; rollup</summary><br>

> A bare-bone template of how to bundling your library using Rollup. Support latest ES syntax and TypeScript.

#### Required dependencies

```json
{
  "devDependencies": {
    "@babel/eslint-parser": "^7.15.4",
    "@babel/preset-env": "^7.15.4",
    "@babel/preset-typescript": "^7.15.0",
    "@rollup/plugin-babel": "^5.3.0",
    "@rollup/plugin-commonjs": "^20.0.0",
    "@rollup/plugin-node-resolve": "^13.0.4",
    "@rollup/plugin-typescript": "^8.2.5",
    "@tsconfig/recommended": "^1.0.1",
    "@types/jest": "^27.0.1",
    "@types/node": "^16.9.0",
    "@typescript-eslint/eslint-plugin": "^4.31.0",
    "@typescript-eslint/parser": "^4.31.0",
    "rollup": "^2.56.3",
    "rollup-plugin-terser": "^7.0.2",
    "typescript": "^4.4.3"
  }
}
```

</details>

<details><summary>📁 &nbsp; webpack</summary><br>

> A bare-bone template of how to bundling your app using Webpack. Support latest ES syntax and TypeScript.

#### Required dependencies

```json
{
  "devDependencies": {
    "@babel/eslint-parser": "^7.15.4",
    "@babel/preset-env": "^7.15.6",
    "@babel/preset-typescript": "^7.15.0",
    "@tsconfig/recommended": "^1.0.1",
    "@types/jest": "^27.0.1",
    "@types/node": "^16.9.1",
    "@typescript-eslint/eslint-plugin": "^4.31.0",
    "@typescript-eslint/parser": "^4.31.0",
    "fork-ts-checker-webpack-plugin": "^6.3.3",
    "terser-webpack-plugin": "^5.2.4",
    "ts-loader": "^9.2.5",
    "typescript": "^4.4.3",
    "webpack": "^5.52.0",
    "webpack-cli": "^4.8.0"
  }
}
```

</details>

<details><summary>📁 &nbsp; bootstrap5</summary><br>

> A bare-bone template of how to create Bootstrap 5 theme.

#### Required dependencies

```json
{
  "devDependencies": {
    "autoprefixer": "^10.3.4",
    "cssnano": "^5.0.8",
    "node-sass": "^6.0.1",
    "postcss": "^8.3.6",
    "postcss-cli": "^8.3.1",
    "postcss-rtlcss": "^3.3.5",
    "stylelint": "^13.13.1",
    "stylelint-config-twbs-bootstrap": "^2.2.3"
  },
  "dependencies": {
    "bootstrap": "^5.1.1"
  }
}
```

</details>

<details><summary>📁 &nbsp; bootstrap4 _(alpha)_</summary><br>

> A bare-bone template of how to create Bootstrap 4 theme.

#### Required dependencies

```json
{
  "devDependencies": {
    "autoprefixer": "^10.3.4",
    "cssnano": "^5.0.8",
    "node-sass": "^6.0.1",
    "postcss": "^8.3.6",
    "postcss-cli": "^8.3.1",
    "postcss-rtlcss": "^3.3.5",
    "stylelint": "^13.13.1",
    "stylelint-config-twbs-bootstrap": "^2.2.3"
  },
  "dependencies": {
    "bootstrap": "^4.6.0"
  }
}
```

</details>
