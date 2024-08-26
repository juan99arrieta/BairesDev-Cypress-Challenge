import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../e2e/pages/homePage/HomePage'
import ReservePage from '../../e2e/pages/reservePage/ReservePage'

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
    reservePage.validateReservePage()
  }
});

Then('I should see a list of flights for the route {string} to {string}', (departureCity, destinationCity) => {
  reservePage.validateCitiesInTittleMessage(departureCity, destinationCity)
  reservePage.validateFlightsListIsDisplayed()
});

Then('Each flight should have the Flight number', () => {
  reservePage.validateFlightNumberInFlightList()
});

Then('Each flight should have the Airline', () => {
  reservePage.validateAirlineInFlightList()
});

Then('Each flight should have the Depart Time', () => {
  reservePage.validateDepartTimeInFlightList()
});

Then('Each flight should have the Arrive Time', () => {
  reservePage.validateArriveTimeInFlightList()
});

Then('Each flight should have the Flight price', () => {
  reservePage.validateFlightPriceInFlightList()
});
