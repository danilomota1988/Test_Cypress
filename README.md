# Test_Cypress

Este repositório é dedicado a testes automatizados utilizando o framework **Cypress**. Ele contém exemplos de configuração, execução e estrutura de testes de ponta a ponta (E2E) para uma aplicação web.

## Estrutura do Projeto

O repositório possui a seguinte estrutura principal:

### Arquivos Principais

- **README.md**: Este arquivo com as instruções para configurar e utilizar o projeto.
- **package.json**: Arquivo de configuração do Node.js contendo dependências e scripts.
- **package-lock.json**: Garante que as versões das dependências sejam consistentes.
- **cypress.config.js**: Arquivo de configuração do Cypress para customizar as opções de teste.

### Diretórios

- **cypress/**:
  - **e2e/**: Contém os testes de ponta a ponta, que verificam o comportamento completo da aplicação.
  - **fixtures/**: Dados simulados, como arquivos JSON para mockar respostas de API.
  - **screenshots/**: Capturas de tela automáticas de falhas nos testes.
  - **support/**: Arquivos de suporte, incluindo comandos customizados e configurações globais.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 14 ou superior)
- **npm** (geralmente instalado junto com o Node.js)

Para verificar, execute no terminal:

node -v npm -v

## Instalação do Projeto

1. Clone este repositório:

git clone https://github.com/danilomota1988/Test_Cypress.git cd Test_Cypress

2. Instale as dependências do projeto:

npm install

## Instalação do Cypress

Caso o Cypress não esteja instalado no projeto ou localmente, siga os passos abaixo:

1. Instale o Cypress como dependência de desenvolvimento:

npm install cypress --save-dev


2. Verifique se a instalação foi bem-sucedida executando:

npx cypress verify


3. Para abrir a interface do Cypress pela primeira vez:

npx cypress open


Isso criará automaticamente a estrutura de pastas do Cypress, caso ainda não exista.

## Executando os Testes

### Com Interface Gráfica

Para executar os testes e visualizar as interações na aplicação:

npx cypress open

### No Modo Headless

Para rodar os testes diretamente no terminal:

npx cypress run

## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para suas alterações:

git checkout -b minha-nova-feature

3. Envie suas mudanças para revisão:

git push origin minha-nova-feature

4. Crie um pull request na página do repositório.

## Licença

Este projeto está sob a licença MIT.
