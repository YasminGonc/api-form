import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      deliveryData(
        payment: string,
        cep: string,
        rua: string,
        numero: string,
        bairro: string,
        cidade: string,
        uf: string,
      ): Chainable<void>
    }
  }
}
