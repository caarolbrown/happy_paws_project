const { getAllTasks, getOneTask, createTask, updateTask, deleteTask, getAvailability} = require('../controllers/task.controller')

const router = require('express').Router()

//definimos CRUD basico de tasks
router.get('/', getAllTasks)
router.get('/availability', getAvailability)
router.get('/:id', getOneTask)
router.post('/', createTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)


module.exports = router