const { Router } = require("express");

const mainRouter = new Router();

const apiRouter = require("./api");

mainRouter.use("/api", apiRouter);

module.exports = mainRouter;