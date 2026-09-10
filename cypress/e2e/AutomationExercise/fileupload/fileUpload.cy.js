describe("File Upload", () => {

  it("should upload a file successfully", () => {

    cy.visit(Cypress.env("automationExerciseUrl"));

    cy.contains("Contact us").click();

    cy.get('[data-qa="name"]')
      .type("Cypress Test");

    cy.get('[data-qa="email"]')
      .type("cypresstest@example.com");

    cy.get('[data-qa="subject"]')
      .type("File Upload Test");

    cy.get('[data-qa="message"]')
      .type("Testing file upload using Cypress.");

    cy.get('input[type="file"]')
      .selectFile("cypress/fixtures/testFile.txt");

    cy.contains("Submit").click();

    cy.contains("Success! Your details have been submitted successfully.")
      .should("be.visible");

  });


});