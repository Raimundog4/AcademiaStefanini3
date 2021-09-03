package stepsDefinitions;

import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageobjects.TelaInicialPage;

public class TestandoActionsSteps {

	@Quando("eu acionar o menu customFields")
	public void euAcionarOMenuCustomFields() {
		Na(TelaInicialPage.class).acessarMenuCustomFields();
	}

	@Entao("o sistema apresentara a tela customField")
	public void oSistemaApresentaraATelaCustomField() {
		assertTrue(driver.findElement(By.xpath("//h1[text()='Defined Custom Fields']")).isDisplayed());
	}

	
}
