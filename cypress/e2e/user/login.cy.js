describe("Login", () => {
  it("Verify login with valid email and password", () => {
    cy.visit("/");
    cy.contains("Test login").should("be.visible");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
    cy.contains("Logged In Successfully").should("be.visible");
    cy.contains("Log out").click();
  });
});
