describe("Site google.com", () => {
  //Testul 1
  it("Functioneaza cu o cautare basic", () => {
    cy.visit("https://google.com");
    cy.get(".GzLjMd .tHlp8d").eq(1).click();
    cy.get(".gLFyf").type("vlog de it").type("{enter}");
  })

  it("Verifica daca e textul corect in input", () =>{
    cy.visit("https://google.com");
    cy.get('#L2AGLb > .QS5gu').click();
    cy.get('.gLFyf').type("123");
    cy.get('.gLFyf').should('have.value', '123');
  })

  it("Verifica daca Imaginea cu textul Google este vizibila ", () => {
    cy.visit("https://google.com");
    cy.get('#L2AGLb > .QS5gu').click();
    cy.get('[alt = "Google"]').should('be.visible');
  })
});
