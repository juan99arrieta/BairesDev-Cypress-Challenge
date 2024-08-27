Feature: Purchase Flight

Scenario Outline: Verify a user can purchase a chosen flight in a route 
    Given I am on the "HomePage"
    When I select a "<departureCity>" and a "<destinationCity>" from the dropdown menus
    And I click the "Find Flights" button
    And I click the "Choose This Flight" button
    And I type "<name>" in the name inputBox
    And I type "<adress>" in the adress inputBox
    And I type "<city>" in the city inputBox
    And I type "<zipCode>" in the zip code inputBox
    And I select "<cardType>" from the card type drop list
    And I type "<cardNumber>" in the card number inputBox
    And I type "<cardMonth>" in the card month inputBox
    And I type "<cardYear>" in the card year inputBox
    And I type "<cardName>" in the card name inputBox
    And I click the "Purchase Flight" button
    Then I should be on the "confirmationPage"
    And Confirmation data table should be displayed
    And Confirmation "amount" should match the reservation data
    And Confirmation "cardNumber" should match the reservation data

Examples:
      | departureCity | destinationCity | departureCityIATA | destinationCityIATA |
      | Paris         | Rome            | TLV               | SFO                 |