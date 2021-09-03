package pageobjects;

import static utils.Utils.*;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

public class TelaInicialPage extends BasePage {

	Actions acao = new Actions(driver);
	
	//BasePage
	public void acionarAbaAdmin() {
		abaAdmin.click();
	}
	
	//ELEMENTOS
	@FindBy(id = "btnAdd")
	private WebElement botaoAdd;

	
	//MÉTODOS
	public void acionarBotaoAdd() {
		botaoAdd.click();
	}
	
	public void acessarMenuCustomFields() {
		acao.moveToElement(abaPim).build().perform();
		acao.moveToElement(menuConfiguration).build().perform();
		acao.moveToElement(menuCustomFields).click().build().perform();
		acao.moveToElement(abaPim).contextClick().build().perform();//Clica com o lado direito do mouse
	}
	
}
