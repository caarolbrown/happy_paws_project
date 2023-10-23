const { getAllAdoptiveFamily, getOneAdoptiveFamily, createAdoptiveFamily, updateAdoptiveFamily, deleteAdoptiveFamily} = require('../controllers/adoptiveFamily.controller')
//const { checkAuth, checkAdmin } = require('../middleware')


const router = require('express').Router() //le indicamos que vamos a usar el router de express para que maneje las peticiones

//crud básico
router.get('/', getAllAdoptiveFamily) 
router.get('/:id', getOneAdoptiveFamily) 
router.post('/', createAdoptiveFamily) 
router.put('/:id', updateAdoptiveFamily) 
router.delete('/:id', deleteAdoptiveFamily)  

module.exports = router