const router = require('express').Router()

//importamos rutas
const animalRouter = require('./animal.router')
const cageRouter = require('./cage.router')

//definimos rutas
router.use('/animal', animalRouter)
router.use('/cage', cageRouter)

//exportamos modulo
module.exports = router