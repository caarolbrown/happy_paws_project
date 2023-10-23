const router = require('express').Router()

//importamos rutas
const animalRouter = require('./animal.router')
const cageRouter = require('./cage.router')
const treatmentRouter = require('./treatment.router')
const sicknessRouter = require('./sickness.router')
const adoptiveFamily = require('./adoptiveFamily.router')
const payroll = require('./payroll.router')
const hostFamily = require('./hostfamily.routes')


//definimos rutas
router.use('/animal', animalRouter)
router.use('/cage', cageRouter)
router.use('/treatment', treatmentRouter)
router.use('/sickness', sicknessRouter)
router.use('/adoptiveFamily', adoptiveFamily)
router.use('/payroll', payroll)
router.use('/hostFamily', hostFamily)
//exportamos modulo
module.exports = router