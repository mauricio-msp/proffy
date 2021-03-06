<h1 align="center">
  <img alt="Proffy" src=".github/logo.svg" height="100px" />
  <br>Next Level Week #2<br/>
</h1>

<p align="center">
<img alt="Develop by" src="https://img.shields.io/badge/develop%20by-Mauricio%20Porfirio-blue?style=flat">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/mauricio-msp/proffy?color=informational&style=flat">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/mauricio-msp/proffy?color=important&style=flat">
  <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1?style=flat-square">
  <img alt="Made By" src="https://img.shields.io/github/license/mauricio-msp/proffy?&style=flat&logo=Google-Sheets">
</p>

<p align="center">
  <a href="#bookmark-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#boom-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :bookmark: Sobre

O **Proffy** é uma plataforma de estudos online para conectar alunos e professores de forma rápida, fácil e prática. No qual os professores tem a possibilidade de registrar aulas, podendo adicionar informações como a disciplina, o custo e horário e aos alunos a possibilidade de buscar pelas aulas cadastradas e entrar em contato com os "proffys" por WhatsApp.
  
Essa aplicação foi realizada durante a **Next Level Week #2**, projeto da [Rocketseat](https://rocketseat.com.br/).

## :pushpin: Etapas

- #### server :white_check_mark:
- #### web :white_check_mark:
- #### mobile :white_check_mark:

## :rocket: Tecnologias

-  [Node.js](https://nodejs.org/en/)
-  [Express](https://expressjs.com/)
-  [Knex.JS](http://knexjs.org/)
-  [ReactJS](https://reactjs.org/)
-  [React Native](https://reactnative.dev/)
-  [Expo](https://expo.io/)
-  [Typescript](https://www.typescriptlang.org/)
-  [axios](https://github.com/axios/axios)

## :star2: Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/mauricio-msp/proffy.git
```

2. Executando a Aplicação (Back-end):

```sh
  $ cd server
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Configurando o banco de dados e criando as tabelas.
  $ yarn knex:migrate # ou npm run knex:migrate
  # Inicie a API
  $ yarn start # ou npm start
```

3. Executando a Aplicação (Front-end):

```sh
  $ cd web
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start
```

4. Executando a Aplicação (Mobile):

```sh
  $ cd mobile
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação mobile
  $ yarn start # ou npm start
```
## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
<sup>Projeto desenvolvido com a tutoria de [Diego Fernandes](https://github.com/diego3g), da [Rocketseat](rocketseat.com.br).</sup>
