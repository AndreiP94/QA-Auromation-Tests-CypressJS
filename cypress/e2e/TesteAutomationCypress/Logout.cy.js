describe("AutomationTests", () => {
    it('Logout', () => {
        cy.visit("https://saucedemo.com");
        cy.get('#user-name').type('standard_user');
        cy.get('#password'). type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

        cy.get('.login_wrapper-inner').should('exist');
    })
})