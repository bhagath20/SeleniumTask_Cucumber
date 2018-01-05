package uk.gov.stepdefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.gov.pages.*;

public class VehicleDetailsStepDefinition extends BasePage {

    GetVehicleInformationPage getVehicleInformationPage = new GetVehicleInformationPage();
    EnterRegistrationNumberOfTheVehiclePage enterRegNumber = new EnterRegistrationNumberOfTheVehiclePage();
    IsThisTheVehicleYouAreLookingForPage isThisTheVehicleYouAreLookingForPage = new IsThisTheVehicleYouAreLookingForPage();
    CheckIfaVehicleIsTaxedAndHasAnMOTPage checkIfaVehicleIsTaxedAndHasAnMOTPage = new CheckIfaVehicleIsTaxedAndHasAnMOTPage();

    @Given("^user enters the URL$")
    public void user_enters_the_URL(){
        navigate("url");

    }

    @When("^User clicks on start now button$")
    public void user_clicks_on_start_now_button(){
        getVehicleInformationPage.clickOnStrartNow();

    }

    @When("^User enters vehicle \"([^\"]*)\" number and clicks on continue$")
    public void user_enters_vehicle_number_and_clicks_on_continue(String registrationNumber) {
        enterRegNumber.enterRegistrationNumber(registrationNumber);
        enterRegNumber.clickOnContinue();

    }

    @When("^User confirms the vehicle details and clicks on continue$")
    public void user_confirms_the_vehicle_details() {
        isThisTheVehicleYouAreLookingForPage.clickOnYes();
        isThisTheVehicleYouAreLookingForPage.clickOnContinue();

    }

    @Then("^Verify the vehicle make as \"([^\"]*)\"$")
    public void verify_the_vehicle(String expectedMake)  {
        String actualMake = checkIfaVehicleIsTaxedAndHasAnMOTPage.checkVehicleMake();
        Assert.assertEquals(expectedMake, actualMake);

    }

}
