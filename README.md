# 🎟️ API de Gerenciamento de Tickets de Suporte

Uma API simples e eficiente para gerenciar tickets de suporte, desenvolvida com **Node.js puro** (sem frameworks).

## ✨ Funcionalidades

- ✅ **Criar tickets** - Registre novos tickets de suporte
- ✅ **Listar tickets** - Visualize todos os tickets cadastrados
- ✅ **Atualizar tickets** - Modifique informações dos tickets
- ✅ **Atualizar status** - Altere o status e adicione solução
- ✅ **Deletar tickets** - Remova tickets do sistema

## 📋 Requisitos

- Node.js (versão 16+)
- npm

## 🚀 Como Usar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Iniciar o Servidor
```bash
npm run dev
```

O servidor será iniciado em `http://localhost:3333`

## 📡 Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| **POST** | `/tickets` | Criar novo ticket |
| **GET** | `/tickets` | Listar todos os tickets |
| **PUT** | `/tickets/:id` | Atualizar ticket |
| **PATCH** | `/tickets/:id/close` | Atualizar status e solução |
| **DELETE** | `/tickets/:id` | Deletar ticket |

## 📝 Exemplo de Uso

### Criar um Ticket
```bash
POST http://localhost:3333/tickets

{
  "equipment": "pc",
  "description": "O computador está travando",
  "user_name": "João Silva"
}
```

### Listar Tickets
```bash
GET http://localhost:3333/tickets
```

### Atualizar Ticket
```bash
PUT http://localhost:3333/tickets/:id

{
  "equipment": "pc",
  "description": "Descrição atualizada"
}
```

### Fechar Ticket (com solução)
```bash
PATCH http://localhost:3333/tickets/:id/close

{
  "status": "resolvido",
  "solution": "Reinstalei o sistema operacional"
}
```

### Deletar Ticket
```bash
DELETE http://localhost:3333/tickets/:id
```

## 📂 Estrutura do Projeto

```
src/
├── server.js              # Servidor principal
├── controllers/           # Lógica dos endpoints
│   └── tickets/
│       ├── create.js      # Criar ticket
│       ├── index.js       # Listar tickets
│       ├── update.js      # Atualizar ticket
│       ├── updateStatus.js # Atualizar status
│       └── remove.js      # Deletar ticket
├── database/             # Persistência de dados
│   ├── database.js
│   └── db.json
├── middlewares/          # Middlewares da aplicação
│   ├── jsonHandler.js    # Processamento JSON
│   └── routeHandler.js   # Roteamento
├── routes/              # Definição das rotas
│   ├── index.js
│   └── tickets.js
└── utils/              # Funções utilitárias
    ├── extractQueryParams.js
    └── parseRoutPath.js
```

## 🛠️ Tecnologias

- **Node.js** - Runtime JavaScript
- **HTTP Module** - Servidor HTTP nativo
- **JSON** - Persistência de dados

## 👤 Autor

Janailson Alves

## 📄 Licença

ISC
