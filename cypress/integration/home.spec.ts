/// <reference types="cypress"/>

import { checkEmptyLinks } from '../support/commands';

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should render the home page and display a message', () => {
    cy.get('h1').contains('Développeur Freelance spécialisé dans');
  });

  checkEmptyLinks();
})

export {};
