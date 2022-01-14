import { checkEmptyLinks } from '../support/commands';

/// <reference types="cypress"/>

context('About page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/a-propos-de-moi');
  });

  it('Should contain a H1', () => {
    cy.get('h1').contains('A propos de moi');
  });

  checkEmptyLinks();
});

export {};
