require('dotenv').config();
const Sequelize = require('sequelize');

const myNewConnection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: 3306,
    },
);

module.exports = myNewConnection;