describe("Add and Remove Products from Cart", () => {

  beforeEach(() => {
    cy.visit(Cypress.env("automationExerciseUrl"));
  });

  it("should add a product to cart and remove it", () => {

    // Go to Products
    cy.contains("Products").click();

    // Add Blue Top to cart
    cy.contains("Blue Top")
      .parents(".productinfo")
      .find(".add-to-cart")
      .click();

    // Click View Cart
    cy.contains("View Cart").click();

    // Verify Blue Top is in the cart
    cy.contains("Blue Top").should("be.visible");

    // Remove Blue Top
    cy.get(".cart_quantity_delete").click();

    // Verify cart is empty
    cy.contains("Cart is empty").should("be.visible");

  });

});