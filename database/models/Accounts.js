const { DataTypes } = require('sequelize');

module.exports = (db) => db.define('accounts', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    indexes: [
        {
            unique: false,
            fields: ['isActive'],
        },
    ],
}, {
    freezeTableName: true,
    tableName: 'accounts',
});
