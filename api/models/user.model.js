const { sequelize } = require('../../database/index.js') //importamos la instancia de sequilize creada en la carpeta database
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', { // definimos las columnas de nuestra tabla

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
{ //opciones
    timestamps: false, // evita que nos cree las columnas updateAt y createAt
})

module.exports = User