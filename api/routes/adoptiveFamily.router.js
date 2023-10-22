const { getAllAdoptiveFamilys, getOneAdoptiveFamily, createAdoptiveFamily, updateAdoptiveFamily, deleteAdoptiveFamily} = require('../controllers/adoptiveFamily.controller')
//const { checkAuth, checkAdmin } = require('../middleware')


const router = require('express').Router() //le indicamos que vamos a usar el router de express para que maneje las peticiones

//crud básico
router.get('/', checkAuth, checkAdmin, getAllAdoptiveFamilys) 
router.get('/:id', checkAuth, checkAdmin, getOneAdoptiveFamily) 
router.post('/', checkAuth, checkAdmin, createAdoptiveFamily) 
router.put('/:id', checkAuth, checkAdmin, updateAdoptiveFamily) 
router.delete('/:id', checkAuth, checkAdmin, deleteAdoptiveFamily)  

module.exports = router