const { getAllAdoptiveFamily, getOneAdoptiveFamily, createAdoptiveFamily, updateAdoptiveFamily, deleteAdoptiveFamily} = require('../controllers/adoptiveFamily.controller')
const { checkAuth, checkAdmin, checkEmployee } = require('../middleware')


const router = require('express').Router() //le indicamos que vamos a usar el router de express para que maneje las peticiones

//crud básico
router.get('/', checkAuth, checkAdmin, checkEmployee, getAllAdoptiveFamily) 
router.get('/:id', checkAuth, checkAdmin, checkEmployee, getOneAdoptiveFamily) 
router.post('/', checkAuth, checkAdmin, checkEmployee, createAdoptiveFamily) 
router.put('/:id', checkAuth, checkAdmin, checkEmployee, updateAdoptiveFamily) 
router.delete('/:id', checkAuth, checkAdmin, checkEmployee, deleteAdoptiveFamily)  

module.exports = router