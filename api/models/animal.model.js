const { sequelize } = require('../../database/index')
const { DataTypes } = require('sequelize')

const Animal = sequelize.define('animal', {

    type: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    breed: {
        type: DataTypes.STRING
    },
    weigth: {
        type: DataTypes.INTEGER
    },
    genre: {
        type: DataTypes.ENUM('F', 'M')
    },
    health: {
        type: DataTypes.ENUM('healthy', 'sick'),
        defaultValue: 'healthy'
    },
    entry_date: {
        type: DataTypes.DATE
    },
    exit_date: {
        type: DataTypes.DATE
    }
},
    {
        timestamps: false
    })

module.exports = Animal