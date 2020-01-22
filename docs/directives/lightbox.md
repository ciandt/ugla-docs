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
filesUrl      | `@Input`       | `String[]` | 1                     | -
action        | `@Output`      | `Function` | Não                   | -
actionIcon    | `@Input`       | `String`   | Sim se tiver action   | -
closeOut      | `@Input`       | `Boolean`  | Não                   | false

!!! info "Atributo [filesUrl]"
    O atributo [filesUrl] deve ser preenchido com um array de string contendo as urls das imagens ou pdfs que serão renderizados. É eceito imagens com as extensões **png**, **jpg**, **jpeg**, **bmp** e arquivos em **pdf**. Se adicionado apenas 1 item, não será renderizado a navegação. Para que a mesma seja renderizada, é necessário o array possuir mais 2 ou mais elementos.

!!! info "Atributo (action)"
    Deve ser passado uma função ao atributo (action). Quando o atributo for declarado, um botão será gerado na parte inferior da lightbox. Ao clicar no botão, a função do action será executada e a modal será fechada. O atributo recebe por padrão o numero do item ativo no momento.

!!! info "Atributo [actionIcon]"
    O atributo [actionIcon] recebe o nome de um ícone do [Material](https://material.io/resources/icons/?style=baseline) e, quando houver ícone, ele será renderizado no botão.

!!! info "Atributo [closeOut]"
    Quando atribuído como TRUE, permite fechar o lightbox clicando fora dele.


## Atalhos
O Lighbox possui um atalho de teclado implementado.

Tecla | Função
:---- | :------
`ESC` | Fecha o lightbox

## Implementando

```html tab='HTML 1'
<a href="#"
  uglLightbox
  [filesUrl]="['https://i.pinimg.com/originals/15/ba/b4/15bab4ee6c41dae1c5cbe3af0d9b6ef2.jpg', 'https://blog.saipos.com/wp-content/uploads/2018/11/2-Onde-achar-o-n%C3%BAmero-do-cupom-fiscal-SAIPOS-Sistema-para-Restaurantes.png']"
  (action)="lightboxAction($event)"
  [actionIcon]="'delete_outline'"
  [closeOut]="true">Open</a>
```

```html tab='HTML 2'
<a href="#"
  uglLightbox
  [filesUrl]="['https://i.pinimg.com/originals/15/ba/b4/15bab4ee6c41dae1c5cbe3af0d9b6ef2.jpg']"
  (action)="lightboxAction($event)"
  [actionIcon]="'delete_outline'"
  [closeOut]="true">Open</a>
```

```typescript tab='TS'
lightboxAction($event: string) {
  console.log('Position', $event);
  return false;
}
```