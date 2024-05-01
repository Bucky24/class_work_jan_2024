const express = require("express");

const sequelize = require("./config/connection");

const PORT = process.env.PORT | 3001;

const mainRouter = require("./routes");

const app = express();

app.use(express.json());

app.use("/", mainRouter);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
});