const prisma = require("../db");
const bcrypt = require("bcryptjs");
const userRouter = require("express").Router();

userRouter.post("/", async (req, res) => {
  const { firstName, lastName, password, email, age, address, contact, role } =
    req.body;

  const existedUser = await prisma.user.findUnique({
    where: { email },
  });
  if (existedUser) {
    return res.status(400).json({ err: `User already exists` });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  try {
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        password: passwordHash,
        email,
        age,
        address,
        contact,
        role,
      },
    });
    res
      .status(201)
      .json({ messssage: "User registered successfully", newUser });
  } catch (err) {
    console.log("Error during user registration", err);
    res.status(500).json({ err: `Failed to create user` });
  }
});

userRouter.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    console.log("Error from user api: ", err);
    res.status(500).json({ message: `Internal server error` });
  }
});

//for test api
userRouter.get("/hello", async (req, res) => {
  res.send(`<h1>hello world</h1>`);
});

module.exports = userRouter;
