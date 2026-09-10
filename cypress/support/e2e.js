// Ignore the site's known homepage slider null-reference so public-page checks can proceed.
Cypress.on("uncaught:exception", (error) => {
  if (error.message.includes("Cannot read properties of null (reading 'addEventListener')")) {
    return false;
  }
});

import './commands'

import "@bahmutov/cy-grep";