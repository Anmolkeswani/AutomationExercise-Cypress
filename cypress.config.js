const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 1920,
  viewportHeight: 1080,

  defaultCommandTimeout: 10000,
  pageLoadTimeout: 120000,
  requestTimeout: 30000,
  responseTimeout: 30000,

  video: true,
  screenshotOnRunFailure: true,

  retries: {
    runMode: 2,
    openMode: 0
  },

  e2e: {
    baseUrl: "https://cerebro.activ8.digital/",

    chromeWebSecurity: false,
    watchForFileChanges: false,

setupNodeEvents(on, config) {
  require("@bahmutov/cy-grep/src/plugin")(config);
  return config;
}
    
  },

  env: {
    automationExerciseUrl: "https://automationexercise.com",
    loginEmail: "keswanianmol1@gmail.com",
    loginPassword: "abc123"
  }

});

