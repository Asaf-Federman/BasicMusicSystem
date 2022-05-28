const { DataTypes } = require('sequelize');

module.exports = (db) => db.define('collections', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numberOfSongs: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    accountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    indexes: [
        {
            unique: false,
            fields: ['accountId'],
        },
    ],
}, {
    freezeTableName: true,
    tableName: 'collections',
});
