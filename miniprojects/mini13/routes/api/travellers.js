const { Router } = require("express");

const { Traveller } = require("../../models");

const travellerRouter = new Router();

travellerRouter.get("/", async (req, res) => {
    try {
        const allTravellers = await Traveller.findAll();

        res.status(200).json(allTravellers);
    } catch (e) {
        console.error(e);
        res.status(500).send("bad things");
    }
});

travellerRouter.post('/', async (req, res) => {
    try {
       const traveller = await Traveller.create(req.body);
       res.status(200).json(traveller);
    } catch (e) {
        console.error(e);
        res.status(500).send("bad things");
    }
});

module.exports = travellerRouter;