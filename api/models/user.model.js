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
            type: DataTypes.STRING,
            defaultValue: "user"
        }
},
{ 
    timestamps: false, 
})

module.exports = User