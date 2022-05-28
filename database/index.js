const { Sequelize } = require('sequelize');

const { isEmpty } = require('lodash');
const accountsModel = require('./models/Accounts');
const collectionsModel = require('./models/Collections');
const songsModel = require('./models/Songs');
const collectionSongsModel = require('./models/CollectionSongs');

const databaseName = process.env.DATABASE_DB;
const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const dialect = process.env.DATABASE_TYPE;
const host = process.env.DATABASE_HOST;

if (isEmpty(databaseName)) throw new Error('Please provide DATABASE_DB');
if (isEmpty(username)) throw new Error('Please provide DATABASE_USER');
if (isEmpty(password)) throw new Error('Please provide DATABASE_PASSWORD');
if (isEmpty(dialect)) throw new Error('Please provide DATABASE_TYPE');
if (isEmpty(host)) throw new Error('Please provide DATABASE_HOST');

const sequelize = new Sequelize(databaseName, username, password, {
    host,
    dialect,
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.log('Unable to connect to the database:', err.message || err);
    });

const models = {};
models.accounts = accountsModel(sequelize);
models.collections = collectionsModel(sequelize);
models.songs = songsModel(sequelize);
models.collectionSongs = collectionSongsModel(sequelize);
models.accounts.hasMany(models.collections);
models.collections.belongsTo(models.accounts);
models.collections.belongsToMany(models.songs, { through: 'collectionSongs' });
models.songs.belongsToMany(models.collections, { through: 'collectionSongs' });

module.exports = {
    sequelize,
    models,
};
