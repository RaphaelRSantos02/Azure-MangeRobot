/// <reference types="cypress" />

const el = {
  homeContainer: ()=> cy.get("#home-page"),
  mineButton: ()=> cy.get("#order"),
  buildContainer: ()=> cy.get("#build-page"),
  flag: ()=> cy.get("header #flag"),
  homeTitle: ()=> cy.get("#home-page #title")
}

describe('testing home page', () => {
  beforeEach(()=> {
    cy.visit("/")
  })
  it('accesing home page', () => {
    el.homeContainer().should('exist')
  })

  it('testing mine button', () => {
    cy.wait(3000)
    el.mineButton().click()
    el.buildContainer().should('exist')
    
  })

  it('testing translate button', () => {
    cy.wait(3000)
    el.flag().click()
    el.homeTitle().should('exist')
    
    
  })
  
})