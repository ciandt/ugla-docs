---
id: contributing
title: Contributing
---

Você gostaria de contribuir com o projeto Ugla?

## Biblioteca Ugla
Para contribuir para o projeto Ugla, é necessário ter antes de tudo um ambiente preparado para executar Angular.

### Começando
Faça um fork do [Ugla](https://github.com/ciandt/ugla), realize as alterações que achar necessário e submeta uma **Pull Request**.
As PRs são avaliadas e o código será testado, se estiver de acordo com nossos padrões, será integrado ao código principal e uma nova versão será gerada.

### Executando
Para realizar testes em momento de desenvolvimento, execute o comando `npm start`.
Lembre-se, o `npm start` executa o `ng serve`.

### Testes
Lembre-se de antes de submeter qualquer trecho de código, execute os comandos abaixo e corrija possíveis alertas:

```bash
npm run lint
```

Este comando irá rodar o lint para o Typescript e para o SCSS.

### Criando componentes
Para criar um componente, execute o comando:
```bash
ng g c components/<nome do seu componente> --project=ugla
```

Para criar uma diretiva, execute o comando:
```bash
ng g directive directives/<nome da diretiva> --project=ugla
```

Para criar um serviço, execute o comando:
```bash
ng g service services/<nome do serviço> --project=ugla
```

### Testando em um projeto local
Na raiz do Ugla execute o comando:
```bash
npm run build-lib
```

O diretório `dist` será gerado com um arquivo conforme o seguinte: `ugla-x.y.z.tgz`, sendo X, Y e Z o número da versão.

Em seguida, acesse o projeto que deseja usar o Ugla e no `package.json` inclua a linha abaixo nas dependencias:

```bash
"ugla": "<diretório do ugla>/dist/ugla-x.y.z.tgz"
```

Execute o `npm install` no projeto e o Ugla será instalado e poderá ser testado como se estivesse usando uma versão publicada.
