const { sequelize } = require('../../database/index.js')
const { DataTypes } = require('sequelize')

const Task = sequelize.define('task', {

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    availability: {
        type: DataTypes.ENUM('mañanas', 'todos los días', 'fines de semana', 'entre semana', 'tardes'),
        allowNull: false
    }
},
    {
        timestamps: false,
    })

module.exports = Task