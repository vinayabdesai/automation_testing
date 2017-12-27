package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features",
glue = {"StepDefinition"},
plugin={"html:Reports/cucumber-json",
        "pretty:Reports/cucumber-pretty.txt",
		"usage:Reports/cucumber-usage.json",
		"junit:Reports/cucumber-junit.xml"})
public class TestRunner {

}
