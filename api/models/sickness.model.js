const { sequelize } = require('../../database/index')
const { DataTypes } = require('sequelize')

const Sickness = sequelize.define('sickness', {

    name: {
        type: DataTypes.STRING
    },
    infectious: {
        type: DataTypes.ENUM('YES', 'NO')
    }, 
    chronic_disease: {
        type: DataTypes.ENUM('YES', 'NO')
    },
    severity: {
        type: DataTypes.ENUM('LOW', 'MODERATE', 'HIGH')
    }, 
    treatment: {
        type: DataTypes.ENUM('YES', 'NO')
    }
},
{
    timestamps: false
})

module.exports = Sickness