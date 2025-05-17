// playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  use: {
    baseURL: 'http://localhost:3000', // REQUIRED for `page.goto('/signup')`
    headless: false, // show the browser window
    launchOptions: {
      slowMo: 1000, // slow down each action by 1 second
    },
  },
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: true,
  },
  testDir: './tests/e2e',
})
