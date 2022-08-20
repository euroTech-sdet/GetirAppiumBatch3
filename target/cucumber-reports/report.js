$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Getir basket Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page and enters \"hello@getir.com\" and \"hello\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.userIsOnTheLoginPageAndEntersAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.user_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify that basket is empty and able to see \"There is no result\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.user_verify_that_basket_is_empty_and_able_to_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see all menu list in console",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.user_able_to_see_all_menu_list_in_console()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Atıştırmalık\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User scroll down to \"Ürün 13\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.userScrollDownTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add more items and navigate to main menu",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.user_add_more_items_and_navigate_to_main_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Yiyecek\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.user_clicks_on(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-2.local\u0027, ip: \u0027fe80:0:0:0:14c1:7d87:8c3b:ad93%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002713.0.2\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.getir.casestudy.modules..., appPackage: com.getir.casestudy.dev, databaseEnabled: false, desired: {appActivity: com.getir.casestudy.modules..., appPackage: com.getir.casestudy.dev, deviceName: Pixel_3, platformName: android, version: 11.0}, deviceApiLevel: 30, deviceManufacturer: Google, deviceModel: sdk_gphone_arm64, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: ANDROID, platformVersion: 11, statBarHeight: 63, takesScreenshot: true, version: 11.0, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 55c602a2-4235-44c6-9561-31f563a9c1f7\n*** Element info: {Using\u003dxpath, value\u003d//*[@text\u003d\u0027Yiyecek\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:247)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat com.getir.pages.BasketPage.getMenu(BasketPage.java:46)\n\tat com.getir.step_definitions.LoginStepDef.user_clicks_on(LoginStepDef.java:51)\n\tat ✽.User clicks on \"Yiyecek\"(file:///Users/erhanilgar/IdeaProjects/seleniumProject/src/main/GetirAppiumBatch3/src/test/resources/features/login.feature:25)\n",
  "status": "failed"
});
formatter.step({
  "name": "User scroll down to \"Ürün 29\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.userScrollDownTo(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User navigate to basket",
  "keyword": "And "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.userNavigateToBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verify that \"Total Amount 108\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.getir.step_definitions.LoginStepDef.userVerifyThat(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "Getir basket Test");
formatter.after({
  "status": "passed"
});
});