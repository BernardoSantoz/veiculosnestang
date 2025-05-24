# Vehicles API

Este projeto implementa um CRUD simples para veículos, utilizando NestJS.

## Sobre a Persistência de Dados

- Os dados são carregados a partir de um arquivo JSON (`vehicles.json`) no momento em que a aplicação inicia.
- Todas as operações (criação, atualização, remoção) manipulam os dados **apenas em memória**.
- **As alterações não são persistidas no arquivo JSON**. Quando a aplicação reinicia, os dados retornam ao estado inicial do arquivo.
- Este comportamento é intencional para simplificar o projeto e demonstrar o funcionamento básico da API.

## Funcionalidades

- Listar todos os veículos
- Buscar veículo por ID
- Criar um novo veículo (ID gerado automaticamente)
- Atualizar veículo existente
- Remover veículo por ID

## Observações

- Erros de busca, atualização ou remoção de veículos inexistentes retornam status HTTP 404 com mensagem apropriada.
