Feature: Search Flights

Scenario Outline: Verify an user can search for and view flight details correctly
Given I am on the "HomePage"
When I select a "<departureCity>" and a "<destinationCity>" from the dropdown menus  
And I click the "Find Flights" button
Then I should be on the "ReservePage"
And I should see a list of flights for the route "<departureCity>" to "<destinationCity>" 
And Each flight should have the Flight number
And Each flight should have the Airline
And Each flight should have the Depart Time
And Each flight should have the Arrive Time
And Each flight should have the Flight price

Examples:
      | departureCity | destinationCity |
      | Paris         | Rome            |