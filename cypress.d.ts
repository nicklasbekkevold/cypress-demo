declare global {
  namespace Cypress {
    type Chainable = {
      console(value: string): Chainable<JQuery<HTMLElement>>;
    };
  }
}
