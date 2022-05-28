const { DataTypes } = require('sequelize');

module.exports = (db) => db.define('songs', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    duration: {
        type: DataTypes.TIME,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    tableName: 'songs',
});
