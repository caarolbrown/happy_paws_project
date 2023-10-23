const router = require('express').Router()

//importamos rutas
const userRouter = require('./user.router')
const taskRouter = require('./task.router')
const treatmentRouter = require('./treatment.router')
const sicknessRouter = require('./sickness.router')
const animalRouter = require('./animal.router')
const cageRouter = require('./cage.router')
//definimos rutas
router.use('/animal', animalRouter)
router.use('/cage', cageRouter)

//exportamos modulo
module.exports = router