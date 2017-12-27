package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SanityMavenTest {
	public WebDriver driver;

	//Opens the Chrome browser by setting the system property
	@Given("^I open chrome broswer$")
	public void i_open_chrome_broswer() throws Throwable {

	System.setProperty("webdriver.chrome.driver", "C:\\tools\\chromedriver_win32\\chromedriver.exe\\");
	
	driver = new ChromeDriver();
    
    driver.manage().window().maximize();
	}

	// Navigates to specified URL 
@Given("^Navigate to slideshare$")
public void navigate_to_slideshare() throws Throwable {
	driver.get("http://www.slideshare.net");

}

//Takes username and passowrd for different inputs
@When("^I enter \"([^\"]*)\" \"([^\"]*)\"$")
public void i_enter(String username, String password) throws Throwable {
	driver.findElement(By.linkText("Login")).click();
	driver.findElement(By.id("user_login")).sendKeys(username);
	driver.findElement(By.id("user_password")).sendKeys(password);
	driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
}

//Clicks on login button
@When("^click on LoginButton$")
public void click_on_LoginButton() throws Throwable {
	driver.findElement(By.id("login_from_loginpage")).click();
}

//Verfies whether Login is successful or unsuccessful
@Then("^Login should be successful$")
public void login_should_be_successful() throws Throwable {
	String result_string = "Incorrect username/email or password.";
	WebElement element = driver.findElement(By.xpath("//*[@id='login-form']/fieldset/div[3]"));
	if(element.getText() == result_string)
	{
		System.out.println("Login Failed");
	}
	else
		System.out.println("Successfully Login into the application");

}
}
