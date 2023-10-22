const { sequelize } = require('../../database/index')
const { DataTypes } = require('sequelize')

const Treatment = sequelize.define('treatment', {

    medication_name: {
        type: DataTypes.STRING
    },
    dose: {
        type: DataTypes.STRING
    }, 
    comments: {
        type: DataTypes.STRING
    },
    start_date: {
        type: DataTypes.DATE
    }, 
    end_date: { 
        type: DataTypes.DATE
    }
},
{
    timestamps: false
})

module.exports = Treatment