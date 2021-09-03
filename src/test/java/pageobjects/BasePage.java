package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BasePage {

	@FindBy(linkText = "Admin")
	public WebElement abaAdmin;
	
	@FindBy(linkText = "PIM")
	public WebElement abaPim;
	
	@FindBy(linkText = "Configuration")
	public WebElement menuConfiguration;
	
	@FindBy(linkText = "Custom Fields")
	public WebElement menuCustomFields;
	
}
