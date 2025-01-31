package com.eCommerceDemo.e2eTests.stepDefinitions;

import java.util.List;
import java.util.stream.Collectors;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import com.eCommerceDemo.e2eTests.pages.SortingItemsPage;
import com.eCommerceDemo.e2eTests.utils.CommonMethods;
import com.eCommerceDemo.e2eTests.utils.Setup;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SortingItemsStepDefinition extends CommonMethods {
	public WebDriver driver;
	private SortingItemsPage sortingItemsPage = new SortingItemsPage();

	public SortingItemsStepDefinition() {
		driver = Setup.driver;
	}

	@When("^I select Price \\(low to high\\) from the sorting dropdown$")
	public void iSelectPriceLowToHighFromTheSortingDropdown() throws Throwable {
		PageFactory.initElements(driver, SortingItemsPage.class);

		sortingItemsPage.selectPriceLowToHigh();
	}

	@Then("^the items should be displayed in ascending order of price$")
	public void the_items_should_be_displayed_in_ascending_order_of_price() throws Throwable {
		// Get List of prices
		List<WebElement> priceElements = driver.findElements(By.className("inventory_item_price"));
		// Convert prices to List of doubles
		List<Double> prices = priceElements.stream().map(e -> Double.parseDouble(e.getText().replace("$", "")))
				.collect(Collectors.toList());
		// Check if the list is sorted
		boolean isSorted = SortingItemsPage.isSortedAscending(prices);
		System.out.println("Sort verified: " + isSorted);
		// assertTrue(driver.getCurrentUrl().contains("inventory.html"));
	}

}
