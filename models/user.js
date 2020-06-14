const Sequelize = require('sequelize');
const connection = require('./../config/database');

const user = connection.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = user