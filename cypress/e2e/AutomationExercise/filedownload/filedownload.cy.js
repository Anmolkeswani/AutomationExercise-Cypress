describe("Download File Validation", () => {

  it("should download and validate the file", () => {

    // Open the practice website
    cy.visit("https://www.sreenidhirajakrishnan.com/practice");

    // Click the download button
    cy.contains("Download practice.txt").click();

    // Verify that the file was downloaded
      cy.readFile("cypress/downloads/practice.txt")
  .should("exist")
  .and("not.be.empty")
  .and("contain", "practice");

  });

});



