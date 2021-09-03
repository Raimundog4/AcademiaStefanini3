#language: pt
#enconding: UTF-8
@CadastrarUsuario @End2End
Funcionalidade: Cadastrar Usuario

  @Cadastrar
  Cenario: Cadastrar Usuario
    Quando acionar a aba Admin
    E acionar o botao Add
    E informar o User Role como "ESS"
    E informar o employee Name como "Fiona Grace"
    E informar o Username como "Raimundog4"
    E informar o status como "Enabled"
    E informar o Password como "12345678"
    E confirmar o Password como "12345678"
    E acionar o botao Save
    Entao o sistema ira mostrar que o usuario "Raimundog4" foi cadastrado
