const { sequelize } = require('../../database/index.js')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
    },
    role: {
        type: DataTypes.ENUM('user', 'employee', 'volunteer', 'admin'),
        defaultValue: 'user'
    }
},
    {
        timestamps: false,
    })

module.exports = User