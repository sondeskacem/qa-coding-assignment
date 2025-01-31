@validateCheckoutFileds
Feature: Checkout information validation
  I want to use this template for my feature file

  Background: 
    Given I navigate to the login page
    When I enter "standard_user" as the username
    And I enter "secret_sauce" as the password
    And I click the login button
    And I add "Item A" to the shopping cart
    And I add "Item B" to the shopping cart
    And I visit the shopping cart page

  @checkoutFileds
  Scenario: Validate required fields in the checkout form
    And I am on the checkout information page
    When I leave the "First Name" field empty
    And I click "Continue"
    Then I should see an error message "First name is required"
    When I leave the "Last Name" field empty
    And I click "Continue"
    Then I should see an error message "Last name is required"
    When I leave the "Zip/Postal Code" field empty
    And I click "Continue"
    Then I should see an error message "Zip/Postal Code is required"
