package com.getir.pages;

import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.android.PushesFiles;
import io.appium.java_client.pagefactory.AndroidFindBy;
import org.openqa.selenium.By;
import org.openqa.selenium.support.FindBy;

import java.util.ArrayList;
import java.util.List;

public class BasketPage extends BasePage{


    @AndroidFindBy(className = "android.widget.TextView")
    public List<AndroidElement> menuList;


    @FindBy(id = "com.getir.casestudy.dev:id/ga_toolbar_getir10GABasketButton")
    public AndroidElement basket;

    @FindBy(xpath = "//*[@text='There is no result']")
    public AndroidElement basketText;

    @FindBy(id = "com.getir.casestudy.dev:id/ga_toolbar_leftIconImageView")
    public AndroidElement back;

    @FindBy(id = "com.getir.casestudy.dev:id/btnAdd")
    public AndroidElement gofret;

    @FindBy(xpath = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.ImageView")
    public AndroidElement magnum;

    @FindBy(id = "com.getir.casestudy.dev:id/tvTotalTitle")
    public AndroidElement resultText;


    public static List<String> getElementText(List<AndroidElement> list){
        List<String> elemText = new ArrayList<>();
        for(AndroidElement el :list){
            elemText.add(el.getText());
        }
        return elemText;
    }
    public void getMenu(String menuName){
        driver.findElement(By.xpath("//*[@text='"+menuName+"']")).click();
    }
}
