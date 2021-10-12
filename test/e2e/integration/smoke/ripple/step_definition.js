/* global cy */

import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given(`I visit the Vue router path {string}`, url => {
  cy.visit(url, {
    failOnStatusCode: false
  })
})

Then(`the example data-viz component should exist`, () => {
  cy.get('.rpl-accordion').should('exist')
})
