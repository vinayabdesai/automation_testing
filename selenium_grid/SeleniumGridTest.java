/**
 * A simple program to fire a selenium test through a grid.
 */
package testpackage;
import java.net.MalformedURLException;
import java.net.URL;
import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

/**
 * @author https://github.com/vinayabdesai/automation_testing
 *
 */
public class SeleniumGridTest {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
				
			//System.setProperty("webdriver.gecko.driver", "C:\\tools\\geckodriver-v0.18.0-win64\\geckodriver.exe\\");
			System.setProperty("webdriver.chrome.driver", "C:\\tools\\chromedriver_win32\\chromedriver.exe\\");
			
			DesiredCapabilities capability =DesiredCapabilities.chrome();
			capability.setBrowserName("chrome");
			
			//DesiredCapabilities capability =DesiredCapabilities.firefox();
			//capability.setBrowserName("firefox");
			/*
			capability.setPlatform(Platform.WIN10);
			capability.setJavascriptEnabled(true);
			capability.setVersion("latest");
			*/
			
			RemoteWebDriver driver;
			try {
				driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"),capability);
				//WebDriver driver = new FirefoxDriver();
				/*
				System.setProperty("webdriver.chrome.driver", "C:\\tools\\chromedriver_win32\\chromedriver.exe\\");
				
				//Creating a webdriver interface
				WebDriver driver = new ChromeDriver();
				*/
				//Launching the QAonAir website
				driver.get("http:\\qaonair.com");
				//driver.get("https:\\www.slideshare.net");
				driver.manage().window().maximize();
				driver.findElement(By.linkText("SIGN UP")).click();
				//driver.findElement(By.linkText("Presentation Courses")).click();
			} catch (MalformedURLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}							
	}
}
