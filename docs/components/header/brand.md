title: Ugla | Componente Brand
description: Conhecendo e implementando Brand

# Brand

[![brand](../_images/brand.png)](../_images/brand.png)

O componente Brand é responsável por exibir o logo e nome do sistema.

Atributos da tag:

Atributo      | Tipo         | Obrigatório
:------------ | :----------- | -----------:
brandName     | `string`     | Sim
brandImage    | `string`     | Sim

```html
<ugl-brand
    [brandName]=''Brand name''
    [brandImage]=''./assets/imgs/logo.png''></ugl-brand>
```