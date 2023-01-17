import { ConsoleMethods } from '../types/console_methods';

declare global {
  namespace Cypress {
    interface Chainable {
      console(method: ConsoleMethods): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add(
  'console',
  { prevSubject: true },
  (subject, method?: ConsoleMethods) => {
    // the previous subject is automatically received
    // and the commands arguments are shifted

    // allow us to change the console method used
    method = method || 'log';

    // log the subject to the console
    console[method]('The subject is', subject);

    // whatever we return becomes the new subject
    // we don't want to change the subject so
    // we return whatever was passed in
    return subject;
  }
);
