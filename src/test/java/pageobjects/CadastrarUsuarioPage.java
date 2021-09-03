package pageobjects;

import static utils.Utils.selecionar;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CadastrarUsuarioPage {

	//ELEMENTOS
	@FindBy(id = "systemUser_userType")
	private WebElement campoPerfil;
	
	@FindBy(name = "systemUser[employeeName][empName]")
	private WebElement campoNome;
	
	@FindBy(id = "systemUser_userName")
	private WebElement campoUsuario;
	
	@FindBy(id = "systemUser_status")
	private WebElement campoStatus;
	
	@FindBy(id = "systemUser_password")
	private WebElement campoSenha;
	
	@FindBy(id = "systemUser_confirmPassword")
	private WebElement campoConfirmarSenha;
	
	@FindBy(id = "btnSave")
	private WebElement botaoSave;
	
	//MÉTODOS
	public void selecionarPerfil(String perfil) {
		selecionar(campoPerfil, perfil);
	}
	
	public void preencherCampoNome(String nome) {
		campoNome.sendKeys(nome);
	}
	
	public void preencherCampoUsuario(String usuario) {
		campoUsuario.sendKeys(usuario);
	}
	
	public void selecionarStatus(String status) {
		selecionar(campoStatus, status);
	}
	
	public void preencherCampoSenha(String senha) {
		campoSenha.sendKeys(senha);
	}
	
	public void preencherCampoConfrimarSenha(String senha) {
		campoConfirmarSenha.sendKeys(senha);
	}
	
	public void acionarBotaoSave() {
		botaoSave.click();
	}
}
