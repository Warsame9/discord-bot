const Sequelize = require('sequelize');
const { sequelizeUSER, sequelizePASSWORD } = require('./config.json');

const sequelize = new Sequelize('discordbot', sequelizeUSER, sequelizePASSWORD, {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
});

require('./models/tictactoe.js')(sequelize, Sequelize.DataTypes);

sequelize.sync().then(async () => {
    console.log('Database synced');
    sequelize.close();
}).catch(console.error);

