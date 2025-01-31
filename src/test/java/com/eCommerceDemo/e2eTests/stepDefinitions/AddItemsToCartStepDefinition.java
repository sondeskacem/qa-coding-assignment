package com.eCommerceDemo.e2eTests.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import com.eCommerceDemo.e2eTests.pages.AddItemsToCartPage;
import com.eCommerceDemo.e2eTests.utils.Setup;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddItemsToCartStepDefinition {
    private WebDriver driver;
    private AddItemsToCartPage addItemsToCartPage;

    // ✅ Constructor to initialize the page object
    public AddItemsToCartStepDefinition() {
        this.driver = Setup.driver; // ✅ Use the existing WebDriver instance
        this.addItemsToCartPage = new AddItemsToCartPage(driver);
        PageFactory.initElements(driver, addItemsToCartPage);
    }

    @When("^I add \"([^\"]*)\" to the shopping cart$")
    public void i_add_item_to_the_shopping_cart(String itemName) {
        int initialCartCount = addItemsToCartPage.getCartItemCount();

        switch (itemName.toLowerCase()) {
            case "item a":
            case "item b":
                addItemsToCartPage.addAvailableItemToCart();
                System.out.println("✅ " + itemName + " has been successfully added to the cart.");
                break;
            default:
                throw new IllegalArgumentException("⚠️ Item not recognized: " + itemName);
        }

        int finalCartCount = addItemsToCartPage.getCartItemCount();
        System.out.println("🛒 Cart badge count after adding " + itemName + ": " + finalCartCount);

        Assert.assertTrue("❌ Item was not added!", finalCartCount > initialCartCount);
    }

    @Then("^the shopping cart badge should display \"([^\"]*)\"$")
    public void the_shopping_cart_badge_should_display(String expectedCount) {
        try {
            String actualCount = addItemsToCartPage.getShoppingCartBadge().getText();
            System.out.println("✅ Cart badge is displaying: " + actualCount);
            Assert.assertEquals("❌ Cart badge count mismatch!", expectedCount, actualCount);

            // ✅ Added sleep for testing purposes only (to observe execution)
            Thread.sleep(5000);
            
        } catch (NoSuchElementException e) {
            Assert.fail("⚠️ Shopping cart badge not found. The cart might be empty!");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
