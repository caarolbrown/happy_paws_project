const { sequelize } = require('../../database/index')
const { DataTypes } = require('sequelize')

const Cage = sequelize.define('cage', {

    location: {
        type: DataTypes.STRING
    },
    size: {
        type: DataTypes.STRING
    },
    availability: {
        type: DataTypes.STRING
    }, 
},
{
    timestamps: false
})

module.exports = Cage