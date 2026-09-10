
describe("Automation Exercise - Login", () => {

  beforeEach(() => {
    cy.visit(Cypress.env("automationExerciseUrl"));
  });

  it("should login successfully", { tags: "@smoke" }, () => {

    cy.login();

  /*  // Open Login page
    cy.contains("Signup / Login").click();

    // Verify Login page
    cy.url().should("include", "/login");
    cy.contains("Login to your account").should("be.visible");

    // Enter email
    cy.get('[data-qa="login-email"]')
      .type(Cypress.env("loginEmail"));

    // Enter password
    cy.get('[data-qa="login-password"]')
      .type(Cypress.env("loginPassword"));

    // Click Login
    cy.get('[data-qa="login-button"]')
      .click();

    // Verify successful login
    cy.contains("Logged in as").should("be.visible"); */

  });

  it("should show error for invalid password", () => {

  // Open Login page
  cy.contains("Signup / Login").click();

  // Enter email
  cy.get('[data-qa="login-email"]')
    .type(Cypress.env("loginEmail"));

  // Enter WRONG password
  cy.get('[data-qa="login-password"]')
    .type("WrongPassword123!");

  // Click Login
  cy.get('[data-qa="login-button"]')
    .click();

  // Verify error message
  cy.contains("Your email or password is incorrect!")
    .should("be.visible");

});

it("should not login with empty fields", () => {

  // Open Login page
  cy.contains("Signup / Login").click();

  // Click Login without entering email or password
  cy.get('[data-qa="login-button"]')
    .click();

  // Verify browser validation
  cy.get('[data-qa="login-email"]')
    .should("have.attr", "required");

});

});


