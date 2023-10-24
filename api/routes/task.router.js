const { getAllTasks, getOneTask, createTask, updateTask, deleteTask} = require('../controllers/task.controller')
const { checkAuth, checkAdmin, checkEmployee, checkVolunteer} = require('../middleware')
const router = require('express').Router()

//definimos CRUD basico de animal
router.get('/', checkAuth, checkAdmin, checkEmployee, checkVolunteer, getAllTasks)
router.get('/:id', checkAuth, checkAdmin, checkEmployee, checkVolunteer, getOneTask)
router.post('/', checkAuth, checkAdmin, checkEmployee, checkVolunteer, createTask)
router.put('/:id', checkAuth, checkAdmin, checkEmployee, checkVolunteer, updateTask)
router.delete('/:id', checkAuth, checkAdmin, checkEmployee, checkVolunteer, deleteTask)

module.exports = router