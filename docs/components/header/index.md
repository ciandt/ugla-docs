title: Ugla | Componente Header
description: Conhecendo e implementando Header

# Header
O componente **Header** é composto por mais dois componentes: [Brand](brand), que é responsável pelo ícone e nome do sistema presentes na tela e [People Card](peoplecard), que carrega os dados do usuário logado e o botão de **Logout**.

[![header](../_images/header.png)](../_images/header.png)
_Imagem do header_

## Atributos da tag

Atributo      | Input/Output   | Tipo                          | Obrigatório    | Valores padrões
:------------ | :------------: | :---------------------------- | :------------- | :-------------
header        | `@Input`       | [Header](../../models/header) | Sim            | -
logoutText    | `@Input`       | `String`                      | Não            | Logout
logoutAction  | `@Output`      | `function`                    | Sim            | -

## Class Header e subclasses

Para construir o o header, é necessário criar uma instância da classe [Header](../../models/header).

Os dados do usuário são registrados ao criar uma instãncia da classe [People](../../models/people), e ela deve ser incluso ao objeto header `header.people`.

O menu é criado usando as classes [Menu](../../models/menu) e [Menu Item](../../models/menu-item) que também deve ser incluso ao objeto header `header.menu`;

O componente **Header** pode ter sombras, e para habilitá-la é necessário injetar o [Ugla Service](../../service/ugla-service) e, em seguida, atribuir `true/false` a variável:

```typescript
constructor(private ugla: UglaService) {}

ngOnInit() {
  this.ugla.headerShadow = true;
}
```

## Exemplo completo

```html tab='HTML'
<ugl-header
    [header]='header'
    (logoutAction)='logout($event)'
    [logoutText]=''Logout now''>
</ugl-header>
```

```typescript tab='TS'
import { Header, People, Menu, MenuItem, Select, Options, UglaService } from 'ugla';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private ugla: UglaService) {}

  header = new Header('Ugla', './assets/imgs/logo.png', 'home', true);

  people = new People('Jack Connor', 'jack.connor@ugla.dev', './assets/imgs/people.png');

  menu = new Menu([
    new MenuItem('Home', '/', true),
    new MenuItem('Login', '/login', true),
    new MenuItem('Components', '/components', true),
    new MenuItem('Directives', '/directives', true),
    new MenuItem('Services', '/services', true)
  ]);

  ngOnInit() {
    this.header.people = this.people;
    this.header.menu = this.menu;
    this.ugla.headerShadow = true;
  }

  logout(status) {
    console.log('Logout');
  }

  selectLanguage(language) {
    console.log(`Language selected is ${language.description} and the code is ${language.value}`);
  }
}
```
