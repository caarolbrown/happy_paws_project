const { getAllPayroll, getOnePayroll, createPayroll, updatePayroll, deletePayroll } = require('../controllers/payroll.controller')
const { checkAuth, checkAdmin } = require('../middleware')

const router = require('express').Router() 

//definimos CRUD basico de payroll
router.get('/', checkAuth, checkAdmin, getAllPayroll) 
router.get('/:id', checkAuth, checkAdmin, getOnePayroll) 
router.post('/', checkAuth, checkAdmin, createPayroll) 
router.put('/:id', checkAuth, checkAdmin, updatePayroll) 
router.delete('/:id', checkAuth, checkAdmin, deletePayroll)  

module.exports = router