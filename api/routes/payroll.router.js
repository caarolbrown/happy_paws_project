const { getAllPayroll, getOnePayroll, createPayroll, updatePayroll, deletePayroll} = require('../controllers/payroll.controller')
//const { checkAuth, checkAdmin } = require('../middleware')


const router = require('express').Router() //le indicamos que vamos a usar el router de express para que maneje las peticiones

//crud básico
router.get('/', getAllPayroll) 
router.get('/:id', getOnePayroll) 
router.post('/', createPayroll) 
router.put('/:id', updatePayroll) 
router.delete('/:id', deletePayroll)  

module.exports = router