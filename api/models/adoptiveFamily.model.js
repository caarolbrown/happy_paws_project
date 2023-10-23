const { sequelize } = require('../../database/index') 
const { DataTypes } = require('sequelize')

const AdoptiveFamily = sequelize.define('adoptiveFamily', { 
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