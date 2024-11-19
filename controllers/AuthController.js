const User = require("../models/User");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = await User.create({ name, email, password });
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: "Erro ao registrar usuário." });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ error: "Credenciais inválidas." });
      }

      const token = jwt.sign({ id: user._id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      });

      res.json({ user, token });
    } catch (err) {
      res.status(500).json({ error: "Erro ao fazer login." });
    }
  },
};
