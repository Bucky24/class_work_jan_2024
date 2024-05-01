const { Router } = require("express");

const apiRouter = new Router();

const travellerRouter = require("./travellers");

apiRouter.use("/traveller", travellerRouter);

module.exports = apiRouter;