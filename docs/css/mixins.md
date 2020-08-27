title: Ugla | Mixins
description: Conhecendo e implementando os Mixins

# Mixins
Para fazer uso dos mixins, é necessário importar o o Sass do Ugla.

```scss
@import '~ugla/sass/index';
```

## Cross Browser
Este mixin adiciona **vendor prefix** nos atributos ou nos valores. Ao implementar o mixin é possível selecionar onde deve ser adicionado o prefix.

### Exemplo
```scss
  @include cross-browser('transform', rotate(180deg));
```

### Resultado
```css
transform: rotate(180deg);
-webkit-transform: rotate(180deg);
-moz-osx-transform: rotate(180deg);
-moz-transform: rotate(180deg);
-ms-transform: rotate(180deg);
```

### Exemplo
```scss
  @include cross-browser(width, fit-content, true);
```

### Resultado
```css
width: fit-content;
width: -webkit-fit-content;
width: -moz-osx-fit-content;
width: -moz-fit-content;
width: -ms-fit-content;
```

## Font
Este mixin adiciona os atributos font-size e font weight;

### Exemplo
```scss
@include font(1.5rem, bold);
```

### Resultado
```css
font-size: 1.5rem;
font-weight: 700;
```

## Mobile
O conteúdo adicionado dentro do mixin Mobile será renderizado apenas em dispositivos com resolução inferior a 768px.

### Exemplo
```scss
@include mobile {
  display: none;
}
```

### Resultado
```css
@media (max-width: 768px) {
  display: none;
}
```

## Tablet
O conteúdo adicionado dentro do mixin Tablet será renderizado apenas em dispositivos com resolução entre a 769px e 980px.

### Exemplo
```scss
@include tablet {
  display: none;
}
```

### Resultado
```css
@media (max-width: 980px) {
  display: none;
}
```

## Desktop
O conteúdo adicionado dentro do mixin Tablet será renderizado apenas em dispositivos com resolução superior a 1024px.

### Exemplo
```scss
@include desktop {
  display: none;
}
```

### Resultado
```css
@media (min-width: 1024px) {
  display: none;
}
```

## Safari Only
Este mixin adiciona um hack css exclusivo para Safari, use apenas quando as regras padrões de estilização não funcionam 100% no Safari.

```scss
@include safariOnly {
  -webkit-appearance: none;
  padding-bottom: calc(1rem - 2px);
}
```

## Firefox Only
Este mixin adiciona um hack css exclusivo para Firefox, use apenas quando as regras padrões de estilização não funcionam 100% no Firefox.

```scss
@include firefoxOnly {
  -webkit-appearance: none;
  padding-bottom: calc(1rem - 2px);
}
```

## Truncate
Este mixin trunca textos e adiciona os `...`, é possível truncar na primeira linha ou, informar em qual linha quer que seja adicionado o truncate.

### Exemplo

```scss
@include truncate($lines: 2);
```

### Resultado

!!! info "Importante"
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...

## Alternativas ao Truncate
Existe também duas classes que podem ser adicionadas aos elementos HTML para truncar:

### Truncate
Adicione a classe `.truncate` para truncar a frase e com uma única linha.

### Trucate Two
Adicione a classe `.truncate-two` para truncar a frase na segunda linha.