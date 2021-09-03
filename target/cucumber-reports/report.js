$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:Features/AcessarSistema.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.scenario({
  "name": "Usuario Invalido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@UsuarioInvalido"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"ad\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"ps\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a mensagem de credenciais invalidas",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaExibeAMensagemDeCredenciaisInvalidas()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar Login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@RealizarLogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"Admin\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"admin123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe o usuario logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaExibeOUsuarioLogado()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cWelcome [Paul]\u003e but was:\u003cWelcome [Anton]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat pageobjects.LoginPage.validarDashboard(LoginPage.java:43)\r\n\tat stepsDefinitions.LoginSteps.oSistemaExibeOUsuarioLogado(LoginSteps.java:34)\r\n\tat ✽.o sistema exibe o usuario logado(classpath:Features/AcessarSistema.feature:18)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:Features/CadastrarUsuario.feature");
formatter.feature({
  "name": "Cadastrar Usuario",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@CadastrarUsuario"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.scenario({
  "name": "Cadastrar Usuario",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CadastrarUsuario"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@Cadastrar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "acionar a aba Admin",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarAAbaAdmin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Add",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoAdd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o User Role como \"ESS\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarOUserRoleComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o employee Name como \"Fiona Grace\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarOEmployeeNameComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o Username como \"Raimundog4\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarOUsernameComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o status como \"Enabled\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarOStatusComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o Password como \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarOPasswordComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar o Password como \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.confirmarOPasswordComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Save",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoSave()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema ira mostrar que o usuario \"Raimundog4\" foi cadastrado",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaIraMostrarQueOUsuarioFoiCadastrado(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Raimundog4\u0027]\"}\n  (Session info: chrome\u003d92.0.4515.159)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-2NKS05GS\u0027, ip: \u0027192.168.100.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.43 (8c61b7e2989f2..., userDataDir: C:\\Users\\raimu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55261}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 39d2f65411fc402df52f4fdbd6a3ea63\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Raimundog4\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat stepsDefinitions.CadastrarUsuarioSteps.oSistemaIraMostrarQueOUsuarioFoiCadastrado(CadastrarUsuarioSteps.java:62)\r\n\tat ✽.o sistema ira mostrar que o usuario \"Raimundog4\" foi cadastrado(classpath:Features/CadastrarUsuario.feature:17)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:Features/TestandoAction.feature");
formatter.feature({
  "name": "Testar DropDown",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@DropDown"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.scenario({
  "name": "verificar dropDown da aba",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@DropDown"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o menu customFields",
  "keyword": "Quando "
});
formatter.match({
  "location": "TestandoActionsSteps.euAcionarOMenuCustomFields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema apresentara a tela customField",
  "keyword": "Entao "
});
formatter.match({
  "location": "TestandoActionsSteps.oSistemaApresentaraATelaCustomField()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
});