var elements = require('./elements')

class ReservePage {

    validateReservePage() {
        return cy.url().should('include', '/reserve.php');
    }

}

export default HomePage