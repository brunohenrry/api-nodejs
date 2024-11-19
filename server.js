const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const routes = require("./routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Conectar ao banco de dados
connectDB();

// Rotas
app.use("/api", routes);

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
