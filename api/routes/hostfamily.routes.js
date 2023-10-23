const { getAllHostFamily, getOneHostFamily, createHostFamily, updateHostFamily, deleteHostFamily} = require('../controllers/hostfamily.controller')
//const { checkAuth, checkAdmin } = require('../middleware')


const router = require('express').Router() //le indicamos que vamos a usar el router de express para que maneje las peticiones

//definimos CRUD basico de host_fam
router.get('/', getAllHostFamily) 
router.get('/:id', getOneHostFamily) 
router.post('/', createHostFamily) 
router.put('/:id', updateHostFamily) 
router.delete('/:id', deleteHostFamily)  

module.exports = router