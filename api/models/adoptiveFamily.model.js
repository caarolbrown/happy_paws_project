const { sequelize } = require('../../database/index.js') 
const { DataTypes } = require('sequelize')

const AdoptiveFamily = sequelize.define('adoptiveFamily', { 

        id_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        interview: {
            type: DataTypes.STRING,
        }
},
{ 
    timestamps: false, 
})

module.exports = AdoptiveFamily