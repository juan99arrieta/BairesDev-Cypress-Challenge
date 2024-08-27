var elements = require('./elements')

class ConfirmationPage{

    validateConfirmationPage() {
        return cy.url().should('include', '/confirmation.php');
    }

}

export default ConfirmationPage