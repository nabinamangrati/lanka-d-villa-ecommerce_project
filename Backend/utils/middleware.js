const { info, errorLog } = require("./logger");
const requestLogger = (request, response, next) => {
  info("Method:", request.method);
  info("Path:  ", request.path);
  info("Body:  ", request.body);
  info("used api method");
  next();
};

//handle error, absolut url is wrong
const noHandler = (request, response) => {
  response.status(404).send("<h1>No routes found for this request</h1>");
};

//handle error, relative url unknown
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  errorLog(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  } else if (error.name === "ReferenceError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

const isAdmin = (req, res, next) => {
  const { userRole } = req.body;

  if (userRole !== "ADMIN") {
    return res.status(403).json({ error: `Access denied, Admin only` });
  }
  next();
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  noHandler,
  errorHandler,
  isAdmin,
};
