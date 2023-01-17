import { defineConfig } from 'cypress';
import mochawesomeReporterPlugin from 'cypress-mochawesome-reporter/plugin';

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypres demo report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on) {
      return mochawesomeReporterPlugin(on);
    },
  },
});
