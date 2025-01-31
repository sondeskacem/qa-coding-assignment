@authentication
Feature: Authentication - EcommerceDemoSite
  As a user
  I want to log into the site
  So that I can access my shopping cart and complete a purchase

  @authValidCredentials
  Scenario: Successful login with valid credentials
    Given I navigate to the login page
    When I enter "standard_user" as the username
    And I enter "secret_sauce" as the password
    And I click the login button
    Then I should see the inventory page

  @authInvalidCredentials
  Scenario: Unsuccessful login with invalid credentials
    Given I navigate to the login page
    When I enter "invalid_user" as the username
    And I enter "wrong_password" as the password
    And I click the login button
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"

  @authEmptyUsername
  Scenario: Unsuccessful login with empty username
    Given I navigate to the login page
    When I leave the "Username" field empty
    And I enter "secret_sauce" as the password
    And I click the login button
    Then I should see an error message "Epic sadface: Username is required"

  @authEmptyPassword
  Scenario: Unsuccessful login with empty password
    Given I navigate to the login page
    When I enter "standard_user" as the username
    And I leave the "Password" field empty
    And I click the login button
    Then I should see an error message "Epic sadface: Password is required"

  @authEmptyUsernamePassword
  Scenario: Unsuccessful login with empty username and password
    Given I navigate to the login page
    When I leave the "Username" field empty
    And I leave the "Password" field empty
    And I click the login button
    Then I should see an error message "Epic sadface: Username is required"
