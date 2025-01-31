@sortItemsByLowestPrice
Feature: Sorting items by price
  As a user
  I want to sort the items by "Lowest Price"
  So that I can find the cheapest items first

  Background: 
    Given I navigate to the login page
    When I enter "standard_user" as the username
    And I enter "secret_sauce" as the password
    And I click the login button

  @sort
  Scenario: Sort items by lowest price
    And I select Price (low to high) from the sorting dropdown
    Then the items should be displayed in ascending order of price
