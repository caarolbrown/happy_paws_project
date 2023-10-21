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
        type: DataTypes.ENUM('Female', 'Male')
    },
    weigth: {
        type: DataTypes.INTEGER
    }, 
    genre: {
        type: DataTypes.BOOLEAN
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