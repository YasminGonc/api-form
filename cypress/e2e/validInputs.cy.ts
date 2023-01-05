/* global cy */

interface AddressProps {
  cep: string
  rua: string
  numero?: string
  bairro: string
  cidade: string
  uf: string
}

export const address: AddressProps[] = require('../fixtures/address.json')

describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  address.forEach((address) => {
    it('verify valid inputs and credit payment', () => {
      cy.deliveryData(
        'credit',
        address.cep,
        address.rua,
        address.numero,
        address.bairro,
        address.cidade,
        address.uf,
      )
    })

    it('verify valid inputs and debit payment', () => {
      cy.deliveryData(
        'debit',
        address.cep,
        address.rua,
        address.numero,
        address.bairro,
        address.cidade,
        address.uf,
      )
    })

    it('verify valid inputs and cash payment', () => {
      cy.deliveryData(
        'cash',
        address.cep,
        address.rua,
        address.numero,
        address.bairro,
        address.cidade,
        address.uf,
      )
    })
  })
})

// verificar cep ok e sem número
