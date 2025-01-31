$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddItemsToCart.feature");
formatter.feature({
  "line": 2,
  "name": "Adding items to Shopping cart",
  "description": "As a user\r\nI want to add items to my shopping cart\r\nSo that I can purchase them later",
  "id": "adding-items-to-shopping-cart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@addItemsToCart"
    }
  ]
});
formatter.before({
  "duration": 2183166700,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \"standard_user\" as the username",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \"secret_sauce\" as the password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "AuthenticationStepDefinition.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 828935200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsTheUsername(String)"
});
formatter.result({
  "duration": 190149200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsThePassword(String)"
});
formatter.result({
  "duration": 161587500,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinition.iClickTheLoginButton()"
});
formatter.result({
  "duration": 5126476700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Add tow items to the cart",
  "description": "",
  "id": "adding-items-to-shopping-cart;add-tow-items-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@add"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I add \"Item A\" to the shopping cart",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I add \"Item B\" to the shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the shopping cart badge should display \"2\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Item A",
      "offset": 7
    }
  ],
  "location": "AddItemsToCartStepDefinition.i_add_item_to_the_shopping_cart(String)"
});
formatter.result({
  "duration": 208905900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item B",
      "offset": 7
    }
  ],
  "location": "AddItemsToCartStepDefinition.i_add_item_to_the_shopping_cart(String)"
});
formatter.result({
  "duration": 184709500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 40
    }
  ],
  "location": "AddItemsToCartStepDefinition.the_shopping_cart_badge_should_display(String)"
});
formatter.result({
  "duration": 5039033400,
  "status": "passed"
});
formatter.after({
  "duration": 781009100,
  "status": "passed"
});
formatter.uri("Authentication.feature");
formatter.feature({
  "line": 2,
  "name": "Authentication - EcommerceDemoSite",
  "description": "As a user\r\nI want to log into the site\r\nSo that I can access my shopping cart and complete a purchase",
  "id": "authentication---ecommercedemosite",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@authentication"
    }
  ]
});
formatter.before({
  "duration": 1532652900,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "authentication---ecommercedemosite;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@authValidCredentials"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"standard_user\" as the username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \"secret_sauce\" as the password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the inventory page",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthenticationStepDefinition.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 578453100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsTheUsername(String)"
});
formatter.result({
  "duration": 199422600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsThePassword(String)"
});
formatter.result({
  "duration": 147088000,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinition.iClickTheLoginButton()"
});
formatter.result({
  "duration": 5125771200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 741517500,
  "status": "passed"
});
formatter.before({
  "duration": 1580752400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Unsuccessful login with invalid credentials",
  "description": "",
  "id": "authentication---ecommercedemosite;unsuccessful-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@authInvalidCredentials"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter \"invalid_user\" as the username",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter \"wrong_password\" as the password",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see an error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthenticationStepDefinition.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 571912600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid_user",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsTheUsername(String)"
});
formatter.result({
  "duration": 189618900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrong_password",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsThePassword(String)"
});
formatter.result({
  "duration": 185314300,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinition.iClickTheLoginButton()"
});
formatter.result({
  "duration": 5108752200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 31
    }
  ],
  "location": "AuthenticationStepDefinition.iShouldSeeAnErrorMessage(String)"
});
formatter.result({
  "duration": 34509600,
  "status": "passed"
});
formatter.after({
  "duration": 699502300,
  "status": "passed"
});
formatter.before({
  "duration": 1523198500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Unsuccessful login with empty username",
  "description": "",
  "id": "authentication---ecommercedemosite;unsuccessful-login-with-empty-username",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@authEmptyUsername"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I leave the \"Username\" field empty",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter \"secret_sauce\" as the password",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see an error message \"Epic sadface: Username is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthenticationStepDefinition.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 517495400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 13
    }
  ],
  "location": "AuthenticationStepDefinition.iLeaveFieldEmpty(String)"
});
formatter.result({
  "duration": 2068674200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsThePassword(String)"
});
formatter.result({
  "duration": 161730600,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinition.iClickTheLoginButton()"
});
formatter.result({
  "duration": 5110844400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 31
    }
  ],
  "location": "AuthenticationStepDefinition.iShouldSeeAnErrorMessage(String)"
});
formatter.result({
  "duration": 53653100,
  "status": "passed"
});
formatter.after({
  "duration": 711490600,
  "status": "passed"
});
formatter.before({
  "duration": 1680572100,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Unsuccessful login with empty password",
  "description": "",
  "id": "authentication---ecommercedemosite;unsuccessful-login-with-empty-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@authEmptyPassword"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I enter \"standard_user\" as the username",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I leave the \"Password\" field empty",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see an error message \"Epic sadface: Password is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthenticationStepDefinition.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 555576500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsTheUsername(String)"
});
formatter.result({
  "duration": 213130200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 13
    }
  ],
  "location": "AuthenticationStepDefinition.iLeaveFieldEmpty(String)"
});
formatter.result({
  "duration": 2047211500,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinition.iClickTheLoginButton()"
});
formatter.result({
  "duration": 5097077700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 31
    }
  ],
  "location": "AuthenticationStepDefinition.iShouldSeeAnErrorMessage(String)"
});
formatter.result({
  "duration": 42582300,
  "status": "passed"
});
formatter.after({
  "duration": 703947800,
  "status": "passed"
});
formatter.before({
  "duration": 1536497900,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Unsuccessful login with empty username and password",
  "description": "",
  "id": "authentication---ecommercedemosite;unsuccessful-login-with-empty-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@authEmptyUsernamePassword"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I leave the \"Username\" field empty",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I leave the \"Password\" field empty",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see an error message \"Epic sadface: Username is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthenticationStepDefinition.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 527259700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 13
    }
  ],
  "location": "AuthenticationStepDefinition.iLeaveFieldEmpty(String)"
});
formatter.result({
  "duration": 2074702600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 13
    }
  ],
  "location": "AuthenticationStepDefinition.iLeaveFieldEmpty(String)"
});
formatter.result({
  "duration": 2065537100,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinition.iClickTheLoginButton()"
});
formatter.result({
  "duration": 5128637800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 31
    }
  ],
  "location": "AuthenticationStepDefinition.iShouldSeeAnErrorMessage(String)"
});
formatter.result({
  "duration": 38784200,
  "status": "passed"
});
formatter.after({
  "duration": 1167528800,
  "status": "passed"
});
formatter.uri("CheckOutProcess.feature");
formatter.feature({
  "line": 2,
  "name": "Completing a purchase",
  "description": "As a user\r\nI want to complete the checkout process\r\nSo that I can purchase the items in my cart",
  "id": "completing-a-purchase",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@completeCheckOutProcess"
    }
  ]
});
formatter.before({
  "duration": 1595158800,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \"standard_user\" as the username",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \"secret_sauce\" as the password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I add \"Item A\" to the shopping cart",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I add \"Item B\" to the shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "AuthenticationStepDefinition.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 560750100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsTheUsername(String)"
});
formatter.result({
  "duration": 176221700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsThePassword(String)"
});
formatter.result({
  "duration": 216062900,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinition.iClickTheLoginButton()"
});
formatter.result({
  "duration": 5137305700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item A",
      "offset": 7
    }
  ],
  "location": "AddItemsToCartStepDefinition.i_add_item_to_the_shopping_cart(String)"
});
formatter.result({
  "duration": 232180100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item B",
      "offset": 7
    }
  ],
  "location": "AddItemsToCartStepDefinition.i_add_item_to_the_shopping_cart(String)"
});
formatter.result({
  "duration": 171009800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Complete checkout successfully",
  "description": "",
  "id": "completing-a-purchase;complete-checkout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@completecheckout"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I have added \"Item A\" and \"Item B\" to the shopping cart",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I visit the shopping cart page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I am on the checkout information page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I fill in the First Name \"John\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I fill in the Last Name \"Doe\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I fill in the Zip/Postal Code \"12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click \"Continue\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be redirected to the Checkout Overview page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I review the items in the overview",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should see \"Item A\" and \"Item B\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "the total amount should be calculated as \"item total + tax\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click \"Finish\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see the \"Thank You\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "the shopping cart should be empty",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "VerifyCartItemsStepDefinition.i_visit_the_shopping_cart_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 691264500,
  "status": "passed"
});
formatter.uri("EmptyCartAfterCheckout.feature");
formatter.feature({
  "line": 2,
  "name": "Cart reset after checkout",
  "description": "As a user\r\nI want to check that the shopping cart is reset after checkout",
  "id": "cart-reset-after-checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@emptyCartAfterCheckout"
    }
  ]
});
formatter.before({
  "duration": 1543047100,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify the cart is empty after completing checkout",
  "description": "",
  "id": "cart-reset-after-checkout;verify-the-cart-is-empty-after-completing-checkout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@emptyCart"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have completed the checkout process",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I return to the inventory page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the shopping cart badge should not be visible",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 635787600,
  "status": "passed"
});
formatter.uri("FillInCheckoutDetails.feature");
formatter.feature({
  "line": 2,
  "name": "Fill in checkout details",
  "description": "",
  "id": "fill-in-checkout-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@fillInCheckoutDetails"
    }
  ]
});
formatter.before({
  "duration": 1489164600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \"standard_user\" as the username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter \"secret_sauce\" as the password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "AuthenticationStepDefinition.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 561525800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsTheUsername(String)"
});
formatter.result({
  "duration": 181237300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsThePassword(String)"
});
formatter.result({
  "duration": 177340700,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinition.iClickTheLoginButton()"
});
formatter.result({
  "duration": 5138247500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User fills in required checkout details",
  "description": "",
  "id": "fill-in-checkout-details;user-fills-in-required-checkout-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@fillIn"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I have items in my cart",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I am on the checkout information page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I fill in the First Name \"John\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I fill in the Last Name \"Doe\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I fill in the Zip/Postal Code \"12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click \"Continue\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should be redirected to the Checkout Overview page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 741223400,
  "status": "passed"
});
formatter.uri("SortingItems.feature");
formatter.feature({
  "line": 2,
  "name": "Sorting items by price",
  "description": "As a user\r\nI want to sort the items by \"Lowest Price\"\r\nSo that I can find the cheapest items first",
  "id": "sorting-items-by-price",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sortItemsByLowestPrice"
    }
  ]
});
formatter.before({
  "duration": 1513672600,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \"standard_user\" as the username",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \"secret_sauce\" as the password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "AuthenticationStepDefinition.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 550678100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsTheUsername(String)"
});
formatter.result({
  "duration": 192127200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsThePassword(String)"
});
formatter.result({
  "duration": 165343300,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinition.iClickTheLoginButton()"
});
formatter.result({
  "duration": 5131144100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Sort items by lowest price",
  "description": "",
  "id": "sorting-items-by-price;sort-items-by-lowest-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@sort"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I select Price (low to high) from the sorting dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the items should be displayed in ascending order of price",
  "keyword": "Then "
});
formatter.match({
  "location": "SortingItemsStepDefinition.iSelectPriceLowToHighFromTheSortingDropdown()"
});
formatter.result({
  "duration": 144247000,
  "status": "passed"
});
formatter.match({
  "location": "SortingItemsStepDefinition.the_items_should_be_displayed_in_ascending_order_of_price()"
});
formatter.result({
  "duration": 59338000,
  "status": "passed"
});
formatter.after({
  "duration": 681900800,
  "status": "passed"
});
formatter.uri("ValidateCheckoutDetailsFields.feature");
formatter.feature({
  "line": 2,
  "name": "Checkout information validation",
  "description": "I want to use this template for my feature file",
  "id": "checkout-information-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@validateCheckoutFileds"
    }
  ]
});
formatter.before({
  "duration": 1572358700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"standard_user\" as the username",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"secret_sauce\" as the password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add \"Item A\" to the shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I add \"Item B\" to the shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I visit the shopping cart page",
  "keyword": "And "
});
formatter.match({
  "location": "AuthenticationStepDefinition.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 523406000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsTheUsername(String)"
});
formatter.result({
  "duration": 181293100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsThePassword(String)"
});
formatter.result({
  "duration": 215649200,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinition.iClickTheLoginButton()"
});
formatter.result({
  "duration": 5139656000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item A",
      "offset": 7
    }
  ],
  "location": "AddItemsToCartStepDefinition.i_add_item_to_the_shopping_cart(String)"
});
formatter.result({
  "duration": 166615600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item B",
      "offset": 7
    }
  ],
  "location": "AddItemsToCartStepDefinition.i_add_item_to_the_shopping_cart(String)"
});
formatter.result({
  "duration": 129227500,
  "status": "passed"
});
formatter.match({
  "location": "VerifyCartItemsStepDefinition.i_visit_the_shopping_cart_page()"
});
formatter.result({
  "duration": 5102647800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate required fields in the checkout form",
  "description": "",
  "id": "checkout-information-validation;validate-required-fields-in-the-checkout-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@checkoutFileds"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on the checkout information page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I leave the \"First Name\" field empty",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click \"Continue\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see an error message \"First name is required\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I leave the \"Last Name\" field empty",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click \"Continue\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see an error message \"Last name is required\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I leave the \"Zip/Postal Code\" field empty",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click \"Continue\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see an error message \"Zip/Postal Code is required\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "First Name",
      "offset": 13
    }
  ],
  "location": "AuthenticationStepDefinition.iLeaveFieldEmpty(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required",
      "offset": 31
    }
  ],
  "location": "AuthenticationStepDefinition.iShouldSeeAnErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Last Name",
      "offset": 13
    }
  ],
  "location": "AuthenticationStepDefinition.iLeaveFieldEmpty(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required",
      "offset": 31
    }
  ],
  "location": "AuthenticationStepDefinition.iShouldSeeAnErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Zip/Postal Code",
      "offset": 13
    }
  ],
  "location": "AuthenticationStepDefinition.iLeaveFieldEmpty(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Zip/Postal Code is required",
      "offset": 31
    }
  ],
  "location": "AuthenticationStepDefinition.iShouldSeeAnErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 695795300,
  "status": "passed"
});
formatter.uri("VerifyCartItems.feature");
formatter.feature({
  "line": 2,
  "name": "Shopping Cart functionality",
  "description": "",
  "id": "shopping-cart-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@verifyCartItems"
    }
  ]
});
formatter.before({
  "duration": 1459581100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \"standard_user\" as the username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter \"secret_sauce\" as the password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I add \"Item A\" to the shopping cart",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I add \"Item B\" to the shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "AuthenticationStepDefinition.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 580731600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsTheUsername(String)"
});
formatter.result({
  "duration": 180543300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 9
    }
  ],
  "location": "AuthenticationStepDefinition.iEnterAsThePassword(String)"
});
formatter.result({
  "duration": 156503000,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepDefinition.iClickTheLoginButton()"
});
formatter.result({
  "duration": 5157363500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item A",
      "offset": 7
    }
  ],
  "location": "AddItemsToCartStepDefinition.i_add_item_to_the_shopping_cart(String)"
});
formatter.result({
  "duration": 155666000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item B",
      "offset": 7
    }
  ],
  "location": "AddItemsToCartStepDefinition.i_add_item_to_the_shopping_cart(String)"
});
formatter.result({
  "duration": 170533300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify items in the shopping cart",
  "description": "",
  "id": "shopping-cart-functionality;verify-items-in-the-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@verify"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I visit the shopping cart page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see \"Item A\" and \"Item B\" listed in the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the item names, quantities, and prices should match those in the cart",
  "keyword": "And "
});
formatter.match({
  "location": "VerifyCartItemsStepDefinition.i_visit_the_shopping_cart_page()"
});
formatter.result({
  "duration": 5093931500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item A",
      "offset": 14
    },
    {
      "val": "Item B",
      "offset": 27
    }
  ],
  "location": "VerifyCartItemsStepDefinition.i_should_see_items_in_the_cart(String,String)"
});
formatter.result({
  "duration": 76665800,
  "status": "passed"
});
formatter.match({
  "location": "VerifyCartItemsStepDefinition.the_item_details_should_match()"
});
formatter.result({
  "duration": 233786900,
  "status": "passed"
});
formatter.after({
  "duration": 1206434600,
  "status": "passed"
});
formatter.uri("VerifyTotalPriceCalculation.feature");
formatter.feature({
  "line": 2,
  "name": "Total price calculation",
  "description": "",
  "id": "total-price-calculation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@verifyTotalPrice"
    }
  ]
});
formatter.before({
  "duration": 1487157100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify total price and tax calculation in the checkout overview page",
  "description": "",
  "id": "total-price-calculation;verify-total-price-and-tax-calculation-in-the-checkout-overview-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@price"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the checkout overview page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I have \"Item A\" priced at $10 and \"Item B\" priced at $20",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the item total should be $30",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the tax should be $2.40 (8% of $30)",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the total price should be $32.40",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 631277200,
  "status": "passed"
});
});