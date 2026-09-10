# Automation Exercise - Cypress Automation

## Project Overview

This project contains automated end-to-end tests for the Automation Exercise website using Cypress.

The purpose of this project is to demonstrate practical automation testing skills including authentication, product testing, cart, checkout, form validation, file handling, dynamic test data, new-tab handling, and cross-origin testing.

## Application Under Test

**Application:** Automation Exercise

**URL:** https://automationexercise.com

## Technology Used

* Cypress
* JavaScript
* Node.js
* npm

## Automated Test Scenarios

The project contains more than the required 10 automated scenarios.

### Authentication

1. Login with valid credentials
2. Login with invalid password
3. Login with empty fields
4. User logout
5. Signup with dynamically generated user data

### Products

6. Product search

### Cart

7. Add and remove products from cart

### Checkout

8. Checkout process
9. Order confirmation

### Form Validation

10. Form field validation

### Additional Automation

11. File upload validation
12. File download validation
13. New-tab handling
14. Cross-origin navigation

## Project Structure

```text
cypress/
├── e2e/
│   └── automationexercise/
│       ├── auth/
│       │   ├── dynamicsignup.cy.js
│       │   └── login.cy.js
│       ├── cart/
│       │   └── cart.cy.js
│       ├── checkout/
│       │   └── checkout.cy.js
│       ├── crossorigin/
│       │   └── crossorigin.cy.js
│       ├── filedownload/
│       │   └── filedownload.cy.js
│       ├── fileupload/
│       │   └── fileUpload.cy.js
│       ├── FormValidation/
│       │   └── formValidation.cy.js
│       ├── newtabvalidation/
│       │   └── newtab.cy.js
│       └── products/
│           └── product.cy.js
│
├── fixtures/
└── support/
    ├── commands.js
    └── e2e.js

cypress.config.js
package.json
package-lock.json
README.md
test-case-checklist.xlsx
execution-report.xlsx
issues-found.md
```

## Prerequisites

Make sure the following are installed:

* Node.js
* npm

## Installation

Clone the repository and open the project folder.

Install the project dependencies:

```bash
npm install
```

## Running the Tests

### Open Cypress

```bash
npx cypress open
```

Select **E2E Testing** and choose a browser.

### Run All Automation Exercise Tests

```bash
npx cypress run --spec "cypress/e2e/automationexercise/**/*.cy.js"
```

### Run a Specific Test File

Example:

```bash
npx cypress run --spec "cypress/e2e/automationexercise/auth/login.cy.js"
```

## Test Data

Login credentials and application URLs are maintained through Cypress environment configuration.

Dynamic test data is generated for signup testing to reduce conflicts with previously registered email addresses.

## Cypress Configuration

The project includes:

* Custom Cypress commands
* Environment-based configuration
* Cypress session management
* Retry configuration
* Screenshot capture on failure
* Video recording
* Custom timeout configuration

## Test Evidence

Cypress screenshots and videos can be generated during test execution based on the project configuration.

## Testing Coverage

The automation suite covers:

* Functional testing
* Authentication testing
* Form validation
* Product testing
* Cart testing
* Checkout testing
* File upload testing
* File download testing
* Dynamic test data
* New-tab handling
* Cross-origin testing

## Deliverables

This repository contains:

* Cypress automated test project
* Minimum 10 automated scenarios
* README with setup and execution instructions
* Test-case checklist
* Execution report
* List of issues and observations found during testing

## Testing Approach

The automation suite focuses on important end-to-end user journeys and common QA scenarios.

The tests validate application functionality from the user's perspective while also demonstrating Cypress automation capabilities such as custom commands, session management, dynamic data, file handling, and cross-origin testing.

## Author

**Anmol Keswani**
