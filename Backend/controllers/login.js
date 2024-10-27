const prisma = require("../db");
const bcrypt = require("bcryptjs");
const loginRouter = require("express").Router();

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(400).json({ err: `Invalid email` });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ error: `Invalid password` });
  }
  res.status(200).json({ message: `${user.firstName} loggedin successful` });
});

module.exports = loginRouter;
