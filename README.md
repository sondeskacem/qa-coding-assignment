# 🚲 eCommerce Demo Site Test Automation

## 🚀 Overview

This project provides a test automation framework using **Selenium WebDriver**, **Cucumber**, and **Java** for automating UI tests on an eCommerce demo site. It follows a **Behavior-Driven Development (BDD)** approach, making test scenarios more readable and maintainable. The reporting is handled using **Extent Reports** for enhanced test result visualization.

## ✨ Key Features

- 💚 **Factory Navigator:** Enables execution on multiple browsers:
  - 🟢 **CHROME**
  - 🔶 **FIREFOX**
  - 🟠 **IE**
  - 🔣 **EDGE**
- 🔖 **Page Object Model (POM):** Enhances test structure and maintainability.
- 👕 **Selenium WebDriver:** Ensures robust web automation.
- 🏢 **JUnit:** Used as the test runner.
- 📺 **Extent Reports:** Provides visually rich test reports.
- 🏦 **Maven Integration:** Simplifies dependency management and test execution.

## ⚙️ Prerequisites

Before running the tests, ensure you have the following installed:

- ☕ **JDK 1.8+** (Java classpath should be set)
- 🔧 **Maven** (Ensure `.m2` classpath is configured)
- 🖥 **Eclipse IDE** (or any Java IDE)
- 📌 **Eclipse Plugins for:**
  - Maven
  - Cucumber
- 🌐 **Browser Driver:** (Ensure the required browser driver is installed and configured in the system path)

## 🏰 Framework Architecture

This automation framework follows the **Page Object Model (POM)** design pattern, which improves test maintainability and reduces code duplication. The structure includes:

- **Feature Files (`src/spec/feature`)** 🧀 Contains test scenarios written in Gherkin syntax.
- **Step Definitions (`stepDefinitions`)** 🤷️ Implements the test steps defined in the feature files.
- **Page Objects (`pageObjects`)** 📚 Encapsulates web elements and page interactions to promote reusability.
- **Reports (`target/cucumber-reports`)** 📊 Stores test execution results generated using Extent Reports.

### 🏃️️ Browser Factory & Execution

The framework includes a **Factory Navigator** that allows execution on multiple browsers:

- 🟢 **CHROME**
- 🔶 **FIREFOX**
- 🟠 **IE**
- 🔣 **EDGE**

The browser selection is configurable, and tests can be executed in parallel for efficiency.

### 🏃️️ Test Runner

The test scenarios are executed using a **Test Runner** class, which integrates with JUnit to trigger test execution based on tags, configurations, and feature files. You can run tests using:

- **Run a single feature file:**
  ```java
  tags = {"@verifyCartItems"};
  ```
- **Run multiple feature files:**
  ```java
  tags = {"@authValidCredentials, @sortItemsByLowestPrice, @addItemsToCart, @verifyCartItems"};
  ```
- **Run all feature files:**
  ```java
  tags = {""};
  ```

### ⚙️ Setup & Teardown

- **Before any test:** The `Setup` class initializes the WebDriver instance and launches the configured browser.
- **After each scenario:** The browser is closed, and if a test case fails, a screenshot is automatically captured for debugging.

## 🖥 Technologies & Environments

| Technology            | Version  |
| --------------------- | -------- |
| 🔍 Selenium WebDriver | 3.141.59 |
| 🥒 Cucumber           | 1.2.5    |
| ⚖️ JUnit              | 4.11     |
| 📊 ExtentReports      | 3.1.3    |
| 💻 Eclipse            | 2019-12  |
| ☕ JDK                 | 1.8      |

## 🏃️️ Test Execution

### 📌 Pre-Requisites

1. **Download and Configure Apache Maven**
   - Install and Unzip the Apache Maven package.
   - Set up the environment variable for Maven (user/System variables).
2. **Download and Configure JDK**
   - Install JDK for windows.
   - Set up the environment variable for Java (user/System variables).
3. **Download and Configure Driver**
   - Install WebDriver (Exp: ChromeDriver) for windows (be sure you have the same version as your browser).
   - Put the WebDriver (Exp: ChromeDriver) in the following path: /eCommerceDemoSiteProject/src/test/resources/drivers 
4. **Run Tests via Command Line**
   Execute the following commands in the terminal:
      - mvn clean (clean project)
      - mvn install (install dependencies/Plugins & launch tests (if skip tests = false) 
      - mvn test
Alternatively, you can run tests by right-clicking on the **TestRunner.java** class and selecting **Run As > JUnit Test**.

## 📊 Test Reporting

- 📝 Test results are generated in an **Extent Report** named `eCommerceDemoSite.html`.
- 💾 The report can be found in: `target/cucumber-reports`

📌 After execution, open `eCommerceDemoSite.html` in a browser to view the test results.

---

🎯 This framework ensures efficient, scalable, and maintainable UI test automation, integrating seamlessly into CI/CD pipelines.

