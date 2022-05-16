context('Menu', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display the sticky header after X pixels', () => {
    cy.get('.sticky-menu').should('not.have.class', 'fixed');
    cy.scrollTo('bottom', { duration: 1000 });
    cy.get('.sticky-menu').should('have.class', 'fixed');
  });

  it('should display the burger menu on mobile', () => {
    cy.get('.burger-menu').should('not.be.visible');
    cy.viewport('iphone-6');
    cy.get('.nav-menu').should('not.be.visible');
    cy.get('.burger-menu').should('be.visible');

    cy.get('.burger-menu').click();
   
    cy.get('.nav-menu').should('be.visible');

    cy.get('button.block > .bg-gray-darker').click();
    cy.get('.nav-menu').should('not.be.visible');
  });
});

export {};
