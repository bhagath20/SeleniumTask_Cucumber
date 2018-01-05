package uk.gov.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;



import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;







    public class BasePage {

        public static WebDriver driver;
        public static Properties OR=null;
        public static Properties CONFIG = null;
        public static FileInputStream ip=null;

        public BasePage(){
            if(OR==null){
                try{
                    OR=new Properties();
                    ip=new FileInputStream(System.getProperty("user.dir")+"/src/test/java/uk/gov/config/OR.properties");
                    OR.load(ip);
                    CONFIG = new Properties();
                    ip = new FileInputStream(System.getProperty("user.dir")+"/src/test/java/uk/gov/config/CONFIG.properties");
                    CONFIG.load(ip);

                }catch(Throwable t)
                {
                    System.err.println("Error in loading files");
                }
            }
        }

        public void InitializeDriver(String browser){
            if(CONFIG.getProperty(browser).equalsIgnoreCase("Mozilla")){
                System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"/geckodriver");
                driver=new FirefoxDriver();
            }else if(CONFIG.getProperty(browser).equalsIgnoreCase("ie")){
                driver=new InternetExplorerDriver();
            }else if(CONFIG.getProperty(browser).equalsIgnoreCase("Chrome")){
                System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/chromedriver");
                driver=new ChromeDriver();
            }
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        }
        public void navigate(String url){
            driver.get(CONFIG.getProperty(url));

        }

        public  void closeDriver(){
            driver.quit();
        }
}
