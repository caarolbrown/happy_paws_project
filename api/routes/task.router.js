const { getAllTasks, getOneTask, createTask, updateTask, deleteTask, getAvailability} = require('../controllers/task.controller')
const { checkAuth, checkEmployee, checkVolunteer, checkAdmin } = require('../middleware')


const router = require('express').Router()

//definimos CRUD basico de tasks
router.get('/', checkAuth, checkVolunteer, getAllTasks)
router.get('/availability', checkAuth, checkVolunteer, getAvailability)
router.get('/:id', checkAuth, checkEmployee, getOneTask)
router.post('/', checkAuth, checkAdmin, createTask)
router.put('/:id', checkAuth, checkAdmin, updateTask)
router.delete('/:id', checkAuth, checkAdmin, deleteTask)

module.exports = router