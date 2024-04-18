
## Description

Criei um CRUD para o Teste Acanto (create, read, update, delete) dentro do banco de dados MySql, para o cadastramento de carros, nesse CRUD eu cadastrei o id, o modelo e a placa de cada veículo.

Aqui está uma ideia do modelo da tabela desenvolvida  👇.

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
 "result":[
    {"descricao":"Fiat Uno"},
    {"descricao":"Volkswagen Gol"},
    {"descricao":"Chevrolet Onix"}
    ]
```

```bash
# GET http://localhost:3333/carro/1 (to get car details)
"result":{
    "id":1,"modelo":"Fiat Uno","placa":"ABC1234"
    }
```

```bash
# POST http://localhost:3333/carro (to insert new car)
body:{
    "modelo": "Fusca",
    "placa": "RPJ5B48"
}
Response: 200 OK:{
    "modelo":"Fusca ","placa":"RPJ5B48"
}
```

```bash
# PUT http://localhost:3333/carro/1 (to update car)
body:{
    "modelo": "Fusca 1999",
    "placa": "ADV4567"
}
Response: 200 OK:{
    "codigo":"2","modelo":"Fusca 1999","placa":"ADV4567"
    }
```

```bash
# DELETE http://localhost:3333/carro/1 (to delete car)
 no body required*
Response: 200 OK: { }
```

```bash
# Website used to test routes:
 https://resttesttest.com/
```

## Stay in touch

- Author - [Layrane Leão](https://www.linkedin.com/in/layrane-le%C3%A3o-451946278/)

## License

Nest is [MIT licensed](LICENSE).
dev
