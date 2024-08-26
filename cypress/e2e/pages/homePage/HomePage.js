var elements = require('./elements')

class HomePage {
    openHomePage() {
        cy.url().then((currentUrl) => {
            if (!currentUrl.includes('index.php')) {
                return cy.visit('https://blazedemo.com/index.php');
            }
          });
    }

    selectCities(departureCity, destinationCity) {
        cy.get(elements.HOMEPAGE.DEPARTURE_CITY_SELECT)
        .select(departureCity);
        cy.get(elements.HOMEPAGE.DESTINATION_CITY_SELECT)
        .select(destinationCity);  
    }

    clickFindFlightsButton(){
        return cy.get(elements.HOMEPAGE.FINDFLIGHTS_BUTTON)
        .click()
    }
}

export default HomePage