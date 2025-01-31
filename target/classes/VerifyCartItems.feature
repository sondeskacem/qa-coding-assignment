@verifyCartItems
Feature: Shopping Cart functionality

  Background: 
    Given I navigate to the login page
    When I enter "standard_user" as the username
    And I enter "secret_sauce" as the password
    And I click the login button
     When I add "Item A" to the shopping cart
    And I add "Item B" to the shopping cart
  @verify
  Scenario: Verify items in the shopping cart
    When I visit the shopping cart page
    Then I should see "Item A" and "Item B" listed in the cart
    And the item names, quantities, and prices should match those in the cart
