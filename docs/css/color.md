title: Ugla | CSS e facilitadores
description: Conhecendo as cores

# Color
O Ugla oferece um conjunto de cores que podem se usada de diversas maneiras.

## Classes
As cores base do Ugla são: `aquamarine`, `red`, `green`, `yellow`, `red` e `gray`, e para cada um existe uma classe que adiciona o atributo `color`.

Class                | Cor           | Hexadecimal | Representação
:------------------- | :------------ | ----------- | ------------------------------------------------------------------:
`.color-gray`        | Cinza         | #656565     | [![gray](_images/gray.png)](_images/gray.png)
`.color-red`         | Vermelha      | #D71F3C     | [![red](_images/red.png)](_images/red.png)
`.color-purple`      | Roxo          | #641E75     | [![purple](_images/purple.png)](_images/purple.png)
`.color-aquamarine`  | Aquamarine    | #20BEC6     | [![aquamarine](_images/aquamarine.png)](_images/aquamarine.png)
`.color-green`       | Verde         | #20C67B     | [![green](_images/green.png)](_images/green.png)
`.color-yellow`      | Amarelo       | #F2B838     | [![yellow](_images/yellow.png)](_images/yellow.png)

Além das classes para color, o Ugla oferece também classes para o atributo `background`:

Class                     | Cor           | Hexadecimal | Representação
:------------------------ | :------------ | ----------- | ------------------------------------------------------------------:
`.background-gray`        | Cinza         | #656565     | [![gray](_images/gray.png)](_images/gray.png)
`.background-red`         | Vermelha      | #D71F3C     | [![red](_images/red.png)](_images/red.png)
`.background-purple`      | Roxo          | #641E75     | [![purple](_images/purple.png)](_images/purple.png)
`.background-aquamarine`  | Aquamarine    | #20BEC6     | [![aquamarine](_images/aquamarine.png)](_images/aquamarine.png)
`.background-green`       | Verde         | #20C67B     | [![green](_images/green.png)](_images/green.png)
`.background-yellow`      | Amarelo       | #F2B838     | [![yellow](_images/yellow.png)](_images/yellow.png)

## SCSS
Mas existem outras maneiras de usar a cores, uma delas é com uma function do SCSS: `color()`. Para fazer uso da função, basta chamá-la a frente de um atributo de cor, passando o nome do theme e a tonalidade da cor desejada.
Os temas são: `aquamarine`, `red`, `green`, `yellow`, `red` e `gray`, além desses temos um agrupador chamado `others` que contém outras cores necessárias.
As intencidades de cor são: `extra-light`, `light`, `medium`, `dark`.
Todo tema precisa iniciar com `_`.

### Exemplo
```scss
p {
  color: color(_aquamarine, medium);
}

div {
  background-color: color(_gray, dark);
}
```

## Tabela de cores
Theme        | Extra Light                                                              | Light       | **Medium** | Dark
:----------- | :----------------------------------------------------------------------: | :-----------: | :-------: | :-----------------------------------------------------------:
Cinza        | <span style="background: #d9d9d9; padding: 10px;">#d9d9d9</span> | <span style="background: #999; padding: 10px;">#999999</span> | <span style="background: #444; color: #fff; padding: 10px;">#444444</span> | <span style="background: #222222; color: #fff; padding: 10px;">#222222</span>
Vermelha     | <span style="background: #e09ec6; padding: 10px;">#e09ec6</span> | <span style="background: #e27887; padding: 10px;">#e27887</span> | <span style="background: #d71f3c; color: #fff; padding: 10px;">#d71f3c</span> | <span style="background: #9f0e0e; color: #fff; padding: 10px;">#9f0e0e</span>
Roxo         | <span style="background: #954b97; padding: 10px;">#954b97</span> | <span style="background: #823193; padding: 10px;">#823193</span> | <span style="background: #641e75; color: #fff; padding: 10px;">#641e75</span> | <span style="background: #491f53; color: #fff; padding: 10px;">#491f53</span>
Aquamarine   | <span style="background: #9ed6e5; padding: 10px;">#9ed6e5</span> | <span style="background: #7fced6; padding: 10px;">#7fced6</span> | <span style="background: #20bec6; color: #fff; padding: 10px;">#20bec6</span> | <span style="background: #20acb4; color: #fff; padding: 10px;">#20acb4</span>
Verde        | <span style="background: #9ee5d1; padding: 10px;">#9ee5d1</span> | <span style="background: #7fd6b3; padding: 10px;">#7fd6b3</span> | <span style="background: #20c67b; color: #fff; padding: 10px;">#20c67b</span> | <span style="background: #20b472; color: #fff; padding: 10px;">#20b472</span>
Amarelo      | <span style="background: #fbe96a; padding: 10px;">#fbe96a</span> | <span style="background: #fbd068; padding: 10px;">#fbd068</span> | <span style="background: #f2b838; color: #fff; padding: 10px;">#f2b838</span> | <span style="background: #f39200; color: #fff; padding: 10px;">#f39200</span>

## Others
O others possuí diversos atributos e seu uso é:

```scss
p {
  color: color(_others, <variante>)
}
```

Variante    | Representação
:---------- | :------------:
light       | <span style="background: #fff; color: #000; padding: 10px;">#ffffff</span>
dark        | <span style="background: #444444; color: #fff; padding: 10px;">#444444</span>
dark-alpha  | <span style="background: rgba(68, 68, 68, .67); color: #fff; padding: 10px;">rgba(68, 68, 68, .67)</span>
shadow      | <span style="background: #b6b6b6; color: #000; padding: 10px;">#b6b6b6</span>
text-shadow | <span style="background: #999999; color: #000; padding: 10px;">#999999</span>
body        | <span style="background: #f2f0f0; color: #000; padding: 10px;">#f2f0f0</span>
body-alpha  | <span style="background: rgba(242, 240, 240, .9); color: #000; padding: 10px;">rgba(242, 240, 240, .9)</span>
light-alpha | <span style="background: rgba(255, 255, 255, 0); color: #000; padding: 10px;">rgba(255, 255, 255, 0)</span>