const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("this is express");
  res.status(200);
  res.json({ message: "hello world" });
});

module.exports = app;
