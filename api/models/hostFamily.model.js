const { sequelize } = require('../../database/index.js') 
const { DataTypes } = require('sequelize')

const HostFamily = sequelize.define('hostFamily', { 

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
        }
},
{ 
    timestamps: false, 
})

module.exports = HostFamily