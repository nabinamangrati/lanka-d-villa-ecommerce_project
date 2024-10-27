const express = require("express");
const app = express();
const middleware = require("./utils/middleware");
const userRouter = require("./controllers/user");
const loginRouter = require("./controllers/login");
const menuTypeRouter = require("./controllers/menuType");

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use(middleware.requestLogger);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/menu-type", menuTypeRouter);

app.use(middleware.noHandler);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
