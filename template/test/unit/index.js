// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native{{#if_eq lintConfig "airbnb"}}, import/no-extraneous-dependencies{{/if_eq}} */
Function.prototype.bind = require('function-bind'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

window.Promise = require('promise-polyfill'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
testsContext.keys().forEach(testsContext){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
srcContext.keys().forEach(srcContext){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
