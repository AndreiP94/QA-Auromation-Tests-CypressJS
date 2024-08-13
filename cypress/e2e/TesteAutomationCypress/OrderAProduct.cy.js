describe('Order a Product', () => {
    it('Order a product', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('standard_user');
        cy.get('#password'). type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();
        cy.get('#first-name').type("nume");
        cy.get('#last-name').type('prenume');
        cy.get('#postal-code').type('407280');
        cy.get('#continue').click();
        cy.scrollTo('bottom');
        cy.get('#finish').click();

        cy.get('#checkout_complete_container').should('be.visible');
    })
})