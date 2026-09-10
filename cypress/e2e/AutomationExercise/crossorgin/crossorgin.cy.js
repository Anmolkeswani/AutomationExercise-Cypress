describe("Cross Origin Validation", () => {

  it("should visit a different origin", () => {

    cy.visit("https://example.com");

    cy.origin("https://www.google.com", () => {

      cy.visit("https://www.google.com");

      cy.get("textarea[name='q']")
        .should("exist");

    });

  });

});