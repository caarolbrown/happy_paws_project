const { getAllUsers, getOneUser, createUser, updateUser, deleteUser, getProfile, setTask } = require('../controllers/user.controller')
//const { checkAuth, checkAdmin } = require('../middleware')


const router = require('express').Router() 

//definimos CRUD basico de user
router.get('/', getAllUsers) 
router.get('/getProfile', getProfile)
router.get('/:id', getOneUser) 
router.post('/', createUser) 
router.put('/task', setTask)
router.put('/:id', updateUser) 
router.delete('/:id', deleteUser)  

module.exports = router