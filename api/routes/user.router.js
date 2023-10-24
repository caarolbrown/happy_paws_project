const { getAllUsers, getOneUser, createUser, updateUser, deleteUser, getProfile, setTask } = require('../controllers/user.controller')
const { checkAuth, checkAdmin } = require('../middleware')


const router = require('express').Router() 

//definimos CRUD basico de user
router.get('/', checkAuth, checkAdmin, getAllUsers) 
router.get('/getProfile', checkAuth, checkAdmin, getProfile)
router.get('/:id', checkAuth, checkAdmin, getOneUser) 
router.post('/', checkAuth, checkAdmin, createUser) 
router.put('/task', checkAuth, checkAdmin, setTask)
router.put('/:id', checkAuth, checkAdmin, updateUser) 
router.delete('/:id', checkAuth, checkAdmin, deleteUser)  

module.exports = router