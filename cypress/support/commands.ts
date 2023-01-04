/* global cy, Cypress */

Cypress.Commands.add('payment', (payment) => {
  cy.get('input[name="cep"]').type('74674240').blur()
  cy.get('input[name="numero"]').type('1')
  cy.get('input[name="bairro"]')
    .should('contain.value', 'Setor Jaó')
    .and('be.disabled')
  cy.get('input[name="cidade"]')
    .should('contain.value', 'Goiânia')
    .and('be.disabled')
  cy.get('input[name="uf"]').should('contain.value', 'GO').and('be.disabled')
  cy.get(`button[value="${payment}"]`).click()
  cy.get('button[type="submit"]').click()
})
