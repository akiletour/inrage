/// <reference types="cypress"/>

import { checkEmptyLinks } from '../support/commands';

context('About page', () => {
  beforeEach(() => {
    cy.visit('/a-propos-de-moi');
  });

  it('Should contain a H1', () => {
    cy.get('h1').contains('A propos de moi');
  });

  checkEmptyLinks();
});

const asModule = {}
export default asModule
