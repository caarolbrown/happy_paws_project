const { getAllPayrolls, getOnePayroll, createPayroll, updatePayroll, deletePayroll} = require('../controllers/payroll.controller')
//const { checkAuth, checkAdmin } = require('../middleware')


const router = require('express').Router() //le indicamos que vamos a usar el router de express para que maneje las peticiones

//crud básico
router.get('/', checkAuth, checkAdmin, getAllPayrolls) 
router.get('/:id', checkAuth, checkAdmin, getOnePayroll) 
router.post('/', checkAuth, checkAdmin, createPayroll) 
router.put('/:id', checkAuth, checkAdmin, updatePayroll) 
router.delete('/:id', checkAuth, checkAdmin, deletePayroll)  

module.exports = router