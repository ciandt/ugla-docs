title: Ugla | Componente People Card
description: Conhecendo e implementando People Card

# People Card

[![people](people.png)](people.png)


O componente People Card é responsável por exibir os dados do usuário logado e o botão de **logout**.

## Atributos da tag

Atributo      | Tipo                      | Obrigatório
:------------ | :------------------------ | -----------:
people        | [People](../../../models/people/)  | Sim
logoutText    | `string`                  | Sim
logoutAction  | `function`                | Sim

```html
<ugl-people-card
  [people]="people"
  [logoutText]="'Logout'"
  (logoutAction)="logout()"></ugl-people-card>
```