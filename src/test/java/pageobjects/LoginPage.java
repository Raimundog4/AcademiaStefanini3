package pageobjects;

import static org.junit.Assert.assertEquals;
import static utils.Utils.driver;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage {

	@FindBy(id = "txtUsername")
	private WebElement campoUsuario;
	
	@FindBy(xpath = "//input[@id='txtPassword']")
	private WebElement campoSenha;
	
	@FindBy(xpath = "//div[@id='divLoginButton']//input[@id='btnLogin']")
	private WebElement btnLogin;
	
	@FindBy(id = "welcome")
	private WebElement usuarioLogado;
	
	public void preencherCampoUsuario(String usuario) {
		campoUsuario.sendKeys(usuario);
	}
	
	public void preencherCampoSenha(String senha) {
		campoSenha.sendKeys(senha);
	}
	
	public void acionarBotaoLogin() {
		btnLogin.click();
	}
	
	public void validarUsuarioInvalido() {
//		WebElement validacaoElement = driver.findElement(By.xpath("//*[contains(text(), 'Invalid credentials')]"));
//		assertTrue(validacaoElement.isDisplayed());
		assertEquals("Invalid credentials", driver.findElement(By.id("spanMessage")).getText());
	}
	
	public void validarDashboard() {
		assertEquals("Welcome Paul", usuarioLogado.getText());
	}
	
	public void realizarLogin(String usuario, String senha) {
		preencherCampoUsuario(usuario);
		preencherCampoSenha(senha);
		acionarBotaoLogin();
	}
}
