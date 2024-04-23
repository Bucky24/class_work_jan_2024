const mysql = require("mysql2");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'changeme',
    database: 'movie_db',
});

module.exports = db;