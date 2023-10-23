const { sequelize } = require('../../database/index') 
const { DataTypes } = require('sequelize')

const HostFamily = sequelize.define('hostFamily', { 
       
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
},
{ 
    timestamps: false, 
})

module.exports = HostFamily