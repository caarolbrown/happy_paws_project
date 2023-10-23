const router = require('express').Router()

//importamos rutas
const adoptiveFamily = require('./adoptiveFamily.router')

//definimos rutas
router.use('/adoptiveFamily', adoptiveFamily)

//exportamos modulo
module.exports = router