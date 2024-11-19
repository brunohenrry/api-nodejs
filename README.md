### **README - Simple API**

---

## **Simple API**

Esta é uma API simples criada com **Node.js**, utilizando **Express**, **MongoDB** e **JWT** para autenticação. A API permite gerenciar usuários, produtos e autenticação com operações CRUD básicas.

---

### **Funcionalidades**

1. **Autenticação JWT**:
   - Registro de usuários
   - Login e geração de token JWT
2. **Gerenciamento de Produtos**:
   - Listar, criar, editar e excluir produtos

---

### **Requisitos**

- **Node.js** (v14 ou superior)
- **MongoDB** (instância local ou remota)
- Ferramenta para teste de API (Postman, Insomnia ou cURL)

---

### **Instalação**

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-repositorio/simple-api.git
   cd simple-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env`:
   Crie o arquivo `.env` na raiz do projeto com os seguintes valores:
   ```env
   MONGO_URI=mongodb://localhost:27017/simple-api
   JWT_SECRET=supersecretkey
   PORT=3000
   ```

4. Inicie o servidor:
   ```bash
   npm run dev
   ```

O servidor será iniciado em `http://localhost:3000/api`.

---

### **Rotas**

#### **1. Autenticação**

##### **POST /api/register**  
**Descrição**: Registrar um novo usuário.  
**Payload**:  
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "senha123"
}
```
**Resposta**:  
```json
{
  "_id": "id-do-usuario",
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "hash-da-senha"
}
```

---

##### **POST /api/login**  
**Descrição**: Login de usuário e geração de token JWT.  
**Payload**:  
```json
{
  "email": "joao@email.com",
  "password": "senha123"
}
```
**Resposta**:  
```json
{
  "user": {
    "_id": "id-do-usuario",
    "name": "João Silva",
    "email": "joao@email.com"
  },
  "token": "token.jwt.aqui"
}
```

---

#### **2. Produtos**

##### **GET /api/products**  
**Descrição**: Listar todos os produtos.  
**Resposta**:  
```json
[
  {
    "_id": "id-do-produto",
    "name": "Produto A",
    "price": 10.99,
    "description": "Descrição do produto"
  }
]
```

---

##### **POST /api/products**  
**Descrição**: Criar um novo produto.  
**Payload**:  
```json
{
  "name": "Produto A",
  "price": 10.99,
  "description": "Descrição do produto"
}
```
**Resposta**:  
```json
{
  "_id": "id-do-produto",
  "name": "Produto A",
  "price": 10.99,
  "description": "Descrição do produto"
}
```

---

##### **PUT /api/products/:id**  
**Descrição**: Atualizar um produto pelo `id`.  
**Payload**:  
```json
{
  "name": "Produto A Atualizado",
  "price": 15.99,
  "description": "Descrição atualizada"
}
```
**Resposta**:  
```json
{
  "_id": "id-do-produto",
  "name": "Produto A Atualizado",
  "price": 15.99,
  "description": "Descrição atualizada"
}
```

---

##### **DELETE /api/products/:id**  
**Descrição**: Remover um produto pelo `id`.  
**Resposta**:  
```json
{
  "message": "Produto removido com sucesso."
}
```

---

### **Scripts Disponíveis**

- **`npm run start`**: Inicia o servidor em modo de produção.
- **`npm run dev`**: Inicia o servidor em modo de desenvolvimento com recarregamento automático.

---

### **Ferramentas Utilizadas**

- **Node.js**: Para o servidor.
- **Express**: Framework web.
- **MongoDB**: Banco de dados.
- **Mongoose**: ORM para MongoDB.
- **JWT**: Autenticação baseada em token.
- **Bcrypt.js**: Hash de senhas.

---

### **Contribuição**

1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade:  
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Faça o commit de suas alterações:  
   ```bash
   git commit -m "Descrição da funcionalidade"
   ```
4. Envie para a branch principal:  
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. Abra um Pull Request.

---

### **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).  