const { getAllUsers, getOneUser, createUser, updateUser, deleteUser, getProfile } = require('../controllers/user.controller')
//const { checkAuth, checkAdmin } = require('../middleware')


const router = require('express').Router() 


router.get('/', getAllUsers) 
router.get('/getProfile', getProfile)
router.get('/:id', getOneUser) 
router.post('/', createUser) 
router.put('/:id', updateUser) 
router.delete('/:id', deleteUser)  

module.exports = router