describe("Form Validations", () => {

  beforeEach(() => {
    cy.visit(Cypress.env("automationExerciseUrl"));
    cy.contains("Signup / Login").click();
  });

  it("should validate login form fields", () => {

    // Click Login without entering email or password
    cy.get('[data-qa="login-button"]').click();

    // Verify email field is required
    cy.get('[data-qa="login-email"]')
      .then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
      });

  });

  it("should show error for invalid login credentials", () => {

  cy.get('[data-qa="login-email"]').type("wrong@email.com");
  cy.get('[data-qa="login-password"]').type("wrongpassword");

  cy.get('[data-qa="login-button"]').click();

  // Verify error message
  cy.contains("Your email or password is incorrect!")
    .should("be.visible");

});

});