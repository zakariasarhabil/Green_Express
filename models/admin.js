const Sequelize = require('sequelize');
const connection = require('./../config/database');

const admin = connection.define('admin', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: true
    },

});

module.exports = admin