# bootstrap-theme

A bare-bones template for Bootstrap-powered npm projects.

## Install

```
npm i mytheme
```

## Usage

```scss
// custom.scss
// Option A: Include all of SCSS

// Include any default variable overrides here (though functions won't be available)
$body-bg: #000;
$body-color: #111;

@import "node_modules/mytheme/scss";

// Then add additional custom code here
```

```scss
// Custom.scss
// Option B: Include parts of SCSS

// 1. Include functions first (so you can use the available functions)
@import "node_modules/mytheme/scss/functions"; // if any

// 2. Include any default variable overrides here
$body-bg: #000;
$body-color: #111;

// 3. Include remainder of required SCSS
@import "node_modules/mytheme/scss/variables";
@import "node_modules/mytheme/scss/mixins"; // if any
@import "node_modules/mytheme/scss/root"; // if any

// 4. Include any optional components as needed
@import "node_modules/mytheme/scss/button";
// etc

// 5. Optionally include utilities if any
@import "node_modules/mytheme/scss/utilities";

// 6. Add additional custom code here
// etc
```
