const { getAllhostFamilys, getOnehostFamily, createhostFamily, updatehostFamily, deletehostFamily} = require('../controllers/hostFamily.controller')
//const { checkAuth, checkAdmin } = require('../middleware')


const router = require('express').Router() //le indicamos que vamos a usar el router de express para que maneje las peticiones

//crud básico
router.get('/', checkAuth, checkAdmin, getAllhostFamilys) 
router.get('/:id', checkAuth, checkAdmin, getOnehostFamily) 
router.post('/', checkAuth, checkAdmin, createhostFamily) 
router.put('/:id', checkAuth, checkAdmin, updatehostFamily) 
router.delete('/:id', checkAuth, checkAdmin, deletehostFamily)  

module.exports = router