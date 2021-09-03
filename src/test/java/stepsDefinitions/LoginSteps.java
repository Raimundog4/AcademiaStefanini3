package stepsDefinitions;

import static utils.Utils.*;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageobjects.LoginPage;

public class LoginSteps {


	@Quando("eu informar o usuario {string}")
	public void euInformarOUsuario(String usuario) {
		Na(LoginPage.class).preencherCampoUsuario(usuario);
		System.out.println();
	}
	
	@Quando("informar a senha {string}")
	public void informarASenha(String senha) {
		Na(LoginPage.class).preencherCampoSenha(senha);
	}

	@Quando("clicar no botao Login")
	public void clicarNoBotaoLogin() {
		Na(LoginPage.class).acionarBotaoLogin();
	}

	@Entao("o sistema exibe a mensagem de credenciais invalidas")
	public void oSistemaExibeAMensagemDeCredenciaisInvalidas() {
		Na(LoginPage.class).validarUsuarioInvalido();
	}

	@Entao("o sistema exibe o usuario logado")
	public void oSistemaExibeOUsuarioLogado() {
		Na(LoginPage.class).validarDashboard();
	}

}
