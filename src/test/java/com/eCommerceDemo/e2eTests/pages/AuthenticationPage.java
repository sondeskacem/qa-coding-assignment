package com.eCommerceDemo.e2eTests.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import static org.junit.Assert.assertEquals;

public class AuthenticationPage {
    private WebDriver driver;

    /* Locators */
    final static String USERNAME_ID = "user-name";
    final static String USERPASSWORD_ID = "password";
    final static String BUTTON_LOGIN_ID = "login-button";
    final static String ERROR_MESSAGE_CLASS = ".error-message-container";

    /* FindBy */
    @FindBy(how = How.ID, using = USERNAME_ID)
    public WebElement userName;

    @FindBy(how = How.ID, using = USERPASSWORD_ID)
    public WebElement userPassword;

    @FindBy(how = How.ID, using = BUTTON_LOGIN_ID)
    public WebElement buttonLogin;

    /* Constructor */
    public AuthenticationPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    /* Methods */
    public void fillUserName(String name) {
        userName.clear();
        userName.sendKeys(name);
    }

    public void fillPassword(String password) {
        userPassword.clear();
        userPassword.sendKeys(password);
    }

    public void clickButtonLogin() {
        buttonLogin.click();
    }

    // ✅ Method to leave fields empty
    public void leaveFieldEmpty(String field) {
        if (field.equalsIgnoreCase("Username")) {
            userName.clear();
        } else if (field.equalsIgnoreCase("Password")) {
            userPassword.clear();
        }
    }

    // ✅ Method to verify error messages
    public void verifyErrorMessage(String expectedErrorMessage) {
        String actualErrorMessage = driver.findElement(By.cssSelector(ERROR_MESSAGE_CLASS)).getText();
        assertEquals("Error message does not match!", expectedErrorMessage, actualErrorMessage);
    }
}
