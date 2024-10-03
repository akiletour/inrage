export const checkEmptyLinks = () => {
  it('should not contain a link with / or # as href', () => {
    cy.get('main a').each(($el) => {
      cy.wrap($el).should('have.attr', 'href').and('not.eq', '/#');
      cy.wrap($el).should('have.attr', 'href').and('not.eq', '/');
    });
  });
};

const asModule = {};
export default asModule;
