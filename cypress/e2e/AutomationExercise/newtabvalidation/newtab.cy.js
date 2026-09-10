Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("Minified React error #418")) {
    return false;
  }
});

describe("New Tab Validation", () => {

  it("should handle a new tab link", () => {

    cy.visit("https://qaplayground.com/practice/tabs-windows");

    cy.contains("Open in New Tab")
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();

  });

});