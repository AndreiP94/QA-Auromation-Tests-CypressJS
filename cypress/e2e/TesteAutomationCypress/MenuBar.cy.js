describe('MenuButton', () => {
    it('Open/Close menu', () => {
        cy.visit("https://saucedemo.com");
        cy.get('#user-name').type('standard_user');
        cy.get('#password'). type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#react-burger-cross-btn').click();

        cy.get('.header_secondary_container').should('be.visible');
    })
})