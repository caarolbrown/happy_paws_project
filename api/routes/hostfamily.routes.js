const { getAllHostFamily, getOneHostFamily, createHostFamily, updateHostFamily, deleteHostFamily} = require('../controllers/hostfamily.controller')
const { checkAuth, checkAdmin, checkEmployee } = require('../middleware')


const router = require('express').Router() //le indicamos que vamos a usar el router de express para que maneje las peticiones

//crud básico
router.get('/', checkAuth, checkAdmin, checkEmployee, getAllHostFamily) 
router.get('/:id', checkAuth, checkAdmin, checkEmployee, getOneHostFamily) 
router.post('/', checkAuth, checkAdmin, checkEmployee, createHostFamily) 
router.put('/:id', checkAuth, checkAdmin, checkEmployee, updateHostFamily) 
router.delete('/:id', checkAuth, checkAdmin, checkEmployee, deleteHostFamily)  

module.exports = router