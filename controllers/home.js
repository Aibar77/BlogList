const homeRouter = require("express").Router();
homeRouter.get("/", (req, res) => {
  res.send("<h1>BlogList App</h1>");
});

module.exports = homeRouter;
