const { Router } = require("express");

const movieRoutes = require("./movies");
const reviewRoutes = require("./reviews");

const apiRoutes = new Router();

apiRoutes.use("/movies", movieRoutes);
apiRoutes.use("/reviews", reviewRoutes);

module.exports = apiRoutes;