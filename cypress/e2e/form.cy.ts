/* global cy */

describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('verify invalid CEP (length < 7)', () => {
    cy.get('input[name="cep"]').type('7467424').blur()
    cy.get('.sc-iBYQkv > :nth-child(3)').should(
      'contain.text',
      'Preencha um CEP válido Ex.: 03064-000',
    )
  })

  it('verify invalid CEP (length > 7)', () => {
    cy.get('input[name="cep"]').type('746742410').blur()
    cy.get('.sc-iBYQkv > :nth-child(3)').should(
      'contain.text',
      'Preencha um CEP válido Ex.: 03064-000',
    )
  })

  it('verify invalid CEP', () => {
    cy.get('input[name="cep"]').type('74674241').blur()
    cy.get('.sc-iBYQkv > :nth-child(4)').should(
      'contain.text',
      'CEP não encontrado. Digite um CEP válido',
    )
  })

  it('verify valid inputs and credit payment', () => {
    cy.payment('credit')
  })

  it('verify valid inputs and debit payment', () => {
    cy.payment('debit')
  })
})
