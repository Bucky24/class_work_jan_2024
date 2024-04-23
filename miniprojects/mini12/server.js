const express = require("express");

const PORT = 3001;

const apiRouter = require("./api");

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});