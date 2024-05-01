const express = require('express');

const app = express();

app.use(express.json());

const routes = require('./routes');

app.use('/', routes);

// /shelter/15/animal/4/asset/19

const db = mysql2.createConnection({...});

db.query('SELECT * FROM animal', (err, results) => {
  console.log(results);
});

app.listen(3001, () => {
  console.log('Example app listening on port 3000!');
});