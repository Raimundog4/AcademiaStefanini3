package stepsDefinitions;

import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageobjects.CadastrarUsuarioPage;
import pageobjects.TelaInicialPage;

public class CadastrarUsuarioSteps {

	@Quando("acionar a aba Admin")
	public void acionarAAbaAdmin() {
		Na(TelaInicialPage.class).acionarAbaAdmin();
	}

	@Quando("acionar o botao Add")
	public void acionarOBotaoAdd() {
		Na(TelaInicialPage.class).acionarBotaoAdd();
	}

	@Quando("informar o User Role como {string}")
	public void informarOUserRoleComo(String perfil) {
		Na(CadastrarUsuarioPage.class).selecionarPerfil(perfil);
	}

	@Quando("informar o employee Name como {string}")
	public void informarOEmployeeNameComo(String nome) {
		Na(CadastrarUsuarioPage.class).preencherCampoNome(nome);
	}

	@Quando("informar o Username como {string}")
	public void informarOUsernameComo(String usuario) {
		Na(CadastrarUsuarioPage.class).preencherCampoUsuario(usuario);
	}

	@Quando("informar o status como {string}")
	public void informarOStatusComo(String status) {
		Na(CadastrarUsuarioPage.class).selecionarStatus(status);
	}

	@Quando("informar o Password como {string}")
	public void informarOPasswordComo(String senha) {
		Na(CadastrarUsuarioPage.class).preencherCampoSenha(senha);
	}

	@Quando("confirmar o Password como {string}")
	public void confirmarOPasswordComo(String senha) {
		Na(CadastrarUsuarioPage.class).preencherCampoConfrimarSenha(senha);
	}

	@Quando("acionar o botao Save")
	public void acionarOBotaoSave() {
		Na(CadastrarUsuarioPage.class).acionarBotaoSave();
	}

	@Entao("o sistema ira mostrar que o usuario {string} foi cadastrado")
	public void oSistemaIraMostrarQueOUsuarioFoiCadastrado(String usuario) {
		assertTrue(driver.findElement(By.xpath("//a[text()='"+usuario+"']")).isDisplayed());
	}
	
}
