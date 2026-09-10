// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('visitHome', () => {

    cy.visit('/')

})


Cypress.Commands.add("generateUser", () => {

  const randomNumber = Math.floor(Math.random() * 1000000);

  return {
    name: `TestUser${randomNumber}`,
    email: `testuser${randomNumber}@example.com`,
    password: `Test@${randomNumber}`,
    firstName: `Test${randomNumber}`,
    lastName: "User",
    company: "Test Company",
    address: "Test Address",
    state: "Sindh",
    city: "Karachi",
    zipcode: "74000",
    mobileNumber: `0300${randomNumber}`
  };

});

 Cypress.Commands.add("login", () => {

  cy.session("login", () => {

    cy.visit(Cypress.env("automationExerciseUrl"));

    cy.contains("Signup / Login").click();

    cy.get('[data-qa="login-email"]')
      .type(Cypress.env("loginEmail"));

    cy.get('[data-qa="login-password"]')
      .type(Cypress.env("loginPassword"));

    cy.get('[data-qa="login-button"]')
      .click();

    cy.contains("Logged in as")
      .should("be.visible");

  });

});

Cypress.Commands.add('loginCerebro', () => {

  cy.contains('Admin fallback').click()

  cy.get('#login-email')
    .type(Cypress.env('username'))

  cy.get('#login-password')
    .type(Cypress.env('password'))

  cy.contains('button', 'Sign in').click()

})

Cypress.Commands.add('setViewport', (device) => {

    const viewports = {
        desktop: {
            width: 1920,
            height: 1080
        },

        laptop: {
            width: 1366,
            height: 768
        },

        tablet: {
            width: 768,
            height: 1024
        },

        mobile: {
            width: 375,
            height: 667
        }
    };

    const viewport = viewports[device];

    if (!viewport) {
        throw new Error(
            `Invalid viewport "${device}". Use: desktop, laptop, tablet, or mobile.`
        );
    }

    cy.viewport(viewport.width, viewport.height);


});
