package uk.gov.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features={"src/test/resources/features"},
        glue={"uk/gov/stepdefinitions"},
        plugin= {"pretty", "html:target/cucumber", "junit:target/cucuber-junit","json:target/json-report.json"}
)
public class TestRunner {

}
