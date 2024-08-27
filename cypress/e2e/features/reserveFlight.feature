Feature: Reserve Flight

Scenario Outline: Verify an user can reserve a chosen flight in a route 
Given The route selected is "<departureCity>" to "<destinationCity>"
And I am on the "ReservePage"
When I click the "Choose This Flight" button
Then I should be on the "PurchasePage"
And I should see the reservation message to the route "<departureCityIATA>" to "<destinationCityIATA>"
And Reservation "airline" should match the selected flight data
And Reservation "flightNumber" should match the selected flight data
And Reservation "price" should match the selected flight data
And Total Cost should be the sum of Price and Arbitrary Fees and Taxes 
And Purchase form is displayed

Examples:
      | departureCity | destinationCity | departureCityIATA | destinationCityIATA |
      | Paris         | Rome            | TLV               | SFO                 |