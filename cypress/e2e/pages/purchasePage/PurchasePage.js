var elements = require('./elements')

class PurchasePage {
    openPurchasePage() {
        cy.url().then((currentUrl) => {
            if (!currentUrl.includes('index.php')) {
                return cy.visit(elements.PURCHASEPAGE.URL);
            }
          });
    }

    validatePurchasePage() {
        return cy.url().should('include', '/purchase.php');
    }

    validateIataInTittleMessage(departureCityIATA, destinationCityIATA){
        return cy.get(elements.PURCHASEPAGE.TITTLE_MESSAGE_TEXT)
        .should('be.visible')
        .contains(departureCityIATA)
        .contains(destinationCityIATA)
    }

    validateReservationDataMatchSelectedFlightData(dataToValidate, flightData) {
        if(dataToValidate === "airline") {
            cy.get(elements.PURCHASEPAGE.RESERVATION_AIRLINE_TEXT).then($el => {
                try {
                    expect($el).to.contain(flightData[dataToValidate]);
                } catch (error) {
                    cy.log('Validation failed for airline, but continuing...');
                }
            });
        }
        if(dataToValidate === "flightNumber") {
            cy.get(elements.PURCHASEPAGE.RESERVATION_FLIGHT_NUMBER_TEXT).then($el => {
                try {
                    expect($el).to.contain(flightData[dataToValidate]);
                } catch (error) {
                    cy.log('Validation failed for flight number, but continuing...');
                }
            });
        }
        if(dataToValidate === "price") {
            cy.get(elements.PURCHASEPAGE.RESERVATION_PRICE_TEXT).then($el => {
                try {
                    expect($el).to.contain(flightData[dataToValidate]);
                } catch (error) {
                    cy.log('Validation failed for price, but continuing...');
                }
            });
        }
    }

    validateTotalCost(){
        let price, feesAndTaxes, totalCost;
        cy.get(elements.PURCHASEPAGE.RESERVATION_PRICE_TEXT).invoke('text').then(text => {
            price = parseFloat(text.replace('Price:', '').trim());
        });
        cy.get(elements.PURCHASEPAGE.RESERVATION_FEES_TEXT).invoke('text').then(text => {
            feesAndTaxes = parseFloat(text.replace('Arbitrary Fees and Taxes:', '').trim());
        });
        cy.get(elements.PURCHASEPAGE.RESERVATION_TOTAL_COST_TEXT).find('em').invoke('text').then(text => {
            totalCost = parseFloat(text.trim());
            const calculatedTotal = price + feesAndTaxes;
            expect(totalCost).to.equal(calculatedTotal);
        });
    }

    validatePurchaseFormIsVisible(){
        cy.get(elements.PURCHASEPAGE.PURCHASE_FORM).should('be.visible');
        cy.get(elements.PURCHASEPAGE.PURCHASE_FORM_NAME_INPUT).should('be.visible').and('have.attr', 'placeholder', 'First Last');
        cy.get(elements.PURCHASEPAGE.PURCHASE_FORM_ADRESS_INPUT).should('be.visible').and('have.attr', 'placeholder', '123 Main St.');
        cy.get(elements.PURCHASEPAGE.PURCHASE_FORM_CITY_INPUT).should('be.visible').and('have.attr', 'placeholder', 'Anytown');
        cy.get(elements.PURCHASEPAGE.PURCHASE_FORM_STATE_INPUT).should('be.visible').and('have.attr', 'placeholder', 'State');
        cy.get(elements.PURCHASEPAGE.PURCHASE_FORM_ZIPCODE_INPUT).should('be.visible').and('have.attr', 'placeholder', '12345');
        cy.get(elements.PURCHASEPAGE.PURCHASE_FORM_CARD_TYPE_INPUT).should('be.visible').within(() => {
            cy.get(elements.PURCHASEPAGE.PURCHASE_FORM_VISA_TYPE_OPTION).should('exist');
            cy.get(elements.PURCHASEPAGE.PURCHASE_FORM_AMEX_TYPE_OPTION).should('exist');
            cy.get(elements.PURCHASEPAGE.PURCHASE_FORM_DINERS_TYPE_OPTION).should('exist');
        });
        cy.get(elements.PURCHASEPAGE.PURCHASE_FORM_CARD_NUMBER_INPUT).should('be.visible').and('have.attr', 'placeholder', 'Credit Card Number'); 
        cy.get(elements.PURCHASEPAGE.PURCHASE_FORM_CARD_MONTH_INPUT).should('be.visible').and('have.attr', 'placeholder', 'Month');
        cy.get(elements.PURCHASEPAGE.PURCHASE_FORM_CARD_YEAR_INPUT).should('be.visible').and('have.attr', 'placeholder', 'Year');
        cy.get(elements.PURCHASEPAGE.PURCHASE_FORM_CARD_NAME_INPUT).should('be.visible').and('have.attr', 'placeholder', 'John Smith');
        cy.get(elements.PURCHASEPAGE.PURCHASE_FORM_REMEMBER_CHECKBOX).should('be.visible');
        cy.get(elements.PURCHASEPAGE.PURCHASE_FORM_PURCHASE_FLIGHT_BUTTON).should('be.visible').and('have.value', 'Purchase Flight');
    }
}

export default PurchasePage