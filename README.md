````markdown
# Vehicles Management Application

Este projeto consiste em uma aplicação frontend em Angular e um backend em NestJS para gerenciar veículos.  

### Funcionalidades
- Listar, criar, editar e deletar veículos.
- Backend REST API com NestJS.
- Frontend SPA com Angular.
- Dockerização para fácil deploy e execução em containers.

---
````

## Como rodar o projeto

### Requisitos
- Docker e Docker Compose instalados

### Instruções para rodar com Docker

1. Clone o repositório:
   ```bash
   git clone https://github.com/BernardoSantoz/veiculosnestang.git
   cd veiculosnestang

2. Execute o Docker Compose:

   ```bash
   docker-compose up --build
   ```

3. Acesse a aplicação:

   * Frontend: [http://localhost:80](http://localhost:80)
   * Backend: [http://localhost:3000](http://localhost:3000)

---

## Estrutura do projeto

* `/vehicles-frontend`: Código do frontend Angular
* `/backend`: Código do backend NestJS
* `docker-compose.yml`: Configuração para rodar os containers

---

## Comandos úteis

* Para rodar o backend localmente:

  ```bash
  cd backend
  npm install
  npm run start:dev
  ```

* Para rodar o frontend localmente:

  ```bash
  cd vehicles-frontend
  npm install
  npm run start
  ```

---

## Contato

Para dúvidas ou sugestões, me contate pelo [LinkedIn](https://www.linkedin.com/in/bernardosantostecno/).

```
