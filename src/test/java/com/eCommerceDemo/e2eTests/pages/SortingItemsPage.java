package com.eCommerceDemo.e2eTests.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

public class SortingItemsPage {

	/*Locators*/
	final static String PRODUCT_SORT_DROPDOWNLIST_CLASSNAME = "product_sort_container";


	/*FindBy*/
	@FindBy(how = How.CLASS_NAME, using = PRODUCT_SORT_DROPDOWNLIST_CLASSNAME)
	public static WebElement productSortContainer;

	
	/*Methods*/
	

	public void selectPriceLowToHigh() {
		 Select select = new Select(productSortContainer);
		  select.selectByValue("lohi");
	}
	public static boolean isSortedAscending(List<Double> list) {
      for (int i = 0; i < list.size() - 1; i++) {
          if (list.get(i) > list.get(i + 1)) {
              return false;
         }
      }
      return true;
  }
}
