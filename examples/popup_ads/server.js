const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get('/popup', (req, res) => {
    res.status(200).send("cool ad here");
});

app.listen(PORT, () => {
    console.log(`Connected to ${PORT}`);
});