require('dotenv').config();
const mysql = require('mysql2/promise');

const config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
};

const createConnection = async () => await mysql.createConnection(config);

module.exports = {
    createConnection
}