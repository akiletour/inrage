context('Menu', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the sticky header after X pixels', () => {
    cy.get('.sticky-menu').should('not.have.class', 'fixed');
    cy.scrollTo('bottom', { duration: 1000 });
    cy.get('.sticky-menu').should('have.class', 'fixed');
  });

  it('should not display the burger menu on desktop', () => {
    cy.get('.burger-menu').should('not.be.visible');
  });
});

context('Mobile menu', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
  })

  it('should open the mobile menu', () => {
      cy.get('.nav-menu').should('not.be.visible');
      cy.get('.burger-menu').should('be.visible').click();
     
      cy.get('.nav-menu').should('be.visible');

      cy.get('button.block > .bg-gray-darker').click();
      cy.get('.nav-menu').should('not.be.visible'); 
  })
})

export {};
