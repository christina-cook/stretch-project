/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Footer', () => {
  it('Should login',  () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[type=email]').type('test@test.com')
    .get('input[type=password]').type('testing')
    .get('.form-submit-button').click()
  })
  it('Should display footer on bottom of page with links to about', () => {
    cy.get('.footer').children('.aboutLink', '.christina', '.alice', '.kevin')
      .get('.aboutLink').click()
    cy.url().should('include', '/about')
  })
  
  it('Should link to Christina\'s github', () => {
    cy.visit('http://localhost:3000')
    cy.get('.footer').children('.christina')
      .get('.christina').should('have.attr', 'href').should('eq', 'https://github.com/christina-cook')
  })

  it('Should link to Alice\'s github', () => {
    cy.get('.footer').children('.alice')
      .get('.alice').should('have.attr', 'href').should('eq', 'https://github.com/srslie')
  })

  it('Should link to Kevin\'s github', () => {
    cy.get('.footer').children('.kevin')
      .get('.kevin').should('have.attr', 'href').should('eq', 'https://github.com/kevinhartmann23')
      cy.get('.header')
  })

  it('Should sign out', () => {
    cy.get('.userDropdown').click()
      .get('.signOutLink').click({force: true})
      cy.url().should('include', '/login')
  })
})