const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "wq7jrx",
    baseUrl: 'https://petstore.swagger.io/v2',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
