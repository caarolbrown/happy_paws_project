const { getAllTasks, getOneTask, createTask, updateTask, deleteTask} = require('../controllers/task.controller')

const router = require('express').Router()

//definimos CRUD basico de animal
router.get('/', getAllTasks)
router.get('/:id', getOneTask)
router.post('/', createTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router