
title: Ugla | Componente Datepicker
description: Conhecendo e implementando Datepicker

# Datepicker

[![Datepicker](_images/datepicker-1.png)](_images/datepicker-1.png)

[![Datepicker](_images/datepicker-2.png)](_images/datepicker-2.png)

[![Datepicker](_images/datepicker-3.png)](_images/datepicker-3.png)

[![Datepicker](_images/datepicker-4.png)](_images/datepicker-4.png)

O componente datepicker gera um campo input com ícone de calendário.
Para sua criação, foi usado a biblioteca `js-datepicker`[^1] e a biblioteca `moment`[^2].

## Atributos da tag

Atributo                | Input/Output   | Tipo        | Obrigatório
:---------------------- | :------------: | :---------- | -------------:
name                    | `@Input`       | `String`    | Não
label                   | `@Input`       | `String`    | Sim
message                 | `@Input`       | `String`    | Não
options                 | `@Input`       | `any`       | Sim
disabled                | `@Input`       | `Boolean`   | Sim
required                | `@Input`       | `Boolean`   | Sim
invalid                 | `@Input`       | `Boolean`   | Sim
messageInvalidSelection | `@Input`       | `String`    | Sim
messageRequired         | `@Input`       | `String`    | Sim
language                | `@Input`       | `String`    | Sim
onSelectValue           | `@Output`      | `function`  | Sim

!!! info "Atribuito invalidInitialDate"
    Quando o atributo receber o valor `false`, ele será exibido corretamente. Quando receber `true`, ele será assumirá o estado de erro.

!!! info "Atributo language"
    O atributo language precisa receber um valor conforme a tabela encontrada no [Stackoverflow](https://stackoverflow.com/a/55827203/1556370), este valor é usado para formatar corretamente a data.

!!! info "Atributo options"
    Para preencher corretamente o atributo options, veja a documentação do [js-datepicker](https://github.com/qodesmith/datepicker).

## Como usar

```html tab='HTML'
<ugl-datepicker [label]="'Inital Date'"
                [name]="'initialDate'"
                [options]="onInitDatepicker()"
                [message]="'Initial date must be before final date'"
                [messageRequired]="'Field required'"
                [invalid]="false"
                [required]="true"
                [messageInvalidSelection]="'This date is invalid for selection'"
                [language]="'pt-BR'"
                (onSelectValue)="onChangeInitialDate($event)"
                #initialDate></ugl-datepicker>
```

```ts tab="TS"
// Options
onInitDatepicker() {
  return {
    startDate: new Date(),
    position: 'br'
  };
}

onChangeInitialDate(date: Date) {
  console.log(date)
}
```

```bash tab="Console"
Wed Nov 27 2019 00:00:00 GMT-0300 (Horário Padrão de Brasília)
```

[^1]: `js-datepicker: ^4.6.6`: https://www.npmjs.com/package/js-datepicker
[^2]: `moment: ^2.24.0`: https://www.npmjs.com/package/moment 

