const Product = require("../models/Product");

module.exports = {
  async list(req, res) {
    const products = await Product.find();
    res.json(products);
  },

  async create(req, res) {
    try {
      const { name, price, description } = req.body;
      const product = await Product.create({ name, price, description });
      res.status(201).json(product);
    } catch (err) {
      res.status(400).json({ error: "Erro ao criar produto." });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, price, description } = req.body;
      const product = await Product.findByIdAndUpdate(
        id,
        { name, price, description },
        { new: true }
      );
      res.json(product);
    } catch (err) {
      res.status(400).json({ error: "Erro ao atualizar produto." });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Product.findByIdAndDelete(id);
      res.json({ message: "Produto removido com sucesso." });
    } catch (err) {
      res.status(400).json({ error: "Erro ao remover produto." });
    }
  },
};
