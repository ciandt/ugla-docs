title: Ugla | Colaborando
description: Como colaborar com o projeto Ugla

# Contribuindo
Você gostaria de contribuir com essa documentação?


## Documentação Ugla
Para contribuir, basta realizar um **fork** e realizar as devidas alterações, em seguida, submeter uma PR.

### Rodando o projeto local

Para executar este projeto, é necessário ter a versão `3.7` do Python instalada.

**Instale o pip do Python:**
```bash
python -m pip install --upgrade pip
```

**Instale o MKDocs e suas dependencias:**
```bash
pip install mkdocs mkdocs-material pymdown-extensions pygments
```

### Iniciando o projeto
Execute o comando `mkdocs serve` para iniciar o servidor local na porta `8000`.

### Build final
Execute o comando baixo para realizar uma build para produção.

```build
mkdocs build --verbose --clean --strict
``` 