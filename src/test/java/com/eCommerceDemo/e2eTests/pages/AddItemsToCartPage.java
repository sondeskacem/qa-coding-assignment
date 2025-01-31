package com.eCommerceDemo.e2eTests.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.WebDriver;
import java.util.List;

public class AddItemsToCartPage {

    /* Locators */
    private static final String SHOPPING_CART_BADGE_CLASS_NAME = "shopping_cart_badge";
    private static final String ITEM_BUTTONS_CLASS = "btn_inventory"; // All "Add to cart" buttons

    /* FindBy */
    @FindBy(how = How.CLASS_NAME, using = SHOPPING_CART_BADGE_CLASS_NAME)
    private WebElement shoppingCartBadge;

    @FindBy(how = How.CLASS_NAME, using = ITEM_BUTTONS_CLASS)
    private List<WebElement> addToCartButtons; // List of "Add to Cart" buttons

    // ✅ Constructor to initialize elements
    public AddItemsToCartPage(WebDriver driver) {
        PageFactory.initElements(com.eCommerceDemo.e2eTests.utils.Setup.driver, this);

    }

    // Returns the number of items currently in the cart
    public int getCartItemCount() {
        try {
            return Integer.parseInt(shoppingCartBadge.getText());
        } catch (Exception e) {
            return 0; // If the badge is not found, the cart is empty
        }
    }

    // Checks if an item is already in the cart (button text changes to "Remove")
    public boolean isItemInCart(WebElement itemButton) {
        return itemButton.getText().equalsIgnoreCase("Remove");
    }

    // Adds an available item to the cart
    public void addAvailableItemToCart() {
        if (addToCartButtons == null || addToCartButtons.isEmpty()) {
            throw new IllegalStateException("No available 'Add to Cart' buttons found!");
        }

        for (WebElement button : addToCartButtons) {
            if (!isItemInCart(button)) {
                button.click();
                System.out.println("✅ Added a new available item to the cart.");
                break; // Adds only one item and stops
            }
        }
    }

    public WebElement getShoppingCartBadge() {
        return shoppingCartBadge;
    }
}
