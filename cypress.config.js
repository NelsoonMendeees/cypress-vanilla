const { defineConfig } = require('cypress')
const { allureCypress } = require('allure-cypress/reporter')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on)
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
  }
})
