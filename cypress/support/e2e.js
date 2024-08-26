import './commands'
import 'cypress-mochawesome-reporter/register';
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    if (err.message.includes("a is not a function")) {
      return false;
    }
    if (err.message.includes("jQuery is not defined")) {
        return false;
      }
  });