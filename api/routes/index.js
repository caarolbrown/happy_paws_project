const router = require('express').Router()

//importamos rutas
const animalRouter = require('./animal.router')
const cageRouter = require('./cage.router')
const treatmentRouter = require('./treatment.router')

//definimos rutas
router.use('/animal', animalRouter)
router.use('/cage', cageRouter)
router.use('/treatment', treatmentRouter)

//exportamos modulo
module.exports = router