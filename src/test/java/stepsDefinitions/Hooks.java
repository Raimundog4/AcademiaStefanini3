package stepsDefinitions;

import static utils.Utils.*;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import pageobjects.LoginPage;

public class Hooks {

	@Before(value = "not @Login")//Executa em todos, menos que que tem a TAG login
	public void setUp() {
		acessarSistema();
		Na(LoginPage.class).realizarLogin("Admin", "admin123");
	}
	
	@Before(value = "@Login")
	public void funcionalidadeLogin() {
		acessarSistema();
	}
	
	@After
	public void tearDown(Scenario cenario) {
		capturarTela(cenario);
		driver.quit();
	}
	
}
