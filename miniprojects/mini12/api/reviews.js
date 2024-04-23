const { Router } = require("express");
const db = require("../db");

const reviewRoutes = new Router();

reviewRoutes.get("/", (req, res) => {
    db.query("select * from reviews join movies on movie_id = movies.id", (err, result) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.status(200).json(result);
        }
    });
});

module.exports = reviewRoutes;