package com.eCommerceDemo.e2eTests.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import java.util.List;
import java.util.stream.Collectors;

public class VerifyCartItemsPage {

    /* Locators */
    final static String CART_BUTTON_CLASS_NAME = "shopping_cart_link";
    final static String CART_ITEM_CLASS_NAME = "cart_item";
    final static String CART_ITEM_NAME_CLASS = "inventory_item_name";
    final static String CART_ITEM_PRICE_CLASS = "inventory_item_price";
    final static String CART_ITEM_QUANTITY_CLASS = "cart_quantity";

    /* FindBy */
    @FindBy(how = How.CLASS_NAME, using = CART_BUTTON_CLASS_NAME)
    private WebElement cartButton;
    
    @FindBy(how = How.CLASS_NAME, using = CART_ITEM_CLASS_NAME)
    private List<WebElement> cartItems;

    /* Constructor */
    public VerifyCartItemsPage() {
        PageFactory.initElements(com.eCommerceDemo.e2eTests.utils.Setup.driver, this);
    }

    /* Methods */

    // Navigate to the cart page
    public void openCartPage() {
        cartButton.click();
    }

    // Get the list of item names in the cart
    public List<String> getCartItemNames() {
        return cartItems.stream()
                .map(item -> item.findElement(By.className(CART_ITEM_NAME_CLASS)).getText())
                .collect(Collectors.toList());
    }

    // Get the list of item prices in the cart
    public List<String> getCartItemPrices() {
        return cartItems.stream()
                .map(item -> item.findElement(By.className(CART_ITEM_PRICE_CLASS)).getText())
                .collect(Collectors.toList());
    }

    // Get the list of item quantities in the cart
    public List<String> getCartItemQuantities() {
        return cartItems.stream()
                .map(item -> item.findElement(By.className(CART_ITEM_QUANTITY_CLASS)).getText())
                .collect(Collectors.toList());
    }
}
