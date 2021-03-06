const Sequelize = require("sequelize");
const connection = require("./../config/database");

const category = connection.define("category", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = category;