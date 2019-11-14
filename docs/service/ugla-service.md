title: Ugla | Serviço Ugla Service
description: Conhecendo e implementando Ugla Service

# Ugla Service

O serviço Ugla Service é responsável por algumas funções da biblioteca, é nele que são feitas algumas definições e configurações.
Para usar algumas das configurações, é necessário injetar o serviço:

```typescript
constructor(private ugla: UglaService) {}
```

## Theme

### Configurar Theme
Para configurar um theme, é necessário no arquivo `app.module.ts` importar a lib e o enum de themes:

```typescript
import { Themes, UglaModule } from 'ugla';
```

Após isso, é necessário adicionar na importação do módulo:

```typescript
@NgModule({
  declarations: [...],
  imports: [
    UglaModule.forRoot({ themeName: Themes.AQUAMARINE }),
  ],
  providers: [...],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Themes
Cada tema representa uma **cor focal**, essa cor é a principal no sistema e faz com que alguns componentes automáticamente mudem para a cor escolhida.
O [Header](../../components/header), por exemplo assume o background na cor do tema selecionado.

Calor       | Cor                                           | Hexadecimal | Representação
:---------- | :-------------------------------------------- | ----------- | -----------:
GRAY        | Cinza                                         | #656565     | [![gray](gray.png)](gray.png)
RED         | Vermelha                                      | #D71F3C     | [![red](red.png)](red.png)
PURPLE      | Roxo                                          | #641E75     | [![purple](purple.png)](purple.png)
AQUAMARINE  | Aquamarine                                    | #20BEC6     | [![aquamarine](aquamarine.png)](aquamarine.png)
GREEN       | Verde                                         | #20C67B     | [![green](green.png)](green.png)
YELLOW      | Amarelo                                       | #F2B838     | [![yellow](yellow.png)](yellow.png)
WHITE       | Branco nos background e Aquamarine como focal | #FFFFFF     | [![white](white.png)](white.png)

### Funções
O Service oferece algumas funções:

#### get Theme
E para ter como o retorno do tema selecionado:
```typescript
let theme = this.ugla.theme;
```
O retorno para as cores com exeção do branco sempre será: `theme-colored-<nome da cor>`, e par ao branco será `theme-white`;

#### get Color
Para ter como retorno a cor do tema selecionadao: 
```typescript
let color = this.ugla.color;
```
O retorno sempre será: `<nome da cor>`.

