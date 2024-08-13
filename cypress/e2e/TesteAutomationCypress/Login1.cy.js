describe("AutomationTests", () => {
    it("Login test with wrong user/password", () => {
        cy.visit("https://www.saucedemo.com");
        cy.get('#user-name').type('user123');
        cy.get('#password').type("passrd");
        cy.get('#login-button').click();

        cy.get('[data-test="error"]').should('be.visible');
        cy.get('[data-test="error"]').should('contain.text', "Epic sadface: Username and password do not match any user in this service");
    })
})