title: Ugla | Directives Tooltip
description: Conhecendo e implementando Tooltip

# Tooltip
A diretiva **tooltip** deve ser usada para criar visualizações de titles.

## Ativando
```html
<a href="#" uglTooltip>Link</a>
```

## Atributos aceitos na tag
Atributo        | Input/Output   | Tipo       | Obrigatório                         | Valores padrões
:-------------- | :------------: | :----------| :---------------------------------- | :-------------
uglTooltip      | `@Input`       | `Object`   | Sim, mas não precisa passar valores | -
uglTooltipTitle | `@Input`       | `String`   | Sim                                 | -


!!! info "Atributo [uglTooltip]"
  O **uglTooltip** é um valor declarativo, então ele é obrigatório. Porém, ele ainda aceita alguns valores para formatar a disposição do tooltip.
  Para tal, basta informar o objeto: `{placement: 'left', trigger: 'click'}`.

### Atributos aceitos no atributo uglTooltip
Atributo        | Valores permitidos              | Valores padrões
:-------------- | :------------------------------ | :--------------
placement       | **left**, **center**, **right** | **left**
trigger         | **click**, **hover**            | **hover**

## Implementando

```html
<div uglTooltip [uglTooltipTitle]="Title">Content</div>
```

### Com placement:

```html
<div [uglTooltip]="{placement: 'left', trigger: 'click'}"
     [uglTooltipTitle]="Title">Content</div>
```
