import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../e2e/pages/homePage/HomePage'
import ReservePage from '../../e2e/pages/reservePage/ReservePage'
import PurchasePage from '../../e2e/pages/purchasePage/PurchasePage'

const homePage = new HomePage()
const reservePage = new ReservePage()
const purchasePage = new PurchasePage()

let flightData = {};
let totalCost;

Given('I am on the {string}', (page) => {
  if (page === "HomePage") {
    homePage.openHomePage()
  }
  if(page === "ReservePage"){
    reservePage.openReservePage()
  }
});

Given('The route selected is {string} to {string}', (departureCity, destinationCity) => {
  homePage.openHomePage()
  homePage.selectCities(departureCity, destinationCity)
  homePage.clickFindFlightsButton()
});

Then('I should see the reservation message to the route {string} to {string}', (departureCityIATA, destinationCityIATA) => {
  purchasePage.validateIataInTittleMessage(departureCityIATA, destinationCityIATA)
});

When('I select a {string} and a {string} from the dropdown menus', (departureCity, destinationCity) => {
  homePage.selectCities(departureCity, destinationCity)
});

When('I click the {string} button', (buttonName) => {
  if(buttonName === "Find Flights"){
    homePage.clickFindFlightsButton()
  }
  if(buttonName === "Choose This Flight"){
    flightData = reservePage.getFlightData(0)
    reservePage.clickChooseTheseFlightButton(0)
    totalCost = purchasePage.getTotalCost()
  }
});

Then('I should be on the {string}', (page) => {
  if (page === "ReservePage") {
    reservePage.validateReservePage()
  }
  if (page === "PurchasePage") {
    purchasePage.validatePurchasePage()
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

Then('Reservation {string} should match the selected flight data', (dataToValidate) => {
  purchasePage.validateReservationDataMatchSelectedFlightData(dataToValidate, flightData)
});

Then('Total Cost should be the sum of Price and Arbitrary Fees and Taxes', () => {
  purchasePage.validateTotalCost()
});

Then('Purchase form is displayed', () => {
  purchasePage.validatePurchaseFormIsVisible()
});

When('I type {string} in the {string} inputBox', (inputValue, inputBox) => {
  purchasePage.inputDataIntoInputBox(inputValue, inputBox)
})