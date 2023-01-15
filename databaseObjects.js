const Sequelize = require('sequelize');
const { sequelizeUSER, sequelizePASSWORD } = require('./config.json');

const sequelize = new Sequelize('discordbot', sequelizeUSER , sequelizePASSWORD, {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
});

const TicTacToe = require('./models/tictactoe.js')(sequelize, Sequelize.DataTypes);

module.exports = {
    TicTacToe
};