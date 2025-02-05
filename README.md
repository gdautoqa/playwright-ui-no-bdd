# Playwright UI Automation Tests with BDD & Cucumber

This repository contains a series of UI automation tests built with Playwright. The tests target the [the-internet.herokuapp.com](https://the-internet.herokuapp.com) application and make use of the Page Object Model (POM) for maintainability and ease of use.

## Key Features

- **Playwright UI Automation:**  
  Robust and reliable browser automation across Chromium, Firefox, and Webkit.

- **Page Object Model (POM):**  
  The POM architecture is used to encapsulate page interactions, leading to well-organized and reusable code.

- **GitHub Actions Integration:**  
  The tests run via GitHub Actions using a scheduled CRON job (Wednesdays at 8 AM Eastern Time), ensuring regular test execution. You can also trigger the tests manually through the GitHub Actions interface.

- **Reporting:**  
  After each test run, Playwright reports are generated and uploaded as artifacts, providing clear insights into test results.

## Getting Started

### Prerequisites

- Node.js 
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install Playwright Browsers:**

   ```bash
   npx playwright install
   ```

### Running Tests Locally

To execute the tests on your local machine, run:

```bash
npm run test
```

### GitHub Actions

The project is integrated with GitHub Actions:

- **Scheduled (CRON) Run:**  
  Tests are automatically triggered every Wednesday at 8 AM Eastern Time.

- **Manual Trigger:**  
  You can manually start a test run from the GitHub Actions tab.

After each execution, the generated Playwright and Cucumber reports are uploaded as artifacts for review.

## Project Structure

- **src/pages:** Contains the Page Object Model implementations.
- **src/utils:** Contains utility functions, hooks, and configuration files.