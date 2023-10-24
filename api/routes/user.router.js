const { getAllUsers, getOneUser, createUser, updateUser, deleteUser, getProfile, setTask, getPayroll } = require('../controllers/user.controller')
//const { checkAuth, checkAdmin } = require('../middleware')


const router = require('express').Router() 


router.get('/', getAllUsers) 
router.get('/getProfile', getProfile)
router.get('/:id', getOneUser) 
router.post('/', createUser) 
router.put('/setTask', setTask)
router.put('/:id', updateUser) 
router.delete('/:id', deleteUser)
router.put('/payroll', getPayroll)  

module.exports = router