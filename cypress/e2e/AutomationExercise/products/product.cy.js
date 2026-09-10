describe("Product Search", () => {

  beforeEach(() => {
    cy.visit(Cypress.env("automationExerciseUrl"));
  });

  it("should search for a product and verify the results", () => {

    // Click Products
    cy.contains("Products").click();

    // Verify Products page
    cy.url().should("include", "/products");

    // Search for Blue Top
    cy.get("#search_product").type("Blue Top");

    // Click search button
    cy.get("#submit_search").click();

    // Verify search results
    cy.contains("Searched Products").should("be.visible");

    // Verify Blue Top is displayed
    cy.contains("Blue Top").should("be.visible");

  });

});