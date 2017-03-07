# vue-webpack-plus boilerplate

This is a fork of official [Vue.js webpack template](https://github.com/vuejs-templates/webpack/), with [vuex](https://github.com/vuejs/vuex) & [vue-router](https://github.com/vuejs/vue-router) ready.

- Vue 2.2
- Vuex 2.1
- Vue Router 2.2
- Vuex Router Sync

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init CodinCat/vue-webpack-plus my-project
$ cd my-project
$ npm install
$ npm run dev
```

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.

- `npm run unit`: Unit tests run in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org/) + [karma-webpack](https://github.com/webpack/karma-webpack).
  - Supports ES2015+ in test files.
  - Supports all webpack loaders.
  - Easy mock injection.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

## Documentation

- [For official webpack template](http://vuejs-templates.github.io/webpack): common questions specific to official webpack template are answered and each part is described in greater detail
- [For Vue 2.0](http://rc.vuejs.org/guide/): general information about how to work with Vue, not specific to this template

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
