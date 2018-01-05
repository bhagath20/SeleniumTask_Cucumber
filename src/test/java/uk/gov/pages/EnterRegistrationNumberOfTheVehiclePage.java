package uk.gov.pages;

import org.openqa.selenium.By;

public class EnterRegistrationNumberOfTheVehiclePage extends BasePage {
	
	public void enterRegistrationNumber(String registrationNumber){
		
		driver.findElement(By.id(OR.getProperty("registrationNumber_id"))).sendKeys(registrationNumber);
		}
	
	public void clickOnContinue(){
		driver.findElement(By.name(OR.getProperty("continue_name"))).click();
	}

}
