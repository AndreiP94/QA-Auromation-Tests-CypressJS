describe('Details Page And Back to Product', () => {
    it('Details page of products', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('standard_user');
        cy.get('#password'). type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#item_1_title_link').click();

        cy.get('.inventory_details').should('be.visible');
    })
    it('Back to products page', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('standard_user');
        cy.get('#password'). type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#item_1_title_link').click();
        cy.get('#back-to-products').click();

        cy.get('#inventory_container').should('be.visible');
    })
})