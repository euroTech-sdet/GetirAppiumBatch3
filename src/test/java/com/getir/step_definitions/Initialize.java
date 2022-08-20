package com.getir.step_definitions;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Platform;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.springframework.aop.ThrowsAdvice;

import java.net.MalformedURLException;
import java.net.URL;

public class Initialize {

    public static AndroidDriver<MobileElement> driver;

    @Before
    public void setup(){
        initializeDriver();

        driver.resetApp();
    }

    @After
    public void tearDown(Scenario scenario) throws InterruptedException {
        if(scenario.isFailed()){
            final byte[] screenshot= ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot,"image/png",scenario.getName());
        }

        Thread.sleep(3000);
        driver.quit();

    }

    public void initializeDriver(){
        DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
        desiredCapabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, Platform.ANDROID);
        desiredCapabilities.setCapability(MobileCapabilityType.VERSION,"11.0");
        desiredCapabilities.setCapability(MobileCapabilityType.DEVICE_NAME,"Pixel_3");

        desiredCapabilities.setCapability("appPackage","com.getir.casestudy.dev");
        desiredCapabilities.setCapability("appActivity","com.getir.casestudy.modules.splash.ui.SplashActivity");

        //hangi ortamda calistirmak istiyorsak , ona ait bilgileri girmemiz gerekiyor
        //appium da calisracagimiz icin local appium ayarlari giriyoruz.
        //BrowserStack, Sauce Lab vb platformlarda calistirmak asagiya  ordan aldigimiz linki girmeliyiz.

        try{
            driver= new AndroidDriver<>(new URL("http://localhost:4723/wd/hub"), desiredCapabilities);
        }catch (MalformedURLException e){
            e.printStackTrace();
        }


    }
}
