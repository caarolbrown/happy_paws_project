const { sequelize } = require('../../database/index.js') 
const { DataTypes } = require('sequelize')

const Payroll = sequelize.define('payroll', { 

        id_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
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
