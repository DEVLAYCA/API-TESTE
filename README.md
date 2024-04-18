
# Description

Criei um CRUD para o Teste Acanto (create, read, update, delete) dentro do banco de dados MySql, para o cadastramento de carros, nesse CRUD eu cadastrei o id, o modelo e a placa de cada veículo.

## Organização  das pastas

Realizei as configurações iniciais instalando as depedências do projeto. Após isso, inseri uma pasta denominada **"src"**  na raiz do projeto, dentro dessa pasta foi criado uma subpasta para o servidor, denominada **"services"**. Dentro da pasta **"src"** criei um arquivo denominado **"routes"** para o armazenamento de todas as rotas utilizadas. Para controlar as rotas eu utilizei o framework express.

Na raiz do projeto **"API"**, criei um arquivo de configuração de variável de ambiente, denominada **".env"**, para deixar a API mais organizada (apesar de ser uma prática não recomendada, deixei apenas para fins didáticos).

Novamente, dentro da pasta **"src"**, criei duas subpastas **"controllers"** e **"services"**.  Dentro da pasta **"controllers"** foi criado um arquivo javascript **"CarroController.js"** e na pasta services criei um arquivo **"CarroService.js"**. O arquivo **"CarroController"** foi utilizado para controlar as rotas da API, descrevendo os comandos de cada rota solicitada, o arquivo **"CarroService"** é responsável por executar a lógica com o banco de dados MySql.



## Installation

```bash
# Install MySql Server (Caso não tenha) *Required
 https://dev.mysql.com/downloads/file/?id=525167

# clone repository *Required
 git clone https://github.com/DEVLAYCA/API-TESTE.git

# install modules *Required
 npm install

```

## Running the app

```bash

# watch mode
$ npm start

```

## Routes:

## Carros

```bash
# GET http://localhost:3333/carros (to get carros list)
 Result:[
    {"descricao":"Fiat Uno"},
    {"descricao":"Volkswagen Gol"},
    {"descricao":"Chevrolet Onix"}
]
```

```bash
# GET http://localhost:3333/carro/1 (to get car details)
Result:{
    "id":1,"modelo":"Fiat Uno","placa":"ABC1234"
}
```

```bash
# POST http://localhost:3333/carro (to insert new car)
body:{
    "modelo": "Fusca",
    "placa": "RPJ5B48"
}
Result:{
    "modelo":"Fusca ","placa":"RPJ5B48"
}
```

```bash
# PUT http://localhost:3333/carro/1 (to update car)
body:{
    "modelo": "Fusca 1999",
    "placa": "ADV4567"
}
Result:{
    "codigo":"2","modelo":"Fusca 1999","placa":"ADV4567"
}
```

```bash
# DELETE http://localhost:3333/carro/1 (to delete car)
 no body required*
Result: { }
```

```bash
# Website used to test routes:
 https://resttesttest.com/
```

## Stay in touch

- Author - <a href="https://www.linkedin.com/in/layrane-le%C3%A3o-451946278/" target="_blank">Layrane Leão</a>
