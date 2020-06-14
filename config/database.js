const Sequelize = require('sequelize');

const connection = new Sequelize('green_dev', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
});

module.exports = connection;