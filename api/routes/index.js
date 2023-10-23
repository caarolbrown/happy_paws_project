const router = require('express').Router()

//importamos rutas
const hostFamily = require('./hostfamily.routes')

//definimos rutas
router.use('/hostFamily', hostFamily)

//exportamos modulo
module.exports = router