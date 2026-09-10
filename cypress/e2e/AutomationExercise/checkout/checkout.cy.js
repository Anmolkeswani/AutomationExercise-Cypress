describe("Complete Checkout Process", () => {

  it("should login and proceed to checkout", () => {

    // Login and restore session
    cy.login();

    // Open Automation Exercise after session is restored
    cy.visit(Cypress.env("automationExerciseUrl"));

    // Verify successful login
    cy.contains("Logged in as").should("be.visible");

    // Go to Products
    cy.contains("Products").click();

    // Add Blue Top to cart
    cy.contains("Blue Top")
      .parents(".productinfo")
      .find(".add-to-cart")
      .click();

    // Open Cart
    cy.contains("View Cart").click();

    // Verify product is in cart
    cy.contains("Blue Top").should("be.visible");

    // Proceed to Checkout
    cy.contains("Proceed To Checkout").click();

    // Verify checkout page
    cy.contains("Address Details").should("be.visible");
    cy.contains("Review Your Order").should("be.visible");

    // Place Order
    cy.contains("Place Order").click();

    // Enter payment details
    cy.get('[data-qa="name-on-card"]').type("Test User");
    cy.get('[data-qa="card-number"]').type("4111111111111111");
    cy.get('[data-qa="cvc"]').type("123");
    cy.get('[data-qa="expiry-month"]').type("12");
    cy.get('[data-qa="expiry-year"]').type("2030");

    // Pay
    cy.get('[data-qa="pay-button"]').click();

    // Verify order confirmation
    cy.contains("Order Placed!").should("be.visible");

  });

});