describe("Automation Exercise - Dynamic Signup", () => {

  it("should create a user with a unique email", () => {

    cy.visit(Cypress.env("automationExerciseUrl"));

    cy.contains("Signup / Login").click();

    cy.generateUser().then((user) => {

      cy.get('[data-qa="signup-name"]')
        .type(user.name);

      cy.get('[data-qa="signup-email"]')
        .type(user.email);

      cy.get('[data-qa="signup-button"]')
        .click();

      // Check if email already exists
      cy.get("body").then(($body) => {

        if ($body.text().includes("Email Address already exist!")) {

          cy.log("Email already exists. Generating another email.");

          // Clear old email
          cy.get('[data-qa="signup-email"]')
            .clear();

          // Generate another email
          const randomNumber = Math.floor(Math.random() * 1000000);
          const newEmail = `testuser${randomNumber}@example.com`;

          cy.log(`New email: ${newEmail}`);

          cy.get('[data-qa="signup-email"]')
            .type(newEmail);

          cy.get('[data-qa="signup-button"]')
            .click();

        }

      });

      // Should now reach account information
      cy.contains("Enter Account Information")
        .should("be.visible");

    });

  });

});