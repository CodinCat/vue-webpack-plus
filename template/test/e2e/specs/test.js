// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function {{#if_eq lintConfig "airbnb"}}test{{/if_eq}}(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    browser
      .url(devServer)
      .waitForElementVisible('#app', 10000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      .assert.elementCount('img', 1)
      .click('nav a[href="/counter"]')
      .pause(500)
      .assert.containsText('h2', 'Count: 0')
      .click('.counter h2+button')
      .assert.containsText('h2', 'Count: 1')
      .click('.counter button:last-child')
      .assert.containsText('h2', 'Count: 0')
      .end(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
