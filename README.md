<h1 align="center"> API REST - Fatos Históricos </h1>

<br>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)

<br>

## Projeto

Esse projeto é a API REST da aplicação Fatos Históricos, tendo como objetivo retornar um fato histórico referente ao ano(year) recebido como paramêtro.

## Tecnologias Utilizadas

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Fastify](https://github.com/fastify/fastify/)

## Como Executar

1. Clone o repositório e acesse a pasta do projeto

   ```shell
   git clone https://github.com/Santana-Victor/api-fatos-historicos.git
   cd nome-do-repositorio
   ```

2. Instale os pacotes utilizando o comando `npm install`

3. Vá até o arquivo `.env.example` na raiz do projeto e renome-o para `.env`

4. Ainda no arquivo `.env` preencha a variável `DOMAIN_ACCESS_ALLOWED`, por exemplo: `http://localhost:5173`

5. Execute o projeto com o comando `npm run dev`

## Exemplo

Utilizando o Postman (ou alguma outra ferramenta de teste de API's de sua preferência),
siga os passos abaixo:

1. Endpoint:

   - Máquina local:
     ```shell
     localhost:8080/facts/:year
     ```
   - Servidor Web:
     ```shell
     https://api-fatos-historicos.onrender.com/facts/:year
     ```

2. Substitua `:year` por `2020` por exemplo.

3. Será retornado o JSON abaixo:
   ```shell
   {
       "mensagem": "Tem início a pandemia de COVID-19"
   }
   ```

### Front-end

Link do [repositório](https://github.com/Santana-Victor/fatos-historicos.git)
