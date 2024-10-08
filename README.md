# AdonisJS Backend

Este é o backend da aplicação, desenvolvido com AdonisJS e PostgreSQL para o banco de dados.

## Funcionalidades

- **Autenticação**: Implementada com JWT.
- **CRUD de Tarefas**: Endpoints para criar, ler, atualizar e deletar tarefas.
- **Gerenciamento de Usuários**: Endpoints para criar, editar e deletar usuários.
- **Validação de Dados**: Implementada em todos os endpoints.
- **Migrations**: Configuração de banco de dados usando Lucid ORM.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados na sua máquina:

- **Node.js** (versão LTS recomendada)
- **Yarn** ou **npm** (gerenciador de pacotes)
- **PostgreSQL** (para o banco de dados)

## Configuração

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/gabrielbomfimoliveira/adonis-backend
   cd adonis-backend
   
2. **Instale as Dependências**
   ```bash
   npm install
   ou
   yarn install

3. **Configuração do Banco de Dados**
   Crie um banco de dados PostgreSQL.
   Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente para o banco de dados:
   ```bash
   DB_CONNECTION=pg
   PG_HOST=127.0.0.1
   PG_PORT=5432
   PG_USER=seu_usuario
   PG_PASSWORD=sua_senha
   PG_DB_NAME=nome_do_banco

4. **Gerando a APP_KEY**
No terminal, execute o comando abaixo para gerar uma nova APP_KEY:
   ```bash
    adonis key:generate
Isso vai gerar uma chave única e automaticamente adicionar ao arquivo .env.

5. **Execute as Migrations**
   Para criar as tabelas no banco de dados, execute o comando:
   ```bash
   adonis migration:run

6. **Inicie o Servidor**
   Para iniciar o servidor AdonisJS em ambiente de desenvolvimento:
   ```bash
   adonis serve --dev
O servidor estará disponível em http://localhost:3333.

**Melhorias Futuras**

- Websockets para Atualização Constante: Implementar Websockets para garantir a atualização em tempo real dos dados na aplicação.
- Tradução e Internacionalização (i18n): Adicionar suporte para múltiplos idiomas utilizando uma biblioteca de i18n.
- Testes Automatizados: Implementar testes unitários e de integração para garantir a estabilidade do código.
