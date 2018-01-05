package uk.gov.stepdefinitions;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import uk.gov.pages.BasePage;

public class Hooks extends BasePage {

	@Before
	public void beforeScenario() {
		InitializeDriver("browser");
	}

	@After
	public void afterScenario() {
		closeDriver();
	}

}
