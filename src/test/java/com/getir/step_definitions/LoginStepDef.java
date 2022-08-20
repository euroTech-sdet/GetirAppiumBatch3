package com.getir.step_definitions;

import com.getir.pages.BasketPage;
import com.getir.pages.LoginPage;
import com.getir.utilities.ScrollHelper;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginStepDef {

    LoginPage loginPage = new LoginPage();
    BasketPage basketPage = new BasketPage();

    @Given("User is on the login page and enters {string} and {string}")
    public void userIsOnTheLoginPageAndEntersAnd(String username, String password) {
        loginPage.login(username,password);
    }

    @Then("User login successfully")
    public void user_login_successfully() {
        loginPage.waitUntil(loginPage.dondurma);
        String actualText = loginPage.dondurma.getText();
        Assert.assertEquals("Dondurma",actualText);
    }
    @Then("User verify that basket is empty and able to see {string}")
    public void user_verify_that_basket_is_empty_and_able_to_see(String expectedText) {
        basketPage.basket.click();
        loginPage.waitUntil(basketPage.basketText);
        String actualText=  basketPage.basketText.getText();
        Assert.assertEquals(expectedText,actualText);
        basketPage.back.click();

    }

    @Then("User able to see all menu list in console")
    public void user_able_to_see_all_menu_list_in_console() {

        int actualSize= basketPage.menuList.size();
        System.out.println(actualSize);

        System.out.println("BasketPage.getElementText(basketPage.menuList) = " + BasketPage.getElementText(basketPage.menuList));

    }

    @Then("User clicks on {string}")
    public void user_clicks_on(String menuType) {

        basketPage.getMenu(menuType);
        basketPage.gofret.click();
        basketPage.gofret.click();

    }

    @Then("User add more items and navigate to main menu")
    public void user_add_more_items_and_navigate_to_main_menu() {

        basketPage.magnum.click();
        basketPage.back.click();


    }


    @And("User scroll down to {string}")
    public void userScrollDownTo(String urun) {
        new ScrollHelper().scrollVerticalHelper(urun);
    }

    @And("User navigate to basket")
    public void userNavigateToBasket() {
        basketPage.basket.click();
    }

    @Then("User verify that {string}")
    public void userVerifyThat(String expectedResult) {

        String actualResult= basketPage.resultText.getText();
        Assert.assertEquals(expectedResult,actualResult);


    }
}
