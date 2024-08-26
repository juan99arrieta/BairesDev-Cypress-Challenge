var elements = require('./elements')

class ReservePage {

    validateReservePage() {
        return cy.url().should('include', '/reserve.php');
    }

    validateCitiesInTittleMessage(departureCity, destinationCity){
        return cy.get(elements.RESERVEPAGE.TITTLEMESSAGE_TEXT)
        .should('be.visible')
        .contains(departureCity)
        .contains(destinationCity)
    }

    validateFlightsListIsDisplayed(){
        cy.get(elements.RESERVEPAGE.FLIGHTSLIST_TABLE).find('tr').not(':first').each(($row) => {
            cy.wrap($row).find(elements.RESERVEPAGE.CHOOSETHISFLIGHT_BUTTON).should('exist');
          });
    }

    validateFlightNumberInFlightList(){
        cy.get(elements.RESERVEPAGE.FLIGHTSLIST_TABLE).find('tr').not(':first').each(($row) => {
            cy.wrap($row).find('td').eq(1).invoke('text').then((text) => {
              const number = parseInt(text.trim(), 10);
              expect(number).to.be.within(0, 9999);
            });
          });          
    }

    validateAirlineInFlightList(){
        cy.get(elements.RESERVEPAGE.FLIGHTSLIST_TABLE).find('tr').not(':first').each(($row) => {
            cy.wrap($row).find('td').eq(2).invoke('text').then((text) => {
                const trimmedText = text.trim();
                expect(trimmedText).to.not.be.empty;
                expect(trimmedText).to.match(/^[\w\s]+$/);
            }); 
          });        
    }

    validateDepartTimeInFlightList(){
        cy.get(elements.RESERVEPAGE.FLIGHTSLIST_TABLE).find('tr').not(':first').each(($row) => {
            cy.wrap($row).find('td').eq(3).invoke('text').then((text) => {
                const time = text.trim();
                const timePattern = /^([1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/;
                expect(time).to.match(timePattern);
              });
          });        
    }

    validateArriveTimeInFlightList(){
        cy.get(elements.RESERVEPAGE.FLIGHTSLIST_TABLE).find('tr').not(':first').each(($row) => {
            cy.wrap($row).find('td').eq(4).invoke('text').then((text) => {
                const time = text.trim();
                const timePattern = /^([1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/;
                expect(time).to.match(timePattern);
              });
          });        
    }

    validateFlightPriceInFlightList(){
        cy.get(elements.RESERVEPAGE.FLIGHTSLIST_TABLE).find('tr').not(':first').each(($row) => {
            cy.wrap($row).find('td').eq(5).invoke('text').then((text) => {
                const price = text.trim();
                const pricePattern = /^\$\d+(?:\.\d{2})?$/;
                expect(price).to.match(pricePattern);
              });
          });        
    }
}

export default ReservePage