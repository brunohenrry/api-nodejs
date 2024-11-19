const express = require("express");
const AuthController = require("../controllers/AuthController");
const ProductController = require("../controllers/ProductController");

const router = express.Router();

// Rotas de autenticação
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

// Rotas de produtos
router.get("/products", ProductController.list);
router.post("/products", ProductController.create);
router.put("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.delete);

module.exports = router;
