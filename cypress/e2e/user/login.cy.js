describe("Login", () => {

  it("Verify login with valid username and password", () => {
    cy.contains("Test login").should("be.visible");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
    cy.contains("Logged In Successfully").should("be.visible");
    cy.url().should('include', '/practicetestautomation.com/logged-in-successfully/');
    cy.contains("Home").click()
    

    //cy.contains("Log out").click();
  });
  it("Verify login with invalid username and password", () => {
    cy.get("#username").type("invaliduser");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
    cy.get("#error").should("have.text", "Your username is invalid!");
    
    
});
it("Verify login with username and  invalid password", () => {
    cy.get("#username").type("student");
    cy.get("#password").type("Password");
    cy.get("#submit").click();
    cy.get("#error").should("have.text", "Your password is invalid!");
        
    
    
});
it("Verify login with empty username and password", () => {
    cy.get("#submit").click();
    cy.get("#error").should("have.text", "Your username is invalid!");
    
    
});
});
