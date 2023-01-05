/* global cy, Cypress */

Cypress.Commands.add(
  'deliveryData',
  (payment, cep, rua, numero, bairro, cidade, uf) => {
    cy.get('input[name="cep"]').type(cep).blur()
    cy.get('input[name="rua"]').should('contain.value', rua).and('be.disabled')
    cy.get('input[name="numero"]').type(numero)
    cy.get('input[name="bairro"]')
      .should('contain.value', bairro)
      .and('be.disabled')
    cy.get('input[name="cidade"]')
      .should('contain.value', cidade)
      .and('be.disabled')
    cy.get('input[name="uf"]').should('contain.value', uf).and('be.disabled')
    cy.get(`button[value=${payment}]`).click()
    cy.get('button[type="submit"]').click()
  },
)
