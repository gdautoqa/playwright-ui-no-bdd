import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  retries: 1,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    trace: 'on',
    video: 'retain-on-failure',
    screenshot: 'on',
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Pixel 8',
      use: { ...devices['Pixel 8'] },
    },
    {
      name: 'iPhone 15',
      use: { ...devices['iPhone 15'] },
    },
    {
      name: 'API',
      testDir: './tests/api',
      use: {
        baseURL: process.env.BASE_API_URL || 'http://localhost:3000/api',
        extraHTTPHeaders: { 'Content-Type': 'application/json' },
      },
    },
  ],
  outputDir: 'test-results/',
});
