const { getAllUsers, getOneUser, createUser, updateUser, deleteUser, getProfile } = require('../controllers/user.controller')
//const { checkAuth, checkAdmin } = require('../middleware')


const router = require('express').Router() 


router.get('/', checkAuth, checkAdmin, getAllUsers) 
router.get('/getProfile', checkAuth, getProfile)
router.get('/:id', checkAuth, checkAdmin, getOneUser) 
router.post('/', checkAuth, checkAdmin, createUser) 
router.put('/:id', checkAuth, checkAdmin, updateUser) 
router.delete('/:id', checkAuth, checkAdmin, deleteUser)  

module.exports = router