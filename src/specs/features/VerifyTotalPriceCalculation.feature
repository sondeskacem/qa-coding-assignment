@verifyTotalPrice
Feature: Total price calculation

  @price
  Scenario: Verify total price and tax calculation in the checkout overview page
    Given I am on the checkout overview page
    When I have "Item A" priced at $10 and "Item B" priced at $20
    Then the item total should be $30
    And the tax should be $2.40 (8% of $30)
    And the total price should be $32.40
