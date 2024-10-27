const app = require("./server");
const logger = require("./utils/logger");
const { PORT } = require("./utils/config");

app.listen(PORT, () => {
  console.log("server on http://localhost:3001");
  logger.info(`server running on port ${PORT}`);
});
