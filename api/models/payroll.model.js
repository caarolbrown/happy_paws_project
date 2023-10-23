const { sequelize } = require('../../database/index.js') 
const { DataTypes } = require('sequelize')

const Payroll = sequelize.define('payroll', {
        amount: {
            type: DataTypes.INTEGER,
            allowNull: null
        },
        payment_day: {
            type: DataTypes.DATE,
        },
        position: {
            type: DataTypes.STRING,
        }
},
{ 
    timestamps: false, 
})

module.exports = Payroll