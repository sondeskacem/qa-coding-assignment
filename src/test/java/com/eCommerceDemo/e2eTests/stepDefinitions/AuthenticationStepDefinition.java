package com.eCommerceDemo.e2eTests.stepDefinitions;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.eCommerceDemo.e2eTests.pages.AuthenticationPage;
import com.eCommerceDemo.e2eTests.utils.CommonMethods;
import com.eCommerceDemo.e2eTests.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthenticationStepDefinition extends CommonMethods {
	public WebDriver driver;
	private AuthenticationPage authenticationPage;
	private CommonMethods commonMethods = new CommonMethods();

	public AuthenticationStepDefinition() {
		driver = Setup.driver;
		authenticationPage = new AuthenticationPage(driver);
	}

	@Given("^I navigate to the login page$")
	public void iNavigateToTheLoginPage() throws Throwable {
		commonMethods.openApplicationWithConfigFile("url_test");
	}

	@When("^I enter \"([^\"]*)\" as the username$")
	public void iEnterAsTheUsername(String name) throws Throwable {
		PageFactory.initElements(driver, AuthenticationPage.class);
		logger.info("Entering the username: " + name);
		authenticationPage.fillUserName(name);
	}

	@When("^I enter \"([^\"]*)\" as the password$")
	public void iEnterAsThePassword(String password) throws Throwable {
		logger.info("Entering the password.");
		authenticationPage.fillPassword(password);
	}

	@When("^I click the login button$")
	public void iClickTheLoginButton() throws Throwable {
		logger.info("Clicking the login button.");
		authenticationPage.clickButtonLogin();
		// ✅ Added sleep for testing purposes only (to observe execution)
		Thread.sleep(5000);
	}

	@Then("^I should be redirected to the inventory page$")
	public void iShouldSeeTheInventoryPage() throws Throwable {
		assertTrue("User is not on the inventory page!", driver.getCurrentUrl().contains("inventory.html"));
		logger.info("Successfully redirected to the inventory page.");
		// ✅ Added sleep for testing purposes only (to observe execution)
		Thread.sleep(2000);
	}

	@Then("^I should see the inventory list$")
	public void iShouldSeeTheInventoryList() throws Throwable {

		assertTrue(driver.getCurrentUrl().contains("inventory.html"));
		logger.info("Inventory list is displayed.");
	}

	@When("^I leave the \"([^\"]*)\" field empty$")
	public void iLeaveFieldEmpty(String field) throws Throwable {
		logger.info("Leaving " + field + " field empty.");
		authenticationPage.leaveFieldEmpty(field);
		// ✅ Added sleep for testing purposes only (to observe execution)
		Thread.sleep(2000);
	}

	@Then("^I should see an error message \"([^\"]*)\"$")
	public void iShouldSeeAnErrorMessage(String expectedErrorMessage) throws Throwable {
		logger.info("Verifying error message: " + expectedErrorMessage);
		authenticationPage.verifyErrorMessage(expectedErrorMessage);
	}
}
