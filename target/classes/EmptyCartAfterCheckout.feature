@emptyCartAfterCheckout
Feature: Cart reset after checkout
  As a user
  I want to check that the shopping cart is reset after checkout

  @emptyCart
  Scenario: Verify the cart is empty after completing checkout
    Given I have completed the checkout process
    When I return to the inventory page
    Then the shopping cart badge should not be visible
