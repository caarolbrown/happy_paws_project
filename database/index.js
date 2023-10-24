const {Sequelize}  = require('sequelize')

require ('dotenv').config()


const sequelize = new Sequelize (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
    logging: false
})

//comprobamos que la conexion con la BD es correcta
async function checkDB(){
    try {
        console.log('Connection to DB successful')
    } catch (error) {
        console.log(error)
    }
}

//sincronizamos modelos
async function syncModels(){
    try {
        await sequelize.sync()
        console.log('Models synchronized')
    } catch (error) {
        console.log(error)
    }
}

//exportamos sequelize y funciones
module.exports = { sequelize, checkDB, syncModels }