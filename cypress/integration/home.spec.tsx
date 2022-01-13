/// <reference types="cypress"/>

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should render the home page and display a message', () => {
    cy.get('h1').contains('Développeur Freelance spécialisé dans');
  });

  it('should not contain a link with / or # as href', () => {
    cy.get('main a').each(($el) => {
      cy.wrap($el).should('have.attr', 'href').and('not.eq', '/#');
      cy.wrap($el).should('have.attr', 'href').and('not.eq', '/');
    });
  });
});

export {};
