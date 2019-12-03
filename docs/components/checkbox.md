title: Ugla | Componente Checkbox
description: Conhecendo e implementando Checkbox

# Checkbox
[![header](_images/checkbox.png)](_images/checkbox.png)

Gera um checkbox com título e texto auxiliar.

## Atributos da tag

Atributo      | Input/Output   | Tipo        | Obrigatório
:------------ | :------------: | :---------- | -------------:
mainText      | `@Input`       | `String`    | Não
name          | `@Input`       | `String`    | Sim
subText       | `@Input`       | `String`    | Não
disabled      | `@Input`       | `Boolean`   | Sim
isChecked     | `@Input`       | `Boolean`   | Sim
checked       | `@Output`      | `function`  | Sim

## Como usar

```html tab='HTML'
<ugl-checkbox
    [mainText]="'Main Text'"
    [name]="'list'"
    [subtext]="'Sub Text'"
    [disabled]="false"
    [isChecked]="false"
    [checked]="checked()"
    ></ugl-checkbox>
```

```ts tab="TS"
checked() {

}
```