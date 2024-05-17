const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const helpers = require('./utils/helpers');

const hbs = handlebars.create({
    helpers,
});

const port = process.env.PORT || 3001;

const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./controllers');

app.use('/', routes);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});