const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    defaultCommandTimeout: 10000,
    screenshotsFolder: 'cypress/screenshots',
  },
});
