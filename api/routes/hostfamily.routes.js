const { getAllHostFamily, getOneHostFamily, createHostFamily, updateHostFamily, deleteHostFamily} = require('../controllers/hostfamily.controller')
const { checkAuth, checkEmployee, checkVolunteer, checkAdmin } = require('../middleware')


const router = require('express').Router() //le indicamos que vamos a usar el router de express para que maneje las peticiones

//definimos CRUD basico de host_fam
router.get('/', checkAuth, checkEmployee, getAllHostFamily) 
router.get('/:id', checkAuth, checkEmployee, getOneHostFamily) 
router.post('/', checkAuth, checkAdmin, createHostFamily) 
router.put('/:id', checkAuth, checkAdmin, updateHostFamily) 
router.delete('/:id', checkAuth, checkAdmin, deleteHostFamily)  

module.exports = router