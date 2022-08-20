package com.getir.pages;

import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class LoginPage extends BasePage{


    @FindBy(xpath = "//*[@text='username']")
    public AndroidElement inputUsername;

    @FindBy(xpath = "//*[@text='password']")
    public AndroidElement inputPassword;

    @FindBy(xpath = "//*[@text='Submit']")
    public AndroidElement submit;

    @FindBy(xpath = "//*[@text='Dondurma']")
    public AndroidElement dondurma;


    public void login(String username,String password){

        waitUntil(inputUsername).sendKeys(username);
        waitUntil(inputPassword).sendKeys(password);
        submit.click();

    }

    public AndroidElement waitUntil(AndroidElement element){
        return (AndroidElement) wait.until(ExpectedConditions.visibilityOf(element));
    }


}
