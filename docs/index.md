title: Ugla | Style Guide
description: Um guia completo para uso correto do Ugla

# Styleguide

**Version**

![version](https://img.shields.io/npm/v/ugla)

O projeto **Ugla** foi desenvolvido com o objetivo de minimizar esforços no desenvolvimento FrontEnd de sistemas, trazendo consistencia e segurança para projetos que necessitam conversar entre si ou, que sejam totalmente independentes, mantendo uma identidade única e de fácil entendimento.

## O que é Ugla?
Ugla é na realidade um projeto que visa unir em seu nome tudo aquilo que se faz necessário para o desenvolvimento de um sistema.

### Protótipo
Todos seus componentes são planejados separadamente e adicionados a uma biblioteca de protótipo. Seus componentes são desenvolvidos no [**Sketch**](https://www.sketch.com/).

### Angular
Cada componente do protótipo é desenvolvido dentro de uma biblioteca [**Angular**](https://angular.io/) que, considerando cada possibilidade, implementa de forma prática o que foi previsto no protótipo.

### SCSS
Junto a biblioteca Angular, o projeto possuí uma estrutura [**SCSS**](https://sass-lang.com/) que contém classes que auxiliam no desenvolvimento das aplicações.

## Dependências
Tentamos desenvolver o Ugla com código 100% limpo, sem usar bibliotecas que não são de fato úteis e indispensáveis. Porém, não conseguimos uma pureza em 100% e por isso temos algumas bibliotecas inclusas.

### Ícones
Os ícones presentes no Ugla fazem parte do pacote de ícones do [**Material**](https://material.io/resources/icons/?style=baseline).

## Instalando e Configurando
Estando em um projeto Angular 2 ou mais, basta executar o comando abaixo no terminal, na raiz do projeto:

```bash
npm i ugla
```

Instale também as dependencias necessárias para o Ugla funcionar corretamente:

```bash
npm i filepond filepond-plugin-file-validate-size filepond-plugin-file-validate-type filepond-plugin-image-crop filepond-plugin-image-exif-orientation filepond-plugin-image-preview filepond-plugin-image-resize filepond-plugin-image-transform js-datepicker ngx-filepond moment tooltip.js
```

Em seguida, é necessário configurar o Ugla dentro do projeto:

No arquivo: `path/src/app/app.module.ts`:

```typescript
import { UglaModule, Themes } from 'ugla';
```

```typescript hl_lines="4"
imports: [
  BrowserModule,
  ...,
  UglaModule.forRoot({themeName: Themes.YELLOW}),
],
```

!!! info "Themas"
    Você pode escolher entre um dos temas que o Ugla possuí: **RED**, **YELLOW**, **AQUAMARINE**, **GREEN**, **GRAY** e **WHITE**.

E, no arquivo `path/style.scss`:

```scss
@import '~ugla/src/sass/index';
```

Com isso, seu projeto já está com Ugla e pronto para ser usado.