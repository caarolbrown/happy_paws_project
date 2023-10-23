const router = require('express').Router()

//importamos rutas
const payroll = require('./payroll.router')

//definimos rutas
router.use('/payroll', payroll)

//exportamos modulo
module.exports = router