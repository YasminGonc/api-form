import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      deliveryData(
        payment: string,
        cep: string,
        rua: string,
        bairro: string,
        cidade: string,
        uf: string,
        numero?: string,
      ): Chainable<void>
    }
  }
}
