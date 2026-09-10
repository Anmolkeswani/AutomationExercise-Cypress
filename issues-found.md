# Issues Found During Testing

## Summary

During automation testing of the Automation Exercise application, the planned test scenarios were executed and validated using Cypress.

## Issues / Observations

### ISSUE-001 — Existing Email Validation

**Module:** Authentication / Signup

**Description:**  
When attempting to register with an email address that already exists, the application displays an "Email Address already exist!" message.

**Expected Result:**  
The application should prevent registration with an existing email address and display an appropriate validation message.

**Actual Result:**  
The application displays the existing-email validation message.

**Severity:**  
Informational / Expected Validation

**Status:**  
Working as expected

### Additional Observations

- Dynamic test data was implemented to reduce conflicts with previously registered email addresses.
- File download validation was performed by checking that the downloaded file exists and contains expected content.
- New-tab behavior was handled using Cypress-compatible same-tab execution.
- Cross-origin behavior was validated using Cypress `cy.origin()`.