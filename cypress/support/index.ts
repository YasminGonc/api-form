import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      payment(payment: string): Chainable<void>
    }
  }
}
