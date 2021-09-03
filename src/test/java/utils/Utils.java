package utils;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import io.cucumber.core.api.Scenario;

public class Utils {
	
	public static WebDriver driver;
	
	public static void acessarSistema() {
		System.setProperty("webdriver.chrome.driver", "c:\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(15, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.get("https://opensource-demo.orangehrmlive.com/");
	}
	
	public static <T> T Na(Class<T> classe) {
		return PageFactory.initElements(driver, classe);
	}
	
	public static void selecionar(WebElement elemento, String texto) {
		Select select = new Select(elemento);
		select.selectByVisibleText(texto);
	}

	public static void capturarTela(Scenario cenario) {
		final byte[] screenshhot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
		cenario.embed(screenshhot, "image/png");
	}
	
}
