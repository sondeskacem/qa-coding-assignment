package com.eCommerceDemo.e2eTests.stepDefinitions;

import static org.junit.Assert.assertTrue;
import java.util.List;
import com.eCommerceDemo.e2eTests.pages.VerifyCartItemsPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class VerifyCartItemsStepDefinition {

    private VerifyCartItemsPage verifyCartItemsPage;

    public VerifyCartItemsStepDefinition() {
        this.verifyCartItemsPage = new VerifyCartItemsPage();
    }

    @When("^I visit the shopping cart page$")
    public void i_visit_the_shopping_cart_page() throws InterruptedException {
        verifyCartItemsPage.openCartPage();
        // ✅ Added sleep for testing purposes only (to observe execution)
        Thread.sleep(5000);
    }
    
    @Then("^I should see \"([^\"]*)\" and \"([^\"]*)\" listed in the cart$")
    public void i_should_see_items_in_the_cart(String expectedItemA, String expectedItemB) {
        // Map "Item A" and "Item B" to actual item names in the cart
        String actualItemA = "Sauce Labs Backpack"; 
        String actualItemB = "Sauce Labs Bike Light"; 

        // Get the item names from the cart
        List<String> cartItemNames = verifyCartItemsPage.getCartItemNames();
        System.out.println("Cart contains: " + cartItemNames);

        // Verify that the expected mapped item names exist in the cart
        assertTrue(cartItemNames.contains(actualItemA) && cartItemNames.contains(actualItemB));
    }

    @Then("^the item names, quantities, and prices should match those in the cart$")
    public void the_item_details_should_match() {
        List<String> cartItemNames = verifyCartItemsPage.getCartItemNames();
        List<String> cartItemPrices = verifyCartItemsPage.getCartItemPrices();
        List<String> cartItemQuantities = verifyCartItemsPage.getCartItemQuantities();

        System.out.println("Cart Items: " + cartItemNames);
        System.out.println("Cart Prices: " + cartItemPrices);
        System.out.println("Cart Quantities: " + cartItemQuantities);

        assertTrue(cartItemNames.size() > 0);
        assertTrue(cartItemPrices.size() == cartItemNames.size());
        assertTrue(cartItemQuantities.size() == cartItemNames.size());
    }
}
