const { sequelize } = require('../../database/index.js') 
const { DataTypes } = require('sequelize')

const Task = sequelize.define('task', { 

        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        availability: {
            type: DataTypes.STRING,
            allowNull: false
        }
},
{ 
    timestamps: false, 
})

module.exports = Task