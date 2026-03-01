# User Management System

Aplicação fullstack para gerenciamento de usuários, desenvolvida com React no frontend e Node.js/Express no backend, utilizando Prisma ORM para integração com banco de dados MongoDB.

O projeto implementa operações básicas de CRUD com persistência em banco real e comunicação via API REST.

---

## 🛠️ Tecnologias Utilizadas

**Frontend**
- React
- Vite
- Axios
- CSS

**Backend**
- Node.js
- Express
- Prisma ORM
- MongoDB Atlas

---

## 📁 Estrutura do Projeto

O repositório está dividido em duas pastas principais:

```
├── backend/      # API em Node.js com Express e Prisma
│   ├── prisma/   # Esquema e migrações do banco de dados
│   ├── server.js # Ponto de entrada do servidor
│   └── package.json
│
└── frontend/     # Aplicação React criada com Vite
    ├── src/      # Componentes, estilos e páginas
    ├── public/   # Arquivos estáticos
    └── package.json
```
A comunicação entre as camadas é realizada via requisições HTTP (GET, POST, DELETE), mantendo separação clara de responsabilidades.

## 🚀 Pré-requisitos

Antes de começar, verifique se você tem instalado:

- [Node.js](https://nodejs.org/) (v16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Uma instância do **MongoDB** (local ou Atlas)

> ⚠️ A aplicação utiliza variáveis de ambiente para conexão com o banco de dados.

## 🛠️ Configuração

1. Clone o repositório:
   ```bash
   git clone <url-do-repo>
   cd user-management-system
   ```

2. Crie um arquivo `.env` na pasta `backend` com a variável:
   ```env
   DATABASE_URL="mongodb://<user>:<pass>@<host>:<port>/<database>"
   ```

3. Instale dependências e prepare o banco:
   ```bash
   cd backend
   npm install
   npx prisma db push   # aplica esquema no MongoDB

   cd ../frontend
   npm install
   ```

## ▶️ Executando a aplicação

- **Backend** (servidor em `http://localhost:3000` por padrão):
  ```bash
  cd backend
  npm run dev
  ```

- **Frontend** (app React em `http://localhost:5173` por padrão):
  ```bash
  cd frontend
  npm run dev
  ```

Acesse o frontend no navegador e utilize a interface para cadastrar, listar ou excluir usuários.

## 🧩 Funcionalidades

- 📄 Listar todos os usuários
- ➕ Adicionar novo usuário
- 🗑️ Remover usuário existente

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch com sua feature (`git checkout -b feature/nome`)
3. Faça commits claros (`git commit -m "Descrição"`)
4. Envie para o repositório remoto e abra um Pull Request

## 📜 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

