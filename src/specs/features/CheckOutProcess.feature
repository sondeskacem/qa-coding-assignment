@completeCheckOutProcess
Feature: Completing a purchase
  As a user
  I want to complete the checkout process
  So that I can purchase the items in my cart

  Background: 
    Given I navigate to the login page
    When I enter "standard_user" as the username
    And I enter "secret_sauce" as the password
    And I click the login button
    When I add "Item A" to the shopping cart
    And I add "Item B" to the shopping cart

  @completecheckout
  Scenario: Complete checkout successfully
    Given I have added "Item A" and "Item B" to the shopping cart
    When I visit the shopping cart page
    And I am on the checkout information page
    When I fill in the First Name "John"
    And I fill in the Last Name "Doe"
    And I fill in the Zip/Postal Code "12345"
    And I click "Continue"
    Then I should be redirected to the Checkout Overview page
    When I review the items in the overview
    Then I should see "Item A" and "Item B"
    And the total amount should be calculated as "item total + tax"
    When I click "Finish"
    Then I should see the "Thank You" page
    And the shopping cart should be empty
