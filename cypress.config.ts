import { defineConfig } from 'cypress';
import mochawesomeReporterPlugin from 'cypress-mochawesome-reporter/plugin';

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on) {
      return mochawesomeReporterPlugin(on);
    },
  },
});
