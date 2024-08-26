import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../e2e/pages/homePage/HomePage'
import HomePage from '../../e2e/pages/reservePage/ReservePage'

const homePage = new HomePage()
const reservePage = new ReservePage()

Given('I am on the {string}', (page) => {
  if (page === "HomePage") {
    homePage.openHomePage()
  }
});

When('I select a {string} and a {string} from the dropdown menus', (departureCity, destinationCity) => {
  homePage.selectCities(departureCity, destinationCity)
});

When('I click the {string} button', (buttonName) => {
  if(buttonName === "Find Flights"){
    homePage.clickFindFlightsButton()
  }
});

Then('I should be on the {string}', (page) => {
  if (page === "ReservePage") {
    //cy.url().should('include', '/reserve.php');  // Asegúrate de que la URL contenga la parte correcta que indica que estás en la página de reservas
    reservePage.validateReservePage()
  }
});