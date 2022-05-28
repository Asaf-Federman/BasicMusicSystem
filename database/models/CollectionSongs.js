// const { DataTypes } = require('sequelize');

module.exports = (db) => db.define('collectionSongs', {}, {
    freezeTableName: true,
    tableName: 'collectionSongs',
});
