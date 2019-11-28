title: Ugla | Componente Login
description: Conhecendo e implementando Login

# Login

[![Login](login-1.png)](login-1.png)

[![Login](login-2.png)](login-2.png)

O componente Login deve ser adicionado em uma pagina, e ele carrega os ítens necessários para realizar a autenticação.
Existe dois tipo de autenticação: **Com formulário** e **Apenas com botão**.

## Atributos da tag

Atributo                | Input/Output   | Tipo        | Obrigatório
:---------------------- | :------------: | :---------- | -------------:
header                  | `@Input`       | `String`    | Sim
subHeader               | `@Input`       | `String`    | Não
buttonText              | `@Input`       | `String`    | Não
desktopImage            | `@Input`       | `String`    | Não
mobileImage             | `@Input`       | `String`    | Não
floatLogo               | `@Input`       | `String`    | Não
googleLogo              | `@Input`       | `String`    | Não
buttonBackground        | `@Input`       | `String`    | Não
hasForm                 | `@Input`       | `Boolean`   | Não
signIn                  | `@Input`       | `String`    | Sim

## Como usar

```html tab='HTML'
<ugl-login #auth
  [header]="'Ugla'"
  [subheader]="'Library'"
  [buttonText]="'Authenticate'"
  [desktopImage]="'./assets/imgs/autentication-desktop.jpg'"
  [mobileImage]="'./assets/imgs/autentication-mobile.jpg'"
  [googleLogo]="'./assets/imgs/icon-google.svg'"
  [buttonBackgroud]="'aquamarine'"
  [hasForm]="true"
  (signIn)="signIn2()"></ugl-login>
```

```ts tab="TS"
// Para o tipo Form, recebe o objeto do tipo Auth
signIn(auth: Auth) {
  this.toast.success('Login', `Usuário ${auth.user} autenticado com sucesso`, 5000);
}

// Para o tipo No Form, não recebe o objeto do tipo Auth
signIn2() {
  this.toast.success('Login', `Usuário autenticado com sucesso`, 5000);
}
```