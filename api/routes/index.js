const router = require('express').Router()

//importamos rutas
const animalRouter = require('./animal.router')

//definimos rutas
router.use('/animal', animalRouter)

//exportamos modulo
module.exports = router