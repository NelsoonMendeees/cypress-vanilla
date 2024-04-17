const { defineConfig } = require('cypress')
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config)

      return config
    },
    chromeWebSecurity: false,
    baseUrl: 'https://erickwendel.github.io/vanilla-js-web-app-example/',
    watchForFileChanges: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    scrollBehavior: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    experimentalRunAllSpecs: true,
    testIsolation: false
  },
  env: {
    allure: true
  }
})
