@addItemsToCart
Feature: Adding items to Shopping cart
  As a user
  I want to add items to my shopping cart
  So that I can purchase them later

  Background: 
    Given I navigate to the login page
    When I enter "standard_user" as the username
    And I enter "secret_sauce" as the password
    And I click the login button

  @add
  Scenario: Add tow items to the cart
    When I add "Item A" to the shopping cart
    And I add "Item B" to the shopping cart
    Then the shopping cart badge should display "2"