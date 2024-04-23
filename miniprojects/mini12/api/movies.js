const { Router } = require("express");
const db = require("../db");

const movieRoutes = new Router();

movieRoutes.get("/", (req, res) => {
    db.query("select * from movies", (err, result) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.status(200).json(result);
        }
    });
});

movieRoutes.post("/", (req, res) => {
    const { name, category } = req.body;

    db.query("insert into movies (name, category) values (?, ?)", [name, category], (err, result) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.status(200).json({
                id: result.insertId,
            });
        }
    });
});

// DELETE /api/movie/4
movieRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;

    db.query("delete from movies where id = ?", id, (err, result) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.status(200).json({});
        }
    });
})

module.exports = movieRoutes;