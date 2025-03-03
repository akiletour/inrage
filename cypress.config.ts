import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  viewportWidth: 1440,
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
})
