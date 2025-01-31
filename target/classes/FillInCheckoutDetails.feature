@fillInCheckoutDetails
Feature: Fill in checkout details

  Background: 
    Given I navigate to the login page
    When I enter "standard_user" as the username
    And I enter "secret_sauce" as the password
    And I click the login button

  @fillIn
  Scenario: User fills in required checkout details
    Given I have items in my cart
    And I am on the checkout information page
    When I fill in the First Name "John"
    And I fill in the Last Name "Doe"
    And I fill in the Zip/Postal Code "12345"
    And I click "Continue"
    Then I should be redirected to the Checkout Overview page
