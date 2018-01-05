package uk.gov.pages;


import org.openqa.selenium.By;

public class GetVehicleInformationPage extends BasePage {
	
public void clickOnStrartNow(){
	driver.findElement(By.xpath(OR.getProperty("startnow_xpath"))).click();
		}

}
