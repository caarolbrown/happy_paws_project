const { getAllAdoptiveFamily, getOneAdoptiveFamily, createAdoptiveFamily, updateAdoptiveFamily, deleteAdoptiveFamily} = require('../controllers/adoptiveFamily.controller')
const { checkAuth, checkAdmin, checkEmployee } = require('../middleware')


const router = require('express').Router() //le indicamos que vamos a usar el router de express para que maneje las peticiones

///definimos CRUD basico de adoptive_fam
router.get('/', checkAuth, checkEmployee, getAllAdoptiveFamily) 
router.get('/:id', checkAuth, checkEmployee, getOneAdoptiveFamily) 
router.post('/', checkAuth, checkAdmin, createAdoptiveFamily) 
router.put('/:id', checkAuth, checkAdmin, updateAdoptiveFamily) 
router.delete('/:id', checkAuth, checkAdmin, deleteAdoptiveFamily)  

module.exports = router