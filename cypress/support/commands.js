// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

export const checkEmptyLinks = () => {
  it('should not contain a link with / or # as href', () => {
    cy.get('main a').each(($el) => {
      cy.wrap($el).should('have.attr', 'href').and('not.eq', '/#');
      cy.wrap($el).should('have.attr', 'href').and('not.eq', '/');
    });
  });
};
