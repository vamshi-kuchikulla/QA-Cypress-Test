const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:  'cypress-mochawesome-reporter',
  reporterOptions:{
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    reportPageTitle: 'ContactListApp',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    charts: true,
    overwrite: true,
    html: true,
    json: false,
  },
  retries:{ 
    runMode :2,
    openMode:1,
   },
 defaultCommandTimeout:50000,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    screenshotOnRunFailure:true,
  },
});
