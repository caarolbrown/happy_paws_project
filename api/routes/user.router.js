const { getAllUsers, getOneUser, createUser, updateUser, deleteUser, getProfile, setTask, getPayroll } = require('../controllers/user.controller')
const { checkAuth, checkAdmin } = require('../middleware')


const router = require('express').Router() 


router.get('/', checkAuth, checkAdmin, getAllUsers) 
router.get('/:id', checkAuth, checkAdmin, getOneUser) 
router.post('/', checkAuth, checkAdmin, createUser) 
router.put('/task', checkAuth, checkAdmin, setTask)
router.put('/:id', checkAuth, checkAdmin, updateUser) 
router.delete('/:id', checkAuth, checkAdmin, deleteUser)
router.put('/payroll', checkAuth, checkAdmin, getPayroll)  

module.exports = router