package com.eCommerceDemo.e2eTests.utils;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CommonMethods {

	public static WebDriver driver;
	public static Properties prop;
	public CommonMethods() {
		driver = Setup.driver;
	}
	
	protected static final Logger logger = LoggerFactory.getLogger(AbstractPage.class);

	public void buttonScrollBottom() {
		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,400)", "");
	}

	public void openApplicationWithConfigFile(String url) throws IOException {
		prop = new Properties();
		FileInputStream fis = new FileInputStream("src/test/resources/configs/config.properties");
		prop.load(fis);
		driver.get(prop.getProperty(url));
	}

	public void uploadFileWithRobot(String imagePath) {

		StringSelection stringSelection = new StringSelection(imagePath);
		Clipboard clipBoard = Toolkit.getDefaultToolkit().getSystemClipboard();
		clipBoard.setContents(stringSelection, null);

		Robot robot = null;
		try {
			robot = new Robot();
		}catch(AWTException e) {
			e.printStackTrace();
		}

		robot.delay(250);
		robot.keyPress(KeyEvent.VK_ENTER);
		robot.keyRelease(KeyEvent.VK_ENTER);
		robot.keyPress(KeyEvent.VK_CONTROL);
		robot.keyPress(KeyEvent.VK_V);
		robot.keyRelease(KeyEvent.VK_V);
		robot.keyRelease(KeyEvent.VK_CONTROL);
		robot.keyPress(KeyEvent.VK_ENTER);
		robot.delay(150);
		robot.keyRelease(KeyEvent.VK_ENTER);
	}
}


