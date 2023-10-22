const router = require('express').Router()

//importamos rutas
const userRouter = require('./user.router')
const taskRouter = require('./task.router')

//definimos rutas
router.use('/user', userRouter)
router.use('/task', taskRouter)

//exportamos modulo
module.exports = router