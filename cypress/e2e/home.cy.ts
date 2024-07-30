import { checkEmptyLinks } from "../support/commands"

/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should render the home page and display a message", () => {
    cy.get("h1").contains("Développeur Freelance spécialisé dans")
  })

  checkEmptyLinks()
})

export {}
