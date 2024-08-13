describe('AddOrDelete from cart', () => {
    it('Add to cart', () => {
        cy.visit("https://saucedemo.com");
        cy.get('#user-name').type('standard_user');
        cy.get('#password'). type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();

        cy.get('.cart_item').should('be.visible');
    })

    it('Delete from cart', () => {
        cy.visit("https://saucedemo.com");
        cy.get('#user-name').type('standard_user');
        cy.get('#password'). type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('#remove-sauce-labs-backpack').click();

        cy.get('.cart_quantity').should('not.exist');

    })
})