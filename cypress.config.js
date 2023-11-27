const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pjd5sn',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
