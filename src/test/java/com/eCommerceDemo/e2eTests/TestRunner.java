package com.eCommerceDemo.e2eTests;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/specs/features" },
		// glue = {""}, This is useful if your step definitions are located in a separate package
		plugin = { "pretty", "html:target/cucumber-html-report", "json:target/cucumber.json",
				"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/eCommerceDemoSite.html" }, 
				snippets = SnippetType.CAMELCASE, 
				//tags = {"@verifyCartItems"}, 
				//tags = {"@authentication,@sortItemsByLowestPrice,@addItemsToCart,@verifyCartItems"} //run multiple feature
				tags = {}, //run all feature
				monochrome = true)
				

public class TestRunner {

	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File("src/test/resources/configs/extent-config.xml"));
	}
}