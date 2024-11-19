module.exports = {
    secret: process.env.JWT_SECRET || "secret123",
    expiresIn: "7d",
  };
  