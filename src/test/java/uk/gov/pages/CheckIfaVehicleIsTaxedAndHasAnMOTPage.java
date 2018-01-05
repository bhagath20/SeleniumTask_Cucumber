package uk.gov.pages;

import org.openqa.selenium.By;

public class CheckIfaVehicleIsTaxedAndHasAnMOTPage extends BasePage{
	
	public String checkVehicleMake(){
		
		String text = driver.findElement(By.xpath(OR.getProperty("vehicleMake_xpath"))).getText();
		return text;
		
	}

}
