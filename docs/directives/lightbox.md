title: Ugla | Directives Lightbox
description: Conhecendo e implementando Lightbox

# Lightbox
A diretiva **Lightbox** deve ser usada para criar modais exclusivamente de visualização.

## Ativando
```html
<a href="#" uglLightbox>Open</a>
```

## Atributos aceitos na tag
Atributo      | Input/Output   | Tipo       | Obrigatório           | Valores padrões
:------------ | :------------: | :----------| :-------------------- | :-------------
uglLightbox   |                | -          | Sim                   | -
image         | `@Input`       | `String`   | Não                   | -
action        | `@Output`      | `Function` | Não                   | -
actionIcon    | `@Input`       | `String`   | Sim se tiver action   | -
closeOut      | `@Input`       | `Boolean`  | Não                   | false

!!! info "Atributo [image]"
    O atributo [image] deve ser preenchido com uma string contendo a url da imagem que será renderizada. É eceito imagens com as extensões **png**, **jpg**, **jpeg** e **bmp**.

!!! info "Atributo (action)"
    Deve ser passado uma função ao atributo (action). Quando o atributo for declarado, um botão será gerado na parte inferior da lightbox. Ao clicar no botão, a função do action será executada e a modal será fechada.

!!! info "Atributo [actionImage]"
    O atributo [actionIcon] recebe o nome de um ícone do [Material](https://material.io/resources/icons/?style=baseline) e, quando houver ícone, ele será renderizado no botão.

!!! info "Atributo [closeOut]"
    Quando atribuído como TRUE, permite fechar o lightbox clicando fora dele.

## Implementando

```html tab='HTML'
<a href="#"
  uglLightbox
  [image]="'https://i.pinimg.com/originals/15/ba/b4/15bab4ee6c41dae1c5cbe3af0d9b6ef2.jpg'"
  (action)="lightboxAction(event)"
  [actionIcon]="'delete_outline'">Open</a>
```

```typescript tab='TS'
lightboxAction(event: any) {
  console.log('Test', event);
  return false;
}
```